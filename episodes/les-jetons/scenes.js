// Les jetons — one rich, bright set: the Baron's casino (chandeliers, slot machines, roulette in the back, green table in front with the black bag).
window.LOOK = 'gala';
const GY = 1950, TX = 1500, TY = 1560;
function chip(px, py, r, col) { ell(px, py, r, r, col, 5); x.save(); x.setLineDash([r * 0.35, r * 0.35]); x.strokeStyle = '#fff'; x.lineWidth = r * 0.22; x.beginPath(); x.arc(px, py, r * 0.78, 0, 7); x.stroke(); x.restore(); ell(px, py, r * 0.5, r * 0.5, col, 3); }
function bag(px, py, s, shake) { x.save(); x.translate(px + shake, py); x.scale(s, s); x.beginPath(); x.moveTo(-150, 0); x.quadraticCurveTo(-190, -200, -90, -260); x.lineTo(90, -260); x.quadraticCurveTo(190, -200, 150, 0); x.closePath(); fs('#1d1d24', 8);
  rbox(-100, -290, 200, 50, 16, '#2b2b36', 6); x.strokeStyle = '#e2b649'; x.lineWidth = 8; x.beginPath(); x.moveTo(-90, -266); x.quadraticCurveTo(0, -240, 90, -266); x.stroke(); txt('?', 0, -110, 120, '#e2b649', { stroke: false }); x.restore(); }
function casino(t) { x.fillStyle = vg(-1200, 1700, '#7a1f2e', '#b8344a'); x.fillRect(-1300, -1500, 4800, 3300);
  for (let i = -6; i < 20; i++) { x.fillStyle = i % 2 ? 'rgba(255,220,150,.10)' : 'rgba(0,0,0,.06)'; x.fillRect(i * 180, -1500, 90, 3300); }
  [[300, 250], [1500, 180], [2700, 250]].forEach(([cx, cy]) => { x.strokeStyle = '#e2b649'; x.lineWidth = 6; x.beginPath(); x.moveTo(cx, -400); x.lineTo(cx, cy); x.stroke(); for (let k = -3; k <= 3; k++) { ell(cx + k * 50, cy + 40 + Math.abs(k) * -8, 18, 26, '#fff4c2', 4); } ell(cx, cy + 10, 160, 40, '#e2b649', 6); });
  // slot machines (left) + roulette (right)
  [-300, 0, 300].forEach((sx, i) => { rbox(sx - 120, 800, 240, 500, 24, ['#2c4fa8', '#2f8f4f', '#f2781f'][i], 8); rbox(sx - 90, 880, 180, 120, 10, '#fff', 6); ['7', '🍒', '7'].forEach((s, k) => txt(s, sx - 55 + k * 55, 944, 54, C.red, { stroke: false }));
    ell(sx, 1180, 60, 30, '#1b1b1f', 5); x.fillStyle = Math.floor(t * 4 + i) % 2 ? '#ffd23f' : '#fff4c2'; for (let k = 0; k < 6; k++) { x.beginPath(); x.arc(sx - 100 + k * 40, 830, 10, 0, 7); x.fill(); } });
  rbox(2350, 1150, 700, 200, 20, '#1f6b3a', 8); ell(2700, 1150, 220, 80, '#5a3a22', 7); ell(2700, 1150, 170, 60, '#d6332b', 5); ell(2700, 1150, 60, 22, '#e2b649', 4);
  x.save(); x.translate(2700, 1150); x.rotate(t * 2); x.strokeStyle = '#1b1b1f'; x.lineWidth = 6; for (let k = 0; k < 8; k++) { x.rotate(Math.PI / 4); x.beginPath(); x.moveTo(60, 0); x.lineTo(170, 0); x.stroke(); } x.restore();
  // crowd silhouettes
  [[-500, 1500], [-150, 1520], [2150, 1480], [3100, 1500]].forEach(([cx, cy], i) => { x.fillStyle = 'rgba(60,20,30,.55)'; x.beginPath(); x.arc(cx, cy - 330, 70, 0, 7); x.fill(); rbox(cx - 110, cy - 260, 220, 300, 60, 'rgba(60,20,30,.55)', 0); });
  // carpet
  x.fillStyle = '#5a1a26'; x.fillRect(-1300, 1720, 4800, 2000); x.fillStyle = 'rgba(226,182,73,.25)'; for (let i = -10; i < 30; i++) for (let j = 0; j < 6; j++) { x.beginPath(); x.arc(i * 160 + (j % 2) * 80, 1800 + j * 90, 14, 0, 7); x.fill(); }
  // table
  ell(TX, TY, 760, 130, '#5a3a22', 9); ell(TX, TY - 14, 720, 110, '#2f8f4f', 6); x.strokeStyle = 'rgba(255,255,255,.4)'; x.lineWidth = 5; x.beginPath(); x.ellipse(TX, TY - 14, 600, 80, 0, 0, 7); x.stroke();
  rbox(TX - 640, TY + 80, 60, 260, 6, '#4a2a18', 6); rbox(TX + 580, TY + 80, 60, 260, 6, '#4a2a18', 6);
  [[TX - 450, TY - 30, C.red], [TX - 420, TY - 46, C.red], [TX + 450, TY - 30, '#2c6fd8'], [TX + 420, TY - 46, '#2c6fd8'], [TX + 470, TY - 60, '#2c6fd8']].forEach(([a, b, c]) => chip(a, b, 34, c)); }
