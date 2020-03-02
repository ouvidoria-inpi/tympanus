#!/usr/bin/env bash

LATEST=$( git describe --tags `git rev-list --tags --max-count=1` )

echo $LATEST
git checkout $LATEST
rm -rf cdn
mkdir cdn
cd cdn
git clone git@git.serpro:ds-gov/cdn-dsgov-estaleiro.git
mkdir $LATEST
mkdir cdn-dsgov-estaleiro/htdocs/design-system/latest
mkdir cdn-dsgov-estaleiro/htdocs/design-system/$LATEST
echo $LATEST > cdn-dsgov-estaleiro/version
cp -r ../dist/** cdn-dsgov-estaleiro/htdocs/design-system/$LATEST
cp -r ../dist/** cdn-dsgov-estaleiro/htdocs/design-system/latest
cd ..
git checkout cdn-publish
