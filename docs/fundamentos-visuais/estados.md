> Estados são representações visuais que ajudam os usuários a identificar o estado de um componente ou elemento. Comunicam o estado de uma ação e sugerem a possibilidade ou imposibilidade do usuário interagir com um elemento, estabelecendo confiança entre interface e usuário.

## Princípios

### Experiência Única

Os estados devem ser aplicados consistentemente entre os componentes e elementos exibidos, a fim de aumentar a usabilidade, criando um padrão reconhecível para os usuário. Se uma interação produzir um _feedback_ inconsistente, os usuário podem fucar confusos e a integridade do padrão porposto pelo design system pode ser comprometida.

Quando os estilos definidos neste documento não forem suficientes ou exagerados, tente manter de alguma forma, os estilos descritos no estado para manter a consistencia dentro da interface.

> **Por exemplo:** A cor de fundo de um elemento com estado Selecionado pode aparecer muito exagerado, ou seja, se destacar mais do que deveria em relação aos outros elementos. Neste caso, pode-se alternar a cor de fundo para a cor de texto e manter a iconografia característica de um estado selecionado. Como é impossível prever todos os casos, estes ajustes devem ser feitos com cautela, buscando atender a todos os princípios aqui listados.

### Eficiência e Clareza

O estilo do estado pode ser sutil, porém deve transmitir com clareza sua mensagem. Sua utilização deve ser funcional, e não apenas decorativa. Utilizar-se de transições elaboradas, que criam distrações e ruídos visuais, podem tornar a interface desagradável de se usar.

A herança de um estado deve ser respeitada. Quando vários estados ocorrem ao mesmo tempo, todos os estilos de estado devem ser exibidos, tendo prioridade os estilos herdados por interação direta do usuário.

> **Por exemplo:** Em um item de Menu os estilos do estado Hover podem prevelecer sobre os estilos de um estado Ativo, já que o hover é um interação direta do usuário com o elemento.

### Acessibilidade

