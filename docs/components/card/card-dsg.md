[version]: # (5.1.7)

![Exemplo do componente card.](imagens/diretriz.png)
*Exemplo do componente _card_.*

Os _cards_ devem ser fáceis de verificar informações relevantes e acionáveis. Elementos, como texto e mídias, devem ser colocados sobre eles de maneira a indicar claramente a hierarquia. Podem ser bastante simples (contendo apenas um componente) ou complexos (contendo vários componentes).

![Exemplo Uso](imagens/uso.png)
*Exemplo de _card_ simples e _card_ complexo.*

## Princípios

Quando se usa _cards_ tudo parece limpo e arrumado, pois ele possui a finalidade de melhorar o engajamento, organizar bem o conteúdo e ajudar os usuários a entender rapidamente uma página.

A seguir são enumerados alguns princípios que devem ser considerados na criação dos _cards_:

1. **Simplicidade:**

Como o _card_ pode conter vários elementos distintos, é necessário ter cuidado para que sejam sobre um único assunto. Isso permite que os usuários selecionem a parte do conteúdo que desejam consumir, compartilhar ou interagir.

1. **Independente**
Um _card_ pode ficar sozinho, sem depender dos elementos circundantes para o contexto. Não use _cards_ dentro de _cards_.

3. **Individual**

Um _card_ não pode ser mesclado com outro _card_ ou dividido em vários _cards_.

4. **_White Space_:**
_Cards_ são representados por conteúdo individual altamente coerente, divididos em pequenos blocos. Por isso é essencial dar um espaço para cada bloco do _card_, assim pode ser lido e entendido com maior facilidade. Acrescente também _white space_ ao redor de cada bloco (área de respiro).

5. **Limite de conteúdo:**
 O _card_ deve conter apenas informações essenciais e oferecer um caminho para mais detalhes, em vez de detalhes completos logo de cara. Evite ao máximo colocar muito conteúdo em um único _card_, ele pode ficar muito grande ou muito longo e, por sua vez, perdendo sua conexão original com a metáfora do “cartão”.

6. **Crie hierarquia de conteúdo:**
A hierarquia dentro dos _cards_ ajuda a direcionar a atenção dos usuários para as informações mais importantes. Coloque o título na parte superior do _card_ e o conteúdo principal no centro. Elementos interativos como botões e ícones funcionam melhor na parte inferior do _card_.

---

## Anatomia

Para construir um _card_ é necessária uma superfície branca com sombra e uma área com no mínimo um conteúdo contido.

1. Superfície;
2. Área.

![Exemplo anatomia do componente card.](imagens/anatomy.png)
*Anatomia do componente _card_.*

---

## Área

Podemos dividir a área da superfície do _card_ em três áreas distintas (ou blocos) que podem conter determinados componentes:

**1. Área de títulos:** exclusivo para títulos, subtítulos, ícones, avatares e _tags_.

**2. Área de conteúdo:** qualquer componente é aceitável, exceto componentes relacionados à navegação, como: carrossel, paginação, abas e menu.

**3. Área de ações:** exclusivo para botões e _links_.

![Exemplo de áreas do componente card.](imagens/areas.png)
*Exemplo de áreas do componente _card_.*

**Atenção:** embora as áreas mencionadas sejam apresentadas em uma ordem lógica, é permitida a criação de _cards_ em que as áreas sejam utilizadas em qualquer ordem ou até mesmo a não utilização das três áreas. Isso permite que os _cards_ sejam componentes totalmente customizáveis e adaptáveis a diversos _layouts_.

---

## Regras para criação de _cards_

Como explicado anteriormente, o componente _card_ pode ser simples ou complexo, de acordo com o número de componentes utilizados na sua composição. Por isso, é bastante flexível, no entanto alguns cuidados devem ser observados.
A seguir, são apresentadas algumas regras para orientação na criação dos _cards_:

### 1. Blocos formatados

A fim de facilitar a criação dos _cards_, o _Design System_ já disponibiliza blocos pré-formatados das três áreas que compõe um _card_ (título, conteúdo e ação). Fica muito fácil juntar as partes e montar um _card_ do zero sem se preocupar com regras de diagramação.

![Exemplo regra construção.](imagens/regra-construcao.png)
*Exemplo de construção de um _card_ a partir de blocos isolados.*

**Atenção 1:** o _Design System_ oferece inicialmente um _kit_ de cinco blocos formatados para cada uma das áreas do _card_. Conforme a necessidade, este kit poderá ser atualizado e expandido.

**Atenção 2:** recomendamos a utilização dos blocos formatados pois é garantida que todas as regras de composição descritas neste guia estão sendo respeitadas. Caso os blocos formatados não atendam uma necessidade específica, um _card_ pode ser construído do zero respeitando as regras e orientações deste _Design System_. Também é possível utilizar os blocos como base e alterar os elementos neles contidos.

![Exemplo blocos formatados.](imagens/blocos-formatados.png)
*Exemplos de possibilidades de formatação de blocos.*

**Atenção:** os blocos formatados são transparentes. Eles foram acrescentados com fundo branco na ilustração acima meramente para facilitar a visualização.

### 2. Dimensões

As dimensões da **área de conteúdo** do _card_ podem ter dois comportamentos distintos, conforme a necessidade do _layout_:

- Flexível;
- Fixa.

#### Fixa

É definida pelo _design_ e não importando a quantidade de conteúdo que a área possua. Se as dimensões forem maiores que a quantidade de conteúdo, haverá espaços vazios no _card_. Se as dimensões forem maiores que a quantidade de conteúdo, haverá _content overflow_.

![Exemplo altura fixa](imagens/altura-fixa.png)
*Exemplos de _cards_ com variadas quantidades de conteúdo e alturas das áreas de conteúdo fixas.*

