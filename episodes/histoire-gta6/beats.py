# « Les histoires de 47 » #5 — « Les 500 jeux » (veille de la sortie de GTA 6, prévue le 19/11/2026 — vérifié le 18/11). Histoire originale, pas de logo/visuel officiel : juste des boîtes « GTA 6 » en texte.
# Indice devinable au milieu : le vendeur dit avoir joué à GTA 6 toute la nuit… alors que le jeu n'était pas encore sorti.
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'complice', 's3': 'neutre', 's4': 'neutre', 's5': 'complice', 'mid': 'question', 's6': 'excite', 's7': 'choc', 's8': 'complice', 'end': 'question'}
SFX = 0.36
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "Le matin de la sortie de GTA 6, cinq cents jeux avaient disparu du magasin. Et tout le monde a accusé… 47.", "Le matin de la sortie de Gé-Té-A six, cinq cents jeux avaient disparu du magasin. Et tout le monde a accusé... Quarante-sept.", 0.15),
  ('s1', "Normal : c'est le voleur le plus connu de la ville. Et il dormait devant le magasin depuis trois jours.", "Normal : c'est le voleur le plus connu de la ville. Et il dormait devant le magasin depuis trois jours.", 0.15),
  ('s2', "Sauf que 47 attendait ce jeu depuis treize ans. Il l'avait précommandé… et payé.", "Sauf que Quarante-sept attendait ce jeu depuis treize ans. Il l'avait précommandé... et payé.", 0.15),
  ('s3', "L'inspecteur a interrogé trois personnes. Le vigile : « J'ai fait ma ronde toute la nuit. Rien vu. »", "L'inspecteur a interrogé trois personnes. Le vigile : J'ai fait ma ronde toute la nuit. Rien vu.", 0.15),
  ('s4', "Le livreur : « J'ai livré les cartons hier soir, à 22 heures. Ils étaient fermés. »", "Le livreur : J'ai livré les cartons hier soir, à vingt-deux heures. Ils étaient fermés.", 0.15),
  ('s5', "Et Kévin, le vendeur : « Moi ? J'étais chez moi. J'ai joué à GTA 6 toute la nuit ! »", "Et Kévine, le vendeur : Moi ? J'étais chez moi. J'ai joué à Gé-Té-A six toute la nuit !", 0.2),
  ('mid', "Stop ! L'un des trois vient de se trahir. Lequel ? Écris-le en commentaire !", "Stop ! L'un des trois vient de se trahir. Lequel ? Écris-le en commentaire !", 0.4),
  ('s6', "Kévin ! GTA 6 sortait ce matin. Personne ne pouvait y jouer cette nuit… sauf quelqu'un qui avait déjà les jeux.", "Kévine ! Gé-Té-A six sortait ce matin. Personne ne pouvait y jouer cette nuit... sauf quelqu'un qui avait déjà les jeux.", 0.2),
  ('s7', "Dans son coffre : 499 boîtes. La cinq-centième était dans sa console.", "Dans son coffre : quatre cent quatre-vingt-dix-neuf boîtes. La cinq-centième était dans sa console.", 0.2),
  ('s8', "Le magasin a voulu offrir le jeu à 47. Il a refusé : « Je l'ai payé. Pour une fois, j'ai un truc que j'ai pas volé. »", "Le magasin a voulu offrir le jeu à Quarante-sept. Il a refusé : Je l'ai payé. Pour une fois, j'ai un truc que j'ai pas volé.", 0.3),
  ('end', "Toi, tu l'avais grillé ? Envoie-la à quelqu'un qui attend GTA 6 depuis treize ans.", "Toi, tu l'avais grillé ? Envoie-la à quelqu'un qui attend Gé-Té-A six depuis treize ans.", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'disparu', 'bam'), ('ff', 'accusé', 'sting'), ('s1', 'voleur', 'pop'), ('s2', 'treize', 'ding'), ('s2', 'payé', 'cash'), ('s3', 'vigile', 'pop'), ('s3', 'Rien', 'pop'), ('s4', 'livreur', 'pop'),
        ('s5', 'nuit', 'pop'), ('mid', 'trahir', 'sting'), ('mid', 'commentaire', 'ding'), ('s6', 'Kévine', 'dingdong'), ('s7', 'coffre', 'bam'), ('s7', 'console', 'ding'), ('s8', 'refusé', 'pop'), ('end', '+0', 'ding')]
