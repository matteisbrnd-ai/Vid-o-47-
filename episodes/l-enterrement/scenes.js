// L'enterrement — « Galagade » style: ONE rich, busy set per place (cemetery, game room), slow zoom in / de-zoom inside it,
// clues shown as polaroid cards over the scene instead of cuts. Sets: cemetery 0..2160 · game room 2160..3240 (y 0..2800, ground ≈ 2000).
window.CTA = 'TAGUE LE PLUS PSYCHO DE TES POTES';
const MAX = { hairCol: '#2a1d14', body: '#26272d', body2: '#1c1d22', pants: '#1c1d22' }, GIRL = { hairCol: '#1f1a18', body: '#7a4aa8', body2: '#5c3a80' };
const MOURN = { body: '#34353c', body2: '#26272d', pants: '#26272d' }, GY = 2000;
function heart(px, py, s, c = '#e04a5a') { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(0, 30); x.bezierCurveTo(-90, -40, -40, -110, 0, -60); x.bezierCurveTo(40, -110, 90, -40, 0, 30); fs(c, 6); x.restore(); }
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); rbox(-90, -170, 180, 40, 16, '#c9ced6', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore(); }
function tree(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-30, -300, 60, 300, 10, '#7a5232', 6); [[0, -420, 170], [-110, -330, 120], [110, -330, 120]].forEach(([a, b, r]) => ell(a, b, r, r * 0.9, '#5fa24e', 7)); x.restore(); }
function cemeterySet(t, tPart, love, sad, girlGone) {
  x.fillStyle = vg(-1500, 1600, '#6fc0ff', '#e3f4ff'); x.fillRect(0, -1500, 2160, 3200); ell(1800, 380, 110, 110, '#fff3a0', 0);
  [[200, 1500, 420, '#cfd9c8'], [1500, 1450, 520, '#c6d2bf']].forEach(([hx, hy, r, c]) => ell(hx, hy + 200, r * 1.6, r * 0.6, c, 0));
  rbox(820, 980, 520, 640, 10, '#e8dcc4', 8); poly([[800, 990], [1080, 760], [1360, 990]], '#b05a4a', 8); rbox(1040, 560, 80, 260, 6, '#e8dcc4', 7); x.fillStyle = OL; x.fillRect(1074, 470, 12, 110); x.fillRect(1050, 500, 60, 12);   // chapel
  rbox(1020, 1420, 120, 200, 50, '#7a5232', 6); [[900, 1150], [1180, 1150]].forEach(([wx, wy]) => rbox(wx, wy, 80, 120, 40, '#bfe3ff', 5));
  x.fillStyle = '#b9b2a2'; x.fillRect(0, 1640, 2160, 70); x.strokeStyle = '#9a9384'; x.lineWidth = 4; for (let i = 0; i < 40; i++) { x.strokeRect(i * 60, 1640, 60, 35); x.strokeRect(i * 60 + 30, 1675, 60, 35); }      // stone wall
  tree(160, 1700, 1.1); tree(1950, 1700, 1.25);
  x.fillStyle = '#7cc46a'; x.fillRect(0, 1710, 2160, 3000); x.fillStyle = '#6ab45a'; for (let i = 0; i < 60; i++) x.fillRect((i * 97) % 2160, 1740 + (i * 53) % 1000, 40, 10);
  [[120, 1830], [420, 1800], [1700, 1810], [2040, 1840]].forEach(([gx, gy]) => { rbox(gx - 60, gy - 170, 120, 190, 55, '#c3c7cf', 7); x.fillStyle = '#9a9ea6'; x.fillRect(gx - 7, gy - 145, 14, 80); x.fillRect(gx - 30, gy - 125, 60, 14); });
  rbox(820, 1920, 520, 160, 20, '#8a5a3a', 8); [880, 980, 1080, 1180, 1280].forEach((fx, i) => ell(fx, 1915, 34, 34, ['#e04a5a', '#f4f2ec', '#f5d76e', '#f4a7c0', '#f4f2ec'][i], 5));   // coffin + flowers
  rbox(1000, 1610, 160, 230, 10, '#a8acb4', 7); txt('MAMIE', 1080, 1700, 40, OL, { stroke: false });
  cast('old', 330, GY + 60, 0.75, t, { ...MOURN, mood: 'worried', look: 1 }); cast('maid', 1640, GY + 60, 0.75, t, { ...MOURN, mood: 'worried', look: -1 });
  cast('gardener', 2020, GY + 80, 0.72, t, { ...MOURN, mood: 'worried', look: -1 }); cast('boss', 1830, GY + 60, 0.72, t, { mood: 'neutral', look: -1 });
  cast('inspector', 620, GY + 60, 0.8, t, { ...MAX, mood: love ? 'smile' : 'worried', look: 1, armUp: sad });
  if (love) [[-120, 0], [110, 0.7]].forEach(([d, o]) => heart(620 + d, 1080 - ((t * 120 + o * 200) % 260), 0.8));
  if (!girlGone) { const gx = t < tPart ? 1330 : lerp(1330, 2400, seg(t, tPart, tPart + 2.4)); cast('woman', gx, GY + 60, 0.8, t, { ...GIRL, mood: 'neutral', look: t < tPart ? -1 : 1, walk: t >= tPart ? t * 3 : 0 }); }
  can(1420, 1880, 0.45); }
