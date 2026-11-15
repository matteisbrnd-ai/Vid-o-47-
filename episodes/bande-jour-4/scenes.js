// La bande de 47 — Saison 1 · Jour 4 (base from Jour 3) (built from Jour 1): one city set (gang garage left, Baron's district right), game-like HUD, A/B/C vote polaroids.
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
function cage(px, py, s, t) { x.save(); x.translate(px, py); x.scale(s, s); x.strokeStyle = '#3a3d44'; x.lineWidth = 14; for (let k = -3; k <= 3; k++) { x.beginPath(); x.moveTo(k * 70, -720); x.lineTo(k * 70, 0); x.stroke(); }
  rbox(-250, -760, 500, 60, 20, '#3a3d44', 6); rbox(-250, -20, 500, 40, 10, '#3a3d44', 6); x.restore(); }
function speedLines(t, a) { if (a <= 0) return; x.save(); x.globalAlpha = a; x.strokeStyle = '#ffffff'; x.lineWidth = 8; for (let i = 0; i < 9; i++) { const lx = 120 + i * 110, ly = 300 + (i * 97 + t * 3000) % 500; x.beginPath(); x.moveTo(lx, ly); x.lineTo(lx, ly + 160); x.stroke(); } x.restore(); }

const MEDIC = { hat: 'hair', hairCol: '#6a4a2a', body: '#f4f4f6', body2: '#d9dce4', pants: '#3a5a8a', num: false };
const ELITE = { hat: 'beanie', hatCol: '#1b1b1f', hatCol2: '#111', body: '#2a2d36', body2: '#1b1d24', pants: '#1b1b1f', num: false };
const BRAIN = { hat: 'hair', hairCol: '#3a2a1a', body: '#6a3fa0', body2: '#55308a', pants: '#2a2d36', num: false, glasses: true };
const ARCH2 = { ...ARCHER, hatCol: '#3a8a5a', body: '#4a7b3a' }, ARCH3 = { ...ARCHER, hatCol: '#5a8a2a', body: '#3c5b2a' };
function crossBadge(w, h) { rrc(w * 0.78, h * 0.2, 70, 70, 12, '#fff', 4); x.fillStyle = C.red; x.fillRect(w * 0.78 - 10, h * 0.2 - 28, 20, 56); x.fillRect(w * 0.78 - 28, h * 0.2 - 10, 56, 20); }
function bow(w, h) { x.strokeStyle = '#7a5232'; x.lineWidth = 8; x.beginPath(); x.arc(w * 0.82, h * 0.5, 70, -1.2, 1.2); x.stroke(); x.strokeStyle = OL; x.lineWidth = 3; x.beginPath(); x.moveTo(w * 0.82 + 70 * Math.cos(-1.2), h * 0.5 + 70 * Math.sin(-1.2)); x.lineTo(w * 0.82 + 70 * Math.cos(1.2), h * 0.5 + 70 * Math.sin(1.2)); x.stroke(); }
function bulb(w, h) { ell(w * 0.8, h * 0.18, 34, 40, '#ffe14a', 5); rbox(w * 0.8 - 16, h * 0.18 + 34, 32, 22, 4, '#8a8f99', 3); }
function comment2(user, l1, l2, p, y = 560) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, y); const k = eBack(clamp(p)); x.scale(k, k); rbox(-520, -140, 1040, 280, 34, '#ffffff', 0); x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 3; x.strokeRect(-520, -140, 1040, 280);
  ell(-430, -60, 50, 50, '#e8794a', 0); txt(user[0].toUpperCase(), -430, -54, 48, '#fff', { stroke: false }); x.textAlign = 'left'; font(36); x.fillStyle = '#8a8f99'; x.fillText(user, -360, -62); font(58); x.fillStyle = '#161823'; x.fillText(l1, -470, 30); x.fillText(l2, -470, 105); x.textAlign = 'center'; x.restore(); }
