// La bande de 47 — Saison 2 · Jour 11 : bataille de nuit, projecteurs achetés (78 likes), rôles des commentaires du Jour 10, cliffhanger : un policier filme depuis le toit.
window.LOOK = 'gala'; 
const GY = 1950, LOLA = { hairCol: '#c0392b', body: '#2c4f8a', body2: '#223f70', pants: '#223f70' };
function building(bx, by, w, h, col, label, flag) { rbox(bx, by, w, h, 8, col, 8); for (let r = 0; r < Math.floor(h / 160) - 1; r++) for (let k = 0; k < 3; k++) rbox(bx + 30 + k * (w - 60) / 3, by + 40 + r * 160, (w - 60) / 3 - 24, 90, 6, '#bfe3ff', 4);
  rbox(bx - 10, by - 70, w + 20, 70, 10, '#2b2b30', 6); txt(label, bx + w / 2, by - 33, 44, '#f5c542', { stroke: false });
  if (flag) { x.fillStyle = OL; x.fillRect(bx + w - 30, by - 230, 10, 160); poly([[bx + w - 20, by - 230], [bx + w + 90, by - 200], [bx + w - 20, by - 170]], '#1b1b1f', 5); txt('B', bx + w + 25, by - 196, 34, '#f5c542', { stroke: false }); } }
function city(t) { x.fillStyle = vg(-1500, 1600, '#6fc0ff', '#e3f4ff'); x.fillRect(-1200, -1500, 5000, 3200);
  bricks(-200, 1250, 900, 450, '#c96a4a', 'rgba(80,40,20,.3)'); rbox(-200, 1180, 900, 80, 10, '#7a3a2a', 7); txt('GARAGE 47', 250, 1225, 50, C.orange, { stroke: false }); rbox(80, 1400, 340, 300, 10, '#6b707a', 7);
  building(900, 900, 380, 800, '#e3d6bc', 'BANQUE', true); building(1360, 1050, 360, 650, '#cfe0f0', 'PORT', !window.PORT47); building(1800, 800, 420, 900, '#e9b7a0', 'CASINO', true);
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
function cage(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); x.strokeStyle = '#3a3d44'; x.lineWidth = 14; for (let k = -3; k <= 3; k++) { x.beginPath(); x.moveTo(k * 70, -720); x.lineTo(k * 70, 0); x.stroke(); }
  rbox(-250, -760, 500, 60, 20, '#3a3d44', 6); rbox(-250, -20, 500, 40, 10, '#3a3d44', 6); x.restore(); }
function speedLines(t, a) { if (a <= 0) return; x.save(); x.globalAlpha = a; x.strokeStyle = '#ffffff'; x.lineWidth = 8; for (let i = 0; i < 9; i++) { const lx = 120 + i * 110, ly = 300 + (i * 97 + t * 3000) % 500; x.beginPath(); x.moveTo(lx, ly); x.lineTo(lx, ly + 160); x.stroke(); } x.restore(); }

const MEDIC = { hat: 'hair', hairCol: '#6a4a2a', body: '#f4f4f6', body2: '#d9dce4', pants: '#3a5a8a', num: false };
const ELITE = { hat: 'beanie', hatCol: '#1b1b1f', hatCol2: '#111', body: '#2a2d36', body2: '#1b1d24', pants: '#1b1b1f', num: false };
const BRAIN = { hat: 'hair', hairCol: '#3a2a1a', body: '#6a3fa0', body2: '#55308a', pants: '#2a2d36', num: false, glasses: true };
const SUB = { hat: 'cap', hatCol: '#f2b62f', hatCol2: '#c9952a', body: '#f2b62f', body2: '#c9952a', pants: '#2a2d36', num: false };
const ARCH2 = { ...ARCHER, hatCol: '#3a8a5a', body: '#4a7b3a' }, ARCH3 = { ...ARCHER, hatCol: '#5a8a2a', body: '#3c5b2a' };
function crossBadge(w, h) { rrc(w * 0.78, h * 0.2, 70, 70, 12, '#fff', 4); x.fillStyle = C.red; x.fillRect(w * 0.78 - 10, h * 0.2 - 28, 20, 56); x.fillRect(w * 0.78 - 28, h * 0.2 - 10, 56, 20); }
function bow(w, h) { x.strokeStyle = '#7a5232'; x.lineWidth = 8; x.beginPath(); x.arc(w * 0.82, h * 0.5, 70, -1.2, 1.2); x.stroke(); x.strokeStyle = OL; x.lineWidth = 3; x.beginPath(); x.moveTo(w * 0.82 + 70 * Math.cos(-1.2), h * 0.5 + 70 * Math.sin(-1.2)); x.lineTo(w * 0.82 + 70 * Math.cos(1.2), h * 0.5 + 70 * Math.sin(1.2)); x.stroke(); }
function bulb(w, h) { ell(w * 0.8, h * 0.18, 34, 40, '#ffe14a', 5); rbox(w * 0.8 - 16, h * 0.18 + 34, 32, 22, 4, '#8a8f99', 3); }
function comment2(user, l1, l2, p, y = 560) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, y); const k = eBack(clamp(p)); x.scale(k, k); rbox(-520, -140, 1040, 280, 34, '#ffffff', 0); x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 3; x.strokeRect(-520, -140, 1040, 280);
  ell(-430, -60, 50, 50, '#e8794a', 0); txt(user[0].toUpperCase(), -430, -54, 48, '#fff', { stroke: false }); x.textAlign = 'left'; font(36); x.fillStyle = '#8a8f99'; x.fillText(user, -360, -62); font(58); x.fillStyle = '#161823'; x.fillText(l1, -470, 30); x.fillText(l2, -470, 105); x.textAlign = 'center'; x.restore(); }
