// Les pièces — one warm set: the Baron's office (bookshelves, globe, fireplace, big desk with 20 coins). 47 blindfolded at the desk.
// Coins are explained on polaroids (top view): F = face (gold, star), P = pile (silver).
window.LOOK = 'gala';
const GY = 1950, DX = 1500, DY = 1660;
function blindfold(px, py, s) { const y = py - 623 * s; rrc(px, y, 250 * s, 58 * s, 20 * s, '#1b1b1f', 5); x.fillStyle = '#1b1b1f'; x.beginPath(); x.moveTo(px + 115 * s, y); x.lineTo(px + 170 * s, y + 40 * s); x.lineTo(px + 150 * s, y + 60 * s); x.closePath(); x.fill(); }
function coinTop(px, py, r, face) { ell(px, py, r, r, face ? '#f5c542' : '#d9dde3', 4); ell(px, py, r * 0.72, r * 0.72, face ? '#e0a92e' : '#b7bdc6', 0); txt(face ? 'F' : 'P', px, py + 3, r * 1.1, face ? C.red : '#4a5160', { stroke: false }); }
function office(t) { x.fillStyle = vg(-1200, 1700, '#e9d4ae', '#f6e6c8'); x.fillRect(-1300, -1500, 4800, 3300);
  // bookshelves
  [[-400, 600], [2550, 600]].forEach(([bx, by]) => { rbox(bx - 330, by, 660, 1120, 10, '#6b4428', 9); for (let r = 0; r < 5; r++) { rbox(bx - 310, by + 40 + r * 210, 620, 20, 4, '#5a3a22', 4);
    for (let k = 0; k < 9; k++) { const h = 120 + ((k * 37 + r * 13) % 50); rbox(bx - 300 + k * 66, by + 40 + r * 210 - h, 56, h, 4, ['#c9302a', '#2c4fa8', '#2f8f4f', '#e2b649', '#7a3a8a'][(k + r) % 5], 4); } } });
  // portrait of the Baron + fireplace
  rbox(1250, 380, 500, 560, 12, '#e2b649', 10); rbox(1290, 420, 420, 480, 6, '#3a3d44', 5); x.save(); x.beginPath(); x.rect(1290, 420, 420, 480); x.clip(); cast('boss', 1500, 1240, 0.62, 0, { mood: 'smug', blink: false }); x.restore();
  rbox(700, 1080, 420, 60, 8, '#8a8f99', 7); rbox(730, 1140, 360, 580, 10, '#9aa0aa', 8); rbox(800, 1300, 220, 420, 80, '#2a1d16', 6); [[-1, 0], [0, -1], [1, 0]].forEach(([d, e], i) => { const f = 1 + 0.15 * Math.sin(t * 9 + i); poly([[910 + d * 40 - 40, 1700], [910 + d * 40, 1700 - 160 * f + e * 20], [910 + d * 40 + 40, 1700]], i === 1 ? '#ffd23f' : '#f2781f', 0); });
  // globe
  rbox(2050, 1400, 40, 320, 6, '#5a3a22', 5); ell(2070, 1340, 120, 120, '#6fb6e8', 7); x.fillStyle = '#7cc46a'; x.beginPath(); x.ellipse(2040, 1320, 50, 70, 0.4, 0, 7); x.fill();
  // floor
  x.fillStyle = '#7a5232'; x.fillRect(-1300, 1720, 4800, 2000); for (let k = 0; k < 30; k++) { x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(-1300 + k * 170, 1720, 6, 2000); }
  // desk
  rbox(DX - 650, DY - 20, 1300, 60, 12, '#5a3a22', 9); rbox(DX - 620, DY + 40, 1240, 300, 10, '#6b4428', 8); [0, 1].forEach(k => rbox(DX - 560 + k * 700, DY + 100, 420, 180, 8, '#7d5232', 5));
  // coins on desk (side view)
  for (let i = 0; i < 20; i++) { const cx = DX - 480 + (i * 53) % 960, cy = DY - 30 - (i % 3) * 8; ell(cx, cy, 30, 9, i % 2 ? '#f5c542' : '#d9dde3', 4); } }
function allCoins(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); for (let i = 0; i < 20; i++) { const c = i % 5, r = Math.floor(i / 5); coinTop(70 + c * (w - 140) / 4, 70 + r * (h - 140) / 3, 40, [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1][i]); } }
function rulesPol(w, h) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); [['20 PIÈCES : 10 F + 10 P', OL, 48], ['YEUX BANDÉS', OL, 52], ['2 TAS, AUTANT DE F', C.red, 54], ['IL PEUT EN RETOURNER', '#2a8a3a', 46], ['30 SECONDES', C.red, 56]].forEach(([s, c, f], i) => txt(s, w / 2, 64 + i * 84, f, c, { stroke: false })); }
function piles(w, h, flipped, showRight) { x.fillStyle = '#fbf3e4'; x.fillRect(0, 0, w, h); const L = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0], R = [1, 1, 0, 1, 1, 0, 1, 1, 0, 1];
  x.strokeStyle = OL; x.lineWidth = 4; x.beginPath(); x.moveTo(w / 2, 20); x.lineTo(w / 2, h - 20); x.stroke();
  txt('SON TAS', w / 4, 40, 44, OL, { stroke: false }); txt("L'AUTRE TAS", 3 * w / 4, 40, 44, OL, { stroke: false });
  L.forEach((f, i) => coinTop(w / 4 - 100 + (i % 3) * 100, 120 + Math.floor(i / 3) * 90, 36, flipped ? !f : !!f));
  if (showRight) R.forEach((f, i) => coinTop(3 * w / 4 - 100 + (i % 3) * 100, 120 + Math.floor(i / 3) * 90, 36, !!f));
  txt((flipped ? 7 : 3) + ' F', w / 4, h - 40, 60, flipped ? '#2a8a3a' : C.red, { stroke: false }); if (showRight) txt('7 F', 3 * w / 4, h - 40, 60, '#2a8a3a', { stroke: false }); }
