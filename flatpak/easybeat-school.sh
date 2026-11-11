#!/bin/sh
export TMPDIR="$XDG_RUNTIME_DIR/app/$FLATPAK_ID"
# From 0.8.4 the tar.gz has the program as easybeat-school.bin (easybeat-school there is its launcher script, not for zypak).
bin=/app/easybeat/easybeat-school.bin
[ -x "$bin" ] || bin=/app/easybeat/easybeat-school
exec zypak-wrapper "$bin" --ozone-platform=x11 "$@"
