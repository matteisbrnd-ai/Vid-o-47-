// Les histoires de 47 #6 — « Le jour de congé ». Helpers from #2–#5 (shop/box) + boss, TV, controller.
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

const PAPI = { hat: 'bald', white: true, glasses: true, body: '#5a6a8a', body2: '#4a5a78', pants: '#3a3530', num: false, collar: true };
function papi(px, py, s, t, o = {}) { cast('old', px, py, s, t, { ...PAPI, ...o }); }
function portraitP(t) { resetCam(); x.fillStyle = vg(0, H, '#3a3a4a', '#1a1a22'); x.fillRect(0, 0, W, H); const fl = 0.85 + 0.15 * Math.sin(t * 13) * Math.sin(t * 7);
  x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 50, 540, 1000, 800); g.addColorStop(0, `rgba(255,180,90,${0.3 * fl})`); g.addColorStop(1, 'rgba(255,180,90,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  rbox(230, 640, 620, 760, 12, '#c9973a', 12); rbox(270, 680, 540, 680, 6, '#e9d9b8', 6); x.save(); x.beginPath(); x.rect(270, 680, 540, 680); x.clip(); papi(540, 1680, 0.9, t, { mood: 'smile' }); x.restore();
  poly([[690, 640], [862, 640], [862, 812]], '#111', 6); [[200, 1560], [880, 1560]].forEach(([cx, cy]) => { rbox(cx - 34, cy - 160, 68, 220, 10, '#f4efe0', 6); const f = 1 + 0.1 * Math.sin(t * 17 + cx); ell(cx, cy - 200, 22 * f, 40 * f, '#ffb43a', 5); ell(cx, cy - 192, 10, 20, '#fff2b0', 0); }); }
function ticket(t, o = {}) { resetCam(); x.fillStyle = vg(0, H, '#2a2440', '#14121c'); x.fillRect(0, 0, W, H); x.save(); x.translate(540, o.y || 900); x.rotate(-0.05 + Math.sin(t * 2) * 0.01); const k = o.k == null ? 1 : o.k; x.scale(k, k);
  rbox(-430, -260, 860, 520, 18, '#fdf6e3', 9); x.fillStyle = '#e8452c'; x.fillRect(-430, -260, 860, 90); txt('TICKET À GRATTER… NON : À NUMÉROS', 0, -210, 1, '#e8452c', { stroke: false }); txt('TICKET', 0, -210, 70, '#fff', { stroke: false });
  const nums = ['6', '4', '19', '49']; nums.forEach((n, i) => { const hi = o.hi != null && i <= o.hi; ell(-270 + i * 180, -20, 72, 72, hi ? '#ffd23f' : '#fff', 7); txt(n, -270 + i * 180, -14, 76, OL, { stroke: false }); });
  for (let i = 0; i < 22; i++) { x.fillStyle = '#222'; x.fillRect(-380 + i * 34, 150, i % 3 ? 10 : 18, 70); } x.restore(); if (o.win) stamp('GAGNANT · 1 000 000 €', o.win, 1260); }
function backNote(t, p) { resetCam(); x.fillStyle = '#1e1a26'; x.fillRect(0, 0, W, H); if (p <= 0) return; x.save(); x.translate(540, 900); const k = eOut(clamp(p)); x.rotate((1 - k) * 3 - 0.04); x.scale(0.4 + 0.6 * k, 0.4 + 0.6 * k);
  rbox(-430, -330, 860, 660, 18, '#fdf6e3', 9); [['Je ne jouais pas', -150, '#33405a'], ['pour gagner.', -40, '#33405a'], ['Je jouais pour', 100, C.red], ['ne jamais oublier.', 210, C.red]].forEach(([s, y, c]) => txt(s, 0, y, 76, c, { stroke: false })); txt('Robert ♥', 230, 290, 50, '#33405a', { stroke: false }); x.restore(); }
