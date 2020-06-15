# Mensagens de Alerta

Mensagem de alerta do sistema.

## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-message">
    <div class="icon">...</div>
    <div class="content">...</div>
    <div class="close">...</div>
</div>
```

## Detalhamento

O componente é composto dos seguintes elementos:

-   `br-message` : container do componente
-   `icon` : icon ilustrativo
-   `content` : conteúdo da mensagem
-   `close` : botão de fechar

### `icon`

Elemento onde deverá ser informado o ícone ilustrativo da mensagem.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome `<i class="fas">` .

Imagens serão redimensionadas automaticamente dentro do elemento.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<div class="br-message">
    <div class="icon">
        <i class="fas fa-check-circle"></i>
        <span class="sr-only">Sucesso!</span>
    </div>
    <div class="content">...</div>
    <div class="close">...</div>
</div>
```

### `content`

A mensagem do alerta deve ser inserido dentro deste elemento.

Pode ser inserido uma simples mensagem.

Exemplo de uso:

```html
<div class="br-message">
    <div class="icon">...</div>
    <div class="content">
        <strong>Erro!</strong>
        <span>Mensagem de erro.</span>
    </div>
    <div class="close">...</div>
</div>
```

Ou uma mensagem com várias linhas.

Exemplo de uso:

```html
<div class="br-message">
    <div class="icon">...</div>
    <div class="content">
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </div>
    <div class="close">...</div>
</div>
```

### `close`

Local do botão de fechamento do alerta.

Exemplo de uso:

```html
<div class="br-message">
    <div class="icon">...</div>
    <div class="content">...</div>
    <div class="close">
        <button class="br-button is-tertiary" type="button">
            <i class="fas fa-times"></i><span class="sr-only">Fechar</span>
        </button>
    </div>
</div>
```

## Variações

Estão disponíveis 4 tipos de alertas. Cada tipo é aplicado com o prefixo `is-` .

-   Sucesso (sucess)
-   Erro (danger)
-   Atenção (warning)
-   Informação (info)

O tipo deve ser aplicado no container do componente.

Exemplo de uso:

```html
<div class="br-message">
    <div class="icon">
        <i class="fas fa-times-circle"></i>
        <span class="sr-only">Erro!</span>
    </div>
    <div class="content">
        <strong>Erro!</strong>
        <span>Mensagem de erro.</span>
    </div>
    <div class="close">
        <button type="button">
            <i class="fas fa-times"></i>
            <span class="sr-only">Fechar</span>
        </button>
    </div>
</div>
```

---

## Mensagens Contextuais

---

As mensagens servem para dar feedback pontual ao usuário sobre o preenchimento dos campos dentro de um formulário. Elas devem ser claras e devem ajudar o usuário a corrigir os erros.

Estão disponíveis 2 tipos de Mensagens Contextuais:

-   Mensagens de Validação
-   Mensagens Complementares

## Mensagens de Validação

Esta mensagem é composta pelo seguinte elemento:

-   `feedback` : container do componente.

E será seguida por um dos dois tipos abaixo, precedida do prefixo `is-` :

-   Validação Positiva (valid)
-   Validação Negativa (invalid)
-   Desabilitado (disabled)

Exemplo de uso (disabled):

```html
<div>
    <div class="br-input is-disabled">
        <label for="desativado">Desativado</label>
        <input
            class="is-disabled"
            id="desativado"
            type="text"
            placeholder="Insira um texto"
            disabled
        />
    </div>
    <div class="feedback is-disabled">
        <i class="fas fa-exclamation-triangle"></i>
        <span>Campo Desabilitado</span>
    </div>
</div>
```

Exemplo de uso (invalid):

```html
<div>
    <div class="br-input is-invalid">
        <label for="invalid">Inválido</label>
        <input class="is-invalid" id="invalid" type="text" placeholder="Insira um texto" />
    </div>
    <div class="feedback is-invalid">
        <i class="fas fa-times-circle"></i>
        <span>Texto inválido</span>
    </div>
</div>
```

Exemplo de uso (valid):

```html
<div>
    <div class="br-input is-valid">
        <label for="valid">Válido</label>
        <input class="is-valid" id="valid" type="text" placeholder="Insira um texto" />
    </div>
    <div class="feedback is-valid">
        <i class="fas fa-check-circle"></i>
        <span>Texto válido</span>
    </div>
</div>
```

## Mensagens Complementares

Mensagens que aparecem contidas ou próximas a algum componente e que tem o objetivo de dar uma informação que pode ser fundamental ao usuário na realização de uma determinada ação.

O tipo `hint` deve ser aplicado no container do componente.

Este tipo de mensagem não possui o botão de fechamento do alerta `close`.

Exemplo de uso:

```html
<div class="br-message hint">
    <div class="icon">
        <i class="fas fa-info-circle"></i><span class="sr-only">Informação!</span>
    </div>
    <div class="content">
        <p>
            Os arquivos devem ser no formatos PNG, JPG, PDF e ter no máximo 1G.
        </p>
    </div>
</div>
```

## Estados

Nenhum estado adicional para este componente.

## Regras especiais

Nenhuma regra especial.
