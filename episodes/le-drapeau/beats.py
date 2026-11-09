# Le drapeau (v2, 2026-11-09: « danger immédiat » intro: 47 on the plank + countdown, numbered suspects, no reveal) — classic « Japanese flag upside down » lie, re-skinned on the Baron's yacht. 47 questions three crew members
# about the stolen gold watch; the sailor says he turned the Japanese flag the right way up.
# Answer (not given): the Japanese flag has no upside down (a red disc in the centre) -> the sailor lied.
EMO = {'ff': 'menace', 's1': 'tension', 's1b': 'menace', 's2': 'neutre', 's3': 'neutre', 's4': 'complice', 's4b': 'mystere', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "10 secondes pour trouver le voleur… sinon 47 saute aux requins.", "Dix secondes pour trouver le voleur... sinon Quarante-sept saute aux requins.", 0.2),
  ('s1', "Sur le yacht du Baron, sa montre en or disparaît pendant la tempête.", "Sur le yacht du Baron, sa montre en or disparaît pendant la tempête.", 0.15),
  ('s1b', "Le Baron accuse 47. Sa seule chance : trouver le vrai voleur.", "Le Baron accuse Quarante-sept. Sa seule chance : trouver le vrai voleur.", 0.15),
  ('s2', "47 interroge l'équipage. Le cuisinier : j'étais en cuisine, je préparais des Tasty Crousty.", "Quarante-sept interroge l'équipage. Le cuisinier : j'étais en cuisine, je préparais des Tasty Crousty.", 0.15),
  ('s3', "Le mécanicien : j'étais en bas, je réparais le moteur.", "Le mécanicien : j'étais en bas, je réparais le moteur.", 0.15),
  ('s4', "Le marin : le drapeau du Japon était à l'envers, je l'ai remis à l'endroit.", "Le marin : le drapeau du Japon était à l'envers, je l'ai remis à l'endroit.", 0.2),
  ('s4b', "Trois alibis. Un seul est impossible.", "Trois alibis... Un seul est impossible.", 0.5),
  ('q', "Qui est le voleur ? Réponds en commentaire : 1, 2 ou 3.", "Qui est le voleur ? Réponds en commentaire : un, deux ou trois.", 2.2),
]
CUES = [('ff', '+0', 'wind'), ('ff', 'requins', 'sting'), ('s1', '+0', 'wind'), ('s1', 'montre', 'ding'), ('s1', 'tempête', 'stamp'), ('s1b', 'accuse', 'stamp'), ('s2', 'cuisinier', 'pop'), ('s2', 'Tasty', 'clink'),
        ('s3', 'moteur', 'engine'), ('s4', 'drapeau', 'wind'), ('s4', 'endroit', 'pop'), ('s4b', 'impossible', 'sting'), ('q', '+0', 'ding')]
