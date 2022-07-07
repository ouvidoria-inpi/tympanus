[version]: # (1.0.5)

![Exemplo do componente footer.](imagens/footer-type-standard.png)
*Exemplo do componente _footer_.*

O _footer_, deve ser utilizado como um elemento de "fechamento" de conteúdo de página, ajudando o usuário em sua localização e, em muitos casos, auxiliando-o com serviços úteis e informações complementares.

Seu _layout_ pode variar em seu conteúdo, cor e forma dependendo da necessidade do projeto ou do padrão da _grid_ ao qual o _footer_ deverá se adequar.

---

## Tom e voz

O _footer_ deve apresentar um padrão organizacional com _layout_ consistente, previsível e facilmente detectável em todas as páginas do projeto.

---

## Anatomia

O _footer_ é composto por vários elementos visuais e componentes organizados em espaços determinados. É importante notar que **os elementos se repetem nas versões e variações do _footer_**, podendo assumir outras formas dependendo do tipo escolhido ou da resolução da tela.

A seguir, apresentamos os elementos e componentes mais utilizados no _footer_:

1. Logo principal;
2. Mapa do Site (opcional);
3. Contêiner Mapa do Site (opcional);
4. Ícone "expandir";
5. Ícone "retrair";
6. Título "Redes Sociais" (opcional);
7. Botão "Rede Social" (opcional);
8. Logo assinatura (opcional);
9. Contêiner informações legais (opcional);
10. Texto informações legais (opcional);
11. Texto informações legais - destaque (opcional);
12. Contêiner _footer_;
13. Componente _divider_.

_Footer_ _grid_ 12 colunas

![Anatomia do componente footer em grid de doze colunas.](imagens/footer-anatomy-1.png)
*Anatomia do componente _footer_ em _grid_ de 12 colunas.*

_Footer_ _grid_ 8 colunas

![Anatomia do componente footer em grid de oito colunas.](imagens/footer-anatomy-2.png)
*Anatomia do componente _footer_ em _grid_ de 8 colunas.*

_Footer_ _grid_ 4 colunas

![Anatomia do componente footer em grid de quatro colunas.](imagens/footer-anatomy-3.png)
*Anatomia do componente _footer_ em _grid_ de 4 colunas.*

**Atenção:** em caso de necessidade de inserção de novos componentes, a equipe de design responsável pelo _Design System_ deverá ser contactada para a realização de um estudo preliminar.

### Detalhamento das Áreas

O _footer_ é organizado em quatro grandes áreas compostas por vários elementos. Neste tópico, exploraremos cada uma dessas áreas e seus respectivos elementos com mais detalhes:

![Detalhamento das áreas do componente footer.](imagens/footer-structure.png)
*Detalhamento das áreas do componente _footer_.*

#### 1- Área Logo Principal

![Área logo principal.](imagens/footer-logo.png)
*Área logo principal.*

Esta área é destinada à utilização a logo do sistema ou portal, respeitando as alturas e larguras mínimas e máximas definidas na área de _tokens_.

#### 2, 3, 4, e 5 - Área Mapa do _Site_

O mapa do _site_ é formado pela junção de vários componentes _list_. Cada _list_ deverá está inserido na _grid_ utilizando 2, 3, 4, 8 ou 12 colunas, respeitando as definições de espaçamento e alinhamento propostos, mantendo uma melhor organização quanto à responsividade.

**Atenção:** caso o mapa do _site_ apresentado esteja muito extenso, correndo o risco de se tornar pesado e difícil de usar, será necessária a criação de um mapa completo do _site_ em uma página separada e vinculá-lo ao _footer_, que é geralmente onde os usuários esperam encontrar essa informação.

![Exemplo de list usada de duas em duas colunas.](imagens/footer-sitemap.png)
*Exemplo de_ list_ usada de 2 em 2 colunas*

**Atenção:**  o componente _list_, em todos os itens que o compõe, possui a altura definida como comportamento de densidade.

##### Mapa do _Site_ - adição de novas _Lists_

Sempre que houver a necessidade de adicionar novas _lists_, estas deverão ser organizadas abaixo mantendo as especificações de colunas e de espaçamento já definidas nos _tokens_.

