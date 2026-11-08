// L'enterrement — « grande toile » version: one bright canvas of 4 panels, the camera glides between them (no cuts).
// Panels: A game room (0,0) · B cemetery left (1080,0) · B2 cemetery right (2160,0) · C phone (0,1920) · D asylum cell (1080,1920, 2160 wide).
window.CTA = 'TAGUE LE PLUS PSYCHO DE TES POTES';
const MAX = { hairCol: '#2a1d14', body: '#26272d', body2: '#1c1d22', pants: '#1c1d22' }, GIRL = { hairCol: '#1f1a18', body: '#7a4aa8', body2: '#5c3a80' };
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); rbox(-90, -170, 180, 40, 16, '#c9ced6', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore(); }
function heart(px, py, s, c = '#e04a5a') { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(0, 30); x.bezierCurveTo(-90, -40, -40, -110, 0, -60); x.bezierCurveTo(40, -110, 90, -40, 0, 30); fs(c, 6); x.restore(); }
function gameRoom(t) { room('#ffd9a8', '#f3c48e', '#b07a50'); rbox(140, 520, 800, 480, 16, '#111', 9); const g = x.createLinearGradient(0, 540, 0, 980); g.addColorStop(0, '#ff9a4c'); g.addColorStop(1, '#c04cc8'); x.fillStyle = g; x.fillRect(165, 545, 750, 430);
  [[260, 900, 70, 260], [380, 860, 80, 300], [700, 880, 70, 280], [820, 840, 60, 320]].forEach(([bx, by, bw, bh]) => { x.fillStyle = '#4a2a5a'; x.fillRect(bx, by - bh + 75, bw, bh); }); txt('GTA 6', 540, 880, 110, '#fff', { stroke: true });
  rbox(180, 1380, 720, 200, 60, '#3a6fc4', 8); }                                                  // sofa
function cemetery(t) { sky('#8fd0ff', '#dff3ff', 1400); x.fillStyle = '#7cc46a'; x.fillRect(-1200, 1300, 3500, 900); x.fillStyle = '#6ab45a'; for (let i = 0; i < 30; i++) x.fillRect((i * 97) % 1080, 1320 + (i * 53) % 500, 40, 10);
  [[-80, 1230], [200, 1180], [880, 1200], [1150, 1240]].forEach(([gx, gy]) => { rbox(gx - 70, gy - 200, 140, 220, 60, '#c3c7cf', 7); x.fillStyle = '#9a9ea6'; x.fillRect(gx - 8, gy - 170, 16, 90); x.fillRect(gx - 34, gy - 145, 68, 16); });
  ell(900, 260, 90, 90, '#fff3a0', 0); }
function phoneRoom(t, s3b, rien) { x.fillStyle = vg(0, 1920, '#cfe8ff', '#9cc7e8'); x.fillRect(0, 0, 1080, 1920); x.save(); x.translate(540, 980); x.rotate(-0.05);
  rbox(-230, -420, 460, 840, 60, '#1b1b1f', 9); rbox(-200, -360, 400, 700, 20, '#f4f2ec', 0); txt(s3b ? 'RECHERCHE' : 'CONTACTS', 0, -290, 52, OL, { stroke: false });
  if (!s3b) { rbox(-170, -200, 340, 90, 14, '#e4ddcc', 4); txt('NOM : ???', 0, -152, 50, C.red, { stroke: false }); rbox(-170, -60, 340, 90, 14, '#e4ddcc', 4); txt('N° : ???', 0, -12, 50, C.red, { stroke: false }); }
  else { rbox(-170, -200, 340, 80, 40, '#e4ddcc', 4); txt('🔍 LA FILLE…', 0, -158, 44, OL, { stroke: false });
    if (rien) txt('AUCUN RÉSULTAT', 0, 60, 54, C.red, { stroke: false }); else { x.save(); x.beginPath(); x.rect(-200, -100, 400, 430); x.clip(); for (let i = 0; i < 12; i++) { const gy = -90 + i * 130 - ((t * 500) % 130); [-130, 0, 130].forEach((gx, j) => rbox(gx - 60, gy, 120, 120, 8, ['#f4a7c0', '#bfe3ff', '#f5d76e', '#c9e8b0'][(i + j) % 4], 3)); } x.restore(); } }
  x.restore(); }
