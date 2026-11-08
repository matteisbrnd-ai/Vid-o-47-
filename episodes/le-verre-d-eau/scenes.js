// Le verre d'eau — Galagade style: one busy fried-chicken shop set, slow zooms, polaroid clues, hook card at frame 0.
// Set 0..2160 x 0..2800, floor y = GY. Door left, queue middle, counter right, kitchen behind.
window.CTA = 'TAGUE CELUI QUI A TOUJOURS LE HOQUET'; window.LOOK = 'gala';
const GY = 2000, SERVER = { hat: 'cap', hatCol: '#e03a2e', hatCol2: '#b02a20', body: '#e03a2e', body2: '#b02a20', pants: '#2a2f3a', num: false, collar: false };
function shop(t) {
  x.fillStyle = '#f6e3c2'; x.fillRect(0, -1500, 2160, 3500); bricks(0, 1150, 2160, 560, '#f0d2a8', 'rgba(150,100,60,.25)', 80, 40);           // walls
  x.fillStyle = '#c9302a'; x.fillRect(0, 1100, 2160, 50);
  rbox(60, 1000, 300, 1000, 10, '#7a5232', 8); rbox(90, 1040, 240, 520, 6, '#bfe3ff', 5); txt('OUVERT', 210, 1300, 44, C.red, { stroke: false });       // door
  rbox(520, 420, 1560, 300, 20, '#1b1b1f', 9); txt('TASTY CROUSTY', 1300, 520, 120, '#f5c542', { stroke: true });                                     // shop sign (our font, no logo)
  [[1000, 'TENDERS', '6,90 €'], [1360, 'FRITES', '2,50 €'], [1720, 'CROUSTY BOX', '9,90 €']].forEach(([mx, a, b]) => { rbox(mx - 160, 780, 320, 260, 14, '#2b2b30', 7);
    rrc(mx, 870, 170, 90, 30, '#e9a64a', 5); txt(a, mx, 960, 40, '#fff', { stroke: false }); txt(b, mx, 1005, 36, '#f5c542', { stroke: false }); });
  rbox(1250, 1200, 800, 300, 10, '#c9ced6', 7); rbox(1300, 1240, 220, 120, 8, '#8a8f99', 5); rbox(1560, 1240, 220, 120, 8, '#8a8f99', 5);              // kitchen
  x.fillStyle = '#d9b48a'; x.fillRect(0, 1700, 2160, 2000); x.strokeStyle = 'rgba(120,80,40,.25)'; x.lineWidth = 4; for (let i = 0; i < 28; i++) for (let j = 0; j < 14; j++) if ((i + j) % 2) { x.fillStyle = 'rgba(255,255,255,.18)'; x.fillRect(i * 80, 1700 + j * 80, 80, 80); }
  rbox(380, 1780, 150, 90, 10, '#c9302a', 6); rbox(440, 1870, 30, 130, 6, '#555', 5); rbox(640, 1800, 150, 90, 10, '#c9302a', 6); rbox(700, 1890, 30, 110, 6, '#555', 5); }  // stools
