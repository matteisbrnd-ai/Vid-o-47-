# La bande de 47 — Jour 1 (interactive series: comments fill the gang's treasury, viewers vote A/B/C for the first gadget).
EMO = {'ff': 'excite', 's1': 'complice', 's2': 'menace', 's3': 'excite', 's4': 'complice', 'q': 'excite'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.25}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Le Baron veut TOUTE la ville… et nous, on a zéro euro. C'est toi qui vas nous équiper !", "Le Baron veut TOUTE la ville... et nous, on a zéro euro. C'est toi qui vas nous équiper !", 0.2),
  ('s1', "Voici la bande de 47. Rico, les muscles. Lola, la hackeuse. Et 47, le cerveau.", "Voici la bande de Quarante-sept. Rico, les muscles. Lola, la hackeuse. Et Quarante-sept, le cerveau.", 0.15),
  ('s2', "En face : le Baron. Il tient déjà la banque, le port et le casino.", "En face : le Baron. Il tient déjà la banque, le port et le casino.", 0.15),
  ('s3', "Notre caisse est vide. Chaque commentaire sous cette vidéo, c'est dix euros pour la bande.", "Notre caisse est vide. Chaque commentaire sous cette vidéo, c'est dix euros pour la bande.", 0.15),
  ('s4', "Et c'est toi qui choisis notre premier achat.", "Et c'est toi qui choisis notre premier achat.", 0.15),
  ('q', "A : pistolets à eau géants, 300 €. B : fumigènes, 200 €. C : grappin et drone, 500 €. Vote en commentaire !", "A : pistolets à eau géants, trois cents euros. B : fumigènes, deux cents euros. C : grappin et drone, cinq cents euros. Vote en commentaire !", 1.8),
]
CUES = [('ff', '+0', 'sting'), ('s1', 'Rico', 'bam'), ('s1', 'Lola', 'beep'), ('s1', 'cerveau', 'ding'), ('s2', 'Baron', 'sting'), ('s3', 'vide', 'buzz'), ('s3', 'euros', 'cash'), ('q', 'A', 'pop'), ('q', 'B', 'pop'), ('q', 'C', 'pop')]
