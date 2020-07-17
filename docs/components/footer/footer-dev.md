[version]: # '1.0.0'

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<div class="br-footer [inverted]">
    <div class="container-lg">
        <div class="logo">
            <img src="https://url-da-imagem.png" alt="Texto alternativo" />
        </div>
        <div class="br-list" collapsible horizontal two-lines unique>
            <div class="col">
                <a class="item" href="javascript:void(0);" link>
                    <div class="content text-down-01 text-bold text-uppercase">Categoria</div>
                    <div class="support"><i class="fas fa-angle-up"></i></div
                ></a>
                <div class="br-list">
                    <a class="item" href="javascript:void(0);" link>
                        <div class="content">Item da Lista</div></a
                    >
                </div>
            </div>
        </div>
        <div class="d-none d-sm-block">
            <div class="row align-items-end justify-content-between py-5">
                <div class="col social-network">
                    <p class="text-up-01 text-extra-bold text-uppercase">Redes Sociais</p>
                    <a href="" class="mr-3">
                        <img src="https://url-da-imagem.png" alt="Texto alternativo" />
                    </a>
                </div>
                <div class="col assigns text-right">
                    <img class="ml-4" src="https://url-da-imagem.png" alt="Texto alternativo" />
                </div>
            </div>
        </div>
    </div>
    <div class="br-divider"></div>
    <div class="container-lg">
        <div class="info">
            <div class="text-down-01 text-medium pb-3 text-center">
                Texto destinado a exibição de informações relacionadas à
                <strong>licença de uso.</strong>
            </div>
        </div>
    </div>
</div>
```

#### Elementos obrigatórios

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->

| Elemento  | Descrição               |
| --------- | ----------------------- |
| br-footer | Container do componente |
| logo      | Container para o logo   |

#### Elementos opcionais

| Elemento       | Descrição             |
| -------------- | --------------------- |
| br-list        | lista                 |
| social-network | Redes Sociais         |
| assigns        | Assinatura de Governo |
| br-separator   | Separador             |
| info           | Informações Legais    |

#### Atributos Opcionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Atributo | Descrição      |
| -------- | -------------- |
| inverted | Aplicar tema 2 |

### Javascript

```javascript
const footerList = []

for (const brHeader of window.document.querySelectorAll('.br-footer')) {
    footerList.push(new BRHeader('br-footer', brHeader))
}
```

#### Configurações obrigatórias

-   Buscar os elementos com a classe "br-footer" e inicializar o construtor do componente.

| Atributo    | Descrição                                        |
| ----------- | ------------------------------------------------ |
| collapsible | Ativa a opcão de colapsar os itens (obrigatório) |
| horizontal  | Versão horizontal da lista (obrigatório)         |
| unique      | Expande apenas uma lista por vez (obrigatório)   |

<!-- ### Estados -->

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

#### Informações Adicionais

-   A lista de links deve seguir o modelo apresentados nessa página. Cada item de primeiro nível da lista deve ser encapsulados por um container com a classe `col`, podendo ser usadas as varições do bootstrap para diferentes tamanhos de coluna (ex.: col-2, col-4, col-8).
-   Os atributos da `br-list`: `collapsible`, `horizontal` e `unique` devem ser adicionados para correto funcionamento do script.
-   A altura de linha padrão para os textos é de duas linhas. O layout se mantêm horizontal no desktop e os itens expandidos mas, na resolução de tablet e mobile, a lista volta para o formato vertical e pode ser condensada.
-   Para variação de tema claro aplicar o atributo `inverted` a tag do componente.
-   Para variações de alinhamento da logo, aplicar as classes: `text-left`, `text-right` ou `text-center` a `logo`

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

-   [List](/ds/components/list)
-   [Button](/ds/components/button)
-   [Divider](/ds/components/divider)

<!-- ## Links relacionados -->

<!-- Links para mais informações ou referências que sejam inportantes para o desenvolvedor usar o componente -->

<!-- ## Atalhos de teclado -->

<!-- Caso o uso do componente por atalhos tenha sido implementado -->
