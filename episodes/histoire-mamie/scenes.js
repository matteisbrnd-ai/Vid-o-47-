// Les histoires de 47 #2 — « Le cahier de Mamie Jeanne ». Kitchen / living room world (GY 1500) + full-screen prop inserts (portrait, agenda, lettre, télé/bijoux, cahier).
window.LOOK = 'gala';
const GY = 1500;
const MAMIE = { hat: 'hair', hairCol: '#ecebe6', glasses: true, body: '#8a6aa8', body2: '#6f5590', pants: '#5a4a6a', num: false, collar: true };
const KEV = { hat: 'hair', hairCol: '#2a1a12', body: '#c9a23a', body2: '#a8862c' };
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
  jewel(540, 600, 1.3, t, t >= tT); tvSet(540, 1260, 1.2, t, false);
  if (t >= tP) { x.save(); resetCam(); x.globalAlpha = 0; for (let i = 0; i < 4; i++) { const k = ((t - tP) * 0.8 + i * 0.25) % 1; ell(640 + Math.sin(i * 2) * 60, 1080 - k * 200, 40 + k * 60, 40 + k * 60, '#888', 0); } x.restore(); stamp('LOUÉ', P(t, tP, 0.25), 1490); }
  if (t >= tT) stamp('DU TOC', P(t, tT, 0.25), 760); }
function recipe(t, tSel) { resetCam(); x.fillStyle = vg(0, H, '#f3d9a8', '#e0b878'); x.fillRect(0, 0, W, H); x.save(); x.translate(540, 940); notebook(0, 0, 1.05, true);
  txt('PAGE 12', -215, -250, 44, '#7a3a2a', { stroke: false }); txt('LA SOUPE', -215, -170, 70, '#7a3a2a', { stroke: false }); txt('DU DIMANCHE', -215, -95, 54, '#7a3a2a', { stroke: false }); bowl(-215, 110, 1.0, t);
  [['3 carottes', -230], ['2 poireaux', -150], ['1 pincée de sel', -70]].forEach(([s, y]) => txt(s, 215, y, 50, '#33405a', { stroke: false }));
  if (t >= tSel - 0.6) { const p = clamp(P(t, tSel - 0.6, 0.4)); x.globalAlpha = p; [['Le sel est sous', 40], ['la 3e marche', 110], ['de la cave.', 180]].forEach(([s, y]) => txt(s, 215, y, 52, C.red, { stroke: false })); x.globalAlpha = 1;
    if (t >= tSel) { x.strokeStyle = C.red; x.lineWidth = 9; x.beginPath(); x.ellipse(215, 110, 230, 120, 0, -0.5, -0.5 + Math.PI * 2 * clamp(P(t, tSel, 0.3))); x.stroke(); } } x.restore(); }
function freezer(t, p) { resetCam(); x.fillStyle = vg(0, H, '#dfeef6', '#b9d3e2'); x.fillRect(0, 0, W, H); rbox(140, 360, 800, 1180, 30, '#f4f8fb', 10); rbox(180, 420, 720, 1060, 16, '#cfe6f2', 6);
  x.fillStyle = 'rgba(255,255,255,.6)'; for (let i = 0; i < 30; i++) ell(200 + (i * 137) % 680, 440 + (i * 89) % 1020, 6, 6, 'rgba(255,255,255,.7)', 0);
  rbox(250, 900, 580, 360, 30, '#3f9a4a', 8); txt('PETITS POIS', 540, 1000, 64, '#fff', { stroke: false }); [0, 1, 2, 3, 4].forEach(i => ell(380 + i * 80, 1150, 30, 30, '#8fd06a', 5));
  const k = eOut(clamp(p)); for (let i = 0; i < 4; i++) { x.save(); x.translate(540 + (i - 1.5) * 90, 900 - k * (160 + i * 30)); x.rotate((i - 1.5) * 0.25 * k); rbox(-110, -55, 220, 110, 8, '#7ac47a', 6); txt('50', 0, 4, 54, '#2a6a2a', { stroke: false }); x.restore(); } }
