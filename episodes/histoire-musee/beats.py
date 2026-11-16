# « Les histoires de 47 » #1 — format récit (inspiré du FORMAT kagen0w : histoire racontée, plans courts, objets-preuves). Histoire originale.
# 47 entre chaque nuit dans un musée sans rien voler : il remet les vrais tableaux que le directeur remplaçait par des faux.
EMO = {'ff': 'tension', 's1': 'complice', 's2': 'tension', 's3': 'complice', 's4': 'tension', 's5': 'choc', 's6': 'complice',
       's7': 'choc', 's8': 'complice', 'end': 'question'}
SFX = 0.42
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.15}
SKIP_EV = []
BEATS = [
  ('ff', "Chaque nuit, 47 entrait dans ce musée… et ne volait RIEN.", "Chaque nuit, Quarante-sept entrait dans ce musée... et ne volait RIEN.", 0.2),
  ('s1', "Minuit pile, avec un grand sac. Dix minutes plus tard, il repartait.", "Minuit pile, avec un grand sac. Dix minutes plus tard, il repartait.", 0.15),
  ('s2', "Le gardien recomptait : 47 tableaux. Il n'en manquait jamais un seul.", "Le gardien recomptait : quarante-sept tableaux. Il n'en manquait jamais un seul.", 0.15),
  ('s3', "Les journaux l'ont appelé : le fantôme du musée.", "Les journaux l'ont appelé : le fantôme du musée.", 0.2),
  ('s4', "Alors une nuit, le gardien s'est caché… et il l'a vu décrocher un tableau… pour en accrocher un AUTRE à sa place.", "Alors une nuit, le gardien s'est caché... et il l'a vu décrocher un tableau... pour en accrocher un AUTRE à sa place.", 0.15),
  ('s5', "47 s'est enfui en laissant l'ancien par terre. Analysé le lendemain : c'était un FAUX.", "Quarante-sept s'est enfui en laissant l'ancien par terre. Analysé le lendemain : c'était un FAUX.", 0.2),
  ('s6', "Depuis des mois, quelqu'un remplaçait les vrais tableaux par des copies. Et 47, chaque nuit, remettait un vrai à sa place.", "Depuis des mois, quelqu'un remplaçait les vrais tableaux par des copies. Et Quarante-sept, chaque nuit, remettait un vrai à sa place.", 0.15),
  ('s7', "Le faussaire ? Le directeur du musée. Il revendait les originaux en cachette… et 47 allait les reprendre chez ses clients.", "Le faussaire ? Le directeur du musée. Il revendait les originaux en cachette... et Quarante-sept allait les reprendre chez ses clients.", 0.2),
  ('s8', "47 n'avait jamais rien volé au musée… il avait volé le voleur.", "Quarante-sept n'avait jamais rien volé au musée... il avait volé le voleur.", 0.3),
  ('end', "Et toi ? Tu l'arrêtes… ou tu le remercies ? Écris-le en commentaire.", "Et toi ? Tu l'arrêtes... ou tu le remercies ? Écris-le en commentaire.", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'RIEN', 'bam'), ('s1', 'Minuit', 'tick'), ('s1', 'repartait', 'steps'), ('s2', 'tableaux', 'pop'), ('s2', 'manquait', 'ding'),
        ('s3', 'journaux', 'paper'), ('s4', 'caché', 'click'), ('s4', 'décrocher', 'whoosh'), ('s4', 'AUTRE', 'sting'), ('s5', 'enfui', 'run'), ('s5', 'FAUX', 'stamp'),
        ('s6', 'copies', 'whoosh'), ('s6', 'vrai', 'ding'), ('s7', 'directeur', 'bam'), ('s7', 'cachette', 'cash'), ('s8', 'voleur', 'dingdong'), ('end', '+0', 'ding')]
