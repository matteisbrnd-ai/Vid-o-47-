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
  ('ff', "On a besoin de TOI… Grâce à toi, la bande de 47 va grandir et faire tomber le Baron !", "On a besoin de TOI... Grâce à toi, la bande de Quarante-sept va grandir et faire tomber le Baron !", 0.2),
  ('s1', "Voici la bande de 47. Rico, les muscles. Lola, la hackeuse. Et 47, le cerveau.", "Voici la bande de Quarante-sept. Rico, les muscles. Lola, la hackeuse. Et Quarante-sept, le cerveau.", 0.15),
  ('s2', "En face : le Baron. Il tient déjà la banque, le port et le casino.", "En face : le Baron. Il tient déjà la banque, le port et le casino.", 0.15),
  ('s3', "Comment tu nous aides ? Un like, c'est un euro dans la caisse. Un abonnement, cinq euros… et un membre de plus dans la bande.", "Comment tu nous aides ? Un like, c'est un euro dans la caisse. Un abonnement, cinq euros... et un membre de plus dans la bande.", 0.15),
  ('s4', "Et parmi ceux qui commentent, on en tire au sort pour rejoindre la bande !", "Et parmi ceux qui commentent, on en tire au sort pour rejoindre la bande !", 0.15),
  ('q', "Premier achat : A, pistolets à eau géants, 40 €. B, fumigènes, 25 €. C, grappin et drone, 60 €. Vote en commentaire !", "Premier achat : A, pistolets à eau géants, quarante euros. B, fumigènes, vingt-cinq euros. C, grappin et drone, soixante euros. Vote en commentaire !", 1.8),
]
CUES = [('ff', '+0', 'sting'), ('s1', 'Rico', 'bam'), ('s1', 'Lola', 'beep'), ('s1', 'cerveau', 'ding'), ('s2', 'Baron', 'sting'), ('s3', 'like', 'cash'), ('s3', 'abonnement', 'cash'), ('s4', 'sort', 'dingdong'), ('q', 'A', 'pop'), ('q', 'B', 'pop'), ('q', 'C', 'pop')]
