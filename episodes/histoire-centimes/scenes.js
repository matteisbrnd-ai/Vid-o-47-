// Histoire du matin — « Les centimes du vieux monsieur » : il paie en centimes pour la regarder plus longtemps ; c'est lui qu'elle avait nourri, petite, en 2002.
window.LOOK = 'gala';
const GY = 1500, GOLD = '#d9a441';
const BAK = { hat: 'hair', hairCol: '#e0b04a', body: '#f4f2ec', body2: '#dcd8cf', pants: '#3a3d44', num: false, collar: true };
const BAKY = { ...BAK, hairCol: '#e0b04a', body: '#e05a7a', body2: '#c4486a' };     // the little girl in 2002
const OLDM = { hat: 'bald', white: true, glasses: true, body: '#6a5a4a', body2: '#584a3c', pants: '#3a3530', num: false, collar: true };
const OLDY = { hat: 'hair', hairCol: '#5a4a3a', body: '#5a5a62', body2: '#4a4a52', pants: '#3a3530', num: false };   // him in 2002
const NOT = { hat: 'hair', hairCol: '#2a2420', glasses: true, body: '#2a2d36', body2: '#1f2229', pants: '#22252c', num: false, collar: true };
const Q = [{ hat: 'hair', hairCol: '#2a1d16', body: '#3f7e8a', body2: '#336a74', pants: '#3a3d44', num: false }, { hat: 'cap', hatCol: '#d6332b', hatCol2: '#b02a23', body: '#e8c46a', body2: '#d0ac52', pants: '#3a5a8a', num: false }, { hat: 'hair', hairCol: '#c96a3a', body: '#7a5ab0', body2: '#654896', pants: '#3a3d44', num: false }];
function bun(px, py, s, col) { ell(px, py - 790 * s, 52 * s, 40 * s, col, 7 * s); }
function baker(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...BAK, ...o }); bun(px, py, s, BAK.hairCol); rbox(px - 95 * s, py - 430 * s, 190 * s, 260 * s, 20 * s, '#fff', 5 * s); }
function oldman(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...OLDM, ...o }); }
function tears(px, py, s, t, k) { if (k <= 0) return; [-1, 1].forEach(d => { const ph = (t * 1.3 + (d > 0 ? 0.5 : 0)) % 1; x.save(); x.globalAlpha = k; ell(px + d * 48 * s, py - 590 * s + ph * 120 * s, 10 * s, 15 * s, '#7cc8ff', 3 * s); x.restore(); }); }
function coins(cx, cy, n, s = 1, seed = 1) { for (let i = 0; i < n; i++) { const a = (i * 2.399 + seed), r = 14 * Math.sqrt(i) * s; ell(cx + Math.cos(a) * r * 2.2, cy + Math.sin(a) * r * 0.5, 15 * s, 8 * s, i % 3 ? GOLD : '#b8742e', 3 * s); } }
function bakery(t, o = {}) { room('#f3e1c2', '#ead2ad', '#b98a5a', GY); rbox(-100, 300, 1280, 110, 0, '#8a3a2a', 0); txt('BOULANGERIE', 540, 372, 70, '#ffe7a8', { stroke: false });
  for (let r = 0; r < 3; r++) { rbox(60, 520 + r * 190, 960, 22, 6, '#8a5a32', 5); for (let i = 0; i < 9; i++) { if (r === 2) ell(130 + i * 100, 500 + r * 190, 42, 26, '#d9963a', 4); else { x.save(); x.translate(110 + i * 105, 480 + r * 190); x.rotate(-0.5); rbox(-14, -80, 28, 160, 14, '#d9a05a', 4); x.restore(); } } }
  if (o.counter !== false) { rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6); rbox(60, GY - 400, 960, 200, 10, 'rgba(200,235,255,.55)', 5);
    for (let i = 0; i < 7; i++) ell(140 + i * 130, GY - 260, 46, 30, i % 2 ? '#e0a050' : '#c8783a', 4); rbox(780, GY - 640, 220, 180, 14, '#3a3d44', 7); rbox(800, GY - 625, 180, 60, 8, '#7cff8a', 4); txt('1,10 €', 890, GY - 585, 36, '#1a3a1a', { stroke: false }); } }