function asylum(t) { x.fillStyle = '#f7f4ec'; x.fillRect(0, 0, 2160, 1920); x.strokeStyle = '#e2dccd'; x.lineWidth = 6;
  for (let i = 0; i < 16; i++) for (let j = 0; j < 15; j++) { const cx = i * 150 + (j % 2) * 75, cy = j * 140; x.beginPath(); x.moveTo(cx, cy - 60); x.lineTo(cx + 70, cy); x.lineTo(cx, cy + 60); x.lineTo(cx - 70, cy); x.closePath(); x.stroke(); }
  txt("L'ASILE", 1080, 300, 120, C.red, { stroke: true }); p47(1080, 1720, 0.9, t, { mood: 'smug', body: '#f4f2ec', body2: '#dcd8cc', num: false, look: Math.sin(t) }); }
function draw(t) {
  const id = curId(t);
  const tS = WF('ff', /sourit/i), tFil = WF('s1', /fille/i), tPart = WF('s2', /part/i), tCan = WF('s2', /canette/i), tMeurt = WF('s4', /meurt/i), tSour = WF('s4', /sourit/i), tRien = WF('s3b', /rien/i);
  // story reads left → right on one strip: cemetery · girl & can · phone · game room (= hook image, so the end loops)
  const R = 3240, K = [[0, 0, R + 540, 1150, 1.45], [tS - 0.15, 0.35, R + 540, 1060, 2.6], [B.ff.end - 0.1, 1.2, 560, 1180, 1.4],
    [tFil - 0.2, 0.9, 1300, 1150, 1.7], [S('s2'), 0.7, 1040, 1180, 1.3], [tPart, 1.2, 1500, 1180, 1.3], [tCan - 0.1, 0.6, 1900, 1050, 2.3],
    [S('s3') - 0.2, 1.0, 2700, 980, 1.2], [S('s3b'), 3, 2700, 980, 1.35], [S('s4') - 0.2, 1.0, R + 540, 1150, 1.4], [tMeurt, 0.4, R + 540, 1060, 2.4], [tSour, 2, R + 540, 1060, 2.8],
    [S('q'), 1.2, R + 540, 1150, 1.45]];
  camPath(t, K, (t > tMeurt && t < tMeurt + 0.3) || (t > tS && t < tS + 0.25) ? 10 : 0);
  x.fillStyle = '#20222a'; x.fillRect(-3000, -3000, 12000, 9000);
  const inS4 = id === 's4' || id === 'q', maxMood = id === 'ff' ? (t >= tS ? 'smug' : 'neutral') : !inS4 ? 'neutral' : t < tMeurt ? 'neutral' : t < tSour ? 'shock' : 'smug';
  const love = id === 's2' && t < tPart, sad = id === 's2' && t >= tPart;
  panel(0, 0, 2160, 1920, () => { cemetery(t); x.save(); x.translate(1080, 0); cemetery(t); x.restore();
    rbox(160, 1360, 360, 140, 20, '#8a5a3a', 8); [220, 320, 420].forEach((fx, i) => ell(fx, 1350, 30, 30, ['#e04a5a', '#f4f2ec', '#f5d76e'][i], 5));
    cast('old', 300, 1720, 0.8, t, { mood: 'worried', look: 1 }); cast('inspector', 780, 1720, 0.8, t, { ...MAX, mood: love ? 'smile' : 'worried', look: 1, armUp: sad });
    if (love) [[-120, 0], [110, 0.7]].forEach(([d, o]) => heart(780 + d, 640 - ((t * 120 + o * 200) % 260), 0.8));
    can(1900, 1000, 0.9); const gx = t < tPart ? 1300 : lerp(1300, 2400, seg(t, tPart, tPart + 2.2)); cast('woman', gx, 1720, 0.8, t, { ...GIRL, mood: 'neutral', look: t < tPart ? -1 : 1, walk: t >= tPart ? t * 3 : 0 }); });
  panel(2160, 0, 1080, 1920, () => phoneRoom(t, id === 's3b', t >= tRien));
  panel(R, 0, 1080, 1920, () => { gameRoom(t); cast('inspector', 540, 1720, 0.8, t, { ...MAX, mood: maxMood, look: 0, blink: t > 0.6 }); rbox(440, 1330, 200, 80, 30, '#1b1b1f', 6); });
  resetCam();
  hookCard(t, [['EN PLEINE PARTIE DE GTA 6,', 58], ['SON FRÈRE EST MORT…', 80], ['ET IL SOURIT', 110, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tFil) banner('ENTERREMENT DE MAMIE', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t < tPart) onoma('COUP DE FOUDRE', 540, 480, P(t, S('s2') + 0.3, 0.2), 110);
  if (id === 's4' && t < tMeurt) banner('1 SEMAINE PLUS TARD', 540, 330, P(t, S('s4') + 0.3));
  endCards(t, [['POURQUOI IL SOURIT ?', 82, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
