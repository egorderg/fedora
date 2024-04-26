#!/bin/sh

python3.11 -m ensurepip
pip3.11 install --user beets[fetchart,embedart]
pip3.11 install --user requests

mkdir -p ~/.config/beets
ln -f -s ~/Environment/user/beets/config.yaml ~/.config/beets/config.yaml
