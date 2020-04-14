## Dependências

* script `datepicker.min.js` (código minificado do componente [js-datepicker](https://www.npmjs.com/package/js-datepicker))
* script `datepicker-dsgov.js` (código de regionalização e customização do componente)
* componente `br-input` , o Datepicker é uma extensão do componente Input

## Código básico

``` html
<div class="br-input datepicker">
    <label for="picker">Data</label>
    <input id="picker" type="text" placeholder="dd/mm/aaaa" />
    <button id="picker-btn" class="icon">
        <i class="fas fa-calendar-alt"></i>
    </button>
</div>
<div class="feedback is-valid">
    <i class="fas fa-check-circle"></i>
    <span class="message">Data válida</span>
</div>
<div class="feedback is-invalid">
    <i class="fas fa-times-circle"></i>
    <span class="message">Data inválida</span>
</div>
<p class="help">
    Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

* `br-input datepicker` : container do componente
* `<label>` : rótulo do input
* `<input>` : caixa de entrada de dados
* `<button>` : botão com ícone para o `<input>` 
* `feedback` : mensagem de feedback
* `help` : Texto de ajuda para o `<input>` (opcional)

## `<button>` 

O input datepicker tem um botão com ícone do Fontawesome - `<i class="fas.fa-calendar-alt">` .

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

``` html
<div class="br-input datepicker">
    <label for="datepicker">Data</label>
    <input id="datepicker" type="text" />
    <button class="icon">
        <i class="fas fa-calendar-alt"></i>
    </button>
</div>
```

## `feedback` 

Em situações de erro ou retorno positivo use o `feedback` . Ele deve ser inserido imediatamente após o `br-input` .

O texto de feedback deve ser inserido dentro de `message` .

Exemplo de uso:

``` html
<div class="br-input datepicker is-invalid">
    <label for="date-feedback-invalid">Input com erro</label>
    <input id="date-feedback-invalid" type="text" />
    <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<div class="feedback">
    <i class="fas fa-times-circle"></i>
    <span class="message">Data inválida</span>
</div>
```

## `help` 

Uma mensagem de ajuda PODE ser incluída. Ela deve ser inserida imediatamente após o `br-input` .

Exemplo de uso:

``` html
<div class="br-input datepicker">
    <label for="date-help">Label</label>
    <input id="date-help" type="text" placeholder="dd/mm/aaaa" />
    <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<p class="help">
    Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

# Estados

Este componente apresenta os seguintes estados:

* valid
* invalid
* disabled

## `valid` 

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente.

O `feedback is-valid` deve ser incluído imediatamente após o componente com o ícone `<i class="fas fa-check-circle">` e o texto `message` .

Exemplo de uso:

``` html
<div class="br-input datepicker is-valid">
    <label for="valido">Válido</label>
    <input id="valido" type="text" placeholder="dd/mm/aaaa" />
    <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<div class="feedback is-valid">
    <i class="fas fa-check-circle"></i>
    <span class="message">Data válida</span>
</div>
```

## `invalid` 

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente.

O `feedback is-invalid` deve ser incluído imediatamente após o `valid` , seguindo sua mesma estrutura, porém o ícone do `feedback` é o `<i class="fas fa-times-circle">` .

Caso exista `help` ele deverá ficar após os `feedbacks` .

Exemplo de uso:

``` html
<div class="br-input datepicker is-invalid">
    <label for="invalido">Inválido</label>
    <input id="invalido" type="text" placeholder="dd/mm/aaaa" />
    <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
<div class="feedback is-valid">
    <i class="fas fa-check-circle"></i>
    <span class="message">Data válida</span>
</div>
<div class="feedback is-invalid">
    <i class="fas fa-times-circle"></i>
    <span class="message">Data inválida</span>
</div>
<p class="help">
    Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

## `disabled` 

DEVE ser aplicado diretamente usando o prefixo `is-` ao container do componente, bem como a propriedade `disabled` no `<input>` .

Exemplo de uso:

``` html
<div class="br-input datepicker is-disabled">
    <label for="desabilitado">Desabilitado</label>
    <input class="br-input datepicker" id="desabilitado" type="text" placeholder="dd/mm/aaaa" disabled />
    <button class="icon"><i class="fas fa-calendar-alt"></i></button>
</div>
```

# Regras especiais

Esse componente foi baseado no `js-datepicker` para uma documentação detalhada do funcionamento dos scripts [acesse a página do js-datepicker](https://www.npmjs.com/package/js-datepicker)

## Inicialização do componente

Importados os scripts das depedências do componente em sua página, no seu código javascript, deve-se criar uma constante ( `const` ) do tipo `datepicker` que referencia a `id` do campo `br-input datepicker` , além de vincular o `button` ao seu respectivo `datepicker` e ativar a máscara do input. Conforme exemplo a seguir:

### HTML:

``` html
<div class="br-input datepicker">
    <label for="picker">Data</label>
    <input id="picker" type="text" placeholder="dd/mm/aaaa" />
    <button id="picker-btn" class="icon">
        <i class="fas fa-calendar-alt"></i>
    </button>
</div>
<div class="feedback is-valid">
    <i class="fas fa-check-circle"></i>
    <span class="message">Data válida</span>
</div>
<div class="feedback is-invalid">
    <i class="fas fa-times-circle"></i>
    <span class="message">Data inválida</span>
</div>
<p class="help">
    Texto auxiliar ao preenchimento, tem a função de previnir erros.
</p>
```

### JS:

``` js
// Inicialização do componente
const dtp_picker = datepicker('#picker', options)

// Ativa as máscaras do campo input
dtp_picker.el.addEventListener('keyup', dtp_maskDate)

// Ativa o calendário quando o botao é clicado
dtp_picker_btn = document.getElementById('picker-btn')
dtp_toggle(dtp_picker_btn, dtp_picker)
```

## Opções do componente

No arquivo `datepicker-dsgov.js` foram criadas uma série de customizações a serem usadas nos `options` do componente de forma a padronizar e regionalizar seu uso. Exemplo de uso:

``` js
// Mensagens de erro padrão
const dtp_err1 = 'Data inicial maior que data final ';
const dtp_err2 = 'Data final maior que data inicial ';
const dtp_err3 = 'Data deve ser superior a ';
const dtp_err4 = 'Data deve ser inferior a ';
const dtp_err5 = 'Data deve estar entre ';
const dtp_err5and = ' e ';

// Constantes de configuração e regionalização do componente
const dtp_position = 'bl'; //Pode ser 5 valores: 'tr', 'tl', 'br', 'bl', 'c' (top-right, top-left, bottom-right, bottom-left e centered).
const dtp_days_br = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const dtp_months_br = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const dtp_months_ovr_br = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const dtp_btn_ok = "Confirma"
const dtp_input_year = "Digite um ano"

// Funções para definir o comportamento padrão dos campos
function dtp_formater(input, date, instance) {
    ...
}

function dtp_onShow(instance) {
    ...
}

function dtp_onHide(instance) {
    ...
}

// Exemplo de declaração de Datepicker com todas as opções definidas
const dtp_picker = datepicker('#picker', {
    id: 1,
    formatter: (input, date, instance) => {
        dtp_formater(input, date, instance)
    },
    onShow: instance => {
        dtp_onShow(instance)
    },

    onHide: instance => {
        dtp_onHide(instance)
    },

    position: dtp_position,
    customDays: dtp_days_br,
    customMonths: dtp_months_br,
    customOverlayMonths: dtp_months_ovr_br,
    overlayButton: dtp_btn_ok,
    overlayPlaceholder: dtp_input_year,
    noWeekends: true,
    respectDisabledReadOnly: true,
    maxDate: new Date(),

})
```

## Ativar/Desativar o Datepicker

Para tanto é necessário manipular o estado `is-disabled` do componente. Contudo, seguindo os exemplos acima, basta chamar as funções disponíveis no `datepicker-dsgov.js` passando a constante que declarou o datepicker:

``` js
// Desativar
dtp_disabler(dtp_picker)

// Ativar
dtp_enabler(dtp_picker)
```

