## Dependências

Nenhuma dependência.

## Código básico

``` html
<nav class="tab-nav">
    <ul>
        <li class="tab-item">
            <button type="button" data-panel="panel-1"><span class="name">Sobre</span></button>
        </li>
        <li class="tab-item">
            <button type="button" data-panel="panel-2"><span class="name">Todos</span></button>
        </li>
        <li class="tab-item is-active">
            <button type="button" data-panel="panel-3"><span class="name">Notícias</span></button>
        </li>
    </ul>
</nav>
<div class="tab-content">
    <div class="tab-panel" id="panel-1">
        <p>Painel Sobre</p>
    </div>
    <div class="tab-panel" id="panel-2">
        <p>Painel Todos</p>
    </div>
    <div class="tab-panel is-active" id="panel-3">
        <p>Painel Noticias</p>
    </div>
</div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

* `br-tabs` : container do componente
* `tab-nav` : container da lista de abas
* `tab-item` : cada aba da lista
* `data-panel` : atributo de referência ao painel de conteúdo
* `name` : nome da aba
* `tab-content` : container do painel de conteúdo
* `tab-panel` : cada painel de conteúdo

## `br-tabs` 

**Elemento obrigatório**!

Todo o componente Tabs está dentro de uma **div** com a classe `br-tabs` 

Exemplo de uso:

``` html
<div class="br-tabs">
    ...
</div>
```

## `tab-nav` 

**Elemento obrigatório**!

A lista de abas está dentro de um container de navegação que deve ser escrito com a tag **nav** e a classe `tab-nav` 

Exemplo de uso:

``` html
<nav class="tab-nav">
    ...
</nav>
```

## `tab-item` 

**Elemento obrigatório**!

Cada aba DEVE estar dentro de um elemento `tab-item` .

O `tab-item` contém uma tag `button` com um atributo `data-panel` , que faz referência ao painel correspondente

Cada `tab-item` corresponde a um **li** de uma lista não ordenada **ul**

Para a aba selecionada aplique a classe `is-active` no **li** correspondente.

Exemplo de uso:

``` html
<ul>
    <li class="tab-item">
        <button type="button" data-panel="panel-1">...</button>
    </li>
    <li class="tab-item">
        <button type="button" data-panel="panel-2">...</button>
    </li>
    <li class="tab-item is-active">
        <button type="button" data-panel="panel-3">...</button>
    </li>
</ul>
```

## `name` 

**Elemento obrigatório**!

Cada aba DEVE ter um nome.

Exemplo de uso:

``` html
<ul>
    <li class="tab-item">
        <button type="button" data-panel="panel-1"><span class="name">Sobre</span></button>
    </li>
    <li class="tab-item">
        <button type="button" data-panel="panel-2"><span class="name">Todos</span></button>
    </li>
    <li class="tab-item is-active">
        <button type="button" data-panel="panel-3"><span class="name">Notícias</span></button>
    </li>
</ul>
```

## `tab-content` 

**Elemento obrigatório**!

O conteúdo das abas deve ficar em uma **div** com a classe `tab-content` 

Exemplo de uso:

``` html
<div class="tab-content">
    ...
</div>
```

## `tab-panel` 

**Elemento obrigatório**!

Cada painel corresponde a uma **div** com a classe `tab-panel` e um *id* para o link com a âncora

Exemplo de uso:

``` html
<div class="tab-content">
    <div class="tab-panel" id="panel-1">
        ...
    </div>
</div>
```

## Código com Contadores

``` html
<div class="br-tabs" data-counter="true">
    <nav class="tab-nav">
        <ul>
            <li class="tab-item" not-tab="true"><span class="name">Refine a sua busca</span>
                <p class="outcome">Resultados<span>124</span></p>
            </li>
            <li class="tab-item">
                <button type="button" data-panel="panel-7"><span class="name">Todos</span></button><span class="results">( valor )</span>
            </li>
            <li class="tab-item is-active">
                <button type="button" data-panel="panel-8"><span class="name">Notícias</span></button><span class="results">( valor )</span>
            </li>
        </ul>
    </nav>
    <div class="tab-content">
        <div class="tab-panel" id="panel-7">
            <p>Painel Todos</p>
        </div>
        <div class="tab-panel is-active" id="panel-8">
            <p>Painel Notícias</p>
        </div>
    </div>
</div>
```

# Anatomia do código com contadores

Essa versão possui os seguintes itens adicionais

* `data-counter` - Atributo para ativar o contador
* `not-tab` - Elemento que não se comporta como aba
* `results` - Elemento que mostra a contagem

## `data-counter` 

**Elemento obrigatório caso queira utilizar contadores**!

Caso seja para utilizar as abas com contador, é necessário utilizar o atributo `data-counter` com o valor **true** na mesma **div** no `br-tas` 

Exemplo de uso:

``` html
<div class="br-tabs" data-counter="true">
    ...
</div>
```

## `not-tab` 

**Elemento opcional**!

O atributo `not-tab` serve para indicar que um `tab-item` dentro do container `tab-nav` **não é uma aba**

Esse elemento não será clicável

Exemplo de uso:

``` html
<nav class="tab-nav">
    <ul>
        <li class="tab-item" not-tab="true"><span class="name">Refine a sua busca</span>
            <p class="outcome">Resultados<span>124</span></p>
        </li>
    </ul>
</nav>
```

## `results` 

**Elemento obrigatório caso queira utilizar contadores**!

Serve para mostrar o contador da aba.É utilizado dentro de um `tab-item` 

Exemplo de uso:

``` html
<ul>
    <li class="tab-item" not-tab="true"><span class="name">Refine a sua busca</span>
        <p class="outcome">Resultados<span>124</span></p>
    </li>
    <li class="tab-item">
        <button type="button" data-panel="panel-7"><span class="name">Todos</span></button><span class="results">( valor )</span>
    </li>
    <li class="tab-item is-active">
        <button type="button" data-panel="panel-8"><span class="name">Notícias</span></button><span class="results">( valor )</span>
    </li>
</ul>
```

