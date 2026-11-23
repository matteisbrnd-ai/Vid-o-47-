# Les nénuphars — format allemand (solution expliquée). Classic « lily pads double every day, lake full on day 48 → half on day 47 ».
# Answer: la nuit 47 (la veille du lac plein), pas 24.
EMO = {'ff': 'excite', 's1': 'menace', 's2': 'menace', 's3': 'neutre', 's4': 'complice', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'amuse', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Ils doublent chaque nuit. Lac plein en 48 nuits… à moitié, c'est quelle nuit ?", "Ils doublent chaque nuit. Lac plein en quarante-huit nuits... à moitié, c'est quelle nuit ?", 0.2),
  ('s1', "Le Baron parie avec 47 : trouve la nuit où mon lac sera à moitié couvert, et mon or est à toi. Sinon, tu bosses pour moi à vie.", "Le Baron parie avec Quarante-sept : trouve la nuit où mon lac sera à moitié couvert, et mon or est à toi. Sinon, tu bosses pour moi à vie.", 0.15),
  ('s2', "Il jette un seul nénuphar. Chaque nuit, ils doublent : un, deux, quatre, huit…", "Il jette un seul nénuphar. Chaque nuit, ils doublent : un, deux, quatre, huit...", 0.1),
  ('s3', "En 48 nuits pile, le lac est plein.", "En quarante-huit nuits pile, le lac est plein.", 0.2),
  ('s4', "47 ouvre sa Ciao Energy… et sourit.", "Quarante-sept ouvre sa Ciao Energy... et sourit.", 0.3),
  ('q', "À moitié couvert, c'est quelle nuit ?", "À moitié couvert, c'est quelle nuit ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : la nuit 47 ! Pas la 24.", "La solution : la nuit quarante-sept ! Pas la vingt-quatre.", 0.15),
  ('sol2', "Ça double chaque nuit. Donc la veille du lac plein… il était à moitié couvert.", "Ça double chaque nuit. Donc la veille du lac plein... il était à moitié couvert.", 0.15),
  ('sol3', "Nuit 48 : plein. Et l'or du Baron… il est pour 47 !", "Nuit quarante-huit : plein. Et l'or du Baron... il est pour Quarante-sept !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'pop'), ('s1', 'parie', 'sting'), ('s1', 'or', 'cash'), ('s1', 'vie', 'stamp'), ('s2', 'jette', 'whoosh'), ('s2', 'deux', 'pop'), ('s2', 'quatre', 'pop'),
        ('s2', 'huit', 'pop'), ('s3', 'plein', 'stamp'), ('s4', 'ouvre', 'click'), ('s4', 'sourit', 'ding'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol2', 'veille', 'whoosh'), ('sol3', 'Baron', 'cash'), ('end', '+0', 'ding')]
