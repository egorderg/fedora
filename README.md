# Environment for Fedora

Create default folder
```sh
# Folder for the environment scripts
mkdir ~/Environment
# Folder for development
mkdir ~/Development
```

## Important

- Don't use the discovered networks in gnome files
    - connect directly at the bottom to the server
    - discovered networks are mounted with a wrong filesystem type

## System

System wide configurations and programs. *Should be executed as root*

RPM Fusion
```sh
sudo ./setup_rpmfusion.sh
```

SSH
```sh
sudo ./setup_ssh.sh
```

Fonts
```sh
sudo ./install_fonts.sh
```

Locale
```sh
cd locale
sudo ./setup_locale.sh
```

Media
```sh
cd media

# Follow the guides in the documentations for Intel/AMD/Nvidia
./open_docs.sh

# Install ffmpeg
sudo ./install_ffmpeg.sh
```

Firewall
```sh
cd firewall

sudo ./setup_firewall.sh 

# Setup VPN via Wireguard
# Control firewall with:
# systemctl start/stop/status nftables.service
```

## Programs
System wide programs that can be installed. *Should be executed as root*

## User
User wide configurations and programs. *Should be executed as user*
Can be executed at will.

Set the face and wallpaper in gnome.