![Exemplo de adição de novas lists no footer.](imagens/footer-add-sitemap.png)
*Exemplo de adição de novas _lists_ no _footer_.*

##### Comportamento de expansão de _list_

O mapa do _site_  quando utilizados em _layouts_ com 4 e 8 colunas deve ser apresentado como _lists_ no **"comportamento _list_ expandir"**, devida à limitação de espaço.

Para o _footer_ o "comportamento _list_ expandir" transforma as categorias das _lists_ em _lists_ do _layout_ 12 colunas em _lists_ expansíveis com ação _collapse_. Cada categoria da _list_, quando acionada, apresentará em seu interior os itens da _list_ que a compõe.

Por definição, só deve ser apresentada uma _list_ por vez, ou seja, quando uma categoria com seus itens estiver aberta, automaticamente as outras deverão permanecer fechadas.

![Exemplo do comportamento expandir footer em grid de quatro e oito colunas.](imagens/footer-expand-list.png)
*Exemplo do comportamento expandir em _footer_ de 4 e 8 colunas.*

#### 6, 7 e 8 - Área Informações Secundárias

É formada pela junção das informações referentes às redes sociais e às marcas utilizadas como assinaturas.

![Exemplo de áreas secundárias.](imagens/footer-second_inform.png)
*Exemplos de áreas secundárias.*

##### Redes Sociais

Esta área fornece botões secundários de acesso rápido às redes sociais.

##### Logo Assinatura

Área destinada à apresentação de logos ou siglas que integrem uma empresa ou marcas parceiras que patrocinam ou endossam um evento ou projeto específico.

#### 9, 10 e 11 - Área Informação Legal

Esta área apresenta informações indispensáveis ao sistema ou portal e deve ser utilizado sempre que for necessário.

![Exemplo de áreas de informação legal.](imagens/footer-legal_info.png)
*Exemplos de áreas de informação legal.*

**Atenção:** o componente _list_ possui documentação com suas próprias especificações, no entanto, houve a necessidade de ajustes de cor para se adequar ao _layout_ do componente _footer_. Ver mais detalhes na área de _token_.

---

## Comportamento

### 1- Responsividade

O componente _footer_ deve se comportar de forma fluida em relação à resolução de tela utilizada. A tabela a seguir resume as dimensões  de _footer_ utilizadas referentes à quantidade de _grids_:

Seguem exemplos de _footers_ para cada _grid_ disponível:

![Exemplo de rodapé simples em grid de doze colunas.](imagens/footer-behavior-responsive-simple-grid-12col.png)
*Rodapé simples em _grid_ de 12 colunas.*

![Exemplo de rodapé simples em grid de oito colunas.](imagens/footer-behavior-responsive-simple-grid-8col.png)
*Rodapé simples em _grid_ de 8 colunas.*

![Exemplo de rodapé simples em grid de quatro colunas.](imagens/footer-behavior-responsive-simple-grid-4col.png)
*Rodapé simples em _grid_ de 4 colunas.*

![Exemplo de rodapé complexo em grid de doze colunas (seis lists).](imagens/footer-behavior-responsive-complex-grid-12col-6lists.png)
*Rodapé complexo em _grid_ de 12 colunas (6 _lists_).*

![Exemplo de rodapé complexo em grid de doze colunas (doze lists)](imagens/footer-behavior-responsive-complex-grid-12col-12lists.png)
*Rodapé complexo em _grid_ de 12 colunas (12 _lists_).*

![Exemplo de rodapé complexo em grid de oito colunas.](imagens/footer-behavior-responsive-complex-grid-8col.png)
*Rodapé complexo em _grid_ de 8 colunas.*

![Exemplo de rodapé complexo em grid de quatro colunas.](imagens/footer-behavior-responsive-complex-grid-4col.png)
*Rodapé complexo em _grid_ de 12 colunas (4 _lists_).*

![Exemplo de barra de informação em grid de doze colunas.](imagens/footer-behavior-responsive-simple-info-grid-12col.png)
*Rodapé simples - barra de informação em _grid_ de 12 colunas.*

