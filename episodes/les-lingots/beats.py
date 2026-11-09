# Les lingots — classic « 17 camels » re-skinned: the Baron leaves 17 gold bars to 3 nephews (1/2, 1/3, 1/9, no cutting).
# 47 solves it in ten seconds and leaves with what he brought.
# Answer (not given): he adds one of his own bars -> 18 : 9 + 6 + 2 = 17, one left = his own, he takes it back.
EMO = {'ff': 'menace', 's1': 'mystere', 's2': 'neutre', 's3': 'tension', 's4': 'complice', 's5': 'amuse', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "17 lingots impossibles à partager… et 47 l'a fait sans en couper un seul.", "Dix-sept lingots impossibles à partager... et Quarante-sept l'a fait sans en couper un seul.", 0.2),
  ('s1', "Le Baron laisse dix-sept lingots d'or à ses trois neveux.", "Le Baron laisse dix-sept lingots d'or à ses trois neveux.", 0.15),
  ('s2', "La moitié pour l'aîné. Un tiers pour le deuxième. Un neuvième pour le petit.", "La moitié pour l'aîné. Un tiers pour le deuxième. Un neuvième pour le petit.", 0.2),
  ('s2b', "Et une seule règle : interdit de couper un lingot.", "Et une seule règle : interdit de couper un lingot.", 0.2),
  ('s3', "Mais dix-sept, ça ne se divise ni par deux, ni par trois, ni par neuf. Les neveux sont prêts à se battre.", "Mais dix-sept, ça ne se divise ni par deux, ni par trois, ni par neuf. Les neveux sont prêts à se battre.", 0.2),
  ('s4', "47 arrive, réfléchit dix secondes… et chacun repart avec sa part exacte, sans rien couper.", "Quarante-sept arrive, réfléchit dix secondes... et chacun repart avec sa part exacte, sans rien couper.", 0.25),
  ('s5', "Et 47 repart avec ce qu'il avait apporté.", "Et Quarante-sept repart avec ce qu'il avait apporté.", 0.3),
  ('q', "Comment il a fait ? Réponds en commentaire.", "Comment il a fait ? Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'cash'), ('s1', 'lingots', 'clink'), ('s1', 'neveux', 'pop'), ('s2', 'moitié', 'pop'), ('s2', 'tiers', 'pop'), ('s2', 'neuvième', 'pop'),
        ('s2b', 'couper', 'stamp'), ('s3', 'deux', 'buzz'), ('s3', 'trois', 'buzz'), ('s3', 'neuf', 'buzz'), ('s3', 'battre', 'sting'),
        ('s4', 'arrive', 'steps'), ('s4', 'secondes', 'ticktock'), ('s4', 'exacte', 'dingdong'), ('s5', 'repart', 'steps'), ('q', '+0', 'ding')]
