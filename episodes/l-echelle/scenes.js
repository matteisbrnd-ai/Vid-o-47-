// L'échelle — one bright harbour set (side view): stone quay with tide marks (left), the Baron's white boat with a hanging ladder, sea, seagulls.
// Solution: water AND boat rise together (quay marks show the tide), the ladder keeps 2 rungs under water.
window.LOOK = 'gala';
const WY0 = 1800, LX = 1500, RUNG = 66, R0 = 1302;               // water line, ladder x, rung spacing (30 cm), rung i (0 = top) at R0 + i*RUNG + rise
function seaWorld(t, rise, wy) {
  x.fillStyle = vg(-1200, 1700, '#6fc4ff', '#e8f7ff'); x.fillRect(-1500, -1500, 5600, 5000); cloud(400, 300, 1.4); cloud(2300, 200, 1.2); cloud(3200, 520, 1.0);
  x.fillStyle = '#ffe48a'; x.beginPath(); x.arc(2900, 200, 120, 0, 7); x.fill();
  [[2700, 1500, 300, '#9fb6cf'], [3050, 1380, 220, '#b8c8da'], [3300, 1460, 260, '#a9bdd2']].forEach(([hx, hy, hw, c]) => rbox(hx, hy, hw, 1900 - hy, 8, c, 5));   // town far away
  for (let g = 0; g < 4; g++) { const gx = (g * 610 + t * 90) % 3600 - 300, gy = 420 + g * 90 + Math.sin(t * 3 + g) * 20; x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(gx - 40, gy); x.quadraticCurveTo(gx - 20, gy - 24, gx, gy); x.quadraticCurveTo(gx + 20, gy - 24, gx + 40, gy); x.stroke(); }
  // quay (fixed) with tide marks
  rbox(-1500, 1300, 1700, 2200, 6, '#c9b48a', 9); x.fillStyle = '#b39d72'; for (let r = 0; r < 14; r++) for (let k = 0; k < 8; k++) rbox(-1480 + k * 220 + (r % 2) * 110, 1320 + r * 90, 200, 76, 8, (r + k) % 3 ? '#cdb98f' : '#bea983', 3);
  rbox(-1500, 1260, 1720, 60, 10, '#e0d2b0', 7); [0, 1, 2, 3, 4, 5, 6].forEach(i => { const my = WY0 - i * 110; x.fillStyle = OL; x.fillRect(150, my - 4, 50, 8); txt((i * 50) + ' cm', 110, my, 34, OL, { stroke: false, align: 'right' }); });
  rbox(60, 1150, 40, 110, 8, '#3a3d44', 5); ell(80, 1140, 30, 20, '#3a3d44', 5);   // bollard
  // water behind boat
  const g = x.createLinearGradient(0, wy, 0, wy + 1200); g.addColorStop(0, '#3fa0e0'); g.addColorStop(1, '#1d5f9e'); x.fillStyle = g; x.fillRect(200, wy, 4000, 2000);
}
function boat(t, rise) { x.save(); x.translate(0, -rise + Math.sin(t * 1.6) * 4);
  x.beginPath(); x.moveTo(600, 1200); x.lineTo(2700, 1200); x.quadraticCurveTo(2650, 1900, 2350, 2100); x.lineTo(900, 2100); x.quadraticCurveTo(650, 1800, 600, 1200); x.closePath(); fs('#f7f7f2', 10);
  x.fillStyle = '#d6332b'; x.fillRect(640, 1240, 2030, 40); txt('LE BARON', 2150, 1420, 110, '#1d5f9e', { stroke: false });
  rbox(1700, 860, 760, 340, 18, '#f7f7f2', 9); [0, 1, 2].forEach(k => rbox(1760 + k * 230, 920, 190, 120, 14, '#9fd6ff', 6)); rbox(2380, 640, 30, 230, 6, '#3a3d44', 5); poly([[2410, 640], [2560, 680], [2410, 720]], '#1b1b1f', 5);
  x.strokeStyle = '#7a5a3a'; x.lineWidth = 7; x.beginPath(); x.moveTo(640, 1160); x.lineTo(1650, 1160); x.stroke(); for (let k = 0; k < 11; k++) { x.beginPath(); x.moveTo(660 + k * 100, 1160); x.lineTo(660 + k * 100, 1200); x.stroke(); }   // rail
  // ladder: two rails + 10 rungs
  [LX - 90, LX + 90].forEach(rx => rbox(rx - 12, 1200, 24, R0 + 9 * RUNG - 1200 + 40, 8, '#c9ced6', 6));
  for (let i = 0; i < 10; i++) rbox(LX - 100, R0 + i * RUNG - 9, 200, 18, 8, '#e2b649', 5);
  x.restore(); }
