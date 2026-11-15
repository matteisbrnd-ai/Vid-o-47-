// Le fleuve — one side-view set: 47's bank (left), the river, the Baron's vault + guards (right). Sight lines show the « visor » trick.
window.LOOK = 'gala';
const GY = 1950, BANK_L = 1100, BANK_R = 2100, EYE = GY - 640;     // river between BANK_L and BANK_R (1000 px ≈ 25 m)
function world(t) { x.fillStyle = vg(-1500, 1500, '#7cc6ff', '#e6f5ff'); x.fillRect(-1600, -1500, 5600, 4500); cloud(300, 500, 1.5); cloud(2600, 420, 1.3);
  x.fillStyle = '#9ccf6a'; x.fillRect(-1600, 1720, BANK_L + 1600, 3000); x.fillStyle = '#86b95a'; x.fillRect(BANK_R, 1720, 3000, 3000);
  pine(-400, 1740, 560); pine(200, 1740, 480); pine(3300, 1740, 520);
  const g = x.createLinearGradient(0, 1720, 0, 2400); g.addColorStop(0, '#6ab8f0'); g.addColorStop(1, '#2a6fb5'); x.fillStyle = g; x.fillRect(BANK_L, 1720, BANK_R - BANK_L, 1300);
  x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 6; for (let i = 0; i < 9; i++) { const wx = BANK_L + 60 + ((i * 113 + t * 60) % (BANK_R - BANK_L - 120)); x.beginPath(); x.moveTo(wx, GY + 20 + (i % 3) * 40); x.quadraticCurveTo(wx + 25, GY + 8 + (i % 3) * 40, wx + 50, GY + 20 + (i % 3) * 40); x.stroke(); }
  x.fillStyle = '#7a5a3a'; x.fillRect(BANK_L - 24, 1720, 24, 1300); x.fillRect(BANK_R, 1720, 24, 1300);
  rbox(2350, 1150, 700, 620, 12, '#3a3d44', 9); rbox(2480, 1300, 440, 380, 20, '#8a8f99', 8); ell(2700, 1490, 90, 90, '#c9ced6', 8); x.strokeStyle = OL; x.lineWidth = 10; for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + t * 0.3; x.beginPath(); x.moveTo(2700, 1490); x.lineTo(2700 + Math.cos(a) * 80, 1490 + Math.sin(a) * 80); x.stroke(); }
  rrc(2700, 1090, 520, 100, 14, '#1b1b1f', 7); txt('COFFRE DU BARON', 2700, 1094, 52, '#f5c542', { stroke: false }); }
function grapnel(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); x.strokeStyle = '#8a8f99'; x.lineWidth = 14; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -90); x.stroke(); [-1, 1].forEach(d => { x.beginPath(); x.arc(d * 40, 0, 40, d > 0 ? Math.PI : 0, d > 0 ? Math.PI * 1.6 : -Math.PI * 0.6, d > 0); x.stroke(); });
  ell(0, -100, 16, 16, '#8a8f99', 5); x.strokeStyle = '#c9a06a'; x.lineWidth = 8; x.beginPath(); x.moveTo(0, -100); x.quadraticCurveTo(-120, -60, -160, 40); x.stroke(); x.restore(); }
