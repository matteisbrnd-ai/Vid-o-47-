// La bande de 47 — Saison 1 · Jour 8 (J-1): 123 → 146, 68 likes = 68 € manquants → MUR CONSTRUIT, 5 rôles exaucés, le Baron attaque demain.
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
function counter(t, tUp) { resetCam(); const n = t >= tUp - 0.2 ? 123 + Math.round(23 * clamp((t - tUp + 0.2) / 0.45)) : 123; x.save(); x.translate(540, 420); const k = 1 + (t >= tUp && t < tUp + 0.9 ? 0.08 * Math.sin((t - tUp) * 20) : 0); x.scale(k, k);
  rrc(0, 0, 900, 380, 44, 'rgba(20,20,28,.94)', 9); txt(t >= tUp - 0.2 ? 'AUJOURD\'HUI' : 'HIER', 0, -110, 64, t >= tUp ? '#7cff8a' : '#f5c542', { stroke: false }); txt(String(n), 0, 40, 210, t >= tUp ? '#7cff8a' : '#fff', { stroke: false }); txt('SOLDATS DANS LA BANDE', 0, 145, 48, '#fff', { stroke: false }); x.restore();
  if (t >= tUp + 0.7) pill('➕ 23 NOUVEAUX ABONNÉS 💪', 540, 690, P(t, tUp + 0.7), '#2a8a3a'); }
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
function draw(t) {
  const id = curId(t), tUp = WF('ff', /Aujourd/i) + 0.2, tLike = WF('s0', /like/i), tRole = WF('s0', /rôle/i), tLk1 = WF('s1', /likes/i), tPile = WF('s1', /PILE/i), tCons = WF('s1', /construit/i),
    tChat = WF('s3', /chat/i), tCoif = WF('s4', /Chamallow/i), tRage = WF('s6', /rage/i), tDem = WF('s6', /Demain/i), tRole2 = WF('cta', /rôle/i), tLik2 = WF('cta', /liké/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = 99; window.PORT47 = true;
  let K;
  if (id === 'ff') K = [[0, 0, 460, 1500, 1.0], [0.05, 3, 460, 1500, 1.1]];
  else if (id === 's0') K = [[S('s0'), 0, 500, 1450, 0.95], [S('s0') + 0.2, 5, 560, 1450, 1.05]];
  else if (id === 's1') K = [[S('s1'), 0, 1900, 1450, 0.95], [tCons, 1.0, 2000, 1350, 0.85]];
  else if (id === 's2') K = [[S('s2'), 0, 380, 1150, 1.1], [S('s2') + 0.2, 3, 380, 1100, 1.2]];
  else if (id === 's3') K = [[S('s3'), 0, -1020, 1450, 1.0], [S('s3') + 0.2, 3, -1040, 1450, 1.08]];
  else if (id === 's4') K = [[S('s4'), 0, -1450, 1450, 1.15], [tCoif - 0.1, 0.6, -1650, 1450, 1.15]];
  else if (id === 's5') K = [[S('s5'), 0, -1860, 1450, 1.2], [S('s5') + 0.2, 3, -1860, 1430, 1.3]];
  else if (id === 's6' || id === 'end') K = [[S(id), 0, 2300, 1350, 1.4], [S(id) + 0.2, 3, 2340, 1330, 1.6]];
  else K = [[S(id), 0, 450, 1450, 0.8], [S(id) + 0.2, 6, 300, 1450, 0.9]];
  camPath(t, K, (id === 's1' && t >= tCons && t < tCons + 0.5) ? 16 : (id === 's6' && t >= tRage && t < tRage + 0.4) ? 14 : 0);
  x.fillStyle = '#9fd3ff'; x.fillRect(-3200, -1500, 2100, 3200); x.fillStyle = '#5a5d66'; x.fillRect(-3200, 1700, 2100, 2000);
  city(t); flag47(1700, 980, 1);
  const cheer = (id === 'ff' && t >= tUp) || (id === 's1' && t >= tCons);
  cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, blink: true, armsUp: cheer }); cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1, blink: true, armsUp: cheer });
  p47(460, GY, 0.78, t, { mood: 'smug', look: 1, blink: true, armsUp: cheer }); cast('inspector', 660, GY, 0.75, t, { ...RYZEN, mood: 'smile', look: 1, blink: true, armsUp: cheer }); cast('inspector', 860, GY, 0.75, t, { ...ANGE, mood: 'smug', look: 1, blink: true, armsUp: cheer });
  cast('inspector', 1060, GY, 0.8, t, { ...GREG, mood: 'smug', look: -1, blink: true, armsUp: cheer }); cast('inspector', 1280, GY, 0.75, t, { ...FIGHTER, mood: 'smile', look: 1, blink: true, armsUp: cheer });
  dragon(520, 620, 0.95, t);
  // roof: Pri + L'ours (s2+)
  x.save(); x.translate(470, 1170); cast('woman', 0, 0, 0.6, t, { ...PRI, mood: 'smug', look: 1, blink: true }); x.restore(); x.save(); x.translate(550, 940); x.scale(0.8, 0.8); bow(0, 0); x.restore();
  const kO = id === 's2' ? eBack(clamp(P(t, S('s2') + 0.2))) : (['ff', 's0', 's1'].includes(id) ? 0 : 1);
  if (kO > 0) { x.save(); x.translate(250, 1170); x.scale(kO, kO); cast('inspector', 0, 0, 0.6, t, { ...OURS, mood: 'smug', look: 1, blink: true }); x.save(); x.translate(80, -230); x.scale(0.8, 0.8); bow(0, 0); x.restore(); x.restore(); if (id === 's2' && t >= S('s2') + 1.2) tag(250, 600, "L'OURS · TIREUR D'ÉLITE 🏹", t); }
  // left: DJ, Big, then the new recruits
  x.save(); x.translate(-560, GY - 40); djBooth(0, 0, t); cast('inspector', 0, -250, 0.6, t, { ...DJ, mood: 'smile', look: 1, armsUp: Math.sin(t * 5) > 0 }); x.restore();
  bigDog(-150, GY, 1.05, t);
  const after = (b) => ['s3', 's4', 's5', 's6', 'cta', 'end'].indexOf(id) >= ['s3', 's4', 's5', 's6', 'cta', 'end'].indexOf(b) && ['s3', 's4', 's5', 's6', 'cta', 'end'].includes(id);
  const pop = (b, t0) => id === b ? eBack(clamp(P(t, t0))) : (after(b) ? 1 : 0);
  const kK = pop('s3', S('s3') + 0.1), kC = pop('s3', tChat - 0.1), kN = pop('s4', S('s4') + 0.1), kH = pop('s4', tCoif - 0.1), kV = pop('s5', S('s5') + 0.1);
  if (kC > 0) { x.save(); x.translate(-1200, GY); x.scale(kC, kC); bigCat(0, 0, 0.95, t); x.restore(); }
  if (kK > 0) { x.save(); x.translate(-900, GY); x.scale(kK, kK); cast('inspector', 0, 0, 0.75, t, { ...KING, mood: 'smug', look: -1, blink: true }); crown(0, -585, 0.8); x.restore(); if (id === 's3' && t >= S('s3') + 0.9) tag(-950, GY - 880, 'SPIDERMANETTE · ROI 👑', t); }
  if (kN > 0) { x.save(); x.translate(-1480, GY); x.scale(kN, kN); cast('inspector', 0, 0, 0.75, t, { ...NAPO, mood: 'smug', look: 1, blink: true }); bicorne(0, -555, 0.8); x.restore(); if (id === 's4' && t < tCoif - 0.1 && t >= S('s4') + 0.6) tag(-1480, GY - 840, 'KIZOKS · NAPOLÉON 🇫🇷', t); }
  if (kH > 0) { x.save(); x.translate(-1690, GY); x.scale(kH, kH); barberPole(-130, 0, t); cast('inspector', 0, 0, 0.75, t, { ...COIF, mood: 'smile', look: 1, blink: true }); x.restore(); if (id === 's4' && t >= tCoif + 0.4) tag(-1690, GY - 800, 'CHAMALLOW · COIFFEUR ✂️', t); }
  if (kV > 0) { x.save(); x.translate(-1900, GY); x.scale(kV, kV); cast('inspector', 0, 0, 0.75, t, { ...VRK, mood: 'smile', look: 1, blink: true, armsUp: id === 's5' }); x.restore(); if (id === 's5' && t >= S('s5') + 0.6) tag(-1900, GY - 800, 'Vrk83k5 ✅', t); }
  [ARCHER, MEDIC, ELITE, ARCH2, BRAIN, SUB].forEach((look, i) => cast('inspector', -2120 - i * 200, GY, 0.75, t, { ...look, mood: 'smug', look: 1, blink: true }));
  cast('inspector', 1090, 900, 0.6, t, { ...NINJA, mood: 'smug', look: -1, blink: true }); cast('inspector', 1490, GY, 0.75, t, { ...HUNTER, mood: 'smug', look: -1, blink: true });
  cast('inspector', 1700, GY, 0.75, t, { ...SPY, mood: 'smug', look: 1, blink: true, armsUp: cheer });
  // the wall
  const kW = id === 's1' ? eOut(clamp(seg(t, tCons - 0.2, tCons + 0.7))) : (['ff', 's0'].includes(id) ? 0 : 1); bigWall(kW, t);
  if (id === 's1' && t >= tCons - 0.2 && t < tCons + 1.2) { const a = 1 - clamp((t - tCons - 0.2) / 1.0); [1880, 1980, 2080, 2160].forEach((px, i) => puff(px, GY - 20 - i % 2 * 40, 90, a)); }
  cast('guard', 2650, GY, 0.75, t, { mood: id === 's6' ? 'angry' : 'neutral', look: -1, blink: true });
  const rage = id === 'end' || (id === 's6' && t >= tRage - 0.2); cast('boss', 2380, GY + 40, 0.9, t, { mood: rage ? 'angry' : (id === 's6' ? 'shock' : 'smug'), look: -1, blink: true });
  if (rage) { resetCam(); x.fillStyle = `rgba(200,30,30,${0.12 + 0.1 * Math.sin(t * 8)})`; x.fillRect(0, 0, W, H); }
  resetCam();
  if (id === 'ff') { counter(t, tUp); confetti(t, tUp + 0.2); }
  if (id === 's0') { flashCut(t, S('s0')); if (t < tLike - 0.1) card('➕ 1 ABONNÉ', '= 1 SOLDAT DE PLUS', '#2a8a3a', P(t, S('s0'), 0.2)); else if (t < tRole - 0.1) card('❤️ 1 LIKE', '= 1 € DANS LA CAISSE', C.red, P(t, tLike - 0.1, 0.2)); else card('💬 TON RÔLE EN COMMENTAIRE', '= TU REJOINS LA BANDE', '#2457a8', P(t, tRole - 0.1, 0.2)); }
  if (id === 's1') { flashCut(t, S('s1')); if (t < tLk1 - 0.1) card('🧱 MUR : 400 €', 'IL MANQUAIT 68 €', C.red, P(t, S('s1'), 0.2)); else if (t < tCons - 0.1) { card('❤️ VOUS : 68 LIKES', '332 + 68 = 400 €', '#2a8a3a', P(t, tLk1 - 0.1, 0.2)); if (t >= tPile) stamp('PILE !', P(t, tPile, 0.25), 620, '#2a8a3a'); }
    else { card('🧱 MUR CONSTRUIT ✅', 'GRÂCE À VOS LIKES', '#2a8a3a', P(t, tCons - 0.1, 0.2)); confetti(t, tCons); } }
  if (id === 's2') { flashCut(t, S('s2')); if (t < S('s2') + 1.2) bubble(540, 1500, "L'ours", "je peut etre tireur d'elite… stpp", P(t, S('s2'), 0.25)); else pill('👑 LE + LIKÉ : 4 ❤️', 540, 1500, P(t, S('s2') + 1.2), C.red); }
  if (id === 's3') { flashCut(t, S('s3')); bubble(540, 330, 'Spidermanette', 'Je peut être un roi avec un gros chat énorme', P(t, S('s3'), 0.25)); }
  if (id === 's4') { flashCut(t, S('s4')); if (t < tCoif - 0.1) bubble(540, 330, 'ZFM_KIZOKS16', 'Je peux être Napoléon mdrrr', P(t, S('s4'), 0.25)); else bubble(540, 330, 'Chamallow', 'Jeux peux être un coiffeur stppp 🙏', P(t, tCoif - 0.1, 0.25)); }
  if (id === 's5') { flashCut(t, S('s5')); bubble(540, 330, 'Vrk83k5', 'Salut tu ne dit pas mon nom', P(t, S('s5'), 0.25)); }
  if (id === 's6') { flashCut(t, S('s6')); if (t < tDem - 0.1) card('LE BARON A VU LE MUR', 'IL EST FOU DE RAGE 😡', C.red, P(t, S('s6'), 0.2)); else { x.save(); x.translate(540, 300); const k = eBack(clamp(P(t, tDem - 0.1))); x.scale(k, k); rrc(0, 0, 560, 240, 40, '#1b1b1f', 10); txt('J-1', 0, 16, 180, C.red, { stroke: false }); x.restore(); pill('IL ATTAQUE DEMAIN 😈', 540, 500, P(t, tDem), C.red); } }
  if (id === 'cta') { flashCut(t, S('cta')); if (t < tRole2 - 0.1) card('➕ 1 ABONNÉ CE SOIR', '= 1 SOLDAT POUR LA BATAILLE', '#2a8a3a', P(t, S('cta'), 0.2));
    else { card('QUEL RÔLE TU PRENDS ? 💬', 'POUR LA BATAILLE', '#2457a8', P(t, tRole2 - 0.1, 0.2)); if (t >= tLik2 - 0.2) pill('👑 LE + LIKÉ SE BAT DEMAIN', 540, 560, P(t, tLik2 - 0.2), C.red); } }
  if (id === 'end') { flashCut(t, S('end')); x.save(); x.translate(540, 300); rrc(0, 0, 560, 240, 40, '#1b1b1f', 10); txt('J-1', 0, 16, 180, C.red, { stroke: false }); x.restore(); pill('NOUS 146 · LUI 1000 · ENCORE 855 💪', 540, 520, 1, '#2a8a3a'); card('DEMAIN : LA BATAILLE 😈', 'QUEL RÔLE TU PRENDS ? 👇', C.red, 1, 1420); }
}
