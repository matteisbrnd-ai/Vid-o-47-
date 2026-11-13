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
function draw(t) {
  const id = curId(t), tRico = 9e9, tLola = 9e9, tCer = 9e9, tEur = S('s2'), tAbo = S('s2');
  const K = [[0, 0, 1500, 1500, 1.9], [0.3, 2.2, 1350, 1450, 1.2], [B.ff.end - 0.1, 1.0, 300, 1500, 1.4], [S('s2'), 1.2, 300, 1500, 1.4], [S('s3'), 1.0, 300, 1450, 1.2], [S('s6'), 1.0, 300, 1500, 1.4], [S('q'), 1.2, 1000, 1300, 0.62]];
  camPath(t, K);
  city(t);
  cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, blink: t > 0.6, armUp: id === 's1' && t >= tRico && t < tLola });
  cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1, blink: t > 0.6 });
  p47(460, GY, 0.78, t, { mood: id === 'ff' || id === 's2' ? 'smile' : 'smug', look: 1, blink: t > 0.6 });
  if (!['ff', 's2', 's3'].includes(id)) cast('inspector', 660, GY, 0.75, t, { ...RYZEN, mood: 'smile', look: 1 }); if (!['ff', 's2', 's3', 's4'].includes(id)) cast('inspector', 860, GY, 0.75, t, { ...ANGE, mood: 'smug', look: 1 });
  if (id === 'ff') { for (let i = 0; i < 14; i++) { const k = ((t * 0.6 + i * 0.13) % 1); ell(100 + (i * 83) % 600, 900 + k * 900, 30, 18, '#7ccf6a', 4); txt('€', 100 + (i * 83) % 600, 904 + k * 900, 26, '#2a6a2a', { stroke: false }); } }
  cast('boss', 1500, GY, 0.85, t, { mood: 'smug', look: -1 }); cast('guard', 1300, GY, 0.75, t, { mood: 'neutral', look: -1 }); cast('guard', 1720, GY, 0.75, t, { mood: 'neutral', look: -1 });
  hud(t, 114, id, tAbo);
  hookCard(t, [['J-8', 130, C.red], ['LE BARON ATTAQUE…', 62], ["ET ON A QUE 114 €", 66, '#2a8a3a']], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  
  if (id === 's2') paperCard([['❤️ 49 × 1 € + ➕ 13 × 5 €', 56], ['= 114 € 💰', 110, '#2a8a3a']], 540, 600, P(t, tEur), { w: 860 });
  if (id === 's3' && t >= WF('s3', /Ryzen/i)) polaroid(560, 700, 460, 560, P(t, WF('s3', /Ryzen/i), 0.3), (w, h) => recruitCard(w, h, 'R', t), '@RYZEN · L\'INVENTEUR', -0.04);
  if (id === 's4') polaroid(560, 700, 460, 560, P(t, S('s4') + 0.2, 0.3), (w, h) => recruitCard(w, h, 'A', t), "@GEULED'ANGE · LE FOU", 0.04);
  if (id === 's6') paperCard([['🔧 FABRIQUÉ PAR RYZEN', 62], ['= MOINS CHER', 84, '#2a8a3a'], ...(t >= WF('s6', /manque/i) ? [['MAIS PAS ASSEZ 😬', 60, C.red]] : [])], 540, 600, P(t, S('s6') + 0.2), { w: 820 });
  if (id === 'q' || id === 'cta') [['A', 'DRONE ESPION', 0], ['B', 'FUMIGÈNES MAISON', 1], ['C', 'GRAPPIN', 2]].forEach(([k, lab, i]) => polaroid(200 + i * 340, 760, 300, 360, P(t, WF('q', [/drone/i, /fumig/i, /grappin/i][i]), 0.25), (w, h) => { gadget(w, h, ['D', 'B', 'G'][i], t); price(w, h, ['280 €', '160 €', '220 €'][i]); x.save(); x.translate(w * 0.2, h * 0.12); x.rotate(-0.12); txt(['400 €', '250 €', '320 €'][i], 0, 0, 30, '#8a8f99', { stroke: false }); x.strokeStyle = C.red; x.lineWidth = 5; x.beginPath(); x.moveTo(-50, 0); x.lineTo(50, 0); x.stroke(); x.restore(); rrc(w / 2, h * 0.78, w * 0.9, 40, 10, '#fbf3e4', 0); txt(['ESPIONNER LE BARON', 'DISPARAÎTRE', 'GRIMPER SUR LES TOITS'][i], w / 2, h * 0.78 + 2, 26, '#2457a8', { stroke: false }); rrc(w / 2, h * 0.9, w * 0.86, 44, 12, '#1b1b1f', 0); txt('IL MANQUE ' + ([280, 160, 220][i] - 114) + ' €', w / 2, h * 0.9 + 3, 30, '#ff6a5a', { stroke: false }); }, k + ' · ' + lab, (i - 1) * 0.05));
  if (id === 'q') paperCard([['A, B OU C 👇', 80, C.red], ['+ LE RÔLE QUE TU VEUX', 48]], 540, 1180, P(t, B.q.end - 1.5), { w: 760 });
  if (id === 'cta') paperCard([['❤️ 1 LIKE = 1 €', 60, '#2a8a3a'], ['➕ 1 ABONNÉ = 5 €', 60, '#2a8a3a'], ...(t > WF('cta', /demain/i) ? [['DEMAIN : LE BARON FRAPPE LE PORT', 40, C.red]] : [])], 540, 1180, P(t, S('cta')), { w: 860 });
}
