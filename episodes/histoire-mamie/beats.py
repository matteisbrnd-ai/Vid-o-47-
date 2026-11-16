# « Les histoires de 47 » #2 v3 — « Les 3 enveloppes de Mamie Jeanne ». Ressorts du viral « papi Léon » (perso qui ne ment jamais mais joue sur les mots,
# 2 exemples drôles, 3 enveloppes piégées, moquerie du petit dernier, trésor, mot final, boucle) — texte, pièges et objets 100 % originaux.
EMO = {'ff': 'tension', 's1': 'complice', 's2': 'complice', 's3': 'complice', 's4': 'tension', 's5': 'complice', 's6': 'complice', 's7': 'complice',
       's8': 'complice', 's9': 'choc', 's10': 'complice', 's11': 'tension', 's12': 'tension', 's13': 'choc', 's14': 'complice', 's15': 'complice', 's16': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "Quand Mamie Jeanne est morte, toute la famille a foncé chez le notaire.", "Quand Mamie Jeanne est morte, toute la famille a foncé chez le notaire.", 0.15),
  ('s1', "Parce que Mamie avait de l'argent… et qu'elle tenait TOUJOURS parole. À la lettre près.", "Parce que Mamie avait de l'argent... et qu'elle tenait TOUJOURS parole. À la lettre près.", 0.15),
  ('s2', "Elle avait juré à son médecin d'arrêter les gâteaux… elle était passée aux tartes.", "Elle avait juré à son médecin d'arrêter les gâteaux... elle était passée aux tartes.", 0.15),
  ('s3', "Elle avait promis à sa voisine de lui rendre son plat dès qu'il serait vide… elle le remplissait chaque dimanche.", "Elle avait promis à sa voisine de lui rendre son plat dès qu'il serait vide... elle le remplissait chaque dimanche.", 0.2),
  ('s4', "Chez le notaire, il y avait trois enveloppes.", "Chez le notaire, il y avait trois enveloppes.", 0.15),
  ('s5', "La première pour Kevin, qui ne passait que pour emprunter de l'argent. « À Kevin, je laisse tous mes comptes. » Kevin regardait déjà des voitures sur son téléphone.", "La première pour Kévine, qui ne passait que pour emprunter de l'argent. À Kévine, je laisse tous mes comptes. Kévine regardait déjà des voitures sur son téléphone.", 0.15),
  ('s6', "La deuxième pour Inès, qui appelait une fois par an. « À Inès, je laisse ma plus belle pièce. » Inès s'imaginait déjà un salon immense.", "La deuxième pour Inès, qui appelait une fois par an. À Inès, je laisse ma plus belle pièce. Inès s'imaginait déjà un salon immense.", 0.15),
  ('s7', "La troisième pour Tom, le petit dernier, qui venait chaque dimanche juste pour faire les mots croisés avec elle. « À Tom, je laisse mon vieux fauteuil… et mon chat. »", "La troisième pour Tom, le petit dernier, qui venait chaque dimanche juste pour faire les mots croisés avec elle. À Tom, je laisse mon vieux fauteuil... et mon chat.", 0.15),
  ('s8', "Kevin et Inès se sont écroulés de rire : « Un fauteuil qui grince et un chat qui griffe ! Bonne chance, Tom ! »", "Kévine et Inès se sont écroulés de rire : Un fauteuil qui grince et un chat qui griffe ! Bonne chance, Tom !", 0.2),
  ('s9', "Les comptes de Kevin ? Un petit carnet. Tout l'argent qu'elle lui avait prêté en dix ans : vingt-trois mille euros. À rembourser.", "Les comptes de Kévine ? Un petit carnet. Tout l'argent qu'elle lui avait prêté en dix ans : vingt-trois mille euros. À rembourser.", 0.2),
  ('s10', "La plus belle pièce d'Inès ? Une pièce de deux euros. Avec un mot : « Pour m'appeler plus souvent. »", "La plus belle pièce d'Inès ? Une pièce de deux euros. Avec un mot : Pour m'appeler plus souvent.", 0.25),
  ('s11', "Puis Kevin a compris : Mamie jouait avec les mots. Ce fauteuil cachait forcément quelque chose. Il a payé un voleur pour le récupérer. Ce voleur, c'était 47.", "Puis Kévine a compris : Mamie jouait avec les mots. Ce fauteuil cachait forcément quelque chose. Il a payé un voleur pour le récupérer. Ce voleur, c'était Quarante-sept.", 0.2),
  ('s12', "Cette nuit-là, chez Tom, le chat griffait le fauteuil comme un fou. Le tissu a craqué…", "Cette nuit-là, chez Tom, le chat griffait le fauteuil comme un fou. Le tissu a craqué...", 0.1),
  ('s13', "Et des pièces d'or ont roulé par terre. Des centaines.", "Et des pièces d'or ont roulé par terre. Des centaines.", 0.2),
  ('s14', "Cousu dedans, un mot : « Les autres comptaient mon argent. Toi, Tom, tu comptais les cases. »", "Cousu dedans, un mot : Les autres comptaient mon argent. Toi, Tom, tu comptais les cases.", 0.3),
  ('s15', "47 a tout remis, et recousu le fauteuil. Le lendemain, il a dit à Kevin : « Dans le fauteuil ? Il n'y avait qu'un chat. »", "Quarante-sept a tout remis, et recousu le fauteuil. Le lendemain, il a dit à Kévine : Dans le fauteuil ? Il n'y avait qu'un chat.", 0.2),
  ('s16', 'Parole tenue… à la lettre près. Mamie aurait adoré.', 'Parole tenue... à la lettre près. Mamie aurait adoré.', 0.3),
  ('end', "Et toi… c'est quand, ton dernier dimanche chez ta grand-mère ?", "Et toi... c'est quand, ton dernier dimanche chez ta grand-mère ?", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'foncé', 'whoosh'), ('ff', 'notaire', 'bam'), ('s1', 'argent', 'cash'), ('s1', 'TOUJOURS', 'sting'), ('s2', 'gâteaux', 'pop'), ('s2', 'tartes', 'ding'),
        ('s3', 'plat', 'pop'), ('s3', 'remplissait', 'ding'), ('s4', 'enveloppes', 'paper'), ('s5', 'comptes', 'stamp'), ('s5', 'voitures', 'cash'), ('s6', 'pièce', 'stamp'), ('s6', 'salon', 'ding'),
        ('s7', 'fauteuil', 'stamp'), ('s7', 'chat', 'pop'), ('s8', 'rire', 'pop'), ('s9', 'carnet', 'paper'), ('s9', 'euros', 'bam'), ('s9', 'rembourser', 'stamp'), ('s10', 'deux', 'pop'), ('s10', 'souvent', 'ding'),
        ('s11', 'compris', 'sting'), ('s11', 'payé', 'cash'), ('s11', 'était', 'ding'), ('s12', 'griffait', 'click'), ('s12', 'craqué', 'bam'), ('s13', 'or', 'cash'), ('s13', 'centaines', 'cash'), ('s14', 'mot', 'paper'),
        ('s15', 'recousu', 'click'), ('s15', 'chat', 'pop'), ('s16', 'adoré', 'ding'), ('end', '+0', 'ding')]
