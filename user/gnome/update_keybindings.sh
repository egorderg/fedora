#!/bin/sh

dconf write /org/gnome/desktop/wm/keybindings/switch-windows "['<Super>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-windows-backward "['<Shift><Super>Tab']"
dconf write /org/gnome/desktop/wm/keybindings/switch-applications "@as []"
dconf write /org/gnome/desktop/wm/keybindings/switch-applications-backward "@as []"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-1 "['<Super>1']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-2 "['<Super>2']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-3 "['<Super>3']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-4 "['<Super>4']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-5 "['<Super>5']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-1 "['<Shift><Super>1']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-2 "['<Shift><Super>2']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-3 "['<Shift><Super>3']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-4 "['<Shift><Super>4']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-5 "['<Shift><Super>5']"

dconf write /org/gnome/desktop/wm/keybindings/close "['<Alt>F4']"
dconf write /org/gnome/desktop/wm/keybindings/minimize "['<Super>w']"
dconf write /org/gnome/desktop/wm/keybindings/toggle-maximized "['<Super>f']"
dconf write /org/gnome/desktop/wm/keybindings/begin-move "['<Super>v']"
dconf write /org/gnome/desktop/wm/keybindings/begin-resize "['<Super>r']"
dconf write /org/gnome/desktop/wm/keybindings/activate-window-menu "['<Super>space']"
dconf write /org/gnome/desktop/wm/keybindings/toggle-fullscreen "@as []"
dconf write /org/gnome/desktop/wm/keybindings/toggle-on-all-workspaces "@as []"
dconf write /org/gnome/desktop/wm/keybindings/maximize "@as []"
dconf write /org/gnome/desktop/wm/keybindings/unmaximize "@as []"
dconf write /org/gnome/desktop/wm/keybindings/maximize-horizontally "@as []"
dconf write /org/gnome/desktop/wm/keybindings/maximize-vertically "@as []"
dconf write /org/gnome/desktop/wm/keybindings/raise "@as []"
dconf write /org/gnome/desktop/wm/keybindings/raise-or-lower "@as []"
dconf write /org/gnome/desktop/wm/keybindings/panel-run-dialog "@as []"


dconf write /org/gnome/shell/keybindings/switch-to-application-1 "@as []"
dconf write /org/gnome/shell/keybindings/switch-to-application-2 "@as []"
dconf write /org/gnome/shell/keybindings/switch-to-application-3 "@as []"
dconf write /org/gnome/shell/keybindings/switch-to-application-4 "@as []"

dconf write /org/gnome/shell/keybindings/focus-active-notification "['<Super>n']"
dconf write /org/gnome/shell/keybindings/toggle-application-view "['<Super>a']"
dconf write /org/gnome/shell/keybindings/toggle-message-tray "['<Super>s']"
dconf write /org/gnome/shell/keybindings/toggle-quick-settings "@as []"
dconf write /org/gnome/shell/keybindings/toggle-overview "@as []"
dconf write /org/gnome/mutter/wayland/keybindings/restore-shortcuts "@as []"

dconf write /org/gnome/settings-daemon/plugins/media-keys/screensaver "@as []"
dconf write /org/gnome/settings-daemon/plugins/media-keys/logout "@as []"

dconf write /org/gnome/desktop/wm/keybindings/switch-input-source "@as []"
dconf write /org/gnome/desktop/wm/keybindings/switch-input-source-backward "@as []"
