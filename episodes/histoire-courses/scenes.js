// Les histoires de 47 #5 — « Les courses de Mamie Lucette » : quelqu'un paie ses courses en secret depuis 3 ans ; c'est 47, le gamin dont elle avait payé le chocolat volé 20 ans plus tôt.
window.LOOK = 'gala';
const GY = 1500;
const LUC = { hat: 'hair', hairCol: '#ecebe6', glasses: true, body: '#3f7e8a', body2: '#336a74', pants: '#4a4a5a', num: false, collar: true };
const LUCY = { ...LUC, hairCol: '#7a4a2a', glasses: false };          // Lucette, 20 years younger
const CASH = { hat: 'hair', hairCol: '#c96a3a', body: '#d6332b', body2: '#b02a23', pants: '#3a3d44', num: false, collar: true };
const NEIGH = { hat: 'hair', hairCol: '#e0b04a', body: '#e07ab0', body2: '#c4609a', pants: '#4a4a5a', num: false };
function luc(px, py, s, t, o = {}) { const L = o.young ? LUCY : LUC; toon(px, py, s, { t, blink: true, ...L, ...o }); ell(px, py - 772 * s, 58 * s, 46 * s, L.hairCol, 7 * s); }
function choco(cx, cy, s, rot = 0, wrapperOnly = false) { x.save(); x.translate(cx, cy); x.rotate(rot); x.scale(s, s);
  if (wrapperOnly) { rbox(-150, -80, 300, 160, 8, '#c9342b', 7); x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 4; [[-75], [0], [75]].forEach(([d]) => { x.beginPath(); x.moveTo(d, -80); x.lineTo(d, 80); x.stroke(); }); x.beginPath(); x.moveTo(-150, 0); x.lineTo(150, 0); x.stroke(); txt('CHOCO', 0, 8, 54, '#ffd23f', { stroke: false }); x.restore(); return; }
  rbox(-170, -70, 340, 140, 10, '#5a3220', 7); rbox(-60, -78, 230, 156, 8, '#c9342b', 7); txt('CHOCO', 55, 6, 48, '#ffd23f', { stroke: false }); for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) rbox(-160 + i * 50, -58 + j * 60, 40, 50, 6, '#6e3e28', 3); x.restore(); }
function bill(cx, cy, s, rot = 0) { x.save(); x.translate(cx, cy); x.rotate(rot); x.scale(s, s); rbox(-130, -65, 260, 130, 8, '#6fb36a', 6); ell(0, 0, 44, 44, '#a8d8a0', 4); txt('100', 0, 8, 46, '#2a5a2a', { stroke: false }); x.restore(); }
function shelves(x0, w, t) { const cols = ['#e8794a', '#f5c542', '#5fb0e0', '#7cc46a', '#e05a7a', '#a87ad8', '#f2f2f4'];
  for (let r = 0; r < 4; r++) { const y = 380 + r * 230; rbox(x0, y + 170, w, 26, 4, '#b9bec6', 5); for (let i = 0; x0 + 20 + i * 92 < x0 + w - 70; i++) rbox(x0 + 20 + i * 92, y + 40 + ((i * 7 + r * 3) % 3) * 12, 76, 130 - ((i * 7 + r * 3) % 3) * 12, 6, cols[(i * 3 + r * 5) % cols.length], 4); } }
function market(t) { room('#eef1f4', '#dfe4ea', '#c9ced6', GY); for (let i = -10; i < 30; i++) { x.fillStyle = i % 2 ? 'rgba(0,0,0,.05)' : 'rgba(255,255,255,.18)'; x.fillRect(i * 120, GY, 120, 600); }
  rbox(-200, 160, 1500, 120, 0, '#d6332b', 0); txt('SUPERMARCHÉ', 540, 236, 80, '#fff', { stroke: false }); shelves(-100, 1300, t); }
