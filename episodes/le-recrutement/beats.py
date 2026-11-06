# Le recrutement — Henri (natural mode). Same scenes as le-recrutement-voix.
PROS = {'ff': ('+8%', '-4Hz', '+0%'), 's2': ('+16%', '+14Hz', '+0%'), 's3a': ('+12%', '+4Hz', '+0%'), 's5': ('+18%', '+14Hz', '+0%'),
        's6': ('+22%', '+16Hz', '+5%'), 's7a': ('+0%', '-4Hz', '+0%'), 's7b': ('-10%', '-10Hz', '+5%'), 's7c': ('+14%', '+6Hz', '+0%')}
BEATS = [
  ('ff',  "Si tu rates ce test… t'es trop bête pour entrer dans le gang.", "Si tu rates ce test… t'es trop bête pour entrer dans le gang.", 0.25),
  ('s1',  "47 veut entrer dans la bande la plus redoutée de la ville.", "Quarante-sept veut entrer dans la bande la plus redoutée de la ville.", 0.1),
  ('s2',  "Il va voir le chef, et lui demande : comment vous choisissez vos membres ?", "Il va voir le chef, et lui demande : comment vous choisissez vos membres ?", 0.15),
  ('s3a', "Le chef sourit : ici, on prend que les malins.", "Le chef sourit : ici, on prend que les malins.", 0.15),
  ('s3',  "On remplit ce jacuzzi à ras bord. Puis on donne trois choses au candidat : un verre, une casserole… et un seau.", "On remplit ce jacuzzi à ras bord. Puis on donne trois choses au candidat : un verre, une casserole… et un seau.", 0.1),
  ('s4',  "Et on lui demande de vider le jacuzzi.", "Et on lui demande de vider le jacuzzi.", 0.25),
  ('s5',  "Alors toi, tu prendrais quoi ? Le verre ? La casserole ? Ou le seau ?", "Alors toi, tu prendrais quoi ? Le verre ? La casserole ? Ou le seau ?", 1.0),
  ('s6',  "47 a une idée : facile ! Je prends le seau, c'est le plus grand !", "Quarante-sept a une idée : facile ! Je prends le seau, c'est le plus grand !", 0.2),
  ('s7a', "Le chef le regarde…", "Le chef le regarde…", 0.9),
  ('s7b', "Non.", "Non.", 0.35),
  ('s7c', "Gardes ! Emmenez-le à la cave.", "Gardes ! Emmenez-le à la cave.", 0.3),
  ('q',   "Alors, qu'est-ce qu'il fallait faire ? Ta réponse en commentaire.", "Alors, qu'est-ce qu'il fallait faire ? Ta réponse en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'steps'), ('ff', '+1.1', 'bam'), ('s1', 'bande', 'whoosh'), ('s3', 'remplit', 'rattle'), ('s3', 'verre', 'pop'), ('s3', 'casserole', 'pop'), ('s3', 'seau', 'pop'),
        ('s5', 'verre', 'tick'), ('s5', 'casserole', 'tick'), ('s5', 'seau', 'tick'), ('s6', 'idée', 'ding'), ('s7b', '+0', 'buzz'), ('s7c', 'cave', 'steps')]
MUSIC = 0.22
