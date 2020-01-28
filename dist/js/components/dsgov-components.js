class BRAccordeon {
  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior() {
    for (let button of this.component.querySelectorAll("button.header")) {
      button.addEventListener("click", event => {
        this._collapse(event);
        this._changeIcon(event);
      });
    }
  }

  _collapse(event) {
    for (let field of this.component.querySelectorAll(".item")) {
      if (field === event.currentTarget.parentNode) {
        field.classList.toggle("is-active");
      } else if (field.classList.contains("is-active")) {
        field.classList.toggle("is-active");
      }
    }
  }

  _changeIcon(event) {
    for (let field of this.component.querySelectorAll(".item")) {
      if (field.classList.contains("is-active")) {
        for (let icon of field.querySelectorAll(".icon")) {
          icon.children[0].classList.remove("fa-plus");
          icon.children[0].classList.add("fa-minus");
        }
      } else {
        for (let icon of field.querySelectorAll(".icon")) {
          icon.children[0].classList.remove("fa-minus");
          icon.children[0].classList.add("fa-plus");
        }
      }
    }
  }
}

let accordeonList = [];

window.onload = (function startBrAccordions() {
  for (let brAccordeon of window.document.querySelectorAll(".br-accordeon")) {
    accordeonList.push(new BRAccordeon("br-accordeon", brAccordeon));
  }
})();

class BRChecklist {
  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior() {
    for (let inputRadio of this.component.querySelectorAll(
      'input[type="radio"]'
    )) {
      inputRadio.addEventListener("click", event => {
        this._switchSole(event);
      });
    }
    for (let inputCheckbox of this.component.querySelectorAll(
      'input[type="checkbox"]'
    )) {
      inputCheckbox.addEventListener("click", event => {
        this._switchShared(event);
      });
    }
  }

  _switchSole(event) {
    for (let field of this.component.querySelectorAll(".item")) {
      if (field === event.currentTarget.parentNode.parentNode) {
        field.classList.add("is-active");
      } else {
        field.classList.remove("is-active");
      }
    }
  }

  _switchShared(event) {
    for (let field of this.component.querySelectorAll(".item")) {
      if (field === event.currentTarget.parentNode.parentNode) {
        field.classList.toggle("is-active");
      }
    }
  }
}

let checklistList = [];

window.onload = (function() {
  for (let brChecklist of window.document.querySelectorAll(".br-checklist")) {
    checklistList.push(new BRChecklist("br-checklist", brChecklist));
  }
})();

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
  erro = validDate(instance)
  if (instance.dateSelected && !erro) {
    instance.el.value = instance.dateSelected.toLocaleDateString()
    validDate(instance)
  }
}


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
function validDate(instance) {
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
      showSucess(instance)
    }
    else {
      showError(instance, msg_error)
    }
    return msg_error
  }
}

// Funcao mostrar os erros no campo de feedback
function showError(instance, msg_error) {
  instance.parent.classList.add("is-invalid")
  instance.parent.classList.remove("is-valid")
  campo_erro = instance.parent.parentNode.querySelector("div.feedback.is-invalid")
  campo_erro.querySelector("span").innerText = msg_error[0]
}

function showSucess(instance) {
  instance.parent.classList.add("is-valid")
  instance.parent.classList.remove("is-invalid")
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
  maxDate:  new Date(),

})

// Ativa as mascaras dos campos input

dtp_default.el.addEventListener("keyup", maskDate);
dtp_start.el.addEventListener("keyup", maskDate);
dtp_end.el.addEventListener("keyup", maskDate);


// Toggle the calendar when a button is clicked.
dtp_default_btn = document.getElementById("default_btn")
toggleDtp(dtp_default_btn, dtp_default)

dtp_start_btn = document.getElementById("date-start_btn")
toggleDtp(dtp_start_btn, dtp_start)

dtp_end_btn = document.getElementById("date-end_btn")
toggleDtp(dtp_end_btn, dtp_end)

function toggleDtp (button, datepicker) {
  button.addEventListener('click', e => {
    // THIS!!! Prevent Datepicker's event handler from hiding the calendar.
    e.stopPropagation()
   
    // Toggle the calendar.
    const isHidden = datepicker.calendarContainer.classList.contains('qs-hidden')
    datepicker[isHidden ? 'show' : 'hide']()
  })
}

