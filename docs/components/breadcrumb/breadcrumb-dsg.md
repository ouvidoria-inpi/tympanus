[version]: # (7.2.5)

![Exemplo do componente breadcrumb](imagens/diretriz.png)
*Exemplo do componente _breadcrumb_.*

Use _breadcrumb_ para melhorar o SEO e para facilitar a identificação de onde o usuário se encontra na estrutura de navegação de um _website_. Esta funcionalidade não é recomendada para _websites_ que não possuem um agrupamento ou hierarquia de usabilidade.

---

## Anatomia

1. Botão Terciário Home;
2. Separador;
3. _Link_;
4. Título da página atual.

![Anatomia do breadcrumb](imagens/anatomy.png)
*Anatomia do componente _breadcrumb_.*

---

## Tipos

### 1. Padrão

O componente _breadcrumb_ na forma padrão funciona de maneira única, listando a hierarquia de *links* da tela inicial à tela atual. Cada item do _breadcrumb_ é um _link_, exceto o último, que define a tela atual em que o usuário se encontra. Ao clicar-se em qualquer _link_ do _breadcrumb_, o usuário é direcionado à página correspondente. O botão terciário Home direciona sempre para a tela inicial.

![Exemplo de breadcrumb padrão.](imagens/diretriz.png)
*Exemplo do componente _breadcrumb_ na sua forma padrão.*

#### Truncamento

O _breadcrumb_ pode ser truncado quando não há espaço suficiente para exibir todos os níveis da lista de localização atual ou como uma forma de gerenciar a relevância dos itens visíveis da localização atual em uma hierarquia profundamente aninhada. O truncamento de itens de _breadcrumb_ começa quando não há espaço suficiente para exibir todos os itens ou se houver mais de cinco itens do _breadcrumb_ a serem exibidos. Considere o botão terciário Home e o título como itens.

![Exemplo do recurso de truncamento de breadrumbs.](imagens/truncamento.png)
*Exemplo do componente _breadcrumb_ com recurso de truncamento.*

Nestes casos, os _links_ intermediários são organizados em forma de **_list dropdown_** e são acionáveis pelo botão correspondente. Os itens são listados com a hierarquia ordenada de cima para baixo.

![Exemplo do comportamnto dos links truncados por meio de uma lista acionável pelo botão de pasta.](imagens/truncado.png)
*Comportamento do componente _breadcrumb_ com recurso de truncamento.*

**Atenção:** **Não** faça truncamento dos seguintes itens: botão Home, última página ancestral e o Título da página atual.

![Exemplos de como fazer e como não fazer o truncamento de links de breadcrumb](imagens/truncado-2.png) *Utilize o recurso de truncamento dos itens do _breadcrumb_ conforme especificado.*

### 2. Especial

Nos casos das resoluções de 4 colunas (dispositivos móveis), deve-se necessariamente optar pela forma **especial** de _breadcrumb_. Nesse formato o _breadcrumb_ é apresentado sempre com todos os _links_ deslocados para o menu, exceto a Página Atual.

![Exemplo de breadcrumb no formato especial para uso em resolução de quatro colunas.](imagens/especial.png)
*Exemplo do componente _breadcrumb_ especial para resoluções de quatro colunas.*

Também é permitido utilizar o _breadcrumb_ especial no lugar do padrão. Esta decisão deve ser tomada de acordo com o planejamento de arquitetura do produto mas, uma vez tomada a decisão, jamais poderá reverte-la em um mesmo produto.

## Comportamento

### 1. Responsividade

A seguir, as recomendações de uso em cada tipo de _grid_ que podem ser utilizados na maioria dos casos:

1. **_Grid_ de 12 colunas:** prefira o **tipo padrão**;
2. **_Grid_ de 8 colunas:** prefira o **tipo padrão** em conjunto com o comportamento de **truncamento** ou o tipo especial;
3. **_Grid_ de 4 colunas:** prefira o **tipo especial**;

![Exemplos de comportamentos dos breadrumbs de acordo com as grids.](imagens/responsividade.png) *Exemplos de comportamento do _breadcrumb_ de acordo com tipo de _grid_.*

**Atenção:** com a diminuição da resolução da tela o espaço disponível para o *breadcrumb*, em certos casos, pode ser insufuciente. A seguir é detalhado como proceder com a falta de espaço utilizando o recurso de truncamento nos textos.

### 2. Truncamento nos *hiperlinks*

Evite nomes de _links_ muito grandes. Procure sempre que possível resumi-lo de modo que fique claro para o usuário o nome da tela a qual se refere.

Se ainda assim o nome continuar grande, utilize o recurso de truncar parte do nome, conforme o exemplo abaixo:

![Exemplo de truncamento do texto de links.](imagens/truncamento-link.png)
*Não deixe os nomes dos _links_ do _breadcrumb_ demasiadamente grandes.*

**Atenção:** utilize o componente _tooltip_ para fornecer ao usuário o nome completo do _link_ truncado.

Sinta-se livre para truncar os nomes da forma que melhor fizer sentido para o usuário.

Este recurso pode ser usado também nos nomes dos _links_ que estiverem dentro da _list dropdown_.

---

## Melhores Práticas

* O Botão terciário Home deve estar sempre presente no _breadcrumb_ (exceto no tipo especial) e direcionado para a tela inicial do _website_ ou sistema.

* O título do _breadcrumb_ deve ser sempre a tela atual em que o usuário se encontra e deve estar em destaque (_semibold_). Todos os demais elementos são interativos exceto os ícones separadores que possuem a função de separar os ítens.

* Posicione os _breadcrumb_ no topo da página imediatamente abaixo do _header_ e use de forma consistente em todas as telas do _website_.

* _Breadcrumbs_ geralmente são encontrados em _websites_ que possuem uma grande quantidade de conteúdos organizados de forma hierárquica. Também é possível vê-los em aplicações _web_ que têm mais de uma etapa, com uma função semelhante a de uma barra de progresso. No entanto, é um recurso opcional.

* Não é aconselhável usar _breadcrumb_ em _websites_ que não têm agrupamento ou hierarquia lógica. Uma ótima maneira de determinar se um site se beneficiará com a navegação por _breadcrumb_ é construir um mapa do _site_ ou um diagrama representando sua arquitetura de navegação e analisar se o recurso melhora a capacidade do usuário de navegar dentro e entre as categorias.

* _Breadcrumbs_ devem ser considerados como um recurso extra e não deve substituir o menu principal do _website_ ou aplicativo. É uma característica de conveniência, um regime secundário de navegação que permite aos usuários determinar onde se encontram e deve ser usado como uma forma alternativa ou um auxiliar de navegação.

* _Breadcrumbs_ podem trazer uma série de benefícios para os usuários, como:
  * Dar a usuário um meio secundário de nevageção em um _website_;
  * Ao invés de usar o botão “Voltar” do navegador ou a navegação principal do site para voltar à página de nível superior, os usuários podem usar o _breadcrumb_ para realizar a mesma ação com um menor número de cliques;
  * Geralmente os _breadcrumbs_ são em sentido horizontal e de estilo “_clean_” ocupando pouquíssimo espaço na página. A vantagem é que eles têm pouco ou nenhum impacto negativo em termos de sobrecarga de conteúdo;
  * _Breadcrumbs_ podem ser uma ótima maneira de atrair visitantes pela primeira vez para examinar um _website_ depois de ter visto a página de destino. Por exemplo, digamos que um usuário chega a uma página através de uma pesquisa no _Google_, vendo um _breadcrumb_, este pode “seduzir” o visitante para as páginas de nível superior para visualizar os tópicos relacionados ao seu interesse. Isso reduz a Taxa de rejeição (_bounce rate_) do _website_.

---

## Especificação

### Tipografia

|Name|Size|Weight|Text-transform|
|--|--|--|--|
| _Links_ | `--font-size-scale-down-01`|`--font-weight-medium` | `uppercase`|
| Título | `--font-size-scale-down-01`|`--font-weight-medium` | `uppercase`|

### Iconografia

|Name|ícone|Size|Class (Font Awesome)|
|--|--|--|:--:|
|Separador|<i class="fas fa-chevron-right"></i>|`--icon-size-sm` |fa-chevron-right|

### Botão Terciário

|Name|ícone|Class (Font Awesome)|
|--|--|:--:|
|Home|<i class="fas fa-home"></i>|`--icon-size-sm`|fa-home|
|Folder-plus|<i class="fas fa-folder-plus"></i>|`--icon-size-sm`|folder-plus|
|Folder-minus|<i class="fas fa-folder-minus"></i>|`--icon-size-sm`|folder-minus|

### Cor

|Name|Property|Color Token|
|--|--|:--:|
| _Links_| text color |`--blue-warm-vivid-70`|
| Título| text color |`--gray-80`|
| Botão Terciário Home |icon|`--blue-warm-vivid-70`|
| Separador | icon | `--gray-20` |
| Botão Terciário Expandir | icon |`--blue-warm-vivid-70`|

### Espaçamento

|Name|Property|Type|Spacing Scale Token|
|--|--|--|:--:|
|_breadcrumb_|`padding-top`|`Externo`|`--spacing-scale-default`|

### Alinhamento

|Name|Property|Spacing Horizontal Token|
|--|--|:--:|
|right|spacing-horizontal|`--spacing-horizontal-left`|
