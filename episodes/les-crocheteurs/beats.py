# Les crocheteurs — format allemand (solution expliquée). Classic CRT « 5 machines, 5 widgets, 5 minutes → 100 machines, 100 widgets ? » re-skinned as a heist.
# Answer: 5 minutes (each thief opens one safe in 5 min, all at the same time), pas 100.
EMO = {'ff': 'excite', 's1': 'mystere', 's2': 'neutre', 's3': 'tension', 's4': 'complice', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'amuse', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "5 voleurs ouvrent 5 coffres en 5 minutes. 100 voleurs, 100 coffres : combien de minutes ?", "Cinq voleurs ouvrent cinq coffres en cinq minutes. Cent voleurs, cent coffres : combien de minutes ?", 0.2),
  ('s1', "Le Baron prépare le casse du siècle : une banque, 100 coffres… et l'alarme sonne au bout de 10 minutes.", "Le Baron prépare le casse du siècle : une banque, cent coffres... et l'alarme sonne au bout de dix minutes.", 0.15),
  ('s2', "À l'entraînement, 5 voleurs ouvrent 5 coffres en 5 minutes pile.", "À l'entraînement, cinq voleurs ouvrent cinq coffres en cinq minutes pile.", 0.15),
  ('s3', "Le jour J, ils sont 100, pour 100 coffres. Le Baron panique : 100 minutes ? On est fichus !", "Le jour J, ils sont cent, pour cent coffres. Le Baron panique : cent minutes ? On est fichus !", 0.2),
  ('s4', "47 regarde son chrono… et sourit : on a largement le temps.", "Quarante-sept regarde son chrono... et sourit : on a largement le temps.", 0.3),
  ('q', "Il leur faut combien de minutes ?", "Il leur faut combien de minutes ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : 5 minutes ! Pas 100.", "La solution : cinq minutes ! Pas cent.", 0.15),
  ('sol2', "5 voleurs, 5 coffres, 5 minutes : chaque voleur ouvre UN coffre en 5 minutes.", "Cinq voleurs, cinq coffres, cinq minutes : chaque voleur ouvre UN coffre en cinq minutes.", 0.15),
  ('sol3', "À 100, chacun ouvre le sien en même temps : 5 minutes. L'alarme n'a jamais sonné.", "À cent, chacun ouvre le sien en même temps : cinq minutes. L'alarme n'a jamais sonné.", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'click'), ('s1', 'casse', 'sting'), ('s1', 'alarme', 'ring'), ('s2', 'entraînement', 'whoosh'), ('s2', 'pile', 'ding'), ('s3', 'jour', 'stamp'),
        ('s3', 'panique', 'buzz'), ('s4', 'chrono', 'ticktock'), ('s4', 'sourit', 'ding'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol2', 'UN', 'pop'), ('sol3', 'même', 'click'), ('sol3', 'jamais', 'cash'), ('end', '+0', 'ding')]