function waterFront(t, wy) { x.save(); x.globalAlpha = 0.72; const g = x.createLinearGradient(0, wy, 0, wy + 900); g.addColorStop(0, '#4fb0ee'); g.addColorStop(1, '#1d5f9e'); x.fillStyle = g; x.fillRect(200, wy, 4000, 2000); x.restore();
  x.strokeStyle = 'rgba(255,255,255,.8)'; x.lineWidth = 7; x.beginPath(); for (let px = 200; px < 4200; px += 20) { const yy = wy + Math.sin(px / 60 + t * 3) * 7; px === 200 ? x.moveTo(px, yy) : x.lineTo(px, yy); } x.stroke(); }
function rulesPol(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['10 BARREAUX', OL, 54], ['1 TOUS LES 30 CM', OL, 46], ["2 SOUS L'EAU", '#1d5f9e', 54], ['MARÉE : +50 CM / H', C.red, 50], ['DANS 3 H → ?', C.red, 58]].forEach(([s, c, f], i) => txt(s, w / 2, 62 + i * 84, f, c, { stroke: false })); }
function hookPic(w, h) { x.fillStyle = '#e8f7ff'; x.fillRect(0, 0, w, h); const lx = w * 0.38, wy = h - 120, r0 = 40, rs = (wy + 60 - r0) / 9.4;
  x.fillStyle = '#f7f7f2'; x.fillRect(0, 0, lx - 110, h); x.strokeStyle = OL; x.lineWidth = 6; x.strokeRect(-10, -10, lx - 100, h + 20);
  [lx - 70, lx + 70].forEach(rx => rbox(rx - 9, 0, 18, h, 6, '#c9ced6', 4)); for (let i = 0; i < 10; i++) rbox(lx - 78, r0 + i * rs - 7, 156, 14, 6, '#e2b649', 4);
  x.save(); x.globalAlpha = 0.6; x.fillStyle = '#3fa0e0'; x.fillRect(0, wy, w, h); x.restore(); x.strokeStyle = '#fff'; x.lineWidth = 5; x.beginPath(); x.moveTo(0, wy); x.lineTo(w, wy); x.stroke();
  [8, 9].forEach(i => { x.strokeStyle = C.red; x.lineWidth = 7; x.beginPath(); x.ellipse(lx, r0 + i * rs, 100, 24, 0, 0, 7); x.stroke(); });
  x.strokeStyle = C.red; x.lineWidth = 18; x.beginPath(); x.moveTo(w * 0.78, wy - 10); x.lineTo(w * 0.78, 110); x.stroke(); poly([[w * 0.78 - 45, 120], [w * 0.78, 50], [w * 0.78 + 45, 120]], C.red, 4); txt('+1,50 M', w * 0.78, 30 + h / 2, 56, C.red, { sw: 8, sc: '#fff' }); }
