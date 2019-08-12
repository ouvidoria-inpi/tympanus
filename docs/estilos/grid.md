# Sistema de Grid

## Design System do Governo Federal

O sistema de grid para o Design System do Governo Federal se adequa a 4
breakpoints de referência, abrangendo resoluções para Mobile, Tablet, Desktop e resoluções superiores. São elas:

- X-Small: até **576px** - SmartPhone Portrait
- Small: a partir de **576px** - SmartPhone Landscape e Tablet Portrait
- Medium: a partir de **992px** - Tablet Landscape
- Large: a partir de **1280px** - Desktop
- X-Large: a partir de **1600px** - Big Desktop / TV

Para tanto, será utilizado o **Sistema de 12 Colunas** como norteador na estrutura geral, além da Grade de 8 Pontos para definir dimensões, preenchimento e margem de elementos em bloco e em linha.

Enquanto o Sistema de 12 Colunas permite uma boa flexibilidade para diagramação de layout, também se adequa aos principais Frameworks CSS, facilitando a escolha na teconologia a ser utilizada.

Já o princípio da Grade de 8 Pontos é mais adequado a um Design Multi-Plataforma, visto que os tamanhos de tela mais populares são divisíveis por 8 em pelo menos um eixo e, geralmente em ambos os eixos. Isto facilita a preservação das proporções em dispositivos com tamanhos de telas diversos.

**Desktop:** as 12 colunas serão divididas em **1152 pixels** de largura com espaçamentos de **24 pixels** entre elas. Esse sistema permite a organização do conteúdo em diversas formatações de coluna e facilita a reorganização dele nos grids das versões tablet e mobile.

![Desktop 1366 x 768](../assets/images/estilos/grid/desktop-1366-x-768.png)

A margem externa ao conteúdo será sempre variável se adequando às dimensões da tela. Abaixo seguem alguns exemplos:

![Desktop 1280 x 800](../assets/images/estilos/grid/desktop-1280-x-800.png)

A medida para o conteúdo permanece com a largura máxima de 1152px para preservar a consistência do projeto de layout.

![Desktop 1440 x 900](../assets/images/estilos/grid/desktop-1440-x-900.png)

Para resoluções maiores que **1440px** também utiliza-se o padrão de **12 colunas** com medianiz de **32px** e largura máxima de **1440px**. Nestas resoluções o conteúdo cresce de forma proporcional tanto na horizontal como na vertical.

![TV 1600 x 900 - 1920 x 1080](../assets/images/estilos/grid/tv.png)

**Tablet:** Nos dispositivos tablets, o conteúdo pode ser reorganizado em até **8 colunas** se adequando às variações retrato e paisagem. O espaçamento entre as
colunas será de **24px** e a margem externa ao conteúdo de **40px**.

![Tablet Android](../assets/images/estilos/grid/tablet-android.png)



Para responsividade em sites e portais o ideal é que se use uma diagramação com **2 colunas** apenas, visto que o conteúdo textual e o enquadramento das fotos funciona melhor quando há uma redução na largura de Desktop para tablets.

![Tablet Android 2](../assets/images/estilos/grid/tablet-android-2.png)

**Mobile:** Conteúdo pode ser reorganizado em até **4 colunas** e respeitando a margem de **24px** nas laterais e **medianiz de 16px**.

## **SmartPhone - 576 x 1246**

![SmartPhone iPhone 4](../assets/images/estilos/grid/smartphone-iphone-4.png)

![SmartPhone iPhone 3](../assets/images/estilos/grid/smartphone-iphone-3.png)

![SmartPhone iPhone 2](../assets/images/estilos/grid/smartphone-iphone-2.png)

Para responsividade em sites e portais o ideal é que se use uma diagramação com **1 coluna** apenas, visto que o conteúdo textual e o enquadramento das fotos funciona melhor quando há uma redução na largura de Desktop para Smartphones.

![SmartPhone iPhone](../assets/images/estilos/grid/smartphone-iphone.png)

* * *

# Grade de 8 pontos

Use múltiplos de 8 para definir dimensões, reenchimento e margem de elementos em bloco e em linha. Os elementos são posicionados dentro da grid e mantêm distâncias relativas um com os outros.

![Grid 8pts](../assets/images/estilos/grid/grade-de-8-pontos.png)

A Grade de 8 Pontos é mais adequado a um Design Multi-Plataforma, visto que os tamanhos de tela mais populares são divisíveis por 8 em pelo menos um eixo e, geralmente em ambos os eixos. Isto facilita a preservação das proporções em dispositivos com tamanhos de telas diversos.

![Screen Resolutions](../assets/images/estilos/grid/screen-resolutions.png)