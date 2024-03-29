#!/bin/sh

mkdir -p ~/.local/share/fonts

# NerdFonts
mkdir nerdfont-firacode
cd nerdfont-firacode
curl -OL https://github.com/ryanoasis/nerd-fonts/releases/latest/download/FiraCode.tar.xz
tar -xvf FiraCode.tar.xz
rm FiraCode.tar.xz
cd ..

rm -r ~/.local/share/fonts/
mv nerdfont-firacode ~/.local/share/fonts/

fc-cache -v
