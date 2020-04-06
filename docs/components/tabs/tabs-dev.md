## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-tabs">
  <nav class="tab-nav">
    <ul>
      <li class="tab-item"><a href="#panel-1"><span class="name">Item 1</span></a>
      </li>
      <li class="tab-item is-active"><a href="#panel-2"><span class="name">Item 2</span></a>
      </li>
      <li class="tab-item"><a href="#panel-3"><span class="name">Item 3</span></a>
      </li>
    </ul>
  </nav>
  <div class="tab-content">
    <div class="tab-panel" id="panel-1">
      ...
    </div>
    <div class="tab-panel is-active" id="panel-2">
      ...
    </div>
    <div class="tab-panel" id="panel-3">
      ...
    </div>
  </div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-tabs`: container do componente
- `tab-nav`: container da lista de abas
- `tab-item`: cada aba da lista
- `name`: nome da aba
- `tab-content`: container do painel de conteúdo
- `tab-panel`: cada painel de conteúdo

## `br-tabs`

**Elemento obrigatório**!

Todo o componente abas está dentro de uma **div** com a classe `br-tabs`

Exemplo de uso:

```html
<div class="br-tabs">
  ...
</div>
```

## `tab-nav`

**Elemento obrigatório**!

A lista de abas está dentro de um container de navegação que deve ser escrito com a tag **nav** e a classe `tab-nav`

Exemplo de uso:

```html
<nav class="tab-nav">
  ...
</nav>
```

## `tab-item`

**Elemento obrigatório**!

Cada aba DEVE estar dentro de um elemento `tab-item`.

O `tab-item` contém uma tag de link - `<a href="">` com uma ancora para o painel correspondente

Cada `tab-item` corresponde a um **li** de uma lista não ordenada **ul**

Para a aba selecionada aplique a classe `is-active` no **li** correspondente.

Exemplo de uso:

```html
<ul>
  <li class="tab-item"><a href="#panel-1">...</a>
  </li>
  <li class="tab-item is-active"><a href="#panel-2">...</a>
  </li>
  <li class="tab-item"><a href="#panel-3">...</a>
  </li>
</ul>
```

## `name`

**Elemento obrigatório**!

Cada aba DEVE ter um nome.

Exemplo de uso:

```html
<ul>
  <li class="tab-item"><a href="#panel-1"><span class="name">Item 1</span></a>
  </li>
  <li class="tab-item is-active"><a href="#panel-2"><span class="name">Item 2</span></a>
  </li>
  <li class="tab-item"><a href="#panel-3"><span class="name">Item 3</span></a>
  </li>
</ul>
```

## `tab-content`

**Elemento obrigatório**!

O conteúdo das abas deve ficar em uma **div** com a classe `tab-content`

Exemplo de uso:

```html
<div class="tab-content">
  ...
</div>
```

## `tab-panel`

**Elemento obrigatório**!

Cada painel corresponde a uma **div** com a classe `tab-panel`e um *id* para o link com a âncora

Exemplo de uso:

```html
<div class="tab-content">
  <div class="tab-panel" id="panel-1">
    ...
  </div>
</div>
```

## Código com Contadores

```html
<div class="br-tabs" data-counter="true">
  <nav class="tab-nav">
    <ul>
      <li class="tab-item" not-tab="true"><span class="name">Refine a sua busca</span>
        <p class="outcome">Resultados<span>valor</span></p>
      </li>
      <li class="tab-item"><a href="#pane-1"><span class="name">Item 1</span></a><span class="results">( valor )</span>
      </li>
      <li class="tab-item is-active"><a href="#pane-2"><span class="name">Item 2</span></a><span class="results">( valor )</span>
      </li>
    </ul>
  </nav>
  <div class="tab-content">
    <div class="tab-panel" id="pane-1">
      <p>Painel Item 1</p>
    </div>
    <div class="tab-panel is-active" id="pane-2">
      <p>Painel Item 2</p>
    </div>
  </div>
</div>
```

# Anatomia do código com contadores

Essa versão possui os seguintes itens adicionais

- `data-counter` - Atributo para ativar o contador
- `not-tab` - Elemento que não se comporta como aba
- `results` - Elemento que mostra a contagem

## `data-counter`

**Elemento obrigatório caso queira utilizar contadores**!

Caso seja para utilizar as abas com contadore, é necessário utilizar o atributo `data-counter` com o valor **true** na mesma **div** no `br-tas`

Exemplo de uso:

```html
<div class="br-tabs" data-counter="true">
  ...
</div>
```

## `not-tab`

**Elemento opcional**!

O atributo `not-tab` serve para indicar que um `tab-item` dentro do container `tab-nav` **não é uma aba**

Esse elemento não será clicável

Exemplo de uso:

```html
<nav class="tab-nav">
  <ul>
    <li class="tab-item" not-tab="true"><span class="name">Refine a sua busca</span>
      <p class="outcome">Resultados<span>valor</span></p>
    </li>
  </ul>
</nav>
```

## `results`

**Elemento obrigatório caso queira utilizar contadores**!

Serve para mostrar o contador da aba. É utilizado dentro de um `tab-item`

Exemplo de uso:

```html
<ul>
  <li class="tab-item"><a href="#pane-1"><span class="name">Item 1</span></a><span class="results">( valor )</span>
  </li>
</ul>
```
