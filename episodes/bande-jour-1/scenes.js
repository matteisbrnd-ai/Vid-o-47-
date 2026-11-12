// La bande de 47 — Jour 1: one city set (gang garage left, Baron's district right), game-like HUD, A/B/C vote polaroids.
window.LOOK = 'gala'; window.CTA = 'CHAQUE COMMENTAIRE = 10 € 💰';
const GY = 1950, LOLA = { hairCol: '#c0392b', body: '#2c4f8a', body2: '#223f70', pants: '#223f70' };
function building(bx, by, w, h, col, label, flag) { rbox(bx, by, w, h, 8, col, 8); for (let r = 0; r < Math.floor(h / 160) - 1; r++) for (let k = 0; k < 3; k++) rbox(bx + 30 + k * (w - 60) / 3, by + 40 + r * 160, (w - 60) / 3 - 24, 90, 6, '#bfe3ff', 4);
  rbox(bx - 10, by - 70, w + 20, 70, 10, '#2b2b30', 6); txt(label, bx + w / 2, by - 33, 44, '#f5c542', { stroke: false });
  if (flag) { x.fillStyle = OL; x.fillRect(bx + w - 30, by - 230, 10, 160); poly([[bx + w - 20, by - 230], [bx + w + 90, by - 200], [bx + w - 20, by - 170]], '#1b1b1f', 5); txt('B', bx + w + 25, by - 196, 34, '#f5c542', { stroke: false }); } }
function city(t) { x.fillStyle = vg(-1500, 1600, '#6fc0ff', '#e3f4ff'); x.fillRect(-1200, -1500, 5000, 3200);
  bricks(-200, 1250, 900, 450, '#c96a4a', 'rgba(80,40,20,.3)'); rbox(-200, 1180, 900, 80, 10, '#7a3a2a', 7); txt('GARAGE 47', 250, 1225, 50, C.orange, { stroke: false }); rbox(80, 1400, 340, 300, 10, '#6b707a', 7);
  building(900, 900, 380, 800, '#e3d6bc', 'BANQUE', true); building(1360, 1050, 360, 650, '#cfe0f0', 'PORT', true); building(1800, 800, 420, 900, '#e9b7a0', 'CASINO', true);
  x.fillStyle = '#5a5d66'; x.fillRect(-1200, 1700, 5000, 2000); x.fillStyle = '#fff'; for (let i = -6; i < 30; i++) x.fillRect(i * 200, 1980, 100, 14); }
function hud(t, money) { resetCam(); [['💰 ' + money + ' €', 190], ['🏙 0 / 3', 540], ['👥 3', 890]].forEach(([s, px]) => { rrc(px, 140, 300, 80, 30, 'rgba(20,20,30,.75)', 4); txt(s, px, 144, 44, '#fff', { stroke: false }); }); }
function gadget(w, h, k) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h);
  if (k === 'A') { rbox(w * 0.2, h * 0.45, w * 0.6, h * 0.16, 30, '#2fa3e0', 6); rbox(w * 0.6, h * 0.55, w * 0.14, h * 0.22, 14, '#f5c542', 6); ell(w * 0.25, h * 0.38, w * 0.12, w * 0.12, '#2fd0c0', 5); }
  if (k === 'B') { [0.3, 0.55, 0.78].forEach((cx, i) => { ell(w * cx, h * 0.6, w * 0.1, w * 0.1, '#5a5d66', 6); ell(w * cx, h * 0.4 - i * 10, w * 0.14, w * 0.1, 'rgba(200,200,210,.8)', 0); }); }
  if (k === 'C') { x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(w * 0.2, h * 0.8); x.quadraticCurveTo(w * 0.1, h * 0.3, w * 0.35, h * 0.25); x.stroke(); poly([[w * 0.35, h * 0.18], [w * 0.45, h * 0.25], [w * 0.35, h * 0.32]], '#8a8f99', 5);
    rbox(w * 0.52, h * 0.5, w * 0.3, h * 0.1, 10, '#1b1b1f', 5); [0.5, 0.84].forEach(px => ell(w * px, h * 0.48, w * 0.08, h * 0.02, '#8a8f99', 3)); } }
function draw(t) {
  const id = curId(t), tRico = WF('s1', /Rico/i), tLola = WF('s1', /Lola/i), tCer = WF('s1', /cerveau/i), tEur = WF('s3', /euros/i);
  const K = [[0, 0, 1500, 1300, 0.62], [B.ff.end - 0.1, 1.0, 250, 1500, 1.4], [tRico - 0.2, 0.6, 60, 1500, 2.4], [tLola - 0.2, 0.6, 260, 1500, 2.4], [tCer - 0.2, 0.6, 460, 1500, 2.4],
    [S('s2'), 1.4, 1550, 1250, 0.8], [S('s3'), 1.4, 250, 1500, 1.4], [S('q'), 1.2, 1000, 1300, 0.62]];
  camPath(t, K);
  city(t);
  cast('rico', 60, GY, 0.75, t, { mood: 'smug', look: 1, armUp: id === 's1' && t >= tRico && t < tLola });
  cast('woman', 260, GY, 0.75, t, { ...LOLA, mood: 'smile', look: 1 });
  p47(460, GY, 0.78, t, { mood: id === 's3' ? 'worried' : 'smug', look: 1, blink: t > 0.6 });
  cast('boss', 1500, GY, 0.85, t, { mood: 'smug', look: -1 }); cast('guard', 1300, GY, 0.75, t, { mood: 'neutral', look: -1 }); cast('guard', 1720, GY, 0.75, t, { mood: 'neutral', look: -1 });
  hud(t, id === 's3' && t >= tEur ? '+10' : 0);
  hookCard(t, [['LE BARON VEUT LA VILLE…', 70], ['ON A 0 €', 110, C.red], ["C'EST TOI QUI PAIES 😏", 60]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LA BANDE DE 47 · JOUR 1', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tRico) pill(t >= tCer ? '47 · LE CERVEAU' : t >= tLola ? 'LOLA · LA HACKEUSE' : 'RICO · LES MUSCLES', 540, 1180, 1, C.orange);
  if (id === 's3' && t >= tEur) paperCard([['1 COMMENTAIRE', 70], ['= 10 € 💰', 110, '#2a8a3a']], 540, 560, P(t, tEur), { w: 760 });
  if (id === 'q') [['A', 'PISTOLETS À EAU', 0], ['B', 'FUMIGÈNES', 1], ['C', 'GRAPPIN + DRONE', 2]].forEach(([k, lab, i]) => polaroid(200 + i * 340, 760, 300, 360, P(t, WF('q', new RegExp('^' + k + '$')) || S('q') + i, 0.25), (w, h) => gadget(w, h, k), k + ' · ' + lab, (i - 1) * 0.05));
  if (id === 'q') paperCard([['VOTE A, B OU C 👇', 74, C.red]], 540, 1180, P(t, B.q.end - 0.5), { w: 760 });
}
