# La chambre — classic « hotel-room liar »: a man in a suit opens 47's door, « sorry, I thought it was my room ».
# New style (2026-11-09): danger intro + countdown. 47 has 10 s to understand. Answer (not given): il a FRAPPÉ — personne ne frappe à la porte de sa propre chambre.
EMO = {'ff': 'menace', 's1': 'complice', 's2': 'tension', 's3': 'neutre', 's4': 'mystere', 's5': 'tension', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Un inconnu a ouvert sa porte… 47 a 10 secondes pour comprendre qu'il est en danger.", "Un inconnu a ouvert sa porte... Quarante-sept a dix secondes pour comprendre qu'il est en danger.", 0.2),
  ('s1', "47 se cache à l'hôtel avec son butin et un Tasty Crousty. Chambre 47, évidemment.", "Quarante-sept se cache à l'hôtel avec son butin et un Tasty Crousty. Chambre quarante-sept, évidemment.", 0.15),
  ('s2', "Soudain : toc, toc, toc. La porte s'ouvre sur un homme en costume, une valise à la main.", "Soudain : toc, toc, toc. La porte s'ouvre sur un homme en costume, une valise à la main.", 0.15),
  ('s3', "Il voit 47, s'arrête : « Oh pardon ! Je me suis trompé, je croyais que c'était ma chambre. »", "Il voit Quarante-sept, s'arrête : Oh pardon ! Je me suis trompé, je croyais que c'était ma chambre.", 0.4),
  ('s4', "Il referme poliment et repart vers l'ascenseur.", "Il referme poliment et repart vers l'ascenseur.", 0.6),
  ('s5', "47 fixe la porte. Un détail cloche… trois, deux…", "Quarante-sept fixe la porte. Un détail cloche... trois, deux...", 0.4),
  ('q', "Qu'est-ce qui cloche ? Réponds en un mot.", "Qu'est-ce qui cloche ? Réponds en un mot.", 1.8),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'danger', 'stamp'), ('s1', 'butin', 'cash'), ('s1', 'Crousty', 'paper'), ('s2', '+0.79', 'stamp'), ('s2', '+0.95', 'stamp'), ('s2', '+1.13', 'stamp'), ('s2', 'porte', 'click'), ('s3', 'pardon', 'bubble'),
        ('s4', 'referme', 'click'), ('s4', 'ascenseur', 'steps'), ('s5', 'cloche', 'sting'), ('q', '+0', 'ding')]
