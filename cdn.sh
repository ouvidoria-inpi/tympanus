#!/usr/bin/env bash

git commit -am " Incluindo versão beta"
npm version prerelease -preid=beta
LATEST=$( git describe --tags `git rev-list --tags --max-count=1` )
read -p "Quer publicar essa tag para o nexus e gitlab (y/n)?" CONT
if [ "$CONT" = "y" ]; then
  npm publish
  echo "publicado no nexus"
  git push origin $LATEST
  git checkout $LATEST
else
  
fi


LATEST=$( git describe --tags `git rev-list --tags --max-count=1` )

echo $LATEST
echo "Guardando dados no CDN"
# git push origin $LATEST
# git checkout $LATEST
rm -rf cdn
mkdir cdn
cd cdn
git clone git@git.serpro:dsgov/dsgov-cdn.git
rm -rf cdn-dsgov-estaleiro/htdocs/design-system/$LATEST
rm -rf cdn-dsgov-estaleiro/htdocs/design-system/latest
mkdir cdn-dsgov-estaleiro/htdocs/design-system/latest
mkdir cdn-dsgov-estaleiro/htdocs/design-system/$LATEST
echo $LATEST > cdn-dsgov-estaleiro/designsystemversion
cp -r ../dist/js cdn-dsgov-estaleiro/htdocs/design-system/latest/
cp -r ../dist/css cdn-dsgov-estaleiro/htdocs/design-system/latest/
cp -r ../dist/js cdn-dsgov-estaleiro/htdocs/design-system/$LATEST 
cp -r ../dist/css cdn-dsgov-estaleiro/htdocs/design-system/$LATEST 
echo "Enviando nova versao para o CDN"
git add .
git commit -m "inserindo nova versao"
pwd
cd cdn-dsgov-estaleiro
pwd
git commit -am " Incluindo versão beta $LATEST "
# git push origin master
cd ../../
read -p "Quer enviar essa tag para o git (y/n)?" CONT
    # git push origin $LATEST
if [ "$CONT" = "y" ]; then
  echo "publicando no git";
else
  echo "nao publicando repositoio";
fi

echo "Nova versão enviada no CDN"
# git checkout develop
