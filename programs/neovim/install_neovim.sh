#!/bin/sh

dnf install neovim

mkdir -p /etc/xdg/nvim
cp ./init.vim /etc/xdg/nvim/init.vim

cp ./neovim_env.sh /etc/profile.d/neovim_env.sh
