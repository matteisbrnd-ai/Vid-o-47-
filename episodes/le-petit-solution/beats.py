# Format allemand (solution expliquée, ≤ 62 s). Le petit — classic « elevator man » riddle, own script: Léon lives on the 20th floor, rides up to the 10th and walks the rest,
# except when it rains. Answer (not given): il est trop petit pour atteindre le bouton 20 (avec son parapluie, il y arrive).
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'question', 's3': 'complice', 's4': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse', 'sol1': 'neutre', 'sol2': 'neutre', 'sol3': 'excite', 'sol4': 'excite', 'end': 'complice'}
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
  ('q', "Pourquoi il fait ça ?", "Pourquoi il fait ça ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : Léon est trop petit. Il n'arrive pas à appuyer sur le bouton 20, tout en haut.", "La solution : Léon est trop petit. Il n'arrive pas à appuyer sur le bouton vingt, tout en haut.", 0.15),
  ('sol2', "Il atteint seulement le bouton 10… alors il finit à pied.", "Il atteint seulement le bouton dix... alors il finit à pied.", 0.15),
  ('sol3', "Mais quand il pleut, il a son parapluie : il appuie sur le 20 avec le bout !", "Mais quand il pleut, il a son parapluie : il appuie sur le vingt avec le bout !", 0.15),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'ding'), ('s1', 'ascenseur', 'dingdong'), ('s2', '10e|dixième', 'beep'), ('s2', 'pied', 'steps'), ('s3', 'pluie', 'wind'), ('s3', 'direct', 'whoosh'), ('s4', 'pourquoi', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('end', '+0', 'ding')]
