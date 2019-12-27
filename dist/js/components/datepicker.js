// Documentação js-datepicker - https://www.npmjs.com/package/js-datepicker

const start = datepicker('#date-start', { 
  id: 1, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,

})
const end = datepicker('#date-end', { 
  id: 1, 
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  position: 'bl', //This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c' representing top-right, top-left, bottom-right, bottom-left, and centered respectively. Datepicker will position itself accordingly relative to the element you reference in the 1st argument. For a value of 'c', Datepicker will position itself fixed, smack in the middle of the screen. This can be desirable for mobile devices.
  customDays: ['Dom','Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  customMonths: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  customOverlayMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  overlayButton: "Confirma",
  overlayPlaceholder: 'Digite um ano',
  noWeekends: true,

})
