# « Les histoires de 47 » #6 v2 — « 19 novembre, congé refusé » (veille de GTA 6). Demande du créateur : chaque phrase = une nouvelle info / un nouveau risque d'être grillé, rien ne trahit la fin.
# Fin inattendue : le patron convoque 47 le soir… pour qu'il l'aide à passer une mission sur laquelle il bloque depuis midi.
EMO = {'ff': 'excite', 'ff2': 'complice', 's1': 'tension', 's2': 'tension', 's3': 'complice', 's4': 'tension', 's5': 'choc', 'mid': 'question', 's6': 'complice', 's7': 'tension', 's8': 'choc', 's9': 'complice', 'end': 'question'}
SFX = 0.36
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.2, 'ff2': 1.15}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Il a joué à GTA 6… en pleine réunion. Devant son patron.", "Il a joué à Gé-Té-A six... en pleine réunion. Devant son patron !", 0.05),
  ('ff2', "Retour en arrière. Ce matin : congé refusé. Alors il a ramené sa console… au boulot.", "Retour en arrière. Ce matin : congé refusé. Alors il a ramené sa console... au boulot.", 0.05),
  ('s1', "Plan A : la console sous le bureau, la manette dans le tiroir. Il lance le jeu… et la porte s'ouvre.", "Plan A : la console sous le bureau, la manette dans le tiroir. Il lance le jeu... et la porte s'ouvre.", 0.1),
  ('s2', "Le patron. 47 a deux secondes : il bascule l'écran sur un tableau Excel.", "Le patron. Quarante-sept a deux secondes : il bascule l'écran sur un tableau Excel.", 0.1),
  ('s3', "« C'est quoi ce bruit de moteur ? » « La photocopieuse, patron. Elle est vieille. »", "C'est quoi ce bruit de moteur ? La photocopieuse, patron. Elle est vieille.", 0.15),
  ('s4', "Plan B : jouer pendant la réunion, son coupé. Sauf que la console est restée branchée… sur le grand écran.", "Plan B : jouer pendant la réunion, son coupé. Sauf que la console est restée branchée... sur le grand écran.", 0.1),
  ('s5', "Le patron allume le projecteur. Et toute la réunion voit Vice City.", "Le patron allume le projecteur. Et toute la réunion voit Vice City.", 0.3),
  ('mid', "Là, il est grillé. Comment il s'en sort ? Écris-le en commentaire !", "Là, il est grillé. Comment il s'en sort ? Écris-le en commentaire !", 0.4),
  ('s6', "47 se lève : « Je vous présente notre nouveau client : l'office du tourisme de Vice City. » Les collègues applaudissent.", "Quarante-sept se lève : Je vous présente notre nouveau client : l'office du tourisme de Vice City. Les collègues applaudissent.", 0.2),
  ('s7', "Le soir, un mail du patron : « Dans mon bureau. Tout de suite. » 47 est sûr d'être viré.", "Le soir, un mail du patron : Dans mon bureau. Tout de suite. Quarante-sept est sûr d'être viré.", 0.2),
  ('s8', "Le patron tourne son écran : GTA 6. « Je bloque sur cette mission depuis midi. Toi qui joues en cachette… aide-moi. »", "Le patron tourne son écran : Gé-Té-A six. Je bloque sur cette mission depuis midi. Toi qui joues en cachette... aide-moi.", 0.2),
  ('s9', "47 a souri : « D'accord. Mais demain, je suis en congé. »", "Quarante-sept a souri : D'accord. Mais demain, je suis en congé.", 0.3),
  ('end', "Toi, t'aurais fait quoi pour jouer ? Tague le collègue qui ferait ça !", "Toi, t'aurais fait quoi pour jouer ? Tague le collègue qui ferait ça !", 1.2),
]
CUES = [('ff', '+0', 'bam'), ('ff', 'patron', 'sting'), ('ff2', 'arrière', 'whoosh'), ('ff2', 'refusé', 'stamp'), ('ff2', 'console', 'pop'), ('s1', 'lance', 'beep'), ('s1', 'ouvre', 'sting'), ('s2', 'patron', 'bam'), ('s2', 'Excel', 'click'), ('s3', 'moteur', 'pop'), ('s3', 'vieille', 'pop'),
        ('s4', 'branchée', 'sting'), ('s5', 'projecteur', 'click'), ('s5', 'City', 'bam'), ('mid', 'commentaire', 'ding'), ('s6', 'client', 'pop'), ('s6', 'applaudissent', 'cash'), ('s7', 'mail', 'ding'), ('s7', 'viré', 'sting'),
        ('s8', 'écran', 'whoosh'), ('s8', 'aide-moi', 'ding'), ('s9', 'congé', 'cash'), ('end', '+0', 'ding')]
