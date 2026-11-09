# Le chien — Monsieur Énigme-style investigation (« the dog that didn't bark »), test of the « danger immédiat » intro:
# 47 handcuffed + a red countdown from frame 0. Three suspects; Brutus barks at every stranger but stayed silent that night.
# Answer (not given): le jardinier (3) — le chien le connaît, il n'a pas aboyé.
EMO = {'ff': 'menace', 's1': 'tension', 's1b': 'mystere', 's2': 'neutre', 's3': 'neutre', 's4': 'mystere', 's4b': 'menace', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "10 secondes pour trouver le vrai voleur… sinon 47 prend 20 ans.", "Dix secondes pour trouver le vrai voleur... sinon Quarante-sept prend vingt ans.", 0.2),
  ('s1', "Cette nuit, la villa du Baron a été cambriolée.", "Cette nuit, la villa du Baron a été cambriolée.", 0.1),
  ('s1b', "Le coffre est vide. Une fenêtre ouverte, des traces de pas dans l'herbe.", "Le coffre est vide. Une fenêtre ouverte, des traces de pas dans l'herbe.", 0.15),
  ('s2', "Dans le jardin, Brutus, le chien de garde. Il aboie sur tous les inconnus.", "Dans le jardin, Brutus, le chien de garde. Il aboie sur tous les inconnus.", 0.15),
  ('s3', "Trois suspects : le livreur Tasty Crousty, la nouvelle voisine, et le jardinier qui nourrit Brutus chaque matin.", "Trois suspects : le livreur Tasty Crousty, la nouvelle voisine, et le jardinier qui nourrit Brutus chaque matin.", 0.2),
  ('s4', "Mais les voisins sont formels : cette nuit, Brutus n'a pas aboyé une seule fois.", "Mais les voisins sont formels : cette nuit, Brutus n'a pas aboyé une seule fois.", 0.3),
  ('s4b', "L'inspecteur se tourne vers 47 : dix secondes.", "L'inspecteur se tourne vers Quarante-sept : dix secondes.", 0.2),
  ('q', "Qui est le voleur ? Réponds en commentaire : 1, 2 ou 3.", "Qui est le voleur ? Réponds en commentaire : un, deux ou trois.", 2.2),
]
CUES = [('ff', '+0', 'cuffs'), ('s1', 'cambriolée', 'glass'), ('s1b', 'vide', 'sting'), ('s1b', 'fenêtre', 'wind'), ('s1b', 'traces', 'steps'),
        ('s2', 'Brutus', 'bark'), ('s2', 'aboie', 'bark'), ('s3', 'livreur', 'pop'), ('s3', 'voisine', 'pop'), ('s3', 'jardinier', 'pop'),
        ('s4', 'nuit', 'crickets'), ('s4', 'aboyé', 'sting'), ('s4b', 'secondes', 'cuffs'), ('q', '+0', 'ding')]
