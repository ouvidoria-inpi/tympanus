# Dependências

Nenhuma dependência.

## Código básico

``` html
<!-- checkbox -->
<div class="br-checkbox">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">Checkbox</label>
</div>
```

## Detalhamento

Componente deve ser usado quando necessitar usar uma lista com várias opções e houver necessidade de escolher mais de uma opção simultaneamente.

Este componente é formado pelos seguintes elementos:

* `br-checkbox` : container do componente

### Alinhamento vertical

A natureza de comportamento do componente é preferencialmente em colunas, ficando os checkbox um abaixo do outro. Evite usar esse componente em linhas, mas, caso seja necessário, use a opção com `inline-block` , que também está contemplada na área de exemplos.

Você poderá modificar o comportamento padrão do `br-checkbox` usando as classes **Display** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/display/](https://getbootstrap.com/docs/4.3/utilities/display/). A aplicação deve ser feita diretamente no elemento. O exemplo a seguir configura os checkboxes um abaixo do outro:

Exemplo de uso:

``` html
<div class="br-checkbox d-block">...</div>
<div class="br-checkbox d-block mt-1">...</div>
```

## Estados

### `hover` 

* É aplicado automaticamente no elemento

### `checked` 

* É aplicado automaticamente no elemento quando possuir o atributo `checked` 

Exemplo de uso:

``` html
<div class="br-checkbox">
    <input ... checked>
    <label ...>
</div>
```

### `disabled` 

* É aplicado automaticamente no elemento quando possuir o atributo `disabled` 

Exemplo de uso:

``` html
<div class="br-checkbox">
    <input ... disabled>
    <label ...>
</div>
```

### `invalid` e `valid` 

* Deve ser aplicado no componente usando o prefixo `is-` 

Exemplo de uso:

``` html
<div class="br-checkbox is-invalid">...</div>
<div class="br-checkbox is-valid">...</div>
```

## Regras especiais

### Espaçamentos

O espaçamento entre vários `br-checkbox` , seja ele horizontal ou vertical, deverá ser feito de forma manual. Recomendamos o uso do utilitário **Spacing** do Bootstrap - [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de espaçamento horizontal entre checkboxes:

``` html
<div class="br-checkbox">...</div>
<div class="br-checkbox ml-6">...</div>
<div class="br-checkbox ml-6">...</div>
```

Exemplo de espaçamento vertical entre radio buttons:

``` html
<div class="br-checkbox d-block">...</div>
<div class="br-checkbox d-block mt-1">...</div>
<div class="br-checkbox d-block mt-1">...</div>
```

O espaçamento horizontal para o componente na orientação vertal deve ser feito usando a grid.

Exemplo de uso:

``` html
<div class="row">
    <div class="col">
        <div class="br-checkbox d-block">...</div>
        <div class="br-checkbox d-block mt-1">...</div>
    </div>
    <div class="col">
        <div class="br-checkbox d-block">...</div>
        <div class="br-checkbox d-block mt-1">...</div>
    </div>
</div>
```

