// Horreur — « Dans la ville de 47… les ombres » : à minuit les ombres se décollent et cherchent un corps ; 47 est né sans ombre ; maman lui donne la sienne.
window.LOOK = 'gala';
const GY = 1500, GREYB = { mood: 'angry', look: 1, blink: true }, ORA = '#f2782a', ORA2 = '#c85a18';
function mixC(a, b, k) { const p = (h) => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16)); const A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * k).toString(16).padStart(2, '0')).join(''); }
function gray(fn, k = 1) { x.save(); x.filter = `grayscale(${k})`; fn(); x.restore(); }
function baron(px, py, s, t, o = {}) { gray(() => cast('boss', px, py, s, t, { blink: true, ...o })); }
function cheekSpot(px, py, s, k) { if (k <= 0) return; ell(px + 70 * s, py - 583 * s, 30 * s * k, 22 * s * k, ORA, 0); }
// ---------- sets (screen space 1080 x 1920, ground GY) ----------
function moon(px, py, r) { const g = x.createRadialGradient(px, py, r * 0.2, px, py, r * 3); g.addColorStop(0, 'rgba(220,230,255,.35)'); g.addColorStop(1, 'rgba(220,230,255,0)'); x.fillStyle = g; x.fillRect(px - r * 3, py - r * 3, r * 6, r * 6); ell(px, py, r, r, '#e9eef8', 0); ell(px - r * 0.3, py - r * 0.1, r * 0.18, r * 0.18, '#cfd6e6', 0); ell(px + r * 0.25, py + r * 0.3, r * 0.12, r * 0.12, '#cfd6e6', 0); }
function nightSky() { x.fillStyle = vg(-300, GY, '#0b1024', '#26304f'); x.fillRect(-400, -400, W + 800, GY + 400); for (let i = 0; i < 40; i++) { const sx = (i * 263) % 1300 - 100, sy = (i * 151) % 900; ell(sx, sy, 3, 3, 'rgba(255,255,255,.6)', 0); } }
function lamp(px, t, on = 1) { rbox(px - 12, GY - 760, 24, 760, 6, '#2a2f3e', 5); x.strokeStyle = '#2a2f3e'; x.lineWidth = 18; x.beginPath(); x.moveTo(px, GY - 750); x.quadraticCurveTo(px + 20, GY - 820, px + 110, GY - 800); x.stroke(); rbox(px + 70, GY - 805, 90, 40, 10, '#3a4050', 5);
  if (on) { const f = 0.85 + 0.15 * Math.sin(t * 23) * Math.sin(t * 7); x.save(); x.globalAlpha = 0.22 * f; poly([[px + 80, GY - 770], [px + 150, GY - 770], [px + 380, GY], [px - 150, GY]], '#ffe7a8', 0); x.restore(); ell(px + 115, GY - 765, 34, 12, `rgba(255,236,170,${f})`, 0); } }
function street(t, o = {}) { nightSky(); moon(o.moonX ?? 820, 330, 70);
  [[-60, 520, 560, '#1a2036'], [470, 620, 300, '#20273f'], [760, 440, 420, '#1a2036']].forEach(([bx, by, w, c], i) => { rbox(bx, by, w, GY - by, 0, c, 0); for (let r = 0; r < 6; r++) for (let k = 0; k < 3; k++) { const lit = ((r * 7 + k * 3 + i) % 5) === 0; rbox(bx + 40 + k * (w - 60) / 3, by + 60 + r * 140, 60, 80, 4, lit ? '#e8c46a' : '#2c3552', 0); } });
  x.fillStyle = '#1c2133'; x.fillRect(-400, GY, W + 800, 600); x.fillStyle = '#2b3147'; x.fillRect(-400, GY, W + 800, 26); if (o.lamp !== false) lamp(o.lampX ?? 120, t); }
function house(t, o = {}) { nightSky(); moon(880, 260, 60); bricks(-100, 380, 1300, GY - 380, '#3a3448', 'rgba(0,0,0,.25)'); x.fillStyle = '#1c2133'; x.fillRect(-400, GY, W + 800, 600);
  door(540, GY - 820, 400, 820, '#2f3d63', null); rbox(300, GY - 20, 480, 40, 8, '#4a3a2a', 5); txt('47', 540, GY - 900, 70, '#e8c46a', { stroke: false });
  const g = x.createRadialGradient(540, GY - 960, 10, 540, GY - 700, 600); g.addColorStop(0, 'rgba(255,230,160,.35)'); g.addColorStop(1, 'rgba(255,230,160,0)'); x.fillStyle = g; x.fillRect(0, GY - 1500, W, 1500); ell(540, GY - 960, 40, 20, '#ffe7a8', 4); }
