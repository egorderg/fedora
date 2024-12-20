#!/bin/sh

dnf install jellyfin
systemctl enable --now jellyfin

echo "Activate Hardware Transcoding in Jellyfin"
echo "Remote Connection is not required"

echo "Set external drive to decrypt on startup via Disks and set the password"
echo "Set external drive to mount on startup via Disks and set the mount point to '/mnt/media1' or something"
echo "Allow other to create/delete files in the mounted directory"