# Checkbox e Radio Button

Veja no exemplo a seguir como usar o checkbox ou radio button do DS-Gov.

```html
<!-- checkbox -->
<div class="br-check">
  <input type="checkbox" id="checkbox">
  <label for="checkbox">Checkbox</label>
</div>
<!-- radio -->
<div class="br-check">
  <input name="radio" type="radio" id="radio">
  <label for="radio">Radio button</label>
</div>
```

A natureza de comportamento do componente é `inline-block`. Isso significa que ao usar vários checkbox ou radio button em sequência eles ficarão lado a lado.

## Alinhamento vertical

Você poderá modificar o comportamento padrão do `br-check` usando as classes **Display** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/display/](https://getbootstrap.com/docs/4.3/utilities/display/). A aplicação deve ser feita diretamente no elemento. O exemplo a seguir configura os checkboxes um abaixo do outro:

```html
<div class="br-check d-block">
  <input type="checkbox" id="opcao-1">
  <label for="opcao-1">Opção 1</label>
</div>
<div class="br-check d-block">
  <input type="checkbox" id="opcao-2">
  <label for="opcao-2">Opção 2</label>
</div>
```

## Espaçamentos

O espaçamento entre vários `br-check`, seja ele horizontal ou vertical, deverá ser feito de forma manual. Recomendamos o uso do utilitário **Spacing** do Bootstrap - [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de espaçamento horizontal entre checkboxes:

```html
<div class="br-check">
  <input type="checkbox" id="opcao-1">
  <label for="opcao-1">Opção 1</label>
</div>
<div class="br-check ml-3">
  <input type="checkbox" id="opcao-2">
  <label for="opcao-2">Opção 2</label>
</div>
<div class="br-check ml-3">
  <input type="checkbox" id="opcao-3">
  <label for="opcao-3">Opção 3</label>
</div>
```

Exemplo de espaçamento vertical entre radio buttons:

```html
<div class="br-check d-block">
  <input name="radio" type="radio" id="opcao-1">
  <label for="opcao-1">Opção 1</label>
</div>
<div class="br-check d-block mt-3">
  <input name="radio" type="radio" id="opcao-2">
  <label for="opcao-2">Opção 2</label>
</div>
<div class="br-check d-block mt-3">
  <input name="radio" type="radio" id="opcao-3">
  <label for="opcao-3">Opção 3</label>
</div>
```

## Estados

O componente pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- checked
- hover
- invalid
- valid
- disabled

Os estados **hover**, **invalid** e **valid** podem ser aplicados por classe. O uso via classe deve ser usado com o prefixo `is-`. Exemplo:

```html
<div class="br-check is-valid">
  <input type="checkbox" id="manter-valid">
  <label for="manter-valid">Validado</label>
</div>
```

Os estados **checked** e **disabled** são aplicados somente quando estas propriedades estão presentes no input. Exemplo:

```html
<div class="br-check">
  <input type="checkbox" id="manter-checado" checked>
  <label for="manter-checado">Ativado</label>
</div>
<div class="br-check">
  <input type="checkbox" id="manter-desativado" disabled>
  <label for="manter-desativado">Desativado</label>
</div>
```
