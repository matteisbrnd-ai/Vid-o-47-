# Le verre d'eau — classic « bar + gun » riddle made family-friendly: at Tasty Crousty 47 asks only for a glass of water,
# the server jumps over the counter and yells BOUH, 47 says thanks and leaves. Answer (not given): he had hiccups (le hoquet).
EMO = {'ff': 'mystere', 's1': 'tension', 's2': 'question', 's3': 'excite', 's4': 'amuse', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "On lui a hurlé dessus chez Tasty Crousty… et il a dit merci.", "On lui a hurlé dessus chez Tasty Crousty... et il a dit merci.", 0.2),
  ('s1', "Samedi soir, 47 entre en courant chez Tasty Crousty.", "Samedi soir, Quarante-sept entre en courant chez Tasty Crousty.", 0.1),
  ('s2', "Il ne commande rien. Pas de tenders, pas de frites. Juste… un verre d'eau.", "Il ne commande rien. Pas de tenders, pas de frites. Juste... un verre d'eau.", 0.15),
  ('s3', "Le serveur le fixe deux secondes. Puis il saute par-dessus le comptoir et hurle : BOUH !", "Le serveur le fixe deux secondes. Puis il saute par-dessus le comptoir et hurle : BOUH !", 0.25),
  ('s4', "47 sursaute… puis il sourit : merci beaucoup ! Et il repart sans rien manger.", "Quarante-sept sursaute... puis il sourit : merci beaucoup ! Et il repart sans rien manger.", 0.3),
  ('q', "Pourquoi il dit merci ? Réponds en un mot.", "Pourquoi il dit merci ? Réponds en un mot.", 1.8),
]
CUES = [('ff', '+0', 'bam'), ('s1', '+0', 'dingdong'), ('s1', 'courant', 'run'), ('s2', 'tenders', 'pop'), ('s2', 'frites', 'pop'), ('s2', 'eau', 'clink'),
        ('s3', 'fixe', 'ticktock'), ('s3', 'saute', 'whoosh'), ('s3', 'BOUH', 'bam'), ('s4', 'sursaute', 'sting'), ('s4', 'merci', 'ding'), ('s4', 'repart', 'steps'), ('q', '+0', 'ding')]
