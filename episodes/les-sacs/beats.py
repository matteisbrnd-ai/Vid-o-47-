# Les sacs — classic « 10 bags, one of fake coins, one weighing » reflection riddle, Galagade style + triple hook.
# Answer (not given): take 1 coin from bag 1, 2 from bag 2 … 10 from bag 10; all genuine = 550 g; missing grams = number of the fake bag.
EMO = {'ff': 'mystere', 's1': 'tension', 's2': 'neutre', 's3': 'neutre', 's4': 'menace', 's5': 'complice', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Dix sacs d'or, un seul est faux… et il le trouve en une seule pesée.", "Dix sacs d'or, un seul est faux... et il le trouve en une seule pesée.", 0.2),
  ('s1', "Le Baron surprend 47 dans son coffre-fort. Mais au lieu d'appeler la police, il lui propose un marché.", "Le Baron surprend Quarante-sept dans son coffre-fort. Mais au lieu d'appeler la police, il lui propose un marché.", 0.15),
  ('s2', "Dix sacs remplis de pièces d'or. Dans un seul sac, toutes les pièces sont fausses.", "Dix sacs remplis de pièces d'or. Dans un seul sac, toutes les pièces sont fausses.", 0.15),
  ('s3', "Une vraie pièce pèse dix grammes. Une fausse, neuf grammes. À l'œil, impossible de les distinguer.", "Une vraie pièce pèse dix grammes. Une fausse, neuf grammes. À l'œil, impossible de les distinguer.", 0.2),
  ('s4', "47 a droit à une balance… et une seule pesée. S'il trouve le faux sac, il repart libre.", "Quarante-sept a droit à une balance... et une seule pesée. S'il trouve le faux sac, il repart libre.", 0.2),
  ('s5', "47 sourit, plonge la main dans les sacs… et pose ses pièces sur la balance.", "Quarante-sept sourit, plonge la main dans les sacs... et pose ses pièces sur la balance.", 0.3),
  ('q', "Comment il fait ? Réponds en commentaire.", "Comment il fait ? Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'cash'), ('s1', 'surprend', 'sting'), ('s1', 'marché', 'ding'), ('s2', 'sacs', 'rattle'), ('s2', 'fausses', 'buzz'), ('s3', 'vraie', 'pop'),
        ('s3', 'fausse', 'pop'), ('s4', 'balance', 'beep'), ('s4', 'seule', 'stamp'), ('s5', 'main', 'rattle'), ('s5', 'balance', 'beep'), ('q', '+0', 'ding')]
