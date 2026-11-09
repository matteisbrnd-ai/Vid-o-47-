// Les scooters — Galagade style: ONE long sunny seaside road (garage at left → start line → sea road → lighthouse at right).
// Both scooters are the SAME red model on purpose (the hook / race must not show who rides whose scooter = the answer).
window.CTA = 'TAGUE TON POTE LE PLUS LENT'; window.LOOK = 'gala';
const GY = 1900, SC = '#d9443a', FIN = 3650;
function mixc(a, b, k) { const p = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16)), A = p(a), Bc = p(b); return 'rgb(' + A.map((v, i) => Math.round(lerp(v, Bc[i], k))).join(',') + ')'; }
function scooter(px, py, t, o = {}) { x.save(); x.translate(px, py);
  if (o.fast) { x.strokeStyle = 'rgba(255,255,255,.85)'; x.lineWidth = 12; x.lineCap = 'round'; [-420, -300, -180].forEach((yy, i) => { const d = (t * 2400 + i * 170) % 300; x.beginPath(); x.moveTo(-380 - d, yy); x.lineTo(-620 - d, yy); x.stroke(); }); }
  if (o.rider) { const ro = { look: 1, blink: t > 0.6, ...o.ro }; if (o.rider === '47') p47(-60, -110, 0.8, t, ro); else cast(o.rider, -60, -110, 0.8, t, ro); }
  const sp = t * (o.fast ? 30 : o.slow ? 0.6 : 0);
  [[-200, -75], [210, -75]].forEach(([wx, wy]) => { ell(wx, wy, 78, 78, '#26262b', 7); ell(wx, wy, 36, 36, '#c9ced6', 6); x.strokeStyle = OL; x.lineWidth = 6; for (let k = 0; k < 3; k++) { const a = sp + k * 2.09; x.beginPath(); x.moveTo(wx, wy); x.lineTo(wx + Math.cos(a) * 34, wy + Math.sin(a) * 34); x.stroke(); } });
  rbox(-330, -310, 300, 210, 100, SC, 8); rbox(-300, -350, 250, 60, 30, '#3a2a22', 7);                 // rear body + seat
  rbox(-70, -165, 230, 55, 22, SC, 7); poly([[110, -120], [215, -120], [250, -390], [170, -440], [120, -400]], SC, 8);  // floor + front shield
  ell(215, -150, 92, 42, SC, 7); x.strokeStyle = OL; x.lineWidth = 14; x.beginPath(); x.moveTo(190, -430); x.lineTo(120, -480); x.stroke(); ell(110, -485, 26, 18, '#26262b', 5);
  ell(245, -395, 30, 26, '#fff7c0', 6); rbox(-360, -260, 40, 50, 10, '#ff8a3a', 5);
  if (o.dust) [[-260, -300, 190], [-60, -420, 230], [140, -330, 200], [-380, -150, 150], [80, -150, 170]].forEach(([dx, dy, r], i) => ell(dx + Math.sin(t * 9 + i) * 18, dy + Math.cos(t * 7 + i) * 14, r, r * 0.8, '#efe3cf', 6));
  x.restore(); }
function snail(px, py, t) { const k = Math.sin(t * 3) * 6; rbox(px - 90, py - 40, 190 + k, 40, 20, '#c9e08a', 6); ell(px - 20, py - 95, 70, 66, '#c98a4a', 7); x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); for (let a = 0; a < 12; a += 0.3) { const r = 50 - a * 4; x.lineTo(px - 20 + Math.cos(a) * r, py - 95 + Math.sin(a) * r); } x.stroke();
  x.beginPath(); x.moveTo(px + 90 + k, py - 30); x.lineTo(px + 110 + k, py - 90); x.moveTo(px + 70 + k, py - 30); x.lineTo(px + 80 + k, py - 95); x.stroke(); ell(px + 110 + k, py - 95, 10, 10, OL, 0); ell(px + 80 + k, py - 100, 10, 10, OL, 0); }
