#!/bin/sh

python3.11 -m ensurepip
pip3.11 install --user pyload-ng[all]

mkdir -p ~/.pyload/settings
ln -s -f ~/Environment/user/pyload/pyload.cfg ~/.pyload/settings/pyload.cfg

mkdir -p ~/.config/systemd/user
ln -s -f ~/Environment/user/pyload/pyload.service ~/.config/systemd/user/pyload.service

systemctl enable --user pyload
systemctl start --user pyload
systemctl status --user pyload

python ./GetRealdebridToken.py

echo "Login: pyload/pyload"
echo "Accounts -> RealdebridCom"
echo "Plugins -> 'ExtractArchive' -> Activated -> 'on'"
