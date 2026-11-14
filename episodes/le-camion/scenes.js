// Le camion — one big evening canvas: bridge + stuck truck (left), cars behind, game shop with the midnight queue (right). Camera glides between them.
window.LOOK = 'gala';
const GY = 1950, BR_Y = 1300;                 // underside of the bridge
function truck(tx, drop, t, moving, flat) { x.save(); x.translate(tx, drop); const sp = moving ? t * 10 : 0;
  rbox(-720, 1300, 920, 520, 14, '#6a3fa0', 9); x.save(); x.beginPath(); x.rect(-720, 1300, 920, 520); x.clip();
  [['#ff6a4a', 1560], ['#ff9a4a', 1620], ['#ffc04a', 1680], ['#ffe08a', 1740]].forEach(([c, y]) => { x.fillStyle = c; x.fillRect(-720, y, 920, 60); }); ell(-260, 1560, 150, 150, '#ffd24a', 0); x.restore();
  x.strokeStyle = OL; x.lineWidth = 9; x.strokeRect(-720, 1300, 920, 520); if (window.DENT) { x.fillStyle = '#4a2a78'; x.beginPath(); x.moveTo(-200, 1300); x.lineTo(-140, 1318); x.lineTo(-60, 1306); x.lineTo(40, 1322); x.lineTo(120, 1308); x.lineTo(200, 1316); x.lineTo(200, 1300); x.fill(); } txt('LIVRAISON', -260, 1390, 64, '#fff', { sw: 10 }); txt('GTA 6', -260, 1480, 110, '#fff', { sw: 12 });
  rbox(200, 1500, 290, 330, 30, '#e8e8ee', 9); rbox(260, 1540, 200, 130, 14, '#9fd6ff', 7); if (moving) { ell(380, 1610, 44, 48, '#f2c9a0', 5); rbox(330, 1555, 100, 30, 10, '#4f8f4a', 4); } rbox(180, 1800, 330, 40, 10, '#3a3d44', 6); ell(500, 1790, 20, 16, '#fff7c0', 5);
  [-560, -380, 340].forEach(wx => { const ry = flat ? 58 : 70; ell(wx, GY - ry, 72, ry, '#26262b', 7); ell(wx, GY - ry, 30, 26, '#c9ced6', 5); x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(wx, GY - ry); x.lineTo(wx + Math.cos(sp) * 28, GY - ry + Math.sin(sp) * 24); x.stroke(); });
  x.restore(); }
function car(cx, col, oy = 0) { x.save(); x.translate(0, oy); rbox(cx - 200, 1780, 400, 110, 40, col, 7); rbox(cx - 120, 1700, 240, 100, 30, col, 7); rbox(cx - 95, 1715, 190, 65, 14, '#9fd6ff', 5); [cx - 120, cx + 120].forEach(wx => { ell(wx, 1900, 48, 48, '#26262b', 6); ell(wx, 1900, 20, 20, '#c9ced6', 4); }); ell(cx + 190, 1810, 16, 12, '#fff7c0', 4); x.restore(); }
function shop(t, mid) { x.save(); x.translate(1600, 0); rbox(2650, 1000, 1000, 760, 12, '#2a2f55', 9); rbox(2700, 1250, 520, 380, 8, '#3a4a8a', 7); rbox(3300, 1300, 280, 460, 8, mid ? '#ffe08a' : '#1b1f3a', 7);
  rrc(3150, 1100, 760, 130, 16, '#ff4fa0', 8); txt('LE TEMPLE DU JEU', 3150, 1106, 88, '#fff', { sw: 10 }); rrc(2960, 1440, 420, 90, 12, '#fff', 6); txt(mid ? 'EN RAYON !' : 'SORTIE MINUIT', 2960, 1444, 62, C.red, { stroke: false });
  if (mid) for (let k = 0; k < 9; k++) rbox(2730 + k * 52, 1540, 40, 70, 4, ['#6a3fa0', '#ff6a4a', '#ffc04a'][k % 3], 4); x.restore(); }
function bridgeBack() { const g = x.createLinearGradient(0, BR_Y, 0, 1720); g.addColorStop(0, '#2a2638'); g.addColorStop(1, '#4a4558'); x.fillStyle = g; x.fillRect(820, BR_Y, 1480, 420); rbox(700, 720, 140, 1000, 4, '#a8a090', 9); rbox(2260, 720, 140, 1000, 4, '#a8a090', 9);   // dark underside + abutments (behind the truck)
  x.fillStyle = 'rgba(255,230,150,.5)'; [1100, 1500, 1900].forEach(lx => { x.fillRect(lx - 40, BR_Y, 80, 14); }); }
