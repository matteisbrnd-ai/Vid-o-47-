// La chambre — Galagade style: ONE warm hotel room (window + minibar + TV at left, door to the corridor in the middle,
// bed with 47, the loot and his Tasty Crousty at right). The corridor is seen through the open door. Floor y ≈ 1900.
window.CTA = 'TAGUE CELUI QUI FRAPPE JAMAIS'; window.LOOK = 'gala';
const GY = 1900, DX = 3200, P47 = 2700, SUIT = { body: '#2c3550', body2: '#222a40', pants: '#222a40' };
function tasty(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s);
  [[-60, -150, -0.3], [10, -170, 0.05], [70, -145, 0.35]].forEach(([a, b, r]) => { x.save(); x.translate(a, b); x.rotate(r); ell(0, 0, 46, 62, '#c8782e', 6); rbox(-12, 40, 24, 70, 10, '#f4ead8', 5); x.restore(); });
  poly([[-140, -110], [140, -110], [115, 120], [-115, 120]], '#d6332b', 8);
  x.save(); x.beginPath(); x.moveTo(-140, -110); x.lineTo(140, -110); x.lineTo(115, 120); x.lineTo(-115, 120); x.closePath(); x.clip(); x.fillStyle = '#fff'; [-90, -30, 30, 90].forEach(sx => x.fillRect(sx - 12, -120, 24, 250)); x.restore();
  rbox(-120, -40, 240, 80, 14, '#fff3d6', 6); txt('TASTY', 0, -14, 44, C.red, { stroke: false }); txt('CROUSTY', 0, 22, 40, OL, { stroke: false }); x.restore(); }
function lootBag(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s);
  [[-70, -230, '#ffd23f'], [20, -250, '#e2b649'], [90, -215, '#ffd23f']].forEach(([a, b, c]) => { ell(a, b, 50, 30, c, 6); });
  x.beginPath(); x.moveTo(-170, 0); x.quadraticCurveTo(-210, -150, -110, -200); x.lineTo(110, -200); x.quadraticCurveTo(210, -150, 170, 0); x.closePath(); fs('#9a6a3e', 8);
  x.strokeStyle = '#e2b649'; x.lineWidth = 10; x.beginPath(); x.arc(-40, -200, 60, 0.2, 2.6); x.stroke(); txt('€', 0, -90, 110, '#ffd23f', { sw: 8 }); x.restore(); }
function phone(px, py, s, lit) { x.save(); x.translate(px, py); x.rotate(0.25); rbox(-28 * s, -60 * s, 56 * s, 120 * s, 12 * s, '#1b1b1f', 5); rbox(-20 * s, -48 * s, 40 * s, 92 * s, 6 * s, lit ? '#9fe0ff' : '#3a3d48', 0); x.restore(); }
function valise(px, py, s) { rbox(px - 90 * s, py - 150 * s, 180 * s, 150 * s, 16 * s, '#6b4428', 7); rbox(px - 30 * s, py - 185 * s, 60 * s, 40 * s, 12 * s, 'rgba(0,0,0,0)', 7); x.fillStyle = '#e2b649'; x.fillRect(px - 70 * s, py - 90 * s, 20 * s, 14 * s); x.fillRect(px + 50 * s, py - 90 * s, 20 * s, 14 * s); }
function lamp(px, py) { x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(px, py, 10, px, py, 380); g.addColorStop(0, 'rgba(255,220,140,.45)'); g.addColorStop(1, 'rgba(255,220,140,0)'); x.fillStyle = g; x.fillRect(px - 400, py - 400, 800, 800); x.restore();
  poly([[px - 70, py - 40], [px + 70, py - 40], [px + 45, py - 140], [px - 45, py - 140]], '#ffe7a8', 7); }
