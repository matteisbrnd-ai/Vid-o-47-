// Les histoires de 47 #6 — « La sonnette de 21h » : chaque soir quelqu'un sonne chez Henri et s'enfuit ; c'est 47, le livreur qui l'avait trouvé après sa chute — il vérifie que la lumière s'allume.
window.LOOK = 'gala';
const GY = 1500;
const HENRI = { hat: 'bald', white: true, glasses: true, body: '#8a5a3a', body2: '#74492e', pants: '#3a3530', num: false, collar: true };
const SHADOW = { hat: 'beanie', hatCol: '#1a1a24', hatCol2: '#111', body: '#1a1a24', body2: '#111', pants: '#1a1a24', num: false, skin: '#1a1a24' };
function henri(px, py, s, t, o = {}) { cast('old', px, py, s, t, { ...HENRI, blink: true, ...o }); }
function glow(cx, cy, r, a = 1, col = '255,214,110') { const g = x.createRadialGradient(cx, cy, 0, cx, cy, r); g.addColorStop(0, `rgba(${col},${0.55 * a})`); g.addColorStop(1, `rgba(${col},0)`); x.fillStyle = g; x.fillRect(cx - r, cy - r, 2 * r, 2 * r); }
function hedge(x0) { [[0, 0], [130, -40], [260, 10], [380, -20]].forEach(([dx, dy]) => ell(x0 + dx, GY - 120 + dy, 130, 150, '#2f5a3a', 7)); [[60, -60], [200, -90], [330, -50]].forEach(([dx, dy]) => ell(x0 + dx, GY - 120 + dy, 50, 40, '#3a6e48', 0)); }
function street(t, o = {}) { const lit = o.lit ?? 0, col = o.door || '#3a5a8a', label = o.label || '14';
  x.fillStyle = vg(-400, GY, '#141a38', '#2c3a6a'); x.fillRect(-1200, -800, 3500, GY + 800); ell(900, 260, 70, 70, '#f4f0d8', 0); for (let i = 0; i < 18; i++) { x.fillStyle = 'rgba(255,255,255,.7)'; x.fillRect((i * 173) % 1100 - 40, (i * 97) % 500 + 40, 4, 4); }
  rbox(40, 420, 900, GY - 420, 0, o.wall || '#b98a62', 8); poly([[10, 440], [490, 170], [970, 440]], '#6a3a2a', 8);
  for (let r = 0; r < 12; r++) { x.fillStyle = 'rgba(0,0,0,.06)'; x.fillRect(40, 440 + r * 90, 900, 4); }
  door(330, GY - 640, 300, 640, col, label); rbox(500, GY - 400, 40, 60, 8, '#d9d9e0', 5); ell(520, GY - 370, 10, 10, o.ring ? '#ffd23f' : '#888', 3);
  rbox(600, GY - 860, 280, 240, 8, lit ? '#ffd86a' : '#26305a', 8); x.strokeStyle = OL; x.lineWidth = 6; x.beginPath(); x.moveTo(740, GY - 860); x.lineTo(740, GY - 620); x.moveTo(600, GY - 740); x.lineTo(880, GY - 740); x.stroke();
  rbox(300, GY - 760, 60, 70, 10, '#2a2a30', 6); ell(330, GY - 680, 26, 22, lit ? '#ffe9a0' : '#555', 5);
  if (lit) { glow(330, GY - 660, 360, lit); glow(740, GY - 740, 380, lit * 0.8); }
  x.fillStyle = '#4a4e5a'; x.fillRect(-1200, GY, 3500, 160); x.fillStyle = '#2a2d36'; x.fillRect(-1200, GY + 160, 3500, 1200); for (let i = -4; i < 12; i++) { x.fillStyle = '#e8e8e8'; x.fillRect(i * 240, GY + 330, 120, 16); } }
