# Les sacs (format « question → commentaire → solution expliquée », max 1 min). Same riddle as episodes/les-sacs, with the solution.
EMO = {'ff': 'excite', 's1': 'tension', 's2': 'neutre', 's3': 'neutre', 's4': 'menace', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'neutre', 'sol2': 'neutre', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.35}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = ['bam']
BEATS = [
  ('ff', "Ce voleur a trouvé LE seul sac de fausses pièces… en le pesant une seule fois !", "Ce voleur a trouvé LE seul sac de fausses pièces... en le pesant une seule fois !", 0.2),
  ('s1', "Le Baron surprend 47 dans son coffre-fort, et lui propose un marché.", "Le Baron surprend Quarante-sept dans son coffre-fort, et lui propose un marché.", 0.1),
  ('s2', "Dix sacs de pièces d'or. Dans un seul sac, toutes les pièces sont fausses.", "Dix sacs de pièces d'or. Dans un seul sac, toutes les pièces sont fausses.", 0.1),
  ('s3', "Une vraie pièce pèse dix grammes. Une fausse, neuf.", "Une vraie pièce pèse dix grammes. Une fausse, neuf.", 0.1),
  ('s4', "Une balance, une seule pesée. S'il trouve le faux sac, il est libre.", "Une balance, une seule pesée. S'il trouve le faux sac, il est libre.", 0.15),
  ('q', "Comment il fait ?", "Comment il fait ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : il prend une pièce du sac 1, deux du sac 2, trois du sac 3… jusqu'à dix du sac 10.", "La solution : il prend une pièce du sac un, deux du sac deux, trois du sac trois... jusqu'à dix du sac dix.", 0.1),
  ('sol2', "Si tout était vrai, ça ferait 550 grammes.", "Si tout était vrai, ça ferait cinq cent cinquante grammes.", 0.1),
  ('sol3', "La balance affiche 543. Il manque 7 grammes… donc le faux sac, c'est le numéro 7 !", "La balance affiche cinq cent quarante-trois. Il manque sept grammes... donc le faux sac, c'est le numéro sept !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'cash'), ('s1', 'surprend', 'sting'), ('s2', 'fausses', 'buzz'), ('s3', 'vraie', 'pop'), ('s3', 'neuf', 'pop'), ('s4', 'seule', 'stamp'),
        ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('sol1', 'sac', 'rattle'), ('sol2', 'grammes', 'beep'), ('sol3', '543|quarante', 'beep'), ('sol3', 'numéro', 'bam'), ('end', '+0', 'ding')]
