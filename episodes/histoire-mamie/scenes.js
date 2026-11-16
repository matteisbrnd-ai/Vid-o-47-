// Les histoires de 47 #2 — « Le cahier de Mamie Jeanne ». Kitchen / living room world (GY 1500) + full-screen prop inserts (portrait, agenda, lettre, télé/bijoux, cahier).
window.LOOK = 'gala';
const GY = 1500;
const MAMIE = { hat: 'hair', hairCol: '#ecebe6', glasses: true, body: '#8a6aa8', body2: '#6f5590', pants: '#5a4a6a', num: false, collar: true };
const TOM = { hat: 'hair', hairCol: '#7a4a22', body: '#4f9a5a', body2: '#3f7e48', pants: '#3a4a6a', num: false };
function mamie(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...MAMIE, ...o }); ell(px, py - 840 * s, 62 * s, 50 * s, '#ecebe6', 7 * s); }
function tom(px, py, s, t, o = {}) { toon(px, py, s, { t, blink: true, ...TOM, ...o }); }
function bowl(cx, cy, s, t, steam = 1) { x.save(); x.translate(cx, cy); x.scale(s, s); x.beginPath(); x.moveTo(-110, -20); x.quadraticCurveTo(-100, 80, 0, 85); x.quadraticCurveTo(100, 80, 110, -20); x.closePath(); fs('#f2efe6', 7);
  ell(0, -20, 110, 26, '#e88a3a', 6); if (steam > 0) { x.strokeStyle = `rgba(255,255,255,${0.75 * steam})`; x.lineWidth = 10; x.lineCap = 'round'; [-40, 0, 40].forEach((a, i) => { x.beginPath(); for (let k = 0; k <= 12; k++) { const yy = -50 - k * 12, xx = a + Math.sin(t * 4 + k * 0.6 + i) * 14; k ? x.lineTo(xx, yy) : x.moveTo(xx, yy); } x.stroke(); }); } x.restore(); }
function tvSet(cx, cy, s, t, broken = false) { x.save(); x.translate(cx, cy); x.scale(s, s); rbox(-230, -150, 460, 300, 24, '#2a2a30', 9); rbox(-200, -125, 400, 250, 10, broken ? '#555' : '#7fb6d8', 6);
  if (broken) { x.strokeStyle = '#ddd'; x.lineWidth = 6; x.beginPath(); x.moveTo(-60, -125); x.lineTo(-10, -30); x.lineTo(-70, 40); x.lineTo(20, 125); x.stroke(); x.fillStyle = 'rgba(255,255,255,.15)'; for (let i = 0; i < 40; i++) x.fillRect(-200 + ((i * 97 + t * 900) % 400), -125 + ((i * 53) % 250), 8, 4); }
  rbox(-60, 150, 120, 30, 6, '#2a2a30', 6); x.restore(); }
function jewel(cx, cy, s, t, fake = false) { x.save(); x.translate(cx, cy); x.scale(s, s); rbox(-170, -40, 340, 150, 14, '#7a2a3a', 8); x.save(); x.translate(0, -40); x.rotate(-0.35); rbox(-170, -120, 340, 120, 14, '#8f3446', 8); x.restore();
  [['#e8452c', -90], ['#3fa0e0', 0], ['#5fd06a', 90]].forEach(([c, a], i) => { ell(a, -30 + (i % 2) * 14, 30, 30, c, 6); if (!fake) { x.fillStyle = 'rgba(255,255,255,.8)'; x.fillRect(a - 12, -44 + (i % 2) * 14, 10, 10); } });
  x.strokeStyle = '#e2b649'; x.lineWidth = 9; x.beginPath(); x.arc(0, 40, 60, 0.1, Math.PI - 0.1); x.stroke(); x.restore(); }
function notebook(cx, cy, s, open = false) { x.save(); x.translate(cx, cy); x.scale(s, s); if (!open) { rbox(-150, -200, 300, 400, 14, '#b5543a', 8); rbox(-110, -120, 220, 90, 8, '#efe6d0', 5); txt('RECETTES', 0, -74, 40, OL, { stroke: false }); }
  else { rbox(-430, -300, 860, 600, 16, '#efe6d0', 9); x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(-6, -300, 12, 600); } x.restore(); }
