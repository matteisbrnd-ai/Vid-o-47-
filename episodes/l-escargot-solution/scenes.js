// L'escargot — one set: farmyard on top, the stone well in cross-section below; a ruler and a polaroid chart, no solution shown.
window.LOOK = 'gala';
const TOPY = 1500, M = 120, WX = 540;                    // well top at y 1500, 1 m = 120 px, depth 10 m -> bottom at 2700
function snail(px, py, s, t, sleep) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -40, 180, 50, 25, '#e8c88e', 6); x.beginPath(); x.arc(-10, -80, 70, 0, 7); fs('#c96a2a', 7);
  x.strokeStyle = '#7a3a12'; x.lineWidth = 7; x.beginPath(); for (let a = 0; a < 12; a += 0.2) x.lineTo(-10 + Math.cos(a) * a * 5, -80 + Math.sin(a) * a * 5); x.stroke();
  [[60, -110], [85, -105]].forEach(([ax, ay]) => { x.strokeStyle = '#e8c88e'; x.lineWidth = 8; x.beginPath(); x.moveTo(70, -40); x.lineTo(ax, ay); x.stroke(); ell(ax, ay, 10, 10, sleep ? '#e8c88e' : '#fff', 3); if (!sleep) ell(ax + 2, ay, 4, 4, OL, 0); });
  if (sleep) txt('z z', 110, -150, 40, '#9cf', { stroke: false }); x.restore(); }
function well(t, night) { x.fillStyle = vg(-1500, TOPY, night ? '#1b2142' : '#6fc0ff', night ? '#3a4a7a' : '#e3f4ff'); x.fillRect(-1200, -1500, 4600, 3000); if (night) { ell(820, 900, 60, 60, '#fff3a0', 0); x.fillStyle = '#fff'; for (let i = 0; i < 30; i++) x.fillRect((i * 173) % 1500 - 200, (i * 97) % 1100 - 100, 5, 5); }
  rbox(-200, 1050, 360, 400, 8, '#c9302a', 7); poly([[-230, 1060], [-20, 900], [190, 1060]], '#7a1f2a', 7);
  x.fillStyle = night ? '#3c5a3a' : '#7cc46a'; x.fillRect(-1200, TOPY - 60, 4600, 3000);
  bricks(WX - 260, TOPY - 60, 520, 11 * M + 120, '#9a9384', 'rgba(40,30,20,.45)', 70, 40); rbox(WX - 200, TOPY, 400, 10 * M + 40, 6, night ? '#1b1d24' : '#2a2d36', 0);   // shaft
  rbox(WX - 280, TOPY - 140, 560, 90, 14, '#b9b2a2', 8); [WX - 230, WX + 230].forEach(px => rbox(px - 16, TOPY - 420, 32, 300, 6, '#7a5232', 6)); rbox(WX - 250, TOPY - 440, 500, 40, 10, '#7a5232', 6);
  x.fillStyle = '#4a8ad0'; x.fillRect(WX - 200, TOPY + 10 * M, 400, 50);
  for (let m = 0; m <= 10; m++) { const y = TOPY + 10 * M - m * M; x.fillStyle = '#f5c542'; x.fillRect(WX + 210, y - 3, m % 5 ? 30 : 50, 6); if (m % 2 === 0) txt(m + ' m', WX + 300, y + 2, 40, '#f5c542', { stroke: true }); } }
function draw(t) {
  const id = curId(t), tGr = WF('s2', /grimpe/i), tGl = WF('s3', /glisse/i), tEnd = WF('s3', /endort/i);
  const night = (id === 's3' && t >= tEnd) || id === 'ff';
  let h = 0; if (id === 's2') h = 3 * eIO(seg(t, tGr, tGr + 1.5)); if (id === 's3') h = t < tGl ? 3 : 3 - 2 * eIO(seg(t, tGl, tGl + 0.8)); if (id === 'ff') h = 7 + 3 * eIO(seg(t, 0.2, 2.2)) * 0.8; if (id === 's4' || id === 'q' || id === 'c1' || id === 'c2' || id === 'sol1') h = 1; if (id === 'sol2') h = 1 + 6 * seg(t, S('sol2'), B.sol2.end - 0.3); if (id === 'sol3') h = 7 + 3.6 * eIO(seg(t, S('sol3') + 0.3, WF('sol3', /sort/i) + 0.3)); if (id === 'end') h = 10.6;
  const sy = TOPY + 10 * M - h * M;
  const K = [[0, 0, WX, TOPY + 300, 1.5], [B.ff.end - 0.1, 1.2, WX, 1700, 0.62], [S('s1') + 1.6, 1.2, WX, TOPY + 900, 1.2], [S('s2'), 1.0, WX, TOPY + 800, 1.2], [S('s4'), 1.2, WX, 1900, 0.75], [S('q'), 1.0, WX, TOPY + 300, 1.5]];
  K.push([S('c1'), 1.2, WX, 1700, 0.62], [S('sol1'), 1.2, WX, TOPY + 700, 1.0], [S('sol3'), 1.2, WX, TOPY + 300, 1.2], [S('end'), 1.2, WX, 1700, 0.62]);
  camPath(t, K);
  well(t, night);
  p47(WX + 380, TOPY - 40, 0.7, t, { mood: id === 's1' ? 'shock' : id === 's3' ? 'worried' : 'neutral', look: -1, blink: t > 0.6, sweat: id === 's1' });
  snail(WX - 130, sy, 1.0, t, id === 's3' && t >= tEnd);
  resetCam();
  hookCard(t, [['TOUT LE MONDE DIT 10 JOURS…', 64], ["ET C'EST FAUX", 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's2' && t >= tGr) banner('JOUR : +3 m', 540, 330, P(t, tGr + 0.2), C.orange);
  if (id === 's3' && t >= tEnd) banner('NUIT : −2 m', 540, 330, P(t, tEnd + 0.1));
  if (id === 's4') polaroid(560, 660, 460, 520, P(t, S('s4') + 0.2, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('PUITS : 10 m', w / 2, 80, 50, OL, { stroke: false }); txt('JOUR : +3 m', w / 2, 200, 54, '#2a8a3a', { stroke: false }); txt('NUIT : −2 m', w / 2, 300, 54, C.red, { stroke: false }); txt('? JOURS', w / 2, 420, 70, OL, { stroke: false }); }, 'LES RÈGLES', -0.03);
  germanCards(t, [['EN COMBIEN DE JOURS ?', 84, C.red]]); solution(t, id);
}


function solution(t, id) { if (!id.startsWith('sol')) return; resetCam();
  if (id === 'sol1') pill('+3 m −2 m = +1 m PAR JOUR', 540, 330, P(t, S('sol1') + 0.3), C.orange);
  if (id === 'sol2') pill('JOUR ' + Math.max(1, Math.min(7, Math.ceil(seg(t, S('sol2'), B.sol2.end - 0.3) * 7))) + ' → ' + Math.max(1, Math.min(7, Math.ceil(seg(t, S('sol2'), B.sol2.end - 0.3) * 7))) + ' m', 540, 330, 1, '#2457a8');
  if (id === 'sol3') { pill('JOUR 8 : 7 + 3 = 10 m', 540, 330, P(t, S('sol3')), '#2a8a3a'); if (t > WF('sol3', /Réponse/i)) paperCard([['8 JOURS', 120, C.red]], 540, 620, P(t, WF('sol3', /Réponse/i)), { w: 640 }); } }
