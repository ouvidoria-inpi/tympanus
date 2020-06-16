## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="col-sm-4">
    <div class="br-textarea">
        <label for="textarea">Digite sua mensagem aqui</label>
        <textarea
            id="textarea"
            placeholder="Exemplo de textarea simples"
            rows="5"
            cols="5"
        ></textarea>
    </div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   `br-textarea` : container do componente
-   `<label>` : tag html de rótulo
-   `<textarea>` : caixa de entrada de dados
-   `feedback` : mensagem de feedback
-   `help` : texto de ajuda para i `<input>` (opcional)

## feedback

Em situações de erro ou retorno positivo, use o feedback. Ele deve ser inserido após a tag do `br-textarea` e antes do `help`

Para **mensagens de erro** adicione `invalid` ao container e a classe ``color-danger`ao`feedback`. Use o ícone`<i class="fas fa-times-circle"></i>`dentro do`feedback`.

Exemple de uso:

```html
<div class="br-textarea" invalid>
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea inválido" rows="5" cols="5"></textarea>
</div>
<div class="feedback color-danger">
    <i class="fas fa-times-circle"></i>
    <span>Campo inválido</span>
</div>
```

Para **mensagem positiva**, adicione `valid` ao container e a classe `color-success` ao `feedback`. Use o ícone `<i class="fas fa-check-circle"></i>` dentro do `feedback`

Exemplo de uso:

```html
<div class="br-textarea" valid>
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea válido" rows="5" cols="5"></textarea>
</div>
<div class="feedback color-success">
    <i class="fas fa-check-circle"></i>
    <span>Campo correto</span>
</div>
```

## help

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida após a tag `textarea`.

Exemplo de uso:

```html
<div class="br-textarea">
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea simples" rows="5" cols="5"></textarea>
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
```

Caso exista `feedback`, este deverá ser inserido antes do `help`

Exemplo de uso:

```html
<div class="br-textarea" valid>
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea válido" rows="5" cols="5"></textarea>
</div>
<div class="feedback color-success">
    <i class="fas fa-check-circle"></i>
    <span>Campo correto</span>
</div>
<p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
```

## Disabled

Para desabilitar o `br-textarea`, basta colocar o atributo disabled na tab `textarea`. Use o ícone `<i class="fas fa-exclamation-triangle">` dentro do `feedback`

O campo `help` não aparece em campos desabilitados

Exemplo de uso:

```html
<div class="br-textarea">
    <label for="textarea-id8">Digite sua mensagem aqui</label>
    <textarea
        id="textarea-id8"
        placeholder="Exemplo de textarea desabilitado"
        rows="5"
        cols="5"
        disabled
    ></textarea>
</div>
<div class="feedback">
    <i class="fas fa-exclamation-triangle"></i>
    <span>Campo Desabilitado</span>
</div>
```

# Regras especiais

Nenhuma regra especial.
