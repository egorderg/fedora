#!/bin/sh

mkdir ~/.nvm
wget -O ~/.nvm/nvm.sh https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/nvm.sh
wget -O ~/.nvm/nvm-exec https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/nvm-exec
chmod a+x ~/.nvm/nvm-exec

ln -s -f ~/Environment/user/nvm/init_nvm.sh ~/.bashrc.d/init_nvm.sh
ln -s -f ~/Environment/user/nvm/init_nvm.fish ~/.config/fish/conf.d/init_nvm.fish
ln -s -f ~/Environment/user/nvm/functions/nvm.fish ~/.config/fish/functions/nvm.fish
