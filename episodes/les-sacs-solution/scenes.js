// Les sacs (solution version) — same vault set; after the question: comment card, follow CTA, explained solution with diagrams.: the Baron's vault (one rich set), slow zooms, polaroid rules, triple-hook card with « ÉNIGME » tag.
window.LOOK = 'gala';
const GY = 1950, SACKS = [...Array(10)].map((_, i) => [860 + (i % 5) * 170, i < 5 ? GY - 110 : GY + 50, i + 1]);
function coin(px, py, r) { ell(px, py, r, r * 0.8, '#f5c542', 4); ell(px, py, r * 0.6, r * 0.45, '#e0a92e', 0); }
function sack(px, py, n, open) { x.save(); x.translate(px, py); x.beginPath(); x.moveTo(-70, 0); x.quadraticCurveTo(-90, -110, -40, -140); x.lineTo(40, -140); x.quadraticCurveTo(90, -110, 70, 0); x.closePath(); fs('#c9a06a', 6);
  rbox(-46, -160, 92, 30, 10, '#a88050', 5); if (open) { coin(-20, -165, 20); coin(14, -172, 20); } rrc(0, -60, 64, 48, 12, '#fbf3e4', 4); txt(String(n), 0, -56, 38, OL, { stroke: false }); x.restore(); }
function vault(t) { x.fillStyle = vg(-1500, 1700, '#e9d9b0', '#f6ead0'); x.fillRect(-1200, -1500, 4560, 3300);
  for (let i = -4; i < 14; i++) for (let j = 0; j < 6; j++) { rbox(i * 240 + 10, 760 + j * 160, 220, 140, 6, '#dcc896', 3); ell(i * 240 + 30, 780 + j * 160, 6, 6, '#b89c60', 0); }   // steel panels
  x.beginPath(); x.arc(330, 1350, 330, 0, 7); fs('#c9ced6', 10); x.beginPath(); x.arc(330, 1350, 240, 0, 7); fs('#aeb5bf', 7); [0, 1, 2, 3, 4, 5].forEach(k => { const a = k / 6 * 6.283 + t * 0.2; x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(330, 1350); x.lineTo(330 + Math.cos(a) * 180, 1350 + Math.sin(a) * 180); x.stroke(); }); ell(330, 1350, 50, 50, '#e0a92e', 7);  // vault door
  rbox(1250, 820, 820, 520, 10, '#5a3a22', 8); [0, 1, 2].forEach(r => { rbox(1270, 880 + r * 160, 780, 24, 4, '#7a5232', 5); for (let k = 0; k < 9; k++) rbox(1290 + k * 85, 880 + r * 160 - 70, 70, 70, 6, '#f5c542', 5); });   // shelves of gold bars
  x.fillStyle = '#9a3a3a'; x.fillRect(-1200, 1720, 4560, 3000); x.fillStyle = '#b8484a'; x.fillRect(-1200, 1720, 4560, 24); x.fillStyle = 'rgba(255,255,255,.06)'; for (let i = -10; i < 30; i++) x.fillRect(i * 120, 1744, 4, 3000); }
function scale(px, py, s, shown) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-130, -20, 260, 260, 10, '#7a5232', 7); rbox(-150, -60, 300, 60, 16, '#c9ced6', 7); rbox(-110, -10, 220, 90, 10, '#1b1b1f', 6);
  txt(shown, 0, 36, 56, '#7cff8a', { stroke: false }); x.restore(); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['10 SACS · 1 SEUL FAUX', OL, 40], ['VRAIE PIÈCE = 10 g', OL, 46], ['FAUSSE PIÈCE = 9 g', C.red, 46], ['1 SEULE PESÉE', C.red, 52]].forEach(([s, c, f], i) => txt(s, w / 2, 80 + i * 92, f, c, { stroke: false })); }
function coinsDiagram(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('SAC → PIÈCES', w / 2, 50, 40, OL, { stroke: false });
  for (let n = 1; n <= 10; n++) { const col = (n - 1) % 5, row = n > 5 ? 1 : 0, cx = 70 + col * ((w - 140) / 4), cy = 150 + row * 230; if (k < n / 10) continue;
    rrc(cx, cy, 70, 46, 10, '#c9a06a', 4); txt(String(n), cx, cy + 3, 32, OL, { stroke: false }); for (let c = 0; c < n; c++) coin(cx - 20 + (c % 3) * 20, cy + 60 + Math.floor(c / 3) * 22, 11); } }