![Exemplo de barra de informação em grid de oito colunas.](imagens/footer-behavior-responsive-simple-info-grid-8col.png)
*Rodapé simples - barra de informação em _grid_ de 8 colunas.*

![Exemplo de barra de informação em grid de quatro colunas.](imagens/footer-behavior-responsive-simple-info-grid-4col.png)
*Rodapé simples - barra de informação em _grid_ de 4 colunas.*

![Exemplo de barra de informação em grid de doze colunas (seis lists)](imagens/footer-behavior-responsive-complex-info-grid-12col-6lists.png)
*Rodapé complexo - barra de informação em _grid_ de 12 colunas (6 _lists_).*

![Exemplo de barra de informação em grid de doze colunas (doze lists)](imagens/footer-behavior-responsive-complex-info-grid-12col-12lists.png)
*Rodapé complexo - barra de informação em _grid_ de 12 colunas (12 _lists_).*

![Exemplo barra de informação em grid de oito colunas.](imagens/footer-behavior-responsive-complex-info-grid-8col.png)
*Rodapé complexo - barra de informação em _grid_ de 8 colunas.*

![Exemplo barra de informação em grid de quatro colunas.](imagens/footer-behavior-responsive-complex-info-grid-4col.png)
*Rodapé complexo - barra de informação em _grid_ de 4 colunas.*

**Atenção:** mesmo existindo variação na quantidade de _lists_ apresentadas para o _footer_, estes deverão se ajustar à disposição de sua respectiva _grid_.

### 2- Fundo Claro e Fundo Escuro

O _footer_ pode ser utilizado com dois tipos de superfícies distintas: **Fundo Claro** e **Fundo Escuro**.

![Exemplo de footer utilizando o tema 1.](imagens/footer-behavior-theme1.png)
*Exemplo de _footer_ utilizando o fundo escuro.*

![Exemplo de footer utilizando o tema 2.](imagens/footer-behavior-theme2.png)
*Exemplo de _footer_ utilizando o fundo claro.*

### 3- _Layout_ Fluido

Em alguns casos, conforme a necessidade do projeto ou das regras de negócio, os elementos do _footer_ podem apresentar mudanças de alinhamento, afetando desta forma seu _layout_.
Esta organização e composição final deverá sempre respeitar o alinhamento na sua respectiva _grid_.

![Exemplos do comportamento fluido do footer.](imagens/footer-fluidlayout.png)
*Exemplos do comportamento fluido do _footer_.*

---

## Especificação

### Tipografia

|Name|Size|Weight|Outros|
|--|--|--|--|
|Título Redes Sociais|`-–font-size-scale-up-01`|`-–font-weight-bold`|-|
|Texto Informações Legais|`-–font-size-scale-down-01`|`-–font-weight-medium`|-|
|Texto Informações Legais - Destaque|`-–font-size-scale-down-01`|`-–font-weight-extra-bold`|-|
|Texto componente list (categoria)|`-–font-size-scale-down-02`|`--font-weight-semi-bold`|`text-transform:uppercase;`|
|Texto componente list (itens)|`--font-size-scale-base`|`--font-weight-regular`|-|

### Cores

#### _Footer_ Fundo Escuro

|Name|Property|Color Token|
|--|--|--|
|Logo Principal|color|`--pure-0`|
|Texto Componente Lista|color|`--blue-warm-20`|
|Container Componente Lista|background color|`--blue-warm-vivid-90`|
|Ícone Expandir|color|`--blue-warm-20`|
|Ícone Retrair|color|`--blue-warm-20`|
|Título Redes Sociais |color|`--pure-0`|
|Container Informações Legais|background color|`--blue-warm-vivid-90`|
|Logo Assinatura|color|`--pure-0`|
|Texto Informações Legais|color|`--pure-0`|
|Texto Informações Legais - Destaque|color|`--pure-0`|
|Container _Footer_ |background color|`--blue-warm-vivid-90`|

#### _Footer_ Fundo Claro

