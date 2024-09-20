#!/bin/sh

dnf install fish
dnf install util-linux-user

rm /usr/share/applications/fish.desktop

echo "Don't set fish as your default shell, configure the terminal to use it as default"
