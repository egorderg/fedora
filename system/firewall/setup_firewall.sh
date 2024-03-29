#!/bin/sh

systemctl disable firewalld.service

dnf remove firewalld

rm /etc/sysconfig/nftables.conf
cp ./nftables.conf /etc/sysconfig/nftables.conf

systemctl unmask nftables.service
systemctl enable nftables.service
systemctl restart nftables.service
