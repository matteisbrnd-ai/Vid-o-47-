# La chaussure — own script of the classic « one shoe in the hotel safe » habit. Answer (not given): pour ne jamais oublier ce qu'il y a
# dans le coffre — sans sa chaussure elle ne peut pas partir, donc elle ouvre forcément le coffre.
EMO = {'ff': 'excite', 's1': 'neutre', 's2': 'question', 's3': 'complice', 's4': 'tension', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Elle enferme UNE chaussure dans le coffre-fort… et jamais l'autre !", "Elle enferme UNE chaussure dans le coffre-fort... et jamais l'autre !", 0.2),
  ('s1', "Lola, la cousine de 47, dort à l'hôtel presque toutes les semaines.", "Lola, la cousine de Quarante-sept, dort à l'hôtel presque toutes les semaines.", 0.15),
  ('s2', "Chaque soir, elle range son passeport et son téléphone dans le coffre de la chambre… et une seule chaussure.", "Chaque soir, elle range son passeport et son téléphone dans le coffre de la chambre... et une seule chaussure.", 0.15),
  ('s3', "Le matin, elle ouvre le coffre, remet sa chaussure, et part. Chez elle ? Elle ne le fait jamais.", "Le matin, elle ouvre le coffre, remet sa chaussure, et part. Chez elle ? Elle ne le fait jamais.", 0.25),
  ('s4', "Ce n'est pas une manie. C'est une astuce. Laquelle ?", "Ce n'est pas une manie. C'est une astuce. Laquelle ?", 0.3),
  ('q', "Réponds en commentaire.", "Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'clink'), ('s1', 'hôtel', 'dingdong'), ('s2', 'passeport', 'paper'), ('s2', 'téléphone', 'beep'), ('s2', 'chaussure', 'stamp'), ('s3', 'ouvre', 'beep'),
        ('s3', 'part', 'steps'), ('s3', 'jamais', 'buzz'), ('s4', 'astuce', 'ding'), ('q', '+0', 'ding')]
