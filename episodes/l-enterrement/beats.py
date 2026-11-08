# L'enterrement — the classic « psychopath test » (mother's funeral) adapted: Max meets a girl at his grandmother's funeral,
# a week later his brother dies and Max smiles. Answer (not given): another funeral = a chance to see her again.
EMO = {'ff': 'menace', 's1': 'tension', 's2': 'complice', 's3': 'neutre', 's3b': 'tension', 's4': 'menace', 'q': 'mystere'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Ta place est à l'asile… si tu trouves la réponse.", "Ta place est à l'asile... si tu trouves la réponse.", 0.2),
  ('s1', "À l'enterrement de sa grand-mère, Max croise une fille qu'il n'a jamais vue.", "À l'enterrement de sa grand-mère, Max croise une fille qu'il n'a jamais vue.", 0.1),
  ('s2', "Coup de foudre. Mais elle part avant qu'il puisse lui parler.", "Coup de foudre. Mais elle part avant qu'il puisse lui parler.", 0.1),
  ('s3', "Pas de nom, pas de numéro. Personne ne la connaît.", "Pas de nom, pas de numéro. Personne ne la connaît.", 0.2),
  ('s3b', "Il la cherche partout, sur Insta, dans tout le quartier… rien.", "Il la cherche partout, sur Insta, dans tout le quartier... rien.", 0.2),
  ('s4', "Une semaine plus tard, le frère de Max meurt… et Max sourit.", "Une semaine plus tard, le frère de Max meurt... et Max sourit.", 0.4),
  ('q', "Pourquoi il sourit ? Réponds en commentaire.", "Pourquoi il sourit ? Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'chain'), ('s1', '+0', 'wind'), ('s1', 'fille', 'bubble'), ('s2', 'foudre', 'dingdong'), ('s2', 'part', 'steps'),
        ('s3', 'nom', 'buzz'), ('s3', 'numéro', 'buzz'), ('s3b', 'Insta', 'pop'), ('s3b', 'rien', 'buzz'), ('s4', 'meurt', 'sting'), ('s4', 'sourit', 'tick'), ('q', '+0', 'ding')]
