[version]: # '1.0.0'

![Exemplo Componente](imagens/header-anatomy-type-default.png)

---

## Uso
O Header é utilizado para identificar e concentrar as principais funcionalidades/conteúdos do site ou sistema de acordo com a necessidade, respeitando sempre as regras definidas nesta diretriz, ele é o primeiro item a ser percebido pelo usuário.

---

## Anatomia
O Header é composto por vários componentes (átomos e moléculas) organizados em espaços determinados. É importante notar que **os elementos se repetem nas versões e variações do header**, podendo assumir outras formas dependendo do tipo do header ou resolução da tela. 

A seguir, listamos os grupos de componentes mais frequentemente utilizados:

1. Logo (Opcional na versão Compacta)
2. Assinatura (Opcional)
3. Título
4. Subtítulo (Opcional)
5. Ícone Acionar Menu
6. Área para Links (Opcional)
7. Área para Funcionalidades (Opcional)
8. Botão Acesso GovBr (Opcional)
9. Componente Avatar (Opcional)
10. Componente Search (Opcional)
11. Dropdown (Opcional)
12. Conteiner
13. Componente Separator

![Exemplo Anatomia](imagens/header-anatomy-1.png)
*Header Padrão*


![Exemplo Anatomia](imagens/header-anatomy-2.png)
*Header Compacto*

![Exemplo Anatomia](imagens/header-anatomy-3.png)
*Header Grid 4 Colunas*

![Exemplo Anatomia](imagens/header-anatomy-12.png)
*Dropdown*

**Atenção:** Nem sempre é necessária a utilização de todos os componentes listados nesse manual porém, em caso de necessidade de inserção de novos componentes no Header, a equipe de design responsável pelo _Design System_ deverá ser contactada para a realização de um estudo específico para este fim.

---

### Detalhamento dos elementos

O Header é dividido em onze elementos principais. Neste tópico, exploramos cada um desses elementos com mais detalhes:

#### 1. Logo/Marca (Opcional na versão Compacta)

Existem três tamanhos padrão para a logo:

![Exemplo Anatomia](imagens/header-anatomy-4.png)

1. **_Large_**: Usado nos _Headers_ tipo Padrão (Grid de 12 e 8 colunas);
![Exemplo Anatomia](imagens/header-anatomy-type-default.png)

2. **_Medium_**: Usado apenas na versão mobile (Grid de 4 colunas);
![Exemplo Anatomia](imagens/header-anatomy-logo-medium.png)

3. **_Small_**: Usado nos _Headers_ do tipo Compacto (Grid de 12 e 8 colunas) e Sticky Headers.

![Exemplo Anatomia](imagens/header-anatomy-type-compact.png)

**A logo é opcional** na versão do **Cabeçalho tipo Compacto**, como demonstrado nos exemplos abaixo:

![Exemplo Anatomia](imagens/header-anatomy-compact-logo.png)

![Exemplo Anatomia](imagens/header-anatomy-compact-no-logo.png)

#### 2. Assinatura (Opcional)
A assinatura serve para identificar uma subcategoria ou descrição relacionada à marca. Descreve uma categoria superior ao título do cabeçalho. Fica localizada ao lado da logo/marca.

##### Com Assinatura
![Exemplo Anatomia](imagens/header-anatomy-signature.png)

##### Sem Assinatura
![Exemplo Anatomia](imagens/header-anatomy-type-no-signature.png)

**IMPORTANTE:** É importante notar que a assinatura **permanece obrigatoriamente oculta** em variações **mobile** (Grid de 4 colunas) e **versões do Sticky Header**, como observa-se no exemplo abaixo:

![Exemplo Anatomia](imagens/header-anatomy-signature-1.png)

#### 3. Título

O Header deve sempre possuir um título que o identifique, ou em casos de páginas internas, que identifique a página atual. 

###### Comportamento -  Tamanho da Fonte
O tamanho da tipografia no título do Header muda conforme se adequa às diferentes resoluções e Grids. Essas mudanças ocorrem nas mudanças de _Breakpoints_. 

![Exemplo Anatomia](imagens/header-behaviour-title-default.png)

