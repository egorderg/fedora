#!/bin/bash
# Patch VS Code desktop entry to always run with GPU flags

# Path to your local copy
LOCAL_DESKTOP="$HOME/.local/share/applications/code.desktop"

# Make sure the directory exists
mkdir -p "$(dirname "$LOCAL_DESKTOP")"

# Copy the system desktop file if it’s not already in place
if [ ! -f "$LOCAL_DESKTOP" ]; then
    cp /usr/share/applications/code.desktop "$LOCAL_DESKTOP"
fi

# The new Exec command with flags
NEW_EXEC='Exec=code --enable-gpu-rasterization --enable-zero-copy --ignore-gpu-blocklist --enable-features=Vulkan,CanvasOopRasterization %F'

# Replace all Exec lines
sed -i "s|^Exec=.*|$NEW_EXEC|" "$LOCAL_DESKTOP"

echo "✅ Patched $LOCAL_DESKTOP with GPU acceleration flags."
