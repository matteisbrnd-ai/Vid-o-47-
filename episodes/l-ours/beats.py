# Format allemand (solution expliquée). Classic « la maison aux 4 façades au sud / de quelle couleur est l'ours ? » re-skinned with 47 hiding from the Baron.
# Answer: blanc — 4 walls all facing south only exists at the North Pole → polar bear. The set never shows snow before the solution (neutral pale sky).
EMO = {'ff': 'excite', 's1': 'mystere', 's2': 'neutre', 's3': 'tension', 's4': 'complice', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'amuse', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Les quatre murs de sa cabane regardent TOUS vers le sud… et un ours gratte à la porte !", "Les quatre murs de sa cabane regardent TOUS vers le sud... et un ours gratte à la porte !", 0.2),
  ('s1', "Pour échapper au Baron, 47 se cache dans une cabane carrée, construite de ses mains.", "Pour échapper au Baron, Quarante-sept se cache dans une cabane carrée, construite de ses mains.", 0.15),
  ('s2', "Quatre murs, une fenêtre sur chaque mur. Et les QUATRE fenêtres donnent plein sud.", "Quatre murs, une fenêtre sur chaque mur. Et les QUATRE fenêtres donnent plein sud.", 0.2),
  ('s3', "Il ouvre son Tasty Crousty… et un ours, attiré par l'odeur, se met à tourner autour de la cabane.", "Il ouvre son Tasty Crousty... et un ours, attiré par l'odeur, se met à tourner autour de la cabane.", 0.2),
  ('s4', "47 ne l'a même pas vu. Mais il sait déjà de quelle couleur il est.", "Quarante-sept ne l'a même pas vu. Mais il sait déjà de quelle couleur il est.", 0.3),
  ('q', "De quelle couleur est l'ours ?", "De quelle couleur est l'ours ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : blanc ! Quatre murs qui regardent tous au sud, ça n'existe qu'à un seul endroit.", "La solution : blanc ! Quatre murs qui regardent tous au sud, ça n'existe qu'à un seul endroit.", 0.15),
  ('sol2', "Au pôle Nord ! Là-bas, peu importe où tu regardes… c'est toujours le sud.", "Au pôle Nord ! Là-bas, peu importe où tu regardes... c'est toujours le sud.", 0.15),
  ('sol3', "Et au pôle Nord, un ours… c'est un ours polaire. Adieu le Tasty Crousty !", "Et au pôle Nord, un ours... c'est un ours polaire. Adieu le Tasty Crousty !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'wind'), ('ff', 'gratte', 'rattle'), ('s1', 'cabane', 'wind'), ('s2', 'fenêtre', 'pop'), ('s2', 'sud', 'stamp'), ('s3', 'ouvre', 'paper'), ('s3', 'ours', 'rattle'),
        ('s3', 'tourner', 'steps'), ('s4', 'sait', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('sol2', 'Nord', 'wind'),
        ('sol3', 'polaire', 'whoosh'), ('sol3', 'Adieu', 'laugh'), ('end', '+0', 'ding')]
