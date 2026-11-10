// Les sacs — Galagade style: the Baron's vault (one rich set), slow zooms, polaroid rules, triple-hook card with « ÉNIGME » tag.
window.CTA = 'TAGUE LE PLUS MALIN DE TES POTES'; window.LOOK = 'gala';
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
function draw(t) {
  const id = curId(t), tMar = WF('s1', /marché/i), tFau = WF('s2', /fausses/i), tVraie = WF('s3', /vraie/i), tBal = WF('s4', /balance/i), tMain = WF('s5', /main/i), tPose = WF('s5', /pose/i);
  const K = [[0, 0, 1830, 1640, 1.55], [B.ff.end - 0.1, 1.2, 330, 1400, 1.4], [S('s1') + 0.8, 2.4, 1080, 1350, 0.6], [tMar, 1.0, 900, 1500, 1.5],
    [S('s2'), 1.4, 1200, 1650, 1.15], [S('s3'), 3, 1200, 1600, 1.0], [S('s4'), 1.2, 1900, 1560, 1.7], [S('s5'), 1.2, 1750, 1500, 2.2], [tMain, 0.8, 1250, 1650, 1.25], [tPose, 1.0, 1830, 1640, 1.6],
    [S('q'), 1.0, 1830, 1640, 1.55]];
  camPath(t, K);
  vault(t); x.save(); x.translate(2060, 1520); x.scale(0.35, 0.35); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore();
  const grab = id === 's5' && t >= tMain && t < tPose, onScale = id === 'ff' || id === 'q' || (id === 's5' && t >= tPose);
  cast('guard', 560, GY - 40, 0.75, t, { mood: 'neutral', look: 1 }); cast('boss', 760, GY - 20, 0.8, t, { mood: id === 's1' ? 'smug' : id === 'q' || id === 'ff' ? 'shock' : 'smug', look: 1 });
  SACKS.filter(s => s[2] <= 5).forEach(([sx, sy, n]) => sack(sx, sy, n, grab));
  const px = grab ? lerp(1720, 1200, eOut(seg(t, tMain, tMain + 0.6))) : 1720;
  p47(px, GY + 20, 0.82, t, { mood: id === 's5' || id === 'ff' || id === 'q' ? 'smug' : id === 's4' ? 'worried' : 'shock', look: 1, armUp: grab, blink: t > 0.6 });
  SACKS.filter(s => s[2] > 5).forEach(([sx, sy, n]) => sack(sx, sy, n, grab));
  scale(1960, 1690, 0.9, onScale ? '???' : id === 's4' && t >= tBal ? '0 g' : '');
  if (onScale) { [[-60, 0], [-20, -8], [20, 0], [60, -8], [0, -20]].forEach(([dx, dy]) => coin(1960 + dx * 0.9, 1625 + dy, 18)); }
  resetCam();
  hookCard(t, [["10 SACS D'OR, 1 FAUX…", 80], ['UNE SEULE PESÉE', 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE COFFRE DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tFau) polaroid(560, 680, 420, 460, P(t, tFau, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); coin(w / 2, h / 2 - 20, 110); txt('FAUSSE ?', w / 2, h - 60, 48, C.red, { stroke: false }); }, '1 SAC SUR 10', -0.04);
  if (id === 's3' && t >= tVraie) polaroid(560, 680, 560, 480, P(t, tVraie, 0.3), rules, 'LES RÈGLES', 0.03);
  if (id === 's5' && t >= tPose) onoma('BIP !', 760, 520, P(t, tPose + 0.3, 0.2), 150);
  endCards(t, [['COMMENT IL FAIT ?', 86, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
