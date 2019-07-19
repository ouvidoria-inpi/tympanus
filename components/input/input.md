# Input

## Dependências

- script `input-autocomplete.js` (input com autocomplete)
- script `input-password.js` (input com senha)

## Código básico

```html
<div class="br-input">
  <label for="input">Label</label>
  <input id="input" type="text" placeholder="Texto de exemplo">
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-input`: container do componente
- `<label>`: rótulo do input
- `<input>`: caixa de entrada de dados
- `icon`: ícone para o `<input>` (opcional)
- `action`: botão de ação interno do `<input>` (no tipo **Input com botão de ação**)
- `feedback`: mensagem de feedback
- `help`: Texto de ajuda para o `<input>` (opcional)

## `icon`

O input PODE ter um ícone, portanto este elemento é opcional.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<div class="br-input">
  <label for="input-icon">Input com ícone</label>
  <input id="input-icon" type="text" placeholder="Texto de exemplo">
  <span class="icon">
    <i class="fas fa-search"></i>
  </span>
</div>
```

## `feedback`

Em situações de erro ou retorno positivo use o `feedback`. Ele deve ser inserido imediatamente após o `br-input`.

O texto de feedback deve ser inserido dentro de `message`.

Para **mensagem de erro** adicione `is-invalid` ao container do componente. Use o ícone `<i class="fas fa-times-circle">` dentro da mensagem de feedback.

Exemplo de uso:

```html
<div class="br-input is-invalid">
  <label for="input-feedback-invalid">Input com erro</label>
  <input id="input-feedback-invalid" type="text" placeholder="Texto de exemplo">
</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Dado inválido</span>
</div>
```

Para **mensagem positiva** adicione `is-valid` ao container do componente. Use o ícone `<i class="fas fa-check-circle">` dentro da mensagem de feedback.

Exemplo de uso:

```html
<div class="br-input is-valid">
  <label for="input-feedback-valid">Input válido</label>
  <input id="input-feedback-valid" type="text" placeholder="Texto de exemplo">
</div>
<div class="feedback">
  <i class="fas fa-check-circle"></i>
  <span class="message">Dado válido</span>
</div>
```

## `help`

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida imediatamente após o `br-input`.

Exemplo de uso:

```html
<div class="br-input">
  <label for="input-help">Label</label>
  <input id="input-help" type="text" placeholder="Texto de exemplo">
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
```

Caso exista `feedback` ele deverá ser inserido antes de `help`.

Exemplo de uso:

```html
<div class="br-input is-invalid">
  <label for="input-help-invalid">Input com erro</label>
  <input id="input-help-invalid" type="text" placeholder="Texto de exemplo">
</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Dado inválido</span>
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
```

# Variações

Estão disponíveis 3 tipos de input.

- Input básico
- Input com botão de ação
- Input com autocomplete

## Input básico

É o input padrão usado na maioria das ocasiões.

Ele é compatível com os seguintes inputs do HTML 5:

- text
- password
- date
- datetime-local
- email
- month
- number
- search
- tel
- time
- url
- week

A interação de cada input pode variar de acordo com o dispositivo do usuário.

Exemplo de uso:

```html
<div class="br-input">
  <label for="input-base">Input básico</label>
  <input id="input-base" type="text" placeholder="Texto de exemplo">
</div>
```

## Input com botão de ação

**Este componente requer script para funcionar corretamente**!

- Adicionar `is-action` ao container do componente
- Carregar o script `input-password.js` para usar esse tipo de input.

A ação do botão - `action` - dependerá do script aplicado. Exemplos: input de senha, input com datepicker etc.

Use preferencialmente ícones dentro do botão de ação.

Exemplo de uso:

```html
<div class="br-input is-action">
  <label for="password">Senha</label>
  <input type="password" id="password" placeholder="Digite sua senha de 8 a 11 dígitos">
  <button class="action" type="button" onclick="toggleInputAction(this, 'is-action')">
    <span class="sr-only">Mostrar senha</span>
    <i class="fas fa-eye"></i>
  </button>
</div>
<!-- script do botão de ação -->
<script src="input-password.js"></script>
```

## Input com autocomplete

**Este componente requer script para funcionar corretamente**!

- Adicionar `is-autocomplete` ao container do componente
- Carregar o script `input-autocomplete.js` para usar esse tipo de input.
- Incluir um `JSON` com a lista de sugestões

Exemplo de uso:

```html
<div class="br-input is-autocomplete">
  <label for="search-autocomplete">Autocomplete</label>
  <input id="search-autocomplete" type="text" placeholder="Digite um país">
  <span class="icon">
    <i class="fas fa-search"></i>
  </span>
</div>
<!-- script do autocomplete -->
<script src="input-autocomplete.js"></script>
<!-- JSON exemplo -->
<script>
  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan"];
</script>
<!-- Carregar o JSON -->
<script>
  autocomplete(document.getElementById("search-autocomplete"), countries);
</script>
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
<div class="br-input is-focus">
  <label for="focus">Focus</label>
  <input id="focus" type="text" placeholder="Insira um texto">
</div>
```

## `valid`

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente.

O `feedback` deve ser incluído imediatamente após o componente com o ícone `<i class="fas fa-check-circle">`.

Caso exista `help` ele deverá ficar após o `feedback`.

Exemplo de uso:

```html
<div class="br-input is-valid">
  <label for="valido">Válido</label>
  <input id="valido" type="text" placeholder="Insira um texto">
</div>
<div class="feedback">
  <i class="fas fa-check-circle"></i>
  <span class="message">Texto válido</span>
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
```

## `invalid`

Mesma regra do `valid`, porém o ícone do `feedback` é o `<i class="fas fa-times-circle">`.

Exemplo de uso:

```html
<div class="br-input is-invalid">
  <label for="invalido">Inválido</label>
  <input id="invalido" type="text" placeholder="Insira um texto">
</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Texto inválido</span>
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
</div>
```

## disabled

Deve ser aplicado como propriedade no `<input>`.

Exemplo de uso:

```html
<div class="br-input">
  <label for="desabilitado">Desabilitado</label>
  <input class="br-input" id="desabilitado" type="text" placeholder="Insira um texto" disabled>
</div>
```

# Regras especiais

Nenhuma regra especial.
