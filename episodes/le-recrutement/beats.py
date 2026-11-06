# Le recrutement — same form as nalveo's bathtub hit, new data: a jacuzzi in the gang's hideout; glass, saucepan, bucket.
# Answer (not given): pull the plug.
PROS = {'ff': ('+12%', '+2Hz', '+0%'), 's2': ('+20%', '+16Hz', '+0%'), 's5': ('+20%', '+14Hz', '+0%'), 's6': ('+24%', '+18Hz', '+5%'), 's7': ('-6%', '-8Hz', '+0%'), 'share': ('+18%', '+14Hz', '+0%')}
BEATS = [
  ('ff',    "Une seule mauvaise réponse… et 47 finit enfermé à la cave.", "Une seule mauvaise réponse... et Quarante-sept finit enfermé à la cave.", 0.2),
  ('hook',  "Es-tu capable de réussir le test que 47 a raté ?", "Es-tu capable de réussir le test que Quarante-sept a raté ?", 0.2),
  ('s1',    "47 veut entrer dans la bande la plus redoutée de la ville. Il va voir le chef, au fond de son repaire.", "Quarante-sept veut entrer dans la bande la plus redoutée de la ville. Il va voir le chef, au fond de son repaire.", 0.1),
  ('s2',    "Comment vous choisissez vos membres ?", "Comment vous choisissez vos membres ?", 0.15),
  ('s3',    "Le chef sourit : on remplit ce jacuzzi à ras bord. Puis on donne trois choses au candidat : un verre, une casserole, et un seau.", "Le chef sourit : on remplit ce jacuzzi à ras bord. Puis on donne trois choses au candidat : un verre, une casserole, et un seau.", 0.1),
  ('s4',    "Et on lui demande de vider le jacuzzi.", "Et on lui demande de vider le jacuzzi.", 0.2),
  ('s5',    "Alors, toi, tu prendrais quoi ? Le verre ? La casserole ? Ou le seau ?", "Alors, toi, tu prendrais quoi ? Le verre ? La casserole ? Ou le seau ?", 0.3),
  ('s6',    "47 a une idée : facile, je prends le seau, c'est le plus grand !", "Quarante-sept a une idée : facile, je prends le seau, c'est le plus grand !", 0.25),
  ('s7',    "Le chef le regarde… non. Gardes, emmenez-le à la cave.", "Le chef le regarde... non. Gardes, emmenez-le à la cave.", 0.3),
  ('q',     "Alors, qu'est-ce qu'il fallait faire ? Ta réponse en commentaire.", "Alors, qu'est-ce qu'il fallait faire ? Ta réponse en commentaire.", 0.25),
  ('share', "Envoie-la à quelqu'un qui pense être malin.", "Envoie-la à quelqu'un qui pense être malin.", 1.2),
]
CUES = [('ff', '+0', 'bam'), ('ff', '+0.6', 'clink'), ('s1', 'repaire', 'steps'), ('s3', 'remplit', 'rattle'), ('s3', 'verre', 'pop'), ('s3', 'casserole', 'pop'), ('s3', 'seau', 'pop'),
        ('s5', '+0', 'ding'), ('s5', 'verre', 'tick'), ('s5', 'casserole', 'tick'), ('s5', 'seau', 'tick'), ('s6', 'idée', 'ding'), ('s7', 'non', 'buzz'), ('s7', 'cave', 'steps'), ('q', '+0', 'ding')]
