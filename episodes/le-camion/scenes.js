// Le camion — one big evening canvas: bridge + stuck truck (left), cars behind, game shop with the midnight queue (right). Camera glides between them.
window.LOOK = 'gala';
const GY = 1950, BR_Y = 1300;                 // underside of the bridge
function truck(tx, drop, t, moving, flat) { x.save(); x.translate(tx, drop); const sp = moving ? t * 10 : 0;
  rbox(-720, 1300, 920, 520, 14, '#6a3fa0', 9); x.save(); x.beginPath(); x.rect(-720, 1300, 920, 520); x.clip();
  [['#ff6a4a', 1560], ['#ff9a4a', 1620], ['#ffc04a', 1680], ['#ffe08a', 1740]].forEach(([c, y]) => { x.fillStyle = c; x.fillRect(-720, y, 920, 60); }); ell(-260, 1560, 150, 150, '#ffd24a', 0); x.restore();
  x.strokeStyle = OL; x.lineWidth = 9; x.strokeRect(-720, 1300, 920, 520); txt('LIVRAISON', -260, 1390, 64, '#fff', { sw: 10 }); txt('GTA 6', -260, 1480, 110, '#fff', { sw: 12 });
  rbox(200, 1500, 290, 330, 30, '#e8e8ee', 9); rbox(260, 1540, 200, 130, 14, '#9fd6ff', 7); rbox(180, 1800, 330, 40, 10, '#3a3d44', 6); ell(500, 1790, 20, 16, '#fff7c0', 5);
  [-560, -380, 340].forEach(wx => { const ry = flat ? 58 : 70; ell(wx, GY - ry, 72, ry, '#26262b', 7); ell(wx, GY - ry, 30, 26, '#c9ced6', 5); x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(wx, GY - ry); x.lineTo(wx + Math.cos(sp) * 28, GY - ry + Math.sin(sp) * 24); x.stroke(); });
  x.restore(); }
function car(cx, col) { rbox(cx - 200, 1780, 400, 110, 40, col, 7); rbox(cx - 120, 1700, 240, 100, 30, col, 7); rbox(cx - 95, 1715, 190, 65, 14, '#9fd6ff', 5); [cx - 120, cx + 120].forEach(wx => { ell(wx, 1900, 48, 48, '#26262b', 6); ell(wx, 1900, 20, 20, '#c9ced6', 4); }); ell(cx + 190, 1810, 16, 12, '#fff7c0', 4); }
function shop(t, mid) { rbox(2650, 1000, 1000, 760, 12, '#2a2f55', 9); rbox(2700, 1250, 520, 380, 8, '#3a4a8a', 7); rbox(3300, 1300, 280, 460, 8, mid ? '#ffe08a' : '#1b1f3a', 7);
  rrc(3150, 1100, 760, 130, 16, '#ff4fa0', 8); txt('LE TEMPLE DU JEU', 3150, 1106, 88, '#fff', { sw: 10 }); rrc(2960, 1440, 420, 90, 12, '#fff', 6); txt(mid ? 'EN RAYON !' : 'SORTIE MINUIT', 2960, 1444, 62, C.red, { stroke: false });
  if (mid) for (let k = 0; k < 9; k++) rbox(2730 + k * 52, 1540, 40, 70, 4, ['#6a3fa0', '#ff6a4a', '#ffc04a'][k % 3], 4); }
function bridge() { x.fillStyle = '#b9b2a8'; x.fillRect(1020, 700, 120, 1050); x.fillRect(1560, 700, 120, 1050);             // pillars behind
  rbox(820, 1080, 1060, BR_Y - 1080, 6, '#d9d2c4', 9); x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(820, 1080, 1060, 40); x.strokeStyle = OL; x.lineWidth = 8; for (let k = 0; k < 12; k++) { x.beginPath(); x.moveTo(840 + k * 90, 1080); x.lineTo(840 + k * 90, 1000); x.stroke(); } x.beginPath(); x.moveTo(820, 1000); x.lineTo(1880, 1000); x.stroke();
  ell(1350, 1190, 74, 74, '#fff', 8); x.strokeStyle = C.red; x.lineWidth = 16; x.beginPath(); x.arc(1350, 1190, 62, 0, 7); x.stroke(); txt('3,50 m', 1350, 1194, 40, OL, { stroke: false }); }
