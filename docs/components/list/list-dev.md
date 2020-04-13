## Dependências

- Sem dependências.

## Código Básico Lista Ordenada

Listas ordenadas são usadas para agrupar um conjunto de itens relacionados a uma ordem específica.

```html
<div class="br-list">
  <ol class="is-simple">
    <li>Texto de uma linha</li>
    <li>Texto de uma linha
      <ol class="br-list is-simple">
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
      </ol>
    </li>
    <li>Texto de uma linha</li>
  </ol>
</div>
```
## Código Básico Lista não Ordenada

Listas não ordenadas são utilizadas para agrupar um conjunto de itens relacionados sem nenhuma ordem particular.

```html
<div class="br-list">
  <ul class="is-simple">
    <li>Texto de uma linha</li>
    <li>Texto de uma linha
      <ul class="br-list is-simple">
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
      </ul>
    </li>
    <li>Texto de uma linha</li>
  </ul>
</div>
```

## Código Básico Lista de Definição

Listas de definição usada para exibir termos e explicações dos termos.

```html
<div class="br-list">
  <dl class="is-simple">
    <dt>Texto de uma linha</dt>
    <dd>Texto de uma linha</dd>
    <dt>Texto de uma linha</dt>
    <dd>Texto de uma linha</dd>
    <dt>Texto de uma linha</dt>
    <dd>Texto de uma linha</dd>
  </dl>
</div>
```

## Código básico Lista Simples
```html
<div class="br-list">
  <h3 class="title">Título da Lista</h3><a class="list-item">
    <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
    <div class="content">
      <div class="text">Texto de uma linha</div>
    </div>
    <div class="icon"><i class="fas fa-chevron-right"></i></div></a><a class="list-item selected">
    <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
    <div class="content">
      <div class="text">Texto de uma linha (Estado Selecionado)</div>
    </div>
    <div class="icon"><i class="fas fa-chevron-right"></i></div></a><a class="list-item disabled">
    <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
    <div class="content">
      <div class="text">Texto de uma linha (Estado Desabilitado)</div>
    </div>
    <div class="icon"><i class="fas fa-chevron-right"></i></div></a><a class="list-item dragged">
    <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
    <div class="content">
      <div class="text">Texto de uma linha (Estado Arrastado)</div>
    </div>
    <div class="icon"><i class="fas fa-chevron-right"></i></div></a>
</div>
```

