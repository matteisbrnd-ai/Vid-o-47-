# La bande de 47 — Jour 3 (« ma ville jour N » mechanics): members counter vs the Baron, real comments on screen, everyone who commented joins,
# yesterday's vote result (fumigènes 58 %) bought, cliffhanger port taken, vote on the route for tomorrow.
EMO = {'ff': 'choc', 's1': 'excite', 's2': 'complice', 's3': 'amuse', 's4': 'excite', 's5': 'tension', 'q': 'excite'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.25}
TEMPO = 1.15
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Hier, vous avez choisi les fumigènes… et cette nuit, le Baron a volé le PORT !", "Hier, vous avez choisi les fumigènes... et cette nuit, le Baron a volé le PORT !", 0.15),
  ('s1', "Grâce à vous, 245 € dans la caisse. Ryzen fabrique les fumigènes !", "Grâce à vous, deux cent quarante-cinq euros dans la caisse. Ryzen fabrique les fumigènes !", 0.1),
  ('s2', "BoBtheGoD veut être notre espion : accordé !", "Bob the God veut être notre espion : accordé !", 0.1),
  ('s3', "Sa.lah veut être le combattant : bienvenue !", "Salah veut être le combattant : bienvenue !", 0.1),
  ('s4', "Et EVKOS, archer d'élite : tu es dans la bande !", "Et Évkos, archer d'élite : tu es dans la bande !", 0.15),
  ('s5', "On est 76. Le Baron a 100 hommes. Abonne-toi pour rejoindre la bande… et on le dépasse !", "On est soixante-seize. Le Baron a cent hommes. Abonne-toi pour rejoindre la bande... et on le dépasse !", 0.15),
  ('q', "Demain, on reprend le port. Par où on passe ? A, par la mer. B, par les égouts. C, par l'entrepôt. Écris ta lettre… et ton rôle !", "Demain, on reprend le port. Par où on passe ? A, par la mer. B, par les égouts. C, par l'entrepôt. Écris ta lettre... et ton rôle !", 1.6),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'PORT', 'bam'), ('s1', 'caisse', 'cash'), ('s1', 'fabrique', 'rattle'), ('s2', 'accordé', 'dingdong'), ('s3', 'bienvenue', 'dingdong'), ('s4', 'bande', 'dingdong'),
        ('s5', 'Baron', 'sting'), ('s5', 'Abonne', 'pop'), ('q', 'mer', 'pop'), ('q', 'égouts', 'pop'), ('q', 'entrepôt', 'pop')]
