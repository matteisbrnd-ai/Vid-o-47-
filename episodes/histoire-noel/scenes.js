// Les histoires de 47 #7 — « La lettre au Père Noël » : 47 facteur lit la lettre d'un enfant (« que papa retrouve un travail ») et glisse le CV du papa dans 300 courriers « de la part du Père Noël ».
window.LOOK = 'gala';
const GY = 1500;
const DAD = { hat: 'hair', hairCol: '#3a2a1e', body: '#5a6a7a', body2: '#4a5866', pants: '#2a2d36', num: false };
const KID = { hat: 'hair', hairCol: '#3a2a1e', body: '#e8794a', body2: '#c9622f', pants: '#2a4a7a', num: false };
const BOSS = { hat: 'bald', body: '#f4f4f6', body2: '#d9dce4', pants: '#2a2d36', num: false, collar: true };
function snow(t, a = 1) { x.save(); x.globalAlpha = a; x.fillStyle = '#fff'; for (let i = 0; i < 70; i++) { const sx = (i * 137 + Math.sin(t + i) * 30) % 1180 - 50, sy = (i * 91 + t * (60 + i % 5 * 20)) % 2000 - 40; x.beginPath(); x.arc(sx, sy, 3 + i % 4, 0, 7); x.fill(); } x.restore(); }
function bag(px, py, s) { rbox(px - 70 * s, py - 110 * s, 140 * s, 110 * s, 14 * s, '#f5c542', 6); txt('✉️', px, py - 52 * s, 50 * s, OL, { stroke: false }); }
function postman(px, py, s, t, o = {}) { p47(px, py, s, t, o); bag(px + 90 * s, py - 380 * s, s); }
function street(t, o = {}) { x.fillStyle = vg(0, GY, '#8fb3d9', '#d6e6f4'); x.fillRect(-1200, -800, 3500, GY + 800);
  [[-60, '#c98a5a', 'BOULANGERIE'], [380, '#6a8aa8', 'GARAGE'], [820, '#a86a7a', 'RESTAURANT']].forEach(([x0, col, lab]) => { rbox(x0, 500, 420, GY - 500, 0, col, 8); rbox(x0 + 20, 540, 380, 90, 8, '#f6efdc', 5); txt(lab, x0 + 210, 590, 46, OL, { stroke: false });
    rbox(x0 + 60, 700, 140, 160, 6, '#fff7d6', 5); rbox(x0 + 230, 700, 140, 160, 6, '#fff7d6', 5); rbox(x0 + 150, GY - 300, 120, 300, 6, '#4a3a2a', 6); rbox(x0 + 300, GY - 220, 70, 46, 4, '#d6332b', 4); });
  x.fillStyle = '#e8eef4'; x.fillRect(-1200, GY, 3500, 160); x.fillStyle = '#5a5d66'; x.fillRect(-1200, GY + 160, 3500, 1200); }
function letterbox(px) { rbox(px - 60, GY - 330, 120, 200, 30, '#d6332b', 7); rbox(px - 40, GY - 270, 80, 16, 6, OL, 0); rbox(px - 12, GY - 130, 24, 130, 4, '#555', 5); }
function letter(p, lines, rot = -0.03, y = 760) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, y); const k = eBack(clamp(p)); x.scale(k, k); x.rotate(rot); rbox(-440, -300, 880, 600, 8, '#fdfaf0', 8);
  for (let i = 0; i < 9; i++) { x.fillStyle = 'rgba(80,120,200,.25)'; x.fillRect(-400, -230 + i * 60, 800, 3); }
  lines.forEach(([s, sz, col], i) => txt(s, 0, -200 + i * 90 + (lines.length < 4 ? 60 : 0), sz, col || '#2a3a8a', { stroke: false })); x.restore(); }
