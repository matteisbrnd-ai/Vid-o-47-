# Le petit — classic « elevator man » riddle, own script: Léon lives on the 20th floor, rides up to the 10th and walks the rest,
# except when it rains. Answer (not given): il est trop petit pour atteindre le bouton 20 (avec son parapluie, il y arrive).
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'question', 's3': 'complice', 's4': 'tension', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Il habite au 20e étage… et il s'arrête TOUJOURS au 10e !", "Il habite au vingtième étage... et il s'arrête TOUJOURS au dixième !", 0.2),
  ('s1', "Léon, le voisin de 47, habite au 20e étage. Le matin, il prend l'ascenseur jusqu'en bas, aucun souci.", "Léon, le voisin de Quarante-sept, habite au vingtième étage. Le matin, il prend l'ascenseur jusqu'en bas, aucun souci.", 0.15),
  ('s2', "Mais le soir, il s'arrête au 10e… et monte les dix derniers étages à pied.", "Mais le soir, il s'arrête au dixième... et monte les dix derniers étages à pied.", 0.15),
  ('s3', "Sauf les jours de pluie. Là, il monte direct jusqu'au 20e.", "Sauf les jours de pluie. Là, il monte direct jusqu'au vingtième.", 0.25),
  ('s4', "Il n'a pas peur de l'ascenseur. Il n'est pas sportif. Alors pourquoi ?", "Il n'a pas peur de l'ascenseur. Il n'est pas sportif. Alors pourquoi ?", 0.3),
  ('q', "Réponds en commentaire.", "Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'ding'), ('s1', 'ascenseur', 'dingdong'), ('s2', '10e|dixième', 'beep'), ('s2', 'pied', 'steps'), ('s3', 'pluie', 'wind'), ('s3', 'direct', 'whoosh'), ('s4', 'pourquoi', 'sting'), ('q', '+0', 'ding')]
