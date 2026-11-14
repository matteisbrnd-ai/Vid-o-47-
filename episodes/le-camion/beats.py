# Format « avec solution » (≤ 62 s), shot plan modelled on Wesh l'énigme's « camion sous le pont » (117K): stuck truck → queue at the shop (minuit) → roof close-up →
# « reculer ? impossible » → 47 arrives, no tools → « il lui a dit quoi ? » → tyre diagram → truck passes → games on the shelves at midnight. Own script, own set.
EMO = {'ff': 'excite', 's1': 'complice', 's2': 'tension', 's3': 'tension', 's4': 'complice', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Ce camion est coincé sous un pont… et 47 le décoince SANS AUCUN outil !", "Ce camion est coincé sous un pont... et Quarante-sept le décoince SANS AUCUN outil !", 0.2),
  ('s1', "Ce soir à minuit, c'est la sortie de GTA 6. Et ce camion livre tous les jeux du magasin.", "Ce soir à minuit, c'est la sortie de Gé-Té-A six. Et ce camion livre tous les jeux du magasin.", 0.15),
  ('s2', "Problème : le pont fait 3 mètres 50. Le camion, 3 mètres 52. Il est bloqué.", "Problème : le pont fait trois mètres cinquante. Le camion, trois mètres cinquante-deux. Il est bloqué.", 0.15),
  ('s3', "Reculer ? Impossible, il y a des voitures derrière. Et minuit approche.", "Reculer ? Impossible, il y a des voitures derrière. Et minuit approche.", 0.2),
  ('s4', "Alors 47 arrive, les mains vides, et dit une seule phrase au chauffeur.", "Alors Quarante-sept arrive, les mains vides, et dit une seule phrase au chauffeur.", 0.3),
  ('q', "Il lui a dit quoi ?", "Il lui a dit quoi ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : « Dégonfle un peu tes pneus ! »", "La solution : « Dégonfle un peu tes pneus ! »", 0.15),
  ('sol2', "Les pneus s'écrasent, le camion descend de quelques centimètres… et il passe !", "Les pneus s'écrasent, le camion descend de quelques centimètres... et il passe !", 0.15),
  ('sol3', "Il regonfle à la station d'à côté. Et à minuit pile, les jeux sont en rayon !", "Il regonfle à la station d'à côté. Et à minuit pile, les jeux sont en rayon !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'stamp'), ('s1', 'minuit', 'ticktock'), ('s1', 'livre', 'engine'), ('s2', '50|cinquante', 'pop'), ('s2', 'camion', 'pop'), ('s2', 'bloqué', 'buzz'),
        ('s3', 'Impossible', 'buzz'), ('s3', 'minuit', 'ticktock'), ('s4', 'vides', 'whoosh'), ('s4', 'phrase', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'Dégonfle', 'wind'), ('sol2', 'passe', 'engine'), ('sol3', 'minuit', 'dingdong'), ('sol3', 'rayon', 'cash'), ('end', '+0', 'ding')]
