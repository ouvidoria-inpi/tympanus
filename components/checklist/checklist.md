# Checklist

**Este componente requer script para funcionar corretamente**!

Listagem de itens com opção de seleção e edição de conteúdo.

## Dependências

- script `checklist.js`

## Código básico

```html
<div class="br-checklist">
  <div class="field">
    <div class="icon">
      <i class="far fa-envelope"></i>
    </div>
    <div class="input">
      <label for="radio-email">E-mail</label>
      <input type="text" id="radio-email" placeholder="Ex: fulano@email.com">
    </div>
    <div class="check">
      <input name="preferencia" type="radio" id="radio-email-check" onclick="toggleActiveField(this, 'br-check-list')">
      <label for="radio-email-check"><span class="sr-only">E-mail</span></label>
    </div>
  </div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-checklist`: container do componente
- `field`: linha agrupadora para entrada de dados
- `icon`: ícone da linha
- `input`: input da linha
- `check`: checkbox ou radio button da linha
- `feedback`: mensagem de feedback
- `help`: Texto de ajuda (opcional)

## `field`

**Elemento obrigatório**!

Para cada linha do checklist DEVE ser criado um `field`.

Ao selecionar uma linha aplique a classe `is-active`. A seleção deve ser feita no elemento `check` que poderá ser **checkbox** ou **radio button**.

Exemplo de uso:

```html
<div class="br-checklist">
  <div class="field is-active">...</div>
  <div class="field">...</div>
  <div class="field">...</div>
</div>
```

Nos casos de informar erro ao usuário aplique a classe `is-invalid`. Esta classe deverá ser aplicada também no container do componente.

Exemplo de uso:

```html
<div class="br-checklist is-invalid">
  <div class="field is-invalid">...</div>
  <div class="field">...</div>
  <div class="field is-invalid">...</div>
  <div class="field">...</div>
  <div class="field">...</div>
</div>
```

## `icon`

**Elemento obrigatório**!

Cada linha DEVE ter um ícone.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<div class="br-checklist">
  <div class="field">
    <div class="icon">
      <i class="far fa-envelope"></i>
    </div>
    <div class="input">...</div>
    <div class="check">...</div>
  </div>
  <div class="field">
    <div class="icon">
      <img class="icon" src="image.png" alt="Texto descritivo">
    </div>
    <div class="input">...</div>
    <div class="check">...</div>
  </div>
</div>
```

## input

**Elemento obrigatório**!

Input básico.

- O `<input>` fica oculto quando a linha não está selecionada
- Ao selecionar a linha o `<label>` fica oculto e o `<input>` é mostrado

Exemplo de uso:

```html
<div class="br-checklist">
  <div class="field">
    <div class="icon">...</div>
    <div class="input">
      <label for="radio-email">E-mail</label>
      <input type="text" id="radio-email" placeholder="Ex: fulano@email.com">
    </div>
    <div class="check">...</div>
  </div>
</div>
```

## check

**Elemento obrigatório**!

Este elemento PODE conter checkboxes.

Exemplo de uso:

```html
<div class="br-checklist">
  <div class="field">
    <div class="icon">...</div>
    <div class="input">...</div>
    <div class="check">
      <input type="checkbox" id="box-email-check" onclick="toggleActiveField(this, 'br-check-list')">
      <label for="box-email-check"><span class="sr-only">E-mail</span></label>
    </div>
  </div>
  <div class="field">
    <div class="icon">...</div>
    <div class="input">...</div>
    <div class="check">
      <input type="checkbox" id="box-celular-check" onclick="toggleActiveField(this, 'br-check-list')">
      <label for="box-celular-check"><span class="sr-only">Celular</span></label>
    </div>
  </div>
</div>
```

Este elemento PODE conter radio buttons.

Exemplo de uso:

```html
<div class="br-checklist">
  <div class="field">
    <div class="icon">...</div>
    <div class="input">...</div>
    <div class="check">
      <input name="preferencia" type="radio" id="radio-email-check" onclick="toggleActiveField(this, 'br-check-list')">
      <label for="radio-email-check"><span class="sr-only">E-mail</span></label>
    </div>
  </div>
  <div class="field">
    <div class="icon">...</div>
    <div class="input">...</div>
    <div class="check">
      <input name="preferencia" type="radio" id="radio-celular-check" onclick="toggleActiveField(this, 'br-check-list')">
      <label for="radio-celular-check"><span class="sr-only">Celular</span></label>
    </div>
  </div>
</div>
```

## `feedback`

Em situações de erro ou retorno positivo use o `feedback`. Ele deve ser inserido imediatamente após o `br-checklist`.

O texto de feedback deve ser inserido dentro de `message`.

Para **mensagem de erro** adicione `is-invalid` ao container do componente. Use o ícone `<i class="fas fa-times-circle">` dentro da mensagem de feedback.

Exemplo de uso:

```html
<div class="br-checklist is-invalid">...</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Marque uma opção</span>
</div>
```

Para **mensagem positiva** adicione `is-valid` ao container do componente. Use o ícone `<i class="fas fa-check-circle">` dentro da mensagem de feedback.

## `help`

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida imediatamente após o `br-checklist`.

Exemplo de uso:

```html
<div class="br-checklist">...</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
```

Caso exista `feedback` ele deverá ser inserido antes de `help`.

Exemplo de uso:

```html
<div class="br-checklist is-invalid">...</div>
<div class="feedback">...</div>
<p class="help">...</p>
```

# Estados

Este componente apresenta os seguintes estados:

- active: aplicável em `field`
- valid: aplicável em `field` e `br-checklist`
- invalid: aplicável em `field` e `br-checklist`

# Regras especiais

`input` e `check` PODEM ser desativados aplicando o atributo `disabled` no `<input>`.

Exemplo de uso:

```html
<div class="br-checklist">
  <div class="field">
    <div class="icon">...</div>
    <div class="input">
      <label>
      <input ... disabled>
    </div>
    <div class="check">
      <input ... disabled>
      <label>
    </div>
  </div>
</div>
```
