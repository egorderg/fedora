#!/bin/sh

cp /usr/share/applications/steam.desktop ~/.local/share/applications/steam.desktop
sed s/PrefersNonDefaultGPU=true/PrefersNonDefaultGPU=false/ -i ~/.local/share/applications/steam.desktop
sed 's/Exec=\/usr\/bin\/steam %U/Exec=env STEAM_FORCE_DESKTOPUI_SCALING=2 \/usr\/bin\/steam %U/' -i ~/.local/share/applications/steam.desktop
