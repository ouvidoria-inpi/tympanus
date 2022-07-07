[version]: # (1.2.1)

![Exemplo do componente divider.](imagens/diretriz.png)
*Exemplo do componente _divider_.*

Utilize divide quando precisar separar na tela seções de conteúdo ou quando os espaços em branco não forem suficientes para indicar a separação dos elementos ou sessões.

---

## Anatomia

O _divider_ composto pela borda de uma superfície formando uma linha reta.

1. Borda

![Exemplo do componente divider.](imagens/anatomia.png)
*Exemplo do componente _divider_.*

---

## Comportamento

### 1- Posição

O _divider_ pode ser utilizado tanto na posição horizontal quanto na vertical, conforme a necessidade:

![Exemplos de posições do componente divider.](imagens/posicao.png)
*Exemplos de posições do componente _divider_.*

![Exemplos componente divider horizontal.](imagens/exemplo-horizontal.png)
*Exemplo do componente divider horizontal.*

![Exemplos componente divider vertical.](imagens/exemplo-vertical.png)
*Exemplo do componente divider vertical.*

### 2- Fundo

O _divider_ pode ser utilizado em fundos de qualquer cor. A seguir é ilustrado a aplicação do _divider_ em um fundo claro e um fundo escuro:

![Exemplo de aplicação do componente divider em fundo claro e escuro.](imagens/background.png)
*Exemplo de aplicação do componente _divider_ em fundo claro e escuro.*

Alterne as cores do componente nos casos em que o fundo tenha a cor igual ou parecida com a do _divider_ tornando-o imperceptível.

![Exemplo de aplicação do componente divider em fundo cinza.](imagens/background-cinza.png)
*Exemplo de aplicação do componente _divider_ em fundo cinza.*

**Atenção:** evite o uso de cores aleatórias nos _dividers_. Eles foram pensados para funcionar com as cores indicadas neste manual.

### 3- Estados

Dividers são elementos neutros e não interativos. Em hipótese alguma devem se comportar com estados.

### 4- Acessibilidade

O _divider_ deve ser usado como elemento estético representando uma quebra visual entre seções e grupos de conteúdo. Não deve ser interpretado por leitores de tela.

### 5- Responsividade

_Dividers_ são estruturas flexíveis e se adaptam perfeitamente à largura da tela. Por isso, ele pode ser usado sem prejuízo em qualquer resolução.

### 7- Estilos e Espessuras

_Dividers_ podem apresentar estilos e espessuras diferentes seguindo sempre as diretrizes de superfície do Design System.

![Espessuras diferentes.](imagens/espessuras.png)
*Exemplo de espessuras diferentes.*

![Estilos diferentes.](imagens/estilo.png)
*Exemplo de estilo tracejado com espessuras diferentes.*

---

## Melhores Práticas

- Os _divider_ devem ser usados com moderação.

- Os _dividers_ devem ser usados quando os elementos não puderem ser separados por distanciamento (espaços vazios).

![Estilos diferentes.](imagens/uso-correto-muito-espacamento.png)
*Uso correto! O espaçamento já caracteriza a separação dos elementos.*

![Estilos diferentes.](imagens/uso-errado-muito-espacamento.png)
*Uso não recomendado! Como o espaçamento já caracteriza a separação dos elementos não há necessidade de um _divider_.*

![Estilos diferentes.](imagens/uso-correto-pouco-espacamento.png)
*Uso correto! Como o espaçamento é insuficiente, o espaçamento indica a separação entre os elementos.*

- Utilize o _divider_ apenas para separar na tela seções de conteúdo.

- Os _dividers_ devem ser visíveis em um _layout_, porém não devem "destoar" chamando mais atenção que o próprio conteúdo.

![Uso errado do componente divider vertical.](imagens/exemplo-errado-vertical.png)
*Uso errado do componente divider vertical.*

- Não utilize _dividers_ para circundar um item. Prefira bordas.

- Opte por utilizá-los para criar agrupamentos em vez de itens separados.

![Prefira os dividers para separar blocos de conteúdo e não elementos separadamente.](imagens/divider-list.png)
*Na imagem da esquerda o _divider_ é utilizado para separar grupos de conteúdo, isso torna o _layout_ mais limpo e simplificado. Na imagem da direita ele é usado de forma errada, separando cada um dos subitens, tornando o layout confuso e poluído.*

- O componente _divider_ pode "sangrar" (ausência de margens) quando utilizado dentro de outro componente.

![Exemplo ilustrando o comportamento de "sangria" do divider.](imagens/divider-bleed.png)
*O componente _divider_ pode "sangrar" no componente em que está contido. Essa é uma opção de estilo do designer na criação do _layout_ e não possui necessariamente uma regra.*

---

## Especificação

### Cor

|Name|Property|Color Token|
|--|--|:--:|
|_Divider_ (fundo claro)|background|`--gray-20`|
|_Divider_ (fundo escuro)|background|`--pure-0`|

### Espaçamento

|Name|Property|Token/Value|
|--|--|:--:|
|_Divider_ horizontal|top/bottom|`--spacing-scale-2x`|
|_Divider_ vertical|left/right|`--spacing-scale-2x`|
