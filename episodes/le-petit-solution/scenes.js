// Le petit — one tall building cross-section, the camera rides up and down with the elevator; button panel polaroid.
window.LOOK = 'gala';
const FL = 120, BASE = 3000, flY = f => BASE - f * FL;          // floor f (0..20) -> y of its floor line
const LEON = { hat: 'hair', hairCol: '#c96a2a', body: '#f2c14e', body2: '#d9a531', pants: '#3a4a6a', num: false, glasses: true };
function building(t, rain) { x.fillStyle = vg(-600, 3200, rain ? '#7a8aa0' : '#6fc0ff', rain ? '#b9c3cf' : '#e3f4ff'); x.fillRect(-1500, -800, 5000, 4200);
  [[-500, 1400, 400], [1500, 1700, 450], [-300, 2200, 300], [1700, 2400, 380]].forEach(([bx, by, bw]) => rbox(bx, by, bw, 3200 - by, 6, rain ? '#8a93a8' : '#b9c7e0', 5));
  rbox(80, flY(20) - 160, 920, 20 * FL + 160, 10, '#f4d6a0', 9); rbox(60, flY(20) - 200, 960, 60, 10, '#c9302a', 7);
  for (let f = 0; f < 20; f++) { const y = flY(f + 1); x.fillStyle = 'rgba(120,80,40,.35)'; x.fillRect(80, y, 920, 6); txt(String(f + 1), 120, y + 66, 36, '#7a5232', { stroke: false });
    [[180, '#bfe3ff'], [700, '#bfe3ff'], [840, '#bfe3ff']].forEach(([wx, c]) => rbox(wx, y + 20, 110, 80, 6, (f * 7 + wx) % 3 ? c : '#ffd770', 4)); }
  rbox(380, flY(20), 240, 20 * FL, 6, '#8a8f99', 6);                                   // shaft
  for (let f = 0; f < 21; f++) { x.fillStyle = '#6b707a'; x.fillRect(380, flY(f) - 6, 240, 6); }
  rbox(640, flY(20), 40, 20 * FL, 4, '#c9a06a', 4); for (let f = 0; f < 20; f++) { x.strokeStyle = '#7a5232'; x.lineWidth = 6; x.beginPath(); x.moveTo(640, flY(f)); x.lineTo(680, flY(f + 1)); x.stroke(); }   // stairs
  x.fillStyle = '#7cc46a'; x.fillRect(-1500, BASE, 5000, 900);
  if (rain) { x.strokeStyle = 'rgba(230,240,255,.6)'; x.lineWidth = 4; for (let i = 0; i < 260; i++) { const rx = (i * 137 + t * 700) % 2600 - 800, ry = (i * 251 + t * 2400) % 4000 - 600; x.beginPath(); x.moveTo(rx, ry); x.lineTo(rx - 14, ry + 50); x.stroke(); } } }
function cabin(cy, t, leon) { rbox(390, cy - 230, 220, 230, 6, '#2fa38e', 7); rbox(400, cy - 220, 200, 210, 4, '#3fc0a8', 0); leon(); }
function panel(w, h, reach) { x.fillStyle = '#2fa38e'; x.fillRect(0, 0, w, h); rbox(w / 2 - 110, 30, 220, h - 60, 16, '#c9ced6', 6);
  for (let i = 0; i < 20; i++) { const n = 20 - i, cx = w / 2 - 45 + (i % 2) * 90, cy = 70 + Math.floor(i / 2) * ((h - 140) / 10); ell(cx, cy, 30, 30, n === 10 ? '#ffe08a' : '#f4f2ec', 4); txt(String(n), cx, cy + 3, 26, OL, { stroke: false }); }
  if (reach) { x.strokeStyle = C.red; x.lineWidth = 8; x.beginPath(); x.moveTo(w / 2 - 70, 40); x.lineTo(w / 2 + 70, 40); x.stroke(); } }
