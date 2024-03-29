#!/bin/sh

pip install --user beets[fetchart,embedart]
pip install --user requests

ln -f -s ~/Environment/programs/beets/config.yaml ~/.config/beets/config.yaml