/*
dtp_default_btn.addEventListener('click', e => {
  // THIS!!! Prevent Datepicker's event handler from hiding the calendar.
  e.stopPropagation()
 
  // Toggle the calendar.
  const isHidden = dtp_default.calendarContainer.classList.contains('qs-hidden')
  dtp_default[isHidden ? 'show' : 'hide']()
})
*/

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.datepicker=t():e.datepicker=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(2);var r=[],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],s={t:"top",r:"right",b:"bottom",l:"left",c:"centered"},c=function(){},l=["click","focusin","keydown","input"];function d(e){return Array.isArray(e)?e.map(d):"[object Object]"==={}.toString.call(e)?Object.keys(e).reduce((function(t,n){return t[n]=d(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),f(t,e,a),v(e,a)].join(""),a&&setTimeout((function(){return M(!0,e)}),10)}function h(e,t,n){return'\n <div class="qs-controls '.concat(n?"qs-blur":"",'">\n <div class="qs-arrow qs-left"></div>\n <div class="qs-month-year">\n <span class="qs-month">').concat(t.months[e.getMonth()],'</span>\n <span class="qs-year">').concat(e.getFullYear(),'</span>\n </div>\n <div class="qs-arrow qs-right"></div>\n </div>\n ')}function f(e,t,n){var a=t.currentMonth,r=t.currentYear,i=t.dateSelected,o=t.maxDate,s=t.minDate,c=t.showAllDates,l=t.days,d=t.disabledDates,u=t.disabler,h=t.noWeekends,f=t.startDay,v=t.weekendIndices,m=t.events,y=t.getRange&&t.getRange()||{},p=+y.start,b=+y.end,D=new Date,g=r===D.getFullYear()&&a===D.getMonth(),w=q(new Date(e).setDate(1)),S=w.getDay()-f,M=S<0?7:0;w.setMonth(w.getMonth()+1),w.setDate(0);var x=w.getDate(),L=[],P=M+7*((S+x)/7|0);P+=(S+x)%7?7:0,0!==f&&0===S&&(P+=7);for(var j=1;j<=P;j++){var k=(j-1)%7,O=l[k],C=j-(S>=0?S:7+S),Y=new Date(r,a,C),N=m[+Y],E=Y.getDate(),A=C<1||C>x,I="",T='<span class="qs-num">'.concat(E,"</span>"),F=p&&b&&+Y>=p&&+Y<=b;A?(I="qs-empty qs-outside-current-month",c?(N&&(I+=" qs-event"),I+=" qs-disabled"):T=""):((s&&Y<s||o&&Y>o||u(Y)||d.includes(+Y)||h&&v.includes(k))&&(I="qs-disabled"),N&&(I+=" qs-event"),g&&C===D.getDate()&&(I+=" qs-current"),+Y==+i&&(I+=" qs-active"),F&&(I+=" qs-range-date-".concat(k),p!==b&&(I+=+Y===p?" qs-range-date-start qs-active":+Y===b?" qs-range-date-end qs-active":" qs-range-date-middle"))),L.push('<div class="qs-square qs-num '.concat(O," ").concat(I,'">').concat(T,"</div>"))}var R=l.map((function(e){return'<div class="qs-square qs-day">'.concat(e,"</div>")})).concat(L);if(R.length%7!=0)throw"Calendar not constructed properly. The # of squares should be a multiple of 7.";return R.unshift('<div class="qs-squares '.concat(n?"qs-blur":"",'">')),R.push("</div>"),R.join("")}function v(e,t){var n=e.overlayPlaceholder,a=e.overlayButton,r=e.overlayMonths.map((function(e,t){return'\n <div class="qs-overlay-month" data-month-num="'.concat(t,'">\n <span data-month-num="').concat(t,'">').concat(e,"</span>\n </div>\n ")})).join("");return'\n <div class="qs-overlay '.concat(t?"":"qs-hidden",'">\n <div>\n <input class="qs-overlay-year" placeholder="').concat(n,'" />\n <div class="qs-close">&#10005;</div>\n </div>\n <div class="qs-overlay-month-container">').concat(r,'</div>\n <div class="qs-submit qs-disabled">').concat(a,"</div>\n </div>\n ")}function m(e,t,n){var a=t.currentMonth,r=t.currentYear,i=t.calendar,o=t.el,s=t.onSelect,c=t.respectDisabledReadOnly,l=t.sibling,d=i.querySelector(".qs-active"),h=e.textContent;(o.disabled||o.readOnly)&&c||(t.dateSelected=n?void 0:new Date(r,a,h),d&&d.classList.remove("qs-active"),n||e.classList.add("qs-active"),p(o,t,n),!n&&w(t),l&&(y({instance:t,deselect:n}),u(t),u(l)),s(t,n?void 0:new Date(t.dateSelected)))}function y(e){var t=e.instance,n=e.deselect,a=t.first?t:t.sibling,r=a.sibling;a===t?n?(a.minDate=a.originalMinDate,r.minDate=r.originalMinDate):r.minDate=a.dateSelected:n?(r.maxDate=r.originalMaxDate,a.maxDate=a.originalMaxDate):a.maxDate=r.dateSelected}function p(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==c?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function b(e,t,n,a){n||a?(n&&(t.currentYear=n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function D(e){if(!e.noPosition){var t=e.el,n=e.calendarContainer,r=e.position,i=e.parent,o=r.top,s=r.right;if(r.centered)return n.classList.add("qs-centered");var c=a([i,t,n].map((function(e){return e.getBoundingClientRect()})),3),l=c[0],d=c[1],u=c[2],h=d.top-l.top+i.scrollTop,f="".concat(h-(o?u.height:-1*d.height),"px"),v="".concat(d.left-l.left+(s?d.width-u.width:0),"px");n.style.setProperty("top",f),n.style.setProperty("left",v)}}function g(e){return"[object Date]"==={}.toString.call(e)&&"Invalid Date"!==e.toString()}function q(e){if(g(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function w(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&(M(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),D(e),e.onShow(e))}function M(e,t){var n=t.calendar;if(n){var a=n.querySelector(".qs-overlay"),r=a.querySelector(".qs-overlay-year"),i=n.querySelector(".qs-controls"),o=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),i.classList.remove("qs-blur"),o.classList.remove("qs-blur"),r.value=""):(a.classList.remove("qs-hidden"),i.classList.add("qs-blur"),o.classList.add("qs-blur"),r.focus())}}function x(e,t,n,a){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),i=r?null:t.value;if(13===(e.which||e.keyCode)||"click"===e.type)a?b(null,n,i,a):r||t.classList.contains("qs-disabled")||b(null,n,i,a);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}}function L(e){var t=e.type,n=e.target,i=n.classList,o=a(r.filter((function(e){var t=e.calendar,a=e.el;return t.contains(n)||a===n})),1)[0],s=o&&o.calendar.contains(n);if(!(o&&o.isMobile&&o.disableMobile))if("click"===t){if(!o)return r.forEach(w);if(o.disabled)return;var c=o.calendar,l=o.calendarContainer,d=o.disableYearOverlay,u=o.nonInput,h=c.querySelector(".qs-overlay-year"),f=!!c.querySelector(".qs-hidden"),v=c.querySelector(".qs-month-year").contains(n),y=n.dataset.monthNum;if(o.noPosition&&!s)(l.classList.contains("qs-hidden")?S:w)(o);else if(i.contains("qs-arrow"))b(i,o);else if(v||i.contains("qs-close"))!d&&M(!f,o);else if(y)x(e,h,o,y);else{if(i.contains("qs-num")){var p="SPAN"===n.nodeName?n.parentNode:n,D=["qs-disabled","qs-empty"].some((function(e){return p.classList.contains(e)}));return p.classList.contains("qs-active")?m(p,o,!0):!D&&m(p,o)}i.contains("qs-submit")&&!i.contains("qs-disabled")?x(e,h,o):u&&n===o.el&&S(o)}}else if("focusin"===t&&o)S(o),r.forEach((function(e){return e!==o&&w(e)}));else if("keydown"===t&&o&&!o.disabled){var g=!o.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===(e.which||e.keyCode)&&g&&s?x(e,n,o):27===(e.which||e.keyCode)&&g&&s&&M(!0,o)}else if("input"===t){if(!o||!o.calendar.contains(n))return;var q=o.calendar.querySelector(".qs-submit"),L=n.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);n.value=L,q.classList[4===L.length?"remove":"add"]("qs-disabled")}}function P(){S(this)}function j(){w(this)}function k(e,t){var n=q(e),a=this.currentYear,r=this.currentMonth,i=this.sibling;if(null==e)return this.dateSelected=void 0,p(this.el,this,!0),i&&(y({instance:this,deselect:!0}),u(i)),u(this),this;if(!g(e))throw"`setDate` needs a JavaScript Date object.";if(this.disabledDates.some((function(e){return+e==+n}))||n<this.minDate||n>this.maxDate)throw"You can't manually set a date that's disabled.";return this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()],this.dateSelected=n,p(this.el,this),i&&(y({instance:this}),u(i,n)),(a===n.getFullYear()&&r===n.getMonth()||t||i)&&u(this,n),this}function O(e){return Y(this,e,!0)}function C(e){return Y(this,e)}function Y(e,t,n){var a=e.dateSelected,r=e.first,i=e.sibling,o=e.minDate,s=e.maxDate,c=q(t),l=n?"Min":"Max",d=function(){return"original".concat(l,"Date")},h=function(){return"".concat(l.toLowerCase(),"Date")},f=function(){return"set".concat(l)},v=function(){throw"Out-of-range date passed to ".concat(f())};if(null==t)e[d()]=void 0,i?(i[d()]=void 0,n?(r&&!a||!r&&!i.dateSelected)&&(e.minDate=void 0,i.minDate=void 0):(r&&!i.dateSelected||!r&&!a)&&(e.maxDate=void 0,i.maxDate=void 0)):e[h()]=void 0;else{if(!g(t))throw"Invalid date passed to ".concat(f());i?((r&&n&&c>(a||s)||r&&!n&&c<(i.dateSelected||o)||!r&&n&&c>(i.dateSelected||s)||!r&&!n&&c<(a||o))&&v(),e[d()]=c,i[d()]=c,(n&&(r&&!a||!r&&!i.dateSelected)||!n&&(r&&!i.dateSelected||!r&&!a))&&(e[h()]=c,i[h()]=c)):((n&&c>(a||s)||!n&&c<(a||o))&&v(),e[h()]=c)}return i&&u(i),u(e),e}function N(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function E(){var e=this,t=this.inlinePosition,n=this.parent,a=this.calendarContainer,i=this.el,o=this.sibling;t&&(r.some((function(t){return t!==e&&t.parent===n}))||n.style.setProperty("position",null));for(var s in a.remove(),r=r.filter((function(e){return e.el!==i})),o&&delete o.sibling,this)delete this[s];r.length||l.forEach((function(e){return document.removeEventListener(e,L)}))}e.exports=function(e,t){r.length||l.forEach((function(e){return document.addEventListener(e,L)}));var n=function(e,t){var n=e;"string"==typeof n&&(n="#"===n[0]?document.getElementById(n.slice(1)):document.querySelector(n));var l=function(e,t){if(r.some((function(e){return e.el===t})))throw"A datepicker already exists on that element.";var n=d(e);n.events&&(n.events=n.events.reduce((function(e,t){if(!g(t))throw'"options.events" must only contain valid JavaScript Date objects.';return e[+q(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var t=n[e];if(t&&!g(t))throw'"options.'.concat(e,'" needs to be a valid JavaScript Date object.');n[e]=q(t)}));var o=n.position,l=n.maxDate,u=n.minDate,h=n.dateSelected,f=n.overlayPlaceholder,v=n.overlayButton,m=n.startDay,y=n.id;if(n.startDate=q(n.startDate||h||new Date),n.disabledDates=(n.disabledDates||[]).map((function(e){var t=+q(e);if(!g(e))throw'You supplied an invalid date to "options.disabledDates".';if(t===+q(h))throw'"disabledDates" cannot contain the same date as "dateSelected".';return t})),n.hasOwnProperty("id")&&null==y)throw"Id cannot be `null` or `undefined`";if(y||0===y){var p=r.filter((function(e){return e.id===y}));if(p.length>1)throw"Only two datepickers can share an id.";p.length?(n.second=!0,n.sibling=p[0]):n.first=!0}var b=["tr","tl","br","bl","c"].some((function(e){return o===e}));if(o&&!b)throw'"options.position" must be one of the following: tl, tr, bl, br, or c.';if(n.position=function(e){var t=a(e,2),n=t[0],r=t[1],i={};i[s[n]]=1,r&&(i[s[r]]=1);return i}(o||"bl"),l<u)throw'"maxDate" in options is less than "minDate".';if(h){var D=function(e){throw'"dateSelected" in options is '.concat(e?"less":"greater",' than "').concat(e||"mac",'Date".')};u>h&&D("min"),l<h&&D()}if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof n[e]&&(n[e]=c)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,t){var a=n[e],r=t?12:7;if(a){if(!Array.isArray(a)||a.length!==r||a.some((function(e){return"string"!=typeof e})))throw'"'.concat(e,'" must be an array with ').concat(r," strings.");n[t?t<2?"months":"overlayMonths":"days"]=a}})),m&&m>0&&m<7){var w=(n.customDays||i).slice(),S=w.splice(0,m);n.customDays=w.concat(S),n.startDay=+m,n.weekendIndices=[w.length-1,w.length]}else n.startDay=0,n.weekendIndices=[6,0];"string"!=typeof f&&delete n.overlayPlaceholder;"string"!=typeof v&&delete n.overlayButton;return n}(t||{startDate:q(new Date),position:"bl"},n),u=l.startDate,h=l.dateSelected,f=l.sibling,v=n===document.body,m=v?document.body:n.parentElement,y=document.createElement("div"),b=document.createElement("div");y.className="qs-datepicker-container qs-hidden",b.className="qs-datepicker";var D={el:n,parent:m,nonInput:"INPUT"!==n.nodeName,noPosition:v,position:!v&&l.position,startDate:u,dateSelected:h,disabledDates:l.disabledDates,minDate:l.minDate,maxDate:l.maxDate,noWeekends:!!l.noWeekends,weekendIndices:l.weekendIndices,calendarContainer:y,calendar:b,currentMonth:(u||h).getMonth(),currentMonthName:(l.months||o)[(u||h).getMonth()],currentYear:(u||h).getFullYear(),events:l.events||{},setDate:k,remove:E,setMin:O,setMax:C,show:P,hide:j,onSelect:l.onSelect,onShow:l.onShow,onHide:l.onHide,onMonthChange:l.onMonthChange,formatter:l.formatter,disabler:l.disabler,months:l.months||o,days:l.customDays||i,startDay:l.startDay,overlayMonths:l.overlayMonths||(l.months||o).map((function(e){return e.slice(0,3)})),overlayPlaceholder:l.overlayPlaceholder||"4-digit year",overlayButton:l.overlayButton||"Submit",disableYearOverlay:!!l.disableYearOverlay,disableMobile:!!l.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!l.alwaysShow,id:l.id,showAllDates:!!l.showAllDates,respectDisabledReadOnly:!!l.respectDisabledReadOnly,first:l.first,second:l.second};if(f){var w=f,M=D,x=w.minDate||M.minDate,L=w.maxDate||M.maxDate;M.sibling=w,w.sibling=M,w.minDate=x,w.maxDate=L,M.minDate=x,M.maxDate=L,w.originalMinDate=x,w.originalMaxDate=L,M.originalMinDate=x,M.originalMaxDate=L,w.getRange=N,M.getRange=N}h&&p(n,D);var Y=getComputedStyle(m).position;v||Y&&"static"!==Y||(D.inlinePosition=!0,m.style.setProperty("position","relative"));D.inlinePosition&&r.forEach((function(e){e.parent===D.parent&&(e.inlinePosition=!0)}));return r.push(D),y.appendChild(b),m.appendChild(y),D.alwaysShow&&S(D),D}(e,t),h=n.startDate,f=n.dateSelected,v=n.alwaysShow;if(n.second){var m=n.sibling;y({instance:n,deselect:!f}),y({instance:m,deselect:!m.dateSelected}),u(m)}return u(n,h||f),v&&D(n),n}},function(e,t,n){}])}));

