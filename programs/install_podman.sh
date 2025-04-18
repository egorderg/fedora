#!/bin/sh

dnf install podman
systemctl enable --now podman.socket