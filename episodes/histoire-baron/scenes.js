// « Dans la ville de 47… » — hors-série du Baron v4 : système de la vidéo de référence (danger de mort dès 0 s, créature, règles courtes, voisine, secret d'un proche, dernière ligne glaçante).
// Nuit, ville désaturée ; la chose sans visage mange les plus colorés ; le Baron tout gris ment chaque nuit pour cacher 47, son petit frère.
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

function draw(t) {
  const id = curId(t), w = (b, r) => WF(b, r), s0 = S(id);
  const tCou = w('ff', /couleur/i), tMan = w('ff', /mange/i), tJam = w('s1', /jamais/i), tOra1 = w('s1', /orange/i), tMor = w('s2', /mort/i), tVis = w('s3', /visage/i), tAsp = w('s3', /aspire/i),
    tFra = w('s4', /frappe/i), tTou = w('s4', /Toujours/i), tMent = w('s5', /menteurs/i), tFau = w('s5', /faux/i), tCon = w('s6', /concours/i), tRos = w('s6', /roses/i), tCoups7 = w('s7', /coups/i), tMat7 = w('s7', /matin/i), tGri7 = w('s7', /grise/i), tOuv = w('s7', /ouverts/i),
    tViv = w('s8', /vivant/i), tBar9 = w('s9', /Baron/i), tDet = w('s9', /déteste/i), tTch = w('s9', /touché/i), tHis = w('mid', /histoire/i), tCoups10 = w('s10', /coups/i), tJam10 = w('s10', /Jamais/i), tGri11 = w('s11', /grises/i),
    tTro = w('s12', /Trois/i), tToc = w('s12', /Toc/), tJud = w('s14', /judas/i), tQue = w('s14', /quelqu/i), tGri14 = w('s14', /gris/i), tPer = w('s15', /personne/i), tPar = w('s15', /parti/i), tCol = w('s16', /collée/i), tSen = w('s16', /sentait/i),
    tMen17 = w('s17', /menti/i), tChu = w('s17', /chuchoté/i), tGri18 = w('s18', /gris/i), tPart18 = w('s18', /partie/i), tQui = w('s19', /Quinze/i), tFre = w('s19', /frère/i), tJou = w('s19', /joue/i), tOra19 = w('s19', /orange/i), tCoupsE = w('end', /coups/i), tBarE = w('end', /Baron/i), tHisE = w('end', /histoire/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99;
  let K;
  if (id === 'ff') K = [[0, 0, 620, 800, 1.0], [0.05, 2.5, 600, 860, 0.95], [tMan - 0.3, 0.6, 700, 520, 1.35]];
  else if (id === 's3') K = [[s0, 0, 540, 960, 1.0], [tAsp - 0.3, 1.2, 540, 900, 1.15]];
  else if (id === 's7') K = t < tMat7 - 0.1 ? [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 3, 540, 960, 1.06]] : [[tMat7 - 0.1, 0, 540, 1000, 1.0], [tOuv - 0.4, 0.6, 520, 820, 1.7]];
  else if (id === 's9') K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 900, 1.12]];
  else if (id === 's16') K = [[s0, 0, 540, 1000, 1.0], [tCol - 0.2, 0.8, 540, 960, 1.25]];
  else if (id === 'end') K = [[s0, 0, 540, 960, 1.0], [tBarE - 0.3, 0.6, 540, 900, 1.25]];
  else K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 930, 1.08]];
  const shk = (id === 's2' && t >= tMor && t < tMor + 0.4) || (id === 's13') || (id === 's12' && t >= tToc && t < tToc + 1.2) || (id === 's19' && t >= tFre && t < tFre + 0.4) || (id === 'end' && t >= tBarE && t < tBarE + 0.5) ? 12 : 0;
  camPath(t, K, shk);
  const re = () => camPath(t, K, shk);
  // ---------- world ----------
  if (id === 'ff') { street(t, { lampX: 40 }); re(); const k = clamp((t - tMan + 1.2) / 1.0); chose(900, GY + 20, 0.72, t, { bend: -0.25 * k - 0.6, open: 0.6 + 0.4 * k }); people(t, 2, GY); dim(0.2); re();
    p47(470, GY, 0.95, t, { mood: t >= tMan ? 'worried' : 'neutral', look: t >= tMan ? 1 : 0, blink: true }); suck(640, 420, t, clamp((t - tMan) / 0.5), [ORA]); }
  if (id === 's1') { street(t); re(); people(t, 5, GY - 40); dim(0.35); re(); p47(540, 2200, 1.9, t, { mood: 'smug', look: 0, blink: true }); }
  if (id === 's2') { street(t, { lamp: false }); dim(0.5); re(); p47(540, 2200, 1.9, t, { mood: t >= tMor ? 'shock' : 'worried', look: 0, blink: true }); }
  if (id === 's3') { street(t, { lamp: false }); dim(0.45); re(); chose(540, 3114, 1.3, t, { bend: 0, open: 0.6 + 0.4 * clamp((t - tAsp + 0.3) / 0.5) }); suck(540, 826, t, clamp((t - tAsp + 0.2) / 0.5)); }
  if (id === 's4') { house(t); dim(0.25); re(); const sh = [tFra, tTou].some(tk => t >= tk && t < tk + 1.0) ? 6 : 0; x.save(); x.translate(Math.sin(t * 80) * sh, 0); door(540, GY - 820, 400, 820, '#2f3d63', null); x.restore();
    if (t >= tFra) { x.save(); x.globalAlpha = 0.9; x.filter = 'brightness(0.12)'; chose(1150, GY + 20, 0.75, t, { bend: -0.4 }); x.restore(); } }
  if (id === 's5') { street(t); re(); people(t, 5, GY); dim(0.3); }
  if (id === 's6') { room('#f3e6c8', '#e8d6b0', '#c9a67a', GY); re(); rbox(160, 340, 760, 90, 12, '#e05a7a', 6); txt('🏆 CONCOURS DE DESSIN', 540, 386, 52, '#fff', { stroke: false });
    const k = clamp((t - tRos + 0.2) / 0.5); cast('woman', 540, 2150, 1.8, t, { ...LOLA, mood: 'smile', look: 0, blink: true }); x.save(); x.globalAlpha = k; ell(540 - 165, 2150 - 1050 + 30, 55, 32, 'rgba(255,90,140,.75)', 0); ell(540 + 165, 2150 - 1050 + 30, 55, 32, 'rgba(255,90,140,.75)', 0); x.restore();
    x.save(); x.translate(820, 1420); x.rotate(0.12); rbox(-150, -200, 300, 380, 8, '#fff', 7); ell(-20, -60, 70, 70, '#ffe14a', 5); poly([[-110, 120], [0, -10], [110, 120]], '#3fae5c', 5); x.restore(); }
  if (id === 's7') { if (t < tMat7 - 0.1) { lolaRoom(t, false); re(); cast('woman', 420, GY - 10, 0.95, t, { ...LOLA, mood: t >= tCoups7 ? 'shock' : 'worried', look: 1, blink: true }); rbox(-60, GY - 230, 900, 300, 30, '#e8e4f0', 8); dim(0.55); re(); knockFx(t, knockTimes(tCoups7 - 0.1), 760, 800, 130); }
    else { lolaRoom(t, true); re(); gray(() => cast('woman', 540, GY - 60, 0.95, t, { ...LOLA, mood: 'shock', look: 0, blink: false })); dim(0.25); } }
  if (id === 's8') { street(t); re(); people(t, 5, GY); dim(0.25); re(); for (let i = 0; i < 5; i++) { const px = 80 + i * 230 + (i % 2) * 40; if (Math.sin(t * 2 + i * 1.7) > 0.5) speech('🤥', px, GY - 560, 1, 50); } }
  if (id === 's9') { street(t, { lamp: false }); dim(0.45); re(); baron(540, 2250, 1.95, t, { mood: t >= tTch ? 'worried' : 'angry', look: 0 }); }
  if (id === 'mid') { street(t, { lampX: 60 }); dim(0.25); re(); p47(400, GY, 0.95, t, { mood: 'worried', look: 1, blink: true }); baron(760, GY, 1.05, t, { ...GREYB, look: -1, armUp: true }); }
  if (id === 's10') { bedroom(t, 0); re(); p47(330, GY + 380, 1.25, t, { mood: 'worried', look: -1, blink: true }); rbox(-60, GY - 120, 900, 500, 40, '#2a3352', 8); rbox(-60, GY - 120, 900, 60, 30, '#3a4466', 6);
    resetCam(); x.save(); x.globalAlpha = 0.55; knockFx(t, knockTimes(tCoups10 - 0.1), 300, 600, 90); x.restore(); }
  if (id === 's11') { house(t); dim(0.05); re(); footprints(clamp((t - s0 - 0.3) / 1.6)); }
  if (id === 's12') { bedroom(t, 0); re(); p47(330, GY + 380, 1.25, t, { mood: t >= tToc ? 'shock' : 'worried', look: t >= tToc ? 1 : 0, blink: t < tTro }); rbox(-60, GY - 120, 900, 500, 40, '#2a3352', 8); rbox(-60, GY - 120, 900, 60, 30, '#3a4466', 6); knockFx(t, [tToc, tToc + 0.45, tToc + 0.9], 760, 760, 160); }
  if (id === 's13') { interior(t, { shake: 4 }); re(); p47(540, 2300, 1.9, t, { mood: 'shock', look: 0, blink: false }); resetCam(); x.fillStyle = `rgba(180,20,30,${0.12 + 0.1 * Math.sin(t * 20)})`; x.fillRect(0, 0, W, H); }
  if (id === 's14' || id === 's15') { peephole(t, () => { street(t, { lamp: false, moonX: 300 }); chose(780, GY + 40, 0.62, t, { bend: -0.25, open: 1 }); baron(430, GY + 120, 1.15, t, { mood: 'angry', look: 1, armUp: id === 's15' && t >= tPer && t < tPar + 0.6, blink: true }); });
    if (id === 's14' && t < tQue - 0.2) { resetCam(); x.fillStyle = 'rgba(2,2,4,.75)'; x.beginPath(); x.rect(0, 0, W, H); x.arc(240, 820, 400, 0, 7, true); x.fill('evenodd'); } }
  if (id === 's16') { interior(t, { press: clamp((t - tCol + 0.2) / 0.6), shake: t >= tCol && t < tCol + 0.6 ? 3 : 0 }); re(); p47(180, GY, 0.85, t, { mood: 'shock', look: 1, blink: false }); suck(540, GY - 500, t, clamp((t - tSen + 0.3) / 0.6), [ORA, ORA2]); }
  if (id === 's17') { interior(t, { press: 1 }); dim(0.35); re(); p47(540, 2200, 1.9, t, { mood: 'worried', look: 1, blink: true, armUp: t >= tChu }); suck(980, 900, t, 0.8, [ORA, ORA2]); }
  if (id === 's18') { interior(t, { press: 1 - clamp((t - tPart18) / 0.8) }); dim(0.35); re(); const k = clamp((t - tGri18 + 0.3) / 0.9); p47(540, 2200, 1.9, t, { hatCol: mixC(ORA, '#8a8a90', k), hatCol2: mixC(ORA2, '#6a6a70', k), mood: t >= tPart18 ? 'neutral' : 'worried', look: 0, blink: true }); if (k < 1) suck(980, 900, t, 0.8 * (1 - k), [ORA, ORA2]); }
  if (id === 's19') { if (t < tJou - 0.15) { house(t); dim(0.2); re(); p47(330, GY, 0.95, t, { hatCol: '#8a8a90', hatCol2: '#6a6a70', mood: t >= tFre ? 'shock' : 'worried', look: 1, blink: true }); baron(740, GY, 1.0, t, { mood: t >= tFre ? 'smile' : 'worried', look: -1, shades: false }); }
    else { street(t, { lamp: false }); dim(0.4); re(); baron(560, 2300, 2.0, t, { mood: 'smile', look: 0, shades: false }); cheekSpot(560, 2300, 2.0, clamp((t - tOra19 + 0.3) / 0.5)); } }
  if (id === 'end') { house(t); dim(0.3); re(); resetCam(); x.save(); x.translate(540, 960); x.scale(1, 1); x.restore(); re(); txt('BARON', 540, GY - 900, 70, '#9a9aa0', { stroke: false }); x.save(); x.globalAlpha = 0.9; x.filter = 'brightness(0.15)'; chose(960, GY + 20, 0.75, t, { bend: -0.45 }); x.restore();
    knockFx(t, knockTimes(tCoupsE - 0.1, 3, 0.35), 540, 700, 150); }
  vignette(0.6); resetCam();
  // ---------- overlays ----------
  if (id === 'ff') { hookCard(t, [['IL N\'A JAMAIS MENTI…', 64], ['ALORS ELLE VA LE MANGER 😨', 58, C.red]], 2.6, 'TU T\'ATTENDS PAS À LA FIN 😳'); if (t >= tCou - 0.1) pill('🤥 1 MENSONGE = 1 COULEUR EN MOINS', 540, 330, P(t, tCou - 0.1), '#4a4a55'); if (t >= tMan - 0.1) pill('🌙 LA NUIT, ELLE MANGE LES + COLORÉS', 540, 450, P(t, tMan - 0.1), C.red); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1') { if (t >= tJam - 0.2) pill('47 : 0 MENSONGE', 540, 330, P(t, tJam - 0.2), '#4a4a55'); if (t >= tOra1 - 0.2) pill('= LE + COLORÉ DE LA VILLE 🧡', 540, 450, P(t, tOra1 - 0.2), ORA); }
  if (id === 's2' && t >= tMor - 0.1) stamp('LE PROCHAIN ?', P(t, tMor - 0.1), 380, C.red);
  if (id === 's3') { if (t >= tVis - 0.2) pill('PAS DE VISAGE', 540, 300, P(t, tVis - 0.2), '#4a4a55'); if (t >= tAsp - 0.2) pill('UNE BOUCHE QUI ASPIRE LES COULEURS', 540, 420, P(t, tAsp - 0.2), C.red); }
  if (id === 's4') { knockFx(t, knockTimes(tFra + 0.1), 540, 700, 150); knockFx(t, knockTimes(tTou), 540, 700, 150); if (t >= tFra) pill('✊ TOUJOURS 3 COUPS', 540, 330, P(t, tFra), '#4a4a55'); }
  if (id === 's5') { if (t >= tMent - 0.6) paperCard([['« ELLE NE PREND QUE', 54], ['LES MENTEURS »', 54]], 540, 400, P(t, tMent - 0.6), { w: 820 }); if (t >= tFau - 0.1) stamp('FAUX', P(t, tFau - 0.1), 420, C.red); }
  if (id === 's6' && t >= tRos - 0.2) pill('🎨 1re DU CONCOURS → JOUES ROSES', 540, 520, P(t, tRos - 0.2), '#e05a7a');
  if (id === 's7') { if (t >= tMat7 - 0.1) { flashCut(t, tMat7 - 0.1); banner('LE MATIN', 540, 300, P(t, tMat7), '#4a4a55'); } if (t >= tOuv - 0.1) pill('GRISE. LES YEUX OUVERTS.', 540, 420, P(t, tOuv - 0.1), OL); }
  if (id === 's8') { banner('TOUT LE MONDE MENT UN PEU 🤥', 540, 300, P(t, s0 + 0.1), '#4a4a55'); if (t >= tViv - 0.2) pill('GRIS = VIVANT', 540, 430, P(t, tViv - 0.2), OL); }
  if (id === 's9') { if (t >= tBar9 - 0.2) pill('LE BARON : LE + GRIS DE TOUS', 540, 300, P(t, tBar9 - 0.2), OL); if (t >= tTch - 0.1) stamp('JAMAIS TOUCHÉ 47', P(t, tTch - 0.1), 450, C.red); }
  if (id === 'mid') { paperCard([['POURQUOI IL NE LE TOUCHE PAS ? 🤔', 50]], 540, 330, P(t, s0, 0.25), { w: 980 }); const tFin = WF('mid', /fin/i); if (t >= tFin - 0.2 && t < tHis - 0.4) pill('LA FIN, TU T\'Y ATTENDS PAS 😳', 540, 520, P(t, tFin - 0.2), C.red); if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1050, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's10' && t >= tJam10 - 0.2) pill('CHEZ LES VOISINS… JAMAIS CHEZ MOI', 540, 330, P(t, tJam10 - 0.2), '#4a4a55');
  if (id === 's11') { banner('CHAQUE MATIN', 540, 300, P(t, s0 + 0.1), '#2f3d63'); if (t >= tGri11 - 0.2) pill('👣 DES PAS GRIS DEVANT MA PORTE', 540, 430, P(t, tGri11 - 0.2), '#4a4a55'); }
  if (id === 's12') { banner('CETTE NUIT · 3 H 00', 540, 300, P(t, s0 + 0.1), '#2f3d63'); }
  if (id === 's13') stamp('CHEZ MOI', P(t, s0 + 0.05), 420, C.red);
  if (id === 's14') { if (t >= tQue - 0.2) pill('QUELQU\'UN… TOUT GRIS', 540, 1420, P(t, tQue - 0.2), '#4a4a55'); }
  if (id === 's15') { pill('LE BARON', 540, 260, P(t, s0 + 0.1), OL); if (t >= tPer - 0.4) paperCard([['« IL N\'Y A PERSONNE ICI.', 50], ['LE PETIT EST PARTI. »', 50]], 540, 1420, P(t, tPer - 0.4), { w: 860 }); }
  if (id === 's16' && t >= tSen - 0.2) pill('ELLE ME SENTAIT… À TRAVERS LE BOIS', 540, 330, P(t, tSen - 0.2), C.red);
  if (id === 's17') { if (t >= tMen17 - 0.2) pill('1er MENSONGE DE SA VIE', 540, 300, P(t, tMen17 - 0.2), '#4a4a55'); if (t >= tChu) paperCard([['« IL N\'Y A PERSONNE. »', 66]], 540, 470, P(t, tChu), { w: 780 }); }
  if (id === 's18') { if (t >= tGri18 - 0.1) pill('SON BONNET DEVIENT GRIS…', 540, 330, P(t, tGri18 - 0.1), '#4a4a55'); if (t >= tPart18 - 0.1) pill('…ET ELLE EST PARTIE', 540, 450, P(t, tPart18 - 0.1), OL); }
  if (id === 's19') { if (t >= tQui - 0.2 && t < tJou - 0.15) paperCard([['« 15 ANS QUE JE MENS POUR TOI… »', 46]], 540, 300, P(t, tQui - 0.2), { w: 900 }); if (t >= tFre - 0.1 && t < tJou - 0.15) stamp('PETIT FRÈRE', P(t, tFre - 0.1), 520, ORA);
    if (t >= tJou - 0.15) flashCut(t, tJou - 0.15); if (t >= tOra19 - 0.2) pill('🟠 UNE TACHE ORANGE. SA COULEUR.', 540, 330, P(t, tOra19 - 0.2), ORA); }
  if (id === 'end') { if (t >= tBarE - 0.2) paperCard([['CETTE NUIT…', 50], ['LES 3 COUPS CHEZ LE BARON 😨', 54, C.red]], 540, 330, P(t, tBarE - 0.2), { w: 960 }); if (t >= tHisE - 0.2) pill('TON HISTOIRE EN COMMENTAIRE 👇', 540, 560, P(t, tHisE - 0.2), ORA); }
  if (t >= 5) { const a = clamp((t - 5) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
