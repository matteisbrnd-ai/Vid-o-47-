// L'hôtel — hook card at frame 0, one shot every 2–3 s, ending loops to 47 pushing the car.
window.CTA = 'TAGUE CELUI QUI PERD TOUJOURS';
const TGT = {};
function car(cx, cy, s, t, roll) { x.save(); x.translate(cx, cy); x.scale(s, s);
  rbox(-330, -170, 660, 170, 60, C.red, 9); poly([[-200, -170], [-130, -310], [150, -310], [230, -170]], C.red, 9);
  poly([[-170, -180], [-115, -285], [0, -285], [0, -180]], '#bfe3ff', 6); poly([[20, -180], [20, -285], [135, -285], [195, -180]], '#bfe3ff', 6);
  rrc(300, -110, 40, 40, 10, '#ffe08a', 5); rrc(-310, -110, 30, 40, 8, '#ff8a6a', 5);
  [-200, 200].forEach(wx => { x.save(); x.translate(wx, 0); x.rotate(roll); ell(0, 0, 80, 80, '#24262c', 8); ell(0, 0, 36, 36, '#c9ced6', 6); x.fillStyle = OL; x.fillRect(-4, -36, 8, 72); x.restore(); }); x.restore(); }
function street(t, dx) { sky('#7cc6f5', '#cdeeff', 1400); x.fillStyle = '#9dd27a'; x.fillRect(-1200, 1300, 3500, 120);
  for (let i = -2; i < 6; i++) { const hx = ((i * 420 - dx) % 2520 + 2520) % 2520 - 600; rbox(hx, 760, 340, 560, 10, ['#f4d6a0', '#e9b7a0', '#cfe0f0'][((i % 3) + 3) % 3], 7); rbox(hx + 60, 840, 90, 110, 6, '#bfe3ff', 5); rbox(hx + 190, 840, 90, 110, 6, '#bfe3ff', 5); rbox(hx + 130, 1120, 90, 200, 6, '#8a5a3a', 5); }
  x.fillStyle = '#5a5d66'; x.fillRect(-1200, 1420, 3500, 700); x.fillStyle = '#fff'; for (let i = -3; i < 8; i++) x.fillRect(((i * 300 - dx * 1.4) % 2100 + 2100) % 2100 - 400, 1700, 150, 18); }
function pushShot(t, z, tired, cx = 560, cy = 1300) { cam(cx, cy, z, 0, t); street(t, t * 60); car(330, 1640, 0.85, t, t * 2); p47(740, 1660, 0.85, t, { walk: t * 2.4, mood: tired ? 'worried' : 'smug', sweat: true, look: -1, armUp: true, blink: t > 0.5 }); }
function hotel(t) { sky('#7cc6f5', '#cdeeff', 1400); rbox(60, 260, 960, 1200, 12, '#f2e3c4', 9); rbox(40, 220, 1000, 80, 12, '#c9a24a', 8); txt('HÔTEL', 540, 262, 70, '#7a1f2a', { stroke: false });
  for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) { rbox(130 + k * 220, 360 + r * 210, 160, 150, 8, '#bfe3ff', 6); rbox(120 + k * 220, 500 + r * 210, 180, 18, 4, '#c9a24a', 4); }
  rbox(390, 1180, 300, 280, 10, '#7a1f2a', 8); ell(540, 1180, 150, 60, '#c9a24a', 7); poly([[380, 1460], [700, 1460], [820, 1920], [260, 1920]], '#c0283a', 7);
  x.fillStyle = '#5a5d66'; x.fillRect(-1200, 1460, 3500, 700); poly([[380, 1460], [700, 1460], [820, 1920], [260, 1920]], '#c0283a', 7); }
