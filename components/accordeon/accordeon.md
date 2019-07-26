# Acordeão

Listagem de itens com opção de abrir/fechar conteúdo.

## Dependências

- script `accordeon.js`

## Código básico

```html
<div class="br-accordeon" single>
  <div class="field">
    <button class="header" type="button" onclick="toggleAccordeonField(this, 'br-accordeon')">
      <span class="icon"><i class="fas fa-plus"></i></span>
      <span class="title">Título do item</span>
    </button>
    <div class="content">
      <p>Conteúdo do item</p>
    </div>
  </div>
</div> 
```

## Detalhamento

O componente é composto dos seguintes elementos:

- `br-accordeon`: container do componente
- `field`: linha agrupadora
- `header`: área do cabeçalho
  - `icon`: ícone do cabeçalho
  - `title`: título do cabeçalho
- `content`: área do conteúdo

### `br-accordeon`

O comportamento padrão do componente é deixar somente uma linha aberta por vez.

O script `accordeon.js` permite deixar várias linhas abertas, bastando remover a propriedade `single` do container.

Exemplo de uso:

```html
<div class="br-accordeon">
  <div class="field">...</div>
</div>
```

### `field`

Cada linha do componente DEVE ser inserida dentro de um `field`. As linha que estiverem abertas devem conter a classe `is-active`.

Exemplo de uso:

```html
<div class="br-accordeon">
  <div class="field is-active">...</div>
  <div class="field">...</div>
  <div class="field">...</div>
</div>
```

### `header`, `title` e `icon`

O `header` DEVE ser aplicado em tags interativas, tais como `<button>` ou `<a>`.

O título da linha DEVE ficar em `title`, o ícone em `icon`.

O ícone PODE ser alinhado tanto à esquerda quanto à direita dependendo da necessidade. Para alinhar o ícone à esquerda coloque-o antes de `title`.

Exemplo de uso:

```html
<div class="br-accordeon">
  <div class="field">
    <button class="header" ...>
      <span class="icon"><i class="fas fa-plus"></i></span>
      <span class="title">Título do item</span>
    </button>
    ...
  </div>
</div>
```

Para alinhar o ícone à direita coloque-o depois de `title`.

Exemplo de uso:

```html
<div class="br-accordeon">
  <div class="field">
    <button class="header" ...>
      <span class="title">Título do item</span>
      <span class="icon"><i class="fas fa-plus"></i></span>
    </button>
    ...
  </div>
</div>
```

## Estados

Nenhum estado adicional para este componente.

## Regras especiais

O script `accordeon.js` irá fazer a troca automática dos ícones nas situações de linha aberta ou fechada.
