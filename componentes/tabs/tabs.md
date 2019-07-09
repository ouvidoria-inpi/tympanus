# Abas

Lista de abas. Pode ser usado na opção horizontal ou vertical.

## Dependências

Nenhuma dependência.

## Código básico

```html
<ul class="br-tabs">
  <li class="item is-active">
    <a href="#">
      <span class="name">Item 1</span>
    </a>
  </li>
  <li class="item">
    <a href="#">
      <span class="name">Item 2</span>
    </a>
  </li>
  <li class="item">
    <a href="#">
      <span class="name">Item 2</span>
    </a>
  </li>
</ul>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-tabs`: container do componente
- `item`: cada aba da lista
- `icon`: ícone da aba (item opcional)
- `name`: nome da aba
- `results`: número de itens de resultados da aba (usado em telas de buscas)

## `br-tabs`

**Elemento obrigatório**!

Por padrão a visualização das abas é horizontal.

Para usar a versão vertical aplique a classe `flex-column`.

Exemplo de uso:

```html
<ul class="br-tabs flex-column">
  ...
</ul>
```

## `item`

**Elemento obrigatório**!

Cada aba DEVE estar dentro de um elemento `item`.

O `item` pode conter uma tag de link - `<a href="">` ou uma tag de botão - `<button>`.

Para a aba selecionada aplique a classe `is-active`.

Exemplo de uso:

```html
<ul class="br-tabs flex-column">
  <li class="item is-active">...</li>
  <li class="item">...</li>
  <li class="item">...</li>
</ul>
```

## `icon`

Cada aba PODE ter um ícone, portanto este elemento é opcional.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<ul class="br-tabs flex-column">
  <li class="item">
    <a href="#">
      <img class="icon" src="image.png" alt="Texto descritivo">
      <span class="name">Nome da aba</span>
    </a>
  </li>
</ul>
```

## `name`

**Elemento obrigatório**!

Cada aba DEVE ter um nome.

Exemplo de uso:

```html
<ul class="br-tabs">
  <li class="item">
    <a href="#">
      <span class="name">Nome da aba</span>
    </a>
  </li>
</ul>
```

## `results`

Cada aba PODE ter o número de itens de resultados, portanto este elemento é opcional.

Exemplo de uso:

```html
<ul class="br-tabs">
  <li class="item">
    <a href="#">
      <span class="name">Nome da aba</span>
      <span class="results">(124)</span>
    </a>
  </li>
</ul>
```

# Estados

Este componente apresenta os seguintes estados:

- ativo: aplicado via classe `is-active` diretamente em `item`
- hover: aplicado automaticamente via hover/focus na aba

# Regras especiais

Nenhuma.
