// Les traces — Galagade style: ONE big sunny snowy mountain set. Prints come from the left and go INTO the chalet (door at x≈1480).
// The camera travels left → right along the prints, then back to the Baron at the door for the loop. 47's room is a polaroid only.
// Never show 47 walking (the answer = he walked out backwards).
window.CTA = 'TAGUE LE PLUS DISCRET DE TES POTES'; window.LOOK = 'gala';
const GY = 1900, DOORX = 1480, SNOW = '#f6f9ff';
function shoe(px, py, ang, s = 1, col = '#b9c9df') { x.save(); x.translate(px, py); x.rotate(ang); x.scale(s, s); x.fillStyle = col;
  x.beginPath(); x.ellipse(14, 0, 30, 17, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(-30, 0, 16, 13, 0, 0, 7); x.fill();
  x.strokeStyle = 'rgba(80,100,140,.35)'; x.lineWidth = 3; for (let i = -1; i <= 1; i++) { x.beginPath(); x.moveTo(-2 + i * 12, -10); x.lineTo(-2 + i * 12, 10); x.stroke(); } x.restore(); }
function printsLine() { for (let i = 0; i < 22; i++) { const px = -300 + i * 96, py = 2040 + (i % 2 ? 22 : -22) - Math.max(0, px - 1200) * 0.35; if (px > DOORX - 20) break; shoe(px, py, -Math.max(0, px - 1200) * 0.0016, 1.45, '#9cb0cf'); } }
function snowPine(px, by, h) { rbox(px - 18, by - 60, 36, 70, 6, '#7a5232', 5); pine(px, by, h, '#2f6b45', true); }
function chalet(t, id) {
  rbox(1000, 1250, 960, 660, 6, '#b5703e', 9); x.strokeStyle = 'rgba(70,40,20,.45)'; x.lineWidth = 6; for (let i = 1; i < 12; i++) { x.beginPath(); x.moveTo(1004, 1250 + i * 55); x.lineTo(1956, 1250 + i * 55); x.stroke(); }
  [[1000, 1250], [1960, 1250]].forEach(([lx, ly]) => { for (let i = 0; i < 12; i++) ell(lx, ly + 28 + i * 55, 22, 22, '#d49a62', 5); });
  rbox(1700, 860, 110, 300, 6, '#9a8f80', 7); bricks(1704, 864, 102, 292, '#a89c8a', 'rgba(60,50,40,.4)', 50, 30);   // chimney
  [0, 1, 2].forEach(i => { const k = ((t * 0.35 + i / 3) % 1); ell(1760 + Math.sin(t + i) * 30 + k * 60, 820 - k * 420, 40 + k * 60, 34 + k * 50, `rgba(255,255,255,${0.85 * (1 - k)})`, 0); });
  poly([[920, 1290], [1480, 900], [2040, 1290]], '#7a3f2a', 9); poly([[900, 1300], [1480, 880], [2060, 1300], [2060, 1250], [1480, 840], [900, 1250]], '#ffffff', 7);  // roof + snow
  ell(1480, 1080, 80, 80, '#fff3c0', 7); x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(1400, 1080); x.lineTo(1560, 1080); x.moveTo(1480, 1000); x.lineTo(1480, 1160); x.stroke();
  [[1130, 1400], [1720, 1400]].forEach(([wx, wy], i) => { rbox(wx, wy, 200, 200, 10, '#ffe9a8', 8);
    if (id === 's3' || id === 's2b') { x.save(); x.beginPath(); x.rect(wx, wy, 200, 200); x.clip(); cast('guard', wx + 100, wy + 420, 0.4, t, { mood: 'worried', look: i ? -1 : 1 }); x.restore(); }
    x.strokeStyle = OL; x.lineWidth = 7; x.beginPath(); x.moveTo(wx + 100, wy); x.lineTo(wx + 100, wy + 200); x.moveTo(wx, wy + 100); x.lineTo(wx + 200, wy + 100); x.stroke();
    rbox(wx - 70, wy, 60, 200, 6, '#3f7a4a', 6); rbox(wx + 210, wy, 60, 200, 6, '#3f7a4a', 6); rbox(wx - 20, wy + 200, 240, 40, 8, '#ffffff', 6); });
  rbox(DOORX - 110, 1560, 220, 345, 10, '#4a2c18', 8); rbox(DOORX - 96, 1574, 192, 331, 6, '#2a1a10', 0);                 // open doorway (dark inside)
  poly([[DOORX - 110, 1560], [DOORX - 220, 1600], [DOORX - 220, 1880], [DOORX - 110, 1905]], '#8a5232', 8); ell(DOORX - 190, 1740, 10, 10, '#e2b649', 4);   // door leaf, open
  rbox(DOORX - 140, 1900, 280, 30, 8, '#ffffff', 6);
  rbox(1040, 1800, 160, 110, 8, '#8a5a3a', 6); [1060, 1110, 1160].forEach(lx => ell(lx, 1800, 22, 22, '#d49a62', 4)); }   // log pile
function world(t, id, baronMood, guards) {
  x.fillStyle = vg(-800, 1500, '#5fb4f5', '#dff2ff'); x.fillRect(-1500, -1500, 5600, 3200); ell(400, 300, 110, 110, '#fff3a0', 0);
  [[200, 420], [1500, 300], [2400, 450]].forEach(([cx, cy], i) => { const ox = (t * 18 + i * 200) % 300; [[-90, 0, 90], [0, -40, 110], [100, 0, 90]].forEach(([a, b, r]) => ell(cx + ox + a, cy + b, r, r * 0.7, '#ffffff', 0)); });
  [[-400, 1500, 1100], [500, 1500, 1300], [1500, 1500, 1050], [2400, 1500, 1250]].forEach(([mx, my, h], i) => { poly([[mx - 800, my], [mx, my - h * 0.75], [mx + 800, my]], i % 2 ? '#8fa8c8' : '#a3b8d4', 6); poly([[mx - 230, my - h * 0.75 + 220], [mx, my - h * 0.75], [mx + 230, my - h * 0.75 + 220], [mx + 90, my - h * 0.75 + 180], [mx, my - h * 0.75 + 240], [mx - 90, my - h * 0.75 + 180]], '#ffffff', 5); });
  x.fillStyle = SNOW; x.fillRect(-1500, 1500, 5600, 2000); x.fillStyle = 'rgba(160,185,220,.35)'; for (let i = 0; i < 40; i++) ell(-600 + (i * 211) % 3600, 1560 + (i * 89) % 900, 120, 16, 'rgba(170,195,230,.35)', 0);
  [[-200, 1560, 380], [120, 1600, 460], [700, 1540, 340], [2180, 1580, 420], [2500, 1620, 500], [2820, 1560, 380]].forEach(([px, by, h]) => snowPine(px, by, h));
  rbox(260, 1600, 30, 300, 6, '#7a5232', 6); rbox(130, 1560, 300, 110, 12, '#2f5fb3', 7); txt('CHALET DU BARON →', 280, 1617, 40, '#fff', { stroke: false });   // sign post
  ell(2380, 1960, 200, 60, '#e9f0fb', 6); rbox(2300, 1700, 160, 220, 80, '#ffffff', 7); ell(2380, 1660, 70, 70, '#ffffff', 7); ell(2360, 1650, 8, 8, OL, 0); ell(2400, 1650, 8, 8, OL, 0); poly([[2380, 1670], [2440, 1680], [2380, 1690]], C.orange, 3);   // snowman
  chalet(t, id); printsLine();
  if (guards) { cast('guard', 870, GY + 100, 0.72, t, { mood: 'worried', look: 1, armUp: id === 's3' }); cast('guard', 2120, GY + 100, 0.72, t, { mood: 'worried', look: -1 }); }
  cast('boss', 1760, GY + 120, 0.8, t, { mood: baronMood, look: -1, armUp: id === 's2b', blink: t > 0.6 });
  if (id === 's1' && t < WF('s1', /matin/i) + 0.6) { const a = 1 - seg(t, WF('s1', /matin/i), WF('s1', /matin/i) + 0.6); x.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < 160; i++) { const fx = -400 + (i * 137) % 3200 + Math.sin(t * 2 + i) * 30, fy = (i * 97 + t * 260) % 2400 - 200; x.beginPath(); x.arc(fx, fy, 7 + (i % 3) * 3, 0, 7); x.fill(); } }
}
function printsCard(w, h) { x.fillStyle = SNOW; x.fillRect(0, 0, w, h); rbox(w / 2 - 70, 10, 140, 120, 6, '#2a1a10', 6); rbox(w / 2 - 110, 0, 220, 20, 4, '#7a3f2a', 5);
  for (let i = 0; i < 6; i++) shoe(w / 2 + (i % 2 ? 34 : -34), h - 50 - i * 62, -Math.PI / 2, 0.9, '#9fb2cf');
  x.strokeStyle = C.red; x.lineWidth = 8; x.beginPath(); x.moveTo(w - 50, h - 60); x.lineTo(w - 50, 170); x.stroke(); poly([[w - 72, 185], [w - 50, 145], [w - 28, 185]], C.red, 0); }