function draw(t) {
  const id = curId(t), tEch = WF('s1', /échelle/i), tDeux = WF('s2', /deux/i), tMar = WF('s3', /marée/i), tOuv = WF('s4', /ouvre/i), tCom = WF('s4', /combien/i), tPl = WF('s4', /plonges/i),
    tFl = WF('sol2', /flotte/i), tMon = WF('sol2', /monte/i), tSept = WF('sol3', /sept/i), tSec = WF('sol3', /sec/i);
  // tide: sol2 → water and boat rise 330 px (1.5 m) together
  const rise = id === 'sol2' ? 330 * eIO(seg(t, tMon - 0.3, tMon + 1.6)) : id === 'sol3' || id === 'end' ? 330 : 0, wy = WY0 - rise;
  const deckY = 1200 - rise;
  const K = [[0, 0, LX, 1095, 1.75], [B.ff.end - 0.1, 1.1, 1400, 1300, 0.62], [S('s1') + 1.2, 1.2, 1500, 1350, 0.75], [tEch, 1.0, LX, 1650, 1.25], [tDeux, 0.8, LX, 1760, 1.8],
    [S('s3'), 1.0, 400, 1600, 1.0], [S('s4'), 1.0, 2050, 950, 1.5], [tCom, 1.0, LX, 1550, 1.0], [S('q'), 0.8, LX, 1600, 1.1], [S('c1'), 1.0, 1400, 1300, 0.62],
    [S('sol1'), 0.8, LX, 1700, 1.3], [S('sol2'), 1.0, 1100, 1450, 0.7], [S('sol3'), 0.8, LX, 1700 - 330, 1.25], [tSec, 0.8, LX, 950 - 330, 1.9], [S('end'), 1.0, 1400, 1300 - 330, 0.62]];
  camPath(t, K, id === 'ff' && t < 0.5 ? 6 : 0);
  seaWorld(t, rise, wy); boat(t, rise);
  // characters on deck
  x.save(); x.translate(0, Math.sin(t * 1.6) * 4);
  cast('boss', 2050, deckY, 0.62, t, { mood: id === 'sol3' || id === 'end' ? 'shock' : 'smug', look: -1, armUp: id === 's4' });
  if (id === 's4' && t >= tOuv) { x.save(); x.translate(2120, deckY - 560); rbox(-28, -60, 56, 120, 14, '#2fd0c0', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 3, 34, '#fff', { stroke: true, sw: 5 }); x.restore(); x.restore(); }
  cast('guard', 1850, deckY, 0.58, t, { mood: 'neutral', look: -1 });
  const scared = id === 'ff' || id === 's1' || id === 's4' || id === 'q';
  p47(LX, id === 'ff' ? 1790 + Math.sin(t * 9) * 6 : deckY, 0.62, t, { mood: scared ? 'shock' : id.startsWith('sol') || id === 'end' ? 'smug' : 'worried', look: id === 's4' ? 1 : 0, sweat: scared, blink: t > 0.6, noArms: false, armsUp: id === 'ff' });
  x.restore();
  waterFront(t, wy);
  // highlight rungs under water
  if ((id === 's2' && t >= tDeux) || id.startsWith('sol') || id === 'end') { const k = id === 's2' ? P(t, tDeux) : 1; x.save(); x.translate(0, -rise); [8, 9].forEach(i => { x.globalAlpha = k; x.strokeStyle = C.red; x.lineWidth = 10; x.beginPath(); x.ellipse(LX, R0 + i * RUNG, 130, 34, 0, 0, 7); x.stroke(); }); x.restore(); }
  // tide arrow on the quay (s3)
  if (id === 's3' && t >= tMar) { const k = P(t, tMar, 0.6); x.save(); x.globalAlpha = k; x.strokeStyle = C.red; x.lineWidth = 22; x.beginPath(); x.moveTo(420, WY0 - 20); x.lineTo(420, WY0 - 20 - 260 * k); x.stroke(); poly([[370, WY0 - 260 * k - 10], [420, WY0 - 300 * k - 30], [470, WY0 - 260 * k - 10]], C.red, 5); x.restore(); }
  resetCam();
  if (id === 'ff' && t < 0.3) { x.fillStyle = 'rgba(230,40,40,.18)'; x.fillRect(0, 0, W, H); }
  hookCard(t, [["2 BARREAUX SOUS L'EAU", 74], ['LA MER MONTE DE 1,50 M', 70], ['COMBIEN APRÈS ?', 92, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 900, 780, 440, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE PORT · BATEAU DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tDeux) pill("2 BARREAUX SOUS L'EAU", 540, 360, P(t, tDeux), '#1d5f9e');
  if (id === 's3' && t >= tMar) pill('🌊 +50 CM PAR HEURE', 540, 360, P(t, tMar), C.red);
  if (id === 's4' && t >= tCom) polaroid(560, 700, 600, 480, P(t, tCom, 0.3), rulesPol, 'LES RÈGLES', -0.03);
  if (id === 's4' && t >= tPl) stamp('PLOUF ?', P(t, tPl, 0.25), 1150);
  germanCards(t, [['COMBIEN DE BARREAUX', 74], ["SOUS L'EAU ?", 104, C.red]]);
  if (id === 'sol1') paperCard([['TOUJOURS', 80], ['2 BARREAUX !', 110, C.red]], 540, 420, P(t, WF('sol1', /deux/i)), { w: 820 });
  if (id === 'sol2' && t >= tFl) pill('⛵ LE BATEAU FLOTTE', 540, 330, P(t, tFl), '#1d5f9e');
  if (id === 'sol2' && t >= tMon) { pill('MER +1,50 M = BATEAU +1,50 M', 540, 450, P(t, tMon), '#2a8a3a'); }
  if (id === 'sol3' && t >= tSept) pill('7 BARREAUX ? FAUX ✗', 540, 340, P(t, tSept), C.red);
  if (id === 'sol3' && t >= tSec) pill("2 SOUS L'EAU ✅", 540, 470, P(t, tSec), '#2a8a3a');
}