function card(l1, l2, c2, p, y = 300) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, y); const k = eBack(clamp(p)); x.scale(k, k); rrc(0, 0, 1000, 230, 34, 'rgba(255,255,255,.97)', 9); txt(l1, 0, -45, 82, OL, { stroke: false }); txt(l2, 0, 58, 82, c2, { stroke: false }); x.restore(); }
function flag47(px, py, k) { if (k <= 0) return; x.save(); x.translate(px, py); x.fillStyle = OL; x.fillRect(-5, -240 * k, 10, 240 * k); poly([[5, -240 * k], [130, -210 * k], [5, -180 * k]], C.orange, 5); txt('47', 55, -207 * k, 34, '#fff', { stroke: false }); x.restore(); }
function eIn2(k) { return k * k; }
const PRI = { ...ARCHER, hat: 'hair', hairCol: '#5a2a1a', hatCol: '#5a2a1a', body: '#8a3a6a', body2: '#6a2a52' };
function riddle(t, q, tLui, tNous, tA, tB, tC) { resetCam(); const z = 1 + 0.04 * clamp(t / 2); x.save(); x.translate(540, 960); x.scale(z, z); x.translate(-540, -960);
  x.fillStyle = vg(0, H, '#2a2d36', '#15171c'); x.fillRect(-60, -60, W + 120, H + 120); x.strokeStyle = '#3a3d44'; x.lineWidth = 30; for (let k = -1; k < 8; k++) { x.beginPath(); x.moveTo(k * 160, -60); x.lineTo(k * 160, H + 60); x.stroke(); }
  const pulse = 0.5 + 0.5 * Math.sin(t * 14); x.fillStyle = `rgba(230,40,40,${0.10 + 0.16 * pulse})`; x.fillRect(-60, -60, W + 120, H + 120);
  // the Baron's note (numbers readable muted from frame 0)
  x.save(); x.translate(540, 720); x.rotate(-0.03 + Math.sin(t * 3) * 0.006); rbox(-470, -230, 940, 460, 8, '#f6efdc', 9); ell(0, -210, 26, 26, C.red, 5);
  txt('MON CODE ?', 0, -120, 76, OL, { stroke: false }); const hl = q && t >= tLui, hn = q && t >= tNous;
  txt('MES 1000 SOLDATS', 0, 10, hl && t < tLui + 0.5 ? 96 : 88, '#2457a8', { stroke: false });
  txt('−  TES 96', 0, 140, hn && t < tNous + 0.5 ? 118 : 106, C.red, { stroke: false }); x.restore();
  // keypad + red light + trembling hand
  x.save(); x.translate(540, 1420); x.scale(0.78, 0.78); if (q && t >= tA - 0.15) x.globalAlpha = 0.35; rbox(-300, -420, 600, 840, 40, '#c9cdd2', 10); rbox(-240, -360, 480, 160, 16, '#1b2a1b', 6);
  txt(!q && t < 1.5 ? String(100 + Math.floor(Math.abs(Math.sin(Math.floor(t * 14) * 12.9898) * 43758.5453) % 1 * 1900)) : (Math.floor(t * 3) % 2 === 0 ? '? ? ?' : ''), 0, -270, 100, '#7cff8a', { stroke: false }); ell(250, -390, 26, 26, `rgb(${150 + 100 * pulse},40,40)`, 5);
  for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) { const lab = r < 3 ? String(r * 3 + k + 1) : ['✱', '0', '#'][k]; rrc(-160 + k * 160, -100 + r * 120, 130, 100, 18, '#eef0f3', 5); txt(lab, -160 + k * 160, -94 + r * 120, 56, OL, { stroke: false }); }
  const tap = !q && t < 1.5 ? Math.abs(Math.sin(t * 22)) * 46 : 0, hx = 330 + Math.sin(t * 31) * 9 + Math.sin(t * 5) * 60 - tap, hy = 60 + Math.cos(t * 27) * 9 - tap + Math.cos(t * 4) * 50; x.save(); x.translate(hx, hy); x.rotate(-0.5); rbox(-40, -200, 80, 220, 40, '#f1c9a0', 8); rbox(-90, -20, 220, 260, 60, '#f1c9a0', 8); rbox(-110, 200, 260, 400, 30, '#5a4a3a', 8); x.restore(); x.restore(); x.restore(); }
const GREG = { hat: 'cap', hatCol: '#2f5a2a', hatCol2: '#24461f', body: '#4a6a3a', body2: '#3a5530', pants: '#2a2d36', num: false };
function pad(t, code, ok) { resetCam(); x.fillStyle = vg(0, H, '#2a2d36', '#15171c'); x.fillRect(0, 0, W, H); const pulse = 0.5 + 0.5 * Math.sin(t * 14); if (!ok) { x.fillStyle = `rgba(230,40,40,${0.08 + 0.12 * pulse})`; x.fillRect(0, 0, W, H); }
  x.save(); x.translate(540, 1060); rbox(-330, -470, 660, 940, 40, '#c9cdd2', 10); rbox(-270, -410, 540, 190, 16, ok ? '#1b4a1b' : '#1b2a1b', 6); txt(ok ? 'OUVERT ✅' : (code || '_'), 0, -305, ok ? 96 : 140, '#7cff8a', { stroke: false });
  ell(280, -440, 26, 26, ok ? '#5fd06a' : `rgb(${150 + 100 * pulse},40,40)`, 5); for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) { const lab = r < 3 ? String(r * 3 + k + 1) : ['✱', '0', '#'][k]; rrc(-170 + k * 170, -110 + r * 130, 140, 108, 18, '#eef0f3', 5); txt(lab, -170 + k * 170, -104 + r * 130, 60, OL, { stroke: false }); }
  const tap = Math.abs(Math.sin(t * 9)) * 40; x.save(); x.translate(300 - tap, 120 - tap); x.rotate(-0.5); rbox(-40, -200, 80, 220, 40, '#f1c9a0', 8); rbox(-90, -20, 220, 260, 60, '#f1c9a0', 8); rbox(-110, 200, 260, 400, 30, '#5a4a3a', 8); x.restore(); x.restore(); }
function confetti(t, t0) { if (t < t0) return; resetCam(); const a = t - t0; for (let i = 0; i < 60; i++) { const px = (i * 97) % W + Math.sin(a * 3 + i) * 30, py = -40 + ((a * (260 + (i % 7) * 40) + i * 53) % (H + 80)); x.save(); x.translate(px, py); x.rotate(a * 4 + i); x.fillStyle = ['#f5c542', C.red, '#2a8a3a', '#2457a8', C.orange][i % 5]; x.fillRect(-12, -6, 24, 12); x.restore(); } }
function counter(t, tUp) { resetCam(); const n = t >= tUp - 0.2 ? 179 + Math.round(14 * clamp((t - tUp + 0.2) / 0.45)) : 179; x.save(); x.translate(540, 420); const k = 1 + (t >= tUp && t < tUp + 0.9 ? 0.08 * Math.sin((t - tUp) * 20) : 0); x.scale(k, k);
  rrc(0, 0, 900, 380, 44, 'rgba(20,20,28,.94)', 9); txt(t >= tUp - 0.2 ? 'AUJOURD\'HUI' : 'HIER', 0, -110, 64, t >= tUp ? '#7cff8a' : '#f5c542', { stroke: false }); txt(String(n), 0, 40, 210, t >= tUp ? '#7cff8a' : '#fff', { stroke: false }); txt('SOLDATS DANS LA BANDE', 0, 145, 48, '#fff', { stroke: false }); x.restore();
  if (t >= tUp + 0.7) pill('➕ 14 NOUVEAUX ABONNÉS 💪', 540, 690, P(t, tUp + 0.7), '#2a8a3a'); }
function tag(px, py, label, t) { x.save(); x.translate(px, py + Math.sin(t * 5) * 8); const w = 40 + label.length * 27; rrc(0, 0, w, 110, 26, '#fff', 6); txt(label, 0, 8, 50, OL, { stroke: false }); poly([[-24, 54], [24, 54], [0, 92]], '#fff', 0); x.restore(); }

