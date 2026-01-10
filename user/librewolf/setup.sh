#!/bin/sh

mkdir -p ~/.librewolf/native-messaging-hosts
ln -s -f ~/Environment/user/librewolf/librewolf.overrides.cfg ~/.librewolf/librewolf.overrides.cfg

echo "Set Search Engine to: SearXNG - searx.be"
echo "Set Cookie Exceptions in Settings -> Privacy & Security -> Cookies and Site Data -> Manage Exceptions:"
echo "  youtube.com"
echo "  outlook.com"
echo "  proton.me"
echo "  github.com"

echo "Extensions:"
echo "  https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/"
echo "  https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/"

echo "Set Bookmarks"

echo "Manage Exceptions from Fingerprinting inside the Settings and not librewolf.overrides.cfg"