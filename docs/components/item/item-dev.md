[version]: # (1.0.3)

## Como usar

### Padrão

```html
<div class="br-item">
    Conteúdo do item
</div>
```

### Item do tipo link

```html
<a class="br-item" href="...">
    Conteúdo do item
</a>
```

### Item do tipo button

```html
<button class="br-item" type="button">
    Conteúdo do item
</button>
```

### Configurações obrigatórias

| Elemento  | Tipo   | Descrição               |
| --------- | ------ | ----------------------- |
| `br-item` | classe | Container do componente |

### Configurações Adicionais

| Elemento        | Tipo     | Descrição                                  |
| --------------- | -------- | ------------------------------------------ |
| `divider`       | classe   | Aplica separador na borda inferior do Item |
| `href`          | atributo | Para itens do tipo Link `<a>`              |
| `type="button"` | atributo | Para itens do tipo Botão `<button>`        |

## Estados

| Estado     | Tipo   | Descrição                 |
| ---------- | ------ | ------------------------- |
| `active`   | classe | Aplica estilo ativo       |
| `selected` | classe | Aplica estilo selecionado |
| `disabled` | classe | Aplica estilo desativado  |

## Instanciação do Componente

### HTML

Incluir o arquivo `dsgov.min.js` no html.

```html
<script src="<node_modules>/@govbr/dsgov/dist/dsgov.min.js"></script>
```

> O arquivo dsgov.min.js expõe um objeto chamado `dsgov` contendo as referências para todas as classes exportadas.

### Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRItem`, passando os seguintes parâmetros:

- Nome da classe (br-item)
- Objeto referenciando a raiz do componente DOM

```javascript
const itemList = []
for (const brItem of window.document.querySelectorAll('.br-item')) {
  itemList.push(new dsgov.BRItem('br-item', brItem))
}
```
