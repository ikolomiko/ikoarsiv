#!/usr/bin/env bash

set -e

ROOTDIR="$(dirname $(realpath "$0"))"
BUILDDIR=$ROOTDIR/build
PRODDIR=$ROOTDIR/prod

mkdir -p $BUILDDIR
mkdir -p $PRODDIR

find $BUILDDIR/static -name "*.txt" -or -name "*.map" -type f | xargs rm -fv
rm -f $BUILDDIR/service-worker.js

find $PRODDIR -mindepth 1 -maxdepth 1 -type d ! -name "files" -or -type f | xargs rm -fr
cp -r $BUILDDIR/* $PRODDIR

