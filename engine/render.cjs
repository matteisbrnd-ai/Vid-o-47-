// usage: node engine/render.cjs episodes/<slug> [--stills 1,4.5,10]
// Renders the episode canvas at 30 fps into <ep>/silent.mp4 and writes <ep>/events.json (sound events).
// With --stills, writes <ep>/stills/tXX.jpg and <ep>/sheet.jpg (contact sheet) instead.
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const ep = path.resolve(process.argv[2]), eng = __dirname;
const si = process.argv.indexOf('--stills'), stills = si > 0 ? process.argv[si + 1].split(',').map(Number) : null;
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Bebas;src:url(file://${eng}/node_modules/@fontsource/bebas-neue/files/bebas-neue-latin-400-normal.woff2)}
@font-face{font-family:Mont;font-weight:800;src:url(file://${eng}/node_modules/@fontsource/montserrat/files/montserrat-latin-800-normal.woff2)}
body{margin:0;background:#000}</style></head><body><canvas id="c" width="1080" height="1920"></canvas>
<script src="file://${ep}/timeline.js"></script><script src="file://${eng}/lib.js"></script><script src="file://${ep}/scenes.js"></script></body></html>`;
fs.writeFileSync(path.join(ep, '_anim.html'), html);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  p.on('pageerror', e => { console.error('PAGE ERROR', e.message); process.exitCode = 1; });
  await p.goto('file://' + path.join(ep, '_anim.html')); await p.evaluate(() => window.ready);
  const grab = t => p.evaluate(t => { frame(t); return document.getElementById('c').toDataURL('image/jpeg', 0.92).split(',')[1]; }, t);
  if (stills) {
    const dir = path.join(ep, 'stills'); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir);
    for (const t of stills) fs.writeFileSync(path.join(dir, `t${String(t.toFixed(1)).padStart(5, '0')}.jpg`), Buffer.from(await grab(t), 'base64'));
    await b.close();
    execFileSync('python3', ['-c', `
import glob
from PIL import Image
fs=sorted(glob.glob('${dir}/*.jpg'),key=lambda f:float(f.split('/t')[-1][:-4]))
n=len(fs); cols=min(9,n); rows=(n+cols-1)//cols
s=Image.new('RGB',(180*cols,320*rows))
for i,f in enumerate(fs): s.paste(Image.open(f).resize((180,320)),((i%cols)*180,(i//cols)*320))
s.save('${ep}/sheet.jpg',quality=80)`]);
    console.log('stills ok'); return;
  }
  const dur = await p.evaluate(() => window.DURATION), N = Math.ceil(dur * 30);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '30', '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '19', '-pix_fmt', 'yuv420p', path.join(ep, 'silent.mp4')], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < N; i++) { const buf = Buffer.from(await grab(i / 30), 'base64'); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r));
  fs.writeFileSync(path.join(ep, 'events.json'), JSON.stringify(await p.evaluate(() => window.EV)));
  await b.close(); console.log('rendered', N, 'frames');
})();