function shelfCard(w, h) { x.fillStyle = '#f3dcb4'; x.fillRect(0, 0, w, h); rbox(30, h - 120, w - 60, 40, 6, '#8a5a3a', 6);
  x.setLineDash([16, 12]); x.strokeStyle = C.red; x.lineWidth = 7; x.strokeRect(w / 2 - 90, h - 360, 180, 240); x.setLineDash([]); txt('?', w / 2, h - 240, 130, C.red, { stroke: false }); txt('GTA 6 COLLECTOR', w / 2, 50, 40, OL, { stroke: false }); }
function checkCard(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['TUNNEL', /tunnel/i], ['HÉLICO', /hélico/i], ['TOIT', /toit/i]].forEach(([s, re], i) => { txt(s, w / 2 - 40, 70 + i * 100, 60, OL, { stroke: false });
  if (_T >= WF('s4', re)) txt('✗', w / 2 + 130, 70 + i * 100, 70, C.red, { stroke: false }); }); }
function roomCard(t) { return (w, h) => { x.fillStyle = '#ffcf9a'; x.fillRect(0, 0, w, h); x.fillStyle = '#c98a5a'; x.fillRect(0, h * 0.72, w, h); rbox(20, 40, 300, 200, 10, '#111', 7);
  const g = x.createLinearGradient(0, 50, 0, 230); g.addColorStop(0, '#ff9a4c'); g.addColorStop(1, '#c04cc8'); x.fillStyle = g; x.fillRect(32, 52, 276, 176); txt('GTA 6', 170, 150, 70, '#fff', { stroke: true });
  rbox(w - 150, 60, 110, 150, 8, '#2f5fb3', 6); txt('GTA 6', w - 95, 120, 30, '#fff', { stroke: false }); txt('COLLECTOR', w - 95, 160, 20, '#fff', { stroke: false });
  x.save(); x.translate(w * 0.62, h + 130); x.scale(0.5, 0.5); p47(0, 0, 1, t, { mood: 'smug', look: -1, blink: false }); x.restore();
  rbox(w * 0.62 - 70, h - 110, 140, 60, 26, '#26262b', 6); ell(w * 0.62 - 40, h - 80, 9, 9, C.red, 0); ell(w * 0.62 + 40, h - 80, 9, 9, '#3fbf6f', 0); }; }