function draw(t) {
  const id = curId(t), tMar = WF('s1', /marché/i), tFau = WF('s2', /fausses/i), tVraie = WF('s3', /vraie/i), tBal = WF('s4', /balance/i), tMain = S('sol1'), tPose = S('sol3');
  const K = [[0, 0, 1830, 1640, 1.55], [B.ff.end - 0.1, 1.0, 330, 1400, 1.4], [S('s1') + 0.6, 2.0, 1080, 1350, 0.6], [tMar - 0.3, 0.8, 900, 1500, 1.5],
    [S('s2'), 1.2, 1200, 1650, 1.15], [S('s3'), 2, 1200, 1600, 1.0], [S('s4'), 1.2, 1900, 1560, 1.7], [S('q'), 0.8, 1750, 1500, 2.2], [S('c1'), 1.2, 1080, 1400, 0.7],
    [tMain, 1.0, 1250, 1650, 1.25], [tPose, 1.0, 1830, 1640, 1.6], [S('end'), 1.5, 1080, 1400, 0.65]];
  camPath(t, K);
  vault(t); x.save(); x.translate(2060, 1520); x.scale(0.35, 0.35); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore();
  const grab = id === 'sol1' || id === 'sol2', onScale = id === 'ff' || id === 'sol3' || id === 'end';
  cast('guard', 560, GY - 40, 0.75, t, { mood: 'neutral', look: 1 }); cast('boss', 760, GY - 20, 0.8, t, { mood: id === 'sol3' || id === 'end' || id === 'ff' ? 'shock' : 'smug', look: 1 });
  SACKS.filter(s => s[2] <= 5).forEach(([sx, sy, n]) => sack(sx, sy, n, grab));
  const px = grab ? lerp(1720, 1200, eOut(seg(t, tMain, tMain + 0.6))) : 1720;
  p47(px, GY + 20, 0.82, t, { mood: id.startsWith('sol') || id === 'ff' || id === 'end' ? 'smug' : id === 's4' ? 'worried' : 'shock', look: 1, armUp: grab, blink: t > 0.6 });
  SACKS.filter(s => s[2] > 5).forEach(([sx, sy, n]) => sack(sx, sy, n, grab));
  scale(1960, 1690, 0.9, id === 'ff' ? '???' : onScale && t >= WF('sol3', /affiche/i) ? '543 g' : id === 'sol3' ? '…' : id === 's4' && t >= tBal ? '0 g' : '');
  if (onScale) { [[-60, 0], [-20, -8], [20, 0], [60, -8], [0, -20]].forEach(([dx, dy]) => coin(1960 + dx * 0.9, 1625 + dy, 18)); }
  resetCam();
  hookCard(t, [['IL A TROUVÉ LE SEUL', 70], ['SAC DE FAUSSES PIÈCES…', 70], ['EN 1 SEULE PESÉE', 96, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE COFFRE DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tFau) polaroid(560, 680, 420, 460, P(t, tFau, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); coin(w / 2, h / 2 - 20, 110); txt('FAUSSE ?', w / 2, h - 60, 48, C.red, { stroke: false }); }, '1 SAC SUR 10', -0.04);
  if (id === 's3' && t >= tVraie) polaroid(560, 680, 560, 480, P(t, tVraie, 0.3), rules, 'LES RÈGLES', 0.03);
  if (id === 'q') paperCard([['COMMENT IL FAIT ?', 90, C.red]], 540, 420, P(t, S('q')), { w: 800 });
  if (id === 'c1') paperCard([['ÉCRIS TA RÉPONSE', 70], ['EN COMMENTAIRE 💬', 80, C.red], ['AVANT LA SOLUTION', 46]], 540, 520, P(t, S('c1')), { w: 860 });
  if (id === 'c2') { paperCard([['1 ÉNIGME PAR JOUR', 70], ["SI C'EST PAS POUR TOI…", 54], ['LAISSE LA PLACE 😏', 76, C.red]], 540, 520, P(t, S('c2')), { w: 860 }); }
  if (id === 'sol1' || id === 'sol2') polaroid(560, 640, 640, 520, P(t, S('sol1'), 0.3), (w, h) => coinsDiagram(w, h, id === 'sol2' ? 1 : seg(t, S('sol1') + 1, B.sol1.end)), 'LA SOLUTION', -0.03);
  if (id === 'sol2') { pill('1+2+…+10 = 55 PIÈCES', 540, 1060, P(t, S('sol2')), C.orange); pill('55 × 10 g = 550 g', 540, 1160, P(t, WF('sol2', /550|cinquante/i)), '#2a8a3a'); }
  if (id === 'sol3') { paperCard([['550 − 543 = 7', 96], ['→ SAC N°7 !', 110, C.red]], 540, 460, P(t, WF('sol3', /manque/i)), { w: 820 }); }
  if (id === 'end') paperCard([["T'AVAIS TROUVÉ ?", 96, C.red]], 540, 460, P(t, S('end')), { w: 820 });
}
