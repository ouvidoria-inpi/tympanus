
## Como usar

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

-   [Button](/ds/components/button)
-   [Checkbox](/ds/components/checkbox)
-   [Input](/ds/components/input)
-   [Item](/ds/components/item)
-   [List](/ds/components/list)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="node_modules/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRSelect`, passando os seguintes parâmetros:

-   Nome da classe (br-select)
-   Objeto referenciando a raiz do componente DOM

```javascript

const selectList = []
  for (const brSelect of window.document.querySelectorAll('.br-select')) {
   const brselect = new BRSelect('br-select', brSelect)
   //Exemplo de uso de listener do select
   brSelect.addEventListener('onChange', function (e) { })
   selectList.push(brselect)
  }
```

### Para Obter as Opções Selecionadas

A classe BRSelect oferece duas propriedades para se obter as opções selecionadas

-   `selected` - Obtém-se os valores selecionados relativos às `labels` das opções do select
-   `selectedValue` - Obtém-se os valores selecionados relativos ao atributo `value` dos `inputs` das opções do select

Ambas as propriedades retoram:

-   **Select Simples**: Um único valor selecionado (`string`) ou `undefined` se nenhuma opção foi selecionada
-   **Select Múltiplo**: Um array contendo os valores selecionados (`string`) ou um array vazio se nenhuma opção foi selecionada

### Evento

Quando o usuário clica em um item é mandado o evento `onChange` que tem o atributo detail com o dom do componente.
