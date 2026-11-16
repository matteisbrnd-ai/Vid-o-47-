// Les étiquettes — one warm set: the Baron's living room (TV with GTA 6 on the left, the Baron gaming, the table with 3 labelled sacks, 47 sneaking in on the right).
// Labels are all wrong: sack A « OR » = argent, sack B « ARGENT » = mélange, sack C « MÉLANGE » = or.
window.LOOK = 'gala';
const GY = 1950, TY = 1560, SX = [1650, 1950, 2250], LAB = ['OR', 'ARGENT', 'MÉLANGE'], TRUE = ['ARGENT', 'MÉLANGE', 'OR'];
function coin(px, py, r, gold = true) { ell(px, py, r, r * 0.85, gold ? '#f5c542' : '#d9dde3', 4); ell(px, py, r * 0.6, r * 0.5, gold ? '#e0a92e' : '#b7bdc6', 0); }
function sack(px, py, label, glow, k = 1) { x.save(); x.translate(px, py);
  if (glow) { x.fillStyle = glow; x.beginPath(); x.ellipse(0, -90, 170, 160, 0, 0, 7); x.fill(); }
  x.beginPath(); x.moveTo(-95, 0); x.quadraticCurveTo(-120, -150, -55, -190); x.lineTo(55, -190); x.quadraticCurveTo(120, -150, 95, 0); x.closePath(); fs('#c9a06a', 7);
  rbox(-62, -215, 124, 38, 12, '#a88050', 6); x.strokeStyle = '#7a5232'; x.lineWidth = 6; x.beginPath(); x.moveTo(-40, -196); x.quadraticCurveTo(0, -176, 40, -196); x.stroke();
  if (label) { x.save(); x.rotate(-0.05); x.globalAlpha = k; font(46); const w = x.measureText(label).width + 40; rrc(0, -85, w, 64, 8, '#fbf3e4', 5); txt(label, 0, -81, 46, OL, { stroke: false }); x.restore(); }
  x.restore(); }
function salon(t) { x.fillStyle = vg(-1200, 1700, '#f4dcb8', '#fbecd2'); x.fillRect(-1200, -1500, 4800, 3300);
  bricks(-1200, -200, 4800, 900, '#e8c9a0', 'rgba(150,100,60,.25)');
  [[1300, 300], [2650, 300]].forEach(([fx, fy]) => { rbox(fx - 200, fy, 400, 300, 10, '#5a3a22', 9); rbox(fx - 175, fy + 25, 350, 250, 6, '#8fc8e8', 5); x.fillStyle = '#ffd770'; x.beginPath(); x.arc(fx + 60, fy + 120, 50, 0, 7); x.fill(); });
  rbox(-1200, 1250, 4800, 30, 4, '#c9a06a', 5);   // dado rail
  // TV + console
  rbox(-200, 640, 820, 500, 16, '#1b1b1f', 10); x.fillStyle = vg(660, 1120, '#ff7ab8', '#ffb347'); x.fillRect(-170, 670, 760, 440);
  x.fillStyle = '#2b1d40'; [[40, 900, 80, 200], [160, 840, 60, 260], [280, 920, 90, 180], [420, 860, 70, 240]].forEach(([a, b, c, d]) => x.fillRect(a, b, c, d));
  txt('GTA 6', 210, 760, 130, '#fff', { sw: 12 }); rbox(80, 1140, 260, 60, 8, '#3a3d44', 6); rbox(-260, 1200, 940, 340, 12, '#7a5232', 8);
  // carpet & floor
  x.fillStyle = '#a8784a'; x.fillRect(-1200, TY + 90, 4800, 3000); ell(1300, 2050, 1400, 220, '#c94a3a', 0); ell(1300, 2050, 1250, 180, '#e0704a', 0);
  // plant + lamp
  rbox(2900, 1380, 160, 200, 12, '#c9764a', 7); [[-0.5, 0], [0, 0], [0.5, 0]].forEach(([a]) => ell(2980 + a * 120, 1240, 60, 160, '#3f8f4a', 6, a));
  rbox(950, 900, 20, 680, 4, '#3a3d44', 4); poly([[860, 900], [1060, 900], [1010, 760], [910, 760]], '#ffd770', 6);
  // table
  rbox(1450, TY - 30, 1000, 50, 12, '#6b4428', 8); [1500, 2370].forEach(lx => rbox(lx, TY + 10, 40, 280, 6, '#5a3a22', 6)); }
function rulesPol(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['3 SACS : OR · ARGENT · MÉLANGE', OL, 38], ['TOUTES LES ÉTIQUETTES', OL, 46], ['SONT FAUSSES', C.red, 58], ['1 SEULE PIÈCE TIRÉE', C.red, 52], ['TROUVER LE SAC D\'OR', OL, 46]].forEach(([s, c, f], i) => txt(s, w / 2, 64 + i * 84, f, c, { stroke: false })); }
function caseDiag(w, h, silver) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt(silver ? 'SI ELLE EST EN ARGENT :' : 'SI ELLE EST EN OR :', w / 2, 56, 60, silver ? '#6a7380' : '#c08a12', { stroke: false });
  const lab = ['OR', 'ARGENT', 'MÉLANGE'], tru = silver ? ['MÉLANGE', 'OR', 'ARGENT'] : ['ARGENT', 'MÉLANGE', 'OR'];
  lab.forEach((l, i) => { const cx = w / 6 + i * w / 3; txt('« ' + l + ' »', cx, 150, 44, OL, { stroke: false }); txt('↓', cx, 220, 64, OL, { stroke: false }); txt(tru[i], cx, 300, tru[i] === 'OR' ? 70 : 50, tru[i] === 'OR' ? '#c08a12' : OL, { stroke: false });
    if (tru[i] === 'OR') { x.strokeStyle = '#2a8a3a'; x.lineWidth = 7; x.strokeRect(cx - 120, 250, 240, 100); } }); }
