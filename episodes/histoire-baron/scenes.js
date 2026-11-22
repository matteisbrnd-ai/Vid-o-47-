// « Dans la ville de 47… » — hors-série du Baron v3 : nuit, ville désaturée, seul le bonnet de 47 est vraiment orange.
// Boucle ouverte dès 0 s (le Baron lève le poing… et n'ose pas), un indice bizarre toutes les ~5 s, révélation « petit frère » puis nouvelle question (« ils »).
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

function draw(t) {
  const id = curId(t), w = (b, r) => WF(b, r);
  const tCou = w('ff', /couleur/i), tGrisF = w('ff', /gris/i), tTou = w('ff', /toucher/i), tGris1 = w('s1', /gris/i), tCen = w('s2', /centaines/i), tJam = w('s3', /jamais/i), tNuit = w('s3', /nuit/i), tOra3 = w('s3', /orange/i),
    tTai = w('s4', /taille/i), tEmp = w('s4', /empreinte/i), tHis = w('mid', /histoire/i), tTro = w('s5', /Trois/i), tGri = w('s5', /grincé/i), tOmb = w('s6', /ombre/i), tOrp = w('s6', /orphelinat/i), tMon = w('s6', /Mon/),
    tTra = w('s7', /traits/i), tPre = w('s7', /prénom/i), tCar = w('s8', /carnet/i), tVol = w('s8', /volé/i), tEnn = w('s9', /ennemi/i), tMai = w('s10', /main/i), tEpa = w('s10', /épaule/i), tNai = w('s11', /naissance/i), tFre = w('s11', /frère/i),
    tVer = w('s12', /vérité/i), tIls = w('s12', /ils/i), tSir = w('s13', /sirènes/i), tVu = w('s13', /vu/i), tMen = w('s13', /menti/i), tNon = w('s13', /Non/), tGris14 = w('s14', /gris/i), tBar14 = w('s14', /Baron/i), tOra14 = w('s14', /orange/i), tCoul = w('end', /couleur/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99;
  const s0 = S(id); let K;
  if (id === 'ff') K = [[0, 0, 640, 1000, 1.7], [0.05, 1.6, 600, 1000, 1.45], [tGrisF - 0.2, 0.5, 700, 860, 1.6], [tTou - 0.3, 0.6, 470, 900, 1.6]];
  else if (id === 's1') K = [[s0, 0, 540, 900, 1.0], [s0 + 0.1, 5, 540, 860, 1.1]];
  else if (id === 's2') K = [[s0, 0, 540, 900, 1.0], [s0 + 0.1, 4, 540, 860, 1.12]];
  else if (id === 's3') K = t < tNuit - 0.1 ? [[s0, 0, 540, 900, 1.0], [s0 + 0.1, 3, 540, 860, 1.1]] : [[tNuit - 0.1, 0, 540, 960, 1.0], [tOra3 - 0.4, 1.2, 540, 1350, 1.6]];
  else if (id === 's5') K = [[s0, 0, 540, 960, 1.0], [tGri - 0.3, 0.6, 840, 1100, 1.35]];
  else if (id === 's6') K = [[s0, 0, 540, 960, 1.0], [tOrp - 0.3, 1.5, 760, 900, 1.3]];
  else if (id === 's12') K = [[s0, 0, 540, 900, 1.0], [tIls - 0.3, 0.6, 540, 820, 1.25]];
  else K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 930, 1.08]];
  const shk = (id === 'ff' && t < 4) ? 3 + 2 * Math.sin(t * 9) : ((id === 's10' && t >= tEpa && t < tEpa + 0.4) || (id === 's11' && t >= tFre && t < tFre + 0.4) || (id === 's13' && t >= tNon && t < tNon + 0.3)) ? 14 : 0;
  camPath(t, K, shk);
  // ---- world ----
  if (id === 'ff') { street(t, { lampX: 60 }); dim(0.15); camPath(t, K, shk);
    p47(400, GY, 0.95, t, { mood: t >= tTou ? 'smug' : 'worried', look: 1, blink: true });
    baron(760, GY, 1.05, t, { ...GREYB, look: -1, armUp: true, mood: t >= tTou ? 'worried' : 'angry' });
    gray(() => {}, 1); }
  if (id === 's1') { street(t); dim(0.1); camPath(t, K, shk); const k = clamp((t - tGris1 + 0.2) / 0.7); cast('rico', 540, 2200, 1.9, t, { hatCol: mixC('#3f6fb5', '#8a8a90', k), hatCol2: mixC('#2f568f', '#6a6a70', k), mood: t >= tGris1 ? 'shock' : 'smug', look: 0, blink: true }); }
  if (id === 's2') { street(t, { lamp: false }); dim(0.25); camPath(t, K, shk); baron(540, 2250, 1.95, t, { mood: 'angry', look: 0 }); }
  if (id === 's3') { if (t < tNuit - 0.1) { street(t); camPath(t, K, shk); p47(540, 2200, 1.9, t, { mood: 'smug', look: 0, blink: true }); }
    else { house(t); dim(0.1); camPath(t, K, shk); if (t >= tOra3 - 0.6) beanie(540, GY - 30, 0.55, ORA, ORA2, 0, 0.1); } }
  if (id === 's4') { house(t); dim(0.3); camPath(t, K, shk); resetCam(); const z = 1 + 0.12 * clamp((t - s0) / 4); x.save(); x.translate(540, 1150); x.scale(z, z); beanie(0, 200, 2.2, ORA, ORA2, clamp((t - tEmp + 0.1) / 0.6), 0.05); x.restore();
    if (t >= tTai - 0.2 && t < tEmp - 0.2) { resetCam(); x.strokeStyle = '#fff'; x.lineWidth = 8; x.setLineDash([24, 14]); x.strokeRect(150, 640, 780, 620); x.setLineDash([]); } }
  if (id === 'mid') { house(t); dim(0.35); camPath(t, K, shk); for (let i = 0; i < 7; i++) beanie(300 + (i % 4) * 160, GY - 30 - Math.floor(i / 4) * 120, 0.42, ORA, ORA2, 1, (i % 3 - 1) * 0.15); }
  if (id === 's5') { const op = clamp((t - tGri + 0.1) / 0.8) * 0.5; bedroom(t, op); camPath(t, K, shk); p47(330, GY + 380, 1.25, t, { mood: t >= tGri ? 'shock' : 'worried', look: t >= tGri ? 1 : 0, blink: t < tTro });
    rbox(-60, GY - 120, 900, 500, 40, '#2a3352', 8); rbox(-60, GY - 120, 900, 60, 30, '#3a4466', 6);
    if (op > 0.2) { x.save(); x.globalAlpha = op * 1.6; ell(1000, GY - 560, 70, 70, '#3a3d44', 0); x.restore(); } }
  if (id === 's6') { orphanage(t, { bx: 620 }); lamp(80, t); camPath(t, K, shk); const k = clamp((t - tOmb) / (tMon - tOmb + 0.3)); x.save(); x.globalAlpha = 0.95; x.filter = 'brightness(0.15)'; cast('boss', 180 + 640 * k, GY, 0.55, t, { walk: t, look: 1, blink: false }); x.restore();
    p47(60, GY, 0.6, t, { mood: 'worried', look: 1, blink: true }); }
  if (id === 's7') { resetCam(); const sx = 540 + 320 * Math.sin((t - s0) * 0.9), sy = 820 + 260 * Math.cos((t - s0) * 0.7); wall(t, [sx, sy, 420 + 120 * clamp((t - tPre) / 0.6)], clamp((t - tPre + 0.2) / 0.8)); torch(sx + 300, sy + 420); }
  if (id === 's8' || id === 's9') { resetCam(); x.fillStyle = '#05060a'; x.fillRect(0, 0, W, H); x.save(); x.beginPath(); x.arc(540, 780, 640, 0, 7); x.clip(); x.fillStyle = '#2e2a26'; x.fillRect(0, 0, W, H);
    for (let i = 0; i < 10; i++) { x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = 5; x.beginPath(); x.moveTo(0, i * 200); x.lineTo(W, i * 200 + 60); x.stroke(); } x.restore(); }
  if (id === 's10') { street(t, { lamp: false }); dim(0.55); camPath(t, K, shk); p47(470, 2250, 1.9, t, { mood: t >= tMai ? 'shock' : 'worried', look: 1, blink: t < tMai });
    const k = clamp((t - tMai) / 0.7); if (k > 0) hand(1250 - 470 * eOut(k), 1150, 1.0, -0.15); }
  if (id === 's11') { street(t, { lamp: false }); dim(0.55); camPath(t, K, shk); baron(560, 2300, 2.0, t, { mood: t >= tFre ? 'smile' : 'worried', look: -1, shades: false, blink: true }); }
  if (id === 's12') { orphanage(t, { bx: 300 }); dim(0.35); camPath(t, K, shk); p47(320, GY, 0.95, t, { mood: t >= tIls ? 'shock' : 'worried', look: 1, blink: true }); baron(760, GY, 1.0, t, { mood: 'worried', look: -1, shades: false }); }
  if (id === 's13') { orphanage(t, { bx: 520 }); dim(0.2); camPath(t, K, shk); cast('guard', 210, GY, 0.95, t, { mood: 'angry', look: 1, blink: true }); p47(620, GY, 0.95, t, { mood: t >= tNon ? 'worried' : 'shock', look: -1, blink: true });
    hand(738, GY - 190, 0.28, 0); if (t >= tSir) police(t); }
  if (id === 's14') { if (t < tBar14 - 0.15) { street(t, { lamp: false }); dim(0.4); camPath(t, K, shk); const k = clamp((t - tGris14 + 0.3) / 0.9); p47(540, 2200, 1.9, t, { hatCol: mixC(ORA, '#8a8a90', k), hatCol2: mixC(ORA2, '#6a6a70', k), mood: 'worried', look: 0, blink: true }); }
    else { street(t, { lamp: false }); dim(0.4); camPath(t, K, shk); baron(560, 2300, 2.0, t, { mood: 'smile', look: 0, shades: false }); cheekSpot(560, 2300, 2.0, clamp((t - tOra14 + 0.2) / 0.5)); } }
  if (id === 'end') { street(t, { lampX: 380 }); dim(0.1); camPath(t, K, shk); p47(380, GY, 0.95, t, { hatCol: '#8a8a90', hatCol2: '#6a6a70', mood: 'smile', look: 1, blink: true }); baron(720, GY, 1.0, t, { mood: 'smile', look: -1, shades: false }); cheekSpot(720, GY, 1.0, 1); }
  // ---- grade ----
  vignette(0.55); resetCam();
  // ---- overlays ----
  if (id === 'ff') { hookCard(t, [['IL FRAPPE TOUT LE MONDE…', 60], ['SAUF LUI. POURQUOI ? 😳', 66, ORA]], 2.6);
    if (t >= tCou - 0.1) pill('🤥 1 MENSONGE = 1 COULEUR EN MOINS', 540, 330, P(t, tCou - 0.1), '#4a4a55'); if (t >= tGrisF - 0.1) pill('LE BARON : 100 % GRIS', 540, 450, P(t, tGrisF - 0.1), OL); if (t >= tTou - 0.1) stamp('IL N\'OSE PAS', P(t, tTou - 0.1), 1060, C.red); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1' && t >= tGris1 - 0.2) pill('🤥 1 MENSONGE = BONNET GRIS', 540, 330, P(t, tGris1 - 0.2), '#4a4a55');
  if (id === 's2' && t >= tCen - 0.3) { const n = bigCount(t, tCen - 0.3); paperCard([['MENSONGES DU BARON', 46], [String(n) + (n >= 437 ? ' 😳' : ''), 120, C.red]], 540, 380, P(t, tCen - 0.3), { w: 760 }); }
  if (id === 's3') { if (t >= tJam - 0.2 && t < tNuit - 0.1) pill('47 : 0 MENSONGE 🧡', 540, 330, P(t, tJam - 0.2), ORA); if (t >= tNuit - 0.1) { flashCut(t, tNuit - 0.1); banner('CHAQUE NUIT · DEPUIS 15 ANS', 540, 300, P(t, tNuit), '#2f3d63'); } if (t >= tOra3) pill('QUI LE POSE ? 👀', 540, 450, P(t, tOra3), C.red); }
  if (id === 's4') { if (t >= tTai - 0.2) pill('✅ TOUJOURS SA TAILLE', 540, 330, P(t, tTai - 0.2), '#2a8a3a'); if (t >= tEmp) pill('🫆 UNE EMPREINTE… GRISE', 540, 450, P(t, tEmp), '#4a4a55'); }
  if (id === 'mid') { paperCard([['QUI ME SURVEILLE ? 👀', 64]], 540, 330, P(t, s0, 0.25), { w: 860 }); if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1050, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's5') { banner('CETTE NUIT · 3 H 00', 540, 300, P(t, s0 + 0.1), '#2f3d63'); if (t >= tGri - 0.1) onoma('CRIIIC', 800, 640, P(t, tGri - 0.1), 150); }
  if (id === 's6') { if (t >= tOmb) pill('UNE OMBRE…', 540, 330, P(t, tOmb), '#4a4a55'); if (t >= tMon - 0.1) pill('…MON ORPHELINAT 😨', 540, 450, P(t, tMon - 0.1), C.red); }
  if (id === 's7') { if (t >= tTra - 0.1) pill('UN TRAIT = UN MENSONGE', 540, 250, P(t, tTra - 0.1), '#4a4a55'); if (t >= tPre - 0.1) stamp('47 · 47 · 47', P(t, tPre - 0.1), 1060, ORA); }
  if (id === 's8' || id === 's9') { const items = [['« C\'est moi qui ai volé, pas le petit. »'], ['« Je suis ton ennemi. »', C.red]]; notebook(id === 's8' ? P(t, tCar - 0.1) : 1, items.slice(0, id === 's8' ? (t >= tVol - 0.6 ? 1 : 0) : 2));
    if (id === 's8' && t >= tVol - 0.6) pill('👮 À LA POLICE', 540, 300, P(t, tVol - 0.6), C.blue); if (id === 's9') pill('🎯 À 47, TOUS LES JOURS', 540, 300, P(t, s0 + 0.1), C.red); }
  if (id === 's10' && t >= tEpa - 0.1) pill('UNE MAIN… GRISE 😱', 540, 330, P(t, tEpa - 0.1), '#4a4a55');
  if (id === 's11') { if (t >= tNai - 0.2) pill('« JE MENS POUR TOI DEPUIS TA NAISSANCE »', 540, 300, P(t, tNai - 0.2), OL); if (t >= tFre - 0.1) { dim(0.25); stamp('PETIT FRÈRE', P(t, tFre - 0.1), 640, ORA); } }
  if (id === 's12') { if (t >= tVer - 0.2) paperCard([['« SI TU DIS LA VÉRITÉ… »', 50]], 540, 300, P(t, tVer - 0.2), { w: 820 }); if (t >= tIls - 0.1) { paperCard([['« …ILS SAURONT OÙ TU ES. »', 54, C.red]], 540, 470, P(t, tIls - 0.1), { w: 900 }); pill('QUI SONT « ILS » ? 👀', 540, 660, P(t, tIls + 0.3), C.red); } }
  if (id === 's13') { if (t >= tVu - 0.3) paperCard([['« TU AS VU LE BARON ? »', 56]], 540, 300, P(t, tVu - 0.3), { w: 820 }); if (t >= tNon - 0.1) paperCard([['« NON. »', 96, C.red]], 540, 520, P(t, tNon - 0.1), { w: 460 }); else if (t >= tMen - 0.2) pill('1er MENSONGE DE SA VIE', 540, 520, P(t, tMen - 0.2), '#4a4a55'); }
  if (id === 's14') { if (t >= tBar14 - 0.15) flashCut(t, tBar14 - 0.15); if (t >= tGris14 && t < tBar14 - 0.15) pill('SON BONNET DEVIENT GRIS…', 540, 330, P(t, tGris14), '#4a4a55'); if (t >= tOra14 - 0.2) pill('🟠 UNE TACHE ORANGE SUR SA JOUE', 540, 330, P(t, tOra14 - 0.2), ORA); }
  if (id === 'end') { paperCard([['PERSONNE NE M\'AVAIT DIT', 48], ['OÙ ALLAIT LA COULEUR… 🧡', 58, ORA]], 540, 330, P(t, s0), { w: 960 }); if (t >= tCoul + 0.3) pill('QUI SONT « ILS » ? → LA BANDE DE 47, 18 H', 540, 560, P(t, tCoul + 0.3), C.red); }
  if (t >= 5) { const a = clamp((t - 5) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
