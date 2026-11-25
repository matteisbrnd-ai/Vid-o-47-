// Histoire du matin — « Les 30 secondes du chauffeur » : le chauffeur attendait un gamin qui venait voir sa mère à l'hôpital ; filmé, licencié, puis réembauché.
window.LOOK = 'gala';
const GY = 1500, COF = '#6b3e22';
const SUIT = { hat: 'hair', hairCol: '#2a1d16', body: '#2c3e66', body2: '#22314f', pants: '#22314f', num: false, collar: true };
const LIV = { hat: 'cap', hatCol: '#2fa860', hatCol2: '#23874c', body: '#2fa860', body2: '#23874c', pants: '#3a3d44', num: false };
const MOM = { hat: 'hair', hairCol: '#ecebe6', glasses: true, body: '#b5486a', body2: '#963a57', pants: '#4a4a5a', num: false, collar: true };
function man(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...SUIT, ...o }); }
function liv(px, py, s, t, o = {}) { const st = o.stain || 0; toon(px, py, s, { t, blink: true, ...LIV, ...o }); if (st > 0) { x.save(); x.globalAlpha = st; ell(px - 20 * s, py - 380 * s, 70 * s, 60 * s, COF, 0); ell(px + 40 * s, py - 320 * s, 40 * s, 50 * s, COF, 0); ell(px - 60 * s, py - 300 * s, 20 * s, 34 * s, COF, 0); x.restore(); }
  if (o.knee) ell(px + 40 * s, py - 120 * s, 26 * s, 18 * s, '#c0392b', 3 * s); }
function mom(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...MOM, ...o }); ell(px, py - 772 * s, 58 * s, 46 * s, MOM.hairCol, 7 * s); }
function cube(px, py, s) { rbox(px - 130 * s, py - 260 * s, 260 * s, 260 * s, 18 * s, '#2fa860', 7 * s); rbox(px - 100 * s, py - 220 * s, 200 * s, 70 * s, 10 * s, '#ffffff', 4 * s); txt('LIVRAISON', px, py - 183 * s, 30 * s, '#23874c', { stroke: false }); }
function shoe(px, py, s, rot = 0) { x.save(); x.translate(px, py); x.rotate(rot); x.scale(s, s); x.beginPath(); x.moveTo(-90, 20); x.quadraticCurveTo(-80, -40, 10, -30); x.lineTo(90, -60); x.lineTo(95, 20); x.closePath(); fs('#d6332b', 6); rbox(70, 10, 20, 70, 6, '#a82820', 5); x.restore(); }
function bike(px, py, s, rot = 0) { x.save(); x.translate(px, py); x.rotate(rot); x.scale(s, s); [[-160], [160]].forEach(([d]) => { x.strokeStyle = OL; x.lineWidth = 14; x.beginPath(); x.arc(d, -90, 90, 0, 7); x.stroke(); x.strokeStyle = '#555'; x.lineWidth = 4; x.beginPath(); x.arc(d, -90, 70, 0, 7); x.stroke(); });
  x.strokeStyle = '#2fa860'; x.lineWidth = 16; x.beginPath(); x.moveTo(-160, -90); x.lineTo(-30, -200); x.lineTo(110, -200); x.lineTo(160, -90); x.moveTo(-30, -200); x.lineTo(20, -90); x.lineTo(110, -200); x.stroke(); x.restore(); }
function cup(px, py, s, rot = 0) { x.save(); x.translate(px, py); x.rotate(rot); x.scale(s, s); poly([[-40, -60], [40, -60], [30, 50], [-30, 50]], '#f4f2ec', 5); rbox(-44, -74, 88, 22, 6, '#3a3d44', 4); rbox(-34, -10, 68, 24, 4, '#c98a52', 0); x.restore(); }
function steam(px, py, t) { for (let i = 0; i < 3; i++) { const ph = (t * 0.8 + i / 3) % 1; x.save(); x.globalAlpha = 0.6 * (1 - ph); x.strokeStyle = '#fff'; x.lineWidth = 8; x.beginPath(); x.moveTo(px - 20 + i * 20, py); x.quadraticCurveTo(px - 40 + i * 20, py - 50 - ph * 60, px - 10 + i * 20, py - 100 - ph * 80); x.stroke(); x.restore(); } }
function terrace(t) { sky('#9fcbea', '#dceef8', GY - 300); x.fillStyle = '#a8a8b0'; x.fillRect(-1200, GY - 300, 3500, 1200); x.fillStyle = '#c4c4cc'; x.fillRect(-1200, GY - 300, 3500, 26);
  rbox(-100, 300, 1300, GY - 600, 0, '#e8d8bc', 8); for (let i = 0; i < 12; i++) rbox(-100 + i * 110, 300, 110, 140, 0, i % 2 ? '#d6332b' : '#f4f2ec', 0); txt('CAFÉ', 540, 520, 80, '#8a3a2a', { stroke: false }); rbox(120, 620, 400, 420, 8, '#bfe4ff', 7); rbox(640, 620, 320, 520, 8, '#bfe4ff', 7);
  [[160], [900]].forEach(([tx]) => { rbox(tx - 90, GY - 230, 180, 22, 8, '#3a3d44', 5); rbox(tx - 8, GY - 210, 16, 210, 4, '#3a3d44', 4); }); }