function keyIcon(cx, cy, s, t) { x.save(); x.translate(cx, cy); x.rotate(-0.4); x.scale(s, s); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(0, 0, 10, 0, 0, 200); g.addColorStop(0, 'rgba(255,220,120,.6)'); g.addColorStop(1, 'rgba(255,220,120,0)'); x.fillStyle = g; x.fillRect(-200, -200, 400, 400); x.restore();
  ell(-70, 0, 55, 55, '#e2b649', 8); ell(-70, 0, 20, 20, '#3a2a1e', 0); rbox(-20, -16, 170, 32, 6, '#e2b649', 7); rbox(110, 10, 22, 40, 4, '#e2b649', 6); rbox(70, 10, 22, 30, 4, '#e2b649', 6); x.restore(); }
function kitchen(t, nightK = false) { room(nightK ? '#4a5a7a' : '#f3d9a8', nightK ? '#33405a' : '#e7c48a', nightK ? '#5a4a3a' : '#b98a5a', GY);
  for (let i = -6; i < 12; i++) { x.fillStyle = (i % 2) ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.04)'; x.fillRect(i * 120, GY - 520, 120, 120); }
  rrc(820, 560, 300, 260, 10, nightK ? '#1d2440' : '#bfe0f4', 9); x.strokeStyle = OL; x.lineWidth = 9; x.beginPath(); x.moveTo(820, 430); x.lineTo(820, 690); x.moveTo(670, 560); x.lineTo(970, 560); x.stroke(); if (nightK) ell(880, 500, 34, 34, '#f4f0d0', 0);
  rbox(-200, GY - 420, 380, 420, 8, '#e9e4da', 8); rbox(-180, GY - 470, 340, 50, 8, '#cfc7b8', 7); ell(-20, GY - 480, 70, 30, '#3a3a3a', 6); }
function table(cx, y, w) { rbox(cx - w / 2, y, w, 40, 10, '#8a5a32', 8); rbox(cx - w / 2 + 30, y + 40, 30, GY - y - 40, 4, '#7a4a28', 6); rbox(cx + w / 2 - 60, y + 40, 30, GY - y - 40, 4, '#7a4a28', 6); }
function living(t) { room('#cfe0d0', '#b2c9b4', '#9a6e4a', GY); for (let i = -8; i < 20; i++) { x.fillStyle = 'rgba(255,255,255,.18)'; x.fillRect(i * 90, -800, 30, GY + 800); }
  rbox(-60, 620, 260, 210, 8, '#c9973a', 9); rbox(-40, 640, 220, 170, 4, '#e9d9b8', 5); mamieHead(70, 730, 0.28, t); rbox(-150, GY - 260, 420, 260, 30, '#a2465a', 8); rbox(-170, GY - 330, 460, 100, 30, '#b5566a', 8); }
function mamieHead(cx, cy, s, t) { x.save(); x.beginPath(); x.rect(cx - 400 * s, cy - 400 * s, 800 * s, 800 * s); x.clip(); mamie(cx, cy + 560 * s, s, t, { mood: 'smile' }); x.restore(); }
function portrait(t) { resetCam(); x.fillStyle = vg(0, H, '#5a3a2a', '#2a1a14'); x.fillRect(0, 0, W, H); const fl = 0.85 + 0.15 * Math.sin(t * 13) * Math.sin(t * 7);
  x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 50, 540, 1000, 800); g.addColorStop(0, `rgba(255,180,90,${0.35 * fl})`); g.addColorStop(1, 'rgba(255,180,90,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  rbox(230, 640, 620, 760, 12, '#c9973a', 12); rbox(270, 680, 540, 680, 6, '#e9d9b8', 6); x.save(); x.beginPath(); x.rect(270, 680, 540, 680); x.clip(); mamie(540, 1680, 0.9, t, { mood: 'smile' }); x.restore();
  poly([[690, 640], [862, 640], [862, 812]], '#111', 6); poly([[730, 640], [862, 772], [862, 720], [782, 640]], '#2a2a2a', 0);
  [[200, 1560], [880, 1560]].forEach(([cx, cy]) => { rbox(cx - 34, cy - 160, 68, 220, 10, '#f4efe0', 6); const f = 1 + 0.1 * Math.sin(t * 17 + cx); ell(cx, cy - 200, 22 * f, 40 * f, '#ffb43a', 5); ell(cx, cy - 192, 10, 20, '#fff2b0', 0); }); }
