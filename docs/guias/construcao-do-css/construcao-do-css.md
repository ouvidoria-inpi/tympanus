Este documento propõe um padrão de codificação para folhas de estilo (CSS).

## Organização dos arquivos

As folhas de estilo do Design System seguem a arquitetura **Atomic Design**.

```text
design-system/
└── src/
    └── scss/
        ├── components/
        ├── configs/
        ├── functions/
        ├── mixins/
        ├── templates/
        └── utilities/
```

## Sass

O CSS do Design System foi criado a partir do pré-processador Sass. Usamos o formato `.scss` na criação dos arquivos. Eles são compilados em arquivos CSS.

Incentivamos o formato [DRY](https://alistapart.com/article/dry-ing-out-your-sass-mixins/ 'Don’t Repeat Yourself') na criação dos códigos. Aproveite as facilidades do Sass e crie, sempre que possível, mixins, functions ou mesmo [Placeholder Selectors](https://sass-lang.com/documentation/style-rules/placeholder-selectors) quando for criar seu código, mas lembre-se de respeitar a organização do código em suas respectivas pastas.

**Não utilize valores hard-coded** nos estilos de componentes e templates. Use sempre variáveis. A exceção é para estilos que não irão mudar a configuração independente do tema.

Pense sempre na lógica de temas nas soluções. Um componente pode variar sua aparência de acordo com o tema ativado. Valores hard-coded nessas situações inviabilizam a aplicação de temas.

Veja a seguir um exemplo hipotético:

```scss
.button {
    border-width: var(--button-border-width);
    border-radius: var(--button-radius);
    padding: var(--button-padding);
}
.button.primary {
    background: var(--button-primary);
}
.button.clear {
    border: 0; // o botão do tipo clear nunca possui borda
}
```

<div class="row">
<div class="col-sm">

### Tema principal

```css
/* Configurações de botões */
--button-primary: #2969bd;
--button-border-width: 1px;
--button-radius: 4px;
--button-padding: 10px;
```

</div>
<div class="col-sm">

### Tema alternativo

```scss
/* Configurações de botões */
--button-primary: #000;
--button-border-width: 3px;
--button-radius: 0;
--button-padding: 5px 15px;
```

</div>
</div>

## Uso dos Tokens

Conforme documentado em **Fundamentos Visuais**, na navegação principal, o Design System utiliza os Tokens de Design em cores, fontes e outros elementos. Nas folhas de estilo eles são transcritos como variáveis de CSS e são aplicados nas diversas propriedades.

Em resumo, os Tokens são criadas para uso global em `:root` para uso geral e podem ser aplicados em seletores ou outras variáveis locais quando necessário.

No CSS a variável é aplicada conforme o exemplo a seguir:

```css
:root {
    --font-size-scale-base: 14px;
    --font-size-scale-up-01: 16.8px;
}
p {
    font-size: var(--font-size-scale-base);
}
@media (min-width: 1600px) {
    p {
        font-size: var(--font-size-scale-up-01);
    }
}
```

> No exemplo acima o tamanho da fonte do parágrafo é de 14px, porém em resoluções a partir de 1600px o tamanho da fonte é de 16.8px.

No Sass criamos uma função para aplicar os Tokens de Design: `v(nome do token)`. Use-a sempre que houver necessidade de aplicar um Token, caso contrário o CSS gerado pelo Sass será incompatível com possíveis trocas de Temas ou aplicação do Modo de Alto Contraste.

E porque não utilizar as variáveis do Sass? Veja a seguir o que irá acontecer no CSS caso a função não for utilizada:

<div class="row">
<div class="col-sm">

```scss
p {
    font-size: v(font-size-scale-base);
}
```

Irá gerar o CSS utilizando o Token de Design:

```css
p {
    font-size: var(--font-size-scale-base);
}
```

</div>
<div class="col-sm">

```scss
p {
    font-size: $font-size-scale-base;
}
```

Irá gerar o CSS com valor estático:

```css
p {
    font-size: 14px;
}
```

</div>
</div>

## Comentários

Para cada componente ou template é importante colocar o comentário sobre a finalidade do código. Há casos em que é interessante colocar inclusive exemplos de uso e variação do componente no comentário. Nestes casos use o comentário de bloco, pois você poderá usar mais de uma linha.

Há situações em que você deverá usar o comentário simples (inline) apenas para explicar uma propriedade no código.

Veja no exemplo a seguir o uso dos 2 tipos de comentários em ação:

```css
/**
* Helper class to truncate and add ellipsis to a string too long for it to fit
* on a single line.
* 1. Prevent content from wrapping, forcing it on a single line.
* 2. Add ellipsis at the end of the line.
*/
.ellipsis {
    white-space: nowrap; /* 1 */
    text-overflow: ellipsis; /* 2 */
    overflow: hidden;
}
```

Comentários são importantes e facilitam o entendimento e manutenção do código CSS, portanto use-os sempre.

## Media Queries

Não crie arquivos a parte para essa função. O ideal é que cada componente outemplate tenha suas regras de media querie escritas no próprio arquivo.

Além disso, recomendamos a escrita no formato **Mobile First**. Exemplo de aplicação de Media Queries:

```scss
// Estilos para Mobile e Tablet
.sidebar { … }

// Estilos para Desktop
@media (min-width: $grid-breakpoint-medium) {
  .sidebar { … }
}

// Estilos para TV
@media (min-width: $grid-breakpoint-large) {
  .sidebar { … }
}
```

## Linter

Os linters permitem a criar de regras de escrita de códigos garantindo a padronização do CSS. No projeto está configurado o linter **stylelint** - <https://stylelint.io/>. Usamos a versão compatível com Sass.

Recomendamos usar editores de texto que possuam suporte a linters para que você não seja surpreendido com mensagens de erro ao enviar CSS no repositório do projeto. O Visual Studio Code - <https://code.visualstudio.com/> - é um exemplo de editor com suporte ao stylelint, bastando instalar a respectiva extensão.

## Links interessantes

### Browsers

-   <https://en.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support)>

### Boas Práticas

-   <https://levelup.gitconnected.com/the-complete-css-style-guide-for-your-next-project-bb5a5d8f7bc9>
-   <https://www.creativebloq.com/advice/a-guide-to-writing-better-css>
-   <https://github.com/airbnb/css>
-   <https://cssguidelin.es/>
-   <https://sass-guidelin.es>
-   <http://www.richfinelli.com/what-is-a-css-source-maps/>
-   <https://raygun.com/blog/css-preprocessors-examples/>

### Media Queries

-   <https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries>
-   <https://www.w3schools.com/css/css_rwd_mediaqueries.asp>
-   <https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488>
-   <https://css-tricks.com/snippets/css/media-queries-for-standard-devices/>

### Frameworks

-   <https://getbootstrap.com/>
-   <https://semantic-ui.com/>
-   <https://foundation.zurb.com/>
-   <https://materializecss.com/>
-   <https://v0.material-ui.com/#/>
-   <https://purecss.io/>
-   <http://getskeleton.com/>
-   <https://getuikit.com/>
-   <https://milligram.io/>

### Manuais IDG

-   <http://www.portalpadrao.gov.br/manuais>
