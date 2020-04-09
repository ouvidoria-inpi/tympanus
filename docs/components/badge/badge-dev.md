## Dependências

Não há dependências externas

## Código básico

``` html
<span class="br-badge is-top is-left icon"><i class="fas fa-circle is-success"></i></span>
<span class="br-badge is-top is-right icon"><i class="fas fa-circle is-warning"></i></span>
<span class="br-badge is-bottom is-left icon"><i class="fas fa-circle is-info"></i></span>
<span class="br-badge is-bottom is-right icon"><i class="fas fa-circle is-danger"></i></span>

<span class="br-badge is-top is-left simbol "><i class="fas fa-check is-success"></i></span>
<span class="br-badge is-bottom is-left simbol "><i class="fas fa-check is-warning"></i></span>
<span class="br-badge is-bottom is-right simbol"><i class="fas fa-check is-info"></i></span>
<span class="br-badge is-top is-right simbol"><i class="fas fa-check is-danger"></i></span>
<span class="br-badge is-top is-left simbol"><i class="fas fa-check is-success"></i></span>

<span class="br-badge is-bottom is-left simbol"><i class="fas fa-info is-warning"></i></span>
<span class="br-badge is-bottom is-right simbol"><i class="fas fa-euro-sign is-info"></i></span>
<span class="br-badge is-top is-right simbol"><i class="fas fa-times is-danger"></i></span>

<span class="br-badge fa-layers-counter fa-layers-top-left">1</span>
<span class="br-badge fa-layers-counter fa-layers-bottom-left">5</span>
<span class="br-badge fa-layers-counter fa-layers-bottom-right">5</span>
<span class="br-badge fa-layers-counter fa-layers-top-right">999+</span>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

* `br-badge` : container do componente; 
* `icon` : classe para badge simples; 
* `simbol` : classe para badge com simbolos; 
* `fa-layers-counter` : classe para indicar que o bagde contém contador; 

## Estados

Para definir as cores dos bages são usadas as seguintes classes:

* `is-success` 
* `is-warning` 
* `is-info` 
* `is-danger` 

## Posicionamento

* `is-top` 
* `is-bottom` 
* `is-left` 
* `is-right` 

## Posicionamento com contadores

* `fa-layers-top-left` 
* `fa-layers-bottom-left` 
* `fa-layers-bottom-right` 
* `fa-layers-top-right` 

