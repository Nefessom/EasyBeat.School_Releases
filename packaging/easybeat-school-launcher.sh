#!/bin/sh
# Start file of the Linux tar.gz: the program itself is easybeat-school.bin beside it.
# Ubuntu 24.04+ (AppArmor) shuts unprivileged user namespaces, so Chromium needs chrome-sandbox owned by root with setuid;
# an unpacked archive has neither, and the program would abort at once ("The SUID sandbox helper binary was found, but is
# not configured correctly"). Then it starts without that sandbox, as the AppImage does. Owner-made setuid copies keep it.
here=$(dirname "$(readlink -f "$0")")
export EB_LINUX_LAUNCHER="$here/easybeat-school"   # the .desktop the program writes points here, not at the .bin
sandbox="$here/chrome-sandbox"
if [ "$(stat -c %u "$sandbox" 2>/dev/null)" = 0 ] && [ -u "$sandbox" ]; then
  exec "$here/easybeat-school.bin" "$@"
fi
exec "$here/easybeat-school.bin" --no-sandbox "$@"
