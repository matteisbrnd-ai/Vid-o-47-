# « Les histoires de 47 » #2 — « La soupe de Mamie Jeanne ». Structure du viral « papi Léon » (mort au hook + manie du perso + exemples drôles + 3 héritiers + moquerie + retournements + trésor + mot final + boucle). Histoire originale.
EMO = {'ff': 'tension', 's1': 'complice', 's2': 'complice', 's3': 'complice', 's4': 'complice', 's5': 'tension', 's6': 'complice', 's7': 'complice',
       's8': 'complice', 's9': 'complice', 's10': 'choc', 's11': 'tension', 's12': 'choc', 's13': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "Quand Mamie Jeanne est morte, toute la famille a retourné sa maison.", "Quand Mamie Jeanne est morte, toute la famille a retourné sa maison.", 0.15),
  ('s1', "Parce que Mamie avait deux manies : elle avait de l'argent… et elle cachait TOUT.", "Parce que Mamie avait deux manies : elle avait de l'argent... et elle cachait TOUT.", 0.15),
  ('s2', "Ses billets ? Dans le congélateur, entre les petits pois. Son alliance ? Dans le pot de cornichons.", "Ses billets ? Dans le congélateur, entre les petits pois. Son alliance ? Dans le pot de cornichons.", 0.2),
  ('s3', "Un soir, un voleur est entré chez elle. Il a tout fouillé pendant une heure… et il n'a rien trouvé. Alors elle lui a servi une soupe.", "Un soir, un voleur est entré chez elle. Il a tout fouillé pendant une heure... et il n'a rien trouvé. Alors elle lui a servi une soupe.", 0.15),
  ('s4', "Ce voleur, c'était 47. Et depuis, il revenait chaque dimanche.", "Ce voleur, c'était Quarante-sept. Et depuis, il revenait chaque dimanche.", 0.2),
  ('s5', "Le testament était simple : chaque petit-enfant prend UN seul objet de la maison.", "Le testament était simple : chaque petit-enfant prend UN seul objet de la maison.", 0.15),
  ('s6', "Kevin, qui ne venait que pour emprunter de l'argent, a pris la boîte à bijoux.", "Kévine, qui ne venait que pour emprunter de l'argent, a pris la boîte à bijoux.", 0.1),
  ('s7', "Inès, qui appelait une fois par an, a pris le grand écran plat.", "Inès, qui appelait une fois par an, a pris le grand écran plat.", 0.1),
  ('s8', 'Et Tom, le seul qui venait manger la soupe chaque dimanche, a juste pris… le vieux cahier de recettes. « Pour refaire sa soupe. »', 'Et Tom, le seul qui venait manger la soupe chaque dimanche, a juste pris... le vieux cahier de recettes. Pour refaire sa soupe.', 0.15),
  ('s9', 'Kevin a éclaté de rire : « Tom repart avec trois carottes et un poireau ! »', 'Kévine a éclaté de rire : Tom repart avec trois carottes et un poireau !', 0.2),
  ('s10', "Les bijoux ? Du toc. Mamie avait vendu les vrais pour payer les dettes de Kevin. L'écran ? Loué. Le magasin est venu le reprendre le lendemain.", "Les bijoux ? Du toc. Mamie avait vendu les vrais pour payer les dettes de Kévine. L'écran ? Loué. Le magasin est venu le reprendre le lendemain.", 0.2),
  ('s11', "Le dimanche d'après, Tom a fait la soupe de Mamie, avec 47. Page 12 : trois carottes, deux poireaux… et une ligne en plus : « le sel est sous la 3e marche de la cave ».", "Le dimanche d'après, Tom a fait la soupe de Mamie, avec Quarante-sept. Page douze : trois carottes, deux poireaux... et une ligne en plus : le sel est sous la troisième marche de la cave.", 0.2),
  ('s12', "Sous la marche : une boîte. 90 000 euros. Et un petit mot : « Ils ont tous fouillé ma maison. Toi, tu t'asseyais à ma table. »", "Sous la marche : une boîte. Quatre-vingt-dix mille euros. Et un petit mot : Ils ont tous fouillé ma maison. Toi, tu t'asseyais à ma table.", 0.3),
  ('s13', "Mamie cachait tout… sauf à ceux qui venaient la voir.", "Mamie cachait tout... sauf à ceux qui venaient la voir.", 0.3),
  ('end', "Et toi, c'est quand la dernière fois que t'as mangé chez ta grand-mère ?", "Et toi, c'est quand la dernière fois que t'as mangé chez ta grand-mère ?", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'retourné', 'bam'), ('s1', 'argent', 'cash'), ('s1', 'TOUT', 'sting'), ('s2', 'congélateur', 'pop'), ('s2', 'cornichons', 'pop'),
        ('s3', 'voleur', 'click'), ('s3', 'rien', 'bam'), ('s3', 'soupe', 'pop'), ('s4', 'était', 'ding'), ('s4', 'dimanche', 'tick'), ('s5', 'testament', 'paper'), ('s5', 'UN', 'stamp'),
        ('s6', 'bijoux', 'whoosh'), ('s7', 'écran', 'whoosh'), ('s8', 'cahier', 'ding'), ('s9', 'rire', 'pop'), ('s10', 'toc', 'stamp'), ('s10', 'dettes', 'bam'), ('s10', 'Loué', 'stamp'),
        ('s11', 'Page', 'paper'), ('s11', 'sel', 'sting'), ('s12', 'boîte', 'click'), ('s12', 'euros', 'cash'), ('s12', 'mot', 'paper'), ('s13', 'voir', 'ding'), ('end', '+0', 'ding')]
