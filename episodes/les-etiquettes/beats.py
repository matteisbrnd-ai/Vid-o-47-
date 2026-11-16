# Format allemand (solution expliquée). Classic « 3 boîtes mal étiquetées » re-skinned: 3 sacks OR / ARGENT / MÉLANGE, all labels wrong, one coin from one sack.
# Answer: draw from the « MÉLANGE » sack (it can't be mixed, so it's all gold or all silver) → deduce the rest.
EMO = {'ff': 'excite', 's1': 'mystere', 's2': 'neutre', 's3': 'menace', 's4': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'complice', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Les trois étiquettes sont TOUTES fausses. Une seule pièce pour trouver le sac d'or : tu pioches où ?", "Les trois étiquettes sont TOUTES fausses. Une seule pièce pour trouver le sac d'or : tu pioches où ?", 0.2),
  ('s1', "Pendant que le Baron joue à GTA 6, 47 se glisse dans son salon. Sur la table : trois sacs.", "Pendant que le Baron joue à Gé-Té-A six, Quarante-sept se glisse dans son salon. Sur la table : trois sacs.", 0.15),
  ('s2', "Un sac d'or, un sac d'argent, et un sac mélangé : moitié or, moitié argent.", "Un sac d'or, un sac d'argent, et un sac mélangé : moitié or, moitié argent.", 0.15),
  ('s3', "Mais le Baron est malin : il a mis TOUTES les étiquettes sur le mauvais sac.", "Mais le Baron est malin : il a mis TOUTES les étiquettes sur le mauvais sac.", 0.2),
  ('s4', "47 ne peut emporter qu'un sac : celui d'or. Il a le temps de tirer UNE pièce, d'un seul sac, sans regarder.", "Quarante-sept ne peut emporter qu'un sac : celui d'or. Il a le temps de tirer UNE pièce, d'un seul sac, sans regarder.", 0.3),
  ('q', "Dans quel sac il pioche ?", "Dans quel sac il pioche ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : dans le sac « mélange » ! Son étiquette est fausse… donc il est tout or, ou tout argent.", "La solution : dans le sac mélange ! Son étiquette est fausse... donc il est tout or, ou tout argent.", 0.15),
  ('sol2', "Il tire de l'or ? C'est le sac d'or, il l'emporte !", "Il tire de l'or ? C'est le sac d'or, il l'emporte !", 0.15),
  ('sol3', "Il tire de l'argent ? Alors le sac « or » est le mélangé… et l'or est sous l'étiquette « argent » !", "Il tire de l'argent ? Alors le sac or est le mélangé... et l'or est sous l'étiquette argent !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'cash'), ('s1', 'joue', 'beep'), ('s1', 'sacs', 'rattle'), ('s2', 'or', 'clink'), ('s2', 'argent', 'clink'), ('s2', 'mélangé', 'rattle'),
        ('s3', 'TOUTES|toutes', 'stamp'), ('s4', 'UNE|une', 'pop'), ('s4', 'regarder', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol1', 'fausse', 'buzz'), ('sol2', 'or', 'cash'), ('sol3', 'argent', 'clink'), ('sol3', 'étiquette', 'cash'), ('end', '+0', 'ding')]
