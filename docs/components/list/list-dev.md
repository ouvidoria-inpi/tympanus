## Dependências

-   informar o script do componente.

## Código básico para Lista Simples

```html
<!-- Lista ordenada -->
<div class="br-list">
    <ol>
        <li>Texto</li>
        ...
    </ol>
</div>

<!-- Lista não ordenada -->
<div class="br-list">
    <ul>
        <li>Texto</li>
        ...
    </ol>
</div>

<!-- Lista de definição -->
<div class="br-list">
    <dl>
        <dt>Termo</dt>
        <dd>Definição</dd>
        ...
    </dl>
</div>
```

## Código básico para Lista Complexa

```html
<div class="br-list [condensed]" [condensed]>
    <div class="header">...</div>
    <div
        class="item [one-line|two-line|three-line] [selected|active] [divider]"
        [selected|active|disabled]
    >
        ...
    </div>
</div>
```

## Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   **br-list** : container do componente
-   **header** : área do título (opcional)
-   **item** : item da lista

Para Listas Simples use as tags `<ol>`, `<ul>` ou `<dd>` conforme a necessidade. O componente apenas irá formatar de acordo com os estilos do DSGov.

Listas Complexas DEVEM necessariamente conter um elemento item.

Listas Complexas PODEM conter outras Listas Complexas, é o caso de listas com opção de Expandir.

### Versão Densidade

Esta variação é aplicada usando **condensed** no container do componente. Pode-se aplicar por classe ou atributo.

```html
<!-- Aplicação por classe -->
<div class="br-list condensed">
    <div class="header">...</div>
    <div class="item">...</div>
</div>

<!-- Aplicação por atributo -->
<div class="br-list" condensed>
    <div class="header">...</div>
    <div class="item">...</div>
</div>
```

### Comportamento Expandir

Para habilitar o comportamento, a lista deve ter o atributo `collapsible`. Para que um item seja interativo ele deverá ser tag HTML do tipo `<a>` ou `<button>`.

Um item poderá abrir uma nova Lista Complexa. Neste caso ela deverá estar imediatamente após o item. Listas internas ficam ocultas por padrão.

A "sublista" é visível ao aplicar **active** ao item. É possível usar classe ou atributo.

```html
<div class="br-list" collapsible>
    <!-- Item fechado -->
    <button class="item" type="button">...</button>
    <div class="br-list">...</div>

    <!-- Item aberto -->
    <button class="item" type="button" active>...</button>
    <div class="br-list">...</div>

    <!-- Item fechado -->
    <button class="item" type="button">...</button>
    <div class="br-list">...</div>
</div>
```

### Elemento header

O header é opcional. Pode-se incluir os seguintes elementos internos:

-   **title**: Título da lista
-   **actions**: Botões de ação

```html
<!-- Lista com título -->
<div class="br-list">
    <div class="header">
        <div class="title">Título da lista</div>
    </header>
</div>

<!-- Lista com título e botões de ação -->
<div class="br-list">
    <div class="header">
        <div class="title">Título da lista</div>
        <div class="actions">
            ...
        </div>
    </header>
</div>
```

### Elemento item

Este elemento é composto dos seguintes elementos internos:

-   **support**: Recurso Visual (opcional)
-   **content**: Conteúdo Principal do item

```html
<div class="br-list">
    <div class="header">...</div>
    <div class="item">
        <div class="support">...</div>
        <div class="content">...</div>
        <div class="support">...</div>
    </div>
</div>
```

O Recurso Visual pode ser um ícone ou texto (meta).

No Conteúdo Principal pode-se usar um simples texto até um conteúdo mais complexo formatado com a Grid, desde que respeite a altura máxima do item.

Estão disponíveis 3 classes pré-formatadas para estilização do texto `.subtitle`, `.text` e `.description`. Seu uso é opcional.

#### Alturas do item

-   **one-line**: altura recomendada para 1 linha de texto (padrão)
-   **two-lines**: altura recomendada para 2 linhas de texto
-   **three-lines**: altura recomendada para 3 linhas de texto

Pode-se aplicar por classe ou atributo.

```html
<!-- Item com 1 linha -->
<div class="br-list">
    <div class="item">
        <div class="content">Texto do item</div>
    </div>
</div>

<!-- Item com 2 linhas -->
<div class="br-list">
    <div class="item two-lines">
        <div class="content">
            <div class="subtitle">Subtítulo</div>
            <div class="text">Texto Principal</div>
        </div>
    </div>
</div>

<!-- Item com 3 linhas -->
<div class="br-list">
    <div class="item" three-lines>
        <div class="content">
            <div class="subtitle">Subtítulo</div>
            <div class="text">Texto Principal</div>
            <div class="description">Texto secundário</div>
        </div>
    </div>
</div>
```

### Separadores em itens

Usar **divider** no elemento. Pode-se aplicar por classe ou atributo.

```html
<!-- Aplicação por classe -->
<div class="br-list">
    <div class="item divider">
        <div class="content">Texto do item</div>
    </div>
</div>

<!-- Aplicação por atributo -->
<div class="br-list">
    <div class="item" divider>
        <div class="content">Texto do item</div>
    </div>
</div>
```

### Itens com controle

Aplicar **selected** na linha selecionada pelo controle. Pode-se aplicar por classe ou atributo.

```html
<!-- Aplicação por classe -->
<div class="br-list">
    <div class="item selected">
        <div class="support">...</div>
        <div class="content">Texto do item</div>
        <div class="support">
            <div class="br-checkbox">
                <input id="checkbox" type="checkbox" checked />
                <label for="checkbox"></label>
            </div>
        </div>
    </div>
</div>

<!-- Aplicação por atributo -->
<div class="br-list">
    <div class="item" selected>
        <div class="support">...</div>
        <div class="content">Texto do item</div>
        <div class="support">
            <div class="br-checkbox">
                <input id="checkbox" type="checkbox" checked />
                <label for="checkbox"></label>
            </div>
        </div>
    </div>
</div>
```

## Estados

Os estados são aplicados aos itens interativos, ou seja, do tipo `<a>` ou `<button>`. Neste caso serão aplicados de forma automática os estados de **focus**, **hover**.

Estados **select** e **active** devem ser aplicados manualmente. O primeiro é usado em Listas com Controles enquanto que o segundo é usado para abrir/fechar "sublistas". A aplicação é feita por classe ou atributo.

Para o estado **disabled** é obrigatório usar atributo. Caso o item possua controle interno deve-se desativa-lo também.
