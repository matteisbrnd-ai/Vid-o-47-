# Les Énigmes de 47 — playbook

TikTok **@lesenigmesde47**. One riddle a day starring **47**, a likeable small-time thief
(orange beanie, dark sweater with an orange « 47 »). French audience, mostly 13–25.
This file is the memory of the project: read it before making anything, update it after every weekly run.

## How to make a video

```
episodes/<slug>/beats.py    # script: BEATS = [(id, shown_text, spoken_text, pause_s)], PROS (emotion per line), CUES (extra sounds)
episodes/<slug>/scenes.js   # drawing: function draw(t) using engine/lib.js
./engine/build.sh episodes/<slug> --stills 0.5,3,6,...   # quick preview -> episodes/<slug>/sheet.jpg (look at it!)
./engine/build.sh episodes/<slug>                        # final -> videos/<slug>.mp4 + .jpg (≈1 min of compute)
```
`episodes/la-panne/` is the reference example: copy it and change the content.
Voice: Microsoft « Henri » (edge-tts), default `+25% / +12Hz`. Spoken text spells acronyms the French way (« Gé-Té-A six » for GTA 6 — hyphens, not commas, or the voice pauses) and writes numbers in words
(« Quarante-sept », « vingt-et-une heures ») so the voice reads them right; shown text keeps « 47 », « 21 h ».
Beat ids `q` (question) and `share` (« Envoie-la à quelqu'un qui pense être malin. ») end every video; call
`endCards(t, [...])` at the end of `draw`.

## The winning format (from the data below — keep it)

1. **30–40 s.** Longer videos lose people: completion went from 3–7 % (60 s) to 24 % (37 s).
2. **Open with the ending, talking to the viewer** (beat `ff`, 2–3 s, one sentence in « tu » with a personal stake, e.g. « Tu risques la cave si tu rates ce test. » — the reference hit says « Tu risques l'asile… »; a hook about 47 instead of « toi » felt flat to the creator): the shocking result on screen + one sentence
   (« Il a sauvé le musée… et il a été viré. »), then `rewindFx` ◀◀ back to the start. Voice and text from 0.0 s.
3. **A story, not a logic puzzle.** Best performers: someone did something strange / a lie was spotted
   (gardien 2 162 views, 24 % completion). Pure logic (lampe, interrupteurs, coffres) stays ~700–1 100.
4. **Answer fits in one word** (« il dormait », « la neige », « dimanche »). People must be able to comment fast.
5. **No solution in the video.** Ask the question, ask for a one-word answer, ask to share. Post the solution
   the next day as a pinned comment. (Videos with the solution got fewer comments and no better completion.)
6. **One clear line**: 3–4 clues max, all pointing to the same answer. When a script tried to be « harder » by
   adding side stories, the creator said « ça part dans tous les sens ». Harder = subtler clue, not more noise.
7a. **Never draw the liar's version as if it were true** (La page showed pages 47|48 side by side = physically impossible, it confused even the creator). Show neutral images; the clue lives in the words.
7. **Rules must be crystal clear** in the setup (a viewer complained « c'est mal expliqué » on the switches riddle).
8. **Never reuse** a riddle already listed below. **Famous riddles are welcome** (people who know the answer comment it, which feeds the algorithm) but always change the setting and details and make 47 the hero. Leave ≥ 2 weeks between two versions of the same riddle on this account (e.g. « Le recrutement » repeats « Le test »: post it from 2026-11-14).
11. **Lessons from the 3 review agents (2026-11-06) — apply to every video:**
    - **Action at frame 1, in close-up**: something is happening (thrown into a cell, door slams, BAM), never a static line-up with a sign.
      Hook stakes judge the viewer (« t'es trop bête pour… », like « tu risques l'asile »), not just 47.
    - **No permanent sign on screen**: the captions carry the text. Use icons/pills (clock, €, calendar) and at most one question card at the end.
    - **Tight framing**: characters ≥ half the screen height, close-ups on faces for key lines (the idea, the verdict). Contrasted backgrounds; never dark characters on a dark background.
    - **New shot every 2–3 s**: one setting per clue, cut on each new piece of information; avoid « characters standing in a row talking ».
    - **Silences**: ~1 s after the question to the viewer, ~0.8 s before the verdict (« … Non. »).
    - **Ending loops** to the opening image, with the question on top; no long cards after the twist (people leave there).
    - Expressive faces: big eyes, strong brows, one clear emotion per line (lib.js toon moods).
14. **Inserts (reference « Monsieur Énigme », 2026-11-07)**: each clue gets a full-screen close-up of the key object (handcuffs `cuffsInsert`, bulb `bulbInsert`, book `bookInsert`, shop window `vitrineInsert` in lib.js — add new ones the same way), drawn big and detailed so it is recognisable at a glance; cut to it on the clue word with `flashCut`; time/place as a tilted blue `banner` (« HIER SOIR · 21 H »); onomatopoeia on impacts. The creator said the tiny handcuffs were unrecognisable.
13. **Emotion & mix**: give every beat an emotion with `EMO = {id: 'mystere'|'menace'|'tension'|'neutre'|'complice'|'question'|'excite'|'choc'|'amuse'}` (see voice.py). Sound effects stay under the voice but must be clearly audible: `SFX = 0.45`, `SFX_COMP = 3`, `SFX_DUCK = 0.55` (la-panne, approved level). He complained both when effects covered the voice (0.35, no ducking) and when they were barely audible (0.3 + strong ducking). On the hook (`ff`) the voice must dominate: `SFX_BEAT = {'ff': 0.35}`, no 'bam' there, `SFX_DUCK = 0.7`, `MUSIC = 0.15` (creator, 2026-11-07: « on entend pas assez la voix sur l'intro »). Pace: ElevenLabs audio is sped up locally with `TEMPO = 1.12` (default), pauses between beats 0.05–0.2 s, slow push-in on every shot — he found 26 s « pas assez dynamique », 23 s version is the reference. Use themed sounds (cuffs, chain, glass, flicker, page, crickets, ticktock, run…) rather than generic booms.
12. **Voice (since 2026-11-07): ElevenLabs « Voix Nicolas Petit » (id aQROLel5sQbj1vuIVi6B), model eleven_v4**, chosen by the creator over Henri, Justin Doré, Léo, Olivier. `engine/build.sh` uses it automatically when the key is available (env `ELEVEN_KEY` or `~/.elevenlabs_key`, never committed); EMO becomes a v4 audio tag ([mysterious], [playful]…). Costs ≈ 1 credit per character (≈ 400–500 per video, account had 35 840 on 2026-11-07, Starter plan = commercial use OK). Audio is cached in `<ep>/vo/`, rebuilds are free. `VOICE=henri` falls back to the free voice.
    Old voice: Henri in natural mode (engine/voice.py splits sentences, varies intonation, adds breaths and a warm room tone).
    Write spoken text like speech (« t'es », « on prend que les malins »), short sentences, « … » where suspense is wanted.
    The creator's own voice works too (`VOICE_FILE=… engine/build.sh`) but he prefers Henri for now.
9. Description template: `<hook phrase> <emoji> Es-tu capable de … ? Envoie-la à quelqu'un qui pense être malin 😏 #enigme #reflexion #devinette #cassetete #pourtoi`
10. TikTok AI label: always `isAigc: true` (synthetic voice).

15. **Lessons from the 2026-11-08 stats + 2 agents (apply first, they override 2 and 11 where they conflict):**
    - On every video most viewers leave at 0:01. Only « Le gardien » passed the test batch (2 201 views, 51 % watched, 18.5 s avg): frame 0 = character + **readable paradox** « Il a sauvé le musée… et il a été viré ».
    - **Hook = paradox about a character**: « 47 a fait X… et Y lui est arrivé » (rendu le diamant… pris dix ans; n'a rien volé… la police l'a félicité). Not quiz framing (« Toi, tu l'aurais vue ? », « 9 sur 10 », « Lequel… ? ») — that reads as homework.
    - **Frame 0**: 47 (or the key character) in close-up ≈ 60 % of the height, bright background, holding the key prop, one strong emotion; **`hookCard(t, lines)`** = the whole hook sentence on a big white card, key word red, visible from 0.0 to ~2.5 s (captions muted meanwhile). Exception to « no permanent sign » for the hook only. Never an object-only or empty frame 0. Check frame 0 of every export.
    - Voice says the paradox from 0.00 s, fast (`TEMPO_BEAT = {'ff': 1.3}`) and punchy: EMO 'excite', short exclamations, one word in CAPS for stress (« en UNE SEULE pesée ! »); eleven.py gives the hook stability 0.15 / style 0.9 automatically (creator: « trop monotone »), < 2.5 s, one themed hit at 0.0. Cut to a new shot at ~1.2 s.
    - Length 30–37 s with new info every 2–3 s: aim for absolute avg watch ≥ 15 s (23 s videos got a high % but only ~10 s).
    - CTA: « Réponds en un mot 👇 » + `window.CTA = 'TAGUE CELUI QUI…'` (shares are 0–2 on every video; tags = comments + new viewers).
    - Ask the creator for « % still watching at 0:03 » to measure hooks.

16. **Trending references (creator, 2026-11-08)**: put 1–2 things the 13–25 audience talks about right now into every story, as natural details (what 47 drinks, plays, eats, watches), e.g. Ciao Energy (drink), GTA 6 (game), Tasty Crousty (fried chicken), a Twitch/YouTube stream, a viral TikTok trend. Say the name in the voice + captions; draw the object generically (plain can, console, food box with the name written in our font) — **never copy a real logo or packaging**. Keep the reference out of the answer unless it makes the riddle clearer. Refresh this list every Monday (ask the creator what he sees on his For You page).
    Current list: Ciao Energy · GTA 6 · Tasty Crousty · Squid Game style games · « c'est carré » type slang sparingly.

17. **« Grande toile » (outside feedback 2026-11-08, overrides the « new shot every 2–3 s / flashCut » parts of 11 and 14)**: « trop de plans différents, c'est pour ça que les gens partent, et c'est trop sombre ». Build each video as ONE big bright canvas of 1080×1920 panels side by side (`panel(x, y, w, h, fn)` in lib.js) and move the camera with `camPath(t, [[tStart, dur, x, y, zoom], …])`: zoom in on faces/props for each clue, de-zoom to reveal the next place, glide (long moves de-zoom automatically) — no hard cuts, no white flashes. Bright daylight palettes, light walls, no `night()` filters. Lay the panels out in STORY ORDER on one horizontal strip so the camera only moves left → right (the ◀◀ rewind is the only move back; put the hook scene at the far right so the ending lands on it = loop). Max one zoom in + one zoom out per beat; no zig-zag (creator: « trop désordonné »). Reference implementation: `episodes/l-enterrement/scenes.js`.

18. **Shot style = Galagade (@galagade.studio, 70 K followers, riddles, creator's reference 2026-11-08)**: one rich, busy, warm set per place (many background characters, props, architecture), the camera stays IN that set: start close on faces + key object, slow de-zoom to reveal the whole set, slow zoom toward whoever speaks. Clues appear as **polaroid cards** over the scene (`polaroid(...)` with a label: « LA VRAIE / LA COPIE », « SES CONTACTS »), not as full-screen cuts. Change set only when the story changes place (max 2–3 sets). End: paper card « …? EN COMMENTAIRE ». Graphics: set `window.LOOK = 'gala'` (smaller heads = grown-up proportions, warm storybook grade, paper grain, soft vignette) and texture walls with `bricks()`. Reference: `episodes/l-enterrement/scenes.js` (cemetery set + game-room set).

19. **Riddle type (creator, 2026-11-08): « réflexion », like Galagade** — not gag riddles (« le verre d'eau » = hiccups was judged too much of a joke). Galagade's titles: 100 prisonniers + 1 ampoule, l'homme du portrait (neveu/fils/cousin), l'île et le feu, le crocodile, le dragon et le chevalier, le témoin derrière la baie vitrée, 2 boules (or/laiton) sans les ouvrir. Pattern: high stakes (« s'il se trompe : pendu / perpétuité ») + clear rules shown on a polaroid (« LES RÈGLES ») + a diagram polaroid when positions matter (« QUI VOIT QUI ») + « Comment il a su ? » Classic logic riddles are fine if re-skinned with 47 (don't copy one Galagade posted the same week).

20. **Creator, 2026-11-09: « plus Galagade et Monsieur Énigme + une intro qui capte l'attention ».** He chose: intro = **danger immédiat** (47 in danger at frame 0 + a big red countdown ticking from 0.0, « 10 secondes pour… sinon … »; the countdown comes back at the end so the video loops); riddle types = **logic with high stakes** (Galagade: rules polaroid, « qu'a-t-il dit ? ») and **investigation** (Monsieur Énigme: 3 numbered suspects, one clue, « qui est le coupable ? 1, 2 ou 3 »). Test videos `le-roi`, `le-chien` **validated** (« ça passe », fix defects yourself before sending). Week of 2026-11-09 remade in this format: le-drapeau, le-sauna, la-chambre, les-lingots, les-diamants (les-scooters and les-traces stay in the old format, unused). Check before sending: frame 0 = danger + countdown readable, no polaroid/CTA over a face, cuffs on wrists (`o.noArms` in lib.js).

20. **Triple hook (creator's reference video, 2026-11-10) — check every hook against the 3 C:**
    1. **Contexte** (creator 2026-11-10: **never say or write the word « énigme »** — no « Énigme : » in the voice, no HOOK_TAG; the context comes from the stakes image + the situation itself): originally: say in the first words that it's a riddle/test, in the 4 places at once: voice (« Énigme : … », « Test de logique : … »), visual (the stakes object), hook card (red tag above the paradox: `window.HOOK_TAG = 'ÉNIGME'` or 'TEST PSYCHO') and the description's first words. Our past hooks never said « énigme » — scrollers didn't know what the video was.
    2. **Curiosité**: a stat/proof (« 9 personnes sur 10 se trompent »), the viewer's ego (« si tu trouves… ») or something shocking/unexpected (« son frère meurt… et il sourit »).
    3. **Contrepied**: the last part flips the expected direction (« …et c'est celui qui ne voit presque rien qui trouve », « …et il a dit merci »).
    Template: « <stakes/situation>… et <contrepied>. » under 3 s, e.g. « Quatre prisonniers, quatre bonnets… et c'est celui qui voit le moins qui trouve. »

21. **« Format allemand » ≤ 1 min (creator, 2026-11-10, test)**: hook = a person doing something strange, said as a fact (« Ce voleur a trouvé le seul faux sac… en une seule pesée ! »), story + rules (polaroids), « Comment il fait ? », paper card « ÉCRIS TA RÉPONSE EN COMMENTAIRE AVANT LA SOLUTION », follow CTA in our own words (« Une énigme par jour ici. Si c'est pas pour toi, abonne-toi pas : laisse la place aux autres »), then the **solution explained with diagrams** (polaroid + pills + big equation card), end card « T'AVAIS TROUVÉ ? ». Beat ids: ff s1… q c1 c2 sol1 sol2 sol3 end (don't call endCards). Reference: `episodes/les-sacs-solution/`. Compare its stats with the no-solution videos before choosing.

22. **Série « La bande de 47 »** (posted by the creator at 18:00, not by the Monday task). Economy (keep it coherent!): ❤️ 1 like = 1 €, ➕ 1 abonné = 5 € + 1 membre; prices must ALWAYS be above the current caisse (show store price struck through, Ryzen price, and « IL MANQUE X € » on each polaroid) so viewers have to like/follow to unlock the purchase; nothing voted = nothing bought, 💬 commenters drawn by lot to join; each episode ends on an A/B/C vote. Description starts with « Saison X · Jour N : <titre> ».
    Episode structure (2 agents, 2026-11-13), 30–40 s: hook with the Baron + stakes + countdown in ONE line (« Le Baron attaque dans 8 jours… et on n'a que 114 € ! ») on a moving shot of the Baron · quick thanks + money card (numbers on screen, not read out) · new recruits (only real news) · one-line problem · vote: say item + use only, prices ON SCREEN only, ask « A, B ou C + le rôle que tu veux » · closing beat: 1 like = 1 € / 1 abonné = 5 € + cliffhanger (« demain, le Baron frappe le port »). Cut repeats (countdown twice, rejected names → description).
    Inspiration kept by the creator (2026-11-13, a « je crée ma ville, jour N » series, 21 K likes / 2.7 K comments — keep only the FORMAT, never the political theme): « JOUR N » + name + population counter (habitants = abonnés) on frame 0 · « HIER, » recap with a stamp · a VS scoreboard against a rival (ours: « BANDE DE 47 : X membres VS LE BARON : Y hommes » → beat the Baron in numbers) · the real comment shown as a comment bubble on screen (« @pseudo : je veux être l'inventeur ») then fulfilled with the pseudo written on the result.
    New mechanics from Jour 3 (creator: « copie la forme », 2026-11-14): big scoreboard « BANDE DE 47 : X MEMBRES VS LE BARON : 1000 HOMMES » (season goal: be 1000 members before the attack on Jour 10) (X = real follower count) on every frame · « Abonne-toi = tu rejoins la bande » (identity, not money) · EVERY commenter is shown as a comment bubble (`bubble(x, y, pseudo, text, p)`) and gets the role he asked for (polaroid with his pseudo) while comments are few · yesterday's vote result bought on screen (« ACHETÉ ✓ ») · cliffhanger + vote on tomorrow's move. Reference: episodes/bande-jour-3.
    Battle logic: the Baron's 1000 men are spread (port 120, bank, casino…); daily missions face a garrison; our POWER = members + gadget bonuses (fumigènes +50, drone +30, grappin +30); the voted route can win or lose; only Jour 10 faces all 1000.
    QA (creator, 2026-11-14 — « arrête de m'envoyer des vidéos avec des problèmes »): before sending ANY video run `python3 engine/qa.py episodes/<slug>`, fix every FAIL, look at qa.jpg + qa_f0.jpg, then have an independent agent review logic/numbers/drop-off points. Send only after both pass.
    Persona test (3 agents: new 16-yo viewer, follower who voted, sound-off 24-yo), 2026-11-14 → rules: hook = event + « c'est TOI qui décides » (moving shot, say words clearly — « port » was heard « porc », say « le port de la ville »); one line for newcomers (« chaque abonné est un soldat, il en faut 1000 »); show the vote result in % and the result in ACTION (smoke clouds), not maths; captions 3–5 words; end on « tague un pote : vous entrez en duo » + cliffhanger, vote kept on the last frame; never 3 asks in a row (like/follow/save) in the voice.
    **Intro test (2026-11-14 evening, episodes/intro-lab, 5 variants × 4 age groups 12–34 + retention analyst, then a round 2):** ranking D « capture + tu décides » > E « real comment → in the video » > B « 76 VS 1000 » > A « abonne-toi… t'apparais » > C « finger taps follow ». Asking to follow in the first second (A, C) reads as begging/an ad → swiped < 1 s by every age. The winner is the hybrid **F** (predicted 3-s hold 52 % vs 31–38 %): **a real commenter is in danger NOW + the viewer decides**. Template for every episode intro (≤ 2.5 s):
      - frame 0: bright close-up of a REAL member (pseudo of a commenter) + his real comment bubble above him + the threat (Baron) beside him; hook card 2 short lines (« IL A COMMENTÉ… / LE BARON L'A CAPTURÉ 😱 »);
      - motion by 0.3 s (cage slams / door / alarm) with red flash + screen shake; Baron's expression changes;
      - by 0.5 s: « TU DÉCIDES 👇 » + A/B/C buttons with ONE-WORD labels slide up to ~72 % height (above TikTok's UI), stay on screen the whole intro, pulse once at ~4 s;
      - voice ≤ 2.5 s: event + « TOI » (« Le Baron a capturé un abonné… sauve-le, TOI ! »);
      - then (never before ~3 s) the proof + rule: « Lui, il a juste écrit un commentaire hier. Ici, chaque abonné est un soldat : X contre 1000 » with the scoreboard as an overlay, camera stays on the scene (no cut to wide); captions moved under the hook card (`window.CAP_Y = 600`).
      - The event changes each day (capture, robbery, betrayal, sabotage…) but must hit a REAL commenter and be decided by the vote. Reference: episodes/intro-lab/intro-F.
    **Intro v2 (2026-11-15, rounds 3–7, 3 independent evaluators per round, goal 60–65 % 3-s hold):** F scored ~36 % avg in round 3; the final **J** scored 47 / 48 / 60 % in round 7 (avg ≈ 52 %, before the last staggering fixes) — the two analysts cap small cartoon accounts around 50 %, so 60–65 % has to be confirmed with REAL TikTok stats (« % encore là à 0:03 »). Template J (reference episodes/intro-lab/intro-J), on top of the F rules:
      - frame 0: tight close-up of the member's TERRIFIED FACE (camera z ≈ 2.3) with the threat visibly in motion (cage in the air + speed lines), slam at ~0.18 s, light red flash, shake;
      - ONE text layer at a time: 0–1.1 s one-line hook = the stake (« 1 MIN POUR LE SAUVER ⏳ ») + big timer in tenths (1:00.0 → 0:59.9, never « 00:60 »); 0.3–1.1 s white box « TOI, TU LE SAUVES ? »; 1.1–2.4 s white label « IL A JUSTE COMMENTÉ ÇA 👇 » + big native-style comment (60 px text);
      - a new visual beat every ~0.5–0.7 s (slam, rattle bars, label, cut); hold the close-up until ~2 s, then cut to a medium two-shot (captive still big + villain fully in frame with the key);
      - 2.4 s « SINON IL DISPARAÎT 😱 » alone; ~3.2 s « ÉCRIS A, B OU C 👇 » + plain A/B/C buttons with one-word labels (never fake vote counts);
      - voice ≤ 3 s says what the screen says (« Une minute pour le sauver ! Il a juste commenté… et le Baron l'a capturé. »); no « PAF »-type kid words; captions only after ~5 s (`window.NOCAP_UNTIL`, set AFTER hookCard); « 1 abonné = 1 soldat » + scoreboard only after ~5 s.
    **Intro v3 = N (2026-11-15, rounds 8–10, « quelque chose qui interpelle »):** tested 3 « call-out » openers vs J — K « TOI. OUI, TOI 👉 » (47 staring into camera + pointing hand) ≈ 30–37 % → reads as worn ad / cringe; L fake TikTok notification ≈ 35–40 % → tiny, feels like a trick; M « commentaire supprimé par le Baron » ≈ 40–46 % alone but the best twist. Hybrid **N = J + M** won rounds 9 and 10 against J (52 / 52 / 60 % vs 45 / 44 / 50 %). Template N (reference episodes/intro-lab/intro-N):
      - frame 0: whole terrified face visible, tall cage falling from above (speed lines, top bar lands ABOVE the head), timer already ticking (« 0:59.9 »), big two-line card « IL A JUSTE COMMENTÉ… / 1 MIN POUR LE SAUVER ⏳ » in the upper-middle;
      - 0.45 s the card becomes his real comment (big, 80 px); 0.7 s red stamp « SUPPRIMÉ 🚫 » + red « Commentaire supprimé » crossed out (the twist must read muted); 1.05 s comment card disappears, cut to the grinning Baron with the key + « SUPPRIMÉ PAR LE BARON 😈 »; 1.8 s « SAUVE-LE · timer » + « SINON IL DISPARAÎT 😱 »; 2.4 s « ÉCRIS A, B OU C 👇 » + all three buttons at once;
      - voice « Il a juste commenté… le Baron l'a effacé. Et maintenant, c'est LUI qu'il veut effacer ! »; no « TOI, TU LE SAUVES ? » box (judged cringe/ad-like).
      - The « deleted comment » twist only works once or twice; next episodes keep the structure (real commenter + threat in motion + timer + twist that reads muted) and change the twist (stolen pseudo, betrayed by a member, banned from the garage…).
    **Intro v4 = O — CLARITY FIRST (2026-11-15, creator: « on comprend rien » about N):** a comprehension test (sound off + sound on + analyst) gave N 4/10 comprehension (« effacé » ≠ the cage on screen, « LUI » = who?, 5 texts in 2 s) vs **O 7.5–8/10**; N hooks a bit more at 3 s (~60 %) but loses people at 3–8 s (~30 % at 8 s vs ~40 % for O) and gets fewer comments. RULE: every intro must pass « can a newcomer say who / what happened / what to do in one sentence? » before any hold optimisation. Template O (reference episodes/intro-lab/intro-O), ONE idea per card, in story order:
      1. « IL A COMMENTÉ ÇA / POUR REJOINDRE LA BANDE » + his big real comment; the Baron slides in at the edge by 0.4 s (motion + threat without a new idea);
      2. on « capturé »: cage slams, cut to the two-shot, « MAIS LE BARON / L'A CAPTURÉ 😱 »;
      3. « TU AS 1 MINUTE / POUR LE SAUVER ⏳ » + timer (« 1:00 », never « 0:60 »);
      4. « ÉCRIS A, B OU C / EN COMMENTAIRE 👇 » + A ATTAQUER / B NÉGOCIER / C INFILTRER;
      5. its own beat: big « NOUS 76 VS LE BARON 1000 » + « ABONNE-TOI = +1 SOLDAT 💪 », voice « On est 76, le Baron en a 1000 : abonne-toi, et t'es un soldat de plus. »
      Voice names the person (« Salah a commenté pour rejoindre la bande… et le Baron l'a capturé ! »). Never use two different verbs for one event (effacé vs capturé).
    Audio: AAC encoding overshot the limiter on loud shouted words (peak +0.7 dBFS) → build.sh now adds lowpass=f=15000 after the limiter (peak back to −1.2 dBFS).
    **Real stats Jour 3 (2026-11-15):** 714 views (93 % For You), 48 likes, 11 comments, 1 share, 2 saves, 11 new followers; avg watch 9.2 s on 40 s (23 %), 5 % watched to the end, MOST VIEWERS LEFT AT 0:01 (wide Baron shot + card). Audience: 95 % non-followers; 18–24 34 %, 25–34 34 %, 35–44 10 %, 45–54 11 %, 55+ 11 %; 52 % men / 48 % women → persona tests must use THIS split (not 12–17-year-olds). Poll: C entrepôt 59 % (22 votes).
    **10-persona test Jour 4 (2026-11-15, real audience split):** v1 (31 s, port recap at 3 s, roll call at 16 s) leave seconds 1.8/17/18/4/2/5/1.7/3/8/25 → recap of yesterday = « épisode 4 d'une série que j'ai pas vue » (lost 3 at 3–5 s), roll call lost 2 at 16–18 s. v2 (hook → A/B/C at 2.5 s, recap moved to the END as « merci, votre vote C a gagné », 5 new members as small cards over the same scene) 2/14/17/5/1.5/5/1.5/5/9/end → 7/10 still there at 3 s (v1 6/10), 1 completion. RULES: never open on a recap; vote result goes at the end (followers want it, cold viewers don't); new members = small cards over the action, never a separate scene. Still lost: muted 30–38-year-old men at 1.5–2 s (« cartoon pour enfants ») and riddle lovers 47–56 at 5–9 s (« pas d'énigme à résoudre ») → idea for next episodes: make the rescue a REAL riddle (e.g. the cage padlock code) so the account's riddle audience can comment an answer.
    **Creator's rule (2026-11-15) — the Baron's army:** the Baron ALWAYS has 1000 soldiers (battles won don't reduce it). The goal of the season = **1000 followers = 1000 soldats**. The day we reach 1000 followers, the Baron recruits → **2000** (moving target, next season). Every episode's CTA asks for TWO things in the comments: the vote (A, B ou C) AND « le rôle que TU veux » — free text, NEVER suggest roles (creator: « on leur dit pas archer, médecin »). Each option states its RISK/COST with the caisse (e.g. A attaquer = on peut perdre des soldats; B négocier = il veut 150 €; C espion = gratuit mais on peut perdre Bob). Every episode reminds the rules and that viewers matter: « chaque like = 1 € dans la caisse, chaque abonné = 1 soldat, ton rôle en commentaire = tu rejoins la bande — sans vous on n'y arrivera pas ». Hook at 0 s = the event (« Le Baron a capturé Salah ! »), the why comes right after.
    Plan: Saison 1 (Jours 1–10) « La création de la bande » → Jour 10 = attaque finale contre le Baron · Saison 2 (from Jour 11) « La reprise du territoire » · Saison 3 « L'inspecteur contre-attaque » (cat-and-mouse escapes with the inspector, no fighting the police). Each episode opens with the countdown (« J-8 avant l'attaque finale »).

## Publishing (Metricool → TikTok)

- Metricool brand **blogId 7916684**, timezone Europe/Paris, network `tiktok`.
- Video must be a public URL: push the mp4 to this repo, then use
  `https://raw.githubusercontent.com/matteisbrnd-ai/Vid-o-47-/main/videos/<slug>.mp4`.
- `createScheduledPost` with `autoPublish: true`, `draft: false`, `tiktokData.title` (required), `privacyOption: PUBLIC_TO_EVERYONE`, `isAigc: true`.
- **Free plan: max 20 published posts per calendar month.** Schedule Monday→Friday at **12:00** via Metricool (since 2026-11-12: the creator posts the « bande de 47 » series himself at 18:00)
  (best slot measured: 12 h and 18 h); the 2 weekend videos are sent to the creator to post himself.
  Before scheduling, count what is already scheduled/published this month (`getScheduledPosts`) and never exceed 20.
- **Always get the creator's OK** on the week's videos before scheduling (he chose « avec ma validation »).

## Weekly routine (every Monday)

1. Read stats: Metricool `getAnalyticsDataByMetrics` for tiktok (views, likes, comments, shares, saves per post,
   last 7 days) — and/or ask the creator for TikTok Studio screenshots (retention curve, % watched to the end).
2. Append the numbers to the table below and write 2–3 lines of **lessons** (what beat the median, why).
3. Write 7 new riddles applying the format + lessons, build them, look at every `sheet.jpg`, fix, build finals.
4. Push videos, send the creator: the 7 videos, descriptions, solutions (for next-day pinned comment), the planning.
5. After his OK: schedule Mon–Fri 12:00 in Metricool (within the 20/month limit), weekend ones go to him.
6. Commit everything (episodes, videos, this file).

## Riddles already used (do not repeat)

baignoire/test d'entrée · 3 portes (feu/gardes/tigres) · ascenseur 9e/5e · pizza 8 parts · casino mot de passe ·
deux gardes vérité/mensonge · pont + garde 5 min · saut sans parachute (avion au sol) · lampe tunnel 17 min ·
3 interrupteurs · 2 mèches 45 min · douane brouettes · chalet neige sur le capot · gardien de nuit qui a rêvé ·
alibi du dimanche (facteur) · 2 ramoneurs · 3 coffres (Monty Hall) · prisonnier qui veut rester (tunnel, cuillères, pot) ·
clé de l'autre côté (journal sous la porte) · cocktail empoisonné (glaçons) · fenêtre trop haute · la panne (lire dans le noir) · le recrutement (jacuzzi : verre/casserole/seau, retirer la bonde) · la page (billet entre p. 47 et 48 = même feuille) · l'hôtel (voiture poussée jusqu'à l'hôtel = Monopoly) · l'enterrement (test du psychopathe : revoir la fille à un autre enterrement) · le verre d'eau (Tasty Crousty, BOUH = le hoquet) · les bonnets (4 prisonniers, 2 rouges 2 bleus, le silence du dernier) · les scooters (le plus lent gagne → échanger les scooters) · le drapeau (yacht, drapeau japonais « à l'envers ») · les traces (neige, sorti à reculons) · les diamants (« jamais touché à ses diamants » alors que personne ne l'avait dit) · le sauna (assommé avec un bloc de glace) · les lingots (17 lingots ½ ⅓ 1/9 → en ajouter un) · la chambre (hôtel, il a frappé à « sa » chambre) · le roi (phrase vraie → cachot / fausse → lions : « je finirai aux lions ») · le chien (le chien n'a pas aboyé → le jardinier) · les sacs (10 sacs, 1 faux, 1 pesée : 1, 2, 3… pièces) · le petit (ascenseur, trop petit pour le bouton 20, parapluie) · la chaussure (une chaussure au coffre pour ne rien oublier) · la barque (loup, chèvre, chou) · l'escargot (puits 10 m, +3/−2 → 8 jours) · les sabliers (7 + 4 min → 9 min pile) · le camion (GTA 6, pont 3,50 m → dégonfler les pneus) · le contrebandier (douane, il passe des scooters — brouillon, déjà fait) · le fleuve (largeur sans mètre → main en visière, se retourner, compter les pas) · l'échelle (bateau, marée +50 cm/h → toujours 2 barreaux, le bateau flotte) · les étiquettes (3 sacs OR/ARGENT/MÉLANGE tous mal étiquetés → piocher dans « MÉLANGE ») · l'ours (4 murs au sud = pôle Nord → blanc) · les jetons (10 rouges + 10 bleus, sans regarder → 3 jetons) · les pièces (20 pièces yeux bandés, 10 face → prendre 10 et les retourner toutes)

## Stats log

| Date posted | Video | Length | Views | Likes | Comments | Shares | Saves | Avg watch | Completion | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-26 | La bonne porte (old style) | 32 s | 671 | 29 | 1 | – | 2 | 10.8 s | 5.1 % | |
| 2026-10-30 | Le test (baignoire) | 61 s | 949 | 88 | 17 | – | 9 | 16.7 s | 7.1 % | open question, most comments |
| 2026-10-31 | Les 3 portes | 61 s | 808 | 55 | 3 | – | 5 | 11.2 s | 2.8 % | posted 10:51, weak |
| 2026-11-01 | Le casino (with solution) | 65 s | 764 | 59 | 6 | – | 4 | 15.1 s | 3.4 % | same time as pizza |
| 2026-11-01 | La pizza (with solution) | 62 s | 795 | 44 | 2 | – | 4 | 16.6 s | 4.2 % | ~50 % gone before 0:03 |
| 2026-11-03 | Les mèches (with solution) | 48 s | 1 073 | 57 | 3 | 1 | 8 | 18.4 s | 9.7 % | toon style, strong hook image |
| 2026-11-05 | Le gardien de nuit | 37 s | 2 050 | 141 | 14 | 1 | 5 | 18.6 s | 24.3 % | **best**: flash-forward, story, 1-word answer |
| 2026-11 | La lampe | 37 s | 1 007 | | | | | | | |
| 2026-11 | Les interrupteurs | 32 s | 736 | | | | | | | « mal expliqué » |
| 2026-11 | La douane | 39 s | 718 | | | | | | | |
| 2026-11 | Le chalet | 43 s | 786 | | | | | | | people found « neige » |
| 2026-11-06 | L'alibi | 30 s | 771 | | | | | | | first hours only |
| 2026-11-06 | Les coffres | 30 s | 680 | | | | | | | big debate in comments |
| 2026-11-04 | Démasqué (alibi dimanche) | 41 s | 790 | 55 | 6 | 1 | 7 | 11.5 s | 9.3 % | 28 % avg watched (stats 2026-11-08) |
| 2026-11-05 | Le gardien de nuit (update) | 37 s | 2 201 | 145 | 17 | 1 | 5 | 18.5 s | 24.0 % | 51 % avg watched — only video past the test batch |
| 2026-11-05 | 3 suspects | 30 s | 787 | 68 | 9 | 2 | 7 | 9.3 s | 9.6 % | 31 % |
| 2026-11-06 | Les coffres (update) | 30 s | 743 | 39 | 6 | 0 | 2 | 9.8 s | 11.2 % | 32 % |
| 2026-11-06 | Les ramoneurs | 31 s | 753 | 58 | 4 | 1 | 1 | 10.3 s | 10.6 % | 33 % |
| 2026-11-07 | La panne (new style: cuffs insert, Henri) | 28 s | 796 | 81 | 7 | 2 | 2 | 11.9 s | 18.5 % | posted 10:18 |
| 2026-11-07 | La page (new style, ElevenLabs Nicolas) | 23 s | 770 | 44 | 2 | 0 | 4 | 10.5 s | 20.5 % | 45 % avg watched, posted 19:03 |
| 2026-11-08 | L'hôtel (paradox hook + hookCard) | 29 s | 735 | 65 | 3 | 0 | – | – | – | Metricool 2026-11-09, posted 06:49 (early morning) |
| 2026-11-07 | La page (update) | 23 s | 778 | 44 | 2 | 0 | – | – | – | Metricool 2026-11-09 |
| 2026-11-07 | La panne (update) | 27 s | 797 | 81 | 7 | 2 | – | – | – | Metricool 2026-11-09 |
| 2026-11-08 16:09 | L'enterrement (test psycho, GTA 6) | 29 s | 1 144 | 81 | 15 | 2 | – | – | – | Metricool 2026-11-16 |
| 2026-11-09 07:17 | Les bonnets | 32 s | 935 | 41 | 4 | 0 | – | – | – | Metricool 2026-11-16 (all times Paris) |
| 2026-11-09 18:01 | Le roi (compte à rebours) | 35 s | 977 | 73 | 5 | 0 | – | – | – | |
| 2026-11-10 15:55 | Les sacs (sans solution) | 33 s | 811 | 32 | 10 | 1 | – | – | – | |
| 2026-11-10 18:03 | Le chien (3 suspects) | 34 s | 794 | 64 | 11 | 0 | – | – | – | |
| 2026-11-11 10:04 | **Le petit (format allemand)** | 44 s | **3 478** | **393** | 4 | 4 | – | – | – | **record**: paradoxe du quotidien + solution |
| 2026-11-11 18:03 | Le drapeau | 33 s | 813 | 77 | 5 | 0 | – | – | – | |
| 2026-11-12 07:02 | La chaussure (allemand) | 43 s | 761 | 53 | 1 | 1 | – | – | – | posted early morning |
| 2026-11-12 11:10 | L'escargot (allemand) | 39 s | 842 | 58 | 2 | 0 | – | – | – | « presque tout le monde répond… » hook |
| 2026-11-12 18:02 | Le sauna | 36 s | 779 | 28 | 2 | 0 | – | – | – | |
| 2026-11-12 18:18 | Bande Jour 1 | 35 s | 1 051 | 63 | 6 | 0 | – | – | – | série (créateur) |
| 2026-11-13 12:05 | Les diamants | 30 s | 741 | 34 | 4 | 0 | – | – | – | Metricool 12 h |
| 2026-11-13 17:44 | Bande Jour 2 | 35 s | 740 | 67 | 3 | 1 | – | – | – | série |
| 2026-11-14 12:31 | Le camion (allemand, GTA 6) | 45 s | 1 324 | 68 | 9 | 1 | – | – | – | 2nd best of the week |
| 2026-11-14 18:13 | Bande Jour 3 | 40 s | 727 | 49 | 11 | 1 | – | – | – | série |
| 2026-11-15 15:19 | Le fleuve (allemand) | 44 s | 1 045 | 62 | 0 | 1 | – | – | – | |
| 2026-11-15 17:56 | Bande Jour 4 | 34 s | 437 | 28 | 2 | 1 | – | – | – | série, < 24 h at reading time |

**Week 2026-11-09 → 11-15 (Metricool 2026-11-16, 16 videos):** riddle median ≈ 812 views; watch time, completion and saves still null in Metricool → ask the creator for TikTok Studio screenshots.
Lessons:
- **Format allemand wins**: the 5 riddles with the solution explained average 1 490 views (le petit 3 478, camion 1 324, fleuve 1 045, escargot 842, chaussure 761) vs 836 for the 7 without solution (countdown / suspects 741–977). Le petit = account record (393 likes, 11 % like rate) with a famous lateral riddle + an everyday paradox hook (« il habite au 20e… et s'arrête au 10e »). → Week of 2026-11-16: 5 famous riddles, all in format allemand.
- Comments still come from « qui / combien » questions with a short answer (chien 11, sacs 10, camion 9); « comment il fait ? » with a long answer got 0 (fleuve). Prefer questions answerable in one word or one number.
- 12 h slot vs series 18 h: same-day riddles beat the series (camion 1 324 vs Jour 3 727; fleuve 1 045 vs Jour 4 437). The series is decreasing (1 051 → 740 → 727 → 437) but gets more comments per view (Jour 3: 11). The slot matters less than the riddle: diamants at 12 h stayed at 741.

**Week 2026-11-02 → 11-08 (Metricool, 14 videos):** median ≈ 785 views, only « Le gardien » (2 203) left the test batch.
Metricool returns no watch time / completion for these posts any more (null): ask the creator for TikTok Studio screenshots.
Lessons:
- The paradox hook alone did not unlock distribution (L'hôtel 735, posted 06:49): keep it, but post at 18:00 and judge hooks on « % still watching at 0:03 », not on views.
- The toon/Galagade style earns more likes per view (La panne 10.2 %, L'hôtel 8.8 % vs 5–7 % for the old style): keep investing in the look.
- Comments come from « who lied / why » stories with a one-word answer (gardien 17, 3 suspects 9, panne 7); quiz framing (« 9 sur 10… pas toi ? », La page) got 2. This week: 4 « liar spotted » stories out of 7.

All videos: TikTok says « most viewers stopped at 0:01 »; views come in the first 3–4 h then stop.
Account on 2026-11-06: 40 followers, 1 273 likes. Plateau 650–1 100 views = TikTok's first test batch;
the lever is the first 3 s (hook) + shares.

**Reference accounts for riddles (2026-11-14):** Meister Knobel (@meisterknobel4, German) and Wesh, l'énigme (@leptitfaitdivers, FR, hero Kevin). Pick their top-viewed riddles we haven't done, copy only the shot plan (stakes scene → close-up of the problem → « impossible » card → hero arrives → question → diagram → payoff), never their art or text. Already taken from them: chaussure, petit, barque, bonnets, escargot, cocktail, douane/contrebandier, camion.

## Les histoires de 47 (format récit, depuis 2026-11-16)
- #1 « Le fantôme du musée » (episodes/histoire-musee, 49 s) : 47 remet les vrais tableaux, le directeur était le faussaire. CTA binaire « L'ARRÊTER / MERCI 47 » en commentaire.
- Règles : histoire originale (format kagen0w seulement), plan nouveau toutes les 2–3 s, objets-preuves lisibles en muet (caméra REC, journal, labo, menottes + photo du coupable), ne jamais montrer des étiquettes qui contredisent la voix.
- #2 « Le cahier de Mamie Jeanne » (episodes/histoire-mamie, 61 s) : structure du viral « papi Léon » (mort au hook + 3 héritiers + piège + morale), histoire originale. Hook : « ce n'est pas le notaire qui a choisi l'héritier… c'est un voleur ». Miniatures : textes dans la zone 3:4 (y 240–1680).
