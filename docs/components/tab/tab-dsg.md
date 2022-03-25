[Version]: # (6.2.5)

![Exemplo de _Tab_](imagens/type-default.png)
*Exemplo de _Tab_*

Utilize as _Tabs_ quando:

- Existir informação disponível em excesso, por página, e houver a necessidade de organizá-la em partes menores, ou seja, Categorias ou Seções;
- For necessário melhorar a usabilidade e organização de conteúdos em tela.

---

## Anatomia

As _Tabs_ são compostas pelos seguintes elementos:

1 - Item da _Tab_ (Obrigatório)
2 - Rótulo da _Tab_ (Opcional)
3 - Superfície da _Tab_ (Obrigatório)
4 - Rótulo Contador (Opcional)
5 - Ícone (Opcional)
6 - Componente _Divider_ (Obrigatório)

![Anatomia das Tabs](imagens/anatomy.png)
*Anatomia das _Tabs_*

### Detalhamento dos itens

#### 1 - Item da _Tab_ (Obrigatório)

O Item da _Tab_ é o elemento obrigatório que poderá conter ícone e informação textual correspondente à categoria ou seção. Seu número é variado dentro do Componente _Tab_ e dependerá da quantidade de seções ou categorias existentes.

É importante ressaltar que este elemento possui dois estados obrigatórios, o ativo e o interativo.

![Item da Tab](imagens/tab-item.png)
*Item da _Tab_*

A - O Item da _Tab_ Ativo tem a finalidade de mostrar ao usuário em qual aba ele se encontra.

B - O Item da _Tab_ Interativo é o estado padrão da _Tab_ e representa as seções ou categorias não ativas.

O tamanho do Item da _Tab_ deverá sempre acompanhar a largura do Rótulo, respeitando os espaçamentos internos. Observe abaixo:

![Rótulo da Tab](imagens/tab-space.png)
*Largura da _Tab_*

#### 2 - Rótulo da_Tab_ (Opcional)

O Rótulo da _Tab_ é a informação textual que representa a categoria ou seção da _Tab_. O Tom e Voz deste elemento deve ser uma informação curta, direta e objetiva. Não é recomendado utilizar textos longos. Deve-se prezar, ao máximo, pelo uso de uma a três palavras.

![Rótulo da Tab](imagens/tab-label.png)
*Rótulo da _Tab_*

#### 3 - Superfície da _Tab_ (Obrigatório)

A Superfície da _Tab_ é um elemento obrigatório e conterá todos os Itens da _Tab_. Em sua base ele contém o Componente Divider, que tem a função de dividir as _Tabs_ e o seu conteúdo. Observe abaixo:

![Superfície da Tab](imagens/container-divider.png)
*Superfície da _Tab_*

**Atenção:** É importante observar, que mesmo se o número de Itens de _Tabs_ somar uma largura menor que a largura da tela, a Superfície da _Tab_ se estenderá até o limite da tela, como visto no exemplo acima.

#### 4 - Rótulo Contador (Opcional)

O Rótulo Contador é um elemento opcional que tem como função exibir a quantidade de referências encontradas em uma _Tab_, como resultado de uma ação de uma pesquisa realizada pelo usuário.

![Rótulo Contador](imagens/counter.png)
*Rótulo Contador*

No exemplo acima, o usuário realizou uma busca por palavra-chave e o Componente _Tabs_ exibe o Rótulo Contador em cada Item de _Tab_. Cada Rótulo Contador exibiu a quantidade de palavras-chave encontradas dentro de cada categoria ou seção.

#### 5 - Ícone (Opcional)

O uso do elemento ícone no ítem da _tab_ é opcional, tendo como função ser uma representação visual da funcionalidade do ítem ao qual ele representa, ilustrando e reforçando a compreensão da sua função pelo usuário.

Na _web_, o ítem da _tab_ quando apresentado sem os seus respectivos rótulos, ou seja, somente com os ícones, deverá este utilizar o recurso de _tooltip_ para que o usuário tenha acesso ao nome do rótulo.

