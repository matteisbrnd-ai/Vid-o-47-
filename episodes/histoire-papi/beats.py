# « Les histoires de 47 » #3 — « Le ticket de Papi Robert ». Histoire originale. Leçons Mamie v3 (42 % de visionnage, 0 com./0 partage) :
# question de commentaire AU MILIEU (avant la révélation, devinable = public énigmes), appel au partage ciblé, viser ~70 s. 47 a un vrai rôle (il garde le ticket… et ne le vole pas).
# Numéros = date de mariage 6 avril 1949 → 6 · 4 · 19 · 49 (tous ≤ 49, crédible pour un loto).
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'complice', 's3': 'complice', 's4': 'complice', 's5': 'complice', 's6': 'complice', 'mid': 'question', 's7': 'complice', 's8': 'choc', 's9': 'complice', 'end': 'question'}
SFX = 0.36
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "Quand Papi Robert est mort, il avait un ticket de loto gagnant : un million d'euros.", "Quand Papi Robert est mort, il avait un ticket de loto gagnant : un million d'euros.", 0.15),
  ('s1', "Mais ce ticket… il l'avait confié à un voleur.", "Mais ce ticket... il l'avait confié à un voleur.", 0.2),
  ('s2', "47. Son adversaire aux cartes, chaque dimanche. Avec une consigne : « Donne-le à celui qui sait ce que veulent dire mes numéros. »", "Quarante-sept. Son adversaire aux cartes, chaque dimanche. Avec une consigne : Donne-le à celui qui sait ce que veulent dire mes numéros.", 0.15),
  ('s3', "Depuis quarante ans, Papi jouait les mêmes : 6, 4, 19, 49.", "Depuis quarante ans, Papi jouait les mêmes : six, quatre, dix-neuf, quarante-neuf.", 0.2),
  ('s4', "Dylan, qui ne venait qu'à Noël, a ri : « Facile ! C'est le code de sa carte bleue ! » Raté.", "Dylane, qui ne venait qu'à Noël, a ri : Facile ! C'est le code de sa carte bleue ! Raté.", 0.15),
  ('s5', "Chloé, qui oubliait toujours de l'appeler : « C'est mon anniversaire ! » Raté : elle est née en mars.", "Chloé, qui oubliait toujours de l'appeler : C'est mon anniversaire ! Raté : elle est née en mars.", 0.15),
  ('s6', "Léo, le petit dernier, ne disait rien. Dylan s'est moqué : « Lui ? Il sait même pas compter ! »", "Léo, le petit dernier, ne disait rien. Dylane s'est moqué : Lui ? Il sait même pas compter !", 0.2),
  ('mid', "Avant la réponse : toi, 6, 4, 19, 49… c'est quoi ? Écris-le en commentaire !", "Avant la réponse : toi, six, quatre, dix-neuf, quarante-neuf... c'est quoi ? Écris-le en commentaire !", 0.4),
  ('s7', "Léo a dit : « Le 6 avril 1949. Le jour où il a épousé Mamie. Chaque 6 avril, on allait lui porter des roses. »", "Léo a dit : Le six avril mille neuf cent quarante-neuf. Le jour où il a épousé Mamie. Chaque six avril, on allait lui porter des roses.", 0.2),
  ('s8', "47 a sorti le ticket de sa poche… et l'a donné à Léo. Un million dans la poche d'un voleur… et il n'a rien gardé.", "Quarante-sept a sorti le ticket de sa poche... et l'a donné à Léo. Un million dans la poche d'un voleur... et il n'a rien gardé.", 0.2),
  ('s9', "Au dos, Papi avait écrit : « Je ne jouais pas pour gagner. Je jouais pour ne jamais oublier. »", "Au dos, Papi avait écrit : Je ne jouais pas pour gagner. Je jouais pour ne jamais oublier.", 0.3),
  ('end', "Et toi, tu connais la date de mariage de tes grands-parents ? Envoie-la à quelqu'un qui ne la connaît pas.", "Et toi, tu connais la date de mariage de tes grands-parents ? Envoie-la à quelqu'un qui ne la connaît pas.", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'gagnant', 'cash'), ('ff', 'million', 'bam'), ('s1', 'voleur', 'sting'), ('s2', 'cartes', 'pop'), ('s2', 'numéros', 'paper'), ('s3', 'six', 'pop'), ('s3', 'quarante-neuf', 'pop'),
        ('s4', 'Raté', 'stamp'), ('s5', 'Raté', 'stamp'), ('s6', 'compter', 'pop'), ('mid', 'commentaire', 'ding'), ('s7', 'avril', 'sting'), ('s7', 'roses', 'ding'), ('s8', 'poche', 'whoosh'), ('s8', 'gardé', 'ding'), ('s9', 'oublier', 'ding'), ('end', '+0', 'ding')]
