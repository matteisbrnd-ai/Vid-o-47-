// Le drapeau — Galagade style: ONE long sunny yacht deck, left → right: Baron's lounge · galley (cook) · engine hatch (mechanic) · mast + flag (sailor).
// The Japanese flag is always drawn correctly (white, red disc) — neutral image, the clue lives in the words.
// v2 (2026-11-09, « danger immédiat »): hook/ending = 47 on the plank over shark fins (far right) + red countdown; suspects numbered 1·2·3; no reveal.
window.CTA = 'TAGUE TON POTE DÉTECTIVE'; window.LOOK = 'gala';
const GY = 1900, XB = 330, XC = 760, XM = 1640, XS = 2520, MAST = 2740, EDGE = 3260, X47 = 3500;
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
  const DW = EDGE + 1500; x.fillStyle = '#c9a77a'; x.fillRect(-1500, GY - 30, DW, 1200); x.strokeStyle = 'rgba(90,60,30,.35)'; x.lineWidth = 5; for (let i = 0; i < 48; i++) { x.beginPath(); x.moveTo(-1500 + i * 100, GY - 30); x.lineTo(-1500 + i * 100 - 60, GY + 600); x.stroke(); }
  x.fillStyle = '#f4f2ec'; x.fillRect(-1500, GY + 380, DW, 900); x.fillStyle = '#2c4fa8'; x.fillRect(-1500, GY + 440, DW, 50);
  // bow: hull edge, near sea with shark fins, plank
  x.fillStyle = '#2f93c8'; x.fillRect(EDGE, GY + 70, 2500, 1500); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 8; for (let i = 0; i < 14; i++) { const wx = EDGE + 40 + i * 130 + Math.sin(t * 2 + i) * 20; x.beginPath(); x.moveTo(wx, GY + 72); x.quadraticCurveTo(wx + 35, GY + 50, wx + 70, GY + 72); x.stroke(); }
  [[3420, 0], [3700, 2.1], [3960, 4]].forEach(([fx, ph]) => { const px = fx + Math.sin(t * 0.9 + ph) * 90, py = GY + 75; poly([[px - 55, py], [px + 15, py - 120], [px + 65, py]], '#6b7482', 7); x.fillStyle = 'rgba(255,255,255,.4)'; x.beginPath(); x.moveTo(px + 5, py - 95); x.lineTo(px + 40, py - 10); x.lineTo(px + 20, py - 10); x.fill(); ell(px, py + 6, 90, 14, 'rgba(255,255,255,.65)', 0); });
  x.save(); x.beginPath(); x.moveTo(EDGE - 60, GY - 30); x.lineTo(EDGE + 40, GY - 30); x.quadraticCurveTo(EDGE + 30, GY + 400, EDGE - 60, GY + 900); x.closePath(); fs('#f4f2ec', 9); x.restore();
  rbox(EDGE - 40, GY - 46, 560, 36, 8, '#a8844f', 7); x.strokeStyle = 'rgba(90,60,30,.4)'; x.lineWidth = 4; [EDGE + 80, EDGE + 220, EDGE + 360].forEach(px => { x.beginPath(); x.moveTo(px, GY - 44); x.lineTo(px, GY - 12); x.stroke(); });
  rbox(1800, GY - 40, 260, 60, 10, '#3a3d44', 6); rbox(1810, GY - 150, 240, 120, 10, '#6b7482', 7);                                              // open engine hatch
  x.strokeStyle = '#f4f2ec'; x.lineWidth = 12; x.beginPath(); x.moveTo(1150, 1560); x.lineTo(EDGE - 60, 1560); x.stroke(); for (let i = 0; i < 20; i++) { x.beginPath(); x.moveTo(1150 + i * 105, 1560); x.lineTo(1150 + i * 105, GY - 30); x.stroke(); }
  buoy(2220, 1700); [[2950, GY - 40], [3040, GY - 40]].forEach(([bx, by]) => { rbox(bx - 45, by - 150, 90, 150, 16, '#8a5a3a', 6); x.fillStyle = 'rgba(0,0,0,.2)'; x.fillRect(bx - 45, by - 110, 90, 12); x.fillRect(bx - 45, by - 50, 90, 12); });
  // mast + flag
  x.strokeStyle = OL; x.lineWidth = 46; x.beginPath(); x.moveTo(MAST, GY); x.lineTo(MAST, 380); x.stroke(); x.strokeStyle = '#e8dcc4'; x.lineWidth = 32; x.stroke();
  x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(MAST + 20, 420); x.lineTo(MAST + 20, 1500); x.stroke(); ell(MAST, 370, 30, 30, '#e2b649', 6);
  flag(MAST + 20, 420, t, 1); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); watch(w / 2, h / 2, 0.75); }
