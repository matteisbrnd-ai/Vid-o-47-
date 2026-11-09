// Les diamants — Galagade style: ONE warm, busy police office (evidence board + Baron at left → inspector → desk → 47 → Lola at right).
// The camera reads it left → right; the ending (inspector beside Lola with the cuffs) is the hook image = loop. Never show what was in the safe.
window.CTA = 'TAGUE CELUI QUI PARLE TROP'; window.LOOK = 'gala';
const GY = 2000, LOLA = { hairCol: '#5a2a1a', body: '#c0506e', body2: '#9a3c56' }, INSP = { hairCol: '#4a3426', body: '#8a6a4a', body2: '#70553a', pants: '#3a3530' };
const XB = 250, XI = 560, X47 = 1250, XL = 1640, XE = 1880;
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); rbox(-90, -170, 180, 40, 16, '#c9ced6', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore(); }
function chair(px) { rbox(px - 150, GY - 520, 300, 330, 40, '#7a4a2e', 7); rbox(px - 120, GY - 490, 240, 270, 30, '#9a6240', 0); x.fillStyle = OL; [[-130, 0], [110, 0]].forEach(([d]) => x.fillRect(px + d, GY - 200, 20, 200)); }
function poster(px, py, rot, face) { x.save(); x.translate(px, py); x.rotate(rot); rbox(-90, -120, 180, 240, 4, '#f4ecd8', 5); txt('RECHERCHÉ', 0, -88, 34, C.red, { stroke: false }); ell(0, 0, 46, 52, face, 4); rbox(-60, 64, 120, 14, 4, '#b9ad98', 0); rbox(-60, 88, 90, 12, 4, '#b9ad98', 0); x.restore(); }
function office(t) {
  x.fillStyle = '#f3dfba'; x.fillRect(-2000, -2000, 6200, 6000);                       // warm cream wall
  bricks(-200, 1450, 2600, 560, '#e8c79a', 'rgba(140,100,60,.3)', 100, 50); x.fillStyle = '#b07a50'; x.fillRect(-200, 1430, 2600, 26);     // lower brick wainscot
  x.fillStyle = '#c98f5c'; x.fillRect(-2000, GY, 6200, 3000); x.fillStyle = 'rgba(0,0,0,.08)'; for (let i = 0; i < 40; i++) x.fillRect(-200 + i * 70, GY, 6, 3000);   // wood floor
  // evidence board (left)
  rbox(40, 760, 470, 420, 10, '#c8955a', 8); [[110, 830, '#9cc7e8'], [300, 820, '#f4a7c0'], [420, 940, '#c9e8b0'], [160, 1010, '#f5d76e'], [330, 1060, '#bfe3ff']].forEach(([a, b, c]) => { rbox(a - 50, b - 45, 100, 110, 3, '#fbf8f1', 4); rbox(a - 38, b - 33, 76, 66, 2, c, 0); ell(a, b - 52, 9, 9, C.red, 3); });
  x.strokeStyle = C.red; x.lineWidth = 4; x.beginPath(); x.moveTo(110, 790); x.lineTo(300, 780); x.lineTo(420, 900); x.lineTo(160, 965); x.lineTo(330, 1015); x.stroke();
  // wanted posters + clock above the desk
  poster(700, 900, -0.05, '#f2c79c'); poster(900, 880, 0.06, '#dda67a'); ell(800, 600, 80, 80, '#fbf8f1', 8); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(800, 600); x.lineTo(800, 545); x.moveTo(800, 600); x.lineTo(842, 610); x.stroke();
  // big window with the city (behind the suspects)
  rbox(1110, 640, 760, 560, 10, '#fbf8f1', 9); x.fillStyle = vg(660, 1180, '#7cc8ff', '#dff2ff'); x.fillRect(1130, 660, 720, 520);
  [[1150, 950, 120, '#b8c7d9'], [1280, 860, 110, '#a9bacf'], [1400, 990, 130, '#c6d3e2'], [1540, 820, 120, '#b0c0d4'], [1670, 920, 150, '#c2cfde']].forEach(([a, b, w, c]) => { x.fillStyle = c; x.fillRect(a, b, w, 1180 - b); x.fillStyle = 'rgba(255,255,255,.6)'; for (let r = b + 30; r < 1160; r += 60) for (let k = a + 18; k < a + w - 20; k += 40) x.fillRect(k, r, 18, 28); });
  x.fillStyle = '#fbf8f1'; x.fillRect(1483, 640, 14, 560); x.fillRect(1110, 910, 760, 14); rbox(1090, 1190, 800, 34, 6, '#e8dcc4', 6);
  ell(1290, 1170, 40, 26, '#5fa24e', 5); rbox(1265, 1170, 50, 30, 6, '#c96a3a', 5);   // small plant on the sill
  // ceiling lamps
  [[700, 260], [1500, 260]].forEach(([lx, ly]) => { x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(lx, -400); x.lineTo(lx, ly); x.stroke(); poly([[lx - 110, ly + 110], [lx + 110, ly + 110], [lx + 50, ly], [lx - 50, ly]], '#2f8f4f', 7); ell(lx, ly + 112, 50, 16, '#fff3a0', 4); });
  // filing cabinet + water cooler (right)
  rbox(2020, 1300, 260, 700, 8, '#9aa7b8', 8); [1340, 1560, 1780].forEach(fy => { rbox(2045, fy, 210, 180, 6, '#b3bfcd', 6); rbox(2120, fy + 70, 60, 20, 8, '#5a5f6b', 4); });
  rbox(2060, 1080, 180, 60, 10, '#e8dcc4', 6); rbox(2090, 1010, 120, 80, 4, '#f4ecd8', 5);   // files on top
  x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(-200, GY, 2600, 30); }
