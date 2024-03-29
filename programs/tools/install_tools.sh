#!/bin/sh

dnf install fzf
dnf install ripgrep
dnf install bat
dnf install fd-find
dnf install unrar
dnf install yt-dlp

dnf install python3.11

cp ./tools_env.sh /etc/profile.d/tools_env.sh
