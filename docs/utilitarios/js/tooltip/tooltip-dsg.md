[version]: # (2.1.3)

![Exemplo de tooltip.](imagens/tooltip-sample.png)
*Exemplo de _tooltip_.*

Utilize o _tooltip_ quando:

- Houver necessidade de agregar mais detalhes de informação a elementos da interface ou qualquer informação já visível na tela;
- Houver necessidade de exibir alguma informação que num primeiro momento não necessita estar visível.

---

## Anatomia

O _Tooltip_ é composto pelos seguintes elementos:

1. Balão flutuante;
2. Seta direcional;
3. Título do _tooltip_ (_opcional_);
4. Conteúdo do _tooltip_;
5. Botão fechar (_opcional_).

![Anatomia do tooltip.](imagens/tooltip-anatomy.png)
*Anatomia do _tooltip_.*

### Detalhamento dos itens

#### 1- Balão flutuante

O balão flutuante é o elemento essencial que conterá todo conteúdo informativo do _tooltip_. Este elemento possui algumas principais  características, como:

- Posicionamento dinâmico;
- Visibilidade dinâmica;
- Flutua sobre todos os outros elementos da interface.

Este também pode ser apresentado com configurações de cores diferenciadas dependendo do contexto. Para mais detalhes, consulte _Comportamento > Estados_,  _Comportamento > Acionamento_.

 ![Balão flutuante.](imagens/tooltip-container.png)
*Balão Flutuante.*

**Atenção:** por se tratar de um elemento flutuante, o _balão_ deverá possuir uma sombra para ressaltar seu aspecto flutuante sobre os elementos da interface. Consulte a especificação da sombra em _Design Tokens_.

#### 2- Seta Direcional

A seta direcional também é um elemento obrigatório do _tooltip_, pois indica o elemento da interface ao qual se refere. A seta poderá aparecer em qualquer um dos lados do _balão flutuante_. Este comportamento serve para melhor ajuste do _tooltip_ em relação à interface. Consulte mais detalhes em _Comportamento > Direção das Setas e Posicionamento do Tooltip_.

 ![Setas direcionais](imagens/tooltip-arrows.png)
*Setas direcionais*

**Atenção:** caso a seta seja utilizada no topo ou na base do balão flutuante, esta deverá permanecer centralizada horizontalmente com o balão flutuante. Caso a seta seja usada nas laterais do balão flutuante, esta deverá permanecer centralizada verticalmente em relação ao balão flutuante.

#### 3- Título do _tooltip_ (Opcional)

O título do _tooltip_ é um elemento opcional. Pode ser utilizado quando houver a necessidade de dar mais ênfase à informação apresentada. Nunca deve ser utilizado sozinho como texto informativo, pois caso haja esta necessidade, deve-se utilizar o texto informativo.

A- Texto Informativo, exibição padrão;
B- _Texto Informativo_ com título do _tooltip_ (_opcional_).

![Título do tooltip e texto informativo.](imagens/tooltip-title.png)
*Título do _tooltip_ x texto informativo.*

#### 4- Conteúdo do Tooltip

O conteúdo do _tooltip_ por obrigatoriedade deverá sempre apresentar o texto informativo como padrão.

![Conteúdo do tooltip.](imagens/tooltip-type-default.png)
*Conteúdo do _tooltip_.*

Porém, caso seja necessário um conteúdo mais elaborado, pode-se utilizar recursos interativos como botões, _links_ ou elementos gráficos, como imagens e ícones. Também pode-se utilizar uma formatação de texto mais rica, com _bold_ e itálico, assim como alinhamentos de texto variados. Esse tipo de conteúdo é opcional.

- A- O conteúdo do _tooltip_ padrão é o texto informativo;

- B- Pode-se utilizar um conteúdo opcional mais rico, como por exemplo, botões, ícones, _links_, imagens e texto.

![Conteúdo do tooltip.](imagens/tooltip-content.png)
*Conteúdo do _tooltip_.*

#### 5 - Botão Fechar (Opcional)

Este elemento é o componente botão terciário de densidade alta. É opcional e pode ser utilizado conforme o comportamento de fechamento definido.

- A- O botão fechar é posicionado no canto superior direito do balão flutuante.

- B- O botão fechar é opcional.

![Botão fechar.](imagens/tooltip-icon-close.png)
*Botão fechar.*

Consulte: _Comportamento > Fechamento do Tooltip_ para mais informações.

---

## Comportamento

### 1- Responsividade

O comportamento responsivo no componente _tooltip_ é invariável, com relação às suas dimensões, pois é sempre exibido de forma flutuante sobre a tela e com posicionamento dinâmico. Logo, as dimensões da tela não afetam sua forma característica. Observe os exemplos nas _grids_ de 12 e 8 colunas:

