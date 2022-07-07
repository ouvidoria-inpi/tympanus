[version]: # (2.0.1)

Consiste em um padrão para guiar o usuário durante um tutorial, apresentação ou processo de aprendizado simples.

![Exemplo de Onboarding](imagens/onboarding.png)
*Exemplo de Onboarding*

Utilize o _Onboarding_ quando:

- precisar demonstrar para usuários novatos, aspectos de uso em interfaces;
- precisar apresentar novidades ou pequenas atualizações em seu produto;
- precisar guiar o usuário em pequenos tutoriais;
- precisar oferecer pequenas demonstrações como tópico de ajuda.

 Não utilize o _Onboarding_:

- para fins de envio de formulários ou funcionalidades inerentes às regras de negócio do produto;
- em fluxos muito longos ou complexos. Neste caso, elabore um conteúdo de ajuda mais completo e disponibilize na seção de ajuda;

---

## Tom e Voz

Dependendo do contexto e conteúdo a ser demonstrado, o tom e voz pode variar bastante em sua proposta. Como exemplo, pode-se utilizar o tom e voz:

- adequado ao ensino;
- adequado ao marketing ou publicidade;
- ou técnico

---

## Anatomia

O _Onboarding_ é constituído por:

1. Componente _Tooltip_;
2. Componente _Carousel_;
3. Superfície _Overlay_;

![Anatomia do Onboarding](imagens/anatomy.png)
*Anatomia do Onboarding*

### Detalhamento dos Itens

#### 1 - Componente _Tooltip_

O componente _Tooltip_ é utilizado especificamente no tipo de _Onboarding_ com ênfase na interface. O objetivo dele é exibir informações referentes aos elementos da interface que são apresentados durante o tutorial.

![Tooltip](imagens/tooltip.png)
*Utilize o Tooltip para exibir informações em pontos de destaque na interface*

#### 2 - Componente _Carousel_

O componente _Carousel_ servirá como elemento básico para o controle do _Onboarding_. Através dele o usuário poderá avançar ou retroceder na navegação, pular etapas e visualizar a progressão nas etapas. O _Carousel_ poderá ser customizado para atender as necessidades no _Onboarding_. Veja abaixo o padrão de customização a partir do modelo tradicional do _Carousel_.

- **A:** Modelo tradicional do componente _Carousel_;
- **B:** Customização do _Carousel_ para o _Onboarding_ com Ênfase Textual;
- **C:** Customização do _Carousel_ para o _Onboarding_ com Ênfase na Interface;

 ![Carousel](imagens/carousel.png)
*Exemplos de customização do componente Carousel a partir do modelo tradicional*

##### Controles de Navegação do _Carousel_

- **_Buttons_:** Para avançar ou retroceder na navegação utilize o componente _Button_ interno ao _Carousel_. Estes podem ser customizados na versão pílula, com ênfase primária para avançar e ênfase secundária para retroceder.

  - **A:** Button tipo pílula com ênfase secundária para retroceder;
  - **B:** Button tipo pílula com ênfase primária para avançar;

 ![Buttons](imagens/buttons.png)
*Buttons como controles de navegação*

Nas telas em _Grids_ de 4 colunas ou no tipo de _Onboarding_ com ênfase textual, recomenda-se utilizar a versão circular dos _Buttons_, seguindo o mesmo padrão de ênfase primária e secundária.

 ![Buttons Circulares](imagens/circle-buttons.png)
*Buttons Circulares como controles de navegação - Grid de 4 colunas e Onboarding com ênfase textual*

- **_Hiperlinks_:** O hiperlink servirá como opção aos usuários que desejam "pular" ou "sair" do _Onboarding_.

  ![Hiperlink](imagens/hiperlink.png)
*Hiperlink usado como atalho ao usuário que deseja pular o tutorial*

- **_Step_:** O componente _Step_ tem função dupla. Servirá para indicar a progressão ao usuário durante as etapas no _Onboarding_ e também como controle para navegar entre as etapas. Ele pode ser usado tanto no tipo simples como no tipo textual.

  ![Steps](imagens/step.png)
*Steps - usados para indicar progressão e controle de navegação*

#### 3 - Superfície _Overlay (Scrim)_

O objetivo da superfície _Overlay_ é proporcionar contraste entre os elementos da tela e o conteúdo exibido no _Onboarding_. Desta forma a atenção do usuário será direcionada para o conteúdo de exibição, para os controles de navegação e _Tooltip_. Deve ser utilizada tanto no _Onboarding_ de ênfase textual quanto no de ênfase na interface.

