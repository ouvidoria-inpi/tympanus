[version]: # '1.0.0'

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<body class="template-base">
  <div class="scrim-menu">
    <div class="br-menu">
      <!-- Menu Principal-->
    <div>
  <div class="br-header" sticky>
    <div class="container-lg">
      <!-- Conteúdo do Header-->
    </div>
  </div>
  <div class="container-lg">
    <div class="row">
      <div class="context-menu col-sm-6 col-md-4">
        <div class="br-menu">
          <a class="header">
            <div class="support"><i class="fas fa-angle-up"></i></div>
            <div class="content"> Menu Contextual </div>
          </a>
          <nav class="folders">
            <div class="folder">
              <ul>
                <li>
                  <!-- Lista de links -->
                </li>
              <ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="col container-main">
        <ul class="br-breadcrumb">
          <!-- Lista de links breadcrumb -->
        </ul>
        <!-- Conteúdo da Página -->
      </div>
    </div>
  </div>
  <div class="br-footer">
    <div class="container-lg">
      <!-- Conteúdo do Footer-->
    </div>
  </div>
</body>
```

#### Elementos obrigatórios

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->

| Elemento        | Descrição                       |
| --------------- | ------------------------------- |
| template-base   | classe do body                  |
| scrim-menu      | Container o menu principal      |
| br-menu         | Menu principal                  |
| br-header       | Cabeçalho da página             |
| container-lg    | Container do cabeçalho          |
| container-main  | Container do conteúdo principal |
| br-breadcrumb   | Componente Breadcrumb           |
| br-footer       | Componente Footer               |
| container-lg    | Container do conteúdo Footer    |

#### Elementos opcionais

| Elemento                    | Descrição                             |
| --------------------------- | ------------------------------------- |
| context-menu                | Container scrim do menu contextual    |
| br-menu                     | Menu Secundário                       |
| header, support, i, content | Cabeçalho do menu contextual          |

### Javascript

```javascript
const templateBaseList = []
for (const brTemplateBase of window.document.querySelectorAll('.template-base')) {
  templateBaseList.push(new BRTemplateBase('template-base', brTemplateBase))
}
```

#### Configurações obrigatórias

-   Buscar o elemento com a classe "template-base" e inicializar o construtor do componente.
-   Definir adequadamente os estilos dos elementos da página que possibilitam a interação dos componentes.

<!-- ### Estados -->

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

#### Informações Adicionais

-   O menu secundário ou contextual é opicional. Mas, caso seja utilizado, é necessário que sejam incluídos os itens do cabeçalho que geram a barra de atiuvação no layout mobile.

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

-   [Header](/ds/components/header)
-   [Menu](/ds/components/menu)
-   [Footer](/ds/components/footer)
-   [Breadcrumb](/ds/components/breadcrumb)
-   [List](/ds/components/list)
-   [Button](/ds/components/button)
-   [Divider](/ds/components/divider)

<!-- ## Links relacionados -->

<!-- Links para mais informações ou referências que sejam inportantes para o desenvolvedor usar o componente -->

<!-- ## Atalhos de teclado -->

<!-- Caso o uso do componente por atalhos tenha sido implementado -->
