// Le chien — Galagade set + Monsieur Énigme touches (numbered suspects, blue banners, onomatopoeia), « danger immédiat » intro.
// ONE sunny villa garden, left → right: villa (open window, footprints) · pool · kennel BRUTUS · suspects line-up · inspector + 47 cuffed (hook / loop).
window.CTA = 'TAGUE TON POTE DÉTECTIVE'; window.LOOK = 'gala';
const GY = 1900, XV = 560, XK = 1560, XD = 1720, X1 = 2250, X2 = 2560, X3 = 2870, XI = 3180, X47 = 3470;
const LIV = { hat: 'cap', hatCol: '#d6332b', hatCol2: '#a82820', body: '#d6332b', body2: '#a82820', pants: '#2b2d33', num: false };
const VOIS = { hairCol: '#c98a3a', body: '#3fa48a', body2: '#2f8a72', pants: '#3a3d44' };
function dog(px, py, s, t, o = {}) { x.save(); x.translate(px, py); x.scale(s, s); const sl = o.sleep, bk = o.bark ? Math.abs(Math.sin(t * 14)) : 0, wag = sl ? 0 : Math.sin(t * 12) * 0.5;
  const fur = '#b8783e', fur2 = '#8f5a2c';
  x.save(); x.translate(170, sl ? -90 : -230); x.rotate(-0.9 + wag); rrc(0, -60, 34, 130, 17, fur, 7); x.restore();                 // tail
  if (sl) { ell(0, -90, 210, 95, fur, 8); ell(-60, -60, 70, 40, fur2, 0); }
  else { [[-120, 0], [-50, 0], [60, 0], [130, 0]].forEach(([lx]) => rrc(lx, -90, 56, 180, 24, fur2, 7)); ell(0, -230, 210, 110, fur, 8); ell(30, -200, 110, 50, '#e8c08a', 0); }
  x.save(); x.translate(-200, sl ? -110 : -330); x.rotate(sl ? 0.25 : -0.05);
  ell(-60, -40, 50, 95, fur2, 7, 0.4); ell(80, -40, 50, 95, fur2, 7, -0.4);                                                          // ears
  ell(0, 0, 130, 120, fur, 8); ell(-20, 70, 95, 60 + bk * 20, '#e8c08a', 7); ell(-30, 30, 34, 26, OL, 0);                           // head + muzzle + nose
  if (sl) { [-60, 40].forEach(ex => { x.beginPath(); x.moveTo(ex - 25, -20); x.quadraticCurveTo(ex, -5, ex + 25, -20); x.lineWidth = 8; x.strokeStyle = OL; x.stroke(); }); }
  else [-60, 40].forEach(ex => { ell(ex, -25, 26, 30, '#fff', 6); ell(ex - 6, -20, 14, 17, OL, 0); });
  if (bk > 0.05) { ell(-20, 100, 40, 10 + bk * 40, '#7a2a2a', 6); }
  rrc(30, 120, 170, 30, 14, C.red, 6); ell(30, 150, 18, 18, '#e2b649', 5);                                                          // collar + tag
  x.restore(); x.restore(); }
function kennel(px, py) { poly([[px - 230, py - 300], [px, py - 520], [px + 230, py - 300]], '#b05a4a', 8); rbox(px - 200, py - 310, 400, 310, 6, '#c98a52', 8);
  x.strokeStyle = 'rgba(80,50,30,.35)'; x.lineWidth = 5; for (let i = 1; i < 6; i++) { x.beginPath(); x.moveTo(px - 200, py - 310 + i * 52); x.lineTo(px + 200, py - 310 + i * 52); x.stroke(); }
  x.beginPath(); x.ellipse(px, py - 100, 100, 130, 0, Math.PI, 0); x.lineTo(px + 100, py); x.lineTo(px - 100, py); x.closePath(); fs('#3a2a22', 7);
  rbox(px - 120, py - 420, 240, 70, 10, '#f4f2ec', 6); txt('BRUTUS', px, py - 384, 54, OL, { stroke: false }); ell(px + 300, py - 20, 70, 24, '#9aa4b2', 6); }