let listId = 'search-list'
let listClass = 'search-items'
let itemActive = 'search-active'

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener('input', function(e) {
    var a,
      b,
      i,
      val = this.value
    /*close any already open lists of autocompleted values*/
    closeAllLists()
    if (!val) {
      return false
    }
    currentFocus = -1
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement('DIV')
    a.setAttribute('id', this.id + listId)
    a.setAttribute('class', listClass)
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a)
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement('DIV')
        /*make the matching letters bold:*/
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>'
        b.innerHTML += arr[i].substr(val.length)
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener('click', function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName('input')[0].value
          /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
          closeAllLists()
        })
        a.appendChild(b)
      }
    }
  })
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener('keydown', function(e) {
    var x = document.getElementById(this.id + listId)
    if (x) x = x.getElementsByTagName('div')
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
      currentFocus++
      /*and and make the current item more visible:*/
      addActive(x)
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
      currentFocus--
      /*and and make the current item more visible:*/
      addActive(x)
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault()
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click()
      }
    }
  })
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false
    /*start by removing the "active" class on all items:*/
    removeActive(x)
    if (currentFocus >= x.length) currentFocus = 0
    if (currentFocus < 0) currentFocus = x.length - 1
    /*add class itemActive:*/
    x[currentFocus].classList.add(itemActive)
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove(itemActive)
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    var x = document.getElementsByClassName(listClass)
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i])
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener('click', function(e) {
    closeAllLists(e.target)
  })
}

