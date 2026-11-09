# Les traces — classic « footprints in fresh snow » riddle: one line of 47's prints going INTO the Baron's chalet,
# none coming out, chalet empty, yet 47 is home with the stolen GTA 6 collector.
# Answer (not given): à reculons — he walked out backwards in his own prints, so they all point toward the chalet.
EMO = {'ff': 'menace', 's1': 'mystere', 's2': 'tension', 's2b': 'menace', 's3': 'tension', 's4': 'complice', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Ses traces entrent dans le chalet… mais il n'y est plus.", "Ses traces entrent dans le chalet... mais il n'y est plus.", 0.2),
  ('s1', "Il a neigé toute la nuit sur le chalet du Baron. Au matin, son GTA 6 collector a disparu.", "Il a neigé toute la nuit sur le chalet du Baron. Au matin, son Gé-Té-A six collector a disparu.", 0.15),
  ('s2', "Dans la neige fraîche, une seule ligne de traces : les baskets de 47. Elles vont vers le chalet.", "Dans la neige fraîche, une seule ligne de traces : les baskets de Quarante-sept. Elles vont vers le chalet.", 0.15),
  ('s2b', "Le Baron appelle ses gardes : 47 est forcément encore dedans !", "Le Baron appelle ses gardes : Quarante-sept est forcément encore dedans !", 0.3),
  ('s3', "Les gardes fouillent tout : le chalet est vide. Aucune trace ne ressort.", "Les gardes fouillent tout : le chalet est vide. Aucune trace ne ressort.", 0.45),
  ('s4', "Pas de tunnel, pas d'hélico, pas de toit. Pourtant 47 est chez lui… manette en main.", "Pas de tunnel, pas d'hélico, pas de toit. Pourtant Quarante-sept est chez lui... manette en main.", 0.6),
  ('q', "Comment il est sorti ? Réponds en un mot.", "Comment il est sorti ? Réponds en un mot.", 1.8),
]
CUES = [('ff', '+0', 'sting'), ('s1', 'neigé', 'wind'), ('s1', 'disparu', 'stamp'), ('s2', 'traces', 'steps'), ('s2', 'vers', 'pop'),
        ('s2b', 'gardes', 'whoosh'), ('s3', 'fouillent', 'rattle'), ('s3', 'vide', 'buzz'), ('s3', 'ressort', 'wind'),
        ('s4', 'tunnel', 'buzz'), ('s4', 'hélico', 'buzz'), ('s4', 'toit', 'buzz'), ('s4', 'manette', 'click'), ('q', '+0', 'ding')]