**Atenção:** esse caso é mais recomendado quando se quer padronizar o tamanho de vários _cards_ que se relacionam entre si no _layout_ evitando desnivelamento das dimensões.

#### Flexível

É determinada pelo conteúdo contido no _card_. Quanto maior o conteúdo, maiores as dimensões da área de conteúdo do _card_.

![Exemplo altura flexível](imagens/altura-flex.png)
*Exemplos de _cards_ variando a área de conteúdo resultando em _cards_ com diferentes alturas.*

**Atenção:** esse caso é mais recomendado quando não se tem o controle do conteúdo do _card_ e a suas dimensões não influem no _layout_.

Já a largura do _card_ deve estar preferencialmente contida na _grid_.

![Exemplo dimensões](imagens/larguras.png)
*Exemplos de larguras possíveis para _cards_.*

**Atenção 1:** a largura mínima permitida são três colunas. Não há largura máxima, porém, deve-se avaliar a real necessidade de um _card_ excessivamente grande.

**Atenção 2:** devida a largura de tela reduzida dos dispositivos móveis, um _card_ deve estar localizado sempre abaixo de outro (nunca ao lado) respeitando a distância da área de respiro.

---

## Comportamentos

_Cards_ podem possuir diversos comportamentos próprios. A seguir, listamos os mais usuais:

### 1. Conteúdos Ocultos

#### Expandindo

Uma maneira de adicionar informações no _card_ sem necessitar alterar suas dimensões é por meio do recurso de expansão. Ao clicar no botão terciário "expandir", uma superfície complementar do _card_ é apresentada com mais informações relacionadas. É bastante útil quando for necessário apresentar informações complementares que não necessitem estar visíveis e podem ser acionadas com um simples clique.

![Exemplo de uso do comportamento de expansão.](imagens/expandir.png)
*Exemplo de uso do comportamento de expansão nos _cards_.*

Um _card_ em hipótese alguma deve possuir rolagens. O _card_ é flexível o suficiente para se adequar à quantidade de conteúdo necessário.

**Atenção:** use este recurso com moderação. Avalie se realmente é necessário. lembre-se sempre do **Princípio da Simplicidade** ao se projetar um _card_.

#### Alternando

Os _cards_ podem comportar algum tipo de conteúdo adicional no seu verso, geralmente um texto complementar.
Esse recurso é útil quando é necessário destacar uma informação mais relevante e vincular informações complementares menos relevantes.

![Exemplo do comportamento flip.](imagens/verso.png)
*Exemplo de conteúdo oculto acionado por um clique no _card_.*

É interessante utilizar recursos de movimento para alterar o conteúdo do _card_ como um efeito de giro (_flip_) ou efeito de _fade in/fade out_. Considere utilizar um elemento identificador (ícone ou _button_, por exemplo) para reforçar a existência de conteúdos ocultos, caso contrário o mesmo poderá passar despercebido pelo usuário. Esta ação pode ser provocada pelo clique no elemento identificador ou no próprio _card_, dependendo do projeto e respeitando as regras de usabilidde e acessibilidade.

**Atenção:** pode ser interessante utilizar uma cor de fundo diferente para o conteúdo oculto do _card_ para facilitar o entendimento de que se trata de outra área de conteúdo acionada. Neste caso, esteja atento para o contraste entre fundo e conteúdo.

Para mais detalhes dos tipos de movimento que podem ser utilizados, consulte o documento Fundamentos > Movimento.

### 2- Estados

Os _cards_ podem apresentar apenas os estados: **desabilitado**, **arrastando** e **hover**. Todos os componentes contidos devem herdar o mesmo comportamento do _card_.

![Exemplo estados nos cards.](imagens/estados.png)
*Exemplo do uso dos estados nos _cards_.*

### 3- Margens

Os componentes dentro dos _cards_ devem respeitar as margens definida nos _tokens_ entre cada um dos lados da superfície. Na imagem abaixo podemos perceber que a área branca é a área em que os componentes estão contidos.

![Exemplo de margens em um card.](imagens/margens.png)
*Exemplo de margens em um _card_.*

**Exceção 1:** alguns componentes podem "sangrar" (extrapolar) os limites do _card_, como por exemplo: mídias (fotografias, ilustrações, vídeos) e _tags_.

**Exceção 2:** em _cards_ com dimensões mais reduzidas os ícones ou botões terciários podem estar mais próximos das margens de acordo com a definição nos _tokens_.

Neste exemplo, pode-se ver um ícone (vermelho) respeitando uma margem menor. Um componente genérico (azul), respeitando a margem padrão. E uma imagem (verde) "sangrando".

![Exemplo de tipos de margens.](imagens/margens-2.png)
*Exemplo do uso de tipos de margens em um _card_.*

Os _cards_ devem possuir ainda uma **área de respiro**, isto é, o espaço mínimo entre dois _cards_ ou qualquer outro componente próximo.

![Exemplo de área de respiro.](imagens/area-respiro.png)
*Exemplo da aplicação da área de respiro.*

---

## Especificação

### Cor

|Name|Property|Token|
|--|--|--|
|Superfície|superfície|`--pure-0`|
|Superfície (verso)|superfície|`--gray-2`|

### Sombra

|Name|Token Shadow|
|:--:|:--:|
|Superfície|`--shadow-sm`|

### Estado

|Property|Status|Token|
|---|---|---|
|_Conteiner_ (superfície)|desativado|`--status-disabled-background`|
|_Conteiner_ (superfície)|arrastado|`--status-dragged-background`|

### Espaçamento

|Name|Property|Value|
|--|--|--|
|Conteúdo (geral)|padding|16px|
|Ícones|padding|8px|
