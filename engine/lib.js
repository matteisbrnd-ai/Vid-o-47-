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
  const arm = (side, up) => { if (o.noArms) return; x.save(); x.translate(side * 122, -480); x.rotate(up ? side * -2.7 : side * (0.22 + (o.walk ? sw * 0.8 * side : 0))); rrc(0, 95, 58, 200, 28, B2); ell(0, 205, 34, 32, SKIN); x.restore(); };
  const torso = () => { x.beginPath(); x.moveTo(-115, -500); x.quadraticCurveTo(-130, -360, -112, -235); x.lineTo(112, -235); x.quadraticCurveTo(130, -360, 115, -500); x.quadraticCurveTo(0, -540, -115, -500); x.closePath(); };
  torso(); fs(B1, 8); shadeClip(torso); arm(-1, o.armsUp); arm(1, o.armsUp || o.armUp);
  x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 5; x.beginPath(); x.moveTo(-108, -262); x.lineTo(108, -262); x.stroke();
  if (o.num !== false) { txt(o.num || '47', 0, -375, 118, o.numCol || C.orange, { sw: 10 }); }
  if (o.collar) { x.beginPath(); x.moveTo(-40, -515); x.lineTo(0, -470); x.lineTo(40, -515); x.lineWidth = 7; x.strokeStyle = OL; x.stroke(); }
  rrc(0, -530, 64, 50, 14, SKIN2, 6);
  const GALA = window.LOOK === 'gala', HY = -690, HR = 150;   // 'gala' look: head drawn 25 % smaller (more grown-up proportions)
  if (GALA) { x.save(); x.translate(0, -520); x.scale(0.76, 0.76); x.translate(0, 545); }
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
  const look = (o.look || 0) * 14, blink = o.blink && o.t != null && (t % 3.4) < 0.12, eyeY = HY + 10, eyeR = o.mood === 'shock' ? 48 : 41;
  [-55, 55].forEach(ex => { if (blink) { x.beginPath(); x.moveTo(ex - 28, eyeY); x.quadraticCurveTo(ex, eyeY + 12, ex + 28, eyeY); x.lineWidth = 7; x.strokeStyle = OL; x.stroke(); return; }
    ell(ex, eyeY, eyeR * 0.85, eyeR, '#ffffff', 6); ell(ex + look * 1.2, eyeY + 5, 19, 22, '#2a1d16', 0); x.fillStyle = '#fff'; x.beginPath(); x.arc(ex + look * 1.2 + 7, eyeY - 4, 7, 0, 7); x.fill(); });
  if (o.mood === 'smile' || o.mood === 'smug') { x.fillStyle = 'rgba(230,110,90,.35)'; [-1, 1].forEach(d => { x.beginPath(); x.ellipse(d * 92, HY + 62, 26, 14, 0, 0, 7); x.fill(); }); }
  if (o.glasses) { x.lineWidth = 7; x.strokeStyle = OL; [-55, 55].forEach(ex => { x.beginPath(); x.arc(ex, eyeY, 46, 0, 7); x.stroke(); }); }
  if (o.shades) { rrc(-55, eyeY, 100, 54, 16, '#121317', 6); rrc(55, eyeY, 100, 54, 16, '#121317', 6); }
  const br = { neutral: [0, 0], smile: [-6, 6], worried: [12, -18], shock: [-24, 0], smug: [10, 12], angry: [-14, 22] }[o.mood || 'neutral'];
  x.lineWidth = 13; x.strokeStyle = o.white ? '#bdbdbd' : '#3a2a22'; x.lineCap = 'round';
  [-1, 1].forEach(d => { x.beginPath(); x.moveTo(d * 85, eyeY - 52 + br[0]); x.lineTo(d * 30, eyeY - 52 + br[0] + br[1]); x.stroke(); });
  x.beginPath(); x.moveTo(6, HY + 40); x.quadraticCurveTo(24, HY + 62, 0, HY + 70); x.lineWidth = 6; x.strokeStyle = SKIN2; x.stroke();
  if (o.mustache) { x.fillStyle = o.white ? '#dcdcdc' : '#5a3a22'; x.beginPath(); x.moveTo(-60, HY + 92); x.quadraticCurveTo(-30, HY + 66, 0, HY + 84); x.quadraticCurveTo(30, HY + 66, 60, HY + 92); x.quadraticCurveTo(0, HY + 100, -60, HY + 92); x.fill(); x.lineWidth = 4; x.strokeStyle = OL; x.stroke(); }
  x.lineWidth = 7; x.strokeStyle = OL; const MY = HY + 100;
  if (o.mood === 'smile' || o.mood === 'smug') { x.beginPath(); x.moveTo(-50, MY - 8); x.quadraticCurveTo(0, MY + 44, 54, MY - 14); if (o.mood === 'smile') { x.closePath(); x.fillStyle = '#7a2a2a'; x.fill(); } x.stroke(); }
  else if (o.mood === 'shock') ell(0, MY + 12, 30, 38, '#5a1a1a', 6);
  else if (o.mood === 'worried') { x.beginPath(); x.moveTo(-36, MY + 10); x.quadraticCurveTo(-18, MY - 6, 0, MY + 8); x.quadraticCurveTo(18, MY - 6, 36, MY + 8); x.stroke(); }
  else { x.beginPath(); x.moveTo(-30, MY + 2); x.quadraticCurveTo(0, MY + 12, 30, MY + 2); x.stroke(); }
  if (o.sweat) ell(HR - 20, HY - 40 + ((t * 40) % 30), 12, 18, '#8fd0ff', 4);
  if (GALA) x.restore();
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
  if (id === 'q') { paperCard(qLines, 540, 400, P(t, S('q') + 0.1), { w: 760 }); if (t > S('q') + 1.2) pill(window.CTA || "ENVOIE-LA À UN POTE MALIN", 540, 680, P(t, S('q') + 1.2), C.red); }
  if (id === 'share') { resetCam(); x.fillStyle = `rgba(10,8,20,${0.55 * P(t, S('share'))})`; x.fillRect(0, 0, W, H);
    paperCard([['ENVOIE-LA À', 70], ["QUELQU'UN QUI PENSE", 62], ['ÊTRE MALIN', 92, C.red]], 540, 800, P(t, S('share')), { w: 860 }); } }

