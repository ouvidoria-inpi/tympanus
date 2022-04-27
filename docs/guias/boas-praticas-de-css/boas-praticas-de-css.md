## Pré-processador de CSS

Os pré-processadores de CSS ajudam na otimização do código, pois o código gerado será formatado conforme as configurações predefinidas.

A maioria permite minificação e criação de source maps. A vantagem de um código minificado é a diminuição do arquivo de CSS gerando agilidade no carregamento e aplicação na tela.

Exemplos e lista dos principais pré-processadores de 2018 no endereço: <https://raygun.com/blog/css-preprocessors-examples/>

### Sass

O Sass possui 2 formatos de escrita: SASS e SCSS. A primeira usa indentação para separar blocos de códigos e cada regra deve ser escrita numa linha única. A segunda é parecida com a escrita original do CSS. Para facilitar a leitura do código **recomendamos o uso do formato SCSS**.

#### Criar uma biblioteca de mixins utilitários para reaproveitamento de código

```scss
/// Centralizar usando display flex
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
/// Bloco de notícias
.news {
    color: $news-color;
    background: $news-background;
    @include flex-center;
}
```

Mais exemplos em <https://gist.github.com/chriseppstein/1215856>

#### Mudar a cor do texto de acordo com a cor de fundo de um elemento

```scss
/// Variáveis de cor
$black: #000;
$white: #fff;

/// Função para mudança de cor
@function dynamic-color($color) {
    @if (lightness($color) > 50) {
        @return $black;
    } @else {
        @return $white;
    }
}
/// Bloco de notícias
.news {
    color: dynamic-color($news-bg);
    background: $news-bg;
    @include flex-center;
}
```

Fonte: <http://thesassway.com/intermediate/dynamically-change-text-color-based-on-its-background-with-sass>

#### Uso avançado de Maps

-   Gerar classes de cores - <https://frontstuff.io/generate-all-your-utility-classes-with-sass-maps>
-   Controle de código responsivo - <https://jonsuh.com/blog/managing-responsive-breakpoints-with-sass-maps/>
-   DRY - Don’t Repeat Yourself - <https://thoughtbot.com/blog/removing-sass-duplication>

### Less

Diferente do Sass que precisa ser pré-compilado em CSS, o Less pode ser transcrito diretamente na página usando Javascript.

O link a seguir mostra de forma prática as diferenças entre Sass e Less - <https://css-tricks.com/sass-vs-less/>

---

## Reset CSS

Antigamente cada Browser se comportava de forma diferente para a mesma regra de CSS. Isso era ocasionada pela falta de padronização e pela quantidade de engines disponíveis no mercado.

Hoje esse número foi reduzido à 3 principais (Webkit, Blink e Gecko), mas ainda assim é possível que cada uma delas renderize alguns elementos na tela de forma particular. Isso é melhor verificado em telas de formulário, pois cada input ou botão apresenta sua formação de acordo com a engine e Sistema Operacional do usuário.

O uso de Reset CSS faz com que todas ou grande parte dos componentes e tags HTML sigam a mesma padronização visual.

No Design System GOV.BR usamos o normalize.css customizado. Conheça o normalize.css em <https://necolas.github.io/normalize.css/>.

## Arquitetura

Existem várias arquiteturas de organização de código disponíveis na internet. O mais indicado para uso é aquela que represente melhor o seu projeto.

| Seguindo a arquitetura SMACSS (pronuncia-se Smacks) | Seguindo a arquitetura Atomic Design          | Seguindo a arquitetura RSCSS                     | Seguindo a arquitetura ITCSS                                |
| --------------------------------------------------- | --------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| Base, Layout, Module, State, Theme                  | Atoms, Molecules, Organisms, Templates, Pages | Components, Elements, Variants, Layouts, Helpers | Settings, Tools, Generic, Base, Objects, Components, Trumps |

A base do Design System GOV.BR é o Atomic Design.

## Comentários

Para cada componente ou template é importante colocar o comentário sobre a finalidade do código. Há casos em que é interessante colocar inclusive exemplos de uso e variação do componente no comentário. Nestes casos use o comentário de bloco, pois você poderá usar mais de uma linha.

Há situações em que você deverá usar o comentário simples (inline) apenas para explicar uma propriedade no código.

Veja no exemplo a seguir o uso dos 2 tipos de comentários em ação:

```scss
////
/// Helper class to truncate and add ellipsis to a string too long for it to fit
/// on a single line.
/// 1. Prevent content from wrapping, forcing it on a single line.
/// 2. Add ellipsis at the end of the line.
////

/// Ellipsis
.ellipsis {
    white-space: nowrap; /* 1 */
    text-overflow: ellipsis; /* 2 */
    overflow: hidden;
}
```

Comentários são importantes e facilitam o entendimento e manutenção do código CSS, portanto use-os sempre.

---

## Media Queries

