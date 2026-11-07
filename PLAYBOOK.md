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
Voice: Microsoft « Henri » (edge-tts), default `+25% / +12Hz`. Spoken text writes numbers in words
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

## Publishing (Metricool → TikTok)

- Metricool brand **blogId 7916684**, timezone Europe/Paris, network `tiktok`.
- Video must be a public URL: push the mp4 to this repo, then use
  `https://raw.githubusercontent.com/matteisbrnd-ai/Vid-o-47-/main/videos/<slug>.mp4`.
- `createScheduledPost` with `autoPublish: true`, `draft: false`, `tiktokData.title` (required), `privacyOption: PUBLIC_TO_EVERYONE`, `isAigc: true`.
- **Free plan: max 20 published posts per calendar month.** Schedule Monday→Friday at **18:00** via Metricool
  (best slot measured: 12 h and 18 h); the 2 weekend videos are sent to the creator to post himself.
  Before scheduling, count what is already scheduled/published this month (`getScheduledPosts`) and never exceed 20.
- **Always get the creator's OK** on the week's videos before scheduling (he chose « avec ma validation »).

## Weekly routine (every Monday)

1. Read stats: Metricool `getAnalyticsDataByMetrics` for tiktok (views, likes, comments, shares, saves per post,
   last 7 days) — and/or ask the creator for TikTok Studio screenshots (retention curve, % watched to the end).
2. Append the numbers to the table below and write 2–3 lines of **lessons** (what beat the median, why).
3. Write 7 new riddles applying the format + lessons, build them, look at every `sheet.jpg`, fix, build finals.
4. Push videos, send the creator: the 7 videos, descriptions, solutions (for next-day pinned comment), the planning.
5. After his OK: schedule Mon–Fri 18:00 in Metricool (within the 20/month limit), weekend ones go to him.
6. Commit everything (episodes, videos, this file).

## Riddles already used (do not repeat)

baignoire/test d'entrée · 3 portes (feu/gardes/tigres) · ascenseur 9e/5e · pizza 8 parts · casino mot de passe ·
deux gardes vérité/mensonge · pont + garde 5 min · saut sans parachute (avion au sol) · lampe tunnel 17 min ·
3 interrupteurs · 2 mèches 45 min · douane brouettes · chalet neige sur le capot · gardien de nuit qui a rêvé ·
alibi du dimanche (facteur) · 2 ramoneurs · 3 coffres (Monty Hall) · prisonnier qui veut rester (tunnel, cuillères, pot) ·
clé de l'autre côté (journal sous la porte) · cocktail empoisonné (glaçons) · fenêtre trop haute · la panne (lire dans le noir) · le recrutement (jacuzzi : verre/casserole/seau, retirer la bonde) · la page (billet entre p. 47 et 48 = même feuille)

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

Account on 2026-11-06: 40 followers, 1 273 likes. Plateau 650–1 100 views = TikTok's first test batch;
the lever is the first 3 s (hook) + shares.
