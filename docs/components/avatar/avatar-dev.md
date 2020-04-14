## Dependências

Nenhuma dependência.

## Código básico

``` html
<div class="br-avatar">
    <div class="image"></div>
</div>
```

## Anatomia do componente

Este componente é formado pelos seguintes elementos:

* **br-avatar**: container do componente
* **image**: imagem do avatar
* badge: componente badge (opcional)
* change: botão de mudar a imagem do avatar (opcional)
* menu: botão de lista de opções do avatar (opcional)

### Elemento image

O Avatar DEVE ter uma imagem. Caso o usuário não tenha uma foto, use o ícone de avatar do FontAwesome.

Avatar sem foto:

``` html
<div class="br-avatar">
    <div class="image">
        <i class="fas fa-user"></i>
    </div>
</div>
```

Avatar com foto:

``` html
<div class="br-avatar">
    <div class="image">
        <img src="https://i.picsum.photos/id/823/40/40.jpg" alt="Nome do usuário" />
    </div>
</div>
```

### Elemento Badge

O componente Badge PODE ser usado dentro do Avatar.

Exemplo de uso:

``` html
<div class="br-avatar">
    <div class="image">...</div>
    <span class="br-badge fa-layers-counter fa-layers-top-left">5</span>
</div>
```

### Elemento change

Use este elemento quando o usuário precisar modificar sua foto de avatar.

Exemplo de uso:

``` html
<div class="br-avatar">
    <div class="image">...</div>
    <button class="change" type="button">
        <span class="icon">
            <i class="fas fa-camera"></i>
        </span>
    </button>
</div>
```

### Elemento menu

Use este elemento para carregar o ícone correspondente de menu quando houver necessidade.

Exemplo de uso:

``` html
<div class="br-avatar">
    <div class="image">...</div>
    <button class="menu" type="button">
        <span class="icon">
            <i class="fas fa-angle-down"></i>
        </span>
    </button>
</div>
```

## Estados

Nenhum estado adicional.

## Regras especiais e dicas

* A tag `button` necessita do atributo `type` 
* Não use `div` dentro de botões, use `span` 
* Os ícones usados dentro de `.change` e `.menu` precisam estar encapsulados dentro de `.icon` para manter a correta formatação.

