[version]: # (1.0.1)

![Exemplo de skip link.](imagens/skiplink.png)
*Exemplo de _skip links_.*

Utilize o componente _skip link_ em todas as páginas do seu _site_ para torná-las mais acessíveis aos usuários que navegam utilizando o teclado.

---

## Tom e voz

Utilize _labels_ com textos curtos e diretos.

---

## Anatomia

O _skip link_ é composto pelos seguintes elementos:

1. Superfície;
2. Item;
3. _Tag_ (_opcional_);
4. Rótulo.

![Anatomia do skip link.](imagens/anatomy.png)
*Anatomia do _skip link_.*

### Detalhamento dos itens

#### 1- Superfície

A superfície é a área onde são organizados os componentes. A diagramação dos componentes dentro dessa área é livre, porém, deve-se levar em conta as características de cada componente.

#### 1- Item

O _skip link_ é formado por uma lista de itens. São eles que fornecem atalhos para navegação via teclado e com isso, evitam que o usuário necessite navegar por todos os elementos interativos da tela podendo ir diretamente para uma seção específica.

#### 2- _Tag_ (_opcional_)

Pode-se utilizar dentro do _item_ uma _tag_ do tipo texto, com o número da tecla correspondente ao _link_, tornando o processo mais visual, porém, o mais importante, é que o leitor de telas interprete o número indicado e o usuário possa por meio das teclas numéricas navegar diretamente para a seção desejada.

#### 3- Rótulo

É um elemento de descrição textual que apresenta  formatação específica e tem por finalidade nomear cada item da lista.

---

## Tipo

O componente _skip link_ pode ser simples ou composto e deve ser utilizado de acordo com a necessidade de cada projeto.

### 1- Simples

É apresentado apenas uma opção de item por vez. Ocupa menos espaço em tela e funciona melhor em resoluções menores.

![Tipo simples.](imagens/tipo-simples.png)
*_Skip link_ tipo simples.*

O tipo simples deve ter suas dimensões fixas, baseadas no item de maior dimensão.

**Atenção:** ao navegar com a tecla _TAB_ as opções de itens de atalho devem ser apresentadas na mesma posição do item anterior.

Como só é apresentado um item por vez, é recomendável acrescentar no _label_ a informação de quantos itens estão disponíveis no componente. Para isso, utilize a notação (1/4), (2/4), (3/4), (4/4) e assim por diante.

### 2- Composto

O tipo composto, ao contrário do tipo simples, apresenta simultaneamente todas a opções da lista.

Utilize no máximo quatro itens. Se houver necessidade de uma quantidade maior é recomendável utilizar o tipo simples descrito anteriormente.

![Tipo composto.](imagens/tipo-composto.png)
*_Skip link_ tipo composto.*

O tipo composto apresenta apenas a altura fixa. As larguras variam de acordo com o tamanho de cada conteúdo (_label_).

---

## Comportamento

Algumas pessoas utilizam a tecla **_TAB_** para navegação por _hyperlinks_ e elementos de formulário em uma página _web_. Incluir o componente _skip link_ oferece aos usuários uma opção de ignorar os _hyperlinks_ de navegação de nível superior (menu principal) e saltar para o conteúdo principal ou qualquer outra seção de seu interesse no _site_. Portanto, é muito útil para aqueles que preferem utilizar o teclado como forma padrão de navegação, além de indispensáveis para aqueles que possuem algum tipo de deficiência visual sendo dependentes de leitor de telas.

O componente _skip link_ se encontra visualmente oculto até que a tecla _TAB_ seja pressionada e, então, é disponibilizado para que o usuário possa navegar pelos seus itens via teclado, indo diretamente para a seção de seu interesse. Ao sair do _skip link_ ele deve voltar ao estado oculto.

O atalho **CTRL+TAB** permite que a navegação seja feita no sentido oposto.

**Atenção:** sempre que possível, divida as áreas mais importantes de seu *site* em blocos de informações que façam sentido, por exemplo: menu principal, conteúdo, rodapé, etc. O _skip link_ deve dirigir o usuário para cada um desses blocos de informação.

### 1- Estados

O componente _skip link_ apresenta os seguintes estados:

![Estados do skip link.](imagens/estados.png)
*Possíveis estados do _skip link_.*

**Atenção:** jamais utilize o estado desabilitado no componente _skip link_.

### 2- Teclas de atalho

Para padronizar a acessibilidade de todos os produtos do Governo é interessante seguir a mesma padronização de tecla de atalho para acessar os _hiperlinks_ do componente _skip link_. Recomenda-se utilizar o padrão abaixo:

Tecla alt+1 = Conteúdo
Tecla alt+2 = Menu
Tecla alt+3 = Busca (se houver)
Tecla alt+4 = Rodapé
Tecla Home = Acionar o _skip link_ a qualquer momento.

**Atenção:** é possível criar outras possibilidades de atalho, mas é fundamental que os atalhos descritos acima sejam mantidos.

---

## Melhores práticas

- _Skip links_ se tornam essenciais em _sites_ com grandes quantidades de informação e menus com muitos itens.

- Os usuários que navegam por auxílio de teclado devem ser capazes de acessar todos os elementos interativos, não apenas a navegação principal ou _hyperlinks_. Isso significa que os elementos do formulário, menus suspensos, botões, caixas de diálogo e outros _widgets_ devem ser acessíveis por meio de tabulação na interface. Este componente deve estar logo após a _tag body_ (deve ser a primeira coisa que um usuário de teclado acessaria em sua página).

- Existem milhares de pessoas no mundo com algum tipo de deficiência. Ao possibilitar que naveguem em seu _site_ por meio do _skip link_  aumentará a visibilidade, a acessibilidade e atenderá a um maior número de usuários.

- Lembre-se que a acessibilidade é também um fator muito importante para ranqueamento do Google.

- Implementar o _skip links_ em seu _site_ demonstra que seu serviço se preocupa com a inclusão, ajudando a conquistar novos potenciais clientes.

---

## Especificação

### Alinhamentos

| Name      | Property |        Spacing Token        |
| --------- | -------- | :-------------------------: |
| Rótulo    | Align    | `--spacing-vertical-center` |
| Tag       | Align    | `--spacing-vertical-center` |
| Skip link | Align    | `--spacing-horizontal-left` |

### Espaçamentos

| Name          | Property           |        Token/Value        |
| ------------- | ------------------ | :-----------------------: |
| Item          | padding-top/bottom |  `--spacing-scale-baseh`  |
| Item          | padding-left/right |   `--spacing-scale-2x`    |
| Entre os item | spacing            | `--spacing-scale-default` |
| Skip link     | spacing            |  `--spacing-scale-half`   |
| Skip link     | spacing            |  `--spacing-scale-half`   |

### Dimensões

| Name | Property |     Token/Value      |
| ---- | -------- | :------------------: |
| Item | width    |      `variável`      |
| Item | height   | `--spacing-scale-7x` |

### Tipografia

| Name   | Property | Token/Value               |
| ------ | -------- | ------------------------- |
| Rótulo | size     | `--font-size-scale-up-01` |
| Rótulo | weight   | `--font-weight-semi-bold` |

### Cores

| Name   | Property   | Color Token            |
| ------ | ---------- | ---------------------- |
| Item   | background | `--pure-0`             |
| Rótulo | text       | `--blue-warm-vivid-70` |
| Tag    | background | `--blue-warm-vivid-70` |

### Elevação

| Name |   Elevation Token   |
| ---- | :-----------------: |
| Item | `--z-index-layer-4` |

### Sombra

| Name |     Shadow Token      |
| ---- | :-------------------: |
| Item | `--surface-offset-xl` |
