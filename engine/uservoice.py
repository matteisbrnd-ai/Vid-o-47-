"""Use the creator's own recorded voice instead of Henri.
usage: python3 engine/uservoice.py episodes/<slug> <recording.(m4a|mp3|wav)>
- Transcribes the recording (faster-whisper small, French, word timings) -> <ep>/asr.json
- Finds each beat of beats.py in the transcript (fuzzy match on the spoken text; when a line was read twice,
  e.g. after « je recommence », the best/last full take wins), cuts it out, cleans the sound
  (high-pass, de-noise, compression), adds the beat's pause, and writes <ep>/vo.wav + <ep>/timeline.js
  exactly like voice.py, so render.cjs / mix.py / build.sh work unchanged.
Needs network access to huggingface.co and *.hf.co the first time (model download).
"""
import difflib, json, os, re, subprocess, sys, unicodedata, wave
import numpy as np

D, SRC = sys.argv[1], sys.argv[2]
ns = {'os': os, 'HERE': D}; exec(open(os.path.join(D, 'beats.py')).read(), ns)
BEATS = ns['BEATS']; TEMPO = ns.get('USER_TEMPO', 1.05); SR = 44100

def ff(args): return subprocess.run(['ffmpeg', '-loglevel', 'error', '-y'] + args, check=True, capture_output=True).stdout
# clean + slightly faster master at 44.1 kHz, and a 16 kHz copy for recognition
clean = os.path.join(D, 'user_clean.wav')
ff(['-i', SRC, '-ac', '1', '-ar', str(SR), '-af', f'highpass=f=80,afftdn=nf=-25,acompressor=threshold=-20dB:ratio=3:attack=5:release=80,atempo={TEMPO}', clean])
raw16 = ff(['-i', clean, '-ac', '1', '-ar', '16000', '-f', 's16le', '-'])
a16 = np.frombuffer(raw16, np.int16).astype(np.float32) / 32768

asr_path = os.path.join(D, 'asr.json')
if not os.path.exists(asr_path) or os.path.getmtime(asr_path) < os.path.getmtime(SRC):
    from faster_whisper import WhisperModel
    m = WhisperModel('small', device='cpu', compute_type='int8')
    segs, _ = m.transcribe(a16, language='fr', word_timestamps=True)
    words = [{'w': w.word.strip(), 't0': w.start, 't1': w.end} for s in segs for w in s.words]
    json.dump(words, open(asr_path, 'w'), ensure_ascii=False)
W = json.load(open(asr_path))

def norm(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = s.replace('quarante-sept', '47').replace('quarante sept', '47')
    return [t for t in re.split(r"[^a-z0-9]+", s) if t]
wt = [norm(w['w']) for w in W]; flat = [(i, t) for i, ts in enumerate(wt) for t in ts]
toks = [t for _, t in flat]; owner = [i for i, _ in flat]

audio = np.frombuffer(ff(['-i', clean, '-f', 's16le', '-']), np.int16).astype(np.float32) / 32768
parts, beats, t, ptr = [np.zeros(int(SR * 0.02), np.float32)], [], 0.02, 0
for b in BEATS:
    bid, show, spoken, pause = b[0], b[1], b[2], b[3]
    target = norm(spoken); L = len(target); best = (0, None)
    for s in range(ptr, len(toks)):
        for n in range(max(1, int(L * 0.7)), int(L * 1.3) + 2):
            if s + n > len(toks): break
            r = difflib.SequenceMatcher(None, ' '.join(target), ' '.join(toks[s:s + n])).ratio()  # character-level: tolerant to ASR slips (garde/gardes)
            if r >= best[0] - 1e-9 and r > 0: best = (r, (s, s + n)) if r > best[0] + 0.02 or best[1] is None or s >= best[1][0] else best
    if best[1] is None or best[0] < 0.45:
        print(f'!! beat {bid} not found in the recording (score {best[0]:.2f})'); sys.exit(1)
    s, e = best[1]; i0, i1 = owner[s], owner[e - 1]; ptr = e
    a0 = max(0, W[i0]['t0'] - 0.07); a1 = W[i1]['t1'] + 0.12
    if i1 + 1 < len(W): a1 = min(a1, (W[i1]['t1'] + W[i1 + 1]['t0']) / 2 + 0.05)
    seg = audio[int(a0 * SR):int(a1 * SR)].copy(); f = min(len(seg) // 2, int(0.012 * SR))
    if f: seg[:f] *= np.linspace(0, 1, f); seg[-f:] *= np.linspace(1, 0, f)
    dur = len(seg) / SR
    beats.append({'id': bid, 'show': show, 'spoken': spoken, 'start': round(t, 3), 'end': round(t + dur, 3), 'score': round(best[0], 2),
                  'words': [{'w': W[i]['w'], 't0': round(t + W[i]['t0'] - a0, 3), 't1': round(t + W[i]['t1'] - a0, 3)} for i in range(i0, i1 + 1)]})
    parts += [seg, np.zeros(int(SR * pause), np.float32)]; t += dur + pause
for i, b in enumerate(beats): b['next'] = beats[i + 1]['start'] if i + 1 < len(beats) else round(t, 3)
vo = np.concatenate(parts); vo = vo / (np.max(np.abs(vo)) + 1e-9) * 0.9
with wave.open(os.path.join(D, 'vo.wav'), 'wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((vo * 32767).astype(np.int16).tobytes())
open(os.path.join(D, 'timeline.js'), 'w').write('window.TL = ' + json.dumps({'beats': beats, 'total': round(t, 3)}, ensure_ascii=False) + ';\n')
print('TOTAL', round(t, 2), 's —', ' '.join(f"{b['id']}@{b['start']:.1f}({b['score']})" for b in beats))
