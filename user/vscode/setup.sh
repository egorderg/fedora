#!/bin/sh

mise x node@22 -- node ./setup.js

mkdir -p ~/.config/Code/User

ln -s -f ~/Environment/user/vscode/settings.json ~/.config/Code/User/settings.json
ln -s -f ~/Environment/user/vscode/out/keybindings.json ~/.config/Code/User/keybindings.json

echo "Test FPS:"
echo "  F1 -> Toggle Developer Tools"
echo "  Ctrl + Shift + P in the Developer Tools"
echo "  FPS Meter"