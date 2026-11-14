// Le contrebandier — one bright border-post set (road, barrier, customs booth), slow zooms; hidden clue = the scooter colour changes every day.
window.LOOK = 'gala';
const GY = 1950, COLS = ['#d9473a', '#2f7fd0', '#3aa35a', '#f2b62f'];
function scooter(px, py, t, col, o = {}) { x.save(); x.translate(px, py);
  if (o.rider) p47(-60, -110, 0.8, t, { look: 1, blink: t > 0.6, ...o.ro });
  const sp = t * (o.moving ? 12 : 0);
  [[-200, -75], [210, -75]].forEach(([wx, wy]) => { ell(wx, wy, 78, 78, '#26262b', 7); ell(wx, wy, 36, 36, '#c9ced6', 6); x.strokeStyle = OL; x.lineWidth = 6; for (let k = 0; k < 3; k++) { const a = sp + k * 2.09; x.beginPath(); x.moveTo(wx, wy); x.lineTo(wx + Math.cos(a) * 34, wy + Math.sin(a) * 34); x.stroke(); } });
  rbox(-330, -310, 300, 210, 100, col, 8); rbox(-300, -350, 250, 60, 30, '#3a2a22', 7);
  rbox(-70, -165, 230, 55, 22, col, 7); poly([[110, -120], [215, -120], [250, -390], [170, -440], [120, -400]], col, 8);
  ell(215, -150, 92, 42, col, 7); x.strokeStyle = OL; x.lineWidth = 14; x.beginPath(); x.moveTo(190, -430); x.lineTo(120, -480); x.stroke(); ell(110, -485, 26, 18, '#26262b', 5);
  ell(245, -395, 30, 26, '#fff7c0', 6); rbox(-360, -260, 40, 50, 10, '#ff8a3a', 5);
  if (o.bag) { rbox(-420, -540, 300, 210, 50, '#c9a06a', 7); rbox(-310, -570, 80, 40, 10, '#a88050', 5); txt('SABLE', -270, -430, 50, OL, { stroke: false }); }
  if (o.price) { rrc(40, -620, 260, 90, 16, '#fff', 6); txt(o.price, 40, -616, 62, '#2a8a3a', { stroke: false }); }
  x.restore(); }
function sandBag(px, py, s, open) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-150, -210, 300, 210, 50, '#c9a06a', 7); if (open) { ell(0, -210, 120, 34, '#e8cf8a', 6); [[-60, -240], [20, -250], [70, -232]].forEach(([a, b]) => ell(a, b, 30, 18, '#e8cf8a', 0)); } else rbox(-40, -240, 80, 40, 10, '#a88050', 5); txt('SABLE', 0, -100, 56, OL, { stroke: false }); x.restore(); }
function world(t) { x.fillStyle = vg(-1500, 1500, '#7cc6ff', '#e6f5ff'); x.fillRect(-1200, -1500, 4600, 3300); cloud(200, 500, 1.6); cloud(2300, 380, 1.3); cloud(1300, 260, 1.1);
  x.fillStyle = '#9ccf6a'; x.fillRect(-1200, 1500, 4600, 400); [-500, 0, 2500, 3000].forEach((px, i) => pine(px, 1560, 520 + (i % 2) * 120));
  x.fillStyle = '#6d7078'; x.fillRect(-1200, 1720, 4600, 3000); x.fillStyle = '#fff'; for (let i = -10; i < 30; i++) x.fillRect(i * 260, 2140, 140, 18);
  rbox(1700, 980, 560, 760, 14, '#f4f2ec', 9); poly([[1660, 990], [1980, 840], [2300, 990]], '#c9302a', 9); rbox(1780, 1080, 400, 260, 8, '#9fd6ff', 7);    // customs booth
  rrc(1980, 920, 380, 90, 12, '#2f5fb3', 7); txt('DOUANE', 1980, 924, 70, '#fff', { stroke: false });
  rrc(1500, 1600, 70, 300, 10, '#c9ced6', 7);                                                                                                      // barrier post
  x.save(); x.translate(1500, 1480); x.rotate(-0.08 + (window.BAR || 0) * 1.3); for (let k = 0; k < 8; k++) rbox(-1000 + k * 125, -24, 125, 48, 0, k % 2 ? '#fff' : '#d9473a', 5); x.restore();
  rrc(380, 1230, 200, 80, 10, '#fff', 6); txt('FRONTIÈRE', 380, 1234, 46, OL, { stroke: false }); x.fillStyle = OL; x.fillRect(375, 1270, 10, 450); }
