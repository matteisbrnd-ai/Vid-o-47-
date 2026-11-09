// Le sauna (remake 2026-11-09: « danger immédiat » intro — 47 locked in the 90 °C sauna, red countdown from frame 0, loops at the end) — Galagade style: ONE warm wooden spa set, left → right: corridor (fridge, 47, guards) · glass door · sauna
// benches with the Baron · hot stove + puddle at the far right. The ice is never drawn (bucket always opaque).
window.CTA = 'TAGUE CELUI QUI AURAIT TROUVÉ'; window.LOOK = 'gala';
const GY = 1900, BX = 1350, BY = 1748, DOOR = 700, STOVE = 2440, PUD = 2210, X47 = 1960, XC = 1720, TH = 2330;
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
function thermo(t) { const lv = curId(t) === 'ff' ? lerp(0.55, 1, seg(t, 0, 2.5)) : 1; rbox(TH - 55, 1150, 110, 300, 50, '#f4f2ec', 8); ell(TH, 1420, 52, 52, '#d6332b', 7);
  rbox(TH - 22, 1400 - 230 * lv, 44, 230 * lv + 10, 20, '#d6332b', 0); [0, 1, 2, 3].forEach(i => { x.fillStyle = OL; x.fillRect(TH + 26, 1210 + i * 50, 22, 6); });
  rbox(TH - 95, 1060, 190, 70, 14, '#d6332b', 6); txt(Math.round(lerp(60, 90, lv === 1 ? 1 : (lv - 0.55) / 0.45)) + ' °C', TH, 1098, 54, '#fff', { stroke: false }); }
function set(t, puddle) {
  // corridor: light tiles, fridge, towels, plant
  x.fillStyle = '#f3efe6'; x.fillRect(-1600, -800, DOOR + 1600, 2700); x.strokeStyle = 'rgba(120,110,90,.25)'; x.lineWidth = 4;
  for (let yy = -800; yy < GY; yy += 110) { x.beginPath(); x.moveTo(-1600, yy); x.lineTo(DOOR, yy); x.stroke(); } for (let xx = -1600; xx < DOOR; xx += 110) { x.beginPath(); x.moveTo(xx, -800); x.lineTo(xx, GY); x.stroke(); }
  rbox(-180, 1080, 300, 820, 20, '#e8ecf2', 9); rbox(-150, 1120, 240, 520, 12, '#bfe3ff', 6); [1200, 1360, 1520].forEach(sy => { x.fillStyle = OL; x.fillRect(-150, sy + 90, 240, 8); [-100, -30, 40].forEach(cx => can(cx, sy + 40, 0.28)); });
  txt('MINI-BAR', -30, 1740, 50, OL, { stroke: false });
  rbox(160, 1100, 360, 40, 16, '#b07a50', 7); [[210, '#f4a7c0'], [310, '#bfe3ff'], [410, '#f5d76e']].forEach(([tx, c]) => rbox(tx - 40, 1130, 80, 260, 16, c, 6));
  rbox(220, 860, 360, 120, 18, '#2f5fb3', 8); txt('SPA DU BARON', 400, 924, 64, '#fff', { stroke: false });
  rbox(540, 1700, 110, 200, 30, '#c98a4a', 7); [[-40, -60], [0, -100], [40, -60]].forEach(([dx, dy]) => ell(595 + dx, 1680 + dy, 50, 80, '#5fa24e', 6));
  // sauna cabin: warm wood planks
  x.fillStyle = '#e8b47a'; x.fillRect(DOOR, -800, 3000, 2700); x.strokeStyle = 'rgba(140,80,30,.35)'; x.lineWidth = 6; for (let xx = DOOR; xx < 3800; xx += 70) { x.beginPath(); x.moveTo(xx, -800); x.lineTo(xx, GY); x.stroke(); }
  x.fillStyle = 'rgba(255,220,150,.25)'; x.fillRect(DOOR, -800, 3000, 1200);
  [[1150, 760], [1900, 760]].forEach(([lx, ly]) => { rbox(lx - 70, ly - 50, 140, 100, 30, '#fff3c0', 7); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(lx, ly, 10, lx, ly, 380); g.addColorStop(0, 'rgba(255,220,140,.5)'); g.addColorStop(1, 'rgba(255,220,140,0)'); x.fillStyle = g; x.fillRect(lx - 400, ly - 400, 800, 800); x.restore(); });
  thermo(t);
  rbox(1600, 1020, 280, 220, 14, '#b07a50', 7); rbox(1625, 1045, 230, 170, 8, '#ffd9a8', 0); x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.moveTo(1640, 1190); x.lineTo(1710, 1100); x.lineTo(1770, 1170); x.lineTo(1840, 1080); x.stroke();   // framed picture
  // benches: upper (back) then floor
  rbox(DOOR + 60, 1560, 2400, 60, 10, '#c98a4a', 7); rbox(DOOR + 60, 1620, 2400, 140, 0, '#b8773d', 6);
  x.fillStyle = '#d9a46a'; x.fillRect(-1600, GY, 5400, 2000); x.strokeStyle = 'rgba(120,70,30,.35)'; x.lineWidth = 5; for (let yy = GY + 60; yy < 3800; yy += 90) { x.beginPath(); x.moveTo(-1600, yy); x.lineTo(3800, yy); x.stroke(); }
  x.strokeStyle = OL; x.lineWidth = 9; x.beginPath(); x.moveTo(-1600, GY); x.lineTo(3800, GY); x.stroke();
  stove(t);
  if (puddle) { ell(PUD, GY + 30, 150, 34, 'rgba(140,200,255,.85)', 5); x.fillStyle = 'rgba(255,255,255,.7)'; x.beginPath(); x.ellipse(PUD - 50, GY + 22, 40, 8, -0.1, 0, 7); x.fill(); }
  [1000, 1650].forEach(tx => { rbox(tx, 1530, 160, 40, 16, '#f4f2ec', 5); }); }