const HUNTER = { hat: 'cap', hatCol: '#8a5a2a', hatCol2: '#6a4420', body: '#b07a3a', body2: '#8a5e2c', pants: '#3a2f25', num: false };
const NINJA = { hat: 'beanie', hatCol: '#1b1b1f', hatCol2: '#111', body: '#1b1b1f', body2: '#111', pants: '#1b1b1f', num: false };
const DJ = { hat: 'cap', hatCol: '#e03a8a', hatCol2: '#b02a6a', body: '#6a3fa0', body2: '#55308a', pants: '#2a2d36', num: false, glasses: true };
const RIDER = { hat: 'hair', hairCol: '#2a1a12', body: '#1b1b1f', body2: '#111', pants: '#2a2d36', num: false };
function dragon(px, py, s, t) { x.save(); x.translate(px, py + Math.sin(t * 3) * 25); x.scale(s, s); const fl = Math.sin(t * 7);
  x.save(); x.translate(-40, -60); x.rotate(-0.4 - 0.5 * fl); poly([[0, 0], [-260, -200], [-200, -60], [-280, -40], [-120, 30]], '#2f8a4a', 7); x.restore();   // back wing
  x.strokeStyle = OL; x.lineWidth = 7; x.fillStyle = '#3fae5c'; x.beginPath(); x.moveTo(-160, 10); x.quadraticCurveTo(-330, 40 + fl * 20, -400, -40); x.lineTo(-380, 10); x.quadraticCurveTo(-320, 90, -150, 60); x.closePath(); x.fill(); x.stroke();   // tail
  poly([[-400, -40], [-450, -80], [-430, -20]], '#e8794a', 5);
  ell(0, 20, 190, 95, '#3fae5c', 7); ell(10, 55, 140, 45, '#f2d27a', 0);                       // body + belly
  x.fillStyle = '#3fae5c'; x.beginPath(); x.moveTo(120, -10); x.quadraticCurveTo(200, -90, 230, -170); x.lineTo(290, -150); x.quadraticCurveTo(250, -60, 170, 40); x.closePath(); x.fill(); x.stroke();   // neck
  ell(270, -180, 85, 60, '#3fae5c', 7); ell(330, -165, 45, 32, '#4fc06c', 5); ell(355, -170, 7, 7, OL, 0); ell(370, -170, 7, 7, OL, 0); ell(265, -200, 18, 18, '#fff', 4); ell(270, -200, 9, 9, OL, 0);
  poly([[230, -230], [215, -290], [255, -240]], '#f2d27a', 5); poly([[275, -235], [275, -300], [300, -240]], '#f2d27a', 5);
  if (Math.sin(t * 2) > 0.3) { x.save(); x.globalAlpha = 0.85; ell(450, -165, 60, 22, '#ffb43a', 0); ell(520, -165, 40, 16, '#ffe14a', 0); x.restore(); }
  [[-60, 90], [80, 95]].forEach(([lx, ly]) => rbox(lx - 18, ly, 36, 60, 14, '#2f8a4a', 6));
  x.save(); x.translate(40, -60); cast('inspector', 0, 0, 0.5, t, { ...RIDER, mood: 'smug', look: 1, armsUp: true }); x.restore();   // rider sits on the back
  x.save(); x.translate(-20, -40); x.rotate(0.3 + 0.6 * fl); poly([[0, 0], [-240, -260], [-160, -110], [-260, -90], [-100, 20]], '#3fae5c', 7); x.restore(); x.restore(); }  // front wing
function djBooth(px, py, t) { x.save(); x.translate(px, py); rbox(-230, -330, 460, 330, 16, '#2b2b30', 7); rbox(-230, -360, 460, 50, 12, '#3a3d44', 6);
  [-110, 110].forEach((dx, i) => { ell(dx, -335, 80, 16, '#111', 4); x.save(); x.translate(dx, -335); x.rotate(t * 6 + i); x.fillStyle = '#e03a8a'; x.fillRect(-6, -6, 12, 12); x.restore(); });
  for (let i = 0; i < 5; i++) { const h = 40 + 80 * Math.abs(Math.sin(t * 9 + i * 1.3)); x.fillStyle = ['#7cff8a', '#ffe14a', '#ff7a2f', '#e03a8a', '#5fd3ff'][i]; x.fillRect(-180 + i * 75, -40 - h, 50, h); }
  [[-300], [300]].forEach(([dx]) => { rbox(dx - 70, -260, 140, 260, 12, '#1b1b1f', 6); const k = 1 + 0.12 * Math.abs(Math.sin(t * 9)); ell(dx, -170, 45 * k, 45 * k, '#3a3d44', 5); ell(dx, -70, 35 * k, 35 * k, '#3a3d44', 5); });
  if (Math.sin(t * 4) > 0) ['♪', '♫'].forEach((n, i) => txt(n, -150 + i * 300, -480 - ((t * 120 + i * 60) % 160), 70, '#e03a8a', { stroke: false })); x.restore(); }
function bigDog(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); const wag = Math.sin(t * 12) * 0.5;
  x.save(); x.translate(-230, -260); x.rotate(-0.9 + wag); rbox(-15, -150, 30, 150, 15, '#a8673a', 6); x.restore();
  ell(-40, -220, 230, 140, '#c8834a', 7); ell(-10, -180, 150, 80, '#e8b07a', 0);
  [[-200], [-90], [40], [140]].forEach(([lx]) => rbox(lx - 30, -130, 60, 130, 20, '#c8834a', 6));
  ell(190, -390, 130, 120, '#c8834a', 7); ell(280, -350, 70, 55, '#e8b07a', 6); ell(330, -375, 22, 18, OL, 0);
  ell(170, -420, 18, 22, '#fff', 4); ell(174, -418, 9, 11, OL, 0); ell(240, -425, 18, 22, '#fff', 4); ell(244, -423, 9, 11, OL, 0);
  ell(110, -470, 45, 85, '#8a5230', 6); x.save(); x.translate(250, -320); rbox(-25, 0, 50, 40 + 8 * Math.abs(Math.sin(t * 6)), 20, '#e05a6a', 4); x.restore();
  rbox(70, -300, 200, 30, 14, C.red, 5); ell(170, -265, 18, 18, '#f5c542', 4); x.restore(); }
function planCard(p) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, 360); const k = eBack(clamp(p)); x.scale(k, k); x.rotate(-0.03); rbox(-460, -230, 920, 460, 8, '#f6efdc', 9);
  txt('📜 PLAN DU BARON', 0, -150, 60, C.red, { stroke: false }); rbox(-380, -60, 300, 220, 8, '#c96a4a', 5); txt('GARAGE', -230, 60, 44, '#fff', { stroke: false });
  x.strokeStyle = C.red; x.lineWidth = 14; x.setLineDash([26, 16]); x.beginPath(); x.moveTo(380, 120); x.quadraticCurveTo(250, 220, 0, 160); x.lineTo(-60, 120); x.stroke(); x.setLineDash([]); poly([[-90, 100], [-40, 90], [-55, 150]], C.red, 0);
  txt('PAR L\'ARRIÈRE !', 190, -20, 58, OL, { stroke: false }); x.restore(); }

