# Horreur 21h (mar. 24/11) — « Dans la ville de 47… les ombres ». Système de la référence (FORME seulement) : monde à règle + moi l'exception
# + danger de mort en 10 s, créature en 2 détails (elles glissent sous les portes, bruit de papier déchiré), « on dit que… c'est faux »,
# mini-histoire d'une voisine (Rosa, son ombre lève la main toute seule), un proche cache un secret (maman garde ma porte), dernière ligne glaçante.
EMO = {'ff': 'sinistre', 's1': 'chuchote', 's2': 'peur', 's3': 'sinistre', 's4': 'chuchote', 's5': 'sinistre', 's6': 'chuchote', 's7': 'peur', 'mid': 'question',
       's8': 'chuchote', 's9': 'chuchote', 's10': 'peur', 's11': 'peur', 's12': 'peur', 's13': 'chuchote', 'end': 'sinistre'}
MUSIC_STYLE = 'horreur'
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.2
TEMPO_BEAT = {'ff': 1.06}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Dans la ville de 47, à minuit, les ombres se décollent des murs. Et elles cherchent un corps.", "Dans la ville de Quarante-sept, à minuit, les ombres se décollent des murs. Et elles cherchent un corps.", 0.1),
  ('s1', "Tout le monde dort avec la lumière allumée. Parce que dans le noir… ton ombre peut partir.", "Tout le monde dort avec la lumière allumée. Parce que dans le noir... ton ombre peut partir.", 0.1),
  ('s2', "Moi, je suis né sans ombre. Pour elles… je suis une place libre.", "Moi, je suis né sans ombre. Pour elles... je suis une place libre.", 0.2),
  ('s3', "Elles ne marchent pas. Elles glissent. Sous les portes. Sous ton lit.", "Elles ne marchent pas. Elles glissent. Sous les portes. Sous ton lit.", 0.1),
  ('s4', "Et quand une ombre te trouve, tu entends un bruit… de papier qu'on déchire.", "Et quand une ombre te trouve, tu entends un bruit... de papier qu'on déchire.", 0.2),
  ('s5', "On dit qu'il suffit de garder la lumière. C'est faux.", "On dit qu'il suffit de garder la lumière. C'est faux.", 0.1),
  ('s6', "Madame Rosa dormait avec trois lampes. Le matin, elle était assise sur son lit. Souriante.", "Madame Rosa dormait avec trois lampes. Le matin, elle était assise sur son lit. Souriante.", 0.1),
  ('s7', "Mais sur le mur, son ombre levait la main. Rosa, non.", "Mais sur le mur, son ombre levait la main. Rosa, non.", 0.3),
  ('mid', "Pourquoi elles ne m'ont jamais pris ?… La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Pourquoi elles ne m'ont jamais pris ?... La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s8', "Chaque nuit, ma mère s'assoit devant ma porte. Dos au mur. Jusqu'au matin.", "Chaque nuit, ma mère s'assoit devant ma porte. Dos au mur. Jusqu'au matin.", 0.1),
  ('s9', "Je lui ai demandé pourquoi. Elle a dit : « Pour que personne ne rentre. »", "Je lui ai demandé pourquoi. Elle a dit : Pour que personne ne rentre.", 0.2),
  ('s10', "Cette nuit, la lumière a sauté. Toute la ville. Noir complet.", "Cette nuit, la lumière a sauté. Toute la ville. Noir complet.", 0.2),
  ('s11', "Et derrière ma porte… un bruit de papier qu'on déchire.", "Et derrière ma porte... un bruit de papier qu'on déchire.", 0.4),
  ('s12', "J'ai ouvert. Ma mère était là. Debout. Mais elle n'avait plus d'ombre.", "J'ai ouvert. Ma mère était là. Debout. Mais elle n'avait plus d'ombre.", 0.3),
  ('s13', "Elle a souri : « Elle est à toi, maintenant. Elle te protégera. »", "Elle a souri : Elle est à toi, maintenant. Elle te protégera.", 0.4),
  ('end', "Ce matin, pour la première fois, j'ai une ombre. Mais elle… ne bouge pas comme moi. Ton histoire de ouf ? En commentaire.", "Ce matin, pour la première fois, j'ai une ombre. Mais elle... ne bouge pas comme moi. Ton histoire de ouf ? En commentaire.", 1.0),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'minuit', 'dingdong'), ('ff', 'décollent', 'tear'), ('ff', 'corps', 'bam'), ('s1', 'lumière', 'click'), ('s1', 'partir', 'wind'),
        ('s2', 'ombre', 'sting'), ('s2', 'libre', 'bam'), ('s3', 'glissent', 'wind'), ('s3', 'lit', 'sting'), ('s4', 'déchire', 'tear'), ('s5', 'faux', 'stamp'),
        ('s6', 'lampes', 'click'), ('s6', 'Souriante', 'sting'), ('s7', 'main', 'bam'), ('s7', 'non', 'sting'), ('mid', '+0', 'ding'),
        ('s8', 'porte', 'tick'), ('s8', 'mur', 'sting'), ('s9', 'personne', 'sting'), ('s10', 'sauté', 'flicker'), ('s10', 'Noir', 'bam'), ('s11', 'déchire', 'tear'),
        ('s12', 'ouvert', 'flicker'), ('s12', 'ombre', 'bam'), ('s13', 'toi', 'sting'), ('end', 'ombre', 'sting'), ('end', 'moi', 'bam')]
