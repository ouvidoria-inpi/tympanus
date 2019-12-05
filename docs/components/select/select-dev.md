## Dependências

- script `select.js`

## Código básico

```html
<div class="br-select">
  <label for="simples">Label</label>
  <select id="simples">
    <option value="0">Selecione uma opção</option>
    <option value="opcao-1">opção 1</option>
    <option value="opcao-2">opção 2</option>
    <option value="opcao-3">opção 3</option>
  </select>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-select`: container do componente
- `<label>`: rótulo do select
- `<select>`: caixa de seleção do dado
- `feedback`: mensagem de feedback (opcional)
- `help`: Texto de ajuda para o `<select>` (opcional)

## `feedback`

Em situações de erro ou retorno positivo use o `feedback`. Ele deve ser inserido imediatamente após o `br-select`.

O texto de feedback deve ser inserido dentro de `message`.

Para **mensagem de erro** adicione `is-invalid` ao container do componente. Use o ícone `<i class="fas fa-times-circle">` dentro da mensagem de feedback.

Exemplo de uso:

```html
<div class="br-select is-invalid">...</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Selecione uma opção</span>
</div>
```

Para **mensagem positiva** adicione `is-valid` ao container do componente. Use o ícone `<i class="fas fa-check-circle">` dentro da mensagem de feedback.

Exemplo de uso:

```html
<div class="br-select is-valid">...</div>
<div class="feedback">
  <i class="fas fa-check-circle"></i>
  <span class="message">Dado válido</span>
</div>
```

## `help`

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida imediatamente após o `br-select`.

Exemplo de uso:

```html
<div class="br-select">...</div>
<p class="help">
  Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

Caso exista `feedback` ele deverá ser inserido antes de `help`.

Exemplo de uso:

```html
<div class="br-select is-invalid">...</div>
<div class="feedback">...</div>
<p class="help">
  Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

# Variações

Estão disponíveis 3 tamanhos de select.

- Select padrão
- Select médio
- Select pequeno

## Select médio

Inclua a classe `is-medium` no container do componente.

Exemplo de uso:

```html
<div class="br-select is-medium">...</div>
```

## Select pequeno

Inclua a classe `is-small` no container do componente.

Exemplo de uso:

```html
<div class="br-select is-small">...</div>
```

# Estados

Este componente apresenta os seguintes estados:

- focus
- valid
- invalid
- disabled

## `focus`

É aplicado automaticamente no elemento. PODE ser aplicado diretamente usando o prefixo `is-` ao container do componente.

Exemplo de uso:

```html
<div class="br-select is-focus">...</div>
```

## `valid`

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente.

O `feedback` deve ser incluído imediatamente após o componente com o ícone `<i class="fas fa-check-circle">`.

Caso exista `help` ele deverá ficar após o `feedback`.

Exemplo de uso:

```html
<div class="br-select is-valid">...</div>
<div class="feedback">...</div>
```

## `invalid`

Mesma regra do `valid`, porém o ícone do `feedback` é o `<i class="fas fa-times-circle">`.

Exemplo de uso:

```html
<div class="br-select is-invalid">...</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Selecione uma opção</span>
</div>
```

## disabled

Deve ser aplicado como propriedade no `<select>`.

Exemplo de uso:

```html
<div class="br-select">
  <label for="disabled">Desativado</label>
  <select id="disabled" disabled>
    <option value="0">Selecione uma opção</option>
    <option value="opcao-1">opção 1</option>
    <option value="opcao-2">opção 2</option>
    <option value="opcao-3">opção 3</option>
  </select>
</div>
```

# Regras especiais

Nenhuma regra especial.
