# La neige — first « énigme d'horreur » test (original story): knocks on a chalet door, no footprints in the snow, then knocks at the upstairs window.
EMO = {'ff': 'menace', 's1': 'mystere', 's2': 'tension', 's3': 'tension', 's4': 'menace', 'q': 'mystere'}
SFX = 0.5
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.08
TEMPO_BEAT = {'ff': 1.25}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Quelqu'un frappe à sa porte… mais il n'y a AUCUNE trace dans la neige.", "Quelqu'un frappe à sa porte... mais il n'y a AUCUNE trace dans la neige.", 0.3),
  ('s1', "47 passe la nuit seul dans un chalet, perdu au milieu de la montagne.", "Quarante-sept passe la nuit seul dans un chalet, perdu au milieu de la montagne.", 0.3),
  ('s2', "Minuit pile. Toc. Toc. Toc. Quelqu'un frappe à la porte.", "Minuit pile. Toc. Toc. Toc. Quelqu'un frappe à la porte.", 0.4),
  ('s3', "Il regarde par la fenêtre. De la neige partout… mais aucune trace de pas jusqu'à la porte.", "Il regarde par la fenêtre. De la neige partout... mais aucune trace de pas jusqu'à la porte.", 0.5),
  ('s4', "Toc. Toc. Ça recommence. Mais cette fois… c'est à la fenêtre de l'étage.", "Toc. Toc. Ça recommence. Mais cette fois... c'est à la fenêtre de l'étage.", 0.6),
  ('q', "Qui frappe ? Réponds en commentaire… si t'oses.", "Qui frappe ? Réponds en commentaire... si t'oses.", 1.8),
]
CUES = [('ff', '+0', 'steps'), ('s1', '+0', 'wind'), ('s2', 'Toc', 'steps'), ('s3', 'aucune', 'sting'), ('s4', 'Toc', 'steps'), ('s4', 'étage', 'bam'), ('q', '+0', 'wind')]
