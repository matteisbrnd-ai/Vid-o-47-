// L'ours — one cosy set: inside 47's wooden cabin (stove, table with the Tasty Crousty box, door on the left, big window on the right).
// Before the solution the window shows only a pale neutral sky and a grey « ? » shadow; the snow + white bear appear in the solution only.
window.LOOK = 'gala';
const GY = 1950, WIN = [2150, 1050, 620, 520], DOOR = 380;
function bear(px, py, s, col, t) { x.save(); x.translate(px, py); x.scale(s, s); const c2 = col === '#fbfbf7' ? '#e6e6dc' : col;
  ell(-120, -150, 60, 60, col, 8); ell(120, -150, 60, 60, col, 8); ell(-120, -150, 30, 30, '#f2b8b0', 0); ell(120, -150, 30, 30, '#f2b8b0', 0);
  ell(0, 0, 200, 180, col, 9); ell(0, 70, 95, 70, c2, 6); ell(0, 30, 34, 24, OL, 0); ell(-70, -40, 18, 22, OL, 0); ell(70, -40, 18, 22, OL, 0);
  x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(0, 54); x.lineTo(0, 90); x.moveTo(-30, 100); x.quadraticCurveTo(0, 120, 30, 100); x.stroke(); x.restore(); }
function tasty(px, py, s, open) { x.save(); x.translate(px, py); x.scale(s, s); poly([[-110, 0], [110, 0], [130, -170], [-130, -170]], '#d6332b', 7);
  txt('TASTY', 0, -112, 50, '#fff', { stroke: false }); txt('CROUSTY', 0, -62, 44, '#ffd23f', { stroke: false });
  if (open) { [[-60, -190], [-10, -205], [45, -192]].forEach(([a, b]) => ell(a, b, 40, 28, '#e0a050', 6)); } x.restore(); }
function cabin(t, snow) { // log walls
  for (let r = 0; r < 26; r++) { rbox(-1400, -800 + r * 110, 4800, 104, 50, r % 2 ? '#c98a4f' : '#b97a42', 6); }
  x.fillStyle = '#8a5a32'; x.fillRect(-1400, 1720, 4800, 2000); for (let k = 0; k < 30; k++) { x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(-1400 + k * 170, 1720, 6, 2000); }
  // door (left)
  rbox(DOOR - 260, 820, 520, 900, 10, '#6b4428', 10); [0, 1, 2].forEach(k => rbox(DOOR - 230, 860 + k * 280, 460, 240, 6, '#7d5232', 5)); ell(DOOR + 190, 1300, 22, 22, '#e2b649', 5);
  // window (right)
  const [wx, wy, ww, wh] = WIN; rbox(wx - ww / 2 - 40, wy - wh / 2 - 40, ww + 80, wh + 80, 12, '#5a3a22', 9);
  x.save(); x.beginPath(); x.rect(wx - ww / 2, wy - wh / 2, ww, wh); x.clip();
  if (snow) { x.fillStyle = vg(wy - wh / 2, wy + wh / 2, '#bfe3ff', '#eef8ff'); x.fillRect(wx - ww / 2, wy - wh / 2, ww, wh); x.fillStyle = '#fbfbf7'; x.beginPath(); x.ellipse(wx, wy + wh / 2, ww, 160, 0, 0, 7); x.fill();
    x.fillStyle = '#fff'; for (let i = 0; i < 40; i++) { const sx = wx - ww / 2 + ((i * 97) % ww), sy = wy - wh / 2 + ((i * 53 + t * 120) % wh); x.beginPath(); x.arc(sx, sy, 7, 0, 7); x.fill(); } }
  else { x.fillStyle = vg(wy - wh / 2, wy + wh / 2, '#d9e4ee', '#f4f6f8'); x.fillRect(wx - ww / 2, wy - wh / 2, ww, wh); }
  x.restore(); x.strokeStyle = '#5a3a22'; x.lineWidth = 22; x.beginPath(); x.moveTo(wx, wy - wh / 2); x.lineTo(wx, wy + wh / 2); x.moveTo(wx - ww / 2, wy); x.lineTo(wx + ww / 2, wy); x.stroke();
  rbox(wx - ww / 2 - 70, wy + wh / 2 + 30, ww + 140, 40, 8, '#6b4428', 7);
  // stove + pipe
  rbox(1250, 1350, 300, 370, 16, '#3a3d44', 9); rbox(1290, 1500, 220, 140, 10, '#ff8a3a', 6); rbox(1370, 400, 60, 950, 6, '#4a4d54', 7);
  // shelf with stuff + sign
  rbox(-400, 900, 500, 30, 4, '#6b4428', 6); rbox(-360, 800, 80, 100, 8, '#2fa38e', 5); rbox(-240, 760, 120, 140, 8, '#e2b649', 5);
  // table
  rbox(1650, 1500, 600, 40, 10, '#6b4428', 8); [1690, 2170].forEach(lx => rbox(lx, 1540, 36, 200, 6, '#5a3a22', 6)); }