;(function() {
  const countries = [
    'Afeganistão',
    'África do Sul',
    'Albânia',
    'Alemanha',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antártida',
    'Antígua e Barbuda',
    'Antilhas Holandesas',
    'Arábia Saudita',
    'Argélia',
    'Argentina',
    'Armênia',
    'Aruba',
    'Austrália',
    'Áustria',
    'Azerbaijão',
    'Bahamas',
    'Bahrein',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Bélgica',
    'Belize',
    'Benin',
    'Bermudas',
    'Bolívia',
    'Bósnia-Herzegóvina',
    'Botsuana',
    'Brasil',
    'Brunei',
    'Bulgária',
    'Burkina Fasso',
    'Burundi',
    'Butão',
    'Cabo Verde',
    'Camarões',
    'Camboja',
    'Canadá',
    'Cazaquistão',
    'Chade',
    'Chile',
    'China',
    'Chipre',
    'Cingapura',
    'Colômbia',
    'Congo',
    'Coréia do Norte',
    'Coréia do Sul',
    'Costa do Marfim',
    'Costa Rica',
    'Croácia (Hrvatska)',
    'Cuba',
    'Dinamarca',
    'Djibuti',
    'Dominica',
    'Egito',
    'El Salvador',
    'Emirados Árabes Unidos',
    'Equador',
    'Eritréia',
    'Eslováquia',
    'Eslovênia',
    'Espanha',
    'Estados Unidos',
    'Estônia',
    'Etiópia',
    'Fiji',
    'Filipinas',
    'Finlândia',
    'França',
    'Gabão',
    'Gâmbia',
    'Gana',
    'Geórgia',
    'Gibraltar',
    'Grã-Bretanha (Reino Unido, UK)',
    'Granada',
    'Grécia',
    'Groelândia',
    'Guadalupe',
    'Guam (Território dos Estados Unidos)',
    'Guatemala',
    'Guernsey',
    'Guiana',
    'Guiana Francesa',
    'Guiné',
    'Guiné Equatorial',
    'Guiné-Bissau',
    'Haiti',
    'Holanda',
    'Honduras',
    'Hong Kong',
    'Hungria',
    'Iêmen',
    'Ilha Bouvet (Território da Noruega)',
    'Ilha do Homem',
    'Ilha Natal',
    'Ilha Pitcairn',
    'Ilha Reunião',
    'Ilhas Aland',
    'Ilhas Cayman',
    'Ilhas Cocos',
    'Ilhas Comores',
    'Ilhas Cook',
    'Ilhas Faroes',
    'Ilhas Falkland (Malvinas)',
    'Ilhas Geórgia do Sul e Sandwich do Sul',
    'Ilhas Heard e McDonald (Território da Austrália)',
    'Ilhas Marianas do Norte',
    'Ilhas Marshall',
    'Ilhas Menores dos Estados Unidos',
    'Ilhas Norfolk',
    'Ilhas Seychelles',
    'Ilhas Solomão',
    'Ilhas Svalbard e Jan Mayen',
    'Ilhas Tokelau',
    'Ilhas Turks e Caicos',
    'Ilhas Virgens (Estados Unidos)',
    'Ilhas Virgens (Inglaterra)',
    'Ilhas Wallis e Futuna',
    'índia',
    'Indonésia',
    'Irã',
    'Iraque',
    'Irlanda',
    'Islândia',
    'Israel',
    'Itália',
    'Jamaica',
    'Japão',
    'Jersey',
    'Jordânia',
    'Kênia',
    'Kiribati',
    'Kuait',
    'Laos',
    'Látvia',
    'Lesoto',
    'Líbano',
    'Libéria',
    'Líbia',
    'Liechtenstein',
    'Lituânia',
    'Luxemburgo',
    'Macau',
    'Macedônia (República Yugoslava)',
    'Madagascar',
    'Malásia',
    'Malaui',
    'Maldivas',
    'Mali',
    'Malta',
    'Marrocos',
    'Martinica',
    'Maurício',
    'Mauritânia',
    'Mayotte',
    'México',
    'Micronésia',
    'Moçambique',
    'Moldova',
    'Mônaco',
    'Mongólia',
    'Montenegro',
    'Montserrat',
    'Myanma',
    'Namíbia',
    'Nauru',
    'Nepal',
    'Nicarágua',
    'Níger',
    'Nigéria',
    'Niue',
    'Noruega',
    'Nova Caledônia',
    'Nova Zelândia',
    'Omã',
    'Palau',
    'Panamá',
    'Papua-Nova Guiné',
    'Paquistão',
    'Paraguai',
    'Peru',
    'Polinésia Francesa',
    'Polônia',
    'Porto Rico',
    'Portugal',
    'Qatar',
    'Quirguistão',
    'República Centro-Africana',
    'República Democrática do Congo',
    'República Dominicana',
    'República Tcheca',
    'Romênia',
    'Ruanda',
    'Rússia (antiga URSS) - Federação Russa',
    'Saara Ocidental',
    'Saint Vincente e Granadinas',
    'Samoa Americana',
    'Samoa Ocidental',
    'San Marino',
    'Santa Helena',
    'Santa Lúcia',
    'São Bartolomeu',
    'São Cristóvão e Névis',
    'São Martim',
    'São Tomé e Príncipe',
    'Senegal',
    'Serra Leoa',
    'Sérvia',
    'Síria',
    'Somália',
    'Sri Lanka',
    'St. Pierre and Miquelon',
    'Suazilândia',
    'Sudão',
    'Suécia',
    'Suíça',
    'Suriname',
    'Tadjiquistão',
    'Tailândia',
    'Taiwan',
    'Tanzânia',
    'Território Britânico do Oceano índico',
    'Territórios do Sul da França',
    'Territórios Palestinos Ocupados',
    'Timor Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunísia',
    'Turcomenistão',
    'Turquia',
    'Tuvalu',
    'Ucrânia',
    'Uganda',
    'Uruguai',
    'Uzbequistão',
    'Vanuatu',
    'Vaticano',
    'Venezuela',
    'Vietnã',
    'Zâmbia',
    'Zimbábue',
  ]

  autocomplete(document.getElementById('search-autocomplete'), countries)
})()

