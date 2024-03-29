# Backup

## Environment

Commit and push newest changes

## Development

Commit and push newest changes.
Some folder should be uploaded to a cloud storage.

## Cloud

- Music
- Pictures
- Documents

## Important Files

- KeePassXC Databases
- GnuPG
- SSH
- Bookmarks
- Saves of Games
- Playlists

## Migration

- Check if cloud storage can be accessed on new system
- Check downloads
- Validate all folders

## BTRFS

List subvolumes
```
sudo btrfs subvolume list /
```

Create a snapshot of a subvolume
```
# Root Subvolume
sudo btrfs subvolume snapshot -r / /snapshots/root_03_29_2024

# Home Subvolume
sudo btrfs subvolume snapshot -r /home /snapshots/home_03_29_2024
```

Send the snapshot to a external drive
```
sudo btrfs send /.snapshots/03_29_2024 | sudo btrfs receive /run/media/username/USB/
```

Delete snapshot/subvolume. *Be very careful not to delete the original subvolume!*
```
sudo btrfs subvolume delete /snapshots/root_03_29_2024
```
