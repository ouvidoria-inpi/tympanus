## Dependências

-   script **breadcrumb.js**

## Código básico

```html
<ul class="br-breadcrumb">
    <li class="home">
        <a href="">
            <span class="sr-only">Página inicial</span>
            <i class="fas fa-home"></i>
        </a>
    </li>
    <li class="hidden"><i class="fas fa-ellipsis-h"></i></li>
    <li><a href="">Tela anterior</a></li>
    <li class="is-active"><a href="">Tela atual</a></li>
</ul>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   `br-breadcrumb` : container do componente
-   `hidden` : classe necessária para controlar o collapse
-   `ul` : tag raiz do componente
-   `li` : cada item do breadcrumb

# Estados

Nenhum estado adicional.

# Regras especiais

O primeiro item é o `home` .É representado por ícone.

A tela atual deve conter a classe `is-active` .