function corridor(t) { // seen through the door: warm wallpaper, door 48 opposite, carpet, sconce
  x.fillStyle = '#e9b97a'; x.fillRect(DX - 260, 900, 520, 1000); x.fillStyle = 'rgba(160,90,40,.18)'; for (let i = 0; i < 8; i++) x.fillRect(DX - 260 + i * 70, 900, 26, 760);
  rbox(DX - 60, 1080, 220, 580, 8, '#8a5a3a', 6); rbox(DX + 10, 1130, 80, 46, 8, '#e2b649', 5); txt('48', DX + 50, 1155, 40, OL, { stroke: false }); ell(DX + 130, 1400, 12, 12, '#e2b649', 4);
  lamp(DX - 170, 1150); x.fillStyle = '#a8323a'; x.fillRect(DX - 260, 1660, 520, 240); x.fillStyle = '#e2b649'; for (let i = 0; i < 6; i++) x.fillRect(DX - 260 + i * 95, 1760, 50, 10); }
function room(t, open) {
  x.fillStyle = '#f3d7a6'; x.fillRect(-1200, -600, 6000, 2600); x.fillStyle = 'rgba(200,140,80,.16)'; for (let i = 0; i < 95; i++) x.fillRect(-1200 + i * 66, -600, 24, 2100);  // striped wallpaper
  x.fillStyle = '#c98f5a'; x.fillRect(-1200, 1480, 6000, 30); x.fillStyle = '#e8bf8a'; x.fillRect(-1200, 1510, 6000, 390); x.strokeStyle = 'rgba(120,70,30,.3)'; x.lineWidth = 5; for (let i = 0; i < 52; i++) x.strokeRect(-1180 + i * 120, 1540, 90, 320); // wainscot
  x.fillStyle = '#b8323e'; x.fillRect(-1200, GY - 10, 6000, 1200); x.fillStyle = 'rgba(255,210,120,.35)'; for (let i = 0; i < 70; i++) ell(-1100 + (i * 173) % 5800, GY + 60 + (i * 97) % 700, 34, 12, 'rgba(255,210,120,.35)', 0); // carpet
  // window with the city at dusk
  rbox(-20, 800, 560, 620, 10, '#3a3f6a', 9); const g = x.createLinearGradient(0, 810, 0, 1410); g.addColorStop(0, '#5d6fb8'); g.addColorStop(1, '#f2a46a'); x.fillStyle = g; x.fillRect(-10, 810, 540, 600);
  [[20, 1100, 90], [130, 1000, 80], [230, 1150, 100], [350, 960, 70], [440, 1080, 90]].forEach(([bx, by, bw]) => { x.fillStyle = '#2e3358'; x.fillRect(bx, by, bw, 420); x.fillStyle = '#ffe08a'; for (let k = 0; k < 8; k++) if ((bx + k) % 3) x.fillRect(bx + 14 + (k % 2) * 36, by + 30 + Math.floor(k / 2) * 60, 20, 26); });
  x.strokeStyle = '#3a3f6a'; x.lineWidth = 12; x.beginPath(); x.moveTo(260, 810); x.lineTo(260, 1410); x.stroke(); rbox(-60, 760, 120, 760, 30, '#b8323e', 7); rbox(480, 760, 120, 760, 30, '#b8323e', 7);
  // minibar + cans, dresser + TV
  rbox(620, 1540, 260, 360, 14, '#f4f2ec', 8); rbox(640, 1560, 220, 140, 8, '#cfd6de', 5); ['#2fd0c0', '#2fd0c0', '#e04a5a'].forEach((c, i) => rbox(660 + i * 70, 1590, 50, 100, 10, c, 4)); txt('MINIBAR', 750, 1780, 40, OL, { stroke: false });
  rbox(-40, 1650, 600, 250, 12, '#8a5a3a', 8); rbox(60, 1260, 400, 270, 14, '#111', 8); const tv = x.createLinearGradient(0, 1280, 0, 1510); tv.addColorStop(0, '#ff9a4c'); tv.addColorStop(1, '#c04cc8'); x.fillStyle = tv; x.fillRect(80, 1280, 360, 230); txt('GTA 6', 260, 1400, 70, '#fff', { stroke: true }); x.fillStyle = OL; x.fillRect(240, 1530, 40, 120);
  // door (open → corridor visible)
  if (open > 0.02) corridor(t); else { x.fillStyle = '#e9b97a'; x.fillRect(DX - 260, 900, 520, 1000); }
  x.strokeStyle = OL; x.lineWidth = 10; x.strokeRect(DX - 260, 900, 520, 1000); rbox(DX - 290, 870, 580, 50, 8, '#c98f5a', 8);
  const lw = 520 * (1 - 0.82 * open); rbox(DX - 260, 900, lw, 1000, 6, '#a86a3e', 8);
  if (open < 0.4) { x.strokeStyle = 'rgba(0,0,0,.2)'; x.lineWidth = 6; x.strokeRect(DX - 210, 960, lw - 100, 380); x.strokeRect(DX - 210, 1400, lw - 100, 440); ell(DX + 200 - (520 - lw), 1400, 18, 18, '#e2b649', 5);
    rbox(DX - 120, 1060, 240, 60, 8, '#f4f2ec', 5); txt('NE PAS DÉRANGER', DX, 1092, 30, C.red, { stroke: false }); }
  // painting + bed + nightstand
  rbox(1720, 980, 460, 320, 10, '#e2b649', 9); rbox(1750, 1010, 400, 260, 4, '#8fc7e8', 0); poly([[1750, 1270], [1900, 1100], [2020, 1200], [2150, 1060], [2150, 1270]], '#5fa24e', 0);
  rbox(1580, 1380, 1100, 300, 40, '#6b3a2a', 9); rbox(1560, 1640, 1140, 220, 30, '#f4f2ec', 8); rbox(1560, 1720, 1140, 200, 20, '#c94a4a', 8); ell(1760, 1640, 140, 60, '#ffffff', 7); ell(2480, 1640, 140, 60, '#ffffff', 7);
  rbox(2720, 1640, 200, 260, 10, '#8a5a3a', 8); lamp(2820, 1560); rbox(2805, 1560, 30, 80, 6, '#8a5a3a', 5); }
