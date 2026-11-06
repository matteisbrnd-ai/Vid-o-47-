"""Voice: Henri (Microsoft neural TTS) line by line, with per-line emotion and word timings.
usage: python3 engine/voice.py episodes/<slug>
Reads episodes/<slug>/beats.py (BEATS list, optional PROS dict) and writes:
  vo.wav (mono 44.1 kHz), timeline.js (window.TL with beats + word timings)
Each BEATS entry: (id, shown_text, spoken_text, pause_after_seconds)
PROS: {id: (rate, pitch, volume)} e.g. ('+10%', '+8Hz', '+0%'). Default ('+25%', '+12Hz', '+0%').
"""
import asyncio, json, os, re, subprocess, sys, wave
import numpy as np
import edge_tts

D = sys.argv[1]
ns = {'os': os, 'HERE': D}
exec(open(os.path.join(D, 'beats.py')).read(), ns)
BEATS, PROS = ns['BEATS'], ns.get('PROS', {})
VOICE = ns.get('VOICE', 'fr-FR-HenriNeural')
DEF = ns.get('DEFAULT_PROS', ('+18%', '+10Hz', '+0%'))
NATURAL = ns.get('NATURAL', True)
# Emotion presets (Henri can't truly act, so emotion = speed, pitch, loudness and pauses). Use as 5th BEATS field or EMO={id: name}.
EMOTIONS = {
  'mystere':  (('+2%', '-8Hz', '-8%'), 1.5),   # slow, low, quiet, long pauses — hooks, suspense
  'menace':   (('-2%', '-12Hz', '+0%'), 1.4),  # low and heavy — threats, verdicts
  'tension':  (('+8%', '-2Hz', '+0%'), 1.3),
  'neutre':   (('+18%', '+8Hz', '+0%'), 1.0),  # storytelling
  'complice': (('+16%', '+14Hz', '+0%'), 1.1), # talking to the viewer
  'question': (('+14%', '+18Hz', '+0%'), 1.2),
  'excite':   (('+28%', '+20Hz', '+10%'), 0.7),# idea, enthusiasm
  'choc':     (('+10%', '+24Hz', '+12%'), 0.8),# surprise
  'amuse':    (('+20%', '+16Hz', '+0%'), 0.9),
}
EMO = ns.get('EMO', {})  # phrase-by-phrase delivery, varied intonation, breaths, warm room tone
SR = 44100
LEAD = 0.02
cache = os.path.join(D, 'vo'); os.makedirs(cache, exist_ok=True)


async def tts(bid, text, pros):
    mp3, js = os.path.join(cache, bid + '.mp3'), os.path.join(cache, bid + '.json')
    key = json.dumps([text, pros, VOICE])
    bid = bid + '_' + str(abs(hash(key)) % 10**8)
    mp3, js = os.path.join(cache, bid + '.mp3'), os.path.join(cache, bid + '.json')
    if os.path.exists(js) and json.load(open(js)).get('key') == key:
        return mp3, json.load(open(js))['words']
    c = edge_tts.Communicate(text, VOICE, rate=pros[0], pitch=pros[1], volume=pros[2], boundary='WordBoundary', proxy=os.environ.get('HTTPS_PROXY'))
    words = []
    with open(mp3, 'wb') as f:
        async for ch in c.stream():
            if ch['type'] == 'audio':
                f.write(ch['data'])
            elif ch['type'] == 'WordBoundary':
                words.append({'w': ch['text'], 't0': ch['offset'] / 1e7, 't1': (ch['offset'] + ch['duration']) / 1e7})
    json.dump({'key': key, 'words': words}, open(js, 'w'))
    return mp3, words


def load(mp3):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', mp3, '-ac', '1', '-ar', str(SR), '-f', 's16le', '-'], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768


def shift(p, dr, dp):
    r = int(p[0].rstrip('%')) + dr; q = int(p[1].rstrip('Hz')) + dp
    return (f'{r:+d}%', f'{q:+d}Hz', p[2])

def phrases(text):
    # split after . ? ! … : ; (keep the mark), never inside words
    out, cur = [], ''
    for tok in re.split(r'(\.\.\.|…|[.?!:;])', text):
        cur += tok
        if tok in ('.', '?', '!', ':', ';', '...', '…'): out.append(cur.strip()); cur = ''
    if cur.strip(): out.append(cur.strip())
    return [p for p in out if re.search(r'\w', p)] or [text]