Por se tratar de representações visuais, os estados devem seguir os princípios de acessibilidade encontrados nas [Cores](#). Entretando, apesar da importância do contraste, alguns estados não possuem a necessidade de se preocupar com tais questões tendo em vista sua função dentro da interface, como é o caso de estado **Desativado**.

Dependendo do fundo aplicado, o estado do componente deve ser revisto para atender todos os princípios estabelecidos dos estados. Caso as especificações contidas no estado forem insuficientes para promover um bom contraste entre fundo e texto/ícone, inverta as cores de fundo e texto/ícone do elemento. Se mesmo assim não houver um contraste satisfatório, utilize as informações localizadas do [fundamento cores](#) como guia para atender as necessidades.

Em alguns casos pode ser necessário aumentar as dimensões do fundo de um elemento ou componente para melhorar a legibilidade de um texto ou a compreensão de um ícone quando um estado é aplicado. Quando isso acontecer, tome cuidado para não soprepor outros elementos: um aumento de 4px ou 8px por exemplo, pode ser suficiente para resolver o problema.

![Legibilidade](/assets/design-system/assets/images/docs_img/fundamentos/estados/aumentando_legibilidade.png)

Usuários interagem com a interface de diversas maneiras. Ao projetar um componente, considere o uso de diferentes dispostitivos de entrada tais como:

- Mouse
- Tela sensível ao toque
- teclado
- Voz
- Controle de vídeo game
- Leitores de Tela (como sintetizadores de voz, Display Braille)

### Reutilização e Colaboração

Os estados definidos devem ser utilizados sempre que possível. Caso necessário, é possível acrescentar um novo estado ou regra ao Design System, devendo a nova proposta atender todos os princípios estabelecidos nos estados, além de passar por prévia aprovação da equipe de design do DS.

## Overlay

Alguns estados utilizam o conceito de overlay. Overlay é uma aplicação/camada semitransparente sobre um elemento.

Dependendo da cor de um elemento, a opacidade do overlay deve ser revista para que o destaque do elemento seja notado pelo usuário: O valor da opacidade é inversamente proporcional ao brilho do elemento (cor de fundo), ou seja, quanto mais claro a cor do componente, menor será o valor da opacidade necessário para que o usuário perceba o estado.

Seguindo este conceito podemos dizer que o [Scrim](#) é um overlay componentizado do DS Gov.

## Tipos de Estado

![Estados](/assets/design-system/assets/images/docs_img/fundamentos/estados/estados.png)

Abaixo,segue a lista dos principais estados encontrados no DS gov. Alguns estados são específicos de um componente, e como tal serão detalhados na sua respectiva documentação.

- **Destacado**: Um estado que comunica um destaque sobre um texto, iniciado pelo usuário ou não.
- **Interativo**: Um estado que comunica que um componente ou elemento é interativo.
- **Desativado**: Um estado que comunica que um componente ou elemento não é interativo temporariamente.
- **Hover**: Um estado que comunica quando um usuário coloca o cursor sobre um componente ou elemento.
- **Pressionado**: Um estado que comunica um toque ou clique do usuário sobre um componente ou elemento.
- **Foco**: Um estado que comunica quando um usuário destaca um componente ou elemento, utilizando-se de um método de entrada como teclado ou voz.
- **Ativo**: Um estado que comunica um destaque sobre um determinado destino ou conjunto de escolha, iniciado pelo usuário ou não.
- **Selecionado**: Um estado que comunica uma escolha do usuário.
- **Arrastado**: Um estado que comunica quando um usuário pressiona (com clique ou toque) e move um componente ou elemento.
- **Ligado**: Um estado que comunica a opção "ligado" na alternância entre duas opções.
- **Desligado**: Um estado que comunica a opção "desligado" na alternância entre duas opções.

## Destacado

O estado destacado é usado para indicar que um texto possui uma ênfase maior sobre os demais textos de uma interface.

Este estado não pode ser utilizado como alternativa a destaques como bold ou itálico por exemplo, mas sim nos casos onde estes estilos não são suficiente para aumentar a ênfase de um texto.

Exemplos de casos onde o estado deve ser utilizado:

- Citação
- Palavras-chave
- Termos/caracteres pesquisados em uma busca

O destaque é exibido com um overlay sobre o fundo da cor **Orange** com opacidade de 10% e texto na cor **Orange**. Em situações onde esta regra não gere contraste suficiente (como um fundo escuro por exemplo), altere o fundo do elemento para cor Orange e o texto para cor White.

O texto destacado pode possuir estado interativo.

## Interativo

Para o usuário, deve ser claro quais objetos exibidos em uma interface são interativos ou não. No Design system do governo a cor **Blue Primary** é utilizada para identificar que o componente é interativo. Evite o uso desta cor (e outras cores com o matiz parecido) em outros elementos para não confundir o usuário.

A cor "Blue Primary" não é aplicável em todas as situações, como no caso de um fundo escuro ou uma interface com grande densidade informacional de itens interativos (gerando monocromia) por exemplo. Neste caso, outros recursos devem ser utilizados para que o elemento seja distinguível dentro da interface. Uso de texto **bold (700)** ou **underline** pode resolver este problema.

> **Exemplo:** Hiperlinks e Botões podem ser bons lugares para usar a cor Blue Primary, porém, uma Lista ou Menu, o uso de bold nos textos (ao invés da cor Blue Primary ou um underline) pode ser mais eficaz na maioria das situações.

## Desativado

Um estado desativado, deve ter baixa ênfase ou ser amenizado dentro de uma interface. O estado desativado comunica quando um componente ou elemento não é interativo (geralmente temporariamente). Esse estado é exibido com **45%** de opacidade do estado Interativo.

Caso um componente, mesmo com a opacidade aplicada ainda esteja se destacado, substitua a alteração da opacidade pela cor: Fundo: **Gray 02** | Texto e ícone: **Gray 03**.

Elementos desativados não precisam ser rígidos sobre as [conformidade de acessibilidade](#); e caracteristicas visuais que destaquem o elemento devem ser retiradas ou amenizadas, como é o caso das sombras por exemplo.

### Evitar estado desativado

Alguns elementos da tela, não podem receber o estado desativado. Neste caso, prefira não exibir o componente na interface. Alguns componentes que seguem essa regra:

- Componentes de Navegação (Menu, Abas...)
- Modal
- Tooltip
- Botão call to action

**Cuidado:** Alguns componentes são contituídos por vários outros componentes. Neste caso, seus componentes podem possuir estado de desativado, ainda que o componente "completo" que constituem, não possua tal estado.

Elementos desativados não sofrem herança, ou seja, não podem ser combinados com qualquer outro estado.

## Hover

O Estado hover acontece quando o usuário mantém o cursor do mouse sobre um componente ou elemento interativo. Ele deve ser aplicado, no mínimo, em toda a área interativa do componente, podendo ser em todo ele, nos elementos que o formam ou por alguma área que faz parte do componente.

Por padrão, o hover é exibido em um fundo da cor **Blue Primary Pastel 01** e o cursor do mouse deve ser alterado para a "mão fechada com indicador esticado" caso o elemento seja interativo, como no caso de hiperlinks. Para questões de legibilidade, a cor da fonte ou elemento gráfico podem ser alterados para cor padrão do estado interativo ou de texto normal.

Componentes desativados não podem receber hover.

Em casos em que o elemento interativo tenha algumas características visuais que fogem do comum, como ter um fundo da mesma cor do hover, pode ser utilizado um overlay no fundo do componente para se criar contraste suficiente para percepção do hover. Esse Overlay é realizado com opacidade de 12% da cor do texto/ícone no elemento ao qual é aplicada, e no caso de ter um fundo escuro a opacidade deve ser ajustada para 24%.

Só pode existir um elemento com hover por vez na tela.

## Pressionado

Quando um elemento interativo recebe um toque iniciado pelo usuário, seja ela por cursor, teclado ou método de entrada de voz, recebe o estado de pressionado. Ele deve ser aplicado, no mínimo, em toda a área interativa do componente, podendo ser em todo o componente, nos elementos que formam o componente ou por alguma área que faz parte do componente.

Características visuais referentes à elevação do componente na tela, como sombra por exemplo, devem ser retiradas ou amenizadas. O estado pressionado é exibido por um fundo da cor **Blue Primary Darken 15** e o Texto e ícones na cor **White**. Para fundo escuro ou lugares onde o padrão não seja identificável inverta as cores (fundo "White" e nos texto e gráficos a "Blue Primary Darken 15").

Só pode existir um elemento com pressionado por vez na tela.

## Foco

O estado foco surge quando um usuário utiliza-se de um teclado ou voz para destacar um componente interativo. Por esse motivo, ele deve ter alta ênfase sobre demais elementos da interface.

O foco é exibido por um overlay na cor **Yellow** com opacidade 30% sobre um fundo claro do componente, e com 95% de opacidade em fundo escuro do componente.

Componentes desativados não podem receber foco.

Só pode existir um elemento com foco por vez na tela.

## Ativo

O estado ativo indica qual item, de um conjunto de opções, está sendo visualizado no momento, sendo iniciado por padrão ou por uma escolha do usuário utilizando-se dos seguintes métodos de entrada: toque, cursor, teclado ou entrada de voz.

O estado deve ter uma alta ênfase entre os demais elementos do seu conjunto. Ele é exibido por um fundo da cor **Blue Primary** e Texto e ícones na cor **Blue Primary Pastel 02**. Caso não tenha contraste satisfatório, inverta as cores (fundo "Blue Primary Pastel 02" e para texto e ícone a cor "Blue Primary").

Em algumas situações, o elemento ativo pode receber uma ênfase exagerada, se destacando além do necessário da interface. Nestes casos, para diminuir a enfase do componente, o estado pode ser representado com bordas na cor **Blue Primary** que envolvendo o componente. Pode ser uma borda inferior ou algo que envolva todo o componente.

Dentro de um único conjunto de opções, apenas um estado ativado pode estar presente de cada vez.

## Selecionado

Um estado selecionado indica a seleção de opções pelo usuário usando um dos seguintes métodos de entrada: toque, cursor, teclado ou voz.

O estado selecionado não deve distrair o usuário, porém, deve ser facilmente identificável. Ele é exibido com um fundo da cor **Blue Primary Light 15** e texto ou ícones com cor **White**. Para fundos escuros ou lugares onde o padrão não seja identificável inverta as cores (fundo "White" e nos texto e ícones a "Blue Primary Light 15"). Um ícone, representando a seleção, deve ser adicionado sobre o componente.

### Evitar estado selecionado

O estado selecionado não pode ser aplicado nos seguintes componentes:

- Componentes de Navegação (Menu, Abas...)
- Modal
- Tooltip
- Botão
- Mensagens
- Separadores

**Cuidado:** Alguns componentes são construídos por vários outros componentes. Neste caso, seus componentes ainda podem possuir estado de selecionado, por mais que o componente "completo" não possa.

## Arrastado

O estado arrastado ocorre quando um usuário pressiona e move um elemento ou componente.

O estado arrastado não devem distrair o usuário de suas tarefas. São exibidos com fundo na cor **Gray 02**. A cor da fonte ou elemento gráfico podem ser alterados para cor "Gray 07" a fim de manter o mínimo de legibilidade. O componente arrastado recebe também uma sombra ("Black", x:0, y:3, b:6) e o cursor do mouse deve ser alterado para a "mão fechada".

Caso a ênfase do componente ainda esteja alta, distraindo o usuário de suas tarefas, a opacidade do componente pode ser ajustada para 90%.

Pode haver apenas um único estado arrastado de cada vez dentro de um layout.

## Ligado e Desligado

Apesar de serem estados diferentes, o estado ligado e desligado estão unidos na função: comunicam uma alternância entre duas opções: Ligado ou Desligado. Um elemento ou componente se alterna entre um estado ligado ou desligado conforme a interação do usuário utilizando os seguintes métodos de entrada: toque, cursor, teclado ou voz.

O estado ligado pode ser exibido com a cor **Blue Primary** enquanto o desligado pela cor **Gray 04**.