class BRHeader {

  constructor(name, component) {
    this.HEADER_SITE_SELECTOR = '.br-header.is-site';
    this.LANGUAGE_MENU_TRIGGER_SELECTOR = '.language.menu button.trigger';
    this.LANGUAGE_MENU_TRIGGER_NAME_SELECTOR = '.language.menu button.trigger .name'
    this.LANGUAGE_MENU_ITEM_SELECTOR = '.language.menu .item';
    this.LANGUAGE_MENU_ITEM_NAME_SELECTOR = '.name';
    this.SEARCH_INPUT_SELECTOR = '.search input';
    this.SEARCH_CLOSE_SELECTOR = '.search .close';
    this.CONFIGS_MENU_TRIGGER_SELECTOR = '.configs.menu button.trigger';
    this.BOOKMARKS_MENU_TRIGGER_SELECTOR = '.bookmarks.menu button.trigger';
    this.MENU_HAMBURGER_TRIGGER_SELECTOR = '.menu-hamburger';
    this.ACTIVE_CLASS = 'is-active';
    this.name = name;
    this.component = component;

    switch (this.component.classList.value) {
      case 'br-header is-site':
        this._setSiteHeaderBehavior();
        break;
      case 'br-header is-system':
        this._setSystemHeaderBehavior();
        break;
    }
  }

  _setSiteHeaderBehavior() {
    this._setSelectedLanguage();
    this._setLanguageMenuBehavior();
    this._setSearchMenuBehavior();
    this._setMenuHamburgerBehavior();
  }

  _setSystemHeaderBehavior() {
    this._setConfigsMenuBehavior();
    this._setBookmarksMenuBehavior();
    this._setSearchMenuBehavior();
    this._setMenuHamburgerBehavior();
  }

  _setLanguageMenuBehavior() {
    for (let languageMenuTrigger of this.component.querySelectorAll(this.LANGUAGE_MENU_TRIGGER_SELECTOR)) {
      languageMenuTrigger.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.toggle(this.ACTIVE_CLASS);
      });
      for (let languageMenuItem of this.component.querySelectorAll(this.LANGUAGE_MENU_ITEM_SELECTOR)) {
        languageMenuItem.addEventListener('click', (event) => {
          for (let sibling of this.component.querySelectorAll(this.LANGUAGE_MENU_ITEM_SELECTOR)) {
            if (sibling === event.currentTarget) {
              sibling.classList.add(this.ACTIVE_CLASS);
              languageMenuTrigger.parentNode.classList.toggle(this.ACTIVE_CLASS);
            } else {
              sibling.classList.remove(this.ACTIVE_CLASS);
            }
          }
          this._setSelectedLanguage();
        });
      }
    }
  }

  _setSelectedLanguage() {
    for (let languageItem of this.component.querySelectorAll(this.LANGUAGE_MENU_ITEM_SELECTOR)) {
      if (languageItem.classList.contains(this.ACTIVE_CLASS)) {
        for (let languageItemName of languageItem.querySelectorAll(this.LANGUAGE_MENU_ITEM_NAME_SELECTOR)) {
          for (let languageTriggerName of this.component.querySelectorAll(this.LANGUAGE_MENU_TRIGGER_NAME_SELECTOR)) {
            languageTriggerName.innerText = languageItemName.innerText;
          }
        }
      }
    }
  }

  _setSearchMenuBehavior() {
    for (let searchInput of this.component.querySelectorAll(this.SEARCH_INPUT_SELECTOR)) {
      searchInput.addEventListener('focus', (event) => {
        event.currentTarget.parentNode.parentNode.classList.add(this.ACTIVE_CLASS);
      });
    }
    for (let searchClose of this.component.querySelectorAll(this.SEARCH_CLOSE_SELECTOR)) {
      searchClose.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.remove(this.ACTIVE_CLASS);
      });
    }
  }

  _setConfigsMenuBehavior() {
    for (let configsMenuTrigger of this.component.querySelectorAll(this.CONFIGS_MENU_TRIGGER_SELECTOR)) {
      configsMenuTrigger.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.toggle(this.ACTIVE_CLASS);
      });
    }
  }

  _setBookmarksMenuBehavior() {
    for (let bookmarksMenuTrigger of this.component.querySelectorAll(this.BOOKMARKS_MENU_TRIGGER_SELECTOR)) {
      bookmarksMenuTrigger.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.toggle(this.ACTIVE_CLASS);
      });
    }
  }

  _setMenuHamburgerBehavior() {
    for (let menuHamburger of this.component.querySelectorAll(this.MENU_HAMBURGER_TRIGGER_SELECTOR)) {
      menuHamburger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle(this.ACTIVE_CLASS);
      });
    }
  }
}

