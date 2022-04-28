[version]: # '2.2.3'

## Como usar

```html
<div class="br-checkbox [disabled|invalid|valid] [d-inline-block]">
    <input id="identificador" type="checkbox" [disabled] />
    <label for="identificador">Label do componente</label>
</div>
```

### Elementos obrigatórios

| Elemento       | Tipo   | Descrição                |
| -------------- | ------ | ------------------------ |
| `.br-checkbox` | classe | Container do componente  |
| `input`        | tag    | Input do tipo "checkbox" |
| `label`        | tag    | Rótulo do Checkbox       |

### Configurações Adicionais

| Elemento          | Tipo   | Descrição                                   |
| ----------------- | ------ | ------------------------------------------- |
| `.d-inline-block` | classe | Formata o componente para versão horizontal |

### Configurações obrigatórias

-   Ao desativar o componente inclua também o atributo `disabled` no elemento `input`.

## Estados

| Elemento   | Tipo   | Descrição                                                         |
| ---------- | ------ | ----------------------------------------------------------------- |
| `disabled` | classe | Desabilita o componente                                           |
| `invalid`  | classe | Formata a versão inválida para o componente (usado em validações) |
| `valid`    | classe | Formata a versão válida para o componente (usado em validações)   |

### Dependências

- [Checkgroup](/util/checkgroup)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbr-ds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbr-ds/dist/govbr-ds.min.js"></script>
```

> O arquivo govbr-ds.min.js expõe um objeto chamado `govbr-ds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRCheckbox`, passando os seguintes parâmetros:

- Nome da classe (br-checkbox)
- Objeto referenciando a raiz do componente DOM

```javascript
const checkboxList = []
for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
  checkboxList.push(new govbr-ds.BRCheckbox('br-checkbox', brCheckbox))
}
```