## Código básico Lista Complexa</h2>
```html
<div class="br-list">
  <h3 class="title">Título da Lista</h3>
  <ul>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="sub-title">Subtítulo</div>
        <div class="text">Texto de uma linha</div>
        <div class="text-sec">Texto secundário Lorem Ipsum dolor sit amet</div>
      </div>
      <div class="icon"><i class="fas fa-chevron-right"></i></div>
    </li>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="sub-title">Subtítulo</div>
        <div class="text">Texto de uma linha</div>
        <div class="text-sec">Texto secundário Lorem Ipsum dolor sit amet</div>
      </div>
      <div class="icon"><i class="fas fa-chevron-right"></i></div>
    </li>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="sub-title">Subtítulo</div>
        <div class="text">Texto de uma linha</div>
        <div class="text-sec">Texto secundário Lorem Ipsum dolor sit amet</div>
      </div>
      <div class="icon"><i class="fas fa-chevron-right"></i></div>
    </li>
  </ul>
</div>
```
## Código básico Lista de E-mail
```html
<div class="br-list">
  <div class="header">
    <h3 class="title">Lista de E-mail</h3>
    <div class="actions">
      <button class="br-button is-circle is-secondary" type="button"><i class="fa-lg fas fa-sort-alpha-up"></i></button>
      <div class="divider"></div>
      <button class="br-button is-circle is-secondary" type="button"><i class="fa-lg fas fa-search"></i></button>
      <button class="br-button is-circle is-secondary" type="button"><i class="fa-lg fas fa-ellipsis-v"></i></button>
    </div>
  </div>
  <ul>
    <li class="list-item unread">
      <div class="icon active"><i class="fa-lg fas fa-envelope"></i></div>
      <div class="text">Comunicação</div>
      <div class="content">
        <div class="sub-title">Em tempo - Instabilidade</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus massa nisi, id efficitur tortor tincidunt rutrum.</div>
      </div>
      <div class="text">08/04/2020</div>
    </li>
    <li class="br-divider"></li>
    <li class="list-item unread">
      <div class="icon active"><i class="fa-lg fas fa-calendar-check"></i></div>
      <div class="text">Comunicação</div>
      <div class="content">
        <div class="sub-title">Em tempo - Instabilidade</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus massa nisi, id efficitur tortor tincidunt rutrum.</div>
      </div>
      <div class="text">08/04/2020</div>
    </li>
    <li class="br-divider"></li>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-envelope-open"></i></div>
      <div class="text">Comunicação</div>
      <div class="content">
        <div class="sub-title">Em tempo - Instabilidade</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus massa nisi, id efficitur tortor tincidunt rutrum.</div>
      </div>
      <div class="text">08/04/2020</div>
    </li>
  </ul>
</div>
```
## Código básico Lista com collapse
```html
<div class="br-list">
  <h3 class="title">Título da Lista</h3>
  <ul>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="text">Texto de uma linha (CLOSE)</div>
      </div>
      <div class="icon"><a class="list-item" href="#"><span class="sr-only">Link</span><i class="fas fa-chevron-down"></i></a></div>
    </li>
    <li class="list-item open">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="text">Texto de uma linha (OPEN)</div>
      </div>
      <div class="icon"><a class="list-item" href="#"><span class="sr-only">Link</span><i class="fas fa-chevron-down"></i></a></div>
      <ul class="top-shadow bottom-shadow">
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
        <li>Texto de uma linha</li>
      </ul>
    </li>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="text">Texto de uma linha (CLOSE)</div>
      </div>
      <div class="icon"><a class="list-item" href="#"><span class="sr-only">Link</span><i class="fas fa-chevron-down"></i></a></div>
    </li>
    <li class="list-item">
      <div class="icon"><i class="fa-lg fas fa-heartbeat"></i></div>
      <div class="content">
        <div class="text">Texto de uma linha (CLOSE)</div>
      </div>
      <div class="icon"><a class="list-item" href="#"><span class="sr-only">Link</span><i class="fas fa-chevron-down"></i></a></div>
    </li>
  </ul>
</div>
```
## Detalhamento

O componente é composto dos seguintes elementos:

- `.br-list`: container do componente.
- `.is-simple`: ao utilizar uma lista simples essa classe deve ser aplicada nas tags `ul`, `ol` e `dl`.
- `.header`: container para o cabeçalho de uma lista.
    - `.title`: título da lista.
    - `.actions`: container para os botões de ação da lista.
      - `.divisor`: classe para aplicar um divisor entre os ícones de ação.
- `.list-item`: container para o conteúdo de um item unitário da lista.
    - `.unread`: classe aplicada juntamente com o `list-item` para marcar e-mails de uma lista como não lidos.
- `.icon`: área para imagens, ícones e recursos visuais.
  - `.headline`: espaço reservado para um metatexto.
- `.content`: container para conteúdo de texto.
- `.sub-title`: subtítulo do item.
- `.text`: texto do item.
- `.text-sec`:  texto secundário do item.
- `.open`: essa classe deve ser aplicada a uma lista que contém uma sub-lista, quando a mesma estiver "aberta" para que a sub-lista seja exibida.

## Estados
- `hover`: o estado de mouse hover de um item é ativado automáticamente.
- `focus`: o estado de foco de um item é ativado automáticamente.
- `active`: o estado de ativo de um item é ativado automáticamente.
- `.selected`: essa classe deve ser aplicada ao item para ele receber o estado de selecionado.
- `.dragged`: essa classe deve ser aplicada no arrasto de um item da lista.
- `.disabled`: essa classe deve ser aplicada para o item ficar com estado de desabilitado.

## Estados para Sub-Listas
- `.top-shadow`: Sombra superior da sublista para indicar que há itens escondidos na barra de rolagem para cima.
- `.bottom-shadow`: Sombra inferior da sublista para indicar que há itens escondidos na barra de rolagem para baixo.

## Regras especiais

Sem regras especiais.