function wedding(t, tA, tR) { resetCam(); x.fillStyle = vg(0, H, '#f6e7d0', '#e2c9a4'); x.fillRect(0, 0, W, H); polaroid(540, 820, 620, 560, 1, (w, h) => { x.fillStyle = '#d8cfc0'; x.fillRect(0, 0, w, h); papi(w * 0.3, h + 60, 0.8, t, { white: false, mood: 'smile', look: 1 }); mamie(w * 0.7, h + 60, 0.8, t, { hairCol: '#5a3a22', mood: 'smile', look: -1 }); [[-26, 0], [0, -18], [26, 0], [-12, 22], [14, 22]].forEach(([a2, b2]) => ell(w * 0.62 + a2, h * 0.6 + b2, 20, 20, '#fff', 3)); txt('♥', w * 0.5, h * 0.3, 60, C.red, { stroke: false }); x.fillStyle = 'rgba(160,110,50,.18)'; x.fillRect(0, 0, w, h); }, '6 AVRIL 1949 ♥', -0.04);
  if (t >= tR) { for (let i = 0; i < 5; i++) { x.save(); x.translate(330 + i * 100, 1250 + Math.sin(i * 2) * 20); const k = eBack(clamp(P(t, tR + i * 0.08))); x.scale(k, k); x.strokeStyle = '#3a7a3a'; x.lineWidth = 10; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, 200); x.stroke(); ell(0, 0, 50, 46, '#d6304a', 6); ell(-8, -6, 24, 20, '#ff5a70', 0); x.restore(); } } }
function cardsTable(t) { kitchen(t); x.save(); x.filter = 'sepia(0.6)'; table(540, GY - 360, 700); papi(250, GY, 0.85, t, { mood: 'smile', look: 1 }); p47(830, GY, 0.85, t, { mood: 'smug', look: -1 }); for (let i = 0; i < 5; i++) { x.save(); x.translate(430 + i * 50, GY - 400); x.rotate(-0.3 + i * 0.15); rbox(-30, -45, 60, 90, 6, '#fff', 4); txt(['♥', '♠', '♦', '♣', '♥'][i], 0, 4, 36, i % 2 ? OL : C.red, { stroke: false }); x.restore(); } x.restore(); }


const LIV = { hat: 'cap', hatCol: '#7a4a22', hatCol2: '#5a3a1a', body: '#a8743a', body2: '#8a5e2e', num: false };
function box(cx, cy, s) { x.save(); x.translate(cx, cy); x.scale(s, s); rbox(-60, -80, 120, 160, 6, '#1d1530', 5); x.fillStyle = '#e8508a'; x.fillRect(-60, -80, 120, 8); txt('GTA', 0, -20, 40, '#f5a8d0', { stroke: false }); txt('6', 0, 30, 60, '#fff', { stroke: false }); x.restore(); }
function shop(t, empty, dawn) { sky(dawn ? '#f3b98a' : '#9fcbea', dawn ? '#fde2c4' : '#dceef8', GY); x.fillStyle = '#8a8a8a'; x.fillRect(-1200, GY, 3500, 1400); rbox(-300, 300, 1700, GY - 300, 0, '#3a3550', 0);
  rbox(-280, 340, 1660, 160, 10, '#e8508a', 8); txt('GAME STORE', 540, 425, 110, '#fff', { stroke: false }); rbox(-100, 600, 1280, 760, 10, '#bfe0f4', 10);
  x.save(); x.beginPath(); x.rect(-100, 600, 1280, 760); x.clip(); x.fillStyle = 'rgba(30,20,50,.55)'; x.fillRect(-100, 600, 1280, 760); for (let r = 0; r < 3; r++) { rbox(-80, 820 + r * 220, 1240, 16, 2, '#c9cdd2', 0); if (!empty) for (let c = 0; c < 13; c++) box(-20 + c * 95, 760 + r * 220, 0.45); } x.restore();
  rbox(200, 1380, 680, 90, 30, '#ffd23f', 7); txt('SORTIE : AUJOURD\'HUI', 540, 1430, 54, OL, { stroke: false });
  if (empty) { x.save(); x.translate(540, 980); x.rotate(-0.12); rbox(-760, -40, 1520, 80, 0, '#ffd23f', 5); txt('POLICE · NE PAS FRANCHIR · POLICE', 0, 6, 46, OL, { stroke: false }); x.restore(); } }
