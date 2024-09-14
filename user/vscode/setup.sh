#!/bin/sh

mkdir -p ~/.config/Code/User

ln -s -f ~/Environment/user/vscode/settings.json ~/.config/Code/User/settings.json
ln -s -f ~/Environment/user/vscode/keybindings.json ~/.config/Code/User/keybindings.json
