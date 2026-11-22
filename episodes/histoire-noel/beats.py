# « Les histoires de 47 » #7 — « La lettre au Père Noël » (matin 22/11, début de la saison de Noël). Histoire originale, émotion.
# Grille 2 s : lettre ouverte (interdit) → mot d'enfant → « que papa retrouve un travail » → facteur = 47 → 300 entreprises → question (que fait-il ?) + appel histoires
# → adresse → 300 CV → glissés dans le courrier « de la part du Père Noël » → 23 décembre, appel → « signé le Père Noël » → nouvelle lettre → « je t'ai vu par la fenêtre ».
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'complice', 's3': 'tension', 's4': 'complice', 's5': 'complice', 'mid': 'question', 's6': 'complice', 's7': 'complice',
       's8': 'complice', 's9': 'choc', 's10': 'complice', 's11': 'tension', 's12': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.12}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Un facteur a ouvert une lettre adressée au Père Noël. Il n'aurait jamais dû.", "Un facteur a ouvert une lettre adressée au Père Noël. Il n'aurait jamais dû.", 0.05),
  ('s1', "C'est interdit. Mais l'enveloppe était trempée… et elle s'est déchirée.", "C'est interdit. Mais l'enveloppe était trempée... et elle s'est déchirée.", 0.05),
  ('s2', "Une écriture d'enfant : « Cher Père Noël, cette année, je veux pas de cadeau. »", "Une écriture d'enfant : Cher Père Noël, cette année, je veux pas de cadeau.", 0.05),
  ('s3', "« Je veux juste que papa retrouve un travail. Il pleure quand il croit que je dors. »", "Je veux juste que papa retrouve un travail. Il pleure quand il croit que je dors.", 0.15),
  ('s4', "Le facteur, c'était 47. Il ne pouvait pas offrir un travail…", "Le facteur, c'était Quarante-sept. Il ne pouvait pas offrir un travail...", 0.05),
  ('s5', "Mais chaque matin, il passait devant trois cents entreprises.", "Mais chaque matin, il passait devant trois cents entreprises.", 0.05),
  ('mid', "Qu'est-ce qu'il a fait ?… Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Qu'est-ce qu'il a fait ?... Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s6', "Il a retrouvé le papa : Monsieur Martin, cuisinier, au chômage depuis un an.", "Il a retrouvé le papa : Monsieur Martin, cuisinier, au chômage depuis un an.", 0.05),
  ('s7', "Le soir même, il a imprimé son CV. Trois cents fois.", "Le soir même, il a imprimé son CV. Trois cents fois.", 0.05),
  ('s8', "Et pendant un mois, dans chaque courrier qu'il livrait, il glissait un CV. Avec un mot : « De la part du Père Noël. »", "Et pendant un mois, dans chaque courrier qu'il livrait, il glissait un CV. Avec un mot : De la part du Père Noël.", 0.1),
  ('s9', "Le 23 décembre, le téléphone de Monsieur Martin a sonné. « Vous commencez lundi. »", "Le vingt-trois décembre, le téléphone de Monsieur Martin a sonné. Vous commencez lundi.", 0.1),
  ('s10', "Le patron a juste dit : « Votre CV était dans mon courrier. Signé… le Père Noël. »", "Le patron a juste dit : Votre CV était dans mon courrier. Signé... le Père Noël.", 0.15),
  ('s11', "Le 26 décembre, une nouvelle lettre est arrivée. Même écriture.", "Le vingt-six décembre, une nouvelle lettre est arrivée. Même écriture.", 0.1),
  ('s12', "« Merci Père Noël. Papa ne pleure plus. P.S. : dis merci au facteur… je l'ai vu par la fenêtre. »", "Merci Père Noël. Papa ne pleure plus. P.S. : dis merci au facteur... je l'ai vu par la fenêtre.", 0.35),
  ('end', "Et toi… quelqu'un a déjà été ton Père Noël en secret ? Raconte-le en commentaire.", "Et toi... quelqu'un a déjà été ton Père Noël en secret ? Raconte-le en commentaire.", 1.2),
]
CUES = [('ff', '+0', 'paper'), ('ff', 'Noël', 'ding'), ('ff', 'jamais', 'sting'), ('s1', 'interdit', 'buzz'), ('s1', 'déchirée', 'paper'), ('s2', 'enfant', 'pop'), ('s2', 'cadeau', 'sting'),
        ('s3', 'travail', 'sting'), ('s3', 'dors', 'tick'), ('s4', 'Quarante', 'pop'), ('s5', 'cents', 'whoosh'), ('mid', '+0', 'ding'), ('s6', 'Martin', 'pop'), ('s6', 'an', 'tick'),
        ('s7', 'imprimé', 'click'), ('s7', 'fois', 'paper'), ('s8', 'glissait', 'paper'), ('s8', 'Noël', 'ding'), ('s9', 'sonné', 'ring'), ('s9', 'lundi', 'ding'), ('s10', 'Signé', 'sting'), ('s10', 'Noël', 'dingdong'),
        ('s11', 'lettre', 'paper'), ('s11', 'écriture', 'sting'), ('s12', 'pleure', 'ding'), ('s12', 'fenêtre', 'dingdong'), ('end', '+0', 'ding')]
