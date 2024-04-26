#!/bin/sh

mkdir ~/.config/fish/functions
mkdir ~/.config/fish/conf.d

wget -O ~/.config/fish/functions/__bass.py https://raw.githubusercontent.com/edc/bass/master/functions/__bass.py
wget -O ~/.config/fish/functions/bass.fish https://raw.githubusercontent.com/edc/bass/master/functions/bass.fish

ln -s -f ~/Environment/user/fish/config.fish ~/.config/fish/config.fish
ln -s -f ~/Environment/user/fish/functions/munrar.fish ~/.config/fish/functions/munrar.fish
