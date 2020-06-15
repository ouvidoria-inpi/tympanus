## Dependências

-   informar o script do componente.

## Código básico do Menu Principal

```html
<div class="br-menu">
    <nav class="folders">
        <div class="close-menu">...</div>
        <div class="folder">
            <a class="header [logo]" href="">
                <div class="content">...</div>
                <div class="support">...</div>
            </a>
            <ul>
                <li>
                    <a class="item" href="">
                        <div class="content">...</div>
                        <div class="support">...</div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <footer class="footer">
        <div class="footer-block">
            <div class="title"></div>
            <div class="content"></div>
        </div>
    </footer>
</div>
```

## Código básico do Menu Auxiliar

```html
<div class="br-menu">
    <nav class="folders">
        <div class="folder">
            <ul>
                <li>
                    <a class="item" href="">
                        <div class="content">...</div>
                        <div class="support">...</div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
```

## Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   **br-menu**: container do componente
-   **folders**: agrupador de menus
    -   **close-menu**: fechamento do menu _(obrigatório para Menu Principal)_
    -   **folder**: container de itens de menu
        -   **header** _(opcional)_: título do menu
        -   **item**: item de menu
-   **footer** _(opcional)_: agrupador de itens de rodapé do componente
    -   **footer-block**: cada bloco de informações rodapé
        -   **title** título do bloco de rodapé
        -   **content**: conteúdo do bloco de rodapé

### Elemento folders

Este elemento é um agrupador de menus.

Para Menu Principal é obrigatório usar o elemento **close-menu**. Menu Auxiliar não usa este elemento.

Não use menus complexos dentro do Menu Auxiliar, pois não é sua finalidade.

### Elemento close-menu

Obrigatório para Menu Principal apenas.

```html
<div class="br-menu">
    <nav class="folders">
        <div class="close-menu">
            <button class="br-button" type="button" circle mini>
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="folder">...</div>
    </nav>
    ...
</div>
```

### Elemento folder

Cada lista de itens de menu deve ficar dentro deste elemento. Caso seu projeto possua o menu do gov.br então ele deverá possuir 2 elementos folder, 1 para o gov.br e outro para o seu.

Dentro do Menu Auxiliar é recomendável utilizar apenas 1 folder, visto que ele se comporta como menu contextual e não há opção de fechar. Listagens de menus com muitos níveis de navegação também não são recomendadas para Menu Auxiliar. Neste caso use o Menu Principal.

Este elemento possui a seguinte estrutura:

-   **header** _(opcional)_: Cabeçalho menu
-   **item**: item de menu

Tanto **header** quanto **item** suportam os seguintes elementos internos:

-   **support** _(opcional)_: exibe os recursos visuais
-   **content**: item de menu

> Use a classe `.logo` junto com o elemento header quando o header do seu Site/Sistema tiver um logo.

Deve-se usar tags HTML de lista para manter os itens de menu coerentes, conforme exemplo a seguir:

```html
<div class="br-menu">
    <nav class="folders">
        <div class="folder">
            <ul>
                <li>
                    <a class="item" href="">
                        <div class="content">Item de menu 1</div>
                    </a>
                </li>
                <li>
                    <a class="item" href="">
                        <div class="content">Item de menu 2</div>
                    </a>
                </li>
                <li>
                    <a class="item" href="">
                        <div class="content">Item de menu 3 com submenu</div>
                        <div class="support">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </a>
                    <ul>
                        <li>
                            <a class="item" href="">
                                <div class="content">Item de submenu 1</div>
                            </a>
                        </li>
                        <li>
                            <a class="item" href="">
                                <div class="content">Item de submenu 2</div>
                            </a>
                        </li>
                        <li>
                            <a class="item" href="">
                                <div class="content">Item de submenu 3</div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>
```

Exemplo com o menu gov.br

```html
<div class="br-menu">
    <nav class="folders">
        <div class="close-menu">...</div>
        <div class="folder">
            <a class="header logo" href="">
                <div class="content">
                    <img src="endereço/da/imagem/govbr.svg" alt="gov.br" />
                </div>
                <div class="support">
                    <i class="fas fa-angle-down"></i>
                </div>
            </a>
            <ul>
                <li>...</li>
                ...
            </ul>
        </div>
        <div class="folder">
            <a class="header" href="">
                <div class="content">Site/Sitema</div>
                <div class="support">
                    <i class="fas fa-angle-down"></i>
                </div>
            </a>
            <ul>
                <li>...</li>
                ...
            </ul>
        </div>
    </nav>
</div>
```

### Elemento footer

O footer é um elemento usado apenas no Menu Principal. Dentro deste elemento use os blocos **footer-block**.

```html
<div class="br-menu">
    <nav class="folders">
        <div class="close-menu">...</div>
        <div class="folder">...</div>
    </nav>
    <footer class="footer">
        <div class="footer-block">
            <div class="title">...</div>
            <div class="content">...</div>
        </div>
    </footer>
</div>
```

## Estados

-   `hover`: É aplicado automaticamente ao item;

-   `foco`: É aplicado automaticamente ao item;

-   `ativo`: É aplicado automaticamente ao item através do atributo `active`;

-   `ancorado`: É aplicado ao item com endereço ativo da página atual através do atributo `linked`;

-   `desabilitado`: É aplicado ao item quando possuir o atributo `disabled`.

Exemplo de uso:

```html
<a class="item" active>
    <div class="content">Item de menu</div>
    <div class="support">
        <i class="fas fa-angle-right"></i>
    </div>
</a>
```

## Regras especiais

### Nageção pelos elementos folder em múltiplos menus

-   Quando houver mais de um menu, ao carregar o componente, o último menu será visualizado na forma expandida, enquanto os demais serão retraídos.
-   Ao se expandir um menu (folder) os demais serão retraídos.
-   Ao se navegar pelos subníveis de um menu, este será visualizado unicamente no componente, ocultando os demais. Contudo, caso se clique no grupo do menu, ao se retrair, os demais deverão ser visualizados.

### Nageção pelos subníveis de um menu

-   Ao se clicar num item que possua subníveis, este se tornará ativo e serão ocultados os itens adjacentes, mostrando apenas os itens internos ao ativo.
-   Um item desabilitado (disabled) não pode ser clicado e ocultará seus subníveis, caso existam.

### Estados adicionais controlados por script

-   O atributo `hidden` é usado pelo script nas tags de lista para controlar a visualização dos subitens. Exemplo de uso:

```html
<li>
    <a class="item">
        <div class="content">Conteúdo</div>
        <div class="support">
            <i class="fas fa-angle-right"></i>
        </div>
    </a>
    <ul hidden>
        <li>
            <a class="item"><div class="content">Imagens</div></a>
        </li>
        <li>
            <a class="item"><div class="content">Videos</div></a>
        </li>
        <li>
            <a class="item"><div class="content">Áudios</div></a>
        </li>
    </ul>
</li>
```

-   O atributo `linked` deve ser aplicado ao item do menu para associá-lo ao endereço de página ativo. Para que o menu seja previamente carregado no nivel do item ancorado, deve-se associar o atributo `linked` ao referido item. Ao se realizar essa ação dinamicamente por script deve-se chamar a função `_showLinked` do componente. Exemplo de uso:

```html
<a class="item" linked>
    <div class="content">Item de menu</div>
    <div class="support">
        <i class="fas fa-angle-right"></i>
    </div>
</a>
```
