// Les histoires flippantes de 47 #1 — « Le colocataire invisible » : quelqu'un range chez 47 la nuit ; la vidéo montre 47 somnambule… puis il chuchote à l'objectif, et le placard se referme.
window.LOOK = 'gala';
const GY = 1500;
let NV = false;
function closet(o, eyes, t) { rbox(30, GY - 820, 280, 820, 6, '#7a5a3e', 8); rbox(170 - 2, GY - 800, 4, 780, 0, OL, 0); rbox(44, GY - 800, 124, 780, 4, '#8a6a4a', 6);
  const gw = 124 * o; rbox(172, GY - 800, 124, 780, 0, '#0a0a0e', 0); if (eyes > 0 && gw > 24) { x.save(); x.globalAlpha = eyes; ell(172 + gw * 0.45, GY - 560, 7, 5, '#f4f4f4', 0); ell(172 + gw * 0.75, GY - 560, 7, 5, '#f4f4f4', 0); x.restore(); }
  rbox(172 + gw, GY - 800, 124 - gw, 780, 4, '#8a6a4a', 6); ell(150, GY - 400, 8, 8, '#e2b649', 3); }
function bedDoor(o) { rbox(386, GY - 690, 268, 690, 4, '#5a4632', 8); rbox(400, GY - 676, 240, 676, 0, '#08080c', 0); rbox(400, GY - 676, 240 * (1 - o), 676, 4, '#c9b08a', 7); if (o < 0.8) ell(400 + 240 * (1 - o) - 30, GY - 340, 10, 10, '#e2b649', 3); }
function counter(clean) { rbox(700, GY - 420, 420, 420, 8, '#e8e4dc', 8); rbox(690, GY - 440, 440, 34, 6, '#6a6f78', 6); rbox(760, GY - 432, 220, 20, 8, '#9aa2ae', 4);
  if (clean) for (let i = 0; i < 5; i++) ell(1000, GY - 470 - i * 18, 70, 14, '#f6f6fa', 5); else for (let i = 0; i < 4; i++) ell(820 + (i % 2) * 70, GY - 440 - i * 12, 60, 16, '#d9c9a8', 5);
  rbox(720, GY - 1000, 380, 240, 8, '#d9d4c8', 7); }
function living(t, o) { room('#cfd6e0', '#b8c2d0', '#6a5a4a', GY); closet(o.closet ?? 0, o.eyes ?? 0, t); bedDoor(o.door ?? 0); counter(o.clean ?? true); rbox(120, 420, 140, 22, 4, '#7a5a3e', 5); }
function kitchen(t, clean) { room('#dfe6ee', '#c8d2de', '#7a6a5a', GY); rbox(-100, GY - 420, 1300, 420, 8, '#e8e4dc', 8); rbox(-120, GY - 440, 1340, 34, 6, '#6a6f78', 6); rbox(560, GY - 432, 300, 20, 8, '#9aa2ae', 4);
  if (clean) { for (let i = 0; i < 6; i++) ell(760, GY - 470 - i * 18, 80, 16, '#f6f6fa', 5); [[680, GY - 600], [860, GY - 640], [770, GY - 700]].forEach(([sx, sy], i) => { if (Math.sin(t * 6 + i * 2) > 0.2) txt('✨', sx, sy, 60, '#fff', { stroke: false }); }); } else for (let i = 0; i < 4; i++) ell(700 + (i % 2) * 80, GY - 440 - i * 12, 70, 18, '#d9c9a8', 5);
  rbox(80, 360, 360, 260, 10, '#bfe4ff', 8); }
function bedroom(t) { room('#d9d2e6', '#c4bcd6', '#6a5a4a', GY); rbox(120, GY - 340, 840, 300, 20, '#f2f2f6', 8); rbox(120, GY - 380, 240, 120, 30, '#ffffff', 7); rbox(100, GY - 60, 880, 60, 8, '#7a5a3e', 7);
  x.strokeStyle = '#c9c9d6'; x.lineWidth = 5; x.beginPath(); x.moveTo(380, GY - 300); x.lineTo(940, GY - 300); x.stroke(); rbox(100, GY - 560, 60, 520, 8, '#7a5a3e', 7); }