// ---------- captions: 1–3 upper-case words, current word in orange, dark pill, above TikTok's UI ----------
function captions(t) { if (t < (window.NOCAP_UNTIL || 0)) return; resetCam(); const b = TL.beats.find(b => t >= b.start && t < b.next - 0.07); if (!b || !b.words.length) return;
  const toks = b.show.replace(/\s+([?!:;»])/g, ' $1').split(/[ \t\n]+/).filter(Boolean), m = b.words.length;
  const tt = toks.map((w, i) => ({ w: w.toUpperCase(), t0: b.words[Math.min(m - 1, Math.floor(i * m / toks.length))].t0 }));
  const chunks = []; let cur = []; font(64, 'Mont'); const width = ws => ws.reduce((a, w) => a + x.measureText(w.w).width + 24, 0);
  tt.forEach(w => { if (cur.length && (cur.length >= 5 || width([...cur, w]) > 900 || /[.!?…]$/.test(cur[cur.length - 1].w))) { chunks.push(cur); cur = []; } cur.push(w); }); if (cur.length) chunks.push(cur);
  let ch = chunks[0]; chunks.forEach(c => { if (t >= c[0].t0 - 0.05) ch = c; }); const y = 1300, sz = 64, tw = width(ch);
  x.fillStyle = 'rgba(14,15,18,.62)'; x.beginPath(); x.roundRect(540 - tw / 2 - 26, y - sz * 0.8, tw + 40, sz * 1.55, 22); x.fill();
  let cx = 540 - tw / 2 + 8; ch.forEach((w, i) => { const ww = x.measureText(w.w).width, act = t >= w.t0 && (i === ch.length - 1 || t < ch[i + 1].t0);
    font(64, 'Mont'); x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = 9; x.strokeStyle = '#000'; x.strokeText(w.w, cx + ww / 2, y + 2); x.fillStyle = act ? C.orange : '#fff'; x.fillText(w.w, cx + ww / 2, y + 2); cx += ww + 24; }); }

