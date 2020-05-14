rm -rf dist
npm run build
LATEST=$( git describe --tags `git rev-list --tags --max-count=1` )
sudo apt install zip
# remove o latest anterior
rm -rf assets/source-code/dsgov-latest.zip
zip -r assets/source-code/dsgov-lastest.zip dist
zip -r assets/source-code/dsgov-$LATEST.zip dist
echo $LATEST
replace=""
LATEST="${LATEST/v/$replace}"   
url="http://nexus.aic.serpro/repository/npm-private/@govbr/dsgov/-/dsgov-$LATEST.tgz" 
echo $url
wget  -p $url -O assets/npm-package/dsgov-lastest.tgz
wget -c -p $url -O assets/npm-package/dsgov-$LATEST.tgz



