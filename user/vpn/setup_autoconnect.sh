#!/bin/sh

nmcli connection

echo 'Show Connection infos: nmcli connection show "DE#405"'
echo 'Update autoconnect: nmcli connection modify "DE#405" connection.autoconnect yes'