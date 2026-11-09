// Les lingots — Galagade style: ONE warm library set (bookshelves + notary desk at left → table with the 17 bars → window + door at right).
// 47 is only in the room for the hook, s4, s5 and q. Never show an 18th bar on the table nor the split (= the answer).
window.CTA = 'TAGUE LE MATHEUX DE TA BANDE'; window.LOOK = 'gala';
const GY = 1900, TX0 = 930, TX1 = 1820, TY = 1580;
const N1 = { hat: 'hair', hairCol: '#2a1d14', body: '#2f6b45', body2: '#25573a', pants: '#2a2d33', num: false, collar: true };        // l'aîné
const N2 = { hat: 'hair', hairCol: '#c98a3a', body: '#b5486a', body2: '#963a57', pants: '#3a3d44', num: false, collar: true };        // le 2e
const N3 = { hat: 'cap', hatCol: '#e0a020', hatCol2: '#b8801a', body: '#3a6fc4', body2: '#2c5aa8', pants: '#2a2d33', num: false };    // le petit
function bar(cx, by, s = 1) { x.save(); x.translate(cx, by); x.scale(s, s); poly([[-55, 0], [55, 0], [40, -48], [-40, -48]], '#f2c03a', 6);
  x.fillStyle = 'rgba(255,255,255,.55)'; x.fillRect(-30, -40, 50, 8); x.fillStyle = 'rgba(160,100,0,.35)'; x.fillRect(-52, -10, 104, 8); x.restore(); }
function pile(cx, by, t) { let n = 0; [6, 5, 4, 2].forEach((k, r) => { for (let i = 0; i < k; i++) { bar(cx + (i - (k - 1) / 2) * 112, by - r * 50); n++; } });
  x.save(); x.globalCompositeOperation = 'lighter'; [[-200, -120], [120, -170], [260, -60]].forEach(([sx, sy], i) => { const a = 0.5 + 0.5 * Math.sin(t * 5 + i * 2); x.fillStyle = `rgba(255,240,180,${0.6 * a})`; poly([[cx + sx, by + sy - 24], [cx + sx + 7, by + sy], [cx + sx, by + sy + 24], [cx + sx - 7, by + sy]], `rgba(255,240,180,${0.7 * a})`, 0); }); x.restore(); }
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); rbox(-90, -170, 180, 40, 16, '#c9ced6', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore(); }
function sack(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(-90, 0); x.quadraticCurveTo(-120, -150, -40, -190); x.lineTo(40, -190); x.quadraticCurveTo(120, -150, 90, 0); x.closePath(); fs('#a87a4a', 7);
  rrc(0, -195, 70, 26, 10, '#7a5232', 5); x.restore(); }
function shelf(x0, y0, w, h) { rbox(x0, y0, w, h, 6, '#7a4a2a', 8); const cols = ['#c0392b', '#2f6b45', '#2c4fa8', '#e0a020', '#7a3a8a', '#d8cbb0'];
  for (let r = 0; r < 5; r++) { const yy = y0 + 30 + r * (h - 40) / 5, sh = (h - 40) / 5 - 20; x.fillStyle = '#5a361f'; x.fillRect(x0 + 14, yy + sh, w - 28, 14);
    for (let k = 0; k * 34 < w - 50; k++) { const bh = sh - (k * 7 + r * 3) % 30; rbox(x0 + 22 + k * 34, yy + sh - bh, 28, bh, 3, cols[(k * 3 + r) % 6], 3); } } }