function bridge(t, stuck) {
  rbox(680, 940, 1740, BR_Y - 940, 6, '#d9d2c4', 10); x.fillStyle = 'rgba(0,0,0,.10)'; x.fillRect(680, BR_Y - 50, 1740, 50); x.strokeStyle = 'rgba(0,0,0,.18)'; x.lineWidth = 4; for (let k = 1; k < 8; k++) { x.beginPath(); x.moveTo(680 + k * 217, 940); x.lineTo(680 + k * 217, BR_Y); x.stroke(); }
  x.strokeStyle = OL; x.lineWidth = 8; for (let k = 0; k < 20; k++) { x.beginPath(); x.moveTo(700 + k * 90, 940); x.lineTo(700 + k * 90, 860); x.stroke(); } x.beginPath(); x.moveTo(680, 860); x.lineTo(2420, 860); x.stroke();
                                                                                        // traffic on top of the bridge
  rrc(1050, 1060, 300, 120, 12, '#ffd24a', 8); txt('⚠ 3,50 m', 1050, 1064, 66, OL, { stroke: false });
  if (stuck) { x.strokeStyle = OL; x.lineWidth = 7; [[830, 1300, 880, 1250, 940, 1270], [1000, 1300, 1030, 1240, 1090, 1260], [1180, 1300, 1200, 1255]].forEach(c => { x.beginPath(); x.moveTo(c[0], c[1]); for (let i = 2; i < c.length; i += 2) x.lineTo(c[i], c[i + 1]); x.stroke(); });   // cracks in the concrete
    x.fillStyle = '#ffd24a'; for (let i = 0; i < 8; i++) { const a = i * 0.8 + t * 9, r = 30 + (i * 23 + t * 200) % 70; ell(840 + Math.cos(a) * r, 1300 + Math.sin(a) * r * 0.5, 7, 7, '#ffd24a', 0); } } }
function arrow(px, y0, y1, label, col) { x.strokeStyle = col; x.lineWidth = 10; x.beginPath(); x.moveTo(px, y0 + 10); x.lineTo(px, y1 - 10); x.stroke(); poly([[px - 26, y0 + 40], [px, y0], [px + 26, y0 + 40]], col, 0); poly([[px - 26, y1 - 40], [px, y1], [px + 26, y1 - 40]], col, 0);
  rrc(px, (y0 + y1) / 2, 230, 90, 14, '#fff', 6); txt(label, px, (y0 + y1) / 2 + 4, 60, col, { stroke: false }); }
function world(t, mid) { window._sign = 1; x.fillStyle = vg(-1500, 1500, '#4a4f9a', '#ffb07a'); x.fillRect(-1600, -1500, 7600, 3300); ell(-300, 600, 90, 90, '#fff3c0', 0);
  [[-1200, 1100, 500], [-700, 1250, 350], [2100, 1150, 420], [3800, 1180, 380]].forEach(([bx, by, w]) => { rbox(bx, by, w, 1720 - by, 6, '#5a5f9a', 6); for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) rbox(bx + 40 + j * (w - 80) / 3, by + 40 + i * 90, 50, 50, 4, (i + j) % 3 ? '#ffe08a' : '#3a3f6a', 3); });
  rrc(2600, 1250, 420, 110, 12, '#2f5fb3', 7); txt('TEMPLE DU JEU → 5 KM', 2600, 1254, 50, '#fff', { stroke: false }); x.fillStyle = OL; x.fillRect(2595, 1305, 10, 420);
  x.fillStyle = '#4a4d55'; x.fillRect(-1600, 1720, 7600, 3000); x.fillStyle = '#fff'; for (let i = -10; i < 30; i++) x.fillRect(i * 260, 2150, 140, 18); shop(t, mid); }
function clock(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); ell(0, 0, 90, 90, '#fff', 8); x.strokeStyle = OL; x.lineWidth = 10; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -64); x.moveTo(0, 0); x.lineTo(-8, -50); x.stroke(); x.restore(); }
function tyres(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('AVANT', w * 0.27, 50, 46, OL, { stroke: false }); txt('APRÈS', w * 0.73, 50, 46, C.red, { stroke: false });
  ell(w * 0.27, h * 0.55, 110, 110, '#26262b', 8); ell(w * 0.27, h * 0.55, 46, 46, '#c9ced6', 5); const ry = lerp(110, 80, k), cy = h * 0.55 + 110 - ry; ell(w * 0.73, cy, 120, ry, '#26262b', 8); ell(w * 0.73, cy, 46, 40, '#c9ced6', 5);
  x.fillStyle = OL; x.fillRect(30, h * 0.55 + 112, w - 60, 8); if (k > 0.5) txt('↓ −3 cm', w * 0.73, h - 50, 50, '#2a8a3a', { stroke: false }); }
