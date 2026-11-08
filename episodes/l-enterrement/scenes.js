// L'enterrement — frame 0: 47 in a straitjacket in a padded cell + hook card; ending loops there.
window.CTA = 'TAGUE LE PLUS PSYCHO DE TES POTES';
const MAX = { hairCol: '#2a1d14', body: '#26272d', body2: '#1c1d22', pants: '#1c1d22' }, GIRL = { hairCol: '#1f1a18', body: '#3a2f4a', body2: '#2c2438' };
function cell(t) { x.fillStyle = '#f2efe6'; x.fillRect(-600, -400, 2300, 2800); x.strokeStyle = '#d9d3c4'; x.lineWidth = 6;
  for (let i = -6; i < 14; i++) for (let j = -4; j < 18; j++) { const cx = i * 160 + (j % 2) * 80, cy = j * 140; x.beginPath(); x.moveTo(cx, cy - 60); x.lineTo(cx + 70, cy); x.lineTo(cx, cy + 60); x.lineTo(cx - 70, cy); x.closePath(); x.stroke(); }
  x.fillStyle = '#e4ddcc'; x.fillRect(-600, 1500, 2300, 900); }
function jacket47(px, py, s, t, mood) { p47(px, py, s, t, { mood, body: '#f4f2ec', body2: '#dcd8cc', num: false, sweat: true, blink: t > 0.6 });
  x.save(); x.translate(px, py); x.scale(s, s); x.strokeStyle = '#8a7a5a'; x.lineWidth = 22; [[-150, -520, 150, -440], [-150, -400, 150, -330]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); x.restore(); }
function cemetery(t, rain) { sky('#8a93a3', '#c3c8d0', 1400); x.fillStyle = '#4f6b45'; x.fillRect(-1200, 1300, 3500, 900);
  [[-80, 1230], [200, 1180], [880, 1200], [1150, 1240]].forEach(([gx, gy]) => { rbox(gx - 70, gy - 200, 140, 220, 60, '#a8acb4', 7); x.fillStyle = '#7c8088'; x.fillRect(gx - 8, gy - 170, 16, 90); x.fillRect(gx - 34, gy - 145, 68, 16); });
  rbox(360, 1360, 360, 140, 20, '#6b4a32', 8); [420, 520, 620].forEach((fx, i) => ell(fx, 1350, 30, 30, ['#e04a5a', '#f4f2ec', '#f5d76e'][i], 5));
  if (rain) { x.strokeStyle = 'rgba(220,230,245,.55)'; x.lineWidth = 4; for (let i = 0; i < 90; i++) { const rx = (i * 137 + t * 900) % 1600 - 260, ry = (i * 251 + t * 2600) % 2200 - 300; x.beginPath(); x.moveTo(rx, ry); x.lineTo(rx - 18, ry + 60); x.stroke(); } } }
function umbrella(px, py, s) { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.arc(0, 0, 230, Math.PI, 0); x.closePath(); fs('#1b1b1f', 8); x.strokeStyle = OL; x.lineWidth = 12; x.beginPath(); x.moveTo(0, 0); x.lineTo(0, 300); x.stroke(); x.restore(); }
function heart(px, py, s, c = '#e04a5a') { x.save(); x.translate(px, py); x.scale(s, s); x.beginPath(); x.moveTo(0, 30); x.bezierCurveTo(-90, -40, -40, -110, 0, -60); x.bezierCurveTo(40, -110, 90, -40, 0, 30); fs(c, 6); x.restore(); }
function wreath(t) { resetCam(); x.fillStyle = vg(0, H, '#3a3d44', '#1b1d22'); x.fillRect(0, 0, W, H); x.save(); x.translate(540, 900); const k = 1 + 0.04 * (t - S('s4'));  x.scale(k, k);
  x.lineWidth = 90; x.strokeStyle = '#3c6b3a'; x.beginPath(); x.arc(0, 0, 300, 0, 7); x.stroke(); for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283; ell(Math.cos(a) * 300, Math.sin(a) * 300, 34, 34, i % 2 ? '#f4f2ec' : '#e04a5a', 5); }
  rbox(-230, -470, 460, 110, 14, '#1b1b1f', 6); txt('MON FRÈRE', 0, -414, 60, '#f4f2ec', { stroke: false }); x.restore(); }