function counter() { rbox(1050, 1640, 1000, 380, 16, '#c9302a', 9); rbox(1030, 1600, 1040, 60, 12, '#f4f2ec', 8); rbox(1650, 1520, 140, 90, 10, '#2b2b30', 6); txt('CAISSE', 1720, 1568, 30, '#9cf', { stroke: false }); }
function glass(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); poly([[-60, -120], [60, -120], [45, 120], [-45, 120]], 'rgba(200,235,255,.75)', 7); poly([[-52, -40], [52, -40], [45, 120], [-45, 120]], '#8fd0ff', 0); x.restore(); }
function draw(t) {
  const id = curId(t), tMerciF = WF('ff', /merci/i), tEau = WF('s2', /eau/i), tSaute = WF('s3', /saute/i), tBouh = WF('s3', /BOUH/i), tSour = WF('s4', /sourit/i), tRep = WF('s4', /repart/i);
  const K = [[0, 0, 1280, 1450, 1.6], [tMerciF - 0.1, 0.4, 1100, 1380, 2.5], [B.ff.end - 0.1, 1.2, 300, 1500, 1.7], [S('s1') + 1.0, 2.0, 1080, 1450, 0.62],
    [S('s2'), 1.2, 1300, 1500, 1.35], [tEau, 0.6, 1300, 1450, 1.6], [S('s3'), 1.0, 1450, 1350, 2.3], [tSaute, 0.5, 1300, 1450, 1.5],
    [S('s4'), 0.5, 1100, 1380, 2.5], [tRep, 1.6, 700, 1450, 1.2], [S('q'), 1.2, 1280, 1450, 1.6]];
  const shake = (t > tBouh && t < tBouh + 0.4) || t < 0.3 ? 14 : 0; camPath(t, K, shake);
  shop(t); cast('old', 520, GY + 60, 0.72, t, { mood: 'neutral', look: 1 }); cast('woman', 760, GY + 60, 0.72, t, { mood: 'smile', look: 1 }); cast('rico', 280, GY + 160, 0.72, t, { mood: 'neutral', look: 1 });
  // the server: behind the counter, then jumps over it (s3), stays in front afterwards; in ff/q he is mid-BOUH in front
  const jump = id === 's3' ? seg(t, tSaute, tSaute + 0.6) : (id === 's4' || id === 'ff' || id === 'q') ? 1 : 0;
  const sx = lerp(1550, 1440, jump), sy = GY - 60 + 60 * jump - Math.sin(Math.PI * jump) * 420, front = jump > 0.5;
  const bouh = id === 'ff' || id === 'q' || (id === 's3' && t >= tBouh) || (id === 's4' && t < tSour);
  if (!front) cast('guard', sx, sy, 0.8, t, { ...SERVER, mood: id === 's3' ? 'smug' : 'neutral', look: -1 });
  counter();
  // 47: runs in from the door (s1), stands at the counter; hiccup jolt every ~1.3 s before the BOUH; walks out at « repart »
  const px = id === 's1' ? lerp(200, 1100, eOut(seg(t, S('s1') + 0.2, B.s1.end))) : id === 's4' && t >= tRep ? lerp(1100, 150, seg(t, tRep, tRep + 2.4)) : 1100;
  const cured = id === 'q' || id === 'ff' || id === 's4' || (id === 's3' && t >= tBouh), hic = !cured && (t % 1.3) < 0.12 ? -22 : 0;
  const m47 = id === 'ff' ? (t < tMerciF ? 'shock' : 'smile') : id === 'q' ? 'shock' : id === 's4' ? (t < tSour ? 'shock' : 'smile') : id === 's3' && t >= tBouh ? 'shock' : 'worried';
  p47(px, GY + 70 + hic, 0.82, t, { mood: m47, look: id === 's4' && t >= tRep ? -1 : 1, walk: (id === 's1' || (id === 's4' && t >= tRep)) ? t * 3 : 0, sweat: !cured || m47 === 'shock', blink: t > 0.6 });
  if (front) cast('guard', sx, sy, 0.82, t, { ...SERVER, mood: bouh ? 'angry' : 'smile', look: -1, armsUp: bouh, blink: false });
  if (id === 's2' && t >= tEau) glass(1250, 1540, 0.6);
  resetCam();
  hookCard(t, [['ON LUI A HURLÉ DESSUS…', 80], ['ET IL A DIT MERCI', 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if ((id === 'ff' && t < tMerciF) || id === 'q') onoma('BOUH !', 780, 700, 1, 170);
  if (id === 's1') banner('SAMEDI · 20 H', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tEau) polaroid(560, 700, 420, 460, P(t, tEau, 0.3), (w, h) => { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); txt('COMMANDE', w / 2, 70, 44, OL, { stroke: false }); glass(w / 2, h / 2 + 40, 0.9); txt('1 VERRE D\'EAU', w / 2, h - 50, 40, C.red, { stroke: false }); }, 'SA COMMANDE', -0.05);
  if (id === 's3' && t >= tBouh) onoma('BOUH !', 560, 520, P(t, tBouh, 0.15), 190);
  if (id === 's4' && t >= tSour && t < tRep) onoma('MERCI !', 540, 520, P(t, tSour + 0.2, 0.2), 150);
  endCards(t, [['POURQUOI IL DIT MERCI ?', 78, C.red], ['RÉPONDS EN UN MOT 👇', 50]]);
}
