const V = 'J';
// La bande de 47 — Saison 1 · Jour 2 (built from Jour 1): one city set (gang garage left, Baron's district right), game-like HUD, A/B/C vote polaroids.
window.LOOK = 'gala'; 
const GY = 1950, LOLA = { hairCol: '#c0392b', body: '#2c4f8a', body2: '#223f70', pants: '#223f70' };
function building(bx, by, w, h, col, label, flag) { rbox(bx, by, w, h, 8, col, 8); for (let r = 0; r < Math.floor(h / 160) - 1; r++) for (let k = 0; k < 3; k++) rbox(bx + 30 + k * (w - 60) / 3, by + 40 + r * 160, (w - 60) / 3 - 24, 90, 6, '#bfe3ff', 4);
  rbox(bx - 10, by - 70, w + 20, 70, 10, '#2b2b30', 6); txt(label, bx + w / 2, by - 33, 44, '#f5c542', { stroke: false });
  if (flag) { x.fillStyle = OL; x.fillRect(bx + w - 30, by - 230, 10, 160); poly([[bx + w - 20, by - 230], [bx + w + 90, by - 200], [bx + w - 20, by - 170]], '#1b1b1f', 5); txt('B', bx + w + 25, by - 196, 34, '#f5c542', { stroke: false }); } }
function city(t) { x.fillStyle = vg(-1500, 1600, '#6fc0ff', '#e3f4ff'); x.fillRect(-1200, -1500, 5000, 3200);
  bricks(-200, 1250, 900, 450, '#c96a4a', 'rgba(80,40,20,.3)'); rbox(-200, 1180, 900, 80, 10, '#7a3a2a', 7); txt('GARAGE 47', 250, 1225, 50, C.orange, { stroke: false }); rbox(80, 1400, 340, 300, 10, '#6b707a', 7);
  building(900, 900, 380, 800, '#e3d6bc', 'BANQUE', true); building(1360, 1050, 360, 650, '#cfe0f0', 'PORT', true); building(1800, 800, 420, 900, '#e9b7a0', 'CASINO', true);
  x.fillStyle = '#5a5d66'; x.fillRect(-1200, 1700, 5000, 2000); x.fillStyle = '#fff'; for (let i = -6; i < 30; i++) x.fillRect(i * 200, 1980, 100, 14); }
function hud(t, money, id, tAbo) { resetCam(); [['💰 ' + money + ' €', 190], ['🏙 0 / 3', 540], ['👥 ' + (id === 'ff' || id === 's2' ? 16 : id === 's3' || id === 's4' ? 17 : 18), 890]].forEach(([s, px]) => { rrc(px, 140, 300, 80, 30, 'rgba(20,20,30,.75)', 4); txt(s, px, 144, 44, '#fff', { stroke: false }); }); }
function puff(px, py, r, a) { x.save(); x.globalAlpha = a; [[0, 0, 1], [-0.7, 0.2, 0.75], [0.7, 0.25, 0.8], [-0.3, -0.5, 0.7], [0.4, -0.45, 0.65]].forEach(([dx, dy, k]) => { const g = x.createRadialGradient(px + dx * r - r * 0.2 * k, py + dy * r - r * 0.3 * k, 2, px + dx * r, py + dy * r, r * k);
  g.addColorStop(0, '#ffffff'); g.addColorStop(0.6, '#d9dce4'); g.addColorStop(1, '#a9aebb'); x.fillStyle = g; x.beginPath(); x.arc(px + dx * r, py + dy * r, r * k, 0, 7); x.fill(); }); x.restore(); }