É importante observar que a superfície _Overlay_, além de ser utilizada entre o conteúdo do _Onboarding_ e a tela ao fundo, também é utilizada como _background_ nos controles de navegação do _Carousel_, para proporcionar mais contraste aos elementos interativos. Observe a seguir:

- **A:** Superfície _Overlay_ entre a tela e o conteúdo do _Onboarding_;
- **B:** Superfície _Overlay_ como _background_ nos controles de navegação no _Carousel_.

![Uso da Superfície Overlay](imagens/overlay.png)
*Uso da Superfície Overlay*

---

## Tipos

### 1 - Ênfase na Interface

Este tipo é utilizado quando se quer demonstrar mudanças ou novidades diretamente relacionadas à interface. Neste modelo é necessário destacar os elementos de interface durante as etapas do processo.

![Tipo - Ênfase na Interface](imagens/onboarding-type-2.png)
*Tipo - Ênfase na Interface*

### 2 - Ênfase Textual

Nesta situação utiliza-se apenas texto, imagem e/ou ilustração. Aqui a ideia é mostrar ao usuário alguma informação relevante, como novidades, atualizações, vantagens, campanhas de marketing, etc.

![Tipo - Ênfase Textual](imagens/onboarding.png)
*Tipo - Ênfase Textual*

---

## Estruturando o _Onboarding_

A seguir pode-se observar um modelo de estrutura básica para construir o _Onboarding_:

### Tela de Boas Vindas

As telas de boas vindas exibem uma introdução do conteúdo oferecido no _Onboarding_. É importante que através dela o usuário tenha clareza daquilo que será demonstrado, assim poderá decidir de forma rápida se quer seguir com o tutorial ou sair dele.

Alguns exemplos de introdução mais frequentes são:

- Boas vindas com informações para usuários novatos;

- Boas vindas com informações a respeito de novidades;

 ![Boas Vindas Usuário Novo](imagens/noob-user.png)
*Exemplo de Boas Vindas para Novidades e Usuários Novatos*

**OBS:** Evite utilizar uma tela de boas vindas apenas como cordialidade, sem qualquer conteúdo adicional, isto atrapalha ou chateia o usuário durante a interação com o aplicativo. Se for o caso, pode-se combinar a mensagem de boas vindas com uma dica para cadastro do novo usuário ou acesso ao _login_, dando utilidade à mensagem.

### Etapas

É muito importante que o tutorial seja formatado num modelo de telas ou passos sequenciais, além de oferecer um número de etapas reduzidas.

![Etapas](imagens/steps.png)
*Exemplo de Etapas Sequenciais Reduzidas*

Este formato oferece algumas vantagens:

- O modelo de etapas sequenciais é uma forma didática de conduzir o usuário gradativamente até concluir a jornada de apresentação;

- O número reduzido de etapas incentiva o usuário a não abandonar o _tour_, visto que estatisticamente os usuários tendem a desistir diante de uma quantidade grande de passos;

 Outra dica importante é oferecer sempre controles de navegação para o usuário avançar ou retroceder no tutorial. Alguns usuários mais interessados podem querer voltar etapas e revisitar este conteúdo, enquanto que outros mais apressados tendem a pular etapas.

### Pulando o Tutorial

É de extrema importância que a opção "pular" ou "sair" do tutorial esteja presente durante todo fluxo do _Onboarding_, desde a tela de boas vindas até a conclusão. Nem sempre o usuário está interessado em ingressar no _tour_, seja por vários motivos como:

- já viu o conteúdo;
- é um usuário frequente ou experiente;
- quer acessar outra funcionalidade e está com pressa;
- ou simplesmente, falta de interesse.

 Como padrão, este recurso é apresentado como _hiperlink_ e deve posicionar-se num local visível como demonstrado na imagem abaixo.

  ![Pular Tutorial](imagens/jump-tour.png)
*Exemplo de Hiperlink para Pular Tutorial*

### Desabilitando o Tutorial

Durante a fase de lançamento de novidades num sistema ou aplicativo, é comum exibir tutoriais durante um certo espaço de tempo. Geralmente usuários que já visitaram este tutorial ou já conhecem as novidades apresentadas vão querer "sair" ou "pular" o _tour_. Nesta situação, para que o _Onboarding_ não seja um motivo de empecilho ou obstáculo ao usuário frequente, recomenda-se oferecer a opção para desabilitar o tutorial. Desta forma, o usuário que já viu o conteúdo do _Onboarding_ poderá marcar num _checkbox_ a opção "não quero visualizar este _tour_ novamente", e ficar livre do incômodo nas próximas vezes que acessar o sistema.

  ![Desabilitar Tutorial](imagens/disable-tour.png)
