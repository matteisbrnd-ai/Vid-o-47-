# La bande de 47 — Saison 1 · Jour 5. Facts: Jour 4 vote C (Bob s'infiltre) 54 % (A 15, B 31 ; 13 votes). Followers 89 → 96. Caisse 198 + 48 likes = 246 € (on screen).
# Real comments: sa.lah.7 (Salah himself) « LIBÉRER MOII 😭 » → hook; Pri👑 « met moi en sniper » → shown as « tireuse d'élite » with a BOW (no real weapons rule).
# New: today's A/B/C is a real riddle (riddle fans left Jour 4 because there was nothing to solve). Answer: 1000 − 96 = 904 (A) — revealed Jour 6.
# Intro v5 (2026-11-16, panel on 8 openers after Jour 4 lost viewers at 0:02): « énigme d'abord » = keypad + ONE attempt + the note with the numbers at frame 0, A/B/C by ~4 s, lore (Salah, Bob, Baron) only AFTER the choices.
EMO = {'ff': 'excite', 'q': 'complice', 's0': 'tension', 's3': 'complice', 'cta': 'excite', 'end': 'menace'}
SFX = 0.42
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.2}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.2}
TEMPO = 1.12
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Un seul essai. Trouve le code !", "Un seul essai. Trouve le code !", 0.1),
  ('q', "1000 soldats, moins 96. A : 904. B : 1096. C : 940.", "Mille soldats, moins quatre-vingt-seize. A : neuf cent quatre. B : mille quatre-vingt-seize. C : neuf cent quarante.", 0.2),
  ('s0', "Dans cette cage : Salah, un abonné capturé par le Baron. Vous avez voté C : Bob s'est infiltré. Mais si le code est faux… l'alarme sonne, et on perd Bob.", "Dans cette cage : Sala, un abonné capturé par le Baron. Vous avez voté C : Bob s'est infiltré. Mais si le code est faux... l'alarme sonne, et on perd Bob.", 0.2),
  ('s3', "Ici, chaque abonné, c'est un soldat de plus. Ton like, 1 euro dans la caisse. Ton rôle en commentaire, et tu rejoins la bande… comme Pri, notre tireuse d'élite !", "Ici, chaque abonné, c'est un soldat de plus. Ton like, un euro dans la caisse. Ton rôle en commentaire, et tu rejoins la bande... comme Pri, notre tireuse d'élite !", 0.2),
  ('cta', "Écris A, B ou C… et le rôle que TU veux !", "Écris A, B ou C... et le rôle que TOI tu veux !", 0.2),
  ('end', "Un seul essai. Ne te trompe pas…", "Un seul essai. Ne te trompe pas...", 0.25),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'code', 'beep'), ('q', 'moins', 'paper'), ('q', 'neuf', 'pop'), ('q', 'quarante', 'pop'), ('s0', 'cage', 'bam'), ('s0', 'infiltré', 'whoosh'), ('s0', 'alarme', 'sting'),
        ('s3', 'abonné', 'pop'), ('s3', 'like', 'cash'), ('s3', 'rôle', 'pop'), ('s3', 'Pri', 'ding'), ('cta', 'écris', 'ding'), ('end', 'essai', 'ticktock'), ('end', 'trompe', 'sting')]