function shine(px, py, rx, ry) { x.save(); x.globalAlpha = 0.55; ell(px, py, rx, ry, '#ffffff', 0); x.restore(); }
function gadget(w, h, k, t) { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, k === 'A' ? '#cfefff' : k === 'B' ? '#e9e4f5' : '#fff1d6'); g.addColorStop(1, '#fbf3e4'); x.fillStyle = g; x.fillRect(0, 0, w, h);
  if (k === 'A') { x.save(); x.translate(w * 0.5, h * 0.55); x.rotate(-0.12);                                   // chunky water blaster + tank + spray
    x.strokeStyle = 'rgba(80,180,255,.8)'; x.lineWidth = 10; x.setLineDash([16, 12]); x.beginPath(); x.moveTo(w * 0.33, -h * 0.05); x.quadraticCurveTo(w * 0.5, -h * 0.3, w * 0.62, -h * 0.05); x.stroke(); x.setLineDash([]);
    rbox(-w * 0.38, -h * 0.1, w * 0.7, h * 0.16, 26, '#ff7a2f', 6); rbox(w * 0.28, -h * 0.07, w * 0.08, h * 0.1, 8, '#ffd23f', 5);
    rbox(-w * 0.12, h * 0.04, w * 0.14, h * 0.2, 14, '#2d6be0', 6); rbox(-w * 0.34, h * 0.03, w * 0.1, h * 0.16, 12, '#2d6be0', 6);
    ell(-w * 0.08, -h * 0.2, w * 0.15, h * 0.1, '#5fd3ff', 6); ell(-w * 0.08, -h * 0.22, w * 0.1, h * 0.05, '#9fe6ff', 0); shine(-w * 0.15, -h * 0.07, w * 0.12, h * 0.02); x.restore(); }
  if (k === 'B') { puff(w * 0.5, h * 0.33, w * 0.2, 0.95); [[0.28, 0.66, '#3b3f4a'], [0.52, 0.72, '#5b2a6a'], [0.75, 0.64, '#3b3f4a']].forEach(([cx, cy, c]) => { ell(w * cx, h * cy, w * 0.11, w * 0.11, c, 6);
      rbox(w * cx - w * 0.04, h * cy - w * 0.15, w * 0.08, w * 0.05, 4, '#8a8f99', 4); x.strokeStyle = '#7a5232'; x.lineWidth = 5; x.beginPath(); x.moveTo(w * cx, h * cy - w * 0.15); x.quadraticCurveTo(w * cx + 20, h * cy - w * 0.22, w * cx + 10, h * cy - w * 0.27); x.stroke();
      ell(w * cx + 10, h * cy - w * 0.27, 7, 7, '#ffcf3f', 0); shine(w * cx - w * 0.04, h * cy - w * 0.04, w * 0.03, w * 0.02); rrc(w * cx, h * cy + 6, w * 0.12, w * 0.05, 4, '#ffd23f', 3); }); }
  if (k === 'C' || k === 'D') { x.save(); x.translate(w * (k === 'D' ? 0.5 : 0.62), h * (k === 'D' ? 0.45 : 0.33)); if (k === 'D') x.scale(1.6, 1.6);                                                     // quad drone
    [[-1, -1], [1, -1]].forEach(([sx]) => { x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(0, 0); x.lineTo(sx * w * 0.2, -h * 0.05); x.stroke(); ell(sx * w * 0.2, -h * 0.07, w * 0.11, h * 0.015, 'rgba(60,60,70,.6)', 2); });
    rbox(-w * 0.1, -h * 0.03, w * 0.2, h * 0.07, 14, '#e03a2e', 6); ell(0, h * 0.05, w * 0.03, w * 0.03, '#1b1b1f', 4); shine(-w * 0.04, -h * 0.01, w * 0.05, h * 0.01); x.restore(); }
  if (k === 'C' || k === 'G') { x.save(); x.translate(w * (k === 'G' ? 0.45 : 0.32), h * 0.72); if (k === 'G') x.scale(1.3, 1.3);                                                                       // grappling hook + rope coil
    [-1, 0, 1].forEach(d => { x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(0, -h * 0.05); x.quadraticCurveTo(d * w * 0.12, 0, d * w * 0.1 + (d ? 0 : 0), -h * 0.08 + (d ? 0 : h * 0.13)); x.stroke(); x.strokeStyle = '#b9c0cc'; x.lineWidth = 9; x.stroke(); });
    rbox(-8, -h * 0.25, 16, h * 0.2, 4, '#b9c0cc', 4); x.strokeStyle = '#c9a06a'; x.lineWidth = 8; x.beginPath(); x.moveTo(0, -h * 0.25); x.quadraticCurveTo(w * 0.1, -h * 0.45, w * 0.3, -h * 0.4); x.stroke(); x.restore(); } }
