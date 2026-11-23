// Les nénuphars — one bright set: the Baron's park lake (manor on the left, pines, gold chest), 47 and the Baron on the grass shore.
// The lake fills with lily pads in story order; the solution shows half (night 47) → full (night 48).
window.LOOK = 'gala';
const GY = 1950, LK = [1250, 1440, 1250, 230];
const PADS = (() => { const a = []; for (let j = 0; j < 7; j++) { const y = 1260 + j * 58, s = 0.55 + j * 0.09; for (let i = 0; i < 26; i++) { const px = -50 + i * 104 + (j % 2) * 52;
  if (((px - LK[0]) / LK[2]) ** 2 + ((y - LK[1]) / LK[3]) ** 2 < 0.8) a.push([px, y, s, (i * 7 + j * 3) % 5 === 0]); } } return a.sort((p, q) => p[0] - q[0]); })();
function pad(px, py, s, flower) { x.save(); x.translate(px, py); x.scale(s, s * 0.55); x.beginPath(); x.moveTo(0, 0); x.arc(0, 0, 58, 0.35, Math.PI * 2 - 0.05); x.closePath(); fs('#4fae4a', 5);
  x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 4; x.beginPath(); x.moveTo(0, 0); x.lineTo(-40, -20); x.moveTo(0, 0); x.lineTo(-30, 30); x.stroke(); x.restore();
  if (flower) { ell(px + 6 * s, py - 14 * s, 16 * s, 12 * s, '#f59ab8', 3); ell(px + 6 * s, py - 16 * s, 7 * s, 6 * s, '#ffd23f', 0); } }
function lake(frac) { const [cx, cy, rx, ry] = LK; ell(cx, cy, rx, ry, '#5fb4e6', 9); x.save(); x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.clip();
  x.strokeStyle = 'rgba(255,255,255,.45)'; x.lineWidth = 5; for (let k = 0; k < 14; k++) { const wx = cx - rx + (k * 197) % (2 * rx), wy = cy - ry + 40 + (k * 61) % (2 * ry - 60); x.beginPath(); x.moveTo(wx, wy); x.quadraticCurveTo(wx + 30, wy - 10, wx + 60, wy); x.stroke(); }
  const n = Math.round(PADS.length * frac); PADS.slice(0, n).forEach(([a, b, s, f]) => pad(a, b, s, f)); x.restore(); }
function miniLake(cx, cy, rx, ry, frac) { ell(cx, cy, rx, ry, '#5fb4e6', 6); x.save(); x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.clip();
  for (let j = 0; j < 6; j++) for (let i = 0; i < 9; i++) { const px = cx - rx + 10 + i * rx / 4.2, py = cy - ry + 14 + j * ry / 2.8; if ((px - (cx - rx)) / (2 * rx) <= frac + 0.02) pad(px, py, 0.55, (i + j) % 4 === 0); } x.restore(); }
function park(t) { x.fillStyle = vg(-600, 1250, '#7cc8ff', '#e6f6ff'); x.fillRect(-1400, -1000, 5200, 2300); cloud(200, 500, 1.2); cloud(1500, 380, 1); cloud(2500, 560, 1.3);
  [[-300, 1240], [1900, 1250], [2300, 1230], [2700, 1260], [3100, 1240]].forEach(([a, b], i) => pine(a, b, 380 + (i % 2) * 80, '#3f7f4f'));
  bricks(-1300, 760, 900, 480, '#e8d8b8', 'rgba(120,90,60,.35)', 100, 50); x.strokeStyle = OL; x.lineWidth = 8; x.strokeRect(-1300, 760, 900, 480);   // manor
  poly([[-1340, 770], [-850, 520], [-360, 770]], '#9a3a3a', 8); [[-1180, 900], [-930, 900], [-680, 900]].forEach(([a, b]) => { rrc(a, b, 120, 160, 10, '#9fd3f0', 7); });
  x.fillStyle = '#8fd06a'; x.fillRect(-1400, 1230, 5200, 2000);   // grass behind the lake
  lake(window._frac || 0);
  x.fillStyle = '#7cc25a'; x.beginPath(); x.moveTo(-1400, 1700); x.quadraticCurveTo(1250, 1610, 3800, 1700); x.lineTo(3800, 3500); x.lineTo(-1400, 3500); x.closePath(); fs('#7cc25a', 8);
  x.fillStyle = 'rgba(40,90,30,.25)'; for (let i = 0; i < 60; i++) { const gx = -1300 + (i * 173) % 5000, gy = 1760 + (i * 89) % 700; x.fillRect(gx, gy, 6, 26); x.fillRect(gx + 12, gy + 6, 6, 20); }
  [[-500, 1780], [2600, 1760], [3000, 1800]].forEach(([a, b]) => { ell(a, b, 90, 60, '#5a9a40', 6); ell(a + 60, b + 10, 70, 50, '#4f8f3a', 6); }); }
