# Templates de CRUD
> **CRUD** (acrônimo de Create, Read, Update e Delete na língua Inglesa) para as quatro operações básicas utilizadas em bases de dados relacionais (RDBMS) ou em interface para utilizadores para criação, consulta, atualização e destruição de dados. 

**Fonte:** Wikipédia

Em linhas simples, as interfaces CRUD permitem o cadastro (create), visualização (read), edição (update) e exclusão (delete) de registros de um sistema.
> 

---

## Telas Principais do CRUD
As telas de CRUD podem sofrer variações de um sistema para outro. O componente sempre será visualizada na área de conteúdo das telas, independente da tela ter seu menu principal contraído ou expandido, o CRUD deverá se ajustar aos padrões previamente definidos no Design Sistem Gov.Br obedecendo ao que foi definido para tabelas e grid. Também suas telas pode variar na apresentação de seus componentes internos devido a sua necessidade de uso. No entanto, sua composição principal é formada das seguintes telas:


**1 | Tela de Criação (Cadastro)**
**2 | Tela de Leitura (Visualização)**
**3 | Tela de Atualização (Edição)**
**4 | Tela de Exclusão**

---

![Thumbail](imagens/crud/thumbnail_01.png)


### Layout Sistemas CRUD - Menu Contraído

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_01.png)


### Layout Sistemas CRUD - Menu Expandido

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu.png)


### Layout Portal CRUD

![Exemplo de Crud](imagens/crud/layout_portal.png)


---

## CRUD - Estrutura Básica
O componente CRUD é formado normalmente de duas áreas principais: Área de busca e/ou entrada de dados e a Área de Resultado.

![Thumbail](imagens/crud/thumbnail_02.png)

**A | Área de Busca e/ou Entrada de Dados**
A área de Entrada de Dados pode variar com a necessidade de utilização. Normalmente é composta de componentes e botões;

![Thumbail](imagens/crud/thumbnail_03.png)

**B | Área de Resultado**
A área de Resultado normalmente apresenta uma tabela com  os dados da pesquisa filtrada ou cadastrada. Essas informações apresentadas podem variar em sua apresentação, obedecendo as variações de tabelas definidas na documentação do Design Sistem.

![Thumbail](imagens/crud/thumbnail_04.png)

**C | Botão "Call to Action"**
Em algumas telas, onde exista uma ação prioritária a ser destacada, é necessária a utilização de um botão "call to action".
Este botão deverá ficar posicionado na área superior direita na versão web, dando diferenciação e destaque, em comparação aos demais botões.

![Exemplo de Crud](imagens/crud/composicao_crud.png)


---


## Propostas templates de telas com CRUD

Seguem propostas de templates de telas de CRUD, com algumas variações de forma e uso.



#### Componente CRUD - Tela de Criação (Cadastro)

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_01.png)



Pode-se considerar a funcionalidade de cadastro, como a mais importante em uma interface CRUD, pois, sem ela as demais não teriam utilidade. Nesta página, também,  podemos  exibir, a mais tradicional ‘página de entrada’ de um CRUD, que é sua listagem de registros.

**Dicas de Usabilidade:**

**A -** Título da página: deve estar visível sem a necessidade de usar a barra de rolagem. Utilize títulos simples e sem redundância. Exemplo: “Listagem de membros” ao invés de “Listagem de membros cadastrados no sistema”.

**B -** Os botões de acesso à funcionalidade (Limpar, Cadastrar) devem estar facilmente visíveis e acessíveis, sem a necessidade de usar a barra de rolagem.

Seguem alguns recursos que podem ser utilizados para evitar a ocultação dos botões:
**1 -** disponibilizar um botão no início e outro ao final da página,
**2 -** utilizar botão fixo ao rolar a página e/ou
**3 -** utilizar atalho ‘voltar ao topo’ para facilitar o uso;



##### Componente CRUD - Tela de Filtragem com Colapse

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_04.png)

