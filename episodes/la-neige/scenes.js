// La neige — horror riddle: one moonlit snowy chalet set, slow creeping zooms, door & window close-ups.
window.CTA = 'TAGUE CELUI QUI DORMIRA PAS CE SOIR'; window.LOOK = 'gala';
const GY = 1950;
function chalet(t) { x.fillStyle = vg(-1500, 1500, '#0b1230', '#2a3560'); x.fillRect(-1200, -1500, 4600, 3200); ell(1700, 500, 120, 120, '#f4f2ec', 0);
  x.fillStyle = '#fff'; for (let i = 0; i < 60; i++) x.fillRect((i * 173) % 2400 - 100, (i * 97) % 1200 - 200, 4, 4);
  [[-300, 1500, 900], [1500, 1450, 1000]].forEach(([mx, my, w]) => poly([[mx - w, my + 300], [mx, my - 500], [mx + w, my + 300]], '#3a4570', 0));
  x.fillStyle = '#e9eef7'; x.fillRect(-1200, 1700, 4600, 2000);
  rbox(600, 1050, 900, 700, 10, '#5a3a22', 9); poly([[540, 1070], [1050, 650], [1560, 1070]], '#3a2516', 9); poly([[520, 1080], [1050, 640], [1580, 1080], [1050, 600]], '#f4f8ff', 0);
  rbox(980, 760, 140, 120, 6, '#ffd770', 6); rbox(700, 1200, 200, 170, 6, '#ffd770', 6); rbox(1000, 1380, 160, 370, 8, '#3a2516', 7); ell(1130, 1570, 10, 10, '#c9a24a', 0);
  x.fillStyle = 'rgba(255,255,255,.8)'; for (let i = 0; i < 120; i++) { const sx = (i * 137 + t * 60) % 2400 - 200, sy = (i * 251 + t * 140) % 2600 - 300; x.fillRect(sx, sy, 5, 5); } }
function draw(t) {
  const id = curId(t), tToc = WF('s2', /Toc/i), tAuc = WF('s3', /aucune/i), tEt = WF('s4', /étage/i);
  const K = [[0, 0, 1080, 1560, 2.2], [B.ff.end - 0.1, 1.4, 1080, 1300, 0.6], [S('s1') + 1, 3, 1000, 1350, 0.75], [S('s2'), 2.5, 1080, 1560, 2.0], [S('s3'), 1.2, 800, 1290, 2.2],
    [tAuc, 1.4, 1080, 1700, 1.4], [S('s4'), 1.5, 1050, 830, 2.6], [tEt, 0.2, 1050, 820, 3.2], [S('q'), 2, 1080, 1300, 0.7]];
  camPath(t, K, (id === 's4' && t > tEt && t < tEt + 0.4) || (id === 's2' && t > tToc && t < tToc + 1.2 && (t * 3 % 1) < 0.15) ? 10 : 0);
  chalet(t);
  if (id === 's3' || id === 's1') p47(800, 1365, 0.45, t, { mood: id === 's3' ? 'shock' : 'worried', look: 1, sweat: id === 's3' });
  if (id === 's4' || id === 'q') { x.fillStyle = 'rgba(10,10,20,.9)'; ell(1050, 800, 40, 50, 'rgba(10,10,20,.85)', 0); x.fillRect(1030, 840, 40, 40); ell(1035, 790, 6, 4, '#fff', 0); ell(1065, 790, 6, 4, '#fff', 0); }
  if (id === 'ff') { x.strokeStyle = 'rgba(0,0,0,.6)'; x.lineWidth = 8; [0, 1, 2].forEach(i => { if (Math.floor(t * 3) % 3 === i) { x.beginPath(); x.arc(1080, 1560, 60 + i * 30, -0.6, 0.6); x.stroke(); } }); }
  night(0.15);
  resetCam();
  hookCard(t, [["QUELQU'UN FRAPPE…", 80], ['MAIS AUCUNE TRACE', 84, C.red], ['DANS LA NEIGE', 70]], B.ff.end + 0.1);
  if (id === 'ff' && t >= B.ff.end) rewindFx(t, B.ff.next);
  if (id === 's2') banner('00:00', 540, 330, P(t, S('s2') + 0.2), C.red);
  if (id === 's2' && t >= tToc) onoma('TOC TOC TOC', 540, 520, P(t, tToc, 0.2), 130);
  if (id === 's4' && t >= tEt) onoma('TOC… TOC…', 540, 520, P(t, tEt, 0.2), 130);
  endCards(t, [['QUI FRAPPE ?', 96, C.red], ['RÉPONDS… SI T\'OSES', 50]]);
}