function sight(x0, y0, x1, y1, col, p) { if (p <= 0) return; x.save(); x.setLineDash([26, 18]); x.strokeStyle = col; x.lineWidth = 10; x.beginPath(); x.moveTo(x0, y0); x.lineTo(lerp(x0, x1, clamp(p)), lerp(y0, y1, clamp(p))); x.stroke(); x.restore(); if (p >= 1) ell(x1, y1, 22, 22, col, 6); }
function draw(t) {
  const id = curId(t), tGrap = WF('s1', /grappin/i), tEau = WF('s2', /eau/i), tGar = WF('s2', /gardes/i), tM = WF('s3', /mètre/i), tPo = WF('s3', /pont/i), tBa = WF('s3', /bateau/i),
    tVis = WF('sol1', /visière/i), tRet = WF('sol2', /retourne/i), tPas = WF('sol3', /pas/i), tSuf = WF('sol3', /suffit/i);
  const P47 = BANK_L - 60, facing = (id === 'sol2' && t >= tRet) || id === 'sol3' || id === 'end' ? -1 : 1;
  const K = [[0, 0, 1250, 1500, 1.15], [B.ff.end - 0.1, 1.0, 1550, 1450, 0.62], [S('s1'), 1.2, 2350, 1400, 0.95], [tGrap, 0.8, 900, 1550, 1.4], [S('s2'), 1.0, 1700, 1600, 0.85],
    [S('s3'), 0.8, 1000, 1550, 1.25], [S('q'), 0.8, 1050, 1500, 1.5], [S('c1'), 1.0, 1550, 1450, 0.6], [S('sol1'), 0.8, 1300, 1450, 0.85], [S('sol2'), 0.8, 800, 1450, 0.85],
    [S('sol3'), 0.8, 700, 1500, 0.8], [S('end'), 1.0, 1550, 1450, 0.6]];
  camPath(t, K);
  world(t);
  cast('guard', 2250, GY - 30, 0.7, t, { mood: id === 's2' && t >= tGar ? 'angry' : 'neutral', look: -1, blink: t > 0.6 }); cast('guard', 3150, GY - 30, 0.7, t, { mood: 'neutral', look: -1, blink: t > 0.6 });
  // steps (sol3): footprints from P47 back to the mark
  const mark = P47 - (BANK_R - P47) * 0 - (BANK_R - P47);
  if (id === 'sol3' || id === 'end') { const n = 12, k = id === 'end' ? n : Math.floor(n * clamp((t - tPas) / 1.6)); for (let i = 0; i < k; i++) { const fx = P47 - (i + 1) * (P47 - mark) / n; ell(fx, GY + 8, 22, 10, '#5a7a3a', 0); } }
  const walkX = id === 'sol3' ? lerp(P47, mark, eIO(clamp((t - tPas) / 1.6))) : id === 'end' ? mark : P47;
  x.save();
  p47(walkX, GY, 0.8, t, { mood: id === 'q' || id === 's3' ? 'worried' : 'smug', look: facing, blink: t > 0.6, armUp: id === 'ff' || id === 'sol1' || id === 'sol2' || (id === 'sol3' && t < tPas), walk: id === 'sol3' && t > tPas && t < tPas + 1.6 ? t * 3 : 0 }); x.restore();
  if (id === 'ff') { const a = t * 9; x.strokeStyle = '#c9a06a'; x.lineWidth = 8; x.beginPath(); x.moveTo(P47 + 70, GY - 520); x.lineTo(P47 + 70 + Math.cos(a) * 220, GY - 600 + Math.sin(a) * 90); x.stroke(); x.save(); x.translate(P47 + 70 + Math.cos(a) * 220, GY - 600 + Math.sin(a) * 90); x.rotate(a); grapnel(0, 0, 0.6); x.restore(); }
  else if (id !== 'sol3' && id !== 'end') grapnel(P47 - 140, GY - 10, 0.9);
  if (id === 'sol1') sight(P47 + 40, EYE, BANK_R, GY - 40, C.red, seg(t, tVis, tVis + 0.6));
  if (id === 'sol2') { sight(P47 + 40, EYE, BANK_R, GY - 40, 'rgba(208,42,42,.35)', 1); if (t >= tRet) sight(P47 - 40, EYE, mark, GY - 10, '#2a8a3a', seg(t, tRet + 0.4, tRet + 1.0)); }
  if (id === 'sol3' || id === 'end') { sight(P47 + 40, EYE, BANK_R, GY - 40, 'rgba(208,42,42,.35)', 1); sight(P47 - 40, EYE, mark, GY - 10, 'rgba(42,138,58,.5)', 1); }
  if (id === 's2' && t >= tEau) { const k = seg(t, tEau - 0.6, tEau); x.save(); x.translate(lerp(P47, 1650, k), lerp(GY - 300, GY - 10, k * k) - Math.sin(k * Math.PI) * 300); grapnel(0, 0, 0.6); x.restore(); if (t >= tEau) onoma('PLOUF !', 1650, 1700, P(t, tEau, 0.2), '#2a6fb5'); }
  resetCam();
  hookCard(t, [['MESURER LE FLEUVE…', 82], ['SANS OUTIL ?!', 96, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t >= tGrap) pill('🪝 CORDE : 30 M MAX', 540, 380, P(t, tGrap), C.orange);
  if (id === 's3') [[tM, 'MÈTRE ✗'], [tPo, 'PONT ✗'], [tBa, 'BATEAU ✗']].forEach(([tt, s], i) => { if (t >= tt) pill(s, 540, 330 + i * 120, P(t, tt), C.red); });
  germanCards(t, [['COMMENT IL MESURE', 74], ['LE FLEUVE ?', 100, C.red]]);
  if (id === 'sol1' && t >= tVis) pill('✋ MAIN EN VISIÈRE → BORD D\'EN FACE', 540, 360, P(t, tVis), C.red);
  if (id === 'sol2' && t >= tRet) pill('↩️ IL SE RETOURNE, MÊME ANGLE', 540, 360, P(t, tRet), '#2a8a3a');
  if (id === 'sol3' && t >= tPas) { const steps = Math.min(25, Math.floor(25 * clamp((t - tPas) / 1.6))); pill('👣 ' + steps + ' M', 540, 360, 1, '#2a8a3a'); if (t >= tSuf) pill('25 M < 30 M ✅ LA CORDE SUFFIT', 540, 480, P(t, tSuf), '#2a8a3a');
    if (t >= tPas + 1.7) polaroid(560, 820, 560, 360, P(t, tPas + 1.7, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const cx = w / 2, gy = h * 0.78; x.fillStyle = '#4aa3e8'; x.fillRect(cx + 20, gy, w / 2 - 40, 14); x.fillStyle = '#9ccf6a'; x.fillRect(20, gy, cx, 14);
      rbox(cx - 8, gy - 90, 16, 90, 6, OL, 0); ell(cx, gy - 104, 18, 18, C.orange, 4); x.setLineDash([10, 8]); x.lineWidth = 5; x.strokeStyle = C.red; x.beginPath(); x.moveTo(cx, gy - 104); x.lineTo(w - 30, gy); x.stroke(); x.strokeStyle = '#2a8a3a'; x.beginPath(); x.moveTo(cx, gy - 104); x.lineTo(30, gy); x.stroke(); x.setLineDash([]);
      txt('= MÊME DISTANCE', cx, 48, 46, OL, { stroke: false }); }, 'MÊME ANGLE', -0.03); }
}
