// Le recrutement — scenes (same shot list as the reference: flash-forward cell, exterior, corridor, tub room, game-show podiums, ✅ then ❌).
const TGT = { ff: [540, 1100, 1.0], s1: [540, 1050, 1.0], s2: [540, 1120, 1.15], s3: [540, 1150, 0.95], s4: [540, 1200, 1.0],
  s5: [540, 960, 1.0], s6: [540, 1150, 0.95], s7: [560, 1150, 1.0], q: [540, 1150, 0.95], share: [540, 1150, 0.95] };
const GUARD = { hat: 'hair', hairCol: '#1f1a18', shades: true, body: '#1d1f24', body2: '#121317', pants: '#15171c', num: false, collar: true };
function guardT(px, py, s, t, o = {}) { toon(px, py, s, { t, ...GUARD, ...o }); }
function cell(t) { room('#e9eef2', '#d5dde4', '#c9d1d9'); for (let r = 0; r < 12; r++) for (let k = -2; k < 10; k++) { x.strokeStyle = 'rgba(0,0,0,.06)'; x.lineWidth = 4; x.strokeRect(k * 140, r * 140 - 200, 140, 140); }
  rbox(600, 620, 300, 880, 8, '#f4f6f8', 8); rbox(680, 700, 140, 110, 10, '#2b2e35', 6); rbox(680, 1100, 140, 24, 6, '#9aa1ae', 4);
  x.strokeStyle = '#2b2e35'; x.lineWidth = 12; for (let b = 0; b < 3; b++) { x.beginPath(); x.moveTo(705 + b * 45, 700); x.lineTo(705 + b * 45, 810); x.stroke(); } }
function hideoutExt(t) { sky('#141c38', '#3a3866', 1350); x.fillStyle = '#e9eefc'; x.beginPath(); x.arc(880, 260, 60, 0, 7); x.fill(); x.fillStyle = 'rgba(255,255,255,.7)'; for (let i = 0; i < 40; i++) x.fillRect((i * 173) % 1300 - 100, (i * 97) % 600 - 100, 4, 4);
  rbox(120, 620, 840, 730, 8, '#4a3e5a', 9); bricks('rgba(255,255,255,.04)', 'rgba(0,0,0,.08)', 630, 1340);
  for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) rbox(170 + k * 200, 700 + r * 220, 130, 150, 60, '#ffd770', 6);
  rbox(430, 1100, 220, 250, 100, '#3a2a22', 8); x.save(); x.shadowColor = '#ff4fa3'; x.shadowBlur = 40; rbox(330, 520, 420, 120, 20, '#1b1426', 6); txt('LE REPAIRE', 540, 582, 90, '#ff6fb5', { stroke: false }); x.restore();
  x.fillStyle = '#2a2d36'; x.fillRect(-1200, 1350, 3500, 800); [-80, 1160].forEach(px => pine(px, 1400, 420, '#1f3a2a')); }