function stairs(t) { x.fillStyle = vg(0, GY, '#e8dcc4', '#d6c6a8'); x.fillRect(-200, -200, W + 400, H + 400); for (let i = 0; i < 9; i++) rbox(560 + i * 70, GY - 60 - i * 110, 900, 60, 4, '#b8a888', 5); x.fillStyle = '#c8b898'; x.fillRect(-200, GY, W + 400, 600); }
function homeEve(t) { room('#3a4466', '#2f3858', '#5a4a3a', GY); rbox(620, 360, 360, 420, 8, '#1a2448', 8); ell(860, 470, 40, 40, '#e9eef8', 0); rbox(80, GY - 380, 520, 260, 30, '#6a5a8a', 8); rbox(60, GY - 440, 120, 320, 30, '#6a5a8a', 8); }
function hospital(t) { room('#e6f0f2', '#d6e4e8', '#b8c8cc', GY); rbox(600, 380, 360, 300, 8, '#bfe4ff', 7); txt('+', 220, 480, 140, C.red, { stroke: false }); rbox(140, GY - 420, 760, 160, 20, '#f4f6f8', 7); rbox(140, GY - 300, 760, 300, 12, '#c8d4d8', 7);
  rbox(900, GY - 380, 160, 380, 10, '#c98a52', 7); }
function nightCity(t) { x.fillStyle = vg(-300, GY, '#0b1024', '#26304f'); x.fillRect(-1200, -800, 3500, GY + 800); for (let i = 0; i < 6; i++) { const bx = -60 + i * 200, bh = 500 + (i * 137) % 400; rbox(bx, GY - bh, 180, bh, 0, '#1a2036', 0); for (let r = 0; r < 5; r++) rbox(bx + 30, GY - bh + 40 + r * 90, 40, 50, 4, (r + i) % 3 ? '#2c3552' : '#e8c46a', 0); }
  x.fillStyle = '#1c2133'; x.fillRect(-1200, GY, 3500, 600); }
function dawn(t) { sky('#f2a65a', '#ffe0b0', GY - 300); ell(540, GY - 300, 200, 200, '#ffd27a', 0); x.fillStyle = '#9a8a8a'; x.fillRect(-1200, GY - 300, 3500, 1200); for (let i = 0; i < 6; i++) { const bx = -60 + i * 200, bh = 300 + (i * 137) % 300; rbox(bx, GY - 300 - bh, 180, bh, 0, 'rgba(90,60,70,.5)', 0); } }
function phone(t, p, label) { if (p <= 0) return; resetCam(); x.save(); x.translate(780, 640); const k = eBack(clamp(p)); x.scale(k, k); x.rotate(0.06 + 0.04 * Math.sin(t * 40)); rbox(-170, -300, 340, 600, 44, '#1b1b1f', 8); rbox(-145, -250, 290, 480, 14, '#eef1f4', 0);
  txt('📞', 0, -150, 90, OL, { stroke: false }); txt(label, 0, -30, 46, C.red, { stroke: false }); txt('appel entrant…', 0, 40, 32, '#666', { stroke: false }); ell(-70, 170, 44, 44, '#2a8a3a', 0); ell(70, 170, 44, 44, C.red, 0); x.restore(); }

function bus(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-520, -520, 1040, 440, 50, '#f2b62f', 9); rbox(-520, -200, 1040, 60, 0, '#c9952a', 0); for (let i = 0; i < 5; i++) rbox(-480 + i * 190, -460, 160, 170, 16, '#bfe4ff', 6);
  ell(-330, -70, 80, 80, '#2a2d36', 8); ell(330, -70, 80, 80, '#2a2d36', 8); ell(-330, -70, 34, 34, '#8a8f99', 0); ell(330, -70, 34, 34, '#8a8f99', 0); rbox(400, -300, 120, 60, 10, '#fff7c8', 5); txt('LIGNE 47', -40, -250, 60, OL, { stroke: false }); x.restore(); }
