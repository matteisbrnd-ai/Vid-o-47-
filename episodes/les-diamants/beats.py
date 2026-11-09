# Les diamants (v2, « danger immédiat » intro + countdown, Monsieur Énigme-style numbered suspects 1 = 47, 2 = Lola) — classic « the suspect knew a detail nobody told her » riddle: the Baron's safe was emptied, the inspector
# never says what was inside, Lola shouts « j'ai jamais touché à ses DIAMANTS ». Answer (not given): personne n'avait dit
# que c'étaient des diamants.
EMO = {'ff': 'menace', 's1': 'tension', 's1b': 'menace', 's2': 'mystere', 's3': 'complice', 's4': 'choc', 's5': 'tension', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "10 secondes pour trouver qui ment… sinon les deux vont en prison.", "Dix secondes pour trouver qui ment... sinon les deux vont en prison.", 0.2),
  ('s1', "Cette nuit, le coffre du Baron a été vidé. Deux suspects : 47 et Lola.", "Cette nuit, le coffre du Baron a été vidé. Deux suspects : Quarante-sept et Lola.", 0.15),
  ('s1b', "Le Baron est furieux : il veut un coupable avant midi.", "Le Baron est furieux : il veut un coupable avant midi.", 0.25),
  ('s2', "L'inspecteur : je ne vous dirai pas ce qu'il y avait dans le coffre.", "L'inspecteur : je ne vous dirai pas ce qu'il y avait dans le coffre.", 0.2),
  ('s3', "47 : moi, j'étais chez moi, toute la nuit sur GTA 6.", "Quarante-sept : moi, j'étais chez moi, toute la nuit sur Gé-Té-A six.", 0.2),
  ('s4', "Lola : moi, j'ai jamais touché à ses diamants !", "Lola : moi, j'ai jamais touché à ses diamants !", 0.9),
  ('s5', "L'inspecteur a déjà compris. Et toi ? Trois… deux…", "L'inspecteur a déjà compris. Et toi ? Trois... deux...", 0.4),
  ('q', "Qui ment ? Réponds : 1 ou 2.", "Qui ment ? Réponds : un ou deux.", 2.4),
]
CUES = [('ff', '+0', 'cuffs'), ('s1', 'vidé', 'stamp'), ('s1', 'Lola', 'pop'), ('s1b', 'furieux', 'buzz'), ('s2', 'coffre', 'clink'), ('s3', 'Gé', 'beep'),
        ('s4', 'diamants', 'pop'), ('s5', 'compris', 'sting'), ('s5', 'toi', 'pop'), ('s5', 'Trois', 'tick'), ('s5', 'deux', 'tick'), ('q', '+0', 'ding')]