listHeader = [];
for (let header of window.document.querySelectorAll('.br-header')) {
  listHeader.push(new BRHeader('br-header', header));
}
function toggleInputAction(element, className) {
  for (
    var inputAction = element;
    !inputAction.classList.contains(className);
    inputAction = inputAction.parentNode
  );

  var icon = element.getElementsByClassName("fas")[0];

  if (icon.classList.contains("fa-eye")) {
    inputAction
      .querySelector("input[type='password'")
      .setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else if (icon.classList.contains("fa-eye-slash")) {
    inputAction
      .querySelector("input[type='text'")
      .setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

let collapseList = document.querySelectorAll('button[data-toggle="collapse"]');
collapseList.forEach(function(collapse) {
  collapse.addEventListener("click", function(event) {
    event.target.classList.toggle("is-open")
  })
})
class BRAlert {
  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior() {
    for (let button of this.component.querySelectorAll("div.close button")) {
      button.addEventListener("click", () => {
        this._dismiss(this.component);
      });
    }
  }

  _dismiss(component) {
    component.parentNode.removeChild(component);
  }
}

let alertList = [];

window.onload = (function() {
  for (let brAlert of window.document.querySelectorAll(".br-message")) {
    alertList.push(new BRAlert("br-message", brAlert));
  }
})();

scrim = document.getElementsByClassName("is-foco")[0];

function openModal(div) {
    scrim.innerHTML = div.innerHTML;
    scrim.classList.add("is-active");
}

function openModalId(id) {
    scrim = document.getElementById(id);
    scrim.classList.add("is-active");
}

function closeModal() {
    scrim.classList.remove("is-active");
}


scrim = document.getElementsByClassName("is-foco")[0];

function on() {
    scrim.classList.add("is-active");
  }
  
function off() {
    scrim.classList.remove("is-active");
}

let listId = 'search-list'
let listClass = 'search-items'
let itemActive = 'search-active'

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener('input', function(e) {
    var a,
      b,
      i,
      val = this.value
    /*close any already open lists of autocompleted values*/
    closeAllLists()
    if (!val) {
      return false
    }
    currentFocus = -1
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement('DIV')
    a.setAttribute('id', this.id + listId)
    a.setAttribute('class', listClass)
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a)
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement('DIV')
        /*make the matching letters bold:*/
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>'
        b.innerHTML += arr[i].substr(val.length)
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener('click', function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName('input')[0].value
          /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
          closeAllLists()
        })
        a.appendChild(b)
      }
    }
  })
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener('keydown', function(e) {
    var x = document.getElementById(this.id + listId)
    if (x) x = x.getElementsByTagName('div')
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
      currentFocus++
      /*and and make the current item more visible:*/
      addActive(x)
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
      currentFocus--
      /*and and make the current item more visible:*/
      addActive(x)
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault()
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click()
      }
    }
  })
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false
    /*start by removing the "active" class on all items:*/
    removeActive(x)
    if (currentFocus >= x.length) currentFocus = 0
    if (currentFocus < 0) currentFocus = x.length - 1
    /*add class itemActive:*/
    x[currentFocus].classList.add(itemActive)
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove(itemActive)
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    var x = document.getElementsByClassName(listClass)
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i])
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener('click', function(e) {
    closeAllLists(e.target)
  })
}