function entrance(t, flip) { room('#e6dcc8', '#d6c8ae', '#6a5a4a', GY); door(540, GY - 760, 360, 760, '#4a5a7a', null);
  for (let i = 0; i < 3; i++) { const cx = 300 + i * 240; [[-34], [34]].forEach(([d]) => { x.save(); x.translate(cx + d * 1.5, GY - 40); x.scale(1.5, 1.5); if (flip) x.scale(1, -1); rbox(-28, -70, 56, 130, 26, ['#c0392b', '#2a2d36', '#e8e8ec'][i], 6); ell(0, -50, 24, 22, '#f4f4f4', 3); x.restore(); }); } }
function nvBegin() { NV = true; x.save(); x.filter = 'grayscale(1) brightness(1.05) contrast(1.25)'; }
function nvEnd(t, clock) { x.restore(); NV = false; resetCam(); x.save(); x.globalCompositeOperation = 'multiply'; x.fillStyle = '#7dff9e'; x.fillRect(0, 0, W, H); x.restore();
  for (let y = 0; y < H; y += 6) { x.fillStyle = 'rgba(0,0,0,.16)'; x.fillRect(0, y, W, 2); } x.fillStyle = `rgba(255,255,255,${0.03 + 0.03 * Math.random()})`; x.fillRect(0, 0, W, H); vignette(0.55);
  if (Math.sin(t * 6) > 0) ell(70, 110, 20, 20, '#ff3a3a', 0); txt('REC', 150, 112, 46, '#fff', { stroke: false }); rbox(660, 70, 380, 90, 10, 'rgba(0,0,0,.55)', 0); txt(clock, 850, 116, 64, '#fff', { stroke: false }); }
