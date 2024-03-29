#!/bin/sh

flatpak remote-add --user --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install --user flathub org.keepassxc.KeePassXC

echo "Settings -> General -> Start only a single instance"
echo "Settings -> General -> Automatically launch KeePassXC at system startup"
echo "Settings -> General -> Minimize window at application startup"

echo "Settings -> General -> Minimize instead of app exit"
echo "Settings -> General -> Show a system tray icon"
echo "Settings -> General -> Hide window to system tray when minimized"

echo "Settings -> Browser Integration -> Enable browser integration"
echo "Settings -> Browser Integration -> Request to unlock the database if it is locked"
echo "Settings -> Browser Integration -> Match URL scheme"
echo "Settings -> Browser Integration -> Advanced -> Use a custom browser configuration location"
echo "Settings -> Browser Integration -> Advanced -> Browser type: Firefox"
echo "Settings -> Browser Integration -> Advanced -> Config Location: ~/.librewolf/native-messaging-hosts"
