[version]: # (3.3.0)

![Exemplo de template de erro do tipo 404.](imagens/tela-erro.png)
*Exemplo de template de erro do tipo erro 404 - Página Não Encontrada.*

---

## Anatomia

O *template* Erro utiliza a mesma estrutura do "*template* base", com as seguintes áreas ou regiões: área do *header*, área do conteúdo e área do *footer*, com algumas pequenas modificações:

1. A criação de algumas recomendações e mudanças de configuração nas áreas do *header* e do *footer*;

2. A Área do conteúdo foi dividida em duas subáreas: área informativa e área de suporte.

| ID  | Nome             |                                Referência                                 | Uso         |
| --- | ---------------- | :-----------------------------------------------------------------------: | ----------- |
| A   | Área do *Header* | [Componente Header](https://www.gov.br/ds/components/header?tab=designer) | Obrigatório |
| B   | Área do Conteúdo |                                    ---                                    | Obrigatório |
| C   | Área Informativa |                                    ---                                    | Obrigatório |
| D   | Área de Suporte  |                                    ---                                    | Opcional    |
| E   | Área do *Footer* | [Componente Footer](https://www.gov.br/ds/components/footer?tab=designer) | Obrigatório |

![Áreas de uma típica tela de erro.](imagens/anatomia.png)
*Áreas de uma típica tela de erro.*

---

## Detalhamento dos Itens

### A. Área do *Header* (Obrigatório)

É recomendado o uso da *versão compacta* do *header* na tela de erro. A finalidade é orientar o usuário que ainda se encontra no *site* correto, apesar da tela que está buscando não existir. Isso o ajuda a não se sentir "abandonado". O *header* pode conter os *links* que forem necessários ou apenas a marca. Quanto mais simples e limpo melhor.

![Header na versão compacta.](imagens/header.png)
*Header na versão compacta*

### B. Área do Conteúdo (Obrigatório)

Para facilitar a organização do conteúdo na tela, a área de conteúdo pode ser dividida em duas subáreas: área informativa e área de suporte.

### C. Área Informativa (Obrigatório)

Assim como definido nas heurísticas de Jakob Nielsen sobre prevenção de erros, essa área possui uma grande importância pois visa dar ao usuário um *feedback* visual e textual sobre a resposta do sistema à sua busca, auxiliando-o em suas próximas tomadas de decisão.

Os conteúdos e componentes apresentados na área informativa não são estáticos, podendo variar de acordo com a necessidade do sistema e do usuário.

1. Texto principal;

2. Texto secundário;

3. Texto de apoio (*opcional*);

4. Imagem (*opcional*).

![Área informativa.](imagens/anatomia2.png)
*Área informativa.*

#### 1, 2 e 3. Textos

É recomendável dividir hierarquicamente o texto em no máximo três níveis:

-   Texto principal;

-   Texto secundário;

-   Texto de apoio (*opcional*).

![Exemplo dos níveis hierárquicos dos textos.](imagens/textos.png)
*Exemplos dos três níveis hierárquicos de textos para a tela de erro.*

-   Utilize o *texto principal* como um título, informando ao usuário que algo deu errado na navegação. Seja claro e objetivo e sempre que necessário use linguagem leve e descontraída;

-   Utilize o *texto secundário* para complementar a informação trazida pelo texto principal. Sempre que possível passe uma mensagem otimista;

-   Utilize o *texto de apoio* para esclarecer o que pode ter ocorrido e/ou solicitar um *feedback* do visitante.

A estrutura de texto exemplificada acima é apenas uma sugestão, sendo assim, ficam a critério de cada *site* e podem variar de acordo com a regra de negócio e *layout* mas alguns pontos devem ser ressaltados:

-   Os textos devem ser escritos em uma *linguagem simples e fácil de serem compreendidos* pelos usuários não técnicos;

-   Em *hipótese alguma* os textos devem deixar a entender que o erro tenha sido cometido pelo usuário, mesmo que seja esse o caso;

-   Os textos devem ser precisos ao *especificar exatamente o que foi feito de errado* (ou seja, não serem genéricos ou vagos);

-   Os textos precisam ser construtivos ao *sugerir etapas que o usuário possa seguir para corrigir o problema*.

É possível destacar o texto principal com uso de cores (de preferência cores associadas à imagem utilizada). Lembre sempre de testar os contrastes e garantir a legibilidade. Tenha a atenção para optar por cores previstas na paleta cromática do Design System. O uso de tamanhos e estilos dos textos também são livres, mas devem obedecer às regras previstas nos Fundamentos.

**Atenção:** esteja atento para que o tom e voz do texto utilizado não destoe do *site*, isto é, não exagere no humor se o *site* possuir um tom mais sério e vice-versa. De fato, essa é uma ótima oportunidade de descontrair um pouco e amenizar o "peso" da frustração do usuário, porém o tom e voz não devem ser drasticamente alterados. Tenha bom senso.

#### 4. Imagem

Tanto ilustrações como fotos podem ser utilizadas como imagem a fim de apoiarem visualmente a mensagem de erro. O importante neste caso é que a imagem seja *clara*, *direta* e *simples*. Por ser um elemento de suporte, a imagem não deve chamar mais atenção que o texto.

É permitido e até recomendado que a imagem tenha um tom mais descontraído e humanizado (até mesmo engraçado eventualmente), pois desta forma ajuda a criar empatia com o usuário amenizando o momento de frustração, porém não exagere. Tenha em mente que o tom da imagem não deve se opor ao do *site*. Mais uma vez, bom senso nunca é demais.

![Exemplos de imagens para reforçar a empatia com o usuário.](imagens/ilustracao.png)
*Alguns exemplos de possíveis ilustrações para diferentes tipos de telas de erro.*

### D. Área de Suporte (Opcional)

Os conteúdos e componentes apresentados na área de suporte são opcionais podendo variar de acordo com a necessidade do sistema e do usuário. Essa área auxilia e propõe novas ações a serem tomadas pelo usuário.

1. *Search* (opcional);

2. *Buttons* (opcional).

![Área de suporte.](imagens/anatomia3.png)
*Área de suporte.*

#### 1. *Search*

Embora seja um elemento opcional, um campo de busca é útil para o usuário se orientar dentro da tela de erro. Lembre-se que o usuário se encontra "perdido" e tudo o que puder ajudá-lo a se localizar é bem vindo.
O mecanismo de busca pode estar embutido no *header* porém é recomendável que esteja localizado na área de conteúdo, pois desta forma é dado maior destaque a essa funcionalidade.

![Uso do elemento search.](imagens/search.png)
*É preferível localizar o search na área de conteúdo.*

Uma boa ideia é aproveitar a busca para recomendar palavras-chave ao usuário por meio de *tags*.
Por exemplo, digamos que o usuário tenha chegado à tela de erro por meio de uma busca no *Google* com a palavra-chave "cerimônia". *Tags* com termos válidos semelhantes podem ser sugeridos ao usuário para facilitar o processo de busca.

![Uso de tags com palavras-chave.](imagens/search2.png)
*Sugestão de palavras-chave para busca é uma funcionalidade que pode facilitar muito a vida do usuário.*

#### 2. Buttons

A tela de erro pode disponibilizar botões terciários com opções para que o usuário possa se deslocar para a tela inicial ou para a tela de origem. É interessante também disponibilizar um botão que aponte para uma tela de coleta de *feedbacks* (erros, críticas e sugestões). Esta é uma boa oportunidade de mostrar ao usuário que sua opinião é relevante.

![Botões úteis para interação com o usuário.](imagens/buttons.png)
*Botões úteis para interação com o usuário.*

Sinta-se livre para propor as ações que julgar interessantes para a experiência do usuário.

### E. Área do *Footer* (Obrigatório)

Assim como o *header*, é também recomendado que o *footer* esteja na versão compacta e se for necessário pode apresentar *links* para as mídias sociais. Essa é uma boa oportunidade para fortalecer o engajamento do usuário. Assim como foi dito para o *header*, quanto mais simples melhor.

![Footer na versão compacta.](imagens/footer.png)
*Footer* na versão compacta.*

---

## Tipos de Erros

As possibilidades de erros de navegação são extensas, no entanto, não é correto deixar que o usuário cometa um erro sem explicar previamente o motivo. Melhor do que isso, é necessário criar e disponibilizar na interface mecanismos que previna ou o auxilie dos possíveis erros que surgirão.

Entre os erros mais comuns, o mais conhecido é o  *erro 404*, que ocorre quando há um equívoco de digitação do usuário ou uma falha de configuração do administrador de um *site*.
As principais causas são:

-   **URL incorreta**: quando o usuário digita um endereço inexistente;

-   **Página movida**: quando o editor do *site* altera a URL da página;

-   **Página apagada**: quando o administrador do *site* exclui uma página.

A seguir é apresentado como curiosidade exemplos de outros tipos de erros de navegação que o usuário pode encontrar:

-   400: **Bad Request** ou Requisição Inválida;

-   401: **Authorization Required** ou Não autorizado;

-   403: **Forbidden** ou Proibido;

-   408: **Request Time-Out** ou Tempo de solicitação esgotado;

-   410: **Gone**;

-   500: **Internal Server Error** ou Erro interno do servidor;

Os códigos (XXX) servem para transmitir informações para o usuário e, também, para os administradores do *site*.
Em cada página de erro que vemos há um código HTTP de três dígitos que foi enviado pelo servidor *web*. O primeiro dígito informa a classe do código. As classes 1XX (informa), 2XX (indica sucesso) e 3XX (indica redirecionamento da página) não são páginas de erros e normalmente o usuário não tem contato com eles.
Geralmente, as classes de erros que o usuário tem contato são as 4XX (representam erros causados pelo usuário) e 5XX (indicam problemas no servidor do *site*).

A lista de erros é muito grande e não é objetivo deste documento detalhá-lo, mas caso deseje se aprofundar no tema consulte: [Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

---

## Comportamento

### Responsividade

O conteúdo da tela de erro deve se ajustar na *grid* da resolução correspondente.
A seguir apresentamos exemplos do *template* adaptados para as *grids* de 12, 8 e 4 colunas.

![Exemplo de template de erro adaptado à resolução de doze colunas.](imagens/erro-12col.png)
*Template de erro ajustado na grid de 12 colunas.*

![Exemplo de template de erro adaptado à resolução de oito colunas.](imagens/erro-8col.png)
*Template de erro ajustado na grid de 8 colunas.*

**Atenção:** quando a quantidade de botões for três ou mais, disponibilize-os verticalmente.

![Exemplo de template de erro adaptado à resolução de quatro colunas.](imagens/erro-4col.png)
*Template de erro ajustado na grid de 4 colunas.*

---

## Melhores Práticas

-   Páginas de erro podem vir a ser o sucesso ou o fracasso da sua experiência com o usuário. Esta pequena, porém importante seção do *design* do *site* tem o potencial de estimular os visitantes a tomar uma ação. Ela pode ser o diferencial entre o visitante desistir e sair do seu *site* ou tornar-se um cliente leal e grande fã do seu produto;

-   Quanto ao SEO e, consequentemente, o ranqueamento do *site*, segundo o próprio *Google*, essas páginas não impactam de maneira direta. Mas vale lembrar que o tempo de permanência e uma experiência fluida são fatores que implicam no volume de tráfego e isso sim influencia de forma determinante no posicionamento de um *site*;

-   Uma vez percebido que a origem do erro é uma falha da arquitetura do *site* corrija o mais rápido possível. Apesar de todo esforço para amenizar uma experiência traumática por parte do visitante, esta é uma página que ninguém quer realmente visitar;

### Template de Erro x *Empty States*

-   Apesar da semelhança existente entre esses dois temas, é importante não confundi-los e tratá-los conforme a especificação descrita em cada documentação correspondente. *Empty States* possuem uma abordagem mais ampla dentro do contexto da interface. Além de detalhar aspectos provenientes de erros internos à aplicação, também aborda questões mais amplas a respeito da interação do usuário com o sistema. Logo, para entender melhor essas particularidades, consulte a documentação de *Empty States*.

---

## Modelos de Telas de Erro

A seguir, apresentamos alguns modelos de telas de erro projetadas seguindo os conceitos apresentados neste manual e servem como referência:

![Exemplo de tela de erro.](imagens/tela-erro-exemplo-1.png)
*Modelo de tela de erro com utilização de ilustração.*

![Exemplo de tela de erro.](imagens/tela-erro-exemplo-2.png)
*Modelo de tela de erro com utilização de ilustração.*

![Exemplo de tela de erro.](imagens/tela-erro-exemplo-3.png)
*Modelo de tela de erro com utilização de ilustração.*
