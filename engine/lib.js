// Les Énigmes de 47 — drawing library (1080x1920 canvas). Loaded before the episode's scenes.js.
// Style: flat 2D, thick dark outlines, big expressive heads, warm colours, paper props.
const W = 1080, H = 1920, cv = document.getElementById('c'), x = cv.getContext('2d');
const OL = '#2b1d16', SKIN = '#f2c79c', SKIN2 = '#dda67a', INK = OL;
const C = { orange: '#f2781f', yellow: '#ffd23f', red: '#d6332b', green: '#2f8f4f', white: '#ffffff', cream: '#f6ecd6', brown: '#3a2a1e', blue: '#2c4fa8' };
window.EV = []; const _seen = {}; let _T = 0;
function ev(kind, key) { const k = kind + ':' + key, last = _seen[k]; if (last === undefined || _T - last > 0.25) EV.push({ t: +_T.toFixed(3), kind }); _seen[k] = _T; }

// ---------- math / timing ----------
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, k) => a + (b - a) * k;
const seg = (t, a, b) => clamp((t - a) / (b - a));
const eIO = k => k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
const eOut = k => 1 - Math.pow(1 - k, 3);
const eBack = k => { const c1 = 1.7, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); };
let B = {};
function initTL() { TL.beats.forEach(b => { B[b.id] = b; }); }
const S = id => B[id].start;
const WT = (id, i) => { const w = B[id].words; return w.length ? w[Math.max(0, Math.min(i, w.length - 1))].t0 : B[id].start; };
const WF = (id, re) => { const w = B[id].words.find(w => re.test(w.w)); return w ? w.t0 : B[id].end; };
const curId = t => TL.beats.reduce((a, b) => t >= b.start - 0.15 ? b.id : a, TL.beats[0].id);
const P = (t, a, d = 0.35) => eOut(seg(t, a, a + d));
const pop = (t, a) => eBack(seg(t, a, a + 0.3));

// ---------- camera ----------
function resetCam() { x.setTransform(1, 0, 0, 1, 0, 0); }
function cam(fx, fy, z, shake = 0, t = 0) { x.setTransform(z, 0, 0, z, 540 - fx * z + Math.sin(t * 60) * shake, 960 - fy * z + Math.cos(t * 51) * shake); }
// TGT = {beatId: [fx, fy, zoom]}; smooth move at each beat change, slight drift, punch-in on the first beat
function camAt(t, TGT) { const bs = TL.beats; let i = 0; for (let k = 0; k < bs.length; k++) if (t >= bs[k].start - 0.15) i = k;
  const d = [540, 960, 1]; const cur = TGT[bs[i].id] || d, prev = TGT[bs[Math.max(0, i - 1)].id] || cur, k = eIO(seg(t, bs[i].start - 0.15, bs[i].start + 0.6));
  let z = lerp(prev[2], cur[2], k) * (1 + 0.015 * Math.sin(t * 0.6)); if (i === 0) z *= lerp(0.75, 1, eOut(seg(t, 0, 0.6)));
  const punch = 1 + 0.035 * Math.max(0, 1 - (t - bs[i].start) * 5) * (i > 0 ? 1 : 0);
  return [lerp(prev[0], cur[0], k), lerp(prev[1], cur[1], k), z * punch]; }

// ---------- primitives ----------
function font(sz, fam = 'Bebas') { x.font = `${sz}px ${fam === 'Bebas' ? 'Bebas' : fam}`; }
function fs(fill, lw = 7) { x.fillStyle = fill; x.fill(); if (lw) { x.lineJoin = 'round'; x.lineCap = 'round'; x.lineWidth = lw; x.strokeStyle = OL; x.stroke(); } }
function poly(pts, fill, lw = 7) { x.beginPath(); pts.forEach(([a, b], i) => i ? x.lineTo(a, b) : x.moveTo(a, b)); x.closePath(); fs(fill, lw); }
function ell(cx, cy, rx, ry, fill, lw = 7, rot = 0) { x.beginPath(); x.ellipse(cx, cy, rx, ry, rot, 0, 7); fs(fill, lw); }
function rbox(px, py, w, h, r, fill, lw = 7) { x.beginPath(); x.roundRect(px, py, w, h, r); fs(fill, lw); }
function rrc(cx, cy, w, h, r, fill, lw = 7) { rbox(cx - w / 2, cy - h / 2, w, h, r, fill, lw); }
function shadeClip(shape, col = 'rgba(0,0,0,.15)', from = 35) { x.save(); shape(); x.clip(); x.fillStyle = col; x.fillRect(from, -4000, 8000, 8000); x.restore(); }
function vg(y0, y1, a, b) { const g = x.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g; }
function txt(s, px, py, sz, col = C.white, o = {}) { font(sz, o.fam); x.textAlign = o.align || 'center'; x.textBaseline = 'middle';
  if (o.stroke !== false) { x.lineJoin = 'round'; x.lineWidth = o.sw || sz * 0.14; x.strokeStyle = o.sc || OL; x.strokeText(s, px, py); } x.fillStyle = col; x.fillText(s, px, py); }

