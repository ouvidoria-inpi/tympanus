# JSON de configuração para o GOVBR-DS

Os itens são renderizados na ordem que aparecem nesse arquivo

## defaultTypeConfig

Dita as configurações padrão para cada tipo. As propriedades que forem incluídas nos itens sobrescreverão essas configurações.

### forType

É um array com os ids dos tipos para qual a configuração vai ser usada

## Outras propriedades

### Children

Array de filhos do item.

### ID

Identificador, de preferência único. É usado para montar a URL do recurso e deve ser o mesmo do nome da pasta onde ele está.#

## Label

Texto que vai aparecer no Menu e Conteúdo. Est

### Type

Identifica o tipo do item.

- documentation
- downloads
- category
- link-category
- components
- templates
- pages
- link

Caso o item não declare o seu tipo, ele vai herdar o ID do pai como tipo.

### ext

Array com as extensões que deverão ser buscadas.

Apenas MD e HTML são renderizadas como texto e se o tipo do item for components, templates ou pages as extensões serão usadas também para mostrar o Preview e o código.

### htmlFilename

Para sobrescrever o nome padrão do arquivo HTMl que deverá ser buscado.#
Components e pages tem o nome 'example', já templates é o nome do template.

### default

Indica se deve buscar o arquivo MD ou HTML sem sufixo.

### developer

Indica se deve buscar o arquivo MD ou HTML com o sufixo -dev.

### designer

Indica se deve buscar o arquivo MD ou HTML com o sufixo -dsg.

### files

Usado pelo tipo 'downloads' para indicar arquivos que serão disponibilizado para download.

### path

URI do arquivo para download.

### description

Texto explicativo sobre o arquivo para download.

### sections

Se for necessário que a parte de downloads seja dividida em pacotes/seções, use essa propriedade incluindo um id, label e files para o pacote.

### hideLabel

Esconde o label da página de conteúdo.

### target

Indica como o tipo 'link' deve ser aberto.
