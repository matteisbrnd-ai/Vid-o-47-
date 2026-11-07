// La panne — scenes. One close-up insert per clue, flash cuts, ending loops to the handcuffs.
const TGT = { ff: [540, 960, 1], s1: [540, 1000, 1.0], s2: [540, 1050, 1.1], s3: [700, 1150, 1.55], s4: [420, 1150, 1.55], s5: [700, 1150, 1.6], q: [540, 960, 1] };
function street(t, lightsOn) {
  sky('#141c38', '#2c2a4f', 1500); if (!lightsOn) { x.fillStyle = 'rgba(255,255,255,.7)'; for (let i = 0; i < 50; i++) x.fillRect((i * 173) % 1500 - 200, (i * 97) % 700 - 200, 4, 4); }
  [[-60, 520, 380, '#5a4a6a'], [340, 380, 400, '#4a3e5a'], [760, 460, 420, '#5a4a6a']].forEach(([bx, by, bw, col], i) => { rbox(bx, by, bw, 1500 - by, 6, col, 7);
    for (let r = 0; r < 5; r++) for (let k = 0; k < 3; k++) rbox(bx + 40 + k * (bw - 80) / 3, by + 60 + r * 170, (bw - 80) / 3 - 30, 100, 6, lightsOn && (r + k + i) % 3 ? '#ffd770' : '#1b2142', 5); });
  rbox(380, 1180, 320, 320, 8, '#efe3f2', 7); rbox(360, 1130, 360, 70, 8, '#7a3a8a', 7); txt('BIJOUTERIE', 540, 1167, 52, '#fff', { stroke: false });
  rbox(420, 1240, 240, 160, 6, lightsOn ? '#a9d6f5' : '#1b2142', 6);
  x.fillStyle = '#2a2d36'; x.fillRect(-1200, 1500, 3500, 600); x.lineWidth = 8; x.strokeStyle = OL; x.beginPath(); x.moveTo(-1200, 1500); x.lineTo(2300, 1500); x.stroke();
  [120, 960].forEach(lx => { rrc(lx, 1180, 18, 640, 4, '#3a3d44', 5); rrc(lx, 860, 80, 40, 10, lightsOn ? '#ffe7a0' : '#3a3d44', 5);
    if (lightsOn) { x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(lx, 880, 10, lx, 1300, 500); g.addColorStop(0, 'rgba(255,230,150,.3)'); g.addColorStop(1, 'rgba(255,230,150,0)'); x.fillStyle = g; x.fillRect(lx - 500, 860, 1000, 700); x.restore(); } });
}
function office(t) { room('#c9b48e', '#a9946e', '#6b5444'); rbox(140, 520, 300, 380, 8, '#24324a', 8); for (let i = 0; i < 4; i++) rbox(170, 550 + i * 85, 240, 60, 4, '#f4f2ec', 4);
  x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(560, -300); x.lineTo(560, 300); x.stroke(); poly([[480, 300], [640, 300], [680, 380], [440, 380]], '#2b2e35', 6);
  x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createLinearGradient(0, 380, 0, 1400); g.addColorStop(0, 'rgba(255,230,150,.35)'); g.addColorStop(1, 'rgba(255,230,150,0)'); x.fillStyle = g; x.beginPath(); x.moveTo(440, 380); x.lineTo(680, 380); x.lineTo(1000, 1400); x.lineTo(120, 1400); x.closePath(); x.fill(); x.restore();
  rbox(160, 1240, 800, 50, 8, '#7a5232', 7); [200, 880].forEach(lx => rbox(lx, 1290, 30, 210, 6, '#5a3a22', 6)); }
function duo(t, m47, mIns) { office(t); p47(380, 1640, 0.82, t, { mood: m47, look: 1, sweat: m47 === 'worried' }); cast('inspector', 760, 1640, 0.82, t, { mood: mIns, look: -1 }); }
function draw(t) {
  const id = curId(t), t0 = S(id), [fx, fy, z] = camAt(t, TGT);
  const tPanne = WF('s1', /panne/i), tNoir = WF('s1', /noir/i), tCrac = WF('s2', /dévaliser/i), tLivre = WF('s4', /livre/i), tMen = WF('s5', /menottes/i);
  if (id === 'ff') { const c = seg(t, 0.05, 0.3); cuffsInsert(t, c, lerp(1.45, 1.05, eOut(seg(t, 0, 1.6))), c >= 1 ? Math.max(0, 1 - (t - 0.3) * 4) * 16 : 0); }
  else if (id === 'q') cuffsInsert(t, 1, 1.05 + (t - t0) * 0.02);
  else if (id === 's1') { if (t < tPanne) { cam(fx, fy, z); street(t, true); night(0.1); }
    else if (t < tNoir) bulbInsert(t, t - tPanne < 0.35 && Math.floor((t - tPanne) * 14) % 2 === 0);
    else { cam(fx, fy, z * 1.05); street(t, false); night(0.45); } }
  else if (id === 's2') { if (t < tCrac) { cam(fx, fy, z); street(t, false); const k = seg(t, t0 + 0.2, tCrac); x.save(); x.globalAlpha = 0.9; toon(lerp(-100, 700, k), 1640, 0.7, { walk: t * 3, body: '#111', body2: '#0b0b0d', hatCol: '#111', hatCol2: '#0b0b0d', num: false, mood: 'smug' }); x.restore(); night(0.4); }
    else vitrineInsert(t, eOut(seg(t, tCrac, tCrac + 0.25))); }
  else if (id === 's3') { cam(fx, fy, z); duo(t, 'smug', 'angry'); }
  else if (id === 's4') { if (t < tLivre) { cam(fx, fy, z); duo(t, 'smug', 'neutral'); } else bookInsert(t); }
  else if (id === 's5') { if (t < tMen) { cam(fx, fy, z, 0, t); duo(t, 'worried', 'smug'); } else cuffsInsert(t, seg(t, tMen + 0.05, tMen + 0.3), 1.2, 0); }
  resetCam();
  [tPanne, tNoir, tCrac, tLivre, tMen].forEach(tc => flashCut(t, tc)); flashCut(t, S('q'));
  if (id === 'ff') { onoma('CLIC !', 760, 620, P(t, 0.3, 0.2), 160); rewindFx(t, B.ff.next); }
  if (id === 's1' && t < tPanne) banner('HIER SOIR · 21 H', 540, 330, P(t, t0 + 0.1));
  if (id === 's1' && t >= tPanne && t < tNoir) onoma('CLAC', 760, 420, P(t, tPanne, 0.15), 140);
  if (id === 's2' && t >= tCrac) onoma('CRAC !', 700, 520, P(t, tCrac, 0.2));
  if (id === 's3') banner('LE LENDEMAIN', 540, 330, P(t, t0 + 0.1));
  if (id === 's4' && t >= tLivre) banner('SA VERSION', 540, 330, P(t, tLivre + 0.05), C.orange);
  if (id === 's5' && t >= tMen) { onoma('CLIC !', 760, 620, P(t, tMen + 0.3, 0.2), 160); if (t > WF('s5', /menteur/i)) stamp('MENTEUR', pop(t, WF('s5', /menteur/i)), 420); }
  endCards(t, [['COMMENT IL A SU ?', 86, C.red], ['TA RÉPONSE EN 1 MOT', 52]]);
}