function agenda(t, tV) { resetCam(); x.fillStyle = '#3a2a22'; x.fillRect(0, 0, W, H); x.save(); x.translate(540, 1000); x.rotate(-0.04); rbox(-470, -620, 940, 1240, 18, '#7a3a2a', 10); rbox(-430, -580, 860, 1160, 10, '#f6f0e0', 6);
  x.strokeStyle = 'rgba(80,120,180,.35)'; x.lineWidth = 4; for (let y = -460; y < 560; y += 120) { x.beginPath(); x.moveTo(-400, y); x.lineTo(400, y); x.stroke(); }
  txt('AGENDA', 0, -520, 64, '#7a3a2a', { stroke: false });
  [['LUNDI : pharmacie', -400], ['MERCREDI : coiffeur', -280], ['JEUDI : soupe pour Tom', -160]].forEach(([s, y]) => txt(s, 0, y, 56, '#33405a', { stroke: false }));
  txt('SAMEDI 15H :', 0, 30, 70, '#33405a', { stroke: false }); const p = P(t, tV, 0.25); txt('LE VOLEUR', 0, 160, 110, C.red, { stroke: false });
  if (p > 0) { x.strokeStyle = C.red; x.lineWidth = 12; x.beginPath(); x.ellipse(0, 160, 340, 100, -0.05, -0.5, -0.5 + Math.PI * 2 * clamp(p)); x.stroke(); } x.restore(); }
function letter(t, p) { resetCam(); x.fillStyle = '#2a2230'; x.fillRect(0, 0, W, H); if (p <= 0) return; x.save(); x.translate(540, 980); const k = eOut(clamp(p)); x.rotate((1 - k) * 0.5 - 0.03); x.scale(0.5 + 0.5 * k, 0.5 + 0.5 * k);
  rbox(-440, -560, 880, 1120, 8, '#f6efdc', 8); x.strokeStyle = 'rgba(80,120,180,.3)'; x.lineWidth = 4; for (let y = -420; y < 500; y += 110) { x.beginPath(); x.moveTo(-390, y); x.lineTo(390, y); x.stroke(); }
  txt('Mon petit 47,', -150, -470, 58, '#33405a', { stroke: false }); keyIcon(300, -470, 0.6, t); [['Mes 3 petits-enfants', -330], ['vont fouiller ma maison.', -220], ['Laisse-les prendre', -60], ['ce qu\'ils veulent…', 50], ['… et REGARDE.', 210]].forEach(([s, y], i) => txt(s, 0, y, i === 4 ? 80 : 64, i === 4 ? C.red : '#33405a', { stroke: false }));
  txt('Jeanne ♥', 200, 420, 60, '#33405a', { stroke: false }); x.restore(); }
function verdict(t, tP, tT) { resetCam(); x.fillStyle = '#20182a'; x.fillRect(0, 0, W, H); rbox(40, 260, 1000, 620, 30, '#2f3a52', 0); rbox(40, 960, 1000, 620, 30, '#4a2f3a', 0);
  jewel(540, 600, 1.3, t, t >= tT); tvSet(540, 1260, 1.2, t, t >= tP);
  if (t >= tP) { x.save(); resetCam(); x.globalAlpha = 0.6; for (let i = 0; i < 4; i++) { const k = ((t - tP) * 0.8 + i * 0.25) % 1; ell(640 + Math.sin(i * 2) * 60, 1080 - k * 200, 40 + k * 60, 40 + k * 60, '#888', 0); } x.restore(); stamp('EN PANNE', P(t, tP, 0.25), 1490); }
  if (t >= tT) stamp('DU TOC', P(t, tT, 0.25), 760); }
function recipe(t) { resetCam(); x.fillStyle = vg(0, H, '#f3d9a8', '#e0b878'); x.fillRect(0, 0, W, H); x.save(); x.translate(540, 940); notebook(0, 0, 1.05, true);
  txt('LA SOUPE', -215, -210, 70, '#7a3a2a', { stroke: false }); txt('DE MAMIE', -215, -130, 70, '#7a3a2a', { stroke: false }); bowl(-215, 90, 1.1, t);
  [['3 carottes', -200], ['2 poireaux', -110], ['1 pincée de sel', -20], ['et beaucoup', 90], ['d\'amour ♥', 180]].forEach(([s, y], i) => txt(s, 215, y, 50, i > 2 ? C.red : '#33405a', { stroke: false })); x.restore(); }
