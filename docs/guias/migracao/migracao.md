Este guia vai te ajudar a migrar da versão 1.5.0 para a 2.0.0 do Design
System, caso tenha alguma dúvida, poderá ser submetida através do
"Formulário para registro de dúvidas" disponível na página Como
Contribuir.

**Dependências**

Atualizar a versão do node para v14.15.4

Atualizar o Design System para \@govbr/dsgov:2.0.0 ou fazer o download da nova
versão na página de downloads

Alterar  a dependencia do font-awesome no html

DE:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"></script>
```
PARA:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
```

# Compatíveis

-   Checkbox

-   Loading

-   Radio Button

# Breaking-changes

-   **Accordion**: Trocar para componente List

-   **Badge**: Alterado como um tipo do componente Tag

-   **Header**: Ver nova documentação de uso

-   **Menu**: Ver nova documentação de uso

-   **Modal**: Ver nova documentação de uso

-   **Pagination**: Ver nova documentação de uso

-   **Scrim**: mudou para atributo de comportamento

-   **Select**: Ver nova documentação de uso

-   **Tabs**: Componente mudou de nome para Tab

-   **Table**: Ver nova documentação de uso

-   **Tag**: Ver nova documentação de uso

-   **Textarea**: Ver nova documentação de uso

-   **Tooltip**: Ver nova documentação de uso

-   **Upload**: Ver nova documentação de uso

-   **Wizard**: Ver nova documentação de uso

# Novos componentes

-   Divider

-   Item

-   Sign-in

# Tokens

-   Tokens de estados foram renomeados

-   Adicionados tokens de superfície

-   Adicionados novos tokens de espaçamento (6h, 7h, 8h, 9h e 10h)

# Utilitários

-   **modificações**

    -   cor de fundo

        -   usa classe .bg-token e não mais .background-color-token

        -   css é aplicado como background e não mais como
            > background-color

        -   classe que aplicava versão rgb foi removida

    -   cor de texto

        -   usa classe .text-token e não mais .color-token

        -   classe que aplicava versão rgb foi removida

    -   cor de borda

        -   usa classe .border-token e não mais .border-color-token

        -   classe que aplicava versão rgb foi removida

-   **novos**

    -   bordas

    -   arredondamento

    -   sombras

    -   opacidade (falta documentar)

    -   scrim (falta documentar)

    -   dropdown (falta documentar)

# Mudanças visuais

-   Tabelas html (não confundir com componente Table) não recebem hover
    > ao passar o cursor na linha

-   Divisor html (\<hr\>) recebe mesmo estilo do componente Divider com
    > margem vertical de 16px

-   Os links sempre recebem estado focus. Outros estados e estilos só
    > são aplicados em links que estiverem dentro da classe
    > .main-content ou dentro de componentes que modifiquem o visual

Mudança na arquitetura

-   O arquivo dsgov.min.js e dsgov.min.css ficam na pasta raiz do dist

-   css e js dos componentes ficam na pasta components da pasta dist

-   Templates ficam na pasta dist/templates/

#  Mudanças pontuais

## Avatar

-   Tag do componente mudou de \<div\> para \<span\>

-   Elemento "image" mudou de \<div\> para \<span\>

-   Classe .change substituída por .br-avatar-action

## Breadcrumbs

-   Crumb "home" usa botão ao invés de link

## Button

-   No breakpoint mobile o botão não ocupa 100% por padrão. Esse efeito
    > foi substituído pelo tipo "block".

-   Criado tipo "inverted" para uso em fundos escuros

-   É possível usar botões com cores de estados

## Card

-   HTML simplificado, elemento "front" só é necessário quando houver
    > elemento "back"

-   Elemento "header" renomeado para "card-header"

-   Elemento "content" renomeado para "card-content"

-   Elemento "footer" renomeado para "card-footer"

-   Atributo "flip" mudou para "data-flip"

-   Card com expansão deixou de ser um "tipo". Usar comportamento de
    > collapse

## Divider

-   Antes usado como classe "divider" em alguns componentes, passou a
    > ser um componente com documentação

## Footer

-   Atributos "collapsible", "horizontal", "two-lines" e "unique"
    > mudaram para "data-toggle" e "data-unique".

-   "horizontal" deixou de ser atributo e passou a ser uma classe na
    > listagem de itens

## Input

-   Atributos "filter", "valid" e "invalid" receberam prefixo "data-"

## List

-   Elemento "item" virou componente Item

-   Tipo "condensed" removido. Passou a ser configurado pelo componente
    > Item

-   Atributos "collapse" e "unique" receberam prefixo "data-"

-   Classe "divider" foi substituída pela componente Divider

## Message

-   No tipo "contextual" a cores de estados não precisam de prefixo
    > "is-"
