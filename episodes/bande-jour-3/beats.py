# La bande de 47 — Jour 3 (« ma ville jour N » mechanics): members counter vs the Baron, real comments on screen, everyone who commented joins,
# yesterday's vote result (fumigènes 58 %) bought, cliffhanger port taken, vote on the route for tomorrow.
EMO = {'ff': 'choc', 's1': 'excite', 's2': 'complice', 's3': 'amuse', 's4': 'excite', 's5': 'tension', 's6': 'excite', 'q': 'excite', 'cta': 'complice'}
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
  ('s1', "Grâce à vous, 245 € dans la caisse. Ryzen fabrique les fumigènes : il nous reste 85 €.", "Grâce à vous, deux cent quarante-cinq euros dans la caisse. Ryzen fabrique les fumigènes : il nous reste quatre-vingt-cinq euros.", 0.1),
  ('s2', "BoBtheGoD veut être notre espion : accordé !", "Bob the God veut être notre espion : accordé !", 0.1),
  ('s3', "Salah veut être le combattant : bienvenue !", "Salah veut être le combattant : bienvenue !", 0.1),
  ('s4', "Et EVKOS, archer d'élite : tu es dans la bande !", "Et Évkos, archer d'élite : tu es dans la bande !", 0.15),
  ('s5', "On est 76. Le Baron, lui, a 1000 hommes : pour l'attaque finale, au jour 10, il faut être 1000 !", "On est soixante-seize. Le Baron, lui, a mille hommes : pour l'attaque finale, au jour dix, il faut être mille !", 0.1),
  ('s6', "Mais demain, c'est juste le port : 120 gardes. Avec les fumigènes, on compte pour 126 !", "Mais demain, c'est juste le port : cent vingt gardes. Avec les fumigènes, on compte pour cent vingt-six !", 0.1),
  ('q', "Par où on passe ? A, par la mer. B, par les égouts. C, par l'entrepôt. Écris ta lettre… et ton rôle !", "Par où on passe ? A, par la mer. B, par les égouts. C, par l'entrepôt. Écris ta lettre... et ton rôle !", 0.15),
  ('cta', "Un like, c'est un euro pour la caisse. Un abonné, un soldat de plus. Et enregistre pour suivre la bande !", "Un like, c'est un euro pour la caisse. Un abonné, un soldat de plus. Et enregistre pour suivre la bande !", 1.4),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'PORT', 'bam'), ('s1', 'caisse', 'cash'), ('s1', 'fabrique', 'rattle'), ('s2', 'accordé', 'dingdong'), ('s3', 'bienvenue', 'dingdong'), ('s4', 'bande', 'dingdong'),
        ('s5', 'Baron', 'sting'), ('s6', '126|vingt-six', 'ding'), ('cta', 'like', 'cash'), ('cta', 'soldat', 'pop'), ('q', 'mer', 'pop'), ('q', 'égouts', 'pop'), ('q', 'entrepôt', 'pop')]