Sobre o _tooltip_, ver especificações em: (<http://dsgov.estaleiro.serpro.gov.br/components/tooltip>)

![Anatomia das Tabs](imagens/type-icons.png)
*Variações do uso de ícone nos Ítens da _Tab_*

### 6 - Componente _Divider_ (Obrigatório)

Componente padrão. Ver especificações em: (<http://dsgov.estaleiro.serpro.gov.br/components/divider>)

---

## Comportamento

### 1 - Responsividade

O Componente _Tab_ deve se adequar à largura da página, estendendo a Superfície da _Tab_ até o limite na extremidade direita. Observe abaixo:

![Grid de 12 Colunas](imagens/behavior-responsive-grid-12-cols.png)
*Grid de 12 Colunas*

Quando o espaçamento lateral for muito reduzido, deverão ficar visíveis apenas o Item da _Tab_ Ativo e os que estiverem próximos a este. Neste caso, haverá navegação através do acesso por _swipe_ dos Itens de _Tab_ ocultos. Consulte maiores detalhes em Comportamento > Navegação por  _swipe_.

É importante observar que este comportamento também ocorre quando o número de Itens de _Tab_ for maior que a largura da tela.

#### Responsividade Interna (Ícone e _Label_)

O componente item, quando apresentado com ícone e label, mudará sua disposição de diagramação, de horizontal para vertical, quando estiver na proporção do grid de 4 colunas, alinhando-os de forma responsiva com a mudança na dimensão e disposição da tela.
![Alinhamento Interno](imagens/behavior-responsive-item.png)
*Posicionamento responsivo interno do componente ítem*

### 2 - Navegação por _Swipe_

A navegação por _swipe_ é uma funcionalidade muito utilizada em dispositivos móveis e é destinado a solucionar problemas de dimensão e responsividade.

É recomendável utilizar essa forma de navegação quando a quantidade de abas exceder a largura da tela ou dispositivo. Nesse caso, ao clicar e arrastar as abas para a direita, todas as _tabs_ se deslocarão para esquerda, exibindo as que estiverem ocultas. O mesmo poderá ser feito em sentido contrário. Observe abaixo:

A - O Componente _Tabs_ se adéqua perfeitamente à tela com espaço excedente;

![Tabs sem a navegação por swipe](imagens/behavior-swipe.png)
*Componente Tabs sem o swipe*

B - O Componente de _Tabs_ é visualizado numa largura reduzida, alinhado à esquerda. Ao arrastar para a direita, os Itens de _Tab_ ocultos deverão ser exibidos;

![Navegação Swipe à direita](imagens/behavior-swipe-1.png)
*Comportamento _swipe_ à direita*

C - Quando o usuário fizer o movimento de _swipe_ ou arrasto no sentido contrário (da esquerda para a direita), deverá ser mostrado novamente as _Tabs_ antes ocultas à esquerda;
![Navegação Swipe à esquerda](imagens/behavior-swipe-2.png)
*Comportamento swipe à esquerda*

Optou-se pelo uso de "sombras" nas laterais onde as _tabs_ estiverem ocultas, facilitando ao usuário, o entendimento da necessidade de se utilizar o recuso de navegação por _swipe_ para exibir o conteúdo parcialmente oculto.

#### Controle _Swipe_ via Teclado

O Componente _Tabs_ poderá ter sua função de _swipe_ controlada por teclado, utilizando as Teclas de Navegação, Seta Esquerda e Seta Direita. A cada clique nas Teclas de Navegação, os Itens da _Tab_ se deslocam para esquerda ou direita na distância de sua própria largura.

Para mais informações ver link (<https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html>)

### 3 - Alinhamento

Os Itens de _Tabs_ devem, por padrão, manter o alinhamento à esquerda na Superfície da _Tab_.

![Alinhamento](imagens/behavior-align.png)
*Alinhamento*

A - Rótulo centralizado no Item de _Tab_;
B - Itens de _Tab_ alinhados à esquerda na Superfície de _Tab_.

### 4 - Densidade

O Componente _Tab_ possui três categorias de densidade:

#### A - Baixa Densidade

Utilize Baixa Densidade quando o projeto de layout permitir mais espaço ou quando houver a necessidade de dar mais destaque ao Componente _Tab_.
![Tab em Baixa Densidade](imagens/behavior-density-low.png)
*_Tab_ em baixa densidade*

#### B - Densidade Padrão

É a forma comum do Componente _Tab_. Oferece um espaçamento interno adequado e equilibrado para várias categorias de projeto.
![Tab em Densidade Padrão](imagens/behavior-density-standard.png)
*_Tab_ em densidade padrão*

#### C - Alta Densidade

Utilize Alta Densidade quando for necessário utiliza-lo em espaços mais restritos, ou dentro de outros elementos.
![Tab em Alta Densidade](imagens/behavior-density-high.png)
*_Tab_ em alta densidade*

---

## Recomendações e Boas Práticas

### _Tabs_ dentro de _Tabs_

Seguindo os Princípios Gerais e Boas Práticas de _Design_ e Usabilidade, é recomendado que **não** se utilize o Componente _Tabs_ dentro de outro Componente _Tabs_. Isto deve-se ao fato de que, quando isto ocorre, o usuário poderá ter sua experiência de navegação confundida, além de aumentar sua sobrecarga cognitiva.

Logo, quando for necessário definir uma nova divisão de categorias em um dos Itens de _Tab_, deve-se recorrer a outro Componente que propicie esta sub-divisão, como, por exemplo, o Componente _List_. Veja os exemplos abaixo:

![Tabs dentro de Tabs](imagens/behavior-tab-inside-tab.png)
*Utilize o componente _list_ dentro de Tab, em vez de _Tabs_ dentro de _Tabs_*

---

## Especificação

### Cores

| Name                             | Property   | Color Token            |
| -------------------------------- | ---------- | ---------------------- |
| Rótulo da _Tab_                  | color      | `--gray-80`            |
| Rótulo da _Tab_ Fundo Escuro     | color      | `--pure-0`             |
| Rótulo Contador                  | color      | `--gray-80`            |
| Rótulo Contador Ativo            | color      | `--blue-warm-vivid-80` |
| Rótulo Contador Fundo Escuro     | color      | `--pure-0`             |
| Item da _Tab_                    | background | `--pure-0`             |
| Item da _Tab_ Fundo Escuro       | background | `--blue-warm-vivid-90` |
| Superfície da _Tab_              | background | `--pure-0`             |
| Superfície da _Tab_ Fundo Escuro | background | `--blue-warm-vivid-90` |
| Ícone                            | color      | `--blue-warm-vivid-90` |
| Ícone Fundo Escuro               | color      | `--pure-0`             |

### Tipografia

| Name                  | Size                      | Weight                    |
| --------------------- | ------------------------- | ------------------------- |
| Rótulo da _Tab_       | `--font-size-scale-up-02` | `--font-weight-medium`    |
| Rótulo Contador       | `--font-size-scale-base`  | `--font-weight-medium`    |
| Rótulo Contador Ativo | `--font-size-scale-base`  | `--font-weight-semi-bold` |

### Borda

| Name                       | Style   | Width                | Color                  | Size     |
| -------------------------- | ------- | -------------------- | ---------------------- | -------- |
| Ítem do _Tab_              | `solid` | `--surface-width-lg` | `--blue-warm-vivid-90` | `bottom` |
| Ítem do _Tab_ Fundo Escuro | `solid` | `--surface-width-lg` | `--pure-0`             | `bottom` |

### Espaçamentos

| Name                           | Property       |           Value           |
| ------------------------------ | -------------- | :-----------------------: |
| Item da _Tab_ Densidade Padrão | padding-left   |   `--spacing-scale-3x`    |
| Item da _Tab_ Densidade Padrão | padding-right  |   `--spacing-scale-3x`    |
| Item da _Tab_ Densidade Padrão | padding-top    |   `--spacing-scale-2x`    |
| Item da _Tab_ Densidade Padrão | padding-bottom |   `--spacing-scale-2x`    |
| Item da _Tab_ Baixa Densidade  | padding-left   |   `--spacing-scale-3x`    |
| Item da _Tab_ Baixa Densidade  | padding-right  |   `--spacing-scale-3x`    |
| Item da _Tab_ Baixa Densidade  | padding-top    |   `--spacing-scale-3x`    |
| Item da _Tab_ Baixa Densidade  | padding-bottom |   `--spacing-scale-3x`    |
| Item da _Tab_ Alta Densidade   | padding-left   |   `--spacing-scale-3x`    |
| Item da _Tab_ Alta Densidade   | padding-right  |   `--spacing-scale-3x`    |
| Item da _Tab_ Alta Densidade   | padding-top    |  `--spacing-scale-base`   |
| Item da _Tab_ Alta Densidade   | padding-bottom |  `--spacing-scale-base`   |
| Superfície da _Tab_            | margin-bottom  |   `--spacing-scale-2x`    |
| Rótulo Contador                | margin-top     |   `--spacing-scale-2x`    |
| Ícone (Disposição Horizontal)  | margin-right   |  `--spacing-scale-base`   |
| Ícone (Disposição Vertical)    | margin-bottom  | `--spacing-scale-default` |
