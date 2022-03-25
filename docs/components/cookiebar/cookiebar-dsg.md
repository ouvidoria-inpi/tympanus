[version]: # (2.1.7)

![Exemplo do componente cookieBar.](imagens/diretriz-lgpd-optout.png)
*Exemplo do componente _cookieBar_.*

Trata-se de um componente obrigatório  em _sites_ e aplicativos que fazem a coleta de qualquer dado do usuário e deve ser utilizado na tela inicial ficando sempre visível, até que o usuário dê o consentimento ou revogue o tratamento dos dados.

[Confira o texto oficial da lei nº 13.709/18](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm)

![Gráfico extraído do portal do serpro representando os principais pontos tratados pela lei nº 13.709/18. ](imagens/infografico.jpg)
*Infográfico com resumo dos pontos mais importantes da lei nº 13.709/18, extraído do [Portal do Serpro](https://serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd).*

---

## Tom e voz

Apesar de tratar de um tema bastante técnico procure ser o mais claro e objetivo possível. Utilize vocabulário e termos simples e de fácil entendimento por leigos. Lembre-se que seu usuário não é obrigado a compreender expressões específicas restritas a áreas técnicas.

---

## Anatomia

Tenha em mente que o _cookieBar_ é um componente único, no entanto, para facilitar a explicação este guia o divide em duas etapas:

- **_CookieBar default_**: etapa em que o usuário se encontra na tela inicial;
- **_CookieBar_ aberto**: etapa em que o usuário interage com o botão "Definir Cookies" ou "Ver Política de Cookies".

A- Área de conteúdo global;
B- Área de conteúdo introdutório;
C- Área de conteúdo principal;
D- Área de conteúdo complementar;
E- Área de ação;

1- Superfície;
2- Botão primário;
3- Botão secundário;
4- Superfície _scrim_ sobre a tela inicial (_opcional_);
5- Título principal;
6- Informação sobre atualização;
7- Texto introdutório;
8- Botão terciário fechar;
9- Título da lista de classes de _cookies_;
10- Nome da classe do _cookie_;
11- Descrição da classe do _cookie_;
12- _Checkbox_ para ativação/desativação de todos os _cookies_;
13- Botão terciário para abertura/fechamento da classe do _cookie_;
14- Aviso _opt in_;
15- _Checkboxes_ para ativação/desativação de classes de _cookies_;
16- _Card_;
17- _Switch_ para ativação/desativação de _cookie_ específico;
18- Mensagem do sistema;
19- _Link_ para mais informações.

![Anatomia da etapa cookiebar default.](imagens/anatomia-cookiebar-default.png)
*Anatomia da etapa _cookieBar default_.*

![Anatomia da etapa cookiebar aberto.](imagens/anatomia-openbar1.png)
*Exemplo da etapa _cookieBar_ aberto.*

---

## Detalhamento dos Itens

### A- Área de conteúdo global

Na etapa _cookieBar default_ a área de conteúdo global se limita a um texto descritivo informando que os dados do usuário serão gravados por meio de _cookies_, assim como os respectivos benefícios para uma melhor experiência de navegação. É fundamental que este texto seja claro e direto e informe que os dados do usuário poderão ser gravados mesmo que não seja aceito a política de _cookies_. Além disso, algumas funcionalidades poderão não funcionar corretamente prejudicando a experiência de navegação como um todo.

Na etapa _cookieBar_ aberto, o conteúdo deve ser mais amplo e detalhado e é dividido em três subáreas:

**B- Conteúdo introdutório:**
Trata de informações a respeito do título da tela, última atualização do conteúdo e um breve texto introdutório.

**C- Conteúdo principal:**
Trata do conteúdo principal com informações sobre os _cookies_ utilizados e possibilidades de configurá-los, quando se tratar de _opt out_.

**D- Conteúdo complementar:**
Conteúdo opcional que, quando existir, deve oferecer _links_ para conteúdos externos que complementam o entendimento do usuário.

### E- Área de ação

Esta área disponibiliza botões de ação.

- **Quando _opt in_**: deve conter os botões **"Ver Política de Cookies"** e **"Aceitar"**;
- **Quando _opt out_**: deve conter os botões **"Definir Cookies"** e **"Aceitar"**.

![A imagem mostra duas áreas de ação: a primeira com cookiebar opt in com os botões "ver política de cookie" e o botão "aceitar. A segunda com o cookiebar optout e os botões "definir cookies" e "aceitar".](imagens/anatomia-area-acao.png)
*Anatomia da área de ação para os casos _opt in_ e _opt out_ com seus respectivos botões.*

### 16- _Cards_

Os _cards_ devem apresentar as informações detalhadas de cada um dos _cookies_.

- **Quando _opt in_**: O _card_ deve apresentar apenas informações não interativas.
- **Quando _opt out_**: O _card_ deve apresentar, além das informações não interativas, _switches_ para que os usuários possam configurar os _cookies_.

![A imagem mostra dois cards: no primeiro só há conteúdo texto. No segundo, além de texto, há switch para interação.](imagens/anatomia-card.png)
*Anatomia de _cards_ para os casos _opt in_ e _opt out_.*

---

## Comportamento

### 1- _Opt In_ e _Opt Out_

Pensando em toda complexidade e cenários existentes, o componente foi desenvolvido de forma ser o mais flexível possível para tratar desde serviços que estão **_opt in_** como **_opt out_**.

1- É recomendável sempre que possível a utilização do padrão **_opt out_**. Nesse caso o _cookieBar_ deve apresentar os botões: **Definir _Cookies_** e **Aceitar**.

- Ao acionar o botão **Aceitar**, o usuário informa ao sistema que aceita a configuração padrão de _cookies_ pré-definida pelo sistema. O _cookieBar_ é então recolhido com um movimento para baixo (micro interação) e o usuário está pronto para navegar pelo _site_.
- Ao acionar o botão **"Definir Cookies"** o usuário é levado à etapa _cookieBar_ aberto e tem a possibilidade de configurar os _cookies_ conforme o seu desejo, além de ter acesso às informações técnicas a respeito dos _cookies_ utilizados pelo sistema.

2- Já na configuração **_opt  in_** o usuário não tem permissão para definir _cookies_ e por isso o botão **Definir _Cookies_** é alterado para **Ver Política de _Cookies_**. Ao acionar este botão o usuário tem acesso às mesmas informações do padrão _opt out_, porém sem a possibilidade de alterar _cookies_.

### Navegação no _CookieBar default_

O  _cookieBar na etapa default_ deve ser disponibilizado sempre no primeiro acesso do usuário na tela inicial do _site_/aplicativo e pode apresentar duas versões distintas: _opt in_ e _opt out_:

![Exemplo de um cookieBar default na versão opt in.](imagens/diretriz-lgpd-optin.png)
*Exemplo de _cookieBar default_ na versão _opt in_.*

![Exemplo de um cookieBar default na versão opt out.](imagens/diretriz-lgpd-optout.png)
*Exemplo de _cookieBar default_ na versão _opt out_.*

O _cookieBar default_ só é apresentado no primeiro acesso do usuário e só pode ser fechado se o usuário aceitar os termos definidos pelo texto apresentado. A partir de então os dados são armazenados pelo sistema e o _cookieBar_ não estará mais disponível ao usuário. Caso o usuário deseje redefinir os _cookies_ poderá fazê-lo por meio de um item de menu localizado no _header_ do _site_/aplicativo (ou outro local de destaque).

**Atenção:** quando o componente _cookieBar default_ é apresentado, o conteúdo da tela pode estar bloqueado. Esse comportamento é opcional é varia de acordo com cada regra de negócio. Quando estiver bloqueado, utilize uma camada de superfície transparente (_scrim_) para demonstrar que não é possível navegar enquanto não houver a concordância com a política de _cookies_ apresentada pelo _cookieBar default_.

![Exemplo da tela inicial com conteúdo bloqueado pelo scrim e com cookieBar default](imagens/scrim.png)
*Exemplo da tela inicial com conteúdo bloqueado (_scrim_) pelo _cookieBar default_.*

Se o usuário clicar em **"Definir Cookies"** o _cookieBar default_ se expande para cima cobrindo inteiramente a tela (micro interação) passando então para a etapa _cookieBar_ aberto.

![Exemplo do cookieBar default na tela inicial e aberto, após o usuário clicar em Definir Cookies.](imagens/lgpd-inicial.png)
*A imagem da esquerda ilustra o _cookieBar default_ na tela inicial e a imagem da direita, o _cookieBar_ aberto, após o usuário acionar no botão "Definir Cookies".*

### Navegação no _cookieBar_ aberto

Esta etapa deve apresentar tudo o que o usuário necessita para entender como cada _cookie_ funciona além de permitir, nos casos _opt out_, que o usuário possa configurar as preferências de _cookies_ da maneira que preferir.

#### Classes

Quando houver grupos de _cookies_ que apresentem algum tipo de relação entre si eles poderão ser agrupados em **classes**. Cada classe exibe entre parênteses a quantidade de _cookies_ que contem. Para expandir uma classe e ter acesso a cada um dos _cookies_ basta clicar na seta correspondente à classe desejada.

**Atenção:** agrupar os _cookies_ por afinidades é uma boa maneira de organizar o conteúdo mas cada produto pode estruturar a informação da forma que achar mais apropriada.

A figura 1 ilustra o caso em que só é permitida ao usuário a seleção de _checkbox_ para toda a classes. Já na figura 2 é possível selecionar cada _cookie_ individualmente por meio de _switches_.

![Esta imagem apresenta duas figuras: a figura um ilustra o caso em que ao usuário só é permitida a seleção de cookies por classes. Já na figura dois é possível selecionar cada cookie individualmente.](imagens/switches.png)
*Exemplos das possibilidades de uso dos _switches_.*

**Atenção:** geralmente o usuário ativa/desativa a classe de _cookies_, mas também é possível definir _cookies_ individualmente, conforme a necessidade de cada caso. Há também a possibilidade de o usuário selecionar/deselecionar todas as classes por meio de um _checkbox_ localizado no _header_ da lista de _cookies_. Entre parêntese é possível informar ao usuário quantos _cookies_ foram selecionados em relação ao total.

![Exemplo de uso de seleção de checkbox no modo intermediário.](imagens/checkbox.png)
*Exemplos das possibilidades de uso dos _checkboxes_ apresentando a possibilidade do _checkbox_ em um modo intermediário e a informação da quantidade de _cookies_ selecionados.*

Desta forma, cada classe pode ser ativada ou desativada conforme a preferência do usuário. Podem ainda existir classes marcadas com o texto **"Sempre ativos"** na cor verde. Isso significa que essas classes não podem ser desativadas por motivos de performance do sistema e neste caso, não haverá _checkbox_ para o usuário interagir.

![Exemplo de tela com o cookieBar aberto apresentando a lista de classes de cookies.](imagens/lgpd-openbar.png)
*Exemplo de tela com o _cookieBar_ aberto apresentando a lista de classes de _cookies_.*

#### _Card_

Ao clicar no ícone seta de qualquer uma das classes de _cookies_ a mesma é aberta e detalhes sobre cada _cookie_ são apresentados ao usuário em _cards_. Cada _cookie_ pode apresentar um _switch_ para abilitá-lo ou não, conforme a natureza do _cookie_.

![Exemplo de uma classe de cookies aberta mostrando os detalhes do cookie em um card.](imagens/lgpd-grupo.png)
*Exemplo de uma classe de _cookies_ aberta mostrando os detalhes do _cookie_ em um _card_.*

**Atenção:** cada _cookie_ deve ser mostrado individualmente em um _card_. As informações descritivas sobre cada _cookie_ são de responsabilidade do Órgão responsável pelo _site/aplicativo_.

#### Aviso sobre _cookies_

O último item da lista é o **Aviso sobre _cookies_**. Nesse item o usuário encontra apenas informações textuais em forma de pergunta-respostas, de acordo com a imagem abaixo:

![Exemplo da tela de conteúdo com o item informações rápida sobre assuntos gerais aberto.](imagens/lgpd-cookies-aviso.png)
*Exemplo de informações rápida sobre assuntos gerais.*

**Atenção:** o padrão de pergunta-respostas é amplamente aceito na internet por ser uma forma rápida e objetiva de transmitir informação e por isso é bastante recomendável. Porém, o conteudista é sempre livre para criar o conteúdo da maneira que for mais interessante para seu negócio.

#### Botão fechar

A qualquer momento, independentemente de haver definido os _cookies_ ou não, é possível fechar a tela de conteúdo. Para tanto, basta clicar no ícone fechar no topo à direita da tela. Após confirmar a ação de fechamento, o usuário retornará à tela inicial do _site_/aplicativo com o _cookieBar default_ sendo apresentado ao usuário.

![Imagem detalhando a localização do botão de fechamento da tela de conteúdo do cookieBar aberto.](imagens/lgpd-fechar.png)
*Para fechar a tela de conteúdo do _cookieBar_ basta clicar no ícone fechar no canto superior direito.*

**Atenção:** lembre-se que ao fechar o _cookieBar_ sem aceitar a política de _cookie_ o usuário poderá ter uma navegação comprometida (ou mesmo bloqueada, dependendo do caso) e ainda assim seus dados poderão ser gravados. **Deixe essa informação de forma explícita no texto da área de conteúdo do _cookieBar default_.**

É interessante que o sistema apesente uma mensagem ao usuário informando que os _cookies_ não foram efetivamente salvos e que caso tenha sido feita algumas seleções, elas serão perdidas. Além disso, é de bom tom informar ao usuário como é possível retornar ao _cookieBar_ para configurar ou reconfigurar os _cookies_.

![Exemplo de mensagem global do sistema informando que os cookies não foram salvos.](imagens/mensagem.png)
*Exemplo de mensagem global do sistema alertando ao usuário que um os _cookies_ selecionados não foram salvos.*

### Mensagens

Caso o usuário desabilite um _cookie_ essencial que comprometa a experiência de navegação um aviso deve ser apresentado e desta forma o usuário poderá decidir se manterá a sua escolha.
Esta mensagem deve ser exibida logo abaixo do _checkbox_ ou _switch_ correspondente ao clique do usuário, de acordo com as imagens a seguir:

![Exemplo de mensagem ao desabilitar um cookie essencial para a performance do site/aplicativo no nível global.](imagens/lgpd-message.png)
*Exemplo de mensagem alertando ao usuário que um _cookie_ desabilitado é essencial para um bom funcionamento do serviço em nível global.*

![Exemplo de mensagem  ao desabilitar um cookie essencial para a performance do site/aplicativo no nível da classe.](imagens/lgpd-message2.png)
*Exemplo de mensagem alertando ao usuário que um _cookie_ desabilitado é essencial para um bom funcionamento do serviço em nível da classe.*

![Exemplo de mensagem ao desabilitar um cookie essencial para a performance do site/aplicativo em nível do cookie.](imagens/lgpd-message3.png)
*Exemplo de mensagem do sistema alertando ao usuário que um _cookie_ desabilitado é essencial para um bom funcionamento do serviço em nível do _cookie_.*

**Atenção:** se o padrão adotado for o **_opt in_** o usuário apenas poderá visualizar as informações disponíveis mas não haverá componentes _checkboxes_ e _switches_ para que os _cookies_ possam ser alterados. Lembre-se de deixar essa informação clara no texto da área de conteúdo introdutório.

### Responsividade

Tudo o que é mencionado sobre o uso do _cookieBar_ neste documento deve ser considerado para todas as resoluções. O componente _cookieBar_ e todo o conteúdo devem se adaptar à qualquer resolução. A seguir, é ilustrado como exemplo os _layouts_ deste componente na resolução de quatro colunas:

![Exemplo de fluxo de telas mostrando como fica aplicação do componente cookieBar em resolução de quatro colunas.](imagens/lgpd-mobile.png)
*Exemplo de aplicação do componente _cookieBar_ em resolução de quatro colunas.*

---

## Melhores Práticas

- O _cookieBar_ é **obrigatório** em todos os produtos do Governo que necessitem coletar/tratar dados dos usuários e garante o consentimento do usuário para o uso de _cookies_ na sua experiência de navegação.

- Prefira sempre que possível utilizar o padrão **_opt out_** que dá autonomia para o usuário decidir sobre a coleta/tratamento de seus dados. Somente utilize o padrão **_opt in_** em casos restritos.

- O conteúdo do _cookieBar_ é de responsabilidade de cada serviço. Esteja atento para abordar todos os aspectos legais e técnicos.

- **Lembre-se:** o usuário poderá ter a navegação bloqueada ou autorizada mesmo que não aceite a política de _cookies_ do _site_. Neste último caso, ele pode ter seus dados gravados mesmo assim além de ter um prejuízo na experiência de navegação. É muito importante que essa informação esteja escrita de forma muito clara no texto do _cookieBar default_.

- É uma ótima ideia oferecer _links_ para detalhamentos legais.

- É interessante pensar na possibilidade de oferecer suporte para o usuário entrar em contato caso necessite tirar algum tipo de dúvida.

- Caso haja uma alteração na política de _cookies_ após o usuário já houver definido as suas escolhas, o _cookieBar_ deverá ser apresentado novamente com o texto explicando o motivo a solicitação de nova ação por parte do usuário. Todo o procedimento é idêntico ao já explicado neste documento.

---

## Especificação

### Cores

| Name               | Property |          Token          |
| ------------------ | -------- | :---------------------: |
| Texto Sempre Ativo | color    | `--green-cool-vivid-50` |

### Alinhamento

| Name                                            |         Spacing Token         |
| ----------------------------------------------- | :---------------------------: |
| Botão primário e secundário (cookieBar default) | `--spacing-horizontal-right`  |
| Botão primário (cookieBar aberto)               | `--spacing-horizontal-right`  |
| Text (cookieBar default)                        |  `--spacing-horizontal-left`  |
| Conteúdo                                        | `--spacing-horizontal-center` |
| Botão terciário (Declaração de Conformidade)    | `--spacing-horizontal-center` |
| Switch (Header)                                 | `--spacing-horizontal-right`  |
| Mensagem                                        |  `--spacing-vertical-right`   |

### Espaçamento

| Name                                         | Property                   |      Token/Value       |
| -------------------------------------------- | -------------------------- | :--------------------: |
| Botão primário (cookie default)              | margin-right               |  `--spacing-scale-5x`  |
| Botão primário (cookie default)              | margin-down                |  `--spacing-scale-3x`  |
| Botão primário (cookie aberta)               | margin-right               |  `--spacing-scale-5x`  |
| Botão primário (cookie aberto)               | margin-top/down            | `--spacing-scale-2xh`  |
| Text (cookieBar default)                     | margin-top                 | `--spacing-scale-3xh`  |
| Conteúdo                                     | margin-left/right/top/down |  `--spacing-scale-5x`  |
| Botão terciário (Declaração de Conformidade) | margin-top/down            |  `--spacing-scale-5x`  |
| Switch (Header)                              | margin-top/down            |  `--spacing-scale-6x`  |
| Mensagem                                     | margin-top/down            | `--spacing-scale-base` |

### Tipografia

| Name                                        | Property    |        Token/Value         |
| ------------------------------------------- | ----------- | :------------------------: |
| Text (cookieBar default)                    | size        |  `––font-size-scale-base`  |
| Text (cookieBar default)                    | font-weight |  `--font-weight-regular`   |
| Text (cookieBar default)                    | line-height | `-–font-lineheight-medium` |
| Text título (cookBar aberto)                | size        | `--font-size-scale-up-06`  |
| Text título (cookieBar default)             | font-weight |  `--font-weight-regular`   |
| Text última atualização (cookBar aberto)    | size        | `--font-size-scale-up-01`  |
| Text última atualização (cookieBar default) | font-weight | `--font-weight-semi-bold`  |
| Text conteúdo (cookBar aberto)              | size        |  `--font-size-scale-base`  |
| Text conteúdo (cookieBar default)           | font-weight |  `--font-weight-regular`   |
| Text (Sempre ativo)                         | size        |  `––font-size-scale-base`  |
| Text (Sempre ativo)                         | font-weight | `--font-weight-semi-bold`  |
| Text (Sempre ativo)                         | color       |    `--color-highlight`     |
| Text col. esquerda (card)                   | size        |  `--font-size-scale-base`  |
| Text col. esquerda (card)                   | font-weight | `--font-weight-semi-bold`  |
| Text col. direita (card)                    | size        | `--font-size-scale-up-01`  |
| Text col. direita (card)                    | font-weight |  `--font-weight-regular`   |

### Sombra

|    Name    |          Shadow          |
| :--------: | :----------------------: |
| Superfície | `--surface-shadow-xl-up` |
