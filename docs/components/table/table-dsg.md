[version]: # (5.2.1)

![Exemplo de Tabela](imagens/type.png)
*Exemplo de Table*

Utilize a _Table_ quando houver necessidade de organizar as informações de uma maneira intuitiva, com uma estrutura lógica que facilite a compreensão do conteúdo, utilizando o uso de hierarquia ou alfabetização.

---

## Anatomia

A _Table_ é estruturada em:

1. Barra de Título (Opcional)
2. Barra Contextual (Opcional)
3. _Header_ da Tabela
4. Linhas
5. Barra de Paginação (Opcional)
6. Colunas

![Exemplo de Tabela](imagens/anatomy.png)
*Exemplo de Table*

### Detalhamento dos itens

#### 1. Barra de título (opcional)

A - A barra de título tem a função de exibir o título da tabela, texto usado para descrever o assunto da tabela. Caso seja necessário utilizá-lo, deve-se prezar por um tom e voz curto e objetivo. Não é recomendado utilizar um texto com mais de uma linha.

B - A barra de título também tem a função de abrigar ícones de ações utilitárias.

![Barra de Título](imagens/anatomy-title-bar.png)
*Barra de Título*

##### Quantidade de ícones de ação

Tendo em vista a otimização do conteúdo na barra de título, recomendamos a utilização de até 4 ícones dispostos lado a lado na barra de título. Caso seja necessário utilizar uma quantidade maior, deve-se optar pelo uso do _menu_ flutuante, que será acessado pelo botão `Ellipsis-v`. Veja o exemplo a seguir.

A - Recomendamos utilizar até 4 ícones dispostos lado a lado;

B - Com mais de 4 ícones de ação, utilize o botão de acesso ao _menu_ flutuante;

![Quantidade de Ícones de Ação](imagens/behavior-actions.png)
*Quantidade de Ícones de Ação*

#### 2. Barra contextual (opcional)

A barra contextual tem a função de exibir informações, ou ações contextuais referentes a uma, ou várias linhas selecionadas. Ao realizar a seleção de alguma linha, a barra contextual deverá aparecer logo abaixo da barra de títulos, deslocando as linhas da tabela para baixo e exibindo as ações ou informações relacionadas. Observe abaixo:

![Barra Contextual](imagens/behavior-line-select-2.png)
*Barra Contextual*

A barra contextual pode conter:

1. **Texto Contextual**
2. **Itens de Ação Contextual**

![Barra Contextual](imagens/anatomy-contextual-bar.png)
*Barra Contextual*

#### 3. _Header_ da tabela

O _header_ da tabela é um elemento obrigatório, pois descreve o tipo de conteúdo exibido em cada coluna.

##### Nome da coluna

![Header da Tabela](imagens/anatomy-header.png)
*Header da Tabela*

###### Tom e Voz

O nome da coluna, texto que descreve o tipo de conteúdo exibido na coluna, deve ser conciso de modo a comunicar a sua mensagem de maneira mais eficiente possível. Estes textos não devem ser extensos (preferencialmente com quantidade de caracteres menor que os dados referentes).

> **Dica**: faça uma lista de palavras-chave e depois escolha as mais relevantes para sua necessidade.

**Exemplo**: nomes como "Data Inicial" e "Data Final" podem ser utilizados como "Inicial" e "final" respectivamente.

#### 4. Linhas

As linhas são elementos obrigatórios e apresentam os dados ou informações organizadas por colunas. Podem também conter funcionalidades para manipulação destes dados. Observe abaixo:

1. **Dados ou Elementos Interativos**
2. **Ação Expandir/Retrair**
3. **Seleção de Linhas**

![Elementos da Linha da Tabela](imagens/anatomy-lines.png)
*Elementos da Linha da Tabela*

##### Dados ou elementos interativos

Os dados de uma linha podem conter:

- Ícones
- _Links_
- Textos
- Componentes de formulários (_checkbox_, _text_, _radio_, _select_...)