// ---------- character (47 and the cast) ----------
// o: t, look(-1..1), mood('neutral'|'smile'|'smug'|'worried'|'shock'|'angry'), blink, armsUp, armUp, walk, sweat,
//    hat('beanie'|'cap'|'hair'|'bald'|'beret'), hatCol, hatCol2, body, body2, pants, num(false|'47'), numCol, collar, mustache, glasses, shades, white, hairCol
function toon(px, py, s, o = {}) {
  const t = o.t || 0, sw = o.walk ? Math.sin(o.walk * 8) * 0.35 : 0, bob = o.walk ? Math.abs(Math.sin(o.walk * 8)) * -10 : Math.sin(t * 2) * 3;
  const B1 = o.body || '#33384a', B2 = o.body2 || '#272b38', PANTS = o.pants || '#2a2f3a';
  x.save(); x.translate(px, py); x.scale(s, s);
  x.fillStyle = 'rgba(0,0,0,.22)'; x.beginPath(); x.ellipse(0, 4, 120, 20, 0, 0, 7); x.fill();
  [[-40, sw], [40, -sw]].forEach(([lx, a]) => { x.save(); x.translate(lx, -230); x.rotate(a * 0.6); rrc(0, 105, 62, 210, 22, PANTS); rrc(10, 215, 92, 46, 22, '#3a2a22'); x.restore(); });
  x.translate(0, bob);
  const arm = (side, up) => { x.save(); x.translate(side * 122, -480); x.rotate(up ? side * -2.7 : side * (0.22 + (o.walk ? sw * 0.8 * side : 0))); rrc(0, 95, 58, 200, 28, B2); ell(0, 205, 34, 32, SKIN); x.restore(); };
  const torso = () => { x.beginPath(); x.moveTo(-115, -500); x.quadraticCurveTo(-130, -360, -112, -235); x.lineTo(112, -235); x.quadraticCurveTo(130, -360, 115, -500); x.quadraticCurveTo(0, -540, -115, -500); x.closePath(); };
  torso(); fs(B1, 8); shadeClip(torso); arm(-1, o.armsUp); arm(1, o.armsUp || o.armUp);
  x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 5; x.beginPath(); x.moveTo(-108, -262); x.lineTo(108, -262); x.stroke();
  if (o.num !== false) { txt(o.num || '47', 0, -375, 118, o.numCol || C.orange, { sw: 10 }); }
  if (o.collar) { x.beginPath(); x.moveTo(-40, -515); x.lineTo(0, -470); x.lineTo(40, -515); x.lineWidth = 7; x.strokeStyle = OL; x.stroke(); }
  rrc(0, -530, 64, 50, 14, SKIN2, 6);
  const HY = -690, HR = 150;
  ell(-HR + 6, HY + 10, 26, 36, SKIN, 6); ell(HR - 6, HY + 10, 26, 36, SKIN, 6);
  const head = () => { x.beginPath(); x.ellipse(0, HY, HR, HR * 1.02, 0, 0, 7); };
  head(); fs(SKIN, 8); shadeClip(head, 'rgba(160,90,40,.08)', 90);
  const hc = o.hatCol || C.orange, hc2 = o.hatCol2 || '#c95d12', hat = o.hat || 'beanie';
  if (hat === 'beanie') { const cap = () => { x.beginPath(); x.moveTo(-HR - 8, HY - 30); x.quadraticCurveTo(-HR + 10, HY - HR - 70, 0, HY - HR - 72); x.quadraticCurveTo(HR - 10, HY - HR - 70, HR + 8, HY - 30); x.closePath(); };
    cap(); fs(hc, 8); shadeClip(cap, 'rgba(0,0,0,.12)'); rrc(0, HY - 34, HR * 2 + 34, 58, 26, hc2, 8);
    x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 5; for (let i = -3; i <= 3; i++) { x.beginPath(); x.moveTo(i * 40, HY - 58); x.lineTo(i * 40, HY - 12); x.stroke(); } }
  if (hat === 'cap') { x.beginPath(); x.moveTo(-HR - 4, HY - 40); x.quadraticCurveTo(0, HY - HR - 110, HR + 4, HY - 40); x.closePath(); fs(hc, 8); rrc(0, HY - 40, HR * 2 + 20, 40, 14, hc2, 8); ell((o.look || 0) < 0 ? -120 : 120, HY - 30, 90, 22, OL, 4); ell(0, HY - 110, 22, 22, '#e2b649', 5); }
  if (hat === 'beret') { ell(10, HY - HR + 20, HR + 20, 56, hc, 8, -0.08); }
  if (hat === 'hair') { x.beginPath(); x.moveTo(-HR - 4, HY - 10); x.quadraticCurveTo(-HR, HY - HR - 40, 0, HY - HR - 30); x.quadraticCurveTo(HR, HY - HR - 40, HR + 4, HY - 10); x.quadraticCurveTo(HR - 30, HY - 80, 40, HY - 100); x.quadraticCurveTo(-60, HY - 70, -HR + 20, HY - 20); x.closePath(); fs(o.hairCol || '#3a2a22', 8); }
  if (o.white) { [-1, 1].forEach(d => ell(d * (HR - 10), HY - 50, 50, 46, '#f4f4f4', 6)); }
  const look = (o.look || 0) * 14, blink = o.blink && o.t != null && (t % 3.4) < 0.12, eyeY = HY + 10, eyeR = o.mood === 'shock' ? 40 : 34;
  [-55, 55].forEach(ex => { if (blink) { x.beginPath(); x.moveTo(ex - 28, eyeY); x.quadraticCurveTo(ex, eyeY + 12, ex + 28, eyeY); x.lineWidth = 7; x.strokeStyle = OL; x.stroke(); return; }
    ell(ex, eyeY, eyeR * 0.85, eyeR, '#ffffff', 6); ell(ex + look, eyeY + 4, 15, 17, '#2a1d16', 0); x.fillStyle = '#fff'; x.beginPath(); x.arc(ex + look + 6, eyeY - 4, 5, 0, 7); x.fill(); });
  if (o.glasses) { x.lineWidth = 7; x.strokeStyle = OL; [-55, 55].forEach(ex => { x.beginPath(); x.arc(ex, eyeY, 46, 0, 7); x.stroke(); }); }
  if (o.shades) { rrc(-55, eyeY, 100, 54, 16, '#121317', 6); rrc(55, eyeY, 100, 54, 16, '#121317', 6); }
  const br = { neutral: [0, 0], smile: [-4, 4], worried: [10, -14], shock: [-18, 0], smug: [8, 8], angry: [-12, 16] }[o.mood || 'neutral'];
  x.lineWidth = 10; x.strokeStyle = o.white ? '#bdbdbd' : '#3a2a22'; x.lineCap = 'round';
  [-1, 1].forEach(d => { x.beginPath(); x.moveTo(d * 85, eyeY - 52 + br[0]); x.lineTo(d * 30, eyeY - 52 + br[0] + br[1]); x.stroke(); });
  x.beginPath(); x.moveTo(6, HY + 40); x.quadraticCurveTo(24, HY + 62, 0, HY + 70); x.lineWidth = 6; x.strokeStyle = SKIN2; x.stroke();
  if (o.mustache) { x.fillStyle = o.white ? '#dcdcdc' : '#5a3a22'; x.beginPath(); x.moveTo(-60, HY + 92); x.quadraticCurveTo(-30, HY + 66, 0, HY + 84); x.quadraticCurveTo(30, HY + 66, 60, HY + 92); x.quadraticCurveTo(0, HY + 100, -60, HY + 92); x.fill(); x.lineWidth = 4; x.strokeStyle = OL; x.stroke(); }
  x.lineWidth = 7; x.strokeStyle = OL; const MY = HY + 100;
  if (o.mood === 'smile' || o.mood === 'smug') { x.beginPath(); x.moveTo(-40, MY - 6); x.quadraticCurveTo(0, MY + 34, 44, MY - 10); if (o.mood === 'smile') { x.closePath(); x.fillStyle = '#7a2a2a'; x.fill(); } x.stroke(); }
  else if (o.mood === 'shock') ell(0, MY + 8, 24, 30, '#5a1a1a', 6);
  else if (o.mood === 'worried') { x.beginPath(); x.moveTo(-36, MY + 10); x.quadraticCurveTo(-18, MY - 6, 0, MY + 8); x.quadraticCurveTo(18, MY - 6, 36, MY + 8); x.stroke(); }
  else { x.beginPath(); x.moveTo(-30, MY + 2); x.quadraticCurveTo(0, MY + 12, 30, MY + 2); x.stroke(); }
  if (o.sweat) ell(HR - 20, HY - 40 + ((t * 40) % 30), 12, 18, '#8fd0ff', 4);
  x.restore();
}
// 47 himself (scale 0.8 ≈ 1 m 70 on a 1500 px floor)
function p47(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...o }); }
const CAST = {
  rico: { hatCol: '#3f6fb5', hatCol2: '#2f568f', body: '#2f3a52', body2: '#252e42', num: false },
  guard: { hat: 'cap', hatCol: '#24324a', hatCol2: '#1b2638', body: '#2c4fa8', body2: '#22408a', pants: '#1f2840', num: false, collar: true },
  inspector: { hat: 'hair', hairCol: '#4a3426', body: '#c9a77a', body2: '#a8875c', pants: '#3a3530', num: false, collar: true },
  boss: { hat: 'hair', hairCol: '#1f1a18', shades: true, body: '#1d1f24', body2: '#121317', pants: '#15171c', num: false, collar: true },
  old: { hat: 'bald', white: true, glasses: true, body: '#8a2f3a', body2: '#6d2430', pants: '#3a3530', num: false, collar: true },
  director: { hat: 'hair', hairCol: '#9a9a9a', glasses: true, mustache: true, body: '#3a3d44', body2: '#2c2f35', pants: '#2a2d33', num: false, collar: true },
  cook: { hat: 'hair', hairCol: '#6b3a22', body: '#f4f2ec', body2: '#dcd8cf', pants: '#3a3d44', num: false, collar: true },
  gardener: { hat: 'cap', hatCol: '#4f8f4a', hatCol2: '#3c7238', body: '#5a8f4a', body2: '#46723a', pants: '#3a5a8a', num: false },
  maid: { hat: 'hair', hairCol: '#1f1a18', body: '#2b2b30', body2: '#1f1f24', pants: '#2b2b30', num: false, collar: true },
  judge: { hat: 'hair', hairCol: '#f0f0f0', body: '#1b1b1f', body2: '#121214', pants: '#1b1b1f', num: false, collar: true },
  woman: { hat: 'hair', hairCol: '#7a3a22', body: '#b5486a', body2: '#963a57', pants: '#3a3d44', num: false, collar: true } };