function desk(t) { // desk between the inspector and the suspects
  rbox(680, 1560, 380, 60, 10, '#8a5a3a', 8); rbox(700, 1620, 340, 380, 8, '#7a4a2e', 8); [1700, 1820].forEach(dy => { rbox(730, dy, 280, 90, 6, '#8a5a3a', 5); ell(870, dy + 45, 14, 10, '#e2b649', 3); });
  rbox(730, 1380, 190, 140, 10, '#2b2f38', 7); rbox(745, 1395, 160, 105, 4, '#9cc7e8', 0); rbox(810, 1520, 30, 40, 4, '#2b2f38', 5);  // monitor
  x.strokeStyle = OL; x.lineWidth = 9; x.beginPath(); x.moveTo(1010, 1560); x.lineTo(990, 1430); x.lineTo(1040, 1390); x.stroke(); poly([[1010, 1420], [1080, 1380], [1060, 1340], [1000, 1370]], '#e0a020', 6);   // desk lamp
  [[935, 1545, '#fbf8f1'], [945, 1530, '#f4ecd8'], [930, 1515, '#e8dcc4']].forEach(([a, b, c]) => rbox(a, b, 120, 16, 3, c, 4));                                                          // files
  rbox(1000, 1500, 46, 60, 8, '#fbf8f1', 5); x.strokeStyle = 'rgba(120,90,60,.5)'; x.lineWidth = 4; x.beginPath(); x.moveTo(1012, 1490 - (t * 20 % 20)); x.quadraticCurveTo(1030, 1470, 1015, 1450); x.stroke();   // coffee
  can(700, 1510, 0.28); }
function cuffs(px, py) { x.lineWidth = 16; x.strokeStyle = OL; [[-36, 0], [36, 0]].forEach(([d]) => { x.beginPath(); x.ellipse(px + d, py, 34, 40, 0, 0, 7); x.stroke(); });
  x.lineWidth = 9; x.strokeStyle = metal(py - 40, py + 40); [[-36, 0], [36, 0]].forEach(([d]) => { x.beginPath(); x.ellipse(px + d, py, 34, 40, 0, 0, 7); x.stroke(); }); }
function safe(w, h) { x.fillStyle = '#e8dcc4'; x.fillRect(0, 0, w, h); const cx = w / 2 - 30, cy = h / 2 + 10;
  rbox(cx - 150, cy - 150, 300, 300, 14, '#6b7482', 8); rbox(cx - 115, cy - 115, 230, 230, 6, '#1d2027', 6); x.fillStyle = 'rgba(255,255,255,.06)'; x.fillRect(cx - 115, cy - 10, 230, 8);   // empty inside
  poly([[cx + 150, cy - 150], [cx + 240, cy - 120], [cx + 240, cy + 175], [cx + 150, cy + 150]], '#8b95a5', 7); ell(cx + 200, cy + 10, 26, 30, '#c9ced6', 5); x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(cx + 200, cy + 10); x.lineTo(cx + 200, cy - 14); x.stroke();
  txt('?', cx, cy, 120, '#fbf8f1', { stroke: false }); }
function console6(w, h) { x.fillStyle = '#ffd9a8'; x.fillRect(0, 0, w, h); rbox(30, 40, w - 60, h - 150, 12, '#111', 7); const g = x.createLinearGradient(0, 55, 0, h - 125); g.addColorStop(0, '#ff9a4c'); g.addColorStop(1, '#c04cc8'); x.fillStyle = g; x.fillRect(45, 55, w - 90, h - 180);
  [[70, 50, 140], [140, 40, 180], [w - 160, 50, 160], [w - 100, 40, 120]].forEach(([bx, bw, bh]) => { x.fillStyle = '#4a2a5a'; x.fillRect(bx, h - 125 - bh, bw, bh); });
  txt('GTA 6', w / 2, h / 2 - 50, 90, '#fff', { stroke: true }); rbox(w / 2 - 90, h - 90, 180, 70, 30, '#2b2f38', 6); ell(w / 2 - 45, h - 55, 12, 12, '#e04a5a', 3); ell(w / 2 + 45, h - 55, 12, 12, '#2fd0c0', 3); }
