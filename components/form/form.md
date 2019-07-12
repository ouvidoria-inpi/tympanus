## Formulários (form)

Para uso de formulários no DS-Gov use o componente `br-form`.

Cada entrada de informação do usuário use o agrupador `field`.

Ao final do formulário use o agrupador `action` para os botões de ação.

Veja como usar `field` e `action` nos exemplos a seguir.

## Uso de field

Use o agrupador `field` para labels e inputs.

```html
<div class="br-form">
  <div class="field">
    <label for="texto">label</label>
    <input id="texto" type="text" placeholder="Insira um texto">
  </div>
</div>
```

O agrupador `field` estiliza automaticamente os seguintes elementos:
- `<label>`
- `<input>`
- `<textarea>`

### Uso da Grid

Use a Grid do DS-Gov para vários `field` em mesma linha. Exemplo:

```html
<div class="br-form">
  <!-- Informar nome completo -->
  <div class="row">
    <!-- Primeiro nome -->
    <div class="col-sm-3">
      <div class="field">
        <label for="first-name">Primeiro nome</label>
        <input type="text" id="first-name">
      </div>
    </div>
    <!-- Último nome -->
    <div class="col-sm-3">
      <div class="form-field">
        <label for="last-name">Ùltimo nome</label>
        <input type="text" id="last-name">
      </div>
    </div>
  </div>
</div>
```

### Estados

O `field` pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- focus
- valid
- invalid
- disabled

Os estados também podem ser aplicados por classe. O uso via classe deve ser usado com o prefixo `is-`. Exemplo:

```html
<div class="br-form">
  <div class="field is-valid">
    <label for="item-3">Validado</label>
    <input id="item-3" type="text" placeholder="Insira um texto">
</div>
</div>
```

> **Atenção**! O estado `disabled` é aplicado somente quando a propriedade está aplicada no input.

### Mensagens de feedback

Nos casos de erros ou retorno positivo do campo é possível usar um template de mensagem dentro do `field`. Veja a seguir um exemplo:

```html
<div class="br-form">
  <div class="field is-invalid">
    <label for="item-2">Com erro</label>
    <input id="item-2" type="text" placeholder="Insira um texto">
    <div class="feedback">
      <i class="fas fa-times-circle"></i>
      <span class="message">Texto inválido</span>
    </div>
  </div>
</div>
```

Para os ícones use a família de ícones Fontawesome - [https://fontawesome.com/](https://fontawesome.com/)

Algumas convenções de ícones:

- Retorno negativo: `fas fa-times-circle`
- Retorno positivo: `fas fa-check-circle`

### Mensagens de ajuda

Nos casos em que for necessário incluir um texto explicativo para auxiliar o usuário a preencher a informação use a classe `help`.

Coloque o texto após o feedback do sistema. Dê preferência a tag html `<p>`.

```html
<div class="br-form">
  <div class="field is-invalid">
    <label for="item-2">Com erro</label>
    <input id="item-2" type="text" placeholder="Insira um texto">
    <div class="feedback">
      <i class="fas fa-times-circle"></i>
      <span class="message">Texto inválido</span>
    </div>
    <p class="help">Texto auxiliar ao preenchimento, tem a função de previnir erros.</p>
  </div>
</div>
```

## Uso de actions

Os botões de ação do formulário devem ficar dentro de `actions`.

```html
<div class="br-form">
  <div class="actions">
    <button class="br-btn is-primary">Ação principal</button>
    <button class="br-btn is-secondary">Ação secundária</button>
    <button class="br-btn is-cancel">Cancelar</button>
  </div>
</div>
```

O agrupador `actions` possui uma regra especial. Para _smartphones_ os botões, além de ocuparem toda a largura disponível, seguem o ordenamento normal. Nos outros dispositivos com larguras maiores o ordenamento dos botões é invertido.

> **Atenção**! O botão de ação principal sempre deve ser declarado primeiro.

O alinhamento (esquerda ou direita) dos `actions` pode ser modificado com as classes **Flex** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content](https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content).
