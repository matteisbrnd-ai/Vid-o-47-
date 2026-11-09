// Le sauna — Galagade style: ONE warm wooden spa set, left → right: corridor (fridge, 47, guards) · glass door · sauna
// benches with the Baron · hot stove + puddle at the far right. The ice is never drawn (bucket always opaque).
window.CTA = 'TAGUE CELUI QUI AURAIT TROUVÉ'; window.LOOK = 'gala';
const GY = 1900, BX = 1700, BY = 1720, DOOR = 800, STOVE = 2290, PUD = 2120;
const TOWEL = { shades: false, body: '#f4f2ec', body2: '#dcd8cf', pants: '#f4f2ec' };
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); rbox(-90, -170, 180, 40, 16, '#c9ced6', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore(); }
function star(px, py, r, col = '#ffd23f') { const pts = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; pts.push([px + Math.cos(a) * rr, py + Math.sin(a) * rr]); } poly(pts, col, 5); }
function bucket(px, py, s, tipped = false) { x.save(); x.translate(px, py); x.scale(s, s); if (tipped) x.rotate(-1.4);
  if (!tipped) { rbox(-22, -260, 44, 120, 14, '#2f6b3a', 6); rbox(-26, -290, 52, 40, 10, '#e2b649', 6); }   // champagne bottle neck
  poly([[-110, -170], [110, -170], [85, 0], [-85, 0]], '#c9ced6', 8); ell(0, -170, 110, 26, tipped ? '#5a5f6b' : '#e4e8ee', 7);
  x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 8; x.beginPath(); x.moveTo(-60, -140); x.lineTo(-48, -20); x.stroke();
  [-1, 1].forEach(d => ell(d * 112, -120, 18, 26, '#9aa4b2', 5)); x.restore(); }
function stove(t) { const sx = STOVE; rbox(sx - 150, 1560, 300, 340, 20, '#4a4f5a', 9); rbox(sx - 110, 1700, 220, 140, 16, '#2a2c33', 7);
  const g = 0.6 + 0.4 * Math.sin(t * 7); x.fillStyle = `rgba(255,${120 + 60 * g},40,.9)`; x.fillRect(sx - 95, 1720, 190, 100);
  [[-90, 1540], [-30, 1525], [30, 1530], [90, 1545], [-60, 1500], [10, 1495], [70, 1505]].forEach(([dx, dy]) => ell(sx + dx, dy, 44, 32, '#8a8f99', 6));
  for (let i = 0; i < 4; i++) { const k = ((t * 0.5 + i * 0.25) % 1), sy = 1450 - k * 700; x.save(); x.globalAlpha = 0.55 * (1 - k); ell(sx - 60 + i * 40 + Math.sin(t * 2 + i) * 40, sy, 70 + k * 80, 50 + k * 50, '#ffffff', 0); x.restore(); }
  rbox(sx - 210, 1880, 420, 30, 10, '#c98a4a', 5); }
