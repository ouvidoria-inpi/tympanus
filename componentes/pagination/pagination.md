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
    <li class="is-active"><a href=""><span>1</span></a></li>
    <li><a href=""><span>2</span></a></li>
    <li><a href=""><span>3</span></a></li>
    <li><a href=""><span>4</span></a></li>
    <li><a href=""><span>5</span></a></li>
    <li><a href=""><span>6</span></a></li>
    <li><a href=""><span>7</span></a></li>
    <li><a href=""><span>8</span></a></li>
    <li><a href=""><span>9</span></a></li>
    <li><a href=""><span>10</span></a></li>
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
    <li class="is-first">
      <a href="">
        <i class="fas fa-angle-double-left"></i>
        <span>Anterior</span>
      </a>
    </li>
    <li class="is-active"><a href=""><span>1</span></a></li>
    <li><a href=""><span>2</span></a></li>
    <li><span>...</span></li>
    <li><a href=""><span>10</span></a></li>
    <li class="is-last">
      <a href="">
        <span>Próxima</span>
        <i class="fas fa-angle-double-right"></i>
      </a>
    </li>
</ul>
</nav>
```

## Tamanhos

Existem 2 tamanhos disponíveis: padrão e grande.

O tamanho grande é aplicado com a classe `is-large`. Exemplo:

```html
<ul class="br-pagination is-large">
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>
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

Devido à area limitada de celulares o paginador está limitado a mostrar somente a página atual. A navegação é feita pelas opções de **Anterior** e **Próximo**.

