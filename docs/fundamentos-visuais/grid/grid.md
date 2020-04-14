[artefato fonte de design]: # 'grid_1.1.0.xd'

## Experiência Única

O sistema de Grid de 12 colunas possui uma boa flexibilidade para projetos de layouts, pois permite uma diagramação de páginas e telas com colunas múltiplas de 12, além de se adequar aos principais Frameworks CSS, facilitando a escolha na teconologia a ser utilizada. Em Tablets e Smartphones o número de colunas é reduzido ao máximo de 8 e 4 respectivamente, devido à limitação de espaço.

## Eficiência e Clareza

Seguindo o princípio de espaçamentos e dimensões múltiplos de 8, é possível preservar as proporções em resoluções de telas diferenciadas, visto que a maioria tem suas dimensões divisíveis por 8. Esta característica de Design Multi-Plataforma fornece ao usuário uma sensação de consistência e clareza no projeto de design em diferentes dispositivos.

## Acessibilidade

As interfaces devem ser adequadas a diferentes tipos de dispositivos, tendo em vista esse aspecto, o sistema de grid fornece alguns breakpoints - pontos de quebra onde o layout será ajustado para atender diferentes resoluções, sendo assim possível desenvolver interfaces adaptáveis a diversos formatos e tamanhos de telas.

## Reutilização e Colaboração

Porventura, poderá haver alguma adaptação específica no sistema de grids, break-points e padrões de proporção, para atender alguma necessidade em projetos de interface. Sendo assim, faz-se necessário, que essas evoluções/adaptações sejam testadas e passem por uma prévia aprovação da equipe de design do DS.

---

## Breakpoints

O sistema de grid para o Design System do Governo Federal se adequa a 5 breakpoints de referência, abrangendo resoluções para Mobile, Tablet, Desktop e resoluções superiores. São elas:

![Breakpoints](imagens/breakpoint-statcounter.png)

| Device                                 | Token Breakpoint         | Breakpoint Range (px) | Breakpoint (px) |
| -------------------------------------- | ------------------------ | --------------------- | --------------- |
| Smartphone Portrait                    | --grid-breakpoint-xsmall | 0 - 575               | 0               |
| Smartphone Landscape / Tablet Portrait | --grid-breakpoint-small  | 576 - 991             | 576             |
| Tablet Landscape                       | --grid-breakpoint-medium | 992 - 1279            | 992             |
| Desktop                                | --grid-breakpoint-large  | 1280 - 1599           | 1280            |
| TV                                     | --grid-breakpoint-xlarge | 1600 - \*             | 1600            |

---

## Comportamento da Grid

Existem dois tipos de comportamento para as Grids: Fixa e a Fluida.

### Grid Fixa

Na grid fixa, as colunas e as medianizes possuem largura fixa. Porém o **largura das margens são variadas** de acordo com a resolução da tela, mantendo quase todo o conteúdo centralizado da tela em uma largura máxima ( `max-width` ).

Em uma grid fixa, apesar das larguras variadas, as margens possuem um valor mínimo que deve ser respeitado.

As grids utilizadas como fixas são voltadas para Desktop ( `--grid-breakpoint-large` ) e para TV ( `--grid-breakpoint-xlarge` ).

![Grid Fixa 01](imagens/behavior-fixa01.png)

![Grid Fixa 02](imagens/behavior-fixa02.png)

### Grid Fluida

Na grid fluida, tanto as margens como as medianizes possuem largura fixa, porém a **largura das colunas alteram** de tamanho, dimensionando também o conteúdo. Neste caso, a grid ocupam todo o espaço disponível da tela ( `max-width` de 100%).

As grids utilizadas como fluida são as de Smarthphone ( `--grid-breakpoint-xsmall` e `--grid-breakpoint-small` ) e Tablet ( `--grid-breakpoint-small` e `--grid-breakpoint-medium` ).

![Grid Fluida 01](imagens/behavior-fluida01.png)

![Grid Fluida 02](imagens/behavior-fluida02.png)

### Max-Width

`Max-width` mede a distancia entre o início da primeira coluna da grid até o final da última coluna. Em outras palavras, é o tamanho da largura da grid sem os elementos margem.

---

## Tipos de Grid

Existem 4 tipos de grid: **Smartphone Portrait**, **Tablet / Smartphone Landscape**, **Desktop** e **TV**. Cada uma delas deve ser utilizada em um determinado breakpoint.

### Smartphone Portrait

Conteúdo deve ser reorganizado em **4 colunas** e respeitando a margem de **8px** nas laterais e medianiz de **16px**.

Utiliza o comportamento de grid fluida.

| Property   | Token Grid               | Value                    |
| ---------- | ------------------------ | ------------------------ |
| max-width  | --grid-portrait-maxwidth | 100%                     |
| gutter     | --grid-portrait-gutter   | 16px                     |
| columns    | --grid-portrait-columns  | 4                        |
| margin     | --grid-portrait-margin   | 8px                      |
| breakpoint | -                        | --grid-breakpoint-xsmall |

![Grid 4 colunas](imagens/grid-04colunas.png)

---

### Tablet / Smartphone Landscape

Nos dispositivos tablets, o conteúdo é organizado em **8 colunas** se adequando às variações retrato e paisagem. O espaçamento entre as colunas será de **24px** e a margem externa ao conteúdo de **40px**.

Essa grid pode ser utilizada em dois breakpoints distintos e utiliza o comportamento de grid fluida.

| Property   | Token Grid             | Value                                               |
| ---------- | ---------------------- | --------------------------------------------------- |
| max-width  | --grid-tablet-maxwidth | 100%                                                |
| gutter     | --grid-tablet-gutter   | 24px                                                |
| columns    | --grid-tablet-columns  | 8                                                   |
| margin     | --grid-tablet-margin   | 40px                                                |
| breakpoint | -                      | --grid-breakpoint-small ou --grid-breakpoint-medium |

![Grid 8 colunas](imagens/grid-08colunas.png)

---

### Desktop

As **12 colunas** serão divididas em **1200 pixels** de largura com espaçamentos de **24 pixels** entre elas. Esse sistema permite a organização do conteúdo em diversas formatações de coluna.

A margem externa ao conteúdo será variável (com tamanho mínimo de **40 pixels**) se adequando às dimensões da tela (grid fixa)

| Property   | Token Grid              | Value                   |
| ---------- | ----------------------- | ----------------------- |
| max-width  | --grid-desktop-maxwidth | 1200px                  |
| gutter     | --grid-desktop-gutter   | 24px                    |
| columns    | --grid-desktop-columns  | 12                      |
| margin     | --grid-desktop-margin   | 40px - \*               |
| breakpoint | -                       | --grid-breakpoint-large |

![Grid 12 colunas](imagens/grid-12colunas.png)

---

### TV

As **12 colunas** serão divididas em **1520 pixels** de largura com espaçamentos de **40 pixels** entre elas.

A margem externa ao conteúdo será variável (com tamanho mínimo de **40 pixels**) se adequando às dimensões da tela (grid fixa).

| Property   | Token Grid         | Value                    |
| ---------- | ------------------ | ------------------------ |
| max-width  | --grid-tv-maxwidth | 1520px                   |
| gutter     | --grid-tv-gutter   | 40px                     |
| columns    | --grid-tv-columns  | 12                       |
| margin     | --grid-tv-margin   | 40px - \*                |
| breakpoint | -                  | --grid-breakpoint-xlarge |

![Grid 12 colunas](imagens/grid-12colunas.png)

