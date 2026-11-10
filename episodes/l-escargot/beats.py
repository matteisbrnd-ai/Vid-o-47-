# L'escargot — the classic « snail in the well » puzzle (well 10 m, +3 m by day, −2 m by night), own script with 47's snail Gaston.
# Answer (not given): 8 jours (au bout de 7 jours il est à 7 m, le 8e jour il grimpe 3 m et sort).
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'neutre', 's3': 'tension', 's4': 'question', 'q': 'complice'}
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
  ('q', "Réponds en commentaire.", "Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'buzz'), ('s1', 'tombé', 'whoosh'), ('s1', 'mètres', 'bam'), ('s2', 'grimpe', 'bubble'), ('s3', 'endort', 'ticktock'), ('s3', 'glisse', 'whoosh'), ('s4', 'jours', 'sting'), ('q', '+0', 'ding')]
