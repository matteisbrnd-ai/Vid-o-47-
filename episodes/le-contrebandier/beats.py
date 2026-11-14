# Format allemand (solution expliquée, ≤ 62 s). Le contrebandier — own script of the classic « smuggler » riddle (Meister Knobel's top format, 373K).
# Answer: il fait passer des scooters (un neuf chaque jour) ; le sac de sable sert à distraire. Hidden clue: the scooter colour changes every day.
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'tension', 's3': 'question', 's4': 'menace', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'neutre', 'sol2': 'excite', 'sol3': 'complice', 'sol4': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Ce douanier fouille 47 depuis 20 ans… et il ne trouve JAMAIS rien !", "Ce douanier fouille Quarante-sept depuis vingt ans... et il ne trouve JAMAIS rien !", 0.2),
  ('s1', "Chaque matin, 47 passe la frontière en scooter, avec un sac sur le porte-bagages.", "Chaque matin, Quarante-sept passe la frontière en scooter, avec un sac sur le porte-bagages.", 0.15),
  ('s2', "Le douanier fouille le sac : que du sable. Rien d'autre.", "Le douanier fouille le sac : que du sable. Rien d'autre.", 0.15),
  ('s3', "Il le laisse passer. Le lendemain, pareil. Et ça, pendant 20 ans.", "Il le laisse passer. Le lendemain, pareil. Et ça, pendant vingt ans.", 0.2),
  ('s4', "Pourtant, 47 est devenu très riche. Le douanier en est sûr : c'est un contrebandier.", "Pourtant, Quarante-sept est devenu très riche. Le douanier en est sûr : c'est un contrebandier.", 0.3),
  ('q', "Mais qu'est-ce qu'il fait passer ?", "Mais qu'est-ce qu'il fait passer ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : le sable, c'est juste pour occuper le douanier.", "La solution : le sable, c'est juste pour occuper le douanier.", 0.15),
  ('sol2', "Ce que 47 fait passer… c'est le scooter ! Un nouveau chaque jour.", "Ce que Quarante-sept fait passer... c'est le scooter ! Un nouveau chaque jour.", 0.15),
  ('sol3', "En 20 ans, le sable a été vérifié tous les jours. Le scooter… jamais.", "En vingt ans, le sable a été vérifié tous les jours. Le scooter... jamais.", 0.15),
  ('sol4', "Au total : sept mille trois cents scooters !", "Au total : sept mille trois cents scooters !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'stamp'), ('s1', 'scooter', 'engine'), ('s2', 'sable', 'rattle'), ('s2', 'Rien', 'buzz'), ('s3', 'lendemain', 'tick'), ('s3', 'ans', 'stamp'), ('s4', 'riche', 'cash'),
        ('s4', 'contrebandier', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('sol2', 'scooter', 'bam'), ('sol3', 'jamais', 'buzz'), ('sol4', 'sept', 'cash'), ('end', '+0', 'ding')]