function price(w, h, s) { x.save(); x.translate(w * 0.8, h * 0.12); x.rotate(0.18); rrc(0, 0, 120, 56, 14, C.red, 5); txt(s, 0, 3, 36, '#fff', { stroke: false }); x.restore(); }
const RYZEN = { hat: 'beanie', hatCol: '#3a3f4a', hatCol2: '#2a2d36', body: '#c96a2a', body2: '#a8531e', pants: '#3a3f4a', num: false, glasses: true };
const ANGE = { hat: 'hair', hairCol: '#f4f2ec', body: '#1b1b1f', body2: '#111', pants: '#2a2d36', num: false };
function recruitCard(w, h, who, t) { const g2 = x.createLinearGradient(0, 0, 0, h); g2.addColorStop(0, who === 'R' ? '#ffe6c7' : '#e8e4ff'); g2.addColorStop(1, '#fbf3e4'); x.fillStyle = g2; x.fillRect(0, 0, w, h);
  x.save(); x.translate(w / 2, h * 0.96); x.scale(0.55, 0.55); cast('inspector', 0, 0, 1, t, { ...(who === 'R' ? RYZEN : ANGE), mood: who === 'R' ? 'smile' : 'smug', look: 0, armUp: who === 'A' }); x.restore();
  if (who === 'A') { x.strokeStyle = '#f5c542'; x.lineWidth = 8; x.beginPath(); x.ellipse(w / 2, h * 0.18, 70, 18, 0, 0, 7); x.stroke(); x.strokeStyle = '#7a5232'; x.lineWidth = 10; x.beginPath(); x.moveTo(w * 0.78, h * 0.62); x.lineTo(w * 0.78, h * 0.45); x.lineTo(w * 0.7, h * 0.36); x.moveTo(w * 0.78, h * 0.45); x.lineTo(w * 0.86, h * 0.36); x.stroke(); }
  if (who === 'R') { rbox(w * 0.08, h * 0.62, w * 0.28, h * 0.14, 10, '#c9302a', 5); x.strokeStyle = '#8a8f99'; x.lineWidth = 10; x.beginPath(); x.moveTo(w * 0.8, h * 0.4); x.lineTo(w * 0.9, h * 0.62); x.stroke(); ell(w * 0.79, h * 0.38, 16, 16, '#8a8f99', 4); } }
// --- Jour 3 additions: comment bubble (real comment shown on screen), big VS scoreboard, recruit looks, port-route cards ---
function bubble(px, py, user, msg, p) { if (p <= 0) return; x.save(); x.translate(px, py); const k = eBack(clamp(p)) * 1.7; x.scale(k, k);
  font(38); const w = Math.max(x.measureText(msg).width, 300) + 150; rbox(-w / 2, -70, w, 140, 30, '#ffffff', 5); ell(-w / 2 + 60, 0, 36, 36, '#c9ced6', 3); txt(user[0].toUpperCase(), -w / 2 + 60, 4, 34, OL, { stroke: false });
  x.textAlign = 'left'; font(30); x.fillStyle = '#8a8f99'; x.fillText('@' + user, -w / 2 + 112, -18); font(38); x.fillStyle = OL; x.fillText(msg, -w / 2 + 112, 28); x.textAlign = 'center'; x.restore(); }
function scoreboard(t, us, them) { resetCam(); x.save(); x.translate(540, 175); x.scale(1.15, 1.15); x.translate(-540, -175); rrc(540, 175, 980, 120, 30, 'rgba(20,20,28,.85)', 5);
  txt('BANDE DE 47', 270, 150, 34, C.orange, { stroke: false }); txt(us + ' MEMBRES', 270, 198, 50, '#fff', { stroke: false });
  ell(540, 175, 52, 52, C.red, 5); txt('VS', 540, 180, 40, '#fff', { stroke: false });
  txt('LE BARON', 810, 150, 34, '#f5c542', { stroke: false }); txt(them + ' HOMMES', 810, 198, 50, '#fff', { stroke: false }); x.restore(); }
const SPY = { hat: 'cap', hatCol: '#3a3f4a', hatCol2: '#2a2d36', body: '#5a4a3a', body2: '#3a2f25', pants: '#2a2d36', num: false, glasses: true };
const FIGHTER = { hat: 'hair', hairCol: '#1b1b1f', body: '#c0392b', body2: '#962d22', pants: '#2a2d36', num: false };
const ARCHER = { hat: 'beanie', hatCol: '#2a8a3a', hatCol2: '#1f6a2c', body: '#3c6b3a', body2: '#2c5a2c', pants: '#5a3a22', num: false };
function memberCard(w, h, look, t, extra) { const g2 = x.createLinearGradient(0, 0, 0, h); g2.addColorStop(0, '#e8f3ff'); g2.addColorStop(1, '#fbf3e4'); x.fillStyle = g2; x.fillRect(0, 0, w, h);
  x.save(); x.translate(w / 2, h * 0.96); x.scale(0.55, 0.55); cast('inspector', 0, 0, 1, t, { ...look, mood: 'smug', look: 0 }); x.restore(); if (extra) extra(w, h); }
