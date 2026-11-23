# Les étages — format allemand (solution expliquée). Classic « 1st → 3rd floor in 10 s, 1st → 6th ? » (counting flights, not floors).
# Answer: 25 secondes (1→3 = 2 flights of 5 s; 1→6 = 5 flights), pas 20 → the inspector (22 s) arrives first.
EMO = {'ff': 'excite', 's1': 'tension', 's2': 'neutre', 's3': 'menace', 's4': 'complice', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'choc', 'sol2': 'neutre', 'sol3': 'amuse', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Du 1er au 3e étage, il met 10 secondes. Jusqu'au 6e, combien ?", "Du premier au troisième étage, il met dix secondes. Jusqu'au sixième, combien ?", 0.2),
  ('s1', "L'inspecteur coince 47 au premier étage. Sa seule sortie : la fenêtre du sixième, avec une tyrolienne.", "L'inspecteur coince Quarante-sept au premier étage. Sa seule sortie : la fenêtre du sixième, avec une tyrolienne.", 0.15),
  ('s2', "47 monte toujours à la même vitesse. Du premier au troisième étage : 10 secondes.", "Quarante-sept monte toujours à la même vitesse. Du premier au troisième étage : dix secondes.", 0.15),
  ('s3', "L'inspecteur prend l'ascenseur. Lui, il sera au sixième dans 22 secondes.", "L'inspecteur prend l'ascenseur. Lui, il sera au sixième dans vingt-deux secondes.", 0.2),
  ('s4', "47 se dit : deux fois plus d'étages… 20 secondes. Large !", "Quarante-sept se dit : deux fois plus d'étages... vingt secondes. Large !", 0.3),
  ('q', "Il lui faut combien de secondes, vraiment ?", "Il lui faut combien de secondes, vraiment ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : 25 secondes ! Pas 20.", "La solution : vingt-cinq secondes ! Pas vingt.", 0.15),
  ('sol2', "Du premier au troisième, il n'y a que deux escaliers : 5 secondes chacun.", "Du premier au troisième, il n'y a que deux escaliers : cinq secondes chacun.", 0.15),
  ('sol3', "Jusqu'au sixième, il y a cinq escaliers : 25 secondes. L'inspecteur l'attendait déjà.", "Jusqu'au sixième, il y a cinq escaliers : vingt-cinq secondes. L'inspecteur l'attendait déjà.", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'run'), ('s1', 'coince', 'sting'), ('s1', 'fenêtre', 'wind'), ('s2', 'monte', 'run'), ('s2', 'secondes', 'ding'), ('s3', 'ascenseur', 'dingdong'),
        ('s3', 'vingt', 'ticktock'), ('s4', 'Large', 'laugh'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol1', 'Pas', 'buzz'), ('sol2', 'deux', 'pop'), ('sol3', 'cinq', 'pop'), ('sol3', 'attendait', 'cuffs'), ('end', '+0', 'ding')]
