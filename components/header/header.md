# Cabeçalho

Cabeçalho para sites e sistemas.

## Dependências



## Código básico

```html
<header class="br-header is-site">
  <div class="container">
    <!-- Barra de cabeçalho -->
    <div class="bar">
      <!-- Logo -->
      <div class="logo">...</div>
      <!-- Links rápidos -->
      <ul class="quicklinks">...</ul>
      <!-- Idioma -->
      <div class="language menu">...</div>
      <!-- Login para sites -->
      <a href="" class="login">...</a>
      <!-- Altocontraste -->
      <button type="button" class="contrast" accesskey="6">...</button>
      <!-- Quebra de linha em desktop -->
      <div class="break"></div>
      <!-- Busca geral -->
      <div class="search">...</div>
      <!-- Barra do usuário para sistemas -->
      <div class="user-bar">...</div>
      <!-- Menu sanduiche -->
      <button class="menu-hamburger" type="button">...</button>
    </div>
  </div>
</header>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

- `br-header`: container do componente
- `bar`: agrupador dos elementos internos
- `logo`: agrupador dos elementos internos
  - `image`: marca do governo (**somente em sites**)
  - `name`: nome do órgão ou sistema
  - `description`: _assinatura do órgão ou descrição do sistema (opcional)_
- `quicklinks`: _links rápidos (opcional)_
- `language`: seletor de idioma (**somente em sites**)
- `login`: botão de login (**somente em sites**)
- `contrast`: habilitar alto contraste
- `search`: caixa de busca
- `user-bar`: barra de usuário autenticado (**sistemas**)
- `menu-hamburger`: agrupador dos elementos internos

Alguns dos elementos ficam escondidos dependendo do dispositivo do usuário, por exemplo, em smartphones o Cabeçalho mostra somente **menu-hamburger**, **logo** e **search**, enquanto que em desktop o Cabeçalho é mostrado completo.

### `br-header`

O Cabeçalho deve ser configurado para **site** ou **sistema**.

Exemplo de uso:

```html
<!-- versão de site -->
<div class="br-header is-site">
  <div class="container">...</div>
</div>

<!-- versão de site -->
<div class="br-header is-system">
  <div class="container-fluid">...</div>
</div>
```

Note que na versão para sistemas o cabeçalho usa a classe `container-fluid` para aproveitar toda a largura da tela.

### `bar`

Este elemento atual como agrupador dos elementos do cabeçalho. Dependendo da resolução do usuário ele assume altura diferenciada.

### `logo`

O Logo possui os seguintes sub-elementos:

- `image`: marca do governo (**somente em sites**)
- `name`: nome do órgão ou sistema
- `description`: _assinatura do órgão ou descrição do sistema (opcional)_

**Versão para sites**

Nos sites o uso da marca de governo é obrigatória. Ele deve ser incluída dentro de `image`.

`name` é o nome do site, por exemplo "Secretaria Especial de Desestatização e Desinvestimento".

Dentro de `description` deve ser informada a vinculação do site. Se em `name` foi informado "Secretaria Especial de Desestatização e Desinvestimento" então em `description` deve-se colocar "Ministério da Economia". Este elemento é opcional.

Exemplo de uso:

```html
<div class="logo">
  <a class="image" href="">
    <img src="../../assets/images/govbr.svg" alt="Governo Federal">
  </a>
  <span class="name">Secretaria da Receita do Brasil - RFB</span>
  <span class="description">Ministério da Economia</span>
</div>
```

**Versão para sistemas**

Informe o nome do sistema em `name`.

`description` é opcional.

Exemplo de uso:

```html
<div class="logo">
  <a href="" class="name">Nome do Órgão</a>
  <span class="description">Assinatura do Órgão</span>
</div>
```

### `quicklinks`

Não coloque muitos links nesta área, pois não foi planejada para isso.

```html
<ul class="quicklinks">
  <li><a href="">Acesso à informação</a></li>
  <li><a href="">Participe</a></li>
  <li><a href="">Acessibilidade</a></li>
</ul>
```

### `language`

Este elemento deve aparecer somente em sites.

```html
<div class="language menu">
  <button class="trigger" type="button">
    <span class="name">Português</span>
    <span class="arrow"><i class="fas fa-chevron-down"></i></span>
  </button>
  <div class="items">
    <div class="title">Idioma/Language</div>
    <button class="item is-active" type="button">
      <span class="name">Português</span>
    </button>
    <button class="item" type="button">
      <span class="name">English</span>
    </button>
    <button class="item" type="button">
      <span class="name">Español</span>
    </button>
  </div>
</div>
```

Para ativar a listagem de idiomas inclua `is-active` no elemento.

Exemplo de uso:

```html
<div class="language menu is-active">
  ...
</div>
```

O idioma ativo também deve possuir `is-active`.

Exemplo de uso:

```html
<div class="language menu">
  ...
  <div class="items">
    ...
    <button class="item is-active" type="button">
      <span class="name">Português</span>
    </button>
    ...
  </div>