**OBS:** Consulte os tamanhos das fontes tipográficas na seção **_Design Tokens > Tipografia_**.

###### Comportamento -  Quantidade de Caracteres

O título do Header poderá variar bastante na quantidade de caracteres. Tendo em vista este aspecto essencial, o Header poderá suportar **no máximo até duas linhas de caracteres**, não podendo ultrapassar este limite. Em casos extremos e raros, quando o título ultrapassar a quantidade de caracteres superior a duas linhas, este deverá ser **truncado e adicionado três pontinhos (...)** ao seu final. Observe os exemplos abaixo:

![Exemplo Anatomia](imagens/header-behavior-tilte.png)

**OBS:** No exemplo acima, na versão para Smartphone, ocorreu o truncamento do título.

É importante salientar que quando o título do Header cresce para duas linhas a altura do cabeçalho acompanha o crescimento na vertical em todas as versões e resoluções do mesmo. 

**IMPORTANTE:** Consulte na seção **_Design Tokens > Dimensões_**, as mudanças na altura do Header em decorrência do número de linhas. 

O mesmo comportamento ocorre com a **versão Compacta do Header**.

![Exemplo Anatomia](imagens/header-compact-behavior-tilte.png)

**IMPORTANTE:** Consulte na seção **_Design Tokens > Dimensões_**, as mudanças na altura do Header em decorrência do número de linhas. 

O mesmo comportamento ocorre quando o **_Título_** vem acompanhado do **_Subtítulo_**. Veja abaixo:

![Exemplo Anatomia](imagens/header-compact-behavior-tilte-subtitle.png)

**IMPORTANTE:** Consulte na seção **_Design Tokens > Dimensões_**, as mudanças na altura do Header em decorrência do número de linhas. 

#### 4. Subtítulo (Opcional)

Serve para reforçar a identificação de uma categoria associada ao título da página, ou descrição do mesmo. Fica localizado logo abaixo do título principal do cabeçalho.

Observe abaixo a utilização do _Subtítulo do Cabeçalho_ nas diferentes resoluções.

![Exemplo Anatomia](imagens/header-compact-anatomy-subtitle.png)

**IMPORTANTE** - É importante notar que o _Subtítulo do Cabeçalho_ **permanece obrigatoriamente oculto** nas **versões mobile** (Grid de 4 Colunas).


#### 5. Ícone Acionar Menu

Este ícone acessa o menu da navegação principal do _site_/sistema, de acordo com a imagem seguinte: 

![Exemplo Anatomia](imagens/header-anatomy-5.png)

1. Ícone de acesso ao Menu Principal;
2. Menu Principal;
3. Ícone de fechamento do Menu Principal.

**Atenção:** Ao ser aberto, o Menu Principal utilizar o componente _Scrim_ para bloquear a tela e chamar a atenção do usuário somente para os ítens do menu. Por favor consulte as especificações do componente Menu para mais detalhes de sua utilização.


#### 6. Área para Links (Opcional)

Trata-se de links de apoio. Devem ser usados apenas quando fizerem parte do contexto ou tema tratado no Site/Sistema. Neste caso, apontarão para sítios ou sistemas externos. 

Quando a quantidade de links não couber no espaço horizontal em decorrência do tamanho do título, número de links, ou resolução da tela, estes devem ser acessados através da **Lista Dropdown**. Veja o exemplo abaixo com suas variações:

![Exemplo Anatomia](imagens/header-anatomy-links-area.png)

###### Lista Dropdown
O usuário deverá clicar sobre o ícone **ellipsis-v** e uma **Lista Dropdown** aparecerá flutuando sobre o conteúdo. Este elemento corresponde ao **Componente List**. Observe o modelo abaixo:

![Exemplo Anatomia](imagens/header-anatomy-13.png)

1. Dropdown.
2. Dropdown **Mobile**.

**OBS:** No Componente List foi adicionado uma sombra para agregar contraste entre o elemento e a tela ao fundo. Vejas as especificações na seção **Design Tokens**. Para mais detalhes a respeito do Componente Lista consulte a documentação específica deste componente.

#### 7. Área para Funcionalidades (Opcional)

São itens opcionais e devem ser utilizados quando houver necessidades específicas em cada Site/Sistema. 

