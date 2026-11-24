# Histoire du midi (mar. 24/11) — « Le café du livreur ». Histoire originale, karma + émotion, racontée par 47 (témoin en terrasse).
# Système de la référence : injustice dès 0 s, détails bizarres qui ouvrent des questions (sang au genou, chaussure de femme dans le sac),
# promesse « tu t'attends pas à la fin » (étiquette à 0 s + voix au mid), révélation à ~65 % (la dame de l'escalier = SA mère), fin chaleureuse.
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'mystere', 's3': 'mystere', 's4': 'tension', 'mid': 'question', 's5': 'choc', 's6': 'tension',
       's7': 'mystere', 's8': 'tension', 's9': 'complice', 'end': 'complice'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Ce matin, un homme a jeté son café sur un livreur. Pour deux minutes de retard.", "Ce matin, un homme a jeté son café sur un livreur. Pour deux minutes de retard.", 0.1),
  ('s1', "« Deux minutes ! Tu sais combien je gagne en deux minutes, toi ? »", "Deux minutes ! Tu sais combien je gagne en deux minutes, toi ?", 0.1),
  ('s2', "Le livreur n'a rien dit. Il avait le genou en sang. Et dans son sac… une chaussure de femme.", "Le livreur n'a rien dit. Il avait le genou en sang. Et dans son sac... une chaussure de femme.", 0.1),
  ('s3', "Je lui ai demandé ce qui s'était passé. « Une dame est tombée dans l'escalier. Je l'ai portée jusqu'à l'ambulance. »", "Je lui ai demandé ce qui s'était passé. Une dame est tombée dans l'escalier. Je l'ai portée jusqu'à l'ambulance.", 0.1),
  ('s4', "Il a relevé son vélo. Et il est reparti. Trempé de café.", "Il a relevé son vélo. Et il est reparti. Trempé de café.", 0.1),
  ('mid', "Mais à qui était cette chaussure ?… La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Mais à qui était cette chaussure ?... La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s5', "Le soir, l'homme au café a reçu un appel de l'hôpital. Sa mère était tombée dans l'escalier. Ce matin.", "Le soir, l'homme au café a reçu un appel de l'hôpital. Sa mère était tombée dans l'escalier. Ce matin.", 0.3),
  ('s6', "« Un jeune livreur l'a portée sur quatre étages. Sans lui… elle ne serait plus là. »", "Un jeune livreur l'a portée sur quatre étages. Sans lui... elle ne serait plus là.", 0.2),
  ('s7', "Et sur la table de nuit, il manquait une chaussure.", "Et sur la table de nuit, il manquait une chaussure.", 0.3),
  ('s8', "Il a couru toute la nuit dans la ville. Pour retrouver un livreur… avec une tache de café.", "Il a couru toute la nuit dans la ville. Pour retrouver un livreur... avec une tache de café.", 0.1),
  ('s9', "À six heures du matin, il l'a trouvé. Il lui a tendu un café. Chaud, cette fois.", "À six heures du matin, il l'a trouvé. Il lui a tendu un café. Chaud, cette fois.", 0.3),
  ('end', "Le livreur lui a rendu la chaussure. Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", "Le livreur lui a rendu la chaussure. Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", 1.0),
]
CUES = [('ff', '+0', 'whoosh'), ('ff', 'jeté', 'whoosh'), ('ff', 'retard', 'bam'), ('s1', 'Deux', 'stamp'), ('s1', 'gagne', 'coin'),
        ('s2', 'rien', 'tick'), ('s2', 'sang', 'sting'), ('s2', 'chaussure', 'bam'), ('s3', 'tombée', 'whoosh'), ('s3', 'ambulance', 'beep'),
        ('s4', 'vélo', 'click'), ('s4', 'Trempé', 'pop'), ('mid', '+0', 'ding'), ('s5', 'appel', 'ring'), ('s5', 'mère', 'bam'), ('s5', 'matin', 'sting'),
        ('s6', 'quatre', 'tick'), ('s6', 'plus', 'sting'), ('s7', 'chaussure', 'bam'), ('s8', 'couru', 'steps'), ('s8', 'café', 'pop'),
        ('s9', 'trouvé', 'ding'), ('s9', 'Chaud', 'dingdong'), ('end', 'chaussure', 'ding')]