function routeCard(w, h, k) { const sky2 = x.createLinearGradient(0, 0, 0, h); sky2.addColorStop(0, '#bfe3ff'); sky2.addColorStop(1, '#fbf3e4'); x.fillStyle = sky2; x.fillRect(0, 0, w, h);
  if (k === 'A') { x.fillStyle = '#3a7fd0'; x.fillRect(0, h * 0.55, w, h * 0.45); for (let i = 0; i < 5; i++) { x.fillStyle = 'rgba(255,255,255,.5)'; x.fillRect(20 + i * 60, h * 0.65 + (i % 2) * 30, 40, 6); } x.save(); x.translate(w / 2, h * 0.58); x.beginPath(); x.moveTo(-90, -30); x.lineTo(90, -30); x.lineTo(60, 20); x.lineTo(-60, 20); x.closePath(); fs('#a8673a', 6); x.restore(); }
  if (k === 'B') { x.fillStyle = '#5a5d66'; x.fillRect(0, h * 0.5, w, h * 0.5); ell(w / 2, h * 0.68, w * 0.32, h * 0.12, '#3a3d44', 6); for (let i = -2; i <= 2; i++) { x.fillStyle = '#1b1b1f'; x.fillRect(w / 2 + i * 26 - 6, h * 0.6, 12, h * 0.16); } }
  if (k === 'C') { rbox(w * 0.12, h * 0.3, w * 0.76, h * 0.5, 8, '#c96a4a', 6); poly([[w * 0.08, h * 0.32], [w / 2, h * 0.12], [w * 0.92, h * 0.32]], '#7a3a2a', 6); rbox(w * 0.35, h * 0.5, w * 0.3, h * 0.3, 4, '#5a3a22', 5); [0.25, 0.75].forEach(px => rbox(w * px - 20, h * 0.4, 40, 30, 4, '#bfe3ff', 3)); } }

function gang(t, extra) { cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, blink: t > 0.6 }); cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1, blink: t > 0.6 });
  p47(460, GY, 0.78, t, { mood: 'smug', look: 1, blink: t > 0.6 }); cast('inspector', 660, GY, 0.75, t, { ...RYZEN, mood: 'smile', look: 1, blink: t > 0.6 }); cast('inspector', 860, GY, 0.75, t, { ...ANGE, mood: 'smug', look: 1, blink: t > 0.6 });
  cast('inspector', -140, GY, 0.75, t, { ...SPY, mood: 'smug', look: 1, blink: t > 0.6 }); if (extra !== 'nofighter') cast('inspector', -340, GY, 0.75, t, { ...FIGHTER, mood: 'angry', look: 1, blink: t > 0.6 }); }
function army(t, n) { for (let r = 0; r < 3; r++) for (let k = 0; k < n; k++) cast('guard', 1250 + k * 170 + r * 60, GY - 120 + r * 70, 0.6, t, { mood: 'angry', look: -1, blink: t > 0.6 }); cast('boss', 1500, GY + 40, 0.9, t, { mood: 'smug', look: -1, blink: t > 0.6 }); }
function silhouetteCard(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); ell(w / 2, h * 0.38, 70, 80, '#2b2b30', 0); rbox(w / 2 - 110, h * 0.55, 220, 200, 80, '#2b2b30', 0); txt('?', w / 2, h * 0.4, 110, '#fff', { stroke: false }); txt('@TOI', w / 2, h - 50, 64, C.red, { stroke: false }); }
function finger(px, py, press) { x.save(); x.translate(px, py + (press ? 18 : 0)); x.scale(1.6, 1.6); rbox(-38, 0, 76, 220, 38, '#f2c9a0', 7); ell(0, 20, 34, 30, '#f7d9b8', 4); rbox(-60, 160, 120, 200, 50, '#f2c9a0', 7); x.restore(); }
function cage(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); x.strokeStyle = '#3a3d44'; x.lineWidth = 14; for (let k = -3; k <= 3; k++) { x.beginPath(); x.moveTo(k * 70, -720); x.lineTo(k * 70, 0); x.stroke(); }
  rbox(-250, -760, 500, 60, 20, '#3a3d44', 6); rbox(-250, -20, 500, 40, 10, '#3a3d44', 6); x.restore(); }

