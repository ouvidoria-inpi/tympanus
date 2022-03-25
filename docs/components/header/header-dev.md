[version]: # (1.1.9)

## Como usar

```html
<div class="br-header">
    <div class="container-lg">
        <div class="header-top">
            <div class="header-logo">
                <img src="url-da-logo" alt="logo" />
                <div class="sign">...</div>
            </div>
            <div class="header-actions">
                <div class="header-links dropdown">...</div>
                <div class="header-functions dropdown">...</div>
                <div class="header-search-trigger">
                    <button
                        class="br-button circle"
                        type="button"
                        aria-label="Abrir Busca"
                        data-toggle="search"
                        data-target=".header-search"
                    >
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="header-login">
                    <div class="header-sign-in">...</div>
                    <div class="header-avatar">...</div>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="header-menu">
                <div class="header-menu-trigger">...</div>
                <div class="header-info">
                    <div class="header-title">...</div>
                    <div class="header-subtitle">...</div>
                </div>
            </div>
            <div class="header-search">
                <div class="br-input has-icon">
                    <label for="searchbox">Texto da pesquisa</label>
                    <input
                        class="has-icon"
                        id="searchbox"
                        type="text"
                        placeholder="O que você procura?"
                    />
                    <button class="icon" type="button" aria-label="Pesquisar">
                        <span class="icon">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <button
                    class="br-button circle search-close"
                    type="button"
                    aria-label="Fechar Busca"
                    data-dismiss="search"
                >
                    <i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
</div>
```

### Versão com Largura Fluida

A classe `container-lg` força a **Largura Fixa** no _breakpoint desktop_. Altere essa classe para `container-fluid` para usar a **Largura Fluida**.

### Propriedades obrigatórias

| Atributo      | Tipo  | Descrição                                                 |
| ------------- | ----- | --------------------------------------------------------- |
| br-header     | class | Container do componente                                   |
| header-bottom | class | Agrupador de menu, título, subtítulo e busca              |
| header-menu   | class | Container acionador do menu principal, título e subtítulo |
| header-title  | class | Título                                                    |

### Propriedades adicionais

| Atributo              | Tipo  | Descrição                                                         |
| --------------------- | ----- | ----------------------------------------------------------------- |
| header-top            | class | Agrupador de logo, links, funcionalidades e login                 |
| header-logo           | class | Container do logo                                                 |
| header-sign           | class | Assinatura                                                        |
| header-actions        | class | Container para links, funcionalidades, acionador de busca e login |
| header-links          | class | Lista de links                                                    |
| header-functions      | class | Lista de funcionalidades                                          |
| header-search-trigger | class | Acionador de busca (breakpoints menores e modo sticky)            |
| header-login          | class | Container para botão sign-in e avatar                             |
| header-sign-in        | class | Container para botão **Sign-in**                                  |
| header-avatar         | class | Container para **Avatar**                                         |
| header-menu-trigger   | class | Container para **Menu**                                           |
| header-subtitle       | class | Subtítulo                                                         |
| header-search         | class | Container para busca                                              |

**Sign-in**, **Avatar** e **Menu** possuem documentação de uso a parte.

### Configurações  Adicionais

| Atributo    | Tipo     | Descrição                       |
| ----------- | -------- | ------------------------------- |
| large       | class    | Aplica densidade baixa          |
| medium      | class    | Aplica densidade média (padrão) |
| small       | class    | Aplica densidade alta           |
| compact     | class    | Aplica modo compacto            |
| data-sticky | atributo | Aplica modo sticky              |

## Dependências

- [Avatar](/components/avatar)
- [Button](/components/button)
- [Input](/components/input)
- [Sign-in](/components/signin)

## Instanciação do Componente

### HTML

Incluir o arquivo `dsgov.min.js` no html.

```html
<script src="<node_modules>/@govbr/dsgov/dist/dsgov.min.js"></script>
```

> O arquivo dsgov.min.js expõe um objeto chamado `dsgov` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRHeader`, passando os seguintes parâmetros:

- Nome da classe (br-header)
- Objeto referenciando a raiz do componente DOM

```javascript
const headerList = []
for (const brHeader of window.document.querySelectorAll('.br-header')) {
  headerList.push(new dsgov.BRHeader('br-header', brHeader))
}
```
