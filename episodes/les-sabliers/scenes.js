// Les sabliers — Galagade style: the Baron's vault (same set as Les sacs), a big door with its button, two hourglasses on a table.
window.CTA = 'TAGUE LE PLUS MALIN DE TES POTES'; window.LOOK = 'gala';
const GY = 1950;
function vault(t) { x.fillStyle = vg(-1500, 1700, '#e9d9b0', '#f6ead0'); x.fillRect(-1200, -1500, 4560, 3300);
  for (let i = -4; i < 14; i++) for (let j = 0; j < 6; j++) { rbox(i * 240 + 10, 760 + j * 160, 220, 140, 6, '#dcc896', 3); ell(i * 240 + 30, 780 + j * 160, 6, 6, '#b89c60', 0); }   // steel panels
  x.beginPath(); x.arc(330, 1350, 330, 0, 7); fs('#c9ced6', 10); x.beginPath(); x.arc(330, 1350, 240, 0, 7); fs('#aeb5bf', 7); [0, 1, 2, 3, 4, 5].forEach(k => { const a = k / 6 * 6.283 + t * 0.2; x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(330, 1350); x.lineTo(330 + Math.cos(a) * 180, 1350 + Math.sin(a) * 180); x.stroke(); }); ell(330, 1350, 50, 50, '#e0a92e', 7);  // vault door
  rbox(1250, 820, 820, 520, 10, '#5a3a22', 8); [0, 1, 2].forEach(r => { rbox(1270, 880 + r * 160, 780, 24, 4, '#7a5232', 5); for (let k = 0; k < 9; k++) rbox(1290 + k * 85, 880 + r * 160 - 70, 70, 70, 6, '#f5c542', 5); });   // shelves of gold bars
  x.fillStyle = '#9a3a3a'; x.fillRect(-1200, 1720, 4560, 3000); x.fillStyle = '#b8484a'; x.fillRect(-1200, 1720, 4560, 24); x.fillStyle = 'rgba(255,255,255,.06)'; for (let i = -10; i < 30; i++) x.fillRect(i * 120, 1744, 4, 3000); }
function hourglass(px, py, s, mins, k, flip) { x.save(); x.translate(px, py); x.scale(s, s); x.rotate(flip || 0);
  rbox(-110, -220, 220, 30, 8, '#7a5232', 6); rbox(-110, 190, 220, 30, 8, '#7a5232', 6); [-90, 90].forEach(dx => rbox(dx - 8, -190, 16, 380, 4, '#7a5232', 4));
  x.beginPath(); x.moveTo(-80, -190); x.lineTo(80, -190); x.quadraticCurveTo(80, -40, 8, 0); x.quadraticCurveTo(80, 40, 80, 190); x.lineTo(-80, 190); x.quadraticCurveTo(-80, 40, -8, 0); x.quadraticCurveTo(-80, -40, -80, -190); x.closePath(); fs('rgba(220,240,255,.55)', 6);
  const top = 1 - k; x.fillStyle = '#e9b44c'; x.beginPath(); x.moveTo(-70 * top, -10 - 150 * top); x.lineTo(70 * top, -10 - 150 * top); x.lineTo(0, -8); x.closePath(); x.fill();
  x.beginPath(); x.moveTo(-75, 185); x.lineTo(75, 185); x.lineTo(70 * k, 185 - 150 * k); x.lineTo(-70 * k, 185 - 150 * k); x.closePath(); x.fill(); if (k < 1) { x.fillRect(-3, -8, 6, 190); }
  x.restore(); rrc(px, py + 290 * s, 120 * s, 70 * s, 14, '#fbf3e4', 4); txt(mins + ' MIN', px, py + 293 * s, 40 * s, OL, { stroke: false }); }
function door(t, red) { rbox(1300, 1050, 520, 700, 20, '#8a8f99', 9); x.beginPath(); x.arc(1560, 1400, 240, 0, 7); fs('#c9ced6', 9); [0, 1, 2, 3, 4, 5].forEach(k => { const a = k / 6 * 6.283; x.strokeStyle = OL; x.lineWidth = 14; x.beginPath(); x.moveTo(1560, 1400); x.lineTo(1560 + Math.cos(a) * 150, 1400 + Math.sin(a) * 150); x.stroke(); });
  ell(1560, 1400, 46, 46, '#e0a92e', 7); rbox(1880, 1300, 120, 200, 16, '#2b2b30', 7); ell(1940, 1400, 40, 40, red ? '#ff3b30' : '#2fbf5a', 7); if (red) { x.save(); x.globalAlpha = 0.25 + 0.25 * Math.sin(t * 20); x.fillStyle = '#ff3b30'; x.fillRect(-1200, -1500, 4560, 3600); x.restore(); } }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['BOUTON À 9:00 PILE', OL, 46], ['TROP TÔT / TROP TARD', C.red, 40], ['= ALARME 🚨', C.red, 48], ['SABLIERS : 7 MIN + 4 MIN', '#2457a8', 40]].forEach(([s, c, f], i) => txt(s, w / 2, 80 + i * 96, f, c, { stroke: false })); }
function draw(t) {
  const id = curId(t), tBou = WF('s1', /bouton/i), tAl = WF('s2', /alarme/i), tSab = WF('s3', /sabliers/i);
  const K = [[0, 0, 980, 1500, 1.45], [B.ff.end - 0.1, 1.2, 1080, 1350, 0.6], [S('s1') + 1.2, 1.4, 900, 1500, 1.2], [tBou, 1.0, 1800, 1400, 1.5], [S('s2'), 1.0, 1650, 1350, 1.0],
    [S('s3'), 1.2, 960, 1550, 1.4], [S('s4'), 1.2, 960, 1500, 1.6], [S('q'), 1.0, 980, 1500, 1.45]];
  camPath(t, K, id === 's2' && t > tAl && t < tAl + 1 ? 10 : 0);
  vault(t); door(t, id === 's2' && t > tAl);
  rbox(600, 1620, 560, 40, 10, '#7a5232', 7); [660, 1100].forEach(lx => rbox(lx, 1660, 30, 300, 6, '#5a3a22', 6));                 // table
  const run = id === 'ff' || id === 'q' ? 0.5 : id === 's4' ? 0.3 : 0;
  hourglass(760, 1440, 0.62, 7, run + (id === 'ff' ? t * 0.03 : 0)); hourglass(1000, 1470, 0.5, 4, run + (id === 'ff' ? t * 0.05 : 0));
  cast('boss', 260, GY - 20, 0.8, t, { mood: id === 's2' ? 'smug' : 'smug', look: 1, blink: t > 0.6 });
  p47(1200, GY + 20, 0.82, t, { mood: id === 's2' ? 'shock' : id === 's4' || id === 'ff' || id === 'q' ? 'worried' : 'neutral', look: -1, sweat: id === 's2' || id === 'ff', blink: t > 0.6 });
  resetCam();
  hookCard(t, [['DEUX SABLIERS…', 84], ['EXACTEMENT 9 MIN !', 92, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LA SALLE DES COFFRES', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tBou) pill('⏱ 9:00 PILE', 540, 1150, P(t, tBou), C.red);
  if (id === 's2' && t >= tAl) onoma('ALARME !', 540, 520, P(t, tAl, 0.2), 150);
  if (id === 's3' && t >= tSab) polaroid(560, 700, 560, 480, P(t, tSab, 0.3), rules, 'LES RÈGLES', 0.03);
  endCards(t, [['COMMENT IL COMPTE 9 MIN ?', 72, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