function boxPol(w, h) { x.fillStyle = '#ffe2a6'; x.fillRect(0, 0, w, h); chickenBox(w / 2, h / 2 + 30, 0.8); }
function flagPol(t) { return (w, h) => { x.fillStyle = vg(0, h, '#6fc0ff', '#e3f4ff'); x.fillRect(0, 0, w, h); x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(40, h); x.lineTo(40, 20); x.stroke(); flag(48, 50, t, 0.95); }; }
function alibis(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['1 · CUISINIER', 'EN CUISINE'], ['2 · MÉCANICIEN', 'AU MOTEUR'], ['3 · MARIN', 'LE DRAPEAU']].forEach(([a, b], i) => { txt(a, w / 2, 48 + i * 100, 46, OL, { stroke: false }); txt(b, w / 2, 90 + i * 100, 36, '#7a6a58', { stroke: false }); }); }
function badge(n, px, py) { ell(px, py, 62, 62, C.red, 7); txt(String(n), px, py + 6, 92, '#fff', { stroke: false }); }
function timer(t, n, px, py, s = 1) { if (n < 0) return; ev('tick', 'tm' + n); x.save(); resetCam(); x.translate(px, py); const k = s * (1 + 0.18 * Math.pow(1 - (t % 1), 4)); x.scale(k, k);
  ell(0, 0, 118, 118, '#fff', 10); x.strokeStyle = C.red; x.lineWidth = 18; x.beginPath(); x.arc(0, 0, 92, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (n / 10)); x.stroke();
  txt(String(n), 0, 10, 120, C.red, { stroke: false }); rrc(0, -132, 50, 26, 8, OL, 0); x.restore(); }
function suspectCard(n, t) { return (w, h) => { x.fillStyle = '#bfe3ff'; x.fillRect(0, 0, w, h); x.save(); const sc = 0.62, px = w / 2 + 10, py = h + 300;
  if (n === 1) cast('cook', px, py, sc, t, { mood: 'worried', blink: false }); else if (n === 2) toon(px, py, sc, { t, ...MECA, mood: 'worried', blink: false }); else sailor(px, py, sc, 0.3, { mood: 'worried' });
  x.restore(); x.save(); x.translate(38, 38); x.scale(0.6, 0.6); badge(n, 0, 0); x.restore(); }; }