function cctv(t, t0) { resetCam(); x.fillStyle = 'rgba(40,140,90,.16)'; x.fillRect(0, 0, W, H); for (let y = 0; y < H; y += 6) { x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(0, y, W, 2); }
  const s = Math.floor(3 + (t - t0)); rbox(30, 1640, 520, 80, 8, 'rgba(0,0,0,.6)', 0); txt('21:00:' + String(s).padStart(2, '0'), 290, 1680, 50, '#fff', { stroke: false });
  if (Math.sin(t * 6) > 0) ell(80, 120, 22, 22, '#ff3a3a', 0); txt('REC', 160, 122, 50, '#fff', { stroke: false }); txt('CAM 1 · ENTRÉE', 820, 122, 40, '#fff', { stroke: false }); }
function parcel(cx, cy, s) { rbox(cx - 120 * s, cy - 90 * s, 240 * s, 180 * s, 8 * s, '#c89a5a', 6); x.fillStyle = '#e8d29a'; x.fillRect(cx - 18 * s, cy - 90 * s, 36 * s, 180 * s); }
function tart(cx, cy, s) { ell(cx, cy, 120 * s, 46 * s, '#d9a45a', 6); ell(cx, cy - 8 * s, 96 * s, 32 * s, '#c0392b', 0); for (let i = 0; i < 5; i++) ell(cx - 70 * s + i * 35 * s, cy - 10 * s, 12 * s, 8 * s, '#e05a4a', 0); }
function kitchen(t) { room('#f3d9a8', '#e7c48a', '#b98a5a', GY); rbox(-100, GY - 420, 700, 420, 10, '#e8e4dc', 8); rbox(-100, GY - 440, 700, 30, 6, '#8a6a4a', 6); for (let i = 0; i < 3; i++) rbox(-60 + i * 220, GY - 360, 180, 300, 8, '#f4f1ea', 5);
  rbox(720, 420, 300, 280, 10, '#bfe4ff', 8); }