function draw(t) {
  const id = curId(t), rain = id === 's3' || id === 'sol3', tMat = WF('s1', /matin/i), tPied = WF('s2', /pied/i), tDir = WF('s3', /direct/i);
  // elevator floor position over time
  let fl = 10; if (id === 's1') fl = t < tMat ? 20 : lerp(20, 0, eIO(seg(t, tMat, B.s1.end))); if (id === 's2') fl = t < tPied ? lerp(0, 10, eIO(seg(t, S('s2'), tPied))) : 10; if (id === 's3') fl = lerp(0, 20, eIO(seg(t, tDir, tDir + 1.6)));
  if (id === 's4' || id === 'q') fl = 10;
  const cy = flY(fl), walk = id === 's2' && t >= tPied, wf = walk ? lerp(10, 16, seg(t, tPied, B.s2.end + 0.2)) : 0;
  const K = [[0, 0, 500, flY(10) - 200, 2.2], [B.ff.end - 0.1, 1.0, 500, flY(20) - 120, 1.6], [S('s1') + 0.6, 1.4, 540, 1900, 0.5], [tMat, 0.1, 540, 1900, 0.5],
    [S('s2'), 1.2, 500, flY(5) - 200, 1.3], [tPied, 1.0, 640, flY(13) - 100, 1.4], [S('s3'), 1.4, 540, 1900, 0.5], [S('s4'), 1.2, 500, flY(10) - 200, 2.2], [S('q'), 0.1, 500, flY(10) - 200, 2.2]];
  K.push([S('c1'), 1.2, 540, 1900, 0.5], [S('sol1'), 1.2, 500, flY(10) - 200, 2.2], [S('end'), 1.2, 540, 1900, 0.5]);
  camPath(t, K); if ((id === 's1' && t >= tMat) || (id === 's3' && t >= tDir)) cam(500, cy - 140, 2.0, 0, t);   // ride with the cabin
  building(t, rain);
  const leonMood = id === 'ff' || id === 'q' || id === 's4' ? 'worried' : id === 's3' ? 'smile' : 'neutral';
  cabin(cy, t, () => { if (!walk) cast('inspector', 470, cy - 5, 0.28, t, { ...LEON, mood: leonMood, armUp: id === 'ff' || id === 'q' || id === 's4', look: 1 });
    if (rain && !walk) { x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(500, cy - 160); x.lineTo(590, cy - 200); x.stroke(); } });
  rbox(615, cy - 170, 20, 120, 4, '#c9ced6', 3); ell(625, cy - 160, 6, 6, '#ffe08a', 0);   // button column, the 20 is at the very top
  if (walk) cast('inspector', 660, flY(wf) - 5, 0.28, t, { ...LEON, mood: 'worried', walk: t * 4, look: 1, sweat: true });
  p47(260, flY(0) - 5, 0.28, t, { mood: 'neutral', look: 1 });
  resetCam();
  hookCard(t, [['IL HABITE AU 20ᵉ…', 80], ["ET S'ARRÊTE AU 10ᵉ", 96, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tMat) banner('20ᵉ ÉTAGE', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t < tPied) banner('LE SOIR', 540, 330, P(t, S('s2') + 0.2), C.orange);
  if (id === 's3') banner('JOUR DE PLUIE', 540, 330, P(t, S('s3') + 0.2));
  if (id === 's4') polaroid(560, 700, 420, 600, P(t, S('s4') + 0.2, 0.3), (w, h) => panel(w, h, false), "L'ASCENSEUR", -0.04);
  germanCards(t, [['POURQUOI IL FAIT ÇA ?', 84, C.red]]); solution(t, id);
}


function solution(t, id) { if (!id.startsWith('sol')) return; resetCam();
  polaroid(560, 700, 460, 640, P(t, S('sol1'), 0.3), (w, h) => { panel(w, h, false); const ry = n => 70 + Math.floor((20 - n) / 2) * ((h - 140) / 10);
    x.setLineDash([14, 10]); x.strokeStyle = C.red; x.lineWidth = 8; x.beginPath(); x.moveTo(10, ry(10) - 34); x.lineTo(w - 10, ry(10) - 34); x.stroke(); x.setLineDash([]);
    txt('SA MAIN', w / 2, ry(10) - 56, 34, C.red, { stroke: false });
    if (id !== 'sol1') { ell(w / 2 - 45, ry(10), 36, 36, 'rgba(60,200,90,.35)', 5); }
    ell(w / 2 - 45, ry(20), 36, 36, id === 'sol3' ? 'rgba(60,200,90,.45)' : 'rgba(220,50,40,.35)', 5);
    if (id === 'sol3') { x.strokeStyle = OL; x.lineWidth = 10; x.beginPath(); x.moveTo(w / 2 - 20, ry(10)); x.lineTo(w / 2 - 45, ry(20) + 30); x.stroke(); txt('☂', w / 2 + 40, ry(14), 80, OL, { stroke: false }); } }, id === 'sol3' ? 'AVEC LE PARAPLUIE' : 'TROP PETIT', -0.03); }