function beanie(px, py, s, col = ORA, col2 = ORA2, print = 0, rot = 0) { x.save(); x.translate(px, py); x.rotate(rot); x.scale(s, s); x.beginPath(); x.moveTo(-160, 0); x.quadraticCurveTo(-150, -230, 0, -240); x.quadraticCurveTo(150, -230, 160, 0); x.closePath(); fs(col, 8);
  x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 6; for (let i = -3; i <= 3; i++) { x.beginPath(); x.moveTo(i * 38, -10); x.quadraticCurveTo(i * 30, -120, i * 18, -215); x.stroke(); } rrc(0, -10, 360, 80, 28, col2, 8);
  if (print > 0) { x.save(); x.globalAlpha = print; for (let r = 1; r < 7; r++) { x.strokeStyle = '#8a8c94'; x.lineWidth = 7; x.beginPath(); x.ellipse(50, -120, r * 11, r * 14, 0.3, 0.3, 5.9); x.stroke(); } x.restore(); } x.restore(); }
function bedroom(t, open) { x.fillStyle = vg(0, GY, '#141a2e', '#1d2440'); x.fillRect(-200, -200, W + 400, GY + 200); x.fillStyle = '#151a2a'; x.fillRect(-200, GY, W + 400, 600);
  rbox(80, 380, 300, 340, 8, '#0d1222', 8); x.strokeStyle = '#26304f'; x.lineWidth = 10; x.beginPath(); x.moveTo(230, 380); x.lineTo(230, 720); x.moveTo(80, 550); x.lineTo(380, 550); x.stroke(); moon(300, 470, 34);   // window
  rbox(680, GY - 900, 330, 900, 4, '#0a0d18', 0); const ow = 330 * open; if (ow > 2) { x.save(); x.globalAlpha = 0.5; poly([[680, GY - 900], [680 + ow, GY - 900], [680 + ow + 260 * open, GY + 300], [680 - 120 * open, GY + 300]], '#ffe7a8', 0); x.restore(); } rbox(680 + ow, GY - 900, 330 - ow, 900, 4, '#3a3043', 7);
  rbox(760, 300, 220, 100, 14, '#0b0b10', 6); txt('03:00', 870, 354, 72, '#ff3a3a', { stroke: false }); }
function orphanage(t, o = {}) { nightSky(); moon(200, 300, 80); const bx = o.bx ?? 560;
  rbox(bx, 560, 520, GY - 560, 0, '#2a2838', 8); poly([[bx - 30, 580], [bx + 260, 380], [bx + 550, 580]], '#1f1d2b', 8); for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) { rbox(bx + 50 + k * 160, 680 + r * 210, 100, 130, 4, '#0c0c14', 6); x.strokeStyle = '#2a2838'; x.lineWidth = 8; x.beginPath(); x.moveTo(bx + 50 + k * 160, 680 + r * 210); x.lineTo(bx + 150 + k * 160, 810 + r * 210); x.stroke(); }
  x.save(); x.translate(bx + 260, 520); x.rotate(0.1); rbox(-220, -40, 440, 80, 8, '#4a4458', 6); txt('ORPHELINAT', 0, 4, 54, '#9a94a8', { stroke: false }); x.restore(); rbox(bx + 200, GY - 300, 120, 300, 4, '#0c0c14', 6);
  x.fillStyle = '#1c2133'; x.fillRect(-400, GY, W + 800, 600); }
function wall(t, spot, names) { x.fillStyle = '#05060a'; x.fillRect(-200, -200, W + 400, H + 400); x.save(); x.beginPath(); x.arc(spot[0], spot[1], spot[2], 0, 7); x.clip();
  bricks(-100, -100, 1300, 2200, '#57535f', 'rgba(0,0,0,.3)'); x.strokeStyle = '#c8c8cc'; x.lineWidth = 9; x.lineCap = 'round';
  for (let g = 0; g < 28; g++) { const gx = 60 + (g % 4) * 260, gy = 200 + Math.floor(g / 4) * 230; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(gx + i * 26, gy); x.lineTo(gx + i * 26 + 4, gy + 90); x.stroke(); } x.beginPath(); x.moveTo(gx - 14, gy + 70); x.lineTo(gx + 100, gy + 20); x.stroke();
    if (names > 0) { x.save(); x.globalAlpha = clamp(names * 2 - g / 28); txt('47', gx + 170, gy + 50, 66, ORA, { stroke: false }); x.restore(); } }
  const g2 = x.createRadialGradient(spot[0], spot[1], spot[2] * 0.5, spot[0], spot[1], spot[2]); g2.addColorStop(0, 'rgba(0,0,0,0)'); g2.addColorStop(1, 'rgba(0,0,0,.85)'); x.fillStyle = g2; x.fillRect(-200, -200, W + 400, H + 400); x.restore(); }
