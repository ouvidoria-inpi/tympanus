# Documentação de Desenvolvedor
[version]: # '6.0.0'

### HTML

```html
<div class="br-datepicker" data-mode="single" data-type="text">
    <div class="br-input">
        <label for="simples-input">Data Simples</label>
        <input id="simples-input" type="text" placeholder="dd-mm-aaaa" data-input>
        <button class="icon" type="button" id="simples-input-btn" data-toggle><span class="sr-only">Abrir Timepicker</span><i class="fas fa-calendar-alt"></i>
        </button>
    </div>
</div>
<div class="mt-1">
    <div class="feedback color-success">
        <div class="icon"><i class="fas fa-check-circle"></i></div>Data válida
    </div>
    <p class="help-text">Informações adicionais</p>
</div>
```

#### Elementos obrigatórios

| Elemento           | Descrição                                     |
| ------------------ | --------------------------------------------- |
| `.br-datepicker`   | Container do componente                       |
| `data-mode`        | Modo do datepicker: single ou range           |
| `.br-input`        | Container do componente input                 |

#### Elementos opcionais

| Elemento                   | Descrição                                         |
| -------------------------- | --------------------------------------------------|
| `.mt-1`                    | Classe auxiliar do bootstrap para margem superior |
| `.feedback .color-success` | Em situações de erro ou retorno positivo use o `feedback`. Ele deve ser inserido imediatamente após o `br-datepicker`                                 |
| `.help-text`               | Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida imediatamente após o `br-datepicker` .                                           |

#### Propriedades obrigatórias

| Atributo    | Tipo    | Valor padrão | Descrição                                                           |
| ----------- | ------- | ------------ | ------------------------------------------------------------------- |
| placeholder | string  | dd-mm-aaaa   | Formato padrão de data                                              |
| data-input  | boolean | true         | Indica que o input irá receber o valor selecionado no datepicker |

#### Estados

| Elemento | Tipo     | Descrição                                                                                        |
| -------- | -------- | -------------------------------------------------------------------------------------------------|
| disabled | atributo | Desabilita o componente (deve ser aplicado no input)                                             |
| invalid  | atributo | Formata a versão inválida para o componente (usado em validações, deve ser aplicado no br-input) |
| valid    | atributo | Formata a versão válida para o componente (usado em validações, deve ser aplicado no br-input)   |

### Javascript

A classe do BRDatepicker controla a execução do componente.

> É importante instanciar cada componente datepicker colocado na tela. Abaixo há uma forma de fazer essa instanciação.

```javascript
const datepickerList = []
for (const brDatepicker of window.document.querySelectorAll('.br-datepicker')) {
  datepickerList.push(new BRDatepicker('br-datepicker', brDatepicker))
}
```

#### Configurações e Propriedades Adicionais

Esse componente foi baseado no `flatpickr v4` para uma documentação detalhada do funcionamento dos scripts [acesse a página do flatpickr v4](https://flatpickr.js.org/).

## Dependências

| Internas                        | Externas                                   |
| ------------------------------- | ------------------------------------------ |
| [Input](/ds/components/input)   | [flatpickr v4](https://flatpickr.js.org/)  |
| [Button](/ds/components/button) |                                            |

## Links relacionados

Esse componente foi baseado no `flatpickr v4` para uma documentação detalhada do funcionamento dos scripts [acesse a página do flatpickr v4](https://flatpickr.js.org/)