[version]: #0.0.2
[Artefato Fonte de Design]: #select_4.0.0-dev02.xd

![Exemplo Componente](imagens/select-exemplo.png)

---

## Uso

Utilize o componente select quando um usuário precisar escolher entre mais de 5 opções ou tiver espaço limitado para exibir as opções como detro de células de tabelas, por exemplo.

### Tom de voz (opcional)

-   Escolha uma ordem sensata para as opções para ativar a verificação visual das listas.
-   Evite alterar as opções em um menu suspenso com base na entrada em outro.
-   Se possível torne o padrão a opção mais escolhida pela maioria dos usuários.
-   Se a lista de opções for curta use os componentes radiobutton, checkbox ou switch.
-   Se você precisar permitir que os usuários selecionem mais de uma opção ao mesmo tempo use o tipo Multiselect.
    <!-- - Deve apresentar uma lista com até seis itens, apresentando barra de rolagem caso existam mais opções a serem apresentadas. -->

---

## Anatomia

<!-- Liste os fundamentos e componentes que são necessários para construção do componente seguindo a metodologia do Atomic Design. Não esqueça de informar se o elemento é opcional ou não.
Quais elementos são necessários para criar o componente em questão? Um outro componente, já documentado, faz parte da anatomia deste componente?

Cuidado: Características visuais (como cores e sombras) não precisam ser listadas, na anatomia, mas sim na criação dos Tokens (veja adiante). -->

![Anatomia](imagens/select-anatomia.png)

#### 1 Input

#### 2 Ícone interativo

#### 3 Lista

#### 4 Rodapé

#### 5 Button

#### 6 Separador

#### 7 Tag de entrada

<br/>

<!-- ### (Detalhamento de cada elemento da Anatomia) Elemento 1, Elemento 2, Elemento 3... (opcional)  -->
<!-- Detalhe cada item especificado na anatomia, seja ele um elemento novo ou um componente já conhecido dentro do design system. Muitos elementos listados na anatomia podem possuir uma documentação própria, porém, a documentação não pode cobrir todas as aplicações possíveis dentro de uma interface. Neste caso, sempre que um componente ou um elemento descrito na anatomia possuir um comportamento, tom de voz, tipos, ou outra característica fora do padrão habitual, descreva todas essas características de forma detalhada e separada no contexto atual.

O elemento possui um comportamento diferente do comum durante uma rolagem de conteúdo ou na responsividade? O componente deve ter um cuidado especial quando aplicado dentro deste contexto? Caso tenha conteúdo textual eu preciso me preocupar com o tom de voz, ou um comportamento específico?

Cuidado: Não é necessário descrever um componente se ele possui uma documentação e se comportar de forma padrão. -->

### Input

O componente input (1) é apresentado com o ícone interativo .fa-angle-down (2)

![Detalhe Icone](imagens/select-detalhe-input.png)

### Lista

O componente deve apresentar uma lista com até cinco itens, apresentando barra de rolagem caso existam mais opções a serem apresentadas.

### Rodapé

O elemento rodapé (3) deverá ter a altura, largura e cor de um item do componente lista. Deverá conter um botão (4) e um separador (5).

![Detalhe Rodape](imagens/select-detalhe-rodape.png)

### Separador

O componente separador deve se posicionar ao topo do rodapé e ocupar toda a sua largura.

<!-- O componente Select é composto pelo componente input (.input) com o seu ícone interativo alterado para .fa-angle-down .
Quando acionado um componente lista (.item-list) é aberto apresentando as opções de seleção única e o seu ícone interativo alterado para .fa-angle-up.
A seleção será apresentada dentro do input seguindo suas diretrizes. -->

---

## Tipos (opcional)

<!-- Quando o elemento possuir variações, destaque-os por tipos. Descrevendo e listando cada um desses tipos. Os tipos podem possuir Comportamentos, Tom de voz ou outra característica específica. Para criar um tipo, deve ser claro a diferença entre um e outro, e a diferença não pode ser puramente visual.

Qual a diferença entre um tipo e os demais? Qual momento que devo utilizar um ou outro?

O detalhamento de cada tipo deverá ser descrito na sequência (veja adiante).