function tunnelInsert(t, low) { resetCam(); const OX = 140, OW = 800, OT = 720, RD = 1720, drop = low * 80;
  x.fillStyle = vg(0, 900, '#4a4f9a', '#ffb07a'); x.fillRect(0, 0, W, H); x.fillStyle = '#4a4d55'; x.fillRect(0, RD, W, H - RD);
  const g = x.createLinearGradient(0, OT, 0, RD); g.addColorStop(0, '#15131f'); g.addColorStop(1, '#3a3648'); x.fillStyle = g; x.fillRect(OX, OT, OW, RD - OT);   // dark underpass
  ell(540, 900, 120, 60, 'rgba(255,230,150,.35)', 0);
  const away = low ? seg(t, WF('sol2', /écrasent/i) + 1.4, WF('sol2', /passe/i)) : 0, sh = low ? 0 : Math.sin(t * 47) * 5;
  x.save(); x.translate(540 + sh, RD); x.scale(1 - 0.55 * away, 1 - 0.55 * away); x.translate(-540, -RD);
  const bx = 200, bw = 680, top = OT - 14 + drop;                                                                                  // truck rear, top hidden in the concrete
  [[290, 1700], [790, 1700]].forEach(([wx, wy]) => { const ry = low ? 46 : 60; rbox(wx - 70, RD - ry * 2, 140, ry * 2, 30, '#26262b', 7); });
  rbox(bx, top, bw, 1640 - top, 8, '#6a3fa0', 9); x.save(); x.beginPath(); x.rect(bx, top, bw, 1600 - top); x.clip(); [['#ff6a4a', 1330], ['#ff9a4a', 1400], ['#ffc04a', 1470], ['#ffe08a', 1540]].forEach(([c, y]) => { x.fillStyle = c; x.fillRect(bx, y, bw, 70); }); x.restore();
  x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(540, top + 30); x.lineTo(540, 1610); x.stroke(); txt('LIVRAISON', 540, top + 170, 64, '#fff', { sw: 10 }); txt('GTA 6', 540, top + 290, 150, '#fff', { sw: 14 });
  [480, 600].forEach(hx => rbox(hx, 1180, 26, 100, 8, '#c9ced6', 5)); rbox(bx - 10, 1600, bw + 20, 70, 10, '#3a3d44', 7); [250, 830].forEach(lx => rrc(lx, 1560, 70, 40, 8, '#ff4a3a', 5));
  rrc(540, 1635, 160, 50, 6, '#fff', 4); txt('GTA 6', 540, 1638, 40, OL, { stroke: false }); x.restore();
  x.fillStyle = '#d9d2c4'; x.fillRect(0, 380, W, OT - 380); x.fillRect(0, OT, OX, RD - OT); x.fillRect(OX + OW, OT, W - OX - OW, RD - OT);              // concrete face around the opening
  x.strokeStyle = OL; x.lineWidth = 10; x.strokeRect(OX, OT, OW, RD - OT); x.beginPath(); x.moveTo(0, 380); x.lineTo(W, 380); x.stroke();
  x.strokeStyle = 'rgba(0,0,0,.15)'; x.lineWidth = 4; for (let k = 1; k < 6; k++) { x.beginPath(); x.moveTo(0, 380 + k * 56); x.lineTo(W, 380 + k * 56); x.stroke(); }
  x.strokeStyle = OL; x.lineWidth = 8; for (let k = 0; k < 13; k++) { x.beginPath(); x.moveTo(20 + k * 85, 380); x.lineTo(20 + k * 85, 300); x.stroke(); } x.beginPath(); x.moveTo(0, 300); x.lineTo(W, 300); x.stroke();
  rrc(540, 600, 340, 130, 14, '#ffd24a', 8); txt('⚠ 3,50 m', 540, 604, 80, OL, { stroke: false });
  if (!low) { x.strokeStyle = 'rgba(0,0,0,.45)'; x.lineWidth = 6; x.beginPath(); x.moveTo(210, 760); for (let i = 0; i < 12; i++) x.lineTo(240 + i * 55, 750 + (i % 2) * 24); x.stroke();
    x.strokeStyle = OL; x.lineWidth = 7; [[200, 720, 240, 660, 300, 690], [880, 720, 850, 650, 800, 680]].forEach(c => { x.beginPath(); x.moveTo(c[0], c[1]); for (let i = 2; i < c.length; i += 2) x.lineTo(c[i], c[i + 1]); x.stroke(); });
    for (let i = 0; i < 14; i++) { const side = i % 2 ? 880 : 200, a = i * 0.9 + t * 11, r = 20 + (i * 31 + t * 260) % 90; ell(side + Math.cos(a) * r, 725 + Math.abs(Math.sin(a)) * r * 0.6, 8, 8, '#ffd24a', 0); } }
  else { x.strokeStyle = '#7cff8a'; x.lineWidth = 10; x.beginPath(); x.moveTo(540, OT + 4); x.lineTo(540, top - 4); x.stroke(); } }