function chickenBox(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); [[-90, -190], [-10, -215], [70, -195], [-50, -230], [30, -240]].forEach(([a, b]) => { ell(a, b, 58, 44, '#c8873a', 6); ell(a - 12, b - 10, 16, 10, '#e8b06a', 0); });
  poly([[-170, -170], [170, -170], [140, 170], [-140, 170]], '#d6332b', 8); x.save(); x.beginPath(); x.moveTo(-170, -170); x.lineTo(170, -170); x.lineTo(140, 170); x.lineTo(-140, 170); x.closePath(); x.clip(); x.fillStyle = '#fff'; [-110, -10, 90].forEach(sx => x.fillRect(sx, -170, 40, 340)); x.restore();
  rbox(-150, -60, 300, 130, 16, '#ffd23f', 6); txt('TASTY', 0, -24, 58, C.red, { stroke: false }); txt('CROUSTY', 0, 34, 58, C.red, { stroke: false }); x.restore(); }
function cuffs(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); [-60, 60].forEach(hx => { x.lineWidth = 28; x.strokeStyle = OL; x.beginPath(); x.ellipse(hx, 0, 48, 22, 0, 0, 7); x.stroke(); x.lineWidth = 17; x.strokeStyle = metal(-22, 22); x.stroke(); });
  x.lineWidth = 10; x.strokeStyle = '#8b95a5'; x.beginPath(); x.moveTo(-14, 0); x.quadraticCurveTo(0, 26, 14, 0); x.stroke(); x.restore(); }
