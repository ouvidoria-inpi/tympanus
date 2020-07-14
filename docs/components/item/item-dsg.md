[version]: # '1.0.0'

![Exemplo item](imagens/diretriz.png)

---

## Uso

Os itens são componentes projetados para servirem de apoio a outros componentes como listas, menus, _acordeons_ etc, servindo de matéria prima para a montagem desses componentes mais complexos. Devem ser utilizados quando se pretende apresentar conteúdos que devem ser visualizados de forma ordenada, facilitando desta forma a leitura.

![Exemplo uso](imagens/uso.png)

## Anatomia

Para construir um item é necessário uma superfície, uma área com no mínimo um conteúdo contido e opcionalmente um separador na extremidade inferior da superfície.

1. Superfície;
2. Área de conteúdo;
3. Separador (opcional).

![Exemplo anatomia](imagens/anatomia.png)

---

## Área

A área de um item é a região onde são colocados os componentes. A diagramação dos componentes dentro dessa área é livre porém deve-se levar em conta as características de cada componente.

1. Superfície;
2. Área de conteúdo: qualquer componente é aceitável, exceto botões primários e componentes relacionados à navegação, como: carrossel, paginação, aba, menu, etc.

![Exemplo areas](imagens/areas.png)

A seguir, alguns exemplos de possíveis combinações de componentes dentro da área de conteúdo:

![Exemplo areas](imagens/areas-2.png)

---

## Regras para criação de itens

Como já dito anteriormente, itens são componentes básicos para a utilização em outros componentes mais complexos como listas, menus de diversos tipos, _accordions_, etc. Um item isolado faz muito sentido mas quando é utilizado em conjunto repetido com outros itens pode ser muito útil.
A seguir, apresentamos algumas características do componente item.

#### 1. **Largura:**

Os ítens são flexíveis e por isso não possuem dimensões fixas. No entando, é recomendável que todos os itens de um mesmo agrupamento deva possuir a mesma largura.

![Exemplo larguras](imagens/larguras.png)

As alturas dos itens podem ser variáveis entre si porém, isso acarreta uma perda da leitura "escaneada". Portanto, use este recurso com cautela.

![Exemplo larguras](imagens/alturas.png)

**Atenção:** as larguras mínima e máxima dos itens são flexíveis de acordo com o conteúdo e a largura da tela.

#### 2. **Alinhamento e Espaçamento**

Os ítens podem ser alinhados tanto horizontalmente quanto verticalmente e podem apresentar diferentes espaçamentos externos de acordo com a escala de espaçamentos de layout prevista no documento de Fundamentos.

![Exemplo espaçamento](imagens/espacamentos.png)

**Atenção:** é proibido o uso de itens agrupados com espaçamentos variados dentro do mesmo agrupamento.

![Exemplo espaçamento](imagens/espacamentos-faca.png)

#### 3. Margens Internas

Os componentes dentro dos itens devem respeitar as margens internas (_padding_) entre cada um dos lados da superfície, conforme definido no documento de Fundamentos. Somente elementos de mídias (como fotos e ilustrações) podem quando necessário "sangrar".

**Atenção:** para saber mais sobre "sangria" consultar o documento Fundamentos Espaçamento.

---

## Comportamento

Itens possuem diversos comportamentos próprios. A seguir, listamos os mais usuais:

### 1. _Hover_

Um item pode ser interativo. Neste caso, toda a superfície do item é interativa e assume o estado _hover_.

![behavior-interativo](imagens/behavior-interativo.png)

### 2. Elemento Interativo

Um item pode pode conter elementos interativos. Neste caso, apenas estes elementos possuem ação e estado _hover_.

![behavior-interativo](imagens/behavior-elemento-interativo.png)

### 3. Seleção

Um item pode ser selecionável. Quando o usuário clicar em em um item selecionável ele assume o estado selecionado.

![behavior-selecionado](imagens/behavior-selecionado.png)

### 4. Expansão

Um item pode ser expansível. Quando o usuário clicar no botão de expansão outros elementos serão apresentados. A qualquer momento o usuário poderá fechar a expansão.

![behavior-expandido](imagens/behavior-expansivel.png)

### 5. Rotulagem

Um item pode ser rotulado com cores. Quando o usuário clicar no botão de rotulagem as opções de cores serão apresentadas ao usuário.

![behavior-expandido](imagens/behavior-rotulado.png)

**Atenção:** todos os comportamentos apresentados acima são opcionais e podem ser utilizados de forma conjunta, de acordo com a regra de negócio.

---

## Estados

Os itens podem apresentar todos os estados listados abaixo. Para maiores detalhes consultar o documento de Fundamentos.

![behavior-elemento-interativo](imagens/states.png)

---

## Design Tokens

### Cor

| Name       | Property | Color Token            |
| ---------- | -------- | ---------------------- |
| Superfície | color    | `--color-secondary-01` |