function card(l1, l2, c2, p, y = 300) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, y); const k = eBack(clamp(p)); x.scale(k, k); rrc(0, 0, 1000, 230, 34, 'rgba(255,255,255,.97)', 9); txt(l1, 0, -45, 82, OL, { stroke: false }); txt(l2, 0, 58, 82, c2, { stroke: false }); x.restore(); }
function flag47(px, py, k) { if (k <= 0) return; x.save(); x.translate(px, py); x.fillStyle = OL; x.fillRect(-5, -240 * k, 10, 240 * k); poly([[5, -240 * k], [130, -210 * k], [5, -180 * k]], C.orange, 5); txt('47', 55, -207 * k, 34, '#fff', { stroke: false }); x.restore(); }
function draw(t) {
  const id = curId(t), A = WF('ff', /capturé/i), tPort = WF('ff', /repris/i), tVic = WF('s1', /victoire/i), tMed = WF('s2', /médecin/i),
    tRed = WF('s3', /ReDaRk|Rédark/i), tArc = WF('s3', /archers/i), tVrk = WF('s3', /cerveau|Vé|Erre/i), tA = WF('q', /attaque/i), tB = WF('q', /négocie/i), tC = WF('q', /infiltre/i), tW = WF('q', /Écris/i), tAbo = WF('cta', /abonne/i), tTag = WF('cta', /Tague/i);
  window.CAP_Y = 1250; window.NOCAP_UNTIL = S('s1');
  const K = [[0, 0, 2050, 1380, 1.9], [tPort - 0.2, 0.25, 1500, 1350, 0.9], [S('s1') + 0.6, 1.0, 1300, 1400, 0.75], [S('s2'), 0.8, 0, 1450, 1.0], [tArc, 0.8, -250, 1450, 0.7],
    [S('q'), 0.25, 2150, 1420, 1.45], [S('cta'), 1.0, 900, 1400, 0.55]];
  camPath(t, K);
  const slam = eOut(seg(t, A - 0.15, A + 0.05)), shake = t > A + 0.05 && t < A + 0.3 ? Math.sin(t * 90) * 14 : 0; x.translate(shake, 0);
  city(t); flag47(1700, 1050 - 70, id === 'ff' && t < tPort ? 0 : clamp((t - tPort) / 0.4));
  if (id === 's1' && t > WF('s1', /fumigènes/i)) [0, 1, 2].forEach(i => puff(1420 + i * 140, 1560, 120 + 80 * seg(t, WF('s1', /fumigènes/i) + i * 0.15, B.s1.end), clamp(1.2 - seg(t, WF('s1', /fumigènes/i), B.s1.end + 0.5))));
  // gang (left), new recruits appear when announced
  const on = (tt) => t >= tt;
  cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, blink: t > 0.6 }); cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1, blink: t > 0.6 });
  p47(460, GY, 0.78, t, { mood: id === 'ff' ? 'angry' : 'smug', look: 1, blink: t > 0.6 }); cast('inspector', 660, GY, 0.75, t, { ...RYZEN, mood: 'smile', look: 1, blink: t > 0.6 }); cast('inspector', 860, GY, 0.75, t, { ...ANGE, mood: 'smug', look: 1, blink: t > 0.6 });
  cast('inspector', -140, GY, 0.75, t, { ...SPY, mood: 'smug', look: 1, blink: t > 0.6 }); cast('inspector', -340, GY, 0.75, t, { ...ARCHER, mood: 'smug', look: 1, blink: t > 0.6 });
  if (on(tMed)) cast('inspector', 1060, GY, 0.75, t, { ...MEDIC, mood: 'smile', look: -1, blink: t > 0.6 });
  if (on(tRed)) cast('inspector', -540, GY, 0.75, t, { ...ELITE, mood: 'angry', look: 1, blink: t > 0.6 });
  if (on(tArc)) { cast('inspector', -740, GY, 0.75, t, { ...ARCH2, mood: 'smug', look: 1, blink: t > 0.6 }); cast('inspector', -940, GY, 0.75, t, { ...ARCH3, mood: 'smile', look: 1, blink: t > 0.6 }); }
  if (on(tVrk)) cast('inspector', -1140, GY, 0.75, t, { ...BRAIN, mood: 'smug', look: 1, blink: t > 0.6 });
  // prison next to the casino: Salah (FIGHTER) caged, Baron with the key
  cast('guard', 2600, GY, 0.75, t, { mood: 'neutral', look: -1, blink: t > 0.6 });
  cast('boss', 2380, GY + 40, 0.9, t, { mood: 'smile', look: -1, blink: t > 0.6, armUp: true });
  x.save(); x.translate(2490, GY - 600 + Math.sin(t * 6) * 12); x.rotate(0.3 * Math.sin(t * 5)); ell(0, 0, 34, 34, '#f5c542', 7); ell(0, 0, 12, 12, '#a07a1a', 0); rbox(-8, 30, 16, 90, 4, '#f5c542', 6); x.restore();
  cast('inspector', 2050, GY, 0.75, t, { ...FIGHTER, mood: 'shock', look: 1, blink: false });
  x.save(); x.translate(0, -820 * (1 - slam)); cage(2050, GY + 20, 0.95, t); x.restore(); resetCam(); if (t < A + 0.05) speedLines(t, 0.8);
  if (t > A + 0.05 && t < A + 0.25) { x.fillStyle = 'rgba(230,40,40,.18)'; x.fillRect(0, 0, W, H); }
  // --- text: one idea at a time ---
  if (id === 'ff') { if (t < tPort - 0.15) card('LE BARON A CAPTURÉ', 'SALAH 😱', C.red, 1); else card('POUR SE VENGER :', 'ON A REPRIS LE PORT ✅', '#2a8a3a', P(t, tPort - 0.15, 0.2)); }
  if (id === 's1' || id === 's2' || id === 's3') { resetCam(); x.save(); x.translate(540, 110); rrc(0, 0, 420, 70, 24, C.orange, 5); txt('JOUR 4 · J-6 ⏳', 0, 5, 40, '#fff', { stroke: false }); x.restore(); }
  if (id === 's1') { if (t < tVic) polaroid(560, 520, 420, 420, P(t, S('s1'), 0.3), (w, h) => { routeCard(w, h, 'C'); x.save(); x.translate(w * 0.8, h * 0.14); x.rotate(0.18); rrc(0, 0, 150, 56, 14, '#2a8a3a', 5); txt('59 % ✓', 0, 3, 34, '#fff', { stroke: false }); x.restore(); }, "C · L'ENTREPÔT", -0.04);
    else card('89 + 💨 = 139  VS  120', 'VICTOIRE ! ✅', '#2a8a3a', P(t, tVic, 0.2)); }
  if (id === 's2') { comment2('Le mec', '« Je veux être un médecin, hop', 'petit bisous sur les plaies »', P(t, S('s2'), 0.2), 330);
    if (t >= tMed) polaroid(560, 760, 380, 440, P(t, tMed, 0.3), (w, h) => memberCard(w, h, MEDIC, t, crossBadge), 'LE MEC · LE MÉDECIN', 0.04); }
  if (id === 's3') { const items = [[tRed, ELITE, '@REDARK1459 · ÉLITE', null], [tArc, ARCH2, 'DYDYLAN86 + RAYAN · ARCHERS', bow], [tVrk, BRAIN, '@VRK83K5 · LE CERVEAU', bulb]];
    let cur = items.filter(i => t >= i[0]).pop(); if (cur) polaroid(560, 700, 420, 480, P(t, cur[0], 0.25), (w, h) => memberCard(w, h, cur[1], t, cur[3]), cur[2], 0.03);
    pill('💰 CAISSE : 198 €', 540, 330, P(t, S('s3'), 0.2), '#2b2b30'); }
  if (id === 'q') { const left = Math.min(86399, Math.max(0, 24 * 3600 - (t - S('q')) * 60)), hh = Math.floor(left / 3600), mm = Math.floor(left % 3600 / 60), ss = Math.floor(left % 60);
    if (t < tA) card('TU AS 24 H', 'POUR SAUVER SALAH ⏳', C.red, P(t, S('q'), 0.2)); else card('ÉCRIS A, B OU C', 'EN COMMENTAIRE 👇', '#2457a8', P(t, tA, 0.2));
    x.save(); x.translate(540, 560); rrc(0, 0, 520, 130, 34, C.red, 7); txt('⏳ ' + [hh, mm, ss].map(n => String(n).padStart(2, '0')).join(':'), 0, 8, 80, '#fff', { stroke: false }); x.restore();
    [['A', 'ATTAQUER', tA], ['B', 'NÉGOCIER', tB], ['C', "BOB S'INFILTRE", tC]].forEach(([k, lab, tt], i) => { const p = clamp((t - tt) / 0.25); if (p <= 0) return; x.save(); x.translate(190 + i * 350, 1460 + 260 * (1 - eOut(p))); x.scale(1.12, 1.12); rrc(0, 0, 310, 150, 26, C.cream, 6); txt(k, 0, -24, 70, C.red, { stroke: false }); txt(lab, 0, 38, lab.length > 10 ? 32 : 40, OL, { stroke: false }); x.restore(); }); }
  if (id === 'cta') { const p = eBack(P(t, S('cta'), 0.25)); x.save(); x.translate(540, 330); x.scale(p, p); rrc(0, 0, 1000, 240, 36, 'rgba(20,20,28,.92)', 7); txt('NOUS', -300, -60, 46, C.orange, { stroke: false }); txt('89', -300, 40, 120, '#fff', { stroke: false }); ell(0, 0, 70, 70, C.red, 6); txt('VS', 0, 8, 56, '#fff', { stroke: false }); txt('LE BARON', 300, -60, 46, '#f5c542', { stroke: false }); txt(t > S('cta') + 0.8 ? '880' : '1000', 300, 40, 120, '#fff', { stroke: false }); x.restore();
    if (t >= tAbo && t < tTag) pill('ABONNE-TOI = +1 SOLDAT 💪', 540, 560, P(t, tAbo), '#2a8a3a'); if (t >= tTag) pill('👥 TAGUE UN POTE = DUO', 540, 560, P(t, tTag), '#2457a8');
    [['A', 'ATTAQUER'], ['B', 'NÉGOCIER'], ['C', "BOB S'INFILTRE"]].forEach(([k, lab], i) => { x.save(); x.translate(190 + i * 350, 1460); x.scale(1.12, 1.12); rrc(0, 0, 310, 150, 26, C.cream, 6); txt(k, 0, -24, 70, C.red, { stroke: false }); txt(lab, 0, 38, lab.length > 10 ? 32 : 40, OL, { stroke: false }); x.restore(); }); }
}
