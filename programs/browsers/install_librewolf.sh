#!/bin/sh

echo "GPG Key: 034F7776EF5E0C613D2F7934D29FBD5F93C0CFC3"

dnf config-manager --add-repo https://rpm.librewolf.net/librewolf-repo.repo
dnf install librewolf
