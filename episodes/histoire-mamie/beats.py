# « Les histoires de 47 » #2 — « Le cahier de Mamie Jeanne ». Format storytime (structure : mort au hook + règle + 3 héritiers + piège + morale), histoire originale.
EMO = {'ff': 'tension', 's1': 'complice', 's2': 'complice', 's3': 'tension', 's4': 'complice', 's5': 'complice', 's6': 'complice',
       's7': 'choc', 's8': 'complice', 's9': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "Quand Mamie Jeanne est morte, ce n'est pas le notaire qui a choisi l'héritier… c'est un voleur.", "Quand Mamie Jeanne est morte, ce n'est pas le notaire qui a choisi l'héritier... c'est un voleur.", 0.2),
  ('s1', "Dix ans plus tôt, un voleur était entré chez elle en pleine nuit. Elle ne l'avait pas dénoncé. Elle lui avait servi une soupe.", "Dix ans plus tôt, un voleur était entré chez elle en pleine nuit. Elle ne l'avait pas dénoncé. Elle lui avait servi une soupe.", 0.15),
  ('s2', "Ce voleur, c'était 47. Et depuis, chaque dimanche, il revenait manger sa soupe.", "Ce voleur, c'était Quarante-sept. Et depuis, chaque dimanche, il revenait manger sa soupe.", 0.2),
  ('s3', "Chez le notaire, elle avait tout écrit. Mais c'est à 47 qu'elle a laissé la clé, avec un mot : « Mes trois petits-enfants vont fouiller ma maison. Laisse-les prendre ce qu'ils veulent… et regarde. »", "Chez le notaire, elle avait tout écrit. Mais c'est à Quarante-sept qu'elle a laissé la clé, avec un mot : Mes trois petits-enfants vont fouiller ma maison. Laisse-les prendre ce qu'ils veulent... et regarde.", 0.2),
  ('s4', "Kevin, qui ne venait que pour emprunter de l'argent, a pris la boîte à bijoux.", "Kévine, qui ne venait que pour emprunter de l'argent, a pris la boîte à bijoux.", 0.1),
  ('s5', 'Inès, qui appelait une fois par an, a pris la grande télé.', 'Inès, qui appelait une fois par an, a pris la grande télé.', 0.1),
  ('s6', "Tom, le petit dernier, qui venait manger la soupe chaque dimanche, n'a pris qu'une chose : le vieux cahier de recettes.", "Tom, le petit dernier, qui venait manger la soupe chaque dimanche, n'a pris qu'une chose : le vieux cahier de recettes.", 0.2),
  ('s7', 'Les bijoux ? Du toc. Mamie avait vendu les vrais… pour payer les dettes de Kevin. La télé ? En panne depuis des années.', 'Les bijoux ? Du toc. Mamie avait vendu les vrais... pour payer les dettes de Kévine. La télé ? En panne depuis des années.', 0.2),
  ('s8', "Le lendemain, 47 a sonné chez Tom, avec une clé dans la main. Mamie avait été claire : sa maison irait à celui qui prendrait le cahier.", "Le lendemain, Quarante-sept a sonné chez Tom, avec une clé dans la main. Mamie avait été claire : sa maison irait à celui qui prendrait le cahier.", 0.2),
  ('s9', "Parce que dans ce cahier, il y avait sa soupe. Et Tom était le seul à savoir ce qu'elle valait vraiment.", "Parce que dans ce cahier, il y avait sa soupe. Et Tom était le seul à savoir ce qu'elle valait vraiment.", 0.3),
  ('end', "Et toi, chez ta grand-mère… t'aurais pris quoi ?", "Et toi, chez ta grand-mère... t'aurais pris quoi ?", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'notaire', 'paper'), ('ff', 'voleur', 'bam'), ('s1', 'nuit', 'click'), ('s1', 'soupe', 'pop'), ('s2', 'était', 'ding'), ('s2', 'dimanche', 'tick'),
        ('s3', 'notaire', 'paper'), ('s3', 'clé', 'ding'), ('s3', 'regarde', 'sting'), ('s4', 'bijoux', 'whoosh'), ('s5', 'télé', 'whoosh'), ('s6', 'cahier', 'ding'),
        ('s7', 'panne', 'stamp'), ('s7', 'toc', 'stamp'), ('s7', 'dettes', 'bam'), ('s8', 'sonné', 'dingdong'), ('s8', 'clé', 'ding'), ('s8', 'cahier', 'cash'),
        ('s9', 'soupe', 'pop'), ('s9', 'vraiment', 'ding'), ('end', '+0', 'ding')]