function storefront(t) { sky('#9fcbea', '#dceef8', GY - 200); x.fillStyle = '#9a9aa2'; x.fillRect(-1200, GY - 200, 3500, 1200); x.fillStyle = '#b8b8c0'; x.fillRect(-1200, GY - 200, 3500, 30);
  rbox(-60, 420, 1200, GY - 620, 0, '#e8d8bc', 8); rbox(-60, 420, 1200, 110, 0, '#8a3a2a', 0); txt('BOULANGERIE', 540, 492, 70, '#ffe7a8', { stroke: false }); rbox(80, 620, 560, 520, 8, '#bfe4ff', 7); rbox(720, 620, 260, GY - 820, 8, '#6a3a2a', 7);
  for (let i = 0; i < 5; i++) { x.save(); x.translate(160 + i * 100, 1000); x.rotate(-0.5); rbox(-12, -70, 24, 140, 12, '#d9a05a', 4); x.restore(); } }
function tinbox(cx, cy, s, open) { x.save(); x.translate(cx, cy); x.scale(s, s); rbox(-240, -120, 480, 240, 18, '#7a8a96', 8); x.strokeStyle = 'rgba(0,0,0,.2)'; x.lineWidth = 6; x.strokeRect(-220, -100, 440, 200);
  if (open > 0) { rbox(-240, -120 - 220 * open, 480, 60, 14, '#8a9aa6', 7); coins(0, -80, 90, 1.1, 3); } else rbox(-250, -140, 500, 60, 14, '#8a9aa6', 7); x.restore(); }
function photoScene(w, h) { x.fillStyle = '#e8d8bc'; x.fillRect(0, 0, w, h); x.fillStyle = '#8a3a2a'; x.fillRect(0, 0, w, h * 0.16); x.fillStyle = '#9a9aa2'; x.fillRect(0, h * 0.78, w, h * 0.22);
  x.save(); x.translate(w * 0.3, h * 0.92); toon(0, 0, 0.34, { t: 0, ...BAKY, mood: 'smile', look: 1, armUp: true }); ell(0, -0.34 * 790, 0.34 * 52, 0.34 * 40, BAKY.hairCol, 2); x.restore();
  x.save(); x.translate(w * 0.72, h * 0.98); toon(0, 0, 0.3, { t: 0, ...OLDY, mood: 'worried', look: -1 }); x.restore(); ell(w * 0.5, h * 0.6, 22, 14, '#d9963a', 2); x.fillStyle = 'rgba(160,120,60,.25)'; x.fillRect(0, 0, w, h); }
function noteCard(p, lines) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, 760); const k = eBack(clamp(p)); x.scale(k, k); x.rotate(0.02); rbox(-460, -300, 920, 600, 10, '#f4ecd8', 8);
  lines.forEach((l, i) => { x.save(); x.font = 'italic 600 50px Georgia, serif'; x.fillStyle = '#2a2a3a'; x.textAlign = 'center'; x.fillText(l, 0, -170 + i * 90); x.restore(); }); x.restore(); }

