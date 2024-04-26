#!/bin/sh

dnf install python3.11
dnf install golang

cp ./dev_env.sh /etc/profile.d/dev_env.sh
