[version]: # (6.0.9)

## Como usar

### Datepicker padrão

```html
<div class="br-datetimepicker" data-mode="single" data-type="text">
  <div class="br-input has-icon">
    <label for="simples-input">DateTimePicker simples</label>
    <input class="has-icon" id="simples-input" type="text" placeholder="dd/mm/aaaa" data-input="data-input"/>
    <button class="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="simples-input-btn"><i class="fas fa-calendar-alt" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

### Datepicker com intervalo de datas

```html
<div class="br-datetimepicker" data-mode="range" data-type="text">
  <div class="br-input has-icon">
    <label for="range-input">DateTimePicker com intervalo de datas</label>
    <input class="has-icon" id="range-input" type="text" placeholder="dd/mm/aaaa até dd/mm/aaaa" data-input="data-input"/>
    <button class="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="range-input-btn"><i class="fas fa-calendar-alt" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

### Timepicker

```html
<div class="br-datetimepicker" data-mode="single" data-type="time">
  <div class="br-input has-icon">
    <label for="timepicker-input">Timepicker</label>
    <input class="has-icon" id="timepicker-input" type="time" placeholder="hh:mm" data-input="data-input"/>
    <button class="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="timepicker-input-btn"><i class="fas fa-clock" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

### Datepicker + Timepicker

```html
<div class="br-datetimepicker" data-mode="single" data-type="datetime-local">
  <div class="br-input has-icon">
    <label for="dateandtime-input">DatePicker + Timepicker</label>
    <input class="has-icon" id="dateandtime-input" type="datetime-local" placeholder="dd/mm/aaaa hh:mm" data-input="data-input"/>
    <button class="br-button circle small" type="button" aria-label="Abrir Timepicker" data-toggle="data-toggle" id="dateandtime-input-btn"><i class="fas fa-calendar-alt" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

### Elementos obrigatórios

| Elemento             | Tipo   | Descrição                     |
| -------------------- | ------ | ----------------------------- |
| `.br-datetimepicker` | classe | Container do componente       |
| `.br-input`          | classe | Container do componente input |

### Propriedades obrigatórias

| Atributo     | Tipo     | Valor padrão                 | Descrição                                                            |
| ------------ | -------- | ---------------------------- | -------------------------------------------------------------------- |
| `data-mode`  | atributo | single ou range              | Modo do data única ou intervalo de data                              |
| `data-type`  | atributo | text, time ou datetime-local | Tipo datetimepicker, timepicker ou datetimepicker + timepicker       |
| `data-input` | boolean  | true                         | Indica que o input irá receber o valor selecionado no datetimepicker |

> **Atenção**! O atributo `data-input` deve ser inserido na tag `<input>`.

## Dependências

-   [Button](/components/button)
-   [Input](/components/input)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRDateTimePicker`, passando os seguintes parâmetros:

-   Nome da classe (br-datetimepicker)
-   Objeto referenciando a raiz do componente DOM

```javascript
const datetimepickerList = []
for (const brDateTimePicker of window.document.querySelectorAll(
  '.br-datetimepicker'
)) {
  datetimepickerList.push(
    new core.BRDateTimePicker('br-datetimepicker', brDateTimePicker)
  )
}
```
