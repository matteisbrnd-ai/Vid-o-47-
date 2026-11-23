// Le menu — one warm set: a busy fried-chicken shop (menu board, fryer, cashier behind the counter, a queue of customers).
// Brand names are written in our own font on plain props (no real logo or packaging).
window.LOOK = 'gala';
const GY = 1950, CY = 1560;   // CY = counter top
function shop(t) { x.fillStyle = vg(-600, 1500, '#ffe9c9', '#fff6e6'); x.fillRect(-1400, -1000, 5200, 2600);
  for (let i = -6; i < 20; i++) rbox(i * 240, 1150, 230, 230, 6, i % 2 ? '#f7d9a8' : '#fbe6c0', 3);              // tiled wall
  x.fillStyle = '#d6332b'; x.fillRect(-1400, 1100, 5200, 50);
  rbox(500, 420, 1600, 560, 16, '#2b2b30', 10);                                                                   // menu board
  txt('TASTY CROUSTY', 1300, 500, 96, C.yellow, { stroke: false });
  [['MENU', 'TASTY + CIAO', '11 €', C.yellow], ['TASTY', '', '??? €', '#fff'], ['CIAO', '', '??? €', '#fff']].forEach(([a, b, c, col], i) => { const yy = 640 + i * 110;
    txt(a, 720, yy, 70, '#fff', { stroke: false }); if (b) txt(b, 1150, yy, 46, '#bbb', { stroke: false }); txt(c, 1840, yy, 76, col, { stroke: false }); });
  rbox(2250, 700, 600, 620, 16, '#c9ced6', 8); rbox(2300, 760, 500, 240, 10, '#3a3d44', 6); rbox(2320, 1060, 220, 200, 8, '#ff8a3a', 6); rbox(2580, 1060, 220, 200, 8, '#ff8a3a', 6);   // fryer
  txt('🍗', 2430, 1150, 90, OL, { stroke: false }); txt('🍗', 2690, 1150, 90, OL, { stroke: false });
  x.fillStyle = '#c9c2b5'; x.fillRect(-1400, 1700, 5200, 2000); for (let i = -10; i < 40; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) { x.fillStyle = '#b5ad9e'; x.fillRect(i * 140, 1700 + j * 140, 140, 140); }
  [-900, -500].forEach((tx, k) => { rbox(tx - 150, 1560, 300, 30, 8, '#d6332b', 6); rbox(tx - 15, 1590, 30, 200, 4, '#3a3d44', 5); }); }
function counter() { rbox(500, CY, 1500, 400, 10, '#d6332b', 9); rbox(500, CY - 30, 1500, 50, 10, '#f4f2ec', 8); txt('TASTY CROUSTY', 1250, CY + 190, 90, '#fff', { stroke: false });
  rbox(1550, CY - 160, 180, 140, 12, '#3a3d44', 7); rbox(1575, CY - 140, 130, 60, 6, '#7cff8a', 0); txt('11,00', 1640, CY - 108, 46, '#1b1b1f', { stroke: false }); }
function tasty(px, py, s, open) { x.save(); x.translate(px, py); x.scale(s, s); poly([[-110, 0], [110, 0], [130, -170], [-130, -170]], '#d6332b', 7);
  txt('TASTY', 0, -112, 50, '#fff', { stroke: false }); txt('CROUSTY', 0, -62, 44, '#ffd23f', { stroke: false });
  if (open) [[-60, -190], [-10, -205], [45, -192]].forEach(([a, b]) => ell(a, b, 40, 28, '#e0a050', 6)); x.restore(); }
function ciao(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-60, -120, 120, 240, 22, '#2fd0c0', 7); rbox(-60, -120, 120, 26, 10, '#c9ced6', 5); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 66, '#fff', { stroke: true }); x.restore(); x.restore(); }
function tray(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-260, -10, 520, 30, 10, '#8a5a32', 6); tasty(-90, -10, 0.9, true); ciao(150, -130, 0.9); x.restore(); }
function tag(px, py, s, col) { rrc(px, py, 210, 90, 16, '#fff', 6); txt(s, px, py + 4, 60, col || OL, { stroke: false }); }
function hookPic(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); tasty(w * 0.3, h * 0.78, 1.25, true); ciao(w * 0.72, h * 0.66, 1.15);
  txt('+ 10 €', w * 0.3, h * 0.12, 64, OL, { stroke: false }); txt('?', w * 0.72, h * 0.12, 90, C.red, { stroke: false }); txt('=', w * 0.52, h * 0.55, 90, OL, { stroke: false }); txt('11 € LES DEUX', w / 2, h * 0.94, 52, C.red, { stroke: false }); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['TASTY + CIAO = 11 €', OL, 52], ['TASTY = CIAO + 10 €', OL, 52], ['TROUVÉ → MENU OFFERT', C.green, 46], ['RATÉ → LA PLONGE', C.red, 46]].forEach(([s, c, f], i) => txt(s, w / 2, 66 + i * 88, f, c, { stroke: false })); }
function wrong(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const L = [['CIAO = 1 €', OL], ['TASTY = 1 + 10 = 11 €', OL], ['MENU = 12 € ✗', C.red]];
  L.forEach(([s, c], i) => { if (k >= i / 3) txt(s, w / 2, 80 + i * 110, 60, c, { stroke: false }); }); }
function right(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const L = [['CIAO = 0,50 €', OL], ['TASTY = 10,50 €', OL], ['MENU = 11 € ✓', C.green]];
  L.forEach(([s, c], i) => { if (k >= i / 3) txt(s, w / 2, 80 + i * 110, 64, c, { stroke: false }); }); }
