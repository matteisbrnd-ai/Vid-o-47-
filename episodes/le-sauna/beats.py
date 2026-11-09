# Le sauna — classic « vanished weapon » riddle (block of ice) re-skinned: the Baron is knocked out in his sauna,
# only his cook came in with a champagne bucket; no weapon found, just a puddle by the hot stove.
# 2026-11-09 remake: « danger immédiat » intro (47 locked in the 90 °C sauna + red countdown from frame 0), loops at the end.
# Answer (not given): un bloc de glace (il a fondu à côté du poêle). The ice is NEVER shown.
EMO = {'ff': 'menace', 's1': 'mystere', 's1b': 'tension', 's2': 'choc', 's3': 'tension', 's3b': 'neutre', 's4': 'mystere', 's5': 'menace', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Enfermé dans un sauna à 90 °C… 47 a 10 secondes pour trouver l'arme.", "Enfermé dans un sauna à quatre-vingt-dix degrés... Quarante-sept a dix secondes pour trouver l'arme.", 0.2),
  ('s1', "Le Baron se détend dans son sauna, une Ciao Energy à la main.", "Le Baron se détend dans son sauna, une Tchao Énergie à la main.", 0.1),
  ('s1b', "Une seule personne entre : son cuisinier, avec un seau à champagne.", "Une seule personne entre : son cuisinier, avec un seau à champagne.", 0.2),
  ('s2', "Dix minutes plus tard : BAM. Le Baron est retrouvé assommé, une bosse sur la tête.", "Dix minutes plus tard : BAM. Le Baron est retrouvé assommé, une bosse sur la tête.", 0.2),
  ('s3', "On fouille le cuisinier, le sauna, le seau : aucune arme. Rien de lourd.", "On fouille le cuisinier, le sauna, le seau : aucune arme. Rien de lourd.", 0.15),
  ('s3b', "Le cuisinier jure : « J'ai juste servi le champagne, bien frais. »", "Le cuisinier jure : j'ai juste servi le champagne, bien frais.", 0.2),
  ('s4', "Juste une flaque d'eau près du poêle brûlant.", "Juste une flaque d'eau... près du poêle brûlant.", 0.2),
  ('s5', "Le Baron enferme 47 dans le sauna : tant qu'il n'a pas trouvé, il ne sort pas. Trois… deux…", "Le Baron enferme Quarante-sept dans le sauna : tant qu'il n'a pas trouvé, il ne sort pas. Trois... deux...", 0.2),
  ('q', "Avec quoi il l'a assommé ? Réponds en un mot.", "Avec quoi il l'a assommé ? Réponds en un mot.", 1.4),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'secondes', 'ticktock'), ('s1', 'Ciao', 'clink'), ('s1b', 'entre', 'steps'), ('s1b', 'seau', 'clink'), ('s2', 'BAM', 'bam'), ('s3', 'fouille', 'rattle'),
        ('s3', 'aucune', 'buzz'), ('s3b', 'champagne', 'clink'), ('s4', 'flaque', 'bubble'), ('s4', 'brûlant', 'flicker'), ('s5', 'enferme', 'click'), ('s5', 'Trois', 'tick'), ('s5', 'deux', 'tick'), ('q', '+0', 'ding')]
