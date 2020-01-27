// Documentação js-datepicker - https://www.npmjs.com/package/js-datepicker


// referencia ao datepicker ativo na pagina para submeter ações de mostrar/esconder
var activeDatePicker;

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
  const index = (inputs.indexOf(document.activeElement) + 1) % inputs.length
  const input = inputs[index]
  input.focus()
  input.select()
}

// Funcao para transferir o valor digitado no input para o componente 
function validDate(datePicker) {
  //console.log(datePicker);
  stringDate = datePicker.el.value;
  range = undefined;
  try {
    range = datePicker.getRange();
  }
  catch (error) {
    //console.log(error)
  }
  date = new Date(stringDate.split('/').reverse().join('/'));
  valid = false
  if (date instanceof Date && isFinite(date)) {
    //console.log(date.toLocaleDateString());
    valid = true
    //console.log(range)
    if (range) {
      if (datePicker.first && range.end) {
        valid = date > range.end ? false : true;
      }
      else if (!datePicker.first && range.start) {
        valid = date < range.start ? false : true;
      }
      else { 
        valid = true; 
      }
    }

    // Validação da data para o minDate e maxDate
    if (datePicker.minDate) {
      valid = date >= datePicker.minDate ? true : false;
    }
    if (datePicker.maxDate) {
      valid = date <= datePicker.maxDate ? true : false;
    }
    if ( datePicker.minDate && datePicker.maxDate) {
      valid = date >= datePicker.minDate && date <= datePicker.maxDate ? true : false;
    }
  }
  //console.log (valid);
  // Muda a data apenas se for valida
  if (valid) datePicker.setDate(date, 1);
  // Retorna ao ultimo valor selecionado valido 
  else datePicker.el.value = datePicker.dateSelected ? datePicker.dateSelected.toLocaleDateString() : "";
}


// Definicoes de parametros dos componentes em tela
const dtp_default = datepicker('#default', { 
  id: 0, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },

  onHide: instance => {
    validDate(instance);
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
const dtp_disabled = datepicker('#disabled', { 
  id: 2, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },

  onHide: instance => {
    validDate(instance);
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,

})
const dtp_focus = datepicker('#focus', { 
  id: 3, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },

  onHide: instance => {
    validDate(instance);
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,

})
const dtp_valid = datepicker('#valid', { 
  id: 4, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },

  onHide: instance => {
    validDate(instance);
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,

})
const dtp_invalid = datepicker('#invalid', { 
  id: 5, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },

  onHide: instance => {
    validDate(instance);
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,

})
const dtp_start = datepicker('#date-start', { 
  id: 1, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },
  onHide: instance => {
    validDate(instance);
  },

  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,

})
const dtp_end = datepicker('#date-end', { 
  id: 1, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  onShow: instance => {
    activeDatePicker = instance;
  },
  onHide: instance => {
    validDate(instance);
  },
  
  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,
  respectDisabledReadOnly: true,

})

// Ativa as mascaras dos campos input
dtp_default.el.addEventListener("keyup", maskDate);
dtp_disabled.el.addEventListener("keyup", maskDate);
dtp_focus.el.addEventListener("keyup", maskDate);
dtp_valid.el.addEventListener("keyup", maskDate);
dtp_invalid.el.addEventListener("keyup", maskDate);
dtp_start.el.addEventListener("keyup", maskDate);
dtp_end.el.addEventListener("keyup", maskDate);