*Exemplo de uso do Componente Checkbox para Desabilitar o Tutorial*

### Indicadores de Progresso

Os indicadores de progresso são formas de mostrar ao usuário as etapas completadas durante o fluxo. Elas também servem como um motivador psicológico, estimulando no usuário o desejo de seguir em frente e concluir a jornada.

No padrão _Onboarding_ do Design System, o componente _Step_ é utilizado como indicador de progresso, tanto no formato simples como no formato textual.

  ![Step Simples e Textual](imagens/steps-progress.png)
*Exemplo de Indicador de progresso com Step Simples ou Textual*

### Conclusão

Ao finalizar todo fluxo do tutorial, apresente uma tela de conclusão. Utilize um texto finalizando o tutorial e, sempre que possível, apresente os próximos passos ao usuário. Geralmente, um _Button_ ou _hiperlink_ para a funcionalidade ou recurso demonstrado no tutorial.

  ![Conclusão](imagens/conclusion.png)
*Exemplo de tela de conclusão no Onboarding*

---

## Comportamentos

### 1 - Posicionamento dos Controles de Navegação

Os _Controles de Navegação_ serão posicionados, de preferência, na base da tela, porém caso haja a necessidade de detalhar algum elemento na base da tela, os _Controles de Navegação_ poderão ser posicionados ou no centro-vertical da tela ou no topo da tela, conforme o modelo a seguir.

Aqui temos um exemplo do posicionamento padrão, na base da tela.
![Posicionamento Aleatório do Tooltip](imagens/onboarding-position-controls-1.png)
*Posicionamento Padrão - Na Base da tela*

1 - Posição padrão na base da tela
2 - Posição opcional no centro-vertical da tela
3 - Posição opcional no topo da tela

![Posicionamento Aleatório do Tooltip](imagens/onboarding-position-controls-2.png)
*Posicionamento Opcional - No centro-vertical ou no topo da tela*

### 2 - Posicionamento do _Tooltip_

Tendo em vista a característica do _Tooltip_ de acompanhar os elementos a serem mostrados na tela, este poderá ser posicionado próximo ao elemento ao qual está sendo detalhado. Sua posição é aleatória na tela.

![Posicionamento Aleatório do Tooltip](imagens/onboarding-position-tooltip-1.png)
*Posicionamento Aleatório do Tooltip exibindo o Menu em destaque*

![Posicionamento Aleatório do Tooltip](imagens/onboarding-position-tooltip-2.png)
*Posicionamento Aleatório do Tooltip exibindo o Header em destaque*

![Posicionamento Aleatório do Tooltip](imagens/onboarding-position-tooltip-3.png)
*Posicionamento Aleatório do Tooltip exibindo o Breadcrumbs em destaque*

---

## Melhores Práticas

- **Priorize a Ação Principal:** Ao oferecer recurso de _Onboarding_, priorize demonstrar a ação ou funcionalidade principal de seu produto ou a que proporcionará maior engajamento dos usuários;

- **Dê Dicas de Ferramentas Atalhos ou Funcionalidades:**  Um dos objetivos do uso de _Onboarding_ é também demonstrar pequenas dicas, ferramentas úteis, funcionalidades prioritárias ou mais frequentemente usadas;

- **Incentive o Usuário:** Sua interface deve incentivar a interação do usuário. Quando apresentar um _tour_ através de _Onboarding_, sempre que possível, ofereça opções ou exemplos de interação para estimular a ação do usuário;

- **Seja Breve:** É importante que o tutorial demonstrado pelo _Onboarding_ tenha um formato simplificado e bem objetivo, com um número reduzido de etapas. Geralmente os usuários não tem paciência em percorrer tutoriais muito extensos;

- **Ofereça Acesso a mais Informações:** Tendo em vista o formato resumido apresentado pelo _Onboarding_, durante o _tour_, é importante oferecer ao usuário um acesso a mais detalhes de informações, caso se trate de um conteúdo mais complexo. Neste caso, inclua um _hiperlink_ de acesso para uma seção específica ou conteúdo de ajuda.

---

## Especificações

| Name                                                                  | Property  | Value/Token            |
| --------------------------------------------------------------------- | --------- | ---------------------- |
| Superfície _Overlay_ (_Scrim_)                                        | `opacity` | `--surface-opacity-md` |
| Superfície _Overlay_ (_Scrim_) - Controles de Navegação do _Carousel_ | `opacity` | `--surface-opacity-lg` |

---

## Referências

- [Onboarding - Material Design](https://material.io/design/communication/onboarding.html)

- [A Guide to Effective User Onboarding Best Practices](https://www.toptal.com/designers/ux/user-onboarding-best-practices)
