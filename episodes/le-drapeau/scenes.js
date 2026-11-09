// Le drapeau — Galagade style: ONE long sunny yacht deck, left → right: Baron's lounge · galley (cook) · engine hatch (mechanic) · mast + flag (sailor).
// The Japanese flag is always drawn correctly (white, red disc) — neutral image, the clue lives in the words. Hook/ending = sailor cuffed at the mast.
window.CTA = 'TAGUE CELUI QUI MENT TOUT LE TEMPS'; window.LOOK = 'gala';
const GY = 1900, XB = 330, XC = 760, XM = 1640, XS = 2520, MAST = 2740;
const SAILOR = { hat: 'beret', hatCol: '#ffffff', body: '#f4f2ec', body2: '#2c4fa8', pants: '#2c3d6a', num: false, collar: true };
const MECA = { hat: 'cap', hatCol: '#d6332b', hatCol2: '#a82820', body: '#3a5a8a', body2: '#2c4870', pants: '#2c4870', num: false };
function sailor(px, py, s, t, o = {}) { toon(px, py, s, { t, ...SAILOR, ...o, blink: t > 0.6 });
  x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(-115, -500); x.quadraticCurveTo(-130, -360, -112, -235); x.lineTo(112, -235); x.quadraticCurveTo(130, -360, 115, -500); x.quadraticCurveTo(0, -540, -115, -500); x.closePath(); x.save(); x.clip();
  x.fillStyle = '#2c4fa8'; for (let i = 0; i < 6; i++) x.fillRect(-140, -500 + i * 46, 280, 20); x.restore(); x.lineWidth = 8; x.strokeStyle = OL; x.stroke();
  poly([[-50, -520], [0, -455], [50, -520]], '#2c4fa8', 6); ell(8, -775, 24, 24, C.red, 5);
  if (o.cuffed) { [-77, 77].forEach(hx => { x.lineWidth = 26; x.strokeStyle = OL; x.beginPath(); x.ellipse(hx, -300, 46, 20, 0, 0, 7); x.stroke(); x.lineWidth = 16; x.strokeStyle = metal(-320, -280); x.stroke(); });
    x.lineWidth = 10; x.strokeStyle = '#8b95a5'; x.beginPath(); x.moveTo(-30, -300); x.quadraticCurveTo(0, -270, 30, -300); x.stroke(); }
  x.restore(); }
function flag(px, py, t, s = 1) { x.save(); x.translate(px, py); x.scale(s, s); const w = 340, h = 230; x.beginPath(); x.moveTo(0, 0);
  for (let i = 0; i <= 10; i++) x.lineTo(i * w / 10, Math.sin(t * 5 + i * 0.7) * 10 * i / 10); for (let i = 10; i >= 0; i--) x.lineTo(i * w / 10, h + Math.sin(t * 5 + i * 0.7) * 10 * i / 10); x.closePath(); fs('#ffffff', 7);
  ell(w / 2, h / 2 + Math.sin(t * 5 + 3.5) * 5, 66, 66, '#c8102e', 0); x.restore(); }
function gull(gx, gy, t, i) { const f = Math.sin(t * 6 + i) * 20; x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(gx - 40, gy + f); x.quadraticCurveTo(gx - 20, gy - 20, gx, gy); x.quadraticCurveTo(gx + 20, gy - 20, gx + 40, gy + f); x.stroke(); }
function buoy(px, py) { ell(px, py, 70, 70, '#f4f2ec', 7); x.save(); x.strokeStyle = C.red; x.lineWidth = 36; [0, 1.57, 3.14, 4.71].forEach(a => { x.beginPath(); x.arc(px, py, 52, a, a + 0.6); x.stroke(); }); x.restore(); ell(px, py, 34, 34, '#bfe3ff', 6); }
function chickenBox(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); [[-90, -190], [-10, -215], [70, -195], [-50, -230], [30, -240]].forEach(([a, b]) => { ell(a, b, 58, 44, '#c8873a', 6); ell(a - 12, b - 10, 16, 10, '#e8b06a', 0); });
  poly([[-170, -170], [170, -170], [140, 170], [-140, 170]], '#d6332b', 8); x.save(); x.beginPath(); x.moveTo(-170, -170); x.lineTo(170, -170); x.lineTo(140, 170); x.lineTo(-140, 170); x.closePath(); x.clip(); x.fillStyle = '#fff'; [-110, -10, 90].forEach(sx => x.fillRect(sx, -170, 40, 340)); x.restore();
  rbox(-150, -60, 300, 130, 16, '#ffd23f', 6); txt('TASTY', 0, -24, 58, C.red, { stroke: false }); txt('CROUSTY', 0, 34, 58, C.red, { stroke: false }); x.restore(); }