![Grid de 12 colunas.](imagens/tooltip-behavior-grid-12-cols.png)
*_Grid_ de 12 colunas.*

![Grid de 8 colunas.](imagens/tooltip-behavior-responsive-grid-8-cols.png)
*_Grid_ de 8 colunas.*

#### _Grids_ de 4 Colunas

Na _grid_ de 4 colunas, o _tooltip_ também não sofre alterações sobre sua aparência ou dimensões, porém existem restrições a respeito do seu acionamento. Por não haver evento _mouse over_ em dispositivos móveis, o _tooltip_ terá seu acionamento restrito apenas ao clique ou foco. Observe abaixo:

- A- Acionamento por clique;
- B- Acionamento por foco.

![Grid de 4 colunas.](imagens/tooltip-behavior-responsive-grid-4-cols.png)
*_Grid_ de 4 colunas - características inalteradas.*

![Grid de 4 colunas.](imagens/tooltip-behavior-responsive-grid-4-cols-start.png)
*_Grid_ de 4 colunas - acionamento restrito ao clique, foco ou automático.*

### 2- Direção das setas e posicionamento do _tooltip_

Por princípio, a seta do _tooltip_ deverá estar apontada ao elemento ao qual ser refere e o _tooltip_ posicionado próximo a este elemento. Por padrão, o _tooltip_ será localizado no topo do elemento ao qual se refere. Observe abaixo.

![Posicionamento do tooltip padrão.](imagens/tooltip-behavior-position.png)
*Posicionamento do _tooltip_ padrão no topo do elemento.*

Contudo, o posicionamento do _tooltip_ em relação ao elemento poderá variar conforme a necessidade. Ou seja, estar posicionado no topo, em embaixo, à direita ou à esquerda, conforme for melhor para a disposição dos elementos em tela.

![Posicionamento do tooltip variado.](imagens/tooltip-behavior-position-2.png)
*Variados posicionamentos do _tooltip_.*

Com relação aos limites da tela, o _tooltip_ deverá ser posicionado de forma que a exibição de seu conteúdo não seja afetada, nem ultrapasse os limites da tela.

- A- Caso o elemento esteja próximo ao topo da tela, o _tooltip_ deverá aparecer abaixo do elemento;
- B- Caso o elemento esteja próximo à base da tela, o _tooltip_ deverá aparecer acima do elemento;
- C- Caso o elemento esteja próximo à lateral esquerda da tela, o _tooltip_ deverá aparecer à direita do elemento;
- D- Caso o elemento esteja próximo à lateral direita da tela, o _tooltip_ deverá aparecer à esquerda do elemento;

![Posicionamento e limites da tela.](imagens/tooltip-behavior-directions.png)
*Posicionamento e limites da tela.*

### 3- Acionamento do Tooltip

O _tooltip_ poderá ser configurado para ser acionado por meio dos seguintes eventos:

- A- **_Mouse Over_:** quando o usuário passar o _mouse_ sobre o elemento;
- B- **Clique:** quando o usuário clicar no elemento;
- C- **Foco:** quando o foco for acionado sobre o elemento;
- D- **Automaticamente:** quando for programado pelo sistema a aparecer em determinada situação.

![Acionamento do tooltip.](imagens/tooltip-behavior-start.png)
*Acionamento do _tooltip_.*

### 4- Fechamento do _tooltip_

O _tooltip_ poderá ser configurado para ser ocultado através dos seguintes eventos:

- A- **Mouse Out:** quando o usuário retirar o _Mouse_ sobre o elemento;
- B- **Clique no botão fechar**;
- C- **Por Tempo Determinado:** quando for programado pelo sistema a ser ocultado depois de um tempo predefinido.

![Fechamento do tooltip.](imagens/tooltip-behavior-hide.png)
*Fechamento do _tooltip_.*

### 5- Largura do _tooltip_ x Conteúdo interno

A dinâmica do _tooltip_ é que ele cresça na largura em decorrência do crescimento de seu conteúdo interno. Porém, deve-se prezar pela boa prática de utilizar um conteúdo textual curto e objetivo.

- A- Largura mínima ajustável ao texto;
- B- Largura ajustável ao texto.

![Largura do tooltip.](imagens/tooltip-behavior-text-size.png)
*Largura do _tooltip_.*

- A- Altura e largura ajustáveis ao conteúdo;
- B- Altura e largura ajustáveis ao conteúdo.

![Altura e largura do tooltip.](imagens/tooltip-size-2.png)
*Altura e alrgura do _tooltip_.*

### 6- Estados

O componente _tooltip_ pode ser apresentado nos seguintes estados:

#### Estado Informativo

É o estado padrão de utilização do _tooltip_. Deve ser usado quando o objetivo da mensagem for uma informação neutra.

![Estado informativo.](imagens/tooltip-state-info.png)
*Estado informativo.*

