Este documento explica como usar as folhas de estilo do Design System de Governo.

``` text
design-system/
├── dist/
│   └── css/
│       ├── dsgov-base.css
│       ├── dsgov-components.css
│       └── dsgov.css
└── ...
```

Existem 3 arquivos de CSS disponíveis para uso. O arquivo `dsgov.css` possui o código completo do Design System. Os outros arquivos estão disponíveis caso seu projeto necessite apenas da base ou componentes.

Carregue a folha de estilo dentro de `<head>` .

Exemplo de uso:

``` html
<head>
    <link rel="stylesheet" href="dsgov.css" />
</head>
```

## Cores

Estão disponíveis variações de background e texto.

Para modificar a cor de fundo use `.bg-*` . Para modificar a cor de texto use `text-*` .

Exemplo de uso:

``` html
<div class="bg-primary">
    <p class="text-white">Texto...</p>
</div>
```

Veja mais informações em [**Fundamentos Visuais --> Cores**](ds/fundamentos-visuais/cores).

## Espaçamentos

Os espaçamentos foram criados com base no utilitário **Spacing** do Bootstrap, portanto sua forma de uso é parecida. Os valores foram adaptados e/ou acrescentados.

Leia a documentação oficial de uso do utilitário **Spacing** no endereço [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de uso:

``` html
<header id="header" class="page-header pt-1 pb-2 pt-md-3 pb-md-4">
    <!-- Acessibilidade -->
    <div class="accessibility py-half py-lg-3"></div>
    <!-- Logo -->
    <div id="logo" class="logo my-2 my-sm-3 my-lg-4"></div>
</header>
```

Veja mais informações em [**Fundamentos Visuais --> Espaçamentos**](ds/fundamentos-visuais/espacamentos).

## Grid

A Grid é a mesma grid Bootstrap, portanto sua forma de uso é a mesma. Os tamanhos de breakpoints, containers e gutters possuem valores diferenciados.

Leia a documentação oficial de uso da Grid Bootstrap no endereço [https://getbootstrap.com/docs/4.3/layout/grid/](https://getbootstrap.com/docs/4.3/layout/grid/).

Exemplo de uso:

``` html
<div class="container">
    <div class="row">
        <!-- Coluna com largura pré-definida -->
        <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">...</div>
        <!-- Coluna com espaço restante -->
        <div class="col">...</div>
    </div>
</div>
```

Veja mais informações em [**Fundamentos Visuais --> Sistema de Grid**](ds/fundamentos-visuais/grid).

## Utilitários

A versão atual do Design System foi baseada no Bootstrap 4, portanto você poderá alguns dos utilitários disponíveis em <https://getbootstrap.com/docs/4.3/utilities>.

Exemplo:

``` html
<div class="row mx-md-n5">
    <div class="col px-md-5">
        <div class="p-3 border bg-primary">Custom column padding</div>
    </div>
    <div class="col px-md-5">
        <div class="p-3 border bg-secondary">Custom column padding</div>
    </div>
</div>
```

Os utilitários compatíveis são os seguintes:

* Clearfix - <https://getbootstrap.com/docs/4.3/utilities/clearfix/>
* Embeds - <https://getbootstrap.com/docs/4.3/utilities/embed/>
* Float - <https://getbootstrap.com/docs/4.3/utilities/float/>
* Overflow - <https://getbootstrap.com/docs/4.3/utilities/overflow/>
* Position - <https://getbootstrap.com/docs/4.3/utilities/position/>
* Screen readers - <https://getbootstrap.com/docs/4.3/utilities/screen-readers/>
* Stretched link - <https://getbootstrap.com/docs/4.3/utilities/stretched-link/>
* Text - <https://getbootstrap.com/docs/4.3/utilities/text/>
* Vertical alignment - <https://getbootstrap.com/docs/4.3/utilities/vertical-align/>
* Visibility - <https://getbootstrap.com/docs/4.3/utilities/visibility/>

