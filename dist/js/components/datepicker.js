// Documentação js-datepicker - https://www.npmjs.com/package/js-datepicker


// referencia ao datepicker ativo na pagina para submeter ações de mostrar/esconder
var activeDatePicker

//Mensagens de erro
const err1 = 'Data inicial maior que data final ';
const err2 = 'Data final maior que data inicial ';
const err3 = 'Data deve ser superior a: ';
const err4 = 'Data deve ser inferior a: ';
const err5 = 'Data deve estar entre ';
const err5and = ' e ';

// Função para mascarar a data no formato dd/mm/yyyy ao digitar no campo
const maskDate = event => {
  date = event.target.value;
  if (event.key == "Enter"){
    activeDatePicker.hide();
    focusNextElement();
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
function focusNextElement() {
  const inputs = Array.prototype.slice.call(document.querySelectorAll("input:not([disabled]):not([class='qs-overlay-year']), select"))
  const index = (inputs.indexOf(document.activeElement) +1) % inputs.length
  const input = inputs[index]
  input.focus()
  input.select()
}

// Funcao para transferir o valor digitado no input para o componente 
function validDate(datePicker) {
  //console.log(datePicker);
  stringDate = datePicker.el.value
  range = undefined
  msg_error = [] 
  try {
    range = datePicker.getRange()
  }
  catch (error) {
    //console.log(error)
  }
  date = new Date(stringDate.split('/').reverse().join('/'));
  valid = false
  if (date instanceof Date && isFinite(date)) {
    valid = true
    if (range) {
      if (datePicker.first) {
        if (range.end) {
          valid = date > range.end ? false : true;
          if (!valid) msg_error.push(err1);
        }
      }
      else if (range.start) {
        valid = date < range.start ? false : true;
        if (!valid) msg_error.push(err2);
      }
    }

    // Validação da data para o minDate e maxDate
    if ( datePicker.minDate && datePicker.maxDate) {
      valid = date >= datePicker.minDate && date <= datePicker.maxDate ? true : false;
      if (!valid) msg_error.push(err5 + datePicker.minDate.toLocaleDateString() + err5and + datePicker.maxDate.toLocaleDateString());
    } else 
    if (datePicker.minDate) {
      valid = date >= datePicker.minDate ? true : false;
      if (!valid) msg_error.push(err3 + datePicker.minDate.toLocaleDateString());
    } else
    if (datePicker.maxDate) {
      valid = date <= datePicker.maxDate ? true : false;
      if (!valid) msg_error.push( err4 + datePicker.maxDate.toLocaleDateString());
    }

    // Muda a data apenas se for valida
    if (msg_error.length == 0) {
      datePicker.setDate(date, 1);
      datePicker.parent.classList.toggle("is-valid")
    }
    else {
      datePicker.parent.classList.toggle("is-invalid")
      return msg_error
    }
  }
}


// Definicoes de parametros dos componentes em tela
const dtp_default = datepicker('#default', { 
  id: 1, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },

  onHide: instance => {
    msg_error = validDate(instance);
    console.log(msg_error)
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,
  minDate: new Date(2019, 0, 1),
  maxDate:  new Date(),
})


const dtp_start = datepicker('#date-start', { 
  id: 2, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },
  onHide: instance => {
    msg_error = validDate(instance);
    console.log(msg_error)
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,
  maxDate:  new Date(),

})
const dtp_end = datepicker('#date-end', { 
  id: 2, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },
  onHide: instance => {
    msg_error = validDate(instance);
    console.log(msg_error)
  },
  
  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,
  maxDate:  new Date(),

})

// Ativa as mascaras dos campos input

dtp_default.el.addEventListener("keyup", maskDate);
dtp_start.el.addEventListener("keyup", maskDate);
dtp_end.el.addEventListener("keyup", maskDate);