function can(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-90, -170, 180, 340, 30, '#2fd0c0', 8); rbox(-90, -170, 180, 40, 16, '#c9ced6', 6); x.save(); x.rotate(-1.5708); txt('CIAO', 0, 4, 70, '#fff', { stroke: true }); x.restore(); x.restore(); }
function palm(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); x.strokeStyle = OL; x.lineWidth = 50; x.beginPath(); x.moveTo(0, 0); x.quadraticCurveTo(30, -300, -20, -600); x.stroke(); x.strokeStyle = '#9a6a3e'; x.lineWidth = 36; x.stroke();
  [-2.6, -2.0, -1.2, -0.5, 0.1].forEach(a => { x.save(); x.translate(-20, -600); x.rotate(a); ell(140, 0, 160, 40, '#4f9e48', 6); x.restore(); }); x.restore(); }
function lighthouse(px, py) { poly([[px - 150, py], [px + 150, py], [px + 90, py - 900], [px - 90, py - 900]], '#f4f2ec', 9);
  x.save(); x.beginPath(); x.moveTo(px - 150, py); x.lineTo(px + 150, py); x.lineTo(px + 90, py - 900); x.lineTo(px - 90, py - 900); x.closePath(); x.clip(); x.fillStyle = '#d6332b'; [0, 2, 4].forEach(i => x.fillRect(px - 200, py - 150 - i * 150, 400, 150)); x.restore();
  x.strokeStyle = OL; x.lineWidth = 9; x.beginPath(); x.moveTo(px - 150, py); x.lineTo(px - 90, py - 900); x.moveTo(px + 150, py); x.lineTo(px + 90, py - 900); x.stroke();
  rbox(px - 120, py - 950, 240, 60, 10, OL, 0); rbox(px - 80, py - 1080, 160, 130, 20, '#fff3a0', 8); poly([[px - 110, py - 1080], [px + 110, py - 1080], [px, py - 1200]], '#d6332b', 8); rbox(px - 40, py - 160, 80, 160, 40, '#6b4428', 6); }
function garage(t) { bricks(80, 1120, 900, 640, '#e6cfa6', 'rgba(140,100,60,.35)', 100, 50); x.strokeStyle = OL; x.lineWidth = 9; x.strokeRect(80, 1120, 900, 640); poly([[50, 1130], [530, 950], [1010, 1130]], '#b05a4a', 9);
  rbox(200, 1330, 460, 430, 10, '#9aa4b2', 8); x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 6; for (let i = 1; i < 8; i++) { x.beginPath(); x.moveTo(205, 1330 + i * 54); x.lineTo(655, 1330 + i * 54); x.stroke(); }
  rbox(250, 1160, 560, 120, 16, '#2f5fb3', 8); txt('GARAGE DU BARON', 530, 1222, 74, '#fff', { stroke: false }); rbox(740, 1400, 160, 120, 10, '#bfe3ff', 6);
  [[60, 1760], [60, 1700], [60, 1640]].forEach(([tx, ty]) => ell(tx, ty, 70, 34, '#26262b', 6)); rbox(1010, 1560, 90, 200, 14, '#d6332b', 7); ell(1055, 1610, 28, 28, '#fff', 5); }
