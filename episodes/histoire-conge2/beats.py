# « Les histoires de 47 » #6 v2 — « Congé refusé » (veille de GTA 6). Demande du créateur : chaque phrase = une nouvelle info / un nouveau risque d'être grillé ; rien sur le patron avant la fin.
# Fin inattendue : convoqué, sûr d'être viré… le patron bloque sur une mission depuis midi.
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'complice', 's3': 'tension', 's4': 'choc', 'mid': 'question', 's5': 'complice', 's6': 'tension', 's7': 'complice', 'end': 'question'}
SFX = 0.36
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "19 novembre. Sortie de GTA 6. Congé refusé. Alors 47 a ramené sa console… au boulot.", "Dix-neuf novembre. Sortie de Gé-Té-A six. Congé refusé. Alors Quarante-sept a ramené sa console... au boulot.", 0.1),
  ('s1', "Plan A : la console sous le bureau, la manette dans le tiroir. Il lance le jeu… et la porte s'ouvre. Le patron.", "Plan A : la console sous le bureau, la manette dans le tiroir. Il lance le jeu... et la porte s'ouvre. Le patron.", 0.1),
  ('s2', "Deux secondes. Il bascule sur un tableau Excel. « C'est quoi ce bruit de moteur ? » « La photocopieuse, patron. Elle est vieille. »", "Deux secondes. Il bascule sur un tableau Excel. C'est quoi ce bruit de moteur ? La photocopieuse, patron. Elle est vieille.", 0.15),
  ('s3', "Plan B : la réunion. Manette sous la table, son coupé. Sauf que la console est branchée… sur le grand écran.", "Plan B : la réunion. Manette sous la table, son coupé. Sauf que la console est branchée... sur le grand écran.", 0.1),
  ('s4', "Le patron allume le projecteur. Toute la réunion voit Vice City.", "Le patron allume le projecteur. Toute la réunion voit Vice City.", 0.3),
  ('mid', "Là, il est grillé. Comment il s'en sort ? Écris-le en commentaire !", "Là, il est grillé. Comment il s'en sort ? Écris-le en commentaire !", 0.4),
  ('s5', "47 se lève : « Je vous présente notre nouveau client : l'office du tourisme de Vice City. » Les collègues applaudissent.", "Quarante-sept se lève : Je vous présente notre nouveau client : l'office du tourisme de Vice City. Les collègues applaudissent.", 0.2),
  ('s6', "Le soir, un mail du patron : « Dans mon bureau. Tout de suite. » 47 est sûr d'être viré.", "Le soir, un mail du patron : Dans mon bureau. Tout de suite. Quarante-sept est sûr d'être viré.", 0.3),
  ('s7', "Le patron tourne son écran. GTA 6. Mission ratée… quatorze fois. « Je bloque depuis midi. Aide-moi… et demain, t'es en congé. »", "Le patron tourne son écran. Gé-Té-A six. Mission ratée... quatorze fois. Je bloque depuis midi. Aide-moi... et demain, t'es en congé.", 0.3),
  ('end', "Toi, t'aurais fait quoi pour jouer ? Tague le collègue qui ferait ça !", "Toi, t'aurais fait quoi pour jouer ? Tague le collègue qui ferait ça !", 1.2),
]
CUES = [('ff', '+0', 'pop'), ('ff', 'refusé', 'stamp'), ('ff', 'console', 'ding'), ('s1', 'lance', 'pop'), ('s1', 'porte', 'bam'), ('s2', 'Excel', 'whoosh'), ('s2', 'moteur', 'sting'), ('s2', 'photocopieuse', 'laugh'),
        ('s3', 'réunion', 'pop'), ('s3', 'écran', 'sting'), ('s4', 'projecteur', 'click'), ('s4', 'Vice', 'bam'), ('mid', 'commentaire', 'ding'), ('s5', 'applaudissent', 'cash'), ('s6', 'mail', 'ding'), ('s6', 'viré', 'sting'),
        ('s7', 'écran', 'whoosh'), ('s7', 'quatorze', 'bam'), ('s7', 'congé', 'dingdong'), ('end', '+0', 'ding')]
