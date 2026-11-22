# « Dans la ville de 47… » — hors-série du Baron, v3 (retour créateur 22/11 : « on s'ennuie à 40 s »).
# Format « Dans ma ville » + boucle ouverte dès 0 s : « le Baron est tout gris… et il n'a jamais osé me toucher. Pourquoi ? »
# Grille : règle prouvée (Rico) → le Baron = des centaines de mensonges → 47 = zéro → bonnet orange posé chaque nuit (qui ?) → empreinte grise
# → mid (qui me surveille ?) → 3 h, la porte grince → l'ombre file à l'orphelinat → mur de traits gris + mon prénom → carnet → main grise
# → « petit frère » (réponse) → NOUVELLE question tout de suite : « ils sauront où tu es » → police → 47 ment → bonnet gris / tache orange.
EMO = {'ff': 'sinistre', 's1': 'mystere', 's2': 'sinistre', 's3': 'mystere', 's4': 'sinistre', 'mid': 'question', 's5': 'chuchote', 's6': 'peur',
       's7': 'peur', 's8': 'sinistre', 's9': 'sinistre', 's10': 'peur', 's11': 'chuchote', 's12': 'chuchote', 's13': 'tension', 's14': 'choc', 'end': 'chuchote'}
MUSIC_STYLE = 'horreur'
SFX = 0.4
SFX_COMP = 3
SFX_DUCK = 0.7
SFX_BEAT = {'ff': 0.3}
MUSIC = 0.18
TEMPO_BEAT = {'ff': 1.08}
TEMPO = 1.07
SKIP_EV = []
BEATS = [
  ('ff', "Dans la ville de 47, chaque mensonge te vole une couleur. Le Baron est tout gris… et il n'a jamais osé me toucher.", "Dans la ville de Quarante-sept, chaque mensonge te vole une couleur. Le Baron est tout gris... et il n'a jamais osé me toucher.", 0.1),
  ('s1', "Rico a menti une fois : son bonnet bleu est devenu gris. Devant nous.", "Rico a menti une fois : son bonnet bleu est devenu gris. Devant nous.", 0.1),
  ('s2', "Pour être gris comme le Baron… il faut des centaines de mensonges.", "Pour être gris comme le Baron... il faut des centaines de mensonges.", 0.1),
  ('s3', "Moi, je n'ai jamais menti. Et chaque nuit, depuis que je suis bébé, quelqu'un pose un bonnet orange devant ma porte.", "Moi, je n'ai jamais menti. Et chaque nuit, depuis que je suis bébé, quelqu'un pose un bonnet orange devant ma porte.", 0.1),
  ('s4', "Toujours ma taille. Et toujours… une empreinte grise dessus.", "Toujours ma taille. Et toujours... une empreinte grise dessus.", 0.1),
  ('mid', "Qui me surveille ?… T'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec 47 !", "Qui me surveille ?... T'as une histoire de ouf ? Écris-la en commentaire : la plus likée, je l'anime avec Quarante-sept !", 0.05),
  ('s5', "Cette nuit, j'ai fait semblant de dormir. Trois heures. La porte a grincé.", "Cette nuit, j'ai fait semblant de dormir. Trois heures. La porte a grincé.", 0.1),
  ('s6', "Une ombre a posé le bonnet… et elle est partie vers l'orphelinat abandonné. Mon orphelinat.", "Une ombre a posé le bonnet... et elle est partie vers l'orphelinat abandonné. Mon orphelinat.", 0.1),
  ('s7', "Sur le mur, des centaines de traits gris. Et à côté de chaque trait… mon prénom.", "Sur le mur, des centaines de traits gris. Et à côté de chaque trait... mon prénom.", 0.1),
  ('s8', "Par terre, un carnet. « À la police : c'est moi qui ai volé, pas le petit. »", "Par terre, un carnet. À la police : c'est moi qui ai volé, pas le petit.", 0.1),
  ('s9', "« À lui, tous les jours : je suis ton ennemi. »", "À lui, tous les jours : je suis ton ennemi.", 0.2),
  ('s10', "Une main grise s'est posée sur mon épaule.", "Une main grise s'est posée sur mon épaule.", 0.3),
  ('s11', "« Je mens pour toi depuis ta naissance… petit frère. »", "Je mens pour toi depuis ta naissance... petit frère.", 0.3),
  ('s12', "« Si tu dis la vérité, mes mensonges tombent. Et ils sauront où tu es. »", "Si tu dis la vérité, mes mensonges tombent. Et ils sauront où tu es.", 0.1),
  ('s13', "Des sirènes. La police. « Tu as vu le Baron ? » Pour la première fois… j'ai menti. « Non. »", "Des sirènes. La police. Tu as vu le Baron ? Pour la première fois... j'ai menti. Non.", 0.2),
  ('s14', "Mon bonnet est devenu gris. Et sur la joue du Baron… une tache orange.", "Mon bonnet est devenu gris. Et sur la joue du Baron... une tache orange.", 0.3),
  ('end', "Personne ne m'avait dit où allait la couleur… Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", "Personne ne m'avait dit où allait la couleur... Et toi, t'as une histoire de ouf ? Écris-la en commentaire !", 1.0),
]
CUES = [('ff', '+0', 'sting'), ('ff', 'couleur', 'whoosh'), ('ff', 'gris', 'bam'), ('ff', 'toucher', 'sting'),
        ('s1', 'menti', 'pop'), ('s1', 'gris', 'whoosh'), ('s2', 'centaines', 'ticktock'), ('s3', 'jamais', 'ding'), ('s3', 'nuit', 'wind'), ('s3', 'orange', 'sting'),
        ('s4', 'taille', 'pop'), ('s4', 'empreinte', 'sting'), ('mid', '+0', 'ding'), ('s5', 'Trois', 'ticktock'), ('s5', 'grincé', 'flicker'),
        ('s6', 'ombre', 'steps'), ('s6', 'orphelinat', 'wind'), ('s6', 'Mon', 'sting'), ('s7', 'traits', 'click'), ('s7', 'prénom', 'bam'),
        ('s8', 'carnet', 'page'), ('s8', 'volé', 'stamp'), ('s9', 'ennemi', 'stamp'), ('s10', 'main', 'sting'), ('s10', 'épaule', 'bam'),
        ('s11', 'naissance', 'sting'), ('s11', 'frère', 'bam'), ('s12', 'vérité', 'tick'), ('s12', 'ils', 'sting'),
        ('s13', 'sirènes', 'beep'), ('s13', 'vu', 'tick'), ('s13', 'Non', 'bam'), ('s14', 'gris', 'whoosh'), ('s14', 'orange', 'dingdong'), ('end', 'couleur', 'sting')]
