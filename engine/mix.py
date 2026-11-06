"""Sound design: voice + light pizzicato music (ducked under the voice) + cartoon sound effects.
usage: python3 engine/mix.py episodes/<slug>   -> <ep>/mix.wav
Effects come from: a whoosh at every beat change, the overlay events recorded while rendering (events.json),
and the episode's CUES list in beats.py: (beat_id, regex_on_word | '+seconds', kind).
Kinds: whoosh pop paper bubble buzz stamp tick bam sting ding dingdong ring steps click clink rattle beep bark wind rewind
"""
import json, os, re, sys, wave
import numpy as np
D = sys.argv[1]; SR = 44100; rng = np.random.default_rng(7)
ns = {'os': os, 'HERE': D}; exec(open(os.path.join(D, 'beats.py')).read(), ns)
CUES, MUS = ns.get('CUES', []), ns.get('MUSIC', 0.26)
src = open(os.path.join(D, 'timeline.js')).read(); TL = json.loads(src[src.index('{'):src.rindex('}') + 1]); BEATS = {b['id']: b for b in TL['beats']}
w = wave.open(os.path.join(D, 'vo.wav')); vo = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float32) / 32768
N = len(vo) + SR
T = lambda d: np.arange(int(SR * d)) / SR
def env(n, a=0.005, r=0.1): t = np.arange(n) / SR; return np.minimum(1, t / a) * np.exp(-t / r)
def noise(d): return rng.standard_normal(int(SR * d))
def lp(sig, k):
    y = np.empty_like(sig); acc = 0.0
    for i in range(len(sig)): acc += k * (sig[i] - acc); y[i] = acc
    return y
def bandsweep(d, f0, f1):
    n = noise(d); out = np.zeros_like(n); s = 512
    for i in range(0, len(n), s):
        c = n[i:i + s]; f = np.fft.rfft(c); fr = np.fft.rfftfreq(len(c), 1 / SR); fc = f0 + (f1 - f0) * i / len(n)
        f *= np.exp(-((fr - fc) / (fc * 0.6)) ** 2); out[i:i + s] = np.fft.irfft(f, len(c))
    return out / (np.max(np.abs(out)) + 1e-9)
def chirp(d, f, amp, a=0.002, r=0.05): t = T(d); return amp * np.sin(2 * np.pi * np.cumsum(f(t)) / SR) * env(len(t), a, r)
def cat(*parts):
    L = max(int(o * SR) + len(p) for o, p in parts); out = np.zeros(L)
    for o, p in parts: i = int(o * SR); out[i:i + len(p)] += p
    return out
FX = {
 'whoosh': lambda: 0.2 * bandsweep(0.32, 600, 4100) * np.sin(np.pi * T(0.32) / 0.32) ** 2,
 'pop': lambda: chirp(0.09, lambda t: 900 * np.exp(-t * 30) + 380, 0.3, 0.001, 0.03),
 'paper': lambda: 0.18 * lp(noise(0.22), 0.35) * np.sin(np.pi * T(0.22) / 0.22) ** 1.5,
 'bubble': lambda: chirp(0.16, lambda t: 300 + 1400 * (t / 0.16) ** 1.5, 0.26, 0.002, 0.07),
 'buzz': lambda: 0.16 * lp(np.sign(np.sin(2 * np.pi * 110 * T(0.38))) * 0.5 + np.sign(np.sin(2 * np.pi * 116 * T(0.38))) * 0.5, 0.25) * env(int(SR * 0.38), 0.004, 0.25),
 'tick': lambda: 0.3 * noise(0.05) * env(int(SR * 0.05), 0.0005, 0.006) + 0.18 * np.sin(2 * np.pi * 2400 * T(0.05)) * env(int(SR * 0.05), 0.0005, 0.01),
 'bam': lambda: cat((0, chirp(0.7, lambda t: 90 * np.exp(-t * 4) + 38, 0.6, 0.002, 0.3)), (0, 0.45 * lp(noise(0.5), 0.5) * env(int(SR * 0.5), 0.001, 0.12))),
 'stamp': lambda: cat((0, chirp(0.4, lambda t: 140 * np.exp(-t * 8) + 60, 0.45, 0.001, 0.12)), (0, 0.3 * lp(noise(0.12), 0.6) * env(int(SR * 0.12), 0.001, 0.03))),
 'sting': lambda: cat((0, chirp(0.7, lambda t: 90 * np.exp(-t * 4) + 38, 0.55, 0.002, 0.3)), (0, 0.07 * lp(sum(np.sign(np.sin(2 * np.pi * f * T(1.2))) for f in (311, 370, 466)), 0.3) * env(int(SR * 1.2), 0.003, 0.5))),
 'ding': lambda: 0.14 * (np.sin(2 * np.pi * 1318 * T(1.2)) + 0.5 * np.sin(2 * np.pi * 1975 * T(1.2))) * env(int(SR * 1.2), 0.002, 0.4),
 'dingdong': lambda: cat((0, 0.22 * np.sin(2 * np.pi * 784 * T(0.7)) * env(int(SR * 0.7), 0.002, 0.35)), (0.45, 0.22 * np.sin(2 * np.pi * 622 * T(1.0)) * env(int(SR * 1.0), 0.002, 0.45))),
 'ring': lambda: 0.08 * (np.sin(2 * np.pi * 440 * T(1.6)) + np.sin(2 * np.pi * 480 * T(1.6))) * (np.sin(2 * np.pi * 20 * T(1.6)) > 0) * ((T(1.6) % 0.8) < 0.5),
 'steps': lambda: cat(*[(k * 0.38, 0.35 * lp(noise(0.12), 0.4) * env(int(SR * 0.12), 0.002, 0.04)) for k in range(4)]),
 'click': lambda: 0.3 * noise(0.04) * env(int(SR * 0.04), 0.0003, 0.004),
 'clink': lambda: 0.12 * (np.sin(2 * np.pi * 2600 * T(0.6)) + 0.6 * np.sin(2 * np.pi * 3400 * T(0.6))) * env(int(SR * 0.6), 0.001, 0.12),
 'rattle': lambda: cat(*[(rng.uniform(0, 0.9), noise(0.012) * env(int(SR * 0.012), 0.0005, 0.003) * rng.uniform(0.1, 0.35)) for _ in range(70)]),
 'beep': lambda: cat((0, 0.15 * np.sin(2 * np.pi * 1200 * T(0.12)) * env(int(SR * 0.12), 0.002, 0.08)), (0.2, 0.15 * np.sin(2 * np.pi * 1200 * T(0.12)) * env(int(SR * 0.12), 0.002, 0.08))),
 'bark': lambda: cat(*[(o, (np.sin(2 * np.pi * np.cumsum(420 * np.exp(-T(0.18) * 6) + 180) / SR) * 0.6 + lp(noise(0.18), 0.3) * 0.4) * env(int(SR * 0.18), 0.004, 0.07) * 0.4) for o in (0, 0.3)]),
 'wind': lambda: 0.22 * lp(noise(3.0), 0.03) / 0.05 * np.sin(np.pi * T(3.0) / 3.0) * 0.05,
 'rewind': lambda: chirp(0.7, lambda t: 200 + 1600 * (t / 0.7) ** 2, 0.1, 0.01, 10) * (0.6 + 0.4 * np.sin(2 * np.pi * 30 * T(0.7))),
}
cache = {}
sfx = np.zeros(N)
def add(kind, at):
    if kind not in cache: cache[kind] = FX[kind]()
    s = cache[kind]; i = max(0, int(at * SR)); j = min(N, i + len(s)); sfx[i:j] += s[:j - i]