function jar(t, p) { resetCam(); x.fillStyle = vg(0, H, '#f3d9a8', '#e0b878'); x.fillRect(0, 0, W, H); rbox(300, 520, 480, 120, 20, '#c9973a', 8); rbox(270, 620, 540, 760, 70, 'rgba(200,230,200,.55)', 10);
  for (let i = 0; i < 9; i++) { x.save(); x.translate(360 + (i % 3) * 180, 760 + Math.floor(i / 3) * 200); x.rotate(i * 0.7); rrc(0, 0, 70, 170, 34, '#6a8a2a', 6); x.restore(); }
  const k = eBack(clamp(p)); if (k > 0) { x.save(); x.translate(540, 980); x.scale(k, k); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(0, 0, 10, 0, 0, 220); g.addColorStop(0, 'rgba(255,230,140,.7)'); g.addColorStop(1, 'rgba(255,230,140,0)'); x.fillStyle = g; x.fillRect(-220, -220, 440, 440); x.restore();
    x.strokeStyle = '#e2b649'; x.lineWidth = 34; x.beginPath(); x.ellipse(0, 0, 110, 90, 0, 0, 7); x.stroke(); x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.ellipse(0, 0, 128, 108, 0, 0, 7); x.stroke(); x.beginPath(); x.ellipse(0, 0, 92, 72, 0, 0, 7); x.stroke(); x.restore(); } }
function testament(t, tUn) { resetCam(); x.fillStyle = '#2a2230'; x.fillRect(0, 0, W, H); x.save(); x.translate(540, 980); x.rotate(-0.03); rbox(-440, -520, 880, 1040, 8, '#f6efdc', 8);
  txt('TESTAMENT', 0, -420, 90, '#7a3a2a', { stroke: false }); x.fillStyle = '#7a3a2a'; x.fillRect(-300, -360, 600, 6);
  [['Chaque petit-enfant', -220], ['prend', -100]].forEach(([s, y]) => txt(s, 0, y, 66, '#33405a', { stroke: false })); txt('UN SEUL', 0, 40, 130, C.red, { stroke: false }); txt('objet de la maison.', 0, 170, 66, '#33405a', { stroke: false });
  txt('Jeanne ♥', 200, 380, 60, '#33405a', { stroke: false }); x.restore(); if (t >= tUn) { x.save(); x.strokeStyle = C.red; x.lineWidth = 12; const p = clamp(P(t, tUn, 0.3)); x.beginPath(); x.ellipse(540, 1020, 300, 100, -0.04, -0.5, -0.5 + Math.PI * 2 * p); x.stroke(); x.restore(); } }
function cellar(t, tE) { resetCam(); x.fillStyle = vg(0, H, '#3a2e26', '#1e1712'); x.fillRect(0, 0, W, H);
  for (let i = 0; i < 6; i++) { rbox(80 + i * 60, 300 + i * 190, 1000, 190, 0, i === 3 ? '#8a6a4a' : '#6a4f38', 7); }
  const k = eOut(clamp(seg(t, S('s12'), S('s12') + 0.6))); x.save(); x.translate(540, 1150); x.scale(1.25, 1.25); rbox(-260, -150, 520, 300, 16, '#6a6a72', 9);
  rbox(-260, -150 - 70 - 120 * k, 520, 70 + 120 * k, 10, '#7a7a84', 8);
  if (k > 0.3) { x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(0, -150, 10, 0, -150, 500); g.addColorStop(0, `rgba(255,220,120,${0.6 * k})`); g.addColorStop(1, 'rgba(255,220,120,0)'); x.fillStyle = g; x.fillRect(-600, -700, 1200, 1000); x.restore();
    for (let i = 0; i < 12; i++) rbox(-230 + (i % 4) * 115, -140 - Math.floor(i / 4) * 34, 105, 60, 6, '#7ac47a', 5); } x.restore();
  if (t >= S('s12') + 0.6 && t < WF('s12', /mot/i)) { x.save(); resetCam(); x.translate(540, 640); const kk = eBack(clamp(P(t, S('s12') + 0.6))); x.scale(kk, kk); txt('90 000 €', 0, 0, 170, '#ffd23f', { sw: 14 }); x.restore(); } }