function world(t, mid) { x.fillStyle = vg(-1500, 1500, '#4a4f9a', '#ffb07a'); x.fillRect(-1600, -1500, 5800, 3300); ell(-300, 600, 90, 90, '#fff3c0', 0);
  [[-1200, 1100, 500], [-700, 1250, 350], [2100, 1150, 420], [3800, 1180, 380]].forEach(([bx, by, w]) => { rbox(bx, by, w, 1720 - by, 6, '#5a5f9a', 6); for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) rbox(bx + 40 + j * (w - 80) / 3, by + 40 + i * 90, 50, 50, 4, (i + j) % 3 ? '#ffe08a' : '#3a3f6a', 3); });
  x.fillStyle = '#4a4d55'; x.fillRect(-1600, 1720, 5800, 3000); x.fillStyle = '#fff'; for (let i = -10; i < 30; i++) x.fillRect(i * 260, 2150, 140, 18); shop(t, mid); }
function clock(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); ell(0, 0, 90, 90, '#fff', 8); x.strokeStyle = OL; x.lineWidth = 10; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -64); x.moveTo(0, 0); x.lineTo(-8, -50); x.stroke(); x.restore(); }
function tyres(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('AVANT', w * 0.27, 50, 46, OL, { stroke: false }); txt('APRÈS', w * 0.73, 50, 46, C.red, { stroke: false });
  ell(w * 0.27, h * 0.55, 110, 110, '#26262b', 8); ell(w * 0.27, h * 0.55, 46, 46, '#c9ced6', 5); const ry = lerp(110, 80, k), cy = h * 0.55 + 110 - ry; ell(w * 0.73, cy, 120, ry, '#26262b', 8); ell(w * 0.73, cy, 46, 40, '#c9ced6', 5);
  x.fillStyle = OL; x.fillRect(30, h * 0.55 + 112, w - 60, 8); if (k > 0.5) txt('↓ −3 cm', w * 0.73, h - 50, 50, '#2a8a3a', { stroke: false }); }