![Estado informativo no fundo escuro.](imagens/tooltip-state-info-dark.png)
*Estado informativo no fundo escuro.*

#### Estado Sucesso

Deve ser usado quando o objetivo da mensagem for transmitir uma ideia de finalização de tarefa/passo ou conclusão bem sucedida.

![Estado sucesso.](imagens/tooltip-state-success.png)
*Estado sucesso.*

![Estado sucesso no fundo escuro.](imagens/tooltip-state-success-dark.png)
*Estado sucesso no fundo escuro.*

#### Estado Alerta

Deve ser usado quando o objetivo da mensagem for transmitir uma ideia de advertência ao usuário. Geralmente, uma mensagem que alerte o usuário a evitar erros.

![Estado alerta.](imagens/tooltip-state-alert.png)
*Estado alerta.*

![Estado Alerta np fundo escuro.](imagens/tooltip-state-alert-dark.png)
*Estado alerta no fundo escuro.*

#### Estado Erro

Deve ser usado quando o objetivo da mensagem for transmitir um alerta de erro por parte do sistema ou por parte do usuário.

![Estado erro.](imagens/tooltip-state-danger.png)
*Estado erro.*

![Estado erro no fundo escuro.](imagens/tooltip-state-danger-dark.png)
*Estado erro no fundo escuro.*

---

## Especificação

### Cores

#### Estado Informativo

| Name              | Property   | Color Token            |
| ----------------- | ---------- | ---------------------- |
| Balão Flutuante   | background | `--blue-warm-vivid-60` |
| Seta Direcional   | background | `--blue-warm-vivid-60` |
| Título do Tooltip | color      | `--pure-0`             |
| Texto Informativo | color      | `--pure-0`             |
| Botão Fechar      | color      | `--pure-0`             |

#### Estado Sucesso

| Name              | Property   | Color Token             |
| ----------------- | ---------- | ----------------------- |
| Balão Flutuante   | background | `--green-cool-vivid-50` |
| Seta Direcional   | background | `--green-cool-vivid-50` |
| Título do Tooltip | color      | `--pure-0`              |
| Texto Informativo | color      | `--pure-0`              |
| Botão Fechar      | color      | `--pure-0`              |

#### Estado Alerta

| Name              | Property   | Color Token         |
| ----------------- | ---------- | ------------------- |
| Balão Flutuante   | background | `--yellow-vivid-20` |
| Seta Direcional   | background | `--yellow-vivid-20` |
| Título do Tooltip | color      | `--gray-80`         |
| Texto Informativo | color      | `--gray-80`         |
| Botão Fechar      | color      | `--gray-80`         |

#### Estado Erro

| Name              | Property   | Color Token      |
| ----------------- | ---------- | ---------------- |
| Balão Flutuante   | background | `--red-vivid-50` |
| Seta Direcional   | background | `--red-vivid-50` |
| Título do Tooltip | color      | `--pure-0`       |
| Texto Informativo | color      | `--pure-0`       |
| Botão Fechar      | color      | `--pure-0`       |

### Tipografia

| Name              | Size                        | Weight                    |
| ----------------- | --------------------------- | ------------------------- |
| Título do Tooltip | `--font-size-scale-base`    | `--font-weight-semi-bold` |
| Texto Informativo | `--font-size-scale-down-01` | `--font-weight-regular`   |

### Iconografia

| Name         | Ícone                     | Token Size       | Class (Font Awesome) |
| ------------ | ------------------------- | ---------------- | -------------------- |
| Botão Fechar | <i class="fas times"></i> | `--icon-size-xs` | `times`              |

### Dimensões

| Name            | Property |   Value    |
| --------------- | -------- | :--------: |
| Balão Flutuante | Width    | `variável` |
| Balão Flutuante | Height   | `variável` |
| Seta Direcional | Width    |   `16px`   |
| Seta Direcional | Height   |   `8px`    |

### Espaçamentos

| Name              | Property       |         Value          |
| ----------------- | -------------- | :--------------------: |
| Balão Flutuante   | padding-top    |  `--spacing-scale-2x`  |
| Balão Flutuante   | padding-bottom |  `--spacing-scale-2x`  |
| Balão Flutuante   | padding-left   |  `--spacing-scale-3x`  |
| Balão Flutuante   | padding-right  |  `--spacing-scale-3x`  |
| Título do Tooltip | margin-bottom  | `--spacing-scale-half` |
| Texto Informativo | margin-top     | `--spacing-scale-half` |
| Botão Fechar      | margin-top     | `--spacing-scale-half` |
| Botão Fechar      | margin-right   | `--spacing-scale-half` |
| Botão Fechar      | margin-left    | `--spacing-scale-half` |

### Sombra

| Name            |        Token        |
| --------------- | :-----------------: |
| Balão Flutuante |    `--shadow-xl`    |
| Balão Flutuante | `--shadow-xl-right` |