function world(t) { const kS = seg(t, S('s3'), S('s4') - 0.3), sky1 = mixc('#6fc0ff', '#ff8e5a', kS), sky2 = mixc('#e3f4ff', '#ffd59a', kS);
  x.fillStyle = vg(-800, 1500, sky1, sky2); x.fillRect(-1500, -1500, 7600, 3200);
  ell(2900, lerp(500, 1250, kS), 130, 130, mixc('#fff3a0', '#ff6a3a', kS), 0);
  [[600, 450], [1700, 350], [3300, 420]].forEach(([cx, cy], i) => { const ox = (t * 20 + i * 300) % 400; [[-90, 0, 90], [0, -40, 110], [100, 0, 90]].forEach(([a, b, r]) => ell(cx + ox + a, cy + b, r, r * 0.7, '#ffffff', 0)); });
  x.fillStyle = mixc('#3fa4d8', '#e07a6a', kS * 0.6); x.fillRect(1500, 1400, 4600, 400); x.strokeStyle = 'rgba(255,255,255,.6)'; x.lineWidth = 6; for (let i = 0; i < 40; i++) { const wx = 1550 + (i * 233) % 4500, wy = 1440 + (i * 71) % 300; x.beginPath(); x.moveTo(wx + Math.sin(t + i) * 20, wy); x.quadraticCurveTo(wx + 30, wy - 16, wx + 60, wy); x.stroke(); }
  x.fillStyle = '#9fd17a'; x.fillRect(-1500, 1400, 3000, 400); poly([[-1500, 1400], [200, 1150], [900, 1300], [1500, 1400]], '#86c060', 0);
  x.fillStyle = '#f2dca8'; x.fillRect(-1500, 1720, 7600, 80);
  garage(t); palm(1500, 1760, 1.1); palm(2600, 1760, 1.3); palm(3250, 1760, 1.0);
  [[3900, 1700, 220], [4200, 1720, 180], [3500, 1740, 120]].forEach(([rx, ry, r]) => ell(rx, ry, r, r * 0.55, '#8a8f99', 7)); lighthouse(4050, 1640);
  x.fillStyle = '#7d8088'; x.fillRect(-1500, 1790, 7600, 500); x.fillStyle = '#f4f2ec'; for (let i = 0; i < 40; i++) x.fillRect(-1400 + i * 200, 1950, 110, 18);
  x.fillStyle = '#f2dca8'; x.fillRect(-1500, 2190, 7600, 600);
  // start arch + finish flag
  x.strokeStyle = OL; x.lineWidth = 22; x.beginPath(); x.moveTo(1180, 1800); x.lineTo(1180, 1180); x.moveTo(1780, 1800); x.lineTo(1780, 1180); x.stroke(); rbox(1150, 1120, 660, 120, 12, '#f4f2ec', 8); txt('DÉPART', 1480, 1182, 90, C.red, { stroke: false });
  x.strokeStyle = OL; x.lineWidth = 16; x.beginPath(); x.moveTo(FIN + 150, 1800); x.lineTo(FIN + 150, 1300); x.stroke(); for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) { x.fillStyle = (i + j) % 2 ? '#fff' : OL; x.fillRect(FIN + 158 + i * 50, 1300 + j * 50 + Math.sin(t * 4 + i) * 8, 50, 50); }
  [[2050, 600], [2250, 650], [3100, 560]].forEach(([gx, gy], i) => { const f = Math.sin(t * 6 + i) * 20; x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(gx - 40, gy + f); x.quadraticCurveTo(gx - 20, gy - 20, gx, gy); x.quadraticCurveTo(gx + 20, gy - 20, gx + 40, gy + f); x.stroke(); }); }