function draw(t) {
  const id = curId(t), tPont = WF('s2', /pont/i), tCam = WF('s2', /camion/i), tRec = WF('s3', /Reculer/i), tVoit = WF('s3', /voitures/i), tAr = WF('s4', /arrive/i), tPh = WF('s4', /phrase/i),
    tEcr = WF('sol2', /écrasent/i), tPas = WF('sol2', /passe/i), tMin = WF('sol3', /minuit/i);
  const mid = (id === 'sol3' && t >= tMin) || id === 'end';
  const K = [[0, 0, 820, 1420, 1.25], [B.ff.end - 0.1, 1.0, 900, 1450, 0.75], [S('s1') + 0.5, 1.6, 3100, 1450, 0.85], [S('s2'), 1.4, 1000, 1400, 1.45], [tCam, 0.6, 980, 1350, 1.8],
    [S('s3'), 1.2, 300, 1500, 0.7], [S('s4'), 1.0, 1550, 1550, 1.05], [S('q'), 0.8, 1560, 1550, 1.3], [S('c1'), 1.2, 1300, 1400, 0.6],
    [S('sol1'), 0.8, 1560, 1550, 1.3], [S('sol2'), 1.0, 1300, 1450, 0.7], [tPas, 1.6, 2100, 1450, 0.7], [S('sol3') + 0.8, 1.4, 3000, 1450, 0.85], [S('end'), 1.2, 2400, 1400, 0.6]];
  camPath(t, K);
  world(t, mid); bridge();
  const flat = id === 'sol2' || id === 'sol3' || id === 'end', drop = id === 'sol2' ? 24 * eOut(seg(t, tEcr, tEcr + 0.8)) : flat ? 24 : 0;
  const tx = id === 'sol2' ? lerp(760, 2500, eIO(seg(t, tPas - 0.3, B.sol2.end))) : id === 'sol3' || id === 'end' ? 1950 : 760;
  if (!flat) { x.strokeStyle = C.red; x.lineWidth = 10; x.lineCap = 'round'; [[880, 1290, 940, 1240], [900, 1310, 980, 1300], [870, 1310, 900, 1350]].forEach(([a, b, c, d]) => { const j = Math.sin(t * 30) * 8; x.beginPath(); x.moveTo(a, b); x.lineTo(c + j, d); x.stroke(); }); }
  car(-500, '#2f7fd0'); car(-50, '#3aa35a');
  if (id !== 'sol3' && id !== 'end' && !(id === 'sol2' && t >= tPas - 0.4)) { cast('gardener', 1450, GY + 20, 0.8, t, { mood: ['s2', 's3', 'ff'].includes(id) ? 'worried' : id === 'sol2' ? 'shock' : 'neutral', look: id === 's4' || id === 'q' || id === 'sol1' ? 1 : -1, sweat: id === 's2' || id === 's3' }); }
  if (id !== 'sol3' && id !== 'end') truck(tx, drop, t, id === 'sol2' && t >= tPas - 0.4);
  if (!(id === 'sol2' && t > tPas)) { const show47 = !['ff', 's1', 's2', 's3', 'sol3', 'end'].includes(id) && !(id === 's4' && t < tAr);
    if (show47) { const px = id === 's4' ? lerp(2300, 1720, eOut(seg(t, tAr, tAr + 1.2))) : 1720; p47(px, GY + 30, 0.8, t, { mood: 'smug', look: -1, walk: id === 's4' && t < tAr + 1.2 ? t * 3 : 0, armUp: id === 'sol1', blink: t > 0.6 }); } }
  if (id === 'sol3' || id === 'end') { [2560, 2740, 2920].forEach((qx, i) => cast(['rico', 'woman', 'cook'][i], qx, GY + 20, 0.7, t, { mood: mid ? 'smile' : 'neutral', look: 1 })); p47(2390, GY + 30, 0.8, t, { mood: 'smug', look: 1, blink: t > 0.6 }); }
  else [2750, 2950, 3150, 3350].forEach((qx, i) => cast(['rico', 'woman', 'cook', 'old'][i], qx, GY + 20, 0.7, t, { mood: 'neutral', look: -1 }));
  resetCam();
  hookCard(t, [['COINCÉ SOUS LE PONT…', 80], ['47 LE SORT SANS OUTIL', 80, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') { banner('CE SOIR · 23H00', 540, 330, P(t, S('s1') + 0.3)); }
  if (id === 's2' && t >= tPont) polaroid(560, 520, 520, 380, P(t, tPont, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('PONT : 3,50 m', w / 2, 110, 66, OL, { stroke: false }); if (t >= tCam) txt('CAMION : 3,52 m', w / 2, 220, 66, C.red, { stroke: false }); if (t >= tCam + 0.8) txt('= 2 cm DE TROP', w / 2, 320, 54, C.red, { stroke: false }); }, 'LE PROBLÈME', -0.03);
  if (id === 's3' && t >= tRec) paperCard([['RECULER ?', 90], ['IMPOSSIBLE', 100, C.red]], 540, 400, P(t, tRec), { w: 760 });
  if (id === 's3' && t >= tVoit + 0.6) { x.save(); x.translate(540, 700); clock(0, 0, 1.3); x.restore(); pill('23H52', 540, 870, P(t, tVoit + 0.6), C.red); }
  if (id === 's4' && t >= tPh) pill('0 OUTIL · 1 PHRASE', 540, 420, P(t, tPh), C.orange);
  germanCards(t, [['IL LUI A DIT QUOI ?', 90, C.red]]);
  if (id === 'sol1') speech('« DÉGONFLE TES PNEUS ! »', 540, 520, P(t, WF('sol1', /Dégonfle/i), 0.3), 84);
  if (id === 'sol2') polaroid(560, 500, 640, 420, P(t, S('sol2'), 0.3), (w, h) => tyres(w, h, seg(t, tEcr, tEcr + 0.8)), 'LES PNEUS', -0.03);
  if (id === 'sol3' && t < tMin) pill('⛽ PNEUS REGONFLÉS', 540, 420, P(t, S('sol3') + 0.2), '#2a8a3a');
  if (id === 'sol3' && t >= tMin) { paperCard([['00:00', 120, C.red], ['MINUIT PILE !', 70]], 540, 420, P(t, tMin), { w: 700 }); }
}