#### Estado _Hover_ em tabelas sem interatividade (opcional)

Em tabelas muito extensas, sem interatividade, recomendamos a utilização do Estado _Hover_ visando auxiliar o usuário durante a leitura dos dados na localização e acompanhamento das informações através do _mouse_, desta forma, "marcando" a linha com o ponteiro do _mouse_ enquanto ocorre a leitura dos dados, desta forma a seta do cursor deverá ser apresentado no seu formato padrão. Ver exemplo abaixo:

![Estado Hover - Fundo Claro e Escuro](imagens/behavior-state-hover-2.png)
*Utilizando o estado hover na linha da Table*

#### 5. Barra de paginação (opcional)

A paginação é exibida na parte inferior de uma tabela. Os controles de paginação fornecem acesso rápido a todas as páginas, enquanto indicam e permitem a configuração da quantidade de linhas de uma tabela. Consulte mais detalhes a respeito da paginação na documentação específica do componente _Pagination_.

![Barra de Paginação](imagens/anatomy-pagination-bar.png)
*Barra de Paginação*

#### 6. Colunas

A coluna é um elemento obrigatório e essencial da tabela, pois para constituir uma tabela é necessário pelo menos uma coluna. Esta faz intersecção com o _Header_ da tabela e a linha da tabela e abrigam os dados tanto do _Header_ como da linha. O número de colunas em uma tabela é ilimitado e sua largura depende do tamanho do conteúdo interno.

![Coluna da Tabela](imagens/anatomy-column.png)
*Coluna da Tabela*

---

## Comportamento

### 1 - Responsividade

#### _Grid_ de 12 e 8 colunas

Nas _grids_ de 12 e 8 colunas o comportamento responsivo padrão funciona com a quebra de linha do conteúdo interno das células da tabela. Esse é o comportamento padrão oferecido pela estrutura _HTML_. É importante observar, que este comportamento padrão ocorre não apenas com textos, mas em todos os tipos de conteúdo interno às células da tabela, como, por exemplo: ícones, botões ou imagens em sequência.

Veja abaixo:

![Grid de 12 Colunas](imagens/behavior-responsive-grid-12-cols.png)
*Grid de 12 Colunas*

![Grid de 8 Colunas](imagens/behavior-responsive-grid-8-cols.png)
*Grid de 8 Colunas*

##### Truncamento

Pode-se utilizar um recurso para limitar o número de caracteres nas células e exibir apenas o início de cada texto. Os textos devem ser truncados exibindo as reticências no final. Ao passar o _mouse_ sobre o texto truncado é revelado o texto completo pelo uso de _tooltip_. Veja o exemplo abaixo.

![Grid de 8 Colunas](imagens/behavior-responsive-grid-8-cols-2.png)
*Grid de 8 Colunas com Truncamento de Linha*

#### _Grid_ de 4 colunas

Na _Grid_ de 4 colunas, tendo em vista a característica bastante horizontal da tabela, é recomendável utilizar o recurso de rolagem, caso seja necessário exibir muitas colunas na tabela. Consulte detalhes em _Comportamento > Rolagem_.

![Grid de 4 Colunas](imagens/behavior-responsive-grid-4-cols.png)
*Grid de 4 Colunas*

##### Sugestão de usabilidade em _grids_ de 4 Colunas

Sempre que possível, opte pela utilização dos recursos de busca e paginação, visando garantir uma melhor usabilidade, principalmente em _layouts_ reduzidos.
![Exemplo de recursos para melhorar a usabilidade](imagens/acessibility.png)
*Exemplo de recursos para melhorar a usabilidade*

##### _Grid_ de 4 colunas - Responsividade da barra contextual e da barra de título

Na barra contextual e barra de títulos o conjunto de ícones de ação podem ser agrupados em um único ícone. E as ações acessadas a partir do _menu_ flutuante. Observe o exemplo abaixo:

A - Os ícones de ação são dispostos lado a lado nas barra de título e contextual;

B - Os ícones de ação são agrupados em um único ícone de _menu_ flutuante.

![Responsividade Barra Contextual e de Título](imagens/anatomy-title-contextual-responsive.png)
*Responsividade barra contextual e de título*

**Atenção:** É importante lembrar que quando houver mais de quatro ícones de ação na barra de título, é recomendável a utilização do ícone `Ellipsis-V` para o _menu_ flutuante. Observe o exemplo acima.

### 2 - Rolagem

O comportamento de rolagem visa solucionar problemas de exibição de conteúdos muito extensos na tabela ou exibir conteúdo em espaços restritos.

#### Rolagem vertical

Na rolagem vertical, a barra de título, o _Header da Table_ e a barra de paginação permanecem fixas enquanto a rolagem ocorrerá apenas nas linhas da tabela. A barra de rolagem deverá ser posicionado na extrema direita da tabela entre o _Header da Table_ e a barra de paginação.

![Rolagem Vertical](imagens/behavior-scroll-1.png)
*Rolagem Vertical*

#### Rolagem horizontal

A rolagem horizontal visa solucionar a exibição de uma tabela com muitas colunas em um espaço restrito. Neste caso, a barra de paginação e a barra de título permanecem fixas enquanto todo conteúdo da tabela deverá ser deslocado horizontalmente durante a rolagem. A barra de rolagem fica posicionada logo acima da barra de paginação.

![Rolagem Horizontal](imagens/behavior-scroll-2.png)
*Rolagem Horizontal*

Em _layouts_ muito pequenos como em dispositivos móveis (_Grid_ de 4 colunas), o uso de barras de rolagem simples, também deverão ser utilizados considerando todo o conteúdo da tabela.
![Exemplo de tabela em telas reduzidas com rolagem horiontal](imagens/horizontal-scroll.png)
*Exemplo de tabela em telas reduzidas com rolagem horiontal*

### 3 - Expandir e _collapse_

Este comportamento visa expandir a visualização de uma linha da tabela e exibir um conteúdo oculto, seja um painel, seja uma imagem ou qualquer outro conteúdo.

A expansão da linha ocorre quando o usuário clicar sobre o botão `Chevron-Down` que se localiza no início de cada linha. Após a expansão ocorrer, o botão muda seu ícone para `Chevron-Up` e o usuário poderá recolher a visualização do conteúdo. Observe abaixo.

![Linha Recolhida](imagens/behavior-expand-collapse-12-cols-1.png)
*Linha Recolhida*

![Linha Expandida](imagens/behavior-expand-collapse-12-cols-2.png)
*Linha Expandida*

Observe que o conteúdo exibido após a expansão da linha é marcado com uma sombra, fazendo diferenciação de hierarquia.

**Atenção:** O conteúdo que será expandido internamente em cada linha, deve ser diagramado com cautela. O excesso de informação e elementos interativos podem confundir o usuário, atrapalhando a leitura e o entendimento dos dados encontrados na tabela. Evite componentes como: tabela, _card_, ou qualquer outro componente complexo responsável por organizar, ordenar informações em excesso. O uso mais comum de apresentar estes dados adicionais seria por uso de listas.

### 4 - Seleção de linhas

O comportamento de seleção de linhas é necessário quando o usuário deseja realizar uma ação posterior referente ao conteúdo desta linha. A seleção da linha ocorre quando o usuário marca o _checkbox_ localizado no início de cada linha. Neste caso, toda linha assume o estado selecionado.

![Seleção de Linhas](imagens/behavior-line-select-1.png)
*Linha desselecionada*

Após selecionada a linha, poderá ser utilizada a _Barra Contextual_ que conterá informações e ações referentes à linha selecionada. Esta surgirá logo abaixo da barra de título. Quando forem selecionadas uma ou mais linhas da tabela, mas não todas, o _checkbox_ do _header_ da tabela assumirá o estado intermediário, indicando que uma ou algumas linhas estão selecionadas. Observe abaixo:

![Seleção de Linhas](imagens/behavior-line-select-2.png)
*Linha selecionada e Barra Contextual*

O usuário também poderá selecionar todas as linhas simultaneamente, clicando no _checkbox_ localizado no _header_ da tabela. Neste caso, o _checkbox_ no _header_ da tabela assumirá o estado selecionado.

![Seleção de Linhas](imagens/behavior-state-selected-3.png)
*Selecionando todas as linhas*

### 5 - Densidade

O componente _table_ possui três categorias de densidade.

#### Baixa densidade

Utilize baixa densidade quando o projeto de _layout_ permitir mais espaço ou quando houver necessidade de dar mais destaque ao componente _Table_.

![Baixa Densidade](imagens/behavior-low-density-grid-12-cols.png)
*Baixa Densidade*

#### Densidade padrão

É a forma comum do componente _Table_. Oferece um espaçamento interno adequado e equilibrado para vários tipos de projetos.

![Densidade Padrão](imagens/behavior-default-density-grid-12-cols.png)
*Densidade Padrão*

#### Alta densidade

Utilize alta densidade quando for necessário usar o componente _Table_ em espaços mais restritos ou otimizar o conteúdo em tela.

![Alta Densidade](imagens/behavior-high-density-grid-12-cols.png)
*Alta Densidade*

Consulte especificações de Densidade em _Design Tokens_.

**Obs.:** Atentar-se para a correta utilização das densidades, onde a densidade escolhida afetará toda a estrutura da tabela (linhas e colunas).

### 6 - Busca

Este comportamento tem a função de auxiliar o usuário na procura por algum conteúdo específico na tabela. O usuário poderá fazer a busca por palavra-chave acionando o botão `Search` na barra de título da tabela. Observe abaixo:

A - O usuário aciona o botão `Search` na barra de título para abrir a opção de busca;

B - Após acionar o botão `Search`, o campo de busca aparece por cima da barra de título cobrindo os demais elementos e, ao lado dele, será exibido o botão fechar;

C - Enquanto o usuário digitar a palavra-chave no campo de busca, as palavras correspondentes à pesquisa serão destacadas automaticamente no conteúdo da tabela, e só serão exibidas as linhas contendo a palavra-chave digitada;

D - O usuário poderá ocultar o campo de busca clicando no botão fechar.

![Busca](imagens/behavior-search-1.png)
*Busca*

### 7 - Estados

O componente _Table_ possui os seguintes estados:

#### Estado _hover_

O estado _hover_ ocorre quando o usuário passa o _mouse_ sobre a linha da tabela.

![Estado Hover - Fundo Claro e Escuro](imagens/behavior-state-hover.png)
*Estado Hover - Fundo Claro e Escuro*

#### Estado selecionado

O estado selecionado ocorre quando o usuário seleciona uma ou todas as linhas da tabela através do _checkbox_.

![Estado Selecionado - Fundo Claro e Escuro](imagens/behavior-state-selected.png)
*Estado Selecionado - Fundo Claro e Escuro*

### 8 - Ordenação

O comportamento de ordenação tem a utilidade de organizar o conteúdo exibido na tabela a partir de uma lógica de visualização. Como, por exemplo: ordem crescente, ordem decrescente, ordem alfabética, etc.

Para ordenar a visualização da tabela, o usuário poderá clicar no botão `Sort` presente em cada célula no _header_ da tabela. Nesse caso, o conteúdo será ordenado pelo assunto ou valores definidos em cada coluna.

![Ordenação](imagens/behavior-sort-1.png)
*Ordenação*

