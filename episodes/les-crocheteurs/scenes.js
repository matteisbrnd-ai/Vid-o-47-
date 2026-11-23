// Les crocheteurs — one rich set: the bank's vault hall (a wall of 100 small safes, a big alarm display), the Baron, 47 and the thieves.
// s2 = 5 thieves at training, s3 = a crowd of 100; solution = everyone opens his own safe at the same time (5:00 < 10:00).
window.LOOK = 'gala';
const GY = 1950, COLS = ['#d6332b', '#2f6fd0', '#2f8f4f', '#7a4ab5', '#e2b649'];
function safe(px, py, w, h, open, k) { rbox(px, py, w, h, 6, open ? '#2b2b30' : '#b9c0ca', 5); if (open) { rbox(px + w - 14, py, 16, h, 3, '#8b95a5', 4); ell(px + w / 2, py + h / 2, w * 0.18, h * 0.18, '#f5c542', 3); }
  else { ell(px + w / 2, py + h / 2, h * 0.28, h * 0.28, '#8b95a5', 4); x.strokeStyle = OL; x.lineWidth = 4; const a = k || 0; x.beginPath(); x.moveTo(px + w / 2, py + h / 2); x.lineTo(px + w / 2 + Math.cos(a) * h * 0.22, py + h / 2 + Math.sin(a) * h * 0.22); x.stroke(); } }
function hall(t, openFrac) { x.fillStyle = vg(-600, 1600, '#efe6d2', '#fbf6ea'); x.fillRect(-1400, -1000, 5200, 2700);
  [-900, 2600].forEach(cx => { rbox(cx - 110, 300, 220, 1400, 10, '#e4d6b8', 8); rbox(cx - 150, 250, 300, 70, 8, '#d8c8a6', 7); rbox(cx - 150, 1660, 300, 60, 8, '#d8c8a6', 7); });   // columns
  rbox(140, 560, 2280, 1120, 16, '#7d858f', 10);
  let n = 0; for (let j = 0; j < 10; j++) for (let i = 0; i < 10; i++) { const op = (n++ % 100) < openFrac * 100 && ((i * 7 + j * 3) % 10) / 10 < openFrac + 0.001; safe(170 + i * 222, 590 + j * 107, 205, 95, openFrac >= 1 || op, t * 2 + i + j); }
  rbox(900, 180, 760, 260, 18, '#1b1b1f', 9); txt('ALARME', 1280, 230, 52, '#ff6b5e', { stroke: false });
  x.fillStyle = '#d9cbb0'; x.fillRect(-1400, 1720, 5200, 2000); x.fillStyle = '#c9b99a'; for (let i = -10; i < 40; i++) x.fillRect(i * 180, 1720, 8, 2000); x.fillStyle = 'rgba(214,51,43,.85)'; x.fillRect(-300, 1820, 3100, 160); }
function alarm(s, col) { txt(s, 1280, 345, 150, col || '#ff3b2f', { stroke: false }); }
function thief(px, py, s, t, i, mood) { toon(px, py, s, { t, hat: 'beanie', hatCol: COLS[i % 5], hatCol2: '#2b2b30', body: '#3a3d44', body2: '#2c2f35', num: false, mood: mood || 'neutral', look: -1, blink: true }); }
function watch(px, py, s, k) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-16, -110, 32, 30, 6, '#c9ced6', 5); ell(0, 0, 90, 90, '#f4f4f4', 8); x.strokeStyle = C.red; x.lineWidth = 8; x.beginPath(); x.arc(0, 0, 70, -Math.PI / 2, -Math.PI / 2 + k * 6.283); x.stroke();
  x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(0, 0); x.lineTo(Math.cos(-Math.PI / 2 + k * 6.283) * 60, Math.sin(-Math.PI / 2 + k * 6.283) * 60); x.stroke(); x.restore(); }
