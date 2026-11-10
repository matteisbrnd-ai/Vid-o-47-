# Format allemand (solution expliquée, ≤ 62 s). La barque — the medieval « loup, chèvre, chou » river puzzle (Alcuin, ~800), own script with 47.
# Answer (not given): chèvre → retour → loup → ramène la chèvre → chou → retour → chèvre (7 traversées).
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'neutre', 's3': 'tension', 's4': 'question', 'q': 'question', 'c1': 'complice', 'c2': 'amuse', 'sol1': 'neutre', 'sol2': 'neutre', 'sol3': 'excite', 'sol4': 'excite', 'end': 'complice'}
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
  ('q', "Comment il fait ?", "Comment il fait ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : il emmène d'abord la chèvre, et revient seul.", "La solution : il emmène d'abord la chèvre, et revient seul.", 0.15),
  ('sol2', "Puis il prend le loup… et ramène la chèvre avec lui.", "Puis il prend le loup... et ramène la chèvre avec lui.", 0.15),
  ('sol3', "Il laisse la chèvre, emmène le chou, et le dépose à côté du loup.", "Il laisse la chèvre, emmène le chou, et le dépose à côté du loup.", 0.15),
  ('sol4', "Enfin, il revient chercher la chèvre. Sept traversées, personne mangé !", "Enfin, il revient chercher la chèvre. Sept traversées, personne mangé !", 0.15),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'whoosh'), ('s1', 'loup', 'bark'), ('s1', 'chèvre', 'pop'), ('s1', 'chou', 'pop'), ('s2', 'minuscule', 'bubble'), ('s3', 'mange', 'bam'), ('s3', 'elle', 'pop'), ('s4', 'manger', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('end', '+0', 'ding')]
