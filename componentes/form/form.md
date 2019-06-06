## Formulários (form)

Para usar os componentes comuns de formulários no DS-Gov use a classe `br-form`.

Para cada entrada de informação do usuário use a classe `field`.

Ao final do formulário use a classe `action` para agrupar os botões de ações.

Veja como usar `field` e `action` nos exemplos a seguir.

## Uso de field

Use sempre a classe `field` para agrupar labels e inputs.

```html
<div class="br-form">
  <div class="field">
    <label for="texto">label</label>
    <input id="texto" type="text" placeholder="Insira um texto">
  </div>
</div>
```

Use a Grid para separar `field` numa mesma linha. Exemplo:

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

## Validações em fields

Aplique as classes de validações diretamente em cada `field`. A mensagem de retorno para o usuário possue um template próprio e deve ser inserido logo após o `input`. Veja no exemplo a seguir.

```html
<div class="field invalid">
  <label for="item-2">Com erro</label>
  <input id="item-2" type="text" placeholder="Insira um texto">
  <div class="feedback">
    <i class="fas fa-times"></i>
    <span class="message">Texto inválido</span>
  </div>
</div>
```

Para os ícones use a família de ícones Fontawesome - [https://fontawesome.com/](https://fontawesome.com/)

Algumas convenções de ícones:

- Retorno negativo: `fas fa-times`
- Retorno positivo: `fas fa-check`

## Uso de actions

Os botões de ação do formulário devem ficar dentro da classe `actions`.

```html
<div class="br-form">
  <div class="actions">
    <button class="br-btn btn-primary">Ação principal</button>
    <button class="br-btn btn-secondary">Ação secundária</button>
    <button class="br-btn btn-cancel">Cancelar</button>
  </div>
</div>
```

O agrupador `actions` possui uma regra especial. Para _smartphones_ os botões, além de ocuparem toda a largura disponível, seguem o ordenamento normal. Nos outros dispositivos com larguras maiores o ordenamento dos botões é invertido.

> **Atenção**! O botão de ação principal sempre deve ser declarado primeiro.

O alinhamento (esquerda ou direita) dos `actions` pode ser modificado com as classes **Flex** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content](https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content).
