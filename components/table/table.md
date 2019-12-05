# Tabela

Uma tabela é um conjunto de listas com duas ou mais dimensões e essas listas são compostas por linhas e colunas. As tabelas são utilizadas para apresentar dados de uma forma organizada. 

Uma tabela HTML é deifnida com a tag `<table>`. 

Cada linha da tabela é definida com uma tag `<tr>`. Um cabeçalho de tabela é definida com a tag `<th>`. 

O padrão dos cabecçalhos da tabela são negrito e centralizado. Uma célula(intersecção da coluna com a linha) da tabela é definida pela tag `<td>`.

## Dependências

- script `table.js` e `select.js`

## Código básico

```html
    <div class="br-table">
      <div class="row search-bar col-sm-12 col-md-12 col-lg-12">
        <div class="table-title col-sm-8 col-md-8 align-items-start">
          Título da Tabela
        </div>
        <div class="actions col-sm-4 col-md-4 align-items-end">
          <i class="fa fa-search" id="table-search"></i>
          <i class="fa fa-ellipsis-v" id="menu-items"></i>
        </div>
      </div>
      <table>
          <thead>
            <tr>
              <th>
                <div class="br-check">
                  <input type="checkbox" id="checkbox">
                  <label for="checkbox"></label>
                </div>
              </th>
              <th>Coluna 1</th>
              <th>Coluna 2</th>
              <th>Coluna 3</th>
              <th>Coluna 4</th>
              <th>Coluna 5</th>
            </tr>  
          </thead>
          <tbody class="table-body">
            <tr>
              <td>
                <div class="br-check">
                  <input type="checkbox" id="checkbox2">
                  <label for="checkbox"></label>
                </div>
              </td>
              <td>Lorem ipsum dolor </td>
              <td>484</td>
              <td>10%</td>
              <td>3258 bytes</td>
              <td>Curabitur tincidunt</td>
            </tr>
          </tbody>
      </table>
      <div class="row col-sm-12 col-md-12 col-lg-12" id='navigation-bar'>
        <div class="items-left col-sm-8 col-md-8">
          <span>Exibir:</span>
          <div class="br-select is-small col-sm-3 col-md-3 col-lg-2">
            <select id="simples">
              <option value="0">10</option>
              <option value="opcao-1">1</option>
              <option value="opcao-2">10</option>
              <option value="opcao-3">15</option>
              <option value="opcao-4">20</option>
            </select>
          </div>
          <span class="divisor-vertical"></span>
          <span>0-10 de 50 itens</span>
        </div>
        <div class="items-right col-sm-4 col-md-4">
          <div class="br-select is-small">
            <select id="simples">
              <option value="0">12</option>
              <option value="opcao-1">1</option>
              <option value="opcao-2">10</option>
              <option value="opcao-3">15</option>
              <option value="opcao-4">20</option>
            </select>
          </div>
          <span>de 48 páginas</span>
          <span class="divisor-vertical"></span>
          <i class="fa fa-angle-left"></i>
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>

```

## Anatomia do componente

Este compomente é formado pelos seguintes elementos:

- `br-table`: container do componente;
- `br-checkbox`: uso do componente checkbox;
- `br-select`: uso do componente select.

## `br-table`

**Elemento obrigatório!**

É a classe principal da criação da tabela.

Exemplo de uso:

``` html
  <div class="br-table">
    <table>
      ... 
    </table>
  </div>
```

## `br-checkbox`

Este componente é compatível com checkbox e deverá ser usado no componente tabela para selecionar um ou mais itens e também pode selecionar todos os itens, para isso o usuário deverá selecionar o primeiro checkbox na parte superior da coluna da tabela.

Exemplo de uso:

``` html
  <div class="br-check">
    <input type="checkbox" id="checkbox">
    <label for="checkbox"></label>
  </div>
```

## `br-select`

Componente usado para mostrar a quantidade de itens por páginas e/ou a página que será exibida na tabela.

Exemplo de uso:

``` html
   <div class="br-select is-small col-sm-3 col-md-3 col-lg-2">
      <select id="simples">
        <option value="0">10</option>
        <option value="opcao-1">1</option>
        ...
      </select>
   </div>
```

## Estados

### `hover`

- É aplicado quando se passa o mouse sobre a linha ou um componente da linha da tabela. E é aplicado através da pseudo-classe :hover

### `checked`

- É aplicado quando o usuário seleciona o elemento de checkbox ou o mesmo possua o atributo `checked`.

Exemplo de uso:

``` html
  <div class="br-check">
    <input type="checkbox" id="checkbox" checked>
    <label for="checkbox"></label>
  </div>
```

### `small`

- É aplicado no componente select para deixá-lo com altura menor e para isso usa-se a classe `is-small`.

Exemplo de uso:

```html
   <div class="br-select is-small">
    <select>
      <option value="0"> 0 </option>
        ...
    </select>
   </div>
```