function kitchen(t) { room('#3a3550', '#2e2a42', '#4a3a2e', GY); rbox(200, GY - 300, 680, 40, 8, '#8a6a4a', 7); rbox(240, GY - 260, 30, 260, 4, '#6a4a32', 5); rbox(810, GY - 260, 30, 260, 4, '#6a4a32', 5);
  rbox(80, 380, 300, 360, 10, '#1b2440', 8); ell(230, 500, 50, 50, '#f4f0d8', 0); ell(560, GY - 420, 220, 160, 'rgba(255,214,110,.18)', 0); rbox(530, GY - 520, 60, 90, 8, '#f5c542', 4); }
function cvStack(n, t) { for (let i = 0; i < Math.min(12, n); i++) rbox(700 - i * 2, GY - 420 - i * 10, 240, 300, 6, '#fff', 4); txt('CV', 820, GY - 300 - Math.min(12, n) * 10, 60, '#2a3a8a', { stroke: false }); }
function printer(t, on) { rbox(260, GY - 360, 340, 200, 20, '#c9cdd2', 8); rbox(300, GY - 400, 260, 60, 8, '#f6f6fa', 6); if (on) { const k = (t * 3) % 1; rbox(320, GY - 170 + k * 60, 220, 120, 4, '#fff', 4); } rbox(220, GY - 160, 420, 160, 10, '#8a6a4a', 7); }
function phone(px, py, ring, t) { x.save(); x.translate(px, py); if (ring) x.rotate(Math.sin(t * 40) * 0.12); rbox(-34, -64, 68, 128, 12, '#1b1b1f', 5); rbox(-26, -52, 52, 96, 6, '#5fd3ff', 0); x.restore(); }
function sorting(t) { room('#dfe4ea', '#c9d0d8', '#7a6a5a', GY); for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) rbox(-40 + c * 140, 380 + r * 150, 120, 120, 4, '#b98a5a', 4); rbox(100, GY - 360, 880, 60, 8, '#6a6f78', 6); }
function draw(t) {
  const id = curId(t), tJam = WF('ff', /jamais/i), tInt = WF('s1', /interdit/i), tDec = WF('s1', /déchirée/i), tCad = WF('s2', /cadeau/i), tTra = WF('s3', /travail/i), tDor = WF('s3', /dors/i),
    tQ = WF('s4', /Quarante/i), tCent = WF('s5', /cents/i), tHis = WF('mid', /histoire/i), tMar = WF('s6', /Martin/i), tAn = WF('s6', /an/i), tImp = WF('s7', /imprimé/i), tFois = WF('s7', /fois/i), tGli = WF('s8', /glissait/i), tMot = WF('s8', /mot/i),
    tSon = WF('s9', /sonné/i), tLun = WF('s9', /lundi/i), tSig = WF('s10', /Signé/i), tLet = WF('s11', /lettre/i), tEcr = WF('s11', /écriture/i), tPs = WF('s12', /P\.?S/i) || WF('s12', /dis/i), tFen = WF('s12', /fenêtre/i);
  const HOOK = [['IL A OUVERT LA LETTRE… ✉️', 60], ['ADRESSÉE AU PÈRE NOËL 🎅', 60, C.red]];
  let K;
  if (id === 's5') K = [[S('s5'), 0, 540, 1000, 1.0], [S('s5') + 0.2, 4, 540, 980, 0.8]];
  else K = [[S(id), 0, 540, 1000, 1.0], [S(id) + 0.2, 4, 560, 980, 1.08]];
  camPath(t, K, (id === 'ff' && t >= tJam && t < tJam + 0.3) ? 12 : 0);
  if (['ff', 's1', 's4', 's5', 's8'].includes(id)) { street(t); letterbox(980);
    if (id === 'ff' || id === 's1') postman(560, GY, 0.88, t, { mood: id === 's1' && t >= tDec ? 'shock' : (t >= tJam ? 'worried' : 'neutral'), look: 1, armUp: true });
    if (id === 's4') postman(560, GY, 0.88, t, { mood: 'worried', look: 1 });
    if (id === 's5') { const w = clamp(seg(t, S('s5'), B.s5.end)); postman(lerp(-100, 1100, w), GY, 0.8, t, { mood: 'neutral', look: 1, walk: t * 2 }); }
    if (id === 's8') { const w = (t - S('s8')) % 2.2 / 2.2; postman(lerp(100, 900, w), GY, 0.8, t, { mood: 'smug', look: 1, walk: t * 2 }); }
    snow(t); }
  if (id === 's3') { kitchen(t); cast('inspector', 560, GY, 0.85, t, { ...DAD, mood: 'worried', look: -1 }); if (t >= tDor - 0.6) { x.save(); x.translate(980, GY); cast('inspector', 0, 0, 0.5, t, { ...KID, mood: 'worried', look: -1 }); x.restore(); } rbox(880, GY - 760, 30, 760, 4, '#2a2438', 6); }
  if (id === 's6') { kitchen(t); cast('inspector', 560, GY, 0.85, t, { ...DAD, mood: 'worried', look: 1 }); }
  if (id === 's7') { room('#e6dcc8', '#d6c8ae', '#6a5a4a', GY); printer(t, true); p47(140, GY, 0.85, t, { mood: 'smug', look: 1 }); cvStack(Math.round(12 * clamp((t - tImp) / 1.5)), t); }
  if (id === 's9') { kitchen(t); const ring = t >= tSon - 0.3 && t < tLun - 0.4; cast('inspector', 560, GY, 0.85, t, { ...DAD, mood: t >= tLun ? 'smile' : (ring ? 'shock' : 'worried'), look: 1, armUp: t >= tSon }); phone(650, GY - 820, ring, t); if (t >= tLun) { x.save(); x.translate(900, GY); cast('inspector', 0, 0, 0.5, t, { ...KID, mood: 'smile', look: -1, armsUp: true }); x.restore(); } }
  if (id === 's10') { room('#f2e6d0', '#e6d6b8', '#7a5a3e', GY); rbox(560, GY - 560, 480, 280, 10, '#c9cdd2', 7); txt('🍳 CUISINE', 800, GY - 420, 50, OL, { stroke: false }); cast('director', 300, GY, 0.85, t, { ...BOSS, mood: 'smile', look: 1, armUp: true }); cast('inspector', 760, GY, 0.85, t, { ...DAD, mood: 'smile', look: -1 }); }
  if (id === 's11' || id === 's12') { sorting(t); postman(560, GY, 0.88, t, { mood: id === 's12' ? (t >= tFen ? 'smile' : 'shock') : 'shock', look: 1, armUp: true }); }
  if (id === 'mid' || id === 'end') { street(t); letterbox(980); postman(560, GY, 0.88, t, { mood: 'smile', look: 1 }); snow(t); }
  if (id === 's2') { street(t); snow(t, 0.6); }
  resetCam(); vignette(0.25);
  if (id === 'ff') { hookCard(t, HOOK, B.ff.end + 0.05); }
  if (id === 's1') { flashCut(t, S('s1')); if (t >= tInt - 0.1) stamp('INTERDIT', P(t, tInt - 0.1, 0.25), 360, C.red); if (t >= tDec - 0.2) pill('💧 ENVELOPPE TREMPÉE… DÉCHIRÉE', 540, 560, P(t, tDec - 0.2), C.blue); }
  if (id === 's2') { flashCut(t, S('s2')); letter(P(t, S('s2'), 0.3), [['Cher Père Noël,', 64], ['cette année,', 60], ['je veux pas', 64], ['de cadeau.', 72, C.red]]); }
  if (id === 's3') { flashCut(t, S('s3')); letter(P(t, S('s3'), 0.25), [['Je veux juste que', 52], ['papa retrouve', 60], ['un travail.', 72, C.red]], -0.02, 420); if (t >= tDor - 0.4) pill('😢 IL PLEURE QUAND IL CROIT QUE JE DORS', 540, 760, P(t, tDor - 0.4), OL); }
  if (id === 's4') { flashCut(t, S('s4')); if (t >= tQ - 0.1) pill('📮 LE FACTEUR = 47', 540, 330, P(t, tQ - 0.1), C.orange); }
  if (id === 's5') { flashCut(t, S('s5')); if (t >= tCent - 0.2) { const n = Math.round(300 * clamp((t - tCent + 0.2) / 1.0)); pill('🏢 ' + n + ' ENTREPRISES', 540, 330, P(t, tCent - 0.2), C.blue); } }
  if (id === 'mid') { flashCut(t, S('mid')); x.fillStyle = 'rgba(15,12,22,.45)'; x.fillRect(0, 0, W, H); paperCard([["QU'EST-CE QU'IL A FAIT ? 🤔", 58]], 540, 330, P(t, S('mid'), 0.25), { w: 880 });
    if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1080, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's6') { flashCut(t, S('s6')); if (t >= tMar - 0.2) pill('👨‍🍳 M. MARTIN · CUISINIER', 540, 330, P(t, tMar - 0.2), C.blue); if (t >= tAn - 0.2) pill('⏳ AU CHÔMAGE DEPUIS 1 AN', 540, 450, P(t, tAn - 0.2), C.red); }
  if (id === 's7') { flashCut(t, S('s7')); const n = Math.round(300 * clamp((t - tImp) / 1.6)); if (t >= tImp) pill('🖨️ ' + n + ' / 300 CV', 540, 330, P(t, tImp), C.blue); }
  if (id === 's8') { flashCut(t, S('s8')); cal8(t); if (t >= tMot - 0.2) letter(P(t, tMot - 0.2), [['« De la part', 64], ['du Père Noël 🎅 »', 64, C.red]], 0.04, 620); }
  if (id === 's9') { flashCut(t, S('s9')); pill('📅 23 DÉCEMBRE', 540, 300, P(t, S('s9') + 0.1), C.red); if (t >= tLun - 0.3) paperCard([['« VOUS COMMENCEZ', 54], ['LUNDI. »', 72, '#2a8a3a']], 540, 520, P(t, tLun - 0.3), { w: 800 }); }
  if (id === 's10') { flashCut(t, S('s10')); if (t >= tSig - 0.3) paperCard([['« SIGNÉ…', 56], ['LE PÈRE NOËL. » 🎅', 64, C.red]], 540, 330, P(t, tSig - 0.3), { w: 820 }); }
  if (id === 's11') { flashCut(t, S('s11')); pill('📅 26 DÉCEMBRE', 540, 300, P(t, S('s11') + 0.1), C.red); if (t >= tEcr - 0.2) pill('✉️ MÊME ÉCRITURE…', 540, 420, P(t, tEcr - 0.2), OL); }
  if (id === 's12') { flashCut(t, S('s12')); letter(P(t, S('s12'), 0.3), t < tPs - 0.2 ? [['Merci Père Noël.', 64], ['Papa ne pleure plus.', 60, C.red]] : [['P.S. : dis merci', 58], ['au facteur…', 64], ['je l\'ai vu', 64], ['par la fenêtre. 🪟', 64, C.red]], -0.02, 560); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ? 🎅', 64], ['QUELQU\'UN A ÉTÉ TON', 44, C.red], ['PÈRE NOËL EN SECRET ?', 44, C.red]], 540, 380, P(t, S('end')), { w: 940 }); }
  if (id !== 'ff') { const a = clamp((t - S('s1')) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
function cal8(t) { const d = 1 + Math.floor(clamp((t - S('s8')) / (B.s8.end - S('s8'))) * 29); rbox(800, 220, 220, 220, 20, '#fff', 7); rbox(800, 220, 220, 70, 20, C.red, 7); txt('JOUR', 910, 258, 36, '#fff', { stroke: false }); txt(String(d), 910, 370, 90, OL, { stroke: false }); }
