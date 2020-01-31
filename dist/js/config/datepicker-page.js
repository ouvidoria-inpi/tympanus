
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


// Ativa o calendario quando os botoes sao clicados
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
