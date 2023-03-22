### Navegação e Comportamento

-   Torne o componente *pagination* acessível via navegação por teclado. Certifique-se de que o usuário possa usar as teclas `Tab` e `Shift + Tab` para avançar ou retroceder na navegação;

-   Configure as teclas `Enter` ou `Space` para ser possível o acionamento dos botões de paginação pelo teclado;

-   Quando navegar pelos atalhos, em listas de seleção, o usuário poderá fazê-lo por meio das teclas direcionais `arrowUp` e `arrowDown`;

-   Utilize a tecla `Esc` para fechar as listas de seleção.

### Recomendações para Estilo e Design

-   Forneça aos usuários de leitores de tela, textos descritivos mais claros nos botões de paginação. Por exemplo, em vez de apenas números ou símbolos `"1"`, use `"Ir para a página 1"`;

-   Forneça atalhos para que o usuário possa acessar uma página desejada sem ter que passar por todas as páginas intermediárias. Por exemplo, permita que o usuário consiga saltar para a última página ou diretamente para uma página qualquer;

-   Utilize as cores de estado `(ativo, hover, foco, etc)` recomendadas na diretriz do componente, para fornecer ao usuário um *feedback* visual claro sobre a página atual e o progresso de navegação.

### Recomendações para Código

-   Recomenda-se usar marcadores semânticos para estruturar o componente *pagination*, as *tags* `<nav>`, `<ul>`, `<ol>` e `<li>`;

-   Para os links de paginação utilize a *tag* `<a>` e para os botões de ação a *tag* `<button>`;

-   Para os atalhos de navegação, utilize o componente *select*.

### Referências

-   [W3C World Wide Web Consortium](https://www.w3.org/)
-   [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
-   [Carbon Design System](https://carbondesignsystem.com/components/pagination/accessibility)