;(function() {
  const countries = [
    'Afeganistão',
    'África do Sul',
    'Albânia',
    'Alemanha',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antártida',
    'Antígua e Barbuda',
    'Antilhas Holandesas',
    'Arábia Saudita',
    'Argélia',
    'Argentina',
    'Armênia',
    'Aruba',
    'Austrália',
    'Áustria',
    'Azerbaijão',
    'Bahamas',
    'Bahrein',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Bélgica',
    'Belize',
    'Benin',
    'Bermudas',
    'Bolívia',
    'Bósnia-Herzegóvina',
    'Botsuana',
    'Brasil',
    'Brunei',
    'Bulgária',
    'Burkina Fasso',
    'Burundi',
    'Butão',
    'Cabo Verde',
    'Camarões',
    'Camboja',
    'Canadá',
    'Cazaquistão',
    'Chade',
    'Chile',
    'China',
    'Chipre',
    'Cingapura',
    'Colômbia',
    'Congo',
    'Coréia do Norte',
    'Coréia do Sul',
    'Costa do Marfim',
    'Costa Rica',
    'Croácia (Hrvatska)',
    'Cuba',
    'Dinamarca',
    'Djibuti',
    'Dominica',
    'Egito',
    'El Salvador',
    'Emirados Árabes Unidos',
    'Equador',
    'Eritréia',
    'Eslováquia',
    'Eslovênia',
    'Espanha',
    'Estados Unidos',
    'Estônia',
    'Etiópia',
    'Fiji',
    'Filipinas',
    'Finlândia',
    'França',
    'Gabão',
    'Gâmbia',
    'Gana',
    'Geórgia',
    'Gibraltar',
    'Grã-Bretanha (Reino Unido, UK)',
    'Granada',
    'Grécia',
    'Groelândia',
    'Guadalupe',
    'Guam (Território dos Estados Unidos)',
    'Guatemala',
    'Guernsey',
    'Guiana',
    'Guiana Francesa',
    'Guiné',
    'Guiné Equatorial',
    'Guiné-Bissau',
    'Haiti',
    'Holanda',
    'Honduras',
    'Hong Kong',
    'Hungria',
    'Iêmen',
    'Ilha Bouvet (Território da Noruega)',
    'Ilha do Homem',
    'Ilha Natal',
    'Ilha Pitcairn',
    'Ilha Reunião',
    'Ilhas Aland',
    'Ilhas Cayman',
    'Ilhas Cocos',
    'Ilhas Comores',
    'Ilhas Cook',
    'Ilhas Faroes',
    'Ilhas Falkland (Malvinas)',
    'Ilhas Geórgia do Sul e Sandwich do Sul',
    'Ilhas Heard e McDonald (Território da Austrália)',
    'Ilhas Marianas do Norte',
    'Ilhas Marshall',
    'Ilhas Menores dos Estados Unidos',
    'Ilhas Norfolk',
    'Ilhas Seychelles',
    'Ilhas Solomão',
    'Ilhas Svalbard e Jan Mayen',
    'Ilhas Tokelau',
    'Ilhas Turks e Caicos',
    'Ilhas Virgens (Estados Unidos)',
    'Ilhas Virgens (Inglaterra)',
    'Ilhas Wallis e Futuna',
    'índia',
    'Indonésia',
    'Irã',
    'Iraque',
    'Irlanda',
    'Islândia',
    'Israel',
    'Itália',
    'Jamaica',
    'Japão',
    'Jersey',
    'Jordânia',
    'Kênia',
    'Kiribati',
    'Kuait',
    'Laos',
    'Látvia',
    'Lesoto',
    'Líbano',
    'Libéria',
    'Líbia',
    'Liechtenstein',
    'Lituânia',
    'Luxemburgo',
    'Macau',
    'Macedônia (República Yugoslava)',
    'Madagascar',
    'Malásia',
    'Malaui',
    'Maldivas',
    'Mali',
    'Malta',
    'Marrocos',
    'Martinica',
    'Maurício',
    'Mauritânia',
    'Mayotte',
    'México',
    'Micronésia',
    'Moçambique',
    'Moldova',
    'Mônaco',
    'Mongólia',
    'Montenegro',
    'Montserrat',
    'Myanma',
    'Namíbia',
    'Nauru',
    'Nepal',
    'Nicarágua',
    'Níger',
    'Nigéria',
    'Niue',
    'Noruega',
    'Nova Caledônia',
    'Nova Zelândia',
    'Omã',
    'Palau',
    'Panamá',
    'Papua-Nova Guiné',
    'Paquistão',
    'Paraguai',
    'Peru',
    'Polinésia Francesa',
    'Polônia',
    'Porto Rico',
    'Portugal',
    'Qatar',
    'Quirguistão',
    'República Centro-Africana',
    'República Democrática do Congo',
    'República Dominicana',
    'República Tcheca',
    'Romênia',
    'Ruanda',
    'Rússia (antiga URSS) - Federação Russa',
    'Saara Ocidental',
    'Saint Vincente e Granadinas',
    'Samoa Americana',
    'Samoa Ocidental',
    'San Marino',
    'Santa Helena',
    'Santa Lúcia',
    'São Bartolomeu',
    'São Cristóvão e Névis',
    'São Martim',
    'São Tomé e Príncipe',
    'Senegal',
    'Serra Leoa',
    'Sérvia',
    'Síria',
    'Somália',
    'Sri Lanka',
    'St. Pierre and Miquelon',
    'Suazilândia',
    'Sudão',
    'Suécia',
    'Suíça',
    'Suriname',
    'Tadjiquistão',
    'Tailândia',
    'Taiwan',
    'Tanzânia',
    'Território Britânico do Oceano índico',
    'Territórios do Sul da França',
    'Territórios Palestinos Ocupados',
    'Timor Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunísia',
    'Turcomenistão',
    'Turquia',
    'Tuvalu',
    'Ucrânia',
    'Uganda',
    'Uruguai',
    'Uzbequistão',
    'Vanuatu',
    'Vaticano',
    'Venezuela',
    'Vietnã',
    'Zâmbia',
    'Zimbábue',
  ]

  autocomplete(document.getElementById('search-autocomplete'), countries)
})()

class BRSelect {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setUpBrSelect();
  }

  _setUpBrSelect() {
    for (let select of this.component.querySelectorAll('select')) {
      this.component.appendChild(this._buildSelectionField(select));
      this.component.appendChild(this._buildOptionsList(select));
    }
    this._setBehavior();
  }

  _buildSelectionField(select) {
    let selectionField = window.document.createElement('button');
    selectionField.setAttribute('class', 'select-selected unselected');
    if (select.disabled) {
      selectionField.setAttribute('disabled', 'disabled');
    }
    selectionField.appendChild(this._buildOptionItem(select.options[select.selectedIndex].innerHTML));
    selectionField.appendChild(this._buildIcon())
    return selectionField;
  }

  _buildOptionItem(text) {
    let optionItem = window.document.createElement('span');
    optionItem.innerHTML = text;
    return optionItem;
  }

  _buildIcon() {
    let icon = window.document.createElement('i');
    icon.setAttribute('class', 'fas fa-chevron-down')
    return icon;
  }

  _buildOptionsList(select) {
    let optionsList = window.document.createElement('div');
    optionsList.setAttribute('class', 'select-items select-hide');
    for (let option of select.options) {
      let optionField = window.document.createElement('button');
      optionField.appendChild(this._buildOptionItem(option.innerHTML));
      optionsList.appendChild(optionField);      
    }
    return optionsList;
  }

  _setBehavior() {
    for (let itemSelected of this.component.querySelectorAll('.select-selected')) {
      itemSelected.addEventListener('click', (event) => {
        event.stopPropagation();
        itemSelected.nextElementSibling.classList.toggle('select-hide')
        this._closeSelects(itemSelected);
        window.document.addEventListener('click', () => {
          this._closeSelects();
        });
      });
    }
    for (let item of this.component.querySelectorAll('.select-items button')) {
      item.addEventListener('click', (event) => {
        for (let select of this.component.querySelectorAll('select')) {
          for (let [index, option] of Array.from(select.options).entries()) {
            if (option.innerHTML === item.firstChild.innerHTML) {
              select.selectedIndex = index;
              item.parentNode.previousSibling.firstChild.innerHTML = item.firstChild.innerHTML;
              item.parentNode.previousSibling.setAttribute('class', 'select-selected');
              item.parentNode.classList.add('select-hide');
              for (let optionItem of item.parentNode.querySelectorAll('button')) {
                if (optionItem === item) {
                  optionItem.setAttribute('class', 'same-as-selected');
                } else {
                  optionItem.removeAttribute('class');
                }
              }
            }
          }
        }
      });
    }
  }

  _closeSelects(element) {
    for (let brSelect of window.document.querySelectorAll('.br-select')) {
      for (let itemSelected of brSelect.querySelectorAll('.select-selected')) {
        if (itemSelected !== element) {
          for (let optionsList of brSelect.querySelectorAll('.select-items')) {
            optionsList.classList.add('select-hide');
            window.document.removeEventListener('click', this._closeSelects);
          }
        }
      }
    }
  }
}

let selectList = [];