function draw(t) {
  const id = curId(t), end = id === 'ff' || id === 'q';
  const tSusp = WF('s1', /suspects/i), tDiam = WF('s4', /diamants/i), tSil = WF('s5', /silence/i), tMen = WF('s5', /menottes/i), tPour = WF('s5', /^pour$/i);
  const K = [[0, 0, 1700, 1600, 1.6], [0.1, B.ff.end, 1700, 1590, 1.72], [B.ff.end - 0.1, 1.2, 1050, 1450, 0.6], [tSusp, 1.4, 1350, 1520, 0.85],
    [S('s1b') - 0.1, 1.3, 420, 1560, 1.3], [S('s2') - 0.1, 1.3, 760, 1560, 1.35], [S('s3') - 0.1, 1.4, 1450, 1580, 1.4], [S('s4') - 0.1, 1.2, 1640, 1580, 1.5],
    [tDiam - 0.1, 0.5, 1640, 1560, 1.75], [S('s5'), 1.6, 1700, 1560, 1.05], [tMen, 1.2, 1740, 1590, 1.45], [S('q'), 1.2, 1700, 1600, 1.6]];
  camPath(t, K, t > tDiam && t < tDiam + 0.2 ? 6 : 0);
  office(t); desk(t);
  // inspector: home by his desk, walks to Lola during s5; ff/q = final position (loop)
  const walkK = id === 's5' ? seg(t, tSil + 0.3, tMen) : 0, ix = end ? XE : id === 's5' ? lerp(XI, XE, eIO(walkK)) : XI, walking = id === 's5' && walkK > 0 && walkK < 1;
  const iMood = end || (id === 's5' && t >= tMen) ? 'angry' : id === 's4' && t >= tDiam ? 'smug' : id === 's5' ? 'smug' : 'neutral';
  cast('boss', XB, GY + 40, 0.8, t, { mood: 'angry', look: 1, armUp: id === 's1b' });
  if (!walking && ix === XI) cast('inspector', XI, GY + 40, 0.85, t, { ...INSP, mood: iMood, look: 1, blink: t > 0.6 });
  chair(X47); chair(XL);
  const m47 = id === 's3' ? 'smile' : (id === 's5' && t >= tPour) || id === 'q' ? 'smug' : id === 's4' && t >= tDiam ? 'shock' : 'neutral';
  p47(X47, GY + 40, 0.82, t, { mood: m47, look: id === 's4' || id === 's5' || end ? 1 : -1, blink: t > 0.6 });
  const mL = id === 'ff' || id === 'q' ? 'shock' : id === 's4' ? 'angry' : id === 's5' ? (t >= tPour ? 'shock' : 'worried') : id === 's3' ? 'neutral' : 'worried';
  cast('woman', XL, GY + 40, 0.85, t, { ...LOLA, mood: mL, look: id === 's5' || end ? 1 : -1, armUp: id === 's4', sweat: id === 's5' && t >= tSil || end, blink: t > 0.6 });
  if (ix !== XI || walking) { cast('inspector', ix, GY + 40, 0.85, t, { ...INSP, mood: iMood, look: walking ? 1 : -1, walk: walking ? t * 1.6 : 0, blink: t > 0.6 });
    if (end || t >= tMen) { x.save(); x.translate(ix - 150, GY - 240 + Math.sin(t * 5) * 6); x.scale(1.5, 1.5); cuffs(0, 0); x.restore(); } }
  resetCam();
  hookCard(t, [["ELLE N'A RIEN TOUCHÉ…", 90], ["ET ÇA L'A TRAHIE", 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('COMMISSARIAT · 9 H', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1b') onoma('UN COUPABLE !', 600, 420, P(t, WF('s1b', /furieux/i), 0.2), 120);
  if (id === 's2') polaroid(770, 640, 460, 440, P(t, WF('s2', /dirai/i), 0.3), safe, 'LE COFFRE', 0.04);
  if (id === 's3') polaroid(770, 620, 460, 420, P(t, S('s3') + 0.4, 0.3), console6, 'SON ALIBI', -0.04);
  if (id === 's4') paperCard([["J'AI JAMAIS TOUCHÉ", 72], ['À SES DIAMANTS !', 84, C.red]], 540, 420, P(t, S('s4') + 0.5, 0.25), { w: 760, rot: 0.03 });
  if (id === 's5' && t >= tSil && t < tMen) onoma('…', 540, 480, P(t, tSil, 0.2), 170);
  if (id === 's5' && t >= tMen) onoma('CLIC !', 560, 460, P(t, tMen, 0.15), 160);
  endCards(t, [['COMMENT IL A SU ?', 86, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
