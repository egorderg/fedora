#!/bin/sh

dconf write /org/gnome/desktop/interface/color-scheme "'prefer-dark'"
dconf write /org/gnome/desktop/interface/enable-hot-corners "false"

dconf write /org/gnome/shell/app-switcher/current-workspace-only "true"

dconf write /org/gnome/desktop/session/idle-delay "uint32 600"
dconf write /org/gnome/desktop/sound/event-sounds "false"
dconf write /org/gnome/desktop/media-handling/autorun-never "true"

dconf write /org/gnome/system/location/enabled "false"
dconf write /org/gnome/desktop/privacy/remember-recent-files "false"
dconf write /org/gnome/desktop/privacy/remove-old-trash-files "true"
dconf write /org/gnome/desktop/privacy/remove-old-temp-files "true"
dconf write /org/gnome/desktop/privacy/old-files-age "uint32 7"
dconf write /org/gnome/desktop/privacy/report-technical-problems "false"
dconf write /org/gnome/desktop/privacy/disable-camera "true"
dconf write /org/gnome/desktop/privacy/disable-microphone "true"

dconf write /org/gnome/desktop/peripherals/keyboard/repeat "true"
dconf write /org/gnome/desktop/peripherals/keyboard/repeat-interval "25"
dconf write /org/gnome/desktop/peripherals/keyboard/delay "uint32 250"

dconf write /org/gnome/mutter/dynamic-workspaces "false"
dconf write /org/gnome/desktop/wm/preferences/num-workspaces "5"

# Nautilus
dconf write /org/gtk/gtk4/settings/file-chooser/sort-directories-first "true"
dconf write /org/gnome/nautilus/preferences/default-folder-viewer "'list-view'"
dconf write /org/gnome/nautilus/list-view/default-zoom-level "'small'"
dconf write /org/gnome/nautilus/list-view/default-visible-columns "['name', 'size', 'date_modified_with_time', 'date_created', 'owner', 'group', 'permissions']"
dconf write /org/gnome/nautilus/list-view/default-column-order "['name', 'size', 'date_modified_with_time', 'date_created', 'owner', 'group', 'permissions', 'type', 'where', 'date_modified', 'date_accessed', 'recency', 'detailed_type']"

echo "Open Gnome Tweaks and change the appearance"
