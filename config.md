# Introdução

O arquivo config.json é usado para montar o menu lateral do site e dizer quais os arquivos estão disponíveis e onde eles se encontram. As documentações de Design e Desenvolvedor são encontradas de acordo com esse arquivo.

O arquivo é dividido em áreas de Introdução, Componentes, etc...

Para configurar é necessário montar um objeto com as propriedades abaixo e colocar na área correta.

## Propriedades do config.json

### label

Usado para montar o menu lateral e mostrar dentro de HTML.

### id

id único para o arquivo. Deve ser o mesmo nome da pasta.

### type

Usado para mostrar qual o modo de renderização (docs, component ou template).

### filename

Nome do arquivo no sistema de arquivos.

### children

Contém um array com todos os filhos daquele objeto.