function rules(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['COURSE JUSQU\'AU', 50, OL], ['PHARE 🏁', 50, OL], ['LE DERNIER', 62, C.red], ['SCOOTER', 62, C.red], ['GAGNE TOUT', 62, C.red]].forEach(([s, sz, c], i) => txt(s, w / 2, 60 + i * 72, sz, c, { stroke: false })); }
function draw(t) {
  const id = curId(t), tFon = WF('s4', /foncent/i), tDer = WF('s2', /dernier/i), tMots = WF('s4', /mots/i), tRico = WF('s1', /Rico/i);
  const K = [[0, 0, FIN + 20, 1460, 1.6], [B.ff.end - 0.1, 1.2, 700, 1450, 1.0], [S('s1') + 0.4, 2.0, 900, 1420, 0.72], [tRico - 0.3, 1.2, 1150, 1500, 1.3],
    [S('s2'), 1.4, 1480, 1450, 0.85], [tDer - 0.2, 1.0, 1400, 1480, 1.25], [S('s3'), 3.5, 1700, 1480, 1.05], [S('s3b'), 3.2, 1950, 1350, 0.75],
    [S('s4') - 0.1, 1.0, 1900, 1480, 1.5], [tFon, 2.6, 3500, 1400, 0.72], [S('s5'), 1.2, 3950, 1450, 1.35], [S('q'), 1.3, FIN + 20, 1460, 1.6]];
  camPath(t, K, id === 's4' && t > tFon && t < tFon + 2.4 ? 5 : 0);
  world(t);
  const race = id === 's4' && t >= tFon, kR = eIO(seg(t, tFon, tFon + 2.6)), crawl = seg(t, S('s3'), S('s4'));
  const end = id === 's5' || id === 'q', baronAtEnd = id === 's4' || end;
  cast('boss', baronAtEnd ? 4060 : 1000, GY, 0.68, t, { mood: id === 's5' || id === 'q' ? 'smug' : id === 's1' ? 'smug' : 'neutral', look: baronAtEnd ? -1 : 1, armUp: id === 's2' && t > tDer });
  if (!baronAtEnd) { cast('guard', 2050, GY - 20, 0.6, t, { mood: 'neutral', look: -1 }); cast('maid', 820, GY - 30, 0.58, t, { mood: 'smile', look: 1 }); }
  else cast('guard', 4350, GY - 20, 0.6, t, { mood: 'shock', look: -1 });
  let xr, x4;
  if (id === 'ff') { x4 = FIN - 40 + t * 40; xr = FIN - 650 + t * 60; }
  else if (end) { x4 = FIN - 40; xr = FIN - 600; }
  else if (race) { xr = lerp(1850, FIN - 600, kR); x4 = lerp(2000, FIN - 40, kR); }
  else if (id === 's3' || id === 's3b' || id === 's4') { xr = 1250 + crawl * 600; x4 = 1400 + crawl * 600; }
  else { xr = 1250; x4 = 1400; }
  const fast = id === 'ff' || race, slow = id === 's3' || id === 's3b';
  const m4 = id === 'ff' ? 'angry' : end ? 'smug' : id === 's4' && t >= tMots ? 'smug' : slow ? 'neutral' : id === 's2' && t > tDer ? 'shock' : 'neutral';
  const mR = id === 's4' && t >= tMots && !race ? 'shock' : id === 'ff' ? 'angry' : end ? 'smile' : slow ? 'smug' : 'neutral';
  scooter(xr, GY - 40, t, { rider: 'rico', ro: { mood: mR, look: id === 's4' && !race ? 1 : 1 }, fast, slow, dust: race });
  scooter(x4, GY + 70, t, { rider: '47', ro: { mood: m4, look: id === 's4' && !race ? -1 : 1, sweat: id === 'ff' }, fast, slow, dust: race });
  if (slow) snail(x4 + 380 + crawl * 160, GY + 170, t);
  if (id === 's3b') { const p = P(t, WF('s3b', /Rico/i), 0.3); if (p > 0) can(xr + 230, GY - 560, 0.75 * p); }
  resetCam();
  hookCard(t, [['LE PLUS LENT GAGNAIT…', 80], ['ET IL A FONCÉ À FOND', 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner("L'HÉRITAGE DU BARON", 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tDer - 0.3) polaroid(560, 640, 560, 440, P(t, tDer - 0.3, 0.3), rules, 'LES RÈGLES', 0.03);
  if (id === 's3') pill('🐌 AU PAS…', 540, 360, P(t, S('s3') + 0.3), C.brown);
  if (id === 's3b') banner('6 HEURES PLUS TARD', 540, 330, P(t, S('s3b') + 0.2), '#c0603a');
  if (id === 's4' && t >= tMots && t < tFon) speech('PSST… 🤫', 600, 560, P(t, tMots, 0.25), 70);
  if (race) onoma('VROUUUM !', 560, 520, P(t, tFon, 0.2), 150);
  if (id === 's5') stamp('RÈGLE RESPECTÉE', P(t, WF('s5', /règle/i), 0.3), 430, C.green);
  endCards(t, [["QU'A-T-IL DIT ?", 86, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
