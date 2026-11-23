# Histoire du matin (lun. 23/11) — « Les centimes du vieux monsieur ». Histoire originale, émotion + karma, racontée par 47 (« moi »).
# Système de la référence : injustice dès 0 s, un détail nouveau toutes les 2–3 s, question ouverte (pourquoi des centimes ? pourquoi la regarder ?),
# promesse « tu t'attends pas à la fin » (étiquette à 0 s + voix au mid), révélation à ~75 % (la petite fille de 2002, c'était elle), dernière image forte.
EMO = {'ff': 'tension', 's1': 'tension', 's2': 'tension', 's3': 'mystere', 's4': 'mystere', 's5': 'tension', 'mid': 'question', 's6': 'mystere',
       's7': 'mystere', 's8': 'choc', 's9': 'complice', 's10': 'complice', 'end': 'complice'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Chaque matin, ce vieux monsieur payait sa baguette en pièces d'un centime. Et ce matin, la boulangère l'a humilié devant tout le monde.", "Chaque matin, ce vieux monsieur payait sa baguette en pièces d'un centime. Et ce matin, la boulangère l'a humilié devant tout le monde.", 0.1),
  ('s1', "« Vos centimes, gardez-les, papy ! Y a des gens qui bossent, ici ! »", "Vos centimes, gardez-les, papy ! Y a des gens qui bossent, ici !", 0.1),
  ('s2', "Toute la file a rigolé. Lui, il a juste souri… et il a ramassé ses pièces. Une par une.", "Toute la file a rigolé. Lui, il a juste souri... et il a ramassé ses pièces. Une par une.", 0.1),
  ('s3', "Je l'ai rattrapé dehors. « Pourquoi des centimes, monsieur ? »", "Je l'ai rattrapé dehors. Pourquoi des centimes, monsieur ?", 0.1),
  ('s4', "Il m'a dit : « Parce que compter, ça prend du temps. Et je veux la regarder… le plus longtemps possible. »", "Il m'a dit : Parce que compter, ça prend du temps. Et je veux la regarder... le plus longtemps possible.", 0.2),
  ('s5', "Le lendemain, il n'est pas venu. Ni le jour d'après. Ni la semaine d'après.", "Le lendemain, il n'est pas venu. Ni le jour d'après. Ni la semaine d'après.", 0.1),
  ('mid', "Pourquoi il voulait la regarder ?… La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Pourquoi il voulait la regarder ?... La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s6', "Un matin, un notaire est entré dans la boulangerie. Avec une vieille boîte en fer.", "Un matin, un notaire est entré dans la boulangerie. Avec une vieille boîte en fer.", 0.1),
  ('s7', "Dedans : des milliers de centimes. Et une photo. Une petite fille, devant cette boulangerie, qui tend son goûter à un monsieur assis par terre.", "Dedans : des milliers de centimes. Et une photo. Une petite fille, devant cette boulangerie, qui tend son goûter à un monsieur assis par terre.", 0.2),
  ('s8', "La petite fille… c'était elle.", "La petite fille... c'était elle.", 0.4),
  ('s9', "Au dos : « Tu m'as donné à manger quand je n'avais plus rien. Je suis revenu chaque matin… pour te voir grandir. »", "Au dos : Tu m'as donné à manger quand je n'avais plus rien. Je suis revenu chaque matin... pour te voir grandir.", 0.3),
  ('s10', "Elle a pleuré devant toute la file. Et cette fois… personne n'a rigolé.", "Elle a pleuré devant toute la file. Et cette fois... personne n'a rigolé.", 0.3),
  ('end', "Depuis, sur son comptoir, il y a un pot de centimes. Pour ceux qui n'ont plus rien. Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", "Depuis, sur son comptoir, il y a un pot de centimes. Pour ceux qui n'ont plus rien. Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", 1.0),
]
CUES = [('ff', '+0', 'whoosh'), ('ff', 'centime', 'coin'), ('ff', 'humilié', 'bam'), ('s1', 'gardez', 'stamp'), ('s1', 'bossent', 'bam'),
        ('s2', 'rigolé', 'laugh'), ('s2', 'souri', 'pop'), ('s2', 'Une', 'coin'), ('s3', 'rattrapé', 'whoosh'), ('s4', 'temps', 'tick'), ('s4', 'regarder', 'sting'),
        ('s5', 'lendemain', 'tick'), ('s5', 'semaine', 'ticktock'), ('mid', '+0', 'ding'), ('s6', 'notaire', 'sting'), ('s6', 'fer', 'click'),
        ('s7', 'milliers', 'coin'), ('s7', 'photo', 'click'), ('s7', 'goûter', 'pop'), ('s8', 'elle', 'bam'), ('s9', 'grandir', 'dingdong'), ('s10', 'personne', 'ding'), ('end', 'centimes', 'coin')]
