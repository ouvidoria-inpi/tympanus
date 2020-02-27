Este documento explica como usar a folha de estilo (CSS) do Design System.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- Carregar a Fonte Rawline -->
        <link
            rel="stylesheet"
            href="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"
        />
        <!-- Carregar a Font Awesome -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/js/all.min.js"></script>
        <!-- Carregar CSS do Design System -->
        <link
            rel="stylesheet"
            href="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/css/dsgov.css"
        />
    </head>
    ...
</html>
```

O Design System usa a fonte Rawline como tipografia padrão. Para iconografia foi escolhida a família de ícones Font Awesome. Eles devem ser carregados antes do CSS do Design System em seu código conforme o exemplo acima.

## Cores

Em [Fundamentos Visuais --> Cores](ds/fundamentos-visuais/cores) são apresentadas as cores usadas no Design System.

Estão disponíveis 3 utilitários para aplicação das cores.

-   cor de texto: `.color-*`
-   cor de fundo: `.background-color-*`
-   cor de borda: `.border-color-*`

O \* (asterísco) deve ser substituído pela cor desejada. Veja no exemplo a seguir como usar:

```html
<div class="background-color-primary-darken-01">
    <p class="color-secondary-01">Uso dos utilitários de cor.</p>
</div>
```

## Ícones

Em [Fundamentos Visuais --> Iconografia](ds/fundamentos-visuais/iconografia) é explicado como usar os ícones.

> Recomendamos carregar o **script** do fontawesome ao invés do CSS, pois ele já aplica as configurações necessárias para acessibilidade.

Ao carregar ícones que serão trocados no mesmo elemento (menu, acordeão, etc) use a classe de largura fixa `.fa-fw` para não causar o efeito "balanço" na troca deles. Veja o exemplo abaixo:

```html
<!-- item fechado -->
<button>
    <span class="icon"><i class="fas fa-plus fa-fw"></i></span>
    <span>Item fechado</span>
</button>
<!-- item aberto -->
<button>
    <span class="icon"><i class="fas fa-minus fa-fw"></i></span>
    <span>Item Aberto</span>
</button>
```

## Estados

Em [Fundamentos Visuais --> Estados](ds/fundamentos-visuais/iconografia) são explicados todos os estados disponíveis no Design System.

A maioria dos estados são aplicadas de forma automática. Alguns componentes podem ter mais estados do que outros devido à sua natureza.

O estado "destacado" pode ser aplicado usando a classe `.highlight`. Geralmente é usado em telas com busca. Supondo que o trecho abaixo esteja numa tela de busca:

```html
<div>
    <!-- termo buscado: FIES -->
    <p>
        O Fundo de Financiamento Estudantil (<span class="highlight">FIES</span
        >), criado pela Lei nº 10.260, de 12 de julho de 2001, é uma ação do
        Ministério da Educação que financia cursos superiores não gratuitos e
        com avaliação positiva no Sistema Nacional de Avaliação da Educação
        Superior (SINAES).
    </p>
</div>
```

## Tipografia

Em [Fundamentos Visuais --> Tipografia](ds/fundamentos-visuais/tipografia) são exemplificados as tipografias usadas no Design System.

Títulos e elementos de formulários são aplicados automaticamente, pois possuem tags HTML próprias para isso, porem as tipografias podem ser aplicadas por classe quando necessário. Veja no exemplo a seguir:

```html
<div class="box">
    <div class="h3">Título do bloco</div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tempora
        iure nobis nam in labore aut, numquam et tempore, ut nesciunt. Quam
        magnam impedit rerum dolores illo, accusamus maxime culpa!
    </p>
</div>
```

Seguindo as boas práticas, a tag `<h3>` só deve ser utilizada se for precedida das tags `<h1>` e `<h2>`. Como o objetivo é apenas estético foi usada uma classe para formatação do texto.

## Utilitários Bootstrap

A versão atual do Design System foi baseada no Bootstrap 4, portanto você poderá alguns dos utilitários disponíveis em <https://getbootstrap.com/docs/4.4/utilities>.

Exemplo:

```html
<div class="row mx-md-n5">
    <div class="col px-md-5">
        <div class="p-3 border">Custom column padding</div>
    </div>
    <div class="col px-md-5">
        <div class="p-3 border">Custom column padding</div>
    </div>
</div>
```

Os utilitários compatíveis são os seguintes:

-   Borders - <https://getbootstrap.com/docs/4.4/utilities/borders/>
-   Clearfix - <https://getbootstrap.com/docs/4.4/utilities/clearfix/>
-   Display - <https://getbootstrap.com/docs/4.4/utilities/display/>
-   Embeds - <https://getbootstrap.com/docs/4.4/utilities/embed/>
-   Flex - <https://getbootstrap.com/docs/4.4/utilities/flex/>
-   Float - <https://getbootstrap.com/docs/4.4/utilities/float/>
-   Image Replacement - <https://getbootstrap.com/docs/4.4/utilities/image-replacement/>
-   Overflow - <https://getbootstrap.com/docs/4.4/utilities/overflow/>
-   Position - <https://getbootstrap.com/docs/4.4/utilities/position/>
-   Screen readers - <https://getbootstrap.com/docs/4.4/utilities/screen-readers/>
-   Shadows - <https://getbootstrap.com/docs/4.4/utilities/shadows/>
-   Sizing - <https://getbootstrap.com/docs/4.4/utilities/sizing/>
-   Spacing - <https://getbootstrap.com/docs/4.4/utilities/spacing/>
-   Stretched link - <https://getbootstrap.com/docs/4.4/utilities/stretched-link/>
-   Text - <https://getbootstrap.com/docs/4.4/utilities/text/>
-   Vertical alignment - <https://getbootstrap.com/docs/4.4/utilities/vertical-align/>
-   Visibility - <https://getbootstrap.com/docs/4.4/utilities/visibility/>

## Grid

Em [Fundamentos Visuais --> Sistema de Grid](ds/fundamentos-visuais/grid) estãos especificados os breakpoints, números de colunas e espaçamentos da Grid.

A Grid é a mesma grid Bootstrap, portanto sua forma de uso é a mesma. Os tamanhos de breakpoints, containers e gutters possuem valores diferenciados.

Leia a documentação oficial de uso da Grid Bootstrap no endereço [https://getbootstrap.com/docs/4.4/layout/grid/](https://getbootstrap.com/docs/4.4/layout/grid/).

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