GAP = {'?': 0.22, '!': 0.2, '.': 0.2, '…': 0.38, '...': 0.38, ':': 0.12, ';': 0.15}
rng = np.random.default_rng(3)
def breath():
    n = int(SR * 0.22); b = rng.standard_normal(n).astype(np.float32)
    b = np.convolve(b, np.ones(40) / 40, 'same'); env = np.sin(np.pi * np.arange(n) / n) ** 2
    return (b * env * 0.025).astype(np.float32)

def trim(a):
    nz = np.where(np.abs(a) > 0.01)[0]
    s0 = max(0, nz[0] - int(0.03 * SR)) if len(nz) else 0
    s1 = min(len(a), nz[-1] + int(0.06 * SR)) if len(nz) else len(a)
    return a[s0:s1], s0 / SR

async def main():
    parts, beats, t = [], [], LEAD
    parts.append(np.zeros(int(SR * LEAD), np.float32))
    for b in BEATS:
        bid, show, spoken, pause = b[0], b[1], b[2], b[3]
        emo = b[4] if len(b) > 4 else EMO.get(bid)
        base = PROS.get(bid, EMOTIONS[emo][0] if emo in EMOTIONS else DEF); gapk = EMOTIONS[emo][1] if emo in EMOTIONS else 1.0
        start = t; words_all = []
        ph = phrases(spoken) if NATURAL else [spoken]
        for k, p in enumerate(ph):
            pr = base
            if NATURAL and len(ph) > 1:  # vary delivery a little from phrase to phrase, lift questions
                pr = shift(base, [0, -4, 3, -2][k % 4], [0, -3, 2, -1][k % 4] + (4 if p.endswith('?') else 0))
            mp3, words = await tts(bid, p, pr)
            a, off = trim(load(mp3))
            words_all += [{'w': w['w'], 't0': round(t + max(0, w['t0'] - off), 3), 't1': round(t + max(0, w['t1'] - off), 3)} for w in words]
            parts.append(a); t += len(a) / SR
            if k < len(ph) - 1:
                mark = next((m for m in ('...', '…', '?', '!', '.', ':', ';') if p.endswith(m)), '.')
                g = GAP.get(mark, 0.15) * gapk + float(rng.uniform(-0.03, 0.04))
                if NATURAL and g >= 0.3 and k % 2 == 1:
                    br = breath(); parts.append(np.zeros(int(SR * (g - 0.22) / 2), np.float32)); parts.append(br); parts.append(np.zeros(int(SR * (g - 0.22) / 2), np.float32))
                else: parts.append(np.zeros(int(SR * g), np.float32))
                t += g
        beats.append({'id': bid, 'show': show, 'spoken': spoken, 'start': round(start, 3), 'end': round(t, 3), 'words': words_all})
        parts.append(np.zeros(int(SR * pause), np.float32)); t += pause
    for i, b in enumerate(beats):
        b['next'] = beats[i + 1]['start'] if i + 1 < len(beats) else round(t, 3)
    vo = np.concatenate(parts); vo = vo / (np.max(np.abs(vo)) + 1e-9) * 0.9
    dry = os.path.join(D, 'vo_dry.wav')
    with wave.open(dry, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((vo * 32767).astype(np.int16).tobytes())
    chain = 'equalizer=f=170:t=q:w=1:g=2.5,equalizer=f=3200:t=q:w=1.5:g=1.5,equalizer=f=7500:t=q:w=2:g=-3,acompressor=threshold=-18dB:ratio=2.5:attack=8:release=120,aecho=0.9:0.5:16|29:0.07|0.04' if NATURAL else 'anull'
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', dry, '-af', chain, '-ar', str(SR), '-ac', '1', os.path.join(D, 'vo.wav')], check=True)
    tl = {'beats': beats, 'total': round(t, 3)}
    open(os.path.join(D, 'timeline.js'), 'w').write('window.TL = ' + json.dumps(tl, ensure_ascii=False) + ';\n')
    print('TOTAL', round(t, 2), 's —', ' '.join(f"{b['id']}@{b['start']:.1f}" for b in beats))

asyncio.run(main())