function watch(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-60, -260, 120, 520, 40, '#c9a033', 7); ell(0, 0, 130, 130, '#e2b649', 9); ell(0, 0, 100, 100, '#fffaf0', 6);
  x.strokeStyle = OL; x.lineWidth = 10; x.lineCap = 'round'; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -70); x.moveTo(0, 0); x.lineTo(45, 20); x.stroke(); for (let i = 0; i < 12; i++) { const a = i * 0.5236; ell(Math.cos(a) * 82, Math.sin(a) * 82, 6, 6, OL, 0); } x.restore(); }
function deck(t) {
  x.fillStyle = vg(-1200, 1350, '#6fc0ff', '#e3f4ff'); x.fillRect(-1500, -1500, 6500, 2900); ell(3400, 300, 120, 120, '#fff3a0', 0);
  [[400, 300], [1500, 200], [2600, 350], [3500, 260]].forEach(([cx, cy], i) => { const ox = (t * 18 + i * 200) % 300; [[-90, 0, 90], [0, -40, 110], [100, 0, 90]].forEach(([a, b, r]) => ell(cx + ox + a, cy + b, r, r * 0.7, '#ffffff', 0)); });
  x.fillStyle = '#3fa4d8'; x.fillRect(-1500, 1300, 6500, 1600); ell(-200, 1300, 600, 70, '#8fb5c8', 0); ell(3900, 1305, 400, 50, '#8fb5c8', 0);   // sea + far islands
  x.strokeStyle = 'rgba(255,255,255,.6)'; x.lineWidth = 6; for (let i = 0; i < 50; i++) { const wx = -1400 + (i * 263) % 6300, wy = 1340 + (i * 71) % 400; x.beginPath(); x.moveTo(wx + Math.sin(t + i) * 20, wy); x.quadraticCurveTo(wx + 30, wy - 16, wx + 60 + Math.sin(t + i) * 20, wy); x.stroke(); }
  [[600, 650], [1900, 520], [3100, 600], [3600, 700]].forEach(([gx, gy], i) => gull(gx + Math.sin(t * 0.8 + i) * 60, gy, t, i));
  // lounge (Baron) + galley cabin
  rbox(-200, 1050, 1300, 860, 40, '#f4f2ec', 9); rbox(-200, 1050, 1300, 70, 30, '#2c4fa8', 8); poly([[-260, 1060], [1160, 1060], [1080, 960], [-180, 960]], '#e8dcc4', 8);
  [[40, 1260], [240, 1260]].forEach(([wx, wy]) => { ell(wx, wy, 70, 70, '#bfe3ff', 8); ell(wx - 20, wy - 20, 18, 14, '#fff', 0); });
  rbox(470, 1220, 520, 330, 14, '#5a3a22', 8); rbox(490, 1240, 480, 290, 8, '#ffe2a6', 6); txt('CUISINE', 730, 1170, 64, '#2c4fa8', { stroke: false });   // galley window
  rbox(530, 1420, 400, 110, 8, '#9aa4b2', 6); [620, 820].forEach(px => { ell(px, 1400, 70, 22, '#3a3d44', 5); [0, 1, 2].forEach(k => ell(px - 20 + k * 20, 1360 - ((t * 60 + k * 30) % 60), 12, 16, 'rgba(255,255,255,.7)', 0)); });
  // engine room door + hatch
  rbox(1200, 1180, 300, 720, 20, '#c9ced6', 8); rbox(1230, 1210, 240, 300, 12, '#9aa4b2', 6); txt('MACHINES', 1350, 1580, 52, OL, { stroke: false }); ell(1440, 1700, 16, 16, '#e2b649', 5);
  [[1300, 1100], [1420, 1060], [1560, 1000]].forEach(([sx, sy], i) => ell(sx + Math.sin(t * 2 + i) * 15, sy - ((t * 40) % 80), 50 + i * 10, 40 + i * 8, 'rgba(120,120,130,.45)', 0));
  // railing + deck
  x.fillStyle = '#c9a77a'; x.fillRect(-1500, GY - 30, 6500, 1200); x.strokeStyle = 'rgba(90,60,30,.35)'; x.lineWidth = 5; for (let i = 0; i < 70; i++) { x.beginPath(); x.moveTo(-1500 + i * 100, GY - 30); x.lineTo(-1500 + i * 100 - 60, GY + 600); x.stroke(); }
  x.fillStyle = '#f4f2ec'; x.fillRect(-1500, GY + 380, 6500, 900); x.fillStyle = '#2c4fa8'; x.fillRect(-1500, GY + 440, 6500, 50);
  rbox(1800, GY - 40, 260, 60, 10, '#3a3d44', 6); rbox(1810, GY - 150, 240, 120, 10, '#6b7482', 7);                                              // open engine hatch
  x.strokeStyle = '#f4f2ec'; x.lineWidth = 12; x.beginPath(); x.moveTo(1150, 1560); x.lineTo(4200, 1560); x.stroke(); for (let i = 0; i < 30; i++) { x.beginPath(); x.moveTo(1150 + i * 105, 1560); x.lineTo(1150 + i * 105, GY - 30); x.stroke(); }
  buoy(2220, 1700); [[3050, GY - 40], [3150, GY - 40]].forEach(([bx, by]) => { rbox(bx - 45, by - 150, 90, 150, 16, '#8a5a3a', 6); x.fillStyle = 'rgba(0,0,0,.2)'; x.fillRect(bx - 45, by - 110, 90, 12); x.fillRect(bx - 45, by - 50, 90, 12); });
  ell(3350, GY - 30, 110, 40, '#c9a067', 7); ell(3350, GY - 40, 70, 24, '#a8844f', 5);                                                                   // coiled rope
  // mast + flag
  x.strokeStyle = OL; x.lineWidth = 46; x.beginPath(); x.moveTo(MAST, GY); x.lineTo(MAST, 380); x.stroke(); x.strokeStyle = '#e8dcc4'; x.lineWidth = 32; x.stroke();
  x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(MAST + 20, 420); x.lineTo(MAST + 20, 1500); x.stroke(); ell(MAST, 370, 30, 30, '#e2b649', 6);
  flag(MAST + 20, 420, t, 1); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); watch(w / 2, h / 2, 0.85); }
