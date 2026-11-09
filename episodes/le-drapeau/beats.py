# Le drapeau — classic « Japanese flag upside down » lie, re-skinned on the Baron's yacht. 47 questions three crew members
# about the stolen gold watch; the sailor says he turned the Japanese flag the right way up.
# Answer (not given): the Japanese flag has no upside down (a red disc in the centre) -> the sailor lied.
EMO = {'ff': 'menace', 's1': 'tension', 's1b': 'menace', 's2': 'neutre', 's3': 'neutre', 's4': 'complice', 's4b': 'mystere', 's5': 'tension', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Il avait un alibi parfait… et c'est lui qu'on a menotté.", "Il avait un alibi parfait... et c'est lui qu'on a menotté.", 0.2),
  ('s1', "Sur le yacht du Baron, sa montre en or disparaît pendant la tempête.", "Sur le yacht du Baron, sa montre en or disparaît pendant la tempête.", 0.15),
  ('s1b', "Personne n'a pu quitter le bateau : le voleur est à bord.", "Personne n'a pu quitter le bateau : le voleur est à bord.", 0.15),
  ('s2', "47 interroge l'équipage. Le cuisinier : j'étais en cuisine, je préparais des Tasty Crousty.", "Quarante-sept interroge l'équipage. Le cuisinier : j'étais en cuisine, je préparais des Tasty Crousty.", 0.15),
  ('s3', "Le mécanicien : j'étais en bas, je réparais le moteur.", "Le mécanicien : j'étais en bas, je réparais le moteur.", 0.15),
  ('s4', "Le marin : le drapeau du Japon était à l'envers, je l'ai remis à l'endroit.", "Le marin : le drapeau du Japon était à l'envers, je l'ai remis à l'endroit.", 0.2),
  ('s4b', "Trois alibis. Un seul est impossible.", "Trois alibis... Un seul est impossible.", 0.5),
  ('s5', "47 sourit… et passe les menottes au marin.", "Quarante-sept sourit... et passe les menottes au marin.", 0.3),
  ('q', "Pourquoi lui ? Réponds en un mot.", "Pourquoi lui ? Réponds en un mot.", 1.8),
]
CUES = [('ff', '+0', 'cuffs'), ('s1', '+0', 'wind'), ('s1', 'montre', 'ding'), ('s1', 'tempête', 'stamp'), ('s1b', 'bord', 'bam'), ('s2', 'cuisinier', 'pop'), ('s2', 'Tasty', 'clink'),
        ('s3', 'moteur', 'engine'), ('s4', 'drapeau', 'wind'), ('s4', 'endroit', 'pop'), ('s4b', 'impossible', 'sting'), ('s5', 'sourit', 'tick'), ('s5', 'menottes', 'cuffs'), ('q', '+0', 'ding')]