function draw(t) {
  const id = curId(t), tPont = WF('s2', /pont/i), tCam = WF('s2', /camion/i), tRec = WF('s3', /Reculer/i), tVoit = WF('s3', /voitures/i), tAr = WF('s4', /arrive/i), tPh = WF('s4', /phrase/i),
    tEcr = WF('sol2', /écrasent/i), tPas = WF('sol2', /passe/i), tMin = WF('sol3', /minuit/i);
  const mid = (id === 'sol3' && t >= tMin) || id === 'end';
  const K = [[0, 0, 1150, 1420, 1.0], [B.ff.end - 0.1, 1.0, 1000, 1400, 0.72], [S('s1') + 0.4, 1.2, 4700, 1450, 0.85], [S('s2'), 1.4, 1500, 1450, 0.75], [tCam, 0.8, 960, 1420, 0.95], [WF('s2', /bloqué/i), 0.6, 960, 1330, 1.7],
    [S('s3'), 1.2, 100, 1500, 0.6], [S('s4'), 1.0, 1850, 1550, 1.0], [S('q'), 0.8, 1925, 1550, 1.3], [S('c1'), 1.2, 1300, 1400, 0.6],
    [S('sol1'), 0.8, 1925, 1550, 1.3], [S('sol2'), 1.0, 1500, 1450, 0.7], [tPas, 1.6, 2300, 1450, 0.7], [S('sol3') + 0.8, 1.4, 4450, 1450, 0.85], [S('end'), 1.2, 4500, 1400, 0.65]];
  camPath(t, K);
  world(t, mid); bridgeBack();
  const flat = id === 'sol2' || id === 'sol3' || id === 'end', drop = id === 'sol2' ? 24 * eOut(seg(t, tEcr, tEcr + 0.8)) : flat ? 24 : 0;
  const tx = id === 'sol2' ? lerp(1100, 2900, eIO(seg(t, tPas - 0.3, B.sol2.end))) : id === 'sol3' || id === 'end' ? 1950 : 1100;
  car(-1400, '#f2b62f'); car(-950, '#d9473a'); car(-500, '#2f7fd0'); car(-50, '#3aa35a');
  if (id !== 'sol3' && id !== 'end' && !(id === 'sol2' && t >= tPas - 0.4)) { cast('gardener', 1800, GY + 20, 0.8, t, { mood: ['s2', 's3', 'ff'].includes(id) ? 'worried' : id === 'sol2' ? 'shock' : 'neutral', look: id === 's4' || id === 'q' || id === 'sol1' ? 1 : -1, sweat: id === 's2' || id === 's3' }); }
  window.DENT = !flat; if (id !== 'sol3' && id !== 'end') truck(tx, drop, t, id === 'sol2' && t >= tPas - 0.4);
  if (!(id === 'sol2' && t > tPas)) { const show47 = !['ff', 's1', 's2', 's3', 'sol3', 'end'].includes(id) && !(id === 's4' && t < tAr);
    if (show47) { const px = id === 's4' ? lerp(2500, 2050, eOut(seg(t, tAr, tAr + 1.2))) : 2050; p47(px, GY + 30, 0.8, t, { mood: 'smug', look: -1, walk: id === 's4' && t < tAr + 1.2 ? t * 3 : 0, armUp: id === 'sol1', blink: t > 0.6 }); } }
  bridge(t, !flat);
  if (id === 's2' && t >= tPont) arrow(2150, BR_Y, 1720, '3,50 m', '#2a8a3a');
  if (id === 's2' && t >= tCam) arrow(450, 1300, 1720, '3,52 m', C.red);
  if (id === 'sol3' || id === 'end') { [4160, 4340, 4520].forEach((qx, i) => cast(['rico', 'woman', 'cook'][i], qx, GY + 20, 0.7, t, { mood: mid ? 'smile' : 'neutral', look: 1 })); p47(3990, GY + 30, 0.8, t, { mood: 'smug', look: 1, blink: t > 0.6 }); }
  else [4350, 4550, 4750, 4950].forEach((qx, i) => cast(['rico', 'woman', 'cook', 'old'][i], qx, GY + 20, 0.7, t, { mood: 'neutral', look: -1 }));
  const tBlo = WF('s2', /bloqué/i), ins = id === 'ff' ? 0 : id === 's2' && t >= tBlo ? 0 : id === 'sol2' && t >= tEcr && t < tPas - 0.3 ? 1 : -1;
  if (ins >= 0) { tunnelInsert(t, ins); if (ins === 0 && t >= (id === 'ff' ? 0.9 : tBlo)) pill('COINCÉ !', 540, 1760, P(t, id === 'ff' ? 0.9 : tBlo, 0.25), C.red); if (ins === 1) pill('ÇA PASSE !', 540, 1760, P(t, tEcr + 0.6, 0.25), '#2a8a3a'); }
  resetCam();
  hookCard(t, [['LE CAMION DE GTA 6', 84], ['COINCÉ SOUS LE PONT…', 76], ['SANS AUCUN OUTIL ?', 80, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') { banner('SORTIE : MINUIT', 540, 330, P(t, S('s1') + 0.3)); }
  if (id === 's2' && t >= tPont && ins < 0) polaroid(560, 520, 520, 380, P(t, tPont, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('PONT : 3,50 m', w / 2, 110, 66, OL, { stroke: false }); if (t >= tCam) txt('CAMION : 3,52 m', w / 2, 220, 66, C.red, { stroke: false }); if (t >= tCam + 0.8) txt('= 2 cm DE TROP', w / 2, 320, 54, C.red, { stroke: false }); }, 'LE PROBLÈME', -0.03);
  if (id === 's3' && t >= tRec) paperCard([['RECULER ?', 90], ['IMPOSSIBLE', 100, C.red]], 540, 330, P(t, tRec), { w: 760 });
  if (id === 's3' && t >= tVoit + 0.6) { x.save(); x.translate(540, 700); clock(0, 0, 1.3); x.restore(); pill('23H30', 540, 870, P(t, tVoit + 0.6), C.red); }
  if (id === 's3' && t >= tVoit) { speech('TUUUT !', 280, 1000, P(t, tVoit, 0.2), 60); speech('POUET !', 560, 1080, P(t, tVoit + 0.4, 0.2), 60); }
  if (id === 'c2') countdown(t, B.c2.end - 3, 3, 1000);
  if (id === 's4' && t >= tPh) pill('0 OUTIL · 1 PHRASE', 540, 420, P(t, tPh), C.orange);
  germanCards(t, [['IL LUI A DIT QUOI ?', 90, C.red]]);
  if (id === 'sol1') speech('47 : « DÉGONFLE UN PEU TES PNEUS ! »', 540, 460, P(t, WF('sol1', /Dégonfle/i), 0.3), 60);
  if (id === 'sol2' && ins < 0 && t < tPas - 0.3) polaroid(560, 500, 640, 420, P(t, S('sol2'), 0.3), (w, h) => tyres(w, h, seg(t, tEcr, tEcr + 0.8)), 'LES PNEUS', -0.03);
  if (id === 'sol3' && t < tMin) polaroid(560, 520, 460, 420, P(t, S('sol3') + 0.1, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); rbox(w / 2 - 70, 90, 140, 230, 14, C.red, 7); rbox(w / 2 - 45, 120, 90, 60, 6, '#fff', 4); x.strokeStyle = OL; x.lineWidth = 10; x.beginPath(); x.moveTo(w / 2 + 70, 200); x.quadraticCurveTo(w / 2 + 150, 220, w / 2 + 130, 320); x.stroke(); txt('PNEUS REGONFLÉS ✓', w / 2, h - 50, 44, '#2a8a3a', { stroke: false }); }, 'LA STATION', 0.03);
  if (id === 'sol3' && t >= tMin) { paperCard([['00:00', 120, C.red], ['MINUIT PILE !', 70]], 540, 420, P(t, tMin), { w: 700 }); }
}