**Obs.:** Sugerimos, em _layouts_ reduzidos como as que possuem resolução de 4 colunas, a implementação no ícone de ações utilitárias, presente na barra de título da tabela um _menu_ flutuante onde o usuário possa acessar a ordenação do conteúdo. Assim, abrindo uma janela _modal_ sobre o conteúdo da tela, onde o usuário poderá selecionar os parâmetros de ordenação. Veja no exemplo a seguir.

![Ordenação em Mobile](imagens/behavior-sort-2.png)
*Ordenação em Mobile*

#### Ícones de ordenação

Para indicar qual coluna está ordenada, exiba um ícone com seta para baixo (decrescente) ou para cima (crescente) ao lado do nome da coluna. A ausência de setas ou uso de seta dupla (com estado _hover_) significa que a coluna está com ordenação padrão. Observe a seguir:

A - Ordenação Padrão
B - Ordenação Padrão (_hover_)
C - Ordenado Crescente (_hover_)
D - Ordenado Decrescente (_hover_)

![Ícones de Ordenação](imagens/behavior-sort-3.png)
*Ícones de Ordenação*

**Atenção:** Na ordenação, o usuário só poderá selecionar um parâmetro de cada vez (Crescente, Decrescente, Alfabética, etc.).

### 9 - Agrupamento de colunas e linhas

Sempre que possível opte pela utilização de tabelas simples, pois, múltiplos níveis de cabeçalhos para colunas podem confundir usuários que se utilizam de leitores de tela.

Contudo, em alguns casos, existe a necessidade da utilização de tabelas complexas que requerem mais do que um nível de cabeçalhos de linhas e/ou colunas. Essa organização visa garantir uma maior liberdade e flexibilidade na organização das informações apresentadas. Ver exemplos abaixo:

#### Agrupamento por linhas

![Exemplo de tabela com linhas agrupadas](imagens/behavior-group-rows.png)
*Exemplo de tabela com linhas agrupadas*

#### Agrupamento por colunas

![Exemplo de tabela com colunas agrupadas](imagens/behavior-group-columns.png)
*Exemplo de tabela com colunas agrupadas*

**Obs.:** Para mais informações consultar "Tables with irregular headers", da W3C na área de referências.

---

##  Melhores práticas

Para que as tabelas atendam aos padrões do GOVBR-DS de forma satisfatória  é necessário atentar-se a algumas recomendações:

- Antes de optar pelo agrupamento de linhas ou colunas nas tabelas, é necessário atentar-se para a possibilidade de simplificação das informações, evitando ao máximo problemas de entendimento devido ao excesso de informações apresentadas.
- Para uma melhor organização, deve-se optar por fazer separações visuais nítidas com o uso de recursos com bordas destacadas entre os agrupamentos.
- Evite o uso de colunas com células vazias.

**Obs.:** Essas recomendações visam beneficiar não somente as pessoas que possuem necessidades especiais, como também busca facilitar o entendimento para os demais usuários.

---

## Especificação

### Cores

| Name                              | Property   | Color Token            |
| --------------------------------- | ---------- | ---------------------- |
| Barra de Título                   | color      | `--gray-80`            |
| Barra de Título                   | background | `--pure-0`             |
| Barra de Título (Fundo Escuro)    | color      | `--pure-0`             |
| Barra de Título (Fundo Escuro)    | background | `--blue-warm-vivid-90` |
| Header da Tabela                  | color      | `--blue-warm-vivid-70` |
| Header da Tabela                  | background | `--gray-5`             |
| Header da Tabela (Fundo Escuro)   | color      | `--blue-warm-20`       |
| Header da Tabela (Fundo Escuro)   | background | `--blue-warm-vivid-90` |
| Linhas                            | color      | `--gray-80`            |
| Linhas                            | background | `--pure-0`             |
| Linhas (Fundo Escuro)             | color      | `--pure-0`             |
| Linhas (Fundo Escuro)             | background | `--blue-warm-vivid-90` |
| Barra de Paginação                | color      | `--gray-80`            |
| Barra de Paginação                | background | `--pure-0`             |
| Barra de Paginação (Fundo Escuro) | color      | `--pure-0`             |
| Barra de Paginação (Fundo Escuro) | background | `--blue-warm-vivid-90` |

