// Les étages — one tall bright set made for vertical video: a cut-away building, 6 floors stacked (1er at the bottom),
// zig-zag stairs on the left, the elevator shaft on the right, the open 6th-floor window with a zipline. 47 climbs, the inspector rides up.
window.LOOK = 'gala';
const Y = k => 2600 - (k - 1) * 400, SC = 0.4, SX = [220, 820];
const fx = f => { const k = Math.min(5, Math.floor(f)), r = f - k; return k % 2 ? lerp(SX[0], SX[1], r) : lerp(SX[1], SX[0], r); };   // floor k odd: flight goes left → right
const fy = f => { const k = Math.min(5, Math.floor(f)), r = f - k; return lerp(Y(k), Y(k + 1), r); };
const ORD = ['', '1ER', '2E', '3E', '4E', '5E', '6E'];
function building(t) { x.fillStyle = vg(-1200, 2600, '#7cc8ff', '#e6f6ff'); x.fillRect(-1600, -1600, 5600, 4600); cloud(-300, 300, 1.3); cloud(2600, 100, 1.1); cloud(2400, 1300, 1);
  rbox(2350, 900, 900, 1900, 6, '#e7c3a0', 8); for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++) rbox(2450 + c * 400, 1000 + r * 420, 240, 260, 8, '#9fd3f0', 6);   // building across the street
  rbox(-40, Y(6) - 470, 2140, 70, 10, '#9a3a3a', 9);                                                                                                               // roof
  for (let k = 1; k <= 6; k++) { const y = Y(k); rbox(0, y - 400, 2060, 400, 0, k % 2 ? '#f6ead0' : '#f1e1c2', 0);
    txt(ORD[k], 1080, y - 250, 120, k === 6 ? C.red : 'rgba(58,42,30,.55)', { stroke: false }); rbox(1180, y - 300, 120, 230, 8, '#a8703f', 6); ell(1280, y - 180, 8, 8, '#e2b649', 3);
    rbox(1920, y - 330, 120, 220, 8, k === 6 ? '#bfe3ff' : '#9fd3f0', 7); x.fillStyle = '#7a5a3a'; x.fillRect(-20, y - 20, 2100, 40); }
  x.strokeStyle = OL; x.lineWidth = 10; x.strokeRect(0, Y(6) - 400, 2060, 2400);
  // stairs: one flight per floor
  for (let k = 1; k <= 5; k++) { const a = k % 2 ? SX[0] - 100 : SX[1] + 100, b = k % 2 ? SX[1] + 100 : SX[0] - 100, y0 = Y(k) - 20, y1 = Y(k + 1) - 20;
    for (let s = 0; s < 10; s++) { const xa = lerp(a, b, s / 10), ya = lerp(y0, y1, s / 10); x.fillStyle = '#b07a45'; x.fillRect(Math.min(xa, lerp(a, b, (s + 1) / 10)), ya - 40, Math.abs(b - a) / 10 + 2, 40); }
    x.strokeStyle = '#6b4428'; x.lineWidth = 8; x.beginPath(); x.moveTo(a, y0 - 120); x.lineTo(b, y1 - 120); x.stroke(); }
  // elevator shaft
  rbox(1420, Y(6) - 390, 440, 2380, 0, '#c9ced6', 7); x.strokeStyle = '#8b95a5'; x.lineWidth = 6; x.beginPath(); x.moveTo(1640, Y(6) - 390); x.lineTo(1640, Y(1)); x.stroke();
  // zipline from the 6th-floor window
  x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(2040, Y(6) - 300); x.lineTo(2600, 900); x.stroke(); ell(2040, Y(6) - 300, 14, 14, '#e2b649', 4);
  x.fillStyle = '#5c5f66'; x.fillRect(-1600, Y(1) + 20, 5600, 2000); }