function draw(t) {
  const id = curId(t), tSac = WF('s1', /sacs/i), tOr = WF('s2', /^or/i), tArg = WF('s2', /argent/i), tMel = WF('s2', /mélangé/i), tTout = WF('s3', /TOUTES|toutes/i),
    tUne = WF('s4', /UNE|une/i), tReg = WF('s4', /regarder/i), tTire = WF('sol2', /tire/i), tEmp = WF('sol2', /emporte/i), tArg3 = WF('sol3', /argent/i), tEti = WF('sol3', /étiquette/i);
  const K = [[0, 0, 2170, 1420, 0.95], [B.ff.end - 0.1, 1.1, 1300, 1250, 0.62], [S('s1') + 0.3, 1.2, 600, 1150, 1.0], [tSac, 1.0, 1950, 1350, 1.05],
    [S('s3'), 1.0, 1950, 1400, 1.25], [S('s4'), 1.0, 2170, 1420, 0.95], [tReg, 1.0, 1950, 1400, 1.0], [S('c1'), 1.0, 1300, 1250, 0.62],
    [S('sol1'), 1.0, 2250, 1350, 1.4], [S('sol2'), 0.8, 2350, 1300, 1.3], [S('sol3'), 1.0, 1950, 1400, 1.0], [S('end'), 1.0, 1300, 1250, 0.62]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 5 : 0);
  salon(t);
  // Baron gaming (controller), turns around in s3
  cast('boss', 820, GY - 120, 0.75, t, { mood: id === 's3' ? 'smug' : id === 'sol2' || id === 'end' ? 'shock' : 'smile', look: id === 's3' ? 1 : -1, armsUp: false });
  if (id !== 's3') { rbox(760, GY - 120 - 330, 120, 60, 24, '#1b1b1f', 5); }
  // sacks with labels
  const solId = id.startsWith('sol') || id === 'end';
  SX.forEach((sx, i) => { let glow = null;
    if (id === 's3' && t >= tTout) glow = 'rgba(214,51,43,.25)';
    if ((id === 'sol1' || id === 'sol2') && i === 2) glow = id === 'sol2' && t >= tTire ? 'rgba(245,197,66,.55)' : 'rgba(47,143,79,.3)';
    if (id === 'sol3' && i === 1 && t >= tEti) glow = 'rgba(245,197,66,.55)';
    const lift = id === 'sol2' && i === 2 && t >= tEmp ? -120 * eOut(seg(t, tEmp, tEmp + 0.6)) : 0;
    sack(sx, TY - 30 + lift, LAB[i], glow); });
  // 47
  const reach = id === 's4' && t >= tUne || id === 'sol1' || id === 'sol2';
  p47(2620, GY - 40, 0.78, t, { mood: id === 's3' || id === 's4' || id === 'q' ? 'worried' : 'smug', look: -1, armUp: reach, blink: t > 0.6, sweat: id === 's4' });
  if (id === 'sol2') coin(2500, GY - 40 - 0.78 * 690, 34, true);
  if (id === 'sol3') coin(2500, GY - 40 - 0.78 * 690, 34, false);
  resetCam();
  hookCard(t, [['3 ÉTIQUETTES…', 80], ['TOUTES FAUSSES', 92, C.red], ['ET 1 SEULE PIÈCE', 66]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE SALON DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2') [[tOr, 'OR', '#c08a12'], [tArg, 'ARGENT', '#6a7380'], [tMel, '½ OR + ½ ARGENT', C.orange]].forEach(([tt, s, c], i) => { if (t >= tt) pill(s, 540, 330 + i * 120, P(t, tt), c); });
  if (id === 's3' && t >= tTout) stamp('TOUTES FAUSSES', P(t, tTout, 0.25), 420);
  if (id === 's4' && t >= tUne) polaroid(560, 720, 640, 500, P(t, tUne, 0.3), rulesPol, 'LES RÈGLES', -0.03);
  germanCards(t, [['DANS QUEL SAC', 84], ['IL PIOCHE ?', 104, C.red]]);
  if (id === 'sol1') { pill('« MÉLANGE » = PAS MÉLANGÉ', 540, 330, P(t, WF('sol1', /fausse/i)), C.red); pill('→ TOUT OR OU TOUT ARGENT', 540, 450, P(t, WF('sol1', /tout/i)), '#2a8a3a'); }
  if (id === 'sol2' && t >= tTire) polaroid(550, 720, 920, 420, P(t, tTire, 0.3), (w, h) => caseDiag(w, h, false), 'CAS 1', -0.03);
  if (id === 'sol3' && t >= tArg3) polaroid(550, 720, 920, 420, P(t, tArg3, 0.3), (w, h) => caseDiag(w, h, true), 'CAS 2', 0.03);
  if (id === 'sol3' && t >= tEti) pill("L'OR EST TOUJOURS TROUVÉ ✅", 540, 330, P(t, tEti), '#2a8a3a');
}
