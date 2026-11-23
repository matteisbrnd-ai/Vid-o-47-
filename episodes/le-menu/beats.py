# Le menu — format allemand (solution expliquée). Classic « bat and ball » (CRT) re-skinned: Tasty Crousty + Ciao Energy = 11 €, the Tasty costs 10 € more.
# Answer: la Ciao coûte 50 centimes (Tasty 10,50 €), pas 1 €.
EMO = {'ff': 'excite', 's1': 'complice', 's2': 'menace', 's3': 'neutre', 's4': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'amuse', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Le menu coûte 11 €. Le Tasty coûte 10 € de plus que la Ciao. La Ciao coûte combien ?", "Le menu coûte onze euros. Le Tasty coûte dix euros de plus que la Ciao. La Ciao coûte combien ?", 0.2),
  ('s1', "47 n'a plus un centime. Le caissier lui lance un défi : trouve le prix de la canette, et ton menu est offert.", "Quarante-sept n'a plus un centime. Le caissier lui lance un défi : trouve le prix de la canette, et ton menu est offert.", 0.15),
  ('s2', "Sinon, c'est la plonge toute la nuit. Le menu, Tasty Crousty plus Ciao Energy : 11 euros.", "Sinon, c'est la plonge toute la nuit. Le menu, Tasty Crousty plus Ciao Energy : onze euros.", 0.15),
  ('s3', "Et le Tasty Crousty coûte 10 euros de plus que la canette.", "Et le Tasty Crousty coûte dix euros de plus que la canette.", 0.2),
  ('s4', "Toute la file crie : 1 euro ! 47 secoue la tête…", "Toute la file crie : un euro ! Quarante-sept secoue la tête...", 0.3),
  ('q', "La Ciao coûte combien ?", "La Ciao coûte combien ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : 50 centimes ! Pas 1 euro.", "La solution : cinquante centimes ! Pas un euro.", 0.15),
  ('sol2', "Si la Ciao coûtait 1 euro, le Tasty coûterait 11… et le menu, 12. Trop cher !", "Si la Ciao coûtait un euro, le Tasty coûterait onze... et le menu, douze. Trop cher !", 0.15),
  ('sol3', "Ciao à 50 centimes, Tasty à 10 euros 50 : 11 euros pile. Menu offert !", "Ciao à cinquante centimes, Tasty à dix euros cinquante : onze euros pile. Menu offert !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'cash'), ('s1', 'centime', 'buzz'), ('s1', 'défi', 'sting'), ('s1', 'offert', 'ding'), ('s2', 'plonge', 'stamp'), ('s2', 'onze', 'cash'),
        ('s3', 'dix', 'pop'), ('s4', 'crie', 'laugh'), ('s4', 'secoue', 'whoosh'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol2', 'douze', 'buzz'), ('sol3', 'pile', 'ding'), ('sol3', 'offert', 'cash'), ('end', '+0', 'ding')]
