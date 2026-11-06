"""Voice: Henri (Microsoft neural TTS) line by line, with per-line emotion and word timings.
usage: python3 engine/voice.py episodes/<slug>
Reads episodes/<slug>/beats.py (BEATS list, optional PROS dict) and writes:
  vo.wav (mono 44.1 kHz), timeline.js (window.TL with beats + word timings)
Each BEATS entry: (id, shown_text, spoken_text, pause_after_seconds)
PROS: {id: (rate, pitch, volume)} e.g. ('+10%', '+8Hz', '+0%'). Default ('+25%', '+12Hz', '+0%').
"""
import asyncio, json, os, subprocess, sys, wave
import numpy as np
import edge_tts

D = sys.argv[1]
ns = {'os': os, 'HERE': D}
exec(open(os.path.join(D, 'beats.py')).read(), ns)
BEATS, PROS = ns['BEATS'], ns.get('PROS', {})
VOICE = ns.get('VOICE', 'fr-FR-HenriNeural')
DEF = ns.get('DEFAULT_PROS', ('+25%', '+12Hz', '+0%'))
SR = 44100
LEAD = 0.02
cache = os.path.join(D, 'vo'); os.makedirs(cache, exist_ok=True)


async def tts(bid, text, pros):
    mp3, js = os.path.join(cache, bid + '.mp3'), os.path.join(cache, bid + '.json')
    key = json.dumps([text, pros, VOICE])
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


async def main():
    parts, beats, t = [], [], LEAD
    parts.append(np.zeros(int(SR * LEAD), np.float32))
    for b in BEATS:
        bid, show, spoken, pause = b[0], b[1], b[2], b[3]
        mp3, words = await tts(bid, spoken, PROS.get(bid, DEF))
        a = load(mp3)
        # trim leading/trailing silence
        nz = np.where(np.abs(a) > 0.01)[0]
        s0 = max(0, nz[0] - int(0.03 * SR)) if len(nz) else 0
        s1 = min(len(a), nz[-1] + int(0.06 * SR)) if len(nz) else len(a)
        a = a[s0:s1]; off = s0 / SR
        dur = len(a) / SR
        beats.append({'id': bid, 'show': show, 'spoken': spoken, 'start': round(t, 3), 'end': round(t + dur, 3),
                      'words': [{'w': w['w'], 't0': round(t + max(0, w['t0'] - off), 3), 't1': round(t + max(0, w['t1'] - off), 3)} for w in words]})
        parts.append(a); parts.append(np.zeros(int(SR * pause), np.float32))
        t += dur + pause
    for i, b in enumerate(beats):
        b['next'] = beats[i + 1]['start'] if i + 1 < len(beats) else round(t, 3)
    vo = np.concatenate(parts); vo = vo / (np.max(np.abs(vo)) + 1e-9) * 0.9
    with wave.open(os.path.join(D, 'vo.wav'), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((vo * 32767).astype(np.int16).tobytes())
    tl = {'beats': beats, 'total': round(t, 3)}
    open(os.path.join(D, 'timeline.js'), 'w').write('window.TL = ' + json.dumps(tl, ensure_ascii=False) + ';\n')
    print('TOTAL', round(t, 2), 's —', ' '.join(f"{b['id']}@{b['start']:.1f}" for b in beats))

asyncio.run(main())
