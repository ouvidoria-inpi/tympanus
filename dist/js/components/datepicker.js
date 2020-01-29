// Documentação js-datepicker - https://www.npmjs.com/package/js-datepicker


// referencia ao datepicker ativo na pagina para submeter ações de mostrar/esconder
var activeDatePicker

//Mensagens de erro padrao
const dtp_err1 = 'Data inicial maior que data final ';
const dtp_err2 = 'Data final maior que data inicial ';
const dtp_err3 = 'Data deve ser superior a ';
const dtp_err4 = 'Data deve ser inferior a ';
const dtp_err5 = 'Data deve estar entre ';
const dtp_err5and = ' e ';

//Variaveis de configuracao e regionalizacao do componente
const dtp_position = 'bl'; //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
const dtp_days_br = ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const dtp_months_br = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const dtp_months_ovr_br = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const dtp_btn_ok = "Confirma"
const dtp_input_year = "Digite um ano"

// Funcoes para definir os comportamentos padrao dos campos
function dtp_formater (input, date, instance) {
  const value = date.toLocaleDateString()
  input.value = value // => '1/1/2099'
}

function dtp_onShow (instance) {
  activeDatePicker = instance;
  instance.el.value = "";
}

function dtp_onHide (instance) {
  erro = dtp_validDate(instance)
  if (instance.dateSelected && !erro) {
    instance.el.value = instance.dateSelected.toLocaleDateString()
    dtp_validDate(instance)
  }
}

// Funcoes para ativar/desativar o componente 
function dtp_disabler (instance) {
  instance.parent.classList.add("is-disabled")
  instance.el.disabled = true
}

function dtp_enabler (instance) {
  instance.parent.classList.remove("is-disabled")
  instance.el.disabled = false
}


// Função para mascarar a data no formato dd/mm/yyyy ao digitar no campo
const dtp_maskDate = event => {
  date = event.target.value;
  if (event.key == "Enter"){
    activeDatePicker.hide();
    dtp_focusNextElement();
    return
  }
  let v = date.replace(/\D/g,'').slice(0, 8);
  if (v.length >= 5) {
    event.target.value = `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`;
    return
  }
  else if (v.length >= 3) {
    event.target.value = `${v.slice(0,2)}/${v.slice(2)}`;
    return
  }
  event.target.value = v
  return
}

// Funcao para mudar o foco para o proximo elemento
function dtp_focusNextElement() {
  const inputs = Array.prototype.slice.call(document.querySelectorAll("input:not([disabled]):not([class='qs-overlay-year']), select"))
  const index = (inputs.indexOf(document.activeElement) +1) % inputs.length
  const input = inputs[index]
  input.focus()
  input.select()
}

// Funcao para transferir o valor digitado no input para o componente 
function dtp_validDate(instance) {
  stringDate = instance.el.value
  range = undefined
  msg_error = [] 
  try {
    range = instance.getRange()
  }
  catch (error) {
    //console.log(error)
  }
  date = new Date(stringDate.split('/').reverse().join('/'));
  valid = false
  if (date instanceof Date && isFinite(date)) {
    valid = true
    if (range) {
      if (instance.first) {
        if (range.end) {
          valid = date > range.end ? false : true;
          if (!valid) msg_error.push(dtp_err1);
        }
      }
      else if (range.start) {
        valid = date < range.start ? false : true;
        if (!valid) msg_error.push(dtp_err2);
      }
    }

    // Validação da data para o minDate e maxDate
    if ( instance.minDate && instance.maxDate) {
      valid = date >= instance.minDate && date <= instance.maxDate ? true : false;
      if (!valid) msg_error.push(dtp_err5 + instance.minDate.toLocaleDateString() + dtp_err5and + instance.maxDate.toLocaleDateString());
    } else 
    if (instance.minDate) {
      valid = date >= instance.minDate ? true : false;
      if (!valid) msg_error.push(dtp_err3 + instance.minDate.toLocaleDateString());
    } else
    if (instance.maxDate) {
      valid = date <= instance.maxDate ? true : false;
      if (!valid) msg_error.push( dtp_err4 + instance.maxDate.toLocaleDateString());
    }

    // Muda a data apenas se for valida
    if (msg_error.length == 0) {
      instance.setDate(date, 1);
      dtp_showSucess(instance)
    }
    else {
      dtp_showError(instance, msg_error)
    }
    return msg_error
  }
}

