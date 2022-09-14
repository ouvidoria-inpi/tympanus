[version]: # '6.0.8'

## Como usar



### Propriedades obrigatórias

| Atributo | Tipo     | Valor Padrão    | Descrição                                     |
| -------- | ---------| --------------- | --------------------------------------------- |
| class    |  string  | **br-select**     | Container do componente Select                |
| class    |  string  | **br-input**      | Container do componente Input                 |
| class    |  string  | **br-button**     | Container do componente Button                |
| class    |  string  | **br-list**       | Container do componente List                  |
| class    |  string  | **br-item**       | Container do componente Item                  |
| class    |  string  | **br-checkbox**   | Container do componente br-checkbox (apenas no Select Múltiplo) |
| class    |  string  | **highlighted**   |  Aplica o estado destacado                    |
| class    |  string  | **circle**        |  Aplica o Tipo Circular.                      |
| class    |  string  | **small**         |  Aplica a Densidade Alta                      |
| atributo |  string  | **trigger**       | Configura o button como gatilho de abertura da lista de itens   |
| atributo |  string  | **all**           | Seta a opção Selecionar todos                                   |
| atributo |  string  | **name**          | Deve ser inseridos nos inputs radio e checkbox                  |
| atributo |  string  | **value**         | Deve ser inseridos nos inputs radio e checkbox                  |



### Propriedades Adicionais

| Atributo | Tipo     | Valor Padrão    | Descrição                                     |
| -------- | -------- | --------------- | --------------------------------------------- |
|  classs  |  string  |  **divider**      | Aplica Separador nos Itens do Select Múltiplo |
|  classs  |  string  |  **feedback**     | Mensagem auxiliar de feedback                 |

## Estados

| Estado            | atributo   | Valores          | 
| ----------------- | ---------- | ---------------- |
| Select Múltiplo   | `checked`  |                  |
| Select expandido  | `expanded` |                  |




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
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRSelect`, passando os seguintes parâmetros:

-   Nome da classe (br-select)
-   Objeto referenciando a raiz do componente DOM

```javascript

const selectList = []
for (const brSelect of window.document.querySelectorAll('.br-select')) {
	const brselect = new core.BRSelect('br-select', brSelect)
	//Exemplo de uso de listener do select
	brSelect.addEventListener('onChange', function (e) { })
	selectList.push(brselect)
}
```


## Informações adicionais

**Os input tipo **checkbox** e **radio** ,que nesse componente são utilizada para selecionar itens,seguem o padrão do w3c de formulário**


### Para Obter as Opções Selecionadas

A classe BRSelect oferece duas propriedades para se obter as opções selecionadas

-   `selected` - Obtém-se os valores selecionados relativos às `labels` das opções do select
-   `selectedValue` - Obtém-se os valores selecionados relativos ao atributo `value` dos `inputs` das opções do select

Ambas as propriedades retoram:

-   **Select Simples**: Um único valor selecionado (`string`) ou `undefined` se nenhuma opção foi selecionada
-   **Select Múltiplo**: Um array contendo os valores selecionados (`string`) ou um array vazio se nenhuma opção foi selecionada

### Evento

Quando o usuário clica em um item é mandado o evento `onChange` que tem o atributo detail com o dom do componente.


