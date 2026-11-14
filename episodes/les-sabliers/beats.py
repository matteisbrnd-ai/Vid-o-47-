# Les sabliers — classic hourglass puzzle (7 min + 4 min → measure exactly 9 min), own script with 47 in the Baron's vault.
# Answer (not given): start both; at 4 flip the 4; at 7 flip the 7; at 8 (4 empties) flip the 7 again → it runs 1 more minute → 9.
EMO = {'ff': 'excite', 's1': 'tension', 's2': 'menace', 's3': 'neutre', 's4': 'question', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Deux sabliers… et il doit compter EXACTEMENT 9 minutes !", "Deux sabliers... et il doit compter EXACTEMENT neuf minutes !", 0.2),
  ('s1', "Le Baron enferme 47 dans la salle des coffres. La porte s'ouvre seulement si on appuie sur le bouton au bout de 9 minutes pile.", "Le Baron enferme Quarante-sept dans la salle des coffres. La porte s'ouvre seulement si on appuie sur le bouton au bout de neuf minutes pile.", 0.15),
  ('s2', "Une seconde trop tôt ou trop tard… et l'alarme sonne.", "Une seconde trop tôt ou trop tard... et l'alarme sonne.", 0.2),
  ('s3', "Pas de montre, pas de téléphone. Juste deux sabliers : un de 7 minutes, un de 4 minutes.", "Pas de montre, pas de téléphone. Juste deux sabliers : un de sept minutes, un de quatre minutes.", 0.2),
  ('s4', "Comment 47 compte 9 minutes exactement ?", "Comment Quarante-sept compte neuf minutes exactement ?", 0.3),
  ('q', "Réponds en commentaire.", "Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'ticktock'), ('s1', 'enferme', 'bam'), ('s1', 'bouton', 'beep'), ('s2', 'alarme', 'ring'), ('s3', 'montre', 'buzz'), ('s3', 'sabliers', 'pop'), ('s4', 'exactement', 'sting'), ('q', '+0', 'ding')]
