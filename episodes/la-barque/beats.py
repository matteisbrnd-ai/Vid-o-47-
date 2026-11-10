# La barque — the medieval « loup, chèvre, chou » river puzzle (Alcuin, ~800), own script with 47.
# Answer (not given): chèvre → retour → loup → ramène la chèvre → chou → retour → chèvre (7 traversées).
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'neutre', 's3': 'tension', 's4': 'question', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Un loup, une chèvre, un chou… et une barque où il n'y a qu'UNE place !", "Un loup, une chèvre, un chou... et une barque où il n'y a qu'UNE place !", 0.2),
  ('s1', "47 doit faire traverser la rivière à un loup, une chèvre et un chou.", "Quarante-sept doit faire traverser la rivière à un loup, une chèvre et un chou.", 0.15),
  ('s2', "Sa barque est minuscule : lui, plus un seul passager à chaque voyage.", "Sa barque est minuscule : lui, plus un seul passager à chaque voyage.", 0.15),
  ('s3', "S'il laisse le loup seul avec la chèvre… le loup la mange. Et la chèvre seule avec le chou… elle le mange.", "S'il laisse le loup seul avec la chèvre... le loup la mange. Et la chèvre seule avec le chou... elle le mange.", 0.25),
  ('s4', "Comment il fait passer les trois, sans que personne se fasse manger ?", "Comment il fait passer les trois, sans que personne se fasse manger ?", 0.3),
  ('q', "Réponds en commentaire.", "Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'whoosh'), ('s1', 'loup', 'bark'), ('s1', 'chèvre', 'pop'), ('s1', 'chou', 'pop'), ('s2', 'minuscule', 'bubble'), ('s3', 'mange', 'bam'), ('s3', 'elle', 'pop'), ('s4', 'manger', 'sting'), ('q', '+0', 'ding')]