window.onload = (function() {
  for (let brSelect of window.document.querySelectorAll('.br-select')) {
    selectList.push(new BRSelect('br-select', brSelect));
  }
})();
function documentReady(t){/in/.test(document.readyState)?setTimeout("documentReady("+t+")",9):t()}function findAncestor(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}function unformatNumberString(t){return t=t.replace(/[^\d\.-]/g,""),Number(t)}function extractStringContent(t){var e=document.createElement("span");return e.innerHTML=t,e.textContent||e.innerText}function setColHeaderDirection(t,e,n){for(var r=0;r<n.length;r++)r==e?n[e].setAttribute("data-sort-direction",t):n[r].setAttribute("data-sort-direction",0)}function renderSortedTable(t,e){for(var n=t.getElementsByTagName("tbody")[0].getElementsByTagName("tr"),r=0;r<n.length;r++)for(var a=n[r].getElementsByTagName("td"),i=0;i<a.length;i++)a[i].innerHTML=e[r][i]}documentReady(function(){for(var t=document.getElementsByClassName("sortable-table"),e=[],n=0;n<t.length;n++)!function(){t[n].setAttribute("data-sort-index",n);for(var r=t[n].getElementsByTagName("tbody")[0].getElementsByTagName("tr"),a=0;a<r.length;a++)for(var i=r[a].getElementsByTagName("td"),o=0;o<i.length;o++)void 0===e[n]&&e.splice(n,0,[]),void 0===e[n][a]&&e[n].splice(a,0,[]),e[n][a].splice(o,0,i[o].innerHTML);for(var s=t[n].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th"),d=0;d<s.length;d++)!function(){var n=s[d].classList.contains("numeric-sort");s[d].setAttribute("data-sort-direction",0),s[d].setAttribute("data-sort-index",d),s[d].addEventListener("click",function(){var r=this.getAttribute("data-sort-direction"),a=this.getAttribute("data-sort-index"),i=findAncestor(this,"sortable-table").getAttribute("data-sort-index");setColHeaderDirection(1==r?-1:1,a,s),e[i]=e[i].sort(function(t,e){var i=extractStringContent(t[a]),o=extractStringContent(e[a]);return n&&(i=unformatNumberString(i),o=unformatNumberString(o)),i===o?0:1==r?i>o?-1:1:i<o?-1:1}),renderSortedTable(t[i],e[i])})}()}()});
var parentEl
var parentE2
var nextEl

var checkboxParent
var checkboxParent2

function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
}

function ShowHideTable(el) {
  parentEl = el.parentNode
  parentE2 = parentEl.parentNode
  nextEl = parentE2.nextElementSibling
  if (nextEl != null) {
    if (hasClass(nextEl, 'show-table') && hasClass(nextEl, 'row-content')) {
      nextEl.classList.remove('show-table')
      nextEl.className = 'row-content hide-table'
      el.classList.remove('fa-minus')
      el.className = 'fas fa-plus'
    } else if (
      hasClass(nextEl, 'hide-table') &&
      hasClass(nextEl, 'row-content')
    ) {
      nextEl.classList.remove('hide-table')
      nextEl.className = 'row-content show-table'
      el.classList.remove('fa-plus')
      el.className = 'fas fa-minus'
    }
  }
}

function setActive(el) {
  checkbox = el
  checkboxParent = checkbox.parentNode
  checkboxParent2 = checkboxParent.parentNode
  if (el.checked) {
    checkboxParent2.className = 'active'
    checkboxParent.className = 'text-center active'
  } else {
    checkboxParent2.classList.remove('active')
    checkboxParent.classList.remove('active')
  }
}

//Correção da altura das colunas na tabela responsiva;
var target = document.getElementsByTagName('tr')
for (i = 0; i < target.length; i++) {
  target[i].children[0].style.height = target[i].children[1].offsetHeight + 'px'
}

const tab = dropbox = document.querySelectorAll('.br-tabs .item');

for (let elem of tab) {
    elem.addEventListener("click", function() { foi(elem) }, false);;

}


function foi(event) {
    console.log(event);
    const a = document.querySelectorAll('.upload-input');
    const elements = event.parentElement.querySelectorAll('.br-tabs .item');

    for (let elem of elements) {
        elem.parentElement.querySelectorAll(".item")
        elem.classList.remove("is-active");
    }
    event.classList.add("is-active");
    console.log(event.classList);


}

const inputElement = document.querySelector('.upload-input');
const fileList = document.querySelector('.upload-file-list');
const header = document.querySelector('.upload-header');
const info = document.querySelector('.upload-info');
const size = document.querySelector('.upload-size');
const sizeNum = document.querySelector('.upload-size-num');
const sizeBytes = document.querySelector('.upload-size-bytes');
var fileArray = Array.from(inputElement.files);


let dropbox;

dropbox = document.querySelector('.br-upload');
dropbox.addEventListener("dragenter", drag, false);
dropbox.addEventListener("dragover", drag, false);
dropbox.addEventListener("drop", drop, false);


inputElement.addEventListener("change", handleFiles, false);

function handleFiles(files) {

   
  newFiles = !files.length ? Array.from(inputElement.files) : Array.from(files);
  fileArray = fileArray.concat(newFiles);

  info.style.display = 'none';
  header.innerHTML = 'Arquivos Selecionados';
  updateFileList();
}

function updateFileList () {

  if (!fileArray.length) {
    fileList.innerHTML = "";
    info.style.display = '';
    header.innerHTML = 'Arraste e solte o(s) arquivo(s) do seu computador';
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < fileArray.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const info = document.createElement("span");
      info.innerHTML = fileArray[i].name ;
      li.appendChild(info);
      
      const del = document.createElement("div");
      del.addEventListener("click", function(){removeFile(i, event)}, false);
      del.className = 'del';
      const img = document.createElement("i");
      img.className = 'fa fa-times';
      del.appendChild(img);
      li.appendChild(del);
    }
  }
  updateSize();
}

function removeFile(index, e) {

  e.stopPropagation();
  e.preventDefault();
  fileArray.splice(index,1);
  updateFileList();
}

function updateSize() {

  let nBytes = 0,
      oFiles = fileArray, 
      nFiles = oFiles.length;
  for (let nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }
  
  let sOutput = nBytes + " bytes";
  for (let aMultiples = ["KB", "MB", "GB", "TB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] ;
  }

  size.style.visibility = nFiles>0 ? "visible" : "hidden";
  sizeNum.innerHTML = nFiles;
  sizeBytes.innerHTML = sOutput;
}

function drag(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
//# sourceMappingURL=dsgov-components.js.map