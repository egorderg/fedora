#!/bin/sh

mise x node@22 -- node ./setup.js

mkdir -p ~/.config/zed

ln -s -f ~/Environment/user/zed/settings.json ~/.config/zed/settings.json
ln -s -f ~/Environment/user/zed/out/keymap.json ~/.config/zed/keymap.json