function draw(t) {
  const id = curId(t), t0 = S(id);
  const tCut = 1.0, tFil = WF('s1', /fille/i), tPart = WF('s2', /part/i), tNum = WF('s3', /numéro/i), tMeurt = WF('s4', /meurt/i), tSour = WF('s4', /sourit/i);
  if (id === 'ff' || id === 'q') { const z = id === 'q' ? 1.5 + (t - t0) * 0.03 : (t < tCut ? 1.5 : 2.8); cam(540, t < tCut || id === 'q' ? 1150 : 1080, z, id === 'ff' && t >= tCut ? Math.max(0, 1 - (t - tCut) * 4) * 12 : 0, t); cell(t); jacket47(540, 1720, 0.85, t, t < tCut || id === 'q' ? 'shock' : 'smug'); }
  else if (id === 's1') { if (t < tFil) { cam(540, 1250, 1.25 + (t - t0) * 0.04); cemetery(t, true); umbrella(300, 980, 0.7); cast('inspector', 300, 1720, 0.8, t, { ...MAX, mood: 'worried', look: 1 }); umbrella(760, 1000, 0.7); cast('old', 760, 1720, 0.8, t, { mood: 'worried', look: -1 }); }
    else { cam(760, 1150, 2.6, 0, t); cemetery(t, true); cast('woman', 760, 1720, 0.8, t, { ...GIRL, mood: 'neutral', look: -1 }); } }
  else if (id === 's2') { if (t < tPart) { cam(330, 1150, 2.7, 0, t); cemetery(t, true); cast('inspector', 330, 1720, 0.8, t, { ...MAX, mood: 'smile', look: 1 }); [[-120, 0], [110, 0.7]].forEach(([d, o]) => heart(330 + d, 640 - ((t * 120 + o * 200) % 260), 0.8)); }
    else { cam(540, 1250, 1.3, 0, t); cemetery(t, true); cast('inspector', 260, 1720, 0.8, t, { ...MAX, mood: 'worried', look: 1, armUp: true }); cast('woman', lerp(760, 1250, seg(t, tPart, tPart + 2.2)), 1720, 0.8, t, { ...GIRL, walk: t * 3, mood: 'neutral', look: 1 }); } }
  else if (id === 's3' || id === 's3b') { resetCam(); x.fillStyle = vg(0, H, '#e9e4da', '#cfc8b8'); x.fillRect(0, 0, W, H); x.save(); x.translate(540, 980); x.rotate(-0.05);
    rbox(-230, -420, 460, 840, 60, '#1b1b1f', 9); rbox(-200, -360, 400, 700, 20, '#f4f2ec', 0); txt(id === 's3' ? 'CONTACTS' : 'RECHERCHE', 0, -290, 52, OL, { stroke: false }); if (id === 's3b') { rbox(-170, -200, 340, 80, 40, '#e4ddcc', 4); txt('🔍 LA FILLE…', 0, -158, 44, OL, { stroke: false }); if (t > WF('s3b', /rien/i)) txt('AUCUN RÉSULTAT', 0, 60, 54, C.red, { stroke: false }); else { x.save(); x.beginPath(); x.rect(-200, -100, 400, 430); x.clip(); for (let i = 0; i < 12; i++) { const gy = -90 + i * 130 - ((t * 500) % 130) - 130 * Math.floor((t * 4) % 3); [-130, 0, 130].forEach((gx, j) => rbox(gx - 60, gy, 120, 120, 8, ['#f4a7c0', '#bfe3ff', '#f5d76e', '#c9e8b0'][(i + j) % 4], 3)); } x.restore(); } x.restore(); } else {
    rbox(-170, -200, 340, 90, 14, '#e4ddcc', 4); txt('NOM : ???', 0, -152, 50, C.red, { stroke: false }); if (t >= tNum) { rbox(-170, -60, 340, 90, 14, '#e4ddcc', 4); txt('N° : ???', 0, -12, 50, C.red, { stroke: false }); } x.restore(); } }
  else if (id === 's4') { if (t < tMeurt) { cam(540, 1250, 1.3, 0, t); cemetery(t, false); cast('inspector', 540, 1720, 0.8, t, { ...MAX, mood: 'neutral' }); } else if (t < tSour) wreath(t);
    else { cam(540, 1080, 3.2 + (t - tSour) * 0.15, 0, t); cemetery(t, false); cast('inspector', 540, 1720, 0.8, t, { ...MAX, mood: 'smug', look: 0.5 }); night(0.25); } }
  resetCam(); [tCut, tFil, tPart, S('s3'), S('s3b'), tMeurt, tSour].forEach(tc => flashCut(t, tc)); flashCut(t, S('q'));
  hookCard(t, [['TA PLACE EST', 80], ["À L'ASILE…", 110, C.red], ['SI TU TROUVES', 80]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's1' && t < tFil) banner('ENTERREMENT DE MAMIE', 540, 330, P(t, t0 + 0.1));
  if (id === 's2' && t < tPart) onoma('COUP DE FOUDRE', 540, 480, P(t, t0 + 0.1, 0.2), 110);
  if (id === 's4' && t < tMeurt) banner('1 SEMAINE PLUS TARD', 540, 330, P(t, t0 + 0.1));
  endCards(t, [['POURQUOI IL SOURIT ?', 82, C.red], ['TA RÉPONSE EN COMMENTAIRE', 46]]);
}
