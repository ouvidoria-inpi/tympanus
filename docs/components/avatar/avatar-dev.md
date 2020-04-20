## Dependências

Nenhuma dependência.

## Código básico

```html
<!-- Versão sem interação -->
<div class="br-avatar">
    <div class="image"></div>
</div>

<!-- Versão com opção de troca de imagem -->
<div class="br-avatar">
    <button class="change" type="button">
        <span class="image"></span>
    </button>
</div>
```

## Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   **br-avatar**: container do componente
-   **image**: imagem do avatar
-   **change**: botão de mudar a imagem do avatar (opcional)

### Elemento image

O Avatar DEVE ter uma imagem. Caso o usuário não tenha uma foto, use o ícone de avatar do FontAwesome.

Avatar sem foto:

```html
<div class="br-avatar">
    <div class="image">
        <i class="fas fa-user"></i>
    </div>
</div>
```

Avatar com foto:

```html
<div class="br-avatar">
    <div class="image">
        <img src="https://picsum.photos/id/823/400" alt="Nome do usuário" />
    </div>
</div>
```

### Elemento change

Use este elemento quando o usuário precisar modificar sua foto de avatar.

> Atenção! O **elemento image** deve ficar DENTRO do **botão change**.

Exemplo de uso:

```html
<div class="br-avatar">
    <button class="change" type="button">
        <span class="image">
            <i class="fas fa-user"></i>
        </span>
        <span class="icon color-primary-default">
            <i class="fas fa-camera"></i>
        </span>
    </button>
</div>
```

## Tamanhos

O tamanho padrão do avatar é o **pequeno**. Os tamanhos podem ser aplicados de várias formas. Use a que mais se adequar à sua tecnologia.

### Médio

```html
<!-- Usando prefixo -->
<div class="br-avatar is-medium">
    <div class="image"></div>
</div>

<!-- Sem prefixo -->
<div class="br-avatar medium">
    <div class="image"></div>
</div>

<!-- Usando attributo -->
<div class="br-avatar" medium>
    <div class="image"></div>
</div>
```

### Grande

```html
<!-- Usando prefixo -->
<div class="br-avatar is-large">
    <div class="image"></div>
</div>

<!-- Sem prefixo -->
<div class="br-avatar large">
    <div class="image"></div>
</div>

<!-- Usando attributo -->
<div class="br-avatar" large>
    <div class="image"></div>
</div>
```

## Regras especiais e dicas

-   A tag `button` necessita do atributo `type`
-   Não use `div` dentro de botões, use `span`
