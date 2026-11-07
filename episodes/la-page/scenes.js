// La page — one insert per clue, ending loops to the book.
const TGT = { s1: [540, 1150, 1.15], s4: [700, 1150, 1.6], s5: [440, 1150, 1.5] };
const DUVAL = { hairCol: '#d4d4d8', glasses: true };
function salon(t) { room('#e9c9a0', '#d9b48a', '#8a5a3a'); rbox(120, 520, 260, 330, 10, '#f6ecd6', 8); rbox(150, 550, 200, 270, 6, '#9cc7e8', 5); // window
  rbox(700, 600, 220, 160, 8, '#c9a77a', 7); ell(810, 680, 50, 50, '#f6ecd6', 6);                                          // frame
  rbox(140, 1260, 800, 46, 10, '#f4f2ec', 7); [190, 870].forEach(lx => rbox(lx, 1300, 26, 200, 6, '#7a5232', 6));                 // tea table
  rrc(470, 1215, 110, 90, 30, '#f6ecd6', 6); rrc(540, 1200, 40, 18, 8, '#f6ecd6', 5); rrc(640, 1235, 70, 40, 12, '#f6ecd6', 5); }
function bookClose(t, open, nums, note) { resetCam(); x.fillStyle = vg(0, H, '#8a5a3a', '#4a2e1c'); x.fillRect(0, 0, W, H);
  x.save(); x.translate(540, 860); x.rotate(-0.04);
  rbox(-460, -330, 920, 660, 24, '#2f5fb3', 9);                                    // cover
  const k = clamp(open); poly([[-430, -300], [-10, -270], [-10, 300], [-430, 290]], '#fffaf0', 8);
  x.save(); x.scale(lerp(-1, 1, k), 1); poly([[10, -270], [430, -300], [430, 290], [10, 300]], '#fffaf0', 8); x.restore();
  x.strokeStyle = '#c8bfae'; x.lineWidth = 7; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(-380, -200 + i * 50); x.lineTo(-60, -185 + i * 50); x.stroke(); if (k > 0.9) { x.beginPath(); x.moveTo(60, -185 + i * 50); x.lineTo(380, -200 + i * 50); x.stroke(); } }
  if (nums && k > 0.9) { rrc(-220, 230, 150, 100, 16, C.yellow, 6); rrc(220, 230, 150, 100, 16, C.yellow, 6); txt('47', -220, 236, 96, OL, { stroke: false }); txt('48', 220, 236, 96, OL, { stroke: false }); }
  if (note > 0) { x.save(); x.translate(0, lerp(0, -520, note)); x.rotate(note * 0.6); rrc(0, -40, 380, 190, 14, '#c9a0d8', 7); txt('500 €', 0, -38, 90, '#5a2a6a', { stroke: false }); x.restore(); }
  x.restore(); }
function phoneClose(t, tr) { resetCam(); x.fillStyle = vg(0, H, '#e9c9a0', '#c99a6a'); x.fillRect(0, 0, W, H); x.save(); x.translate(540 + Math.sin(t * 50) * 8 * tr, 980); x.rotate(-0.06);
  rbox(-230, -420, 460, 840, 60, '#1b1b1f', 9); rbox(-200, -360, 400, 700, 20, '#2c4fa8', 0); txt('POLICE', 0, -180, 90, '#fff', { stroke: false }); txt('17', 0, -60, 160, C.yellow, { stroke: false });
  ell(-100, 220, 60, 60, C.red, 6); ell(100, 220, 60, 60, C.green, 6); x.restore(); if (tr) shakeLines(540, 980, 330, t); }
function draw(t) {
  const id = curId(t), t0 = S(id), [fx, fy, z] = camAt(t, TGT);
  const tTel = WF('s2', /appelle/i), tBil = WF('s2', /billet/i), tLivre = WF('s3', /livre/i), tLui = WF('s4', /lui/i), tEmb = WF('s5', /embarque/i);
  if (id === 'ff') bookClose(t, 1, false, eOut(seg(t, 0.05, 0.6)));
  else if (id === 'q') bookClose(t, 1, false, 1);
  else if (id === 's1') { cam(fx, fy, z); salon(t); cast('woman', 760, 1640, 0.8, t, { ...DUVAL, mood: 'smile', look: -1 }); p47(330, 1640, 0.8, t, { mood: 'smile', look: 1 }); }
  else if (id === 's2') { if (t < tBil) phoneClose(t, 1); else bookClose(t, 1, false, 0.0001 + eOut(seg(t, tBil, tBil + 0.5)) * 0.99); }
  else if (id === 's3') bookClose(t, eOut(seg(t, tLivre, tLivre + 0.4)) * 0 + (t < tLivre ? 0 : eOut(seg(t, tLivre, tLivre + 0.4))), true, 0);
  else if (id === 's4') { cam(fx, fy, z, t < tLui + 0.3 && t > tLui ? 12 : 0, t); salon(t); cast('woman', 760, 1640, 0.8, t, { ...DUVAL, mood: 'angry', look: -1, armUp: true }); p47(330, 1640, 0.8, t, { mood: 'shock', look: 1, sweat: true }); }
  else if (id === 's5') { if (t < tEmb) { cam(fx, fy, z); salon(t); cast('guard', 440, 1640, 0.8, t, { mood: 'neutral', look: 1 }); cast('woman', 800, 1640, 0.8, t, { ...DUVAL, mood: 'smug', look: -1 }); }
    else cuffsInsert(t, seg(t, tEmb + 0.05, tEmb + 0.3), 1.2, 0, '#b5486a', '#d4d4d8'); }
  resetCam(); [tTel, tBil, tLivre, tEmb].forEach(tc => flashCut(t, tc)); flashCut(t, S('q'));
  if (id === 'ff') { onoma('ZIP !', 780, 520, P(t, 0.25, 0.2), 150); rewindFx(t, B.ff.next); }
  if (id === 's1') banner('SAMEDI · 16 H', 540, 330, P(t, t0 + 0.1));
  if (id === 's2' && t < tBil) { banner('LE LENDEMAIN', 540, 330, P(t, t0 + 0.1)); onoma('DRIIING !', 760, 520, P(t, tTel, 0.2), 120); }
  if (id === 's3' && t >= tLivre) banner('SA VERSION', 540, 330, P(t, tLivre + 0.05), C.orange);
  if (id === 's4') onoma('C\'EST LUI !', 600, 520, P(t, tLui, 0.2), 120);
  if (id === 's5' && t >= tEmb) onoma('CLIC !', 760, 620, P(t, tEmb + 0.3, 0.2), 160);
  endCards(t, [['POURQUOI ELLE MENT ?', 80, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