function torch(px, py) { x.save(); x.translate(px, py); x.rotate(-0.6); rbox(-30, 0, 60, 200, 14, '#3a3d44', 6); rbox(-44, -40, 88, 60, 12, '#5a5d66', 6); x.restore(); }
function hand(px, py, s, rot = 0) { x.save(); x.translate(px, py); x.rotate(rot); x.scale(s, s); gray(() => { rbox(40, -60, 520, 130, 50, '#2a2d36', 8); ell(0, 0, 110, 85, '#c9c9cc', 8); [[-80, -40], [-95, 5], [-85, 45], [-60, 75]].forEach(([fx, fy]) => ell(fx, fy, 48, 22, '#c9c9cc', 6, 0.2)); ell(-10, -80, 26, 50, '#c9c9cc', 6, 0.6); }); x.restore(); }
function police(t) { const a = Math.sin(t * 10) > 0; resetCam(); x.save(); x.globalCompositeOperation = 'screen'; x.fillStyle = a ? 'rgba(220,40,40,.28)' : 'rgba(40,80,230,.28)'; x.fillRect(0, 0, W, H); x.restore(); }
function bigCount(t, t0) { const k = clamp((t - t0) / 1.6), n = Math.round(1 + 436 * k * k); return n; }
function notebook(p, items) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, 760); const k = eBack(clamp(p)); x.scale(k, k); x.rotate(-0.03); rbox(-470, -300, 940, 600, 10, '#d9d0b8', 8); rbox(-470, -300, 40, 600, 6, '#5a2a2a', 5);
  txt('MES MENSONGES', 20, -220, 58, '#3a3228', { stroke: false }); items.forEach(([s, c], i) => txt(s, 20, -100 + i * 130, 44, c || '#2a2a3a', { stroke: false })); x.restore(); }
function dim(a) { resetCam(); x.fillStyle = `rgba(6,8,20,${a})`; x.fillRect(0, 0, W, H); }

const LOLA = { hairCol: '#c0392b', body: '#2c4f8a', body2: '#223f70', pants: '#223f70' };
// the thing: very tall, pale, faceless, one round mouth that sucks colours
function chose(px, py, s, t, o = {}) { const bend = o.bend ?? 0.25, open = o.open ?? 1; x.save(); x.translate(px, py); x.scale(s, s);
  x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.ellipse(0, 6, 220, 30, 0, 0, 7); x.fill();
  [[-60], [60]].forEach(([lx]) => { rbox(lx - 26, -900, 52, 900, 22, '#b9b8c2', 7); });
  x.save(); x.translate(0, -880); x.rotate(bend); const body = () => { x.beginPath(); x.moveTo(-120, 0); x.quadraticCurveTo(-140, -500, -70, -820); x.lineTo(70, -820); x.quadraticCurveTo(140, -500, 120, 0); x.closePath(); }; body(); fs('#cfced6', 8); shadeClip(body, 'rgba(0,0,0,.18)', 60);
  for (let i = 0; i < 6; i++) { x.strokeStyle = 'rgba(80,80,95,.35)'; x.lineWidth = 6; x.beginPath(); x.moveTo(-70, -200 - i * 90); x.quadraticCurveTo(0, -180 - i * 90, 70, -200 - i * 90); x.stroke(); }   // ribs
  [[-1], [1]].forEach(([d]) => { x.save(); x.translate(d * 110, -760); x.rotate(d * (0.12 + 0.04 * Math.sin(t * 1.3 + d))); rbox(-20, 0, 40, 860, 20, '#c4c3cc', 7); [-1, 0, 1].forEach(f => { x.strokeStyle = OL; x.lineWidth = 9; x.beginPath(); x.moveTo(f * 12, 850); x.lineTo(f * 22, 940); x.stroke(); x.strokeStyle = '#c4c3cc'; x.lineWidth = 5; x.stroke(); }); x.restore(); });
  x.translate(0, -900); ell(0, 0, 150, 170, '#d8d7de', 8); const r = 70 * open; ell(0, 20, r * 1.05, r, '#0a0a0e', 6); for (let k = 1; k < 4; k++) { x.strokeStyle = `rgba(120,30,40,${0.5 - k * 0.12})`; x.lineWidth = 5; x.beginPath(); x.ellipse(0, 20, r * (1 - k * 0.22), r * (0.95 - k * 0.22), 0, 0, 7); x.stroke(); }
  x.restore(); x.restore(); }
