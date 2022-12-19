# Script para alterar os valores estáticos apontando para as versões no config.json

# Extrai a versão atual do config.json
current_version=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' ./package.json)

# Faz o trim
current_version=$(echo $current_version | sed 's/ *$//g')

# Substitui as ocorrências da versão antiga pela nova
sed -i "s/$current_version/$1/g" ./config.json