const OURS = { hat: 'beanie', hatCol: '#6a4a2a', hatCol2: '#4a3420', body: '#5a3a22', body2: '#4a2f1b', pants: '#2a2d36', num: false };
const KING = { hat: 'hair', hairCol: '#2a1a12', body: '#7a2a8a', body2: '#5f2070', pants: '#2a2d36', num: false };
const NAPO = { hat: 'bald', body: '#1f3a8a', body2: '#172e6e', pants: '#f4f2ec', num: false };
const COIF = { hat: 'hair', hairCol: '#e8c07a', body: '#f4f4f6', body2: '#d9dce4', pants: '#2a2d36', num: false };
const VRK = { hat: 'cap', hatCol: '#c0392b', hatCol2: '#962d22', body: '#2a8a8a', body2: '#1f6a6a', pants: '#2a2d36', num: false };
function crown(px, py, k = 1) { x.save(); x.translate(px, py); x.scale(k, k); poly([[-80, 0], [-95, -90], [-45, -40], [0, -110], [45, -40], [95, -90], [80, 0]], '#f5c542', 6); [[-95, -90], [0, -110], [95, -90]].forEach(([a, b]) => ell(a, b, 12, 12, C.red, 3)); x.restore(); }
function bicorne(px, py, k = 1) { x.save(); x.translate(px, py); x.scale(k, k); x.beginPath(); x.moveTo(-170, 10); x.quadraticCurveTo(0, -170, 170, 10); x.quadraticCurveTo(0, -30, -170, 10); x.closePath(); fs('#1b1b1f', 6); ell(60, -40, 20, 20, C.red, 3); ell(60, -40, 10, 10, '#fff', 0); x.restore(); }
function barberPole(px, py, t) { x.save(); x.translate(px, py); rbox(-26, -300, 52, 300, 20, '#fff', 6); x.save(); x.beginPath(); x.rect(-22, -296, 44, 292); x.clip(); for (let i = -4; i < 10; i++) { const y0 = -300 + ((i * 50 + t * 80) % 400); x.fillStyle = i % 2 ? C.red : '#2457a8'; x.beginPath(); x.moveTo(-30, y0); x.lineTo(30, y0 - 30); x.lineTo(30, y0 - 10); x.lineTo(-30, y0 + 20); x.fill(); } x.restore(); ell(0, -310, 30, 18, '#c9cdd2', 5); x.restore(); }
function bigCat(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); const sw = Math.sin(t * 3) * 0.3;
  x.strokeStyle = OL; x.lineWidth = 44; x.lineCap = 'round'; x.beginPath(); x.moveTo(160, -60); x.quadraticCurveTo(320, -100 + sw * 80, 260, -330); x.stroke(); x.strokeStyle = '#8a8f99'; x.lineWidth = 30; x.stroke();
  ell(0, -200, 200, 210, '#8a8f99', 7); ell(0, -150, 120, 140, '#d9dce4', 0); [[-90], [90]].forEach(([dx]) => ell(dx, -20, 60, 32, '#8a8f99', 6));
  poly([[-150, -520], [-120, -660], [-50, -560]], '#8a8f99', 7); poly([[150, -520], [120, -660], [50, -560]], '#8a8f99', 7); ell(0, -480, 170, 140, '#8a8f99', 7);
  [[-65], [65]].forEach(([dx]) => { ell(dx, -500, 34, 40, '#b8e05a', 5); ell(dx, -500, 9, 30, OL, 0); }); poly([[-16, -440], [16, -440], [0, -422]], '#e05a7a', 3);
  x.strokeStyle = OL; x.lineWidth = 4; [[-1], [1]].forEach(([d]) => [-10, 10].forEach(dy => { x.beginPath(); x.moveTo(d * 40, -425 + dy); x.lineTo(d * 170, -440 + dy * 2.5); x.stroke(); }));
  rbox(-90, -350, 180, 26, 12, '#f5c542', 5); x.restore(); }
function bigWall(k, t) { if (k <= 0) return; const h = 700 * k; x.save(); bricks(1860, GY - h, 300, h, '#b85a3e', 'rgba(80,40,20,.35)'); x.strokeStyle = OL; x.lineWidth = 8; x.strokeRect(1860, GY - h, 300, h);
  for (let i = 0; i < 4; i++) rbox(1860 + i * 80, GY - h - 60, 60, 64, 4, '#b85a3e', 6); rbox(1940, GY - h + 140, 140, 70, 10, '#2b2b30', 5); txt('47', 2010, GY - h + 178, 50, C.orange, { stroke: false }); x.restore(); }

const CYB = { hat: 'bald', body: '#8a96a8', body2: '#6e7a8c', pants: '#4a5260', num: false };
const BUILD = { hat: 'cap', hatCol: '#f5c542', hatCol2: '#d9a82a', body: '#e8794a', body2: '#c9622f', pants: '#2a4a7a', num: false };
const COLOS = { hat: 'bald', body: '#2a2d36', body2: '#1b1d24', pants: '#1b1b1f', num: false };
const WIND = { hat: 'hair', hairCol: '#3a3a4a', body: '#5f8ab0', body2: '#4a7090', pants: '#3a4a5a', num: false };
const ARMOR = { hat: 'beanie', hatCol: '#9aa2ae', hatCol2: '#7a828e', body: '#9aa2ae', body2: '#7a828e', pants: '#5a6270', num: false };
const CLIMB = { hat: 'cap', hatCol: '#7a3fa0', hatCol2: '#5f2f80', body: '#7a3fa0', body2: '#5f2f80', pants: '#2a2d36', num: false };
function ghost(px, py, s, t) { x.save(); x.translate(px, py + Math.sin(t * 3) * 20); x.scale(s, s); x.beginPath(); x.moveTo(-120, 120); x.lineTo(-120, -40); x.arc(0, -40, 120, Math.PI, 0); x.lineTo(120, 120);
  for (let i = 0; i < 4; i++) x.quadraticCurveTo(120 - i * 60 - 30, 160 + Math.sin(t * 6 + i) * 15, 120 - (i + 1) * 60, 120); x.closePath(); fs('#f6f6fa', 7); ell(-40, -50, 16, 24, OL, 0); ell(40, -50, 16, 24, OL, 0); ell(0, 10, 20, 26, OL, 0); x.restore(); }
