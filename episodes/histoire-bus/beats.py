# Histoire du matin (mer. 25/11) — « Les 30 secondes du chauffeur ». Histoire originale, karma + émotion, racontée par 47 (passager).
# Injustice dès 0 s (tout le bus insulte le chauffeur), détail-indice (bracelet d'hôpital), retournement public (vidéo virale → licencié),
# promesse « tu t'attends pas à la fin » (étiquette 0 s + voix au mid), révélation (sa mère à l'hôpital), payoff (tout le bus attend, ancien chauffeur réembauché).
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'mystere', 's3': 'tension', 's4': 'choc', 's5': 'tension', 'mid': 'question', 's6': 'mystere',
       's7': 'mystere', 's8': 'complice', 's9': 'excite', 's10': 'complice', 'end': 'complice'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Chaque matin, ce chauffeur de bus attendait un gamin en retard. Et chaque matin, tout le bus l'insultait.", "Chaque matin, ce chauffeur de bus attendait un gamin en retard. Et chaque matin, tout le bus l'insultait.", 0.1),
  ('s1', "« On a des boulots, nous ! Démarrez ! » Trente secondes. Tous les jours.", "On a des boulots, nous ! Démarrez ! Trente secondes. Tous les jours.", 0.1),
  ('s2', "Le gamin arrivait en courant. Essoufflé. Et toujours… un bracelet d'hôpital au poignet.", "Le gamin arrivait en courant. Essoufflé. Et toujours... un bracelet d'hôpital au poignet.", 0.1),
  ('s3', "Un jour, une passagère a filmé le chauffeur. « Il nous fait perdre notre temps ! » Elle a posté la vidéo.", "Un jour, une passagère a filmé le chauffeur. Il nous fait perdre notre temps ! Elle a posté la vidéo.", 0.1),
  ('s4', "Un million de vues. Le chauffeur a été convoqué. Et licencié.", "Un million de vues. Le chauffeur a été convoqué. Et licencié.", 0.2),
  ('s5', "Le lendemain, le nouveau chauffeur n'a pas attendu. Le gamin est resté seul sur le trottoir.", "Le lendemain, le nouveau chauffeur n'a pas attendu. Le gamin est resté seul sur le trottoir.", 0.2),
  ('mid', "Mais pourquoi l'ancien chauffeur l'attendait ?… La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Mais pourquoi l'ancien chauffeur l'attendait ?... La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s6', "Ce jour-là, j'ai suivi le gamin. Il n'est pas allé à l'école. Il est allé à l'hôpital.", "Ce jour-là, j'ai suivi le gamin. Il n'est pas allé à l'école. Il est allé à l'hôpital.", 0.1),
  ('s7', "Chaque matin, avant l'école, il venait voir sa mère. Seul. Il a douze ans.", "Chaque matin, avant l'école, il venait voir sa mère. Seul. Il a douze ans.", 0.3),
  ('s8', "Le chauffeur le savait. C'est pour ça qu'il attendait. Trente secondes.", "Le chauffeur le savait. C'est pour ça qu'il attendait. Trente secondes.", 0.3),
  ('s9', "Alors j'ai posté la vraie histoire. Deux millions de vues.", "Alors j'ai posté la vraie histoire. Deux millions de vues.", 0.1),
  ('s10', "Et ce matin, quand le gamin est arrivé en courant… tout le bus l'a attendu. Sans un mot.", "Et ce matin, quand le gamin est arrivé en courant... tout le bus l'a attendu. Sans un mot.", 0.3),
  ('end', "Au volant ? L'ancien chauffeur. Réembauché. Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", "Au volant ? L'ancien chauffeur. Réembauché. Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", 1.0),
]
CUES = [('ff', '+0', 'whoosh'), ('ff', 'retard', 'tick'), ('ff', 'insultait', 'bam'), ('s1', 'Démarrez', 'stamp'), ('s1', 'Trente', 'ticktock'),
        ('s2', 'courant', 'steps'), ('s2', 'bracelet', 'sting'), ('s3', 'filmé', 'click'), ('s3', 'posté', 'pop'), ('s4', 'million', 'cash'), ('s4', 'licencié', 'bam'),
        ('s5', 'attendu', 'whoosh'), ('s5', 'seul', 'sting'), ('mid', '+0', 'ding'), ('s6', 'suivi', 'steps'), ('s6', 'hôpital', 'sting'), ('s7', 'mère', 'ding'), ('s7', 'douze', 'sting'),
        ('s8', 'savait', 'dingdong'), ('s9', 'vraie', 'pop'), ('s9', 'millions', 'cash'), ('s10', 'attendu', 'ding'), ('end', 'Réembauché', 'dingdong')]