function tent(px, py) { poly([[px - 260, py], [px, py - 360], [px + 260, py]], '#3f7e48', 8); poly([[px - 60, py], [px, py - 300], [px + 60, py]], '#2a5a32', 5); }
function trunk(t, tC) { resetCam(); x.fillStyle = vg(0, H, '#20232c', '#0e0f13'); x.fillRect(0, 0, W, H); rbox(90, 760, 900, 640, 30, '#c9302a', 10); rbox(140, 820, 800, 520, 10, '#1b1b1f', 6);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) box(220 + c * 108, 960 + r * 150, 0.62); poly([[90, 760], [990, 760], [920, 420], [160, 420]], '#a8281f', 10);
  const k = eBack(clamp(P(t, S('s7') + 0.3))); x.save(); x.translate(540, 560); x.scale(k, k); rrc(0, 0, 760, 150, 40, 'rgba(20,20,28,.92)', 8); txt('499 BOÎTES 📦', 0, 10, 90, '#fff', { stroke: false }); x.restore();
  if (t >= tC) { x.save(); x.translate(540, 1560); const k2 = eBack(clamp(P(t, tC))); x.scale(k2, k2); rrc(0, 0, 820, 150, 40, '#2457a8', 8); txt('🎮 LA 500e : DANS SA CONSOLE', 0, 10, 56, '#fff', { stroke: false }); x.restore(); } }

const BOSS = { hat: 'hair', hairCol: '#5a5a5a', body: '#2c3e5a', body2: '#22324a', pants: '#2a2d36', num: false, collar: true, glasses: true };
const BOSSG = { ...BOSS, body: '#e8508a', body2: '#c43d72' };
function boss(px, py, s, t, o = {}) { cast('director', px, py, s, t, { ...BOSS, ...o }); }
function bureau(t) { office(t); rbox(760, 360, 280, 200, 8, '#f6efdc', 8); txt('BUREAU', 900, 462, 56, '#2457a8', { stroke: false }); }
function cal(cx, cy, s, t, circ) { x.save(); x.translate(cx, cy); x.scale(s, s); rbox(-120, -140, 240, 280, 12, '#fff', 7); x.fillStyle = C.red; x.fillRect(-120, -140, 240, 70); txt('NOV.', 0, -102, 44, '#fff', { stroke: false }); txt('19', 0, 40, 120, OL, { stroke: false });
  if (circ > 0) { x.strokeStyle = C.red; x.lineWidth = 12; x.beginPath(); x.ellipse(0, 40, 100, 80, 0, -0.4, -0.4 + Math.PI * 2 * clamp(circ)); x.stroke(); } x.restore(); }
function pad2(cx, cy, s) { x.save(); x.translate(cx, cy); x.scale(s, s); x.beginPath(); x.moveTo(-160, -40); x.quadraticCurveTo(0, -90, 160, -40); x.quadraticCurveTo(220, 80, 140, 100); x.quadraticCurveTo(80, 100, 50, 40); x.lineTo(-50, 40); x.quadraticCurveTo(-80, 100, -140, 100); x.quadraticCurveTo(-220, 80, -160, -40); fs('#2a2a30', 8);
  ell(-90, -10, 26, 26, '#555', 4); [[90, -40, C.red], [130, -10, '#2a8a3a'], [90, 20, '#2457a8'], [50, -10, '#ffd23f']].forEach(([a, b, c]) => ell(a, b, 14, 14, c, 3)); x.restore(); }
