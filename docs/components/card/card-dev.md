[version]: # (5.1.7)

## Como usar

### Card simples

```html
<div class="br-card">
    <div class="card-header">...</div>
    <div class="card-content">...</div>
    <div class="card-footer">...</div>
</div>
```

### Configurações obrigatórias

| Elemento        | Tipo   | Descrição               |
| --------------- | ------ | ----------------------- |
| `.br-card`      | classe | Container do componente |
| `.card-content` | classe | Conteúdo do Card        |

### Configurações Adicionais

| Elemento        | Tipo      | Descrição                                                                    |
| --------------- | --------- | ---------------------------------------------------------------------------- |
| `data-expanded` | attributo | Expande("on") ou retrai("off")o comportamento "expandir" no card de expansão |
| `.card-header`  | classe    | Área de cabeçalho do Card                                                    |
| `.card-footer`  | classe    | Área do rodape do Card                                                       |
| `.hover`        | classe    | Habilita o estado hover ao card                                              |
| `.h-fixed`      | classe    | Habilita altura fixa e ativa barra de rolagem se necessário                  |

## Estados

| Estado                 | Tipo     | Descrição                                                  |
| ---------------------- | -------- | ---------------------------------------------------------- |
| `disabled`             | atributo | Aplica estilo desabilitado                                 |
| `aria-disabled="true"` | atributo | Para fins de acessibilidade se o card estiver desabilitado |

## Instanciação do Componente

### HTML

Incluir o arquivo `govbrds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbrds/dist/govbrds.min.js"></script>
```

> O arquivo govbrds.min.js expõe um objeto chamado `govbrds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRCard`, passando os seguintes parâmetros:

* Nome da classe (br-card)
* Objeto referenciando a raiz do componente DOM

```javascript
const listCard = []
for (const [index, brCard] of window.document
  .querySelectorAll('.br-card')
  .entries()) {
  listCard.push(new govbrds.BRCard('br-card', brCard, index))
}
```
