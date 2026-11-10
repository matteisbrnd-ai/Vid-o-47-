// La chaussure — one hotel-room set (bed, window, wardrobe with the safe), slow zooms, polaroids of what goes in the safe.
window.CTA = "SI C'EST PAS POUR TOI, LAISSE LA PLACE 😏"; window.LOOK = 'gala';
const GY = 1950, LOLA = { hairCol: '#c0392b', body: '#2c4f8a', body2: '#223f70', pants: '#223f70' };
function shoe(px, py, s, col = C.red) { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(-90, 0); x.lineTo(-90, -60); x.quadraticCurveTo(-60, -80, -30, -50); x.lineTo(60, -20); x.quadraticCurveTo(100, -10, 100, 0); x.closePath(); fs(col, 6); x.fillStyle = OL; x.fillRect(-90, -4, 190, 8); rbox(-96, -4, 30, 40, 4, OL, 0); x.restore(); }
function safe(px, py, s, open, items) { x.save(); x.translate(px, py); x.scale(s, s); rbox(-160, -150, 320, 300, 14, '#6b707a', 8); rbox(-130, -120, 260, 240, 8, open ? '#2a2d36' : '#8a8f99', 6);
  if (open) { items.forEach((it, i) => it(-70 + i * 70, 70)); } else { rbox(-60, -60, 120, 70, 6, '#1b1b1f', 4); txt('🔒', 0, -24, 40, '#fff', { stroke: false }); for (let k = 0; k < 9; k++) ell(-40 + (k % 3) * 40, 40 + Math.floor(k / 3) * 30, 12, 10, '#c9ced6', 3); }
  x.restore(); }
const PASS = (ix, iy) => { rbox(ix - 26, iy - 80, 52, 70, 6, '#7a1f2a', 4); }, PHONE = (ix, iy) => { rbox(ix - 22, iy - 90, 44, 80, 8, '#1b1b1f', 4); }, SHOE = (ix, iy) => shoe(ix + 10, iy - 10, 0.4);
function room(t, night) { x.fillStyle = night ? '#3a3f6a' : '#f2dcc0'; x.fillRect(-1200, -1500, 4600, 3500); bricks(-1200, 900, 4600, 800, night ? '#4a4f7a' : '#ecd2b0', 'rgba(120,80,50,.15)', 140, 70);
  rbox(140, 700, 560, 520, 12, night ? '#1b2142' : '#9fd6ff', 8); if (night) ell(560, 820, 50, 50, '#fff3a0', 0); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(420, 700); x.lineTo(420, 1220); x.stroke();
  rbox(100, 680, 120, 600, 20, '#c0392b', 6); rbox(620, 680, 120, 600, 20, '#c0392b', 6);                                                         // curtains
  rbox(1250, 760, 600, 1200, 12, '#7a5232', 9); rbox(1280, 790, 260, 1140, 6, '#8a6040', 5); rbox(1560, 790, 260, 1140, 6, '#8a6040', 5);          // wardrobe
  x.fillStyle = night ? '#5a3a4a' : '#9a3a3a'; x.fillRect(-1200, 1720, 4600, 2000);
  rbox(80, 1500, 900, 280, 30, '#f4f2ec', 8); rbox(80, 1420, 140, 360, 20, '#7a5232', 7); rbox(240, 1460, 260, 90, 40, '#fff', 6); rbox(500, 1520, 480, 200, 30, night ? '#4a6fb5' : '#6a8fd5', 6);   // bed
  rbox(2000, 1400, 160, 300, 10, '#7a5232', 6); rrc(2080, 1350, 120, 100, 40, '#ffe08a', 6); txt('207', 1420, 900, 40, '#f5c542', { stroke: false }); }
function draw(t) {
  const id = curId(t), tPass = WF('s2', /passeport/i), tTel = WF('s2', /téléphone/i), tCh = WF('s2', /chaussure/i), tOuv = WF('s3', /ouvre/i), tPart = WF('s3', /part/i), tChez = WF('s3', /Chez/i);
  const night = id === 's2' || id === 'ff' || id === 'q';
  const K = [[0, 0, 1460, 1400, 1.8], [B.ff.end - 0.1, 1.2, 1050, 1300, 0.62], [S('s1') + 1.5, 1.5, 700, 1500, 1.2], [S('s2'), 1.2, 1460, 1450, 1.6], [tCh, 0.6, 1480, 1420, 2.0],
    [S('s3'), 1.2, 1300, 1450, 1.2], [tPart, 1.4, 1700, 1500, 1.0], [S('s4'), 1.2, 1460, 1420, 1.6], [S('q'), 1.0, 1460, 1400, 1.8]];
  camPath(t, K);
  room(t, night);
  const items = [PASS, PHONE, SHOE].filter((_, i) => id === 'ff' || id === 'q' || id === 's4' || (id === 's2' && t >= [tPass, tTel, tCh][i]));
  const open = (id === 's2' && t >= tPass) || (id === 's3' && t >= tOuv && t < tPart) || id === 'ff' || id === 'q';
  safe(1550, 1450, 1.0, open, items);
  const lx = id === 's3' && t >= tPart ? lerp(1300, 2400, seg(t, tPart, tPart + 2)) : id === 's1' ? 700 : 1330;
  if (!(id === 's3' && t >= tChez)) cast('woman', lx, GY + 30, 0.82, t, { ...LOLA, mood: id === 's4' || id === 'ff' ? 'smug' : 'smile', look: 1, walk: id === 's3' && t >= tPart ? t * 3 : 0, blink: t > 0.6 });
  if (id === 's2' || (id === 's3' && t < tOuv)) shoe(1200, GY + 20, 0.6);                 // the other shoe stays on the floor
  resetCam();
  hookCard(t, [['UNE CHAUSSURE AU COFFRE…', 70], ["ET JAMAIS L'AUTRE", 96, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('HÔTEL · CHAMBRE 207', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tCh) polaroid(560, 660, 460, 420, P(t, tCh, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); PASS(w * 0.25, h * 0.7); PHONE(w * 0.45, h * 0.7); shoe(w * 0.72, h * 0.65, 0.7); }, 'DANS LE COFFRE', -0.04);
  if (id === 's3' && t >= tChez) polaroid(560, 700, 460, 460, P(t, tChez, 0.3), (w, h) => { x.fillStyle = '#cfe8ff'; x.fillRect(0, 0, w, h); rbox(w / 2 - 120, h / 2 - 60, 240, 200, 10, '#f4d6a0', 6); poly([[w / 2 - 150, h / 2 - 60], [w / 2, h / 2 - 170], [w / 2 + 150, h / 2 - 60]], '#c9302a', 6); txt('✗', w * 0.8, h * 0.25, 90, C.red, { stroke: false }); }, 'CHEZ ELLE', 0.04);
  endCards(t, [['POURQUOI ELLE FAIT ÇA ?', 78, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