function xray(w, h) { x.fillStyle = '#10204a'; x.fillRect(0, 0, w, h); x.strokeStyle = '#7fd6ff'; x.lineWidth = 6; x.beginPath(); x.roundRect(w / 2 - 130, h / 2 - 120, 260, 200, 40); x.stroke();
  x.fillStyle = 'rgba(127,214,255,.25)'; for (let i = 0; i < 60; i++) x.fillRect(w / 2 - 110 + (i * 37) % 220, h / 2 - 90 + (i * 53) % 150, 6, 6); txt('RIEN', w / 2, h - 60, 70, '#7cff8a', { stroke: false }); }
function days(w, h, n) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); ['LUN', 'MAR', 'MER', 'JEU'].forEach((d, i) => { if (i >= n) return; const cx = w * (0.14 + i * 0.24), cy = h * 0.6; x.save(); x.translate(cx, cy); x.scale(0.28, 0.28); scooter(0, 200, 0, COLS[i], { bag: true }); x.restore(); txt(d, cx, h * 0.2, 44, OL, { stroke: false }); }); }
function magnifier(t, p, label) { if (p <= 0) return; resetCam(); x.save(); x.translate(560, 600); const k = eBack(clamp(p)); x.scale(k, k);
  x.beginPath(); x.arc(0, 0, 300, 0, 7); x.save(); x.clip(); x.fillStyle = '#e8cf8a'; x.fillRect(-300, -300, 600, 600);
  for (let i = 0; i < 260; i++) { const a = i * 2.39, r = 290 * Math.sqrt((i * 0.618) % 1); ell(Math.cos(a) * r, Math.sin(a) * r, 9 + (i % 3) * 3, 7 + (i % 2) * 3, ['#d9b56a', '#f2dca0', '#c9a05a'][i % 3], 0); } x.restore();
  x.lineWidth = 34; x.strokeStyle = OL; x.beginPath(); x.arc(0, 0, 300, 0, 7); x.stroke(); x.lineWidth = 20; x.strokeStyle = '#c9ced6'; x.stroke();
  x.save(); x.rotate(0.8); rbox(300, -40, 260, 80, 30, '#5a3a22', 8); x.restore(); if (label) { rrc(0, 220, 520, 100, 16, '#fff', 6); txt(label, 0, 224, 66, C.red, { stroke: false }); } x.restore(); }
function bubble(p) { if (p <= 0) return; resetCam(); x.save(); x.translate(640, 560); x.scale(p, p); [[-250, 330, 22], [-210, 270, 34]].forEach(([a, b, r]) => ell(a, b, r, r, '#fff', 6));
  ell(0, 0, 330, 220, '#fff', 8); p47(-90, 170, 0.32, 0, { mood: 'smug', look: 1, blink: false }); sandBag(150, 120, 0.55, false); txt('💰', 170, -110, 110, '#fff', { stroke: false }); txt('??', 40, -140, 90, C.red, { stroke: false }); x.restore(); }
function pile(t, p) { resetCam(); x.fillStyle = vg(0, 1920, '#ffb46a', '#ffe2b0'); x.fillRect(0, 0, W, H); x.fillStyle = '#6d7078'; x.fillRect(0, 1500, W, 420);
  let n = 0; for (let r = 0; r < 7; r++) for (let k = 0; k < 9 - r; k++) { if (n++ > p * 45) break; x.save(); x.translate(80 + k * 120 + r * 60, 1560 - r * 110); x.rotate(((k * 7 + r * 3) % 5 - 2) * 0.15); x.scale(0.3, 0.3); scooter(0, 0, 0, COLS[(k + r) % 4]); x.restore(); }
  paperCard([['7 300', 150, C.red], ['SCOOTERS', 80]], 540, 420, P(t, S('sol4')), { w: 760 }); }