Não crie arquivos a parte para essa função. O ideal é que cada componente/template tenha suas regras de media querie escritas no próprio arquivo. Caso a primeira versão não possua responsividade, crie uma v2 do arquivo com as novas regras.

### Abordagem Mobile First

```scss
/// Arquivo “components/sidebar”

.sidebar { … }

/// Maior que tela de Mobile
@media (min-width: $medium-screen) {
  .sidebar { … }
}

/// Maior que tela de Tablet
@media (min-width: $large-screen) {
  .sidebar { … }
}

/// Maior que tela de Desktop
@media (min-width: $larger-screen) {
  .sidebar { … }
}
```

### Abordagem tradicional

```scss
/// Arquivo “components/sidebar”

.sidebar { … }

/// Tela de Mobile
@media (max-width: $small-screen) {
  .sidebar { … }
}

/// Tela de Tablet
@media (min-width: ($small-screen + 1)) and (max-width: $medium-screen) {
  .sidebar { … }
}

/// Maior que tela de Desktop
@media (min-width: $larger-screen) {
  .sidebar { … }
}
```

Conforme pode ser visto no exemplo acima, **recomendamos** sempre o uso da abordagem **Mobile First**. A compreensão e manutenção do código é melhor.

## Linters

A maioria das regras de boas práticas exemplificadas a seguir podem ser escritas ou configuradas nos linters do projeto. Seu uso melhora a legibilidade e cria uma padronização de escrita. Há casos em que o uso de linters até corrige erros de sintaxe.

Os novos editores de texto possuem linters nativos ou disponíveis como extensões/plugins para instalação. Caso não esteja disponível no seu editor veja a seguir algumas opções de linters.

### Linters online

-   <http://csslint.net/> - Possui várias opções de configuração (setinha ao lado de “Lint!”).
-   <https://codebeautify.org/cssvalidate>
-   <https://pinetools.com/css-beautifier>

### Linters para configurar em projetos

-   <https://stylelint.io/>
-   <https://github.com/gajus/css-lint>
-   <https://github.com/sasstools/sass-lint>

No Design System GOV.BR é usado o linter `stylelint` . Ele pode ser utilizado através do script `npm run lint:styles` .

Ele também está configurado como pipeline de desenvolvimento dentro do positório git, ou seja, sempre que um novo código seja inserido/atualizado ele será ativado.

---

## Organize seus arquivos

Independente da arquitetura usada no projeto é importante saber como organizar os arquivos. A folha de estilo principal deve ser usada somente para carregar configurações e o restante dos arquivos conforme a arquitetura.

Segue um exemplo usando o pré-processador SASS:

```scss
/// <NOME DO PROJETO/TEMPLATE/COMPONENTE - VERSÃO>
/// <DESCRIÇÃO>
/// <LINK PARA VISUALIZAÇÃO/DOWNLOAD>

/// #LIBRARIES
@import 'jspm_packages/npm/hint.css@2.2.1/src/hint.scss';
@import 'jspm_packages/npm/susy@2.2.9/sass/susy';

/// #COMPONENTS
@import 'components/boxview';
@import 'components/boxview-item';
@import 'components/buttons';
@import 'components/carousel';
@import 'components/document-reader';
```

## Construa pensando em temas

**Não coloque valores hard-coded nos estilos de componentes e templates**. Use sempre variáveis. A exceção é para estilos que não irão mudar a configuração independente do tema.

Pense sempre na lógica de temas nas soluções. Um componente pode variar sua aparência de acordo com o tema ativado. Valores hard-coded nessas situações inviabilizam a aplicação de temas.

Veja a seguir como isso seria aplicado na prática:

<div class="row">
<div class="col-sm">
Tema principal

```scss
/// Configurações de botões
$btn-padding: 10px;
$btn-bg: #fff;
$btn-primary-bg: #2969bd;
$btn-border-width: 1px;
$btn-radius: 4px;
```

</div>
<div class="col-sm">
Tema comemorativo

```scss
/// Configurações de botões
$btn-padding: 5px 15px;
$btn-bg: #fff;
$btn-primary-bg: #000;
$btn-border-width: 3px;
$btn-radius: 0;
```

</div>
</div>

Botão padrão

```scss
/// Arquivo “components/buttons.scss”

.button {
    background: $btn-bg;
    border-width: $btn-border-width;
    border-radius: $btn-radius;
    padding: $btn-padding;
    &-primary {
        background: $btn-primary-bg;
    }
    &-clear {
        border: 0; // o botão do tipo clear nunca possui borda
    }
}
```

## Links interessantes

### Browsers

-   <https://en.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support)>

### Arquitetura

-   <http://smacss.com/>
-   <https://rscss.io>
-   <https://willianjusten.com.br/organizando-seu-css-com-itcss/>
-   <http://bradfrost.com/blog/post/atomic-web-design/>

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

### Linters

-   <https://github.com/sass/linter>
-   <https://github.com/sasstools/sass-lint>
-   <https://stylelint.io/>

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
