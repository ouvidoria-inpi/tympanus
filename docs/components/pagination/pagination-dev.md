[version]: # (10.0.4)

## Como usar

### Tipo padrão

```html
<nav class="br-pagination" aria-label="Paginação de resultados" data-total="4" data-current="1">
  <ul>
    <li>
      <button class="br-button circle" type="button" data-previous-page="data-previous-page" aria-label="Página anterior">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
      </button>
    </li>
    <li><a class="page active" href="">1</a></li>
    <li><a class="page" href="">2</a></li>
    <li><a class="page" href="">3</a></li>
    <li><a class="page" href="">4</a></li>
    <li>
      <button class="br-button circle" type="button" data-next-page="data-next-page" aria-label="Página seguinte">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
      </button>
    </li>
  </ul>
</nav>
```

### Tipo contextual

```html
<nav class="br-pagination" aria-label="Paginação de resultados" data-total="50" data-current="1" data-per-page="20">
  <div class="pagination-per-page">
    <div class="br-select">
      <div class="br-input">
        <label for="per-page-selection">Exibir</label>
        <input id="per-page-selection" type="text" placeholder="Quantidade de linhas"/>
        <button class="br-button circle small" type="button" aria-label="Exibir lista" tabindex="-1" data-trigger="data-trigger"><i class="fas fa-angle-down"></i>
        </button>
      </div>
      <div class="br-list" tabindex="0">
        <div class="br-item" tabindex="-1">
          <div class="br-radio">
            <input id="per-page-10" type="radio" name="per-page" value="per-page-10" checked="checked"/>
            <label for="per-page-10">10</label>
          </div>
        </div>
        <div class="br-item" tabindex="-1">
          <div class="br-radio">
            <input id="per-page-20" type="radio" name="per-page" value="per-page-20"/>
            <label for="per-page-20">20</label>
          </div>
        </div>
        <div class="br-item" tabindex="-1">
          <div class="br-radio">
            <input id="per-page-30" type="radio" name="per-page" value="per-page-30"/>
            <label for="per-page-30">30</label>
          </div>
        </div>
      </div>
    </div>
  </div><span class="br-divider d-none d-sm-block mx-3"></span>
  <div class="pagination-information d-none d-sm-flex"><span class="current">1</span>&ndash;<span class="per-page">20</span>&nbsp;de&nbsp;<span class="total">50</span>&nbsp;itens</div>
  <div class="pagination-go-to-page d-none d-sm-flex ml-auto">
    <div class="br-select">
      <div class="br-input">
        <label for="go-to-selection">Página</label>
        <input id="go-to-selection" type="text" placeholder="ir para a página"/>
        <button class="br-button circle small" type="button" aria-label="Exibir lista" tabindex="-1" data-trigger="data-trigger"><i class="fas fa-angle-down"></i>
        </button>
      </div>
      <div class="br-list" tabindex="0">
        <div class="br-item" tabindex="-1">
          <div class="br-radio">
            <input id="go-to-1" type="radio" name="go-to" value="go-to-1" checked="checked"/>
            <label for="go-to-1">1</label>
          </div>
        </div>
        <div class="br-item" tabindex="-1">
          <div class="br-radio">
            <input id="go-to-2" type="radio" name="go-to" value="go-to-2"/>
            <label for="go-to-2">2</label>
          </div>
        </div>
        <div class="br-item" tabindex="-1">
          <div class="br-radio">
            <input id="go-to-3" type="radio" name="go-to" value="go-to-3"/>
            <label for="go-to-3">3</label>
          </div>
        </div>
      </div>
    </div>
  </div><span class="br-divider d-none d-sm-block mx-3"></span>
  <div class="pagination-arrows ml-auto ml-sm-0">
    <button class="br-button circle" type="button" aria-label="Voltar página"><i class="fas fa-angle-left" aria-hidden="true"></i>
    </button>
    <button class="br-button circle" type="button" aria-label="Avançar página"><i class="fas fa-angle-right" aria-hidden="true"></i>
    </button>
  </div>
</nav>
```

> **Atenção!** Use as classes de utilitários para organizar os módulos da páginação contextual

### Configurações obrigatórias

| Elemento             | Tipo     | Descrição                   |
| -------------------- | -------- | --------------------------- |
| `br-pagination`      | classe   | Container do componente     |
| `data-total`         | atributo | Total de páginas            |
| `data-current`       | atributo | Página ativa                |
| `data-previous-page` | atributo | Navega para página anterior |
| `data-next-page`     | atributo | Navega para página seguinte |
| `aria-label`         | atributo | Descrição de acessibilidade |

### Configurações Adicionais

| Elemento   | Tipo   | Descrição              |
| ---------- | ------ | ---------------------- |
| `small`    | classe | Aplica densidade alta  |
| `large`    | classe | Aplica densidade baixa |
| `inverted` | classe | Aplica Modo escuro     |

## Dependências

- [Button](/ds/components/button)
- [Divider](/ds/components/divider)
- [Input](/ds/components/input)
- [Item](/ds/components/item)
- [List](/ds/components/list)
- [Radio](/ds/components/radio)
- [Select](/ds/components/select)

## Instanciação do Componente

### HTML

Incluir o arquivo `dsgov.min.js` no html.

```html
<script src="<node_modules>/@govbr/dsgov/dist/dsgov.min.js"></script>
```

> O arquivo dsgov.min.js expõe um objeto chamado `dsgov` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRPagination`, passando os seguintes parâmetros:

- Nome da classe (br-pagination)
- Objeto referenciando a raiz do componente DOM

```javascript
const paginationList = []
for (const brPagination of window.document.querySelectorAll('.br-pagination')) {
  paginationList.push(new dsgov.BRPagination('br-pagination', brPagination))
}
```