function glassDoor(open) { x.fillStyle = '#7a4a26'; x.fillRect(DOOR - 30, -800, 60, 2700); x.strokeStyle = OL; x.lineWidth = 8; x.strokeRect(DOOR - 30, -800, 60, 2700);
  rbox(DOOR + 10, 960, 40, 940, 8, '#7a4a26', 6);   // frame post
  x.save(); x.translate(DOOR + 30, 0); x.scale(open ? 0.25 : 1, 1); rbox(0, 1000, 300, 900, 12, 'rgba(190,230,255,.45)', 8); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 10; x.beginPath(); x.moveTo(60, 1100); x.lineTo(160, 1000 + 20); x.stroke(); rbox(250, 1400, 24, 140, 10, '#c9ced6', 5); x.restore(); }
function bumpStars(px, py, s, t) { const hy = py - 630 * s; ell(px + 25, hy - 95 * s / 0.8, 34, 28, '#f29c9c', 6);
  for (let i = 0; i < 3; i++) { const a = t * 4 + i * 2.09; star(px + Math.cos(a) * 140, hy - 120 + Math.sin(a) * 30, 30); } }
function timer(t, n, px, py, s = 1) { if (n < 0) return; ev('tick', 'tm' + n); x.save(); resetCam(); x.translate(px, py); const k = s * (1 + 0.18 * Math.pow(1 - (t % 1), 4)); x.scale(k, k);
  ell(0, 0, 118, 118, '#fff', 10); x.strokeStyle = C.red; x.lineWidth = 18; x.beginPath(); x.arc(0, 0, 92, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (n / 10)); x.stroke();
  txt(String(n), 0, 10, 120, C.red, { stroke: false }); rrc(0, -132, 50, 26, 8, OL, 0); x.restore(); }
// the Baron SITTING on the upper bench: hips on the seat, knees under a towel, shins down to the lower bench
function baron(t, o) { cast('boss', BX, BY, 0.8, t, o); poly([[BX - 115, 1525], [BX + 115, 1525], [BX + 165, 1735], [BX - 165, 1735]], '#f4f2ec', 7);
  x.strokeStyle = 'rgba(0,0,0,.15)'; x.lineWidth = 5; [[-60, -95], [0, 0], [60, 95]].forEach(([a, b]) => { x.beginPath(); x.moveTo(BX + a, 1540); x.lineTo(BX + b, 1725); x.stroke(); }); [-70, 70].forEach(d => ell(BX + d, 1752, 52, 22, SKIN, 6)); }
