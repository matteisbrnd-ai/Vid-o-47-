// Les histoires de 47 #3 — « Le ticket de Papi Robert ». Helpers from #2 + ticket / cards / wedding photo inserts.
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
  rbox(-430, -260, 860, 520, 18, '#fdf6e3', 9); x.fillStyle = '#e8452c'; x.fillRect(-430, -260, 860, 90); txt('LOTO', 0, -210, 70, '#fff', { stroke: false });
  const nums = ['6', '4', '19', '49']; nums.forEach((n, i) => { const hi = o.hi != null && i <= o.hi; ell(-270 + i * 180, -20, 72, 72, hi ? '#ffd23f' : '#fff', 7); txt(n, -270 + i * 180, -14, 76, OL, { stroke: false }); });
  for (let i = 0; i < 22; i++) { x.fillStyle = '#222'; x.fillRect(-380 + i * 34, 150, i % 3 ? 10 : 18, 70); } if (o.win) stamp('GAGNANT · 1 000 000 €', o.win, 0); x.restore(); }
function backNote(t, p) { resetCam(); x.fillStyle = '#1e1a26'; x.fillRect(0, 0, W, H); if (p <= 0) return; x.save(); x.translate(540, 900); const k = eOut(clamp(p)); x.rotate((1 - k) * 3 - 0.04); x.scale(0.4 + 0.6 * k, 0.4 + 0.6 * k);
  rbox(-430, -330, 860, 660, 18, '#fdf6e3', 9); [['Je ne jouais pas', -150, '#33405a'], ['pour gagner.', -40, '#33405a'], ['Je jouais pour', 100, C.red], ['ne jamais oublier.', 210, C.red]].forEach(([s, y, c]) => txt(s, 0, y, 76, c, { stroke: false })); txt('Robert ♥', 230, 290, 50, '#33405a', { stroke: false }); x.restore(); }
function wedding(t, tA, tR) { resetCam(); x.fillStyle = vg(0, H, '#f6e7d0', '#e2c9a4'); x.fillRect(0, 0, W, H); polaroid(540, 820, 620, 560, 1, (w, h) => { x.fillStyle = '#d8cfc0'; x.fillRect(0, 0, w, h); x.save(); x.filter = 'sepia(0.8)'; papi(w * 0.33, h + 300, 0.42, t, { white: false, mood: 'smile', look: 1 }); mamie(w * 0.67, h + 300, 0.42, t, { hairCol: '#5a3a22', mood: 'smile', look: -1 }); x.restore(); }, '6 AVRIL 1949 ♥', -0.04);
  if (t >= tR) { for (let i = 0; i < 5; i++) { x.save(); x.translate(330 + i * 100, 1480 + Math.sin(i * 2) * 20); const k = eBack(clamp(P(t, tR + i * 0.08))); x.scale(k, k); x.strokeStyle = '#3a7a3a'; x.lineWidth = 10; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, 200); x.stroke(); ell(0, 0, 50, 46, '#d6304a', 6); ell(-8, -6, 24, 20, '#ff5a70', 0); x.restore(); } } }
