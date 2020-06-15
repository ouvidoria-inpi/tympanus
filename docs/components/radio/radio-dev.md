## Como usar

### HTML

```html
    <div class="container-fluid">
      <div class="description">
        <p class="title-radiobutton">....</p>
        <p class="auxiliary-text">...</p>
      </div>
      <div class="list-options">
        <div class="br-radio pb-5 pr-5 ml-3 d-inline-block">
          <input id="h-radio-default" type="radio" name="selecione">
          <label for="h-radio-default">Padrão</label>
        </div>
        <div class="br-radio pb-5 pr-5 ml-3 d-inline-block">
          <input id="h-radio-checked" type="radio" name="selecione" checked>
          <label for="h-radio-checked">Checado</label>
        </div>
      </div>
    </div>
```


#### Propriedades obrigatórias

| Tag    | Atributo     | Valor padrão  | Descrição                                             |
| ------ | ------------ | ------------  | ----------------------------------------------------  |
| div    | class        | br-radio      | Container do componente (posição vertical é o padrão) |
| div    | class        | list-options  | Container que engloba a caixa e item de opção         |
| div    | class        | pb-5 pr-5 ml-3| Espaçamento do radio button horizontal                |
| div    | class        | pb-5 pr-5     | Espaçamento do radio button vertical                  |
| input  | type         | radio         | Caixa de opção (radio button)                         |
| input  | id           |v-s-radio-default| Identificador da caixa de opção (radio  button)     |
| label  | for          |v-s-radio-default| Identificador do texto descritivo (label)           |


#### Propriedades Adicionais

| Tag    | Atributo | Valor padrão      | Descrição                                             |
|------- | -------- | ----------------- | ----------------------------------------------------  |
| div    | class    | d-inline-block    | Classe utilizada para radio button horizontal         |
| div    | class    |col-sm-4 pb-5 pr-5 | Engloba/faz o espaçamento do container do radio button |
| div    | class    | descripton        | Container que engloba o título e texto auxiliar       |
| div    | class    | title-radio       | Título do radio button                                |
| div    | class    | auxiliary-text    | Texto auxiliar (complementar do título do radio button)|
| div    | class    | feedback          | Container de mensagem de retorno(válid ou inválido)   |
| div    | class    | is-small          | Transforma a caixa de opção em tamanho menor          |

#### Estados

| Estado        | Atributo    | Valor       | Descrição                                            |
| --------------| ------------|-------------| -----------------------------------------------------|
| Checado       | atributo    | checked     | Caixa de opção aplicada como checada                 |
| Inválido      | classe      | is-invalid  | Indica um radio button e um feedback inválido        |
| Válido        | classe      | is-valid    | Indica um radio button e um feedback válido          |
| Desabilitado  | atributo    | disabled    | Desabilita a opção de seleção do radio button        |
| Destaque(hover)|pseudo-classe| :hover     | Aplicado automaticamente para realçar o elemento     |

### Javascript

Poderá ser desenvolvido conforme a necessidade do usuário final.

#### Configurações obrigatórias

- Utilizar o elemento com a classe `"br-radio"` e inicializar o construtor do componente.

#### Configurações Adicionais

- Para fazer uma descrição do componente radio button, use a classe `"description"` que engloba as classes `"title-radio"` (Título do radio button) e `"auxiliary-text"` (texto auxiliar). Lembrando que esse item é opcional.



## Dependências

Não há dependências.