Pode-se considerar a funcionalidade ‘Cadastrar’ como a mais importante em uma interface CRUD, pois, sem ela as demais não teriam utilidade. Essa tela é formada normalmente de duas áreas principais: Área de busca e/ou entrada de dados e a Área de Resultado.


**Observações Importantes:**

**Deve-se limitar os dados mais importantes no grid:** disponha somente os dados relevantes ao usuário e que melhor identifiquem os registros, os demais devem estar disponíveis na visualização dos detalhes. Uma interessante tática é dispor inicialmente o mínimo de dados possível e à medida do uso, verificar a necessidade de mais dados;

**Deve-se sintetizar os dados presentes no grid:** aproveite-se de ícones, cores, abreviações e outros recursos para dispor informações relevantes;

**Deve-se aproveitar da resolução:** telas maiores permitem a exibição de mais dados. Utilize mais dados somente em telas maiores e esconda-os em telas menores (interfaces responsivas).

**Deve-se ordenar os dados:** verificar a melhor aplicabilidade ao tipo de registro e disponibilizar inicialmente já ordenado, ainda que, dependendo do tipo de dado, possa variar. Podendo ser:

- Alfabética: nomes;
- Numérica: ids e códigos
- Cronológica: data de cadastro e edição.

**Dividir os registros em páginas (tabelas):** utilizar recursos de paginação evita páginas extensas, de difícil carregamento e organização. Para garantir a aplicação dos seguintes recursos, deve-se:

- Destacar a página qual o usuário encontra-se;
- Mostrar o quantitativo total de páginas;
- Facilite o acesso à primeira e última página;

**Disponibilizar na tela o quantitativo de registros:** dado de extremo valor, simples de ser coletado e muitas vezes esquecido de ser disponibilizado ao usuário. Disponha a informação ao final da listagem. Exemplo: Total de 105 registros. O termo ‘registro’ é genérico o suficiente para ser utilizado na maioria dos casos.


##### Componente CRUD - Tela de Pesquisa com Mensagem de Alerta

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_06.png)

**Nunca exibir a tabela vazia:** caso não haja dado cadastrado, é imprescindível exibir uma mensagem informativa no grid como: “Não há registros a serem exibidos” ou "Dados não encontrados.


##### Componente CRUD - Tela de Busca com Auto-Complete

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_05.png)

**Nunca exibir a tabela vazia:** caso não haja dado cadastrado, é imprescindível exibir uma mensagem informativa no grid como: “Não há registros a serem exibidos” ou "Dados não encontrados.


##### Componente CRUD - Tela de Visualização de Dados Cadastrados

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_07.png)

O campo de pesquisa deve fazer uso da função auto-complete para facilitar o preenchimento da informação solicitada pelo usuário


##### Componente CRUD - Tela de Edição de Dados Cadastrados

![Exemplo de Crud](imagens/crud/layout_sistema_com_menu_02.png)

As boas práticas de cadastro e/ou adição devem ser reaproveitadas na edição, portanto, a página pode ser reutilizada, com a diferença que os dados virão inicialmente já preenchidos, permitindo sua edição.

**Campos não-editáveis devem vir bloqueados:** mantenha-os visíveis porém não editáveis (bloquados). Quando necessário, explique ao usuário o motivo da impossibilidade de alteração.


---


## Considerações finais de usabilidade (UX) para CRUD

Devido a capacidade de variar em informações, componentes e complexidade, segue uma lista de cuidados em UX, que devem ser tomados ao implementar as telas de CRUD nos sistemas e no portal Gov.Br.

**1 - Título da página:** deve estar visível sem a necessidade de usar a barra de rolagem. Utilizar títulos simples e sem redundância. Exemplo: “Listagem de membros” ao invés de “Listagem de membros cadastrados no sistema”.

**2 - Botões de acesso à funcionalidade:** (Limpar, Cadastrar, Filtrar, etc): devem estar facilmente visíveis e acessíveis, sem a necessidade de usar a barra de rolagem.
Seguem alguns recursos que podem ser utilizados para evitar a ocultação dos botões:
1 - disponibilizar um botão no início e outro ao final da página,
2 - utilizar botão fixo ao rolar a página e/ou
3 - utilizar atalho ‘voltar ao topo’ para facilitar o uso;

