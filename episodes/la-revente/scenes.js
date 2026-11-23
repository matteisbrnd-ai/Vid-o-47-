// La revente — one bright street set: 47's second-hand game stand (awning, crates of « GTA 6 » boxes written in our font, no real logo),
// facades, passers-by. The Baron comes for his half. Solution = two separate deals of +10.
window.LOOK = 'gala';
const GY = 1950, TB = 1640;   // TB = table top
function gbox(px, py, s, rot) { x.save(); x.translate(px, py); x.rotate(rot || 0); x.scale(s, s); rbox(-60, -80, 120, 160, 8, '#1f1c2c', 6); x.fillStyle = '#ff5fa2'; x.fillRect(-52, -72, 104, 70);
  x.fillStyle = '#ffb347'; x.fillRect(-52, -30, 104, 28); txt('GTA', 0, -40, 44, '#fff', { stroke: false }); txt('6', 0, 36, 70, '#ffd23f', { stroke: false }); x.restore(); }
function street(t) { x.fillStyle = vg(-600, 900, '#7cc8ff', '#e6f6ff'); x.fillRect(-1400, -1000, 5200, 1900); cloud(300, 300, 1.1); cloud(2200, 200, 1);
  [[-1300, '#f2d2a9'], [-300, '#e9b98f'], [700, '#f6e0b8'], [1700, '#e7c3a0'], [2700, '#f2d2a9']].forEach(([bx, col], i) => { rbox(bx, 200 - (i % 2) * 120, 1000, 1600, 6, col, 8);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) { rbox(bx + 110 + c * 290, 320 - (i % 2) * 120 + r * 280, 180, 200, 8, '#9fd3f0', 6); rbox(bx + 95 + c * 290, 500 - (i % 2) * 120 + r * 280, 210, 26, 6, '#fff', 4); } });
  x.fillStyle = '#c9c2b5'; x.fillRect(-1400, 1600, 5200, 400); x.fillStyle = '#b5ad9e'; for (let i = -10; i < 40; i++) x.fillRect(i * 200, 1600, 6, 400);
  x.fillStyle = '#5c5f66'; x.fillRect(-1400, 2000, 5200, 1600); x.fillStyle = '#e8e8e8'; for (let i = -6; i < 20; i++) x.fillRect(i * 300, 2250, 160, 18); }
function stand(t) { // awning + sign + table with crates
  [960, 1840].forEach(px => rbox(px - 14, 900, 28, 760, 4, '#6b4428', 6));
  for (let i = 0; i < 8; i++) { x.beginPath(); x.moveTo(920 + i * 120, 860); x.lineTo(1040 + i * 120, 860); x.lineTo(1040 + i * 120, 960); x.quadraticCurveTo(980 + i * 120, 1010, 920 + i * 120, 960); x.closePath(); fs(i % 2 ? '#fff' : '#d6332b', 6); }
  rbox(1050, 700, 700, 150, 14, '#2b2b30', 8); txt("JEUX D'OCCASION", 1400, 778, 70, C.yellow, { stroke: false });
  rbox(900, TB, 1000, 40, 8, '#8a5a32', 8); rbox(930, TB + 40, 940, 280, 6, '#a8703f', 7);
  [[1000, 0], [1110, 0.05], [1220, -0.04], [1560, 0.03], [1680, -0.05], [1790, 0]].forEach(([a, r]) => gbox(a, TB - 80, 0.9, r)); rrc(1400, TB - 60, 170, 110, 12, '#f5c542', 6); txt('€', 1400, TB - 56, 80, OL, { stroke: false }); }
function car(px, py) { rbox(px - 330, py - 190, 660, 170, 40, '#1b1b1f', 8); poly([[px - 200, py - 190], [px - 130, py - 300], [px + 150, py - 300], [px + 220, py - 190]], '#1b1b1f', 8); rbox(px - 110, py - 280, 240, 80, 10, '#5a6b80', 5);
  [px - 200, px + 200].forEach(wx => { ell(wx, py - 20, 70, 70, '#2b2b30', 8); ell(wx, py - 20, 30, 30, '#9a9a9a', 5); }); }
function steps(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['ACHÈTE', '70 €', C.red], ['REVEND', '80 €', C.green], ['RACHÈTE', '90 €', C.red], ['REVEND', '100 €', C.green]].forEach(([a, b, c], i) => {
  if (k < i / 4 + 0.01) return; const cy = 60 + i * 92; gbox(60, cy, 0.42, 0); txt(a, 230, cy, 56, OL, { stroke: false }); txt(b, w - 110, cy, 64, c, { stroke: false }); }); }
function hookPic(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const L = [['ACHAT', '70 €', C.red], ['VENTE', '80 €', C.green], ['RACHAT', '90 €', C.red], ['VENTE', '100 €', C.green]];
  L.forEach(([a, b, c], i) => { const cx = w * (0.125 + i * 0.25); gbox(cx, h * 0.36, 0.9, 0); txt(a, cx, h * 0.68, 46, OL, { stroke: false }); txt(b, cx, h * 0.84, 62, c, { stroke: false }); if (i < 3) txt('→', cx + w * 0.125, h * 0.36, 60, OL, { stroke: false }); }); }
function deal(w, h, n, a, b, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('AFFAIRE ' + n, w / 2, 50, 60, OL, { stroke: false }); txt('− ' + a + ' €', w * 0.27, 150, 70, C.red, { stroke: false });
  txt('+ ' + b + ' €', w * 0.73, 150, 70, C.green, { stroke: false }); if (k > 0.5) txt('= + 10 €', w / 2, 260, 86, C.green, { stroke: false }); }
