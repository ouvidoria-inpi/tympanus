# Uso do CSS

Este documento explica como usar as folhas de estilo do Design System de Governo.

O CSS do DS-Gov foi dividido em partes.

```text
design-system/
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
  <link rel="stylesheet" href="dsgov-base.min.css">
  <link rel="stylesheet" href="dsgov-components.min.css">
  <link rel="stylesheet" href="dsgov-templates.min.css">
</head>
```

A seguir algumas informações sobre cada parte.

## CSS de base

O arquivo `dsgov-base.min.css` contém os seguintes elementos:

- reset CSS
- cores
- tipografia básica
- grid
- utilitários

### Cores

Estão disponíveis variações de background e texto usando as cores do DS-Gov.

Para modificar a cor de fundo use `.bg-*`. Para modificar a cor de texto use `text-*`.

Exemplo de uso:

```html
<div class="bg-primary">
  <p class="text-white">Texto...</p>
</div>
```

Veja mais informações em [**Fundamentos Visuais --> Cores**](ds/fundamentosvisuais/cores).

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

Veja mais informações em [**Fundamentos Visuais --> Sistema de Grid**](ds/fundamentosvisuais/grid).

### Espaçamentos

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

Veja mais informações em [**Fundamentos Visuais --> Espaçamentos**](ds/fundamentosvisuais/espacamentos).

### Utilitários

Os utilitários facilitam a criação de HTML sem a necessidade de modificação em CSS.

Utilitários do Bootstrap disponíveis no DS-Gov:

- Clearfix - <https://getbootstrap.com/docs/4.3/utilities/clearfix/>
- Embeds - <https://getbootstrap.com/docs/4.3/utilities/embed/>
- Float - <https://getbootstrap.com/docs/4.3/utilities/float/>
- Overflow - <https://getbootstrap.com/docs/4.3/utilities/overflow/>
- Position - <https://getbootstrap.com/docs/4.3/utilities/position/>
- Screen readers - <https://getbootstrap.com/docs/4.3/utilities/screen-readers/>
- Stretched link - <https://getbootstrap.com/docs/4.3/utilities/stretched-link/>
- Text - <https://getbootstrap.com/docs/4.3/utilities/text/>
- Vertical alignment - <https://getbootstrap.com/docs/4.3/utilities/vertical-align/>
- Visibility - <https://getbootstrap.com/docs/4.3/utilities/visibility/>

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

Leia a documentação de cada componente na sessão **Componentes** no menu principal.

## CSS de templates

Esta folha de estilo é um compilado de **todos os templates** criados para o DS-Gov.

Leia a documentação de cada template na sessão **Templates** no menu principal.