function cast(k, px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...CAST[k], ...o });
  if (k === 'cook') { ell(px, py - 900 * s, 110 * s, 70 * s, '#fff', 6); rrc(px, py - 840 * s, 210 * s, 70 * s, 10, '#fff', 6); }
  if (k === 'maid') rbox(px - 70 * s, py - 470 * s, 140 * s, 220 * s, 16 * s, '#fff', 5);
  if (k === 'boss') { x.strokeStyle = '#e2b649'; x.lineWidth = 10 * s; x.beginPath(); x.arc(px, py - 500 * s, 70 * s, 0.3, Math.PI - 0.3); x.stroke(); } }

// ---------- scenery ----------
function room(wall, wall2, floor, fy = 1500) { x.fillStyle = vg(-300, fy, wall, wall2); x.fillRect(-1200, -800, 3500, fy + 800); x.fillStyle = floor; x.fillRect(-1200, fy, 3500, 1400);
  x.lineWidth = 8; x.strokeStyle = OL; x.beginPath(); x.moveTo(-1200, fy); x.lineTo(2300, fy); x.stroke(); x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(-1200, fy - 30, 3500, 30); }
function bricks(col1, col2, y0 = -400, y1 = 1500) { for (let r = 0; r < (y1 - y0) / 56; r++) for (let k = -10; k < 20; k++) { x.fillStyle = (r * 7 + k * 3) % 5 ? col1 : col2; x.fillRect(k * 120 + (r % 2) * 60 + 4, y0 + r * 56 + 4, 112, 48); } }
function sky(top, bot, y1 = 1300) { x.fillStyle = vg(-400, y1, top, bot); x.fillRect(-1200, -800, 3500, y1 + 800); }
function cloud(cx, cy, s) { x.save(); x.translate(cx, cy); x.scale(s, s); x.beginPath(); [[-80, 10, 55], [-20, -25, 70], [55, -5, 60], [100, 20, 42], [0, 25, 60]].forEach(([a, b, r]) => { x.moveTo(a + r, b); x.arc(a, b, r, 0, 7); }); x.lineWidth = 10; x.strokeStyle = 'rgba(120,150,190,.55)'; x.stroke(); x.fillStyle = '#fbfdff'; x.fill(); x.restore(); }
function pine(cx, by, h, col = '#2f6b45', snow = false) { const w = h * 0.42; for (let k = 0; k < 3; k++) { const y0 = by - h * 0.25 - k * h * 0.24, ww = w * (1 - k * 0.22); poly([[cx - ww, y0], [cx, y0 - h * 0.42], [cx + ww, y0]], col, 5); if (snow) poly([[cx - ww * 0.4, y0 - h * 0.25], [cx, y0 - h * 0.42], [cx + ww * 0.4, y0 - h * 0.25]], '#fff', 0); } rrc(cx, by - h * 0.12, h * 0.1, h * 0.24, 4, '#6b4428', 4); }
function mountains(y, col) { const pk = [[-200, 300], [120, 420], [430, 320], [760, 460], [1080, 340], [1300, 400]];
  x.beginPath(); x.moveTo(-500, y); pk.forEach(([p, h]) => { x.lineTo(p - 160, y - h * 0.45); x.lineTo(p, y - h); x.lineTo(p + 160, y - h * 0.45); }); x.lineTo(1600, y); x.closePath(); fs(col, 6);
  pk.forEach(([p, h]) => poly([[p - 70, y - h * 0.78], [p, y - h], [p + 70, y - h * 0.78], [p + 30, y - h * 0.72], [p, y - h * 0.8], [p - 30, y - h * 0.72]], '#f6f8fb', 4)); }