function rulesPol(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['10 ROUGES + 10 BLEUS', OL, 50], ['1 POIGNÉE, SANS REGARDER', OL, 44], ['2 DE LA MÊME COULEUR', '#2a8a3a', 48], ['= GAGNÉ', '#2a8a3a', 54], ['1 JETON = 100 €', C.red, 56]].forEach(([s, c, f], i) => txt(s, w / 2, 64 + i * 84, f, c, { stroke: false })); }
function pairDiag(w, h, k, id) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const y = h / 2 - 20;
  chip(w / 2 - 200, y, 70, C.red); chip(w / 2, y, 70, '#2c6fd8'); txt('1', w / 2 - 200, y + 110, 44, OL, { stroke: false }); txt('2', w / 2, y + 110, 44, OL, { stroke: false });
  if (id === 'sol3') { const alt = Math.floor(k * 4) % 2; chip(w / 2 + 200, y, 70, alt ? '#2c6fd8' : C.red); txt('3', w / 2 + 200, y + 110, 44, OL, { stroke: false });
    x.strokeStyle = '#2a8a3a'; x.lineWidth = 9; x.beginPath(); x.moveTo(w / 2 + 200, y - 90); x.quadraticCurveTo(w / 2 + (alt ? 100 : 0), y - 200, alt ? w / 2 : w / 2 - 200, y - 90); x.stroke(); txt('PAIRE !', w / 2, 50, 54, '#2a8a3a', { stroke: false }); }
  else txt('PAS DE PAIRE…', w / 2, 50, 50, C.red, { stroke: false }); }