function badge(n, px, py) { ell(px, py, 62, 62, C.red, 7); txt(String(n), px, py + 6, 92, '#fff', { stroke: false }); }
function hedge(x0, x1, y) { for (let hx = x0; hx < x1; hx += 120) ell(hx, y, 95, 110, (hx / 120) % 2 ? '#4f9a46' : '#5fa24e', 7); x.fillStyle = '#4f9a46'; x.fillRect(x0 - 60, y, x1 - x0 + 60, 200); }
function tree(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-30, -300, 60, 300, 10, '#7a5232', 6); [[0, -420, 170], [-110, -330, 120], [110, -330, 120]].forEach(([a, b, r]) => ell(a, b, r, r * 0.9, '#5fa24e', 7)); x.restore(); }
function garden(t, id) {
  x.fillStyle = vg(-1500, 1500, '#6fc0ff', '#e3f4ff'); x.fillRect(-1500, -1500, 6800, 3000); ell(2900, 250, 110, 110, '#fff3a0', 0);
  [[600, 380], [1800, 260], [2900, 420], [3700, 300]].forEach(([cx, cy], i) => { const ox = (t * 15 + i * 150) % 260; [[-90, 0, 90], [0, -40, 110], [100, 0, 90]].forEach(([a, b, r]) => ell(cx + ox + a, cy + b, r, r * 0.7, '#ffffff', 0)); });
  hedge(-400, 4200, 1560);
  // villa
  rbox(-300, 700, 1300, 1200, 10, '#f3e3c3', 9); bricks(-292, 708, 1284, 1184, '#f1dfbc', 'rgba(150,110,70,.22)', 110, 55); poly([[-380, 720], [350, 380], [1080, 720]], '#c0583e', 9);
  rbox(-180, 900, 220, 300, 8, '#bfe3ff', 7); rbox(-180, 1300, 220, 300, 8, '#bfe3ff', 7);
  rbox(560, 960, 300, 380, 8, '#3a2a22', 8); poly([[560, 960], [440, 1010], [440, 1300], [560, 1340]], '#bfe3ff', 7);                // open window (dark inside), pane swung open
  rbox(620, 1180, 180, 150, 10, '#7d838c', 6); ell(710, 1255, 30, 30, '#5a5f6b', 5); x.fillStyle = '#1b1b1f'; x.fillRect(640, 1200, 30, 110);   // empty safe inside
  rbox(150, 1500, 260, 400, 20, '#7a5232', 8); ell(370, 1720, 14, 14, '#e2b649', 5); txt('VILLA DU BARON', 280, 1440, 56, OL, { stroke: false });
  ell(1060, 1500, 130, 60, '#d6332b', 7); [[960, 1500], [1160, 1500]].forEach(([fx, fy]) => ell(fx, fy, 40, 40, '#f5d76e', 5));
  x.fillStyle = '#7cc46a'; x.fillRect(-1500, 1720, 6800, 1500); x.fillStyle = '#6ab45a'; for (let i = 0; i < 90; i++) x.fillRect(-1400 + (i * 137) % 6400, 1750 + (i * 53) % 900, 40, 10);
  ell(1080, 2010, 300, 70, '#5fc4e8', 8); ell(1040, 1995, 160, 22, 'rgba(255,255,255,.5)', 0);                                      // pool
  [[700, 1990], [820, 2050], [930, 1985], [1250, 2060], [1360, 2000], [1480, 2070]].forEach(([fx, fy], i) => { x.save(); x.translate(fx, fy); x.rotate(0.15); ell(0, 0, 22, 34, 'rgba(60,40,25,.55)', 0); ell(0, -42, 14, 14, 'rgba(60,40,25,.55)', 0); x.restore(); });  // footprints
  tree(1900, 1760, 1.05); kennel(XK, 1860); tree(3950, 1740, 1.2);
  rbox(2050, 1480, 1000, 40, 10, '#f4f2ec', 6); [2100, 2400, 2700, 3000].forEach(px => rbox(px - 10, 1500, 20, 250, 4, '#f4f2ec', 5));   // white fence behind suspects
  cast('boss', 140, GY + 40, 0.72, t, { mood: id === 's1' || id === 's1b' ? 'angry' : 'neutral', look: 1 });
  dog(XD, 1980, 0.95, t, { bark: id === 's2' && t > WF('s2', /aboie/i) - 0.1 && t < B.s2.end });
  cast('guard', 2020, GY + 40, 0.7, t, { mood: 'neutral', look: 1 });
  toon(X1, GY + 60, 0.75, { t, ...LIV, mood: 'worried', look: 0, blink: t > 0.6 }); chickenBox(X1 + 150, GY - 250, 0.38);
  cast('woman', X2, GY + 60, 0.75, t, { ...VOIS, mood: 'worried', look: 0 });
  cast('gardener', X3, GY + 60, 0.75, t, { mood: 'worried', look: 0 });
  if (id === 's3' || id === 's4' || id === 's4b' || id === 'q') [[1, X1, WF('s3', /livreur/i)], [2, X2, WF('s3', /voisine/i)], [3, X3, WF('s3', /jardinier/i)]].forEach(([n, bx, tb]) => { if (t >= tb || id !== 's3') { const k = id === 's3' ? eBack(seg(t, tb, tb + 0.3)) : 1; x.save(); x.translate(bx, GY - 650); x.scale(k, k); badge(n, 0, 0); x.restore(); } });
  // inspector + 47 cuffed (hook / loop)
  rbox(3290, 1600, 380, 60, 10, '#7a5232', 7);
  cast('inspector', XI, GY + 60, 0.82, t, { mood: 'angry', look: 1, blink: t > 0.6 });
  { const sx = XI + 100, sy = GY + 60 - 0.82 * 470; x.save(); x.translate(sx, sy); x.rotate(-0.25); rrc(85, 0, 190, 50, 24, '#a8875c', 7); ell(195, 0, 30, 28, SKIN, 6); rrc(235, -6, 50, 18, 9, SKIN, 5); x.restore(); }
  p47(X47, GY + 60, 0.82, t, { mood: id === 'ff' || id === 'q' || id === 's4b' ? 'worried' : 'neutral', sweat: true, look: -1, blink: t > 0.6 });
  cuffs(X47, GY + 60 - 300 * 0.82, 0.82); }
function timer(t, n, px, py, s = 1) { if (n < 0) return; ev('tick', 'tm' + n); x.save(); resetCam(); x.translate(px, py); const k = s * (1 + 0.18 * Math.pow(1 - (t % 1), 4)); x.scale(k, k);
  ell(0, 0, 118, 118, '#fff', 10); x.strokeStyle = C.red; x.lineWidth = 18; x.beginPath(); x.arc(0, 0, 92, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (n / 10)); x.stroke();
  txt(String(n), 0, 10, 120, C.red, { stroke: false }); rrc(0, -132, 50, 26, 8, OL, 0); x.restore(); }