|Name|Property|Color Token|
|--|--|--|
|Logo Principal|color|`--gray-80`|
|Texto Componente Lista|color|`--blue-warm-vivid-70`|
|Container Componente Lista|background color|`--pure-0`|
|Ícone Expandir|color|`--blue-warm-vivid-70`|
|Ícone Retrair|color|`--blue-warm-vivid-70`|
|Título Redes Sociais |color|`--gray-80`|
|Container Informações Legais|background color|`--pure-0`|
|Logo Assinatura|color|`--gray-80`|
|Texto Informações Legais|color|`--gray-80`|
|Texto Informações Legais - Destaque|color|`--gray-80`|
|Container _Footer_ |background color|`--pure-0`|

### Espaçamentos

#### Sem Informação Legal

|Name|Padding - Property|
|--|--|
|**4 Colunas**|**left** / **right** / **top** / **bottom**|
|Componente Separador|`0px` / `0px` / `0px` / `variável`|
|Logo Principal|`16px` / `variável (grid)` / `48px` / `48px`|
|**8 Colunas**|**left** / **right** / **top** / **bottom**|
|Componente Separador|`0px` / `0px` /`0px` / `variável`|
|Logo Principal|`40px` / `variável (grid)` / `48px` / `48px`|
|Título Redes Sociais|`0px` / `--` / `0px` / `--`|
|Botão Rede Social|`0px` / `16px` / `--` / `0px`|
|Logo Assinatura|`40px` / `0px` / `--` / `0px`|
|**12 Colunas**|**left** / **right** / **top** / **bottom**|
|Componente Separador|`0px` / `0px` / `0px` / `variável`|
|Logo Principal|`40px`  / `--`/ `48px` / `48px`|
|Título Redes Sociais|`0px` / `563px` / `0px` / `--`|
|Botão Rede Social|`0px` / `16px` / `--` / `0px`|
|Logo Assinatura|`40px` / `0px` / `--` / `0px`|

#### Área Informação Legal

|Name|Padding - Property|
|--|--|
|**4 Colunas**|**left** / **right** / **top** / **bottom**|
|Componente Separador|`0px` / `0px` / `0px` / `variável`|
|Texto Informações Legais|`centralizado` / `centralizado` / `centralizado` / `centralizado`|
|**8 Colunas**|**left** / **right** / **top** / **bottom**|
|Componente Separador|`0px` / `0px` / `0px` / `variável`|
|Texto Informações Legais|`centralizado` / `centralizado` / `centralizado` / `centralizado`|
|**12 Colunas**|**left** / **right** / **top** / **bottom**|
|Componente Separador|`0px` / `0px` / `0px` / `variável`|
|Texto Informações Legais|`centralizado` / `centralizado` / `centralizado` / `centralizado`|

### Dimensão

#### Sem Informação Legal

|Name|Property|
|--|--|
|**4 Colunas**|**width** / **height**|
|Componente Divider|`480px` /`1px`|
|Logo Principal e Assinatura - Tam. Mínimo|`102px` / `variável`|
|Logo Principal e Assinatura - Tam. Máximo|`180px` / `variável`|
|Container _Footer_|`480px` / `133px`|
|**8 Colunas**|**width** / **height**|
|Componente Separador|`768px` / `1px`|
|Logo Principal e Assinatura - Tam. Mínimo|`102px` / `variável`|
|Logo Principal e Assinatura - Tam. Máximo|`180px` / `variável`|
|Container Redes Sociais|`688px` / `96px`|
|Container _Footer_|`768px` / `variável (conteúdo)`|
|**12 Colunas**|**width** / **height**|
|Componente Separador|`1280px` / `1px`|
|Logo Principal e Assinatura - Tam. Mínimo|`102px` / `variável`|
|Logo Principal e Assinatura - Tam. Máximo|`180px` / `variável`|
|Container Redes Sociais|`1200px` / `96px`|
|Container _Footer_|`1280px` / `variável (conteúdo)`|

#### Área Informação Legal

|Name|Property|
|--|--|
|**4 Colunas**|**width** / **height**|
|Componente divider|`480px` / `1px`|
|Container Informações Legais|`480px`  / `48px`|
|**8 Colunas**|**width** / **height**|
|Componente Separador|`768px` / `1px`|
|Container Informações Legais|`788px` / `48px`|
|**12 Colunas**|**width** / **height**|
|Componente Separador|`1280px` / `1px`|
|Container Informações Legais|`1280px` / `48px`|