function draw(t) {
  const id = curId(t), tMon = WF('s1', /montre/i), tCui = WF('s2', /cuisinier/i), tTas = WF('s2', /Tasty/i), tDra = WF('s4', /drapeau/i), tAcc = WF('s1b', /accuse/i);
  const HF = 1418, Z = 1.6;   // tight framing: head ≈ 900 px on screen, character > half the height, subject on the left third, polaroids top-right
  const K = [[0, 0, X47, 1506, 1.6], [B.ff.end - 0.1, 1.2, XB + 140, HF, Z], [S('s1b') - 0.1, 1.2, 1500, 1330, 0.72], [tAcc + 0.6, 1.0, XB + 200, HF, 1.35],
    [S('s2') + 0.2, 1.6, XC + 140, HF, Z], [S('s3') - 0.1, 1.6, XM + 140, HF, Z], [S('s4') - 0.1, 1.6, XS + 140, HF, Z],
    [S('s4b') - 0.05, 1.6, X47, 1360, 1.3], [S('q'), 0.8, X47, 1360, 1.3]];
  camPath(t, K);
  deck(t);
  cast('boss', XB, GY, 0.8, t, { mood: id === 's1' || id === 's1b' ? 'angry' : 'neutral', look: 1, armUp: id === 's1b' && t > tAcc });
  cast('maid', 60, GY - 20, 0.6, t, { mood: 'worried', look: 1 });
  cast('cook', XC, GY, 0.8, t, { mood: id === 's2' ? 'smile' : 'neutral', look: 1 });
  cast('guard', 2120, GY - 30, 0.58, t, { mood: 'neutral', look: 1 });
  toon(XM, GY, 0.8, { t, blink: true, ...MECA, mood: id === 's3' ? 'neutral' : 'worried', look: 1 }); x.save(); x.translate(XM + 95, GY - 290); x.rotate(0.5); rbox(-14, -90, 28, 180, 10, '#9aa4b2', 5); ell(0, -100, 34, 26, '#9aa4b2', 5); x.restore();
  sailor(XS, GY, 0.8, t, { mood: id === 's4' ? 'smile' : 'neutral', look: 1 });
  cast('guard', EDGE - 120, GY - 30, 0.8, t, { mood: 'angry', look: 1 });
  [[1, XC, tCui], [2, XM, S('s3')], [3, XS, S('s4')]].forEach(([n, bx, tb]) => { if (t >= tb) { const k = eBack(seg(t, tb, tb + 0.3)); x.save(); x.translate(bx, GY - (n === 1 ? 900 : 820)); x.scale(k, k); badge(n, 0, 0); x.restore(); } });
  // 47: on the plank (hook / loop), otherwise walking along the crew
  const onPlank = id === 'ff' || id === 'q' || (id === 's4b' && t > S('s4b') + 1.4);
  const pts = [[S('s1'), XB + 360], [S('s2') - 0.2, XB + 360], [S('s2') + 1.2, XC + 300], [S('s3') - 0.3, XC + 300], [S('s3') + 1.0, XM + 300], [S('s4') - 0.3, XM + 300], [S('s4') + 1.2, XS + 300], [S('s4b'), XS + 300], [S('s4b') + 1.4, X47]];
  let x47 = X47, walking = false; if (!onPlank && id !== 'ff') { x47 = pts[0][1]; for (let i = 1; i < pts.length; i++) { const [ta, xa] = pts[i - 1], [tb, xb] = pts[i]; if (t >= ta && t < tb) { x47 = lerp(xa, xb, eIO(seg(t, ta, tb))); walking = xa !== xb; } else if (t >= tb) x47 = xb; } }
  const danger = onPlank || id === 's1b';
  p47(x47, x47 > EDGE - 40 ? GY - 46 : GY, 0.8, t, { blink: t > 0.6, mood: danger ? 'worried' : 'neutral', sweat: danger, look: onPlank ? -1 : -1, walk: walking ? t * 3 : 0 });
  resetCam();
  const nEnd = Math.ceil(TL.total - t);
  if (id === 'ff') timer(t, 10 - Math.floor(t), 900, 700, 0.9);
  if ((id === 's4b' && t > S('s4b') + 1.4) || id === 'q') timer(t, Math.min(10, nEnd), 900, 900, 0.85);
  hookCard(t, [['10 SECONDES…', 100, C.red], ['SINON 47 SAUTE AUX REQUINS', 76]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tMon) banner('LE YACHT DU BARON', 540, 330, P(t, S('s1') + 0.2));
  if (id === 's1' && t >= tMon) polaroid(770, 450, 360, 300, P(t, tMon, 0.3), rules, 'LA MONTRE EN OR', 0.04);
  if (id === 's1b') banner('LE BARON ACCUSE 47', 540, 330, P(t, S('s1b') + 0.1), C.red);
  if (id === 's2' && t >= tTas) polaroid(770, 450, 360, 300, P(t, tTas, 0.3), boxPol, 'SON ALIBI', 0.04);
  if (id === 's4' && t >= tDra) polaroid(770, 450, 380, 300, P(t, tDra, 0.3), flagPol(t), 'LE DRAPEAU', 0.03);
  if (id === 's4b') polaroid(600, 450, 520, 320, P(t, S('s4b'), 0.3), alibis, 'LES 3 ALIBIS', -0.02);
  if (id === 'q') [[1, 210, -0.05], [2, 540, 0.02], [3, 870, -0.03]].forEach(([n, px, r], i) => polaroid(px, 1620, 270, 250, P(t, S('q') + 0.3 + i * 0.15, 0.3), suspectCard(n, t), '', r));
  endCards(t, [['QUI EST LE VOLEUR ?', 84, C.red], ['1, 2 OU 3 EN COMMENTAIRE', 50]]);
}
