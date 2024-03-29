#!/bin/bash

EXTENSION_ID=$1
SHELL_VERSION=$2
VERSION_TAG=$(curl -Lfs "https://extensions.gnome.org/extension-query/?search=$EXTENSION_ID" | jq ".extensions | (map(select(.uuid == \"$EXTENSION_ID\"))[0]) | .shell_version_map.\"$SHELL_VERSION\".pk")

wget -O ${EXTENSION_ID}.zip "https://extensions.gnome.org/download-extension/${EXTENSION_ID}.shell-extension.zip?version_tag=$VERSION_TAG"
# --force overwrites the extension
gnome-extensions install --force ${EXTENSION_ID}.zip
rm ${EXTENSION_ID}.zip