for b in TL['beats'][1:]: add('whoosh', b['start'] - 0.18)
for e in json.load(open(os.path.join(D, 'events.json'))): add(e['kind'] if e['kind'] in FX else 'pop', e['t'])
for bid, where, kind in CUES:
    b = BEATS[bid]
    if where.startswith('+'): t = b['start'] + float(where[1:])
    else:
        hit = next((w for w in b['words'] if re.search(where, w['w'], re.I)), None); t = hit['t0'] if hit else b['start']
    add(kind, t)
# music: Am F C G pizzicato loop, 112 bpm
b8 = 60 / 112 / 2
def pluck(freq, d=0.35):
    n = int(SR * d); p = max(2, int(SR / freq)); buf = rng.uniform(-1, 1, p); out = np.zeros(n)
    for i in range(n): out[i] = buf[i % p]; buf[i % p] = 0.5 * (buf[i % p] + buf[(i + 1) % p]) * 0.996
    return out * env(n, 0.002, 0.18)
hz = lambda m: 440 * 2 ** ((m - 69) / 12)
prog = [(57, [69, 72, 76]), (53, [65, 69, 72]), (48, [64, 67, 72]), (55, [62, 67, 71])]
mus = np.zeros(N); pc = {}; i8 = 0; t0 = 0.0
while t0 < N / SR:
    root, ch = prog[(i8 // 8) % 4]; k = i8 % 8; m = ch[[0, 2, 1, 2, 0, 2, 1, 2][k]] + (12 if k in (3, 7) else 0)
    if m not in pc: pc[m] = pluck(hz(m))
    i = int(t0 * SR); s = pc[m] * (0.5 if k % 2 else 0.7); j = min(N, i + len(s)); mus[i:j] += s[:j - i]
    if k in (0, 4):
        bs = (np.sin(2 * np.pi * hz(root - 12) * T(b8 * 3)) + 0.3 * np.sin(4 * np.pi * hz(root - 12) * T(b8 * 3))) * env(int(SR * b8 * 3), 0.005, b8 * 1.8); j = min(N, i + len(bs)); mus[i:j] += 0.8 * bs[:j - i]
    if k % 2: hh = noise(0.04) * env(int(SR * 0.04), 0.001, 0.01) * 0.25; j = min(N, i + len(hh)); mus[i:j] += hh[:j - i]
    i8 += 1; t0 += b8
mus /= np.max(np.abs(mus)) + 1e-9
voN = np.zeros(N); voN[:len(vo)] = vo
e = np.convolve(np.abs(voN), np.ones(int(SR * 0.15)) / int(SR * 0.15), 'same'); duck = 1 - 0.5 * np.clip(e * 7, 0, 1)
mix = voN + MUS * mus * duck + sfx; fade = int(SR * 1.2); mix[-fade:] *= np.linspace(1, 0, fade); mix = mix / np.max(np.abs(mix)) * 0.92
with wave.open(os.path.join(D, 'mix.wav'), 'wb') as o: o.setnchannels(1); o.setsampwidth(2); o.setframerate(SR); o.writeframes((mix * 32767).astype(np.int16).tobytes())
print('mix ok', round(N / SR, 1), 's')