const DRV = { hat: 'cap', hatCol: '#1f3a8a', hatCol2: '#172e6e', body: '#2c4f8a', body2: '#223f70', pants: '#22314f', num: false, collar: true, white: true };
const KID = { hat: 'hair', hairCol: '#2a1d16', body: '#e0a030', body2: '#c08020', pants: '#3a5a8a', num: false };
const PAS = { hat: 'hair', hairCol: '#c96a3a', body: '#7a5ab0', body2: '#654896', pants: '#3a3d44', num: false };
const MUM = { hat: 'hair', hairCol: '#2a1d16', body: '#e8eef2', body2: '#c8d4d8', pants: '#3a3d44', num: false };
const HEADS = [{ hat: 'hair', hairCol: '#2a1d16' }, { hat: 'cap', hatCol: '#d6332b', hatCol2: '#b02a23' }, { hat: 'hair', hairCol: '#e0b04a' }, { hat: 'hair', hairCol: '#5a5a5a' }, { hat: 'hair', hairCol: '#c96a3a' }];
function stopSet(t) { sky('#9fcbea', '#dceef8', GY - 300); for (let i = 0; i < 5; i++) { const bx = -100 + i * 260, bh = 420 + (i * 137) % 300; rbox(bx, GY - 300 - bh, 230, bh, 0, i % 2 ? '#d9cbb0' : '#c8b89a', 6); for (let r = 0; r < 3; r++) rbox(bx + 40, GY - 300 - bh + 50 + r * 120, 150, 70, 6, '#bfe4ff', 4); }
  x.fillStyle = '#a8a8b0'; x.fillRect(-1200, GY - 300, 3500, 300); x.fillStyle = '#5a5d66'; x.fillRect(-1200, GY, 3500, 900); x.fillStyle = '#c4c4cc'; x.fillRect(-1200, GY - 20, 3500, 22);
  rbox(860, GY - 720, 16, 420, 4, '#3a3d44', 4); rbox(800, GY - 780, 140, 80, 10, '#2457a8', 6); txt('ARRÊT 47', 870, GY - 738, 30, '#fff', { stroke: false }); }
function busFull(px, py, s, t, mood, drvMood) { bus(px, py, s, t); for (let i = 0; i < 4; i++) { x.save(); x.translate(px + (-400 + i * 190) * s, py - 290 * s); x.beginPath(); x.rect(-80 * s, -170 * s, 160 * s, 170 * s); x.clip(); toon(0, 180 * s, 0.42 * s, { t, blink: true, ...HEADS[i], body: '#5a6a8a', body2: '#4a5a7a', num: false, mood: mood, look: -1 }); x.restore(); }
  x.save(); x.translate(px + 360 * s, py - 290 * s); x.beginPath(); x.rect(-80 * s, -170 * s, 160 * s, 170 * s); x.clip(); toon(0, 180 * s, 0.42 * s, { t, blink: true, ...DRV, mood: drvMood, look: 1 }); x.restore(); }
function wrist(p) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, 760); const k = eBack(clamp(p)); x.scale(k, k); rrc(0, 0, 760, 420, 40, 'rgba(255,255,255,.95)', 8); rbox(-380, -80, 760, 160, 70, '#e8b48a', 7); rbox(-70, -95, 140, 190, 14, '#ffffff', 6); txt('HÔPITAL', 0, 8, 30, C.red, { stroke: false }); x.restore(); }
function views(t, p, n, label, col) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, 700); const k = eBack(clamp(p)); x.scale(k, k); rbox(-200, -340, 400, 680, 44, '#1b1b1f', 8); rbox(-175, -290, 350, 560, 14, '#101014', 0);
  txt('▶', 0, -150, 110, '#fff', { stroke: false }); txt(label, 0, 0, 30, '#ccc', { stroke: false }); txt('👁 ' + n.toLocaleString('fr-FR'), 0, 100, 46, col, { stroke: false }); x.restore(); }
function hospExt(t) { sky('#9fcbea', '#dceef8', GY - 300); rbox(140, 360, 800, GY - 660, 0, '#e6eef2', 8); rbox(140, 360, 800, 120, 0, '#d6332b', 0); txt('HÔPITAL', 540, 430, 72, '#fff', { stroke: false });
  for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) rbox(190 + k * 190, 540 + r * 150, 130, 90, 6, '#bfe4ff', 4); rbox(440, GY - 500, 200, 200, 6, '#9fc8e0', 7); x.fillStyle = '#a8a8b0'; x.fillRect(-1200, GY - 300, 3500, 1200); }
