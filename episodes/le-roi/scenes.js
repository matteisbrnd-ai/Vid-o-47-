// Le roi — Galagade style: ONE sunny royal arena (2160 wide). Left: royal box with the King · centre/right: lion pit cut-away
// with a wooden plank + trapdoor where 47 stands. Intro « danger immédiat »: 47 on the trapdoor + big countdown from frame 0.
window.CTA = "TAGUE CELUI QUI S'EN SORT TOUJOURS"; window.LOOK = 'gala';
const GY = 1900, PX = 1650, KX = 600, KY = 1480;
const KING = { hat: 'hair', hairCol: '#f0f0f0', mustache: true, white: true, body: '#b0303a', body2: '#8a2430', pants: '#3a2a22', num: false, collar: true };
const CROWD = ['#d6332b', '#2c4fa8', '#2f8f4f', '#f2781f', '#7a4aa8', '#e2b649', '#3a6fc4', '#c95d12'];
function crown(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); poly([[-90, 0], [-100, -110], [-50, -50], [0, -130], [50, -50], [100, -110], [90, 0]], '#f5c542', 7);
  [[-100, -110], [0, -130], [100, -110]].forEach(([a, b]) => ell(a, b, 14, 14, C.red, 4)); x.restore(); }
function fan(px, py, s, i, t, cheer) { const c = CROWD[i % CROWD.length], b = cheer ? Math.abs(Math.sin(t * 9 + i)) * 14 : Math.sin(t * 2 + i) * 3;
  x.save(); x.translate(px, py - b); x.scale(s, s); rbox(-48, -40, 96, 90, 30, c, 5); ell(0, -80, 38, 40, (i % 3) ? SKIN : '#c98e5e', 5);
  ell(-13, -84, 7, 9, OL, 0); ell(13, -84, 7, 9, OL, 0); if (cheer) { ell(0, -60, 9, 7, '#5a1a1a', 0); [-1, 1].forEach(d => rbox(d * 52 - 10, -120, 20, 70, 10, c, 4)); }
  else { x.strokeStyle = OL; x.lineWidth = 4; x.beginPath(); x.moveTo(-8, -62); x.lineTo(8, -62); x.stroke(); }
  if (i % 4 === 0) { x.fillStyle = c; x.beginPath(); x.arc(0, -110, 34, Math.PI, 0); x.fill(); } x.restore(); }
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-40, -80, 80, 160, 16, '#2fd0c0', 5); rbox(-40, -80, 80, 20, 8, '#c9ced6', 4); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 2, 34, '#fff', { stroke: true }); x.restore(); x.restore(); }
function lion(px, py, s, t, i, roar) { x.save(); x.translate(px, py); x.scale(s, s); const b = Math.sin(t * 3 + i) * 6;
  ell(0, -110, 190, 95, '#e8a840', 7); rbox(-150, -60, 50, 80, 20, '#e8a840', 6); rbox(100, -60, 50, 80, 20, '#e8a840', 6);
  x.strokeStyle = OL; x.lineWidth = 12; x.beginPath(); x.moveTo(180, -120); x.quadraticCurveTo(260, -200 + b, 250, -260); x.stroke(); ell(250, -265, 20, 24, '#8a4a1a', 5);
  x.translate(-170, -200 + b); for (let k = 0; k < 12; k++) { const a = k / 12 * 6.283; ell(Math.cos(a) * 95, Math.sin(a) * 95, 50, 50, '#a0521e', 5); } ell(0, 0, 110, 110, '#8a4a1a', 0);
  ell(0, 6, 95, 92, '#f0b850', 7); ell(-34, -16, 14, 18, OL, 0); ell(34, -16, 14, 18, OL, 0); ell(0, 22, 20, 14, '#5a2a1a', 4);
  if (roar) { ell(0, 62, 46, 34, '#7a1a1a', 6); poly([[-24, 34], [-14, 52], [-4, 34]], '#fff', 3); poly([[24, 34], [14, 52], [4, 34]], '#fff', 3); }
  else { x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(-26, 50); x.quadraticCurveTo(0, 66, 26, 50); x.stroke(); }
  ell(-80, -70, 24, 28, '#f0b850', 5); ell(80, -70, 24, 28, '#f0b850', 5); x.restore(); }