</div>
```

### `login`

Este elemento deve aparecer somente em sites.

```html
<a href="" class="login">
  <span>Acesso Gov.br</span>
  <span class="icon"><i class="fas fa-user fa-lg"></i></span>
</a>
```

### `contrast`

Ativa a versão alto contraste.

```html
<button type="button" class="contrast" accesskey="6">
  <span class="icon"><i class="fas fa-adjust fa-lg"></i></span>
  <span class="sr-only">Alto contraste</span>
</button>
```

Para manter o texto visível remova a classe `sr-only`.

### `search`

Caixa de busca geral para sites e sistema.

```html
<div class="search">
  <div class="field">
    <label for="search-system" class="sr-only">Buscar</label>
    <input id="search-system" type="search" placeholder="O que você procura?">
    <button class="" type="button">
      <i class="fas fa-search fa-lg"></i>
      <span class="sr-only">buscar</span>
    </button>
  </div>
  <button class="close" type="button">
    <i class="fas fa-times fa-lg"></i>
    <span class="sr-only">fechar a busca</span>
  </button>
</div>
```

Para ativar a busca inclua `is-active` no elemento.

Exemplo de uso:

```html
<div class="search is-active">
  ...
</div>
```

**Smartphones e Tablets**

Nestes dispositivos a busca é representada pelo ícone de lupa. Ao ativar o botão é mostrada a caixa de texto e um botão de fechar a busca.

**Desktop e TV**

A busca é mostrada de forma completa. Quando o usuário começa a digitar o texto a busca ocupa o restante da área de tela indicando que está ativa.

### `user-bar`

Barra de usuário logado no sistema.

A barra de usuário possui os seguintes sub-elementos:

- `configs`: área de configuração do usuário
  - `avatar`: foto ou ícone do usuário
  - `badge`: quantidade de notificações
  - `user`: nome e e-mail do usuario
- `bookmarks`: área de favoritos do usuário. Pode ser configurados até 10
- `logout`: botão de sair do sistema

```html
<div class="user-bar">
  <!-- Configurações do usuário -->
  <div class="configs menu">
    <button class="trigger" type="button">
      <!-- Avatar do usuário -->
      <span class="avatar">
        <img src="../../assets/images/avatar.png" alt="Avatar">
        <!-- <i class="fas fa-user-circle"></i> -->
      </span>
      <!-- Notificações -->
      <span class="badge">5</span>
      <!-- Seta para abrir menu -->
      <span class="arrow">
        <i class="fas fa-chevron-down"></i>
      </span>
    </button>
    <div class="items">
      <!-- Informações do usuário -->
      <div class="title user">
        <div class="name">Márcia Vinícius Tavares de Almeida</div>
        <div class="email">marcia-vinicius.almeida@serpro.gov.br</div>
      </div>
      <!-- Lista de configurações -->
      <span class="title">
        <i class="fas fa-cog"></i>
        Configuração/Perfil
      </span>
      <a href="" class="item">Configuração 01</a>
      <a href="" class="item">Configuração 02</a>
      <a href="" class="item">Configuração 03</a>
    </div>
  </div>
  <!-- Sistemas favoritos do usuário -->
  <div class="bookmarks menu">
    <button class="trigger" type="button">
      <i class="fas fa-th-large"></i>
    </button>
    <div class="items">
      <div class="title">Sistemas</div>
      <div class="list">
          <a href="" class="bookmark">
            <div class="brand"></div>
            <div class="name">Sistema 01</div>
          </a>
          <a href="" class="bookmark">
            <div class="brand"></div>
            <div class="name">Sistema 02</div>
          </a>
          <a href="" class="bookmark">
            <div class="brand"></div>
            <div class="name">Sistema 03</div>
          </a>
      </div>
      <div class="more">
        <a href="">Mais</a>
      </div>
    </div>
  </div>
  <!-- Logout -->
  <button class="logout" type="button">Sair</button>
</div>
```

Para ativar os itens dos menus inclua `is-active` no elemento.

Exemplo de uso:

```html
<div class="user-bar">
  <!-- Configurações do usuário -->
  <div class="configs menu is-active">
    ...
  </div>
  <!-- Sistemas favoritos do usuário -->
  <div class="bookmarks menu is-active">
    ...
  </div>
  ...
</div>
```

### `menu-hamburger`

Este botão ativa o componente de Navegação.

Exemplo de uso:

```html
<button class="menu-hamburger" type="button">
  <i class="fa fa-bars fa-lg"></i>
  <span class="sr-only">Navegação</span>
</button>
```

A navegação é um componente a parte e não está inclusa dentro do Cabeçalho.

No template para sites a Navegação é incluída logo após o Cabeçalho. No template de sistemas a Navegação é carregada no lado esquerdo da tela.