function draw(t) {
  const id = curId(t), s0 = S(id), w = (b, r) => WF(b, r);
  const tRet = w('ff', /retard/i), tIns = w('ff', /insultait/i), tDem = w('s1', /Démarrez/i), tTre = w('s1', /Trente/i), tCou = w('s2', /courant/i), tBra = w('s2', /bracelet/i), tFil = w('s3', /filmé/i), tPos = w('s3', /posté/i),
    tMil = w('s4', /million/i), tCon = w('s4', /convoqué/i), tLic = w('s4', /licencié/i), tSeul = w('s5', /seul/i), tFin = w('mid', /fin/i), tHis = w('mid', /histoire/i), tHop = w('s6', /hôpital/i), tMer = w('s7', /mère/i), tDou = w('s7', /douze/i),
    tSav = w('s8', /savait/i), tTre8 = w('s8', /Trente/i), tVra = w('s9', /vraie/i), tMil9 = w('s9', /millions/i), tAtt = w('s10', /attendu/i), tVol = w('end', /volant/i), tReem = w('end', /Réembauché/i), tHisE = w('end', /histoire/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99;
  let K;
  if (id === 'ff') K = [[0, 0, 560, 1150, 1.15], [0.05, 3, 540, 1100, 1.0], [tIns - 0.3, 0.6, 470, 1150, 1.4]];
  else if (id === 's1') K = [[s0, 0, 470, 1150, 1.5], [s0 + 0.1, 3, 470, 1150, 1.6]];
  else if (id === 's2') K = [[s0, 0, 260, 1150, 1.3], [s0 + 0.1, 4, 300, 1150, 1.4]];
  else if (id === 'end') K = [[s0, 0, 540, 1100, 1.0], [tVol - 0.3, 0.6, 850, 1200, 1.7]];
  else K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 930, 1.08]];
  const shk = (id === 'ff' && t >= tIns && t < tIns + 0.4) || (id === 's1' && t >= tDem && t < tDem + 0.3) || (id === 's4' && t >= tLic && t < tLic + 0.4) ? 12 : 0;
  camPath(t, K, shk); const re = () => camPath(t, K, shk);
  if (['ff', 's1', 's2', 's3', 's10', 'end'].includes(id)) { stopSet(t); const angry = id === 's10' || id === 'end' ? 'smile' : (id === 'ff' && t < tIns) ? 'neutral' : 'angry';
    busFull(560, GY + 40, 0.8, t, angry, id === 'end' ? 'smile' : 'neutral');
    if (id === 'ff' || id === 's2' || id === 's10') { const kx = id === 's2' ? lerp(-100, 200, clamp((t - s0) / 4)) : id === 'ff' ? -200 + 60 * t : lerp(-200, 120, clamp((t - s0) / 3)); rbox(kx - 95, GY - 420, 80, 150, 16, '#2a8a3a', 5); toon(kx, GY + 20, 0.7, { t, blink: true, ...KID, mood: 'worried', look: 1, walk: t * 2.2, sweat: id === 's2' }); }
    if (id === 's3') { toon(260, GY + 20, 0.9, { t, blink: true, ...PAS, mood: 'smug', look: 1, armUp: true }); rbox(300, GY - 760, 80, 130, 12, '#1b1b1f', 5); if (Math.sin(t * 6) > 0) ell(340, GY - 740, 10, 10, '#ff3a3a', 0); }
    if (id === 'ff' && t >= tIns - 0.1) [[220, 'scream'], [410, 'scream'], [600, 'scream']].forEach(([bx], i) => speech('😡', 120 + bx, GY - 560, P(t, tIns - 0.1 + i * 0.15), 50)); }
  if (id === 's4') { stopSet(t); dim0(0.35); re(); toon(540, GY + 300, 1.4, { t, blink: true, ...DRV, mood: t >= tLic ? 'worried' : 'neutral', look: 0 }); }
  if (id === 's5' || id === 'mid') { stopSet(t); re(); if (id === 's5') { const bx = lerp(560, 1900, clamp((t - s0 - 0.3) / 2.4)); busFull(bx, GY + 40, 0.8, t, 'neutral', 'neutral'); }
    rbox((id === 's5' ? 300 : 620) - 100, GY - 440, 80, 150, 16, '#2a8a3a', 5); toon(id === 's5' ? 300 : 620, GY + 20, 0.75, { t, blink: true, ...KID, mood: 'worried', look: 1 }); }
  if (id === 's6') { hospExt(t); re(); const kx = lerp(-100, 540, clamp((t - s0) / 3)); toon(kx, GY - 260, 0.7, { t, blink: true, ...KID, mood: 'worried', look: 1, walk: t * 2 }); p47(-60 + 300 * clamp((t - s0) / 4), GY - 260, 0.7, t, { mood: 'worried', look: 1, walk: t * 2 }); }
  if (id === 's7' || id === 's8') { hospital(t); re(); toon(480, GY - 230, 0.8, { t, blink: true, ...MUM, mood: 'smile', look: 1, noArms: true }); rbox(140, GY - 300, 760, 300, 12, '#c8d4d8', 7); toon(800, GY + 40, 0.72, { t, blink: true, ...KID, mood: 'smile', look: -1 }); }
  if (id === 's9') { stopSet(t); dim0(0.3); re(); }
  vignette(0.3); resetCam();
  if (id === 'ff') { hookCard(t, [['IL ATTEND UN GAMIN…', 62], ['TOUT LE BUS L\'INSULTE 😡', 56, C.red]], 2.6, 'TU T\'ATTENDS PAS À LA FIN 😳'); if (t >= tRet - 0.1) pill('⏱️ UN GAMIN EN RETARD', 540, 330, P(t, tRet - 0.1), '#4a4a55'); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1') { paperCard([['« DÉMARREZ ! »', 70, C.red]], 540, 330, P(t, tDem - 0.3), { w: 700 }); if (t >= tTre - 0.2) { const sec = Math.max(0, 30 - Math.floor((t - tTre) * 8)); pill('⏱️ 00:' + String(sec).padStart(2, '0') + ' · TOUS LES JOURS', 540, 520, P(t, tTre - 0.2), '#2a2d36'); } }
  if (id === 's2' && t >= tBra - 0.2) wrist(P(t, tBra - 0.2, 0.3));
  if (id === 's3') { if (t >= tFil - 0.2) paperCard([['« IL NOUS FAIT PERDRE', 50], ['NOTRE TEMPS ! »', 50]], 540, 330, P(t, tFil - 0.2), { w: 880 }); }
  if (id === 's4') { const n = Math.round(1000000 * clamp((t - s0) / 1.6)); views(t, P(t, s0, 0.25), n, 'LE CHAUFFEUR QUI NOUS FAIT…', '#fff'); if (t >= tLic - 0.1) stamp('LICENCIÉ', P(t, tLic - 0.1), 1120, C.red); }
  if (id === 's5' && t >= tSeul - 0.2) pill('SEUL SUR LE TROTTOIR…', 540, 330, P(t, tSeul - 0.2), '#4a4a55');
  if (id === 'mid') { paperCard([['POURQUOI IL L\'ATTENDAIT ? 🤔', 54]], 540, 330, P(t, s0, 0.25), { w: 920 }); if (t >= tFin - 0.2 && t < tHis - 0.4) pill('LA FIN, TU T\'Y ATTENDS PAS 😳', 540, 520, P(t, tFin - 0.2), C.red);
    if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1050, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's6' && t >= tHop - 0.2) pill('🏥 PAS L\'ÉCOLE… L\'HÔPITAL', 540, 300, P(t, tHop - 0.2), C.red);
  if (id === 's7') { if (t >= tMer - 0.2) pill('❤️ SA MÈRE', 540, 300, P(t, tMer - 0.2), '#e05a7a'); if (t >= tDou - 0.2) stamp('12 ANS', P(t, tDou - 0.2), 470, C.red); }
  if (id === 's8') { if (t >= tSav - 0.2) pill('LE CHAUFFEUR LE SAVAIT', 540, 300, P(t, tSav - 0.2), '#2c4f8a'); if (t >= tTre8 - 0.2) pill('⏱️ 30 SECONDES POUR LUI', 540, 420, P(t, tTre8 - 0.2), '#2a8a3a'); }
  if (id === 's9') { const n = Math.round(2000000 * clamp((t - tVra) / 1.6)); views(t, P(t, s0, 0.25), n, 'LA VRAIE HISTOIRE ❤️', '#7cff8a'); }
  if (id === 's10' && t >= tAtt - 0.2) pill('🚌 TOUT LE BUS L\'ATTEND', 540, 330, P(t, tAtt - 0.2), '#2a8a3a');
  if (id === 'end') { if (t >= tReem - 0.2) stamp('RÉEMBAUCHÉ ✅', P(t, tReem - 0.2), 420, '#2a8a3a'); if (t >= tHisE - 0.2) pill('TON HISTOIRE EN COMMENTAIRE 👇', 540, 600, P(t, tHisE - 0.2), '#f2782a'); }
  if (t >= 5) { const a = clamp((t - 5) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
function dim0(a) { resetCam(); x.fillStyle = `rgba(10,12,30,${a})`; x.fillRect(0, 0, W, H); }