function front(t) { // foreground: bushes, flowers, sign (fills the bottom of wide shots)
  for (let i = 0; i < 16; i++) { const bx = -1300 + i * 330 + (i % 3) * 40, by = 2260 + (i % 2) * 60; ell(bx, by, 170, 110, i % 2 ? '#4f9a3a' : '#5aa845', 8); ell(bx + 90, by - 50, 110, 80, '#66b450', 7);
    if (i % 3 === 0) [[-40, -60], [30, -90], [80, -40]].forEach(([a, b]) => { ell(bx + a, by + b, 18, 18, i % 2 ? '#f59ab8' : '#ffd23f', 4); }); }
  rbox(1960, 1860, 20, 260, 4, '#6b4428', 6); rbox(1780, 1800, 380, 130, 10, '#c98a4f', 7); txt('PROPRIÉTÉ', 1970, 1845, 46, OL, { stroke: false }); txt('DU BARON', 1970, 1895, 46, C.red, { stroke: false }); }
function chest(px, py, open, t) { rbox(px - 130, py - 150, 260, 150, 14, '#8a5a32', 8); rbox(px - 130, py - 100, 260, 20, 4, '#e2b649', 5);
  if (open) { [[-70, -170], [-20, -185], [30, -172], [80, -180], [0, -160]].forEach(([a, b]) => ell(px + a, py + b, 32, 24, '#f5c542', 5)); for (let k = 0; k < 3; k++) { const a = t * 3 + k * 2; txt('✦', px - 60 + k * 60, py - 230 - Math.abs(Math.sin(a)) * 30, 40, '#fff6b0', { stroke: false }); } }
  else rbox(px - 140, py - 200, 280, 60, 26, '#9a6a3a', 8); rrc(px, py - 110, 40, 50, 8, '#e2b649', 5); }
function ciao(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-60, -120, 120, 240, 22, '#2fd0c0', 7); rbox(-60, -120, 120, 26, 10, '#c9ced6', 5); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 66, '#fff', { stroke: true }); x.restore(); x.restore(); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['LAC À MOITIÉ =', OL, 50], ['QUELLE NUIT ?', OL, 58], ['GAGNÉ → SON OR', C.green, 52], ['PERDU → ESCLAVE À VIE', C.red, 46]].forEach(([s, c, f], i) => txt(s, w / 2, 70 + i * 92, f, c, { stroke: false })); }
function hookPic(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); miniLake(w * 0.26, h * 0.5, w * 0.22, h * 0.3, 1); miniLake(w * 0.74, h * 0.5, w * 0.22, h * 0.3, 0.5);
  txt('NUIT 48', w * 0.26, h * 0.12, 60, OL, { stroke: false }); txt('PLEIN', w * 0.26, h * 0.9, 56, C.green, { stroke: false });
  txt('NUIT ?', w * 0.74, h * 0.12, 60, C.red, { stroke: false }); txt('À MOITIÉ', w * 0.74, h * 0.9, 56, C.red, { stroke: false }); }
function doubling(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const steps = [['NUIT 1', 1], ['NUIT 2', 2], ['NUIT 3', 4], ['NUIT 4', 8]];
  steps.forEach(([l, n], i) => { if (k < i / 4) return; const cy = 60 + i * 100; txt(l, 110, cy, 46, OL, { stroke: false }); for (let p = 0; p < n; p++) pad(230 + p * 50, cy, 0.7, false); txt('×2', w - 60, cy, 44, C.red, { stroke: false }); }); }
function halfFull(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); miniLake(w * 0.25, h * 0.52, w * 0.21, h * 0.3, 0.5); if (k > 0.3) miniLake(w * 0.75, h * 0.52, w * 0.21, h * 0.3, 1);
  txt('NUIT 47', w * 0.25, h * 0.12, 60, C.red, { stroke: false }); txt('½', w * 0.25, h * 0.9, 64, C.red, { stroke: false });
  if (k > 0.3) { txt('NUIT 48', w * 0.75, h * 0.12, 60, OL, { stroke: false }); txt('PLEIN', w * 0.75, h * 0.9, 56, C.green, { stroke: false }); txt('×2 →', w / 2, h * 0.52, 64, OL, { stroke: false }); } }
