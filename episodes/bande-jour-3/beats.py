# La bande de 47 — Jour 3 (« ma ville jour N » mechanics): members counter vs the Baron, real comments on screen, everyone who commented joins,
# yesterday's vote result (fumigènes 58 %) bought, cliffhanger port taken, vote on the route for tomorrow.
EMO = {'ff': 'excite', 's0': 'complice', 's1': 'excite', 's2': 'complice', 's3': 'amuse', 's4': 'excite', 's6': 'tension', 'q': 'excite', 'cta': 'menace'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.25}
TEMPO = 1.15
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Le Baron a volé le port de la ville… et c'est TOI qui décides comment on le reprend !", "Le Baron a volé le port de la ville... et c'est TOI qui décides comment on le reprend !", 0.15),
  ('s0', "On est une bande : chaque abonné est un soldat. Il en faut 1000 pour battre le Baron.", "On est une bande : chaque abonné est un soldat. Il en faut mille pour battre le Baron.", 0.1),
  ('s1', "Hier, 58 % pour les fumigènes : Ryzen les a fabriqués ! Il reste 85 € dans la caisse.", "Hier, cinquante-huit pour cent pour les fumigènes : Ryzen les a fabriqués ! Il reste quatre-vingt-cinq euros dans la caisse.", 0.1),
  ('s2', "BoBtheGoD veut être notre espion : accordé !", "Bob the God veut être notre espion : accordé !", 0.1),
  ('s3', "Salah veut être le combattant : bienvenue !", "Salah veut être le combattant : bienvenue !", 0.1),
  ('s4', "Et EVKOS, archer d'élite : tu es dans la bande !", "Et Évkos, archer d'élite : tu es dans la bande !", 0.15),
  ('s6', "Au port, le Baron n'a laissé que 120 gardes. Avec les fumigènes… on a nos chances !", "Au port, le Baron n'a laissé que cent vingt gardes. Avec les fumigènes... on a nos chances !", 0.1),
  ('q', "Par où on passe ? A, par la mer. B, par les égouts. C, par l'entrepôt. Écris ta lettre… et ton rôle !", "Par où on passe ? A, par la mer. B, par les égouts. C, par l'entrepôt. Écris ta lettre... et ton rôle !", 0.15),
  ('cta', "Tague un pote : vous entrez dans la bande en duo. Et attention… le Baron prépare quelque chose.", "Tague un pote : vous entrez dans la bande en duo. Et attention... le Baron prépare quelque chose.", 1.4),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'port', 'bam'), ('s0', 'soldat', 'pop'), ('s1', 'fumigènes', 'whoosh'), ('s1', 'caisse', 'cash'), ('s2', 'accordé', 'dingdong'), ('s3', 'bienvenue', 'dingdong'), ('s4', 'bande', 'dingdong'), ('s6', 'fumigènes', 'whoosh'), ('q', 'mer', 'pop'), ('q', 'égouts', 'pop'), ('q', 'entrepôt', 'pop'), ('cta', 'Tague', 'pop'), ('cta', 'chose', 'sting')]