// Funcao mostrar os erros no campo de feedback
function dtp_showError(instance, msg_error) {
  instance.parent.classList.add("is-invalid")
  instance.parent.classList.remove("is-valid")
  campo_erro = instance.parent.parentNode.querySelector("div.feedback.is-invalid")
  campo_erro.querySelector("span").innerText = msg_error[0]
}

function dtp_showSucess(instance) {
  instance.parent.classList.add("is-valid")
  instance.parent.classList.remove("is-invalid")
}

// Funcao dos botoes icones de calendario para ativar o componente
function dtp_toggle (button, datepicker) {
  if (!datepicker.parent.classList.contains('is-disabled')){
    button.addEventListener('click', e => {
      e.stopPropagation()
      const isHidden = datepicker.calendarContainer.classList.contains('qs-hidden')
      datepicker[isHidden ? 'show' : 'hide']()
    })
  }
}

// Definicoes de parametros dos componentes em tela
const dtp_default = datepicker('#default', { 
  id: 1, 
  formatter: (input, date, instance) => {
    dtp_formater (input, date, instance) 
  },
  onShow: instance => {
    dtp_onShow (instance)
  },

  onHide: instance => {
    dtp_onHide (instance)
  },

  position: dtp_position,
  customDays: dtp_days_br,
    customMonths: dtp_months_br,
  customOverlayMonths: dtp_months_ovr_br,
  overlayButton: dtp_btn_ok,
  overlayPlaceholder: dtp_input_year,
  noWeekends: true,
  respectDisabledReadOnly: true,
  minDate: new Date(2019, 0, 1),
  maxDate:  new Date(),
})


const dtp_start = datepicker('#date-start', { 
  id: 2, 
  formatter: (input, date, instance) => {
    dtp_formater (input, date, instance) 
  },
  onShow: instance => {
    dtp_onShow (instance)
  },

  onHide: instance => {
    dtp_onHide (instance)
  },

  position: dtp_position,
  customDays: dtp_days_br,
    customMonths: dtp_months_br,
  customOverlayMonths: dtp_months_ovr_br,
  overlayButton: dtp_btn_ok,
  overlayPlaceholder: dtp_input_year,
  noWeekends: true,
  respectDisabledReadOnly: true,
  maxDate:  new Date(),

})
const dtp_end = datepicker('#date-end', { 
  id: 2, 
  formatter: (input, date, instance) => {
    dtp_formater (input, date, instance) 
  },
  onShow: instance => {
    dtp_onShow (instance)
  },

  onHide: instance => {
    dtp_onHide (instance)
  },
  
  position: dtp_position,
  customDays: dtp_days_br,
    customMonths: dtp_months_br,
  customOverlayMonths: dtp_months_ovr_br,
  overlayButton: dtp_btn_ok,
  overlayPlaceholder: dtp_input_year,
  noWeekends: true,  respectDisabledReadOnly: true,
  respectDisabledReadOnly: true,
  maxDate:  new Date(),

})
/*
const dtp_disabled = datepicker('#disabled', { 
  id: 3, 
  formatter: (input, date, instance) => {
    dtp_formater (input, date, instance) 
  },
  onShow: instance => {
    dtp_onShow (instance)
  },

  onHide: instance => {
    dtp_onHide (instance)
  },
  
  position: dtp_position,
  customDays: dtp_days_br,
    customMonths: dtp_months_br,
  customOverlayMonths: dtp_months_ovr_br,
  overlayButton: dtp_btn_ok,
  overlayPlaceholder: dtp_input_year,
  noWeekends: true,  respectDisabledReadOnly: true,
  respectDisabledReadOnly: true,
  maxDate:  new Date(),
  

})
*/
// Ativa as mascaras dos campos input

dtp_default.el.addEventListener("keyup", dtp_maskDate);
//dtp_disabled.el.addEventListener("keyup", dtp_maskDate);
dtp_start.el.addEventListener("keyup", dtp_maskDate);
dtp_end.el.addEventListener("keyup", dtp_maskDate);


// Ativa o calendari quando os botoes sao clicados
dtp_default_btn = document.getElementById("default-btn")
dtp_toggle(dtp_default_btn, dtp_default)

dtp_start_btn = document.getElementById("date-start-btn")
dtp_toggle(dtp_start_btn, dtp_start)

dtp_end_btn = document.getElementById("date-end-btn")
dtp_toggle(dtp_end_btn, dtp_end)

/*
dtp_disabled_btn = document.getElementById("disabled-btn")
dtp_toggle(dtp_disabled_btn, dtp_disabled)
*/

// Teste do campo desabilitado
//dtp_disabler(dtp_disabled)
//dtp_enabler(dtp_disabled)