function suck(cx, cy, t, k, cols = [ORA, '#e05a7a', '#5fd3ff', '#7cff8a', '#ffe14a']) { if (k <= 0) return; x.save(); for (let i = 0; i < 26; i++) { const ph = ((t * 0.7 + i / 26) % 1), a = i * 2.4 + t * 2, rr = 520 * (1 - ph); x.globalAlpha = k * Math.min(1, ph * 3) * 0.9; ell(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.8, 16 * (1 - ph) + 4, 16 * (1 - ph) + 4, cols[i % cols.length], 0); } x.restore(); }
function people(t, n = 5, y = GY) { for (let i = 0; i < n; i++) gray(() => cast('inspector', 80 + i * 230 + (i % 2) * 40, y, 0.6, t, { hat: i % 2 ? 'cap' : 'hair', hatCol: '#777', hairCol: '#555', body: '#666', body2: '#555', pants: '#444', num: false, mood: 'neutral', look: i % 2 ? 1 : -1, blink: true })); }
function knockFx(t, times, px, py, sz = 150) { times.forEach((tk, i) => { if (t >= tk && t < tk + 0.9) { onoma('TOC', px + (i - 1) * 260, py + (i % 2) * 40, P(t, tk), sz); } }); }
function knockTimes(t0, n = 3, gap = 0.32) { return Array.from({ length: n }, (_, i) => t0 + i * gap); }
function interior(t, o = {}) { x.fillStyle = vg(0, GY, '#161b30', '#1f2643'); x.fillRect(-200, -200, W + 400, GY + 200); x.fillStyle = '#141826'; x.fillRect(-200, GY, W + 400, 600);
  const sh = o.shake || 0; x.save(); x.translate(Math.sin(t * 70) * sh, 0); door(540, GY - 900, 420, 900, '#3a3043', null); ell(540, GY - 560, 16, 16, '#e2b649', 4);   // peephole
  if (o.press > 0) { x.save(); x.globalAlpha = o.press; for (let k = 0; k < 4; k++) { x.strokeStyle = `rgba(0,0,0,${0.45 - k * 0.08})`; x.lineWidth = 14; x.beginPath(); x.ellipse(540, GY - 500, 90 + k * 45, 80 + k * 40, 0, 0, 7); x.stroke(); } x.restore(); } x.restore(); }
function peephole(t, fn) { resetCam(); x.fillStyle = '#020204'; x.fillRect(0, 0, W, H); x.save(); x.beginPath(); x.arc(540, 820, 480, 0, 7); x.clip(); x.translate(540, 820); x.scale(0.62, 0.62); x.translate(-540, -1000); fn(); x.restore();
  const g = x.createRadialGradient(540, 820, 200, 540, 820, 490); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.8, 'rgba(0,0,0,.35)'); g.addColorStop(1, 'rgba(0,0,0,1)'); x.fillStyle = g; x.beginPath(); x.arc(540, 820, 490, 0, 7); x.fill(); x.strokeStyle = '#2a2a30'; x.lineWidth = 24; x.beginPath(); x.arc(540, 820, 490, 0, 7); x.stroke(); }
function footprints(k) { for (let i = 0; i < 8; i++) { if (i / 8 > k) break; const fx = 120 + i * 70 + (i % 2) * 40, fy = GY + 120 - i * 14; ell(fx, fy, 22, 34, 'rgba(150,150,160,.8)', 0, -0.4); ell(fx - 6, fy - 40, 12, 10, 'rgba(150,150,160,.8)', 0); } }
function lolaRoom(t, grey) { room('#2a2d44', '#232640', '#1a1c2c', GY); rbox(120, GY - 300, 840, 260, 20, grey ? '#8a8a90' : '#f2f2f6', 8); rbox(120, GY - 340, 240, 110, 30, '#ffffff', 7);
  rbox(640, 300, 300, 360, 8, '#0d1222', 8); moon(790, 470, 34); }

