// Les bonnets — Galagade style: one sunny fortress courtyard, three heads in the sand facing a wall, the 4th behind it.
window.CTA = 'TAGUE CELUI QUI AURAIT TROUVÉ'; window.LOOK = 'gala';
const GY = 1900, RED = ['#d6332a', '#a82820'], BLUE = ['#2f6fd0', '#2457a8'];
const HEADS = [ // [x, preset, hat colours, extra] — they all look right (toward the wall)
  [640, 'rico', BLUE, {}],                // C, at the back: sees 47 and A
  [930, '47', BLUE, {}],                  // 47 in the middle: sees A only
  [1220, 'old', RED, {}],                 // A, at the front: sees the wall
];
const X4 = [1820, 'gardener', RED];        // alone behind the wall
function head(px, kind, col, t, mood, look = 1) { const o = { hat: 'beanie', hatCol: col[0], hatCol2: col[1], mood, look, blink: t > 0.6 };
  if (kind === '47') p47(px, GY + 330, 0.8, t, o); else cast(kind, px, GY + 330, 0.8, t, o);
  x.fillStyle = '#e8c88e'; x.fillRect(px - 260, GY + 10, 520, 1400); x.beginPath(); x.ellipse(px, GY + 14, 180, 50, 0, Math.PI, 0); fs('#e8c88e', 6); x.fillRect(px - 260, GY + 14, 520, 1400); }
function courtyard(t) { x.fillStyle = vg(-1500, 1300, '#6fc0ff', '#e3f4ff'); x.fillRect(0, -1500, 2160, 3000); ell(300, 300, 110, 110, '#fff3a0', 0);
  bricks(0, 900, 2160, 800, '#e0c79a', 'rgba(140,100,60,.3)', 110, 55); [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(i => rbox(i * 230, 840, 140, 90, 6, '#e0c79a', 6));  // fortress walls + crenels
  rbox(180, 1100, 160, 260, 70, '#3a2f2a', 6); rbox(1780, 1100, 160, 260, 70, '#3a2f2a', 6);                                                                 // gates
  x.fillStyle = '#e8c88e'; x.fillRect(0, 1700, 2160, 3000); x.fillStyle = 'rgba(180,140,90,.35)'; for (let i = 0; i < 70; i++) ell((i * 131) % 2160, 1760 + (i * 71) % 900, 30, 8, 'rgba(180,140,90,.35)', 0); }
function wall() { bricks(1440, 1150, 120, 800, '#b9ad98', 'rgba(70,60,50,.4)', 60, 40); x.strokeStyle = OL; x.lineWidth = 8; x.strokeRect(1440, 1150, 120, 800); }
function diagram(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const ys = h * 0.55, xs = [w * 0.15, w * 0.38, w * 0.61, w * 0.88], cols = [BLUE, BLUE, RED, RED];
  x.fillStyle = '#9a8f80'; x.fillRect(w * 0.73, h * 0.25, 18, h * 0.6);
  xs.forEach((cx, i) => { ell(cx, ys, 34, 34, '#f2c9a0', 5); x.beginPath(); x.arc(cx, ys - 8, 36, Math.PI, 0); x.closePath(); fs(cols[i][0], 5); txt(i === 1 ? '47' : '', cx, ys + 70, 30, OL, { stroke: false }); });
  x.strokeStyle = C.orange; x.lineWidth = 6; x.setLineDash([12, 10]); [[0, 2], [1, 2]].forEach(([a, b], k) => { x.beginPath(); x.moveTo(xs[a] + 40, ys - 40 - k * 30); x.lineTo(xs[b] - 30, ys - 40 - k * 30); x.stroke(); }); x.setLineDash([]);
  txt('👁', xs[0], ys - 100, 40, OL, { stroke: false }); txt('👁', xs[1], ys - 100, 40, OL, { stroke: false }); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['2 ROUGES · 2 BLEUS', OL], ['INTERDIT DE PARLER', OL], ['NI SE RETOURNER', OL], ['1 ERREUR =', C.red], ['PRISON À VIE', C.red]].forEach(([s, c], i) => txt(s, w / 2, 70 + i * 78, 42, c, { stroke: false })); }
function draw(t) {
  const id = curId(t), tMur = WF('s1', /mur/i), tSeul = WF('s2', /seul/i), tBon = WF('s3', /bonnet/i), tVoit = WF('s3', /voit/i), tSil = WF('s5', /silence/i), tBleu = WF('s5', /bleu/i);
  const K = [[0, 0, 930, 1760, 1.6], [B.ff.end - 0.1, 1.2, 1300, 1500, 1.0], [S('s1') + 0.8, 2.6, 1080, 1400, 0.62], [tMur, 1.2, 1200, 1550, 1.05],
    [tSeul, 1.2, 1820, 1620, 1.7], [S('s3'), 1.2, 930, 1650, 1.25], [S('s4'), 1.4, 1080, 1500, 0.9], [S('s5'), 2.5, 930, 1720, 1.5], [tBleu - 0.1, 0.4, 930, 1720, 2.4], [S('q'), 1.2, 930, 1760, 1.6]];
  camPath(t, K, t > tBleu && t < tBleu + 0.3 ? 10 : 0);
  courtyard(t);
  cast('boss', 1080, GY - 190, 0.6, t, { mood: id === 's5' && t > tBleu ? 'shock' : 'smug', look: -1 }); cast('guard', 1700, GY - 200, 0.58, t, { mood: 'neutral', look: -1 }); cast('guard', 420, GY - 200, 0.58, t, { mood: 'neutral', look: 1 });
  const showHats = id !== 's1' && id !== 's2' || id === 'ff';
  HEADS.forEach(([px, k, col], i) => { const m = i === 1 ? (id === 's5' && t >= tBleu ? 'smug' : id === 's5' || id === 'ff' || id === 'q' ? 'worried' : 'neutral') : 'worried';
    head(px, k, showHats ? col : ['#8a8f99', '#6b707a'], t, m); });
  wall(); head(X4[0], X4[1], showHats ? X4[2] : ['#8a8f99', '#6b707a'], t, 'worried', -1);
  resetCam();
  hookCard(t, [['UN SEUL MOT FAUX…', 80], ['PRISON À VIE', 110, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE FORT DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's3' && t >= tVoit) polaroid(560, 640, 600, 420, P(t, tVoit, 0.3), diagram, 'QUI VOIT QUI', -0.03);
  if (id === 's4') polaroid(560, 660, 520, 470, P(t, S('s4') + 0.2, 0.3), rules, 'LES RÈGLES', 0.03);
  if (id === 's5' && t >= tSil && t < tBleu) onoma('…', 540, 520, P(t, tSil, 0.2), 160);
  if (id === 's5' && t >= tBleu) onoma('BLEU !', 560, 520, P(t, tBleu, 0.15), 180);
  endCards(t, [['COMMENT IL A SU ?', 86, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