**3 - Formulários grandes e complexos:** Para formulários grandes ou muito complexos a utilização de técnicas que facilitem a experiência do usuário é fundamental para o sucesso do projeto, tais como:
1 - Dividir o formulário em etapas, categorize e distribua os campos de forma lógica e compreensível;
2 - Tornar claro seu posicionamento e progressão, pois o usuário deve entender onde está e onde precisa chegar para finalizar o processo. Caso se faça necessário utilizar um Wizard);

**4 - Permitir o usuário salvar sua progressão:** funcionalidades de ‘rascunho’ permitem o usuário salvar sua progressão e finalizá-la mais tarde, item imprescindível a formulários que demandam muito tempo do usuário. Dessa forma, o formulário 
pode ser salvo e o usuário concluir o preenchimento em outros momento, evitando que perca os dados cadastros.

**5 - Garantir o bom funcionamento das teclas de atalho:** atendendo a heurística flexibilidade e eficiência de uso, devemos prover atalhos - despercebidos a usuários novatos - que podem acelerar e facilitar a interação aos usuários especialistas, de modo que o sistema atenda bem a ambos. Garanta a aplicação dos seguintes recursos:

Ordenação dos campos através do atributo tabindex (HTML);
Tab redireciona ao próximo campo;
Shift + Tab retorna ao campo anterior;
Enter no botão de submissão executa a ação.

**6 - Permitir cancelar a ação a qualquer momento:** Atendendo a heurística ‘liberdade e controle do usuário’, deve-se permitir o cancelamento do cadastro com a mesma - ou quase - facilidade de entrada, pois, muitas vezes o usuário entra em determinada ação por engano ou simplesmente desiste no meio do processo. Disponibilizar a funcionalidade (pop-up) para evitar cancelamentos indevidos. Sugestão de mensagem: “Você tem certeza que deseja cancelar o cadastro?”

**7 - Mensagem de alerta e ação de confirmação:** Visto a exclusão ser geralmente irreversível, é fundamental que o usuário seja alertado e possua uma ação para confirmação. Exemplo: Tem certeza que deseja exluir o registro definitivamente?

**8 - Mensagens de feedback:** É fundamental informar o usuário após a conclusão da ação. Aproveite-se, quando necessário, da mensagem de feedback para possibilitar ao usuário desfazer a ação, ainda que o sistema tenha informado ser um processo irreversível. Esse recurso ‘extra’ pode ser extramente útil a vários casos!




Informações extraídas do site: http://thiagonasc.com/usabilidade/usabilidade-interfaces-crud



---


![Thumbail](imagens/crud/thumbnail_05.png)

### Templates de CRUD em Mobile Responsivo

##### Modelo Padrão

![Exemplo de Crud](imagens/crud/layout_mobile.png)

O componente CRUD para a versão mobile responsivo, também é formado normalmente de duas áreas principais: Área de Busca e/ou Entrada de Dados e a Área de Resultado.

![Thumbail](imagens/crud/thumbnail_06.png)

**A | Área de Busca e/ou Entrada de Dados**
A área de Entrada de Dados pode variar com a necessidade de utilização. Normalmente é composta de componentes e botões;



![Thumbail](imagens/crud/thumbnail_07.png)

**B | Área de Resultado**
A Área de Resultado normalmente apresenta uma tabela com os dados da pesquisa filtrada ou cadastrada. Essas informações apresentadas podem variar em sua apresentação, obedecendo as variações de tabelas definidas na documentação do Design System.

![Thumbail](imagens/crud/thumbnail_08.png)

**C | Botão "Call to Action"**
Para a versão mobile, o botão deverá ser substituído por uma versão simplificada, flutuante, no padrão "fab button", sendo localizado na área inferior à direita, próximo da área de paginação da tabela, facilitando seu acesso aos usuários de smartphone.


