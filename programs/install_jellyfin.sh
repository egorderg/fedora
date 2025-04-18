#!/bin/sh

dnf install jellyfin
systemctl enable --now jellyfin

echo "Activate Hardware Transcoding in Jellyfin"
echo "Download jellyfin-ffmpeg from github, move it to /var/lib/jellyfin and update JELLYFIN_FFMPEG_OPT in /etc/sysconfig/jellyfin with the new ffmpeg because you can't change it in the jellyfin settings"
echo "Remote Connection is not required"

echo "Set external drive to decrypt on startup via Disks and set the password"
echo "Set external drive to mount on startup via Disks and set the mount point to '/mnt/media1' or something"
echo "Allow other to create/delete files in the mounted directory"