function checklist(t) { resetCam(); const t0 = S('sol3'), tJ = WF('sol3', /jamais/i); paperCard([['20 ANS DE FOUILLES', 66], ['SABLE  ✓ 7 300 FOIS', 72, '#2a8a3a'], ['SCOOTER  ✗ JAMAIS', 72, t >= tJ ? C.red : 'rgba(0,0,0,0)']], 540, 470, P(t, t0), { w: 900 }); }
function draw(t) {
  const id = curId(t), tFou = WF('s2', /fouille/i), tLen = WF('s3', /lendemain/i), tAns = WF('s3', /ans/i), tRiche = WF('s4', /riche/i), tScoot = WF('sol2', /scooter/i);
  if (id === 'sol4') { pile(t, seg(t, S('sol4'), B.sol4.end - 0.3)); germanCards(t, []); return; }
  const day = id === 's3' ? (t >= tLen ? 1 + Math.min(2, Math.floor((t - tLen) / 0.7)) : 0) : id === 's4' || id === 'q' ? 3 : id.startsWith('sol') || id === 'end' ? 2 : 0, col = COLS[day];
  const leave = id === 's3', kL = (t - S('s3')) % 1.4 / 1.4;
  const sx = id === 's1' ? lerp(-500, 950, eOut(seg(t, S('s1'), B.s1.end - 0.4))) : leave ? (t < tLen ? lerp(950, 2900, Math.pow(seg(t, S("s3"), tLen), 2)) : lerp(-400, 2900, kL)) : 950;
  window.BAR = leave ? 1 : 0;
  const K = [[0, 0, 1200, 1450, 0.95], [S('s1'), 0, 950, 1550, 1.35], [S('s2'), 0.6, 1200, 1450, 1.15], [S('s3'), 0.8, 1300, 1350, 0.8], [S('s4'), 0.8, 1450, 1500, 1.4], [S('q'), 0.8, 1450, 1450, 1.6],
    [S('c1'), 1.0, 1200, 1350, 0.65], [S('sol1'), 0.8, 1200, 1450, 1.0], [tScoot, 0.5, 900, 1650, 1.45], [S('sol3'), 0.8, 1200, 1400, 0.85], [S('end'), 1.0, 1200, 1350, 0.65]];
  if (id === 's1') { world(t); } // camera set below
  if (id === 's1') cam(sx + 50, 1580, 1.35); else camPath(t, K);
  world(t);
  const bagOnBike = !(id === 's2' || id === 'sol1');
  if (!bagOnBike) sandBag(1250, GY + 40, 0.9, true);
  if (id === 'sol2' && t >= tScoot) { const g = x.createRadialGradient(950, GY - 250, 50, 950, GY - 250, 700); g.addColorStop(0, 'rgba(255,240,150,.9)'); g.addColorStop(1, 'rgba(255,240,150,0)'); x.fillStyle = g; x.fillRect(250, GY - 950, 1400, 1400); }
  scooter(sx, GY + 40, t, col, { rider: true, bag: bagOnBike, moving: id === 's1' || leave, ro: { mood: ['s2', 's4', 'q', 'ff', 'end'].includes(id) || id.startsWith('sol') ? 'smug' : 'smile' } });
  cast('guard', 1480, GY + 20, 0.82, t, { mood: id === 's4' || id === 'q' || id === 'ff' ? 'angry' : id === 'sol2' || id === 'sol3' || id === 'end' ? 'shock' : 'neutral', look: -1, armUp: id === 's2' || id === 'ff' });
  resetCam();
  hookCard(t, [['FOUILLÉ PENDANT 20 ANS…', 76], ['JAMAIS RIEN TROUVÉ', 88, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('CHAQUE MATIN · 8H00', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tFou) magnifier(t, P(t, tFou + 0.3, 0.4), 'QUE DU SABLE');
  if (id === 's3' && t >= tLen) paperCard([[t >= tAns ? '365 JOURS × 20 ANS' : 'JOUR ' + (1 + Math.floor((t - tLen) * 3)), 92, t >= tAns ? C.red : OL]], 540, 380, P(t, tLen), { w: 860 });
  if (id === 's4' && t >= tRiche) bubble(eBack(seg(t, tRiche, tRiche + 0.4)));
  germanCards(t, [["MAIS QU'EST-CE QU'IL", 76], ['FAIT PASSER ?', 100, C.red]]);
  if (id === 'sol1') magnifier(t, P(t, S('sol1') + 0.2, 0.4), '= DIVERSION');
  if (id === 'sol2' && t >= tScoot) stamp('LE SCOOTER !', P(t, tScoot, 0.25), 300);
  if (id === 'sol3') checklist(t);
}