function draw(t) {
  const id = curId(t), tCent = WF('s1', /centime/i), tDefi = WF('s1', /défi/i), tOff = WF('s1', /offert/i), tPl = WF('s2', /plonge/i), tMenu = WF('s2', /menu/i), tOnze = WF('s2', /onze/i),
    tDix = WF('s3', /dix/i), tCrie = WF('s4', /crie/i), tSec = WF('s4', /secoue/i), tSi = WF('sol2', /Si/), tDouze = WF('sol2', /douze/i), tCiao3 = WF('sol3', /Ciao/i), tOff3 = WF('sol3', /offert/i);
  const K = [[0, 0, 800, 898, 1.4], [B.ff.end - 0.1, 1.1, 1300, 1380, 0.6], [S('s1') + 0.4, 1.0, 800, 1247, 1.3], [tDefi, 1.0, 1300, 1125, 1.2], [tOff, 0.8, 1080, 1450, 1.4],
    [tPl, 0.8, 1300, 1150, 1.1], [tMenu, 1.0, 1300, 900, 0.95], [S('s3'), 1.0, 1080, 1450, 1.35], [S('s4'), 1.0, 2050, 1300, 0.8], [tSec, 0.8, 800, 1258, 1.45], [S('q'), 0.8, 800, 1247, 1.3],
    [S('c1'), 1.0, 1300, 1380, 0.6], [S('sol1'), 0.8, 800, 1247, 1.3], [S('sol2'), 1.0, 1080, 1480, 1.2], [S('sol3'), 1.0, 1200, 1300, 0.95], [tOff3, 0.8, 900, 1250, 1.2], [S('end'), 1.0, 1300, 1380, 0.6]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 6 : 0);
  shop(t);
  const won = id === 'sol3' && t >= tOff3 || id === 'end';
  cast('cook', 1300, 1800, 0.75, t, { mood: id === 's2' ? 'smug' : id === 'sol3' || id === 'end' ? 'shock' : id === 'sol2' ? 'worried' : 'smile', look: -1 });
  counter(); tray(1080, CY - 10, 0.75);
  const Q = [['woman', 1950], ['rico', 2250], ['gardener', 2550], ['old', 2850]], yell = id === 's4' && t >= tCrie && t < tSec + 0.8;
  Q.forEach(([k, qx], i) => cast(k, qx, GY - 20 + (i % 2) * 10, 0.72, t, { mood: yell ? 'smile' : won ? 'shock' : 'neutral', look: -1, armUp: yell && i % 2 === 0 }));
  const shake = id === 's4' && t >= tSec ? Math.sin((t - tSec) * 18) * (t < tSec + 1 ? 0.5 : 0) : 0;
  p47(800, GY, 0.8, t, { mood: id === 'ff' || id === 's2' ? 'worried' : id === 's1' && t < tDefi ? 'worried' : id === 's3' ? 'neutral' : 'smug', look: shake ? (shake > 0 ? 1 : -1) : 1, sweat: id === 'ff' || id === 's2', armUp: won, blink: t > 0.6 });
  if (won) tasty(800 + 130, GY - 600, 0.6, true);
  resetCam();
  if (id === 'ff' && t > 0.1 && t < 0.22) { x.fillStyle = 'rgba(255,255,255,.4)'; x.fillRect(0, 0, W, H); }
  hookCard(t, [['LE MENU = 11 €', 84], ['LE TASTY = 10 € DE PLUS', 72], ['LA CIAO : COMBIEN ?', 90, C.red]], B.ff.end + 0.1);
  if (id === 'ff') polaroid(540, 920, 900, 520, 1, hookPic, '', 0.02);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tDefi) banner('0 € EN POCHE', 540, 330, P(t, S('s1') + 0.3), C.red);
  if (id === 's1' && t >= tDefi) pill('🎁 DÉFI : MENU OFFERT', 540, 340, P(t, tDefi), C.green);
  if (id === 's2' && t < tMenu) pill('🧽 SINON : LA PLONGE', 540, 340, P(t, tPl), C.red);
  if (id === 's2' && t >= tOnze) pill('TASTY + CIAO = 11 €', 540, 340, P(t, tOnze), C.brown);
  if (id === 's3') polaroid(560, 650, 680, 420, P(t, S('s3') + 0.1, 0.3), rules, 'LES RÈGLES', -0.03);
  if (id === 's4' && t >= tCrie && t < tSec + 0.6) { speech('1 € !', 380, 560, P(t, tCrie, 0.2), 90); speech('1 € !!', 760, 420, P(t, tCrie + 0.25, 0.2), 90); }
  if (id === 's4' && t >= tSec) pill('47 : NON…', 540, 340, P(t, tSec), C.brown);
  germanCards(t, [['LA CIAO', 90], ['COÛTE COMBIEN ?', 96, C.red]]);
  if (id === 'sol1') paperCard([['50 CENTIMES !', 120, C.red], ['(PAS 1 €)', 60]], 540, 420, P(t, S('sol1') + 0.2), { w: 700 });
  if (id === 'sol2') polaroid(560, 640, 760, 400, P(t, S('sol2') + 0.1, 0.3), (w, h) => wrong(w, h, seg(t, tSi, tDouze + 0.2)), 'AVEC 1 €…', -0.03);
  if (id === 'sol3' && t < tOff3) polaroid(560, 640, 760, 400, P(t, S('sol3') + 0.1, 0.3), (w, h) => right(w, h, seg(t, tCiao3, tOff3 - 0.6)), 'AVEC 50 CENTIMES', 0.03);
  if (id === 'sol3' && t >= tOff3) stamp('MENU OFFERT', P(t, tOff3, 0.25), 460, C.green);
}
