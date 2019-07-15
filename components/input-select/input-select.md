# Input Select

Para uso do Input Select use o componente `br-input-select`.

## Exemplo básico

O elemento ``<select>`` será usado dentro da div ``<div class="br-input-select"></div>``, como exemplo abaixo:

```html
<div class="br-input-select select-small">
  <select>
    <option>Selecione</option>
    <option>Item 1 A</option>
    <option>Item 2 A</option>
    <option>Item 3 A</option>
    <option>Item 4 A</option>
    <option>Item 5 A</option>
  </select>
</div>
```


## Classes e Tamanhos

- Para tamanho pequeno **select-small**;
- Para tamanho médio **select-medium**.;
- Para tamanho grande **select-large**;

## Estados

Para o estado ativo será utilizada a classe **focus** que será atribuida automaticamente ao clique no elemento. Segue exemplo abaixo:
```html
<div class="br-input-select select-medium focus">
  <select>
    <option>Selecione</option>
    <option>Item 1 A</option>
    <option>Item 2 A</option>
    <option>Item 3 A</option>
    <option>Item 4 A</option>
    <option>Item 5 A</option>
  </select>
</div>
```
Para o estado desabilitado será utilizada a classe **select-disable** como exemplo abaixo:
```html
<div class="br-input-select select-medium select-disable">
  <select>
    <option>Selecione</option>
    <option>Item 1 A</option>
    <option>Item 2 A</option>
    <option>Item 3 A</option>
    <option>Item 4 A</option>
    <option>Item 5 A</option>
  </select>
</div>
```