function checkout(cx, t) { rbox(cx - 330, GY - 330, 660, 330, 14, '#5a6270', 8); rbox(cx - 330, GY - 360, 660, 50, 10, '#2a2d36', 6);
  for (let i = 0; i < 9; i++) { x.fillStyle = 'rgba(255,255,255,.12)'; x.fillRect(cx - 320 + ((i * 70 + t * 120) % 640), GY - 356, 8, 42); }
  rbox(cx + 120, GY - 560, 200, 200, 14, '#3a3d44', 7); rbox(cx + 140, GY - 545, 160, 70, 8, '#7cff8a', 4); txt('0,00 €', cx + 220, GY - 500, 38, '#1a3a1a', { stroke: false }); }
function bagG(px, py, s) { rbox(px - 90 * s, py - 200 * s, 180 * s, 200 * s, 18 * s, '#f6efdc', 6); x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.arc(px, py - 200 * s, 40 * s, Math.PI, 0); x.stroke(); txt('🥖', px + 40 * s, py - 220 * s, 70 * s, OL, { stroke: false }); }
function parking(t) { sky('#9fcbea', '#dceef8', GY - 300); x.fillStyle = '#6a6f78'; x.fillRect(-1200, GY - 300, 3500, 1200); for (let i = -4; i < 12; i++) { x.fillStyle = '#f2f2f4'; x.fillRect(i * 260, GY + 60, 16, 260); }
  rbox(-200, 420, 1500, 480, 0, '#e4e7eb', 8); rbox(-200, 420, 1500, 90, 0, '#d6332b', 0); txt('SUPERMARCHÉ', 540, 482, 64, '#fff', { stroke: false }); for (let i = 0; i < 5; i++) rbox(-60 + i * 260, 580, 200, 260, 6, '#9fd3ff', 6);
  [[60, '#5a8ad8'], [1000, '#e8794a']].forEach(([cx, col]) => { rbox(cx - 200, GY - 230, 400, 150, 40, col, 8); rbox(cx - 130, GY - 320, 260, 110, 30, col, 8); rbox(cx - 110, GY - 300, 220, 80, 16, '#bfe4ff', 5); ell(cx - 120, GY - 70, 50, 50, '#2a2d36', 6); ell(cx + 120, GY - 70, 50, 50, '#2a2d36', 6); }); }
function phoneCard(t, p) { if (p <= 0) return; resetCam(); x.save(); x.translate(780, 640); const k = eBack(clamp(p)); x.scale(k, k); x.rotate(0.06); rbox(-170, -300, 340, 600, 44, '#1b1b1f', 8); rbox(-145, -250, 290, 480, 14, '#eef1f4', 0);
  txt('📞 MON FILS', 0, -170, 40, OL, { stroke: false }); txt('Dernier appel :', 0, -60, 32, '#666', { stroke: false }); txt('il y a', 0, 0, 42, OL, { stroke: false }); txt('8 MOIS', 0, 70, 62, C.red, { stroke: false }); x.restore(); }