function hookPic(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); bag(w / 2, h - 60, 0.95, 0); for (let i = 0; i < 10; i++) { chip(50 + (i % 2) * 80, 60 + Math.floor(i / 2) * 85, 34, C.red); chip(w - 50 - (i % 2) * 80, 60 + Math.floor(i / 2) * 85, 34, '#2c6fd8'); } }
function draw(t) {
  const id = curId(t), tCas = WF('s1', /casino/i), tPie = WF('s1', /piégeux/i), tRou = WF('s2', /rouges/i), tBle = WF('s2', /bleus/i), tMain = WF('s3', /main/i), tGag = WF('s3', /gagne/i),
    tEur = WF('s4', /euros/i), tSur = WF('s4', /SÛR|sûr/i), tTro = WF('sol1', /trois/i), tR2 = WF('sol2', /rouge/i), tT3 = WF('sol3', /troisième/i), tGg = WF('sol3', /Gagné/i);
  const K = [[0, 0, 1720, 1095, 1.6], [B.ff.end - 0.1, 1.1, 1350, 1250, 0.62], [S('s1') + 1.0, 1.4, 1400, 1300, 0.85], [S('s2'), 1.0, TX, 1450, 1.5],
    [S('s3'), 1.0, 1650, 1400, 1.3], [S('s4'), 1.0, 1000, 1300, 1.4], [tSur, 1.0, 1650, 1350, 1.5], [S('c1'), 1.0, 1350, 1250, 0.62],
    [S('sol1'), 0.8, 1650, 1450, 1.1], [S('sol3'), 1.0, 1650, 1400, 1.0], [S('end'), 1.0, 1350, 1250, 0.62]];
  camPath(t, K, id === 'ff' && t < 0.5 ? 6 : 0);
  casino(t);
  cast('director', 1000, GY - 60, 0.72, t, { mood: id === 's4' ? 'smug' : 'neutral', look: 1, body: '#1b1b1f', body2: '#121214', hairCol: '#2a2a2a' });   // croupier
  cast('boss', 600, GY - 20, 0.75, t, { mood: id === 'sol3' || id === 'end' ? 'shock' : 'smug', look: 1 });
  const grab = id === 'ff' || id === 's3' && t >= tMain;
  p47(1950, GY - 20, 0.8, t, { mood: id === 'ff' || id === 's4' || id === 'q' ? 'worried' : id.startsWith('sol') || id === 'end' ? 'smug' : 'neutral', look: -1, armUp: grab, sweat: id === 'ff' || id === 's4', blink: t > 0.6 });
  bag(TX + 180, TY - 20, 0.85, grab ? Math.sin(t * 30) * 6 : 0);
  if (id === 'sol1' || id === 'sol3' || id === 'end') { [[C.red, -90], ['#2c6fd8', 0], [C.red, 90]].forEach(([c, dx]) => chip(TX - 250 + dx, TY - 40, 40, c)); }
  resetCam();
  hookCard(t, [['10 ROUGES + 10 BLEUS, SANS REGARDER', 56], ['COMBIEN POUR 1 PAIRE SÛRE ?', 70, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 1000, 780, 520, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t >= tCas) banner('LE CASINO DU BARON', 540, 330, P(t, tCas));
  if (id === 's2') { if (t >= tRou) pill('🔴 × 10', 360, 340, P(t, tRou), C.red); if (t >= tBle) pill('🔵 × 10', 720, 340, P(t, tBle), '#2c6fd8'); }
  if (id === 's3' && t >= tGag) pill('2 MÊME COULEUR = GAGNÉ', 540, 340, P(t, tGag), '#2a8a3a');
  if (id === 's4' && t >= tEur) polaroid(560, 720, 640, 500, P(t, tEur, 0.3), rulesPol, 'LES RÈGLES', -0.03);
  if (id === 's4' && t >= tSur) stamp('LE MOINS POSSIBLE', P(t, tSur, 0.25), 1260);
  germanCards(t, [['COMBIEN DE JETONS', 80], ['IL PREND ?', 104, C.red]]);
  if (id === 'sol1') paperCard([['3 JETONS', 120, C.red], ['PAS UN DE PLUS', 60]], 540, 420, P(t, tTro), { w: 760 });
  if (id === 'sol2' && t >= S('sol2') + 0.3) polaroid(560, 740, 760, 440, P(t, S('sol2') + 0.3, 0.3), (w, h) => pairDiag(w, h, 0, id), 'AVEC 2 JETONS', -0.03);
  if (id === 'sol3' && t >= tT3) polaroid(560, 740, 760, 440, P(t, tT3, 0.3), (w, h) => pairDiag(w, h, seg(t, tT3, tT3 + 2), id), 'LE 3ᵉ FAIT LA PAIRE', 0.03);
  if (id === 'sol3' && t >= tGg) pill('GAGNÉ POUR 300 € DE MISE ✅', 540, 330, P(t, tGg), '#2a8a3a');
}
