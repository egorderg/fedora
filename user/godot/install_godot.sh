#!/bin/sh

mkdir -p ~/opt/godot

wget -O ./godot.zip https://github.com/godotengine/godot/releases/download/4.2.2-stable/Godot_v4.2.2-stable_linux.x86_64.zip
unzip ./godot.zip -d ~/opt/godot
mv ~/opt/godot/Godot_v4.2.2-stable_linux.x86_64 ~/opt/godot/godot
rm ./godot.zip

ln -s -f ~/Environment/user/godot/godot.sh ~/.bashrc.d/godot.sh

echo "$(cat <<EOF
[Desktop Entry]
Name=Godot
Comment=Open Source Game Engine
Icon=godot
Exec=${HOME}/opt/godot/godot
Type=Application
Terminal=False
EOF
)" > $HOME/.local/share/applications/godot.desktop

update-desktop-database ~/.local/share/applications