#### Cores do Estado Hover

| Name                  | Property   | Color Token | Opacity                |
| --------------------- | ---------- | ----------- | ---------------------- |
| Linhas                | color      | `--gray-80` | -                      |
| Linhas                | background | `--gray-80` | `--surface-opacity-xs` |
| Linhas (Fundo Escuro) | color      | `--pure-0`  | -                      |
| Linhas (Fundo Escuro) | background | `--pure-0`  | `--surface-opacity-sm` |

#### Cores do Estado Selecionado

| Name   | Property   | Color Token            | Opacity |
| ------ | ---------- | ---------------------- | ------- |
| Linhas | color      | `--pure-0`             | -       |
| Linhas | background | `--blue-warm-vivid-50` | -       |

#### Cores do Estado Foco

| Name                  | Property     | Color Token          |
| --------------------- | ------------ | -------------------- |
| Linhas                | border-color | `--gold-vivid-40`    |
| Linhas                | border-style | `dashed`             |
| Linhas                | border-size  | `--surface-width-lg` |
| Linhas (Fundo Escuro) | border-color | `--gold-vivid-20`    |
| Linhas (Fundo Escuro) | border-style | `dashed`             |
| Linhas (Fundo Escuro) | border-size  | `--surface-width-lg` |

### Tipografia

| Name             | Size                      | Weight                    |
| ---------------- | ------------------------- | ------------------------- |
| Barra de Título  | `--font-size-scale-up-01` | `--font-weight-semi-bold` |
| Header da Tabela | `--font-size-scale-base`  | `--font-weight-semi-bold` |
| Linhas           | `--font-size-scale-base`  | `--font-weight-medium`    |

### Espaçamentos