function noteCard(t, p) { paperCard([['« Ils ont tous fouillé', 54], ['ma maison.', 54], ['Toi, tu t\'asseyais', 66, C.red], ['à ma table. »', 66, C.red]], 540, 480, p, { w: 900 }); }
function draw(t) {
  const id = curId(t), tRet = WF('ff', /retourné/i), tArg = WF('s1', /argent/i), tTout = WF('s1', /TOUT/), tCong = WF('s2', /congélateur/i), tAll = WF('s2', /alliance/i), tCor = WF('s2', /cornichons/i),
    tRien = WF('s3', /rien/i), tSo = WF('s3', /soupe/i), tEt = WF('s4', /était/i), tDim = WF('s4', /dimanche/i), tUn = WF('s5', /UN/), tBij = WF('s6', /bijoux/i), tEc = WF('s7', /écran/i), tCah = WF('s8', /cahier/i),
    tRire = WF('s9', /rire/i), tToc = WF('s10', /toc/i), tDet = WF('s10', /dettes/i), tPan = WF('s10', /Loué/i), tPage = WF('s11', /Page/i), tSel = WF('s11', /sel/i), tEur = WF('s12', /euros/i), tMot = WF('s12', /mot/i), tVoir = WF('s13', /voir/i);
  // ---------- inserts ----------
  if (id === 'ff' && t < tRet - 0.1) { portrait(t); hookCard(t, [['MAMIE EST MORTE…', 80], ['ET SON TRÉSOR A DISPARU 🤫', 60, C.red]], B.ff.end + 0.1); return; }
  if (id === 's2') { if (t < tAll - 0.1) { freezer(t, seg(t, tCong + 0.2, tCong + 0.8)); flashCut(t, S('s2')); pill('🧊 LES BILLETS ?', 540, 260, P(t, S('s2')), C.blue); }
    else { jar(t, seg(t, tCor - 0.1, tCor + 0.4)); flashCut(t, tAll - 0.1); pill('💍 L\'ALLIANCE ?', 540, 260, P(t, tAll), C.orange); } return; }
  if (id === 's5') { testament(t, tUn); flashCut(t, S('s5')); return; }
  if (id === 's10') { verdict(t, tPan, tToc); if (t >= tDet) pill('💸 POUR PAYER LES DETTES DE KEVIN', 540, 900, P(t, tDet), C.red); flashCut(t, S('s10')); return; }
  if (id === 's11' && t >= tPage - 0.15) { recipe(t, tSel); flashCut(t, tPage - 0.15); return; }
  if (id === 's12') { cellar(t, tEur); if (t >= tMot) { noteCard(t, P(t, tMot)); } flashCut(t, S('s12')); return; }
  // ---------- world ----------
  let K;
  if (id === 'ff') K = [[0, 0, 560, 1050, 1.0], [tRet, 1.5, 560, 1050, 1.12]];
  else if (id === 's1') K = [[S('s1'), 0, 560, 1000, 1.15], [tTout - 0.1, 0.25, 560, 950, 1.4]];
  else if (id === 's3') K = [[S('s3'), 0, 540, 1000, 0.9], [tSo - 0.1, 0.3, 700, 980, 1.1]];
  else if (id === 's4') K = [[S('s4'), 0, 540, 1000, 1.1], [tDim, 1.0, 540, 1050, 0.95]];
  else if (id === 's6' || id === 's7' || id === 's8') K = [[S(id), 0, 560, 1080, 1.1], [S(id) + 0.2, 2, 580, 1080, 1.2]];
  else if (id === 's9') K = [[S('s9'), 0, 540, 1080, 0.85]];
  else K = [[0, 0, 540, 1000, 0.95]];
  camPath(t, K, id === 'ff' && t >= tRet && t < tRet + 0.3 ? 12 : 0);
  if (id === 'ff') { living(t); const sh = Math.sin(t * 30) * 6; cast('rico', 330 + sh, GY, 0.85, t, { ...KEV, mood: 'shock', look: 1, armsUp: true, walk: t }); cast('woman', 780 - sh, GY, 0.85, t, { mood: 'worried', look: -1, armUp: true, walk: t * 1.1 });
    for (let i = 0; i < 9; i++) { const a = (t * 1.3 + i * 0.37) % 1; x.save(); x.translate(560 + Math.sin(i * 2.3) * 420, 400 + a * 900); x.rotate(t * 3 + i); rbox(-50, -36, 100, 72, 4, i % 3 ? '#f6efdc' : '#b5566a', 5); x.restore(); } }
  if (id === 's1') { kitchen(t); mamie(560, GY, 0.95, t, { mood: t >= tTout ? 'smug' : 'smile', look: 0, armUp: t >= tTout });
    if (t >= tTout) { x.save(); resetCam(); x.fillStyle = 'rgba(255,240,200,.18)'; x.fillRect(0, 0, W, H); x.restore(); } }
  if (id === 's3') { kitchen(t, true); const dr = t < tRien; p47(300, GY, 0.85, t, { mood: t < tRien ? 'worried' : (t < tSo ? 'shock' : 'smile'), look: 1, walk: dr ? t : 0 }); bag(80, GY - 20, 0.8);
    if (t >= tRien - 0.4) mamie(800, GY, 0.82, t, { mood: 'smile', look: -1 }); table(560, GY - 360, 420); if (t >= tSo) bowl(560, GY - 400, 0.9 * eBack(clamp(P(t, tSo))), t);
    if (dr) for (let i = 0; i < 6; i++) { const a = (t * 1.6 + i * 0.3) % 1; x.save(); x.translate(200 + i * 120, 500 + a * 700); x.rotate(t * 4 + i); rbox(-40, -30, 80, 60, 4, '#f6efdc', 4); x.restore(); } night(0.22); }
  if (id === 's4') { kitchen(t); table(540, GY - 360, 760); p47(280, GY, 0.85, t, { mood: 'smile', look: 1 }); mamie(800, GY, 0.82, t, { mood: 'smile', look: -1 }); bowl(400, GY - 400, 0.75, t); bowl(680, GY - 400, 0.75, t); }
  if (id === 's6') { living(t); cast('rico', 400, GY, 0.9, t, { ...KEV, mood: 'smug', look: 1 }); jewel(740, GY - 330, 0.8 * eBack(clamp(P(t, S('s6') + 1.0))), t); }
  if (id === 's7') { living(t); cast('woman', 400, GY, 0.9, t, { mood: 'smile', look: -1 }); tvSet(740, GY - 330, 0.75 * eBack(clamp(P(t, S('s7') + 0.9))), t); }
  if (id === 's8') { living(t); tom(400, GY, 0.75, t, { mood: t >= tCah - 1.5 ? 'smile' : 'worried', look: 1 }); notebook(700, GY - 300, 0.65 * eBack(clamp(P(t, tCah - 1.5)))); }
  if (id === 's9') { living(t); const lol = t >= tRire; cast('rico', 180, GY, 0.82, t, { ...KEV, mood: lol ? 'smile' : 'smug', look: 1, armUp: lol }); cast('woman', 470, GY, 0.82, t, { mood: lol ? 'smile' : 'smug', look: 1 });
    tom(830, GY, 0.72, t, { mood: 'worried', look: -1 }); notebook(830, GY - 300, 0.55); if (lol) { onoma('HA HA !', 300, 600 + Math.sin(t * 20) * 8, P(t, tRire, 0.2), 130); } }
  if (id === 's11') { kitchen(t); table(540, GY - 360, 760); p47(280, GY, 0.85, t, { mood: 'smile', look: 1 }); tom(800, GY, 0.75, t, { mood: 'smile', look: -1 }); notebook(560, GY - 440, 0.5); }
  if (id === 's13' || id === 'end') { kitchen(t); table(540, GY - 360, 760); p47(280, GY, 0.85, t, { mood: 'smile', look: 1 }); tom(800, GY, 0.75, t, { mood: 'smile', look: -1 }); bowl(400, GY - 400, 0.75, t); bowl(680, GY - 400, 0.75, t);
    if (id === 's13') { x.save(); x.globalAlpha = 0.55 * clamp(seg(t, S('s13'), S('s13') + 1)); mamieHead(540, 420, 0.42, t); x.restore(); } }
  vignette(0.25);
  // ---------- overlays ----------
  if (id === 'ff') { flashCut(t, tRet - 0.1); hookCard(t, [['MAMIE EST MORTE…', 80], ['ET SON TRÉSOR A DISPARU 🤫', 60, C.red]], B.ff.end + 0.1); }
  if (id === 's1') { flashCut(t, S('s1')); pill('💰 DE L\'ARGENT', 540, 300, P(t, tArg), C.green); if (t >= tTout) pill('🤫 ELLE CACHAIT TOUT', 540, 420, P(t, tTout), C.red); }
  if (id === 's3') { flashCut(t, S('s3')); pill('🌙 UN SOIR…', 540, 300, P(t, S('s3') + 0.1), C.blue); if (t >= tRien) pill('🔍 1 HEURE… 0 TROUVÉ', 540, 420, P(t, tRien), C.red); if (t >= tSo) pill('🍲 … ET UNE SOUPE', 540, 540, P(t, tSo), C.orange); }
  if (id === 's4') { flashCut(t, S('s4')); if (t >= tEt) banner('LE VOLEUR = 47', 540, 330, P(t, tEt), C.orange); if (t >= tDim) pill('🍲 CHAQUE DIMANCHE', 540, 480, P(t, tDim), C.green); }
  if (id === 's6') { flashCut(t, S('s6')); banner('KEVIN', 540, 300, P(t, S('s6') + 0.05), C.blue); pill('💸 VENAIT POUR L\'ARGENT', 540, 440, P(t, S('s6') + 0.6), C.brown); pill('💎 PREND LES BIJOUX', 540, 560, P(t, S('s6') + 1.0), C.red); }
  if (id === 's7') { flashCut(t, S('s7')); banner('INÈS', 540, 300, P(t, S('s7') + 0.05), '#b5486a'); pill('📞 1 APPEL PAR AN', 540, 440, P(t, S('s7') + 0.6), C.brown); pill('📺 PREND L\'ÉCRAN PLAT', 540, 560, P(t, S('s7') + 0.9), C.red); }
  if (id === 's8') { flashCut(t, S('s8')); banner('TOM', 540, 300, P(t, S('s8') + 0.05), C.green); pill('🍲 LÀ CHAQUE DIMANCHE', 540, 440, P(t, S('s8') + 0.6), C.brown); pill('📖 PREND… UN CAHIER ?!', 540, 560, P(t, tCah - 1.5), C.orange); }
  if (id === 's9') { flashCut(t, S('s9')); paperCard([['« TOM REPART AVEC', 60], ['3 CAROTTES ET UN POIREAU ! »', 52, C.red]], 540, 330, P(t, tRire + 0.3), { w: 920 }); }
  if (id === 's11') { flashCut(t, S('s11')); pill('📅 LE DIMANCHE D\'APRÈS', 540, 330, P(t, S('s11') + 0.1), C.green); }
  if (id === 's13') { flashCut(t, S('s13')); paperCard([['MAMIE CACHAIT TOUT…', 66], ['SAUF À CEUX QUI', 54, C.red], ['VENAIENT LA VOIR ♥', 66, C.red]], 540, 330, P(t, S('s13') + 0.2), { w: 900 }); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ?', 80], ['TA DERNIÈRE SOUPE', 54, C.red], ['CHEZ TA GRAND-MÈRE ? 💬', 54, C.red]], 540, 330, P(t, S('end')), { w: 900 }); }
}

function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }

function reveal(t, tV) { resetCam(); x.fillStyle = '#16121e'; x.fillRect(0, 0, W, H); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 40, 540, 1100, 700); g.addColorStop(0, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  const k = eOut(clamp(seg(t, tV - 0.15, tV + 0.5))); x.save(); x.translate(540, 1750); x.scale(0.9 + 0.15 * k, 0.9 + 0.15 * k); p47(0, 0, 1.15, t, { mood: 'smug', look: 0, armUp: true }); x.restore(); keyIcon(760, 760, 1.1 * eBack(clamp(P(t, tV + 0.1))), t); }
