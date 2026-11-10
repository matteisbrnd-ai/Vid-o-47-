// La barque — one riverside set: left bank (farm), river with the tiny boat, right bank (village). Rules polaroid with crossed pairs.
window.CTA = "SI C'EST PAS POUR TOI, LAISSE LA PLACE 😏"; window.LOOK = 'gala';
const GY = 1950;
function wolf(px, py, s, open) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-110, -150, 220, 120, 50, '#7a7f8a', 7); [-80, -30, 40, 90].forEach(lx => rbox(lx - 12, -50, 24, 60, 8, '#6b707a', 5));
  ell(130, -170, 70, 60, '#7a7f8a', 7); poly([[100, -220], [115, -280], [140, -225]], '#6b707a', 5); poly([[150, -220], [175, -275], [180, -215]], '#6b707a', 5); rbox(170, -170, 70, 40, 16, '#8a8f99', 5);
  ell(140, -185, 8, 8, OL, 0); ell(238, -158, 10, 8, OL, 0); if (open) poly([[180, -140], [240, -135], [200, -110]], '#c0392b', 4); x.restore(); }
function goat(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-100, -150, 200, 110, 45, '#f4f2ec', 7); [-70, -25, 30, 75].forEach(lx => rbox(lx - 10, -50, 20, 60, 6, '#d9d3c4', 5));
  ell(120, -180, 50, 55, '#f4f2ec', 7); poly([[100, -225], [80, -275], [115, -230]], '#b9ad98', 5); poly([[140, -225], [160, -272], [150, -222]], '#b9ad98', 5); ell(130, -185, 7, 7, OL, 0); poly([[115, -135], [125, -95], [135, -135]], '#d9d3c4', 4); x.restore(); }
function cabbage(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); ell(0, -70, 90, 75, '#6ab45a', 7); ell(0, -75, 55, 50, '#8fd27a', 5); [-1, 1].forEach(d => { x.strokeStyle = '#4a8a3a'; x.lineWidth = 5; x.beginPath(); x.moveTo(0, -30); x.quadraticCurveTo(d * 40, -80, d * 20, -130); x.stroke(); }); x.restore(); }
function boat(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(-200, -60); x.lineTo(200, -60); x.lineTo(150, 30); x.lineTo(-150, 30); x.closePath(); fs('#a8673a', 8); x.fillStyle = '#c9302a'; x.fillRect(-190, -60, 380, 18); x.restore(); }
function river(t) { x.fillStyle = vg(-1500, 1600, '#ffb07a', '#ffe3c0'); x.fillRect(-1200, -1500, 5000, 3200); ell(1080, 1100, 140, 140, '#fff3a0', 0);
  [[200, 1500], [600, 1450], [1600, 1480], [2000, 1440]].forEach(([hx, hy]) => ell(hx, hy + 100, 420, 160, '#c9b8d8', 0));
  x.fillStyle = '#5aa0d8'; x.fillRect(-1200, 1700, 5000, 2000); x.fillStyle = 'rgba(255,255,255,.35)'; for (let i = 0; i < 40; i++) { const wx = ((i * 211 + t * 40) % 3200) - 600, wy = 1760 + (i * 97) % 600; x.fillRect(wx, wy, 90, 8); }
  poly([[-1200, 1650], [620, 1650], [760, 2900], [-1200, 2900]], '#7cc46a', 8); poly([[1540, 1650], [3400, 1650], [3400, 2900], [1400, 2900]], '#9ad27a', 8);   // banks
  rbox(-200, 1200, 420, 460, 10, '#c9302a', 8); poly([[-230, 1210], [10, 1020], [250, 1210]], '#7a1f2a', 8); rbox(-40, 1440, 120, 220, 6, '#f4f2ec', 6);   // barn
  [[1900, 1300, '#f4d6a0'], [2150, 1260, '#e9b7a0']].forEach(([hx, hy, c]) => { rbox(hx, hy, 220, 380, 8, c, 7); poly([[hx - 20, hy], [hx + 110, hy - 120], [hx + 240, hy]], '#b05a4a', 7); rbox(hx + 80, hy + 240, 60, 140, 4, '#7a5232', 5); });
  txt('🌾', 380, 1640, 60, OL, { stroke: false }); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const pair = (y, a, b) => { x.save(); x.translate(w * 0.28, y); a(); x.restore(); x.save(); x.translate(w * 0.62, y); b(); x.restore(); txt('✗', w * 0.88, y - 40, 80, C.red, { stroke: false }); };
  txt('JAMAIS SEULS :', w / 2, 60, 44, OL, { stroke: false }); pair(260, () => wolf(-40, 0, 0.5), () => goat(-30, 0, 0.55)); pair(470, () => goat(-30, 0, 0.55), () => cabbage(0, 0, 0.7)); }
function draw(t) {
  const id = curId(t), tMin = WF('s2', /minuscule/i), tSi = S('s3'), tElle = WF('s3', /chèvre seule|^seule/i), tMange2 = B.s3.end - 0.6;
  const K = [[0, 0, 1080, 1700, 1.3], [B.ff.end - 0.1, 1.2, 1080, 1500, 0.6], [S('s1') + 1.6, 1.4, 360, 1720, 1.35], [S('s2'), 1.2, 1080, 1800, 1.6], [tSi, 1.2, 360, 1700, 1.25], [S('s4'), 1.4, 1080, 1550, 0.75], [S('q'), 1.0, 1080, 1700, 1.3]];
  camPath(t, K);
  river(t);
  const bx = id === 'ff' || id === 'q' ? 1080 + Math.sin(t * 1.5) * 20 : 1080, by = 1980 + Math.sin(t * 2) * 8;
  boat(bx, by, 1);
  p47(bx - 70, by - 40, 0.62, t, { mood: id === 's3' ? 'worried' : id === 'ff' || id === 'q' || id === 's4' ? 'shock' : 'smile', look: 1, sweat: id === 's3', blink: t > 0.6 });
  if (id === 'ff' || id === 'q') { goat(bx + 110, by - 40, 0.55); }
  if (id !== 'ff' && id !== 'q') { const eat = id === 's3' && t > WF('s3', /mange/i) && t < tMange2 + 0.4; wolf(150, GY + 20, 0.75, eat); goat(380, GY + 30, 0.75); cabbage(560, GY + 40, 0.8); }
  else { wolf(150, GY + 20, 0.75, false); cabbage(560, GY + 40, 0.8); }
  resetCam();
  hookCard(t, [['LOUP, CHÈVRE, CHOU…', 76], ['UNE SEULE PLACE !', 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's2' && t >= tMin) polaroid(560, 640, 440, 380, P(t, tMin, 0.3), (w, h) => { x.fillStyle = '#cfe8ff'; x.fillRect(0, 0, w, h); boat(w / 2, h * 0.75, 0.8); txt('47 + 1', w / 2, h * 0.35, 80, C.red, { stroke: false }); }, 'LA BARQUE', -0.04);
  if (id === 's3' || id === 's4') polaroid(560, 640, 480, 600, P(t, tSi + 0.4, 0.3), rules, 'LES RÈGLES', 0.03);
  endCards(t, [['COMMENT IL FAIT ?', 86, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