function cardsTable(t) { kitchen(t); x.save(); x.filter = 'sepia(0.6)'; table(540, GY - 360, 700); papi(250, GY, 0.85, t, { mood: 'smile', look: 1 }); p47(830, GY, 0.85, t, { mood: 'smug', look: -1 }); for (let i = 0; i < 5; i++) { x.save(); x.translate(430 + i * 50, GY - 400); x.rotate(-0.3 + i * 0.15); rbox(-30, -45, 60, 90, 6, '#fff', 4); txt(['♥', '♠', '♦', '♣', '♥'][i], 0, 4, 36, i % 2 ? OL : C.red, { stroke: false }); x.restore(); } x.restore(); }
function draw(t) {
  const id = curId(t), tGag = WF('ff', /gagnant/i), tMil = WF('ff', /million/i), tVol = WF('s1', /voleur/i), tCons = WF('s2', /consigne/i), tNum = WF('s3', /six/i), tDyl = WF('s4', /Facile/i), tR4 = WF('s4', /Raté/i), tChl = WF('s5', /anniversaire/i), tR5 = WF('s5', /Raté/i), tMoq = WF('s6', /moqué/i),
    tAv = WF('s7', /avril/i), tRos = WF('s7', /roses/i), tPoc = WF('s8', /poche/i), tDon = WF('s8', /donné/i), tGar = WF('s8', /gardé/i);
  const HOOK = [['PAPI EST MORT…', 80], ['AVEC UN TICKET À 1 MILLION 😳', 58, C.red]];
  if (id === 'ff') { if (t < tGag - 0.1) portraitP(t); else { ticket(t, { win: P(t, tMil, 0.25), hi: 3 }); flashCut(t, tGag - 0.1); } hookCard(t, HOOK, B.ff.end + 0.1); return; }
  if (id === 's3') { const hi = t < tNum ? -1 : Math.min(3, Math.floor((t - tNum) / 0.45)); ticket(t, { hi }); flashCut(t, S('s3')); pill('🎟️ LES MÊMES DEPUIS 40 ANS', 540, 380, P(t, S('s3') + 0.1), C.orange); return; }
  if (id === 'mid') { ticket(t, { hi: 3, y: 1000, k: 0.85 }); flashCut(t, S('mid')); paperCard([['6 · 4 · 19 · 49', 96], ['C\'EST QUOI ? 🤔', 70, C.red]], 540, 400, P(t, S('mid'), 0.25), { w: 900 }); x.save(); x.translate(540, 1560); const k = eBack(clamp(P(t, S('mid') + 0.6))) * (1 + 0.05 * Math.sin(t * 9)); x.scale(k, k); rrc(0, 0, 820, 140, 36, C.red, 8); txt('ÉCRIS TA RÉPONSE 👇', 0, 8, 70, '#fff', { stroke: false }); x.restore(); return; }
  if (id === 's7' && t >= tAv - 0.2) { wedding(t, tAv, tRos); flashCut(t, tAv - 0.2); pill('💍 LE JOUR DE SON MARIAGE', 540, 260, P(t, tAv), C.red); if (t >= tRos) pill('🌹 CHAQUE 6 AVRIL, DES ROSES', 540, 1720, P(t, tRos), '#2a8a3a'); return; }
  if (id === 's9') { backNote(t, seg(t, S('s9'), S('s9') + 0.5)); flashCut(t, S('s9')); pill('AU DOS DU TICKET…', 540, 300, P(t, S('s9') + 0.1), C.brown); return; }
  let K;
  if (id === 's1') K = [[S('s1'), 0, 540, 1000, 1.25], [S('s1') + 0.1, 2, 540, 980, 1.45]];
  else if (id === 's2') K = [[S('s2'), 0, 540, 1050, 0.95]];
  else if (id === 's4' || id === 's5' || id === 's6' || id === 's7') K = [[S(id), 0, 560, 1080, 1.05], [S(id) + 0.2, 3, 580, 1080, 1.15]];
  else if (id === 's8') K = [[S('s8'), 0, 540, 1080, 1.0], [tDon - 0.1, 0.4, 560, 1050, 1.25]];
  else K = [[0, 0, 540, 1050, 0.95]];
  camPath(t, K);
  if (id === 's1') { kitchen(t, true); p47(540, GY, 0.95, t, { mood: 'smug', look: 0, armUp: true }); x.save(); x.translate(700, GY - 760); x.rotate(-0.2); rbox(-80, -50, 160, 100, 8, '#fdf6e3', 5); x.fillStyle = '#e8452c'; x.fillRect(-80, -50, 160, 22); x.restore(); night(0.25); }
  if (id === 's2') cardsTable(t);
  if (id === 's4' || id === 's5' || id === 's6' || id === 's7') { office(t); desk(860, GY - 380, 420); p47(860, GY - 30, 0.8, t, { mood: 'smug', look: -1 }); desk(860, GY - 380, 420);
    if (id === 's4') cast('rico', 380, GY, 0.95, t, { ...KEV, mood: t >= tR4 ? 'shock' : 'smile', look: 1 });
    if (id === 's5') cast('woman', 380, GY, 0.95, t, { mood: t >= tR5 ? 'shock' : 'smile', look: 1 });
    if (id === 's6') { const lol = t >= tMoq; cast('rico', 150, GY, 0.82, t, { ...KEV, mood: lol ? 'smile' : 'smug', look: 1, armUp: lol }); tom(450, GY, 0.72, t, { mood: 'worried', look: 1 }); if (lol) onoma('HA HA !', 220, 560 + Math.sin(t * 20) * 8, P(t, tMoq, 0.2), 120); }
    if (id === 's7') tom(420, GY, 0.75, t, { mood: 'smile', look: 1 }); }
  if (id === 's8') { office(t); const give = t >= tDon ? eOut(clamp(seg(t, tDon, tDon + 0.6))) : 0; p47(780, GY, 0.85, t, { mood: 'smile', look: -1, armUp: t >= tPoc }); tom(330, GY, 0.75, t, { mood: t >= tDon ? 'shock' : 'worried', look: 1, armUp: give >= 1 });
    if (t >= tPoc) { x.save(); x.translate(lerp(700, 420, give), GY - 700 + 40 * Math.sin(give * Math.PI)); x.rotate(-0.1); rbox(-90, -55, 180, 110, 8, '#fdf6e3', 5); x.fillStyle = '#e8452c'; x.fillRect(-90, -55, 180, 24); x.restore(); } }
  if (id === 'end') { kitchen(t); table(540, GY - 360, 700); papi(250, GY, 0.85, t, { mood: 'smile', look: 1 }); tom(830, GY, 0.75, t, { mood: 'smile', look: -1 }); x.save(); x.globalAlpha = 0.5; x.restore(); }
  vignette(0.25);
  if (id === 's1') { flashCut(t, S('s1')); if (t >= tVol - 0.3) paperCard([['IL L\'A CONFIÉ…', 70], ['À UN VOLEUR 😱', 80, C.red]], 540, 330, P(t, tVol - 0.3, 0.2), { w: 860 }); }
  if (id === 's2') { flashCut(t, S('s2')); pill('🃏 CHAQUE DIMANCHE, AUX CARTES', 540, 300, P(t, S('s2') + 0.2), C.brown); if (t >= tCons - 0.2) paperCard([['« DONNE-LE À CELUI QUI SAIT', 50], ['CE QUE VEULENT DIRE', 50], ['MES NUMÉROS »', 66, C.red]], 540, 520, P(t, tCons - 0.2), { w: 960 }); }
  if (id === 's4') { flashCut(t, S('s4')); banner('DYLAN', 540, 280, P(t, S('s4') + 0.05), C.blue); pill('🎄 VENAIT QU\'À NOËL', 540, 410, P(t, S('s4') + 0.5), C.brown); if (t >= tDyl) paperCard([['« LE CODE DE SA', 56], ['CARTE BLEUE ! »', 70, C.red]], 540, 600, P(t, tDyl), { w: 820 }); if (t >= tR4) stamp('RATÉ', P(t, tR4, 0.25), 1000); }
  if (id === 's5') { flashCut(t, S('s5')); banner('CHLOÉ', 540, 280, P(t, S('s5') + 0.05), '#b5486a'); pill('📵 OUBLIAIT DE L\'APPELER', 540, 410, P(t, S('s5') + 0.5), C.brown); if (t >= tChl - 0.4) paperCard([['« C\'EST MON', 56], ['ANNIVERSAIRE ! »', 70, C.red]], 540, 600, P(t, tChl - 0.4), { w: 820 }); if (t >= tR5) { stamp('RATÉ', P(t, tR5, 0.25), 1000); pill('ELLE EST NÉE EN MARS', 540, 1180, P(t, tR5 + 0.4), C.red); } }
  if (id === 's6') { flashCut(t, S('s6')); banner('LÉO', 540, 280, P(t, S('s6') + 0.05), C.green); pill('🤫 NE DISAIT RIEN', 540, 410, P(t, S('s6') + 0.5), C.brown); if (t >= tMoq) paperCard([['« LUI ? IL SAIT MÊME', 54], ['PAS COMPTER ! »', 66, C.red]], 540, 600, P(t, tMoq + 0.2), { w: 860 }); }
  if (id === 's7') { flashCut(t, S('s7')); banner('LÉO', 540, 280, 1, C.green); }
  if (id === 's8') { flashCut(t, S('s8')); if (t >= tGar - 1.0) paperCard([['UN VOLEUR AVEC 1 MILLION…', 50], ['QUI N\'A RIEN GARDÉ 🤝', 60, C.red]], 540, 330, P(t, tGar - 1.0), { w: 940 }); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI ?', 80], ['LA DATE DE MARIAGE DE', 46, C.red], ['TES GRANDS-PARENTS ? 💬', 50, C.red]], 540, 330, P(t, S('end')), { w: 900 }); pill('📤 ENVOIE-LA À QUELQU\'UN QUI NE LA CONNAÎT PAS', 540, 620, P(t, S('end') + 1.5), '#2457a8'); }
}

function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }

function reveal(t, tV) { resetCam(); x.fillStyle = '#16121e'; x.fillRect(0, 0, W, H); x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(540, 1000, 40, 540, 1100, 700); g.addColorStop(0, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.restore();
  const k = eOut(clamp(seg(t, tV - 0.15, tV + 0.5))); x.save(); x.translate(540, 1750); x.scale(0.9 + 0.15 * k, 0.9 + 0.15 * k); p47(0, 0, 1.15, t, { mood: 'smug', look: 0, armUp: true }); x.restore(); keyIcon(760, 760, 1.1 * eBack(clamp(P(t, tV + 0.1))), t); }
