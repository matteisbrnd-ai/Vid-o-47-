// La bande de 47 — Jour 1: one city set (gang garage left, Baron's district right), game-like HUD, A/B/C vote polaroids.
window.LOOK = 'gala'; 
const GY = 1950, LOLA = { hairCol: '#c0392b', body: '#2c4f8a', body2: '#223f70', pants: '#223f70' };
function building(bx, by, w, h, col, label, flag) { rbox(bx, by, w, h, 8, col, 8); for (let r = 0; r < Math.floor(h / 160) - 1; r++) for (let k = 0; k < 3; k++) rbox(bx + 30 + k * (w - 60) / 3, by + 40 + r * 160, (w - 60) / 3 - 24, 90, 6, '#bfe3ff', 4);
  rbox(bx - 10, by - 70, w + 20, 70, 10, '#2b2b30', 6); txt(label, bx + w / 2, by - 33, 44, '#f5c542', { stroke: false });
  if (flag) { x.fillStyle = OL; x.fillRect(bx + w - 30, by - 230, 10, 160); poly([[bx + w - 20, by - 230], [bx + w + 90, by - 200], [bx + w - 20, by - 170]], '#1b1b1f', 5); txt('B', bx + w + 25, by - 196, 34, '#f5c542', { stroke: false }); } }
function city(t) { x.fillStyle = vg(-1500, 1600, '#6fc0ff', '#e3f4ff'); x.fillRect(-1200, -1500, 5000, 3200);
  bricks(-200, 1250, 900, 450, '#c96a4a', 'rgba(80,40,20,.3)'); rbox(-200, 1180, 900, 80, 10, '#7a3a2a', 7); txt('GARAGE 47', 250, 1225, 50, C.orange, { stroke: false }); rbox(80, 1400, 340, 300, 10, '#6b707a', 7);
  building(900, 900, 380, 800, '#e3d6bc', 'BANQUE', true); building(1360, 1050, 360, 650, '#cfe0f0', 'PORT', true); building(1800, 800, 420, 900, '#e9b7a0', 'CASINO', true);
  x.fillStyle = '#5a5d66'; x.fillRect(-1200, 1700, 5000, 2000); x.fillStyle = '#fff'; for (let i = -6; i < 30; i++) x.fillRect(i * 200, 1980, 100, 14); }
function hud(t, money, id, tAbo) { resetCam(); [['💰 ' + money + ' €', 190], ['🏙 0 / 3', 540], ['👥 ' + (3 + (id === 's3' && t >= tAbo ? 1 : 0)), 890]].forEach(([s, px]) => { rrc(px, 140, 300, 80, 30, 'rgba(20,20,30,.75)', 4); txt(s, px, 144, 44, '#fff', { stroke: false }); }); }
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
  if (k === 'C') { x.save(); x.translate(w * 0.62, h * 0.33);                                                     // quad drone
    [[-1, -1], [1, -1]].forEach(([sx]) => { x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(0, 0); x.lineTo(sx * w * 0.2, -h * 0.05); x.stroke(); ell(sx * w * 0.2, -h * 0.07, w * 0.11, h * 0.015, 'rgba(60,60,70,.6)', 2); });
    rbox(-w * 0.1, -h * 0.03, w * 0.2, h * 0.07, 14, '#e03a2e', 6); ell(0, h * 0.05, w * 0.03, w * 0.03, '#1b1b1f', 4); shine(-w * 0.04, -h * 0.01, w * 0.05, h * 0.01); x.restore();
    x.save(); x.translate(w * 0.32, h * 0.72);                                                                       // grappling hook + rope coil
    [-1, 0, 1].forEach(d => { x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(0, -h * 0.05); x.quadraticCurveTo(d * w * 0.12, 0, d * w * 0.1 + (d ? 0 : 0), -h * 0.08 + (d ? 0 : h * 0.13)); x.stroke(); x.strokeStyle = '#b9c0cc'; x.lineWidth = 9; x.stroke(); });
    rbox(-8, -h * 0.25, 16, h * 0.2, 4, '#b9c0cc', 4); x.strokeStyle = '#c9a06a'; x.lineWidth = 8; x.beginPath(); x.moveTo(0, -h * 0.25); x.quadraticCurveTo(w * 0.1, -h * 0.45, w * 0.3, -h * 0.4); x.stroke(); x.restore(); } }
