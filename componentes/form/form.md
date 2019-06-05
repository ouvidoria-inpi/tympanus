## Formulários (form)

Os forms do DS-Gov formatam seus componentes internos no padrão de forma automática.

Alguns dos componentes isolados de formulário podem ser usados fora do container `br-form`.

Recomendamos o uso de `field` para agrupar campos de informações em formularios e `action` para agrupar os botões de ação do formulário.

Veja os exemplos a seguir.

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

Use a Grid para separar `field` de uma mesma linha. Exemplo:

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

## Uso de actions

Os botões de ação do formulário devem ficar dentro da classe `actions`.

```html
<div class="br-form">
  <div class="actions">
    <button class="br-btn br-btn-primary">Ação principal</button>
    <button class="br-btn br-btn-secondary">Ação secundária</button>
    <button class="br-btn br-btn-cancel">Cancelar</button>
  </div>
</div>
```

O agrupador `actions` possui uma regra especial. Para _smartphones_ os botões, além de ocuparem toda a largura disponível, seguem o ordenamento normal. Para outros dispositivos com larguras maiores o ordenamento dos botões é invertido.

> O botão de ação principal sempre deve ser declarado primeiro.

O alinhamento interno dos `actions` pode ser modificado com as classes **Flex** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content](https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content).
