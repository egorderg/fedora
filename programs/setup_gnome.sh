#!/bin/sh

dnf remove yelp
dnf remove rhythmbox
dnf remove cheese
dnf remove totem
dnf remove simple-scan
dnf remove gnome-connections
dnf remove gnome-contacts
dnf remove gnome-weather
dnf remove gnome-clocks
dnf remove gnome-maps
dnf remove gnome-tour

dnf group remove libreoffice
dnf remove libreoffice-core

dnf install libgtop2-devel
dnf install lm_sensors

dnf install seahorse
dnf install gnome-tweaks
dnf install gnome-extensions-app
dnf install dconf-editor

dnf install papirus-icon-theme