const ROSA = { hat: 'hair', hairCol: '#ecebe6', glasses: true, body: '#7a4a8a', body2: '#633a72', pants: '#4a4a5a' };
const MOM = { hat: 'hair', hairCol: '#5a3a22', body: '#3f7e8a', body2: '#336a74', pants: '#3a3d44' };
function shadowOf(fn, a = 0.88, skew = 0, sx = 1, sy = 1) { x.save(); x.globalAlpha = a; x.filter = 'brightness(0)'; x.transform(sx, 0, skew, sy, 0, 0); fn(); x.restore(); }
function wallShadow(px, py, s, t, o = {}) { const k = o.peel || 0; x.save(); x.translate(px, py); x.rotate(-0.08 * k); x.translate(-px, -py);
  shadowOf(() => toon(px + k * 60, py, s, { t, blink: false, hat: 'hair', hairCol: '#000', body: '#000', body2: '#000', pants: '#000', num: false, mood: 'neutral', armUp: o.armUp, look: 0, ...o.look2 }), 0.85); x.restore(); }
function ink(px, py, k, t) { if (k <= 0) return; x.save(); x.fillStyle = '#050508'; x.beginPath(); x.ellipse(px, py, 260 * k, 60 * k, 0, 0, 7); x.fill(); for (let i = 0; i < 5; i++) { const a = -1.2 + i * 0.6 + Math.sin(t * 2 + i) * 0.1; x.beginPath(); x.ellipse(px + Math.sin(a) * 240 * k, py + Math.cos(a) * 80 * k + 40 * k, 50 * k, 26 * k, a, 0, 7); x.fill(); } x.restore(); }
function lampGlow(px, py, on, t) { rbox(px - 10, py, 20, 160, 4, '#3a3d44', 4); poly([[px - 60, py], [px + 60, py], [px + 40, py - 90], [px - 40, py - 90]], on ? '#ffe7a8' : '#55585f', 5); if (on) { const g = x.createRadialGradient(px, py - 40, 10, px, py - 40, 260); g.addColorStop(0, 'rgba(255,230,160,.45)'); g.addColorStop(1, 'rgba(255,230,160,0)'); x.fillStyle = g; x.fillRect(px - 260, py - 300, 520, 520); } }
function rosaRoom(t) { room('#4a4258', '#3e3850', '#2a2434', GY); rbox(140, GY - 300, 800, 260, 20, '#e8e4f0', 8); rbox(140, GY - 340, 240, 110, 30, '#ffffff', 7); }
function hall(t, lit = 1) { x.fillStyle = vg(0, GY, lit ? '#2a2f48' : '#0c0e18', lit ? '#363c5a' : '#121424'); x.fillRect(-200, -200, W + 400, GY + 200); x.fillStyle = lit ? '#1c2133' : '#08090f'; x.fillRect(-200, GY, W + 400, 600); door(540, GY - 900, 420, 900, lit ? '#3a3043' : '#1a1520', null); txt('47', 540, GY - 960, 50, '#9a94a8', { stroke: false }); }
function sunRoom(t) { room('#f3e1c2', '#ead2ad', '#b98a5a', GY); rbox(640, 300, 340, 400, 8, '#bfe4ff', 7); ell(810, 420, 60, 60, '#ffd27a', 0); }
function draw(t) {
  const id = curId(t), s0 = S(id), w = (b, r) => WF(b, r);
  const tMin = w('ff', /minuit/i), tDec = w('ff', /décollent/i), tCor = w('ff', /corps/i), tLum = w('s1', /lumière/i), tNoir = w('s1', /noir/i), tPar = w('s1', /partir/i), tSan = w('s2', /sans/i), tLib = w('s2', /libre/i),
    tGli = w('s3', /glissent/i), tPor = w('s3', /portes/i), tLit = w('s3', /lit/i), tDec4 = w('s4', /déchire/i), tFau = w('s5', /faux/i), tLam = w('s6', /lampes/i), tMat6 = w('s6', /matin/i), tSou = w('s6', /Souriante/i),
    tMai = w('s7', /main/i), tNon = w('s7', /non/i), tFin = w('mid', /fin/i), tHis = w('mid', /histoire/i), tMur = w('s8', /mur/i), tPers = w('s9', /personne/i), tSau = w('s10', /sauté/i), tNoir10 = w('s10', /Noir/i),
    tDec11 = w('s11', /déchire/i), tOuv = w('s12', /ouvert/i), tDeb = w('s12', /Debout/i), tOmb12 = w('s12', /ombre/i), tToi = w('s13', /toi/i), tPro = w('s13', /protégera/i), tOmbE = w('end', /ombre/i), tMoi = w('end', /moi/i), tHisE = w('end', /histoire/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99;
  let K;
  if (id === 'ff') K = [[0, 0, 600, 1050, 1.25], [0.05, 2.5, 560, 1000, 1.05], [tCor - 0.3, 0.6, 700, 1050, 1.3]];
  else if (id === 's2') K = [[s0, 0, 540, 1000, 1.0], [tLib - 0.3, 0.6, 420, 1150, 1.4]];
  else if (id === 's3') K = [[s0, 0, 540, 1100, 1.0], [tLit - 0.3, 0.8, 540, 1350, 1.35]];
  else if (id === 's7') K = [[s0, 0, 540, 960, 1.0], [tMai - 0.3, 0.6, 780, 820, 1.45]];
  else if (id === 's11') K = [[s0, 0, 540, 1000, 1.0], [s0 + 0.1, 3, 540, 1200, 1.4]];
  else if (id === 's12') K = [[s0, 0, 540, 960, 1.0], [tOmb12 - 0.3, 0.6, 540, 1300, 1.3]];
  else if (id === 'end') K = [[s0, 0, 540, 960, 1.0], [tMoi - 0.4, 0.8, 760, 900, 1.35]];
  else K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 930, 1.08]];
  const shk = (id === 'ff' && t >= tCor && t < tCor + 0.4) || (id === 's2' && t >= tLib && t < tLib + 0.4) || (id === 's7' && t >= tMai && t < tMai + 0.4) || (id === 's10' && t >= tNoir10 && t < tNoir10 + 0.4) || (id === 's12' && t >= tOmb12 && t < tOmb12 + 0.4) || (id === 'end' && t >= tMoi && t < tMoi + 0.4) ? 12 : 0;
  camPath(t, K, shk); const re = () => camPath(t, K, shk);
  // ---------- world ----------
  if (id === 'ff') { nightSky(); moon(840, 300, 70); bricks(-200, 560, 1500, GY - 560, '#4a4458', 'rgba(0,0,0,.3)'); x.fillStyle = '#1c2133'; x.fillRect(-400, GY, W + 800, 600); lamp(60, t); dim(0.2); re();
    const pk = clamp((t - tDec + 0.3) / 1.6); [[300, 0.9, 0], [600, 1.0, 0.3], [880, 0.85, 0.6]].forEach(([px, s, d]) => wallShadow(px, GY, s, t, { peel: clamp(pk * 1.4 - d) }));
    resetCam(); rbox(380, 200, 320, 120, 18, '#0b0b10', 6); txt('00:00', 540, 262, 80, '#ff3a3a', { stroke: false }); }
  if (id === 's1') { street(t); re(); resetCam(); x.save(); x.globalCompositeOperation = 'lighter'; x.fillStyle = 'rgba(255,220,120,.08)'; x.fillRect(0, 0, W, H); x.restore(); re(); p47(540, GY, 0.95, t, { mood: 'worried', look: 0, blink: true }); if (t >= tNoir) { const k = clamp((t - tPar + 0.6) / 1.2); x.save(); x.globalAlpha = 0.85; x.filter = 'brightness(0)'; x.transform(1, 0, -0.9, 0.35, 0, 0); toon(540 + GY * 0.9 * 0.65 + 400 * k, GY / 0.35, 0.95, { t, hat: 'beanie', num: false }); x.restore(); } }
  if (id === 's2') { street(t, { lampX: 380 }); re(); cast('inspector', 760, GY, 0.9, t, { hat: 'cap', hatCol: '#555', body: '#5a5a62', body2: '#4a4a52', pants: '#3a3a40', num: false, mood: 'neutral', look: -1, blink: true }); x.save(); x.globalAlpha = 0.8; x.fillStyle = '#000'; poly([[700, GY + 10], [820, GY + 10], [1080, GY + 140], [900, GY + 160]], '#05050a', 0); x.restore();
    p47(330, GY, 0.95, t, { mood: t >= tLib ? 'shock' : 'worried', look: 1, blink: true }); if (t >= tSan) { x.save(); x.setLineDash([16, 12]); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 6; x.beginPath(); x.ellipse(260, GY + 70, 170, 40, -0.2, 0, 7); x.stroke(); x.restore(); } }
  if (id === 's3') { bedroom(t, 0); re(); rbox(-60, GY - 120, 900, 500, 40, '#2a3352', 8); rbox(-60, GY - 120, 900, 60, 30, '#3a4466', 6); p47(330, GY + 380, 1.25, t, { mood: 'worried', look: 1, blink: true }); rbox(-60, GY - 120, 900, 500, 40, '#2a3352', 8);
    ink(860 - 400 * clamp((t - tLit + 0.6) / 1.4), GY + 120, clamp((t - tGli + 0.2) / 1.2), t); }
  if (id === 's4') { hall(t); dim(0.35); re(); ink(540, GY + 40, 0.8 + 0.1 * Math.sin(t * 3), t); }
  if (id === 's5') { rosaRoom(t); re(); [200, 540, 880].forEach(px => lampGlow(px, GY - 500, true, t)); }
  if (id === 's6' || id === 's7') { rosaRoom(t); re(); [200, 880].forEach(px => lampGlow(px, GY - 560, true, t)); const up = id === 's7' && t >= tMai - 0.1;
    wallShadow(720, GY - 200, 1.0, t, { armUp: up }); cast('woman', 540, GY - 120, 0.95, t, { ...ROSA, mood: id === 's6' && t < tMat6 ? 'neutral' : 'smile', look: 0, blink: id === 's6' && t < tMat6 }); rbox(140, GY - 300, 800, 260, 20, '#e8e4f0', 8); }
  if (id === 'mid') { bedroom(t, 0); re(); p47(330, GY + 380, 1.25, t, { mood: 'worried', look: 1, blink: true }); rbox(-60, GY - 120, 900, 500, 40, '#2a3352', 8); rbox(-60, GY - 120, 900, 60, 30, '#3a4466', 6); }
  if (id === 's8' || id === 's9') { hall(t); dim(0.3); re(); rbox(560, GY - 330, 220, 40, 8, '#6a4a32', 6); rbox(570, GY - 290, 24, 290, 4, '#4a3422', 4); rbox(746, GY - 290, 24, 290, 4, '#4a3422', 4);
    cast('woman', 665, GY - 210, 0.85, t, { ...MOM, mood: id === 's9' ? 'smile' : 'worried', look: -1, blink: true }); rbox(560, GY - 330, 220, 40, 8, '#6a4a32', 6); }
  if (id === 's10') { street(t); re(); if (t >= tSau) { resetCam(); const f = t < tNoir10 ? (Math.sin(t * 60) > 0 ? 0.85 : 0.3) : 0.93; x.fillStyle = `rgba(0,0,4,${f})`; x.fillRect(0, 0, W, H); } }
  if (id === 's11') { interior(t, { shake: t >= tDec11 && t < tDec11 + 0.7 ? 3 : 0 }); dim(0.75); re(); ink(540, GY + 20, clamp((t - tDec11 + 0.4) / 0.6), t); }
  if (id === 's12' || id === 's13') { hall(t, 0); re(); const g = x.createRadialGradient(540, 700, 50, 540, 900, 900); g.addColorStop(0, 'rgba(160,180,255,.25)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(-200, -200, W + 400, H + 400);
    rbox(330, GY - 900, 420, 900, 0, '#05050a', 0); cast('woman', 540, GY, 1.0, t, { ...MOM, mood: id === 's13' ? 'smile' : 'neutral', look: 0, blink: id === 's13' });
    if (id === 's12' && t >= tOmb12) { x.save(); x.setLineDash([16, 12]); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 6; x.beginPath(); x.ellipse(540, GY + 20, 200, 40, 0, 0, 7); x.stroke(); x.restore(); } }
  if (id === 'end') { sunRoom(t); re(); const wave = t >= tMoi - 0.2 && Math.sin(t * 8) > 0; wallShadow(800, GY - 80, 1.0, t, { armUp: t >= tMoi - 0.2, peel: wave ? 0.4 : 0.2 }); p47(420, GY, 1.0, t, { mood: t >= tMoi ? 'shock' : 'neutral', look: 1, blink: true }); }
  vignette(0.6); resetCam();
  // ---------- overlays ----------
  if (id === 'ff') { hookCard(t, [['À MINUIT, LES OMBRES…', 62], ['CHERCHENT UN CORPS 😨', 60, C.red]], 2.6, 'TU T\'ATTENDS PAS À LA FIN 😳'); if (t >= tCor - 0.1) stamp('UN CORPS', P(t, tCor - 0.1), 1080, C.red); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1') { if (t >= tLum - 0.2) pill('💡 TOUT LE MONDE DORT LUMIÈRE ALLUMÉE', 540, 330, P(t, tLum - 0.2), '#c8963a'); if (t >= tPar - 0.2) pill('DANS LE NOIR… TON OMBRE PART', 540, 450, P(t, tPar - 0.2), C.red); }
  if (id === 's2') { if (t >= tSan - 0.2) pill('47 : NÉ SANS OMBRE', 540, 330, P(t, tSan - 0.2), '#4a4a55'); if (t >= tLib - 0.1) stamp('PLACE LIBRE', P(t, tLib - 0.1), 520, C.red); }
  if (id === 's3') { if (t >= tGli - 0.2) pill('ELLES GLISSENT…', 540, 330, P(t, tGli - 0.2), '#4a4a55'); if (t >= tLit - 0.2) pill('…SOUS TON LIT', 540, 450, P(t, tLit - 0.2), C.red); }
  if (id === 's4' && t >= tDec4 - 0.3) onoma('CRRRRK', 540, 640, P(t, tDec4 - 0.3), 150);
  if (id === 's5') { paperCard([['« GARDE LA LUMIÈRE »', 60]], 540, 330, P(t, s0, 0.3), { w: 820 }); if (t >= tFau - 0.1) stamp('FAUX', P(t, tFau - 0.1), 520, C.red); }
  if (id === 's6') { if (t >= tLam - 0.2 && t < tMat6) pill('💡💡💡 TROIS LAMPES', 540, 330, P(t, tLam - 0.2), '#c8963a'); if (t >= tMat6) { banner('LE MATIN', 540, 300, P(t, tMat6), '#4a4a55'); } if (t >= tSou - 0.1) pill('SOURIANTE…', 540, 430, P(t, tSou - 0.1), OL); }
  if (id === 's7') { if (t >= tMai - 0.1) pill('SON OMBRE LÈVE LA MAIN…', 540, 300, P(t, tMai - 0.1), C.red); if (t >= tNon - 0.1) stamp('ROSA, NON', P(t, tNon - 0.1), 1080, C.red); }
  if (id === 'mid') { paperCard([['POURQUOI PAS MOI ? 🤔', 60]], 540, 330, P(t, s0, 0.25), { w: 860 }); if (t >= tFin - 0.2 && t < tHis - 0.4) pill('LA FIN, TU T\'Y ATTENDS PAS 😳', 540, 520, P(t, tFin - 0.2), C.red);
    if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1050, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's8') { banner('CHAQUE NUIT', 540, 300, P(t, s0 + 0.1), '#2f3d63'); if (t >= tMur - 0.2) pill('MAMAN, DOS À MA PORTE', 540, 430, P(t, tMur - 0.2), '#3f7e8a'); }
  if (id === 's9' && t >= tPers - 0.6) paperCard([['« POUR QUE PERSONNE', 52], ['NE RENTRE. »', 52]], 540, 360, P(t, tPers - 0.6), { w: 820 });
  if (id === 's10' && t >= tNoir10 - 0.1) stamp('NOIR COMPLET', P(t, tNoir10 - 0.1), 640, C.red);
  if (id === 's11' && t >= tDec11 - 0.3) onoma('CRRRRK', 540, 640, P(t, tDec11 - 0.3), 150);
  if (id === 's12') { if (t >= tDeb - 0.2) pill('MAMAN.', 540, 300, P(t, tDeb - 0.2), '#3f7e8a'); if (t >= tOmb12 - 0.1) stamp('PLUS D\'OMBRE', P(t, tOmb12 - 0.1), 460, C.red); }
  if (id === 's13') { if (t >= tToi - 0.4) paperCard([['« ELLE EST À TOI, MAINTENANT. »', 46]], 540, 300, P(t, tToi - 0.4), { w: 940 }); if (t >= tPro - 0.2) paperCard([['« ELLE TE PROTÉGERA. »', 52, C.red]], 540, 470, P(t, tPro - 0.2), { w: 800 }); }
  if (id === 'end') { if (t >= tOmbE - 0.2) pill('MA PREMIÈRE OMBRE', 540, 300, P(t, tOmbE - 0.2), '#4a4a55'); if (t >= tMoi - 0.2) stamp('ELLE NE BOUGE PAS COMME MOI', P(t, tMoi - 0.2), 470, C.red); if (t >= tHisE - 0.2) pill('TON HISTOIRE EN COMMENTAIRE 👇', 540, 1080, P(t, tHisE - 0.2), ORA); }
  if (t >= 5) { const a = clamp((t - 5) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
