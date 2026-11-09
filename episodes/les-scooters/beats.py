# Les scooters — classic « the slowest horse wins » riddle re-skinned: the Baron's garage goes to the one whose scooter
# arrives LAST at the lighthouse. Both crawl for hours; 47 whispers two words and both race flat out.
# Answer (not given): they swap scooters (« on échange ») — each pushes the other's scooter to arrive first.
EMO = {'ff': 'menace', 's1': 'tension', 's2': 'neutre', 's3': 'amuse', 's3b': 'amuse', 's4': 'excite', 's5': 'complice', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Le plus lent gagnait le magot… et 47 a foncé à fond.", "Le plus lent gagnait le magot... et Quarante-sept a foncé à fond.", 0.2),
  ('s1', "Le Baron va léguer son garage à un seul héritier : 47 ou Rico.", "Le Baron va léguer son garage à un seul héritier : Quarante-sept ou Rico.", 0.15),
  ('s2', "Sa règle : course de scooters jusqu'au phare. Le scooter qui arrive en DERNIER gagne tout.", "Sa règle : course de scooters jusqu'au phare. Le scooter qui arrive en dernier gagne tout.", 0.2),
  ('s3', "Alors ils roulent au pas… pendant des heures. Personne ne veut arriver.", "Alors ils roulent au pas... pendant des heures. Personne ne veut arriver.", 0.15),
  ('s3b', "Le soleil se couche. Rico finit sa troisième Ciao Energy. Toujours personne au phare.", "Le soleil se couche. Rico finit sa troisième Tchao Énergie. Toujours personne au phare.", 0.25),
  ('s4', "Puis 47 glisse deux mots à Rico… et les deux foncent à fond vers le phare.", "Puis Quarante-sept glisse deux mots à Rico... et les deux foncent à fond vers le phare.", 0.3),
  ('s5', "Le Baron sourit : règle respectée.", "Le Baron sourit : règle respectée.", 0.3),
  ('q', "Qu'est-ce qu'il a dit ? Réponds en un mot.", "Qu'est-ce qu'il a dit ? Réponds en un mot.", 1.8),
]
CUES = [('ff', '+0', 'engine'), ('s1', 'garage', 'stamp'), ('s2', 'phare', 'ding'), ('s2', 'DERNIER', 'pop'), ('s3', 'pas', 'ticktock'), ('s3', 'heures', 'crickets'),
        ('s3b', 'Ciao', 'clink'), ('s4', 'mots', 'bubble'), ('s4', 'foncent', 'engine'), ('s5', 'règle', 'dingdong'), ('q', '+0', 'ding')]
