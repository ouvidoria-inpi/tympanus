<!-- # Documentação de Desenvolvedor

-   [Introdução](ds/components/header#introdu%c3%a7%c3%a3o)
    -   [Recomendações para criação da documentação](ds/components/header#recomenda%c3%a7%c3%b5es-para-cria%c3%a7%c3%a3o-da-documenta%c3%a7%c3%a3o)
-   [Como usar](ds/components/header#como-usar)
    -   [HTML](ds/components/header#html)
        -   [Propriedades obrigatórias](ds/components/header#propriedades-obrigat%c3%b3rias)
        -   [Propriedades Adicionais](ds/components/header#propriedades-adicionais)
    -   [Javascript](ds/components/header#javascript)
        -   [Configurações obrigatórias](ds/components/header#configura%c3%a7%c3%b5es-obrigat%c3%b3rias)
        -   [Configurações Adicionais](ds/components/header#configura%c3%a7%c3%b5es-adicionais)
    -   [Estados](ds/components/header#estados)
-   [Próximos passos](ds/components/header#pr%c3%b3ximos-passos)
-   [Dependências](ds/components/header#depend%c3%aancias)
-   [Links relacionados](ds/components/header#links-relacionados)
-   [Atalhos de teclado](ds/components/header#atalhos-de-teclado)

## Introdução

Essa seção não faz parte da documentação, ela é apenas para explicar melhor como esse template funciona.

A primeira coisa que a documentação de desenvolvedor tem que ter é a versão da documentação de design utilizada como base para a construção do componente. Isso porque pode acontecer da documentação de design ser atualizada e o componente implementado e sua documentação continuarem sem alterações.
Ex: doc. design: #X.0.0

Esse é um template para documentação de DESENVOLVEDOR. Cada componente é único e pode exigir pequenas variações desse documento. Cabe a quem escrever a documentação avaliar quais seções são necessárias para os componentes.

Sugestões são bem-vindas e devem ser discutidas com o time antes de serem adotadas.

O título é recuperado do arquivo config.json e a descrição é única para as documentações de DESIGNER e DESENVOLVEDOR. Caso seja necessário atualizar, atualize o arquivo correspondende.
Ex: no componente button o arquivo de descrição é button.md

### Recomendações para criação da documentação

1.  Ao colocar o código-fonte coloque a linguagem correta. Ex ``` javascript
2.  Tente pedir para alguém seguir a documentação e verificar se conseguem usar o componente/template
3.  Seja direto nos textos de explicação

Abaixo estão as seções que uma documentação de desenvolvimento pode conter e entre comentários está uma explicação resumida sobre a seção. -->

<!-- Versão da doc. de DESIGN usada como base para o desenvolvimento -->
<!-- doc. design: #1.0.0 -->

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<div class="br-header">
    <div class="container">
        <div class="logo">
            <img src="https://picsum.photos/200/300" alt="logo">
            <div class="sign">Texto Assinatura</div>
        </div>
        <div class="actions">
            <div class="links">
                <button class="br-button" type="button" circle mini><i class="fas fa-ellipsis-v"></i>
                </button>
                <ul>
                    <li class="title">Acesso Rápido</li>
                    <li><a href="javascript:void(0);">Link de acesso 1</a></li>
                    <li><a href="javascript:void(0);">Link de acesso 2</a></li>
                    <li><a href="javascript:void(0);">Link de acesso 3</a></li>
                    <li><a href="javascript:void(0);">Link de acesso 4</a></li>
                </ul>
            </div>
            <div class="functions">
                <button class="br-button" type="button" circle mini><i class="fas fa-th"></i>
                </button>
                <ul>
                    <li class="title">Funcionalidades do Sistema</li>
                    <li>
                        <button class="br-button" type="button" circle mini> 
                            <i class="fas fa-chart-bar"></i>
                            <span class="text">Funcionalidade 1</span>
                        </button>
                    </li>
                    <li>
                        <button class="br-button" type="button" circle mini> 
                            <i class="fas fa-headset"></i>
                            <span class="text">Funcionalidade 2</span>
                        </button>
                    </li>
                    <li>
                        <button class="br-button" type="button" circle mini>
                            <i class="fas fa-comment"></i>
                            <span class="text">Funcionalidade 3</span>
                        </button>
                    </li>
                    <li>
                        <button class="br-button" type="button" circle mini>
                            <i class="fas fa-adjust"></i>
                            <span class="text">Funcionalidade 4</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="search-btn">
                <button class="br-button" type="button" circle mini><i class="fas fa-search"></i>
                </button>
            </div>
            <div class="login">
                <button class="br-button" type="button" mini><i class="fas fa-user"></i><span class="ml-1">Entrar</span>
                </button>
            </div>
            <div class="avatar">
                <div class="br-badge" danger>
                <div class="icon">5</div>
                <div class="content">
                    <div class="br-avatar">
                    <div class="image"><img src="https://picsum.photos/id/823/400" alt="Avatar"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="menu">
            <button class="br-button" type="button" circle mini>
                <i class="fas fa-bars"></i>
            </button>
            <div class="title">Título do Cabeçalho</div>
            <div class="subtitle">Subtítulo do Cabeçalho</div>
        </div>
        <div class="search">
            <div class="br-input has-icon">
                <label></label>
                <input class="has-icon" type="text" placeholder="O que você procura?">
                <button class="icon" type="button"><span class="icon"><i class="fas fa-search"></i></span></button>
            </div>
            <button class="br-button search-close" type="button" circle mini>
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
</div>
```

#### Propriedades obrigatórias

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->

| Tag    | Atributo     | Valor padrão  | Descrição                                             |
| ------ | ------------ | ------------  | ----------------------------------------------------  |
| div    | class        | br-header     | Container do componente                               |
| div    | class        | container     | Container interno responsável pelo layout             |
| div    | class        | logo          | Container para o logo                                 |
| img    | alt          | logo          | Imagem do logo                                        |
| div    | class        | actions       | Container para os botões de ação, links e login       |
| button | class        | br-button     | classe dos botões (componente button)                 |
| button | circle mini  |               | estilo dos botoes circulares (todos)                  |
| div    | class        | menu          | Container para o botão de menu, título e subtítulo    |
| i      | class        | fa-bars       | icone botão de menu                                   |
| div    | class        | title         | Título do Cabeçalho                                   |

#### Propriedades Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->
| Tag    | Atributo | Valor padrão      | Descrição                                             |
| ------ | -------- | ----------------- | ----------------------------------------------------  |
| div    | class    | sign              | Assinatura do site                                    |
| div    | class    | links             | Container para os links                               |
| div    | class    | functions         | Container para as funcionalidades                     |
| div    | class    | search-btn        | Container para o botao de busca                       |
| i      | class    |fas fa-search      | icone botão de busca                                  |
| i      | class    | fas fa-ellipsis-v | icone lista de links                                  |
| i      | class    |fas fa-th          | icone lista de funcionalidades                        |
| ul li  |          |                   | tags para listas de links e ações                     |
| li     | class    | title             | Primeiro item da lista que aparecerá como titulo      |
| div    | class    | login             | Container para o botao de login                       |
| div    | class    | avatar            | Container para o avatar do usuário logado             |
| div    | class    | br-badge          | Componente badge (buscar documentação para maiores detalhes) |
| div    | class    | subtitle          | Subtítulo do Cabeçalho                                |
| div    | class    | search            | Container para a busca                                |
| div    | class    | br-input has-icon | Componente input da busca (buscar documentação para maiores detalhes) |
| button | class    | br-button search-close | botão de fechar pesquisa ativa                   |
| i      | class    | fas fa-times      | icone de fechar pesquisa ativa                        |
| div    | class    | content           | Container para contéudo após sticky header            |

### Javascript

```javascript
const headerList = []

for (const brHeader of window.document.querySelectorAll('.br-header')) {
  headerList.push(new BRHeader('br-header', brHeader))
}
```

#### Configurações obrigatórias

- Buscar os elementos com a classe "br-header" e inicializar o construtor do componente.

#### Configurações Adicionais

- Recomenda-se que seja criado um template com todos os elementos do componente e os não necessários sejam ocultaods via atributos.
- Para usar o `sticky header` é necessário criar um container para conteúdo posterior ao header com a classe `content`

### Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado                   | Atributo           | Descrição                              |
| ------------------------ | ------------------ | -------------------------------------- |
| Compacto                 | compact            | Versão compacta do header              |
| Sem links                | no-links           | Oculta os links                        |
| Sem logo                 | compact no-logo    | Versão compacta do header sem a logo   |
| Sem Assinatura           | no-sign            | Oculta a Assinatura                    |
| Sem Subtítulo            | no-subtitle        | Oculta o Subtítulo                     |
| Sem Funcionalidades      | no-functions       | Oculta as Funcionalidades Adicionais   |
| Sem Login                | no-login           | Oculta o Login                         |
| Sem Busca                | no-search          | Oculta a Busca                         |

## Próximos passos

<!-- Mostra as features que já foram planejadas para o componente e o status dela para os designers e desenvolvedores -->

-   Não planejado: A necessidade foi identificada, mas ainda não tem data para ser satisfeita.
-   Fazendo: A equipe está trabalhando na necessidade.
-   Feito: Necessidade já é satisfeita.

| Nome                                         | Documentação de Design | Desenvolvimento |
| -------------------------------------------- | ---------------------- | --------------- |
| Responsividade                               | Feito                  | Feito           |
| Comportamento da Busca                       | Feito                  | Feito           |
| Comportamento Logado e Não Logado            | Feito                  | Feito           |
| Comportamento Sticky Header                  | Feito                  | Feito           |

## Dependências

<!-- Caso o componente dependa de algum outro ou de algo externo, listamos aqui colocando links para a documentação da dependência -->

| Internas                        |
| ------------------------------- |
| [Input](/ds/components/input)   |
| [Button](/ds/components/button) |
| [Avatar](/ds/components/avatar) |

<!-- ## Links relacionados -->

<!-- Links para mais informações ou referências que sejam inportantes para o desenvolvedor usar o componente -->

<!-- ## Atalhos de teclado -->

<!-- Caso o uso do componente por atalhos tenha sido implementado -->
