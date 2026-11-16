// Les histoires de 47 #2 v3 (3 enveloppes) — « Le cahier de Mamie Jeanne ». Kitchen / living room world (GY 1500) + full-screen prop inserts (portrait, agenda, lettre, télé/bijoux, cahier).
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
function office(t) { room('#d8c7a8', '#c4af8c', '#7a5236', GY); for (let i = -10; i < 25; i++) { x.fillStyle = 'rgba(90,60,30,.08)'; x.fillRect(i * 70, -800, 10, GY + 800); }
  rbox(-140, 300, 380, 500, 8, '#6a4a30', 9); for (let r = 0; r < 4; r++) for (let k = 0; k < 6; k++) rbox(-115 + k * 58, 330 + r * 118, 44, 100, 3, ['#a83a3a', '#3a6aa8', '#c9973a', '#4f8a5a'][(r + k) % 4], 4);
  rbox(700, 360, 280, 200, 8, '#f6efdc', 8); txt('NOTAIRE', 840, 462, 56, '#7a3a2a', { stroke: false }); }
function desk(cx, y, w) { rbox(cx - w / 2, y, w, 60, 10, '#5a3a22', 9); rbox(cx - w / 2 + 20, y + 60, w - 40, GY - y - 60, 6, '#6a4a30', 8); }
function envelope(cx, cy, s, rot = 0, col = '#f3ead2', label = '') { x.save(); x.translate(cx, cy); x.rotate(rot); x.scale(s, s); rbox(-200, -130, 400, 260, 10, col, 8);
  x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(-200, -130); x.lineTo(0, 20); x.lineTo(200, -130); x.stroke(); ell(0, 20, 34, 34, '#b5302a', 5); if (label) txt(label, 0, 90, 52, OL, { stroke: false }); x.restore(); }
function armchair(cx, cy, s, t, torn = 0) { x.save(); x.translate(cx, cy); x.scale(s, s); rbox(-260, -520, 520, 420, 90, '#a8463a', 9); rbox(-320, -260, 120, 260, 40, '#943c32', 9); rbox(200, -260, 120, 260, 40, '#943c32', 9);
  rbox(-210, -200, 420, 160, 30, '#b9564a', 9); rbox(-280, -60, 40, 60, 6, '#4a2a1a', 6); rbox(240, -60, 40, 60, 6, '#4a2a1a', 6);
  if (torn > 0) { x.fillStyle = '#f1e6c8'; x.beginPath(); x.ellipse(-60, -380, 130 * torn, 90 * torn, 0.2, 0, 7); x.fill(); x.strokeStyle = OL; x.lineWidth = 6; x.stroke(); for (let i = 0; i < 6; i++) ell(-100 + i * 24, -380 + (i % 2) * 30, 22 * torn, 22 * torn, '#ffd23f', 5); }
  x.restore(); }
function cat(cx, cy, s, t, scratch = false) { x.save(); x.translate(cx, cy); x.scale(s, s); const b = scratch ? Math.sin(t * 22) * 10 : 0; ell(0, -90, 130, 90, '#e8913a', 8);
  x.strokeStyle = '#e8913a'; x.lineWidth = 26; x.lineCap = 'round'; x.beginPath(); x.moveTo(120, -100); x.quadraticCurveTo(220, -160 + Math.sin(t * 3) * 30, 190, -260); x.stroke(); x.strokeStyle = OL; x.lineWidth = 6;
  x.save(); x.translate(-110, -190 + b); ell(0, 0, 90, 80, '#e8913a', 8); poly([[-80, -40], [-60, -120], [-20, -60]], '#e8913a', 7); poly([[80, -40], [60, -120], [20, -60]], '#e8913a', 7);
  ell(-32, -5, 12, 16, OL, 0); ell(32, -5, 12, 16, OL, 0); ell(0, 22, 10, 7, '#c0504a', 0); x.restore();
  if (scratch) { x.save(); x.translate(-200, -140 + b); x.rotate(Math.sin(t * 22) * 0.4); ell(0, 0, 30, 26, '#e8913a', 6); x.restore(); } x.restore(); }