function safeCard(w, h) { x.fillStyle = '#e9e4da'; x.fillRect(0, 0, w, h); rbox(w * 0.15, h * 0.12, w * 0.7, h * 0.76, 16, '#7d838c', 8); rbox(w * 0.22, h * 0.2, w * 0.56, h * 0.6, 8, '#2a2c33', 6); txt('VIDE', w / 2, h / 2, 70, '#fff', { stroke: false }); }
function dogCard(sleep) { return (w, h) => { x.fillStyle = sleep ? '#2c3a66' : '#bfe3ff'; x.fillRect(0, 0, w, h); if (sleep) { ell(w * 0.8, h * 0.18, 40, 40, '#fff3a0', 0); [[60, 60], [200, 120], [330, 50]].forEach(([sx, sy]) => ell(sx, sy, 5, 5, '#fff', 0)); }
  x.fillStyle = sleep ? '#3f6b3a' : '#7cc46a'; x.fillRect(0, h * 0.72, w, h); dog(w * 0.55, h * 0.85, 0.85, _T, { sleep });
  if (sleep) txt('Z z z', w * 0.3, h * 0.35, 70, '#fff', { stroke: false }); }; }
function draw(t) {
  const id = curId(t), tVide = WF('s1b', /vide/i), tFen = WF('s1b', /fenêtre/i), tTr = WF('s1b', /traces/i), tAb = WF('s2', /aboie/i), tNuit = WF('s4', /nuit/i), tAboy = WF('s4', /aboyé/i);
  const K = [[0, 0, X47 - 110, 1330, 1.9], [B.ff.end - 0.1, 1.3, 520, 1450, 0.8], [tVide - 0.3, 1.0, 680, 1280, 1.45], [tTr - 0.2, 1.2, 1000, 1700, 1.15],
    [S('s2') - 0.1, 1.4, XD - 60, 1640, 1.35], [WF('s3', /suspects/i) - 0.3, 1.6, X2, 1560, 1.12], [S('s4') + 0.2, 3, X2 + 60, 1540, 1.2],
    [S('s4b') - 0.1, 1.3, (XI + X47) / 2, 1500, 1.15], [S('q') - 0.1, 1.2, X47 - 110, 1330, 1.9]];
  camPath(t, K);
  garden(t, id);
  resetCam();
  // countdown: 10 → 8 during the hook, then the real 10 s before the end
  const end = TL.total, nEnd = Math.ceil(end - t);
  if (id === 'ff') timer(t, 10 - Math.floor(t), 930, 640, 0.9);
  if ((id === 's4b' && t > WF('s4b', /secondes/i)) || id === 'q') timer(t, Math.min(10, nEnd), id === 'q' ? 890 : 870, id === 'q' ? 1600 : 760, id === 'q' ? 1.05 : 1.15);
  hookCard(t, [['10 SECONDES…', 100, C.red], ['SINON 47 PREND 20 ANS', 80]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('VILLA DU BARON · 3 H', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1b' && t >= tVide) polaroid(560, 620, 420, 420, P(t, tVide, 0.3), safeCard, 'LE COFFRE', -0.04);
  if (id === 's2') polaroid(560, 600, 460, 460, P(t, S('s2') + 0.6, 0.3), dogCard(false), 'BRUTUS', 0.04);
  if (id === 's2' && t >= tAb) onoma('WOUF ! WOUF !', 560, 1050, P(t, tAb, 0.2), 140);
  if (id === 's3') banner('3 SUSPECTS', 540, 330, P(t, S('s3') + 0.2));
  if (id === 's4' && t >= tNuit) polaroid(560, 560, 420, 400, P(t, tNuit, 0.3), dogCard(true), 'CETTE NUIT', -0.04);
  if (id === 's4' && t >= tAboy) onoma('… SILENCE', 560, 1080, P(t, tAboy, 0.2), 120);
  endCards(t, [['QUI EST LE VOLEUR ?', 84, C.red], ['1, 2 OU 3 EN COMMENTAIRE', 50]]);
}
