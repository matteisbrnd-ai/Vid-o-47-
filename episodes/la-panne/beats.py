# La panne — 47's alibi: he read his book during a total blackout. Answer (not given): impossible to read in the dark.
EMO = {'ff': 'mystere', 'hook': 'complice', 's1': 'tension', 's2': 'neutre', 's3': 'question', 's4': 'amuse', 's5': 'menace', 'q': 'complice'}
SFX = 0.3
BEATS = [
  ('ff',    "Une seule phrase l'a trahi. Toi, tu l'aurais vue ?", "Une seule phrase l'a trahi... Toi, tu l'aurais vue ?", 0.25),
  ('s1',    "Hier soir, 21 h : panne de courant dans tout le quartier. Pendant une heure, noir complet.", "Hier soir, vingt-et-une heures : panne de courant dans tout le quartier. Pendant une heure, noir complet.", 0.15),
  ('s2',    "Pile pendant la panne, la bijouterie de la rue se fait dévaliser.", "Pile pendant la panne, la bijouterie de la rue se fait dévaliser.", 0.2),
  ('s3',    "Le lendemain, l'inspecteur interroge 47 : vous faisiez quoi, de 21 h à 22 h ?", "Le lendemain, l'inspecteur interroge Quarante-sept : vous faisiez quoi, de vingt-et-une heures à vingt-deux heures ?", 0.15),
  ('s4',    "47, très calme : j'étais chez moi. J'ai lu mon livre, tranquille, jusqu'à 22 h.", "Quarante-sept, très calme : j'étais chez moi. J'ai lu mon livre, tranquille, jusqu'à vingt-deux heures.", 0.3),
  ('s5',    "L'inspecteur sort les menottes : menteur.", "L'inspecteur sort les menottes : menteur.", 0.3),
  ('q',     "Comment il a su ? Réponds en un mot en commentaire.", "Comment il a su ? Réponds en un mot en commentaire.", 1.8),
]
SKIP_EV = ['bam']   # CLIC/CLAC/CRAC drawn on screen get real sounds below instead of a generic boom
CUES = [('ff', '+0.04', 'cuffs'), ('ff', '+0.3', 'bam'), ('s1', '+0', 'ticktock'), ('s1', 'panne', 'flicker'), ('s1', 'noir', 'crickets'), ('s2', '+0.1', 'run'),
        ('s2', 'dévaliser', 'glass'), ('s3', '+0', 'ticktock'), ('s4', 'livre', 'page'), ('s5', 'menottes', 'chain'), ('s5', 'menottes', 'cuffs'),
        ('s5', 'menteur', 'stamp'), ('q', '+0', 'chain'), ('q', '+0', 'ding')]