Quando a quantidade de ícones não couber no espaço horizontal em decorrência do tamanho do título, número de funcionalidades, ou resolução da tela, estes devem ser acessados através da **Lista Dropdown**.

![Exemplo Anatomia](imagens/header-anatomy-functions-area.png)

###### Lista Dropdown
O usuário deverá clicar sobre o ícone **th** e uma **Lista Dropdown** aparecerá flutuando sobre o conteúdo. Este elemento corresponde ao **Componente Lista**. Observe o modelo abaixo:

![Exemplo Anatomia](imagens/header-anatomy-14.png)

1. Dropdown.
2. Dropdown **Mobile**.


#### 8. Botão Acesso GovBr (Opcional)

O Botão Acesso GovBr fica localizado no canto direito do Cabeçalho e através dele o usuário poderá realizar os passos de autenticação no ambiente GovBr. 

Este Botão é apresentado apenas quando o usuário estiver deslogado. Após o login, ele será substituído pelo _Componente Avatar_.

Veja os exemplos abaixo para Desktop e Mobile:

![Exemplo Anatomia](imagens/header-anatomy-8.png)

#### 9. Componente Avatar (Opcional)

O Avatar do Usuário consiste em uma imagem (ou ícone, caso o usuário não tenho escolhido uma foto para representá-lo no ambiente virtual) e dá acesso a algumas ferramentas úteis à configuração do usuário e notificações do sistema. **Este elemento só será apresentado quando o usuário estiver logado** no ambiente GovBr. A opção de _Logout_ ou _Sair_ ficará disponível no Menu Dropdown após o clique no _Componente Avatar_.

![Exemplo Anatomia](imagens/header-anatomy-9.png)

![Exemplo Anatomia](imagens/header-anatomy-15.png)

1. Dropdown.
2. Dropdown **Mobile**.

Há disponível um documento com maiores detalhes do componente Avatar. Por favor consulte-o para mais detalhes.

#### 10. Componente Search (Opcional);

Através do Componente Search (Busca) o usuário poderá realizar pesquisa no Site/Sistema por palavra-chave. Este elemento é opcional e deve ser usado de acordo com a necessidade de cada Site/Sistema. Abaixo seguem os exemplos de visualização do Componente Busca no Cabeçalho para Desktop, Tablet e Smartphone.

![Exemplo Anatomia](imagens/header-anatomy-10.png)

- Para mais detalhes sobre anatomia deste componente, verifique a documentação específica do mesmo.

- Para detalhes sobre o comportamento deste componente, verifique a seção Comportamento.

---

## Tipos

Foram previstos para este _Design System_ dois tipos de _Headers_ (Cabeçalhos), um **Padrão** e outro **Compacto**, como detalhado abaixo:

### Header Padrão
Este tipo de cabeçalho é utilizado quando for necessário exibir uma quantidade maior de informações e também quando for necessário dar mais ênfase a marca do site/sistema. Geralmente é mais utilizado em sites ou portais de notícias, mas não é uma exclusividade deste tipo.
![Exemplo Componente](imagens/header-anatomy-type-default.png)

### Header Compacto
Este tipo Compacto é mais utilizado quando as informações a serem exibidas forem mais sucintas ou seja necessário dar mais espaço visível à área de conteúdo. Muito utilizado em sistemas, porém não obrigatório.
![Exemplo Componente](imagens/header-anatomy-type-compact.png)

---

## Comportamentos 

### 1. Responsividade

O componente _Header_ (Cabeçalho) deve se comportar de forma fluida em relação à resolução de tela utilizada. A seguir ilustramos os _Headers_ (Cabeçalhos) para cada _Grid_ disponível.

**Observação:** O conteiner do Header sempre sangra na Grid (ocupando todo o espaco da margem), independete de qual Grid seja utilizada. 

#### Header Padrão

![Exemplo Anatomia](imagens/header-behavior-responsive-1280px.png)

![Exemplo Anatomia](imagens/header-behavior-responsive-768px.png)


![Exemplo Anatomia](imagens/header-behavior-responsive-320px.png)

#### Header Compacto

![Exemplo Anatomia](imagens/header-compact-behavior-responsive-1280px.png)

