[version]: # (1.3.0)

## Como usar

```html
<div class="br-menu" id="identificador">
    <div class="menu-trigger">...</div>
    <div class="menu-container">
        <div class="menu-panel">
            <header class="menu-header">
                <div class="menu-close">
                    <button
                        class="br-button circle"
                        type="button"
                        arial-label="Fechar o menu"
                        data-dismiss="menu"
                    >
                        <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="menu-title">...</div>
            </header>
            <nav class="menu-body">
                <div class="menu-folder">
                    <a class="menu-item" href="">...</a>
                    <ul>
                        <li>
                            <a class="menu-item" href="">...</a>
                            <ul>
                                <li>
                                    <a class="menu-item" href="">...</a>
                                </li>
                                ...
                            </ul>
                        </li>
                        ...
                    </ul>
                </div>
            </nav>
            <footer class="menu-footer">
                <div class="menu-logos">...</div>
                <div class="menu-links">...</div>
                <div class="menu-social">...</div>
                <div class="menu-info">...</div>
            </footer>
        </div>
        <div class="menu-scrim" data-dismiss="menu" tabindex="0"></div>
    </div>
</div>
```

### Acionador do Menu Principal

O Menu Principal precisa de um **acionador externo** para abrir. Geralmente esse acionador fica dentro do componente Header.

```html
<button
    class="br-button circle"
    type="button"
    aria-label="Menu principal"
    data-toggle="menu"
    data-target="#identificador-do-menu"
>
    <i class="fas fa-bars" aria-hidden="true"></i>
</button>
```

### Menu Principal deslocando a página

Incluir a classe `.push` ao componente.

```html
<div class="br-menu push" id="identificador">...</div>
```

### Menu Contextual

O acionador do Menu Contextual deve ser incluído no elemento `.menu-trigger`, portanto não é necessário adicionar um id ao componente.

```html
<div class="br-menu contextual">
    <div class="menu-trigger">
        <button class="br-button primary block" type="button" data-toggle="contextual">
            <span class="mr-1">Menu Contextual</span>
            <i class="fas fa-angle-up ml-5" aria-hidden="true"></i>
        </button>
    </div>
    <div class="menu-container">
        <div class="menu-panel shadow-lg-right px-0 col-lg-2">
            <nav class="menu-body">
                <div class="menu-folder">
                    <div class="menu-item"><span class="content">AGRUPAMENTO 1</span></div>
                    <ul>
                        <li><a class="menu-item" href="javascript: void(0)"><span class="content">Item do menu 1</span></a></li>
                    ...
                </div>
            </nav>
        </div>
    </div>
</div>        
```

### Menu item

A lista de itens de menu deve ser organizada usando `<ul>` e `<li>`

1. O item de menu suporta uso de ícones ilustrativos. Coloque-o dentro do elemento `.icon` **Este elemento é opcional!**
2. Os ícones de seta são incluídos automaticamente pelo script do menu
3. Para indicar que o menu item da lista está ativo use a classe `.active`

```html
<div class="menu-item">
    <!-- Ícone opcional -->
    <span class="icon">
        <i class="fas fa-check" aria-hidden="true"></i>
    </span>
    <span class="content">Texto do item de menu</span>
</div>
```

### Uso do Divider

No momento este componente não está compatível com o uso de Divider. Há duas maneiras de usar bordas separadoras:

1. Agrupar itens dentro de um `menu-folder`
2. Incluir manualmente a classe `divider` ao `menu-item` que esteja no primeiro nível de navegação

### Propriedades obrigatórias

| Atributo       | Tipo  | Descrição                             |
| -------------- | ----- | ------------------------------------- |
| br-menu        | class | Container do componente               |
| menu-container | class | Agrupa scrim e painel                 |
| menu-scrim     | class | Aplica o efeito de scrim (fecha menu) |
| menu-panel     | class | Agrupa cabeçalho, corpo e rodapé      |
| menu-header    | class | Agrupa o botão de fechar e título     |
| menu-close     | class | Container para botão de fechar menu   |
| menu-title     | class | Container para título                 |
| menu-body      | class | Agrupa pastas de itens de menu        |
| menu-folder    | class | Pasta com itens de menu               |
| menu-item      | class | Item de menu                          |

### Propriedades Adicionais

| Atributo     | Tipo  | Descrição                                    |
| ------------ | ----- | -------------------------------------------- |
| menu-trigger | class | Container do ativador de Menu Auxiliar       |
| menu-footer  | class | Agrupa logos, links, compartilhamento e info |
| menu-logos   | class | Container para logos de sistemas             |
| menu-links   | class | Container para links externos                |
| menu-social  | class | Container para compartilhamentos externos    |
| menu-info    | class | Container para informação                    |

### Configurações Adicionais

| Propriedade      | Tipo     | Valor padrão | Descrição                                   |
| ---------------- | -------- | ------------ | ------------------------------------------- |
| data-toggle      | atributo | menu         | Abre o Menu Principal                       |
| data-toggle      | atributo | auxiliary    | Abre o Menu Auxiliar                        |
| data-target      | atributo | -            | Informar o identificador do Menu Principal  |
| data-dismiss     | atributo | menu         | Fecha o menu                                |
| data-breakpoints | atributo | -            | Aplica as classes de breakpoint no Menu (*) |

> **Atenção**! O atributo `data-breakpoint` é opcional. Por padrão serão aplicadas as classes de breakpoint `.col-sm-4` e `.col-lg-3`.

Exemplo de uso do atributo `data-breakpoints`:

```html
<div class="br-menu" id="identificador" data-breakpoints="col-sm-4 col-lg-3">...</div>
```

## Dependências

-   [Button](/ds/components/button)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRMenu`, passando os seguintes parâmetros:

-   Nome da classe (br-menu)
-   Objeto referenciando a raiz do componente DOM

```javascript

const menuList = []
for (const brMenu of window.document.querySelectorAll('.br-menu')) {
  menuList.push(new core.BRMenu('br-menu', brMenu))
}

```
