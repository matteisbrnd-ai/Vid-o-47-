# La revente — format allemand (solution expliquée). Classic « buy 70, sell 80, buy 90, sell 100 → profit ? » re-skinned the week after GTA 6's release.
# Answer: 20 € (two separate deals of +10), pas 10 ni 0.
EMO = {'ff': 'excite', 's1': 'complice', 's2': 'menace', 's3': 'neutre', 's4': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'amuse', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Acheté 70 €, revendu 80. Racheté 90, revendu 100. Il a gagné combien ?", "Acheté soixante-dix euros, revendu quatre-vingts. Racheté quatre-vingt-dix, revendu cent. Il a gagné combien ?", 0.2),
  ('s1', "GTA 6 vient de sortir. 47 ouvre un stand de jeux d'occasion.", "Gé-Té-A six vient de sortir. Quarante-sept ouvre un stand de jeux d'occasion.", 0.15),
  ('s2', "Le Baron passe : la moitié de ce que tu gagnes aujourd'hui est pour moi. Si tu mens, tu fermes.", "Le Baron passe : la moitié de ce que tu gagnes aujourd'hui est pour moi. Si tu mens, tu fermes.", 0.15),
  ('s3', "Le matin, il achète un GTA 6 à 70 euros, et le revend 80. L'après-midi, il le rachète 90… et le revend 100.", "Le matin, il achète un Gé-Té-A six à soixante-dix euros, et le revend quatre-vingts. L'après-midi, il le rachète quatre-vingt-dix... et le revend cent.", 0.2),
  ('s4', "Le soir, le Baron tend la main.", "Le soir, le Baron tend la main.", 0.3),
  ('q', "47 a gagné combien ?", "Quarante-sept a gagné combien ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : 20 euros ! Pas 10.", "La solution : vingt euros ! Pas dix.", 0.15),
  ('sol2', "Première affaire : acheté 70, vendu 80. Plus 10.", "Première affaire : acheté soixante-dix, vendu quatre-vingts. Plus dix.", 0.15),
  ('sol3', "Deuxième affaire : acheté 90, vendu 100. Encore plus 10. Total : 20 euros.", "Deuxième affaire : acheté quatre-vingt-dix, vendu cent. Encore plus dix. Total : vingt euros.", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'cash'), ('s1', 'sortir', 'sting'), ('s1', 'stand', 'pop'), ('s2', 'moitié', 'stamp'), ('s2', 'fermes', 'buzz'), ('s3', 'achète', 'cash'), ('s3', 'revend', 'cash'),
        ('s3', 'rachète', 'cash'), ('s3', 'cent', 'cash'), ('s4', 'main', 'sting'), ('q', '+0', 'ding'), ('c1', '+0', 'paper'),
        ('sol1', 'solution', 'dingdong'), ('sol2', 'Plus', 'pop'), ('sol3', 'Encore', 'pop'), ('sol3', 'Total', 'stamp'), ('end', '+0', 'ding')]
