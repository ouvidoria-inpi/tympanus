## Dependências

Nenhuma dependência.

## Código básico

``` html
<div class="br-radio">
    <input id="h-radio-default" type="radio" name="selecione">
    <label for="h-radio-default">Padrão</label>
</div>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

* `br-radio` : container do componente

A natureza de comportamento do componente é `inline-block` . Isso significa que ao usar vários checkbox ou radio button em sequência eles ficarão lado a lado.

### Alinhamento vertical

Você poderá modificar o comportamento padrão do `br-radio` usando as classes **Display** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/display/](https://getbootstrap.com/docs/4.3/utilities/display/). A aplicação deve ser feita diretamente no elemento. O exemplo a seguir configura os checkboxes um abaixo do outro:

Exemplo de uso:

``` html
<div class="br-radio d-block">...</div>
<div class="br-radio d-block mb-1">...</div>
```

## Estados

### `hover`

* É aplicado automaticamente no elemento

### `checked`

* É aplicado automaticamente no elemento quando possuir o atributo `checked` 

Exemplo de uso:

``` html
<div class="br-radio">
    <input ... checked>
    <label ...>
</div>
```

### `disabled`

* É aplicado automaticamente no elemento quando possuir o atributo `disabled` 

Exemplo de uso:

``` html
<div class="br-radio">
    <input ... disabled>
    <label ...>
</div>
```

### `invalid` e `valid` 

* Deve ser aplicado no componente usando o prefixo `is-` 

Exemplo de uso:

``` html
<div class="br-radio is-invalid">...</div>
<div class="br-radio is-valid">...</div>
```

## Regras especiais

### Espaçamentos

O espaçamento entre vários `br-radio` , seja ele horizontal ou vertical, deverá ser feito de forma manual. Recomendamos o uso do utilitário **Spacing** do Bootstrap - [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de espaçamento horizontal entre checkboxes:

``` html
<div class="br-radio">...</div>
<div class="br-radio ml-sm-7">...</div>
<div class="br-radio ml-sm-7">...</div>
```

Exemplo de espaçamento vertical entre radio buttons:

``` html
<div class="br-radio d-block">...</div>
<div class="br-radio d-block mb-1">...</div>
<div class="br-radio d-block mb-1">...</div>
```

O espaçamento horizontal para o componente na orientação vertical deve ser feito usando a grid.

Exemplo de uso:

``` html
<div class="row">
    <div class="col">
        <div class="br-radio d-block">...</div>
        <div class="br-radio d-block mb-1">...</div>
    </div>
    <div class="col">
        <div class="br-radio d-block">...</div>
        <div class="br-radio d-block mb-1">...</div>
    </div>
</div>
```

