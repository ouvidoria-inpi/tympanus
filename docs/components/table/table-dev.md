[version]: # (5.2.1)

## Como usar

```html
<div class="br-table" data-search data-selection data-collapse>
  <!-- Cabeçalho -->
  <div class="table-header">...</div>
  <!-- Dados -->
  <table>...</table>
  <!-- Rodapé -->
  <div class="table-footer">...</div>
</div>
```

### Barra de Título

```html
<div class="br-table" ...>
  <!-- Cabeçalho -->
  <div class="table-header">
    <!-- Barra de Título -->
    <div class="top-bar">
      <div class="table-title">Título da Tabela</div>
      <div class="actions-trigger text-nowrap">
        <button class="br-button circle" type="button" title="Ver mais opções" data-toggle="dropdown" data-target="target01" aria-label="Ver mais opções">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <div class="br-list" id="target01" hidden>
          <button class="br-item" type="button" data-density="small">Densidade alta</button>
          <span class="br-divider"></span>
          <button class="br-item" type="button" data-density="medium">Densidade média</button>
          <span class="br-divider"></span>
          <button class="br-item" type="button" data-density="large">Densidade baixa</button>
        </div>
      </div>
      <div class="search-trigger">
        <button class="br-button circle" type="button" data-toggle="search" aria-label="Abrir busca">
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- Caixa de Busca -->
    <!-- Barra Contextual -->
  </div>
  <!-- Dados -->
  <!-- Rodapé -->
</div>
```

### Caixa de Busca

```html
<div class="br-table" ...>
  <!-- Cabeçalho -->
  <div class="table-header">
    <!-- Barra principal -->
    <!-- Caixa de Busca -->
    <div class="search-bar">
      <div class="br-input">
        <label for="table-searchbox">Buscar</label>
        <input id="table-searchbox" type="text" placeholder="Buscar na tabela"/>
        <button class="br-button circle" type="button" aria-label="Buscar">
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <button class="br-button circle" type="button" data-dismiss="search" aria-label="Fechar busca">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <!-- Barra Contextual -->
  </div>
  <!-- Dados -->
  <!-- Rodapé -->
</div>
```

### Barra Contextual

```html
<div class="br-table" ...>
  <!-- Cabeçalho -->
  <div class="table-header">
    <!-- Barra principal -->
    <!-- Caixa de Busca -->
    <!-- Barra Contextual -->
    <div class="selected-bar">
      <div class="info">
        <span class="count">0</span>
        <span class="text">item selecionado</span>
      </div>
      <div class="actions-trigger text-nowrap">
        <button class="br-button circle inverted" type="button" data-toggle="dropdown" data-target="target02" aria-label="Ver mais opções">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <div class="br-list" id="target02" hidden>
          <button class="br-item" type="button" data-toggle>Ação 1</button>
          <span class="br-divider"></span>
          <button class="br-item" type="button">Ação 2</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Dados -->
  <!-- Rodapé -->
</div>
```

### Tabela de dados simples

```html
<div class="br-table" ...>
  <!-- Cabeçalho -->
  <!-- Dados -->
  <table>
    <caption>Título da Tabela</caption>
    <thead>
      <tr>
        <th scope="col">Título coluna 1</th>
        <th scope="col">Título coluna 2</th>
        <th scope="col">Título coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Linha 1 coluna 1</td>
        <td>Linha 1 coluna 2</td>
        <td>Linha 1 coluna 3</td>
      </tr>
      <tr>
        <td>Linha 2 coluna 1</td>
        <td>Linha 2 coluna 2</td>
        <td>Linha 2 coluna 3</td>
      </tr>
      <tr>
        <td>Linha 3 coluna 1</td>
        <td>Linha 3 coluna 2</td>
        <td>Linha 3 coluna 3</td>
      </tr>
    </tbody>
  </table>
  <!-- Rodapé -->
</div>
```