function gameSet(t, mood) { x.save(); x.translate(0, 500); room('#ffd9a8', '#f3c48e', '#b07a50'); rbox(140, 520, 800, 480, 16, '#111', 9); const g = x.createLinearGradient(0, 540, 0, 980); g.addColorStop(0, '#ff9a4c'); g.addColorStop(1, '#c04cc8'); x.fillStyle = g; x.fillRect(165, 545, 750, 430);
  [[260, 900, 70, 260], [380, 860, 80, 300], [700, 880, 70, 280], [820, 840, 60, 320]].forEach(([bx, by, bw, bh]) => { x.fillStyle = '#4a2a5a'; x.fillRect(bx, by - bh + 75, bw, bh); }); txt('GTA 6', 540, 880, 110, '#fff', { stroke: true });
  rbox(60, 180, 180, 240, 8, '#f4f2ec', 6); rbox(80, 200, 140, 200, 4, '#9cc7e8', 0); rbox(840, 1160, 160, 220, 10, '#7a5232', 6); can(920, 1110, 0.35);       // poster, side table + can
  rbox(180, 1380, 720, 200, 60, '#3a6fc4', 8); cast('inspector', 540, 1720, 0.8, t, { ...MAX, mood, look: 0, blink: t > 0.6 }); rbox(440, 1330, 200, 80, 30, '#1b1b1f', 6); x.restore(); }
function clip(zx, w, fn) { x.save(); x.beginPath(); x.rect(zx, -2000, w, 6000); x.clip(); x.translate(zx, 0); fn(); x.restore(); }
function phoneCard(s3b, rien, t) { return (w, h) => { x.fillStyle = '#cfe8ff'; x.fillRect(0, 0, w, h); x.save(); x.translate(w / 2, h / 2); x.scale(w / 560, w / 560); rbox(-230, -420, 460, 840, 60, '#1b1b1f', 9); rbox(-200, -360, 400, 700, 20, '#f4f2ec', 0);
  txt(s3b ? 'RECHERCHE' : 'CONTACTS', 0, -290, 52, OL, { stroke: false });
  if (!s3b) { rbox(-170, -200, 340, 90, 14, '#e4ddcc', 4); txt('NOM : ???', 0, -152, 50, C.red, { stroke: false }); rbox(-170, -60, 340, 90, 14, '#e4ddcc', 4); txt('N° : ???', 0, -12, 50, C.red, { stroke: false }); }
  else { rbox(-170, -200, 340, 80, 40, '#e4ddcc', 4); txt('🔍 LA FILLE…', 0, -158, 44, OL, { stroke: false }); if (rien) txt('AUCUN RÉSULTAT', 0, 60, 54, C.red, { stroke: false });
    else { x.save(); x.beginPath(); x.rect(-200, -100, 400, 430); x.clip(); for (let i = 0; i < 12; i++) { const gy = -90 + i * 130 - ((t * 500) % 130); [-130, 0, 130].forEach((gx, j) => rbox(gx - 60, gy, 120, 120, 8, ['#f4a7c0', '#bfe3ff', '#f5d76e', '#c9e8b0'][(i + j) % 4], 3)); } x.restore(); } }
  x.restore(); }; }
