# Le roi — Galagade logic riddle (classic « vraie → pendu / fausse → décapité », kid-safe): 47 on a trapdoor above a lion pit,
# one sentence: true -> dungeon for life, false -> lions. He says « Je finirai dans la fosse aux lions. » -> paradox, the king
# (who always keeps his word) must free him. Answer NOT in the video. Intro = « danger immédiat » + countdown from frame 0.
EMO = {'ff': 'menace', 's1': 'tension', 's1b': 'menace', 's2': 'menace', 's2b': 'mystere', 's3': 'tension', 's4': 'choc', 's5': 'complice', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Une seule phrase pour sauver sa vie… et il a 10 secondes.", "Une seule phrase pour sauver sa vie... et il a dix secondes.", 0.2),
  ('s1', "Le roi a capturé 47. Mais il lui laisse une chance : dire une seule phrase.", "Le roi a capturé Quarante-sept. Mais il lui laisse une chance : dire une seule phrase.", 0.15),
  ('s1b', "47 est debout sur une trappe. Juste en dessous : la fosse aux lions.", "Quarante-sept est debout sur une trappe. Juste en dessous : la fosse aux lions.", 0.15),
  ('s2', "Si la phrase est vraie : le cachot à vie. Si elle est fausse : la fosse aux lions.", "Si la phrase est vraie : le cachot à vie. Si elle est fausse : la fosse aux lions.", 0.2),
  ('s2b', "Et le roi tient toujours parole. C'est la loi de l'arène.", "Et le roi tient toujours parole. C'est la loi de l'arène.", 0.2),
  ('s3', "Le public retient son souffle. 47 réfléchit… trois, deux, un…", "Le public retient son souffle. Quarante-sept réfléchit... trois... deux... un...", 0.3),
  ('s4', "Il dit sa phrase… et le roi devient tout blanc.", "Il dit sa phrase... et le roi devient tout blanc.", 0.3),
  ('s5', "Il est obligé de le libérer.", "Il est obligé de le libérer.", 0.4),
  ('q', "Qu'est-ce qu'il a dit ? Réponds en commentaire.", "Qu'est-ce qu'il a dit ? Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'ticktock'), ('ff', 'vie', 'sting'), ('s1', 'roi', 'dingdong'), ('s1', 'chance', 'ding'), ('s1b', 'trappe', 'chain'), ('s1b', 'lions', 'bam'),
        ('s2', 'vraie', 'pop'), ('s2', 'cachot', 'chain'), ('s2', 'fausse', 'pop'), ('s2', 'lions', 'bam'), ('s2b', 'parole', 'stamp'),
        ('s3', 'souffle', 'wind'), ('s3', 'trois', 'tick'), ('s3', 'deux', 'tick'), ('s3', 'un', 'tick'), ('s4', 'blanc', 'sting'), ('s5', 'libérer', 'laugh'), ('q', '+0', 'ding')]