// ---------- frame driver ----------
function grade() { if (window.LOOK !== 'gala') return; resetCam();                 // warm storybook grade + paper grain + soft vignette (Galagade-like)
  x.save(); x.globalCompositeOperation = 'soft-light'; x.fillStyle = 'rgba(255,190,120,.35)'; x.fillRect(0, 0, W, H); x.restore();
  x.save(); x.globalCompositeOperation = 'multiply'; const g = x.createRadialGradient(540, 900, 500, 540, 960, 1250); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(120,90,70,1)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  if (!window._grain) { const c = document.createElement('canvas'); c.width = c.height = 256; const g2 = c.getContext('2d'), d = g2.createImageData(256, 256); for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 14; } g2.putImageData(d, 0, 0); window._grain = x.createPattern(c, 'repeat'); }
  x.save(); x.fillStyle = window._grain;   // static grain: moving grain made a 30 s video weigh 150 MB
  x.fillRect(-256, -256, W + 512, H + 512); x.restore(); }
function frame(t) { _T = t; resetCam(); x.fillStyle = '#000'; x.fillRect(0, 0, W, H); draw(t); grade(); vignette(); captions(t); }
window.DURATION = 0;
window.ready = new Promise(r => window.addEventListener('load', r)).then(() => Promise.all([document.fonts.load('100px Bebas'), document.fonts.load('800 60px Mont')]))
  .then(() => { initTL(); window.DURATION = TL.total; frame(0); return true; });

// ---------- inserts (big close-up props, one per clue) & transitions — inspired by the « Monsieur Énigme » style ----------
// banner: tilted blue label like « LUNDI MATIN » (time / place), at most one per shot
function banner(s, px, py, p, col = '#2f5fb3') { if (p <= 0) return; ev('pop', 'bn' + s); x.save(); resetCam(); x.translate(px, py); x.rotate(-0.05); const k = eBack(clamp(p)); x.scale(k, k);
  font(66); const w = x.measureText(s).width + 70; x.fillStyle = 'rgba(0,0,0,.25)'; x.beginPath(); x.roundRect(-w / 2 + 8, -44, w, 96, 18); x.fill(); rrc(0, 0, w, 92, 18, col, 7); txt(s, 0, 4, 66, '#fff', { stroke: false }); x.restore(); }
// white flash + whoosh at a cut (call with the cut time)
function flashCut(t, tc) { const k = t - tc; if (k < 0 || k > 0.18) return; ev('whoosh', 'cut' + tc.toFixed(2)); resetCam(); x.fillStyle = `rgba(255,255,255,${0.75 * (1 - k / 0.18)})`; x.fillRect(0, 0, W, H); }
// vibration lines around a point (ringing, impact)
function shakeLines(px, py, r, t, col = OL) { x.save(); x.strokeStyle = col; x.lineWidth = 10; x.lineCap = 'round'; const j = Math.sin(t * 40) * 6;
  [[-1, -0.6], [-1, 0], [-1, 0.6], [1, -0.6], [1, 0], [1, 0.6]].forEach(([sx, a]) => { x.beginPath(); x.arc(px, py, r + 30 + Math.abs(a) * 10 + j, (sx < 0 ? Math.PI : 0) + a * 0.5 - 0.15, (sx < 0 ? Math.PI : 0) + a * 0.5 + 0.15); x.stroke(); }); x.restore(); }
function metal(y0, y1) { const g = x.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, '#ffffff'); g.addColorStop(0.35, '#c9d0da'); g.addColorStop(0.6, '#8b95a5'); g.addColorStop(1, '#dfe4ea'); return g; }
// one handcuff ring around a vertical wrist, seen from the front: back arc, (wrist drawn by caller), front arc
function cuffArc(cx, cy, rx, ry, a0, a1) { x.lineCap = 'round'; x.strokeStyle = OL; x.lineWidth = 46; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, a0, a1); x.stroke();
  x.strokeStyle = metal(cy - ry - 20, cy + ry + 20); x.lineWidth = 32; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, a0, a1); x.stroke();
  x.strokeStyle = 'rgba(255,255,255,.8)'; x.lineWidth = 6; x.beginPath(); x.ellipse(cx, cy - 6, rx, ry, 0, a0 + 0.2, a1 - 0.2); x.stroke(); }
