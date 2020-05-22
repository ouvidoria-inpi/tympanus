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

Em situações de erro ou retorno positivo, use o feedback. Ele deve ser inserido dentro do `br-textarea`, após a tag `textarea` e antes do `help`

Para **mensagens de erro** adicione `invalid` ao container e ao `feedback`. Use o ícone `<i class="fas fa-times-circle"></i>` dentro do `feedback`.

Exemple de uso:

```html
<div class="br-textarea" invalid>
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea inválido" rows="5" cols="5"></textarea>
    <div class="feedback" invalid>
        <i class="fas fa-times-circle"></i>
        <span>Senha incorreta</span>
    </div>
</div>
```

Para **mensagem poditiva**, adicione `valid` ao container e ao `feedback`. Use o ícone `<i class="fas fa-check-circle"></i>` dentro do `feedback`

Exemplo de uso:

```html
<div class="br-textarea" valid>
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea válido" rows="5" cols="5"></textarea>
    <div class="feedback" valid>
        <i class="fas fa-check-circle"></i>
        <span>Campo correto</span>
    </div>
</div>
```

## help

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida dentro do `br-textarea`, após a tag `textarea`.

Exemplo de uso:

```html
<div class="br-textarea">
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea simples" rows="5" cols="5"></textarea>
    <p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
</div>
```

Caso exista `feedback`, este deverá ser inserido antes do `help`

Exemplo de uso:

```html
<div class="br-textarea" valid>
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea id="textarea" placeholder="Exemplo de textarea válido" rows="5" cols="5"></textarea>
    <div class="feedback" valid>
        <i class="fas fa-check-circle"></i>
        <span>Campo correto</span>
    </div>
    <p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
</div>
```

## Disabled

Para desabilitar o `br-textarea`, basta colocar o atributo disabled na tab `textarea` e o feedback com a classe `disabled`. Use o ícone `<i class="fas fa-exclamation-triangle">` dentro do `feedback`

O campo `help` não aparece em campos desabilitados

Exemplo de uso:

```html
<div class="br-textarea">
    <label for="textarea">Digite sua mensagem aqui</label>
    <textarea
        id="textarea"
        placeholder="Exemplo de textarea desabilitado"
        rows="5"
        cols="5"
        disabled
    ></textarea>
    <div class="feedback" disabled>
        <i class="fas fa-exclamation-triangle"></i>
        <span>Campo Desabilitado</span>
    </div>
</div>
```

# Regras especiais

Nenhuma regra especial.