function phoneCard(p, t) { if (p <= 0) return; resetCam(); x.save(); x.translate(540, 640); const k = eBack(clamp(p)); x.scale(k, k); rbox(-170, -300, 340, 600, 44, '#1b1b1f', 8); rbox(-145, -250, 290, 480, 14, '#0e1a12', 0); ell(-90, -200, 14, 14, '#ff3a3a', 0); txt('REC', -30, -198, 36, '#fff', { stroke: false }); txt('🌙 MODE NUIT', 0, 60, 34, '#7dff9e', { stroke: false }); x.restore(); }
function draw(t) {
  const id = curId(t), tSeul = WF('ff', /seul/i), tVai = WF('ff', /vaisselle/i), tOub = WF('s1', /oublié/i), tRef = WF('s2', /refait/i), tCar = WF('s2', /carré/i), tCha = WF('s3', /chaussures/i), tInt = WF('s3', /intérieur/i),
    tSer = WF('s4', /serrure/i), tLen = WF('s4', /lendemain/i), tTel = WF('s5', /téléphone/i), tNuit = WF('s5', /nuit/i), tMin = WF('s6', /Minuit/i), tHeu = WF('s6', /heure/i), tQua = WF('s6', /quatorze|3h14/i), tOuv = WF('s6', /ouvre/i),
    tFli = WF('mid', /flippant/i), tSom = WF('s7', /Somnambule/i), tRir = WF('s8', /rire/i), tFin = WF('s9', /fin/i), tCou = WF('s10', /coucher/i), tRou = WF('s10', /rouvre/i), tTel10 = WF('s10', /téléphone/i), tChu = WF('s11', /chuchote/i), tSeuls = WF('s11', /seuls/i), tPla = WF('s12', /placard/i), tDou = WF('s12', /Doucement/i);
  const HOOK = [['IL VIT SEUL… 🏠', 76], ['QUELQU\'UN FAIT SA VAISSELLE 😨', 52, C.red]];
  let K;
  if (id === 's11') K = [[S('s11'), 0, 540, 960, 1.0], [S('s11') + 0.2, 5, 540, 900, 1.12]];
  else if (id === 's12') K = [[S('s12'), 0, 540, 1000, 1.0], [tPla - 0.2, 2.5, 230, 1080, 1.6]];
  else if (id === 'end') K = [[S('end'), 0, 200, 1100, 1.5], [S('end') + 0.2, 6, 200, 1100, 1.65]];
  else K = [[S(id), 0, 540, 1000, 1.0], [S(id) + 0.2, 4, 560, 980, 1.08]];
  camPath(t, K, (id === 'ff' && t >= tSeul && t < tSeul + 0.3) || (id === 's11' && t >= tSeuls && t < tSeuls + 0.4) ? 12 : 0);
  if (id === 'ff' || id === 's1') { kitchen(t, true); p47(300, GY, 0.85, t, { mood: id === 'ff' ? (t >= tVai ? 'shock' : 'worried') : 'worried', look: 1, armUp: id === 's1' }); }
  if (id === 's2') { bedroom(t); p47(900, GY, 0.85, t, { mood: t >= tCar ? 'shock' : 'worried', look: -1 }); }
  if (id === 's3') { entrance(t, false); p47(920, GY, 0.85, t, { mood: t >= tInt ? 'shock' : 'worried', look: -1 }); }
  if (id === 's4') { if (t < tLen - 0.1) { entrance(t, false); p47(760, GY, 0.85, t, { mood: 'angry', look: -1, armUp: true }); ell(650, GY - 380, 20, 20, '#f5c542', 5); rbox(620, GY - 420, 60, 80, 10, '#c9cdd2', 5); } else { kitchen(t, true); p47(300, GY, 0.85, t, { mood: 'shock', look: 1 }); } }
  if (id === 's5') { living(t, { door: 0, clean: false }); p47(560, GY, 0.85, t, { mood: 'smug', look: -1, armUp: t < tNuit }); }
  if (['s6', 'mid', 's7', 's10', 's12', 'end'].includes(id)) { nvBegin();
    let door = 0, clean = false, closetO = 0.08, eyes = 0, clock = '00:00';
    if (id === 's6') { clock = t >= tQua ? '03:14' : (t >= tHeu ? '01:00' : '00:00'); door = t >= tOuv - 0.2 ? clamp((t - tOuv + 0.2) / 1.2) * 0.8 : 0; }
    if (id === 'mid') { clock = '03:14'; door = 0.8 + 0.05 * Math.sin(t * 2); }
    if (id === 's7') { clock = '03:15'; door = 0.8; }
    if (id === 's10') { clock = t < tRou ? '03:20' : '03:21'; door = t < tCou ? 0.8 : (t < tRou - 0.3 ? 0 : clamp((t - tRou + 0.3) / 0.6) * 0.8); clean = true; }
    if (id === 's12' || id === 'end') { clock = '03:22'; door = 0.8; clean = true; closetO = id === 'end' ? 0.25 : lerp(0.55, 0.08, clamp(seg(t, tPla, tDou + 0.6))); eyes = id === 'end' ? 1 : clamp((t - tPla) / 0.4) * (closetO > 0.2 ? 1 : 0); }
    living(t, { door, clean, closet: closetO, eyes });
    if (id === 's7') { const w = clamp(seg(t, S('s7'), B.s7.end)); p47(lerp(520, 760, w), GY, 0.85, t, { mood: 'neutral', look: 1, armsUp: true, walk: t * 1.2 }); }
    if (id === 's10') { if (t < tCou + 0.3) { const w = clamp(seg(t, S('s10'), tCou + 0.3)); p47(lerp(820, 520, w), GY, 0.85, t, { mood: 'neutral', look: -1, armsUp: true, walk: t * 1.2 }); }
      else if (t >= tRou) { const w = clamp(seg(t, tRou, B.s10.end)); p47(lerp(520, 560, w), lerp(GY, GY + 700, w), lerp(0.85, 1.6, w), t, { mood: 'neutral', look: 1, armsUp: true, walk: t * 1.2 }); } }
    if (id === 's12' && t < tPla + 0.2) p47(760, GY + 1200, 2.2, t, { mood: 'neutral', look: -1 });
    nvEnd(t, clock); }
  if (id === 's11') { nvBegin(); living(t, { door: 0.8, clean: true, closet: 0.55 }); p47(540, GY + 1000, 2.3, t, { mood: 'neutral', look: 0 }); nvEnd(t, '03:22'); }
  if (id === 's8' || id === 's9') { living(t, { door: 0, clean: true }); p47(560, GY, 0.9, t, { mood: id === 's8' ? (t >= tRir ? 'smile' : 'neutral') : (t >= tFin ? 'shock' : 'smile'), look: 1, armUp: true }); rbox(660, GY - 760, 90, 160, 14, '#1b1b1f', 5); }
  if (!['s6', 'mid', 's7', 's10', 's11', 's12', 'end'].includes(id)) { resetCam(); x.fillStyle = 'rgba(30,40,80,.18)'; x.fillRect(0, 0, W, H); vignette(0.35); }
  resetCam();
  if (id === 'ff') { hookCard(t, HOOK, B.ff.end + 0.05); }
  if (id === 's1') { flashCut(t, S('s1')); pill('JOUR 1 · LA VAISSELLE ✨', 540, 300, P(t, S('s1') + 0.1), C.blue); if (t >= tOub - 0.3) paperCard([['« J\'AI OUBLIÉ… ? »', 60]], 540, 480, P(t, tOub - 0.3), { w: 700 }); }
  if (id === 's2') { flashCut(t, S('s2')); pill('JOUR 2 · LE LIT 🛏️', 540, 300, P(t, S('s2') + 0.1), C.blue); if (t >= tCar) stamp('AU CARRÉ', P(t, tCar, 0.25), 900); }
  if (id === 's3') { flashCut(t, S('s3')); pill('JOUR 3 · LES CHAUSSURES 👟', 540, 300, P(t, S('s3') + 0.1), C.blue); if (t >= tInt - 0.2) pill('TOURNÉES VERS L\'INTÉRIEUR 😨', 540, 1020, P(t, tInt - 0.2), C.red); }
  if (id === 's4') { flashCut(t, S('s4')); if (t < tLen - 0.1) pill('🔐 SERRURE CHANGÉE', 540, 300, P(t, tSer - 0.1), C.blue); else { flashCut(t, tLen - 0.1); stamp('ENCORE !', P(t, tLen, 0.25), 760); } }
  if (id === 's5') { flashCut(t, S('s5')); phoneCard(P(t, tTel - 0.2), t); }
  if (id === 's6') { flashCut(t, S('s6')); if (t >= tOuv - 0.2) onoma('…CRRRIC', 540, 330, P(t, tOuv - 0.2, 0.2), 90); }
  if (id === 'mid') { flashCut(t, S('mid')); paperCard([['QUI EST ENTRÉ ? 😨', 66]], 540, 300, P(t, S('mid'), 0.25), { w: 760 }); if (t >= tFli - 0.6) paperCard([['TON HISTOIRE FLIPPANTE', 50], ['EN DESSIN ANIMÉ 🎬', 56, C.red], ['LE + LIKÉ = PROCHAIN ÉPISODE', 40]], 540, 1060, P(t, tFli - 0.6), { w: 940 }); }
  if (id === 's7') { flashCut(t, S('s7')); if (t >= tSom - 0.2) pill('😴 SOMNAMBULE', 540, 330, P(t, tSom - 0.2), C.orange); }
  if (id === 's8') { flashCut(t, S('s8')); if (t >= tRir) pill('MYSTÈRE RÉSOLU 😂', 540, 300, P(t, tRir), '#2a8a3a'); }
  if (id === 's9') { flashCut(t, S('s9')); pill('🗑️ SUPPRIMER LA VIDÉO ?', 540, 300, P(t, S('s9') + 0.1), OL); if (t >= tFin - 0.2) pill('… ATTENDS. LA FIN. 😶', 540, 420, P(t, tFin - 0.2), C.red); }
  if (id === 's10') { flashCut(t, S('s10')); if (t >= tTel10 - 0.3) pill('IL VIENT VERS LE TÉLÉPHONE…', 540, 1150, P(t, tTel10 - 0.3), C.red); }
  if (id === 's11') { if (t >= tChu - 0.2) paperCard([['« ARRÊTE DE FILMER.', 56], ['ON N\'EST PAS SEULS. »', 64, C.red]], 540, 300, P(t, tChu - 0.2), { w: 900 }); }
  if (id === 's12') { if (t >= tPla) pill('LE PLACARD… 😱', 540, 1150, P(t, tPla), C.red); }
  if (id === 'end') { flashCut(t, S('end')); paperCard([['ET TOI… CE SOIR ? 😨', 58], ['LE PLACARD :', 50, C.red], ['OUVERT OU FERMÉ ?', 56, C.red]], 540, 380, P(t, S('end')), { w: 900 }); }
  if (id !== 'ff') { const a = clamp((t - S('s1')) / 0.4); x.save(); x.globalAlpha = a; rbox(50, 1490, 980, 92, 46, 'rgba(160,20,30,.94)', 6); txt('🎬 TON HISTOIRE FLIPPANTE EN DESSIN ANIMÉ ? ÉCRIS-LA 👇', 540, 1537, 37, '#fff', { stroke: false }); x.restore(); }
}