function boxPol(w, h) { x.fillStyle = '#ffe2a6'; x.fillRect(0, 0, w, h); chickenBox(w / 2, h / 2 + 40, 0.95); }
function flagPol(t) { return (w, h) => { x.fillStyle = vg(0, h, '#6fc0ff', '#e3f4ff'); x.fillRect(0, 0, w, h); x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(40, h); x.lineTo(40, 20); x.stroke(); flag(48, 70, t, 1.15); }; }
function alibis(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['CUISINIER', 'EN CUISINE'], ['MÉCANICIEN', 'AU MOTEUR'], ['MARIN', 'LE DRAPEAU']].forEach(([a, b], i) => { txt(a, w / 2, 60 + i * 120, 50, OL, { stroke: false }); txt(b, w / 2, 108 + i * 120, 40, '#7a6a58', { stroke: false }); }); }
function draw(t) {
  const id = curId(t), tMon = WF('s1', /montre/i), tCui = WF('s2', /cuisinier/i), tTas = WF('s2', /Tasty/i), tDra = WF('s4', /drapeau/i), tSou = WF('s5', /sourit/i), tMen = WF('s5', /menottes/i);
  const K = [[0, 0, XS + 90, 1480, 1.6], [B.ff.end - 0.1, 1.2, 600, 1450, 1.0], [S('s1') + 0.3, 1.8, 900, 1350, 0.62], [tMon - 0.1, 1.2, XB + 60, 1360, 1.35],
    [S('s1b'), 1.6, 1000, 1400, 0.8], [S('s2'), 1.4, XC + 150, 1480, 1.15], [tCui, 1.6, XC + 30, 1370, 1.45], [S('s3'), 1.8, XM + 120, 1480, 1.2], [WF('s3', /moteur/i), 1.4, XM + 80, 1500, 1.4],
    [S('s4'), 1.8, XS + 180, 1300, 0.82], [tDra + 0.6, 2.0, XS + 140, 1330, 1.05], [S('s4b'), 2.6, XS + 160, 1340, 1.25], [S('s5'), 1.4, XS + 160, 1480, 1.45], [tMen - 0.1, 0.6, XS + 90, 1480, 1.6], [S('q'), 1.2, XS + 90, 1480, 1.6]];
  camPath(t, K, t > tMen && t < tMen + 0.25 ? 8 : 0);
  deck(t);
  const end = id === 's5' || id === 'q', cuffed = id === 'ff' || (end && t >= tMen);
  cast('boss', XB, GY, 0.78, t, { mood: id === 's1' ? 'angry' : 'neutral', look: 1, armUp: id === 's1' && t > tMon });
  cast('maid', 60, GY - 20, 0.6, t, { mood: 'worried', look: 1 });
  cast('cook', XC, GY, 0.8, t, { mood: id === 's2' ? 'smile' : 'neutral', look: 1 });
  cast('guard', 2120, GY - 30, 0.58, t, { mood: 'neutral', look: 1 });
  toon(XM, GY, 0.8, { t, blink: true, ...MECA, mood: id === 's3' ? 'neutral' : 'worried', look: 1 }); x.save(); x.translate(XM + 95, GY - 290); x.rotate(0.5); rbox(-14, -90, 28, 180, 10, '#9aa4b2', 5); ell(0, -100, 34, 26, '#9aa4b2', 5); x.restore();
  sailor(XS, GY, 0.8, t, { mood: cuffed ? 'shock' : id === 's4' ? 'smile' : 'neutral', look: 1, cuffed });
  // 47 walks along the crew
  const pts = [[S('s1'), XB + 330], [S('s2') - 0.2, XB + 330], [S('s2') + 1.2, XC + 330], [S('s3') - 0.3, XC + 330], [S('s3') + 1.0, XM + 330], [S('s4') - 0.3, XM + 330], [S('s4') + 1.2, XS + 330]];
  let x47 = XS + 330, walking = false; if (id !== 'ff' && !end) { x47 = pts[0][1]; for (let i = 1; i < pts.length; i++) { const [ta, xa] = pts[i - 1], [tb, xb] = pts[i]; if (t >= ta && t < tb) { x47 = lerp(xa, xb, eIO(seg(t, ta, tb))); walking = xa !== xb; } else if (t >= tb) x47 = xb; } }
  const m47 = id === 'ff' ? 'smug' : id === 's5' && t >= tSou ? 'smug' : id === 's4b' ? 'smug' : id === 'q' ? 'smug' : 'neutral';
  p47(x47, GY, 0.8, t, { blink: t > 0.6, mood: m47, look: -1, walk: walking ? t * 3 : 0, armUp: end && t >= tMen });
  resetCam();
  hookCard(t, [['UN ALIBI PARFAIT…', 90], ['ET IL FINIT MENOTTÉ', 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tMon) banner('LE YACHT DU BARON', 540, 330, P(t, S('s1') + 0.2));
  if (id === 's1' && t >= tMon) polaroid(560, 520, 420, 400, P(t, tMon, 0.3), rules, 'LA MONTRE EN OR', -0.04);
  if (id === 's1b') banner('PERSONNE NE QUITTE LE BATEAU', 540, 330, P(t, S('s1b') + 0.1), C.red);
  if (id === 's2' && t >= tTas) polaroid(560, 520, 420, 400, P(t, tTas, 0.3), boxPol, 'SON ALIBI', 0.04);
  if (id === 's4' && t >= tDra) polaroid(560, 520, 460, 380, P(t, tDra, 0.3), flagPol(t), 'LE DRAPEAU', -0.03);
  if (id === 's4b') polaroid(560, 520, 460, 400, P(t, S('s4b'), 0.3), alibis, 'LES 3 ALIBIS', 0.03);
  if (id === 's5' && t >= tMen) onoma('CLIC !', 560, 560, P(t, tMen, 0.15), 170);
  endCards(t, [['POURQUOI LUI ?', 90, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
