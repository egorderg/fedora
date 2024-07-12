#!/bin/sh

echo "Download Android Studio from https://developer.android.com/studio"
echo "Use ~/.android_sdk as your sdk folder"

mkdir -p ~/.android_sdk

ln -s -f ~/Environment/user/android_sdk/android_sdk.sh ~/.bashrc.d/android_sdk.sh
ln -s -f ~/Environment/user/android_sdk/android_sdk.fish ~/.config/fish/conf.d/android_sdk.fish

sudo dnf install android-tools
