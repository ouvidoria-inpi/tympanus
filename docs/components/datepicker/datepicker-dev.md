## Dependências

- script `datepicker.min.js` (código minificado do componente [js-datepicker](https://www.npmjs.com/package/js-datepicker))
- script `datepicker.js` (código de regionalização e customização do componente)

## Código básico

```html
<div class="br-input datepicker">
  <label for="input">Label</label>
  <input id="input" type="text" placeholder="dd/mm/aaaa" />
  <button class="icon">
    <i class="fas fa-calendar-alt"></i>
  </span>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-input datepicker`: container do componente
- `<label>`: rótulo do input
- `<input>`: caixa de entrada de dados
- `<button>`: botão com ícone para o `<input>` 
- `feedback`: mensagem de feedback
- `help`: Texto de ajuda para o `<input>` (opcional)

## `<button>`

O input datepicker tem um botão com ícone do Fontawesome - `<i class="fas.fa-calendar-alt">`.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<div class="br-input datepicker">
  <label for="datepicker">Data</label>
  <input id="datepicker" type="text" placeholder="dd/mm/aaaa" />
  <button class="icon">
    <i class="fas fa-calendar-alt"></i>
  </button>
</div>
```

## `feedback`

Em situações de erro ou retorno positivo use o `feedback`. Ele deve ser inserido imediatamente após o `br-input`.

O texto de feedback deve ser inserido dentro de `message`.


Exemplo de uso:

```html
<div class="br-input datepicker is-invalid">
  <label for="date-feedback-invalid">Input com erro</label>
  <input id="date-feedback-invalid" type="text"  />
  <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Data inválida</span>
</div>
```

## `help`

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida imediatamente após o `br-input`.

Exemplo de uso:

```html
<div class="br-input datepicker">
  <label for="date-help">Label</label>
  <input id="date-help" type="text" placeholder="dd/mm/aaaa" />
  <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<p class="help">
  Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

# Estados

Este componente apresenta os seguintes estados:

- valid
- invalid
- disabled

## `valid`

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente.

O `feedback` deve ser incluído imediatamente após o componente com o ícone `<i class="fas fa-check-circle">`.

Caso exista `help` ele deverá ficar após o `feedback`.

Exemplo de uso:

```html
<div class="br-input datepicker is-valid">
  <label for="valido">Válido</label>
  <input id="valido" type="text" placeholder="dd/mm/aaaa" />
   <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<div class="feedback">
  <i class="fas fa-check-circle"></i>
  <span class="message">Data válida</span>
</div>
<p class="help">
  Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

## `invalid`

Mesma regra do `valid`, porém o ícone do `feedback` é o `<i class="fas fa-times-circle">`.

Exemplo de uso:

```html
<div class="br-input datepicker is-invalid">
  <label for="invalido">Inválido</label>
  <input id="invalido" type="text" placeholder="dd/mm/aaaa">
  <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Data inválida</span>
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
</div>
```

## `disabled`

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente, bem como a propriedade `disabled` no `<input>`.

Exemplo de uso:

```html
<div class="br-input datepicker">
  <label for="desabilitado">Desabilitado</label>
  <input
    class="br-input datepicker is-disabled"
    id="desabilitado"
    type="text"
    placeholder="dd/mm/aaaa"
    disabled  />
  <button class="icon"><i class="fas fa-calendar-alt"></i></button> 
</div>
```

# Regras especiais

Esse componente foi baseado no `js-datepicker` para uma documentação detalhada do funcionamento dos scripts [acesse o link](https://www.npmjs.com/package/js-datepicker)

## Inicialização do componente
Importados os scripts das depedências do componente em sua página, no seu código javascript, deve-se criar uma constante (`const`) do tipo `datepicker` que referencia a `id` do campo `br-input datepicker`, conforme exemplo a seguir:


```js
const dtp_picker = datepicker('#id', (options))
```
No arquivo `datepicker.js` foram criadas uma série de customizações a serem usadas nos `options` do componente de forma a padronizar e regionalizar seu uso.


