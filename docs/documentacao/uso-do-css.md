# Uso do CSS

Esse documento é destinado para **uso das folhas de estilo** do DS-Gov.

O CSS do DS-Gov foi dividido em partes.

```text
repositorio/
├── assets/
│   └── styles/
│       ├── dsgov-base.min.css
│       ├── dsgov-components.min.css
│       └── dsgov-templates.min.css
└── ...
```

Carregue as versões minificadas de CSS dentro de `<head>`.

Exemplo de uso:

```html
<head>
  ...
  <link rel="stylesheet" href="dsgov-base.min.css">
  <link rel="stylesheet" href="dsgov-components.min.css">
  <link rel="stylesheet" href="dsgov-templates.min.css">
  ...
</head>
```

A seguir algumas informações sobre cada parte.

## CSS de base

O arquivo `dsgov-base.min.css` contém os seguintes elementos:

- reset CSS
- tipografia básica
- grid
- utilitários

### Grid

A Grid do DS-Gov é a mesma grid Bootstrap, portanto sua forma de uso é a mesma. Os tamanhos de breakpoints, containers e gutters possuem valores diferenciados.

Leia a documentação oficial de uso da Grid Bootstrap no endereço [https://getbootstrap.com/docs/4.3/layout/grid/](https://getbootstrap.com/docs/4.3/layout/grid/).

Exemplo de uso:

```html
<div class="container">
  <div class="row">
    <!-- Coluna com largura pré-definida -->
    <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">...</div>
    <!-- Coluna com espaço restante -->
    <div class="col">...</div>
  </div>
</div>
```

**Breakpoints**

- Smartphone: **até 576px**;
- Smartphone (landscape) e Tablet: **a partir de 576px**
- Tablet (landscape) e Desktop: **a partir de 992px**
- Desktop: **a partir de 1280px**
- TV:  **a partir de 1600px**

**Containers**

- Smartphones e Tablets: **100% da largura**
- Desktop: **máximo de 1152px**
- TV: **máximo de 1440px**

**Gutters**

- Smartphones e Tablets: **16px**
- Desktop: **24px**
- TV: **32px**

### Utilitários

Os utilitários facilitam a criação de HTML sem a necessidade de modificação em CSS. Foram criados utilitários próprios no CSS Base, mas também estão disponíveis alguns utilitários do Bootstrap.

Utilitários do CSS base do DS-Gov:

- Tipografia
- Cores
- Espaçamentos

Utilitários do Bootstrap compatíveis com o DS-Gov:

- Clearfix - [https://getbootstrap.com/docs/4.3/utilities/clearfix/](https://getbootstrap.com/docs/4.3/utilities/clearfix/)
- Embeds - [https://getbootstrap.com/docs/4.3/utilities/embed/](https://getbootstrap.com/docs/4.3/utilities/embed/)
- Float - [https://getbootstrap.com/docs/4.3/utilities/float/](https://getbootstrap.com/docs/4.3/utilities/float/)
- Overflow - [https://getbootstrap.com/docs/4.3/utilities/overflow/](https://getbootstrap.com/docs/4.3/utilities/overflow/)
- Position - [https://getbootstrap.com/docs/4.3/utilities/position/](https://getbootstrap.com/docs/4.3/utilities/position/)
- Screen readers - [https://getbootstrap.com/docs/4.3/utilities/screen-readers/](https://getbootstrap.com/docs/4.3/utilities/screen-readers/)
- Stretched link - [https://getbootstrap.com/docs/4.3/utilities/stretched-link/](https://getbootstrap.com/docs/4.3/utilities/stretched-link/)
- Text - [https://getbootstrap.com/docs/4.3/utilities/text/](https://getbootstrap.com/docs/4.3/utilities/text/)
- Vertical alignment - [https://getbootstrap.com/docs/4.3/utilities/vertical-align/](https://getbootstrap.com/docs/4.3/utilities/vertical-align/)
- Visibility - [https://getbootstrap.com/docs/4.3/utilities/visibility/](https://getbootstrap.com/docs/4.3/utilities/visibility/)

**Tipografia**

A fonte usada no DS-Gov é a **Rawline** que é considerada uma versão da Raleway com os números perfeitamente alinhados.

Você poderá forçar o uso de fonte Raleway ou Rawline, caso haja necessidade, usando as seguintes classes `.font-raleway` e `.font-rawline` em seu código HTML.

Exemplo de uso:

```html
<p class="font-raleway">123456789</p>
<p class="font-rawline">123456789</p>
```

**Cores**

Algumas cores têm funções específicas dentro do DS-Gov.

- **Cor primária** - Azul
- **Cor secundária** - Verde
- **Cores de estado** - Verde, Amarelo, Vermelho e Azul
- **Cores de apoio** - Marrom, Ciano, Amarelo, Laranja
- **Tons de cinza**, incluindo **Preto** e **Branco**

As cores foram declaradas usando **Design Tokens** - [https://css-tricks.com/what-are-design-tokens/](https://css-tricks.com/what-are-design-tokens/). Ficaram definidas neste formato:

```scss
// Primary Colors
$color-primary: #1351b4;
$color-primary-lighten-15: #2b74e9;
$color-primary-lighten-25: #5992ed;
$color-primary-pastel: #dbe8fb;
$color-primary-darken-15: #0c326f;
$color-primary-darken-25: #071d41;

// Secondary Colors
$color-secondary: #268744;

// State Colors
$color-success: #168821;
$color-warning: #ffcd07;
$color-danger: #ff3333;
$color-info: #155bcb;

// Support Colors
$color-brown: #a26739;
$color-teal: #36a191;
$color-yellow: #f2e317;
$color-orange: #d84800;

// Grayscale Colors
$color-white: #ffffff;
$color-gray-1: #f8f8f8;
$color-gray-2: #ededed;
$color-gray-3: #cccccc;
$color-gray-4: #9e9d9d;
$color-gray-5: #888888;
$color-gray-6: #555555;
$color-gray-7: #333333;
$color-black: #000000;
```

Estão disponíveis variações de background e texto usando as cores do DS-Gov.

Para modificar a cor de fundo use `.bg-*`. Para modificar a cor de texto use `text-*`.

Exemplo de uso:

```html
<div class="bg-primary">
  <p class="text-white">Texto...</p>
</div>
```

**Espaçamentos**

O Grid de 8 Pontos - [https://spec.fm/specifics/8-pt-grid](https://spec.fm/specifics/8-pt-grid) foi usado como base para os espaçamentos do DS-Gov.

Os espaçamentos foram criados com base no utilitário **Spacing** do Bootstrap, portanto sua forma de uso é parecida. Os valores foram adaptados e/ou acrescentados.

Leia a documentação oficial de uso do utilitário **Spacing** no endereço [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de uso:

```html
<header id="header" class="page-header pt-1 pb-2 pt-md-3 pb-md-4">
  <!-- Acessibilidade -->
  <div class="accessibility py-half py-lg-3"></div>
  <!-- Logo -->
  <div id="logo" class="logo my-2 my-sm-3 my-lg-4"></div>
</header>
```

Os valores dos espaçamentos são os seguintes:

- **0** - elimina margin e padding atribuindo o valor 0;
- **half** - 4px
- **1** - 8px
- **2** - 12px
- **3** - 16px
- **4** - 20px
- **5** - 24px
- **6** - 32px
- **7** - 36px
- **8** - 40px
- **9** - 44px
- **10** - 56px
- **auto** - define o valor "auto"

## CSS de componentes

O arquivo `dsgov-components.min.css` é um compilado de **todos os componentes** criados para o DS-Gov.

As regras gerais são as seguintes:

- todo componente do DS-Gov possui o prefixo `br-`
- uso de prefixo `is-` em suas variações

Exemplo de uso:

```html
<!-- Botão primário -->
<button class="br-button is-primary" type="button">Entrar</button>

<!-- Input com mensagem de erro -->
<div class="br-input is-invalid">...</div>

<!-- Select pequeno -->
<div class="br-select is-small">...</div>

<!-- Aba ativa do componente tabs -->
<ul class="br-tabs">
  <li class="item is-active">...</li>
</ul>
```

Leia a documentação de cada componente em sua respectiva sessão no menu de navegação principal.

## CSS de templates

Esta folha de estilo é um compilado de **todos os templates** criados para o DS-Gov.

Leia a documentação de cada template em sua respectiva sessão no menu de navegação principal.
