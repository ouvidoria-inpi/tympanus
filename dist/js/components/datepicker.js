// Documentação js-datepicker - https://www.npmjs.com/package/js-datepicker

// Função para mascarar a data no formato dd/mm/yyyy ao digitar no campo
const maskDate = event => {
  date = event.target.value;
  if (event.key == "Enter"){
    focusNextElement();
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
  //add all elements we want to include in our selection
  var focussableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
  if (document.activeElement && document.activeElement.form) {
      var focussable = Array.prototype.filter.call(document.activeElement.form.querySelectorAll(focussableElements),
      function (element) {
          //check for visibility while always include the current activeElement 
          return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
      });
      var index = focussable.indexOf(document.activeElement);
      if(index > -1) {
         var nextElement = focussable[index + 1] || focussable[0];
         nextElement.focus();
      }                    
  }
}

// Funcao para transferir o valor digitado no input para o componente 
function validDate(datePicker) {
  //console.log(datePicker);
  stringDate = datePicker.el.value;
  range = datePicker.getRange();
  date = new Date(stringDate.split('/').reverse().join('/'));
  valid = false;
  if (date instanceof Date && isFinite(date)) {
    //console.log(date.toLocaleDateString());
    if (range) {
      if (datePicker.first && range.end) {
        valid = date > range.end ? false : true;
      }
      else if (!datePicker.first && range.start) {
        valid = date < range.start ? false : true;
      }
      else { 
        valid = true; 
        console.log ("entrou");
      }
      //if (range.start) console.log("inicio: ", range.start.toLocaleDateString());
      //if (range.end) console.log("fim: ", range.end.toLocaleDateString());
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
dtp_start.el.addEventListener("keyup", maskDate);
dtp_end.el.addEventListener("keyup", maskDate);