function draw(t) {
  const id = curId(t), tPay = WF('ff', /payé/i), tSec = WF('ff', /secret/i), tReg = WF('s1', /réglé/i), tApp = WF('s2', /appelait/i), tVoi = WF('s3', /voisine/i), tEur = WF('s3', /euros/i), tCer = WF('s4', /céréales/i),
    tOra = WF('s5', /orange/i), tCent = WF('s5', /cent/i), tRep = WF('s5', /reparti/i), tCon = WF('s6', /connais/i), tPap = WF('s7', /chocolat/i), tPli = WF('s7', /quatre/i), tVol = WF('s8', /volait/i), tBra = WF('s8', /bras/i),
    tLai = WF('s9', /Laissez/i), tBas = WF('s9', /bas/i), tGam = WF('s10', /gamin/i), tSac = WF('s11', /sac/i), tQui = WF('s11', /quittes/i), tPas = WF('s12', /Pas encore/i), tCha = WF('s12', /chance/i);
  const HOOK = [["QUELQU'UN PAIE SES COURSES… 🛒", 62], ['EN SECRET. DEPUIS 3 ANS 🤫', 70, C.red]];
  if (id === 'mid') { resetCam(); market(t); x.fillStyle = 'rgba(15,12,22,.72)'; x.fillRect(0, 0, W, H); flashCut(t, S('mid')); paperCard([['POURQUOI IL FAIT ÇA ? 🤔', 64], ['ÉCRIS TA THÉORIE 👇', 60, C.red]], 540, 700, P(t, S('mid'), 0.25), { w: 940 }); return; }
  if (id === 's7' && t >= tPap - 0.2) { resetCam(); x.fillStyle = vg(0, H, '#2a2440', '#14121c'); x.fillRect(0, 0, W, H); const u = clamp(seg(t, tPli - 0.1, tPli + 0.8)); x.save(); x.translate(540, 900); x.scale(1.6 + 0.3 * u, 1.6 + 0.3 * u); x.rotate(-0.08 + 0.08 * u); choco(0, 0, 1.4, 0, true); x.restore();
    pill('📜 GARDÉ PENDANT 20 ANS', 540, 1350, P(t, tPli), C.red); flashCut(t, tPap - 0.2); return; }
  const flash = id === 's8' || id === 's9';
  let K;
  if (id === 'ff') K = [[0, 0, 560, 1060, 1.18], [0.1, 3, 540, 1100, 1.06]];
  else if (id === 's4') K = [[S('s4'), 0, 540, 1100, 1.0], [S('s4') + 0.2, 3, 420, 1060, 1.15]];
  else if (id === 's5') K = [[S('s5'), 0, 540, 1080, 1.0], [S('s5') + 0.2, 4, 600, 1080, 1.08]];
  else K = [[S(id), 0, 560, 1080, 1.0], [S(id) + 0.2, 4, 580, 1060, 1.1]];
  camPath(t, K, (id === 'ff' && t < 0.4) || (id === 's8' && t >= tBra && t < tBra + 0.4) ? 12 : 0);
  if (flash) { x.save(); x.filter = 'sepia(0.75) saturate(0.8)'; }
  if (['ff', 's1', 's4', 's5', 's8', 's9'].includes(id)) { market(t); if (!flash) checkout(620, t); }
  if (id === 'ff' || id === 's1') { cast('woman', 760, GY - 0, 0.82, t, { ...CASH, mood: 'smile', look: -1 }); luc(290, GY, 0.85, t, { mood: id === 's1' && t >= tReg ? 'shock' : 'worried', look: 1 }); bagG(470, GY - 330, 0.9); if (t >= tPay) stamp('PAYÉ ✅', P(t, tPay, 0.25), 720, '#2a8a3a'); }
  if (id === 's2') { room('#f3e3c8', '#e7cfa6', '#9a6e4a', GY); rbox(620, 340, 360, 260, 10, '#fff', 8); x.fillStyle = '#9fd3ff'; x.fillRect(640, 360, 320, 220); luc(330, GY, 0.95, t, { mood: t >= tApp ? 'worried' : 'neutral', look: 1, armUp: true }); phoneCard(t, P(t, S('s2') + 0.1)); }
  if (id === 's3') { room('#e8dcc4', '#d8c8a8', '#8a6a4a', GY); door(820, GY - 680, 320, 680, '#6b4428', '12'); luc(300, GY, 0.9, t, { mood: 'smug', look: 1 }); cast('woman', 820, GY, 0.85, t, { ...NEIGH, mood: t >= tEur ? 'worried' : 'smile', look: -1 }); }
  if (id === 's4') { cast('woman', 760, GY, 0.82, t, { ...CASH, mood: 'neutral', look: -1 }); x.save(); const peek = clamp(seg(t, tCer - 0.3, tCer + 0.3)); luc(lerp(300, 430, peek), GY, 0.8, t, { mood: 'worried', look: 1 }); x.restore();
    rbox(-60, GY - 560, 420, 700, 10, '#c9ced6', 8); for (let r = 0; r < 3; r++) for (let i = 0; i < 4; i++) { rbox(-40 + i * 100, GY - 540 + r * 220, 84, 190, 6, ['#f5c542', '#e8794a', '#7cc46a'][r], 5); txt('🥣', -2 + i * 100, GY - 440 + r * 220, 44, OL, { stroke: false }); } }
  if (id === 's5') { const walk = clamp(seg(t, tRep - 0.2, B.s5.end)); cast('woman', 760, GY, 0.82, t, { ...CASH, mood: t >= tCent ? 'smile' : 'neutral', look: -1 }); p47(lerp(470, -200, walk), GY, 0.85, t, { mood: 'neutral', look: walk > 0 ? -1 : 1, walk: walk > 0 && walk < 1 ? t * 2 : 0 });
    if (t >= tCent && t < tRep) bill(640, GY - 470, 0.7 + 0.1 * Math.sin(t * 6), -0.1);
    x.save(); x.translate(-60, 0); rbox(-60, GY - 560, 260, 700, 10, '#c9ced6', 8); x.restore(); luc(70, GY + 100, 0.8, t, { mood: t >= tOra ? 'shock' : 'worried', look: 1 }); rbox(-120, GY - 300, 300, 440, 10, '#c9ced6', 8); for (let i = 0; i < 2; i++) rbox(-100 + i * 130, GY - 280, 110, 190, 6, '#f5c542', 5); }
  if (['s6', 's7', 's10', 's11', 's12', 'end'].includes(id)) { parking(t); const near = id !== 's6' || t >= tCon - 0.6; luc(330, GY, 0.88, t, { mood: id === 's11' ? (t >= tQui ? 'smile' : 'worried') : (id === 's10' ? 'shock' : (id === 's12' || id === 'end' ? 'smile' : 'worried')), look: 1, armUp: id === 's11' && t >= tSac });
    p47(near ? 760 : 900, GY, 0.88, t, { mood: id === 's12' || id === 'end' ? 'smile' : (id === 's10' ? 'smug' : 'neutral'), look: -1 }); bagG(170, GY - 10, 0.8);
    if (id === 's11' && t >= tSac) choco(470, GY - 640, 0.55 * eBack(clamp(P(t, tSac))), -0.2); if (id === 's12' || id === 'end') choco(470, GY - 640, 0.55, -0.2); }
  if (flash) { const kid = clamp(seg(t, S('s8') + 0.2, tVol + 0.3)); p47(id === 's8' ? lerp(1000, 640, kid) : 640, GY, 0.6, t, { mood: id === 's9' ? (t >= tBas ? 'worried' : 'shock') : (t >= tBra ? 'shock' : 'worried'), look: -1 });
    if (id === 's8' && t >= tVol - 0.2 && t < tBra + 2) choco(700, GY - 330, 0.35, 0.2);
    if (id === 's8' ? t >= tBra - 0.4 : t < tLai + 0.6) cast('guard', 900, GY, 0.85, t, { mood: 'angry', look: -1, armUp: true });
    if (id === 's9') { luc(lerp(100, 380, clamp(seg(t, S('s9'), tLai))), GY, 0.85, t, { young: true, mood: t >= tBas ? 'smile' : 'neutral', look: 1 }); if (t >= tLai) choco(700, GY - 330, 0.35, 0.2); }
    x.restore(); x.fillStyle = 'rgba(60,40,20,.12)'; resetCam(); x.fillRect(0, 0, W, H); }
  vignette(0.22);
  if (id === 'ff') { hookCard(t, HOOK, B.ff.end + 0.05); }
  if (id === 's1') { flashCut(t, S('s1')); pill('🗓️ CHAQUE SAMEDI', 540, 300, P(t, S('s1') + 0.1), C.blue); if (t >= tReg - 0.2) paperCard([['« C\'EST DÉJÀ RÉGLÉ,', 56], ['MADAME. »', 70, '#2a8a3a']], 540, 520, P(t, tReg - 0.2), { w: 820 }); }
  if (id === 's2') { flashCut(t, S('s2')); pill('SUSPECT N°1 : SON FILS ?', 380, 300, P(t, S('s2') + 0.1), C.blue); if (t >= tApp) stamp('IMPOSSIBLE', P(t, tApp, 0.25), 1150); }
  if (id === 's3') { flashCut(t, S('s3')); pill('SUSPECT N°2 : LA VOISINE ?', 540, 300, P(t, S('s3') + 0.1), C.blue); if (t >= tEur) pill('ELLE LUI DOIT 20 € 😅', 540, 420, P(t, tEur), C.red); }
  if (id === 's4') { flashCut(t, S('s4')); pill('🕵️‍♀️ PLANQUE AU RAYON CÉRÉALES', 540, 300, P(t, S('s4') + 0.1), C.blue); }
  if (id === 's5') { flashCut(t, S('s5')); if (t >= tOra - 0.1) pill('🧡 BONNET ORANGE', 540, 300, P(t, tOra - 0.1), C.orange); if (t >= tCent) pill('💶 100 € À LA CAISSIÈRE', 540, 420, P(t, tCent), '#2a8a3a'); if (t >= tRep) pill('… SANS UN MOT', 540, 540, P(t, tRep), OL); }
  if (id === 's6') { flashCut(t, S('s6')); if (t >= tCon - 0.4) paperCard([['« JE VOUS CONNAIS ? »', 66]], 540, 330, P(t, tCon - 0.4), { w: 820 }); }
  if (id === 's7') { flashCut(t, S('s7')); }
  if (id === 's8') { flashCut(t, S('s8')); pill('⏪ 20 ANS PLUS TÔT', 540, 300, P(t, S('s8') + 0.1), '#8a5a2a'); if (t >= tBra) onoma('ATTRAPÉ !', 540, 520, P(t, tBra, 0.2), 120); }
  if (id === 's9') { flashCut(t, S('s9')); paperCard([['« LAISSEZ-LE,', 60], ['JE PAYE. »', 70, '#2a8a3a']], 540, 330, P(t, tLai - 0.2), { w: 760 }); if (t >= tBas - 0.2) paperCard([['« TU ME RENDRAS QUAND', 48], ['TU SERAS GRAND. »', 62, C.red]], 540, 640, P(t, tBas - 0.2), { w: 900 }); }
  if (id === 's10') { flashCut(t, S('s10')); polaroid(300, 520, 300, 360, P(t, S('s10') + 0.1), (w, h) => { x.save(); x.filter = 'sepia(0.75)'; x.fillStyle = '#e8dcc4'; x.fillRect(0, 0, w, h); luc(w / 2, h + 260, 0.8, t, { young: true, mood: 'smile', look: 1 }); x.restore(); }, 'LA DAME', -0.05);
    if (t >= tGam - 0.2) polaroid(780, 520, 300, 360, P(t, tGam - 0.2), (w, h) => { x.save(); x.filter = 'sepia(0.75)'; x.fillStyle = '#e8dcc4'; x.fillRect(0, 0, w, h); p47(w / 2, h + 260, 0.6, t, { mood: 'worried', look: -1 }); x.restore(); }, 'LE GAMIN = 47', 0.05); }
  if (id === 's11') { flashCut(t, S('s11')); if (t >= tQui - 0.3) paperCard([['« ALORS…', 56], ['ON EST QUITTES ? »', 68, C.red]], 540, 330, P(t, tQui - 0.3), { w: 800 }); }
  if (id === 's12') { flashCut(t, S('s12')); if (t >= tPas - 0.2 && t < tCha - 0.2) paperCard([['« PAS ENCORE. »', 70, C.red]], 540, 330, P(t, tPas - 0.2), { w: 760 }); if (t >= tCha - 0.2) paperCard([['« VOUS M\'AVEZ DONNÉ', 54], ['UNE CHANCE. »', 76, C.red]], 540, 330, P(t, tCha - 0.2), { w: 900 }); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ? 💬', 66], ['QUELQU\'UN T\'A DÉJÀ AIDÉ', 46, C.red], ['SANS RIEN DEMANDER ?', 46, C.red]], 540, 360, P(t, S('end')), { w: 960 }); }
}
