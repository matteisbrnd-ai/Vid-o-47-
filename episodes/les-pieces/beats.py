# Format allemand (solution expliquée). Classic « 20 pièces dans le noir, 10 côté face » re-skinned: 47 blindfolded at the Baron's desk.
# Answer: take any 10 coins as one pile and flip them ALL → both piles always have the same number of heads (k face in his pile ↔ 10−k face elsewhere).
EMO = {'ff': 'excite', 's1': 'menace', 's2': 'neutre', 's3': 'neutre', 's4': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Yeux bandés, vingt pièces, dont dix côté face. Fais deux tas avec AUTANT de « face » !", "Yeux bandés, vingt pièces, dont dix côté face. Fais deux tas avec AUTANT de face !", 0.2),
  ('s1', "Le Baron bande les yeux de 47 et renverse vingt pièces sur son bureau.", "Le Baron bande les yeux de Quarante-sept et renverse vingt pièces sur son bureau.", 0.15),
  ('s2', "Dix sont côté pile, dix côté face. Au toucher, impossible de les distinguer.", "Dix sont côté pile, dix côté face. Au toucher, impossible de les distinguer.", 0.15),
  ('s3', "La mission : faire deux tas avec autant de « face » dans chaque tas. Il peut retourner les pièces qu'il veut.", "La mission : faire deux tas avec autant de face dans chaque tas. Il peut retourner les pièces qu'il veut.", 0.2),
  ('s4', "Il a trente secondes, le temps d'un TikTok. Sinon… direction le cachot.", "Il a trente secondes, le temps d'un TikTok. Sinon... direction le cachot.", 0.3),
  ('q', "Comment il fait ?", "Comment il fait ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : il prend dix pièces au hasard… et il les retourne TOUTES.", "La solution : il prend dix pièces au hasard... et il les retourne TOUTES.", 0.15),
  ('sol2', "Exemple : dans ses dix pièces, il y a trois « face ». Donc l'autre tas en a sept.", "Exemple : dans ses dix pièces, il y a trois face. Donc l'autre tas en a sept.", 0.15),
  ('sol3', "Il retourne son tas : ses sept « pile » deviennent sept « face ». Sept et sept : gagné, à tous les coups !", "Il retourne son tas : ses sept pile deviennent sept face. Sept et sept : gagné, à tous les coups !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'rattle'), ('s1', 'bande', 'whoosh'), ('s1', 'renverse', 'rattle'), ('s2', 'pile', 'clink'), ('s2', 'face', 'clink'), ('s2', 'impossible', 'buzz'),
        ('s3', 'tas', 'pop'), ('s3', 'retourner', 'clink'), ('s4', 'secondes', 'ticktock'), ('s4', 'cachot', 'chain'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol1', 'retourne', 'rattle'), ('sol2', 'trois', 'pop'), ('sol2', 'sept', 'pop'), ('sol3', 'deviennent', 'rattle'), ('sol3', 'gagné', 'cash'), ('end', '+0', 'ding')]