function mini(w, h, n, lbl, col) { const cols = Math.min(n, 10), rows = Math.ceil(n / 10), cw = (w - 40) / cols; for (let i = 0; i < n; i++) { const cx = 20 + (i % 10) * cw + cw / 2, cy = 30 + Math.floor(i / 10) * (h * 0.5 / rows);
  ell(cx, cy + 6, cw * 0.3, cw * 0.3, '#f2c79c', 2); x.beginPath(); x.arc(cx, cy, cw * 0.32, Math.PI, 0); x.closePath(); fs(COLS[i % 5], 2); } txt(lbl, w / 2, h * 0.82, 54, col || OL, { stroke: false }); }
function hookPic(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); x.save(); mini(w * 0.42, h * 0.6, 5, '', OL); x.restore(); txt('5 → 5 COFFRES', w * 0.22, h * 0.5, 50, OL, { stroke: false }); txt('5 MIN', w * 0.22, h * 0.82, 70, C.green, { stroke: false });
  x.save(); x.translate(w * 0.52, 0); mini(w * 0.46, h * 0.6, 100, '', OL); x.restore(); txt('100 → 100 COFFRES', w * 0.75, h * 0.5, 46, OL, { stroke: false }); txt('? MIN', w * 0.75, h * 0.82, 70, C.red, { stroke: false });
  x.fillStyle = OL; x.fillRect(w * 0.49, 20, 6, h - 40); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['100 COFFRES', OL, 60], ['ALARME : 10 MIN', C.red, 60], ['APRÈS → PRISON', C.red, 50]].forEach(([s, c, f], i) => txt(s, w / 2, 70 + i * 100, f, c, { stroke: false })); }
function training(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); for (let i = 0; i < 5; i++) { const cx = 60 + i * (w - 120) / 4; ell(cx, 80, 34, 34, '#f2c79c', 4); x.beginPath(); x.arc(cx, 72, 36, Math.PI, 0); x.closePath(); fs(COLS[i], 4);
  txt('↓', cx, 150, 50, OL, { stroke: false }); safe(cx - 45, 190, 90, 70, k > 0.95, 0); } watch(w / 2, h - 90, 0.75, Math.min(k, 1)); txt('5:00', w / 2 + 160, h - 86, 70, C.green, { stroke: false }); }
function oneEach(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('1 VOLEUR = 1 COFFRE = 5 MIN', w / 2, 50, 50, OL, { stroke: false });
  for (let i = 0; i < 5; i++) { const cy = 120 + i * 62; if (k < i / 5) continue; ell(80, cy, 24, 24, '#f2c79c', 3); x.beginPath(); x.arc(80, cy - 6, 26, Math.PI, 0); x.closePath(); fs(COLS[i], 3); txt('→', 170, cy, 50, OL, { stroke: false }); safe(220, cy - 26, 80, 52, true, 0); txt('5 MIN', 420, cy + 2, 46, C.green, { stroke: false }); } }
