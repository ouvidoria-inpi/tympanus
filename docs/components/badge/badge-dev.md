## Dependências

Não há dependências externas

## Código básico

```html
<div class="br-badge">
    <div class="icon"></div>
    <div class="content">...</div>
</div>
```

## Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   **br-badge** : container do componente
-   **icon** : o Badge será inserido neste elemento
-   **content** : o conteúdo que ficará ao lado do Badge

Cor e o posicionamento DEVEM ser aplicados no container do componente.

### Cores do Badge

A **cor de estado** (danger | success | warning | info) pode ser aplicada de várias formas.

```html
<!-- Usando prefixo -->
<div class="br-badge is-danger"></div>

<!-- Sem prefixo -->
<div class="br-badge success"></div>

<!-- Usando attributo -->
<div class="br-badge" warning></div>
```

### Posicionamento do Badge

O Badge PODE variar **verticalmente** e **horizontalmente** em relação ao conteúdo.

O posicionamento vertical padrão do Badge é acima do conteúdo. A aplicação da posição de baixo pode ser feita de várias formas.

```html
<!-- Usando prefixo -->
<div class="br-badge is-bottom"></div>

<!-- Sem prefixo -->
<div class="br-badge bottom"></div>

<!-- Usando attributo -->
<div class="br-badge" bottom></div>
```

O posicionamento horizontal do Badge depende do posicionamento do **elemento icon**.

```html
<!-- Badge verde à esquerda e acima do conteúdo -->
<div class="br-badge" success>
    <div class="icon"></div>
    <div class="content">...</div>
</div>

<!-- Badge amarelo à esquerda e abaixo do conteúdo -->
<div class="br-badge" warning bottom>
    <div class="content">...</div>
    <div class="icon"></div>
</div>
```

### Elemento icon

Caso ele esteja vazio será representado pelo círculo de tamanho mínimo conforme documentado no Designer

É possível inserir texto ou ícone do Fontawesome neste elemento.

```html
<!-- Badge sem texto -->
<div class="br-badge" danger bottom>
    <div class="icon"></div>
    <div class="content">...</div>
</div>

<!-- Badge textual -->
<div class="br-badge" danger>
    <div class="icon">5</div>
    <div class="content">...</div>
</div>

<!-- Badge com ícone -->
<div class="br-badge" warning bottom>
    <div class="content">...</div>
    <div class="icon">
        <i class="fas fa-exclamation-triangle"></i>
    </div>
</div>
```

### Elemento content

Neste elemento ficam os textos, ícones ou outros componentes do Design System, tal como o Avatar.

Com relação aos ícones, use o tamanho 2x de acordo com a documentação de Fundamentos de Iconografia.

```html
<!-- Badge amarelo à direita e abaixo do ícone de arquivo -->
<div class="br-badge" bottom warning>
    <div class="content">
        <i class="fas fa-file fa-2x"></i>
    </div>
    <div class="icon">
        <i class="fas fa-exclamation-triangle"></i>
    </div>
</div>

<!-- Badge vermelho à esquerda e acima de avatar -->
<div class="br-badge" danger>
    <div class="icon">5</div>
    <div class="content">
        <div class="br-avatar">
            <div class="image">
                <img src="https://picsum.photos/id/823/400" alt="Avatar" />
            </div>
        </div>
    </div>
</div>
```
