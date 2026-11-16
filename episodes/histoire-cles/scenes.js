// (helpers copied from histoire-mamie) Les histoires de 47 #2 v3 « Les 3 clés de Mamie Rose » — « Le cahier de Mamie Jeanne ». Kitchen / living room world (GY 1500) + full-screen prop inserts (portrait, agenda, lettre, télé/bijoux, cahier).
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

function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }

function reveal(t, tV) { resetCam(); x.fillStyle = '#16121e'; x.fillRect(0, 0, W, H); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 40, 540, 1100, 700); g.addColorStop(0, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  const k = eOut(clamp(seg(t, tV - 0.15, tV + 0.5))); x.save(); x.translate(540, 1750); x.scale(0.9 + 0.15 * k, 0.9 + 0.15 * k); p47(0, 0, 1.15, t, { mood: 'smug', look: 0, armUp: true }); x.restore(); keyIcon(760, 760, 1.1 * eBack(clamp(P(t, tV + 0.1))), t); }
function key2(cx, cy, s, col, heart = false, rot = -0.4) { x.save(); x.translate(cx, cy); x.rotate(rot); x.scale(s, s);
  if (heart) { x.beginPath(); x.moveTo(-70, 30); x.bezierCurveTo(-170, -40, -120, -120, -70, -80); x.bezierCurveTo(-20, -120, 30, -40, -70, 30); fs(col, 8); } else { ell(-70, 0, 55, 55, col, 8); ell(-70, 0, 20, 20, '#3a2a1e', 0); }
  rbox(-20, -16, 170, 32, 6, col, 7); rbox(110, 10, 22, 40, 4, col, 6); rbox(70, 10, 22, 30, 4, col, 6); x.restore(); }
function bubble(cx, cy, w, h, p, fn) { if (p <= 0) return; const k = eBack(clamp(p)); x.save(); x.translate(cx, cy); x.scale(k, k); ell(-w * 0.35, h * 0.62, 22, 22, '#fff', 6); ell(-w * 0.45, h * 0.78, 14, 14, '#fff', 5);
  rrc(0, 0, w, h, h * 0.45, '#fff', 8); x.beginPath(); x.rect(-w / 2 + 20, -h / 2 + 15, w - 40, h - 30); x.clip(); fn(); x.restore(); }
function bars(n) { for (let i = 0; i < n; i++) { const r = Math.floor(i / 3), c = i % 3; poly([[-120 + c * 90 - r * 0 + 10, 40 - r * 50], [-120 + c * 90 + 80, 40 - r * 50], [-120 + c * 90 + 70, 0 - r * 50], [-120 + c * 90 + 20, 0 - r * 50]], '#ffd23f', 5); } }
function villa() { rbox(-150, -40, 300, 120, 6, '#fff6e0', 6); poly([[-170, -40], [0, -120], [170, -40]], '#e8452c', 6); x.fillStyle = '#3f86c8'; x.fillRect(-300, 80, 600, 80); rbox(-40, 10, 60, 70, 4, '#7ab8e0', 5); rbox(60, 10, 60, 70, 4, '#7ab8e0', 5); }
function hearse(cx, gy, s) { x.save(); x.translate(cx, gy); x.scale(s, s); rbox(-330, -230, 560, 140, 30, '#1e1e24', 8); rbox(-380, -120, 760, 110, 26, '#26262e', 8); rbox(-260, -210, 180, 90, 10, '#4a5a6a', 6); rbox(-60, -210, 220, 90, 10, '#4a5a6a', 6);
  ell(-230, -10, 60, 60, '#111', 7); ell(230, -10, 60, 60, '#111', 7); ell(-230, -10, 24, 24, '#888', 0); ell(230, -10, 24, 24, '#888', 0); x.restore(); }
function notaryOut(t) { sky('#9fcbea', '#dceef8', GY); rbox(-200, 300, 1500, GY - 300, 0, '#e8d6b8', 8); rbox(250, 380, 600, 130, 14, '#2c3f6a', 8); txt('NOTAIRE', 550, 446, 90, '#fff', { stroke: false });
  door(550, GY - 520, 260, 520, '#5a3a22'); rrc(150, 760, 200, 200, 8, '#bfe0f4', 8); rrc(950, 760, 200, 200, 8, '#bfe0f4', 8); x.fillStyle = '#a8a8a8'; x.fillRect(-1200, GY, 3500, 1400); }
