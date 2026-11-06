# Le recrutement — creator's own voice (voix.m4a). Same riddle as le-recrutement, reworked after the review agents:
# viewer-facing hook (« t'es trop bête »), 47 thrown in the cell, tight framing, fewer cards, pause before « Non », ending loops to the opening shot.
BEATS = [
  ('ff',  "Si tu rates ce test… t'es trop bête pour entrer dans le gang.", "Si tu rates ce test t'es trop bête pour entrer dans le gang", 0.25),
  ('s1',  "47 va entrer dans la bande la plus redoutée de la ville.", "47 va entrer dans la bande la plus redoutée de la ville", 0.1),
  ('s2',  "Il va voir le chef, et lui demande : comment vous choisissez vos membres ?", "Il va voir le chef et lui demande comment vous choisissez vos membres", 0.15),
  ('s3a', "Le chef sourit : ici, on prend que les malins.", "Le chef sourit ici on prend que les malins", 0.15),
  ('s3',  "On remplit ce jacuzzi à ras bord, puis on donne trois choses aux candidats : un verre, une casserole… et un seau.", "On remplit ce jacuzzi à bord puis on donne trois choses aux candidats un vert une casserole et un saut", 0.1),
  ('s4',  "Et on leur demande : vider le jacuzzi.", "et on demande vite le jacuzzi", 0.25),
  ('s5',  "Alors toi, tu prendrais quoi ? Le verre ? La casserole ? Ou le seau ?", "Alors toi tu prendrais quoi le vert la casserole ou le saut", 1.0),
  ('s6',  "47 a une idée : facile, je prends le seau, c'est le plus grand !", "47 a une idée facile je prends le saut c'est le plus grand", 0.2),
  ('s7a', "Le chef le regarde…", "Le chef regarde", 0.9),
  ('s7b', "Non.", "Non", 0.35),
  ('s7c', "Gardes ! Emmenez-le à la cave.", "Gardes emmenez le à la cave", 0.3),
  ('q',   "Alors, qu'est-ce qu'il fallait faire ? Ta réponse en commentaire.", "Alors qu'est-ce qu'il fallait faire ta réponse en commentaire", 1.6),
]
CUES = [('ff', '+0', 'steps'), ('ff', '+1.1', 'bam'), ('s1', 'bande', 'whoosh'), ('s3', 'remplit', 'rattle'), ('s3', 'vert|verre', 'pop'), ('s3', 'casserole', 'pop'), ('s3', 'saut|seau', 'pop'),
        ('s5', 'vert|verre', 'tick'), ('s5', 'casserole', 'tick'), ('s5', 'saut|seau', 'tick'), ('s6', 'idée', 'ding'), ('s7b', '+0', 'buzz'), ('s7c', 'cave', 'steps')]
MUSIC = 0.2