function cal(cx, cy, top, big, p) { if (p <= 0) return; resetCam(); x.save(); x.translate(cx, cy); const k = eBack(clamp(p)); x.scale(k, k); rbox(-170, -160, 340, 320, 20, '#fff', 8); rbox(-170, -160, 340, 90, 20, C.red, 8); txt(top, 0, -115, 44, '#fff', { stroke: false }); txt(big, 0, 40, 110, OL, { stroke: false }); x.restore(); }
function draw0(t) {
  const id = curId(t), tHen = WF('ff', /Henri/i), tCou = WF('ff', /courant/i), tSix = WF('s1', /six/i), tSoi = WF('s1', /soirs/i), tPer = WF('s2', /personne/i), tOmb = WF('s2', /ombre/i),
    tPol = WF('s3', /police/i), tRig = WF('s3', /rigolé/i), tAff = WF('s4', /affiche/i), tSon4 = WF('s4', /sonnait/i), tCam = WF('s5', /caméra/i), tOra = WF('s6', /orange/i), tSon = WF('s6', /sonne/i),
    tHai = WF('s6', /haie/i), tLum = WF('s6', /lumière/i), tRep = WF('s6', /repart/i), tTie = WF('s7', /tiens/i), tFui = WF('s8', /fui/i), tBien = WF('s8', /bien/i), tTom = WF('s9', /tombé/i), tJou = WF('s9', /jours/i),
    tAid = WF('s10', /aide/i), tQ = WF('s10', /Quarante/i), tLum11 = WF('s11', /lumière/i), tViv = WF('s11', /vivant/i), tSon12 = WF('s12', /sonné/i), tHen12 = WF('s12', /Henri/i), tVer = WF('s12', /vérifie/i);
  const HOOK = [['21H PILE… 🔔', 80], ["QUELQU'UN SONNE ET S'ENFUIT 🏃", 56, C.red]];
  if (id === 'mid') { resetCam(); street(t, { lit: 1 }); x.fillStyle = 'rgba(10,10,20,.72)'; x.fillRect(0, 0, W, H); flashCut(t, S('mid')); paperCard([['POURQUOI IL ATTEND', 60], ['LA LUMIÈRE ? 💡', 72, C.red], ['ÉCRIS TA THÉORIE 👇', 50]], 540, 760, P(t, S('mid'), 0.25), { w: 900 }); if (t >= S('mid') + 1.4) pill(Math.sin(t * 5) > 0 ? '💡 ALLUMÉE' : '⚫ ÉTEINTE', 540, 1150, 1, Math.sin(t * 5) > 0 ? C.orange : OL); return; }
  if (id === 'end') { resetCam(); street(t, { lit: 1 }); p47(760, GY, 0.85, t, { mood: 'smile', look: -1 }); henri(320, GY, 0.85, t, { mood: 'smile', look: 1 }); vignette(0.3); flashCut(t, S('end'));
    paperCard([['ET TOI ? 🔔', 64], ['TU SONNERAIS CHEZ QUI', 46, C.red], ['TOUS LES SOIRS ?', 46, C.red]], 540, 380, P(t, S('end')), { w: 940 }); if (t >= S('end') + 2.6) pill('🎬 TON HISTOIRE = PROCHAIN ÉPISODE', 540, 1400, P(t, S('end') + 2.6), C.orange); return; }
  const flash = id === 's9' || id === 's10';
  let K;
  if (id === 'ff') K = [[0, 0, 520, 1100, 1.22], [0.1, 3, 560, 1100, 1.06]];
  else if (id === 's6') K = [[S('s6'), 0, 600, 1100, 1.0], [S('s6') + 0.2, 6, 640, 1100, 1.08]];
  else K = [[S(id), 0, 540, 1080, 1.0], [S(id) + 0.2, 4, 560, 1060, 1.1]];
  camPath(t, K, (id === 'ff' && t < 0.35) || (id === 's7' && t >= tTie && t < tTie + 0.4) || (id === 's9' && t >= tTom && t < tTom + 0.4) ? 14 : 0);
  if (flash) { x.save(); x.filter = 'sepia(0.75) saturate(0.8)'; }
  if (id === 'ff') { street(t, { ring: true }); const run = clamp(seg(t, 0.35, B.ff.end)); cast('inspector', lerp(560, 1250, run), GY, 0.8, t, { ...SHADOW, look: 1, walk: run > 0 && run < 1 ? t * 2.5 : 0 }); }
  if (id === 's1') { street(t, { ring: Math.sin(t * 6) > 0 }); }
  if (id === 's2') { const op = clamp(seg(t, S('s2'), tPer)); street(t, { lit: op }); henri(330, GY, 0.82, t, { mood: t >= tOmb ? 'angry' : 'worried', look: 1 }); if (t >= tOmb - 0.2) { x.save(); x.globalAlpha = 0.9; cast('inspector', 1060, GY - 40, 0.42, t, { ...SHADOW, look: 1, walk: t * 2 }); x.restore(); } }
  if (id === 's3') { room('#cfd6e4', '#b4bfd2', '#7a5a42', GY); rbox(620, 420, 320, 260, 10, '#26305a', 8); henri(380, GY, 0.95, t, { mood: t >= tRig ? 'angry' : 'worried', look: 1, armUp: true }); rbox(470, GY - 820, 60, 110, 12, '#1b1b1f', 5); }
  if (id === 's4') { street(t, { lit: 1, ring: t >= tSon4 }); if (t >= tAff - 0.2) { x.save(); x.translate(330, GY - 380); x.rotate(-0.05); const k = eBack(clamp(P(t, tAff - 0.2))); x.scale(k, k); rbox(-130, -90, 260, 180, 6, '#fff', 6); txt('INTERDIT', 0, -30, 44, C.red, { stroke: false }); txt('DE SONNER !', 0, 30, 40, OL, { stroke: false }); x.restore(); }
    henri(720, GY, 0.82, t, { mood: t >= tSon4 ? 'shock' : 'smug', look: -1 }); }
  if (id === 's5') { street(t, { lit: 1 }); henri(720, GY, 0.82, t, { mood: 'smug', look: -1, armUp: true }); const k = eBack(clamp(P(t, tCam - 0.2))); x.save(); x.translate(110, 560); x.scale(k, k); rbox(-20, -40, 140, 80, 14, '#e8e8ec', 6); ell(130, 0, 30, 30, '#2a2d36', 5); ell(10, -20, 9, 9, '#ff3a3a', 0); x.restore(); }
  if (id === 's6') { x.save(); x.filter = 'saturate(0.9) contrast(1.05)'; const lit = t >= tLum ? clamp((t - tLum) / 0.3) : 0; street(t, { lit, ring: t >= tSon && t < tHai });
    let px = 1250, crouch = false; if (t < tSon) px = lerp(1250, 600, clamp(seg(t, S('s6'), tSon - 0.1))); else if (t < tHai) px = 600; else if (t < tRep) { px = lerp(600, 1080, clamp(seg(t, tHai - 0.1, tHai + 0.5))); crouch = true; } else px = lerp(1080, 1500, clamp(seg(t, tRep, tRep + 1.2)));
    p47(px, crouch ? GY + 220 : GY, 0.82, t, { mood: crouch ? 'worried' : 'neutral', look: t < tSon ? -1 : (t >= tRep ? 1 : -1), walk: (t < tSon - 0.1 || t >= tRep) ? t * 2 : 0 }); hedge(960); x.restore(); cctv(t, S('s6'));
    if (t >= tLum) onoma('💡', 740, 560, P(t, tLum, 0.2), 120); }
  if (id === 's7') { street(t, { lit: 1 }); p47(lerp(1150, 800, clamp(seg(t, S('s7'), tTie - 0.4))), GY, 0.85, t, { mood: t >= tTie ? 'shock' : 'neutral', look: -1, walk: t < tTie - 0.4 ? t * 2 : 0 }); const jump = clamp(seg(t, tTie - 0.25, tTie + 0.1)); if (t >= tTie - 0.25) henri(lerp(330, 470, jump), GY, 0.85, t, { mood: 'angry', look: 1, armUp: true }); }
  if (id === 's8') { street(t, { lit: 1 }); henri(430, GY, 0.85, t, { mood: t >= tBien ? 'shock' : 'angry', look: 1 }); p47(780, GY, 0.85, t, { mood: t >= tBien - 0.3 ? 'smile' : 'neutral', look: -1 }); }
  if (id === 's9') { kitchen(t); const fall = clamp(seg(t, tTom - 0.3, tTom + 0.2)); x.save(); x.translate(lerp(620, 200, fall), GY); x.rotate(Math.PI / 2 * fall); henri(0, 0, 0.85, t, { mood: 'shock', look: 1 }); x.restore(); }
  if (id === 's10') { street(t, { door: '#3a5a8a' }); x.fillStyle = 'rgba(255,255,255,.25)'; x.fillRect(-1200, -800, 3500, 3200); p47(720, GY, 0.85, t, { mood: t >= tAid ? 'shock' : 'neutral', look: -1 }); parcel(720, GY - 290, 0.8); }
  if (id === 's11') { street(t, { lit: t >= tLum11 ? 1 : 0.4 }); henri(380, GY, 0.85, t, { mood: t >= tViv ? 'worried' : 'shock', look: 1 }); p47(760, GY, 0.85, t, { mood: 'smile', look: -1 }); }
  if (id === 's12') { const open = t >= tHen12 - 0.2; street(t, { lit: 1, door: '#7a4a8a', label: '47', wall: '#9aa8b8', ring: t >= tSon12 && t < tHen12 }); if (open) { p47(560, GY, 0.85, t, { mood: 'smile', look: -1 }); henri(260, GY, 0.85, t, { mood: 'smile', look: 1, armUp: true }); tart(300, GY - 580, 0.8); } }
  if (flash) { x.restore(); resetCam(); x.fillStyle = 'rgba(60,40,20,.12)'; x.fillRect(0, 0, W, H); }
  resetCam(); vignette(0.25);
  if (id === 'ff') { if (t < 1.2) onoma('DING DONG 🔔', 540, 700, P(t, 0, 0.2), 110); hookCard(t, HOOK, B.ff.end + 0.05); }
  if (id === 's1') { flashCut(t, S('s1')); const d = t >= tSix ? Math.min(182, Math.round(182 * clamp((t - tSix) / 1.2))) : 1; cal(540, 560, 'SOIR N°', String(Math.max(1, d)), P(t, S('s1'), 0.2)); if (t >= tSoi) onoma('DING DONG', 540, 1000, P(t, tSoi, 0.2), 90); }
  if (id === 's2') { flashCut(t, S('s2')); if (t >= tPer) pill('PERSONNE… 😶', 540, 330, P(t, tPer), C.blue); if (t >= tOmb) pill('👤 UNE OMBRE AU BOUT DE LA RUE', 540, 450, P(t, tOmb), OL); }
  if (id === 's3') { flashCut(t, S('s3')); pill('📞 17 · POLICE', 540, 330, P(t, tPol - 0.1), C.blue); if (t >= tRig) onoma('😂😂😂', 760, 640, P(t, tRig, 0.2), 110); }
  if (id === 's4') { flashCut(t, S('s4')); if (t >= tSon4) onoma('DING DONG 😡', 540, 420, P(t, tSon4, 0.2), 100); }
  if (id === 's5') { flashCut(t, S('s5')); pill('📹 CAMÉRA INSTALLÉE', 540, 330, P(t, tCam - 0.1), C.red); }
  if (id === 's6') { flashCut(t, S('s6')); if (t >= tOra - 0.1 && t < tSon) pill('🧡 BONNET ORANGE', 540, 330, P(t, tOra - 0.1), C.orange); if (t >= tHai && t < tLum) pill('IL SE CACHE… 🌳', 540, 330, P(t, tHai), OL); if (t >= tLum && t < tRep) pill('IL ATTEND LA LUMIÈRE 💡', 540, 330, P(t, tLum), C.red); if (t >= tRep) pill('… ET IL REPART', 540, 330, P(t, tRep), OL); }
  if (id === 's7') { flashCut(t, S('s7')); pill('⏰ 20:59', 540, 330, P(t, S('s7') + 0.1), C.blue); if (t >= tTie - 0.2) paperCard([['« JE TE TIENS ! »', 72, C.red]], 540, 520, P(t, tTie - 0.2), { w: 760 }); }
  if (id === 's8') { flashCut(t, S('s8')); if (t >= tFui - 0.2) pill('IL NE FUIT PAS 🤨', 540, 330, P(t, tFui - 0.2), OL); if (t >= tBien - 0.6) paperCard([['« VOUS ALLEZ BIEN,', 56], ['MONSIEUR HENRI ? »', 62, C.blue]], 540, 560, P(t, tBien - 0.6), { w: 880 }); }
  if (id === 's9') { flashCut(t, S('s9')); pill('⏪ L\'HIVER DERNIER', 540, 300, P(t, S('s9') + 0.1), '#8a5a2a'); if (t >= tJou - 0.2) cal(780, 620, 'SEUL AU SOL', '2 J', P(t, tJou - 0.2)); }
  if (id === 's10') { flashCut(t, S('s10')); pill('📦 LE LIVREUR', 540, 300, P(t, S('s10') + 0.1), '#8a5a2a'); if (t >= tAid - 0.3) paperCard([['« À L\'AIDE… »', 56]], 330, 640, P(t, tAid - 0.3), { w: 420 }); if (t >= tQ - 0.1) pill('LE LIVREUR = 47', 540, 1000, P(t, tQ - 0.1), C.orange); }
  if (id === 's11') { flashCut(t, S('s11')); paperCard([['« SI LA LUMIÈRE S\'ALLUME…', 50], ['JE SAIS QUE VOUS', 50], ['ÊTES VIVANT. »', 66, C.red]], 540, 420, P(t, S('s11') + 0.2), { w: 960 }); }
  if (id === 's12') { flashCut(t, S('s12')); pill('🔔 21H… CHEZ 47', 540, 300, P(t, S('s12') + 0.1), C.orange); if (t >= tVer - 0.6) paperCard([['« CE SOIR, C\'EST MOI', 54], ['QUI VÉRIFIE. »', 70, C.red]], 540, 520, P(t, tVer - 0.6), { w: 880 }); }
}

function draw(t) { draw0(t); const id = curId(t); if (id === 'ff' || id === 'end') return; resetCam(); const a = clamp((t - S('s1')) / 0.4);
  x.save(); x.globalAlpha = a; rbox(70, 1490, 940, 92, 46, 'rgba(242,120,31,.96)', 6); txt('🎬 TON HISTOIRE EN COMMENTAIRE = PROCHAIN ÉPISODE', 540, 1537, 41, '#fff', { stroke: false }); x.restore(); }