function set(t, puddle) {
  // corridor: light tiles, fridge, towels, plant
  x.fillStyle = '#f3efe6'; x.fillRect(-1600, -800, DOOR + 1600, 2700); x.strokeStyle = 'rgba(120,110,90,.25)'; x.lineWidth = 4;
  for (let yy = -800; yy < GY; yy += 110) { x.beginPath(); x.moveTo(-1600, yy); x.lineTo(DOOR, yy); x.stroke(); } for (let xx = -1600; xx < DOOR; xx += 110) { x.beginPath(); x.moveTo(xx, -800); x.lineTo(xx, GY); x.stroke(); }
  rbox(-200, 1080, 300, 820, 20, '#e8ecf2', 9); rbox(-170, 1120, 240, 520, 12, '#bfe3ff', 6); [1200, 1360, 1520].forEach(sy => { x.fillStyle = OL; x.fillRect(-170, sy + 90, 240, 8); [-120, -50, 20].forEach(cx => can(cx, sy + 40, 0.28)); });
  txt('MINI-BAR', -50, 1740, 50, OL, { stroke: false });
  rbox(180, 1000, 360, 40, 16, '#b07a50', 7); [[230, '#f4a7c0'], [330, '#bfe3ff'], [430, '#f5d76e']].forEach(([tx, c]) => rbox(tx - 40, 1030, 80, 260, 16, c, 6));
  rbox(260, 560, 360, 120, 18, '#2f5fb3', 8); txt('SPA DU BARON', 440, 624, 64, '#fff', { stroke: false });
  rbox(620, 1700, 120, 200, 30, '#c98a4a', 7); [[-40, -60], [0, -100], [40, -60]].forEach(([dx, dy]) => ell(680 + dx, 1680 + dy, 50, 80, '#5fa24e', 6));
  // sauna cabin: warm wood planks
  x.fillStyle = '#e8b47a'; x.fillRect(DOOR, -800, 3000, 2700); x.strokeStyle = 'rgba(140,80,30,.35)'; x.lineWidth = 6; for (let xx = DOOR; xx < 3800; xx += 70) { x.beginPath(); x.moveTo(xx, -800); x.lineTo(xx, GY); x.stroke(); }
  x.fillStyle = 'rgba(255,220,150,.25)'; x.fillRect(DOOR, -800, 3000, 1200);
  [[1300, 760], [2000, 760]].forEach(([lx, ly]) => { rbox(lx - 70, ly - 50, 140, 100, 30, '#fff3c0', 7); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(lx, ly, 10, lx, ly, 380); g.addColorStop(0, 'rgba(255,220,140,.5)'); g.addColorStop(1, 'rgba(255,220,140,0)'); x.fillStyle = g; x.fillRect(lx - 400, ly - 400, 800, 800); x.restore(); });
  rbox(2560, 980, 90, 300, 40, '#f4f2ec', 7); rbox(2585, 1060, 40, 190, 20, '#d6332b', 0); txt('90°', 2605, 1320, 60, OL, { stroke: false });   // thermometer
  rbox(1050, 1020, 280, 220, 14, '#b07a50', 7); rbox(1075, 1045, 230, 170, 8, '#ffd9a8', 0); x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(1090, 1190); x.lineTo(1160, 1100); x.lineTo(1220, 1170); x.lineTo(1290, 1080); x.stroke();   // framed picture
  // benches: upper (back) then floor
  rbox(DOOR + 60, 1560, 2400, 60, 10, '#c98a4a', 7); rbox(DOOR + 60, 1620, 2400, 140, 0, '#b8773d', 6);
  x.fillStyle = '#d9a46a'; x.fillRect(-1600, GY, 5400, 2000); x.strokeStyle = 'rgba(120,70,30,.35)'; x.lineWidth = 5; for (let yy = GY + 60; yy < 3800; yy += 90) { x.beginPath(); x.moveTo(-1600, yy); x.lineTo(3800, yy); x.stroke(); }
  x.strokeStyle = OL; x.lineWidth = 9; x.beginPath(); x.moveTo(-1600, GY); x.lineTo(3800, GY); x.stroke();
  stove(t);
  if (puddle) { ell(PUD, GY + 30, 150, 34, 'rgba(140,200,255,.85)', 5); x.fillStyle = 'rgba(255,255,255,.7)'; x.beginPath(); x.ellipse(PUD - 50, GY + 22, 40, 8, -0.1, 0, 7); x.fill(); }
  [1150, 1450].forEach(tx => { rbox(tx, 1530, 160, 40, 16, '#f4f2ec', 5); }); }
function glassDoor(open) { x.fillStyle = '#7a4a26'; x.fillRect(DOOR - 30, -800, 60, 2700); x.strokeStyle = OL; x.lineWidth = 8; x.strokeRect(DOOR - 30, -800, 60, 2700);
  rbox(DOOR + 10, 960, 40, 940, 8, '#7a4a26', 6);   // frame post
  x.save(); x.translate(DOOR + 30, 0); x.scale(open ? 0.25 : 1, 1); rbox(0, 1000, 300, 900, 12, 'rgba(190,230,255,.45)', 8); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 10; x.beginPath(); x.moveTo(60, 1100); x.lineTo(160, 1000 + 20); x.stroke(); rbox(250, 1400, 24, 140, 10, '#c9ced6', 5); x.restore(); }
function bumpStars(px, py, s, t) { const hy = py - 630 * s; ell(px + 25, hy - 95 * s / 0.8, 34, 28, '#f29c9c', 6);
  for (let i = 0; i < 3; i++) { const a = t * 4 + i * 2.09; star(px + Math.cos(a) * 140, hy - 120 + Math.sin(a) * 30, 30); } }