function coin(cx, cy, r, col = '#ffd23f', label = '') { ell(cx, cy, r, r, col, Math.max(4, r / 10)); ell(cx, cy, r * 0.72, r * 0.72, 'rgba(255,255,255,.18)', Math.max(3, r / 16)); if (label) txt(label, cx, cy + 4, r * 0.8, OL, { stroke: false }); }
function tarts(t, tT) { resetCam(); x.fillStyle = vg(0, H, '#fbe7c6', '#f0c98a'); x.fillRect(0, 0, W, H); txt('LE MÉDECIN : « PLUS DE GÂTEAUX ! »', 540, 300, 50, OL, { stroke: false });
  x.save(); x.translate(540, 780); rbox(-220, -140, 440, 220, 30, '#f2d0e0', 8); rbox(-220, -200, 440, 80, 30, '#fff', 8); ell(0, -230, 30, 30, C.red, 5); x.restore();
  if (t >= tT - 0.6) { const p = clamp(P(t, tT - 0.6, 0.3)); x.strokeStyle = C.red; x.lineWidth = 22; x.globalAlpha = p; x.beginPath(); x.moveTo(300, 560); x.lineTo(780, 960); x.moveTo(780, 560); x.lineTo(300, 960); x.stroke(); x.globalAlpha = 1; }
  if (t >= tT) { const k = eBack(clamp(P(t, tT))); x.save(); x.translate(540, 1380); x.scale(k, k); ell(0, 0, 300, 110, '#c98a3a', 9); ell(0, -10, 250, 80, '#e8452c', 6); for (let i = 0; i < 7; i++) ell(-180 + i * 60, -10 + (i % 2) * 20, 24, 24, '#b5302a', 4); x.restore(); txt('TARTE ✅', 540, 1580, 80, C.green, { sw: 10 }); } }
function carnet(t, tE, tR) { resetCam(); x.fillStyle = '#2a2230'; x.fillRect(0, 0, W, H); x.save(); x.translate(540, 960); x.rotate(-0.03); rbox(-420, -560, 840, 1120, 14, '#f6efdc', 9);
  txt('COMPTES DE KEVIN', 0, -470, 64, '#7a3a2a', { stroke: false }); x.fillStyle = '#7a3a2a'; x.fillRect(-340, -420, 680, 5);
  [['2015 — voiture', '3 000 €'], ['2017 — loyer', '1 200 €'], ['2019 — téléphone', '900 €'], ['2021 — « urgence »', '5 000 €'], ['2023 — « la dernière »', '12 900 €']].forEach(([a, b], i) => { txt(a, -130, -330 + i * 95, 44, '#33405a', { stroke: false }); txt(b, 250, -330 + i * 95, 44, '#33405a', { stroke: false }); });
  x.fillStyle = '#33405a'; x.fillRect(-340, 90, 680, 5); if (t >= tE) { txt('TOTAL : 23 000 €', 0, 190, 76, C.red, { stroke: false }); } x.restore(); if (t >= tR) stamp('À REMBOURSER', P(t, tR, 0.25), 1560); }
function twoEuro(t, tD, tS) { resetCam(); x.fillStyle = vg(0, H, '#3a2a4a', '#1e1628'); x.fillRect(0, 0, W, H); const k = eBack(clamp(P(t, S('s10') + 0.1))); x.save(); x.translate(540, 820); x.scale(k, k); x.rotate(Math.sin(t * 2) * 0.1);
  ell(0, 0, 260, 260, '#e2b649', 12); ell(0, 0, 175, 175, '#c9cdd2', 10); txt('2', 0, 10, 220, OL, { stroke: false }); x.restore(); txt('SA PLUS BELLE PIÈCE…', 540, 420, 66, '#fff', { sw: 10 });
  if (t >= tS - 1.2) paperCard([['« Pour m\'appeler', 64], ['plus souvent. » ☎️', 64, C.red]], 540, 1500, P(t, tS - 1.2), { w: 820 }); }
function gold(t, t0) { const n = 70; for (let i = 0; i < n; i++) { const st = t0 + (i % 20) * 0.04, a = t - st; if (a < 0) continue; const vx = Math.sin(i * 12.9898) * 520, vy = -500 - (i * 37 % 400);
    let px = 560 + vx * a, py = GY - 600 + vy * a + 1200 * a * a; if (py > GY + 60 - (i % 5) * 20) py = GY + 60 - (i % 5) * 20; coin(px, py, 26, '#ffd23f'); } }