function arena(t, cheer, roar) {
  x.fillStyle = vg(-1200, 900, '#6fc0ff', '#e3f4ff'); x.fillRect(-1200, -1500, 4600, 2500); ell(1850, 200, 110, 110, '#fff3a0', 0);
  [[300, 260], [1300, 180]].forEach(([cx, cy]) => { ell(cx, cy, 120, 50, '#fff', 0); ell(cx + 90, cy - 20, 90, 50, '#fff', 0); });
  for (let r = 0; r < 4; r++) { const y0 = 620 + r * 210; bricks(-1200, y0, 4600, 210, r % 2 ? '#e8d6b0' : '#e0c99c', 'rgba(140,100,60,.3)', 120, 52);
    for (let k = 0; k < 20; k++) { const fx = -300 + k * 150 + (r % 2) * 75; if (fx > 330 && fx < 870 && r >= 1) continue; fan(fx, y0 + 70, 0.95, r * 7 + k, t, cheer); } }
  can(1530 + 75, 1100, 0.6);                                                                       // a fan with a Ciao Energy
  [[-600, '#d6332b'], [180, '#2c4fa8'], [1020, '#d6332b'], [2300, '#2c4fa8']].forEach(([bx, c]) => { x.fillStyle = OL; x.fillRect(bx - 6, 380, 12, 260); poly([[bx, 390], [bx + 130, 420], [bx, 470]], c, 6); });
  // royal box
  rbox(330, 820, 540, 660, 16, '#7a2a3a', 8); poly([[300, 840], [600, 640], [900, 840]], '#d6332b', 8); [380, 480, 580, 680, 780].forEach(sx => ell(sx + 20, 845, 50, 30, '#f5c542', 5));
  rbox(470, 1080, 260, 400, 40, '#f5c542', 8);
  cast('director', KX, 1600, 0.72, t, { ...KING, mood: window._kmood || 'smug', look: 1, blink: t > 0.6 }); crown(KX, 1085, 0.55);
  rbox(330, 1400, 540, 100, 10, '#8a2f3a', 8); txt('♛', 600, 1430, 80, '#f5c542', { stroke: false });
  // arena floor
  x.fillStyle = '#ecd29a'; x.fillRect(-1200, 1460, 4600, 3000); x.fillStyle = 'rgba(180,140,90,.35)'; for (let i = 0; i < 80; i++) ell(-600 + (i * 131) % 3600, 1500 + (i * 71) % 380, 30, 8, 'rgba(180,140,90,.35)', 0);
  bricks(-1200, 1460, 4600, 50, '#b9ad98', 'rgba(70,60,50,.4)', 70, 25);
  // lion pit (cut-away below the floor)
  x.fillStyle = '#a07a4a'; x.fillRect(1050, GY, 1500, 520); bricks(1050, GY, 1500, 520, '#b08a5a', 'rgba(70,50,30,.35)', 90, 44);
  x.fillStyle = 'rgba(60,35,15,.25)'; x.fillRect(1050, GY, 1500, 520); x.fillStyle = '#c9a46a'; x.fillRect(1050, 2270, 1500, 150);
  x.strokeStyle = OL; x.lineWidth = 10; x.strokeRect(1050, GY, 1500, 520);
  lion(1300, 2300, 0.75, t, 0, roar); lion(1880, 2300, 0.85, t, 1.7, roar); lion(2330, 2300, 0.7, t, 3.1, roar);
  // plank + trapdoor
  rbox(1380, GY - 10, 560, 50, 8, '#8a5a32', 7); x.fillStyle = OL; x.fillRect(1400, GY + 40, 18, 160); rbox(1560, GY - 8, 180, 46, 4, '#a56a3a', 5);
  x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(1650, GY - 8); x.lineTo(1650, GY + 38); x.stroke(); ell(1565, GY + 15, 8, 8, '#6b7482', 3);
  // guards
  cast('guard', 250, GY + 10, 0.72, t, { mood: 'neutral', look: 1 }); cast('guard', 950, GY + 10, 0.72, t, { mood: 'neutral', look: 1 });
}
function timer(n, px, py, p, pulse = 0) { if (p <= 0) return; x.save(); resetCam(); x.translate(px, py); const s = (0.85 + 0.15 * p) * (1 + 0.18 * pulse); x.scale(s, s);
  ell(0, 0, 125, 125, '#fbf3e4', 10); x.strokeStyle = C.red; x.lineWidth = 16; x.beginPath(); x.arc(0, 0, 100, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (n / 10)); x.stroke();
  txt(String(n), 0, 10, 140, C.red, { stroke: false }); rbox(-26, -150, 52, 30, 8, OL, 0); x.restore(); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['1 SEULE PHRASE', OL, 54], ['VRAIE → CACHOT À VIE', '#2c4fa8', 46], ['FAUSSE → LES LIONS', C.red, 46]].forEach(([s, c, z], i) => txt(s, w / 2, 70 + i * 110, z, c, { stroke: false })); }
function kingFace(t) { return (w, h) => { x.fillStyle = '#f6e3c0'; x.fillRect(0, 0, w, h); x.save(); x.translate(w / 2, h + 420); x.scale(1.05, 1.05);
  cast('director', 0, 0, 1, t, { ...KING, white: true, mood: 'shock', look: 0, blink: false, sweat: true }); x.restore(); crown(w / 2, 70, 0.6); }; }
