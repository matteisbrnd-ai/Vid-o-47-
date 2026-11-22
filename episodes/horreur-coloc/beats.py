# « Les histoires flippantes de 47 » #1 — « Le colocataire invisible » (21h). Histoire originale, frissons sans gore.
# Grille 2 s : vaisselle faite → lit au carré → chaussures tournées vers l'intérieur → serrure changée, encore → téléphone qui filme → 3h14 la porte s'ouvre
# → question + appel « ton histoire flippante en dessin animé » → c'est 47 somnambule (soulagement) → mais la fin de la vidéo… → il chuchote à l'objectif → placard.
EMO = {'ff': 'sinistre', 's1': 'peur', 's2': 'sinistre', 's3': 'peur', 's4': 'peur', 's5': 'sinistre', 's6': 'chuchote', 'mid': 'question', 's7': 'choc',
       's8': 'complice', 's9': 'sinistre', 's10': 'peur', 's11': 'chuchote', 's12': 'chuchote', 'end': 'chuchote'}
MUSIC_STYLE = 'horreur'
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.22
TEMPO_BEAT = {'ff': 1.05}
TEMPO = 1.0
SKIP_EV = []
BEATS = [
  ('ff', "Je vis seul. Pourtant, chaque matin… quelqu'un fait ma vaisselle.", "Je vis seul. Pourtant, chaque matin... quelqu'un fait ma vaisselle.", 0.1),
  ('s1', "Le premier jour, je me suis dit que j'avais oublié.", "Le premier jour, je me suis dit que j'avais oublié.", 0.05),
  ('s2', "Le deuxième, mon lit était refait. Au carré.", "Le deuxième, mon lit était refait. Au carré.", 0.1),
  ('s3', "Le troisième… mes chaussures étaient alignées devant la porte. Tournées vers l'intérieur.", "Le troisième... mes chaussures étaient alignées devant la porte. Tournées vers l'intérieur.", 0.15),
  ('s4', "J'ai changé la serrure. Le lendemain : la vaisselle était faite.", "J'ai changé la serrure. Le lendemain : la vaisselle était faite.", 0.1),
  ('s5', "Alors j'ai posé mon téléphone sur l'étagère… et j'ai filmé toute la nuit.", "Alors j'ai posé mon téléphone sur l'étagère... et j'ai filmé toute la nuit.", 0.05),
  ('s6', "Minuit : rien. Une heure : rien. À 3h14… la porte de ma chambre s'ouvre.", "Minuit : rien. Une heure : rien. À trois heures quatorze... la porte de ma chambre s'ouvre.", 0.1),
  ('mid', "Qui est entré ?… Et toi, t'as déjà vécu un truc flippant ? Écris-le en commentaire : le plus liké, je l'anime avec 47 !", "Qui est entré ?... Et toi, t'as déjà vécu un truc flippant ? Écris-le en commentaire : le plus liké, je l'anime avec Quarante-sept !", 0.05),
  ('s7', "C'était… moi. Les yeux ouverts. Somnambule.", "C'était... moi. Les yeux ouverts. Somnambule.", 0.1),
  ('s8', "J'ai éclaté de rire. Mystère résolu : je range en dormant.", "J'ai éclaté de rire. Mystère résolu : je range en dormant.", 0.1),
  ('s9', "J'allais supprimer la vidéo… quand j'ai vu la fin.", "J'allais supprimer la vidéo... quand j'ai vu la fin.", 0.1),
  ('s10', "À 3h20, je retourne me coucher. Puis la porte se rouvre… et je marche droit vers le téléphone.", "À trois heures vingt, je retourne me coucher. Puis la porte se rouvre... et je marche droit vers le téléphone.", 0.1),
  ('s11', "Je fixe l'objectif… et je chuchote : « Arrête de filmer. On n'est pas seuls. »", "Je fixe l'objectif... et je chuchote : Arrête de filmer. On n'est pas seuls.", 0.25),
  ('s12', "Derrière moi, dans le noir… la porte du placard se refermait. Doucement.", "Derrière moi, dans le noir... la porte du placard se refermait. Doucement.", 0.4),
  ('end', "Et toi… ce soir, tu dors avec le placard ouvert ou fermé ?", "Et toi... ce soir, tu dors avec le placard ouvert ou fermé ?", 1.2),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'seul', 'bam'), ('ff', 'vaisselle', 'clink'), ('s1', 'oublié', 'pop'), ('s2', 'refait', 'whoosh'), ('s2', 'carré', 'sting'),
        ('s3', 'chaussures', 'steps'), ('s3', 'intérieur', 'sting'), ('s4', 'serrure', 'click'), ('s4', 'faite', 'clink'), ('s5', 'téléphone', 'click'), ('s5', 'nuit', 'tick'),
        ('s6', 'Minuit', 'tick'), ('s6', 'heure', 'tick'), ('s6', 'quatorze', 'sting'), ('s6', 'ouvre', 'rattle'), ('mid', '+0', 'ding'), ('s7', 'moi', 'bam'), ('s7', 'Somnambule', 'sting'),
        ('s8', 'rire', 'pop'), ('s8', 'dormant', 'ding'), ('s9', 'fin', 'sting'), ('s10', 'coucher', 'whoosh'), ('s10', 'rouvre', 'rattle'), ('s10', 'téléphone', 'steps'),
        ('s11', 'objectif', 'sting'), ('s11', 'seuls', 'bam'), ('s12', 'placard', 'rattle'), ('s12', 'Doucement', 'click'), ('end', '+0', 'sting')]