![Exemplo Anatomia](imagens/header-compact-behavior-responsive-768px.png)

![Exemplo Anatomia](imagens/header-compact-behavior-responsive-320px.png)

### 2. Comportamento do Search (Busca)

O comportamento da busca varia confome o tipo de Header (Padrão ou Compacto) e a _grid_ utilizada:

a) Em se tratando de Header do tipo Padrão, a busca preenche todo o espaço à sua esquerda mas **NÃO** oculta o logo. Ao clicar no botão Fechar, a busca é recolhida.

![Exemplo Anatomia](imagens/header-behavior-search-active-1280px.png)

![Exemplo Anatomia](imagens/header-behavior-search-active-768px.png)

![Exemplo Anatomia](imagens/header-behavior-search-active-320px.png)


b) Em se tratando de Headers do tipo Compacto, a busca preenche todo o espaço à sua esquerda e oculta o logo. Ao clicar no botão Fechar, a busca é recolhida.

![Exemplo Anatomia](imagens/header-compact-behavior-search-active-1280px.png)

![Exemplo Anatomia](imagens/header-compact-behavior-search-active-768px.png)

![Exemplo Anatomia](imagens/header-compact-behavior-search-active-320px.png)

### 3. Comportamento Logado e Não Logado

Basicamente a diferença estre as duas variações é a substituição do componente **_Botão Acesso GovBr_** pelo componente **_Avatar_** que indica que o usuário está logado.

![Exemplo Componente](imagens/header-anatomy-logout.png)

![Exemplo Componente](imagens/header-anatomy-login.png)


### 4. Comportamento Dropdown

A Lista Dropdown aparecerá flutuando sobre o cabeçalho logo abaixo do seu botão de acionamento correspondente. E fechará com um segundo clique no mesmo botão ou clique fora da lista.

#### Dropdown - Desktop e Tablet (Grid de 12 e 8 colunas)

Utilize o Componente Lista com densidade para Desktop.

![Exemplo Componente](imagens/header-compact-behavior-dropdown-1.png)

#### Dropdown - Smartphone (Grid de 4 colunas)

Utilize o Componente Lista com densidade para Mobile.

![Exemplo Componente](imagens/header-compact-behavior-dropdown-2.png)

Na versão para Smartphone (Grid de 4 colunas) a Lista Dropdown terá o mesmo comportamento. Desta vez, com o evento _Touch_, a Lista aparecerá com uma formatação apropriada para mobile, como mostra o exemplo acima, ocupando toda largura do dispositivo e flutuando sobre o conteúdo da tela. Para fechá-lo, basta acionar com um _touch_ o mesmo ícone.

### 5. Comportamento Sticky Header

O comportamento Sticky Header ocorre quando o usuário faz a rolagem da página para cima. Neste momento, o cabeçalho fixa no topo da área visível da página enquanto o conteúdo continua rolando por baixo dele.

Ao rolar a página para baixo, e chegando na posição de topo inicial, o cabeçalho volta a assumir seu estado normal.

Abaixo seguem alguns exemplos do funcionamento do Sticky Header nas versões **Padrão** e **Compacto**:

#### Sticky Header  - Cabeçalho Padrão
![Exemplo Componente](imagens/header-behavior-sticky-header-1.png)

Quando o cabeçalho assume o comportamento Sticky Header, seu formato é **otimizado** e **resumido**, **ocultando a assinatura do cabeçalho**,  **reposicionando a _Busca_**, **reduzindo a altura** do mesmo. 

![Exemplo Componente](imagens/header-behavior-sticky-header-2.png)

Neste formato, quando a **busca é acionada**, esta assume o formato mostrado abaixo, ocupando toda largura do cabeçalho.

![Exemplo Componente](imagens/header-behavior-sticky-header-3.png)

#### Sticky Header - Cabeçalho Compacto

O comportamento do **Sticky Header na versão Compacta do Cabeçalho**, ocorre da mesma forma que na versão Padrão. Com a rolagem da página, o Cabeçalho fixará no topo da tela e o conteúdo passará por baixo dele. Ao rolar a página para o estado inicial, o Cabeçalho assumirá seu estado normal.