function lion(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); const r = Math.sin(t * 9) * 0.04;
  x.strokeStyle = OL; x.lineWidth = 30; x.lineCap = 'round'; x.beginPath(); x.moveTo(-180, -120); x.quadraticCurveTo(-320, -200, -300, -320); x.stroke(); x.strokeStyle = '#d9a04a'; x.lineWidth = 18; x.stroke(); ell(-300, -330, 30, 30, '#8a4a1a', 5);
  ell(-20, -150, 220, 110, '#e2b05a', 7); [[-150], [-60], [60], [140]].forEach(([lx]) => rbox(lx - 28, -110, 56, 110, 22, '#e2b05a', 6));
  x.save(); x.translate(170, -260); x.rotate(r); for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; ell(Math.cos(a) * 110, Math.sin(a) * 110, 70, 70, i % 2 ? '#b8641e' : '#c97a2a', 5); } ell(0, 0, 120, 115, '#e8bc6a', 7);
  ell(-40, -25, 16, 20, OL, 0); ell(40, -25, 16, 20, OL, 0); ell(0, 25, 50, 34, '#f4d9a0', 5); poly([[-18, 8], [18, 8], [0, 26]], '#5a3020', 3); rbox(-36, 46, 72, 40, 16, '#7a2a2a', 4); x.restore(); x.restore(); }
function kaiju(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); const b = Math.sin(t * 3) * 10;
  x.strokeStyle = OL; x.lineWidth = 120; x.lineCap = 'round'; x.beginPath(); x.moveTo(-150, -150); x.quadraticCurveTo(-500, -60, -620, -300); x.stroke(); x.strokeStyle = '#4a8a4a'; x.lineWidth = 104; x.stroke();
  rbox(-260, -1050 + b, 520, 1050, 220, '#4a8a4a', 9); ell(0, -500 + b, 170, 380, '#9ad08a', 0);
  for (let i = 0; i < 6; i++) poly([[-40, -1000 + i * 150 + b], [-150, -1040 + i * 150 + b], [-60, -930 + i * 150 + b]], '#2f6a8a', 6);
  ell(0, -1180 + b, 230, 200, '#4a8a4a', 9); ell(-80, -1220 + b, 40, 34, '#ffe14a', 5); ell(80, -1220 + b, 40, 34, '#ffe14a', 5); ell(-80, -1220 + b, 12, 26, OL, 0); ell(80, -1220 + b, 12, 26, OL, 0);
  rbox(-140, -1120 + b, 280, 90, 30, '#2a1a1a', 6); for (let i = 0; i < 6; i++) poly([[-120 + i * 48, -1120 + b], [-96 + i * 48, -1120 + b], [-108 + i * 48, -1085 + b]], '#fff', 3);
  [[-1], [1]].forEach(([d]) => { x.save(); x.translate(d * 250, -720 + b); x.rotate(d * (0.6 + Math.sin(t * 4) * 0.2)); rbox(-50, 0, 100, 330, 50, '#4a8a4a', 8); x.restore(); });
  [[-140], [140]].forEach(([lx]) => rbox(lx - 90, -200, 180, 200, 60, '#4a8a4a', 8)); x.restore(); }
function cracks(k) { if (k <= 0) return; x.save(); x.globalAlpha = k; x.strokeStyle = '#2a1410'; x.lineWidth = 9; [[1900, GY - 600, [[40, 60], [10, 130], [60, 200]]], [2080, GY - 420, [[-30, 70], [20, 140], [-20, 230]]]].forEach(([sx, sy, pts]) => { x.beginPath(); x.moveTo(sx, sy); pts.forEach(([dx, dy]) => x.lineTo(sx + dx, sy + dy)); x.stroke(); }); x.restore(); }
function hole(px, k, t) { if (k <= 0) return; ell(px, GY + 30, 260 * k, 70 * k, '#1b1410', 8); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI; poly([[px + Math.cos(a) * 260 * k, GY + 30 - Math.sin(a) * 20], [px + Math.cos(a) * 320 * k, GY - 10 - Math.sin(a) * 50 * k], [px + Math.cos(a + 0.3) * 280 * k, GY + 20]], '#6a5a4a', 5); } }
function waves(px, py, t) { x.save(); x.strokeStyle = '#5fd3ff'; x.lineWidth = 8; for (let i = 0; i < 3; i++) { const r = 40 + ((t * 120 + i * 50) % 150); x.globalAlpha = 1 - r / 190; x.beginPath(); x.arc(px, py, r, -2.4, -0.7); x.stroke(); } x.restore(); }

const DIR = { hat: 'cap', hatCol: '#2a2d36', hatCol2: '#1b1d24', body: '#3f6f5a', body2: '#32584a', pants: '#2a2d36', num: false };
const FIRE = { hat: 'hair', hairCol: '#c0392b', body: '#e8794a', body2: '#c9622f', pants: '#5a2a1a', num: false };
const SMITH = { hat: 'bald', body: '#6a4a32', body2: '#553a26', pants: '#2a2d36', num: false };
const ACRO = { hat: 'bald', body: '#1aa8a0', body2: '#128a84', pants: '#1b1b1f', num: false, skin: '#1aa8a0' };
const BANK = { hat: 'hair', hairCol: '#1b1b1f', body: '#2a2d36', body2: '#1f2129', pants: '#2a2d36', num: false, collar: true };
function fedora(px, py, k) { x.save(); x.translate(px, py); x.scale(k, k); ell(0, 0, 150, 30, '#1b1b1f', 6); rbox(-90, -110, 180, 110, 30, '#1b1b1f', 6); rbox(-90, -40, 180, 26, 4, '#c9a24a', 0); x.restore(); }
function rack(px, t) { rbox(px - 160, GY - 520, 320, 520, 8, '#7a5a3e', 7); for (let i = 0; i < 4; i++) { const sx = px - 110 + i * 70; rbox(sx - 8, GY - 480, 16, 300, 4, '#c9cdd2', 4); rbox(sx - 34, GY - 200, 68, 16, 4, '#8a6a4a', 4); } ell(px + 230, GY - 470, 60, 56, '#9aa2ae', 6); rbox(px + 170, GY - 420, 120, 170, 30, '#9aa2ae', 6); rbox(px + 222, GY - 250, 16, 250, 4, '#6a4a32', 4); }
function bomb(px, py, s) { ell(px, py, 40 * s, 40 * s, '#1b1b1f', 5); rbox(px - 10 * s, py - 52 * s, 20 * s, 18 * s, 4, '#555', 3); ell(px + 8 * s, py - 62 * s, 8 * s, 8 * s, '#ffb21a', 0); }
function flames(x0, w, k, t) { if (k <= 0) return; for (let i = 0; i < 9; i++) { const fx = x0 + i * w / 8, h = (220 + 90 * Math.sin(t * 9 + i * 1.7)) * k; x.fillStyle = i % 2 ? '#ff7a1a' : '#ffb21a'; x.beginPath(); x.moveTo(fx - 50, GY + 20); x.quadraticCurveTo(fx - 40, GY - h * 0.6, fx, GY - h); x.quadraticCurveTo(fx + 40, GY - h * 0.6, fx + 50, GY + 20); x.closePath(); x.fill(); x.fillStyle = '#fff2a0'; x.beginPath(); x.moveTo(fx - 20, GY + 20); x.quadraticCurveTo(fx, GY - h * 0.4, fx + 20, GY + 20); x.fill(); } }
function shield(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(-60, -70); x.lineTo(60, -70); x.lineTo(60, 10); x.quadraticCurveTo(0, 90, -60, 10); x.closePath(); fs('#c9cdd2', 6); txt('47', 0, -10, 46, C.orange, { stroke: false }); x.restore(); }
function plane(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-200, -40, 400, 80, 40, '#e8e8ec', 7); poly([[-40, -30], [40, -30], [-10, -170], [-70, -170]], '#d6332b', 6); poly([[-40, 30], [40, 30], [-10, 170], [-70, 170]], '#b02a23', 6); poly([[-200, -10], [-250, -90], [-170, -30]], '#d6332b', 6); ell(130, -10, 40, 24, '#9fd3ff', 5); x.restore(); }
function balloon(px, py, s) { ell(px, py, 30 * s, 36 * s, '#5fb0e0', 5); poly([[px - 6 * s, py + 34 * s], [px + 6 * s, py + 34 * s], [px, py + 46 * s]], '#3a8ac0', 3); }
function siren(px, py, t, on) { rbox(px - 40, py - 20, 80, 40, 8, '#555', 5); ell(px, py - 40, 44, 40, on && Math.sin(t * 16) > 0 ? '#ff3a3a' : '#8a2020', 6); if (on && Math.sin(t * 16) > 0) { x.save(); x.globalAlpha = 0.35; ell(px, py - 40, 160, 120, '#ff3a3a', 0); x.restore(); } }
function bubbleFit(px, py, user, msg, p) { if (p <= 0) return; font(38); const w = Math.max(x.measureText(msg).width, 300) + 150; const s = Math.min(1.7, 1000 / w); x.save(); x.translate(px, py); const k = eBack(clamp(p)) * s; x.scale(k, k);
  rbox(-w / 2, -70, w, 140, 30, '#ffffff', 5); ell(-w / 2 + 60, 0, 36, 36, '#c9ced6', 3); txt(user[0].toUpperCase(), -w / 2 + 60, 4, 34, OL, { stroke: false });
  x.textAlign = 'left'; font(30); x.fillStyle = '#8a8f99'; x.fillText('@' + user, -w / 2 + 112, -18); font(38); x.fillStyle = OL; x.fillText(msg, -w / 2 + 112, 28); x.textAlign = 'center'; x.restore(); }
