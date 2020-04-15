## Dependências

* script `accordeon.js` 

## Código básico

``` html
 <div class="br-accordeon">
     <div class="item">
         <button class="header" type="button">
             <span class="icon"><i class="fas fa-angle-down fa-lg"></i></span>
             <span class="title">Título do conteúdo</span>
         </button>
     </div>
     <div class="content">
         conteúdo em si
     </div>
 </div>
```

## Detalhamento

O componente é composto dos seguintes elementos:

* `br-accordeon` : container do componente; 
* `item` : agrupa o item icone(icon) e título(title); 
* `header` : área do cabeçalho; 
* `icon` : ícone do cabeçalho; 
* `title` : título do cabeçalho; 
* `content` : área do conteúdo.

### `br-accordeon` 

O comportamento padrão do componente é deixar somente uma linha aberta por vez.

O script `accordeon.js` permite deixar várias linhas abertas, bastando remover a propriedade `single` do container.

Exemplo de uso:

``` html
<div class="br-accordeon">
    <div class="item">...</div>
</div>
```

### `item` 

Cada linha do componente DEVE ser inserida dentro de um `item` . As linha que estiverem abertas devem conter a classe `is-active` .

Exemplo de uso:

``` html
<div class="br-accordeon">
    <div class="item is-active">...</div>
    <div class="item">...</div>
    <div class="item">...</div>
</div>
```

### `header` , `title` e `icon` 

O `header` DEVE ser aplicado em tags interativas, tais como `<button>` ou `<a>` .

O título da linha DEVE ficar em `title` , o ícone em `icon` .

O ícone PODE ser alinhado tanto à esquerda quanto à direita dependendo da necessidade. Para alinhar o ícone à esquerda coloque-o antes de `title` .

Exemplo de uso:

``` html
<div class="br-accordeon">
    <div class="item">
        <button class="header" ...>
            <span class="icon"><i class="fas fa-plus"></i></span>
            <span class="title">Título do item</span>
        </button>
        ...
    </div>
</div>
```

Para alinhar o ícone à direita coloque-o depois de `title` .

Exemplo de uso:

``` html
<div class="br-accordeon">
    <div class="item">
        <button class="header" ...>
            <span class="title">Título do item</span>
            <span class="icon"><i class="fas fa-plus"></i></span>
        </button>
        ...
    </div>
</div>
```

## Estados

Nenhum estado adicional para este componente.

## Regras especiais

O script `accordeon.js` irá fazer a troca automática dos ícones nas situações de linha aberta ou fechada.