function draw(t) {
  const id = curId(t), s0 = S(id), w = (b, r) => WF(b, r);
  const tCen = w('ff', /centime/i), tHum = w('ff', /humilié/i), tGar = w('s1', /gardez/i), tBos = w('s1', /bossent/i), tRig = w('s2', /rigolé/i), tSou = w('s2', /souri/i), tUne = w('s2', /Une/),
    tPou = w('s3', /Pourquoi/i), tTem = w('s4', /temps/i), tReg = w('s4', /regarder/i), tLen = w('s5', /lendemain/i), tJou = w('s5', /jour/i), tSem = w('s5', /semaine/i), tFin = w('mid', /fin/i), tHis = w('mid', /histoire/i),
    tNot = w('s6', /notaire/i), tFer = w('s6', /fer/i), tMil = w('s7', /milliers/i), tPho = w('s7', /photo/i), tGou = w('s7', /goûter/i), tGra = w('s9', /grandir/i), tPle = w('s10', /pleuré/i), tPer = w('s10', /personne/i), tPot = w('end', /pot/i), tHisE = w('end', /histoire/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99;
  let K;
  if (id === 'ff') K = [[0, 0, 470, 1000, 1.35], [0.05, 3, 520, 960, 1.15], [tHum - 0.3, 0.5, 640, 860, 1.35]];
  else if (id === 's1') K = [[s0, 0, 700, 860, 1.5], [s0 + 0.1, 3, 700, 840, 1.6]];
  else if (id === 's2') K = t < tSou - 0.1 ? [[s0, 0, 540, 1000, 0.95], [s0 + 0.1, 2, 540, 980, 1.0]] : [[tSou - 0.1, 0, 380, 900, 1.5], [tUne - 0.2, 1.0, 380, 1050, 1.6]];
  else if (id === 's8') K = [[s0, 0, 540, 860, 1.3], [s0 + 0.1, 2, 540, 820, 1.6]];
  else K = [[s0, 0, 540, 960, 1.0], [s0 + 0.1, 5, 540, 930, 1.08]];
  const shk = (id === 'ff' && t >= tHum && t < tHum + 0.4) || (id === 's1' && t >= tBos && t < tBos + 0.4) || (id === 's8' && t < s0 + 0.5) ? 12 : 0;
  camPath(t, K, shk); const re = () => camPath(t, K, shk);
  // ---------- world ----------
  if (id === 'ff' || id === 's1' || id === 's2') { bakery(t, { counter: false }); baker(660, GY - 300, 0.8, t, { mood: (id === 's1' || (id === 'ff' && t >= tHum)) ? 'smug' : 'neutral', look: -1, armUp: id === 's1' });
    rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6); rbox(780, GY - 640, 220, 180, 14, '#3a3d44', 7); rbox(800, GY - 625, 180, 60, 8, '#7cff8a', 4); txt('1,10 €', 890, GY - 585, 36, '#1a3a1a', { stroke: false });
    for (let i = 0; i < 3; i++) toon(860 + i * 150, GY + 60, 0.75, { t, blink: true, ...Q[i], mood: (id === 's2' && t >= tRig && t < tSou - 0.1) ? 'smile' : 'neutral', look: -1 }); p47(40, GY + 60, 0.8, t, { mood: id === 's2' && t >= tRig ? 'worried' : 'neutral', look: 1, blink: true }); const nC = id === 's2' && t >= tUne ? Math.max(0, Math.round(110 * (1 - clamp((t - tUne) / 2.2)))) : Math.round(110 * clamp((t - 0.3) / 3)); coins(420, GY - 480, nC, 1, 1);
    oldman(330, GY + 40, 0.95, t, { mood: id === 's2' && t >= tSou ? 'smile' : 'worried', look: 1, armUp: id === 'ff' && t < tHum, sweat: id === 's1' }); if (id === 's2' && t >= tRig && t < tSou) speech('😂', 1010, 780, P(t, tRig), 60); }
  if (id === 's3' || id === 's4') { storefront(t); re(); oldman(620, GY, 0.95, t, { mood: id === 's4' ? 'smile' : 'neutral', look: -1, walk: id === 's3' && t < tPou ? t : 0 }); p47(300, GY, 0.95, t, { mood: id === 's4' && t >= tReg ? 'shock' : 'neutral', look: 1, blink: true });
    if (id === 's4' && t >= tReg - 0.2) { x.save(); x.globalAlpha = clamp((t - tReg + 0.2) / 0.5); baker(870, GY - 140, 0.45, t, { mood: 'neutral', look: -1 }); x.restore(); } }
  if (id === 's5') { bakery(t); re(); const n = t < tJou ? 1 : t < tSem ? 2 : 7; baker(540, GY - 300, 0.8, t, { mood: 'neutral', look: 0 }); rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6);
    resetCam(); rbox(380, 560, 320, 300, 14, '#fff', 7); rbox(380, 560, 320, 80, 14, C.red, 0); txt('JOUR', 540, 610, 44, '#fff', { stroke: false }); txt(String(n), 540, 760, 120, OL, { stroke: false }); }
  if (id === 'mid') { bakery(t); re(); baker(540, GY - 300, 0.8, t, { mood: 'worried', look: 1 }); rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6); }
  if (id === 's6' || id === 's7') { bakery(t, { counter: false }); re(); baker(720, GY - 300, 0.8, t, { mood: id === 's7' && t >= tPho ? 'shock' : 'worried', look: -1 }); 
    rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6); toon(230, GY + 60, 0.95, { t, blink: true, ...NOT, mood: 'neutral', look: 1 }); if (t >= tFer - 0.3) tinbox(540, GY - 560, 0.8, id === 's7' ? clamp((t - s0) / 0.6) : 0); }
  if (id === 's8') { bakery(t, { counter: false }); dim0(0.25); re(); baker(540, GY + 500, 1.6, t, { mood: 'shock', look: 0 }); }
  if (id === 's9') { bakery(t, { counter: false }); dim0(0.45); re(); }
  if (id === 's10') { bakery(t, { counter: false }); re(); baker(560, GY - 300, 0.8, t, { mood: 'worried', look: 0 }); tears(560, GY - 300, 0.8, t, clamp((t - tPle) / 0.4));
    rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6); for (let i = 0; i < 3; i++) toon(860 + i * 150, GY + 60, 0.75, { t, blink: true, ...Q[i], mood: 'worried', look: -1 }); p47(120, GY + 60, 0.8, t, { mood: 'worried', look: 1 }); }
  if (id === 'end') { bakery(t, { counter: false }); re(); baker(720, GY - 300, 0.8, t, { mood: 'smile', look: -1 }); rbox(-60, GY - 440, 1200, 440, 10, '#c98a52', 8); rbox(-60, GY - 470, 1200, 50, 10, '#7a4a2a', 6);
    rbox(260, GY - 760, 240, 300, 40, 'rgba(200,235,255,.6)', 7); coins(380, GY - 520, 60, 0.9, 2); rbox(230, GY - 820, 300, 70, 12, '#f4ecd8', 5); txt('POUR TOI 🧡', 380, GY - 783, 34, OL, { stroke: false }); }
  vignette(0.35); resetCam();
  // ---------- overlays ----------
  if (id === 'ff') { hookCard(t, [['IL PAIE EN CENTIMES…', 62], ['ELLE L\'HUMILIE 😡', 66, C.red]], 2.6, 'TU T\'ATTENDS PAS À LA FIN 😳'); if (t >= tCen - 0.1) pill('🪙 110 PIÈCES D\'1 CENTIME', 540, 330, P(t, tCen - 0.1), GOLD); if (t >= tHum - 0.1) stamp('HUMILIÉ', P(t, tHum - 0.1), 460, C.red); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1') { paperCard([['« GARDEZ VOS CENTIMES, PAPY ! »', 48]], 540, 330, P(t, tGar - 0.3), { w: 960 }); if (t >= tBos - 0.2) paperCard([['« Y A DES GENS QUI BOSSENT ! »', 48, C.red]], 540, 500, P(t, tBos - 0.2), { w: 900 }); }
  if (id === 's2') { if (t >= tRig - 0.1 && t < tSou - 0.1) pill('😂 TOUTE LA FILE RIGOLE', 540, 330, P(t, tRig - 0.1), C.red); if (t >= tSou - 0.1) { flashCut(t, tSou - 0.1); pill('LUI… IL SOURIT', 540, 330, P(t, tSou - 0.1), '#2a8a3a'); } }
  if (id === 's3' && t >= tPou - 0.2) paperCard([['« POURQUOI DES CENTIMES ? »', 54]], 540, 330, P(t, tPou - 0.2), { w: 900 });
  if (id === 's4') { if (t >= tTem - 0.4) paperCard([['« COMPTER, ÇA PREND DU TEMPS… »', 48]], 540, 330, P(t, tTem - 0.4), { w: 960 }); if (t >= tReg - 0.2) pill('« …POUR LA REGARDER » 😳', 540, 500, P(t, tReg - 0.2), C.red); }
  if (id === 's5' && t >= tLen - 0.2) pill('IL NE REVIENT PLUS…', 540, 330, P(t, tLen - 0.2), '#4a4a55');
  if (id === 'mid') { paperCard([['POURQUOI LA REGARDER ? 🤔', 56]], 540, 330, P(t, s0, 0.25), { w: 900 }); if (t >= tFin - 0.2 && t < tHis - 0.4) pill('LA FIN, TU T\'Y ATTENDS PAS 😳', 540, 520, P(t, tFin - 0.2), C.red);
    if (t >= tHis - 0.4) paperCard([['TON HISTOIRE EN DESSIN ANIMÉ 🎬', 48], ['LA + LIKÉE = PROCHAIN ÉPISODE', 44, C.red]], 540, 1050, P(t, tHis - 0.4), { w: 960 }); }
  if (id === 's6') { if (t >= tNot - 0.2) pill('📜 UN NOTAIRE', 540, 330, P(t, tNot - 0.2), '#2a2d36'); if (t >= tFer - 0.2) pill('…ET UNE BOÎTE EN FER', 540, 450, P(t, tFer - 0.2), '#4a4a55'); }
  if (id === 's7') { if (t >= tMil - 0.2 && t < tPho - 0.2) pill('🪙 DES MILLIERS DE CENTIMES', 540, 330, P(t, tMil - 0.2), GOLD); if (t >= tPho - 0.2) polaroid(540, 700, 640, 520, P(t, tPho - 0.2), photoScene, '2002', -0.03); }
  if (id === 's8') { polaroid(810, 560, 340, 280, 1, photoScene, '2002', 0.08); stamp('C\'ÉTAIT ELLE', P(t, s0 + 0.2), 300, C.red); }
  if (id === 's9') noteCard(P(t, s0, 0.3), ['Tu m\'as donné à manger', 'quand je n\'avais plus rien.', t >= tGra - 1.6 ? 'Je suis revenu chaque matin…' : '', t >= tGra - 0.2 ? '…pour te voir grandir.' : '']);
  if (id === 's10') { if (t >= tPle - 0.1) pill('😢 ELLE PLEURE', 540, 330, P(t, tPle - 0.1), C.blue); if (t >= tPer - 0.2) pill('PERSONNE NE RIGOLE', 540, 450, P(t, tPer - 0.2), OL); }
  if (id === 'end') { if (t >= tPot - 0.2) pill('🫙 UN POT POUR CEUX QUI N\'ONT RIEN', 540, 330, P(t, tPot - 0.2), GOLD); if (t >= tHisE - 0.2) pill('TON HISTOIRE EN COMMENTAIRE 👇', 540, 450, P(t, tHisE - 0.2), ORA0); }
  if (t >= 5) { const a = clamp((t - 5) / 0.4); x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN DESSIN ANIMÉ ? ÉCRIS-LA EN COMMENTAIRE', 540, 1537, 38, '#fff', { stroke: false }); x.restore(); }
}
const ORA0 = '#f2782a';
function dim0(a) { resetCam(); x.fillStyle = `rgba(20,14,10,${a})`; x.fillRect(0, 0, W, H); }