function corridor(t) { room('#5d6470', '#4a505b', '#3b3f47'); [130, 540, 950].forEach((cx, i) => { rbox(cx - 140, 650, 280, 850, 8, '#6c717a', 8); rbox(cx - 70, 720, 140, 100, 8, '#2b2e35', 6); txt(String(101 + i), cx, 610, 50, '#fff', { sw: 6 }); }); }
function tubRoom(t, level = 1, filling = false) { room('#eef1f4', '#dfe5ea', '#c9b48e');
  x.strokeStyle = 'rgba(0,0,0,.07)'; x.lineWidth = 3; for (let r = 0; r < 14; r++) { x.beginPath(); x.moveTo(-1200, r * 110 - 200); x.lineTo(2300, r * 110 - 200); x.stroke(); }
  rbox(-200, 760, 1500, 40, 0, '#3fae9a', 0); rbox(80, 380, 300, 220, 10, '#1b2142', 8); for (let i = 0; i < 4; i++) ell(130 + i * 70, 520, 22, 30, '#0d0f1c', 0);
  rbox(700, 420, 240, 150, 10, '#24324a', 7); x.strokeStyle = '#3fe08a'; x.lineWidth = 5; x.beginPath(); for (let i = 0; i <= 40; i++) x.lineTo(720 + i * 5, 495 + Math.sin(i * 0.6 + t * 6) * 22); x.stroke();
  // jacuzzi (round, wooden rim) with the plug chain over the rim — the fair clue
  const cy = 1330; x.beginPath(); x.ellipse(540, cy, 400, 110, 0, 0, 7); fs('#8a5a3a', 9); x.beginPath(); x.ellipse(540, cy - 10, 360, 90, 0, 0, 7); fs('#f4f2ec', 6);
  if (level > 0) { x.beginPath(); x.ellipse(540, cy - 10 + (1 - level) * 30, 340 * (0.85 + 0.15 * level), 78 * level, 0, 0, 7); fs('#6ec6ff', 5); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 4; for (let i = 0; i < 4; i++) { const k = (t * 0.7 + i / 4) % 1; x.globalAlpha = 1 - k; x.beginPath(); x.ellipse(420 + i * 80, cy - 10, 20 + k * 50, 5 + k * 8, 0, 0, 7); x.stroke(); } x.globalAlpha = 1; }
  rbox(140, cy + 40, 800, 140, 20, '#a06a42', 9); x.strokeStyle = 'rgba(0,0,0,.2)'; x.lineWidth = 6; for (let i = 1; i < 8; i++) { x.beginPath(); x.moveTo(140 + i * 100, cy + 50); x.lineTo(140 + i * 100, cy + 170); x.stroke(); }
  x.strokeStyle = '#9aa1ae'; x.lineWidth = 6; x.setLineDash([10, 8]); x.beginPath(); x.moveTo(820, cy - 20); x.quadraticCurveTo(880, cy - 70, 920, cy + 10); x.lineTo(920, cy + 90); x.stroke(); x.setLineDash([]); ell(920, cy + 100, 14, 14, '#2b2e35', 4);
  if (filling) { rbox(500, 900, 80, 40, 10, '#c9ced6', 6); x.fillStyle = 'rgba(110,198,255,.85)'; x.fillRect(522, 940, 36, cy - 950); }
  // the three items on the floor
  items(t, 230, 1640, 0.9); }
function items(t, x0, y0, s, hi = -1, marks = {}) { [[0, 'glass'], [1, 'pan'], [2, 'bucket']].forEach(([i, k]) => { const cx = x0 + i * 310 * s, cy = y0; x.save(); x.translate(cx, cy); x.scale(s, s);
  if (hi === i) { x.save(); x.shadowColor = '#ffd23f'; x.shadowBlur = 50; ell(0, -70, 110, 90, 'rgba(255,210,63,.45)', 0); x.restore(); }
  if (k === 'glass') { x.beginPath(); x.moveTo(-40, -150); x.lineTo(40, -150); x.lineTo(30, 0); x.lineTo(-30, 0); x.closePath(); fs('rgba(210,235,255,.8)', 7); }
  if (k === 'pan') { rbox(-70, -90, 140, 90, 14, '#9aa1ae', 7); rbox(66, -80, 110, 22, 10, '#3a2a22', 6); }
  if (k === 'bucket') { poly([[-70, -150], [70, -150], [55, 0], [-55, 0]], '#2c7be5', 7); x.lineWidth = 7; x.strokeStyle = OL; x.beginPath(); x.arc(0, -150, 70, Math.PI, 0); x.stroke(); }
  const m = marks[i]; if (m) { const col = m === 'ok' ? C.green : C.red; ell(70, -10, 44, 44, col, 6); x.strokeStyle = '#fff'; x.lineWidth = 12; x.lineCap = 'round'; x.beginPath(); if (m === 'ok') { x.moveTo(50, -10); x.lineTo(65, 8); x.lineTo(92, -28); } else { x.moveTo(52, -28); x.lineTo(88, 8); x.moveTo(88, -28); x.lineTo(52, 8); } x.stroke(); }
  x.restore(); }); }