function nativeComment(px, py, sc, user, msg, p) { if (p <= 0) return; x.save(); x.translate(px, py); x.scale(sc * eBack(clamp(p)), sc * eBack(clamp(p)));
  rbox(-440, -95, 880, 190, 26, '#ffffff', 0); x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 3; x.strokeRect(-440, -95, 880, 190);
  ell(-370, -20, 46, 46, '#e8794a', 0); txt(user[0].toUpperCase(), -370, -14, 44, '#fff', { stroke: false });
  x.textAlign = 'left'; font(30); x.fillStyle = '#8a8f99'; x.fillText(user, -305, -40); font(42); x.fillStyle = '#161823'; x.fillText(msg, -305, 10); font(26); x.fillStyle = '#8a8f99'; x.fillText('il y a 1 j   Répondre', -305, 60); x.textAlign = 'center';
  txt('♡', 395, -18, 46, '#8a8f99', { stroke: false }); txt('12', 395, 32, 28, '#8a8f99', { stroke: false }); x.restore(); }
function speedLines(t, a) { if (a <= 0) return; x.save(); x.globalAlpha = a; x.strokeStyle = '#ffffff'; x.lineWidth = 8; for (let i = 0; i < 9; i++) { const lx = 120 + i * 110, ly = 300 + (i * 97 + t * 3000) % 500; x.beginPath(); x.moveTo(lx, ly); x.lineTo(lx, ly + 160); x.stroke(); } x.restore(); }
function introG(t, mode) { const id = curId(t), slam = eOut(seg(t, -0.12, 0.3)), shake = t > 0.28 && t < 0.6 ? Math.sin(t * 90) * 18 * (1 - (t - 0.28) / 0.32) : 0, tRev = S('s0');
  window.CAP_Y = 640;
  camPath(t, [[0, 0, 1260, 1455, 1.4], [0.35, 1.6, 1270, 1460, 1.3], [tRev - 0.2, 0.9, 1300, 1480, 1.15]]); x.translate(shake, 0); city(t); gang(t, 'nofighter');
  cast('boss', 1480, GY + 40, 0.9, t, { mood: t > 0.3 ? 'smile' : 'neutral', look: -1, blink: t > 0.6 }); cast('inspector', 1130, GY, 0.75, t, { ...FIGHTER, mood: 'shock', look: 1, blink: false });
  x.save(); x.translate(0, -560 * (1 - slam)); cage(1130, GY + 20, 0.62, t); x.restore(); resetCam(); if (t < 0.3) speedLines(t, 1 - t / 0.3);
  if (t > 0.28 && t < 0.5) { x.fillStyle = 'rgba(230,40,40,' + (0.4 * (1 - (t - 0.28) / 0.22)) + ')'; x.fillRect(0, 0, W, H); }
  const hook = mode === 'G' ? [['IL A JUSTE COMMENTÉ… 😳', 76]] : mode === 'H' ? [['ÇA AURAIT PU ÊTRE TOI 😳', 76]] : [['IL LUI RESTE 60 SECONDES', 70]];
  hookCard(t, hook.map(([a, b]) => [a, b + 18]), 2.0);
  nativeComment(540, 470, 1.1, 'sa.lah.7', 'je veux être le combattant', t < 2.1 ? 1 : 0);
  if (t >= 0.3 && t < 2.1) stamp('CAPTURÉ !', P(t, 0.3, 0.2), 680);
  if (mode === 'I') { const left = Math.max(0, 60 - Math.floor(t)); pill('⏳ 00:' + String(left).padStart(2, '0'), 830, 760, 1, C.red); }
  
  const pulse = t > 4 && t < 4.4 ? 1 + 0.12 * Math.sin((t - 4) / 0.4 * Math.PI) : 1;
  if (t > 0.8) pill('TU DÉCIDES 👇', 540, 1290, P(t, 0.8), C.red);
  [['A', 'ATTAQUER'], ['B', 'NÉGOCIER'], ['C', 'INFILTRER']].forEach(([k, lab], i) => { const p = clamp((t - 0.8 - i * 0.1) / 0.25); if (p <= 0) return; x.save(); x.translate(200 + i * 340, 1390 + 260 * (1 - eOut(p))); x.scale(pulse, pulse);
    rrc(0, 0, 310, 130, 26, C.cream, 6); txt(k, 0, -18, 60, C.red, { stroke: false }); txt(lab, 0, 38, 38, OL, { stroke: false }); x.restore(); });
  if (id === 's0') { scoreboard(t, 76, 1000); if (t >= WF('s0', /soldat/i)) pill('1 ABONNÉ = 1 SOLDAT 💪', 540, 440, P(t, WF('s0', /soldat/i)), '#2a8a3a'); } }

function bigTimer(t, py) { const left = Math.max(0, 60 - Math.floor(t)), pu = 1 + 0.08 * Math.pow(1 - (t % 1), 3); x.save(); resetCam(); x.translate(540, py); x.scale(pu, pu);
  rrc(0, 0, 400, 140, 36, C.red, 7); txt('⏳ ' + (left === 60 ? '01:00' : '00:' + String(left).padStart(2, '0')), 0, 8, 96, '#fff', { stroke: false }); x.restore(); }
