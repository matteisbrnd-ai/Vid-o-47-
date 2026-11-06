# La panne — 47's alibi: he read his book during a total blackout. Answer (not given): impossible to read in the dark.
PROS = {'ff': ('+10%', '-4Hz', '+0%'), 's5': ('+0%', '-6Hz', '+5%'), 'share': ('+18%', '+14Hz', '+0%')}
BEATS = [
  ('ff',    "Un alibi parfait… et l'inspecteur l'a démasqué en une phrase.", "Un alibi parfait... et l'inspecteur l'a démasqué en une phrase.", 0.25),
  ('hook',  "Es-tu capable de trouver où 47 s'est trahi ?", "Es-tu capable de trouver où Quarante-sept s'est trahi ?", 0.2),
  ('s1',    "Hier soir, 21 h : panne de courant dans tout le quartier. Pendant une heure, noir complet.", "Hier soir, vingt-et-une heures : panne de courant dans tout le quartier. Pendant une heure, noir complet.", 0.15),
  ('s2',    "Pile pendant la panne, la bijouterie de la rue se fait dévaliser.", "Pile pendant la panne, la bijouterie de la rue se fait dévaliser.", 0.2),
  ('s3',    "Le lendemain, l'inspecteur interroge 47 : vous faisiez quoi, de 21 h à 22 h ?", "Le lendemain, l'inspecteur interroge Quarante-sept : vous faisiez quoi, de vingt-et-une heures à vingt-deux heures ?", 0.15),
  ('s4',    "47, très calme : j'étais chez moi. J'ai lu mon livre, tranquille, jusqu'à 22 h.", "Quarante-sept, très calme : j'étais chez moi. J'ai lu mon livre, tranquille, jusqu'à vingt-deux heures.", 0.3),
  ('s5',    "L'inspecteur sort les menottes : menteur.", "L'inspecteur sort les menottes : menteur.", 0.3),
  ('q',     "Comment il a su ? Réponds en un mot en commentaire.", "Comment il a su ? Réponds en un mot en commentaire.", 0.25),
  ('share', "Envoie-la à quelqu'un qui pense être malin.", "Envoie-la à quelqu'un qui pense être malin.", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('s1', 'panne', 'click'), ('s1', 'noir', 'wind'), ('s2', 'dévaliser', 'bam'), ('s3', 'interroge', 'steps'),
        ('s4', 'livre', 'paper'), ('s5', 'menottes', 'clink'), ('s5', 'menteur', 'stamp'), ('q', '+0', 'ding')]