function choco(t, tB) { resetCam(); x.fillStyle = vg(0, H, '#f6e3c8', '#e8c89a'); x.fillRect(0, 0, W, H); const white = t >= tB; x.save(); x.translate(540, 1000); x.rotate(-0.12);
  rbox(-300, -420, 600, 840, 20, white ? '#f6f1e6' : '#5a3420', 10); for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++) rbox(-260 + c * 270, -380 + r * 200, 250, 180, 10, white ? '#efe6d4' : '#6a3e26', 5);
  rbox(-320, 100, 640, 360, 14, white ? '#9ad0f0' : '#c9483a', 9); txt(white ? 'CHOCOLAT BLANC' : 'CHOCOLAT', 0, 280, white ? 68 : 90, '#fff', { stroke: false }); x.restore();
  if (white) stamp('PAS UN MENSONGE ✓', P(t, tB + 0.1, 0.25), 520); else { x.save(); x.translate(540, 520); txt('🩺 « ARRÊTEZ LE CHOCOLAT ! »', 0, 0, 56, OL, { stroke: false }); x.restore(); } }
function cat(cx, gy, s, t) { x.save(); x.translate(cx, gy); x.scale(s, s); ell(0, -90, 110, 80, '#e8913a', 8); ell(80, -190, 70, 64, '#e8913a', 8); poly([[30, -230], [45, -290], [80, -245]], '#e8913a', 6); poly([[90, -245], [125, -290], [135, -230]], '#e8913a', 6);
  ell(60, -195, 9, 12, OL, 0); ell(105, -195, 9, 12, OL, 0); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(-100, -100); x.quadraticCurveTo(-200, -160 + Math.sin(t * 5) * 30, -170, -250); x.stroke(); x.restore(); }
function trunk(t, tA) { resetCam(); x.fillStyle = vg(0, H, '#a8c8a0', '#7a9a72'); x.fillRect(0, 0, W, H); rbox(90, 760, 900, 620, 60, '#7ab8c0', 10); rbox(160, 860, 760, 380, 20, '#2a2a30', 8);
  x.save(); x.translate(540, 760); x.rotate(0); rbox(-430, -330, 860, 330, 40, '#8ac8d0', 10); rbox(-300, -260, 600, 160, 14, '#4a6a7a', 6); x.restore(); ell(220, 1380, 90, 90, '#111', 8); ell(860, 1380, 90, 90, '#111', 8);
  if (t >= tA) for (let i = 0; i < 16; i++) { const k = clamp(seg(t, tA + i * 0.04, tA + 0.7 + i * 0.04)); x.save(); x.translate(540 + Math.sin(i * 2.1) * 380 * k, 1050 - k * (300 + (i % 5) * 110)); x.rotate(Math.sin(i) * 1.2 * k); rbox(-70, -45, 140, 90, 4, '#f6efdc', 4); x.fillStyle = C.red; x.fillRect(-60, -35, 120, 14); x.restore(); }
  if (t >= tA) stamp('47 AMENDES', P(t, tA + 0.2, 0.25), 1560); }
function beach(t, tC) { resetCam(); x.fillStyle = vg(0, 900, '#8fd0f4', '#d8f0fc'); x.fillRect(0, 0, W, 900); x.fillStyle = '#3f86c8'; x.fillRect(0, 760, W, 300); x.fillStyle = '#f2dca0'; x.fillRect(0, 1040, W, 900); ell(860, 300, 80, 80, '#ffd23f', 0);
  const s = t >= tC ? lerp(1.0, 0.8, clamp(seg(t, tC, tC + 1))) : 1; x.save(); x.translate(540, 1420); x.scale(s, s); rbox(-110, -420, 220, 420, 6, '#fff', 8); for (let i = 0; i < 4; i++) { x.fillStyle = C.red; x.fillRect(-110 + i * 55, -420, 27, 420); } x.strokeStyle = OL; x.lineWidth = 8; x.strokeRect(-110, -420, 220, 420);
  poly([[-140, -420], [0, -500], [140, -420]], '#2c4fa8', 8); rbox(-40, -260, 80, 260, 4, '#c9973a', 6); x.restore(); cast('woman', 860, 1700, 0.55, t, { mood: 'shock', look: -1 }); }
