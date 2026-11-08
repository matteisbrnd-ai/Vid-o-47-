# L'hôtel — 47 pushes his car to a hotel and is ruined. Answer (not given): they're playing Monopoly.
EMO = {'ff': 'mystere', 's1': 'neutre', 's2': 'complice', 's3': 'menace', 's4': 'tension', 's5': 'choc', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}   # hook said fast
SKIP_EV = ['bam']
BEATS = [
  ('ff', "47 a poussé sa voiture jusqu'à l'hôtel… et il a tout perdu.", "Quarante-sept a poussé sa voiture jusqu'à l'hôtel... et il a tout perdu.", 0.2),
  ('s1', "Dimanche après-midi, 47 pousse sa voiture rouge. Une toute petite voiture… pas plus grande qu'un dé.", "Dimanche après-midi, Quarante-sept pousse sa voiture rouge. Une toute petite voiture... pas plus grande qu'un dé.", 0.1),
  ('s2', "Il s'arrête devant le plus bel hôtel de la ville, rue de la Paix.", "Il s'arrête devant le plus bel hôtel de la ville, rue de la Paix.", 0.1),
  ('s3', "Le propriétaire sort, tout sourire : ça fera deux mille euros.", "Le propriétaire sort, tout sourire : ça fera deux mille euros.", 0.15),
  ('s4', "47 vide ses poches. Il lui reste trois billets… un rose et deux jaunes.", "Quarante-sept vide ses poches. Il lui reste trois billets... un rose et deux jaunes.", 0.2),
  ('s5', "Il crie : je suis ruiné ! Et autour de lui… ses potes éclatent de rire.", "Il crie : je suis ruiné ! Et autour de lui... ses potes éclatent de rire.", 0.3),
  ('q', "Qu'est-ce qui se passe ? Réponds en un mot.", "Qu'est-ce qui se passe ? Réponds en un mot.", 1.8),
]
CUES = [('ff', '+0', 'engine'), ('s1', 'pousse', 'steps'), ('s1', 'toute', 'pop'), ('s2', 'hôtel', 'dingdong'), ('s3', 'sort', 'steps'),
        ('s3', 'euros', 'cash'), ('s4', 'poches', 'paper'), ('s4', 'billets', 'paper'), ('s5', 'ruiné', 'sting'), ('s5', 'rire', 'laugh'), ('q', '+0', 'ding')]