function draw(t) {
  const id = curId(t), tDisp = WF('s1', /disparu/i), tTr = WF('s2', /traces/i), tVers = WF('s2', /vont/i), tVide = WF('s3', /vide/i), tRess = WF('s3', /ressort/i),
    tTun = WF('s4', /tunnel/i), tPour = WF('s4', /pourtant/i);
  const K = [[0, 0, 1640, 1560, 1.55], [B.ff.end - 0.1, 1.3, 1150, 1450, 0.62], [tDisp - 0.2, 1.4, 1250, 1400, 0.8],
    [S('s2'), 1.4, 450, 1950, 1.4], [tTr + 0.3, 3.2, 1250, 1880, 1.35], [S('s2b'), 1.2, 1640, 1600, 1.35],
    [S('s3'), 1.3, 1450, 1450, 0.85], [tRess - 0.3, 1.6, 1900, 1620, 1.05], [S('s4'), 1.6, 2000, 1500, 0.8], [S('q'), 1.3, 1640, 1560, 1.55]];
  camPath(t, K);
  const bm = id === 'ff' || id === 'q' ? 'shock' : id === 's1' ? 'worried' : id === 's2' ? 'neutral' : id === 's2b' ? 'angry' : id === 's3' ? (t > tVide ? 'shock' : 'worried') : t > tPour ? 'shock' : 'worried';
  world(t, id, bm, id === 's2b' || id === 's3' || id === 's4');
  resetCam();
  hookCard(t, [['SES TRACES ENTRENT…', 90], ["MAIS IL N'Y EST PLUS", 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE CHALET DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tDisp) polaroid(560, 700, 440, 480, P(t, tDisp, 0.3), shelfCard, 'DISPARU', -0.04);
  if (id === 's2' && t >= tTr + 0.6) polaroid(560, 700, 440, 560, P(t, tTr + 0.6, 0.3), printsCard, 'LES TRACES', 0.04);
  if (id === 's3' && t >= tVide && t < tRess) onoma('VIDE !', 540, 520, P(t, tVide, 0.2), 170);
  if (id === 's4' && t < tPour) polaroid(560, 680, 440, 360, P(t, tTun - 0.1, 0.3), checkCard, 'VÉRIFIÉ', -0.04);
  if (id === 's4' && t >= tPour) polaroid(560, 700, 520, 460, P(t, tPour, 0.3), roomCard(t), 'CHEZ 47, CE MATIN', 0.04);
  endCards(t, [['COMMENT IL EST SORTI ?', 80, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
