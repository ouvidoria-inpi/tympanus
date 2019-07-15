# Paginador

Este componente responsável pela paginação. Para manter a semântica do código, recomendamos usar o paginador dentro da tag `<nav>`.

## Exemplo básico

```html
<nav>
  <ul class="br-pagination">
    <li class="is-first is-disabled">
      <a href="">
        <i class="fas fa-angle-double-left"></i>
        <span>Anterior</span>
      </a>
    </li>
    <li class="d-flex d-sm-none">
      <label for="page-select-large"><span class="sr-only">Selecione a página</span></label>
      <select id="page-select-large">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <span class="ml-2">de</span><a href="">5</a>
    </li>
    <li class="is-active"><a href=""><span>1</span></a></li>
    <li><a href=""><span>2</span></a></li>
    <li><a href=""><span>3</span></a></li>
    <li><a href=""><span>4</span></a></li>
    <li><a href=""><span>5</span></a></li>
    <li class="is-last">
      <a href="">
        <span>Próxima</span>
        <i class="fas fa-angle-double-right"></i>
      </a>
    </li>
  </ul>
</nav>
```

## Exemplo reduzido

```html
<nav>
  <ul class="br-pagination">
    <li class="is-first">...</li>
    <li class="d-flex d-sm-none">...</li>
    <li class="is-active"><a href=""><span>1</span></a></li>
    <li><a href=""><span>2</span></a></li>
    <li><span>...</span></li>
    <li><a href=""><span>10</span></a></li>
    <li class="is-last">...</li>
  </ul>
</nav>
```

## Tamanhos

Existem 2 tamanhos disponíveis: normal e grande.

O tamanho grande é aplicado com a classe `is-large`. Exemplo:

```html
<ul class="br-pagination is-large">
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>
```

> **Atenção**! O tamanho grande é ignorado na resolução de celular.

## Alinhamento

A exibição padrão do componente é centralizada.

Você poderá modificar o comportamento padrão usando as classes de **Justify content** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content](https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content). Veja no exemplo a seguir:

```html
<nav>
  <ul class="br-pagination justify-content-start">...</ul>
</nav>
```

## Regras especiais

A seguir algumas configurações especiais aplicadas no exemplo básico.

### Desativar elemento

Você pode desativar elementos da paginação usando a classe `is-disabled`.

### Página atual

A página atual do paginador deve conter a classe `is-active`.

### Primeira página e última página

Estes elementos possuem as respectivas classes `is-first` e `is-last`. Use a classe `is-disabled` quando houver necessidade.

## Paginador no celular

Devido à area limitada dos celulares o paginador mostrará o selector da página, o total de páginas e as opções de navegação **Anterior** e **Próximo**.