function projector(px, py, on, t) { x.save(); x.translate(px, py); rbox(-14, -10, 28, 60, 6, '#3a3d44', 5); x.rotate(0.35); rbox(-60, -60, 120, 80, 14, '#2a2d36', 6); ell(60, -20, 26, 36, on ? '#fff7c8' : '#55585f', 5); x.restore(); }
function beams(on, t) { if (on <= 0) return; x.save(); x.globalCompositeOperation = 'lighter'; [[60, 1150], [560, 1150]].forEach(([px, py], i) => { const g = x.createLinearGradient(px, py, px + 2200, GY); g.addColorStop(0, `rgba(255,240,180,${0.42 * on})`); g.addColorStop(1, `rgba(255,240,180,${0.06 * on})`); x.fillStyle = g;
  const sw = Math.sin(t * 0.8 + i) * 60; x.beginPath(); x.moveTo(px + 50, py - 20); x.lineTo(px + 2400, GY - 900 + sw); x.lineTo(px + 2400, GY + 250 + sw); x.lineTo(px + 50, py + 30); x.closePath(); x.fill(); }); x.restore(); }
function robot(px, py, s, t, rise) { x.save(); x.translate(px, py + (1 - rise) * 1400 * s); x.scale(s, s); const b = Math.sin(t * 2) * 8;
  [[-110], [110]].forEach(([lx]) => { rbox(lx - 60, -520, 120, 520, 20, '#7a8696', 8); rbox(lx - 80, -60, 160, 60, 14, '#5a6474', 7); });
  rbox(-260, -1200 + b, 520, 700, 50, '#9aa6b6', 9); rbox(-180, -1080 + b, 360, 220, 30, '#5a6474', 6); for (let i = 0; i < 3; i++) ell(-90 + i * 90, -970 + b, 30, 30, Math.sin(t * 6 + i) > 0 ? '#7cff8a' : '#2a8a3a', 4);
  [[-1], [1]].forEach(([d]) => { x.save(); x.translate(d * 300, -1120 + b); x.rotate(d * (0.25 + 0.08 * Math.sin(t * 3))); rbox(-55, 0, 110, 520, 40, '#8a96a6', 8); ell(0, 540, 80, 70, '#5a6474', 7); x.restore(); });
  rbox(-170, -1500 + b, 340, 300, 50, '#aab6c6', 9); rbox(-130, -1420 + b, 260, 110, 40, '#1b1d24', 6); ell(-60, -1365 + b, 34, 26, '#ff4a3a', 0); ell(60, -1365 + b, 34, 26, '#ff4a3a', 0); x.strokeStyle = OL; x.lineWidth = 12; x.beginPath(); x.moveTo(0, -1500 + b); x.lineTo(0, -1600 + b); x.stroke(); ell(0, -1620 + b, 26, 26, '#ffd23f', 6);
  x.restore(); }
function bus(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-520, -520, 1040, 440, 50, '#f2b62f', 9); rbox(-520, -200, 1040, 60, 0, '#c9952a', 0); for (let i = 0; i < 5; i++) rbox(-480 + i * 190, -460, 160, 170, 16, '#bfe4ff', 6);
  ell(-330, -70, 80, 80, '#2a2d36', 8); ell(330, -70, 80, 80, '#2a2d36', 8); ell(-330, -70, 34, 34, '#8a8f99', 0); ell(330, -70, 34, 34, '#8a8f99', 0); rbox(400, -300, 120, 60, 10, '#fff7c8', 5); txt('FOU DU BUS', -40, -250, 60, OL, { stroke: false }); x.restore(); }