function price(w, h, s) { x.save(); x.translate(w * 0.8, h * 0.12); x.rotate(0.18); rrc(0, 0, 120, 56, 14, C.red, 5); txt(s, 0, 3, 36, '#fff', { stroke: false }); x.restore(); }
function draw(t) {
  const id = curId(t), tRico = WF('s1', /Rico/i), tLola = WF('s1', /Lola/i), tCer = WF('s1', /cerveau/i), tEur = WF('s3', /like/i), tAbo = WF('s3', /abonnement/i);
  const K = [[0, 0, 1500, 1300, 0.62], [B.ff.end - 0.1, 1.0, 250, 1500, 1.4], [tRico - 0.2, 0.6, 60, 1500, 2.4], [tLola - 0.2, 0.6, 260, 1500, 2.4], [tCer - 0.2, 0.6, 460, 1500, 2.4],
    [S('s2'), 1.4, 1550, 1250, 0.8], [S('s3'), 1.4, 250, 1500, 1.4], [S('q'), 1.2, 1000, 1300, 0.62]];
  camPath(t, K);
  city(t);
  cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, armUp: id === 's1' && t >= tRico && t < tLola });
  cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1 });
  p47(460, GY, 0.78, t, { mood: id === 's3' ? 'worried' : 'smug', look: 1, blink: t > 0.6 });
  cast('boss', 1500, GY, 0.85, t, { mood: 'smug', look: -1 }); cast('guard', 1300, GY, 0.75, t, { mood: 'neutral', look: -1 }); cast('guard', 1720, GY, 0.75, t, { mood: 'neutral', look: -1 });
  hud(t, id === 's3' && t >= tAbo ? 6 : id === 's3' && t >= tEur ? 1 : 0, id, tAbo);
  hookCard(t, [['ON A BESOIN DE TOI', 74], ['POUR BATTRE', 74], ['LE BARON 👊', 104, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LA BANDE DE 47 · JOUR 1', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tRico) pill(t >= tCer ? '47 · LE CERVEAU' : t >= tLola ? 'LOLA · LA HACKEUSE' : 'RICO · LES MUSCLES', 540, 1180, 1, C.orange);
  if (id === 's3' && t >= tEur) paperCard([['❤️ 1 LIKE = 1 €', 76, '#2a8a3a'], ...(t >= tAbo ? [['➕ 1 ABONNÉ = 5 €', 76, '#2a8a3a'], ['+ 1 MEMBRE 👥', 60]] : [])], 540, 600, P(t, tEur), { w: 820 });
  if (id === 's4') paperCard([['💬 COMMENTE', 76], ['= TIRÉ AU SORT', 70], ['POUR REJOINDRE LA BANDE', 46, C.red]], 540, 600, P(t, S('s4') + 0.3), { w: 860 });
  if (id === 'q') [['A', 'PISTOLETS À EAU', 0], ['B', 'FUMIGÈNES', 1], ['C', 'GRAPPIN + DRONE', 2]].forEach(([k, lab, i]) => polaroid(200 + i * 340, 760, 300, 360, P(t, WF('q', new RegExp('^' + k + '$')) || S('q') + i, 0.25), (w, h) => { gadget(w, h, k, t); price(w, h, ['40 €', '25 €', '60 €'][i]); }, k + ' · ' + lab, (i - 1) * 0.05));
  if (id === 'q') paperCard([['VOTE A, B OU C 👇', 74, C.red]], 540, 1180, P(t, B.q.end - 0.5), { w: 760 });
}