function topView(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const cx = w / 2, cy = h / 2 + 10, s = 105;
  rrc(cx, cy, s * 2, s * 2, 6, '#c98a4f', 7); txt('47', cx, cy + 4, 60, C.orange, { sw: 6 });
  [[0, -1], [1, 0], [0, 1], [-1, 0]].forEach(([dx, dy], i) => { if (k < (i + 1) / 4) return; const ax = cx + dx * s, ay = cy + dy * s; rrc(ax, ay, dx ? 20 : 90, dx ? 90 : 20, 4, '#8fc8e8', 4);
    const ex = cx + dx * (s + 70), ey = cy + dy * (s + 60); x.strokeStyle = C.red; x.lineWidth = 8; x.beginPath(); x.moveTo(ax + dx * 14, ay + dy * 14); x.lineTo(ex, ey); x.stroke(); txt('SUD', ex + dx * 55, ey + dy * 28, 42, C.red, { stroke: false }); }); }
function globe(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const cx = w / 2, cy = h / 2 + 70, r = 210;
  ell(cx, cy, r, r, '#6fb6e8', 7); x.fillStyle = '#7cc46a'; [[-60, 40, 80, 50], [70, -20, 60, 80], [-20, 120, 70, 40]].forEach(([a, b, c, d]) => { x.beginPath(); x.ellipse(cx + a, cy + b, c, d, 0.3, 0, 7); x.fill(); });
  ell(cx, cy - r + 20, 90, 30, '#fbfbf7', 5); rrc(cx, cy - r - 10, 40, 40, 4, '#c98a4f', 5); txt('PÔLE NORD', cx, 40, 50, OL, { stroke: false });
  [-1.1, -0.45, 0.45, 1.1].forEach((a, i) => { if (k < (i + 1) / 4) return; const ang = -Math.PI / 2 + a; x.strokeStyle = C.red; x.lineWidth = 8; x.beginPath(); x.arc(cx, cy, r + 30, -Math.PI / 2 + Math.sign(a) * 0.12, ang, a < 0); x.stroke();
    ell(cx + Math.cos(ang) * (r + 30), cy + Math.sin(ang) * (r + 30), 12, 12, C.red, 0); });
  txt('↓ SUD ↓', cx, cy + 20, 50, C.red, { stroke: false }); }