function garden(t) { sky('#9fcbea', '#e8f4fa', GY - 300); x.fillStyle = '#7ac46a'; x.fillRect(-1200, GY - 300, 3500, 1700); for (let i = 0; i < 14; i++) rbox(-400 + i * 140, GY - 520, 26, 230, 4, '#f6f0e0', 5); x.fillStyle = '#f6f0e0'; x.fillRect(-400, GY - 470, 2000, 22); }
function rose(cx, gy, s, t) { x.save(); x.translate(cx, gy); x.scale(s, s); x.strokeStyle = '#3a7a3a'; x.lineWidth = 14; [[-80, -300], [0, -360], [80, -290]].forEach(([a, b]) => { x.beginPath(); x.moveTo(0, 0); x.quadraticCurveTo(a * 0.4, b * 0.5, a, b); x.stroke(); });
  ell(-60, -200, 90, 60, '#4f9a4f', 6); ell(60, -220, 90, 60, '#4f9a4f', 6); [[-80, -300], [0, -360], [80, -290], [-30, -230], [50, -170]].forEach(([a, b], i) => { ell(a, b, 44, 40, '#d8304a', 6); ell(a, b, 18, 16, '#a81f36', 0); }); x.restore(); }
function goldBox(t, tO, tM) { resetCam(); x.fillStyle = vg(0, H, '#5a3a22', '#2a1a10'); x.fillRect(0, 0, W, H); const k = eOut(clamp(seg(t, tO, tO + 0.6)));
  if (k > 0) { x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1080, 20, 540, 1080, 700); g.addColorStop(0, `rgba(255,210,90,${0.7 * k})`); g.addColorStop(1, 'rgba(255,210,90,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore(); }
  rbox(240, 1080, 600, 340, 20, '#b8243a', 10); rbox(240, 1080 - 70 - 140 * k, 600, 70 + 140 * k, 16, '#d8304a', 9); x.beginPath(); x.moveTo(540, 1180); x.bezierCurveTo(440, 1110, 470, 1050, 540, 1090); x.bezierCurveTo(610, 1050, 640, 1110, 540, 1180); fs('#ffd23f', 5);
  if (k > 0.3) for (let i = 0; i < 18; i++) ell(300 + (i % 6) * 96, 1070 - Math.floor(i / 6) * 34, 44, 20, '#ffd23f', 5);
  if (t >= tO + 0.4 && t < tM) { x.save(); x.translate(540, 700); const kk = eBack(clamp(P(t, tO + 0.4))); x.scale(kk, kk); txt('300 PIÈCES D\'OR', 0, 0, 110, '#ffd23f', { sw: 12 }); x.restore(); }
  if (t >= tM) paperCard([['« Tu l\'avais déjà,', 60], ['la clé.', 60], ['Tu venais me voir. »', 70, C.red]], 540, 560, P(t, tM), { w: 880 }); }
function draw(t) {
  const id = curId(t), tNot = WF('ff', /notaire/i), tCor = WF('ff', /corbillard/i), tArg = WF('s1', /argent/i), tJam = WF('s1', /jamais/i), tFac = WF('s1', /façon/i), tBl = WF('s2', /blanc/i),
    tChat = WF('s3', /chat/i), tVal = WF('s4', /valeur/i), tSo = WF('s4', /soupe/i), tDim = WF('s4', /dimanche/i), tLing = WF('s6', /lingots/i), tPl = WF('s7', /pleuré/i), tRouge = WF('s8', /rouge/i),
    tRic = WF('s9', /ricané/i), tAm = WF('s10', /amendes/i), tNom = WF('s10', /nom/i), tCab = WF('s11', /cabine/i), tVue = WF('s11', /vue/i), tComp = WF('s12', /compris/i), tRos = WF('s12', /rosier/i),
    tCof = WF('s13', /coffret/i), tMot = WF('s13', /mot/i), tMer = WF('s14', /méritait/i);
  // ---------- inserts ----------
  if (id === 'ff' && t < tNot - 0.1) { portrait(t); hookCard(t, [['MAMIE ROSE EST MORTE…', 76], ['3 CLÉS. UNE SEULE VAUT DE L\'OR 🔑', 52, C.red]], B.ff.end + 0.1); return; }
  if (id === 's2') { choco(t, tBl); flashCut(t, S('s2')); return; }
  if (id === 's5') { resetCam(); x.fillStyle = vg(0, H, '#6a4a32', '#3a2618'); x.fillRect(0, 0, W, H); rbox(60, 1000, 960, 60, 10, '#8a5a32', 8); txt('NOTAIRE', 540, 420, 90, '#e2b649', { stroke: false });
    [['#c9c9d0', 230, false], ['#e2b649', 540, false], ['#e8304a', 850, true]].forEach(([c, px, hh], i) => { const p = P(t, S('s5') + 0.4 + i * 0.3); if (p > 0) key2(px, 860, 0.9 * eBack(clamp(p)), c, hh, -1.2); }); flashCut(t, S('s5')); return; }
  if (id === 's10') { trunk(t, tAm); if (t >= tNom) pill('🚗 AU NOM DE KEVIN', 540, 320, P(t, tNom), C.red); pill('🔑 LE COFFRE… DE LA VOITURE', 540, 200, P(t, S('s10') + 0.1), C.blue); flashCut(t, S('s10')); return; }
  if (id === 's11') { beach(t, tCab); pill('🏖️ LA « VILLA »', 540, 200, P(t, S('s11') + 0.1), C.orange); if (t >= tCab) pill('📏 2 M² 😂', 540, 320, P(t, tCab + 0.4), C.red); if (t >= tVue) stamp('VUE SUR MER ✓', P(t, tVue, 0.25), 560); flashCut(t, S('s11')); return; }
  if (id === 's13') { goldBox(t, tCof + 0.3, tMot); flashCut(t, S('s13')); return; }
  // ---------- world ----------
  let K;
  if (id === 'ff') K = [[0, 0, 560, 1050, 0.9], [tCor - 0.1, 0.3, 1100, 1150, 0.9]];
  else if (id === 's1') K = [[S('s1'), 0, 560, 1000, 1.15], [tFac - 0.1, 0.25, 560, 950, 1.4]];
  else if (id === 's3') K = [[S('s3'), 0, 540, 1050, 0.95]];
  else if (id === 's4') K = [[S('s4'), 0, 540, 1000, 0.9], [tSo - 0.1, 0.3, 700, 980, 1.1]];
  else if (id === 's6' || id === 's7' || id === 's8') K = [[S(id), 0, 560, 1080, 1.1], [S(id) + 0.2, 2, 580, 1080, 1.2]];
  else if (id === 's9') K = [[S('s9'), 0, 540, 1080, 0.85]];
  else if (id === 's12') K = [[S('s12'), 0, 540, 1050, 0.95], [tRos - 0.1, 0.3, 760, 1150, 1.25]];
  else K = [[0, 0, 540, 1000, 0.95]];
  camPath(t, K, id === 'ff' && t >= tCor && t < tCor + 0.3 ? 12 : 0);
  if (id === 'ff') { notaryOut(t); const r = seg(t, tNot - 0.1, tNot + 1.4); cast('rico', lerp(-300, 380, r), GY, 0.8, t, { ...KEV, mood: 'smug', look: 1, walk: t * 2 }); cast('woman', lerp(-600, 160, r), GY, 0.8, t, { mood: 'smile', look: 1, walk: t * 2.2 });
    if (t >= tCor - 0.2) { hearse(lerp(2400, 1350, eOut(clamp(seg(t, tCor - 0.2, tCor + 0.8)))), GY, 0.8); } }
  if (id === 's1') { kitchen(t); mamie(560, GY, 0.95, t, { mood: t >= tFac ? 'smug' : 'smile', look: 0 }); }
  if (id === 's3') { garden(t); door(900, GY - 600, 260, 600, '#3a6a9a'); cast('guard', 360, GY, 0.85, t, { mood: t >= tChat ? 'shock' : 'worried', look: 1 }); mamie(820, GY, 0.82, t, { mood: 'smug', look: -1 }); if (t >= tChat) cat(600, GY, 0.7 * eBack(clamp(P(t, tChat))), t); }
  if (id === 's4') { kitchen(t, true); p47(300, GY, 0.85, t, { mood: t < tSo ? 'shock' : 'smile', look: 1 }); bag(80, GY - 20, 0.8); mamie(800, GY, 0.82, t, { mood: 'smile', look: -1 }); table(560, GY - 360, 420);
    if (t >= tSo) bowl(560, GY - 400, 0.9 * eBack(clamp(P(t, tSo))), t); night(t < tDim ? 0.22 : 0.05); }
  if (id === 's6') { living(t); cast('rico', 380, GY, 0.9, t, { ...KEV, mood: 'smug', look: 1 }); key2(720, GY - 560, 0.7, '#c9c9d0'); bubble(760, 520, 380, 230, P(t, tLing), () => bars(9)); }
  if (id === 's7') { living(t); cast('woman', 380, GY, 0.9, t, { mood: t >= tPl ? 'smile' : 'shock', look: 1 }); key2(720, GY - 560, 0.7, '#e2b649'); bubble(760, 520, 380, 260, P(t, S('s7') + 1.2), villa);
    if (t >= tPl) { x.fillStyle = '#7ab8e0'; [[340, -1], [420, 1]].forEach(([dx, d]) => ell(dx + 0, GY - 690 + ((t * 300) % 120), 12, 18, '#7ab8e0', 3)); } }
  if (id === 's8') { living(t); tom(400, GY, 0.75, t, { mood: 'smile', look: 1 }); if (t >= tRouge - 1.2) key2(700, GY - 520, 0.9 * eBack(clamp(P(t, tRouge - 1.2))), '#e8304a', true); }
  if (id === 's9') { living(t); const lol = t >= tRic; cast('rico', 180, GY, 0.82, t, { ...KEV, mood: lol ? 'smile' : 'smug', look: 1, armUp: lol }); cast('woman', 470, GY, 0.82, t, { mood: lol ? 'smile' : 'smug', look: 1 });
    tom(830, GY, 0.72, t, { mood: 'worried', look: -1 }); key2(830, GY - 420, 0.5, '#e8304a', true); if (lol) onoma('HA HA !', 300, 600 + Math.sin(t * 20) * 8, P(t, tRic, 0.2), 130); }
  if (id === 's12') { garden(t); rose(820, GY, 1.0, t); tom(260, GY, 0.75, t, { mood: t >= tRos ? 'shock' : 'worried', look: 1 }); p47(520, GY, 0.85, t, { mood: t >= tComp ? 'smug' : 'worried', look: 1, armUp: t >= tComp });
    if (t >= tRos) bubble(760, 560, 420, 300, P(t, tRos), () => { mamie(-60, 380, 0.4, t, { mood: 'smile', look: 1 }); txt('MON CŒUR ♥', 70, -40, 44, C.red, { stroke: false }); }); }
  if (id === 's14' || id === 'end') { kitchen(t); table(540, GY - 360, 760); p47(280, GY, 0.85, t, { mood: 'smile', look: 1 }); tom(800, GY, 0.75, t, { mood: 'smile', look: -1 }); bowl(400, GY - 400, 0.75, t); bowl(680, GY - 400, 0.75, t);
    if (id === 's14') { x.save(); x.globalAlpha = 0.55 * clamp(seg(t, S('s14'), S('s14') + 1)); mamieHead(540, 420, 0.42, t); x.restore(); } }
  vignette(0.25);
  // ---------- overlays ----------
  if (id === 'ff') { flashCut(t, tNot - 0.1); hookCard(t, [['MAMIE ROSE EST MORTE…', 76], ['3 CLÉS. UNE SEULE VAUT DE L\'OR 🔑', 52, C.red]], B.ff.end + 0.1); if (t >= tCor) onoma('AVANT LE CORBILLARD ?!', 540, 760, P(t, tCor, 0.2), 70); }
  if (id === 's1') { flashCut(t, S('s1')); pill('💰 DE L\'ARGENT', 540, 300, P(t, tArg), C.green); if (t >= tJam) pill('🤞 JAMAIS UN MENSONGE', 540, 420, P(t, tJam), C.blue); if (t >= tFac) pill('… MAIS À SA FAÇON 😏', 540, 540, P(t, tFac), C.red); }
  if (id === 's3') { flashCut(t, S('s3')); banner('LE FACTEUR', 540, 300, P(t, S('s3') + 0.2), C.blue); pill('🐕 « PLUS DE CHIEN ! »', 540, 440, P(t, S('s3') + 1.0), C.brown); if (t >= tChat) pill('🐈 … UN CHAT', 540, 560, P(t, tChat), C.red); }
  if (id === 's4') { flashCut(t, S('s4')); pill('🌙 47 LA CAMBRIOLE', 540, 300, P(t, S('s4') + 0.3), C.blue); if (t >= tVal) pill('💎 « LA VALEUR ? DANS LA CUISINE »', 540, 420, P(t, tVal), C.brown); if (t >= tSo) pill('🍲 IL REPART… AVEC UNE SOUPE', 540, 540, P(t, tSo), C.red); }
  if (id === 's6') { flashCut(t, S('s6')); banner('KEVIN', 540, 290, P(t, S('s6') + 0.05), C.blue); pill('💸 VENAIT POUR EMPRUNTER', 540, 420, P(t, S('s6') + 0.6), C.brown); }
  if (id === 's7') { flashCut(t, S('s7')); banner('INÈS', 540, 290, P(t, S('s7') + 0.05), '#b5486a'); pill('📞 1 APPEL PAR AN', 540, 420, P(t, S('s7') + 0.6), C.brown); }
  if (id === 's8') { flashCut(t, S('s8')); banner('TOM', 540, 290, P(t, S('s8') + 0.05), C.green); pill('🍲 LÀ CHAQUE DIMANCHE', 540, 420, P(t, S('s8') + 0.6), C.brown); pill('❤️ « LA CLÉ DE MON CŒUR »', 540, 540, P(t, S('s8') + 1.8), C.red); }
  if (id === 's6') pill('🔑 « LA CLÉ DE MON COFFRE »', 540, 540, P(t, S('s6') + 1.6), C.blue);
  if (id === 's7') pill('🔑 « MA VILLA VUE SUR MER »', 540, 540, P(t, S('s7') + 1.4), C.orange);
  if (id === 's9') { flashCut(t, S('s9')); paperCard([['« ELLE OUVRE QUOI, TA CLÉ ?', 52], ['UN JOURNAL INTIME ? »', 60, C.red]], 540, 330, P(t, tRic + 0.3), { w: 940 }); }
  if (id === 's12') { flashCut(t, S('s12')); pill('🤔 OUVRIR QUOI ?', 540, 300, P(t, S('s12') + 0.2), C.brown); if (t >= tComp) pill('💡 47 A COMPRIS', 540, 420, P(t, tComp), C.orange); }
  if (id === 's14') { flashCut(t, S('s14')); paperCard([['ELLE N\'AVAIT JAMAIS MENTI…', 58], ['CHACUN A EU', 54, C.red], ['CE QU\'IL MÉRITAIT', 66, C.red]], 540, 330, P(t, S('s14') + 0.2), { w: 900 }); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ?', 80], ['T\'AURAIS EU QUELLE CLÉ ? 💬', 52, C.red]], 540, 300, P(t, S('end')), { w: 900 });
    [['🔑 COFFRE', 200, C.blue], ['🏖️ VILLA', 540, C.orange], ['❤️ CŒUR', 880, C.red]].forEach(([s, px, col], i) => { const p = P(t, S('end') + 0.3 + i * 0.15); if (p <= 0) return; x.save(); resetCam(); x.translate(px, 560); const k = eBack(clamp(p)) * (1 + 0.04 * Math.sin(t * 8 + i)); x.scale(k, k); rrc(0, 0, 310, 120, 28, col, 8); txt(s, 0, 4, 54, '#fff', { stroke: false }); x.restore(); }); }
}