function tv(t, zoom) { resetCam(); x.fillStyle = '#1b1820'; x.fillRect(0, 0, W, H); rbox(30, 420, 1020, 1000, 40, '#222', 12); x.save(); x.beginPath(); x.rect(70, 460, 940, 920); x.clip(); x.translate(540, 920); const z = lerp(0.42, 1.1, zoom); x.scale(z, z); x.translate(-lerp(540, 60, zoom), -lerp(1000, 1180, zoom));
  shop(t, false, false); for (let i = 0; i < 6; i++) { cast(['rico', 'woman', 'inspector', 'rico', 'woman', 'rico'][i], 600 + i * 190, GY, 0.7, t, { mood: 'smile', look: -1 }); } tent(60, GY); boss(60, GY, 0.8, t, { ...BOSSG, mood: 'smile', look: 1, armUp: true }); x.save(); x.translate(60, GY - 300); txt('GTA', 0, 0, 56, '#fff', { stroke: false }); x.restore(); x.restore();
  x.fillStyle = 'rgba(255,255,255,.04)'; for (let y = 460; y < 1380; y += 6) x.fillRect(70, y, 940, 2); rbox(90, 480, 360, 70, 12, C.red, 0); txt('🔴 EN DIRECT', 270, 520, 40, '#fff', { stroke: false }); rbox(70, 570, 940, 90, 0, 'rgba(20,20,28,.85)', 0); txt('SORTIE DE GTA 6 : LA FILE DEPUIS HIER SOIR', 540, 618, 40, '#fff', { stroke: false }); }
