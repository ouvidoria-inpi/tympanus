[version]: # '1.0.0'

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<div class="br-footer negative br-divider fundo-neutro">
    <div class="container-logo text-center">
        <div class="logo"></div>
    </div>
    <div class="br-list container-list" collapsible horizontal unique>
        <div class="col-2">
            <a class="item" href="javascript:void(0);" link>
                <div class="content">Categoria 1</div>
                <div class="support"><i class="fas fa-angle-up"></i></div>
            </a>
            <div class="br-list">
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">1° - Item da Lista 1</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">2° - Item da Lista 1</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">3° - Item da Lista 1</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">4° - Item da Lista 1</div>
                </a>
            </div>
        </div>
        <div class="col-2">
            <a class="item" href="javascript:void(0);" link>
                <div class="content">Categoria 2 - Exemplo</div>
                <div class="support"><i class="fas fa-angle-up"></i></div>
            </a>
            <div class="br-list">
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">1° - Item da Lista 2</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">2° - Item da Lista 2</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">3° - Item da Lista 2</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">4° - Item da Lista 2</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">5° - Item da Lista 2</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">6° - Item da Lista 2</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">7° - Item da Lista 2</div>
                </a>
            </div>
        </div>
        <div class="col-2">
            <a class="item" href="javascript:void(0);" link>
                <div class="content">Categoria 3</div>
                <div class="support"><i class="fas fa-angle-up"></i></div>
            </a>
            <div class="br-list">
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">1° - Item da Lista 3</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">2° - Item da Lista 3</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">3° - Item da Lista 3</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">4° - Item da Lista 3</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">5° - Item da Lista 3</div>
                </a>
            </div>
        </div>
        <div class="col-2">
            <a class="item" href="javascript:void(0);" link>
                <div class="content">Categoria 4 - Exemplo</div>
                <div class="support"><i class="fas fa-angle-up"></i></div>
            </a>
            <div class="br-list">
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">1° - Item da Lista 4</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">2° - Item da Lista 4</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">3° - Item da Lista 4</div>
                </a>
                <a class="item" href="javascript:void(0);" link>
                    <div class="content">4° - Item da Lista 4</div>
                </a>
            </div>
        </div>
    </div>
    <div class="container-social">
        <div class="social-network">
            <p class="title-social-network">Redes Sociais</p>
            <button class="br-button tertiary is-circle" type="button">
                <img
                    alt="botão facebook"
                    src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/button-negative.png"
                />
            </button>
            <button class="br-button tertiary is-circle" type="button">
                <img
                    alt="botão twitter"
                    src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/button-negative.png"
                />
            </button>
            <button class="br-button tertiary is-circle" type="button">
                <img
                    alt="botão google"
                    src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/button-negative.png"
                />
            </button>
            <button class="br-button tertiary is-circle" type="button">
                <img
                    alt="botão govbr"
                    src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/button-negative.png"
                />
            </button>
        </div>
        <div class="assigns">
            <div class="logo-information"></div>
            <div class="logo-slogan"></div>
        </div>
    </div>
    <div class="br-divider fundo-neutro m-0"></div>
    <div class="container-rights">
        <span
            >Texto destinado a exibição de informações relacionadas à
            <span class="container-rights-bolder">licensa de uso.</span></span
        >
    </div>
</div>
```

#### Propriedades obrigatórias

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->

| Tag | Atributo | Valor padrão           | Descrição                                  |
| --- | -------- | ---------------------- | ------------------------------------------ |
| div | class    | br-footer              | Container do componente                    |
| div | class    | container-logo         | Container interno responsável pelo layout  |
| div | class    | logo                   | Container para o logo                      |
| div | class    | br-list container-list | classe da lista de links (componente list) |

#### Propriedades Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Tag    | Atributo | Valor padrão                 | Descrição                                                      |
| ------ | -------- | ---------------------------- | -------------------------------------------------------------- |
| div    | class    | container-social             | Container responsável pelo layout                              |
| p      | class    | title-social-network         | Título Redes Sociais (opcional)                                |
| div    | class    | social-network               | Container para os botoes de redes sociais                      |
| button | class    | br-button tertiary is-circle | classe dos botões de redes sociais (componente button)         |
| div    | class    | assigns                      | Título do Cabeçalho                                            |
| div    | class    | br-divider                   | Separador (componente divider)                                 |
| div    | class    | container-rights             | Container para Texto Informações Legais - Destaque; (opcional) |
| span   | class    | `[vazio]` , bolder           | Texto Informações Legais - Destaque                            |

### Javascript

```javascript
const footerList = []