function lockBox(cx, cy, side) { rrc(cx, cy, 86, 130, 14, metal(cy - 65, cy + 65), 7); rrc(cx, cy, 50, 90, 8, 'rgba(0,0,0,.12)', 0);
  ell(cx, cy - 12, 12, 12, OL, 0); x.fillStyle = OL; x.fillRect(cx - 5, cy - 8, 10, 30); ell(cx + side * 30, cy + 48, 8, 8, '#6b7482', 3); }
function chainLink(cx, cy, w, h) { x.lineWidth = 26; x.strokeStyle = OL; x.beginPath(); x.ellipse(cx, cy, w, h, 0, 0, 7); x.stroke(); x.lineWidth = 15; x.strokeStyle = metal(cy - h, cy + h); x.beginPath(); x.ellipse(cx, cy, w, h, 0, 0, 7); x.stroke(); }
// full-screen insert: 47's two wrists in close-up, the cuffs snapping shut (close 0 → 1). Unmistakable handcuffs.
function cuffsInsert(t, close, zoom = 1, shake = 0, sleeve = '#33384a', band = C.orange) {
  resetCam(); const g = x.createRadialGradient(540, 700, 80, 540, 900, 1300); g.addColorStop(0, '#ffe2a6'); g.addColorStop(0.45, '#c08a52'); g.addColorStop(1, '#4a2e1c'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = '#6b4226'; x.fillRect(0, 1380, W, 600); x.fillStyle = 'rgba(0,0,0,.18)'; for (let i = 0; i < 6; i++) x.fillRect(0, 1420 + i * 90, W, 6);
  x.save(); x.translate(540 + Math.sin(t * 60) * shake, 960 + Math.cos(t * 51) * shake); x.scale(zoom, zoom); x.translate(-540, -960);
  const wy = 980, L = 330, R = 750, rx = 120, ry = 46;
  [L, R].forEach(px => cuffArc(px, wy, rx, ry, Math.PI, 2 * Math.PI));                     // back halves
  [L, R].forEach((px, i) => { const sd = i ? 1 : -1;                                        // arms + fists
    x.save(); x.translate(px, wy); x.rotate(sd * 0.08);
    rbox(-105, 120, 210, 900, 40, sleeve, 8); rbox(-105, 120, 210, 46, 20, band, 7);   // sleeve with orange cuff
    rbox(-72, -60, 144, 240, 40, SKIN, 8);                                                  // wrist
    rbox(-98, -300, 196, 250, 70, SKIN, 8);                                                 // fist
    x.strokeStyle = SKIN2; x.lineWidth = 7; for (let k = -1; k <= 1; k++) { x.beginPath(); x.moveTo(-90, -230 + (k + 1) * 55); x.lineTo(-20, -230 + (k + 1) * 55); x.stroke(); }
    rbox(-sd * 95 - 32, -250, 64, 140, 32, SKIN, 7); x.restore(); });                       // thumb
  const sw = (1 - clamp(close)) * 1.1;                                                     // front halves: swing arm rotates shut
  [L, R].forEach((px, i) => { const sd = i ? -1 : 1; x.save(); x.translate(px + sd * rx, wy); x.rotate(sd * -sw); x.translate(-(px + sd * rx), -wy);
    cuffArc(px, wy, rx, ry, 0, Math.PI); x.restore(); lockBox(px + sd * (rx - 6), wy + 10, sd); });
  const a = L + rx + 40, b = R - rx - 40; chainLink(a + 10, wy + 10, 34, 20); chainLink((a + b) / 2, wy + 10, 22, 34); chainLink(b - 10, wy + 10, 34, 20);
  if (close >= 1) { x.save(); x.globalCompositeOperation = 'lighter'; x.fillStyle = 'rgba(255,255,255,.35)'; [L, R].forEach(px => { x.beginPath(); x.ellipse(px - 50, wy + 30, 26, 8, -0.3, 0, 7); x.fill(); }); x.restore(); }
  x.restore(); }
// big ceiling bulb, on or off
function bulbInsert(t, on) { resetCam(); x.fillStyle = on ? '#3b3a5c' : '#07070d'; x.fillRect(0, 0, W, H);
  if (on) { x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 900, 40, 540, 900, 800); g.addColorStop(0, 'rgba(255,230,140,.9)'); g.addColorStop(1, 'rgba(255,230,140,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore(); }
  x.strokeStyle = OL; x.lineWidth = 12; x.beginPath(); x.moveTo(540, -10); x.lineTo(540, 520); x.stroke(); rrc(540, 580, 130, 140, 16, '#5a5f6b', 8);
  x.beginPath(); x.arc(540, 860, 230, 0, 7); fs(on ? '#fff3b8' : '#2a2c36', 9); x.strokeStyle = on ? '#e0a020' : '#5a5f6b'; x.lineWidth = 9; x.beginPath(); x.moveTo(480, 860); x.lineTo(510, 800); x.lineTo(540, 860); x.lineTo(570, 800); x.lineTo(600, 860); x.stroke();
  if (on) { x.save(); x.globalAlpha = .6; ell(470, 770, 40, 60, '#fff', 0); x.restore(); } }
// open book in a cosy armchair, lit by a reading lamp (his version of the evening)
function bookInsert(t) { resetCam(); x.fillStyle = '#e9c9a0'; x.fillRect(0, 0, W, H); x.fillStyle = '#8a5a3a'; x.fillRect(0, 1450, W, 500);
  rbox(80, 700, 920, 900, 120, '#8a2f3a', 9); rbox(160, 1000, 760, 500, 60, '#a33a48', 8);
  x.strokeStyle = OL; x.lineWidth = 10; x.beginPath(); x.moveTo(930, 1450); x.lineTo(930, 380); x.stroke(); poly([[820, 400], [1040, 400], [1000, 250], [860, 250]], '#ffe08a', 8);
  x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(900, 420, 20, 700, 1100, 900); g.addColorStop(0, 'rgba(255,230,150,.55)'); g.addColorStop(1, 'rgba(255,230,150,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  x.save(); x.translate(540, 1050); x.rotate(-0.06); poly([[-330, -40], [0, 10], [0, 250], [-330, 200]], '#fffaf0', 8); poly([[330, -40], [0, 10], [0, 250], [330, 200]], '#fffaf0', 8);
  x.strokeStyle = '#b9b2a2'; x.lineWidth = 6; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(-290, 20 + i * 30); x.lineTo(-40, 50 + i * 30); x.stroke(); x.beginPath(); x.moveTo(40, 50 + i * 30); x.lineTo(290, 20 + i * 30); x.stroke(); } x.restore(); }
// shop window with a cracking pane
function vitrineInsert(t, crack) { resetCam(); x.fillStyle = '#1b2142'; x.fillRect(0, 0, W, H); rbox(60, 300, 960, 1300, 10, '#7a3a8a', 9); rbox(130, 380, 820, 1000, 8, '#29355f', 8);
  [[300, 1150], [540, 1080], [780, 1150]].forEach(([dx, dy]) => { rrc(dx, dy + 90, 170, 60, 10, '#efe3f2', 6); poly([[dx - 40, dy], [dx + 40, dy], [dx + 60, dy - 30], [dx, dy - 80], [dx - 60, dy - 30]], '#bfe8ff', 6); x.fillStyle = 'rgba(255,255,255,.8)'; x.fillRect(dx - 10, dy - 55, 12, 30); });
  x.save(); x.globalAlpha = .18; x.fillStyle = '#fff'; poly([[200, 400], [420, 400], [200, 900]], '#fff', 0); x.restore();
  if (crack > 0) { x.strokeStyle = '#ffffff'; x.lineWidth = 7; const cx0 = 600, cy0 = 760; for (let i = 0; i < 11; i++) { const a = i / 11 * 6.283 + 0.3, r = 520 * clamp(crack); x.beginPath(); x.moveTo(cx0, cy0); x.lineTo(cx0 + Math.cos(a) * r * 0.5 + 20 * Math.sin(i), cy0 + Math.sin(a) * r * 0.5); x.lineTo(cx0 + Math.cos(a + 0.1) * r, cy0 + Math.sin(a + 0.1) * r); x.stroke(); }
    [100, 200].forEach(r => { x.beginPath(); x.arc(cx0, cy0, r * clamp(crack), 0, 7); x.stroke(); }); } }

// hook card (stats 2026-11-08: the only video past the test batch had its paradox READABLE at frame 0).
// Fully visible from frame 0 (no pop-in), word-by-word captions are muted while it shows.
function hookCard(t, lines, until = 2.5, tag = window.HOOK_TAG) { window.NOCAP_UNTIL = until; if (t >= until) return; resetCam(); const a = t > until - 0.2 ? (until - t) / 0.2 : 1;
  x.save(); x.globalAlpha = a; paperCard(lines, 540, 330, 1, { w: 920 }); if (tag) { rrc(540, 175, 40 + tag.length * 34, 76, 38, C.red, 6); txt(tag, 540, 179, 50, '#fff', { stroke: false }); } x.restore(); }   // tag = context (« ÉNIGME », « TEST PSYCHO »)

// ---------- « grande toile » mode (outside feedback 2026-11-08: too many separate shots, too dark) ----------
// The whole story lives on ONE big bright canvas (panels side by side); the camera glides, zooms and de-zooms
// between them instead of cutting. keys = [[tStart, dur, x, y, z], ...] (world coords; z = zoom). Long moves de-zoom automatically.
function camPath(t, keys, shake = 0) { let cx = keys[0][2], cy = keys[0][3], cz = keys[0][4];
  for (const [ts, d, kx, ky, kz] of keys) { if (t <= ts) break; const k = d > 0 ? eIO(clamp((t - ts) / d)) : 1, dist = Math.hypot(kx - cx, ky - cy), dip = clamp(dist / 3200, 0, 0.65);
    const nz = Math.exp(lerp(Math.log(cz), Math.log(kz), k)) * (1 - dip * Math.sin(Math.PI * k)); cx = lerp(cx, kx, k); cy = lerp(cy, ky, k); cz = k >= 1 ? kz : nz; }
  cam(cx, cy, cz, shake, t); return [cx, cy, cz]; }
// draw one panel of the canvas: clipped to its rectangle, local coords 0..w x 0..h (a 1080x1920 panel = one phone screen)
function panel(zx, zy, w, h, fn) { x.save(); x.beginPath(); x.rect(zx, zy, w, h); x.clip(); x.translate(zx, zy); fn(); x.restore();
  x.strokeStyle = OL; x.lineWidth = 16; x.strokeRect(zx, zy, w, h); }

// stone / brick texture for walls (Galagade-like detailed sets)
function bricks(x0, y0, w, h, col = '#b9ad98', line = 'rgba(80,60,40,.35)', bw = 90, bh = 44) { x.fillStyle = col; x.fillRect(x0, y0, w, h); x.save(); x.beginPath(); x.rect(x0, y0, w, h); x.clip(); x.strokeStyle = line; x.lineWidth = 4;
  for (let r = 0; r * bh < h; r++) for (let c = -1; c * bw < w; c++) { const bx = x0 + c * bw + (r % 2) * bw / 2, by = y0 + r * bh; x.strokeRect(bx, by, bw, bh); if ((r * 7 + c * 3) % 5 === 0) { x.fillStyle = 'rgba(0,0,0,.06)'; x.fillRect(bx + 3, by + 3, bw - 6, bh - 6); } } x.restore(); }

// « format allemand » cards (question → comment card → follow CTA → solution → « T'avais trouvé ? »). Beat ids: q c1 c2 … end.
function germanCards(t, qLines) { const id = curId(t); resetCam();
  if (id === 'q') paperCard(qLines, 540, 420, P(t, S('q')), { w: 860 });
  if (id === 'c1') paperCard([['ÉCRIS TA RÉPONSE', 70], ['EN COMMENTAIRE 💬', 80, C.red], ['AVANT LA SOLUTION', 46]], 540, 520, P(t, S('c1')), { w: 860 });
  if (id === 'c2') paperCard([['1 ÉNIGME PAR JOUR', 70], ["SI C'EST PAS POUR TOI…", 54], ['LAISSE LA PLACE 😏', 76, C.red]], 540, 520, P(t, S('c2')), { w: 860 });
  if (id === 'end') paperCard([["T'AVAIS TROUVÉ ?", 96, C.red]], 540, 460, P(t, S('end')), { w: 820 }); }
