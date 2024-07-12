#!/bin/sh

rm /etc/sysconfig/nftables.conf
cp ./nftables.conf /etc/sysconfig/nftables.conf

systemctl restart nftables.service
