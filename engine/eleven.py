"""ElevenLabs voice (default: « Voix Nicolas Petit », model eleven_v4) -> vo.wav + timeline.js, same format as voice.py.
usage: python3 engine/eleven.py episodes/<slug>
Key: env ELEVEN_KEY or ~/.elevenlabs_key (NEVER commit it: the repo is public).
Each beat is one request with an emotion tag from EMO; audio is cached in <ep>/vo/ so rebuilding costs no credits.
beats.py may set ELEVEN_VOICE (voice id) and ELEVEN_SPEED (0.7–1.2, default 1.08)."""
import base64, hashlib, json, os, re, subprocess, sys, urllib.request, wave
import numpy as np
D = sys.argv[1]; ns = {'os': os, 'HERE': D}; exec(open(os.path.join(D, 'beats.py')).read(), ns)
BEATS, EMO = ns['BEATS'], ns.get('EMO', {})
VOICE = ns.get('ELEVEN_VOICE', 'aQROLel5sQbj1vuIVi6B'); MODEL = ns.get('ELEVEN_MODEL', 'eleven_v4'); SPEED = ns.get('ELEVEN_SPEED', 1.08); TEMPO = ns.get('TEMPO', 1.12)  # TEMPO: free local speed-up (pitch kept) for a punchier delivery
KEY = os.environ.get('ELEVEN_KEY') or open(os.path.expanduser('~/.elevenlabs_key')).read().strip()
TAG = {'mystere': '[mysterious]', 'menace': '[serious]', 'tension': '[tense]', 'neutre': '', 'complice': '[playful]', 'question': '[curious]',
       'excite': '[excited]', 'choc': '[surprised]', 'amuse': '[amused]'}
SR = 44100; LEAD = 0.02; os.makedirs(os.path.join(D, 'vo'), exist_ok=True)
def tts(text, TEMPO=TEMPO):
    body = {'text': text, 'model_id': MODEL, 'voice_settings': {'speed': SPEED, 'stability': 0.4, 'similarity_boost': 0.8, 'style': 0.4}}
    h = hashlib.md5(json.dumps([VOICE, body], sort_keys=True).encode()).hexdigest()[:12]; f = os.path.join(D, 'vo', f'el_{h}.json')
    if not os.path.exists(f):
        req = urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps?output_format=mp3_44100_128',
                                     data=json.dumps(body).encode(), headers={'xi-api-key': KEY, 'Content-Type': 'application/json'})
        open(f, 'w').write(urllib.request.urlopen(req, timeout=120).read().decode())
    r = json.load(open(f)); mp3 = f[:-5] + '.mp3'; open(mp3, 'wb').write(base64.b64decode(r['audio_base64']))
    a = np.frombuffer(subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', mp3, '-af', f'atempo={TEMPO}', '-ac', '1', '-ar', str(SR), '-f', 's16le', '-'], capture_output=True).stdout, np.int16).astype(np.float32) / 32768
    al = r.get('normalized_alignment') or r['alignment']; ch, st, en = al['characters'], al['character_start_times_seconds'], al['character_end_times_seconds']
    words, cur, depth = [], None, 0
    for c, s, e in zip(ch, st, en):
        if c == '[': depth += 1; continue
        if c == ']': depth -= 1; continue
        if depth: continue
        if c.isspace():
            if cur: words.append(cur); cur = None
            continue
        s, e = s / TEMPO, e / TEMPO
        if cur is None: cur = {'w': '', 't0': s, 't1': e}
        cur['w'] += c; cur['t1'] = e
    if cur: words.append(cur)
    words = [w for w in words if re.search(r'\w', w['w'])]
    return a, words
def trim(a):  # cut leading/trailing silence, keep a little air
    idx = np.where(np.abs(a) > 0.01)[0]
    if not len(idx): return a, 0.0
    i0 = max(0, idx[0] - int(SR * 0.03)); i1 = min(len(a), idx[-1] + int(SR * 0.08)); return a[i0:i1], i0 / SR
parts, beats, t = [np.zeros(int(SR * LEAD), np.float32)], [], LEAD
for b in BEATS:
    bid, show, spoken, pause = b[0], b[1], b[2], b[3]; emo = b[4] if len(b) > 4 else EMO.get(bid)
    a, words = tts((TAG.get(emo, '') + ' ' + spoken).strip(), ns.get('TEMPO_BEAT', {}).get(bid, TEMPO)); a, off = trim(a)
    ws = [{'w': w['w'], 't0': round(t + max(0, w['t0'] - off), 3), 't1': round(t + max(0, w['t1'] - off), 3)} for w in words]
    beats.append({'id': bid, 'show': show, 'spoken': spoken, 'start': round(t, 3), 'end': round(t + len(a) / SR, 3), 'words': ws})
    parts.append(a); t += len(a) / SR; parts.append(np.zeros(int(SR * pause), np.float32)); t += pause
for i, b in enumerate(beats): b['next'] = beats[i + 1]['start'] if i + 1 < len(beats) else round(t, 3)
vo = np.concatenate(parts); vo = vo / (np.max(np.abs(vo)) + 1e-9) * 0.9
with wave.open(os.path.join(D, 'vo.wav'), 'wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((vo * 32767).astype(np.int16).tobytes())
open(os.path.join(D, 'timeline.js'), 'w').write('window.TL = ' + json.dumps({'beats': beats, 'total': round(t, 3)}, ensure_ascii=False) + ';\n')
print('TOTAL', round(t, 2), 's —', ' '.join(f"{b['id']}@{b['start']:.1f}" for b in beats))
