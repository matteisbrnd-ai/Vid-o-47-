// Les histoires de 47 #1 — « Le fantôme du musée ». One night museum hall (world) + full-screen prop inserts (CCTV, journal, labo, menottes).
window.LOOK = 'gala';
const GY = 1900, FX = [200, 800, 1400, 2000, 2600], FY = 880, FW = 440, FH = 330;
function painting(cx, cy, w, h, k, fake) { x.save(); x.translate(cx - w / 2, cy - h / 2);
  rbox(-26, -26, w + 52, h + 52, 6, '#c9973a', 9); rbox(-8, -8, w + 16, h + 16, 2, '#8a6420', 5);
  x.beginPath(); x.rect(0, 0, w, h); x.clip();
  if (k === 0) { x.fillStyle = vg(0, h, '#ffb067', '#ffd9a0'); x.fillRect(0, 0, w, h); x.fillStyle = '#3f86c8'; x.fillRect(0, h * 0.62, w, h); ell(w * 0.7, h * 0.45, 46, 46, fake ? '#ffe36b' : '#e8452c', 5);
    if (!fake) poly([[w * 0.25, h * 0.6], [w * 0.45, h * 0.6], [w * 0.4, h * 0.7], [w * 0.3, h * 0.7]], '#5a3a22', 4), poly([[w * 0.35, h * 0.6], [w * 0.35, h * 0.32], [w * 0.47, h * 0.58]], '#fff', 4); }
  if (k === 1) { x.fillStyle = '#9ad0f0'; x.fillRect(0, 0, w, h); poly([[-20, h], [w * 0.35, h * 0.25], [w * 0.7, h]], '#6a7a8a', 5); poly([[w * 0.3, h], [w * 0.7, h * 0.35], [w + 20, h]], '#56677a', 5); x.fillStyle = '#5aa04a'; x.fillRect(0, h * 0.85, w, h); }
  if (k === 2) { x.fillStyle = '#2f4a6a'; x.fillRect(0, 0, w, h); rrc(w / 2, h * 0.78, 110, 120, 20, '#c96a3a', 5); [[-60, -40, '#e8452c'], [0, -80, '#ffd23f'], [60, -40, '#e86ab0']].forEach(([a, b, c]) => { x.strokeStyle = '#3a7a3a'; x.lineWidth = 6; x.beginPath(); x.moveTo(w / 2, h * 0.72); x.lineTo(w / 2 + a, h * 0.5 + b); x.stroke(); ell(w / 2 + a, h * 0.5 + b, 34, 34, c, 4); }); }
  if (k === 3) { x.fillStyle = '#e9d9b8'; x.fillRect(0, 0, w, h); ell(w / 2, h * 0.45, 80, 100, '#f1c9a0', 5); rbox(w / 2 - 120, h * 0.7, 240, 140, 40, '#5a3a6a', 5); ell(w / 2 - 28, h * 0.42, 8, 10, OL, 0); ell(w / 2 + 28, h * 0.42, 8, 10, OL, 0); x.strokeStyle = OL; x.lineWidth = 5; x.beginPath(); x.arc(w / 2, h * 0.5, 26, 0.2, Math.PI - 0.2); x.stroke(); }
  if (k === 4) { x.fillStyle = '#f2e6c8'; x.fillRect(0, 0, w, h); [['#e8452c', 0.25], ['#2c4fa8', 0.5], ['#ffd23f', 0.75]].forEach(([c, f], i) => rbox(w * f - 50, h * (0.2 + i * 0.12), 100, h * 0.5, 6, c, 5)); }
  x.restore(); }
function hall(t, lit = 0) { x.fillStyle = vg(-600, GY, '#9a7fb0', '#6a5584'); x.fillRect(-1200, -800, 5200, GY + 800); x.fillStyle = '#4a3a5e'; x.fillRect(-1200, GY, 5200, 1400);
  x.strokeStyle = 'rgba(255,255,255,.06)'; x.lineWidth = 4; for (let i = -12; i < 40; i++) { x.beginPath(); x.moveTo(i * 140, GY); x.lineTo(i * 140 - 300, GY + 1400); x.stroke(); }
  x.fillStyle = '#4a3a5a'; x.fillRect(-1200, GY - 70, 5200, 70); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.moveTo(-1200, GY); x.lineTo(4000, GY); x.stroke();
  rbox(-1200, 300, 5200, 30, 0, '#7a6390', 0); door(-450, GY - 640, 300, 640, '#3a2a22', 'SORTIE');
  // statue + plinth (the guard hides behind it)
  rbox(3080, GY - 360, 300, 360, 6, '#d8d2c8', 8); ell(3230, GY - 600, 90, 90, '#ece6dc', 8); rbox(3150, GY - 520, 160, 170, 30, '#ece6dc', 8);
  txt('MUSÉE DES BEAUX-ARTS', 1400, 220, 90, '#e2b649', { stroke: false }); }
