[version]: # '6.0.8'

## Como usar

### Select Simples

```html
<div class="br-select">
 <div class="br-input">
  <label for="select-simple">Select Simples</label>
  <input id="select-simple" type="text" placeholder="Selecione o item" />
  <button
   class="br-button circle small"
   type="button"
   tabindex="-1"
   data-trigger
  >
   <span class="sr-only">Exibir lista</span
   ><i class="fas fa-angle-down"></i>
  </button>
 </div>
 <div class="br-list" tabindex="0">
  <div class="br-item divider" tabindex="-1">
   <div class="br-radio">
    <input id="rb0" type="radio" name="opcao" value="opcao1" />
    <label for="rb0">Opção 1</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-radio">
    <input id="rb1" type="radio" name="opcao" value="opcao2" />
    <label for="rb1">Opção 2</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-radio">
    <input id="rb2" type="radio" name="opcao" value="opcao3" />
    <label for="rb2">Opção 3</label>
   </div>
  </div>
 </div>
 <div class="feedback">Texto auxiliar Função de previnir erros.</div>
</div>
```

### Select Múltiplo

```html
<div class="br-select" data-multiple>
 <div class="br-input">
  <label for="select-multtiple">Select Múltiplo</label>
  <input
   id="select-multtiple"
   type="text"
   placeholder="Selecione os itens"
  />
  <button
   class="br-button circle small"
   type="button"
   tabindex="-1"
   data-trigger
  >
   <span class="sr-only">Exibir lista</span>
   <i class="fas fa-angle-down"></i>
  </button>
 </div>
 <div class="br-list" tabindex="0">
  <div class="br-item highlighted divider" data-all tabindex="-1">
   <div class="br-checkbox">
    <input id="cb" type="checkbox" />
    <label for="cb">Selecionar todos</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-checkbox">
    <input id="cb0" type="checkbox" name="opcao1" />
    <label for="cb0">Opção 1</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-checkbox">
    <input id="cb1" type="checkbox" name="opcao2" />
    <label for="cb1">Opção 2</label>
   </div>
  </div>
  <div class="br-item divider" tabindex="-1">
   <div class="br-checkbox">
    <input id="cb2" type="checkbox" name="opcao4" />
    <label for="cb2">Opção 3</label>
   </div>
  </div>
 </div>
</div>
<div class="feedback">Texto auxiliar Função de previnir erros.</div>
```

### Configurações obrigatórias

| Atributo      | Tipo     | Descrição                                                       |
| ------------- | -------- | --------------------------------------------------------------- |
| `br-select`   | classe   | Container do componente Select                                  |
| `br-input`    | classe   | Container do componente Input                                   |
| `br-button`   | classe   | Container do componente Button                                  |
| `br-list`     | classe   | Container do componente List                                    |
| `br-item`     | classe   | Container do componente Item                                    |
| `br-checkbox` | classe   | Container do componente br-checkbox (apenas no Select Múltiplo) |
| `highlighted` | classe   | Aplica o estado destacado                                       |
| `circle`      | classe   | Aplica o Tipo Circular.                                         |
| `small`       | classe   | Aplica a Densidade Alta                                         |
| `trigger`     | atributo | Configura o button como gatilho de abertura da lista de itens   |
| `all`         | atributo | Seta a opção Selecionar todos                                   |
| `name`        | atributo | Deve ser inseridos nos inputs radio e checkbox                  |
| `value`       | atributo | Deve ser inseridos nos inputs radio e checkbox                  |

**Os input tipo `checkbox` e `radio` ,que nesse componente são utilizada para selecionar itens,seguem o padrão do w3c de formulário**

### Configurações Adicionais

| Elemento   | Tipo               | Descrição                                     |
| ---------- | ------------------ | --------------------------------------------- |
| `divider`  | classe ou atributo | Aplica Separador nos Itens do Select Múltiplo |
| `feedback` | classe             | Mensagem auxiliar de feedback                 |

## Estados

| Estado     | Tipo     | Descrição                                              |
| ---------- | -------- | ------------------------------------------------------ |
| `checked`  | atributo | Aplica estado selecionado nos Items do Select Múltiplo |
| `expanded` | atrubuto | Aplica o estado expandido na lista de items do Select  |

## Próximos passos

| Nome                                                   | Documentação de Design | Desenvolvimento |
| ------------------------------------------------------ | ---------------------- | --------------- |
| Otimizar o resultado da pesquisa por itens             | Não planejado          | Não planejado   |
| Implementar atualização do select em tempo de execução | Não planejado          | Não planejado   |

## Dependências

- [Button](/components/button)
- [Checkbox](/components/checkbox)
- [Input](/components/input)
- [Item](/components/item)
- [List](/components/list)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbrds.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/govbrds.min.js"></script>
```

> O arquivo govbrds.min.js expõe um objeto chamado `govbrds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRSelect`, passando os seguintes parâmetros:

- Nome da classe (br-select)
- Objeto referenciando a raiz do componente DOM

```javascript
const selectList = []
for (const brSelect of window.document.querySelectorAll('.br-select')) {
  selectList.push(new govbrds.BRSelect('br-select', brSelect))
}
```
### Para Obter as Opções Selecionadas

A classe BRSelect oferece duas propriedades para se obter as opções selecionadas

- `selected` - Obtém-se os valores selecionados relativos às `labels` das opções do select
- `selectedValue` - Obtém-se os valores selecionados relativos ao atributo `value` dos `inputs` das opções do select

Ambas as propriedades retoram:

- **Select Simples**: Um único valor selecionado (`string`) ou `undefined` se nenhuma opção foi selecionada
- **Select Múltiplo**: Um array contendo os valores selecionados (`string`) ou um array vazio se nenhuma opção foi selecionada
