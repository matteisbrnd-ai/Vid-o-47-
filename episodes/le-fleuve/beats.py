# Format « avec solution » (≤ 62 s). Classic riddle « la largeur du fleuve » (Meister Knobel, 115K): measure a river without crossing it, no tool.
# Answer: hand as a visor lined up on the far bank, turn round without moving the head, the visor now points at a spot on his own bank → count the steps.
EMO = {'ff': 'excite', 's1': 'complice', 's2': 'tension', 's3': 'tension', 'q': 'question', 'c1': 'complice', 'c2': 'amuse',
       'sol1': 'excite', 'sol2': 'neutre', 'sol3': 'excite', 'end': 'complice'}
SFX = 0.42
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.3}
SKIP_EV = []
BEATS = [
  ('ff', "PLOUF ! Lancé au hasard… raté. 47 doit mesurer ce fleuve, sans le traverser et sans AUCUN mètre !", "PLOUF ! Lancé au hasard... raté. Quarante-sept doit mesurer ce fleuve, sans le traverser et sans AUCUN mètre !", 0.2),
  ('s1', "En face : le coffre du Baron. Son grappin a 30 mètres de corde, pas un de plus.", "En face : le coffre du Baron. Son grappin a trente mètres de corde, pas un de plus.", 0.15),
  ('s2', "Si le fleuve est trop large, le grappin tombe à l'eau… et les gardes l'entendent.", "Si le fleuve est trop large, le grappin tombe à l'eau... et les gardes l'entendent.", 0.15),
  ('s3', "Pas de mètre, pas de pont, pas de bateau. Juste lui… et ses pieds.", "Pas de mètre, pas de pont, pas de bateau. Juste lui... et ses pieds.", 0.3),
  ('q', "Comment il mesure le fleuve ?", "Comment il mesure le fleuve ?", 0.6),
  ('c1', "Écris ta réponse en commentaire avant la solution.", "Écris ta réponse en commentaire avant la solution.", 0.1),
  ('c2', "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", "Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres.", 0.3),
  ('sol1', "La solution : il met sa main en visière, pile sur le bord d'en face.", "La solution : il met sa main en visière, pile sur le bord d'en face.", 0.15),
  ('sol2', "Sans bouger la tête, il se retourne : sa main vise maintenant un point de SON côté.", "Sans bouger la tête, il se retourne : sa main vise maintenant un point de SON côté.", 0.15),
  ('sol3', "Il compte ses pas jusqu'à ce point : environ 25 mètres. Le fleuve fait pareil… cette fois, la corde suffit !", "Il compte ses pas jusqu'à ce point : environ vingt-cinq mètres. Le fleuve fait pareil... cette fois, la corde suffit !", 0.2),
  ('end', "T'avais trouvé ?", "T'avais trouvé ?", 1.2),
]
CUES = [('ff', '+0', 'bam'), ('ff', 'raté', 'sting'), ('s1', 'coffre', 'cash'), ('s1', 'grappin', 'whoosh'), ('s2', 'eau', 'pop'), ('s2', 'gardes', 'sting'), ('s3', 'mètre', 'buzz'), ('s3', 'pont', 'buzz'), ('s3', 'bateau', 'buzz'),
        ('q', '+0', 'ding'), ('c1', '+0', 'paper'), ('sol1', 'solution', 'dingdong'), ('sol2', 'retourne', 'whoosh'), ('sol3', 'pas', 'pop'), ('sol3', 'suffit', 'cash'), ('end', '+0', 'ding')]
