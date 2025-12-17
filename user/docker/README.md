### Autostart in Podman

systemctl --user enable podman-restart.service
systemctl --user status podman-restart.service

## Penpot

Execute this after the containers are running and if there are problems with media objects.

podman exec -it penpot-backend sh -lc 'id -u; id -g'

podman unshare chown -R <UID>:<GID> /home/egor/Documents/penpot/assets
podman unshare chmod -R u+rwX,g+rwX /home/egor/Documents/penpot/assets