function draw(t) {
  const id = curId(t), tCan = WF('s1', /Ciao/i), tEnt = WF('s1b', /entre/i), tSeau = WF('s1b', /seau/i), tBam = WF('s2', /BAM/i),
    tAuc = WF('s3', /aucune/i), tFla = WF('s4', /flaque/i), tPoe = WF('s4', /poêle/i), tEnf = WF('s5', /enferme/i);
  const LOCK = id === 'ff' || id === 's5' || id === 'q', HX = 2060, HY = 1330, HZ = 1.6;
  const K = [[0, 0, HX, HY, HZ], [B.ff.end - 0.1, 1.2, 420, 1330, 1.3], [S('s1') + 1.1, 1.6, BX, 1300, 1.6], [S('s1b') + 0.3, 2.4, 1560, 1360, 1.35],
    [S('s2') + 0.1, 0.9, 1480, 1330, 1.45], [tBam - 0.1, 0.35, BX + 40, 1260, 1.8], [S('s3') - 0.1, 1.2, 1830, 1330, 1.5], [S('s3b'), 1.0, XC + 40, 1300, 1.75],
    [S('s4') - 0.1, 1.5, PUD + 20, 1560, 1.6], [S('s5') - 0.1, 1.4, HX, HY, HZ], [S('q'), 1, HX, HY, HZ]];
  camPath(t, K, t > tBam && t < tBam + 0.3 ? 12 : 0);
  const dazed = t >= tBam && !LOCK, after3 = t >= S('s3') - 0.15 && !LOCK, puddle = t >= S('s3') - 0.15 || id === 'ff';
  set(t, puddle);
  if (!LOCK) { baron(t, { ...TOWEL, mood: dazed ? (t < tBam + 0.8 ? 'shock' : 'worried') : 'smile', look: dazed ? 0 : 1, blink: !dazed && t > 0.6, armUp: !dazed && id === 's1' });
    if (!dazed && id === 's1') can(BX + 125, BY - 790 * 0.8 + 40, 0.3); else can(BX + 250, 1520, 0.26);
    if (dazed) bumpStars(BX, BY - 20, 0.8, t); }
  else rbox(BX - 130, 1530, 260, 40, 16, '#f4f2ec', 5);   // empty bench, his towel left behind
  rbox(DOOR + 60, 1760, 2400, 50, 10, '#c98a4a', 7); rbox(DOOR + 60, 1810, 2400, 90, 0, '#a86a32', 6);
  // the cook: walks in on s1b, stops right of the Baron; searched (arms up) from s3; gone when 47 is locked in
  if (!LOCK) { const cookX = after3 ? XC : t < tEnt ? 300 : lerp(300, XC, seg(t, tEnt, tEnt + 2.6)), walking = !after3 && t > tEnt && t < tEnt + 2.6;
    glassDoor(cookX > 470 && cookX < 980);
    cast('cook', cookX, GY, 0.8, t, { mood: id === 's3b' ? 'smile' : after3 ? 'worried' : 'neutral', look: after3 ? 1 : 1, armsUp: id === 's3', walk: walking ? t * 3 : 0 });
    if (!after3) bucket(cookX + 130, GY - 300, 0.55); else bucket(1520, GY, 0.6); }
  else glassDoor(false);
  // 47: searches from s3; locked in (sweating) in ff / s5 / q
  if (LOCK || after3) p47(LOCK ? X47 : 2010, GY, 0.82, t, { blink: t > 0.6 && !(id === 'ff' && t < 0.4), sweat: LOCK || id === 's4', mood: LOCK ? 'worried' : id === 's4' ? 'neutral' : 'neutral', look: LOCK ? -1 : -1, armUp: id === 's3' });
  if (LOCK) for (let i = 0; i < 3; i++) { const k = ((t * 0.7 + i * 0.33) % 1); x.save(); x.globalAlpha = 0.4 * (1 - k); ell(X47 - 160 + i * 150, 1500 - k * 500, 90 + k * 60, 60 + k * 40, '#fff', 0); x.restore(); }
  resetCam();
  // countdown: 10 → 8 during the hook, then the real seconds left in s5 / q (ends on « 10 » feel: loops to frame 0)
  const nEnd = Math.ceil(TL.total - t);
  if (id === 'ff') timer(t, 10 - Math.floor(t), 880, 1580, 0.95);
  if ((id === 's5' && t >= tEnf) || id === 'q') timer(t, Math.min(10, nEnd), 880, 1580, 0.95);
  if (LOCK && id !== 'q') pill('🔒 PORTE BLOQUÉE', 300, 1580, 1, C.red);
  hookCard(t, [['ENFERMÉ À 90 °C…', 96, C.red], ["10 SECONDES POUR TROUVER L'ARME", 68]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE SAUNA DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1b' && t >= tSeau) polaroid(560, 470, 380, 340, P(t, tSeau, 0.3), (w, h) => { x.fillStyle = '#e8b47a'; x.fillRect(0, 0, w, h); bucket(w / 2, h - 20, 0.8); }, 'LE SEAU', -0.04);
  if (id === 's2' && t >= tBam) onoma('BAM !', 560, 470, P(t, tBam, 0.15), 190);
  if (id === 's3' && t >= tAuc) polaroid(540, 450, 520, 330, P(t, tAuc, 0.3), (w, h) => { x.fillStyle = '#f3efe6'; x.fillRect(0, 0, w, h); bucket(w * 0.3, h * 0.82, 0.6, true);
    [[w * 0.66, h * 0.62], [w * 0.86, h * 0.62]].forEach(([hx, hy]) => { rbox(hx - 40, hy - 55, 80, 115, 32, SKIN, 6); }); txt('VIDE', w * 0.3, h * 0.18, 56, C.red, { stroke: false }); txt('RIEN', w * 0.76, h * 0.18, 56, C.red, { stroke: false }); }, 'LA FOUILLE', 0.04);
  if (id === 's3b') speech('BIEN FRAIS ! 🍾', 540, 520, P(t, S('s3b') + 0.3, 0.25), 58);
  if (id === 's4' && t >= tFla) polaroid(540, 440, 480, 320, P(t, tFla, 0.3), (w, h) => { x.fillStyle = '#e8b47a'; x.fillRect(0, 0, w, h); x.fillStyle = '#d9a46a'; x.fillRect(0, h * 0.62, w, h);
    ell(w * 0.4, h * 0.8, 150, 34, 'rgba(140,200,255,.9)', 5); rbox(w * 0.72, h * 0.22, 110, 170, 14, '#4a4f5a', 7); x.fillStyle = '#ff9a3a'; x.fillRect(w * 0.75, h * 0.4, 70, 50); }, 'LA FLAQUE', -0.04);
  if (id === 's4' && t >= tPoe) pill('🔥 90 °C', 540, 1060, P(t, tPoe, 0.25), C.red);
  endCards(t, [['AVEC QUOI ?', 96, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