function room(t) {
  x.fillStyle = vg(-900, 1600, '#ffe6bf', '#f6cf98'); x.fillRect(-1500, -1500, 6000, 3200);
  x.fillStyle = 'rgba(200,140,80,.18)'; for (let i = -40; i < 120; i++) x.fillRect(i * 60, -1500, 22, 3100);           // striped wallpaper
  bricks(-1500, 1380, 6000, 220, '#c98a5a', 'rgba(90,50,30,.35)', 120, 55); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(-1500, 1380); x.lineTo(4500, 1380); x.stroke();
  shelf(-120, 520, 420, 1080); shelf(320, 520, 420, 1080);
  rbox(1135, 520, 480, 560, 10, '#c9962f', 10); rbox(1170, 555, 410, 490, 6, '#7aa0c8', 6);                           // portrait of the Baron
  x.save(); x.beginPath(); x.rect(1170, 555, 410, 490); x.clip(); cast('boss', 1375, 1350, 0.7, t, { mood: 'smug', look: 0, blink: false }); x.restore(); rbox(1255, 1080, 240, 60, 8, '#c9962f', 6); txt('LE BARON', 1375, 1112, 40, OL, { stroke: false });
  x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(1375, -300); x.lineTo(1375, 330); x.stroke(); ell(1375, 370, 200, 50, '#e0a020', 8); [-150, -50, 50, 150].forEach(d => { ell(1375 + d, 320, 16, 28, '#fff3a0', 5); });   // chandelier
  rbox(1950, 600, 360, 520, 20, '#fff', 10); rbox(1975, 625, 310, 470, 10, '#9fd6ff', 6); x.fillStyle = '#7cc46a'; x.fillRect(1975, 960, 310, 135); ell(2060, 950, 70, 60, '#5fa24e', 5); ell(2200, 920, 90, 80, '#5fa24e', 5);
  x.strokeStyle = '#fff'; x.lineWidth = 14; x.beginPath(); x.moveTo(2130, 625); x.lineTo(2130, 1095); x.moveTo(1975, 860); x.lineTo(2285, 860); x.stroke();
  rbox(1900, 560, 120, 620, 30, '#c0392b', 7); rbox(2240, 560, 120, 620, 30, '#c0392b', 7);                                 // curtains
  rbox(2480, 860, 380, 740, 12, '#7a4a2a', 10); rbox(2520, 900, 300, 300, 8, '#8a5a3a', 5); rbox(2520, 1250, 300, 300, 8, '#8a5a3a', 5); ell(2800, 1240, 18, 18, '#e0a020', 5);   // door
  ell(2200, 1560, 70, 30, '#7a4a2a', 6); rbox(2160, 1400, 80, 160, 12, '#c98a5a', 6); ell(2200, 1380, 120, 90, '#4f9e48', 7);      // plant
  x.fillStyle = '#b07a50'; x.fillRect(-1500, 1600, 6000, 1200); x.strokeStyle = 'rgba(80,45,20,.35)'; x.lineWidth = 5; for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(-1500, 1640 + i * 90); x.lineTo(4500, 1640 + i * 90); x.stroke(); }
  rbox(780, 1780, 1180, 240, 100, '#a8323a', 7); }                                                                          // rug
function desk(t, id) { cast('director', 420, GY - 120, 0.72, t, { mood: id === 's3' ? 'worried' : 'neutral', look: 1 });
  rbox(130, 1450, 600, 90, 10, '#8a5a3a', 8); rbox(160, 1540, 540, 300, 6, '#7a4a2a', 8); x.fillStyle = 'rgba(0,0,0,.15)'; x.fillRect(180, 1600, 500, 8);
  x.save(); x.translate(470, 1430); x.rotate(-0.08); rbox(-110, -60, 220, 120, 4, '#fbf3e4', 5); txt('TESTAMENT', 0, -28, 34, OL, { stroke: false }); x.fillStyle = '#b9b2a2'; for (let i = 0; i < 3; i++) x.fillRect(-80, -2 + i * 18, 160, 6); ell(70, 40, 20, 20, C.red, 4); x.restore();
  ell(240, 1420, 36, 22, '#e0a020', 5); x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(250, 1410); x.lineTo(300, 1330); x.stroke(); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['1/2 → L\'AÎNÉ', 54, OL], ['1/3 → LE 2E', 54, OL], ['1/9 → LE PETIT', 54, OL], ['INTERDIT', 60, C.red], ['DE COUPER', 60, C.red]].forEach(([s, sz, c], i) => txt(s, w / 2, 58 + i * 74, sz, c, { stroke: false })); }
function divs(t) { return (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['17 ÷ 2 = 8,5', /deux/i], ['17 ÷ 3 = 5,66…', /trois/i], ['17 ÷ 9 = 1,88…', /neuf/i]].forEach(([s, re], i) => { const tw = WF('s3', re);
  txt(s, w / 2, 80 + i * 110, 60, OL, { stroke: false }); const k = P(t, tw + 0.1, 0.25); x.strokeStyle = C.red; x.lineWidth = 10; x.lineCap = 'round'; x.beginPath(); x.moveTo(w * 0.12, 80 + i * 110); x.lineTo(w * 0.12 + (w * 0.76) * k, 80 + i * 110); x.stroke(); }); }; }