function draw(t) {
  const id = curId(t), tCasse = WF('s1', /casse/i), tCent = WF('s1', /cent/i), tAl = WF('s1', /alarme/i), tEnt = WF('s2', /entraînement/i), tPile = WF('s2', /pile/i), tJour = WF('s3', /jour/i), tPan = WF('s3', /panique/i),
    tChr = WF('s4', /chrono/i), tSour = WF('s4', /sourit/i), tUN = WF('sol2', /^UN$/i), tMeme = WF('sol3', /même/i), tJam = WF('sol3', /jamais/i);
  const crowd = id === 'ff' || id === 's3' || id === 's4' || id === 'q' || id === 'c1' || id === 'c2' || id === 'sol1' || id === 'sol3' || id === 'end';
  let open = 0; if (id === 's2' && t >= tPile) open = 0.05; if (id === 'sol3' && t >= tMeme) open = seg(t, tMeme, tMeme + 1.2); if (id === 'end') open = 1;
  const K = [[0, 0, 800, 898, 1.4], [B.ff.end - 0.1, 1.1, 1250, 1300, 0.56], [S('s1') + 0.4, 1.0, 300, 1238, 1.2], [tCent, 1.0, 1280, 1050, 0.7], [tAl, 0.8, 1280, 820, 0.9],
    [S('s2'), 1.0, 1700, 1300, 0.8], [S('s3'), 1.0, 1300, 1350, 0.56], [tPan, 0.8, 300, 1238, 1.3], [S('s4'), 1.0, 800, 1258, 1.45], [S('q'), 0.8, 800, 1247, 1.3],
    [S('c1'), 1.0, 1250, 1300, 0.56], [S('sol1'), 0.8, 800, 1247, 1.3], [S('sol2'), 1.0, 1700, 1400, 0.8], [S('sol3'), 1.0, 1250, 1150, 0.6], [tJam, 0.8, 1280, 700, 0.9], [S('end'), 1.0, 1250, 1300, 0.56]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 6 : id === 's3' && t >= tPan && t < tPan + 0.4 ? 8 : 0);
  hall(t, open);
  alarm(id === 'sol3' && t >= tMeme ? (t >= tJam ? '5:00 ✓' : Math.min(5, Math.floor(seg(t, tMeme, tMeme + 1.2) * 5)) + ':00') : id === 'end' ? '5:00 ✓' : '10:00', id === 'sol3' && t >= tJam || id === 'end' ? '#5dff7a' : null);
  if (crowd) { for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) thief(1150 + i * 150 + (r % 2) * 70, 1780 + r * 60, 0.42 + r * 0.06, t, i + r, id === 's3' ? 'worried' : 'neutral'); }
  else if (id === 's2' || id === 'sol2') for (let i = 0; i < 5; i++) thief(1250 + i * 230, GY - 30, 0.62, t, i, t >= tPile || id === 'sol2' ? 'smile' : 'neutral');
  cast('boss', 300, GY, 0.8, t, { mood: id === 's3' && t >= tPan ? 'shock' : id === 's4' || id === 'q' ? 'worried' : id === 'sol3' || id === 'end' ? 'smile' : 'smug', look: 1, sweat: id === 's3' && t >= tPan });
  const hold = id === 's4' || id === 'q' || id === 'ff';
  p47(800, GY, 0.8, t, { mood: id === 'ff' ? 'worried' : id === 's3' ? 'neutral' : 'smug', look: -1, armUp: hold, sweat: id === 'ff', blink: t > 0.6 });
  if (hold) watch(925, GY - 590, 0.7, (t * 0.2) % 1);
  resetCam();
  if (id === 'ff' && t > 0.1 && t < 0.22) { x.fillStyle = 'rgba(255,255,255,.4)'; x.fillRect(0, 0, W, H); }
  hookCard(t, [['5 VOLEURS · 5 COFFRES · 5 MIN', 66], ['100 VOLEURS · 100 COFFRES', 72], ['COMBIEN DE MINUTES ?', 88, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 920, 920, 520, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tCent) banner('LE CASSE DU SIÈCLE', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tAl) polaroid(560, 1000, 600, 340, P(t, tAl, 0.3), rules, 'LES RÈGLES', -0.03);
  if (id === 's2' && t >= tEnt) polaroid(560, 620, 680, 460, P(t, tEnt, 0.3), (w, h) => training(w, h, seg(t, tEnt, tPile)), "L'ENTRAÎNEMENT", 0.03);
  if (id === 's3' && t >= tJour && t < tPan) pill('LE JOUR J : 100 VOLEURS', 540, 340, P(t, tJour), C.red);
  if (id === 's3' && t >= tPan) speech('100 MINUTES ?!', 540, 420, P(t, tPan, 0.2), 80);
  if (id === 's4' && t >= tSour) pill('⏱️ LARGEMENT LE TEMPS', 540, 340, P(t, tSour), C.green);
  germanCards(t, [['IL LEUR FAUT', 80], ['COMBIEN DE MINUTES ?', 92, C.red]]);
  if (id === 'sol1') paperCard([['5 MINUTES !', 130, C.red], ['(PAS 100)', 60]], 540, 420, P(t, S('sol1') + 0.2), { w: 680 });
  if (id === 'sol2') polaroid(560, 640, 620, 420, P(t, S('sol2') + 0.1, 0.3), (w, h) => oneEach(w, h, seg(t, S('sol2') + 0.3, tUN + 0.5)), 'CHACUN SON COFFRE', -0.03);
  if (id === 'sol3' && t >= tJam) stamp('5 MIN < 10 MIN', P(t, tJam, 0.25), 1000, C.green);
}
