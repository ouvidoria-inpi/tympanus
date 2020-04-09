## Dependências

* Sem dependências.

## Código Básico Lista Ordenada

Listas ordenadas são usadas para agrupar um conjunto de itens relacionados a uma ordem específica.

``` html
<ol class="br-list is-simple">
    <li>Texto de uma linha</li>
    <li>
        Texto de uma linha
        <ol class="br-list is-simple">
            <li>Texto de uma linha</li>
            <li>Texto de uma linha</li>
        </ol>
    </li>
    <li>Texto de uma linha</li>
</ol>
```

## Código Básico Lista não Ordenada

Listas não ordenadas são utilizadas para agrupar um conjunto de itens relacionados sem nenhuma ordem particular.

``` html
<ul class="br-list is-simple">
    <li>Texto de uma linha</li>
    <li>
        Texto de uma linha
        <ul class="br-list is-simple">
            <li>Texto de uma linha</li>
            <li>Texto de uma linha</li>
        </ul>
    </li>
    <li>Texto de uma linha</li>
</ul>
```

## Código Básico Lista de Definição

Listas de definição usada para exibir termos e explicações dos termos.

``` html
<dl>
    <dt>Texto de uma linha</dt>
    <dd>Texto de uma linha</dd>
    <dt>Texto de uma linha</dt>
    <dd>Texto de uma linha</dd>
    <dt>Texto de uma linha</dt>
    <dd>Texto de uma linha</dd>
</dl>
```

## Código básico Lista Simples

``` html
<ul class="br-list">
    <li class="list-item">
        <div class="icon"><i class="fas fa-heartbeat"></i></div>
        <div class="content">
            <div class="text">Texto de uma linha</div>
        </div>
        <div class="icon">
            <a class="list-item" href="javascript:void(0);">Link<i class="fas fa-chevron-right"></i></a>
        </div>
    </li>
    <li class="list-item">
        <div class="icon"><i class="fas fa-heartbeat"></i></div>
        <div class="content">
            <div class="text">Texto de uma linha</div>
        </div>
        <div class="icon">
            <a class="list-item" href="javascript:void(0);">Link<i class="fas fa-chevron-right"></i></a>
        </div>
    </li>
    <li class="list-item">
        <div class="icon"><i class="fas fa-heartbeat"></i></div>
        <div class="content">
            <div class="text">Texto de uma linha</div>
        </div>
        <div class="icon">
            <a class="list-item" href="javascript:void(0);">Link<i class="fas fa-chevron-right"></i></a>
        </div>
    </li>
</ul>
```

## Código básico Lista Complexa</h2>

``` html
<ul class="br-list">
    <li class="list-item">
        <div class="icon"><i class="fas fa-heartbeat"></i></div>
        <div class="content">
            <div class="sub-title">Subtítulo</div>
            <div class="text">Texto de uma linha</div>
            <div class="text-sec">
                Texto secundário Lorem Ipsum dolor sit amet
            </div>
        </div>
        <div class="icon"><i class="fas fa-chevron-right"></i></div>
    </li>
    <li class="list-item">
        <div class="icon"><i class="fas fa-heartbeat"></i></div>
        <div class="content">
            <div class="sub-title">Subtítulo</div>
            <div class="text">Texto de uma linha</div>
            <div class="text-sec">
                Texto secundário Lorem Ipsum dolor sit amet
            </div>
        </div>
        <div class="icon"><i class="fas fa-chevron-right"></i></div>
    </li>
    <li class="list-item">
        <div class="icon"><i class="fas fa-heartbeat"></i></div>
        <div class="content">
            <div class="sub-title">Subtítulo</div>
            <div class="text">Texto de uma linha</div>
            <div class="text-sec">
                Texto secundário Lorem Ipsum dolor sit amet
            </div>
        </div>
        <div class="icon">
            <div class="headline">meta</div>
            <i class="fas fa-cube"></i>
        </div>
    </li>
</ul>
```

## Detalhamento

O componente é composto dos seguintes elementos:

* `br-list` : container do componente.
* `list-item` : container para o conteúdo de um item unitário da lista.
* `icon` : área para imagens, ícones e recursos visuais
    - `headline` : espaço reservado para um metatexto.
* `content` : container para conteúdo de texto.
  + `sub-title` : subtítulo do item
  + `text` : texto do item
  + `text-sec` :  texto secundário do item

## Estados

* `hover` : o estado de mouse hover de um item é ativado automáticamente.
* `focus` : o estado de foco de um item é ativado automáticamente.
* `active` : o estado de ativo de um item é ativado automáticamente.
* `selected` : essa classe deve ser aplicada ao item para ele receber o estado de selecionado.
* `dragged` : essa classe deve ser aplicada no arrasto de um item da lista.
* `disabled` : essa classe deve ser aplicada para o item ficar com estado de desabilitado.

## Regras especiais

Sem regras especiais.