function introJ(t) { const id = curId(t), slam = eOut(seg(t, -0.12, 0.3)), shake = t > 0.28 && t < 0.55 ? Math.sin(t * 90) * 18 * (1 - (t - 0.28) / 0.27) : 0;
  const rattle = t > 0.7 && t < 1.4 ? Math.sin(t * 60) * 10 : 0;
  window.CAP_Y = 1180;
  camPath(t, [[0, 0, 1150, 1330, 2.4], [0.7, 0.5, 1150, 1340, 2.6], [1.4, 0.7, 1300, 1420, 1.5], [S('s0') + 1.5, 1.2, 1100, 1450, 0.85]]); x.translate(shake, 0); city(t); gang(t, 'nofighter');
  cast('boss', 1480, GY + 40, 0.9, t, { mood: t > 0.3 ? 'smile' : 'neutral', look: -1, blink: t > 0.6, armUp: t > 1.4 });
  if (t > 1.4) { x.save(); x.translate(1590, GY - 690 + Math.sin(t * 6) * 12); x.rotate(0.3 * Math.sin(t * 5)); ell(0, 0, 34, 34, '#f5c542', 7); ell(0, 0, 12, 12, '#a07a1a', 0); rbox(-8, 30, 16, 90, 4, '#f5c542', 6); rbox(8, 90, 24, 14, 3, '#f5c542', 4); rbox(8, 110, 18, 12, 3, '#f5c542', 4); x.restore(); }
  x.save(); x.translate(rattle, 0); cast('inspector', 1130, GY, 0.75, t, { ...FIGHTER, mood: 'shock', look: 1, blink: false, armsUp: t > 0.7 && t < 1.4 }); x.restore();
  x.save(); x.translate(rattle * 0.6, -560 * (1 - slam)); cage(1130, GY + 20, 0.62, t); x.restore(); resetCam(); if (t < 0.3) speedLines(t, 1 - t / 0.3);
  if (t > 0.28 && t < 0.45) { x.fillStyle = 'rgba(230,40,40,' + (0.3 * (1 - (t - 0.28) / 0.17)) + ')'; x.fillRect(0, 0, W, H); }
  hookCard(t, [['IL A JUSTE COMMENTÉ…', 84], ['1 MIN POUR LE SAUVER ⏳', 84, C.red]], B.ff.end);
  if (id === 'ff') { x.save(); x.translate(540, 550); x.scale(1.18, 1.18); x.translate(-540, -550); nativeComment(540, 550, 1.0, 'sa.lah.7', 'je veux être le combattant', 1); x.restore(); }
  bigTimer(t, id === 'ff' ? 790 : 400);
  if (t > 2.1) { const votes = [12, 8, 15].map((v, i) => v + Math.floor(Math.max(0, t - 2.1) * (3 + i))); pill('TU DÉCIDES 👇', 540, 1290, P(t, 2.1), C.red);
    [['A', 'ATTAQUER'], ['B', 'NÉGOCIER'], ['C', 'INFILTRER']].forEach(([k, lab], i) => { const p = clamp((t - 2.1 - i * 0.1) / 0.25); if (p <= 0) return; x.save(); x.translate(200 + i * 340, 1420 + 260 * (1 - eOut(p)));
      rrc(0, 0, 310, 150, 26, C.cream, 6); txt(k, 0, -34, 56, C.red, { stroke: false }); txt(lab, 0, 14, 36, OL, { stroke: false }); txt(votes[i] + ' votes', 0, 52, 30, '#2a8a3a', { stroke: false }); x.restore(); }); }
  if (t > 2.8 && t < S('s0') + 2.5) pill('SINON IL DISPARAÎT 😱', 540, id === 'ff' ? 930 : 560, P(t, 2.8), '#2b2b30');
  if (id === 's0' && t >= WF('s0', /abonné/i)) { scoreboard(t, 76, 1000); pill('1 ABONNÉ = 1 SOLDAT 💪', 540, 560, P(t, WF('s0', /abonné/i)), '#2a8a3a'); } }
