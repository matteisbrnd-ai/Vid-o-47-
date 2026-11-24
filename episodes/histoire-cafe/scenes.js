// Histoire du midi — « Le café du livreur » : un homme jette son café sur un livreur en retard ; le livreur venait de sauver SA mère.
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

function draw(t) {
  const id = curId(t), s0 = S(id), w = (b, r) => WF(b, r);
  const tJet = w('ff', /jeté/i), tRet = w('ff', /retard/i), tDeu = w('s1', /Deux/), tGag = w('s1', /gagne/i), tSan = w('s2', /sang/i), tCha = w('s2', /chaussure/i), tDem = w('s3', /demandé/i), tTom = w('s3', /tombée/i), tAmb = w('s3', /ambulance/i),
    tVel = w('s4', /vélo/i), tRep = w('s4', /reparti/i), tFin = w('mid', /fin/i), tHis = w('mid', /histoire/i), tApp = w('s5', /appel/i), tMer = w('s5', /mère/i), tMat = w('s5', /matin/i), tQua = w('s6', /quatre/i), tSan6 = w('s6', /Sans/i),
    tCha7 = w('s7', /chaussure/i), tCou = w('s8', /couru/i), tTac = w('s8', /tache/i), tSix = w('s9', /six/i), tTen = w('s9', /tendu/i), tCho = w('s9', /Chaud/i), tRen = w('end', /rendu/i), tHisE = w('end', /histoire/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99;
  let K;
  if (id === 'ff') K = [[0, 0, 540, 900, 1.25], [0.05, 2, 540, 960, 1.0], [tRet - 0.3, 0.6, 700, 900, 1.3]];
  else if (id === 's1') K = [[s0, 0, 360, 900, 1.6], [s0 + 0.1, 3, 360, 880, 1.7]];
  else if (id === 's2') K = t < tCha - 0.2 ? [[s0, 0, 720, 1000, 1.3], [tSan - 0.2, 0.6, 760, 1350, 1.7]] : [[tCha - 0.2, 0, 880, 960, 1.8], [tCha, 1.5, 880, 940, 2.0]];
  else if (id === 's5') K = [[s0, 0, 540, 960, 1.0], [tMer - 0.2, 0.5, 340, 980, 1.5]];
  else if (id === 's7') K = [[s0, 0, 540, 960, 1.0], [tCha7 - 0.6, 0.8, 960, 1150, 1.8]];
  else K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 930, 1.08]];
  const shk = (id === 'ff' && t >= tJet && t < tJet + 0.4) || (id === 's1' && t >= tDeu && t < tDeu + 0.3) || (id === 's5' && t >= tMer && t < tMer + 0.4) ? 12 : 0;
  camPath(t, K, shk);
  // ---------- world ----------
  if (['ff', 's1', 's2', 's3', 's4', 'mid'].includes(id)) { terrace(t); const ffk = id === 'ff' ? clamp((t - tJet) / 0.45) : 1, stain = id === 'ff' ? clamp((t - tJet - 0.35) / 0.3) : 1;
    p47(150, GY - 20, 0.75, t, { mood: id === 'ff' && t >= tJet ? 'shock' : id === 's3' ? 'worried' : 'neutral', look: 1, blink: true }); rbox(60, GY - 230, 180, 22, 8, '#3a3d44', 5); cup(110, GY - 270, 0.5);
    const leave = id === 's4' ? clamp((t - tRep + 0.2) / 1.2) : id === 'mid' ? 1 : 0;
    if (leave < 1) { x.save(); x.translate(leave * 900, 0); bike(1000, GY + 20, 0.9, 0); liv(760, GY, 0.95, t, { stain, knee: id === 's2' || id === 's3' || id === 's4', mood: id === 's3' ? 'smile' : (id === 'ff' && t >= tJet) ? 'shock' : 'worried', look: -1, walk: id === 's4' && t >= tRep ? t : 0 }); cube(760 + 150, GY - 360, 0.75);
      if (id === 's2' && t >= tCha - 0.3) shoe(905, GY - 620, 1.0, -0.4); x.restore(); }
    if (id !== 'mid' && id !== 's3' && id !== 's4') man(400, GY, 0.95, t, { mood: id === 's1' || (id === 'ff' && t >= tJet) ? 'smug' : 'neutral', look: 1, armUp: id === 'ff' && t >= tJet - 0.3 && t < tJet + 0.6 || id === 's1' });
    if (id === 'ff' && ffk > 0 && ffk < 1) { cup(470 + 260 * ffk, GY - 900 + 300 * ffk - 200 * Math.sin(ffk * 3.14), 0.7, ffk * 6); }
    if (id === 'ff' && t >= tJet + 0.4 && t < tJet + 1.3) { const a = 1 - clamp((t - tJet - 0.4) / 0.9); x.save(); x.globalAlpha = a; for (let i = 0; i < 9; i++) ell(720 + Math.cos(i) * 120 * (1.4 - a), GY - 520 + Math.sin(i * 1.7) * 100 * (1.4 - a), 22, 16, COF, 0); x.restore(); } }
  if (id === 's3' && t >= tTom - 0.2) { const k = P(t, tTom - 0.2); polaroid(540, 700, 640, 520, k, (pw, ph) => { x.save(); x.scale(pw / 1080, ph / 1920 * 1.6); x.translate(0, -600); stairs(t); mom(380, GY, 0.8, t, { mood: 'worried', look: 1, blink: false }); liv(640, GY, 0.85, t, { mood: 'worried', look: -1, armUp: true }); x.restore(); x.fillStyle = 'rgba(160,120,60,.2)'; x.fillRect(0, 0, pw, ph); }, 'CE MATIN', -0.03); }
  if (id === 's5') { homeEve(t); dim0(0.15); camPath(t, K, shk); man(340, GY, 0.95, t, { mood: t >= tMer ? 'shock' : 'neutral', look: 1, blink: true }); }
  if (id === 's6' || id === 's7') { hospital(t); camPath(t, K, shk); mom(480, GY - 230, 0.8, t, { mood: 'smile', look: 1, blink: true, noArms: true }); rbox(140, GY - 300, 760, 300, 12, '#c8d4d8', 7); man(820, GY + 40, 0.9, t, { mood: id === 's7' ? 'shock' : 'worried', look: -1, blink: true });
    if (id === 's7') { shoe(940, GY - 410, 0.6, 0); x.save(); x.setLineDash([12, 10]); x.strokeStyle = '#fff'; x.lineWidth = 6; x.beginPath(); x.ellipse(1010, GY - 410, 70, 40, 0, 0, 7); x.stroke(); x.restore(); } else shoe(960, GY - 410, 0.6, 0); }
  if (id === 's8') { nightCity(t); camPath(t, K, shk); const k = ((t - s0) * 0.33) % 1; man(-150 + 1380 * k, GY, 0.85, t, { mood: 'worried', look: 1, walk: t * 1.8, sweat: true }); }
  if (id === 's9' || id === 'end') { dawn(t); camPath(t, K, shk); bike(980, GY + 20, 0.8); liv(700, GY, 0.95, t, { stain: 1, mood: id === 'end' || t >= tCho ? 'smile' : 'neutral', look: -1, blink: true });
    man(380, GY, 0.95, t, { mood: id === 'end' ? 'smile' : 'worried', look: 1, blink: true, armUp: false }); if (id === 's9' && t >= tTen) { cup(540, GY - 560, 0.95); steam(540, GY - 670, t); } if (id === 'end') { cup(470, GY - 600, 0.6); steam(470, GY - 670, t); shoe(545, GY - 430, 0.8, -0.2); } }
  vignette(0.35); resetCam();
  // ---------- overlays ----------
  if (id === 'ff') { hookCard(t, [['IL JETTE SON CAFÉ…', 64], ['POUR 2 MIN DE RETARD 😡', 58, C.red]], 2.6, 'TU T\'ATTENDS PAS À LA FIN 😳'); if (t >= tJet + 0.3) onoma('SPLASH', 760, 640, P(t, tJet + 0.3), 130); if (t >= tRet - 0.1) pill('⏱️ 2 MINUTES DE RETARD', 540, 330, P(t, tRet - 0.1), C.red); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1') { paperCard([['« DEUX MINUTES ! »', 64, C.red]], 540, 330, P(t, tDeu - 0.2), { w: 760 }); if (t >= tGag - 0.2) paperCard([['« TU SAIS COMBIEN JE GAGNE ? »', 46]], 540, 500, P(t, tGag - 0.2), { w: 900 }); }
  if (id === 's2') { if (t >= tSan - 0.2 && t < tCha - 0.2) pill('🩹 LE GENOU EN SANG', 540, 330, P(t, tSan - 0.2), C.red); if (t >= tCha - 0.2) { flashCut(t, tCha - 0.2); pill('👠 UNE CHAUSSURE DE FEMME ?!', 540, 330, P(t, tCha - 0.1), '#4a4a55'); } }
  if (id === 's3' && t >= tAmb - 0.2) pill('🚑 IL L\'A PORTÉE JUSQU\'À L\'AMBULANCE', 540, 1080, P(t, tAmb - 0.2), C.blue);
  if (id === 's4' && t >= tRep - 0.2) pill('…TREMPÉ DE CAFÉ', 540, 330, P(t, tRep - 0.2), COF);
  if (id === 'mid') { paperCard([['À QUI EST LA CHAUSSURE ? 👠', 54]], 540, 330, P(t, s0, 0.25), { w: 920 }); if (t >= tFin - 0.2 && t < tHis - 0.4) pill('LA FIN, TU T\'Y ATTENDS PAS 😳', 540, 520, P(t, tFin - 0.2), C.red);
    if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1050, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's5') { banner('LE SOIR', 540, 280, P(t, s0 + 0.1), '#2f3d63'); if (t >= tApp - 0.2) phone(t, P(t, tApp - 0.2), 'HÔPITAL'); if (t >= tMer - 0.1) stamp('SA MÈRE', P(t, tMer - 0.1), 1080, C.red); }
  if (id === 's6') { if (t >= tQua - 0.4) paperCard([['« IL L\'A PORTÉE SUR 4 ÉTAGES »', 46]], 540, 330, P(t, tQua - 0.4), { w: 940 }); if (t >= tSan6 - 0.2) pill('SANS LUI… ELLE NE SERAIT PLUS LÀ', 540, 500, P(t, tSan6 - 0.2), C.red); }
  if (id === 's7' && t >= tCha7 - 0.2) pill('👠 IL MANQUE UNE CHAUSSURE…', 540, 330, P(t, tCha7 - 0.2), '#4a4a55');
  if (id === 's8') { banner('TOUTE LA NUIT', 540, 280, P(t, s0 + 0.1), '#2f3d63'); if (t >= tTac - 0.2) pill('🔎 UN LIVREUR… TACHÉ DE CAFÉ', 540, 410, P(t, tTac - 0.2), COF); }
  if (id === 's9') { banner('6 H DU MATIN', 540, 280, P(t, s0 + 0.1), '#c8783a'); if (t >= tCho - 0.2) pill('☕ CHAUD, CETTE FOIS', 540, 410, P(t, tCho - 0.2), '#2a8a3a'); }
  if (id === 'end') { if (t >= tRen - 0.2) pill('👠 IL LUI REND LA CHAUSSURE', 540, 330, P(t, tRen - 0.2), '#2a8a3a'); if (t >= tHisE - 0.2) pill('TON HISTOIRE EN COMMENTAIRE 👇', 540, 450, P(t, tHisE - 0.2), '#f2782a'); }
  if (t >= 5) { const a = clamp((t - 5) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
function dim0(a) { resetCam(); x.fillStyle = `rgba(10,12,30,${a})`; x.fillRect(0, 0, W, H); }