function cctv(t, label, tc) { resetCam(); x.fillStyle = 'rgba(30,60,40,.14)'; x.fillRect(0, 0, W, H); x.fillStyle = 'rgba(255,255,255,.05)'; for (let y = (t * 120) % 8; y < H; y += 8) x.fillRect(0, y, W, 3);
  x.strokeStyle = 'rgba(255,255,255,.8)'; x.lineWidth = 8; [[60, 160, 1], [1020, 160, -1]].forEach(([a, b, d]) => { x.beginPath(); x.moveTo(a, b + 90); x.lineTo(a, b); x.lineTo(a + d * 90, b); x.stroke(); });
  if (Math.floor(t * 2) % 2 === 0) ell(110, 1720, 22, 22, '#e8302a', 0); txt('REC', 190, 1722, 56, '#fff', { stroke: false }); txt(label, 540, 1722, 52, '#fff', { stroke: false }); txt(tc, 900, 1722, 56, '#fff', { stroke: false }); }
function torch(px, py, ang, len = 900) { x.save(); x.globalCompositeOperation = 'lighter'; const g = x.createRadialGradient(px, py, 10, px, py, len); g.addColorStop(0, 'rgba(255,240,180,.45)'); g.addColorStop(1, 'rgba(255,240,180,0)'); x.fillStyle = g;
  x.beginPath(); x.moveTo(px, py); x.arc(px, py, len, ang - 0.28, ang + 0.28); x.closePath(); x.fill(); x.restore(); }
function bag(px, py, s) { rbox(px - 70 * s, py - 160 * s, 140 * s, 170 * s, 24 * s, '#2a2a30', 6); x.strokeStyle = OL; x.lineWidth = 8; x.beginPath(); x.arc(px, py - 160 * s, 40 * s, Math.PI, 0); x.stroke(); }
function newspaper(t, p) { if (p <= 0) return; ev('paper', 'journal'); resetCam(); x.fillStyle = '#20182a'; x.fillRect(0, 0, W, H); x.save(); x.translate(540, 900); const k = eOut(clamp(p)); x.rotate((1 - k) * 6 - 0.06); x.scale(0.2 + 0.8 * k, 0.2 + 0.8 * k);
  x.fillStyle = 'rgba(0,0,0,.4)'; x.fillRect(-440, -580, 900, 1200); x.fillStyle = '#efe8d8'; x.fillRect(-450, -600, 900, 1200);
  txt('LE PETIT MATIN', 0, -520, 70, OL, { stroke: false }); x.fillStyle = OL; x.fillRect(-410, -470, 820, 6);
  txt('LE FANTÔME', 0, -380, 120, C.red, { stroke: false }); txt('DU MUSÉE', 0, -260, 120, C.red, { stroke: false });
  x.fillStyle = '#3a4a3a'; x.fillRect(-380, -170, 760, 470); x.save(); x.beginPath(); x.rect(-380, -170, 760, 470); x.clip(); x.globalAlpha = 0.7; p47(0, 330, 0.55, t, { mood: 'smug', look: 1 }); bag(150, 250, 0.6); x.restore();
  x.fillStyle = 'rgba(255,255,255,.12)'; for (let y = -170; y < 300; y += 10) x.fillRect(-380, y, 760, 3);
  txt('IL ENTRE… ET NE VOLE RIEN', 0, 370, 54, OL, { stroke: false }); for (let i = 0; i < 5; i++) { x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(-400, 430 + i * 30, i === 4 ? 500 : 800, 12); } x.restore(); }