function tray(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); ell(0, 0, 130, 26, '#c9ced6', 6); for (let i = -1; i <= 1; i++) { rbox(i * 70 - 40, -50, 80, 44, 14, '#e0a050', 5); rbox(i * 70 - 40, -30, 80, 10, 0, '#7cc85a', 0); } x.restore(); }
function hearts(px, py, t) { for (let i = 0; i < 3; i++) { const ph = (t * 0.9 + i / 3) % 1; x.save(); x.globalAlpha = 1 - ph; txt('❤️', px + (i - 1) * 50, py - ph * 160, 60, '#fff', { stroke: false }); x.restore(); } }
function sparkle(px, py, t) { for (let i = 0; i < 4; i++) { const a = t * 3 + i * 1.6, r = 140; x.save(); x.globalAlpha = 0.5 + 0.5 * Math.sin(t * 8 + i); txt('✨', px + Math.cos(a) * r, py + Math.sin(a) * r * 0.6, 54, '#fff', { stroke: false }); x.restore(); } }
const WAIT = { hat: 'hair', hairCol: '#2a1a12', body: '#1b1b1f', body2: '#111', pants: '#1b1b1f', num: false, collar: true };
const NURSE = { hat: 'hair', hairCol: '#c96a3a', body: '#f4f4f6', body2: '#d9dce4', pants: '#3a8a8a', num: false };
const BG = { hat: 'hair', hairCol: '#e8c07a', body: '#e03a8a', body2: '#b02a6a', pants: '#1b1b1f', num: false, glasses: true };
const COP = { hat: 'cap', hatCol: '#1f3a8a', hatCol2: '#172e6e', body: '#1f3a8a', body2: '#172e6e', pants: '#1b1b1f', num: false };
function draw(t) {
  const id = curId(t), s0 = S(id), w = (b, r) => WF(b, r);
  const tNoir = w('ff', /noir/i), tLk = w('ff', /likes/i), tPro = w('s1', /projecteurs/i), tClac = w('s1', /CLAC/), tLum = w('s2', /lumière/i), tMil = w('s2', /mille/i), tCar = w('s3', /carte/i), tMas = w('s3', /Masterclass/i),
    tBus = w('s4', /bus/i), tZet = w('s4', /ZETA/i), tRob = w('s5', /robot/i), tRec = w('s5', /reculent/i), tInf = w('s6', /infirmier/i), tSer = w('s6', /serveur/i), tSan = w('s6', /sandwichs/i), tMec = w('s7', /mèche/i), tAmo = w('s7', /amoureux/i),
    tVin = w('s8', /vingt/i), tTal = w('s8', /talkies/i), tMan = w('s8', /manque/i), tRole2 = w('cta', /rôle/i), tLik2 = w('cta', /liké/i), tToit = w('end', /toit/i), tPol = w('end', /police/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99; window.PORT47 = true;
  let K;
  if (id === 'ff') K = [[0, 0, 2500, 1550, 0.85], [0.05, 3, 2300, 1500, 0.75], [tLk - 0.3, 0.6, 600, 1450, 0.8]];
  else if (id === 's1') K = [[s0, 0, 400, 1350, 0.9], [tClac - 0.2, 0.6, 900, 1350, 0.7]];
  else if (id === 's2') K = [[s0, 0, 1500, 1350, 0.6], [tMil - 0.3, 1.0, 2500, 1500, 0.75]];
  else if (id === 's3') K = [[s0, 0, 900, 1450, 1.0], [s0 + 0.1, 4, 900, 1450, 1.1]];
  else if (id === 's4') K = [[s0, 0, 700, 1450, 0.7], [s0 + 0.1, 4, 800, 1450, 0.72]];
  else if (id === 's5') K = [[s0, 0, 700, 1150, 0.5], [s0 + 0.1, 4, 700, 1150, 0.52]];
  else if (id === 's6') K = t < tSer - 0.2 ? [[s0, 0, 1250, 1450, 1.1], [s0 + 0.1, 3, 1250, 1450, 1.2]] : [[tSer - 0.2, 0, 1600, 1450, 1.1], [tSer, 3, 1650, 1450, 1.2]];
  else if (id === 's7') K = [[s0, 0, 2000, 1450, 0.9], [tAmo - 0.3, 0.6, 2200, 1450, 1.1]];
  else if (id === 'end') K = [[s0, 0, 1200, 1300, 0.7], [tToit - 0.3, 1.2, 1100, 820, 1.4]];
  else K = [[s0, 0, 1100, 1400, 0.55], [s0 + 0.2, 6, 1100, 1400, 0.6]];
  const shk = (id === 's1' && t >= tClac && t < tClac + 0.4) || (id === 's5' && t >= tRob && t < tRob + 0.6) || (id === 'end' && t >= tPol && t < tPol + 0.3) ? 14 : 0;
  camPath(t, K, shk);
  x.fillStyle = '#9fd3ff'; x.fillRect(-3200, -1500, 2100, 3200); x.fillStyle = '#5a5d66'; x.fillRect(-3200, 1700, 2100, 2000);
  city(t); flag47(1700, 980, 1); bigWall(1, t);
  const on = id === 'ff' ? 0 : id === 's1' ? (t >= tClac ? 1 : 0) : 1; projector(60, 1150, on, t); projector(560, 1150, on, t);
  // the cop filming from the BANQUE roof (only end)
  if (id === 'end') { const k = clamp((t - tToit + 0.4) / 0.6); x.save(); x.globalAlpha = k; cast('inspector', 1090, 900, 0.6, t, { ...COP, mood: 'smug', look: 1, blink: true, armUp: true }); rbox(1150, 450, 70, 110, 10, '#1b1b1f', 4); if (Math.sin(t * 6) > 0) ell(1200, 470, 10, 10, '#ff3a3a', 0); x.restore(); }
  // the band
  cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, blink: true, armsUp: id === 's1' && t >= tClac }); cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1, blink: true, armsUp: id === 's1' && t >= tClac });
  p47(460, GY, 0.78, t, { mood: id === 's2' && t >= tMil ? 'shock' : 'smug', look: 1, blink: true, armsUp: id === 's1' && t >= tClac });
  const order = ['ff', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 'cta', 'end'], at = (b) => order.indexOf(id) >= order.indexOf(b);
  if (at('s3')) { x.save(); x.translate(820, GY); cast('inspector', 0, 0, 0.78, t, { ...NAPO, mood: 'smug', look: 1, blink: true, armUp: id === 's3' }); bicorne(0, -640, 0.62); x.restore(); if (id === 's3' && t >= tCar - 0.2) { const k = eBack(clamp(P(t, tCar - 0.2))); x.save(); x.translate(820, GY - 760); x.scale(k, k); rbox(-200, -140, 400, 280, 10, '#f4ecd8', 6); x.strokeStyle = C.red; x.lineWidth = 10; x.setLineDash([22, 14]); x.beginPath(); x.moveTo(-150, 80); x.quadraticCurveTo(0, -120, 150, 60); x.stroke(); x.setLineDash([]); txt('X', 150, 50, 60, C.red, { stroke: false }); x.restore(); } }
  if (at('s6')) { cast('inspector', 1180, GY, 0.75, t, { ...NURSE, mood: 'smile', look: 1, blink: true, armUp: id === 's6' && t < tSer }); rbox(1150, GY - 420, 60, 60, 8, '#fff', 3); x.fillStyle = C.red; x.fillRect(1172, GY - 412, 16, 44); x.fillRect(1158, GY - 398, 44, 16);
    if (id === 's6' && t < tSer) { cast('guard', 1330, GY + 40, 0.6, t, { mood: 'smile', look: -1, blink: true }); rbox(1290, GY - 500, 90, 30, 10, '#fff', 3); } }
  if (at('s6') && (id !== 's6' || t >= tSer - 0.3)) { const wx = id === 's6' ? lerp(1300, 1650, clamp((t - tSer + 0.3) / 2)) : 1650; cast('inspector', wx, GY, 0.75, t, { ...WAIT, mood: 'smile', look: 1, blink: true, walk: id === 's6' ? t * 2 : 0 }); tray(wx + 110, GY - 470, 0.8); }
  // the Baron's 1000 soldiers beyond the wall
  for (let r = 0; r < 3; r++) for (let i = 0; i < 11; i++) { const gx = 2250 + i * 130 + r * 60, back = id === 's5' && t >= tRec ? 400 * clamp((t - tRec) / 1.4) : id === 's6' ? 400 : 0; cast('guard', gx + back, GY - 120 + r * 60, 0.5, t, { mood: id === 's5' && t >= tRob ? 'shock' : id === 's7' && i < 3 && r === 2 && t >= tAmo ? 'smile' : 'angry', look: -1, blink: true }); if (id === 's7' && i < 3 && r === 2 && t >= tAmo) hearts(gx + back, GY - 120 + r * 60 - 380, t); }
  cast('boss', 2900, GY + 40, 0.95, t, { mood: id === 's5' && t >= tRob ? 'shock' : 'angry', look: -1, blink: true });
  if (at('s7')) { const bx = 1990; cast('inspector', bx, GY + 30, 0.8, t, { ...BG, mood: 'smug', look: 1, blink: true, armUp: id === 's7' && t >= tMec - 0.2 && t < tMec + 0.8 }); if (id === 's7') sparkle(bx, GY - 560, t); }
  // the robot rises behind the garage
  if (at('s5')) robot(300, 1700, 1.0, t, id === 's5' ? eOut(clamp((t - tRob + 0.8) / 1.2)) : 1);
  // the bus
  if (id === 's4' && t >= tBus - 0.3) { const bx = lerp(-700, 1900, clamp((t - tBus + 0.3) / 3.2)); speedLines(t, 0.5); bus(bx, GY + 40, 0.75, t); x.save(); x.translate(bx + 260, GY - 290); cast('inspector', 0, 0, 0.35, t, { ...RIDER, mood: 'smug', look: 1, blink: true }); x.restore(); }
  if (at('s8') || (id === 's4' && false)) bus(-650, GY + 40, 0.75, t);
  // night grade + projector beams
  resetCam(); x.fillStyle = `rgba(8,12,36,${on ? 0.38 : 0.7})`; x.fillRect(0, 0, W, H); camPath(t, K, shk); beams(on, t); resetCam(); vignette(0.4);
  // ---------- overlays ----------
  if (id === 'ff') { hookCard(t, [['LE BARON ATTAQUE…', 66], ['DANS LE NOIR 😨', 70, C.red]], 2.4); if (t >= tLk - 0.2) card('❤️ HIER : 78 LIKES', '= 78 € DANS LA CAISSE', '#2a8a3a', P(t, tLk - 0.2, 0.2)); if (t >= 2.4) pill('➕ 27 NOUVEAUX SOLDATS · 219 💪', 540, 640, P(t, 2.4), '#2a8a3a'); }
  if (id !== 'ff') flashCut(t, s0);
  if (id === 's1') { if (t < tPro - 0.1) card('🔦 PROJECTEURS : 60 €', 'IL MANQUAIT 54 €', C.red, P(t, s0, 0.2)); else { card('6 + 78 = 84 € ✅', 'PROJECTEURS ACHETÉS', '#2a8a3a', P(t, tPro - 0.1, 0.2)); if (t >= tClac) { onoma('CLAC !', 540, 760, P(t, tClac, 0.2), 140); confetti(t, tClac); } } }
  if (id === 's2' && t >= tMil - 0.1) card('😨 1000 SOLDATS DU BARON', 'DEVANT LE GARAGE', C.red, P(t, tMil - 0.1, 0.2));
  if (id === 's3') bubbleFit(540, 330, 'ZFM_KIZØKS16', 'une masterclass stratégique de mon Napoléon', P(t, s0, 0.25));
  if (id === 's4') { bubbleFit(540, 330, 'ZETA/JUNIOR', 'je veux etre dedans (le fous du bus)', P(t, s0, 0.25)); if (t >= tZet) tag(540, 620, 'ZETA · LE FOU DU BUS 🚌', t); }
  if (id === 's5') { bubbleFit(540, 330, 'G.31K', 'un géant robot', P(t, s0, 0.25)); if (t >= tRec - 0.1) pill('LES SOLDATS RECULENT 😱', 540, 560, P(t, tRec - 0.1), C.red); }
  if (id === 's6') { if (t < tSer - 0.2) bubbleFit(540, 330, 'goku', "je peux être l'infirmier stp", P(t, s0, 0.25)); else bubbleFit(540, 330, 'th_3o', 'je veux etre serveur', P(t, tSer - 0.2, 0.25)); if (t >= tSan - 0.1) pill('🥪 EN PLEINE BATAILLE', 540, 560, P(t, tSan - 0.1), '#e0a050'); }
  if (id === 's7') { bubbleFit(540, 330, 'JoproYTB', 'je peux être le bg', P(t, s0, 0.25)); if (t >= tAmo - 0.1) pill('😍 3 SOLDATS TOMBENT AMOUREUX', 540, 560, P(t, tAmo - 0.1), '#e03a8a'); }
  if (id === 's8') { x.save(); x.translate(540, 400); const k = eBack(clamp(P(t, s0, 0.25))); x.scale(k, k); rrc(0, 0, 960, 420, 44, 'rgba(20,20,28,.94)', 9); txt('💰 CAISSE : 24 €', 0, -120, 66, '#f5c542', { stroke: false });
      if (t >= tTal - 0.1) txt('📻 TALKIES-WALKIES : 70 €', 0, 0, 54, '#fff', { stroke: false }); if (t >= tMan - 0.1) txt('IL MANQUE 46 € !', 0, 130, 76, '#ff6a5a', { stroke: false }); x.restore(); }
  if (id === 'cta') { if (t < tRole2 - 0.1) card('❤️ 46 LIKES', '= LES TALKIES-WALKIES 📻', C.red, P(t, s0, 0.2)); else { card('QUEL RÔLE TU PRENDS ? 💬', 'POUR LA BATAILLE', '#2457a8', P(t, tRole2 - 0.1, 0.2)); if (t >= tLik2 - 0.2) pill('👑 LE + LIKÉ ENTRE DANS LA BANDE', 540, 560, P(t, tLik2 - 0.2), C.red); } }
  if (id === 'end') { pill('NOUS 219 · LUI 1000 · ENCORE 781 💪', 540, 300, 1, '#2a8a3a'); if (t >= tPol - 0.2) card('QUI FILME ? 👮', 'DEMAIN 18H 🌆', C.red, P(t, tPol - 0.2, 0.2), 1420); }
}