function draw(t) {
  const id = curId(t), tNov = WF('ff', /novembre/i), tRef = WF('ff', /refusé/i), tGam = WF('s1', /gamins/i), tRig = WF('s1', /rigolé/i), tLa = WF('s2', /pas là/i) || WF('s2', /là/i), tMal = WF('s2', /Malade/i), tTele = WF('s3', /télé/i), tPrem = WF('s3', /premier/i), tMot = WF('s5', /mot/i), tSem = WF('s6', /semaine/i), tMan = WF('s6', /manette/i);
  const HOOK = [['1 JOUR DE CONGÉ POUR GTA 6…', 56], ['REFUSÉ PAR SON PATRON 😤', 64, C.red]];
  if (id === 'mid') { resetCam(); x.fillStyle = vg(0, H, '#2a2440', '#14121c'); x.fillRect(0, 0, W, H); flashCut(t, S('mid')); paperCard([['LE PATRON « MALADE »…', 62], ['IL ÉTAIT OÙ ? 🤔', 84, C.red]], 540, 600, P(t, S('mid'), 0.25), { w: 920 });
    x.save(); x.translate(540, 1100); const k = eBack(clamp(P(t, S('mid') + 0.6))) * (1 + 0.05 * Math.sin(t * 9)); x.scale(k, k); rrc(0, 0, 820, 140, 36, C.red, 8); txt('ÉCRIS TA RÉPONSE 👇', 0, 8, 70, '#fff', { stroke: false }); x.restore(); return; }
  if (id === 's3' || id === 's4') { tv(t, id === 's4' ? 1 : clamp(seg(t, tPrem, B.s3.end))); flashCut(t, S('s3')); if (id === 's4') { onoma('LE PATRON ?!', 540, 330, P(t, S('s4'), 0.2), 130); flashCut(t, S('s4')); } return; }
  if (id === 's5' && t >= tMot - 0.2) { resetCam(); x.fillStyle = vg(0, H, '#c9a27a', '#a8845e'); x.fillRect(0, 0, W, H); x.save(); x.translate(540, 900); x.rotate(-0.06); const k = eBack(clamp(P(t, tMot - 0.2))); x.scale(k, k); rbox(-360, -220, 720, 440, 6, '#fff8a8', 7); txt('Bonne partie,', 0, -40, 90, '#33405a', { stroke: false }); txt('patron 😉', 0, 90, 90, C.red, { stroke: false }); txt('— 47', 220, 180, 50, '#555', { stroke: false }); x.restore(); flashCut(t, tMot - 0.2); return; }
  let K;
  if (id === 'ff') K = [[0, 0, 600, 1050, 1.0], [tRef - 0.1, 0.3, 700, 1050, 1.15]];
  else K = [[S(id), 0, 560, 1080, 1.0], [S(id) + 0.2, 4, 580, 1080, 1.1]];
  camPath(t, K, id === 'ff' && t >= tRef && t < tRef + 0.3 ? 10 : 0);
  bureau(t);
  if (id === 'ff' || id === 's1') { desk(860, GY - 380, 420); boss(860, GY - 30, 0.85, t, { mood: id === 's1' && t >= tRig ? 'smile' : 'smug', look: -1, armUp: id === 's1' && t >= tGam }); desk(860, GY - 380, 420); p47(330, GY, 0.85, t, { mood: id === 's1' ? 'worried' : 'smile', look: 1 });
    if (id === 'ff') cal(600, 900, 1.0 * eBack(clamp(P(t, 0.05))), t, seg(t, tNov, tNov + 0.5)); if (id === 's1' && t >= tRig) { cast('woman', 600, GY, 0.8, t, { mood: 'smile', look: 1 }); cast('rico', 90, GY, 0.8, t, { ...KEV, mood: 'smile', look: 1 }); onoma('HA HA !', 540, 600 + Math.sin(t * 20) * 8, P(t, tRig, 0.2), 120); } }
  if (id === 's2') { desk(860, GY - 380, 420); rbox(760, GY - 620, 200, 240, 30, '#4a4d55', 7); p47(330, GY, 0.85, t, { mood: t >= tLa ? 'shock' : 'neutral', look: 1 }); if (t >= tMal - 0.3) cast('woman', 1200, GY, 0.85, t, { mood: 'neutral', look: -1 }); }
  if (id === 's5') { desk(860, GY - 380, 420); p47(330, GY, 0.85, t, { mood: 'smug', look: 1 }); }
  if (id === 's6' || id === 'end') { p47(540, GY, 0.95, t, { mood: 'smile', look: 0, armUp: true }); pad2(760, GY - 740, 1.0); }
  vignette(0.2);
  if (id === 'ff') { hookCard(t, HOOK, B.ff.end + 0.1); if (t >= tRef) stamp('REFUSÉ', P(t, tRef, 0.25), 1150); }
  if (id === 's1') { flashCut(t, S('s1')); paperCard([['« LES JEUX VIDÉO, C\'EST', 52], ['POUR LES GAMINS ! »', 64, C.red]], 540, 330, P(t, S('s1'), 0.2), { w: 900 }); }
  if (id === 's2') { flashCut(t, S('s2')); pill('⏰ LE 19 NOVEMBRE…', 540, 300, P(t, S('s2') + 0.1), C.blue); if (t >= tLa) pill('🪑 LE PATRON N\'EST PAS LÀ', 540, 420, P(t, tLa), C.red); if (t >= tMal) pill('😷 « MALADE »', 540, 540, P(t, tMal), C.brown); }
  if (id === 's5') { flashCut(t, S('s5')); pill('📱 IL AURAIT PU MONTRER LA VIDÉO…', 540, 320, P(t, S('s5') + 0.1), C.red); }
  if (id === 's6') { flashCut(t, S('s6')); if (t >= tSem - 0.2) pill('🏖️ UNE SEMAINE DE CONGÉ', 540, 300, P(t, tSem - 0.2), '#2a8a3a'); if (t >= tMan + 0.3) paperCard([['« MERCI DE PAS', 60], ['L\'AVOIR DIT. »', 70, C.red]], 540, 520, P(t, tMan + 0.3), { w: 760 }); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['TAGUE TON PATRON 👇', 66, C.red], ['T\'AS POSÉ TON JOUR DEMAIN ?', 48]], 540, 330, P(t, S('end')), { w: 940 }); }
}

function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }

function reveal(t, tV) { resetCam(); x.fillStyle = '#16121e'; x.fillRect(0, 0, W, H); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 40, 540, 1100, 700); g.addColorStop(0, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  const k = eOut(clamp(seg(t, tV - 0.15, tV + 0.5))); x.save(); x.translate(540, 1750); x.scale(0.9 + 0.15 * k, 0.9 + 0.15 * k); p47(0, 0, 1.15, t, { mood: 'smug', look: 0, armUp: true }); x.restore(); keyIcon(760, 760, 1.1 * eBack(clamp(P(t, tV + 0.1))), t); }
