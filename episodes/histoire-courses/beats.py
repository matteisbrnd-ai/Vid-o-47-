# « Les histoires de 47 » #5 — « Les courses de Mamie Lucette ». Histoire originale (émotion + karma). Hook = mystère (qui paie ?), question au milieu = POURQUOI
# (on voit que c'est 47, pas la raison), fin : le chocolat volé 20 ans plus tôt, payé par Lucette → 47 rembourse en secret. Phrase finale : « une chance ».
EMO = {'ff': 'tension', 's1': 'complice', 's2': 'complice', 's3': 'complice', 's4': 'tension', 's5': 'tension', 'mid': 'question', 's6': 'tension', 's7': 'tension',
       's8': 'tension', 's9': 'complice', 's10': 'choc', 's11': 'complice', 's12': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.15}
TEMPO = 1.06
SKIP_EV = []
BEATS = [
  ('ff', "Pendant trois ans, quelqu'un a payé les courses de Mamie Lucette. En secret.", "Pendant trois ans, quelqu'un a payé les courses de Mamie Lucette. En secret.", 0.1),
  ('s1', "Chaque samedi, à la caisse, la même phrase : « C'est déjà réglé, madame. »", "Chaque samedi, à la caisse, la même phrase : C'est déjà réglé, madame.", 0.1),
  ('s2', "Son fils ? Impossible. Il ne l'appelait même plus.", "Son fils ? Impossible. Il ne l'appelait même plus.", 0.1),
  ('s3', "Sa voisine ? Elle lui devait encore vingt euros.", "Sa voisine ? Elle lui devait encore vingt euros.", 0.15),
  ('s4', "Alors un samedi, Lucette s'est cachée derrière les céréales.", "Alors un samedi, Lucette s'est cachée derrière les céréales.", 0.1),
  ('s5', "Un homme en bonnet orange a glissé cent euros à la caissière… et il est reparti sans un mot.", "Un homme en bonnet orange a glissé cent euros à la caissière... et il est reparti sans un mot.", 0.15),
  ('mid', "Mais pourquoi il fait ça ? Écris ta théorie en commentaire !", "Mais pourquoi il fait ça ? Écris ta théorie en commentaire !", 0.2),
  ('s6', "Elle l'a rattrapé sur le parking : « Je vous connais ? »", "Elle l'a rattrapé sur le parking : Je vous connais ?", 0.1),
  ('s7', "Il a sorti de sa poche un vieux papier de chocolat. Plié en quatre.", "Il a sorti de sa poche un vieux papier de chocolat. Plié en quatre.", 0.15),
  ('s8', "Vingt ans plus tôt, un gamin affamé volait un chocolat dans ce magasin. Le vigile l'a attrapé par le bras.", "Vingt ans plus tôt, un gamin affamé volait un chocolat dans ce magasin. Le vigile l'a attrapé par le bras.", 0.1),
  ('s9', "Une dame a dit : « Laissez-le, je paye. » Et au petit, tout bas : « Tu me rendras quand tu seras grand. »", "Une dame a dit : Laissez-le, je paye. Et au petit, tout bas : Tu me rendras quand tu seras grand.", 0.2),
  ('s10', "Cette dame, c'était Lucette. Et ce gamin… c'était 47.", "Cette dame, c'était Lucette. Et ce gamin... c'était Quarante-sept.", 0.25),
  ('s11', "Lucette a sorti un chocolat de son sac : « Alors… on est quittes ? »", "Lucette a sorti un chocolat de son sac : Alors... on est quittes ?", 0.2),
  ('s12', "47 a souri : « Pas encore. Ce jour-là, vous ne m'avez pas payé un chocolat… vous m'avez donné une chance. »", "Quarante-sept a souri : Pas encore. Ce jour-là, vous ne m'avez pas payé un chocolat... vous m'avez donné une chance.", 0.35),
  ('end', "Et toi, quelqu'un t'a déjà aidé sans rien demander ? Raconte-le en commentaire.", "Et toi, quelqu'un t'a déjà aidé sans rien demander ? Raconte-le en commentaire.", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'payé', 'cash'), ('ff', 'secret', 'bam'), ('s1', 'caisse', 'beep'), ('s1', 'réglé', 'ding'), ('s2', 'fils', 'pop'), ('s2', 'appelait', 'buzz'),
        ('s3', 'voisine', 'pop'), ('s3', 'euros', 'cash'), ('s4', 'cachée', 'whoosh'), ('s4', 'céréales', 'pop'), ('s5', 'orange', 'sting'), ('s5', 'cent', 'cash'), ('s5', 'reparti', 'steps'),
        ('mid', '+0', 'ding'), ('s6', 'parking', 'steps'), ('s6', 'connais', 'sting'), ('s7', 'chocolat', 'paper'), ('s7', 'quatre', 'paper'), ('s8', 'volait', 'whoosh'), ('s8', 'bras', 'bam'),
        ('s9', 'paye', 'cash'), ('s9', 'grand', 'ding'), ('s10', 'Lucette', 'sting'), ('s10', 'gamin', 'bam'), ('s11', 'chocolat', 'pop'), ('s11', 'quittes', 'ding'), ('s12', 'chance', 'dingdong'), ('end', '+0', 'ding')]
