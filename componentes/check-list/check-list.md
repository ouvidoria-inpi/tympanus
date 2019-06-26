# Listagem com check

Este componente consiste em uma listagem de itens onde o usuário deverá selecionar um ou mais itens. Ao selecionar o item é mostrado um campo de preenchimento (input) para informar mais detalhes.

O componente pode ser usado com `radio button` ou `checkbox`.

Veja a seguir o template HTML.

## Uso com radio button

```html
<div class="br-check-input">
  <div class="field">
    <div class="icon">
      <i class="far fa-envelope"></i>
    </div>
    <div class="input">
      <label for="radio-email">E-mail</label>
      <input type="text" id="radio-email" placeholder="Ex: fulano@email.com">
    </div>
    <div class="check">
      <input name="preferencia" type="radio" id="radio-email-check">
      <label for="radio-email-check"><span class="sr-only">E-mail</span></label>
    </div>
  </div>
</div>
```

## Uso com checkbox

```html
<div class="br-check-input">
  <div class="field">
    <div class="icon">
      <i class="far fa-envelope"></i>
    </div>
    <div class="input">
      <label for="box-email">E-mail</label>
      <input type="text" id="box-email" placeholder="Ex: fulano@email.com">
    </div>
    <div class="check">
      <input type="checkbox" id="box-email-check">
      <label for="box-email-check"><span class="sr-only">E-mail</span></label>
    </div>
  </div>
</div>
```

# Anatomia do componente

O componente é composto dos seguintes elementos:

- Container principal: `.br-check-input`
- Linha agrupadora: `.field`
- Área do ícone: `.icon`
- Área do input: `.input`
- Área do check: `.check`

## Linha agrupadora

Este elemento é responsável por agrupar os elementos internos - ícone, input e check.

Se a linha está selecionada, a classe `is-active` deve ser aplicada para que o `<input>` seja visualizado e o `<label>` ocultado.

Exemplo:

```html
<div class="br-check-input">
  <div class="field">...</div>
  <div class="field">...</div>
  <div class="field">...</div>
  <div class="field is-active">...</div>
</div>
```

## Área de ícone

Neste elemento devem ser usados os ícones Fontawesome preferencialmente. Consulte as opções de ícones em [https://fontawesome.com/icons?d=gallery](https://fontawesome.com/icons?d=gallery).

## Área do input e área do check

Atendendo às regras de Acessibilidade na Web, todo `<input>` deve ser acompanhado de `<label>`.

Tanto no `.input` quanto no `.check` existem as combinações das tags `<label>` e `<input>`. A diferença é que dentro do `.input` a tag `<label>` fica oculta por CSS, enquanto que em `.check` a tag `<label>` deve ficar oculta usando a classe `.sr-only` aplicada no código.

Caso haja dúvidas reveja novamente os exemplos em **Uso com radio button** e **Uso com checkbox**

# Estados

O componente pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- active
- invalid
- valid
- disabled

Os estados **hover**, **invalid**, **valid** e **disabled** podem ser aplicados por classe. O uso via classe deve ser usado com o prefixo `is-` em cada Linha agrupadora. Exemplo:

```html
<div class="br-check-input">
  <div class="field is-valid">...</div>
  <div class="field is-invalid">...</div>
  <div class="field is-disabled">...</div>
  <div class="field is-active">...</div>
</div>
```

> Atenção! Na ocasião de usar `is-disabled` colocar tanto o input quando o check com a propriedade **disabled**. Exemplo:

```html
<div class="br-check-input">
  <div class="field is-disabled">
    <div class="icon">
      <i class="fas fa-mobile-alt"></i>
    </div>
    <div class="input">
      <label for="box-celular">Celular</label>
      <input type="text" id="box-celular" placeholder="Ex: (xx) xxxxx-xxxx" disabled>
    </div>
    <div class="check">
      <input type="checkbox" id="box-celular-check" disabled>
      <label for="box-celular-check"><span class="sr-only">Celular</span></label>
    </div>
  </div>
</div>
```
