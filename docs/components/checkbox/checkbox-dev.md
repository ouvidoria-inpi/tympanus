## Como usar

### Html

```html
    <div class="container-fluid">
      <div class="description">
        <p class="title-checkbox">Checkbox Horizontal Padrão (Titulo opcional).</p>
        <p class="auxiliary text">Texto auxiliar(opcional).</p>
      </div>
      <div class="list-options">
        <div class="br-checkbox pb-5 pr-5 ml-3 d-inline-block">
          <input id="h-checkbox-default" type="checkbox">
          <label for="h-checkbox-default">Padrão</label>
        </div>
        <div class="br-checkbox pb-5 pr-5 ml-3 d-inline-block">
          <input id="h-checkbox-checked" type="checkbox" checked>
          <label for="h-checkbox-checked">Checado</label>
        </div>
        <div class="br-checkbox pb-5 pr-5 ml-3 d-inline-block is-invalid">
          <input id="h-checkbox-invalid" type="checkbox">
          <label for="h-checkbox-invalid">Inválido</label>
          <div class="feedback is-invalid p-0"><i class="fas fa-times-circle"></i>
            <span>Preenchimento Obrigatório</span>
          </div>
        </div>
        <div class="br-checkbox pb-5 pr-5 ml-3 d-inline-block is-valid">
          <input id="h-checkbox-valid" type="checkbox" checked>
          <label for="h-checkbox-valid">Válido</label>
          <div class="feedback is-valid p-0"><i class="fas fa-check-circle"></i>
            <span>Campo Correto</span>
          </div>
        </div>
        <div class="br-checkbox ml-3 pb-5 pr-5 d-inline-block">
          <input id="h-checkbox-disabled" type="checkbox" disabled>
          <label for="h-checkbox-disabled">Desativado</label>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-4 pb-5 pr-5">
          <div class="description">
            <p class="title-checkbox">Checkbox Vertical Padrão (Título opcional).</p>
            <p class="auxiliary text">Texto auxiliar(opcional).</p>
          </div>
          <div class="list-options">
            <div class="br-checkbox">
              <input id="v-checkbox-default" type="checkbox">
              <label for="v-checkbox-default">Padrão</label>
            </div>
            <div class="br-checkbox">
              <input id="v-checkbox-checked" type="checkbox" checked>
              <label for="v-checkbox-checked">Checado</label>
            </div>
            <div class="br-checkbox is-invalid">
              <input id="v-checkbox-invalid" type="checkbox">
              <label for="v-checkbox-invalid">Inválido</label>
              <div class="feedback is-invalid p-0"><i class="fas fa-times-circle"></i>
                <span>Preenchimento Obrigatório</span>
              </div>
            </div>
            <div class="br-checkbox is-valid">
              <input id="v-checkbox-valid" type="checkbox" checked>
              <label for="v-checkbox-valid">Válido</label>
              <div class="feedback is-valid p-0"><i class="fas fa-check-circle"></i>
                <span>Campo Correto</span>
              </div>
            </div>
            <div class="br-checkbox d-block">
              <input id="v-checkbox-disabled" type="checkbox" disabled>
              <label for="v-checkbox-disabled">Desativado</label>
            </div>
          </div>
        </div>
        <div class="col-sm-4 pb-5 pr-5">
          <div class="description">
            <p class="title-checkbox">Checkbox Pequeno (Título opcional).</p>
            <p class="auxiliary text">Texto auxiliar(opcional).</p>
          </div>
          <div class="list-options">
            <div class="br-checkbox is-small">
              <input id="v-s-checkbox-default" type="checkbox">
              <label for="v-s-checkbox-default">Padrão</label>
            </div>
            <div class="br-checkbox is-small">
              <input id="v-s-checkbox-checked" type="checkbox" checked>
              <label for="v-s-checkbox-checked">Checado</label>
            </div>
            <div class="br-checkbox is-small is-invalid">
              <input id="v-s-checkbox-invalid" type="checkbox">
              <label for="v-s-checkbox-invalid">Inválido</label>
              <div class="feedback is-invalid p-0"><i class="fas fa-times-circle"></i>
                <span>Preenchimento Obrigatório</span>
              </div>
            </div>
            <div class="br-checkbox is-small is-valid">
              <input id="v-s-checkbox-valid" type="checkbox" checked>
              <label for="v-s-checkbox-valid">Válido</label>
              <div class="feedback is-valid p-0"><i class="fas fa-check-circle"></i>
                <span>Campo Correto</span>
              </div>
            </div>
            <div class="br-checkbox is-small">
              <input id="v-s-checkbox-disabled" type="checkbox" disabled>
              <label for="v-s-checkbox-disabled">Desativado</label>
            </div>
          </div>
        </div>
      </div>
    </div>
```


#### Propriedades obrigatórias

| Tag    | Atributo     | Valor padrão  | Descrição                                             |
| ------ | ------------ | ------------  | ----------------------------------------------------  |
| div    | class        | br-checkbox   | Container do componente (posição vertical é o padrão) |
| div    | class        | list-options  | Container que engloba a caixa e item de opção         |
| div    | class        | pb-5 pr-5 ml-3| Espaçamento do checkbox horizontal                    |
| input  | type         | checkbox      | Caixa de opção (checkbox)                             |
| input  | id           |v-s-checkbox-default| Identificador da caixa de opção (checkbox)       |
| label  | for          |v-s-checkbox-default| Identificador do texto descritivo (label)        |


#### Propriedades Adicionais

| Tag    | Atributo | Valor padrão      | Descrição                                             |
|------- | -------- | ----------------- | ----------------------------------------------------  |
| div    | class    | d-inline-block    | Classe utilizada para checkbox horizontal             |
| div    | class    |col-sm-4 pb-5 pr-5 | Engloba e faz o espaçamento do container do checkbox  |
| div    | class    | descripton        | Container que engloba o título e texto auxiliar       |
| div    | class    | title-checkbox    | Título do checkbox                                    |
| div    | class    | auxiliary-text    | Texto auxiliar (complementar do título)               |
| div    | class    | feedback          | Container de mensagem de retorno(válid ou inválido)   |
| div    | class    | is-small          | Transforma a caixa de opção em tamanho menor          |

#### Estados

| Estado        | Atributo    | Valor       | Descrição                                            |
| --------------| ------------|-------------| -----------------------------------------------------|
| Checado       | atributo    | checked     | Caixa de opção aplicada como checada                 |
| Inválido      | classe      | is-invalid  | Usado para indicar um checkbox e um feedback inválido|
| Válido        | classe      | is-valid    | Usado para indicar um checkbox e um feedback válido  |
| Desabilitado  | atributo    | disabled    | Desabilita a opção de seleção no checkbox            |
| Destaque(hover)|pseudo-classe| :hover     | Aplicado automaticamente para realçar o elemento     |

### Javascript

Poderá ser desenvolvido conforme a necessidade do usuário final.

#### Configurações obrigatórias

- Utilizar o elemento com a classe `"br-checkbox"` e inicializar o construtor do componente.

#### Configurações Adicionais

- Uso das classes `"description"`, `"title-checkbox"` e `"auxiliary-text"` quando for usar descrição (título) do checkbox e texto auxiliar da descrição, se acaso for necessário.



## Dependências

Não há dependências.