function door(cx, top, w, h, col = '#6b4428', label) { rbox(cx - w / 2 - 14, top - 14, w + 28, h + 14, 6, '#5a3a22', 8); rbox(cx - w / 2, top, w, h, 4, col, 8); ell(cx + w / 2 - 34, top + h * 0.55, 12, 12, '#e2b649', 5); if (label) { rrc(cx, top - 70, Math.max(120, label.length * 30), 70, 10, '#fff', 6); txt(label, cx, top - 68, 52, OL, { stroke: false }); } }
function windowBars(cx, cy, w, h, inside = '#9fc3e0') { rrc(cx, cy, w, h, 8, inside, 8); x.strokeStyle = OL; x.lineWidth = 14; for (let b = 1; b < 4; b++) { x.beginPath(); x.moveTo(cx - w / 2 + b * w / 4, cy - h / 2); x.lineTo(cx - w / 2 + b * w / 4, cy + h / 2); x.stroke(); } }
function vignette(a = 0.32) { resetCam(); const g = x.createRadialGradient(540, 900, 420, 540, 960, 1300); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${a})`); x.fillStyle = g; x.fillRect(0, 0, W, H); }
function night(a = 0.35) { resetCam(); x.fillStyle = `rgba(12,14,36,${a})`; x.fillRect(0, 0, W, H); }

// ---------- overlays (screen space; each records a sound event when it appears) ----------
function paperCard(lines, px, py, p, o = {}) { if (p <= 0) return; ev('paper', lines.map(l => l[0]).join('|'));
  const w = o.w || 640, h = lines.reduce((a, l) => a + l[1] * 1.15, 0) + 90;
  x.save(); resetCam(); x.translate(px, py + (1 - p) * 60); x.rotate(o.rot ?? -0.02); x.globalAlpha = Math.min(1, p * 1.5);
  x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(-w / 2 + 10, -h / 2 + 14, w, h); x.fillStyle = C.cream; x.fillRect(-w / 2, -h / 2, w, h); x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 3; x.strokeRect(-w / 2 + 12, -h / 2 + 12, w - 24, h - 24);
  x.fillStyle = 'rgba(200,170,120,.6)'; x.save(); x.translate(0, -h / 2); x.rotate(0.04); x.fillRect(-70, -18, 140, 36); x.restore();
  let y = -h / 2 + 45; lines.forEach(([s, sz, col]) => { y += sz * 0.58; txt(s, 0, y, sz, col || C.brown, { stroke: false }); y += sz * 0.57; }); x.restore(); }
function pill(s, px, py, p, col = C.brown) { if (p <= 0) return; ev('pop', s); x.save(); resetCam(); x.translate(px, py); const k = eBack(clamp(p)); x.scale(k, k); font(70); const w = x.measureText(s).width + 80; rrc(0, 0, w, 100, 50, col, 7); txt(s, 0, 4, 70, '#fff', { stroke: false }); x.restore(); }
function bigWord(s, p, y = 360, col = '#fff', sz = 120) { if (p <= 0) return; ev('pop', s); x.save(); resetCam(); x.translate(540, y); const k = eBack(clamp(p)); x.scale(k, k); txt(s, 0, 0, sz, col, { sw: 16 }); x.restore(); }
function onoma(s, px, py, p, sz = 170) { if (p <= 0) return; ev('bam', s); x.save(); resetCam(); x.translate(px, py); x.rotate(-0.12); const k = eBack(clamp(p)); x.scale(k, k); txt(s, 0, 0, sz, C.yellow, { sw: 18 }); x.restore(); }
function stamp(s, p, y = 450, col = C.red) { if (p <= 0) return; ev('stamp', s); x.save(); resetCam(); x.translate(540, y); x.rotate(-0.12); const k = 1 + 1.2 * (1 - p); x.scale(k, k); x.globalAlpha = Math.min(1, p * 1.4); font(104); const w = Math.min(960, x.measureText(s).width + 70); x.strokeStyle = col; x.lineWidth = 12; x.strokeRect(-w / 2, -70, w, 140); txt(s, 0, 6, 104, col, { stroke: false }); x.restore(); }
function speech(s, px, py, p, sz = 50) { if (p <= 0) return; ev('bubble', s); x.save(); resetCam(); x.translate(px, py); x.scale(p, p); font(sz); const w = Math.min(980, x.measureText(s).width + 70), h = sz * 1.7; x.beginPath(); x.roundRect(-w / 2, -h / 2, w, h, 36); x.moveTo(-20, h / 2 - 2); x.lineTo(-50, h / 2 + 50); x.lineTo(20, h / 2 - 2); fs('#fff', 7); txt(s, 0, 3, sz, OL, { stroke: false }); x.restore(); }
function redX(px, py, r, p) { if (p <= 0) return; ev('buzz', px + ',' + py); x.save(); resetCam(); x.translate(px, py); const k = eBack(clamp(p)); x.scale(k, k); x.lineCap = 'round'; x.strokeStyle = OL; x.lineWidth = 30; x.beginPath(); x.moveTo(-r, -r); x.lineTo(r, r); x.moveTo(r, -r); x.lineTo(-r, r); x.stroke(); x.strokeStyle = C.red; x.lineWidth = 18; x.stroke(); x.restore(); }
function numBadge(n, p, px = 150, py = 330) { if (p <= 0) return; ev('pop', 'n' + n); x.save(); resetCam(); x.translate(px, py); const k = eBack(clamp(p)); x.scale(k, k); ell(0, 0, 70, 70, C.red, 7); txt(String(n), 0, 8, 100, '#fff', { stroke: false }); x.restore(); }
function polaroid(px, py, w, h, p, drawFn, caption, rot = 0.03) { if (p <= 0) return; ev('paper', 'pol' + caption); x.save(); resetCam(); x.translate(px, py + (1 - p) * 80); x.rotate(rot); const s = 0.85 + 0.15 * p; x.scale(s, s); x.globalAlpha = Math.min(1, p * 1.5);
  x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(-w / 2 + 12, -h / 2 + 16, w, h + 90); x.fillStyle = '#fbf8f1'; x.fillRect(-w / 2, -h / 2, w, h + 90);
  x.save(); x.beginPath(); x.rect(-w / 2 + 24, -h / 2 + 24, w - 48, h - 48); x.clip(); x.translate(-w / 2 + 24, -h / 2 + 24); drawFn(w - 48, h - 48); x.restore();
  if (caption) txt(caption, 0, h / 2 + 30, 46, OL, { stroke: false }); x.restore(); }
function rewindFx(t, t1) { if (t <= t1 - 0.4) return; ev('rewind', 'rw'); resetCam(); x.fillStyle = 'rgba(255,255,255,.14)'; for (let i = 0; i < 30; i++) x.fillRect(0, (i * 97 + t * 3000) % 1920, W, 6); paperCard([['◀◀', 110]], 540, 960, 1, { w: 300 }); }
function countdown(t, t0, n0 = 5, py = 1000) { const k = t - t0; if (k < 0 || k >= n0) return; const n = n0 - Math.floor(k); ev('tick', 'c' + n); x.save(); resetCam(); x.translate(540, py); const s = 1 + 0.3 * Math.pow(1 - (k % 1), 4); x.scale(s, s);
  ell(0, 0, 120, 120, C.cream, 10); x.strokeStyle = C.red; x.lineWidth = 12; x.beginPath(); x.arc(0, 0, 100, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - (k % 1))); x.stroke(); txt(String(n), 0, 10, 150, C.brown, { stroke: false }); x.restore(); }
function followTap(t, t0) { const p = eBack(seg(t, t0, t0 + 0.3)), on = t > t0 + 0.9; if (p <= 0) return; ev('pop', 'follow'); x.save(); resetCam(); x.translate(540, 1180); x.scale(p, p);
  rrc(0, 0, 440, 120, 60, on ? '#6b6f78' : C.red, 6); txt(on ? '✓ ABONNÉ' : "S'ABONNER", 0, 4, 70, '#fff', { stroke: false }); x.restore(); }

// standard ending: question card, then the share call (beat ids 'q' and 'share' in beats.py)
function endCards(t, qLines) { const id = curId(t);
  if (id === 'q') paperCard(qLines, 540, 430, P(t, S('q') + 0.1), { w: 700 });
  if (id === 'share') { resetCam(); x.fillStyle = `rgba(10,8,20,${0.55 * P(t, S('share'))})`; x.fillRect(0, 0, W, H);
    paperCard([['ENVOIE-LA À', 70], ["QUELQU'UN QUI PENSE", 62], ['ÊTRE MALIN', 92, C.red]], 540, 800, P(t, S('share')), { w: 860 }); } }

// ---------- captions: 1–3 upper-case words, current word in orange, dark pill, above TikTok's UI ----------
function captions(t) { resetCam(); const b = TL.beats.find(b => t >= b.start && t < b.next - 0.07); if (!b || !b.words.length) return;
  const toks = b.show.replace(/\s+([?!:;»])/g, ' $1').split(/\s+/).filter(Boolean), m = b.words.length;
  const tt = toks.map((w, i) => ({ w: w.toUpperCase(), t0: b.words[Math.min(m - 1, Math.floor(i * m / toks.length))].t0 }));
  const chunks = []; let cur = []; font(64, 'Mont'); const width = ws => ws.reduce((a, w) => a + x.measureText(w.w).width + 24, 0);
  tt.forEach(w => { if (cur.length && (cur.length >= 3 || width([...cur, w]) > 640 || /[.!?…,]$/.test(cur[cur.length - 1].w))) { chunks.push(cur); cur = []; } cur.push(w); }); if (cur.length) chunks.push(cur);
  let ch = chunks[0]; chunks.forEach(c => { if (t >= c[0].t0 - 0.05) ch = c; }); const y = 1300, sz = 64, tw = width(ch);
  x.fillStyle = 'rgba(14,15,18,.62)'; x.beginPath(); x.roundRect(540 - tw / 2 - 26, y - sz * 0.8, tw + 40, sz * 1.55, 22); x.fill();
  let cx = 540 - tw / 2 + 8; ch.forEach((w, i) => { const ww = x.measureText(w.w).width, act = t >= w.t0 && (i === ch.length - 1 || t < ch[i + 1].t0);
    font(64, 'Mont'); x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = 9; x.strokeStyle = '#000'; x.strokeText(w.w, cx + ww / 2, y + 2); x.fillStyle = act ? C.orange : '#fff'; x.fillText(w.w, cx + ww / 2, y + 2); cx += ww + 24; }); }

// ---------- frame driver ----------
function frame(t) { _T = t; resetCam(); x.fillStyle = '#000'; x.fillRect(0, 0, W, H); draw(t); vignette(); captions(t); }
window.DURATION = 0;
window.ready = new Promise(r => window.addEventListener('load', r)).then(() => Promise.all([document.fonts.load('100px Bebas'), document.fonts.load('800 60px Mont')]))
  .then(() => { initTL(); window.DURATION = TL.total; frame(0); return true; });