function draw(t) {
  const id = curId(t), tSort = WF('s1', /sortir/i), tStand = WF('s1', /stand/i), tMoit = WF('s2', /moitié/i), tMens = WF('s2', /mens/i), tAch = WF('s3', /achète/i), tRach = WF('s3', /rachète/i), tCent = WF('s3', /^cent/i),
    tMain = WF('s4', /main/i), tPrem = WF('sol2', /Première/i), tPlus = WF('sol2', /Plus/i), tDeux = WF('sol3', /Deuxième/i), tEnc = WF('sol3', /Encore/i), tTot = WF('sol3', /Total/i), tBar3 = WF('sol3', /Total/i);
  const baron = id === 's2' || id === 's4' || id === 'q' || id === 'ff' || id === 'sol3' && t >= tBar3 || id === 'end', buyers = id === 's3' || id === 's1' || id === 'c1' || id === 'c2' || id === 'sol1' || id === 'sol2';
  const K = [[0, 0, 780, 898, 1.4], [B.ff.end - 0.1, 1.1, 1350, 1300, 0.56], [tStand, 1.0, 1400, 1250, 0.85], [S('s2'), 1.0, 2150, 1238, 1.2], [tMens, 0.8, 780, 1247, 1.3],
    [S('s3'), 1.0, 1250, 1350, 0.75], [tRach, 1.0, 1550, 1350, 0.75], [S('s4'), 1.0, 2150, 1238, 1.25], [S('q'), 0.8, 780, 1247, 1.3],
    [S('c1'), 1.0, 1350, 1300, 0.56], [S('sol1'), 0.8, 780, 1247, 1.3], [S('sol2'), 1.0, 1300, 1450, 0.9], [tBar3, 0.8, 1500, 1300, 0.7], [S('end'), 1.0, 1350, 1300, 0.56]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 6 : 0);
  street(t);
  if (baron) car(2900, GY + 30);
  stand(t);
  if (buyers) { cast('rico', 2150, GY, 0.75, t, { mood: id === 's3' && t >= tAch ? 'smile' : 'neutral', look: -1, armUp: id === 's3' && t >= tAch && t < tRach });
    cast('woman', 2450, GY + 10, 0.72, t, { mood: 'smile', look: -1, armUp: id === 's3' && t >= tRach }); }
  if (baron) cast('boss', 2150, GY, 0.8, t, { mood: id === 'sol3' || id === 'end' ? 'smile' : 'smug', look: -1, armUp: id === 's4' && t >= tMain || id === 'q' || id === 'sol3' });
  const hold = id === 'ff' || id === 's3';
  p47(780, GY, 0.8, t, { mood: id === 'ff' || id === 's4' || id === 'q' ? 'worried' : id === 's2' ? 'shock' : 'smug', look: 1, armUp: hold, sweat: id === 's4' || id === 'ff', blink: t > 0.6 });
  if (hold) gbox(905, GY - 600, 0.8, 0.1);
  resetCam();
  if (id === 'ff' && t > 0.1 && t < 0.22) { x.fillStyle = 'rgba(255,255,255,.4)'; x.fillRect(0, 0, W, H); }
  hookCard(t, [['ACHÈTE 70 € → REVEND 80 €', 70], ['RACHÈTE 90 € → REVEND 100 €', 70], ['IL A GAGNÉ COMBIEN ?', 90, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 920, 940, 500, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t >= tSort) banner('LA SEMAINE DE GTA 6', 540, 330, P(t, tSort));
  if (id === 's2' && t >= tMoit) polaroid(560, 640, 620, 380, P(t, tMoit, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('LA MOITIÉ', w / 2, 80, 80, OL, { stroke: false }); txt('DE TES GAINS', w / 2, 170, 64, OL, { stroke: false }); txt('MENSONGE = FERMÉ', w / 2, 260, 54, C.red, { stroke: false }); }, 'LA RÈGLE DU BARON', -0.03);
  if (id === 's3' && t >= tAch) polaroid(560, 620, 640, 420, P(t, tAch, 0.3), (w, h) => steps(w, h, seg(t, tAch, tCent + 0.1)), 'SA JOURNÉE', 0.03);
  if (id === 's4' && t >= tMain) pill('💰 SA MOITIÉ ?', 540, 340, P(t, tMain), C.red);
  germanCards(t, [['47 A GAGNÉ', 90], ['COMBIEN ?', 110, C.red]]);
  if (id === 'sol1') paperCard([['20 € !', 140, C.red], ['(PAS 10)', 60]], 540, 420, P(t, S('sol1') + 0.2), { w: 600 });
  if (id === 'sol2' && t >= tPrem) polaroid(560, 640, 640, 340, P(t, tPrem, 0.3), (w, h) => deal(w, h, 1, 70, 80, seg(t, tPrem, tPlus + 0.3)), '', -0.03);
  if (id === 'sol3' && t < tTot) polaroid(560, 640, 640, 340, P(t, S('sol3') + 0.1, 0.3), (w, h) => deal(w, h, 2, 90, 100, seg(t, S('sol3'), tEnc + 0.3)), '', 0.03);
  if (id === 'sol3' && t >= tTot) paperCard([['TOTAL : + 20 €', 100, C.green], ['10 € POUR LE BARON', 60]], 540, 460, P(t, tTot), { w: 760 });
}
