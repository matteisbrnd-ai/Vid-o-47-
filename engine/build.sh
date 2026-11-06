#!/bin/bash
# usage: engine/build.sh episodes/<slug>            -> videos/<slug>.mp4 (+ videos/<slug>.jpg cover)
#        engine/build.sh episodes/<slug> --stills 1,5,9   -> episodes/<slug>/sheet.jpg preview only
#        VOICE_FILE=recording.m4a engine/build.sh episodes/<slug>   -> uses the creator's own voice (engine/uservoice.py)
set -e
ROOT=$(cd "$(dirname "$0")/.." && pwd); EP=$(cd "$1" && pwd); SLUG=$(basename "$EP")
[ -d "$ROOT/engine/node_modules/@fontsource" ] || (cd "$ROOT/engine" && npm i --silent @fontsource/bebas-neue @fontsource/montserrat >/dev/null)
python3 -c "import edge_tts" 2>/dev/null || pip install -q --break-system-packages edge-tts
if [ -n "$VOICE_FILE" ]; then python3 "$ROOT/engine/uservoice.py" "$EP" "$VOICE_FILE"; else python3 "$ROOT/engine/voice.py" "$EP"; fi
if [ "$2" = "--stills" ]; then node "$ROOT/engine/render.cjs" "$EP" --stills "$3"; exit 0; fi
node "$ROOT/engine/render.cjs" "$EP"
python3 "$ROOT/engine/mix.py" "$EP"
mkdir -p "$ROOT/videos"
ffmpeg -y -loglevel error -i "$EP/silent.mp4" -i "$EP/mix.wav" -c:v copy -af loudnorm=I=-14:TP=-1 -c:a aac -b:a 192k -shortest "$ROOT/videos/$SLUG.mp4"
ffmpeg -y -loglevel error -ss 0.6 -i "$ROOT/videos/$SLUG.mp4" -frames:v 1 "$ROOT/videos/$SLUG.jpg"
echo "OK videos/$SLUG.mp4 $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ROOT/videos/$SLUG.mp4")s"
