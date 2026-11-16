# Format allemand (solution expliquée). Classic « chaussettes dans le noir » (pigeonhole) re-skinned as a casino game: 10 red + 10 blue chips in a bag,
# one blind handful, win if 2 chips share a colour, each chip costs 100 €. Answer: 3 (two colours → the 3rd always matches one of the first two).
EMO = {'ff': 'excite', 's1': 'mystere', 's2': 'neutre', 's3': 'neutre', 's4': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Une seule poignée, sans regarder… et chaque jeton lui coûte CENT euros !", "Une seule poignée, sans regarder... et chaque jeton lui coûte CENT euros !", 0.2),
  ('s1', "Au casino du Baron, 47 tente un jeu façon Squid Game : simple… mais piégeux.", "Au casino du Baron, Quarante-sept tente un jeu façon Squide Guéme : simple... mais piégeux.", 0.15),
  ('s2', "Dans ce sac noir : dix jetons rouges et dix jetons bleus, tous mélangés.", "Dans ce sac noir : dix jetons rouges et dix jetons bleus, tous mélangés.", 0.15),
  ('s3', "Il plonge la main UNE fois, sans regarder. S'il sort deux jetons de la même couleur, il gagne.", "Il plonge la main UNE fois, sans regarder. S'il sort deux jetons de la même couleur, il gagne.", 0.2),
  ('s4', "Mais chaque jeton sorti lui coûte cent euros. Il veut en prendre le moins possible… et être SÛR de gagner.", "Mais chaque jeton sorti lui coûte cent euros. Il veut en prendre le moins possible... et être SÛR de gagner.", 0.3),
  ('q', "Combien de jetons il prend ?", "Combien de jetons il prend ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : trois jetons, pas un de plus !", "La solution : trois jetons, pas un de plus !", 0.15),
  ('sol2', "Il n'y a que deux couleurs. Avec deux jetons, il peut tomber sur un rouge et un bleu.", "Il n'y a que deux couleurs. Avec deux jetons, il peut tomber sur un rouge et un bleu.", 0.15),
  ('sol3', "Mais le troisième est forcément rouge ou bleu… il fait toujours une paire. Gagné, et ça ne lui a coûté que trois cents euros !", "Mais le troisième est forcément rouge ou bleu... il fait toujours une paire. Gagné, et ça ne lui a coûté que trois cents euros !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'rattle'), ('ff', 'euros', 'cash'), ('s1', 'casino', 'cash'), ('s1', 'piégeux', 'sting'), ('s2', 'rouges', 'clink'), ('s2', 'bleus', 'clink'), ('s2', 'mélangés', 'rattle'),
        ('s3', 'main', 'rattle'), ('s3', 'gagne', 'ding'), ('s4', 'euros', 'cash'), ('s4', 'SÛR|sûr', 'stamp'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol2', 'rouge', 'pop'), ('sol2', 'bleu', 'pop'), ('sol3', 'troisième', 'pop'), ('sol3', 'Gagné', 'cash'), ('end', '+0', 'ding')]
