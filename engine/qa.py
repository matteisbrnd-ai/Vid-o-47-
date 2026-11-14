"""Pre-delivery QA — run before sending ANY video to the creator:  python3 engine/qa.py episodes/<slug>
Checks: voice transcript vs script, sound cues found, loudness/peak, duration, file size; writes <ep>/qa.jpg (1 frame/s)
and <ep>/qa_f0.jpg (frame 0) to LOOK AT. Prints FAIL lines; fix every FAIL before delivery."""
import difflib, json, os, re, subprocess, sys, unicodedata
import numpy as np
D = sys.argv[1]; slug = os.path.basename(D.rstrip('/')); V = f'videos/{slug}.mp4'; fails = []
ns = {'os': os, 'HERE': D}; exec(open(os.path.join(D, 'beats.py')).read(), ns)
src = open(os.path.join(D, 'timeline.js')).read(); T = json.loads(src[src.index('{'):src.rindex('}') + 1]); B = {b['id']: b for b in T['beats']}
norm = lambda s: re.sub(r"[^a-z0-9 ]", " ", unicodedata.normalize('NFKD', s.lower()).encode('ascii', 'ignore').decode()).split()
# 1. transcript
from faster_whisper import WhisperModel
a = np.frombuffer(subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', V, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'], capture_output=True).stdout, np.float32)
segs, _ = WhisperModel('small', compute_type='int8').transcribe(a, language='fr'); heard = norm(' '.join(s.text for s in segs))
want = norm(' '.join(b[2] for b in ns['BEATS'])); ratio = difflib.SequenceMatcher(None, want, heard).ratio()
print(f'transcript match {ratio:.0%}'); (ratio < 0.8) and fails.append(f'voice differs from script ({ratio:.0%})')
# 2. cues
for bid, w, k in ns.get('CUES', []):
    if bid not in B: fails.append(f'cue on missing beat {bid}'); continue
    if not w.startswith('+') and not any(re.search(w, x['w'], re.I) for x in B[bid]['words']): fails.append(f'cue {bid}/{w} matches no word')
# 3. audio, duration, size
o = subprocess.run(['ffmpeg', '-hide_banner', '-i', V, '-af', 'ebur128=peak=true', '-f', 'null', '-'], capture_output=True, text=True).stderr
I = float(re.findall(r'I:\s+(-?[\d.]+) LUFS', o)[-1]); pk = float(re.findall(r'Peak:\s+(-?[\d.]+) dBFS', o)[-1]); dur = T['total']; mb = os.path.getsize(V) / 1e6
print(f'loudness {I} LUFS, peak {pk} dBFS, {dur:.1f} s, {mb:.0f} MB')
(pk > -0.3) and fails.append('audio peak too high'); (I < -18 or I > -12) and fails.append('loudness off'); (dur > 62) and fails.append('longer than 62 s'); (mb > 90) and fails.append('file > 90 MB')
# 4. frames to review
subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', V, '-vf', 'fps=1,scale=180:-1,tile=8x5', '-frames:v', '1', os.path.join(D, 'qa.jpg')])
subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', V, '-frames:v', '1', '-vf', 'scale=360:-1', os.path.join(D, 'qa_f0.jpg')])
print('\n'.join('FAIL: ' + f for f in fails) if fails else 'AUTO CHECKS OK — now look at qa.jpg / qa_f0.jpg and run the logic review')