| Name                                  | Property       |         Value          |
| ------------------------------------- | -------------- | :--------------------: |
| Barra de Título (Densidade Padrão)    | padding-top    |  `--spacing-scale-2x`  |
| Barra de Título (Densidade Padrão)    | padding-bottom |  `--spacing-scale-2x`  |
| Barra de Título (Densidade Padrão)    | padding-left   |  `--spacing-scale-2x`  |
| Barra de Título (Densidade Padrão)    | padding-right  |  `--spacing-scale-2x`  |
| Header da Tabela (Densidade Padrão)   | padding-top    |  `--spacing-scale-2x`  |
| Header da Tabela (Densidade Padrão)   | padding-bottom |  `--spacing-scale-2x`  |
| Header da Tabela (Densidade Padrão)   | padding-left   |  `--spacing-scale-3x`  |
| Header da Tabela (Densidade Padrão)   | padding-right  |  `--spacing-scale-3x`  |
| Linhas (Densidade Padrão)             | padding-top    |  `--spacing-scale-2x`  |
| Linhas (Densidade Padrão)             | padding-bottom |  `--spacing-scale-2x`  |
| Linhas (Densidade Padrão)             | padding-left   |  `--spacing-scale-3x`  |
| Linhas (Densidade Padrão)             | padding-right  |  `--spacing-scale-3x`  |
| Barra de Paginação (Densidade Padrão) | padding-top    |  `--spacing-scale-2x`  |
| Barra de Paginação (Densidade Padrão) | padding-bottom |  `--spacing-scale-2x`  |
| Barra de Paginação (Densidade Padrão) | padding-left   |  `--spacing-scale-2x`  |
| Barra de Paginação (Densidade Padrão) | padding-right  |  `--spacing-scale-2x`  |
| Barra de Título (Baixa Densidade)     | padding-top    |  `--spacing-scale-3x`  |
| Barra de Título (Baixa Densidade)     | padding-bottom |  `--spacing-scale-3x`  |
| Barra de Título (Baixa Densidade)     | padding-left   |  `--spacing-scale-2x`  |
| Barra de Título (Baixa Densidade)     | padding-right  |  `--spacing-scale-2x`  |
| Header da Tabela (Baixa Densidade)    | padding-top    |  `--spacing-scale-3x`  |
| Header da Tabela (Baixa Densidade)    | padding-bottom |  `--spacing-scale-3x`  |
| Header da Tabela (Baixa Densidade)    | padding-left   |  `--spacing-scale-3x`  |
| Header da Tabela (Baixa Densidade)    | padding-right  |  `--spacing-scale-3x`  |
| Linhas (Baixa Densidade)              | padding-top    |  `--spacing-scale-3x`  |
| Linhas (Baixa Densidade)              | padding-bottom |  `--spacing-scale-3x`  |
| Linhas (Baixa Densidade)              | padding-left   |  `--spacing-scale-3x`  |
| Linhas (Baixa Densidade)              | padding-right  |  `--spacing-scale-3x`  |
| Barra de Paginação (Baixa Densidade)  | padding-top    |  `--spacing-scale-3x`  |
| Barra de Paginação (Baixa Densidade)  | padding-bottom |  `--spacing-scale-3x`  |
| Barra de Paginação (Baixa Densidade)  | padding-left   |  `--spacing-scale-2x`  |
| Barra de Paginação (Baixa Densidade)  | padding-right  |  `--spacing-scale-2x`  |
| Barra de Título (Alta Densidade)      | padding-top    | `--spacing-scale-base` |
| Barra de Título (Alta Densidade)      | padding-bottom | `--spacing-scale-base` |
| Barra de Título (Alta Densidade)      | padding-left   |  `--spacing-scale-2x`  |
| Barra de Título (Alta Densidade)      | padding-right  |  `--spacing-scale-2x`  |
| Header da Tabela (Alta Densidade)     | padding-top    |  `--spacing-scale-2x`  |
| Header da Tabela (Alta Densidade)     | padding-bottom |  `--spacing-scale-2x`  |
| Header da Tabela (Alta Densidade)     | padding-left   |  `--spacing-scale-3x`  |
| Header da Tabela (Alta Densidade)     | padding-right  |  `--spacing-scale-3x`  |
| Linhas (Alta Densidade)               | padding-top    | `--spacing-scale-base` |
| Linhas (Alta Densidade)               | padding-bottom | `--spacing-scale-base` |
| Linhas (Alta Densidade)               | padding-left   |  `--spacing-scale-3x`  |
| Linhas (Alta Densidade)               | padding-right  |  `--spacing-scale-3x`  |
| Barra de Paginação (Alta Densidade)   | padding-top    | `--spacing-scale-base` |
| Barra de Paginação (Alta Densidade)   | padding-bottom | `--spacing-scale-base` |
| Barra de Paginação (Alta Densidade)   | padding-left   |  `--spacing-scale-2x`  |
| Barra de Paginação (Alta Densidade)   | padding-right  |  `--spacing-scale-2x`  |

### Sombra (Collapse e Scroll)

|  Name  | Offset (px) |                   Offset Token                   |
| :----: | :---------: | :----------------------------------------------: |
| Header |      1      |              `--surface-offset-sm`               |
| Linha  |   1 ou -1   | `--surface-offset-sm` ou `--surface-offset-sm-n` |
| Footer |     -1      |             `--surface-offset-sm-n`              |

|      Name      | Blur (px) |     Blur Token      |
| :------------: | :-------: | :-----------------: |
| Header e Linha |     6     | `--surface-blur-lg` |

|      Name      | Camada |     Layer Token     |
| :------------: | :----: | :-----------------: |
| Header e Linha |   1    | `--z-index-layer-1` |

---

## Referências

### Agrupamentos

- [Tables with irregular headers](https://www.w3.org/WAI/tutorials/tables/irregular/)