function billsClose(t, k) { resetCam(); x.fillStyle = vg(0, H, '#f2e3c4', '#d9c4a0'); x.fillRect(0, 0, W, H);
  [['#f4a7c0', -0.25, 380], ['#f5d76e', 0.02, 540], ['#f5d76e', 0.28, 700]].forEach(([c, r, bx], i) => { const p = eOut(seg(t, k + i * 0.25, k + i * 0.25 + 0.3)); if (p <= 0) return;
    x.save(); x.translate(bx, lerp(1300, 860, p)); x.rotate(r); rrc(0, 0, 300, 520, 14, c, 8); x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 6; x.strokeRect(-120, -230, 240, 460); ell(0, 0, 70, 70, 'rgba(255,255,255,.6)', 5); txt('€', 0, 4, 80, OL, { stroke: false }); x.restore(); });
  rbox(250, 1280, 580, 700, 140, SKIN, 8); rbox(220, 1500, 640, 500, 60, '#33384a', 8); rbox(220, 1500, 640, 50, 20, C.orange, 7); }
function draw(t) {
  const id = curId(t), t0 = S(id);
  const tCut = 1.25, tMot = WF('s1', /toute/i), tHot = WF('s2', /hôtel/i), tEur = WF('s3', /deux/i), tBil = WF('s4', /billets/i), tPot = WF('s5', /potes/i);
  if (id === 'ff') { if (t < tCut) pushShot(t, 1.45, false, 600, 1180); else { cam(560, 1180, 3.0, Math.max(0, 1 - (t - tCut) * 4) * 12, t); street(t, 0); p47(560, 1640, 0.8, t, { mood: 'shock', sweat: true }); } }
  else if (id === 'q') pushShot(t, 1.45 + (t - t0) * 0.03, false, 600, 1180);
  else if (id === 's1') { if (t < tMot) pushShot(t, 1.25 + (t - t0) * 0.05, false); else pushShot(t, 2.6, true, 740, 1200); }
  else if (id === 's2') { cam(540, t < tHot ? 1300 : 1000, t < tHot ? 1.5 : 1.0 + (t - tHot) * 0.04); hotel(t); car(240, 1700, 0.6, t, 0); p47(560, 1720, 0.7, t, { mood: 'smile', look: 1 }); }
  else if (id === 's3') { cam(t < tEur ? 700 : 760, 1180, t < tEur ? 2.0 : 2.9); hotel(t); p47(330, 1720, 0.75, t, { mood: 'worried', look: 1 }); cast('boss', 760, 1720, 0.8, t, { mood: 'smug', look: -1 }); }
  else if (id === 's4') { if (t < tBil) { cam(560, 1180, 2.8, 0, t); hotel(t); p47(560, 1720, 0.8, t, { mood: 'worried', sweat: true }); } else billsClose(t, tBil); }
  else if (id === 's5') { if (t < tPot) { cam(560, 1180, 3.1, Math.max(0, 1 - (t - t0) * 3) * 16, t); hotel(t); p47(560, 1720, 0.8, t, { mood: 'shock', sweat: true }); }
    else { cam(540, 1250, 1.9, Math.sin(t * 30) * 4, t); hotel(t); [['rico', 220], ['gardener', 540], ['maid', 860]].forEach(([k, px], i) => cast(k, px, 1720, 0.8, t, { mood: 'smile', look: i - 1, armUp: i !== 1 })); } }
  resetCam(); [tCut, tMot, tHot, tEur, tBil, tPot].forEach(tc => flashCut(t, tc)); flashCut(t, S('q'));
  hookCard(t, [['IL A POUSSÉ SA VOITURE', 76], ["JUSQU'À L'HÔTEL…", 76], ['ET IL A TOUT PERDU', 100, C.red]], 2.5);
  if (id === 'ff' && t >= 2.5) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tMot) banner('DIMANCHE · 15 H', 540, 330, P(t, t0 + 0.1));
  if (id === 's2' && t >= tHot) banner('RUE DE LA PAIX', 540, 330, P(t, tHot + 0.1));
  if (id === 's3' && t >= tEur) onoma('2 000 € !', 560, 520, P(t, tEur, 0.2), 150);
  if (id === 's5' && t < tPot) onoma('RUINÉ !', 560, 500, P(t, t0 + 0.4, 0.2), 170);
  if (id === 's5' && t >= tPot) onoma('HA HA HA !', 540, 520, P(t, tPot + 0.1, 0.2), 140);
  endCards(t, [["QU'EST-CE QUI SE PASSE ?", 76, C.red], ['RÉPONDS EN UN MOT 👇', 50]]);
}