function cabin(f) { const y = fy(f); rbox(1440, y - 360, 400, 340, 8, '#e2b649', 7); rbox(1460, y - 340, 360, 300, 6, '#fff7dc', 5); }
function stair(w, h, n, lbl, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const fh = (h - 80) / n;
  for (let i = 0; i <= n; i++) { const y = h - 40 - i * fh; x.fillStyle = '#7a5a3a'; x.fillRect(40, y, w - 80, 6); txt(ORD[i + 1], 80, y - 26, 40, OL, { stroke: false }); }
  for (let i = 0; i < n; i++) { if (k < (i + 1) / n - 0.001 && k < 1) { if (k < i / n) continue; } const y0 = h - 40 - i * fh, y1 = y0 - fh, a = i % 2 ? w - 150 : 150, b = i % 2 ? 150 : w - 150;
    x.strokeStyle = C.red; x.lineWidth = 10; x.beginPath(); x.moveTo(a, y0 - 6); x.lineTo(b, y1 + 6); x.stroke(); txt('5 S', (a + b) / 2 + (i % 2 ? -50 : 50), (y0 + y1) / 2 - 10, 44, C.red, { stroke: false }); }
  }
function hookPic(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const fh = (h - 60) / 6, bx = w * 0.28, bw = w * 0.3;
  for (let k = 1; k <= 6; k++) { const y = h - 30 - (k - 1) * fh; rbox(bx, y - fh, bw, fh, 0, k % 2 ? '#f6ead0' : '#f1e1c2', 4); txt(ORD[k], bx + bw / 2, y - fh / 2 + 4, 52, k === 1 || k === 3 || k === 6 ? C.red : OL, { stroke: false }); }
  x.strokeStyle = C.green; x.lineWidth = 9; x.beginPath(); x.moveTo(bx - 30, h - 30 - fh / 2); x.lineTo(bx - 30, h - 30 - 2 * fh - fh / 2); x.stroke(); txt('10 S', bx - 120, h - 30 - fh * 1.5, 64, C.green, { stroke: false });
  x.strokeStyle = C.red; x.beginPath(); x.moveTo(bx + bw + 30, h - 30 - fh / 2); x.lineTo(bx + bw + 30, h - 30 - 5 * fh - fh / 2); x.stroke(); txt('? S', bx + bw + 130, h - 30 - fh * 3, 80, C.red, { stroke: false }); }
