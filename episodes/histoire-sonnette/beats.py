# « Les histoires de 47 » #6 — « La sonnette de 21h ». Histoire originale (mystère → émotion). Postée à 21h (le hook colle à l'heure).
# Grille 2 s : chaque ~2 s une info neuve (sonnette, 6 mois, ombre, police qui rit, affiche, caméra, vidéo, indice lumière, piège, réponse calme, chute, flashback, phrase clé, renversement).
# Question du milieu = POURQUOI il attend la lumière (indice visible, raison cachée). Fin = renversement (Henri sonne chez 47) + appel aux histoires des abonnés.
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'tension', 's3': 'complice', 's4': 'complice', 's5': 'tension', 's6': 'tension', 'mid': 'question', 's7': 'tension',
       's8': 'complice', 's9': 'tension', 's10': 'choc', 's11': 'complice', 's12': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.15}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Chaque soir à 21h pile, quelqu'un sonnait chez Monsieur Henri… et partait en courant.", "Chaque soir à vingt-et-une heures pile, quelqu'un sonnait chez Monsieur Henri... et partait en courant.", 0.05),
  ('s1', "Pendant six mois. Tous les soirs.", "Pendant six mois. Tous les soirs.", 0.05),
  ('s2', "Henri ouvrait : personne. Juste une ombre au bout de la rue.", "Henri ouvrait : personne. Juste une ombre au bout de la rue.", 0.05),
  ('s3', "Il a appelé la police. Ils ont rigolé.", "Il a appelé la police. Ils ont rigolé.", 0.05),
  ('s4', "Il a collé une affiche : « Interdit de sonner. » Le soir même… ça sonnait.", "Il a collé une affiche : Interdit de sonner. Le soir même... ça sonnait.", 0.1),
  ('s5', "Alors il a installé une caméra.", "Alors il a installé une caméra.", 0.05),
  ('s6', "Sur la vidéo : un bonnet orange. Il sonne… se cache derrière la haie… attend que la lumière s'allume… et il repart.", "Sur la vidéo : un bonnet orange. Il sonne... se cache derrière la haie... attend que la lumière s'allume... et il repart.", 0.15),
  ('mid', "Pourquoi il attend la lumière ?… Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Pourquoi il attend la lumière ?... Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s7', "Le lendemain soir, Henri l'attendait derrière la porte. « Je te tiens ! »", "Le lendemain soir, Henri l'attendait derrière la porte. Je te tiens !", 0.1),
  ('s8', "Mais 47 n'a pas fui. Il a juste demandé : « Vous allez bien, Monsieur Henri ? »", "Mais Quarante-sept n'a pas fui. Il a juste demandé : Vous allez bien, Monsieur Henri ?", 0.15),
  ('s9', "L'hiver dernier, Henri était tombé dans sa cuisine. Personne ne l'avait su… pendant deux jours.", "L'hiver dernier, Henri était tombé dans sa cuisine. Personne ne l'avait su... pendant deux jours.", 0.1),
  ('s10', "Le livreur qui l'avait entendu appeler à l'aide à travers la porte… c'était 47.", "Le livreur qui l'avait entendu appeler à l'aide à travers la porte... c'était Quarante-sept.", 0.2),
  ('s11', "« Depuis, je sonne tous les soirs. Si la lumière s'allume… je sais que vous êtes vivant. »", "Depuis, je sonne tous les soirs. Si la lumière s'allume... je sais que vous êtes vivant.", 0.3),
  ('s12', "Le lendemain, à 21h, ça a sonné… chez 47. C'était Henri, avec une tarte : « Ce soir, c'est moi qui vérifie. »", "Le lendemain, à vingt-et-une heures, ça a sonné... chez Quarante-sept. C'était Henri, avec une tarte : Ce soir, c'est moi qui vérifie.", 0.3),
  ('end', "Et toi, tu sonnerais chez qui tous les soirs ? Et si t'as vécu un truc de ouf, écris-le en commentaire : la plus likée, je l'anime avec 47.", "Et toi, tu sonnerais chez qui tous les soirs ? Et si t'as vécu un truc de ouf, écris-le en commentaire : la plus likée, je l'anime avec Quarante-sept.", 1.2),
]
CUES = [('ff', '+0', 'dingdong'), ('ff', 'Henri', 'sting'), ('ff', 'courant', 'run'), ('s1', 'six', 'tick'), ('s1', 'soirs', 'dingdong'), ('s2', 'personne', 'wind'), ('s2', 'ombre', 'sting'),
        ('s3', 'police', 'ring'), ('s3', 'rigolé', 'pop'), ('s4', 'affiche', 'paper'), ('s4', 'sonnait', 'dingdong'), ('s5', 'caméra', 'click'), ('s6', 'orange', 'sting'), ('s6', 'sonne', 'dingdong'),
        ('s6', 'haie', 'whoosh'), ('s6', 'lumière', 'click'), ('s6', 'repart', 'steps'), ('mid', '+0', 'ding'), ('s7', 'soir', 'tick'), ('s7', 'tiens', 'bam'), ('s8', 'fui', 'sting'), ('s8', 'bien', 'ding'),
        ('s9', 'tombé', 'bam'), ('s9', 'jours', 'tick'), ('s10', 'livreur', 'paper'), ('s10', 'Quarante', 'sting'), ('s11', 'lumière', 'click'), ('s11', 'vivant', 'dingdong'),
        ('s12', 'sonné', 'dingdong'), ('s12', 'tarte', 'pop'), ('s12', 'vérifie', 'ding'), ('end', '+0', 'ding')]