Cuidado: Se não é claro a diferença entre um tipo e outro, ou se posso usá-los sem uma lógica clara, não tem necessidade da existência de Tipos de componentes. Por tanto, sempre justifique a existência de um Tipo para que ela “possa existir”.

Cuidado 2: Tipo de componente é diferente de aplicação do componente. Enquanto os tipos são uma variação do mesmo componente sendo utilizando em um determinado contexto (podendo ou não alterar suas características visuais), a aplicação é o uso de um determinado tipo em determinadas situações, porém, sempre no mesmo contexto do componente. -->

O componente pode ser do tipo:

-   Select
-   Multiselect

<!-- ### (Detalhamento do tipo) Tipo A, Tipo B, Tipo C.... (opcional) -->
<!-- Detalhe cada tipo do elemento de forma separada, descrevendo as características fundamentais que distingue cada um dos Tipos existentes. Características como comportamento, tom de voz, entre outros, podem ser descritos.

Quando utilizar exemplos de aplicação, explique porque o componente foi utilizado ou qual a finalidade dele dentro da interface/exemplo. -->

### Tipo Select

O tipo Select é utilizado para as opções de seleção única.
A seleção será apresentada dentro do input seguindo suas diretrizes.

![Exemplo Select](imagens/select-tipo-select.png)

### Tipo Multiselect

Caso seja necessário oferecer multiplas seleções além do componente lista é apresentado abaixo deste um rodapé com um separador (.button-mini-primary) em seu topo e um botão de confirmação (.button-mini-primary).
As seleções serão apresentadas em componentes Tag (.tag) dentro do input, seguindo suas diretrizes de exibição.

![Exemplo Multiselect](imagens/select-tipo-multiselect.png)

---

<!-- ### Comportamento (opcional)
Descreve os comportamentos relativos à interação do elemento dentro da interface. Comportamentos como Responsividade, Estados, Densidade, Barra de Rolagem podem ser descritos. O componente é exibido de forma diferente dependendo da interação do usuário ou quando algo é selecionado na interface? Enquanto os dados são carregados, o componente se comporta como? Existe outras opções de visualização do componente? Pode ter 2 linhas de texto no componente? Se existir um limite de linhas de texto, como deve ser exibido o conteúdo se ultrapassar este limite?

Cuidado: Em alguns casos, o comportamento pode ser descrito dentro detalhamento dos Tipos do componente caso seja algo muito específico para aquele tipo de componente.

![Exemplo Comportamento](imagens/imagem.png) -->

### Comportamento

O componente é acionado através de um click em talquer parte da extensão do input; um componente lista (.item-list) é aberto apresentando as opções de seleção e o seu ícone interativo é alterado para .fa-angle-up.

No tipo select, ao selecionar um item a lista deverá ser recolhida apresentando e o item selecionado será apresentada dentro do input seguindo suas diretrizes.

No tipo multiselect, a lista será recolhida apenas quando o botão no rodapé for acionado. Os itens selecionados serão apresentados em tags dentro do input seguindo suas diretrizes.

---

### Design Tokens

<!-- Especifique o componente e seus tipos listando-os em forma de tokens. Utilize os tokens de fundamento sempre que possível.
Organize os tokens por fundamentos e tipos. Utilize os elementos descritos na anatomia para criar referência a fim de especificá-los pelos tokens já criados nos fundamentos ou, caso não exista os tokens, por valores.
Caso o elemento que você queira especificar não esteja listado na anatomia, adicione esse elemento na lista, para que ele possa ser especificado nos tokens (esse momento pode ser interessante para saber se a documentação foi criada corretamente). -->

#### Input

###### Iconografia

| Name               | estado  | ícone                             | Class (Font Awesome) |
| ------------------ | ------- | --------------------------------- | -------------------- |
| Ícone de Interação | fechado | <i class="fas fa-angle-down"></i> | `fa-angle-down`      |
| Ícone de Interação | aberto  | <i class="fas fa-angle-up"></i>   | `fa-angle-down`      |
|                    |         |                                   |                      |

#### Rodapé

###### Dimensões

| Name   | Property                    |
| ------ | --------------------------- |
|        | **width** ------ **height** |  | -- |
| Rodapé | `400px` ------- `56px`      |
|        |                             |