function draw(t) {
  const id = curId(t), tCoin = WF('s1', /coince/i), tFen = WF('s1', /fenêtre/i), tMonte = WF('s2', /monte/i), tSec2 = WF('s2', /secondes/i), tAsc = WF('s3', /ascenseur/i), tVingt = WF('s3', /vingt/i),
    tLarge = WF('s4', /Large/i), tPas = WF('sol1', /Pas/i), tDeux = WF('sol2', /deux/i), tCinq = WF('sol3', /cinq/i), tAtt = WF('sol3', /attendait/i);
  // 47's position (floor as a float) and the elevator
  let f = 1; if (id === 's2') f = 1 + 2 * seg(t, tMonte, tSec2); if (['s3', 's4', 'q', 'c1', 'c2'].includes(id)) f = 3; if (id === 'sol1') f = 3 + 3 * seg(t, S('sol1') + 0.3, B.sol1.end); if (['sol2', 'sol3', 'end'].includes(id)) f = 6;
  if (id === 'ff') f = 1;
  let e = 1; if (id === 's3') e = 1 + 5 * seg(t, tAsc + 0.3, B.s3.end + 2); if (['s4', 'q', 'c1', 'c2'].includes(id)) e = lerp(3.2, 4.6, seg(t, S('s4'), S('sol1'))); if (id.startsWith('sol') || id === 'end') e = 6;
  const px = fx(Math.min(f, 5.999)), py = fy(Math.min(f, 5.999)) - 20, inspIn = id === 's3' && t >= tAsc + 0.3 || ['s4', 'q', 'c1', 'c2'].includes(id), inspOut = id.startsWith('sol') || id === 'end';
  const K = [[0, 0, 330, 2060, 2.4], [B.ff.end - 0.1, 1.2, 1000, 1700, 0.45], [S('s1') + 0.3, 1.0, 470, 2155, 1.5], [tFen, 1.2, 1700, 900, 0.8], [S('s2'), 1.2, 520, 2150, 0.85],
    [tMonte + 1.2, 2.0, 520, 1850, 0.85], [S('s3'), 1.0, 1300, 1800, 0.55], [S('s4'), 1.0, 320, 1460, 2.0], [S('q'), 0.8, 320, 1470, 1.8],
    [S('c1'), 1.0, 1000, 1700, 0.45], [S('sol1'), 1.0, 900, 1150, 0.62], [S('sol2'), 1.0, 1000, 1500, 0.5], [S('sol3'), 1.0, 1000, 1500, 0.5], [tAtt, 0.8, 1300, 300, 1.05], [S('end'), 1.0, 1000, 1700, 0.45]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 6 : 0);
  building(t);
  cabin(e);
  if (inspIn) cast('inspector', 1640, fy(e) - 20, SC, t, { mood: 'smug', look: -1 });
  if (!inspIn && !inspOut) cast('inspector', id === 's1' ? 700 : 1000, Y(1) - 20, SC, t, { mood: id === 's1' ? 'smug' : 'angry', look: -1, armUp: id === 's1' && t >= tCoin });
  if (inspOut) cast('inspector', 1500, Y(6) - 20, SC, t, { mood: 'smug', look: -1, armUp: id === 'sol3' && t >= tAtt || id === 'end' });
  const climbing = id === 's2' && t > tMonte && t < tSec2 || id === 'sol1';
  p47(px, py, SC, t, { mood: id === 'ff' || id === 's1' || id === 'sol1' || id === 'sol3' || id === 'end' ? 'shock' : id === 's4' || id === 'q' ? 'smug' : 'worried', look: id === 's1' ? 1 : climbing ? (Math.floor(f) % 2 ? 1 : -1) : 1,
    walk: climbing ? t : 0, sweat: id === 'ff' || climbing, blink: t > 0.6 });
  resetCam();
  if (id === 'ff' && t > 0.1 && t < 0.22) { x.fillStyle = 'rgba(255,255,255,.4)'; x.fillRect(0, 0, W, H); }
  hookCard(t, [['DU 1ER AU 3E ÉTAGE : 10 S', 78], ['JUSQU\'AU 6E : COMBIEN ?', 90, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 880, 760, 640, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tFen) banner('COINCÉ AU 1ER', 540, 330, P(t, S('s1') + 0.3), C.red);
  if (id === 's1' && t >= tFen) pill('🪟 SORTIE : 6E ÉTAGE', 540, 340, P(t, tFen), C.green);
  if (id === 's2' && t >= tMonte) pill('⏱️ ' + Math.min(10, Math.floor(seg(t, tMonte, tSec2) * 10)) + ' S', 540, 340, P(t, tMonte), C.brown);
  if (id === 's3' && t >= tVingt) pill('🛗 INSPECTEUR : 22 S', 540, 340, P(t, tVingt), C.red);
  if (id === 's4' && t >= tLarge) speech('20 S, LARGE !', 540, 460, P(t, tLarge, 0.2), 80);
  germanCards(t, [['IL LUI FAUT', 80], ['COMBIEN DE SECONDES ?', 88, C.red]]);
  if (id === 'sol1') paperCard([['25 SECONDES !', 120, C.red], ['(PAS 20)', 60]], 540, 420, P(t, S('sol1') + 0.2), { w: 720 });
  if (id === 'sol2') polaroid(560, 700, 640, 560, P(t, S('sol2') + 0.1, 0.3), (w, h) => stair(w, h, 2, '1ER → 3E = 2 ESCALIERS', seg(t, tDeux, tDeux + 1)), '1ER → 3E : 2 ESCALIERS × 5 S', -0.03);
  if (id === 'sol3' && t < tAtt) polaroid(560, 700, 640, 640, P(t, S('sol3') + 0.1, 0.3), (w, h) => stair(w, h, 5, '1ER → 6E = 5 ESCALIERS', seg(t, tCinq, tCinq + 1.5)), '1ER → 6E : 5 ESCALIERS × 5 S', 0.03);
  if (id === 'sol3' && t >= tAtt) stamp('25 S > 22 S : PRIS !', P(t, tAtt, 0.25), 460);
}
