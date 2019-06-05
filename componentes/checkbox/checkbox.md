# Checkbox

Veja no exemplo a seguir como usar o checkbox do DS-Gov.

```html
<div class="br-checkbox">
  <input type="checkbox" id="manter-logado">
  <label for="manter-logado">Manter logado</label>
</div>
```

A natureza de comportamento do checkbox é `inline-block`. Isso significa que ao usar vários checkbox em sequência eles ficarão lado a lado.

Você poderá modificar o comportamento do checkbox usando as classes **Display** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/display/](https://getbootstrap.com/docs/4.3/utilities/display/).

## Estados do checkbox

O checkbox pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- checked
- hover
- invalid
- disabled

Os estados também podem ser aplicados por classe. Exemplo:

```html
<div class="br-checkbox hover">
  <input type="checkbox" id="manter-hover">
  <label for="manter-hover">Manter hover</label>
</div>
```
