# Format allemand (solution expliquée, ≤ 62 s). L'escargot — the classic « snail in the well » puzzle (well 10 m, +3 m by day, −2 m by night), own script with 47's snail Gaston.
# Answer (not given): 8 jours (au bout de 7 jours il est à 7 m, le 8e jour il grimpe 3 m et sort).
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'neutre', 's3': 'tension', 's4': 'question', 'q': 'question', 'c1': 'complice', 'c2': 'amuse', 'sol1': 'neutre', 'sol2': 'neutre', 'sol3': 'excite', 'sol4': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Presque tout le monde répond dix jours… et c'est FAUX !", "Presque tout le monde répond dix jours... et c'est FAUX !", 0.2),
  ('s1', "Gaston, l'escargot de 47, est tombé au fond d'un puits de dix mètres.", "Gaston, l'escargot de Quarante-sept, est tombé au fond d'un puits de dix mètres.", 0.15),
  ('s2', "Chaque jour, il grimpe de trois mètres.", "Chaque jour, il grimpe de trois mètres.", 0.1),
  ('s3', "Mais chaque nuit, il s'endort… et glisse de deux mètres.", "Mais chaque nuit, il s'endort... et glisse de deux mètres.", 0.25),
  ('s4', "En combien de jours Gaston sort-il du puits ?", "En combien de jours Gaston sort-il du puits ?", 0.3),
  ('q', "En combien de jours ?", "En combien de jours ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : chaque jour complet, Gaston gagne un mètre. Trois en montant, deux en glissant.", "La solution : chaque jour complet, Gaston gagne un mètre. Trois en montant, deux en glissant.", 0.15),
  ('sol2', "Au bout de sept jours, il est à sept mètres.", "Au bout de sept jours, il est à sept mètres.", 0.15),
  ('sol3', "Le huitième jour, il grimpe ses trois mètres… et il sort, avant la nuit ! Réponse : huit jours.", "Le huitième jour, il grimpe ses trois mètres... et il sort, avant la nuit ! Réponse : huit jours.", 0.15),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'buzz'), ('s1', 'tombé', 'whoosh'), ('s1', 'mètres', 'bam'), ('s2', 'grimpe', 'bubble'), ('s3', 'endort', 'ticktock'), ('s3', 'glisse', 'whoosh'), ('s4', 'jours', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('end', '+0', 'ding')]
