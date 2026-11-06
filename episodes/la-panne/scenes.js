// La panne — scenes.
const TGT = { ff: [560, 1100, 1.05], hook: [560, 1100, 1.0], s1: [540, 1000, 0.95], s2: [540, 1050, 1.05], s3: [560, 1100, 1.0], s4: [430, 1050, 1.25], s5: [700, 1080, 1.2], q: [560, 1100, 1.0], share: [560, 1100, 1.0] };
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
function livingRoom(w, h) { x.fillStyle = '#e9c9a0'; x.fillRect(0, 0, w, h); x.fillStyle = '#8a5a3a'; x.fillRect(0, h * 0.78, w, h); rbox(w * 0.15, h * 0.45, w * 0.55, h * 0.36, 30, '#8a2f3a', 6);
  rrc(w * 0.82, h * 0.3, 70, 50, 10, '#ffe08a', 5); rrc(w * 0.82, h * 0.55, 14, h * 0.45, 4, '#555', 4);
  x.save(); x.translate(w * 0.4, h * 0.82); x.scale(0.5, 0.5); toon(0, 0, 1, { mood: 'smile', look: 0.6 }); x.restore(); rbox(w * 0.3, h * 0.43, 90, 60, 6, '#2c4fa8', 5); }
function draw(t) {
  const id = curId(t), t0 = S(id), [fx, fy, z] = camAt(t, TGT); cam(fx, fy, z, id === 's2' ? Math.max(0, 1 - (t - WF('s2', /dévaliser/i)) * 3) * 14 : 0, t);
  if (id === 'ff' || id === 's5') { office(t); p47(380, 1640, 0.82, t, { mood: id === 'ff' ? 'shock' : 'worried', sweat: true, look: 1 }); cast('inspector', 760, 1640, 0.82, t, { mood: 'smug', look: -1 });
    if (id === 's5' && t > WF('s5', /menottes/i)) { x.strokeStyle = '#c9ced6'; x.lineWidth = 10; [-40, 40].forEach(d => { x.beginPath(); x.arc(620 + d, 1290, 30, 0, 7); x.stroke(); }); } }
  if (id === 'hook' || id === 's3' || id === 'q' || id === 'share') { office(t); p47(380, 1640, 0.82, t, { mood: id === 'q' ? 'worried' : 'smug', look: 1 }); cast('inspector', 760, 1640, 0.82, t, { mood: 'neutral', look: -1 }); }
  if (id === 's1' || id === 's2') { const off = t > WF('s1', /panne/i); street(t, !off);
    if (id === 's2') { const k = seg(t, t0 + 0.3, B.s2.end); x.save(); x.globalAlpha = 0.85; toon(lerp(-100, 1100, k), 1640, 0.7, { walk: t * 3, body: '#111', body2: '#0b0b0d', hatCol: '#111', hatCol2: '#0b0b0d', num: false, mood: 'smug' }); x.restore(); } }
  if (id === 's4') { office(t); p47(380, 1640, 0.82, t, { mood: 'smug', look: 1 }); cast('inspector', 760, 1640, 0.82, t, { mood: 'neutral', look: -1 }); }
  if (id === 's1' || id === 's2') night(id === 's1' && t < WF('s1', /panne/i) ? 0.1 : 0.4);
  resetCam();
  if (id === 'ff') { stamp('DÉMASQUÉ', 1, 380); paperCard([['UN ALIBI PARFAIT…', 62]], 540, 600, 1, { w: 560 }); rewindFx(t, B.ff.next); }
  if (id === 'hook') paperCard([['OÙ 47 S\'EST', 64], ['TRAHI ?', 100, C.red]], 540, 430, P(t, t0), { w: 520 });
  if (id === 's1') { pill('21:00', 540, 330, P(t, t0 + 0.1), C.red); if (t > WF('s1', /noir/i)) bigWord('NOIR COMPLET', P(t, WF('s1', /noir/i)), 520); }
  if (id === 's2' && t > WF('s2', /dévaliser/i)) onoma('CRAC !', 700, 600, P(t, WF('s2', /dévaliser/i), 0.2));
  if (id === 's3') speech('« 21 H – 22 H, VOUS FAISIEZ QUOI ? »', 600, 560, pop(t, WF('s3', /faisiez/i)), 46);
  if (id === 's4') { speech('« J\'AI LU MON LIVRE. »', 420, 520, pop(t, WF('s4', /lu$/i) - 0.1), 56); if (t > WF('s4', /tranquille/i)) polaroid(760, 820, 380, 330, P(t, WF('s4', /tranquille/i)), livingRoom, 'SA VERSION', 0.04); }
  if (id === 's5' && t > WF('s5', /menteur/i)) stamp('MENTEUR', pop(t, WF('s5', /menteur/i)), 420);
  endCards(t, [['COMMENT IL A SU ?', 86, C.red], ['TA RÉPONSE EN 1 MOT', 52]]);
}