function draw(t) {
  const id = curId(t), tOuv = WF('s3', /ouvre/i), tOurs = WF('s3', /ours/i), tTour = WF('s3', /tourner/i), tFen = WF('s2', /fenêtre/i), tSud = WF('s2', /sud/i), tSait = WF('s4', /sait/i),
    tBl = WF('sol1', /blanc/i), tNord = WF('sol2', /Nord/i), tPol = WF('sol3', /polaire/i), tAd = WF('sol3', /Adieu/i);
  const solId = id.startsWith('sol') || id === 'end', snow = solId && (id !== 'sol1' || t >= tBl);
  const K = [[0, 0, 900, 1250, 1.45], [B.ff.end - 0.1, 1.1, 1250, 1200, 0.62], [S('s1') + 1.0, 1.2, 1300, 1250, 0.8], [S('s2'), 1.0, WIN[0], WIN[1] + 100, 1.2],
    [S('s3'), 1.0, 2100, 1350, 1.3], [tOurs, 1.0, WIN[0], WIN[1] + 150, 1.15], [S('s4'), 1.0, 2300, 1300, 1.5], [S('q'), 0.8, 2300, 1300, 1.4], [S('c1'), 1.0, 1250, 1200, 0.62],
    [S('sol1'), 0.8, WIN[0], WIN[1] + 150, 1.15], [S('sol2'), 1.0, 1250, 1200, 0.75], [S('sol3'), 0.8, WIN[0], WIN[1] + 100, 1.3], [tAd, 0.6, 2100, 1350, 1.3], [S('end'), 1.0, 1250, 1200, 0.62]];
  camPath(t, K, id === 'ff' && t < 0.5 ? 7 : 0);
  cabin(t, snow);
  // bear: grey « ? » shadow before the solution, white bear at the window in the solution
  const [wx, wy] = WIN;
  if (!solId && (id === 's3' && t >= tTour || id === 's4' || id === 'q')) { const bx = wx - 500 + ((t - tTour) * 260) % 1000; x.save(); x.beginPath(); x.rect(wx - 310, wy - 260, 620, 520); x.clip(); x.globalAlpha = 0.35; bear(bx, wy + 120, 0.9, '#7d8590', t); x.restore();
    if (id !== 'c1') txt('?', wx, wy, 220, '#fff', { sw: 18 }); }
  if (snow && id !== 'sol2') { x.save(); x.beginPath(); x.rect(wx - 310, wy - 260, 620, 520); x.clip(); bear(wx, wy + 130 + (1 - P(t, id === 'sol1' ? tBl : S(id), 0.5)) * 300, 0.95, '#fbfbf7', t); x.restore(); }
  // door scratching in ff
  if (id === 'ff') { const s = Math.sin(t * 40) * 6; x.save(); x.translate(s, 0); rbox(DOOR - 260, 820, 520, 900, 10, 'rgba(0,0,0,0)', 0); x.restore(); for (let k = 0; k < 3; k++) { x.strokeStyle = '#3a2416'; x.lineWidth = 9; x.beginPath(); x.moveTo(DOOR - 80 + k * 50, 1050); x.lineTo(DOOR - 120 + k * 50, 1250 * 1 + 0 * k); x.stroke(); } }
  // 47
  const px = id === 'ff' ? 900 : 2380, scared = id === 'ff' || id === 's3' && t >= tOurs || id === 'q';
  p47(px, GY - 30, 0.82, t, { mood: scared ? 'shock' : id === 's4' || solId ? 'smug' : 'neutral', look: id === 'ff' ? -1 : id === 's3' && t >= tOurs ? 1 : 0, sweat: scared, blink: t > 0.6, armUp: id === 'sol3' && t >= tAd });
  tasty(1800, 1500, 0.8, id !== 's1' && id !== 's2' && !(id === 's3' && t < tOuv) && !(id === 'sol3' && t >= tAd) && id !== 'end');
  if (id === 'ff') tasty(px + 170, GY - 230, 0.55, true);
  resetCam();
  if (id === 'ff' && t > 0.12 && t < 0.25) { x.fillStyle = 'rgba(255,255,255,.4)'; x.fillRect(0, 0, W, H); }
  if (id === 'ff') onoma('SCRITCH !', 330, 1250, P(t, 0, 0.15) || 1, 120);
  hookCard(t, [['4 MURS, TOUS AU SUD…', 78], ['ET UN OURS GRATTE', 82], ['À LA PORTE 🐻', 92, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LA CACHETTE DE 47', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tFen) polaroid(560, 720, 720, 600, P(t, tFen, 0.3), (w, h) => topView(w, h, t >= tSud ? 1 : seg(t, tFen, tSud)), 'VUE DE HAUT', -0.03);
  if (id === 's3' && t >= tOuv && t < tOurs) pill('🍗 TASTY CROUSTY', 540, 340, P(t, tOuv), C.red);
  if (id === 's4' && t >= tSait) pill("IL NE L'A PAS VU…", 540, 340, P(t, tSait), C.brown);
  germanCards(t, [['DE QUELLE COULEUR', 80], ["EST L'OURS ?", 104, C.red]]);
  if (id === 'sol1') paperCard([['BLANC !', 120, C.red]], 540, 400, P(t, tBl), { w: 640 });
  if (id === 'sol2' && t >= tNord) polaroid(560, 760, 660, 640, P(t, tNord, 0.3), (w, h) => globe(w, h, seg(t, tNord + 0.3, tNord + 1.6)), 'TOUT AUTOUR = LE SUD', -0.03);
  if (id === 'sol3' && t >= tPol) pill('🐻‍❄️ OURS POLAIRE = BLANC', 540, 340, P(t, tPol), '#2a8a3a');
}