function draw(t) {
  const id = curId(t), tPari = WF('s1', /parie/i), tOr = WF('s1', /^or$/i), tVie = WF('s1', /vie/i), tJet = WF('s2', /jette/i), tDb = WF('s2', /doublent/i), tPl = WF('s3', /plein/i),
    tOuv = WF('s4', /ouvre/i), tSour = WF('s4', /sourit/i), tVeil = WF('sol2', /veille/i), tMoit = WF('sol2', /moitié/i), tOrB = WF('sol3', /Baron/i);
  const sol = id.startsWith('sol') || id === 'end';
  // lake coverage in story order
  let f = 0; if (id === 's2' && t >= tJet + 0.4) f = t < tDb ? 1 / PADS.length : Math.min(0.15, Math.pow(2, Math.floor((t - tDb) / 0.5)) / PADS.length); if (id === 's3') f = t < tPl ? 0.3 : 1;
  if (id === 's4' || id === 'q' || id === 'c1' || id === 'c2' || id === 'ff') f = 1; if (id === 'sol1') f = 0.5; if (id === 'sol2') f = t < tMoit ? 0.5 : lerp(0.5, 1, seg(t, tMoit, tMoit + 1)); if (id === 'sol3' || id === 'end') f = 1;
  window._frac = f;
  const K = [[0, 0, 800, 950, 1.4], [B.ff.end - 0.1, 1.1, 900, 1480, 0.62], [S('s1') + 0.5, 1.2, 280, 1238, 1.2], [tOr, 0.8, 60, 1330, 1.15], [tVie, 0.8, 520, 1220, 1.0],
    [tJet, 1.0, 1250, 1420, 0.75], [S('s3'), 1.0, 1150, 1420, 0.62], [S('s4'), 1.0, 820, 1258, 1.45], [S('q'), 0.8, 820, 1247, 1.3],
    [S('c1'), 1.0, 1000, 1480, 0.62], [S('sol1'), 0.8, 820, 1247, 1.3], [S('sol2'), 1.0, 1650, 1380, 0.75], [S('sol3'), 0.8, 500, 1420, 0.85], [S('end'), 1.0, 900, 1480, 0.62]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 6 : 0);
  park(t);
  chest(sol && (id !== 'sol1' && id !== 'sol2') ? 1150 : -100, GY - 20, id === 's1' && t >= tOr || id === 'sol3' || id === 'end', t);
  cast('boss', 250, GY, 0.8, t, { mood: id === 'sol3' || id === 'end' ? 'shock' : id === 's4' ? 'worried' : 'smug', look: 1, armUp: id === 's2' && t >= tJet && t < tJet + 0.8 });
  cast('guard', -450, GY - 60, 0.7, t, { mood: 'neutral', look: 1 });
  const can = id === 's4' && t >= tOuv || id === 'q' || id === 'ff';
  p47(800, GY, 0.8, t, { mood: id === 'ff' || id === 's1' && t >= tVie ? 'worried' : id === 's1' ? 'shock' : id === 's3' ? 'neutral' : 'smug', look: id === 's3' || id === 's2' ? 1 : -1, armUp: can, sweat: id === 'ff' || id === 's2', blink: t > 0.6 });
  if (can) ciao(800 + 120, GY - 720 * 0.8, 0.55);
  if (id === 's2' && t >= tJet && t < tJet + 0.6) { const k = seg(t, tJet, tJet + 0.6); pad(lerp(350, PADS[0][0], k), lerp(1350, PADS[0][1], k) - Math.sin(k * Math.PI) * 300, 1, true); }
  front(t);
  resetCam();
  if (id === 'ff' && t > 0.1 && t < 0.22) { x.fillStyle = 'rgba(255,255,255,.4)'; x.fillRect(0, 0, W, H); }
  hookCard(t, [['LES NÉNUPHARS DOUBLENT CHAQUE NUIT', 60], ['LAC PLEIN EN 48 NUITS', 76], ['À MOITIÉ : QUELLE NUIT ?', 84, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 900, 940, 520, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE LAC DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tPari && t < tVie) pill('🎲 LE PARI', 540, 480, P(t, tPari), C.red);
  if (id === 's1' && t >= tVie) polaroid(560, 640, 620, 440, P(t, tVie, 0.3), rules, 'LES RÈGLES', -0.03);
  if (id === 's2' && t >= tDb) polaroid(560, 620, 640, 460, P(t, tDb, 0.3), (w, h) => doubling(w, h, seg(t, tDb, B.s2.end - 0.3)), '×2 CHAQUE NUIT', 0.03);
  if (id === 's3' && t >= tPl) stamp('NUIT 48 = PLEIN', P(t, tPl, 0.25), 520);
  if (id === 's4' && t >= tOuv && t < tSour) pill('🥤 CIAO ENERGY', 540, 340, P(t, tOuv), '#1f9e92');
  if (id === 's4' && t >= tSour) pill('IL A TROUVÉ…', 540, 340, P(t, tSour), C.brown);
  germanCards(t, [['À MOITIÉ COUVERT,', 76], ["C'EST QUELLE NUIT ?", 96, C.red]]);
  if (id === 'sol1') paperCard([['NUIT 47 !', 130, C.red], ['(PAS 24)', 60]], 540, 420, P(t, S('sol1') + 0.2), { w: 640 });
  if (id === 'sol2' && t >= tVeil) polaroid(560, 640, 900, 480, P(t, tVeil, 0.3), (w, h) => halfFull(w, h, seg(t, tVeil, tMoit + 0.6)), 'LA VEILLE = LA MOITIÉ', -0.02);
  if (id === 'sol3' && t >= tOrB) pill("💰 L'OR EST À 47", 540, 340, P(t, tOrB), C.green);
}
