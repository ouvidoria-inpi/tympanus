[version]: # (1.0.4)

![Exemplos de magic button.](imagens/diretriz.png)
*Exemplos do componente _magic button_.*

Use o _magic button_ para iniciar/encerrar fluxos relevantes ou induzir usuários a realizar ações que geram algum tipo de conversão.

---

## Anatomia

1. Superfície de apoio;
2. Superfície;
3. _Label_;
4. Ícone.

![Anatomia do magic button.](imagens/anatomia.png)
*Anatomia do componente _magic button_.*

### Detalhamento dos itens

#### 1- Superfície de apoio

O _magic button_ possui uma superfície de apoio. Esta superfície pode ser entendida como uma moldura, o que confere algumas vantagens ao _magic button_:

- Possui maior robustez que um botão primário.

- Garante contraste e destaque visual em qualquer cor de _background_.

- Possui sombra para indicar que o componente se encontra elevado em relação ao fundo proporcionando mais destaque.

- A superfície de apoio funciona como área de proteção quando o _magic button_ tiver o comportamento flutuante.

#### 2- Superfície

Trata-se da superfície interna do componente e funciona da mesma maneira que a do _button_.

- É apenas permitida superfície no formato redondo ou pílula.

- A única cor possível para a superfície é a indicada pela paleta _highlight_.

#### 3- _Label_

O _label_ do _magic button_ é um pouco mais avantajado que o do _button_, o que lhe ajuda a conferir um peso visual maior.

Utilize estratégicas de "_call-to-action_" para elaborar o texto do _label_. Informe aos usuários qual ação eles realizarão se clicarem no botão. O texto é geralmente **curto**, mas **consistente** de modo que pode rapidamente chamar a atenção dos usuários induzindo à ação.

#### 4- Ícone

Tenha cautela ao escolher o ícone que utilizará no _magic button_ redondo. Dê preferência a ícones já popularmente consagrados e reconhecido pelas pessoas em geral.

![Exemplos de como escolher ícones. A imagem mostra como uma boa prática ícones de carrinho de compra, sino, e câmera fotográfica. Exemplos ruins são ícones de uma folha, um cubo e uma bandeira.](imagens/icone.png)
*Exemplos de boas e más escolhas de ícones.*

**Atenção:** não está proibido o uso de ícone no _magic button_ pílula, no entanto é recomendado o uso apenas de texto curto e direto e que cause grande impacto. Tenha em mente que a mensagem de um _magic button_ deve ser tão clara e direta que não haja a necessidade de ícone para reforçar a mensagem.

![Exemplos de magic button sem e com ícone.](imagens/icone2.png)
*Exemplos de uso de ícone no _magic button_.*

---

## Tipos

Estão previstos dois tipos de _magic buttons_:

1- Formato pílula;
2- Formato redondo.

![Exemplos de magic button sem e com ícone.](imagens/tipos.png)
*Exemplos de uso de ícone no _magic button_.*

---

## Comportamento

### 1. _Magic Button_ x _Button_

_Magic button_ pode ser frequentemente confundido com _buttons_ (_primary_ e _secondary_) e isso dependerá da sua função em um determinado contexto. Tenha em mente que o contexto é fundamental para a correta escolha do botão. Para facilitar o entendimento apresentamos algumas situações de uso visando auxiliar na decisão de qual componente será mais eficiente em cada caso.

#### Use _Magic Button_

- Para atrair a atenção do usuário para uma ação de conversão ou geração de _leads_ (em relação ao serviço como todo).

- Para iniciar e encerrar fluxos relevantes.

- Como botão flutuante de uma ação que deva ser visível independentemente da rolagem de tela.

- Como botão que pela relevância da sua ação precise se destacar dos _buttons_.

#### Use _button_

- Como botão que executa uma ação primária em uma tela dando continuidade à navegação.

- Como botão que executa uma ação secundária (normalmente, em relação a uma ação primária).

- Como um botão pertencente a um componente.

- Como botões que dão continuidade a um fluxo com início e fim determinados por _magic buttons_.

- Para submeter ao servidor informações ordinárias.

- para ações corriqueiras de um serviço.

- para associar páginas ou serviços internos e/ou externos.

**Atenção:** tenha em mente que **o _button_ pode substituir o _magic button_** em todos os contextos porém, o contrário não é permitido.

### 2. Quantidade

_Magic buttons_ são botões exclusivos e por isso não é recomendável a existência de mais de um _magic button_ em uma tela ou fluxo.

**Atenção:** o mais indicado é que haja apenas um único _magic button_ em todo o _site_/aplicativo. Desta forma, fica garantida a exclusividade do componente.

### 3. Posicionamento

Geralmente o _magic button_ está localizado nas áreas nobres da tela (no topo à direita, em baixo à direita ou embaixo no centro) ou ainda flutuando sobre o conteúdo. No entanto, não se trata de uma regra. O designer deve analisar com bom senso a melhor localização para o _magic button_ ter destaque e não ser confundido com outros componentes.

![A imagem ilustra alguns dos mais comuns posicionamentos em telado magic button.](imagens/posicionamento.png)
*Exemplos mais comuns de posicionamento na tela do _magic button_.*