function draw(t) {
  const id = curId(t), tV = WF('ff', /voleur/i), tDen = WF('s1', /dénoncé/i), tSo = WF('s1', /soupe/i), tEt = WF('s2', /était/i), tDim = WF('s2', /dimanche/i),
    tTel = WF('s4', /télé/i), tBij = WF('s5', /bijoux/i), tCah = WF('s6', /cahier/i), tPan = WF('s7', /panne/i), tToc = WF('s7', /toc/i), tDet = WF('s7', /dettes/i),
    tCle = WF('s8', /clé/i), tMam = WF('s8', /Mamie/i), tCah2 = WF('s8', /cahier/i), tSoup = WF('s9', /soupe/i), tVr = WF('s9', /vraiment/i);
  // ---------- inserts ----------
  if (id === 'ff') { if (t < tV - 0.15) portrait(t); else { reveal(t, tV); flashCut(t, tV - 0.15); } hookCard(t, [['L\'HÉRITIER ?', 84], ['UN VOLEUR VA LE CHOISIR 😳', 62, C.red]], B.ff.end + 0.1); return; }
  if (id === 's3') { letter(t, seg(t, S('s3'), S('s3') + 0.5)); flashCut(t, S('s3')); return; }
  if (id === 's7') { verdict(t, tPan, tToc); if (t >= tDet) pill('💸 POUR PAYER LES DETTES DE KEVIN', 540, 900, P(t, tDet), C.red); flashCut(t, S('s7')); return; }
  if (id === 's9' && t < tVr - 0.2) { recipe(t); flashCut(t, S('s9')); return; }
  // ---------- world ----------
  let K;
  if (id === 's1') K = [[S('s1'), 0, 540, 1000, 0.9], [tSo - 0.1, 0.3, 700, 980, 1.1]];
  else if (id === 's2') K = [[S('s2'), 0, 540, 1000, 1.1], [tDim, 1.0, 540, 1050, 0.95]];
  else if (id === 's4' || id === 's5' || id === 's6') K = [[S(id), 0, 560, 1080, 1.1], [S(id) + 0.2, 2, 580, 1080, 1.2]];
  else if (id === 's8') K = [[S('s8'), 0, 540, 1000, 0.95], [tCle, 0.3, 380, 950, 1.2], [tMam, 0.4, 540, 1000, 0.95]];
  else K = [[0, 0, 540, 1000, 0.95]];
  camPath(t, K);
  if (id === 's1') { kitchen(t, true); p47(300, GY, 0.85, t, { mood: t < tSo ? 'shock' : 'smile', look: 1 }); bag(80, GY - 20, 0.8); mamie(800, GY, 0.82, t, { mood: t < tDen ? 'worried' : 'smile', look: -1 }); table(560, GY - 360, 420);
    if (t >= tSo) bowl(560, GY - 400, 0.9 * eBack(clamp(P(t, tSo))), t); night(0.22); }
  if (id === 's2') { kitchen(t); table(540, GY - 360, 760); p47(280, GY, 0.85, t, { mood: 'smile', look: 1 }); mamie(800, GY, 0.82, t, { mood: 'smile', look: -1 }); bowl(400, GY - 400, 0.75, t); bowl(680, GY - 400, 0.75, t); }
  if (id === 's4') { living(t); cast('rico', 400, GY, 0.9, t, { mood: 'smug', look: 1, hat: 'hair', hairCol: '#2a1a12', body: '#c9a23a', body2: '#a8862c' }); jewel(740, GY - 330, 0.8 * eBack(clamp(P(t, S('s4') + 1.0))), t); }
  if (id === 's5') { living(t); cast('woman', 400, GY, 0.9, t, { mood: 'smile', look: -1 }); tvSet(740, GY - 330, 0.75 * eBack(clamp(P(t, S('s5') + 0.9))), t); }
  if (id === 's6') { living(t); tom(400, GY, 0.75, t, { mood: t >= tCah - 1.5 ? 'smile' : 'worried', look: 1 }); notebook(700, GY - 300, 0.65 * eBack(clamp(P(t, tCah - 1.5)))); }
  if (id === 's8') { sky('#9fcbea', '#dceef8', GY); rbox(-1200, 150, 3500, GY - 150, 0, '#e8c9a0', 0); bricks('#d8b48a', '#c9a27a', 150, GY); door(780, GY - 640, 300, 640, '#3a6a9a'); x.fillStyle = '#9a9a9a'; x.fillRect(-1200, GY, 3500, 1400);
    p47(320, GY, 0.85, t, { mood: 'smile', look: 1, armUp: t >= tCle }); if (t >= tCle) keyIcon(470, GY - 900, 0.9 * eBack(clamp(P(t, tCle))), t); tom(800, GY, 0.75, t, { mood: t >= tCah2 ? 'shock' : 'worried', look: -1 }); }
  if (id === 's9' || id === 'end') { kitchen(t); table(540, GY - 360, 760); p47(280, GY, 0.85, t, { mood: 'smile', look: 1 }); tom(800, GY, 0.75, t, { mood: 'smile', look: -1 }); bowl(400, GY - 400, 0.75, t); bowl(680, GY - 400, 0.75, t);
    if (id === 's9') { x.save(); x.globalAlpha = 0.5; mamieHead(540, 400, 0.4, t); x.restore(); } }
  vignette(0.25);
  // ---------- overlays ----------
  if (id === 's1') { pill('🌙 IL Y A 10 ANS', 540, 300, P(t, S('s1') + 0.1), C.blue); if (t >= tDen) pill('🚫 PAS DE POLICE', 540, 420, P(t, tDen), C.red); if (t >= tSo) pill('🍲 … MAIS UNE SOUPE', 540, 540, P(t, tSo), C.orange); }
  if (id === 's2') { if (t >= tEt) banner('LE VOLEUR = 47', 540, 330, P(t, tEt), C.orange); if (t >= tDim) pill('🍲 CHAQUE DIMANCHE', 540, 480, P(t, tDim), C.green); }
  if (id === 's4') { banner('KEVIN', 540, 300, P(t, S('s4') + 0.05), C.blue); pill('💸 VENAIT POUR L\'ARGENT', 540, 440, P(t, S('s4') + 0.6), C.brown); pill('💎 PREND LES BIJOUX', 540, 560, P(t, S('s4') + 1.0), C.red); }
  if (id === 's5') { banner('INÈS', 540, 300, P(t, S('s5') + 0.05), '#b5486a'); pill('📞 1 APPEL PAR AN', 540, 440, P(t, S('s5') + 0.6), C.brown); pill('📺 PREND LA TÉLÉ', 540, 560, P(t, S('s5') + 0.9), C.red); }
  if (id === 's6') { banner('TOM', 540, 300, P(t, S('s6') + 0.05), C.green); pill('🍲 LÀ CHAQUE DIMANCHE', 540, 440, P(t, S('s6') + 0.6), C.brown); pill('📖 PREND… UN CAHIER ?!', 540, 560, P(t, tCah - 1.5), C.orange); }
  if (id === 's8') { if (t >= tMam) paperCard([['LA MAISON', 80], ['→ À CELUI QUI PREND LE CAHIER', 46, C.red]], 540, 360, P(t, tMam), { w: 940 }); }
  if (id === 's9') { flashCut(t, tVr - 0.2); pill('IL SAVAIT CE QU\'ELLE VALAIT ♥', 540, 330, P(t, tVr - 0.1), C.red); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ?', 80], ['T\'AURAIS PRIS QUOI ? 💬', 54, C.red]], 540, 300, P(t, S('end')), { w: 900 });
    [['📺 TÉLÉ', 200, C.blue], ['💎 BIJOUX', 540, '#b5486a'], ['📖 CAHIER', 880, C.green]].forEach(([s, px, col], i) => { const p = P(t, S('end') + 0.3 + i * 0.15); if (p <= 0) return; x.save(); resetCam(); x.translate(px, 560); const k = eBack(clamp(p)) * (1 + 0.04 * Math.sin(t * 8 + i)); x.scale(k, k); rrc(0, 0, 310, 120, 28, col, 8); txt(s, 0, 4, 54, '#fff', { stroke: false }); x.restore(); }); }
  if (id === 's1') flashCut(t, S('s1')); if (id === 's2') flashCut(t, S('s2')); ['s4', 's5', 's6', 's8'].forEach(k => { if (id === k) flashCut(t, S(k)); });
}
function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }

function reveal(t, tV) { resetCam(); x.fillStyle = '#16121e'; x.fillRect(0, 0, W, H); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 40, 540, 1100, 700); g.addColorStop(0, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  const k = eOut(clamp(seg(t, tV - 0.15, tV + 0.5))); x.save(); x.translate(540, 1750); x.scale(0.9 + 0.15 * k, 0.9 + 0.15 * k); p47(0, 0, 1.15, t, { mood: 'smug', look: 0, armUp: true }); x.restore(); keyIcon(760, 760, 1.1 * eBack(clamp(P(t, tV + 0.1))), t); }