function draw(t) {
  const id = curId(t), tDix = WF('s1', /dix/i), tNev = WF('s1', /neveux/i), tBat = WF('s3', /battre/i), tRef = WF('s4', /réfléchit/i), tCh = WF('s4', /chacun/i);
  const K = [[0, 0, 1800, 1440, 1.6], [B.ff.end - 0.1, 1.2, 470, 1440, 1.15], [S('s1') + 0.5, 2.2, 1150, 1350, 0.6], [tDix - 0.1, 1.2, 1375, 1450, 1.15], [tNev, 1.4, 1375, 1420, 0.95],
    [S('s2'), 1.0, 1300, 1430, 1.05], [S('s2b'), 1.2, 1250, 1500, 1.3], [S('s3'), 2.5, 1375, 1440, 1.05], [tBat - 0.2, 0.9, 1375, 1380, 1.55],
    [S('s4') - 0.1, 1.3, 1800, 1440, 1.0], [tCh - 0.2, 1.4, 1500, 1420, 0.8], [S('s5'), 1.6, 2250, 1440, 1.1], [S('q'), 1.3, 1800, 1440, 1.6]];
  camPath(t, K, id === 's3' && t > tBat && t < tBat + 0.3 ? 8 : 0);
  room(t); desk(t, id);
  const fight = id === 's3' && t >= tBat, happy = (id === 's4' && t >= tCh) || id === 's5' || id === 'q';
  const nm = happy ? 'smile' : fight ? 'angry' : id === 's3' ? 'worried' : id === 'ff' ? 'shock' : id === 's1' ? 'smile' : 'neutral';
  const jig = fight ? Math.sin(t * 30) * 8 : 0;
  cast('inspector', 1110 + jig, GY - 130, 0.74, t, { ...N1, mood: nm, blink: t > 0.6, look: 1, armUp: fight });
  cast('inspector', 1390 - jig, GY - 130, 0.7, t, { ...N2, mood: nm, blink: t > 0.6, look: fight ? -1 : 0, armUp: fight });
  cast('inspector', 1660 + jig, GY - 150, 0.6, t, { ...N3, mood: nm, blink: t > 0.6, look: -1, armsUp: happy && id === 's4' });
  if (id === 's3' || id === 's2' || id === 's2b') can(1760, GY - 470, 0.32);
  rbox(TX0, TY, TX1 - TX0, 70, 12, '#8a5a3a', 8); [TX0 + 60, TX1 - 100].forEach(lx => rbox(lx, TY + 70, 40, GY - TY - 70, 8, '#7a4a2a', 7));     // table
  pile(1375, TY + 4, t);
  // 47: hook, then arrives (s4), leaves with his sack (s5), loops back for q
  let p4 = null, walk = 0, m4 = 'smug', look4 = -1, holdBar = false, hasSack = false;
  if (id === 'ff') { p4 = 1900; holdBar = true; }
  else if (id === 's4') { const k = seg(t, S('s4'), S('s4') + 1.6); p4 = lerp(2650, 1950, eIO(k)); walk = k < 1 ? t * 3 : 0; m4 = t < tCh ? (t >= tRef ? 'neutral' : 'smile') : 'smug'; look4 = -1; }
  else if (id === 's5') { const k = seg(t, S('s5') + 0.3, B.s5.next); p4 = lerp(1950, 2450, eIO(k)); walk = k > 0 && k < 1 ? t * 3 : 0; m4 = 'smile'; look4 = 1; hasSack = true; }
  else if (id === 'q') { p4 = 1900; m4 = 'smug'; hasSack = true; }
  if (p4 !== null) { p47(p4, GY + 60, 0.82, t, { mood: m4, look: look4, walk, blink: t > 0.6, armUp: holdBar });
    if (holdBar) bar(p4 + 175, GY + 60 - 520, 1.3);
    if (hasSack) sack(p4 + 130, GY - 20, 0.85); }
  resetCam();
  hookCard(t, [['17 LINGOTS IMPOSSIBLES…', 84], ['47 A RÉUSSI', 104, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE TESTAMENT', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tDix) numBadge(17, P(t, tDix, 0.3), 880, 560);
  if (id === 's2') { [[/moitié/i, '1/2', 'L\'AÎNÉ'], [/tiers/i, '1/3', 'LE 2E'], [/neuvième/i, '1/9', 'LE PETIT']].forEach(([re, f, n], i) => { const tw = WF('s2', re); if (t >= tw) pill(f + ' · ' + n, 540, 330 + i * 130, P(t, tw, 0.25), [C.green, '#b5486a', C.blue][i]); }); }
  if (id === 's2b') polaroid(560, 640, 540, 440, P(t, S('s2b') + 0.1, 0.3), rules, 'LES RÈGLES', 0.03);
  if (id === 's3' && t < tBat) polaroid(560, 620, 600, 380, P(t, S('s3') + 0.1, 0.3), divs(t), 'IMPOSSIBLE ?', -0.03);
  if (fight) onoma('BAGARRE !', 560, 480, P(t, tBat, 0.2), 150);
  if (id === 's4' && t >= tRef && t < tCh) { speech('🤔 …', 760, 520, P(t, tRef, 0.25), 80); countdown(t, tRef + 0.2, 3, 360); }
  if (id === 's4' && t >= tCh) stamp('PARTAGE PARFAIT', P(t, tCh, 0.3), 430, C.green);
  endCards(t, [['COMMENT IL A FAIT ?', 84, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