function draw(t) {
  const id = curId(t), tCan = WF('s1', /Ciao/i), tEnt = WF('s1b', /entre/i), tSeau = WF('s1b', /seau/i), tBam = WF('s2', /BAM/i), tBos = WF('s2', /bosse/i),
    tAuc = WF('s3', /aucune/i), tFla = WF('s4', /flaque/i), tPoe = WF('s4', /poêle/i), tSour = WF('s5', /sourit/i), tCuis5 = WF('s5', /cuisinier/i);
  const K = [[0, 0, BX + 130, 1330, 1.6], [B.ff.end - 0.1, 1.2, 1250, 1350, 0.5], [S('s1') + 0.5, 1.8, BX, 1350, 1.2], [S('s1b'), 1.2, DOOR - 20, 1450, 1.25], [tSeau, 2.2, 1200, 1450, 1.0],
    [S('s2') + 0.2, 1.0, 1350, 1400, 0.95], [tBam - 0.1, 0.35, BX, 1350, 1.55], [S('s3'), 1.3, 1350, 1450, 1.0], [S('s3b'), 1.0, 1270, 1380, 1.6],
    [S('s4'), 1.5, PUD + 20, 1660, 1.45], [S('s5'), 1.2, 2010, 1450, 1.45], [tSour - 0.1, 0.6, 2010, 1400, 1.9], [S('q'), 1.4, BX + 130, 1330, 1.6]];
  camPath(t, K, t > tBam && t < tBam + 0.3 ? 12 : 0);
  const dazed = id === 'ff' || t >= tBam, after3 = t >= S('s3') - 0.15 || id === 'ff', puddle = t >= S('s3') - 0.15 || id === 'ff';
  set(t, puddle);
  // the Baron on the upper bench (feet hidden by the lower bench front)
  cast('boss', BX, BY, 0.8, t, { ...TOWEL, mood: dazed ? (t < tBam + 0.8 && id !== 'ff' ? 'shock' : 'worried') : 'smile', look: dazed ? 0 : -1, blink: !dazed && t > 0.6, armUp: !dazed && id === 's1' });
  if (!dazed && id === 's1') can(BX + 125, BY - 790 * 0.8 + 40, 0.3); else can(BX + 260, 1520, 0.26);
  if (dazed) bumpStars(BX, BY, 0.8, t);
  rbox(DOOR + 60, 1760, 2400, 50, 10, '#c98a4a', 7); rbox(DOOR + 60, 1810, 2400, 90, 0, '#a86a32', 6);
  // the cook: walks in on s1b, then stays; searched (arms up) from s3
  const cookX = id === 'ff' || after3 ? 1290 : t < tEnt ? 380 : lerp(380, 1290, seg(t, tEnt, tEnt + 2.6)), walking = !after3 && t > tEnt && t < tEnt + 2.6;
  glassDoor(cookX > 560 && cookX < 1060);
  const cookMood = id === 's3b' ? 'smile' : id === 's5' && t >= tCuis5 ? 'shock' : after3 ? 'worried' : 'neutral';
  cast('cook', cookX, GY, 0.8, t, { mood: cookMood, look: after3 ? 1 : 1, armsUp: id === 's3', walk: walking ? t * 3 : 0 });
  if (!after3) bucket(cookX + 130, GY - 300, 0.55); else bucket(1500, GY, 0.6);
  // 47 + guards: in the corridor first, inside from s3
  if (!after3) { cast('guard', 120, GY, 0.78, t, { mood: 'neutral', look: 1 }); p47(520, GY, 0.8, t, { blink: t > 0.6, mood: 'neutral', look: 1 }); }
  else { cast('guard', 1060, GY, 0.78, t, { mood: id === 's3' ? 'angry' : 'neutral', look: 1, armUp: id === 's3' });
    const p = seg(t, S('s4') + 0.2, S('s4') + 1.8), gx = id === 'ff' ? 1990 : id === 's3' || id === 's3b' ? 1540 : lerp(1540, 1990, p);
    p47(gx, GY, 0.8, t, { blink: t > 0.6, mood: id === 's5' && t >= tSour ? 'smug' : id === 's4' || id === 's5' ? 'neutral' : 'worried', look: id === 's4' || id === 's5' ? 1 : -1, walk: p > 0 && p < 1 ? t * 3 : 0 }); }
  resetCam();
  hookCard(t, [['ASSOMMÉ, PIÈCE FERMÉE…', 86], ["L'ARME A DISPARU", 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE SAUNA DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1b' && t >= tSeau) polaroid(600, 640, 440, 440, P(t, tSeau, 0.3), (w, h) => { x.fillStyle = '#e8b47a'; x.fillRect(0, 0, w, h); bucket(w / 2, h - 30, 1.0); }, 'LE SEAU', -0.04);
  if (id === 's2' && t >= tBam) onoma('BAM !', 560, 520, P(t, tBam, 0.15), 190);
  if (id === 's3' && t >= tAuc) polaroid(560, 640, 560, 420, P(t, tAuc, 0.3), (w, h) => { x.fillStyle = '#f3efe6'; x.fillRect(0, 0, w, h); bucket(w * 0.32, h * 0.75, 0.75, true);
    [[w * 0.68, h * 0.55], [w * 0.86, h * 0.55]].forEach(([hx, hy]) => { rbox(hx - 45, hy - 60, 90, 130, 36, SKIN, 6); }); txt('VIDE', w * 0.32, h * 0.2, 60, C.red, { stroke: false }); txt('RIEN', w * 0.77, h * 0.2, 60, C.red, { stroke: false }); }, 'LA FOUILLE', 0.04);
  if (id === 's3b') speech('BIEN FRAIS ! 🍾', 560, 560, P(t, S('s3b') + 0.3, 0.25), 58);
  if (id === 's4' && t >= tFla) polaroid(560, 620, 520, 440, P(t, tFla, 0.3), (w, h) => { x.fillStyle = '#e8b47a'; x.fillRect(0, 0, w, h); x.fillStyle = '#d9a46a'; x.fillRect(0, h * 0.62, w, h);
    ell(w * 0.42, h * 0.78, 170, 40, 'rgba(140,200,255,.9)', 5); rbox(w * 0.72, h * 0.25, 130, 200, 14, '#4a4f5a', 7); x.fillStyle = '#ff9a3a'; x.fillRect(w * 0.75, h * 0.42, 90, 60); }, 'LA FLAQUE', -0.04);
  if (id === 's4' && t >= tPoe) pill('🔥 90 °C', 540, 1020, P(t, tPoe, 0.25), C.red);
  endCards(t, [['AVEC QUOI ?', 96, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