> **Atenção!** Mantenha a tabela de dados acessível. Para mais dicas visite [Criação de Tabelas de Dados Acessíveis](http://www.acessibilidadelegal.com/13-tabelas-acessiveis.php).

### Tabela de dados com seleção de linha

```html
<div class="br-table" data-selection ...>
  <!-- Cabeçalho -->
  <!-- Dados -->
  <table>
    <caption>Título da Tabela</caption>
    <thead>
      <tr>
        <th class="column-checkbox" scope="col">
          <div class="br-checkbox hidden-label">
            <input id="check-all" name="check-all" type="checkbox" aria-label="Selecionar tudo" data-parent="check-01"/>
            <label for="check-all">Selecionar todas as linhas</label>
          </div>
        </th>
        <th scope="col">Título coluna 1</th>
        <th scope="col">Título coluna 2</th>
        <th scope="col">Título coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="br-checkbox hidden-label">
            <input id="check-line-1" name="check-line-1" type="checkbox" aria-label="Selecionar linha 1" data-child="check-01"/>
            <label for="check-line-1">Selecionar linha 1</label>
          </div>
        </td>
        <td data-th="Título coluna 1">Linha 1 coluna 1</td>
        <td data-th="Título coluna 2">Linha 1 coluna 2</td>
        <td data-th="Título coluna 3">Linha 1 coluna 3</td>
      </tr>
      <tr>
        <td>
          <div class="br-checkbox hidden-label">
            <input id="check-line-2" name="check-line-2" type="checkbox" aria-label="Selecionar linha 2" data-child="check-01"/>
            <label for="check-line-2">Selecionar linha 2</label>
          </div>
        </td>
        <td data-th="Título coluna 1">Linha 2 coluna 1</td>
        <td data-th="Título coluna 2">Linha 2 coluna 2</td>
        <td data-th="Título coluna 3">Linha 2 coluna 3</td>
      </tr>
      <tr>
        <td>
          <div class="br-checkbox hidden-label">
            <input id="check-line-3" name="check-line-3" type="checkbox" aria-label="Selecionar linha 3" data-child="check-01"/>
            <label for="check-line-3">Selecionar linha 3</label>
          </div>
        </td>
        <td data-th="Título coluna 1">Linha 3 coluna 1</td>
        <td data-th="Título coluna 2">Linha 3 coluna 2</td>
        <td data-th="Título coluna 3">Linha 3 coluna 3</td>
      </tr>
    </tbody>
  </table>
  <!-- Rodapé -->
</div>
```

### Tabela de dados com collapse

```html
<div class="br-table" data-collapse ...>
  <!-- Cabeçalho -->
  <!-- Dados -->
  <table>
    <caption>Título da Tabela</caption>
    <thead>
      <tr>
        <th class="column-collapse" scope="col"></th>
        <th scope="col">Título coluna 1</th>
        <th scope="col">Título coluna 2</th>
        <th scope="col">Título coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <button class="br-button circle small" type="button" aria-label="Expandir/Retrair Rótulo 01" data-toggle="collapse" data-target="collapse-1-4">
            <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
        </td>
        <td data-th="Título coluna 1">Linha 1 coluna 1</td>
        <td data-th="Título coluna 2">Linha 1 coluna 2</td>
        <td data-th="Título coluna 3">Linha 1 coluna 3</td>
      </tr>
      <tr class="collapse">
        <td id="collapse-1-4" aria-hidden="true" hidden colspan="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies aliquet lacinia. Vestibulum in interdum eros. Donec vel tempus diam. Aenean pulvinar mattis nisi in laoreet. Integer felis mi, vehicula sed pretium sit amet, pellentesque vel nisl. Curabitur metus ante, pellentesque in lectus a, sagittis imperdiet mi.</td>
      </tr>
      <tr>
        <td>
          <button class="br-button circle small" type="button" aria-label="Expandir/Retrair Rótulo 01" data-toggle="collapse" data-target="collapse-2-4">
            <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
        </td>
        <td data-th="Título coluna 1">Linha 2 coluna 1</td>
        <td data-th="Título coluna 2">Linha 2 coluna 2</td>
        <td data-th="Título coluna 3">Linha 2 coluna 3</td>
      </tr>
      <tr class="collapse">
        <td id="collapse-2-4" aria-hidden="true" hidden colspan="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies aliquet lacinia. Vestibulum in interdum eros. Donec vel tempus diam. Aenean pulvinar mattis nisi in laoreet. Integer felis mi, vehicula sed pretium sit amet, pellentesque vel nisl. Curabitur metus ante, pellentesque in lectus a, sagittis imperdiet mi.</td>
      </tr>
      <tr>
        <td>
          <button class="br-button circle small" type="button" aria-label="Expandir/Retrair Rótulo 01" data-toggle="collapse" data-target="collapse-3-4">
            <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
        </td>
        <td data-th="Título coluna 1">Linha 3 coluna 1</td>
        <td data-th="Título coluna 2">Linha 3 coluna 2</td>
        <td data-th="Título coluna 3">Linha 3 coluna 3</td>
      </tr>
      <tr class="collapse">
        <td id="collapse-3-4" aria-hidden="true" hidden colspan="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies aliquet lacinia. Vestibulum in interdum eros. Donec vel tempus diam. Aenean pulvinar mattis nisi in laoreet. Integer felis mi, vehicula sed pretium sit amet, pellentesque vel nisl. Curabitur metus ante, pellentesque in lectus a, sagittis imperdiet mi.</td>
      </tr>
    </tbody>
  </table>
  <!-- Rodapé -->
</div>
```

### Rodapé da Tabela

Incluir o componente Pagination Contextual no rodapé da Tabela.

### Propriedades obrigatórias

| Elemento   | Tipo   | Descrição               |
| ---------- | ------ | ----------------------- |
| `br-table` | classe | Container do componente |

### Propriedades Adicionais

| Elemento | Tipo   | Descrição                          |
| -------- | ------ | ---------------------------------- |
| `small`  | classe | Aplica densidade alta nas linhas   |
| `medium` | classe | Aplica densidade padrão nas linhas |
| `large`  | classe | Aplica densidade baixa nas linhas  |

**OBS**: As colunas do _Header_ da Table não possuem bordas separadoras por padrão. Para tabelas irregulares use as classes `border-top`, `border-right`, `border-top` ou `border-left` manualmente em cada coluna para facilitar a leitura. Veja nos exemplos de **Tabelas Irregulares**.

### Configurações Adicionais

| Propriedade      | Tipo     | Valor padrão | Descrição                         |
| ---------------- | -------- | ------------ | --------------------------------- |
| `data-search`    | atributo |              | Necessário para busca             |
| `data-selection` | atributo |              | Necessário para seleção de linhas |
| `data-toogle`    | atributo |              | Necessário para expansão de linha |

## Dependências

- [Button](/ds/components/button)
- [Checkbox](/ds/components/checkbox)
- [Divider](/ds/components/divider)
- [Input](/ds/components/input)
- [Item](/ds/components/item)
- [List](/ds/components/list)
- [Pagination](/ds/components/pagination)
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

Usar o seguinte código JavaScript para instanciar a classe `BRTable`, passando os seguintes parâmetros:

- Nome da classe (br-table)
- Objeto referenciando a raiz do componente DOM

```javascript
const tableList = []
for (const [index, brTable] of window.document
  .querySelectorAll('.br-table')
  .entries()) {
  tableList.push(new dsgov.BRTable('br-table', brTable, index))
}
```
