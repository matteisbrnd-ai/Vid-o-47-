# « Dans la bande de 47… » #1 (hors-série, idée du créateur 22/11) — format « Dans ma ville » (règle magique → exemples → famille → signes → preuve → sacrifice → dernière ligne)
# avec une règle et une histoire 100 % originales : chaque mensonge vole une couleur ; le Baron est tout gris parce qu'il a menti toute sa vie pour protéger 47 bébé.
EMO = {'ff': 'mystere', 's1': 'amuse', 's2': 'amuse', 's3': 'mystere', 's4': 'tension', 's5': 'tension', 'mid': 'question', 's6': 'tension', 's7': 'choc', 's8': 'tension',
       's9': 'tension', 's10': 'choc', 's11': 'tension', 's12': 'tension', 's13': 'choc', 's14': 'complice', 'end': 'mystere'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.08}
TEMPO = 1.06
SKIP_EV = []
BEATS = [
  ('ff', "Dans la bande de 47, on n'a pas le droit de mentir. Chaque mensonge te vole une couleur.", "Dans la bande de Quarante-sept, on n'a pas le droit de mentir. Chaque mensonge te vole une couleur.", 0.1),
  ('s1', "Rico a menti sur son âge. Son bonnet bleu est devenu gris. En une seconde.", "Rico a menti sur son âge. Son bonnet bleu est devenu gris. En une seconde.", 0.1),
  ('s2', "Lola a juré qu'elle n'avait pas peur du noir. Ses joues sont restées blanches. Pour toujours.", "Lola a juré qu'elle n'avait pas peur du noir. Ses joues sont restées blanches. Pour toujours.", 0.1),
  ('s3', "Ici, tout le monde voit tes mensonges. Et le Baron… il est entièrement gris.", "Ici, tout le monde voit tes mensonges. Et le Baron... il est entièrement gris.", 0.1),
  ('s4', "Le plus grand menteur de la ville. Moi, je n'ai jamais menti. Pas une fois.", "Le plus grand menteur de la ville. Moi, je n'ai jamais menti. Pas une fois.", 0.1),
  ('s5', "Je le déteste depuis que je suis petit. Et lui, il me regarde toujours… comme s'il attendait quelque chose.", "Je le déteste depuis que je suis petit. Et lui, il me regarde toujours... comme s'il attendait quelque chose.", 0.1),
  ('mid', "Pourquoi il est tout gris ?… Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Pourquoi il est tout gris ?... Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s6', "Hier, Bob est revenu avec une photo volée chez le Baron. La bande… il y a quinze ans.", "Hier, Bob est revenu avec une photo volée chez le Baron. La bande... il y a quinze ans.", 0.1),
  ('s7', "Au milieu, un garçon plein de couleurs. Le Baron. Et dans ses bras… un bébé avec un bonnet orange.", "Au milieu, un garçon plein de couleurs. Le Baron. Et dans ses bras... un bébé avec un bonnet orange.", 0.15),
  ('s8', "Derrière la photo, un carnet. Son écriture. Une liste de mensonges.", "Derrière la photo, un carnet. Son écriture. Une liste de mensonges.", 0.1),
  ('s9', "Numéro un, à la police : « C'est moi qui ai volé. Pas le petit. »", "Numéro un, à la police : C'est moi qui ai volé. Pas le petit.", 0.1),
  ('s10', "Numéro deux, à l'orphelinat : « Ce bébé n'a pas de famille. Laissez-le à la bande. »", "Numéro deux, à l'orphelinat : Ce bébé n'a pas de famille. Laissez-le à la bande.", 0.1),
  ('s11', "Le dernier, à moi : « Je suis ton ennemi. » Pour que personne ne sache que j'étais son petit frère.", "Le dernier, à moi : Je suis ton ennemi. Pour que personne ne sache que j'étais son petit frère.", 0.2),
  ('s12', "Ce soir, la police a frappé au garage. Ils cherchaient le Baron. Il était caché… derrière moi.", "Ce soir, la police a frappé au garage. Ils cherchaient le Baron. Il était caché... derrière moi.", 0.1),
  ('s13', "« Tu l'as vu ? » Pour la première fois de ma vie, j'ai menti. « Non. » Et mon bonnet est devenu gris.", "Tu l'as vu ? Pour la première fois de ma vie, j'ai menti. Non. Et mon bonnet est devenu gris.", 0.2),
  ('s14', "Derrière moi, le Baron a souri. Sur sa joue… une petite tache orange.", "Derrière moi, le Baron a souri. Sur sa joue... une petite tache orange.", 0.3),
  ('end', "Dans la bande de 47, un mensonge te vole une couleur. Personne ne m'avait dit… où elle allait.", "Dans la bande de Quarante-sept, un mensonge te vole une couleur. Personne ne m'avait dit... où elle allait.", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'mentir', 'stamp'), ('ff', 'couleur', 'whoosh'), ('s1', 'âge', 'pop'), ('s1', 'gris', 'whoosh'), ('s1', 'seconde', 'ding'), ('s2', 'noir', 'pop'), ('s2', 'blanches', 'whoosh'),
        ('s3', 'Baron', 'sting'), ('s3', 'gris', 'bam'), ('s4', 'jamais', 'ding'), ('s5', 'déteste', 'stamp'), ('s5', 'attendait', 'tick'), ('mid', '+0', 'ding'), ('s6', 'photo', 'paper'), ('s6', 'quinze', 'sting'),
        ('s7', 'couleurs', 'ding'), ('s7', 'orange', 'sting'), ('s8', 'carnet', 'paper'), ('s8', 'mensonges', 'sting'), ('s9', 'volé', 'stamp'), ('s10', 'bande', 'stamp'), ('s11', 'ennemi', 'stamp'), ('s11', 'frère', 'bam'),
        ('s12', 'frappé', 'bam'), ('s12', 'derrière', 'sting'), ('s13', 'menti', 'sting'), ('s13', 'gris', 'whoosh'), ('s14', 'souri', 'ding'), ('s14', 'orange', 'dingdong'), ('end', 'allait', 'sting')]
