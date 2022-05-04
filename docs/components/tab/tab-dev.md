[Version]: # (6.2.5)

## Como usar

### Tab Simples

```html
<div class="br-tab">
  <nav class="tab-nav">
    <ul>
      <li class="tab-item">
        <button type="button" data-panel="panel-1">
            <span class="name">Sobre</span>
        </button>
      </li>
      <li class="tab-item">
        <button type="button" data-panel="panel-2">
            <span class="name">Todos</span>
        </button>
      </li>
      <li class="tab-item active">
        <button type="button" data-panel="panel-3">
            <span class="name">Notícias</span>
        </button>
      </li>
      <li class="tab-item">
        <button type="button" data-panel="panel-4">
            <span class="name">Serviços</span>
        </button>
      </li>
      <li class="tab-item">
        <button type="button" data-panel="panel-5">
            <span class="name">Aplicativos</span>
        </button>
      </li>
      <li class="tab-item">
        <button type="button" data-panel="panel-6">
            <span class="name">Mídias</span>
        </button>
      </li>
    </ul>
  </nav>
  <div class="tab-content">
    <div class="tab-panel" id="panel-1">
      <p>Painel Sobre</p>
    </div>
    <div class="tab-panel" id="panel-2">
      <p>Painel Todos</p>
    </div>
    <div class="tab-panel active" id="panel-3">
      <p>Painel Noticias</p>
    </div>
    <div class="tab-panel" id="panel-4">
      <p>Painel Serviços</p>
    </div>
    <div class="tab-panel" id="panel-5">
      <p>Painel Aplicativos</p>
    </div>
    <div class="tab-panel" id="panel-6">
      <p>Painel Mídias</p>
    </div>
  </div>
</div>
```

### Tab com contadores

```html
<div class="br-tab" data-counter="true">
  <nav class="tab-nav">
    <ul>
      <li class="tab-item active">
        <button type="button" data-panel="panel-8">
            <span class="name">Notícias</span>
        </button>
        <span class="results">( 74 )</span>
      </li>
      <li class="tab-item">
        <button type="button" data-panel="panel-9">
            <span class="name">Serviços</span>
        </button>
        <span class="results">( 16 )</span>
      </li>
      <li class="tab-item">
        <button type="button" data-panel="panel-10">
            <span class="name">Aplicativos</span>
        </button>
        <span class="results">( 12 )</span>
      </li>
    </ul>
  </nav>
  <div class="tab-content">
    <div class="tab-panel active" id="panel-8">
      <p>Painel Notícias</p>
    </div>
    <div class="tab-panel" id="panel-9">
      <p>Painel Serviços</p>
    </div>
    <div class="tab-panel" id="panel-10">
      <p>Painel Aplicativos</p>
    </div>
  </div>
</div>
```

### Elementos obrigatórios

| Elemento       | Tipo   | Descrição                        |
| -------------- | ------ | -------------------------------- |
| `.br-tab`      | classe | Container do componente          |
| `.tab-nav`     | classe | Container das abas               |
| `.tab-content` | classe | Container dos conteúdos das abas |
| `.tab-item`    | classe | Título da aba                    |
| `.tab-panel`   | classe | Conteúdo da aba                  |

### Propriedades obrigatórias

| Atributo                  | Tipo   | Descrição                                        |
| ------------------------- | ------ | ------------------------------------------------ |
| `.active` ou `.is-active` | classe | Usar na aba ativa (**tab-item** e **tab-panel**) |

### Configurações Adicionais

| Atributo       | Tipo     | Valor padrão | Descrição                                                                                                              |
| -------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `data-counter` | atributo | true         | Atributo para ativar o contador, é necessário utilizar o atributo data-counter com o valor true na mesma div no br-tas |

## Instanciação do Componente

### HTML

Incluir o arquivo `govbrds.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/govbrds.min.js"></script>
```

> O arquivo govbrds.min.js expõe um objeto chamado `govbrds` contendo as referências para todas as classes exportadas.

### Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRTab`, passando os seguintes parâmetros:

- Nome da classe (br-tab)
- Objeto referenciando a raiz do componente DOM

```javascript
const abasList = []
for (const brTab of window.document.querySelectorAll('.br-tab')) {
  abasList.push(new govbrds.BRTab('br-tab', brTab))
}
```