### 4. Densidade

O componente _magic button_ possui as seguintes densidades:

![Exemplos de densidades do componente magic button.](imagens/densidade.png)
*Exemplos de densidades do componente _magic button_.*

### 5. Estados

Os estados possíveis para o _magic button_ são: **_hover_**, **pressionado** e **foco**.

![Exemplos de estados do componente magic button.](imagens/estados.png)
*Exemplos de estados do componente _magic button_.*

**Atenção:** jamais utilize o _magic button_ com estado desabilitado. Se for necessário utilizar um botão que possa se tornar desabilitado então este deve ser um botão primário ou secundário.

### 6. Responsividade

Em larguras de quatro colunas, utilize o _magic button_ no formato pílula ocupando toda a largura disponível da tela.

O formato redondo flutuante funciona muito bem em aplicativos móveis, devida à escassez de espaço na tela.

![Exemplos de uso do componente magic button em responsividade de quatro colunas.](imagens/responsividade.png)
*Exemplos de uso do componente _magic button_ em responsividade de quatro colunas.*

---

## Melhores Práticas

- Tenha em mente que apesar de ser um botão, o _magic button_ tem características especiais e exclusivas no _layout_.

- Por ter forte apelo visual o _magic button_ se presta perfeitamente à função de **_call-to-action_** em um serviço.

- Use textos curtos porém impactantes nos _labels_ dos _magic buttons_.

- O DS não proíbe o uso de _tooltips_ em _magics buttons_, no entanto, tenha em mente que o _label_ ou o ícone do _magic button_ deve ser tão claro e objetivo que não seja necessário o recurso de _tooltips_ para que o usuário possa compreender a ação proposta pelo _magic button_.

- Para conferir maior destaque ao _magic button_ crie uma área de respiro para evitar a competição da atenção do usuário com outros componentes, principalmente _buttons_.

![A imagem apresenta exemplos do uso de áreas de respiro para ambos os tipos de magic button.](imagens/respiro.png)
*Área de respiro para ambos os tipos de _magic button_.*

---

## Especificação

### Alinhamento

|Name|Spacing Token|
|--|:--:|
|Superfície de apoio|`--spacing-vertical-center`|
|Label|`--spacing-vertical-center`|
|Icon|`--spacing-vertical-center`|

### Espaçamento

|Name|Property|Token/Value|
|--|--|:--:|
|Label|marging-right/marging-left|`--spacing-scale-3x`|
|Icon (dens. alta)|marging-left/marging-right|`--spacing-scale-base`|
|Icon (dens. media)|marging-left/marging-right|`--spacing-scale-baseh`|
|Icon (dens. baixa)|marging-left/marging-right|`--spacing-scale-2x`|

### Tipografia

|Name|Property|Token/Value|
|--|--|:--:|
|Label|family|`–-font-family-base`|
|Label|font-weight|`--font-weight-semi-bold`|
|Label|size|`--font-size-scale-up-02`|

### Iconografia

|Name|Property|Token/Value|
|--|--|:--:|
|Ícone|size|`--icon-size-lg`|

### Cores

|Name|Property| Token |
|--|--|:--:|
| Label | color | `--pure-0` |
| Superfície | background | `--green-cool-vivid-50` |
| Superfície de Apoio | background | `--gray-5`  |

### Arredondamento [Formato pílula]

|Name|Property|Value|
|--|--|:--:|
|Superfície (dens. alta)|top-left-bottom-right|`18px`|
|Superfície (dens. media)|top-left-bottom-right|`22px`|
|Superfície (dens. baixa)|top-left-bottom-right|`26px`|
|Superfície de apoio (dens. alta)|top-left-bottom-right|`28px`|
|Superfície de apoio (dens. media)|top-left-bottom-right|`32px`|
|Superfície de apoio (dens. baixa)|top-left-bottom-right|`36px`|

### Arredondamento [Formato redondo]

|Name|Property|Value|
|--|--|:--:|
|Superfície (dens. alta)|top-left-bottom-right|`18px`|
|Superfície (dens. media)|top-left-bottom-right|`22px`|
|Superfície (dens. baixa)|top-left-bottom-right|`28px`|
|Superfície de apoio (dens. alta)|top-left-bottom-right|`28px`|
|Superfície de apoio (dens. media)|top-left-bottom-right|`32px`|
|Superfície de apoio (dens. baixa)|top-left-bottom-right|`36px`|

### Densidade [Superfície]

|Name|Property|Token/Value|
|--|--|:--:|
|Dens. alta|height|`--spacing-scale-4xh`|
|Dens. media|height|`--spacing-scale-5xh`|
|Dens. baixa|height|`--spacing-scale-6xh`|

### Densidade [Superfície de apoio]

|Name|Property|Token/Value|
|--|--|:--:|
|Dens. alta|height|`--spacing-scale-7x`|
|Dens. media|height|`--spacing-scale-8x`|
|Dens. baixa|height|`--spacing-scale-9x`|

### Sombra

|Name|Token Shadow|
|:--:|:--:|
|Superfície de apoio|`--shadow-sm`|
