[version]: # (1.1.4)

![Componente Notification](imagens/notification.png)
*Exemplo componente _notification_*

Utilize _notification_ para agrupar e informar o usuário sobre eventos e informações relevantes no seu sistema, site ou em aplicativos mobile.

### Tom e voz

_Notification_ devem ser organizado e apresentado de forma clara e consistente dentro de uma _interface_. O agrupamento deve ser classificado de forma cronológica para que o usuário tenha uma melhor organização temporal do conteúdo de maneira a facilitar sua identificação.

---

## Anatomia

 O componente _notification_ é composto pelos seguintes elementos:

1. Área do Usuário (Opcional)
1. Botão Fechar (Opcional)
1. Componente _Tab_ (Opcional)
1. Componente Item do _Notification_ (Obrigatório)
1. Componente _Divider_ (Obrigatório)
1. Superfície (Obrigatório)

 ![Anatomia do notification](imagens/anatomia.png)
 *Detalhes dos principais elementos que formam o _notification_.*

---

## Detalhamento dos elementos

### 1 - Área do Usuário (Opcional)

Esta área é formada por informações pessoais, tais como do nome e o e-mail do usuário. A apresentação dessas informações são importantes principalmente quando forem acessadas por meio do componente avatar.

![Área do Usuário](imagens/guide-user.png)
*Área destinada aos dados do usuário*

De acordo com a necessidade do portal ou sistema implementado, outras informações também podem ser acrescentadas. Essas devem respeitar uma hierarquia informacional, tipográfica e de margens já proposta na definição do _layout_.

É na área do usuário que deve se encontrar o Botão Fechar.

### 2 - Botão Fechar (Opcional)

É o componente _Button_ utilizado na densidade alta. Com exceção da _grid_ de 4 colunas, seu uso é opcional. Veja Responsividade mais adiante.

A função do componente _button_ é fechar/esconder o _notification_ após ser acionado.

![Botão Fechar](imagens/guide-close.png)
*Uso do _button_ fechar.*

**Observação**: o _notification_ também pode ser fechado/escondido ao clicar fora da superfície do componente ou acionando novamente o mesmo elemento que o solicitou.

### 3- Componente _Tab_ (Opcional)

É o componente usado para navegação dentro do _notification_.

![Exemplo de navegação tab](imagens/menu-navigation.png)
*Exemplo da navegação por meio do componente _tabs_.*

O _item_ da _tab_ pode ser utilizado em qualquer formatação possível, porém, sempre deverá ser utilizado o comportamento de densidade alta.

![Exemplo configuração dos itens da tab](imagens/guide-tabs-1.png)
*Item formado por ícone e _label_ no padrão horizontal*

![Exemplo configuração dos itens da tab](imagens/guide-tabs-2.png)
*Item formado por ícone e _label_ no padrão vertical*

![Exemplo configuração dos itens da tab](imagens/guide-tabs-3.png)
*Item formado apenas por _label_ sem uso de ícone*

![Exemplo configuração dos itens da tab](imagens/guide-tabs-4.png)
*Item formado apenas por ícones sem uso de _label_*

Para mais informações veja o Componente _Tab_.

### 4 - Componente _Item_ do _notification_ (Obrigatório)

O componente _Item_ é a base onde será criada a formatação do conteúdo relacionada às notificações. Possui todas as características e comportamentos desse componente.
As informações apresentadas podem variar de acordo com a necessidade de cada projeto. Para exemplificar, apresentamos uma diagramação onde o componente _item_ apresenta as seguintes informações:

- **Componente _Tag de Status_**: Pode-se utilizar o componente _tag_ para marcar visualmente qual _item_ da notificação é novo ou que ainda não foi lido.
- **Título da Notificação**: Principal identificação para a chamada do _item_ do _notification_.
- **Informação Cronológica**: Serve para localizar as informações da notificação cronologicamente.
- **Conteúdo**: Esse bloco serve para informar o conteúdo total ou parcial de uma determinada informação.

![Exemplo Anatomia](imagens/guide-itens.png)
*Um exemplo de como construir o _Item_ do _notification_*

Para mais informações veja o Componente Item.

### 5 - Componente _Divider_ (Obrigatório)

Componente _Divider_ é utilizado para organizar e destacar visualmente todos os elementos listados anteriormente.

![Visualizando os componentes divider](imagens/guide-divider.png)
*_Notification_ com somente os _dividers_ visíveis.*