**A única diferença** é que na versão Compacta o Cabeçalho **não muda de formato**, tendo em vista que esta versão já é bastante otimizada. Logo, todos os elementos do Cabeçalho na versão Compacta permanecerão do mesmo jeito com o Sticky Header ativo.

![Exemplo Componente](imagens/header-compact-behavior-sticky-header.png)

![Exemplo Componente](imagens/header-compact-behavior-sticky-header-2.png)

Com a **Busca ativa**, o campo de pesquisa ocupará toda largura do Cabeçalho.

![Exemplo Componente](imagens/header-compact-behavior-sticky-header-3.png)

**IMPORTANTE** - Para mais detalhamentos a respeito de **dimensões** e **espaçamentos** do comportamento **_Sticky Header_**, consulte a seção **_Design Tokens_**.

---

## Design Tokens 

### Tipografia 
|Name|Size|Weight|Text-transform|
|--|--|--|--|--|
|Título (12 colunas) Padrão|`--font-size-scale-up-03`|`--font-weight-regular`|uppercase|
|Título (12 colunas) Compacto|`--font-size-scale-up-02`|`--font-weight-regular`|uppercase|
|Título (8 colunas) Padrão|`--font-size-scale-up-02`|`--font-weight-regular`|uppercase|
|Título (8 colunas) Compacto|`--font-size-scale-up-01`|`--font-weight-regular`|uppercase
|Título (4 colunas) Padrão|`--font-size-scale-up-base`|`--font-weight-regular`|uppercase|
|Título (4 colunas) Compacto|`--font-size-scale-up-base`|`--font-weight-regular`|uppercase|
|Texto (Infos Adicionais)|`--font-size-scale-down-01`|`--font-weight-regular`|uppercase|
|_Placeholder_ (Busca)|`--font-size-scale-up-01`|`--font-weight-medium`|lowercase|
|Assinatura|`--font-size-scale-base`|`--font-weight-medium`|lowercase|
|Subtítulo (12 colunas)|`--font-size-scale-base`|`--font-weight-medium`|lowercase|
|Subtítulo (8 colunas)|`--font-size-scale-down-01`|`--font-weight-medium`|lowercase|


### Iconografia (12 e 8 colunas)
|Name|ícone|Size|Class (Font Awesome)|
|--|--|--|--|
|Acessar Menu Principal (Compacto)|<i class="fas fa-bars"></i>|`--icon-size-base`|fa-bars|
|Acessar Menu Principal (Padrão)|<i class="fas fa-bars"></i>|`--icon-size-base`|fa-bars|
|Ícones Funcionalidades|<i class="fas fa-th"></i>|`--icon-size-base`|fa-th|
|Pesquisar Padrão (12 colunas)|<i class="fas fas fa-search"></i>|`--icon-size-base`|fa-search|
|Pesquisar Compacto (12 colunas)|<i class="fas fas fa-search"></i>|`--icon-size-base`|fa-search|
|Pesquisar Padrão (8 colunas)|<i class="fas fas fa-search"></i>|`--icon-size-base`|fa-search|
|Pesquisar Compacto (8 colunas)|<i class="fas fas fa-search"></i>|`--icon-size-base`|fa-search|
|Fechar (Busca)|<i class="fas fas fa-times"></i>|`--icon-size-2x`|fa-times|

### Iconografia (4 colunas)
|Name|ícone|Size|Class (Font Awesome)|
|--|--|--|--|
|Acessar Menu Principal (Padrão)|<i class="fas fa-bars"></i>|`--icon-size-base`|fa-bars|
|Acessar Menu Principal (Compacto)|<i class="fas fa-bars"></i>|`--icon-size-base`|fa-bars|
|Ícones Funcionalidades|<i class="fas fa-th"></i>|`--icon-size-base`|fa-th|
|Pesquisar|<i class="fas fas fa-search"></i>|`--icon-size-base`|fa-search|
|Ícone Links|<i class="fas fas fa-ellipsis-v"></i>|`--icon-size-base` |fa-ellipsis-v|
|Fechar (Busca)|<i class="fas fas fa-times"></i>|`--icon-size-base`|fa-times|

