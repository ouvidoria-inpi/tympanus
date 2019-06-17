# Caixa de texto (input)

O input do DS-Gov é compatível com vários tipos de input do HTML 5. Segue a lista:

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

Alguns dos tipos listado acima possui um comportamento diferenciado de acordo com o dispositivo do usuário.

Você poderá usar o input de forma isolada ou dentro da classe `field` do `br-form`. Os exemplos a seguir mostram as 2 formas de uso do input.

## Uso do input de forma isolada

```html
<input class="br-input" type="text" placeholder="Insira um texto">
```

## Uso do input dentro de um field

```html
<div class="br-form">
  <div class="field">
    <label for="">label</label>
    <input type="text" placeholder="Insira um texto">
  </div>
</div>
```

Repare que ao usar o `br-form` e `field` a classe `br-input` não é necessária, pois o form do DS-Gov já prepara seus componentes internos configurados para o formato DS-Gov.

## Estados

O `br-input` pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- focus
- valid
- invalid
- disabled

Os estados também podem ser aplicados por classe. O uso via classe deve ser usado com o prefixo `is-`. Exemplo:

```html
<input class="br-input is-valid" type="text" placeholder="Insira um texto">
```

> **Atenção**! O estado `disabled` é aplicado somente quando a propriedade está aplicada no input.

## Mensagens de feedback

Nos casos de erros ou retorno positivo do campo é possível usar um template de mensagem logo após o `br-input`. Veja a seguir um exemplo:

```html
<label for="invalido">Label</label>
<input class="br-input is-invalid" id="invalido" type="text" placeholder="Insira um texto">
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Texto inválido</span>
</div>
```

Para os ícones use a família de ícones Fontawesome - [https://fontawesome.com/](https://fontawesome.com/)

Algumas convenções de ícones:

- Retorno negativo: `fas fa-times-circle`
- Retorno positivo: `fas fa-check-circle`