function draw(t) {
  const id = curId(t);
  const tS = WF('ff', /sourit/i), tFil = WF('s1', /fille/i), tPart = WF('s2', /part/i), tCan = WF('s2', /canette/i), tMeurt = WF('s4', /meurt/i), tSour = WF('s4', /sourit/i), tRien = WF('s3b', /rien/i);
  const G = 2160 + 540, K = [[0, 0, G, 1950, 1.5], [tS - 0.15, 0.4, G, 1840, 2.6], [B.ff.end - 0.1, 1.2, 640, 1640, 2.2], [S('s1') + 0.6, 2.2, 1080, 1500, 0.55],
    [tFil - 0.2, 1.2, 1150, 1700, 1.5], [S('s2'), 0.8, 980, 1640, 1.7], [tPart, 1.6, 1200, 1600, 1.2], [S('s3'), 3, 900, 1600, 1.05], [S('s3b'), 3.5, 800, 1620, 1.25],
    [S('s4') - 0.2, 1.3, G, 2000, 1.3], [tSour, 1.5, G, 1840, 2.7], [S('q'), 1.4, G, 1950, 1.5]];
  camPath(t, K, (t > tS && t < tS + 0.25) ? 8 : 0);
  const inS4 = id === 's4' || id === 'q', maxMood = id === 'ff' ? (t >= tS ? 'smug' : 'neutral') : !inS4 ? 'neutral' : t < tMeurt ? 'neutral' : t < tSour ? 'shock' : 'smug';
  clip(0, 2160, () => cemeterySet(t, tPart, id === 's2' && t < tPart, id === 's2' && t >= tPart, id === 's3' || id === 's3b' || inS4));
  clip(2160, 1080, () => gameSet(t, maxMood));
  resetCam();
  hookCard(t, [['EN PLEINE PARTIE DE GTA 6,', 58], ['SON FRÈRE EST MORT…', 80], ['ET IL SOURIT', 110, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('ENTERREMENT DE MAMIE', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t < tPart) onoma('COUP DE FOUDRE', 540, 480, P(t, S('s2') + 0.3, 0.2), 110);
  if (id === 's2' && t >= tCan) polaroid(560, 700, 420, 460, P(t, tCan, 0.3), (w, h) => { x.fillStyle = '#c3c7cf'; x.fillRect(0, 0, w, h); can(w / 2, h / 2 + 20, 0.9); }, 'SA CANETTE', -0.05);
  if (id === 's3') polaroid(560, 760, 460, 640, P(t, S('s3') + 0.1, 0.3), phoneCard(false, false, t), 'SES CONTACTS', 0.04);
  if (id === 's3b') polaroid(560, 760, 460, 640, P(t, S('s3b') + 0.05, 0.3), phoneCard(true, t >= tRien, t), 'INSTA', -0.04);
  if (id === 's4' && t < tMeurt) banner('1 SEMAINE PLUS TARD', 540, 330, P(t, S('s4') + 0.3));
  if (id === 's4' && t >= tMeurt && t < tSour) polaroid(560, 720, 440, 520, P(t, tMeurt, 0.25), (w, h) => { x.fillStyle = '#e9e4da'; x.fillRect(0, 0, w, h); x.save(); x.translate(w / 2, h - 10); x.scale(0.55, 0.55); cast('inspector', 0, 0, 1, t, { mood: 'smile', hairCol: '#5a3a22', body: '#3a6fc4', body2: '#2c5aa8' }); x.restore();
    x.strokeStyle = OL; x.lineWidth = 26; x.beginPath(); x.moveTo(w - 90, 0); x.lineTo(w, 90); x.stroke(); }, 'SON FRÈRE', 0.05);
  endCards(t, [['POURQUOI IL SOURIT ?', 82, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
