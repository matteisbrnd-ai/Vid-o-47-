# La page — Mme Duval accuses 47: « my 500 € note was hidden in my book, between page 47 and page 48 ». Answer (not given): pages 47 and 48 are the two sides of the same sheet.
EMO = {'ff': 'mystere', 's1': 'neutre', 's2': 'tension', 's3': 'menace', 's4': 'choc', 's5': 'amuse', 'q': 'complice'}
SFX = 0.45
SFX_COMP = 3
SFX_DUCK = 0.55
SKIP_EV = ['bam']
BEATS = [
  ('ff', "9 personnes sur 10 la croient… Pas toi ?", "Neuf personnes sur dix la croient... Pas toi ?", 0.25),
  ('s1', "Samedi, Mme Duval invite 47 à prendre le thé.", "Samedi, Madame Duval invite Quarante-sept à prendre le thé.", 0.15),
  ('s2', "Le lendemain, elle appelle la police : mon billet de 500 € a disparu !", "Le lendemain, elle appelle la police : mon billet de cinq cents euros a disparu !", 0.15),
  ('s3', "Je l'avais caché dans mon livre, entre la page 47 et la page 48.", "Je l'avais caché dans mon livre, entre la page quarante-sept et la page quarante-huit.", 0.2),
  ('s4', "Et le seul qui est venu chez moi, c'est lui !", "Et le seul qui est venu chez moi, c'est lui !", 0.3),
  ('s5', "Le policier réfléchit deux secondes… et c'est elle qu'il embarque.", "Le policier réfléchit deux secondes... et c'est elle qu'il embarque.", 0.3),
  ('q', "Pourquoi elle ment ? Réponds en commentaire.", "Pourquoi elle ment ? Réponds en commentaire.", 1.8),
]
CUES = [('ff', '+0', 'page'), ('ff', '+0.25', 'bam'), ('s1', 'thé', 'clink'), ('s5', 'elle', 'sting'), ('s1', '+0', 'ticktock'), ('s2', 'appelle', 'ring'), ('s2', 'disparu', 'sting'),
        ('s3', 'livre', 'page'), ('s4', 'lui', 'stamp'), ('s5', 'réfléchit', 'ticktock'), ('s5', 'embarque', 'cuffs'), ('s5', 'embarque', 'chain'), ('q', '+0', 'page'), ('q', '+0', 'ding')]
