## Dependências

* script `inpu.js`

## Código básico

``` html
<div class="br-input">
    <label for="input">Label</label>
    <input id="input" type="text" placeholder="Texto de exemplo" />
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

* `br-input` : container do componente
* `<label>` : rótulo do input
* `<input>` : caixa de entrada de dados
* `icon` : ícone para o `<input>` (opcional)
* `feedback` : mensagem de feedback
* `help` : texto de ajuda para o `<input>` (opcional)

## `icon`

O input PODE ter um ícone, portanto este elemento é opcional.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">` .

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

``` html
<div class="br-input">
    <label for="password">Senha</label>
    <input id="password" type="password" placeholder="Sua senha de 8 a 11 digitos">
    <button class="icon" type="button"><span class="sr-only">Mostrar senha</span><i class="fas fa-eye"></i></button>
</div>
```

## `feedback` 

Em situações de erro ou retorno positivo use o `feedback` . Ele deve ser inserido dentro do `br-input`, após a tag `button`, se houver, e antes do `help` .

Para **mensagem de erro**, adicione o atributo `invalid` ao container do componente. Use o ícone `<i class="fas fa-times-circle">` dentro do feedback.

O feedback também deve possuir o atributo `invalid`.

Exemplo de uso:

``` html
<div class="br-input" invalid>
    <label for="input">Senha</label>
    <input id="input" type="text" placeholder="Texto de exemplo">
    <div class="feedback" invalid><i class="fas fa-times-circle"></i>
        <span>Senha incorreta</span>
    </div>
</div>
```

Para **mensagem positiva**, adicione o atributo `valid` ao container do componente. Use o ícone `<i class="fas fa-check-circle">` dentro do feedback.

O feedback também deve possuir o atributo `valid`.

Exemplo de uso:

``` html
<div class="br-input" valid>
    <label for="password">Senha</label>
    <input id="password" type="password" placeholder="Sua senha de 8 a 11 digitos">
    <button class="icon" type="button"><span class="sr-only">Mostrar senha</span><i class="fas fa-eye"></i></button>
    <div class="feedback" valid><i class="fas fa-check-circle"></i>
        <span>Campo correto</span>
    </div>
</div>
```

## `help` 

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida dentro do `br-input` .

Exemplo de uso:

``` html
<div class="br-input">
    <label for="password">Senha</label>
    <input id="password" type="password" placeholder="Sua senha de 8 a 11 digitos">
    <button class="icon" type="button"><span class="sr-only">Mostrar senha</span><i class="fas fa-eye"></i></button>
    <p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
</div>
```

Caso exista `feedback`, este deverá ser inserido antes de `help` .

Exemplo de uso:

``` html
<div class="br-input" valid>
    <label for="password">Senha</label>
    <input id="password" type="password" placeholder="Sua senha de 8 a 11 digitos">
    <button class="icon" type="button"><span class="sr-only">Mostrar senha</span><i class="fas fa-eye"></i></button>
    <div class="feedback" valid><i class="fas fa-check-circle"></i>
        <span>Campo correto</span>
    </div>
    <p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
</div>
```

## Disabled

Para desabilitar o `br-input` basta colocar o attibuto disabled na tag `input` e o feedback com o atributo `disabled`.  Use o ícone `<i class="fas fa-exclamation-triangle">` dentro do feedback.

O campo `help` não aparece em campos desabilitados

Exemplo de uso:
```html
<div class="br-input">
    <label for="password">Senha</label>
    <input id="password" type="password" placeholder="Sua senha de 8 a 11 digitos" disabled>
    <button class="icon" type="button"><span class="sr-only">Mostrar senha</span><i class="fas fa-eye"></i></button>
    <div class="feedback" disabled><i class="fas fa-exclamation-triangle"></i>
        <span>Campo Desabilitado</span>
    </div>
</div>
```

# Regras especiais

O componente `br-input`, quando usado para filtros, possui uma anatomia diferente. Para habilitar essa caraterística é preciso colocar a classe `filter` na raiz do componente `br-input`

Exemplo de uso:

```html
<div class="br-input filter">
    <label for="filtro">Filtrar por:</label>
    <input id="filtro" type="text" placeholder="Pesquisar em notícias">
</div>
```