for (const brHeader of window.document.querySelectorAll('.br-footer')) {
    footerList.push(new BRHeader('br-footer', brHeader))
}
```

#### Configurações obrigatórias

-   Buscar os elementos com a classe "br-footer" e inicializar o construtor do componente.

### Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado         | Atributo    | Descrição                                        |
| -------------- | ----------- | ------------------------------------------------ |
| Colapsável     | collapsible | Ativa a opcão de colapsar os itens (obrigatório) |
| Horizontal     | horizontal  | Versão horizontal da lista (obrigatório)         |
| Expansão única | unique      | Expande apenas uma lista por vez (obrigatório)   |

| Estado            | Classe                | Descrição                                              |
| ----------------- | --------------------- | ------------------------------------------------------ |
| Layout Escuro     | `[vazia]` ou negative | Aplica o layout escuro ao footer                       |
| Layout Claro      | positive              | Aplica o layout escuro ao footer                       |
| Logo à esquerda   | text-left             | Alinha a logo a esquerda - Aplicar ao `container-logo` |
| Logo à direita    | text-right            | Alinha a logo a esquerda - Aplicar ao `container-logo` |
| Logo centralizado | text-center           | Centraliza a logo - Aplicar ao `container-logo`        |

#### Informações Adicionais

-   A lista de links deve seguir o modelo apresentados nessa página. Cada item de primeiro nível da lista deve ser encapsulados por um container com a classe `col`, podendo ser usadas as varições do bootstrap para diferentes tamanhos de coluna (ex.: col-2, col-4, col-8).
-   Os atributos da `br-list`: `collapsible`, `horizontal` e `unique` devem ser adicionados para correto funcionamento do script.
-   A altura de linha padrão para os textos é de duas linhas. O layout se mantêm horizontal no desktop e os itens expandidos mas, na resolução de tablet e mobile, a lista volta para o formato vertical e pode ser condensada.
-   Para variação de tema claro aplicar a classe `positive` a tag do componente.
-   Para variações de alinhamento da logo, aplicar as classes: `text-left`, `text-right` ou `text-center` a `container-logo`

<!-- ## Próximos passos -->

<!-- Mostra as features que já foram planejadas para o componente e o status dela para os designers e desenvolvedores -->

<!-- -   Não planejado: A necessidade foi identificada, mas ainda não tem data para ser satisfeita.
-   Fazendo: A equipe está trabalhando na necessidade.
-   Feito: Necessidade já é satisfeita.

| Nome                                         | Documentação de Design | Desenvolvimento |
| -------------------------------------------- | ---------------------- | --------------- |
| Responsividade                               | Feito                  | Feito           |
| Comportamento da Busca                       | Feito                  | Feito           |
| Comportamento Logado e Não Logado            | Feito                  | Feito           |
| Comportamento Sticky Header                  | Feito                  | Feito           | -->

## Dependências

<!-- Caso o componente dependa de algum outro ou de algo externo, listamos aqui colocando links para a documentação da dependência -->

| Internas                         |
| -------------------------------- |
| [Input](/ds/components/list)     |
| [Button](/ds/components/button)  |
| [Avatar](/ds/components/divider) |

<!-- ## Links relacionados -->

<!-- Links para mais informações ou referências que sejam inportantes para o desenvolvedor usar o componente -->

<!-- ## Atalhos de teclado -->

<!-- Caso o uso do componente por atalhos tenha sido implementado -->
