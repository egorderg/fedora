#!/bin/sh

dnf swap ffmpeg-free ffmpeg --allowerasing
dnf install compat-ffmpeg4
dnf install ffmpeg-libs