function draw(t) {
  if (V === 'J') return introJ(t);
  if (V === 'G' || V === 'H' || V === 'I') return introG(t, V);
  const id = curId(t), t1 = S('s0');
  if (V === 'A') { camPath(t, [[0, 0, 260, 1500, 1.15], [t1, 1.0, 300, 1450, 0.85]]); city(t); gang(t, id === 's0' && t >= WF('s0', /voilà/i) ? '' : 'nofighter'); resetCam();
    if (id === 'ff') polaroid(560, 980, 420, 520, eBack(seg(t, 0, 0.35)), silhouetteCard, 'NOUVEAU MEMBRE', 0.04);
    hookCard(t, [['ABONNE-TOI…', 80], ["DEMAIN T'APPARAIS", 70, C.red], ['DANS LA VIDÉO 👀', 70]], B.ff.end + 0.1);
    if (id === 's0') { scoreboard(t, 76, 1000); bubble(540, 560, 'sa.lah.7', 'je veut être le combattant', P(t, WF('s0', /commenté/i), 0.2)); if (t >= WF('s0', /voilà/i)) polaroid(560, 900, 380, 440, P(t, WF('s0', /voilà/i), 0.3), (w, h) => memberCard(w, h, FIGHTER, t), '@SA.LAH.7 · LE COMBATTANT', -0.04); } }
  if (V === 'B') { camPath(t, [[0, 0, 1550, 1450, 1.0], [0.3, 2.2, 1450, 1450, 0.8], [t1, 1.0, 600, 1450, 0.62]]); city(t); gang(t); army(t, 4); resetCam();
    const n = id === 's0' && t >= WF('s0', /abonnes/i) + 0.9 ? 77 : 76;
    if (id === 's0') scoreboard(t, n, 1000); else { const pu = 1 + 0.05 * Math.sin(t * 9); x.save(); x.translate(540, 900); x.scale(pu * eBack(seg(t, 0, 0.3)), pu * eBack(seg(t, 0, 0.3))); rrc(0, 0, 960, 230, 36, 'rgba(20,20,28,.9)', 6); txt('NOUS', -300, -50, 44, C.orange, { stroke: false }); txt('76', -300, 40, 120, '#fff', { stroke: false }); ell(0, 0, 80, 80, C.red, 6); txt('VS', 0, 8, 64, '#fff', { stroke: false }); txt('LE BARON', 300, -50, 44, '#f5c542', { stroke: false }); txt('1000', 300, 40, 120, '#fff', { stroke: false }); x.restore(); }
    hookCard(t, [['76 CONTRE 1000…', 92, C.red], ['IL RESTE 6 JOURS ⏳', 66]], B.ff.end + 0.1);
    if (id === 's0' && t >= WF('s0', /abonnes/i)) { followTap(t, WF('s0', /abonnes/i)); if (t >= WF('s0', /abonnes/i) + 0.9) pill('+1 SOLDAT 💪', 540, 1000, P(t, WF('s0', /abonnes/i) + 0.9), '#2a8a3a'); } }
  if (V === 'C') { camPath(t, [[0, 0, 300, 1500, 1.0], [t1, 1.0, 300, 1450, 0.8]]); city(t); const joined = t >= 1.0; gang(t, 'nofighter'); if (joined) { cast('inspector', -340, GY, 0.75, t, { ...FIGHTER, mood: 'smile', look: 1 }); }
    if (joined && t < 1.6) [0, 1, 2].forEach(i => puff(-340 + (i - 1) * 120, GY - 300, 120 + 200 * seg(t, 1.0, 1.6), 1 - seg(t, 1.0, 1.6))); resetCam();
    if (id === 'ff') { followTap(t, 0.05); finger(600, 1220 + 300 * (1 - eOut(seg(t, 0, 0.4))), t > 0.45 && t < 0.8); if (t >= 1.0) onoma('BOUM !', 760, 860, P(t, 1.0, 0.2), C.red); }
    hookCard(t, [['UN CLIC ICI…', 84], ["ET T'ES DANS LA BANDE 💥", 64, C.red]], B.ff.end + 0.1);
    if (id === 's0') { scoreboard(t, 76, 1000); paperCard([['1 ABONNÉ = 1 MEMBRE', 70, '#2a8a3a'], ['OBJECTIF : 1000 · J-6', 66, C.red]], 540, 600, P(t, t1 + 0.2), { w: 860 }); } }
  if (V === 'D') { camPath(t, [[0, 0, 1300, 1450, 1.1], [t1, 1.0, 900, 1450, 0.62]]); city(t); gang(t, 'nofighter'); army(t, 2); cast('inspector', 1100, GY, 0.75, t, { ...FIGHTER, mood: 'shock', look: 1, blink: t > 0.6 }); cage(1100, GY + 20, 0.62, t); resetCam();
    if (id === 'ff' && Math.floor(t * 4) % 2 === 0) { x.fillStyle = 'rgba(220,40,40,.18)'; x.fillRect(0, 0, W, H); }
    hookCard(t, [['LE BARON A CAPTURÉ', 70], ['UN DE NOS MEMBRES 😱', 72, C.red], ["C'EST TOI QUI DÉCIDES 👇", 54]], B.ff.end + 0.1);
    if (id === 's0') { scoreboard(t, 76, 1000); paperCard([['1 ABONNÉ = 1 SOLDAT', 70, '#2a8a3a'], ['76 CONTRE 1000', 80, C.red]], 540, 600, P(t, t1 + 0.2), { w: 860 }); } }
  if (V === 'E') { camPath(t, [[0, 0, 0, 1500, 1.0], [t1, 1.0, 300, 1450, 0.8]]); city(t); const shown = t >= WF('ff', /aujourd/i); gang(t, shown ? '' : 'nofighter'); resetCam();
    if (id === 'ff') { bubble(540, 1000, 'sa.lah.7', 'je veux être le combattant', eBack(seg(t, 0, 0.3))); if (shown) polaroid(560, 1000, 420, 480, P(t, WF('ff', /aujourd/i), 0.3), (w, h) => memberCard(w, h, FIGHTER, t), '@SA.LAH.7 · LE COMBATTANT', -0.04); }
    hookCard(t, [['IL A ÉCRIT ÇA…', 84], ['IL EST DANS LA VIDÉO', 72, C.red]], B.ff.end + 0.1);
    if (id === 's0') { scoreboard(t, 76, 1000); paperCard([['ABONNE-TOI + ÉCRIS TON RÔLE', 54], ['= TU REJOINS LA BANDE', 68, '#2a8a3a']], 540, 600, P(t, t1 + 0.2), { w: 900 }); } }
  if (V === 'F') { window.CAP_Y = 600; const slam = eOut(seg(t, 0, 0.3)), shake = t > 0.28 && t < 0.6 ? Math.sin(t * 90) * 16 * (1 - (t - 0.28) / 0.32) : 0;
    camPath(t, [[0, 0, 1300, 1500, 1.5], [S('s0'), 1.2, 1300, 1480, 1.3]]); x.translate(shake, 0); city(t); gang(t, 'nofighter');
    cast('boss', 1480, GY + 40, 0.9, t, { mood: t > 0.3 ? 'smile' : 'neutral', look: -1, blink: t > 0.6 }); cast('inspector', 1130, GY, 0.75, t, { ...FIGHTER, mood: 'shock', look: 1, blink: false });
    x.save(); x.translate(0, -700 * (1 - slam)); cage(1130, GY + 20, 0.62, t); x.restore(); resetCam();
    if (t > 0.28 && t < 0.5) { x.fillStyle = 'rgba(230,40,40,' + (0.35 * (1 - (t - 0.28) / 0.22)) + ')'; x.fillRect(0, 0, W, H); }
    if (id === 'ff') { x.save(); x.translate(540, 650); x.scale(1.12, 1.12); x.translate(-540, -650); bubble(540, 650, 'sa.lah.7', 'je veux être le combattant', 1); x.restore(); }
    const pulse = t > 4 && t < 4.4 ? 1 + 0.12 * Math.sin((t - 4) / 0.4 * Math.PI) : 1;
    if (t > 0.5) pill('TU DÉCIDES 👇', 540, 1250, P(t, 0.5), C.red);
    [['A', 'ATTAQUER'], ['B', 'NÉGOCIER'], ['C', 'INFILTRER']].forEach(([k, lab], i) => { const p = clamp((t - 0.5 - i * 0.1) / 0.25); if (p <= 0) return; x.save(); x.translate(200 + i * 340, 1390 + 260 * (1 - eOut(p))); x.scale(pulse, pulse);
      rrc(0, 0, 310, 130, 26, C.cream, 6); txt(k, 0, -18, 60, C.red, { stroke: false }); txt(lab, 0, 38, 38, OL, { stroke: false }); x.restore(); });
    hookCard(t, [['IL A COMMENTÉ…', 88], ["LE BARON L'A CAPTURÉ 😱", 70, C.red]], B.ff.end + 0.1);
    if (id === 's0') { scoreboard(t, 76, 1000); bubble(540, 780, 'sa.lah.7', 'je veux être le combattant', P(t, S('s0'), 0.2)); if (t >= WF('s0', /soldat/i)) pill('1 ABONNÉ = 1 SOLDAT 💪', 540, 420, P(t, WF('s0', /soldat/i)), '#2a8a3a'); } }
}