function draw(t) {
  const id = curId(t), tTr = WF('s1b', /trappe/i), tFos = WF('s2', /fosse/i), tFa = WF('s2', /fausse/i), tSouf = WF('s3', /souffle/i),
    t3 = WF('s3', /trois/i), t2 = WF('s3', /deux/i), t1 = WF('s3', /^un/i), tBl = WF('s4', /blanc/i), tLib = WF('s5', /libérer/i);
  const XC = 1800;   // camera x for every 47 shot (47 on the left third), never moves back left after the ◀◀
  const K = [[0, 0, XC, 1550, 1.5], [B.ff.end - 0.1, 1.0, KX, 1300, 1.6], [S('s1') + 1.4, 1.0, 1000, 1500, 0.62], [S('s1') + 2.6, 1.3, 1700, 1600, 1.4],
    [tTr - 0.2, 1.0, 1700, 1680, 1.3], [S('s2'), 1.0, XC, 1650, 1.4], [tFa - 0.1, 1.2, XC, 1660, 1.5], [S('s2b'), 1.0, XC, 1580, 1.55],
    [tSouf, 1.2, XC, 1500, 1.45], [t3 - 0.3, 1.0, XC, 1550, 1.65], [S('s4'), 1.0, XC, 1560, 1.6], [S('s5'), 1.0, XC, 1500, 1.3], [S('q'), 1.2, XC, 1550, 1.5]];
  const roar = (id === 's2' && t > tFos - 0.2) || (id === 's1b' && t > WF('s1b', /lions/i));
  window._kmood = id === 's4' && t >= tBl ? 'shock' : id === 's5' ? 'angry' : 'smug';
  camPath(t, K, roar && id === 's2' ? 5 : 0);
  const cheer = id === 's5', m47 = id === 's5' || id === 'q' && false ? 'smug' : id === 's3' ? 'worried' : id === 's4' ? 'smug' : id === 'ff' || id === 'q' || id === 's1b' || id === 's2' ? 'worried' : 'neutral';
  arena(t, cheer, roar);
  p47(PX, GY - 8, 0.8, t, { mood: m47, look: id === 's1' || id === 's2b' ? -1 : 0, sweat: id === 'ff' || id === 's3' || id === 'q', blink: t > 0.6 });
  resetCam();
  hookCard(t, [['UNE PHRASE POUR SURVIVRE', 84], ['10 SECONDES', 110, C.red]], B.ff.end + 0.1);
  if (id === 'ff') { const k = Math.floor(t / 0.8); timer(Math.max(7, 10 - k), 880, 820, 1, Math.pow(1 - (t % 0.8) / 0.8, 4)); if (t >= B.ff.end) rewindFx(t, B.ff.next); }
  if (id === 'q') timer(10, 880, 820, P(t, S('q')), 0);
  if (id === 's1') banner("L'ARÈNE DU ROI", 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1b' && t >= tTr) pill('⚠ TRAPPE', 780, 1120, P(t, tTr, 0.3), C.red);
  if (id === 's2') polaroid(780, 620, 500, 380, P(t, S('s2') + 0.1, 0.3), rules, 'LES RÈGLES', 0.03);
  if (id === 's2' && t >= tFos) onoma('ROAAAR !', 760, 1560, P(t, tFos, 0.2), 150);
  if (id === 's2b') polaroid(780, 620, 480, 300, P(t, S('s2b') + 0.1, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('LE ROI TIENT', w / 2, 80, 48, OL, { stroke: false }); txt('TOUJOURS PAROLE', w / 2, 160, 56, C.red, { stroke: false }); }, 'LA LOI', 0.03);
  if (id === 's3' && t >= t3) { const n = t >= t1 ? 1 : t >= t2 ? 2 : 3, tn = n === 1 ? t1 : n === 2 ? t2 : t3; timer(n, 880, 820, 1, Math.pow(1 - clamp((t - tn) / 0.5), 3)); }
  if (id === 's4') speech('…', 560, 420, P(t, S('s4') + 0.1, 0.25), 90);
  if (id === 's4' && t >= tBl) polaroid(800, 640, 400, 460, P(t, tBl, 0.25), kingFace(t), 'LE ROI', 0.04);
  if (id === 's5' && t >= tLib) stamp('LIBÉRÉ', P(t, tLib, 0.3), 520);
  if (id === 'q') { paperCard([["QU'A-T-IL DIT ?", 90, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]], 540, 250, P(t, S('q') + 0.1), { w: 760 });   // own ending: CTA low so it never covers 47's beanie
    if (t > S('q') + 1.2) pill(window.CTA, 540, 1600, P(t, S('q') + 1.2), C.red); }
}