function timer(t, n, px, py, s = 1) { if (n < 0) return; ev('tick', 'tm' + n); x.save(); resetCam(); x.translate(px, py); const k = s * (1 + 0.18 * Math.pow(1 - (t % 1), 4)); x.scale(k, k);
  ell(0, 0, 118, 118, '#fff', 10); x.strokeStyle = C.red; x.lineWidth = 18; x.beginPath(); x.arc(0, 0, 92, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (n / 10)); x.stroke();
  txt(String(n), 0, 10, 120, C.red, { stroke: false }); rrc(0, -132, 50, 26, 8, OL, 0); x.restore(); }
function draw(t) {
  const id = curId(t), tTasty = WF('s1', /Tasty/i), tCh = WF('s1', /Chambre/i), tToc = WF('s2', /toc/i), tPorte = WF('s2', /porte/i), tPard = WF('s3', /pardon/i),
    tRef = WF('s4', /referme/i), tAsc = WF('s4', /ascenseur/i), tCl = WF('s5', /cloche/i), tTrois = WF('s5', /trois/i), tDeux = WF('s5', /deux/i);
  const TWO = [2960, 1330, 1.28];                       // two-shot: 47 (left) + the doorway (right) — hook and ending
  const K = [[0, 0, ...TWO], [0.2, 3, 2965, 1320, 1.34], [B.ff.end - 0.1, 0.9, 520, 1330, 1.0], [S('s1') + 0.9, 1.4, 700, 1320, 0.92],
    [tTasty - 0.5, 1.8, 2330, 1420, 1.2], [tCh, 1.2, 2600, 1330, 1.3], [S('s2'), 1.4, 2950, 1380, 1.05], [tPorte, 1.3, 3240, 1300, 1.35],
    [S('s3') + 0.1, 1.2, 3230, 1230, 1.62], [S('s4') + 0.2, 1.4, 3230, 1340, 1.15], [S('s5') - 0.1, 1.4, 2700, 1250, 1.6], [S('q') - 0.1, 1.2, ...TWO]];
  camPath(t, K, 0);
  const inFF = id === 'ff', inQ = id === 'q';
  const open = inFF || inQ ? 1 : id === 's2' ? eIO(seg(t, tPorte - 0.2, tPorte + 0.4)) : id === 's3' ? 1 : id === 's4' ? 1 - eIO(seg(t, tRef, tRef + 0.6)) : 0;
  room(t, open);
  const strangerIn = inFF || inQ || (id === 's2' && t > tPorte) || id === 's3' || (id === 's4' && t < tRef + 0.3);
  if (strangerIn) { const menace = inFF || inQ; cast('director', DX + 20, GY - 30, 0.8, t, { ...SUIT, mood: menace ? 'angry' : id === 's3' && t >= tPard ? 'smile' : 'neutral', look: -1, blink: !menace && t > 0.6 });
    valise(DX + 170, GY - 50, menace ? 1.15 : 0.9); }
  const onPhone = inFF || inQ;
  const m47 = inFF || inQ ? 'shock' : id === 's1' ? 'smile' : id === 's2' ? 'shock' : id === 's3' ? 'worried' : id === 's4' ? 'neutral' : 'angry';
  lootBag(2280, 1700, 0.9);
  if (inFF || inQ || id === 's5') tasty(2070, 1700, 0.7);
  p47(P47, GY + 40, 0.95, t, { mood: m47, look: id === 's1' ? -1 : 1, armUp: onPhone, sweat: inFF || inQ || id === 's5', blink: t > 0.6 });
  if (onPhone) phone(P47 + 108, GY + 40 - 620, 1.2, true);
  if (!(inFF || inQ || id === 's5')) tasty(P47 + 150, GY + 40 - 330, 0.55);
  resetCam();
  // countdown: 10 → … during the hook; back in s5 (« trois, deux… ») and on the end card, so the ending loops to the opening
  if (inFF) timer(t, Math.max(10 - Math.floor(t), 6), 900, 700, 0.85);
  if (id === 's5' && t >= tTrois) timer(t, t < tDeux ? 3 : 2, 900, 640, 1.0);
  if (inQ) timer(t, 1, 900, 700, 0.85);
  hookCard(t, [['UN INCONNU À SA PORTE…', 86], ['10 SECONDES POUR COMPRENDRE', 72, C.red]], B.ff.end + 0.1);
  if (inFF && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tTasty) banner('HÔTEL · 23 H', 540, 330, P(t, S('s1') + 0.3));
  if (id === 's1' && t >= tTasty && t < tCh) polaroid(560, 520, 420, 380, P(t, tTasty, 0.3), (w, h) => { x.fillStyle = '#ffe9c4'; x.fillRect(0, 0, w, h); tasty(w / 2, h / 2 + 70, 0.9); }, 'SON DÎNER', -0.04);
  if (id === 's1' && t >= tCh) pill('CHAMBRE 47', 540, 330, P(t, tCh, 0.3), C.red);
  if (id === 's2' && t >= tToc && t < tPorte) onoma('TOC TOC TOC', 540, 420, P(t, tToc, 0.2), 140);
  const tCroy = WF('s3', /croyais/i);
  if (id === 's3' && t >= tPard && t < tCroy) speech('OH PARDON !', 540, 330, P(t, tPard, 0.25), 80);
  if (id === 's3' && t >= tCroy) speech("JE CROYAIS QUE C'ÉTAIT MA CHAMBRE", 540, 330, P(t, tCroy, 0.25), 58);
  if (id === 's5' && t >= tCl && t < tTrois) onoma('?!', 760, 520, P(t, tCl, 0.2), 170);
  if (inQ) { paperCard([["QU'EST-CE QUI CLOCHE ?", 80, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]], 540, 250, P(t, S('q') + 0.1), { w: 800 });
    if (t > S('q') + 1.2) pill(window.CTA, 540, 1620, P(t, S('q') + 1.2), C.red); }
}
