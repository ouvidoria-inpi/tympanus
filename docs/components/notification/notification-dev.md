## Dependências

O Notification é uma varição do Tooltip, sendo necessário importar os scripts e estilos de ambos os componentes.

## Código básico

```html
<div class="br-notification">
    <div class="notification-header">...</div>
    <div class="notification-body">...</div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

-   `br-notification` : container do componente;
-   `notification-header` : container do conteúdo superior;
-   `notification-body` : container do conteúdo principal;
-   `notification-footer` : container para botões adicionais (opcional);

## Header

O conteúdo padrão do `notification-header` contém os seguintes elementos:

-   `user-name` : classe para formatar o nome do usuário;
-   `user-email` : classe para formatar o email do usuário;

### Exemplo:

```html
<div class="notification-header">
    <div class="user-name">Fulano da Silva</div>
    <div class="user-email">fulano.silva@email.com</div>
</div>
```

## Body

O conteúdo padrão do `notification-body` contém os seguintes elementos:

-   `br-tabs` : componente de abas ( [tabs](/ds/components/tabs) );
-   `br-list` : componente de lista ( [list](/ds/components/list) ) ;

Para maiores detalhes deve-se acessar a documentação dos componentes.

### Extrutura básica do Body:

```html
<div class="notification-body">
    <div class="br-tabs">
        <nav class="tab-nav">
            <ul>
                <li class="tab-item is-active">
                    <button type="button" data-panel="panel-1">
                        <span class="name"
                            >Configurações
                            <i class="fas fa-cog"></i>
                        </span>
                    </button>
                </li>
                <li class="tab-item">
                    <button type="button" data-panel="panel-2">
                        <span class="name"
                            >Notificações
                            <i class="fas fa-bell"></i>
                        </span>
                    </button>
                </li>
                <li class="tab-item">
                    <button type="button" data-panel="panel-3">
                        <span class="name"
                            >Mensagens
                            <i class="fas fa-envelope"></i>
                        </span>
                    </button>
                </li>
            </ul>
        </nav>
        <div class="tab-content">
            <div class="tab-panel is-active" id="panel-1">
                ...
            </div>
            <div class="tab-panel" id="panel-2">
                <div class="br-list">...</div>
            </div>
            <div class="tab-panel" id="panel-3">
                <div class="br-list">...</div>
            </div>
        </div>
    </div>
</div>
```

### Listas de Notificações e Mensagens

O conteúdo padrão do `br-list` para notificações e mensagens pode conter os seguintes elementos:

-   `item` : container do item da lista;
-   `br-badge` : componente badge ( [badge](/ds/components/badge) );
-   `header` : container do cabeçalho da lista;
-   `actions` : container dos botões de ação do header;
-   `br-button`: botões de ação ( [button](/ds/components/button) ) devem ter os atributos - `circle` e `small`;
-   `title` : classe para formatar o título;
-   `subtitle` : classe para formatar o sub-título;
-   `date` : classe para formatar o a data;
-   `content` : container para agrupar os conteúdos;
-   `text` : classe para formatar o texto;

O submenu contextual serve para definir ações complementares, possui a seguinte estrutura:

-   `contextual-btn` : container para o ícone que ativa o menu contextual;
-   `contextual-menu` : container para o menu contextual;
-   `action` : classe para os itens do menu contextual;

#### Exemplo de Lista de Notificações:

```html
<div class="br-list">
    <a class="item divider" link="">
        <div class="br-badge" success><div class="icon"></div></div>
        <div class="title">Título Notificação</div>
        <div class="subtitle">Subtítulo Notificação</div>
        <div class="date">08/04/2020</div>
        <div class="content">
            <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus massa
                nisi, id efficitur tortor tincidunt rutrum.
            </div>
        </div>
        <!-- Submenu Contextual -->
        <button class="br-button contextual-btn" type="button" small circle>
            <i class="fa-lg fas fa-ellipsis-v"></i>
        </button>
        <div class="contextual-menu">
            <div class="action">Ocultar esta notificação</div>
            <div class="action">Ocultar todas as notificações</div>
        </div>
    </a>
</div>
```

#### Exemplo de Lista de Mensagens:

```html
<div class="br-list">
    <div class="header">
        <div class="title">Lista de Mensagens</div>
        <div class="actions">
            <button class="br-button" type="button" tertiary circle small>
                <i class="fas fa-sort-alpha-up"></i></button
            ><span class="mx-3">|</span>
            <button class="br-button" type="button" tertiary circle small>
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
    <a class="item divider" link="">
        <div class="icon active"><i class="fa-lg fas fa-envelope-open"></i></div>
        <div class="title">Título Mensagem</div>
        <div class="content">
            <div class="subtitle">Subtítulo Mensagens</div>
            <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus massa
                nisi, id efficitur tortor tincidunt rutrum.
            </div>
        </div>
        <div class="date">08/04/2020</div>
        <button class="br-button contextual-btn" type="button" small circle>
            <i class="fa-lg fas fa-ellipsis-v"></i>
        </button>
        <div class="contextual-menu">
            <div class="action">Ocultar esta notificação</div>
            <div class="action">Ocultar todas as notificações</div>
        </div>
    </a>
</div>
```

## Footer:

O `notification-footer` serve para posicionar botões complementares, pode ser utilizado da seguinte forma:

```html
<div class="notification-footer">
    <button class="br-button" type="button" secondary small>Cancelar</button>
    <button class="br-button" type="button" primary small>Retornar</button>
</div>
```

# Estados

O componente possibilita o layout compacto das abas, mostrando apenas os ícones, definido através do atributo (`mini`) na tag do componente.
Cabe ressaltar que, para definir os ícones das abas, deve ser inserida a tag `<i>` com a classe `fas` da biblioteca FontAwesome, dentro do nome da aba conforme exemplo a seguir:

### Exemplo:

```html
<div class="br-notification" mini>
    <div class="notification-header">...</div>
    <div class="notification-body">
        <div class="br-tabs">
            <nav class="tab-nav">
                <ul>
                    <li class="tab-item is-active">
                        <button type="button" data-panel="panel-1">
                            <span class="name"
                                >Configurações
                                <i class="fas fa-cog"></i>
                            </span>
                        </button>
                    </li>
                    <li class="tab-item">
                        <button type="button" data-panel="panel-2">
                            <span class="name"
                                >Notificações
                                <i class="fas fa-bell"></i>
                            </span>
                        </button>
                    </li>
                    <li class="tab-item">
                        <button type="button" data-panel="panel-3">
                            <span class="name"
                                >Mensagens
                                <i class="fas fa-envelope"></i>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        ...
    </div>
</div>
```

# Regras especiais

## Layout Compacto

Em dispositivos móveis o componente apresenta um layout simplificado ocultando o `Header` e mostrando apenas ícones nas abas de navegação.

## Posicionamento

As notificações ficam posicionadas abaixo do elemento vinculado.

## Declaração

A notificação fica vinculada ao elemento (tag) declarado na linha/bloco anterior (parente, ou sibling, da árvore html) do código html. Assim, no exemplo abaixo, aparecerá sobre o texto da tag `<span>` :

```html
<div>
    <span class="h3">Elemento para visualizar a notificação</span>
    <div class="br-notification">...</div>
    <div></div>
</div>
```
