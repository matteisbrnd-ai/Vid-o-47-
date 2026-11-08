# Les bonnets — reflection riddle (classic « 4 prisoners & hats », Galagade-type): 3 buried in a line facing a wall, 1 behind it.
# Front A red, middle 47 blue, back C blue, behind the wall X red. C sees 2 different colours -> stays silent ->
# 47 understands his bonnet differs from A's (red) -> « bleu ». Answer (not given): the silence of the one behind him.
EMO = {'ff': 'menace', 's1': 'tension', 's2': 'neutre', 's3': 'neutre', 's4': 'menace', 's5': 'tension', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Un seul mot faux… et c'est la prison à vie pour les quatre.", "Un seul mot faux... et c'est la prison à vie pour les quatre.", 0.2),
  ('s1', "Le Baron a capturé 47 et trois complices. Il les enterre jusqu'au cou, en file, face à un mur.", "Le Baron a capturé Quarante-sept et trois complices. Il les enterre jusqu'au cou, en file, face à un mur.", 0.15),
  ('s2', "Le quatrième est seul, de l'autre côté du mur. Personne ne peut se retourner. Personne ne peut parler.", "Le quatrième est seul, de l'autre côté du mur. Personne ne peut se retourner. Personne ne peut parler.", 0.15),
  ('s3', "Sur chaque tête, un bonnet : deux rouges, deux bleus. Chacun voit seulement ceux qui sont devant lui.", "Sur chaque tête, un bonnet : deux rouges, deux bleus. Chacun voit seulement ceux qui sont devant lui.", 0.2),
  ('s4', "Le premier qui dit la couleur de son propre bonnet libère tout le monde.", "Le premier qui dit la couleur de son propre bonnet libère tout le monde.", 0.2),
  ('s5', "Une minute passe… silence total. Puis 47 crie : bleu ! Et il a raison.", "Une minute passe... silence total. Puis Quarante-sept crie : bleu ! Et il a raison.", 0.3),
  ('q', "Comment il a su ? Réponds en commentaire.", "Comment il a su ? Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'sting'), ('s1', 'enterre', 'paper'), ('s1', 'mur', 'stamp'), ('s2', 'seul', 'wind'), ('s3', 'rouges', 'pop'), ('s3', 'bleus', 'pop'),
        ('s4', 'libère', 'ding'), ('s5', 'minute', 'ticktock'), ('s5', 'bleu', 'bam'), ('s5', 'raison', 'dingdong'), ('q', '+0', 'ding')]