### Cor
|Name|Property|Color Token|Posição/Blur|Opacidade|
|--|--|--|--|--|
|Título|text color|`--color-secondary-08`| - | - |
|Subtítulo|text color|`--color-secondary-05`| - | - |
|Assinatura|text color|`--color-secondary-05`| - | - |
|Links|text color|`--color-primary-default`| - | - |
|_Placeholder_ (Busca)|text color|`--color-secondary-07`| - | - |
|Todos os ícones|icon|`--color-primary-default`| - | - |
|Conteiner (_Header_)|Background|`--color-secondary-01`| - | - | - |
|Conteiner (Busca)|Background|`--color-secondary-02`| - | - |
|Conteiner (_Header_)|Shadow|`--color-secondary-09`|`x=0 y=3 b=6`| `16%` |
|Lista Dropdown|Shadow|`--color-secondary-09`|  `x=0 y=0 b=7` | `16%` |

### Espaçamento (Grid 12 colunas)
|Name|Property|Value|
|--|--|--|
|Conteiner|padding-top|`--spacing-scale-2x`|
|Conteiner|padding-bottom|`--spacing-scale-2x`|
|Logo|margin-right|`--spacing-scale-2x`|
|Logo|margin-bottom|`--spacing-scale-2x`|
|Logo (Header Compacto)|margin-bottom|`--spacing-scale-base`|
|Assinatura|margin-right|`--spacing-scale-2x`|
|Assinatura|margin-bottom|`--spacing-scale-2x`|
|Título (Header Compacto)|margin-right|`--spacing-scale-base`|
|Assinatura|margin-top|`--spacing-scale-half`|
|Assinatura (Header Compacto)|margin-right|`--spacing-scale-base`|
|Ícone Acionar Menu|margin-right|`--spacing-scale-2x`|
|Área para Links|align-horizontal|`--spacing-horizontal-right`|
|Área para Links (Header Compacto)|align-vertical|`--spacing-vertical-center`|
|Links (Área para Links)|margin-left|`--spacing-scale-2x`|
|Área Funcionalidades|align-horizontal|`--spacing-horizontal-right`|
|Área Funcionalidades (Header Compacto)|align-vertical|`--spacing-vertical-center`|
|Ícones (Área Funcionalidades)|margin-left|`--spacing-scale-base`|
|Separator|margin-left|`--spacing-scale-base`|
|Separator|margin-right|`--spacing-scale-base`|
|Separator (Header Compacto)|align-vertical|`--spacing-vertical-center`|
|Botão Acesso Gov|align-horizontal|`--spacing-horizontal-right`|
|Botão Acesso Gov (Header Compacto)|align-vertical|`--spacing-vertical-center`|
|Botão Acesso Gov|margin-left|`--spacing-scale-3x`|
|Avatar|align-horizontal|`--spacing-horizontal-right`|
|Avatar (Header Compacto)|align-vertical|`--spacing-vertical-center`|
|Avatar|margin-left|`--spacing-scale-3x`|
|Search|align-horizontal|`--spacing-horizontal-right`|
|Search (Header Compacto)|align-vertical|`--spacing-vertical-center`|
|Search|margin-top|`--spacing-scale-2x`|
|Search|width|`4 colunas da grid`|
|Search (com focus) |width|`12 colunas da grid`|
|Ícone Search (Header Compacto)|align-vertical|`--spacing-vertical-center`|

### Espaçamento (Grid 8 colunas)
|Name|Property|Value|
|--|--|--|
|Search|align-vertical|`--spacing-vertical-center`|
|Search (com focus) |width|`8 colunas da grid`|

### Espaçamento (4 colunas)
|Name|Property|Value|
|--|--|--|
|Conteiner|padding-top|`--spacing-scale-baseh`|
|Conteiner|padding-bottom|`--spacing-scale-baseh`|
|Separator|margin-left|`--spacing-scale-half`|
|Separator|margin-right|`--spacing-scale-half`|
|Avatar|margin-left|`--spacing-scale-2x`|
|Botão Acesso Gov|margin-left|`--spacing-scale-2x`|
|Ícone Acionar Menu|margin-right|`--spacing-scale-half`|
|Search (com focus) |width|`4 colunas da grid`|