# La bande de 47 — Saison 1 · Jour 6. Facts (TikTok Studio 2026-11-17): followers 96 → 104. Jour 5 repost 18 likes → caisse 246 + 18 = 264 €.
# Jour 5 answer A = 904 (1000 − 96). Comments: Salah « 904 j'ai pas envie de disparaître », Greg « A et je veux être commandant dans l'armée ».
# Audit: the series is the follower engine but fades since Jour 4 → today = REBOUND (real payoff: cage opens, Salah free) + escalation (the Baron attacks in 3 days, J-3 countdown).
# v2 (2026-11-17 17h30, creator « refait ») = formula of the viral « ville » series (format only): 0 s growth counter « Hier 96… aujourd'hui 104 » · rules ~4 s · each real commenter granted on screen by name (Salah, Greg, Pri) · rival + exact gap (« encore 896 ») · ONE open question (« quel rôle tu prends ? », most-liked comment in tomorrow's video), no A/B/C.
EMO = {'ff': 'excite', 's0': 'complice', 's1': 'excite', 's2': 'complice', 's3': 'complice', 's4': 'tension', 's5': 'complice', 'cta': 'excite', 'end': 'menace'}
SFX = 0.36
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.2}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.25}
TEMPO = 1.12
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Hier, on était 96. Aujourd'hui… 104 !", "Hier, on était quatre-vingt-seize. Aujourd'hui... cent quatre !", 0.15),
  ('s0', "Ici, un abonné, c'est un soldat. Un like, un euro. Et ton rôle en commentaire : tu rejoins la bande.", "Ici, un abonné, c'est un soldat. Un like, un euro. Et ton rôle en commentaire : tu rejoins la bande.", 0.15),
  ('s1', "Salah a écrit 904 : bonne réponse ! La cage s'ouvre… Salah est libre !", "Sala a écrit neuf cent quatre : bonne réponse ! La cage s'ouvre... Sala est libre !", 0.15),
  ('s2', "Greg voulait être commandant : le voilà, avec ses galons.", "Greg voulait être commandant : le voilà, avec ses galons.", 0.15),
  ('s3', "Pri voulait viser de loin : tireuse d'élite, sur le toit du garage.", "Pri voulait viser de loin : tireuse d'élite, sur le toit du garage.", 0.2),
  ('s4', "Mais le Baron a tout vu. Dans trois jours, il attaque… avec ses 1000 soldats.", "Mais le Baron a tout vu. Dans trois jours, il attaque... avec ses mille soldats.", 0.15),
  ('s5', "Nous, on est 104. Encore 897… et on est plus nombreux que lui.", "Nous, on est cent quatre. Encore huit cent quatre-vingt-dix-sept... et on est plus nombreux que lui.", 0.2),
  ('cta', "Alors dis-moi en commentaire : quel rôle tu prends pour défendre le garage ? Le plus liké sera dans la vidéo de demain.", "Alors dis-moi en commentaire : quel rôle tu prends pour défendre le garage ? Le plus liké sera dans la vidéo de demain.", 0.2),
  ('end', "Dans trois jours… il arrive.", "Dans trois jours... il arrive.", 0.3),
]
CUES = [('ff', 'Hier', 'pop'), ('ff', 'cent', 'cash'), ('s0', 'soldat', 'pop'), ('s0', 'euro', 'cash'), ('s0', 'bande', 'ding'), ('s1', 'réponse', 'ding'), ('s1', 'ouvre', 'sting'), ('s1', 'libre', 'cash'),
        ('s2', 'commandant', 'pop'), ('s2', 'galons', 'ding'), ('s3', 'élite', 'pop'), ('s3', 'toit', 'ding'), ('s4', 'vu', 'sting'), ('s4', 'trois', 'bam'), ('s4', 'mille', 'sting'), ('s5', 'Encore', 'tick'), ('s5', 'nombreux', 'ding'),
        ('cta', 'rôle', 'pop'), ('cta', 'liké', 'ding'), ('end', 'trois', 'ticktock'), ('end', 'arrive', 'sting')]
