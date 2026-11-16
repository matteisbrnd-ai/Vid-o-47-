# Format allemand (solution expliquée). Classic « l'échelle du bateau et la marée » re-skinned: the Baron's boat in the port, 10 rungs 30 cm apart, 2 under water,
# tide +50 cm/h, how many under water after 3 h? Answer: still 2 — the ladder is fixed to the boat and the boat floats (people compute 7).
EMO = {'ff': 'excite', 's1': 'tension', 's2': 'neutre', 's3': 'neutre', 's4': 'menace', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "La mer monte… et s'il se trompe d'UN seul barreau, il finit au fond du port !", "La mer monte... et s'il se trompe d'UN SEUL barreau, il finit au fond du port !", 0.2),
  ('s1', "Le Baron a coincé 47 sur son bateau, au port. Sur le côté pend une échelle.", "Le Baron a coincé Quarante-sept sur son bateau, au port. Sur le côté pend une échelle.", 0.15),
  ('s2', "Dix barreaux, un tous les 30 centimètres. En ce moment, deux sont sous l'eau.", "Dix barreaux, un tous les trente centimètres. En ce moment, deux sont sous l'eau.", 0.15),
  ('s3', "La marée monte de 50 centimètres par heure.", "La marée monte de cinquante centimètres par heure.", 0.15),
  ('s4', "Le Baron ouvre son Ciao Energy : « Dans trois heures, combien de barreaux sous l'eau ? Trompe-toi… et tu plonges. »", "Le Baron ouvre son Tchao Énergie : « Dans trois heures, combien de barreaux sous l'eau ? Trompe-toi... et tu plonges. »", 0.3),
  ('q', "Combien de barreaux sous l'eau ?", "Combien de barreaux sous l'eau ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : toujours deux !", "La solution : toujours deux !", 0.15),
  ('sol2', "L'échelle est accrochée au bateau… et le bateau flotte. Quand la mer monte, il monte avec elle.", "L'échelle est accrochée au bateau... et le bateau flotte. Quand la mer monte, il monte avec elle.", 0.15),
  ('sol3', "Ceux qui ont calculé sept barreaux auraient plongé. 47, lui, reste au sec !", "Ceux qui ont calculé sept barreaux auraient plongé. Quarante-sept, lui, reste au sec !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'wind'), ('ff', 'port', 'sting'), ('s1', 'bateau', 'wind'), ('s1', 'échelle', 'clink'), ('s2', 'barreaux', 'pop'), ('s2', 'eau', 'bubble'),
        ('s3', 'marée', 'wind'), ('s3', 'heure', 'ticktock'), ('s4', 'ouvre', 'click'), ('s4', 'plonges', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol2', 'flotte', 'bubble'), ('sol2', 'monte', 'whoosh'), ('sol3', 'sept', 'buzz'), ('sol3', 'sec', 'cash'), ('end', '+0', 'ding')]
