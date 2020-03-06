#!/usr/bin/env bash




if $(npm version prerelease -preid=beta) ; then
    echo "Command succeeded"
else
    exit;
fi

LATEST=$( git describe --tags `git rev-list --tags --max-count=1` )

echo $LATEST

# git push origin $LATEST
# git checkout $LATEST
rm -rf cdn
mkdir cdn
cd cdn
git clone git@git.serpro:ds-gov/cdn-dsgov-estaleiro.git
rm -rf cdn-dsgov-estaleiro/htdocs/design-system/$LATEST
rm -rf cdn-dsgov-estaleiro/htdocs/design-system/latest
mkdir cdn-dsgov-estaleiro/htdocs/design-system/latest
mkdir cdn-dsgov-estaleiro/htdocs/design-system/$LATEST
echo $LATEST > cdn-dsgov-estaleiro/version
cp -r ../dist/js cdn-dsgov-estaleiro/htdocs/design-system/latest/
cp -r ../dist/css cdn-dsgov-estaleiro/htdocs/design-system/latest/
cp -r ../dist/js cdn-dsgov-estaleiro/htdocs/design-system/$LATEST 
cp -r ../dist/css cdn-dsgov-estaleiro/htdocs/design-system/$LATEST 
echo "Enviando nova versao para o CDN"
git add .
git commit -m "inserindo nova versao"]
pwd
git push origin $LATEST
cd ../../
git push origin $LATEST
echo "Nova versão enviada no CDN"
# git checkout develop