function gameShow(t, hi) { resetCam(); const g = x.createRadialGradient(540, 700, 50, 540, 700, 1200); g.addColorStop(0, '#5ab4ff'); g.addColorStop(1, '#2a7fd6'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = 'rgba(255,255,255,.12)'; for (let i = 0; i < 18; i++) { const a = i * Math.PI / 9 + t * 0.15; x.beginPath(); x.moveTo(540, 700); x.lineTo(540 + Math.cos(a) * 1600, 700 + Math.sin(a) * 1600); x.lineTo(540 + Math.cos(a + 0.12) * 1600, 700 + Math.sin(a + 0.12) * 1600); x.closePath(); x.fill(); }
  [[220, C.red], [540, C.yellow], [860, C.green]].forEach(([cx, col], i) => { if (hi === i) { x.save(); x.globalCompositeOperation = 'lighter'; x.fillStyle = 'rgba(255,255,220,.3)'; x.beginPath(); x.moveTo(cx - 40, 0); x.lineTo(cx + 40, 0); x.lineTo(cx + 170, 1250); x.lineTo(cx - 170, 1250); x.closePath(); x.fill(); x.restore(); ell(cx, 520, 46, 46, '#fff', 6); txt('?', cx, 526, 70, C.blue, { stroke: false }); }
    rbox(cx - 150, 820, 300, 420, 14, col, 8); ell(cx, 930, 60, 60, '#fff', 6); txt(String(i + 1), cx, 936, 80, OL, { stroke: false }); });
  items(t, 220, 820, 1.0, hi);
  x.fillStyle = '#24324a'; x.fillRect(0, 1470, W, 450); x.lineWidth = 8; x.strokeStyle = OL; x.beginPath(); x.moveTo(0, 1470); x.lineTo(W, 1470); x.stroke();
  p47(540, 2050, 0.9, t, { look: hi < 0 ? 0 : (hi - 1), mood: 'worried' }); }
function draw(t) {
  const id = curId(t), t0 = S(id), [fx, fy, z] = camAt(t, TGT); cam(fx, fy, z, 0, t);
  if (id === 'ff') { const tc = 1.1;
    if (t < tc) { cell(t); const k = eIO(seg(t, 0, tc)); guardT(lerp(140, 420, k), 1600, 0.78, t, { mood: 'angry', look: 1 }); guardT(lerp(560, 840, k), 1600, 0.78, t, { mood: 'angry', look: -1 }); p47(lerp(350, 630, k), 1580, 0.78, t, { mood: 'shock', armsUp: true, sweat: true }); }
    else { cam(750, 760, 2.2 - 0.15 * seg(t, tc, B.ff.end), Math.max(0, 1 - (t - tc) * 4) * 18, t); cell(t);
      x.save(); x.beginPath(); x.rect(680, 700, 140, 110); x.clip(); x.fillStyle = '#1b1d24'; x.fillRect(680, 700, 140, 110); toon(750, 1005, 0.36, { t, mood: 'shock', look: Math.sin(t * 5) }); x.restore();
      x.strokeStyle = '#2b2e35'; x.lineWidth = 12; for (let b = 0; b < 3; b++) { x.beginPath(); x.moveTo(705 + b * 45, 700); x.lineTo(705 + b * 45, 810); x.stroke(); } } }
  if (id === 's1') { if (t < WF('s1', /chef/i)) { hideoutExt(t); p47(lerp(-100, 400, eIO(seg(t, t0, t0 + 2))), 1640, 0.7, t, { walk: t < t0 + 2 ? t * 2 : 0, mood: 'smile', look: 1 }); }
    else { corridor(t); p47(320, 1640, 0.8, t, { look: 1 }); cast('boss', 760, 1640, 0.8, t, { look: -1, mood: 'smug' }); } }
  if (id === 's2') { corridor(t); p47(320, 1640, 0.8, t, { look: 1, mood: 'worried' }); cast('boss', 760, 1640, 0.8, t, { look: -1, mood: 'smug' }); }
  if (id === 's3' || id === 's4') { tubRoom(t, id === 's3' ? 0.4 + 0.6 * seg(t, t0, WF('s3', /candidat/i)) : 1, id === 's3' && t < WF('s3', /candidat/i)); p47(190, 1580, 0.62, t, { look: 1, mood: 'neutral' }); cast('boss', 890, 1580, 0.62, t, { look: -1, mood: 'smug', armUp: id === 's4' }); }
  if (id === 's5') { const hi = t > WF('s5', /seau/i) ? 2 : t > WF('s5', /casserole/i) ? 1 : t > WF('s5', /verre/i) ? 0 : -1; gameShow(t, hi); }
  if (id === 's6' || id === 's7' || id === 'q' || id === 'share') { tubRoom(t, 1); const ok = id === 's6' && t > WF('s6', /seau/i), no = id !== 's6' && (id !== 's7' || t > WF('s7', /non/i));
    resetCam(); cam(fx, fy, z, 0, t); items(t, 230, 1640, 0.9, ok || no ? 2 : -1, { 2: ok ? 'ok' : no ? 'no' : null });
    const out = id === 's7' ? eIO(seg(t, WF('s7', /gardes/i), B.s7.end + 0.3)) : id === 'q' || id === 'share' ? 1 : 0;
    if (out < 1) p47(lerp(190, -260, out), 1580, 0.62, t, { look: 1, mood: id === 's7' ? 'shock' : 'smile', armUp: id === 's6' && t > WF('s6', /idée/i), armsUp: id === 's7' && out > 0 });
    if (id === 's7' && out > 0) { guardT(lerp(-120, -420, out), 1580, 0.62, t, { look: 1 }); guardT(lerp(330, 30, out), 1580, 0.62, t, { look: -1 }); }
    cast('boss', 890, 1580, 0.62, t, { look: -1, mood: id === 's7' ? 'angry' : 'smug' }); }
  resetCam();
  if (id === 'ff') { paperCard([['TU RISQUES LA CAVE', 76, C.red], ['SI TU RATES CE TEST', 60]], 540, 380, 1, { w: 720 }); if (t > 1.1) { onoma('BAM !', 760, 1150, P(t, 1.1, 0.2), 150); txt('?', 300, 900, 220, C.yellow, { sw: 16 }); } rewindFx(t, B.ff.next); }
  if (id === 's1' && t > WF('s1', /bande/i) && t < WF('s1', /chef/i)) bigWord('LA BANDE', P(t, WF('s1', /bande/i)), 380, C.yellow);
  if (id === 's2') speech('« COMMENT VOUS CHOISISSEZ ? »', 420, 640, pop(t, t0), 52);
  if (id === 's3' && t > WF('s3', /verre/i)) pill('1 VERRE · 1 CASSEROLE · 1 SEAU', 540, 360, P(t, WF('s3', /verre/i)), C.brown);
  if (id === 's4') { paperCard([['VIDER', 80], ['LE JACUZZI', 80, C.red]], 540, 420, P(t, t0 + 0.1), { w: 480 }); }
  if (id === 's5') paperCard([['TU PRENDS QUOI ?', 80]], 540, 300, P(t, t0), { w: 560 });
  if (id === 's6' && t > WF('s6', /idée/i)) { txt('💡', 160, 860, 120, '#fff', { stroke: false }); speech('« LE SEAU, C\'EST LE PLUS GRAND ! »', 440, 760, pop(t, WF('s6', /seau/i) - 0.2), 48); }
  if (id === 's7' && t > WF('s7', /non/i)) stamp('NON', pop(t, WF('s7', /non/i)), 420);
  endCards(t, [["QU'EST-CE QU'IL", 70], ['FALLAIT FAIRE ?', 90, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
