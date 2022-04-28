[version]: # (3.0.5)

## Como usar

### Lista vertical

```html
<div class="br-list">
    <div class="header">...</div>
    <span class="br-divider"></span>
    <div class="br-item">...</div>
    <div class="br-item">...</div>
</div>
```

### Lista horizontal

```html
<div class="br-list horizontal">
    <div class="header">...</div>
    <span class="br-divider"></span>
    <div class="br-item">...</div>
    <span class="br-divider"></span>
    <div class="br-item">...</div>
</div>
```

### Lista vertical com expansão

Na versão vertical a lista de sub-itens fica logo após o `br-item`.

```html
<div class="br-list" data-toggle>
    <div class="header">...</div>
    <span class="br-divider"></span>
    <div class="br-item" data-toggle="collapse" data-target="l1">
        <div class="content">
            <div class="flex-fill">RÓTULO 01</div>
            <i class="fas fa-angle-down fa-chevron-down" aria-hidden="true" aria-label="Expandir/Retrair Rótulo 01"></i>
        </div>
    </div>
    <div class="br-list" id="l1">
        <div class="br-item">...</div>
        <div class="br-item">...</div>
    </div>
    <div class="br-item">...</div>
    <div class="br-list">...</div>
    <div class="br-item">...</div>
    <div class="br-list">...</div>
    ...
</div>
```

### Lista horizontal com expansão

Na versão horizontal o agrupador e a lista de sub-itens devem ficar dentro do `br-item`. Usar `br-item-body` para formatar corretamente o agrupador.

```html
<div class="br-list horizontal">
    <div class="header">...</div>
    <span class="br-divider"></span>
    <div class="group">
        <div class="br-item" data-toggle="collapse" data-target="h1">
            <div class="content">
                <div class="flex-fill">RÓTULO 01</div>
                <i class="fas fa-angle-down fa-chevron-down" aria-hidden="true" aria-label="Expandir/Retrair Rótulo 01"></i>
            </div>
        </div>
        <div class="br-list" id="h1">...</div>
    </div>
    <div class="group">...</div>
</div>
```

### Configurações obrigatórias

| Atributo  | Tipo   | Descrição                                      |
| --------- | ------ | ---------------------------------------------- |
| `br-list` | classe | Container do componente List                   |
| `br-item` | classe | Container do componente Item                   |
| `group`   | classe | Container para a lista horizontal com expansão |

### Configurações Adicionais

| Elemento      | Tipo     | Descrição                                         |
| ------------- | -------- | ------------------------------------------------- |
| `horizontal`  | classe   | Ativa o agrupamento horizontal da lista           |
| `data-toggle` | atributo | Indica o item acionador do comportamento collapse |
| `data-target` | atributo | Indica o alvo do comportamento collapse           |
| `header`      | classe   | Área de cabeçalho                                 |
| `br-divider`  | classe   | Separador de itens                                |

### Configurações opcionais

-   A densidade do **br-item** pode ser modificado por utilitários de espaçamento. Usar `py-3` para **densidade média** ou `py-4` para **densidade baixa**

## Estados

| Estado     | Tipo   | Descrição                                       |
| ---------- | ------ | ----------------------------------------------- |
| `selected` | classe | Aplica estado selecionado em listas de controle |
| `disabled` | classe | Usado para desabilitar um item de uma lista     |

## Próximos passos

| Nome                                               | Documentação de Design | Desenvolvimento |
| -------------------------------------------------- | ---------------------- | --------------- |
| Implementar reordenação de items na lista          | Não planejado          | Não planejado   |
| Implementar estado de arrastado nos itens da lista | Não planejado          | Não planejado   |

## Dependências

- [Item](/components/item)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbr-ds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbr-ds/dist/govbr-ds.min.js"></script>
```

> O arquivo govbr-ds.min.js expõe um objeto chamado `govbr-ds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRList`, passando os seguintes parâmetros:

- Nome da classe (br-list)
- Objeto referenciando a raiz do componente DOM

```javascript

const listList = []
for (const brList of window.document.querySelectorAll(('.br-list')) {
  listList.push(new govbr-ds.BRList('br-list', brList))
}

```