function draw(t) {
  const id = curId(t), tBan = WF('s1', /bande/i), tRen = WF('s1', /renverse/i), tPile = WF('s2', /pile/i), tImp = WF('s2', /impossible/i), tTas = WF('s3', /tas/i), tRet = WF('s3', /retourner/i),
    tSec = WF('s4', /secondes/i), tCach = WF('s4', /cachot/i), tRet1 = WF('sol1', /retourne/i), tTrois = WF('sol2', /trois/i), tSept = WF('sol2', /sept/i), tDev = WF('sol3', /deviennent/i), tGag = WF('sol3', /gagné/i);
  const K = [[0, 0, DX + 120, 1300, 1.75], [B.ff.end - 0.1, 1.1, 1300, 1250, 0.62], [S('s1') + 1.0, 1.2, 1400, 1300, 0.9], [tRen, 1.0, DX, DY - 150, 1.4],
    [S('s3'), 1.0, DX + 100, 1350, 1.2], [S('s4'), 1.0, 2000, 1350, 1.3], [S('q'), 0.8, DX + 120, 1300, 1.6], [S('c1'), 1.0, 1300, 1250, 0.62],
    [S('sol1'), 0.8, DX + 120, 1350, 1.3], [S('sol3'), 1.0, DX, 1350, 1.0], [S('end'), 1.0, 1300, 1250, 0.62]];
  camPath(t, K, id === 'ff' && t < 0.4 ? 5 : 0);
  office(t);
  cast('boss', 2150, GY - 10, 0.78, t, { mood: id === 'sol3' || id === 'end' ? 'shock' : 'smug', look: -1, armUp: id === 's4' });
  if (id === 's4') { x.save(); x.translate(2020, GY - 10 - 0.78 * 690); rbox(-40, -70, 80, 140, 14, '#1b1b1f', 5); txt(String(Math.max(0, 30 - Math.floor(t - tSec))), 0, 0, 50, '#7cff8a', { stroke: false }); x.restore(); }
  const blind = !(id === 's1' && t < tBan) && id !== 'end', s47 = 0.8, px = DX + 120;
  p47(px, GY - 10, s47, t, { mood: id === 'ff' || id === 's4' || id === 'q' ? 'worried' : id.startsWith('sol') || id === 'end' ? 'smug' : 'neutral', look: 0, armsUp: id === 'sol1' && t >= tRet1 || id === 'sol3' && t >= tDev, sweat: id === 's4' || id === 'ff', blink: t > 0.6 });
  if (blind) blindfold(px, GY - 10, s47);
  // desk front edge drawn over the 47's legs
  rbox(DX - 650, DY - 20, 1300, 60, 12, '#5a3a22', 9); rbox(DX - 620, DY + 40, 1240, 300, 10, '#6b4428', 8); [0, 1].forEach(k => rbox(DX - 560 + k * 700, DY + 100, 420, 180, 8, '#7d5232', 5));
  for (let i = 0; i < 20; i++) { const cx = DX - 480 + (i * 53) % 960, cy = DY - 30 - (i % 3) * 8, fl = (id === 'ff' || (id === 'sol1' && t >= tRet1)) && i < 10 ? Math.abs(Math.sin(t * 6 + i)) : 1; ell(cx, cy - (1 - fl) * 40, 30, 9 + (1 - fl) * 20, i % 2 ? '#f5c542' : '#d9dde3', 4); }
  resetCam();
  hookCard(t, [['LES YEUX BANDÉS…', 80], ['2 TAS AVEC AUTANT', 76], ['DE « FACE » 😳', 92, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1') banner('LE BUREAU DU BARON', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's2' && t >= tPile) polaroid(560, 700, 600, 520, P(t, tPile, 0.3), allCoins, '10 FACE · 10 PILE', -0.03);
  if (id === 's2' && t >= tImp) stamp('AU TOUCHER : PAREIL', P(t, tImp, 0.25), 1200);
  if (id === 's3' && t >= tTas) polaroid(560, 720, 640, 500, P(t, tTas, 0.3), rulesPol, 'LES RÈGLES', -0.03);
  if (id === 's4' && t >= tCach) pill('⛓️ SINON : LE CACHOT', 540, 340, P(t, tCach), C.red);
  germanCards(t, [['COMMENT IL FAIT ?', 96, C.red]]);
  if (id === 'sol1' || id === 'sol2' && t < tTrois) { pill('1) 10 PIÈCES AU HASARD', 540, 330, P(t, S('sol1') + 0.6), C.orange); if (t >= tRet1) pill('2) IL LES RETOURNE TOUTES', 540, 450, P(t, tRet1), '#2a8a3a'); }
  if (id === 'sol2' && t >= tTrois) polaroid(560, 740, 860, 520, P(t, tTrois, 0.3), (w, h) => piles(w, h, false, t >= tSept), 'EXEMPLE', -0.02);
  if (id === 'sol3') { polaroid(560, 740, 860, 520, 1, (w, h) => piles(w, h, t >= tDev, true), 'APRÈS LE RETOURNEMENT', -0.02); if (t >= tGag) pill('7 = 7 ✅ À TOUS LES COUPS', 540, 330, P(t, tGag), '#2a8a3a'); }
}