function draw(t) {
  const id = curId(t), tFon = WF('ff', /foncé/i), tArg = WF('s1', /argent/i), tJam = WF('s1', /TOUJOURS/), tMots = WF('s1', /lettre/i), tTar = WF('s2', /tartes/i), tPlat = WF('s3', /plat/i), tRem = WF('s3', /remplissait/i),
    tC5 = WF('s5', /comptes/i), tVoi = WF('s5', /voitures/i), tP6 = WF('s6', /pièce/i), tSal = WF('s6', /salon/i), tF7 = WF('s7', /fauteuil/i), tCh7 = WF('s7', /chat/i), tRire = WF('s8', /rire/i),
    tCar = WF('s9', /carnet/i), tEur = WF('s9', /euros/i), tRb = WF('s9', /rembourser/i), tDeux = WF('s10', /deux/i), tSouv = WF('s10', /souvent/i), tVol = WF('s11', /payé/i), tEt = WF('s11', /était/i),
    tGr = WF('s12', /griffait/i), tCr = WF('s12', /craqué/i), tCent = WF('s13', /centaines/i), tRep = WF('s15', /recousu/i), tLen = WF('s15', /lendemain/i);
  const HOOK = [['MAMIE EST MORTE…', 80], ['3 ENVELOPPES. 3 PIÈGES 😳', 60, C.red]];
  // ---------- inserts ----------
  if (id === 'ff' && t < tFon - 0.1) { portrait(t); hookCard(t, HOOK, B.ff.end + 0.1); return; }
  if (id === 's2') { tarts(t, tTar); flashCut(t, S('s2')); return; }
  if (id === 's4') { resetCam(); x.fillStyle = '#5a3a22'; x.fillRect(0, 0, W, H); x.fillStyle = 'rgba(0,0,0,.15)'; for (let i = 0; i < 20; i++) x.fillRect(0, i * 100, W, 6);
    [[300, 980, -0.15, 'KEVIN'], [540, 900, 0.03, 'INÈS'], [780, 1000, 0.15, 'TOM']].forEach(([cx, cy, r, l], i) => envelope(cx, cy - 40 * (1 - eOut(clamp(seg(t, S('s4') + i * 0.15, S('s4') + 0.5 + i * 0.15)))), 0.62, r, '#f3ead2', l)); flashCut(t, S('s4')); return; }
  if (id === 's9') { carnet(t, tEur, tRb); flashCut(t, S('s9')); return; }
  if (id === 's10') { twoEuro(t, tDeux, tSouv); flashCut(t, S('s10')); return; }
  if (id === 's14') { resetCam(); x.fillStyle = '#2a1f18'; x.fillRect(0, 0, W, H); gold(t, S('s14') - 3); paperCard([['« Les autres comptaient', 58], ['mon argent.', 58], ['Toi, Tom,', 70, C.red], ['tu comptais les cases. »', 62, C.red]], 540, 820, P(t, S('s14') + 0.2), { w: 920 });
    flashCut(t, S('s14')); return; }
  // ---------- world ----------
  let K;
  if (id === 'ff') K = [[0, 0, 560, 1050, 0.95], [tFon, 1.8, 560, 1050, 1.08]];
  else if (id === 's1') K = [[S('s1'), 0, 560, 1000, 1.15], [tMots - 0.1, 0.3, 560, 950, 1.35]];
  else if (id === 's3') K = [[S('s3'), 0, 540, 1050, 0.95]];
  else if (id === 's5' || id === 's6' || id === 's7') K = [[S(id), 0, 560, 1080, 1.1], [S(id) + 0.2, 3, 580, 1080, 1.2]];
  else if (id === 's8') K = [[S('s8'), 0, 520, 1120, 1.05]];
  else if (id === 's11') K = [[S('s11'), 0, 540, 1050, 0.95], [tEt - 0.1, 0.3, 380, 1000, 1.2]];
  else if (id === 's12' || id === 's13') K = [[S('s12'), 0, 540, 1050, 0.95], [tCr - 0.1, 0.25, 560, 1100, 1.15]];
  else K = [[0, 0, 540, 1050, 0.95]];
  camPath(t, K, (id === 'ff' && t < tFon + 0.3) || (id === 's12' && t >= tCr && t < tCr + 0.3) ? 12 : 0);
  if (id === 'ff') { office(t); const run = eOut(clamp(seg(t, tFon - 0.1, tFon + 1.0))); cast('director', 860, GY, 0.85, t, { mood: 'shock', look: -1 }); desk(860, GY - 380, 420);
    cast('rico', lerp(-300, 220, run), GY, 0.85, t, { ...KEV, mood: 'smug', look: 1, walk: run < 1 ? t * 2 : 0 }); cast('woman', lerp(-500, 470, run), GY, 0.85, t, { mood: 'smile', look: 1, walk: run < 1 ? t * 2 : 0 }); tom(lerp(-700, 40, run), GY, 0.7, t, { mood: 'worried', look: 1, walk: run < 1 ? t * 2 : 0 });
    if (run < 1) { x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 8; for (let i = 0; i < 6; i++) { const y = 700 + i * 120; x.beginPath(); x.moveTo(lerp(-500, 0, run) - 200, y); x.lineTo(lerp(-500, 0, run) - 450, y); x.stroke(); } } }
  if (id === 's1') { kitchen(t); mamie(560, GY, 0.95, t, { mood: t >= tMots ? 'smug' : 'smile', look: 0 }); }
  if (id === 's3') { bricks(-1200, -800, 3500, GY + 800, '#e0cdb0'); x.fillStyle = '#8a8a8a'; x.fillRect(-1200, GY, 3500, 1400); door(320, GY - 640, 300, 640, '#6a8a5a'); door(820, GY - 640, 300, 640, '#8a5a6a');
    mamie(440, GY, 0.85, t, { mood: 'smug', look: 1 }); cast('woman', 760, GY, 0.85, t, { mood: t >= tRem ? 'shock' : 'smile', look: -1, body: '#5a8ab0', body2: '#4a7090', hairCol: '#c96a3a' });
    if (t >= tPlat) { x.save(); x.translate(600, GY - 470); ell(0, 0, 150, 40, '#f2efe6', 7); if (t >= tRem) { ell(0, -20, 120, 40, '#c98a3a', 6); for (let i = 0; i < 3; i++) ell(-60 + i * 60, -40, 30, 20, '#e8913a', 4); } x.restore(); } }
  if (id === 's5') { office(t); desk(800, GY - 380, 460); cast('director', 800, GY - 40, 0.8, t, { mood: 'smile', look: -1 }); desk(800, GY - 380, 460); envelope(800, GY - 420, 0.35, 0.05);
    cast('rico', 330, GY, 0.95, t, { ...KEV, mood: t >= tC5 ? 'smug' : 'smile', look: 1 }); if (t >= tVoi) { x.save(); x.translate(480, GY - 560); x.rotate(-0.2); rbox(-50, -90, 100, 180, 14, '#222', 6); rbox(-40, -76, 80, 150, 6, '#7fb6d8', 0); txt('🚗', 0, 4, 60, '#fff', { stroke: false }); x.restore(); } }
  if (id === 's6') { office(t); desk(800, GY - 380, 460); cast('director', 800, GY - 40, 0.8, t, { mood: 'smile', look: -1 }); desk(800, GY - 380, 460); envelope(800, GY - 420, 0.35, 0.05);
    cast('woman', 330, GY, 0.95, t, { mood: t >= tP6 ? 'smile' : 'worried', look: 1 }); if (t >= tSal) { x.save(); resetCam(); const k = eBack(clamp(P(t, tSal))); x.translate(760, 620); x.scale(k, k); ell(-160, 150, 30, 30, '#fff', 4); ell(-120, 100, 45, 45, '#fff', 5); rbox(-90, -130, 360, 230, 40, '#fff', 7); txt('🛋️✨', 90, -10, 90, OL, { stroke: false }); x.restore(); } }
  if (id === 's7') { office(t); desk(800, GY - 380, 460); cast('director', 800, GY - 40, 0.8, t, { mood: 'smile', look: -1 }); desk(800, GY - 380, 460); envelope(800, GY - 420, 0.35, 0.05);
    tom(330, GY, 0.82, t, { mood: t >= tF7 ? 'shock' : 'smile', look: 1 }); }
  if (id === 's8') { office(t); const lol = t >= tRire, sh = lol ? Math.sin(t * 25) * 8 : 0; cast('rico', 180, GY + sh, 0.82, t, { ...KEV, mood: lol ? 'smile' : 'smug', look: 1, armUp: lol }); cast('woman', 470, GY - sh, 0.82, t, { mood: lol ? 'smile' : 'smug', look: 1 });
    tom(830, GY, 0.72, t, { mood: 'worried', look: -1 }); if (lol) onoma('HA HA !', 300, 600 + Math.sin(t * 20) * 8, P(t, tRire, 0.2), 130); }
  if (id === 's11') { sky('#1d2440', '#33405a', GY); bricks(-1200, 300, 3500, GY - 300, '#4a4a5a', 'rgba(0,0,0,.3)'); x.fillStyle = '#2a2a33'; x.fillRect(-1200, GY, 3500, 1400); ell(880, 260, 50, 50, '#f4f0d0', 0);
    cast('rico', 720, GY, 0.85, t, { ...KEV, mood: 'angry', look: -1, armUp: t >= tVol }); if (t >= tVol) { x.save(); x.translate(560, GY - 700 + 40 * Math.sin(t * 3)); rbox(-80, -45, 160, 90, 8, '#7ac47a', 6); txt('50 €', 0, 4, 44, '#2a6a2a', { stroke: false }); x.restore(); }
    p47(300, GY, 0.85, t, { mood: 'smug', look: 1 }); night(0.15); }
  if (id === 's12' || id === 's13') { living(t); const torn = id === 's13' ? 1 : (t >= tCr ? eOut(clamp(seg(t, tCr, tCr + 0.4))) : 0); armchair(640, GY, 0.95, t, torn); cat(id === 's13' ? 900 : 830, id === 's13' ? GY : GY - 300, 0.6, t, id === 's12' && t < tCr + 0.3);
    p47(170, GY, 0.85, t, { mood: id === 's13' ? 'shock' : (t >= tCr ? 'shock' : 'worried'), look: 1, walk: id === 's12' && t < tGr ? t : 0 }); if (id === 's13') gold(t, S('s13') - 0.2); night(0.28); }
  if (id === 's15') { sky('#9fcbea', '#dceef8', GY); bricks(-1200, 200, 3500, GY - 200, '#d8b48a'); x.fillStyle = '#9a9a9a'; x.fillRect(-1200, GY, 3500, 1400);
    p47(320, GY, 0.85, t, { mood: 'smug', look: 1 }); cast('rico', 780, GY, 0.85, t, { ...KEV, mood: t >= tLen + 1.5 ? 'worried' : 'smile', look: -1 }); }
  if (id === 's16' || id === 'end') { living(t); armchair(560, GY, 0.95, t, 0); tom(560, GY - 150, 0.62, t, { mood: 'smile', look: 0 }); cat(760, GY - 260, 0.5, t);
  }
  vignette(0.25);
  // ---------- overlays ----------
  if (id === 'ff') { flashCut(t, tFon - 0.1); hookCard(t, HOOK, B.ff.end + 0.1); }
  if (id === 's1') { flashCut(t, S('s1')); pill('💰 DE L\'ARGENT', 540, 300, P(t, tArg), C.green); if (t >= tJam) pill('🤞 TOUJOURS PAROLE', 540, 420, P(t, tJam), C.blue); if (t >= tMots) pill('😏 … À LA LETTRE PRÈS', 540, 540, P(t, tMots), C.red); }
  if (id === 's3') { flashCut(t, S('s3')); pill('🍽️ « JE RENDS LE PLAT QUAND IL EST VIDE »', 540, 300, P(t, S('s3') + 0.3), C.brown); if (t >= tRem) pill('😂 IL N\'A JAMAIS ÉTÉ VIDE', 540, 420, P(t, tRem), C.red); }
  const quote = (lines, p) => paperCard(lines, 540, 330, p, { w: 940 });
  if (id === 's5') { flashCut(t, S('s5')); banner('KEVIN', 540, 300, P(t, S('s5') + 0.05), C.blue); pill('💸 PASSAIT POUR EMPRUNTER', 540, 430, P(t, S('s5') + 0.6), C.brown); if (t >= tC5 - 1.0) quote([['« JE LAISSE', 60], ['TOUS MES COMPTES »', 74, C.red]], P(t, tC5 - 1.0)); }
  if (id === 's6') { flashCut(t, S('s6')); banner('INÈS', 540, 300, P(t, S('s6') + 0.05), '#b5486a'); pill('📞 1 APPEL PAR AN', 540, 430, P(t, S('s6') + 0.6), C.brown); if (t >= tP6 - 1.0) quote([['« JE LAISSE', 60], ['MA PLUS BELLE PIÈCE »', 70, C.red]], P(t, tP6 - 1.0)); }
  if (id === 's7') { flashCut(t, S('s7')); banner('TOM', 540, 300, P(t, S('s7') + 0.05), C.green); pill('✏️ MOTS CROISÉS CHAQUE DIMANCHE', 540, 430, P(t, S('s7') + 0.8), C.brown); if (t >= tF7 - 1.0) quote([['« JE LAISSE MON', 60], ['VIEUX FAUTEUIL…', 70, C.red], ['… ET MON CHAT »', 60]], P(t, tF7 - 1.0)); }
  if (id === 's8') { flashCut(t, S('s8')); paperCard([['« UN FAUTEUIL QUI GRINCE', 52], ['ET UN CHAT QUI GRIFFE ! »', 52, C.red]], 540, 330, P(t, tRire + 0.3), { w: 940 }); }
  if (id === 's11') { flashCut(t, S('s11')); pill('💡 LE FAUTEUIL CACHE UN TRUC !', 540, 300, P(t, S('s11') + 0.3), C.red); if (t >= tEt) banner('LE VOLEUR = 47', 540, 430, P(t, tEt), C.orange); }
  if (id === 's12') { flashCut(t, S('s12')); pill('🌙 CHEZ TOM, LA NUIT', 540, 300, P(t, S('s12') + 0.1), C.blue); if (t >= tCr) onoma('CRAAAC !', 640, 600, P(t, tCr, 0.2), 150); }
  if (id === 's13') { flashCut(t, S('s13')); onoma('DE L\'OR ?!', 560, 520, P(t, S('s13') + 0.3, 0.2), 140); if (t >= tCent) pill('🪙 DES CENTAINES', 540, 330, P(t, tCent), C.orange); }
  if (id === 's15') { flashCut(t, S('s15')); if (t < tLen) { resetCam(); pill('🧵 47 REMET TOUT ET RECOUD', 540, 330, P(t, S('s15') + 0.1), C.green); } else paperCard([['47 : « DANS LE FAUTEUIL ?', 52], ['IL N\'Y AVAIT QU\'UN CHAT. »', 56, C.red]], 540, 330, P(t, tLen + 0.4), { w: 940 }); }
  if (id === 's16') { flashCut(t, S('s16')); paperCard([['PAROLE TENUE…', 66], ['À LA LETTRE PRÈS 😏', 62, C.red]], 540, 330, P(t, S('s16') + 0.2), { w: 900 }); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ?', 80], ['TON DERNIER DIMANCHE', 54, C.red], ['CHEZ TA GRAND-MÈRE ? 💬', 54, C.red]], 540, 330, P(t, S('end')), { w: 900 }); }
}

function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }

function reveal(t, tV) { resetCam(); x.fillStyle = '#16121e'; x.fillRect(0, 0, W, H); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 40, 540, 1100, 700); g.addColorStop(0, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  const k = eOut(clamp(seg(t, tV - 0.15, tV + 0.5))); x.save(); x.translate(540, 1750); x.scale(0.9 + 0.15 * k, 0.9 + 0.15 * k); p47(0, 0, 1.15, t, { mood: 'smug', look: 0, armUp: true }); x.restore(); keyIcon(760, 760, 1.1 * eBack(clamp(P(t, tV + 0.1))), t); }
