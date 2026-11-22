# « Dans la ville de 47… » — hors-série du Baron, v4 (créateur 22/11 18h14 : « je m'ennuie au bout de 30 s, copie le système du mec »).
# Système de la vidéo de référence (village d'aveugles), FORME seulement : monde à règle + moi l'exception + danger de mort en 10 s,
# créature décrite par 2 détails dérangeants, lore en règles courtes (« on dit que… c'est faux »), mini-histoire cruelle d'une voisine,
# un proche cache un secret, phrases de 1,5 à 3 s, dernière ligne glaçante. Notre contenu : chaque mensonge vole une couleur,
# la chose sans visage mange les plus colorés, 47 n'a jamais menti, le Baron tout gris le protège en mentant (petit frère).
EMO = {'ff': 'sinistre', 's1': 'chuchote', 's2': 'peur', 's3': 'sinistre', 's4': 'sinistre', 's5': 'chuchote', 's6': 'sinistre', 's7': 'peur',
       's8': 'chuchote', 's9': 'sinistre', 'mid': 'question', 's10': 'chuchote', 's11': 'sinistre', 's12': 'peur', 's13': 'peur', 's14': 'chuchote',
       's15': 'chuchote', 's16': 'peur', 's17': 'chuchote', 's18': 'chuchote', 's19': 'sinistre', 'end': 'chuchote'}
MUSIC_STYLE = 'horreur'
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.2
TEMPO_BEAT = {'ff': 1.06}
TEMPO = 1.08
SKIP_EV = []
BEATS = [
  ('ff', "Dans la ville de 47, chaque mensonge te vole une couleur. Et la nuit, quelque chose mange les plus colorés.", "Dans la ville de Quarante-sept, chaque mensonge te vole une couleur. Et la nuit, quelque chose mange les plus colorés.", 0.1),
  ('s1', "Moi, je n'ai jamais menti. Je suis le plus orange de la ville.", "Moi, je n'ai jamais menti. Je suis le plus orange de la ville.", 0.1),
  ('s2', "Je devrais être mort depuis longtemps.", "Je devrais être mort depuis longtemps.", 0.2),
  ('s3', "La chose n'a pas de visage. Juste une bouche ronde… qui aspire les couleurs.", "La chose n'a pas de visage. Juste une bouche ronde... qui aspire les couleurs.", 0.1),
  ('s4', "Avant d'entrer, elle frappe trois coups. Toujours trois.", "Avant d'entrer, elle frappe trois coups. Toujours trois.", 0.1),
  ('s5', "On dit qu'elle ne prend que les menteurs. C'est faux.", "On dit qu'elle ne prend que les menteurs. C'est faux.", 0.1),
  ('s6', "Lola a gagné un concours de dessin. Ses joues sont devenues toutes roses.", "Lola a gagné un concours de dessin. Ses joues sont devenues toutes roses.", 0.1),
  ('s7', "Le soir même : trois coups. Le matin, Lola était grise. Assise sur son lit. Les yeux ouverts.", "Le soir même : trois coups. Le matin, Lola était grise. Assise sur son lit. Les yeux ouverts.", 0.2),
  ('s8', "Alors ici, tout le monde ment un peu. Pour rester gris. Pour rester vivant.", "Alors ici, tout le monde ment un peu. Pour rester gris. Pour rester vivant.", 0.1),
  ('s9', "Le plus gris de tous, c'est le Baron. Il me déteste. Et pourtant… il ne m'a jamais touché.", "Le plus gris de tous, c'est le Baron. Il me déteste. Et pourtant... il ne m'a jamais touché.", 0.1),
  ('mid', "Pourquoi ?… La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Pourquoi ?... La fin, tu vas pas t'y attendre. Et toi, t'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s10', "Chaque nuit, j'entends les trois coups. Chez les voisins. Jamais chez moi.", "Chaque nuit, j'entends les trois coups. Chez les voisins. Jamais chez moi.", 0.1),
  ('s11', "Et chaque matin, devant ma porte… des traces de pas grises.", "Et chaque matin, devant ma porte... des traces de pas grises.", 0.1),
  ('s12', "Cette nuit, je n'ai pas dormi. Trois heures. Toc. Toc. Toc.", "Cette nuit, je n'ai pas dormi. Trois heures. Toc. Toc. Toc.", 0.3),
  ('s13', "Chez moi.", "Chez moi.", 0.4),
  ('s14', "Par le judas, j'ai vu la bouche ronde. Et devant ma porte, quelqu'un. Tout gris.", "Par le judas, j'ai vu la bouche ronde. Et devant ma porte, quelqu'un. Tout gris.", 0.2),
  ('s15', "Le Baron. Il lui a dit : « Il n'y a personne ici. Le petit est parti. »", "Le Baron. Il lui a dit : Il n'y a personne ici. Le petit est parti.", 0.2),
  ('s16', "La bouche s'est collée à la porte. Elle me sentait. À travers le bois.", "La bouche s'est collée à la porte. Elle me sentait. À travers le bois.", 0.2),
  ('s17', "Alors, pour la première fois de ma vie, j'ai menti. J'ai chuchoté : « Il n'y a personne. »", "Alors, pour la première fois de ma vie, j'ai menti. J'ai chuchoté : Il n'y a personne.", 0.2),
  ('s18', "Mon bonnet est devenu gris. Et la chose est partie.", "Mon bonnet est devenu gris. Et la chose est partie.", 0.3),
  ('s19', "Le Baron a murmuré : « Quinze ans que je mens pour toi… petit frère. » Sur sa joue grise, une tache orange. Ma couleur.", "Le Baron a murmuré : Quinze ans que je mens pour toi... petit frère. Sur sa joue grise, une tache orange. Ma couleur.", 0.4),
  ('end', "Et cette nuit… les trois coups ont frappé chez le Baron. Ton histoire de ouf ? En commentaire !", "Et cette nuit... les trois coups ont frappé chez le Baron. Ton histoire de ouf ? En commentaire !", 1.0),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'couleur', 'whoosh'), ('ff', 'mange', 'bam'), ('s1', 'jamais', 'ding'), ('s1', 'orange', 'sting'), ('s2', 'mort', 'bam'),
        ('s3', 'visage', 'sting'), ('s3', 'aspire', 'wind'), ('s4', 'frappe', 'knock'), ('s4', 'Toujours', 'knock'), ('s5', 'faux', 'stamp'),
        ('s6', 'concours', 'ding'), ('s6', 'roses', 'pop'), ('s7', 'coups', 'knock'), ('s7', 'grise', 'sting'), ('s7', 'ouverts', 'bam'), ('s8', 'vivant', 'tick'),
        ('s9', 'Baron', 'sting'), ('s9', 'touché', 'bam'), ('mid', '+0', 'ding'), ('s10', 'coups', 'knock'), ('s10', 'Jamais', 'tick'), ('s11', 'grises', 'sting'),
        ('s12', 'Trois', 'ticktock'), ('s12', 'Toc', 'knock'), ('s13', 'moi', 'bam'), ('s14', 'judas', 'click'), ('s14', 'gris', 'sting'), ('s15', 'personne', 'tick'),
        ('s16', 'collée', 'wind'), ('s16', 'bois', 'sting'), ('s17', 'menti', 'sting'), ('s18', 'gris', 'whoosh'), ('s18', 'partie', 'wind'),
        ('s19', 'frère', 'bam'), ('s19', 'orange', 'dingdong'), ('end', 'Baron', 'bam')]
