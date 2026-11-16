# « Les histoires de 47 » #2 — « Les 3 clés de Mamie Rose ». Mêmes RESSORTS que le viral « papi Léon » (perso qui ne ment jamais mais joue sur les mots, 2 exemples drôles,
# 3 héritages-pièges, moquerie du gentil, trésor, phrase-boucle) — texte, objets et pièges 100 % originaux (aucune phrase reprise).
EMO = {'ff': 'tension', 's1': 'complice', 's2': 'complice', 's3': 'complice', 's4': 'complice', 's5': 'tension', 's6': 'complice', 's7': 'complice', 's8': 'complice',
       's9': 'complice', 's10': 'choc', 's11': 'complice', 's12': 'tension', 's13': 'choc', 's14': 'complice', 'end': 'question'}
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.15
TEMPO_BEAT = {'ff': 1.1}
SKIP_EV = []
BEATS = [
  ('ff', "Quand Mamie Rose est morte, ses petits-enfants sont arrivés chez le notaire… avant le corbillard.", "Quand Mamie Rose est morte, ses petits-enfants sont arrivés chez le notaire... avant le corbillard.", 0.2),
  ('s1', "Parce que Mamie Rose avait de l'argent. Et une règle : elle ne mentait jamais. Elle disait la vérité… à sa façon.", "Parce que Mamie Rose avait de l'argent. Et une règle : elle ne mentait jamais. Elle disait la vérité... à sa façon.", 0.15),
  ('s2', "Elle avait juré à son médecin d'arrêter le chocolat. C'était vrai : elle était passée au chocolat blanc.", "Elle avait juré à son médecin d'arrêter le chocolat. C'était vrai : elle était passée au chocolat blanc.", 0.15),
  ('s3', "Elle avait promis au facteur que son chien ne l'embêterait plus. Elle a pris un chat.", "Elle avait promis au facteur que son chien ne l'embêterait plus. Elle a pris un chat.", 0.2),
  ('s4', "Même 47 y est passé. La nuit où il l'a cambriolée, elle lui a dit : « Tout ce qui a de la valeur est dans la cuisine. » Il est reparti avec une soupe… et il est revenu chaque dimanche.", "Même Quarante-sept y est passé. La nuit où il l'a cambriolée, elle lui a dit : Tout ce qui a de la valeur est dans la cuisine. Il est reparti avec une soupe... et il est revenu chaque dimanche.", 0.2),
  ('s5', "Chez le notaire, il y avait trois clés.", "Chez le notaire, il y avait trois clés.", 0.15),
  ('s6', "À Kevin, qui ne venait que pour emprunter : « la clé de mon coffre ». Kevin voyait déjà des lingots.", "À Kévine, qui ne venait que pour emprunter : la clé de mon coffre. Kévine voyait déjà des lingots.", 0.1),
  ('s7', "À Inès, qui appelait une fois par an : « la clé de ma villa avec vue sur la mer ». Inès en a pleuré de joie.", "À Inès, qui appelait une fois par an : la clé de ma villa avec vue sur la mer. Inès en a pleuré de joie.", 0.1),
  ('s8', "Et à Tom, le seul qui venait chaque dimanche : « la clé de mon cœur ». Une petite clé rouge, en forme de cœur.", "Et à Tom, le seul qui venait chaque dimanche : la clé de mon cœur. Une petite clé rouge, en forme de cœur.", 0.15),
  ('s9', "Kevin a ricané : « Elle ouvre quoi, ta clé ? Un journal intime ? »", "Kévine a ricané : Elle ouvre quoi, ta clé ? Un journal intime ?", 0.2),
  ('s10', "Le coffre ? Celui de sa vieille voiture. Dedans : 47 amendes. Toutes au nom de Kevin, qui lui empruntait la voiture.", "Le coffre ? Celui de sa vieille voiture. Dedans : quarante-sept amendes. Toutes au nom de Kévine, qui lui empruntait la voiture.", 0.15),
  ('s11', "La villa ? Une cabine de plage. Deux mètres carrés. Mais vue sur la mer, c'est vrai.", "La villa ? Une cabine de plage. Deux mètres carrés. Mais vue sur la mer, c'est vrai.", 0.2),
  ('s12', "Tom, lui, ne savait pas quoi ouvrir. C'est 47 qui a compris : chaque dimanche, Mamie parlait à son rosier. Elle l'appelait « mon cœur ».", "Tom, lui, ne savait pas quoi ouvrir. C'est Quarante-sept qui a compris : chaque dimanche, Mamie parlait à son rosier. Elle l'appelait mon cœur.", 0.15),
  ('s13', "Sous le rosier : un coffret rouge. La petite clé rentrait parfaitement. Dedans : trois cents pièces d'or. Et un mot : « Tu l'avais déjà, la clé. Tu venais me voir. »", "Sous le rosier : un coffret rouge. La petite clé rentrait parfaitement. Dedans : trois cents pièces d'or. Et un mot : Tu l'avais déjà, la clé. Tu venais me voir.", 0.3),
  ('s14', "Mamie Rose n'avait jamais menti. Elle avait juste donné à chacun… ce qu'il méritait.", "Mamie Rose n'avait jamais menti. Elle avait juste donné à chacun... ce qu'il méritait.", 0.3),
  ('end', "Et toi, t'aurais eu quelle clé ?", "Et toi, t'aurais eu quelle clé ?", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'notaire', 'run'), ('ff', 'corbillard', 'bam'), ('s1', 'argent', 'cash'), ('s1', 'jamais', 'ding'), ('s1', 'façon', 'sting'),
        ('s2', 'chocolat', 'pop'), ('s2', 'blanc', 'ding'), ('s3', 'facteur', 'dingdong'), ('s3', 'chat', 'pop'), ('s4', 'cambriolée', 'click'), ('s4', 'soupe', 'pop'), ('s4', 'dimanche', 'tick'),
        ('s5', 'clés', 'ding'), ('s6', 'coffre', 'ding'), ('s6', 'lingots', 'cash'), ('s7', 'villa', 'ding'), ('s8', 'cœur', 'ding'), ('s9', 'ricané', 'pop'),
        ('s10', 'voiture', 'click'), ('s10', 'amendes', 'stamp'), ('s11', 'cabine', 'stamp'), ('s11', 'carrés', 'pop'), ('s12', 'compris', 'sting'), ('s12', 'rosier', 'ding'),
        ('s13', 'coffret', 'click'), ('s13', 'or', 'cash'), ('s13', 'mot', 'paper'), ('s14', 'méritait', 'ding'), ('end', '+0', 'ding')]