Para mais informações veja o Componente _Divider_.

### 6 - Superfície (Obrigatório)

A superfície do _notification_ é um elemento _Dropdown_ (Elemento Flutuante) onde estará agrupado todos os itens listados na anatomia.
Por ser um elemento _Dropdown_, é importante adicionar uma sombra para representar visualmente a diferença de camada entre o componente _notification_ e o restante do conteúdo. Esta sombra, por sua vez, utiliza o padrão de _Elevação_ na Camada 2.

![Visualizando a superfície do notification](imagens/guide-surface.png)
*Superfície do _notification_.*

Consulte detalhes em _Fundamentos > Elevação_.

---

## Comportamento

### 1 - Acionamento do _Notification_

Tendo em vista que o _Notification_ é um elemento _Dropdown_ (Elemento Flutuante), este deverá ser exibido em tela através da interação do usuário com um acionador. Este acionador poderá ser qualquer elemento interativo que indique ao usuário a existência de notificação.

![Exemplo de Acionador do Notification](imagens/behavior-trigger.png)
*Exemplo de Acionador do Notification - Avatar com Badge indicando a existência de notificação*

Consulte mais detalhes em _Padrões > Dropdown_.

### 2 - Responsividade

O _notification_ é constituído por elementos e contêineres que podem se adaptar a diferentes dimensões e larguras.

![Exemplo de diferentes dimensões](imagens/responsividade.png)
*Exemplo de diferentes dimensões.*

Por ser um elemento flutuante, não sofre alteração na mudança de resoluções, porém, existem boas práticas e ele pode sofrer mudanças nos _breakpoints_.

Seguem as recomendações de uso para cada categoria de _Grid_.

#### _Grid_ de 12 e 8 Colunas

É importante que o _notification_ ocupe, no máximo, a largura de 50% da área disponível para conteúdo, enquanto a altura nunca deverá ultrapassar a área visível disponível.

**Importante**: Utilize o comportamento **Rolagem Interna** (veja adiante) para contornar conteúdos extensos de forma vertical.

![Limites recomendados na altura e largura](imagens/responsividade-limite.png)
*Exemplo de Limites recomendados no _notification_.*

#### Grid de 4 Colunas

O componente ocupará toda disponível da tela. A altura terá o tamanho total do conteúdo disponível no _notification_.

![Notification na grid de 4 colunas](imagens/responsividade-4colunas.png)
*Comportamento do _notification_ em Grid para 4 colunas.*

Como o _notification_ ficará sobre todo o conteúdo, é importante utilizar o **Botão fechar** para permitir que o conteúdo seja fechado/escondido.

![Visualizando a superfície do notification](imagens/responsividade-button.png)
*Superfície do _notification_.*

**Importante**: Evite o uso do comportamento **Rolagem Interna** nas _grids_ de 4 colunas! Utilize apenas a barra de rolagem nativa do dispositivo.

### 3 - Rolagem Interna

A estrutura e a organização dos Itens do **_notification_** seguem o padrão de uma "_timeline_ infinita", onde as notificações mais recentes são empilhadas sobre as mais antigas ordenando-os cronologicamente.

A altura máxima do componente deve-se manter inalterada. Para visualizar as notificações mais antigas, deve-se utilizar uma barra de rolagem interna.

**Importante**:A rolagem deve afetar somente os itens do notification, mantendo estáticos a área do usuário e o componente tab.

![Notification com barra de rolagem interna](imagens/tab-scrolling.png)
*Na rolagem interna, somente os itens são controlados.*

### 4 - Estados

Os estados dos itens do _notification_ seguem as mesmas regras para o componente _Item_.

![Estados do componente item](imagens/notification-states.png)
*Exemplo de alguns estados nos itens. Veja a diretriz do componente item para maiores detalhes.*

---

## Especificação

### Cores

|Name|Property|Color Token|
|--|--|--|
|Superfície|background|`--pure-0`|

### Espaçamentos

|Name|Property|Token/Value|
|--|--|--|
|Área do Usuário|espaçamento interno|`--spacing-scale-2x`|
|Item do _notification_|espaçamento interno|`--spacing-scale-2x`|
|Botão Fechar|alinhamento vertical|`top`|
|Botão Fechar|alinhamento horizontal|`right`|

### Superfície

|Name|Property|Token/Value|
|--|--|--|
|Superfície|shadow|`--surface-shadow-md`|