function lab(t, tF) { resetCam(); x.fillStyle = vg(0, H, '#eef3f6', '#cfd9e0'); x.fillRect(0, 0, W, H); x.fillStyle = '#b8c4cc'; x.fillRect(0, 1350, W, 600);
  painting(540, 980, 620, 470, 0, true); const mx = 540 + Math.sin(t * 1.6) * 140, my = 930; x.save(); x.beginPath(); x.arc(mx, my, 150, 0, 7); x.clip(); x.translate(mx, my); x.scale(1.8, 1.8); x.translate(-mx, -my); painting(540, 980, 620, 470, 0, true); x.restore();
  ell(mx, my, 150, 150, 'rgba(255,255,255,.08)', 14); x.strokeStyle = '#3a2a1e'; x.lineWidth = 34; x.beginPath(); x.moveTo(mx + 110, my + 110); x.lineTo(mx + 260, my + 260); x.stroke();
  txt('🔬 LABO D\'ANALYSE', 540, 420, 70, OL, { stroke: false }); if (t >= tF) stamp('FAUX', P(t, tF, 0.25), 640); }
function draw(t) {
  const id = curId(t), tRien = WF('ff', /RIEN/i), tRep = WF('s1', /repartait/i), tTab = WF('s2', /tableaux/i), tMq = WF('s2', /manquait/i), tCa = WF('s4', /caché/i), tDe = WF('s4', /décrocher/i), tAu = WF('s4', /AUTRE/i),
    tEnf = WF('s5', /enfui/i), tAna = WF('s5', /Analys/i), tFx = WF('s5', /FAUX/i), tCop = WF('s6', /copies/i), tVr = WF('s6', /vrai\b/i), tDir = WF('s7', /directeur/i), tCach = WF('s7', /cachette/i), tVol = WF('s8', /voleur/i), tRep2 = WF('s7', /reprendre/i);
  // ---------- full-screen inserts ----------
  if (id === 's3') { newspaper(t, seg(t, S('s3'), S('s3') + 0.45)); flashCut(t, S('s3')); return; }
  if (id === 's5' && t >= tAna - 0.1) { lab(t, tFx); flashCut(t, tAna - 0.1); return; }
  if (id === 's8' && t < tVol - 0.3) { const c = seg(t, S('s8') + 0.1, S('s8') + 0.35); cuffsInsert(t, c, lerp(1.35, 1.05, eOut(seg(t, S('s8'), S('s8') + 1.4))), c >= 1 ? Math.max(0, 1 - (t - S('s8') - 0.35) * 4) * 14 : 0, '#3a3d44', '#f6f6f6');
    stamp('ARRÊTÉ', P(t, S('s8') + 0.4, 0.25), 1620); polaroid(540, 420, 380, 340, P(t, S('s8') + 0.2, 0.3), (w, h) => { x.fillStyle = '#d8cfc0'; x.fillRect(0, 0, w, h); cast('director', w / 2, h + 200, 0.45, t, { mood: 'shock', look: 1 }); }, 'LE DIRECTEUR', -0.04); return; }
  // ---------- the hall ----------
  const night47 = { blink: t > 0.6 };
  let K;
  if (id === 'ff') K = [[0, 0, 1400, 1450, 0.85], [0.3, 2.4, 1400, 1500, 0.95]];
  else if (id === 's1') K = [[S('s1'), 0, -150, 1450, 0.85], [tRep, 0.8, -250, 1450, 0.8]];
  else if (id === 's2') K = [[S('s2'), 0, 300, 1350, 0.9], [S('s2') + 0.2, B.s2.end - S('s2'), 2300, 1350, 0.9]];
  else if (id === 's4') K = [[S('s4'), 0, 3000, 1500, 0.95], [tDe - 0.1, 0, 1400, 1300, 1.0], [tAu - 0.05, 0.35, 1400, 1200, 1.3]];
  else if (id === 's5') K = [[S('s5'), 0, 900, 1500, 0.85]];
  else if (id === 's6') K = [[S('s6'), 0, 1400, 1250, 0.62], [tVr, 0.6, 1400, 1150, 0.95]];
  else if (id === 's7') K = [[S('s7'), 0, 2300, 1400, 1.25], [tDir + 0.1, 0.25, 2300, 1350, 0.95]];
  else K = [[0, 0, 1400, 1400, id === 'end' ? 0.8 : 0.85]];
  camPath(t, K, id === 's4' && t > tAu && t < tAu + 0.3 ? 10 : 0);
  hall(t);
  // paintings: in s6 the wall shows which are copies
  FX.forEach((fx, i) => { const k = i, hang = !(id === 's4' && i === 2 && t > tDe && t < tAu) && !(id === 's5' && i === 2 && false);
    let fy = FY; if (id === 's4' && i === 2 && t > tDe && t < tAu) fy = FY + 400 * seg(t, tDe, tDe + 0.5);
    const fake = id === 's6' ? !(i === 2 && t >= tVr) : (id === 's4' && i === 2 ? t < tAu : false);
    if (hang) painting(fx, fy, FW, FH, k, fake); else painting(fx, fy, FW, FH, k, true);
    if (id === 's6' && t >= tCop) { const lab = fake ? 'COPIE' : 'VRAI ✓', col = fake ? C.red : C.green; x.save(); x.translate(fx, FY); x.rotate(-0.15); const pp = P(t, tCop + i * 0.12, 0.25); x.scale(pp, pp); rrc(0, 0, 330, 110, 16, col, 7); txt(lab, 0, 4, 76, '#fff', { stroke: false }); x.restore(); ev('stamp', 'cp' + i + lab); } });
  if (id === 's4' && t >= tAu) { const k = seg(t, tAu - 0.05, tAu + 0.35); if (k < 1) { x.save(); x.translate(FX[2], lerp(FY + 380, FY, eOut(k))); painting(0, 0, FW, FH, 2, false); x.restore(); } }
  // characters
  if (id === 'ff') { const px = lerp(1150, 1650, t / Math.max(1, B.ff.end)); p47(px, GY, 0.85, t, { ...night47, mood: 'smug', look: 1, walk: t * 1.2 }); bag(px - 150, GY - 330, 0.9); torch(px + 80, GY - 560, -0.25, 800); }
  if (id === 's1') { const out = t >= tRep, px = out ? lerp(150, -450, seg(t, tRep, tRep + 1.2)) : 150; p47(px, GY, 0.8, t, { ...night47, mood: 'smug', look: out ? -1 : 1, walk: out ? t : 0 }); bag(px + (out ? 140 : -140), GY - 320, 0.85); }
  if (id === 's2') { const gx = lerp(300, 2300, seg(t, S('s2') + 0.2, B.s2.end)); cast('guard', gx, GY, 0.82, t, { ...night47, mood: t >= tMq ? 'shock' : 'worried', look: 1, walk: t < B.s2.end - 0.3 ? t : 0 }); torch(gx + 60, GY - 600, -0.55, 900); }
  if (id === 's4') { if (t < tDe - 0.1) { cast('guard', 3400, GY, 0.82, t, { ...night47, mood: 'worried', look: -1 }); ell(3230, GY - 600, 90, 90, '#ece6dc', 8); }
    else { p47(1080, GY, 0.85, t, { ...night47, mood: t >= tAu ? 'smile' : 'smug', look: 1, armUp: true }); bag(820, GY - 20, 0.9); } }
  if (id === 's5') { const run = seg(t, tEnf, tEnf + 1.2); p47(lerp(1200, 300, run), GY, 0.85, t, { ...night47, mood: 'shock', look: -1, walk: run > 0 && run < 1 ? t * 2 : 0 }); cast('guard', 1750, GY, 0.82, t, { ...night47, mood: 'shock', look: -1 }); torch(1800, GY - 600, Math.PI + 0.4, 900);
    x.save(); x.translate(1100, GY - 40); x.rotate(-0.08); painting(0, 0, FW * 0.8, FH * 0.8, 0, true); x.restore(); }
  if (id === 's6') { p47(t >= tVr ? 1150 : 1400, GY, 0.75, t, { ...night47, mood: 'smile', look: 1, armUp: t >= tVr && t < tVr + 1.2 }); }
  if (id === 's7') { cast('director', 2300, GY, 0.95, t, { ...night47, mood: 'smug', look: -1 }); if (t >= tCach) { for (let i = 0; i < 6; i++) { const k = seg(t, tCach + i * 0.06, tCach + 0.5 + i * 0.06); rbox(2550 + i * 70, lerp(GY - 900, GY - 60 - (i % 3) * 30, k * k), 120, 60, 6, '#5fae5a', 5); } } }
  if (id === 's8' || id === 'end') { p47(1400, GY, 0.85, t, { ...night47, mood: 'smug', look: 1 }); }
  night(id === 's6' || id === 's8' || id === 'end' ? 0.06 : 0.14);
  // ---------- overlays ----------
  if (id === 'ff' || id === 's1') cctv(t, id === 'ff' ? 'CAM 03 · GALERIE' : 'CAM 01 · SORTIE', id === 's1' && t >= tRep ? '00:10' : '00:00');
  if (id === 'ff' && t < 0.25) { resetCam(); x.fillStyle = `rgba(255,255,255,${0.6 * (1 - t / 0.25)})`; x.fillRect(0, 0, W, H); }
  hookCard(t, [['IL ENTRE CHAQUE NUIT…', 80], ['ET NE VOLE RIEN ?!', 100, C.red]], B.ff.end + 0.1);
  if (id === 'ff' && t >= tRien) onoma('RIEN ?!', 760, 760, P(t, tRien, 0.2), 150);
  if (id === 's1') { pill('🎒 UN GRAND SAC', 540, 420, P(t, S('s1') + 0.3), C.orange); if (t >= tRep) pill('⏱️ 10 MIN… ET IL REPART', 540, 540, P(t, tRep), C.red); }
  if (id === 's2' && t >= tTab) { const n = Math.min(47, Math.floor(47 * seg(t, tTab, tTab + 0.9))); pill('🖼️ TABLEAUX : ' + n + ' / 47', 540, 400, 1, C.brown); if (t >= tMq) pill('✅ AUCUN NE MANQUE', 540, 520, P(t, tMq), C.green); }
  if (id === 's4' && t >= tCa && t < tDe - 0.1) pill('🔦 LE GARDIEN SE CACHE', 540, 400, P(t, tCa), C.blue);
  if (id === 's4' && t >= tAu) { onoma('?!', 860, 640, P(t, tAu, 0.2), 200); pill('IL REMET UN TABLEAU ?!', 540, 400, P(t, tAu + 0.1), C.red); }
  if (id === 's5' && t >= tEnf) pill('🖼️ IL LAISSE L\'ANCIEN', 540, 400, P(t, tEnf), C.orange);
  if (id === 's6') { paperCard([['LES VRAIS ?', 66], ['REMPLACÉS PAR DES COPIES', 52, C.red]], 540, 330, P(t, S('s6')), { w: 900 }); if (t >= tVr) pill('47 REMET LES VRAIS 🖼️', 540, 1480, P(t, tVr), C.green); }
  if (id === 's7') { if (t >= tDir) paperCard([['LE DIRECTEUR', 96, C.red], ['DU MUSÉE', 60]], 540, 380, P(t, tDir), { w: 820 }); if (t >= tCach) pill('💰 IL REVENDAIT LES VRAIS', 540, 600, P(t, tCach), C.brown); if (t >= tRep2) pill('🎒 47 LES REPRENAIT', 540, 720, P(t, tRep2), C.orange); }
  if (id === 's8' && t >= tVol - 0.3) { flashCut(t, tVol - 0.3); paperCard([['IL AVAIT VOLÉ…', 70], ['LE VOLEUR 😏', 104, C.red]], 540, 420, P(t, tVol - 0.25), { w: 860 }); }
  if (id === 'end') { const p = P(t, S('end') + 0.1); paperCard([['ET TOI ?', 80], ['ÉCRIS-LE EN COMMENTAIRE 💬', 48, C.red]], 540, 330, p, { w: 900 });
    const pul = 1 + 0.04 * Math.sin(t * 8); x.save(); resetCam(); x.translate(300, 620); x.scale(pul * eBack(clamp(P(t, S('end') + 0.3))), pul * eBack(clamp(P(t, S('end') + 0.3)))); rrc(0, 0, 440, 130, 30, C.blue, 8); txt('🚔 L\'ARRÊTER', 0, 4, 64, '#fff', { stroke: false }); x.restore();
    x.save(); resetCam(); x.translate(780, 620); x.scale(pul * eBack(clamp(P(t, S('end') + 0.5))), pul * eBack(clamp(P(t, S('end') + 0.5)))); rrc(0, 0, 440, 130, 30, C.green, 8); txt('🙏 MERCI 47', 0, 4, 64, '#fff', { stroke: false }); x.restore(); }
  if (id === 's1') flashCut(t, S('s1')); if (id === 's2') flashCut(t, S('s2')); if (id === 's4') { flashCut(t, S('s4')); flashCut(t, tDe - 0.1); } if (id === 's6') flashCut(t, S('s6')); if (id === 's7') flashCut(t, S('s7')); if (id === 'end') flashCut(t, S('end'));
}
