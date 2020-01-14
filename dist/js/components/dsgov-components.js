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
		
		
/*
teste
*/
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

let searchListId = 'search-list'
let searchListClass = 'search-items'
let searchItemActive = 'search-active'

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  var currentFocus
		/*execute a function when someone writes in the text field:*/
		if(!inp){return;}
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
    a.setAttribute('id', this.id + searchListId)
    a.setAttribute('class', searchListClass)
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
    var x = document.getElementById(this.id + searchListId)
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
    /*add class searchItemActive:*/
    x[currentFocus].classList.add(searchItemActive)
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove(searchItemActive)
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

const tab = document.querySelectorAll('.br-tabs .item');
if(tab){
				for (let elem of tab) {
								elem.addEventListener("click", function() { itemActiveSelected(elem) }, false);;
				}
}




function itemActiveSelected(event) {
    
    const a = document.querySelectorAll('.upload-input');
    const elements = event.parentElement.querySelectorAll('.br-tabs .item');
				for (let elem of elements) {
        elem.parentElement.querySelectorAll(".item")
        elem.classList.remove("is-active");
    }
    event.classList.add("is-active");
    


}

const inputElement = document.querySelector('.upload-input');
const fileList = document.querySelector('.upload-file-list');
const header = document.querySelector('.upload-header');
const info = document.querySelector('.upload-info');
const size = document.querySelector('.upload-size');
const sizeNum = document.querySelector('.upload-size-num');
const sizeBytes = document.querySelector('.upload-size-bytes');
var fileArray = [];
if(inputElement)
		fileArray = Array.from(inputElement.files);


let dropbox;

dropbox = document.querySelector('.br-upload');
if(dropbox){
		dropbox.addEventListener("dragenter", drag, false);
		dropbox.addEventListener("dragover", drag, false);
		dropbox.addEventListener("drop", drop, false);
}

if(inputElement)
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

class TemplateSystem {

  constructor(name, template) {
    this.name = name;
    this.template = template;
    this._setUpTemplate();
  }

  _setUpTemplate() {
    this._cloneNavigation();
    this._setMenuBehavior();
    this._setDropdownBehavior();
    this._setSearchBehavior();
    this._setFooterBehavior();
  }

  _cloneNavigation() {
    for (let navLogo of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo')) {
      for (let logo of this.template.querySelectorAll('.header-bar .logo')) {
        let clonedLogo = logo.cloneNode(true);
        clonedLogo.classList.add('is-active');
        navLogo.appendChild(clonedLogo);
      }
      let backButton = window.document.createElement('button');
      backButton.setAttribute('data-level', 0);
      backButton.addEventListener('click', (event) => {
        this._onBackButtonClick(event);
      });
      navLogo.appendChild(backButton);
    }
    for (let navAvatar of this.template.querySelectorAll('.page-wrapper .navigation .nav-avatar')) {
      for (let avatar of this.template.querySelectorAll('.configs')) {
        navAvatar.appendChild(avatar.cloneNode(true));
      }
    }
    for (let navContrast of this.template.querySelectorAll('.page-wrapper .navigation .nav-contrast')) {
      for (let contrast of this.template.querySelectorAll('.contrast')) {
        navContrast.appendChild(contrast.cloneNode(true));
      }
    }
    for (let navBookmarks of this.template.querySelectorAll('.page-wrapper .navigation .nav-bookmarks')) {
      for (let bookmarks of this.template.querySelectorAll('.bookmarks')) {
        navBookmarks.appendChild(bookmarks.cloneNode(true));
      }
    }
    for (let navButtonTimeout of this.template.querySelectorAll('.page-wrapper .navigation .nav-buttontimeout')) {
      for (let logout of this.template.querySelectorAll('.logout')) {
        navButtonTimeout.appendChild(logout.cloneNode(true));
      }
    }
    for (let navTimeout of this.template.querySelectorAll('.page-wrapper .navigation .nav-logout .nav-timeout')) {
      for (let timeout of this.template.querySelectorAll('.timeout')) {
        navTimeout.appendChild(timeout.cloneNode(true));
      }
    }
  }

  _setMenuBehavior() {
    for (let menuHamburger of this.template.querySelectorAll('.menu-hamburger')) {
      menuHamburger.addEventListener('click', () => {
        for (let navigation of this.template.querySelectorAll('.navigation')) {
          navigation.classList.toggle('is-active');
          navigation.setAttribute('data-level', '0');
        }
      });      
    }
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      let arrowIcon = document.createElement('i');
      arrowIcon.setAttribute('class', 'fas fa-chevron-right');
      button.appendChild(arrowIcon);
      if (window.screen.width < 1024) {
        button.addEventListener('click', (event) => {
          this._setMenuMobileBehavior(event);
        });
      } else {
        for (let navigation of this.template.querySelectorAll('.page-wrapper .navigation')) {
          if (!navigation.hasAttribute('data-children')) {
            if (button.parentNode.parentNode.getAttribute('data-level') == 0) {
              button.parentNode.classList.add('is-active');
            }
            button.addEventListener('click', () => {
              button.parentNode.classList.toggle('is-active');
            });
          }
        }
      }
    }
  }

  _setMenuMobileBehavior(event) {
    this.ongoingMenu = event.currentTarget;
    let currentMenuLevel = Number(this.ongoingMenu.nextElementSibling.getAttribute('data-level'));
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.add('is-active');
        for (let navigation of this.template.querySelectorAll('.page-wrapper .navigation')) {
          navigation.setAttribute('data-level', button.nextElementSibling.getAttribute('data-level'));
        }
      }
    }
    for (let backButton of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo button')) {
      backButton.innerHTML = this.ongoingMenu.innerHTML;
      for (let icon of backButton.querySelectorAll('svg')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
      }
      backButton.classList.add('is-active');
      backButton.previousElementSibling.classList.remove('is-active');
      backButton.setAttribute('data-level', currentMenuLevel);
    }
  }

  _onBackButtonClick(event) {
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.remove('is-active');
        for (let navigation of this.template.querySelectorAll('.page-wrapper .navigation')) {
          navigation.setAttribute('data-level', button.parentNode.parentNode.getAttribute('data-level'));
        }
        event.currentTarget.setAttribute('data-level', button.parentNode.parentNode.getAttribute('data-level'));
        if (button.parentNode.parentNode.getAttribute('data-level') == 0) {
          event.currentTarget.childNodes[0].nodeValue = '';
          event.currentTarget.classList.remove('is-active');
          event.currentTarget.previousElementSibling.classList.add('is-active');
          this.ongoingMenu = undefined;
        } else {
          this.ongoingMenu = button.parentNode.parentNode.previousElementSibling;
          event.currentTarget.childNodes[0].nodeValue = this.ongoingMenu.innerText;
        }
        break;
      }
    }
  }

  _setDropdownBehavior() {
    for (let dropdown of this.template.querySelectorAll('.dropdown')) {
      for (let trigger of dropdown.querySelectorAll('.trigger')) {
        trigger.addEventListener('click', () => {
          for (let menu of dropdown.querySelectorAll('.menu')) {
            menu.classList.toggle('is-active');
          }
        });
      }
    }
  }

  _setSearchBehavior() {
    for (let search of this.template.querySelectorAll('.search')) {
      if (window.screen.width >= 1024) {
        for (let input of search.querySelectorAll('input#search')) {
          input.addEventListener('focus', () => {
            search.classList.add('is-active')
          });
        }
      } else {
        for (let buttonSearch of search.querySelectorAll('.field button')) {
          buttonSearch.addEventListener('click', () => {
            search.classList.add('is-active');
          });
        }
      }
      for (let buttonClose of search.querySelectorAll('button.close')) {
        buttonClose.addEventListener('click', () => {
          search.classList.remove('is-active');
        });
      }
    }
  }

  _setFooterBehavior() {
    if (window.screen.width < 1024) {
      for (let navigation of window.document.querySelectorAll('.page-footer .navigation')) {
        navigation.classList.add('footer-mobile');
        for (let button of navigation.querySelectorAll('li.item button')) {
          let icon = window.document.createElement('i');
          icon.setAttribute('class', 'fas fa-plus');
          button.parentNode.prepend(icon);
        }
      }
      for (let button of window.document.querySelectorAll('.page-footer .navigation.footer-mobile li.item button')) {
        let item = button.parentNode;
        item.addEventListener('click', (event) => {
          item.classList.toggle('is-active');
          if (item.classList.contains('is-active')) {
            item.firstChild.classList.remove('fa-plus');
            item.firstChild.classList.add('fa-minus');
          } else {
            item.firstChild.classList.remove('fa-minus');
            item.firstChild.classList.add('fa-plus');
          }
          event.stopPropagation();
        });
      }
    }
  }
}

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
let systemList = [];

window.onload = (function() {
  for (let brSelect of window.document.querySelectorAll('.br-select')) {
    selectList.push(new BRSelect('br-select', brSelect));
  }
  for (let templateSystem of window.document.querySelectorAll('.template-system')) {
    systemList.push(new TemplateSystem('template-system', templateSystem));
  }
})();
class TemplateSystem {

  constructor(name, template) {
    this.name = name;
    this.template = template;
    this._setUpTemplate();
  }

  _setUpTemplate() {
    this._cloneNavigation();
    this._setMenuBehavior();
    this._setDropdownBehavior();
    this._setSearchBehavior();
    this._setFooterBehavior();
  }

  _cloneNavigation() {
    for (let navLogo of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo')) {
      for (let logo of this.template.querySelectorAll('.header-bar .logo')) {
        let clonedLogo = logo.cloneNode(true);
        clonedLogo.classList.add('is-active');
        navLogo.appendChild(clonedLogo);
      }
      let backButton = window.document.createElement('button');
      backButton.setAttribute('data-level', 0);
      backButton.addEventListener('click', (event) => {
        this._onBackButtonClick(event);
      });
      navLogo.appendChild(backButton);
    }
    for (let navAvatar of this.template.querySelectorAll('.page-wrapper .navigation .nav-avatar')) {
      for (let avatar of this.template.querySelectorAll('.configs')) {
        navAvatar.appendChild(avatar.cloneNode(true));
      }
    }
    for (let navContrast of this.template.querySelectorAll('.page-wrapper .navigation .nav-contrast')) {
      for (let contrast of this.template.querySelectorAll('.contrast')) {
        navContrast.appendChild(contrast.cloneNode(true));
      }
    }
    for (let navBookmarks of this.template.querySelectorAll('.page-wrapper .navigation .nav-bookmarks')) {
      for (let bookmarks of this.template.querySelectorAll('.bookmarks')) {
        navBookmarks.appendChild(bookmarks.cloneNode(true));
      }
    }
    for (let navButtonTimeout of this.template.querySelectorAll('.page-wrapper .navigation .nav-buttontimeout')) {
      for (let logout of this.template.querySelectorAll('.logout')) {
        navButtonTimeout.appendChild(logout.cloneNode(true));
      }
    }
    for (let navTimeout of this.template.querySelectorAll('.page-wrapper .navigation .nav-logout .nav-timeout')) {
      for (let timeout of this.template.querySelectorAll('.timeout')) {
        navTimeout.appendChild(timeout.cloneNode(true));
      }
    }
  }

  _setMenuBehavior() {
    for (let menuHamburger of this.template.querySelectorAll('.menu-hamburger')) {
      menuHamburger.addEventListener('click', () => {
        for (let navigation of this.template.querySelectorAll('.navigation')) {
          navigation.classList.toggle('is-active');
          navigation.setAttribute('data-level', '0');
        }
      });      
    }
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      let arrowIcon = document.createElement('i');
      arrowIcon.setAttribute('class', 'fas fa-chevron-right');
      button.appendChild(arrowIcon);
      if (window.screen.width < 1024) {
        button.addEventListener('click', (event) => {
          this._setMenuMobileBehavior(event);
        });
      } else {
        for (let navigation of this.template.querySelectorAll('.page-wrapper .navigation')) {
          if (!navigation.hasAttribute('data-children')) {
            if (button.parentNode.parentNode.getAttribute('data-level') == 0) {
              button.parentNode.classList.add('is-active');
            }
            button.addEventListener('click', () => {
              button.parentNode.classList.toggle('is-active');
            });
          }
        }
      }
    }
  }

  _setMenuMobileBehavior(event) {
    this.ongoingMenu = event.currentTarget;
    let currentMenuLevel = Number(this.ongoingMenu.nextElementSibling.getAttribute('data-level'));
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.add('is-active');
        for (let navigation of this.template.querySelectorAll('.page-wrapper .navigation')) {
          navigation.setAttribute('data-level', button.nextElementSibling.getAttribute('data-level'));
        }
      }
    }
    for (let backButton of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo button')) {
      backButton.innerHTML = this.ongoingMenu.innerHTML;
      for (let icon of backButton.querySelectorAll('svg')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
      }
      backButton.classList.add('is-active');
      backButton.previousElementSibling.classList.remove('is-active');
      backButton.setAttribute('data-level', currentMenuLevel);
    }
  }

  _onBackButtonClick(event) {
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.remove('is-active');
        for (let navigation of this.template.querySelectorAll('.page-wrapper .navigation')) {
          navigation.setAttribute('data-level', button.parentNode.parentNode.getAttribute('data-level'));
        }
        event.currentTarget.setAttribute('data-level', button.parentNode.parentNode.getAttribute('data-level'));
        if (button.parentNode.parentNode.getAttribute('data-level') == 0) {
          event.currentTarget.childNodes[0].nodeValue = '';
          event.currentTarget.classList.remove('is-active');
          event.currentTarget.previousElementSibling.classList.add('is-active');
          this.ongoingMenu = undefined;
        } else {
          this.ongoingMenu = button.parentNode.parentNode.previousElementSibling;
          event.currentTarget.childNodes[0].nodeValue = this.ongoingMenu.innerText;
        }
        break;
      }
    }
  }

  _setDropdownBehavior() {
    for (let dropdown of this.template.querySelectorAll('.dropdown')) {
      for (let trigger of dropdown.querySelectorAll('.trigger')) {
        trigger.addEventListener('click', () => {
          for (let menu of dropdown.querySelectorAll('.menu')) {
            menu.classList.toggle('is-active');
          }
        });
      }
    }
  }

  _setSearchBehavior() {
    for (let search of this.template.querySelectorAll('.search')) {
      if (window.screen.width >= 1024) {
        for (let input of search.querySelectorAll('input#search')) {
          input.addEventListener('focus', () => {
            search.classList.add('is-active')
          });
        }
      } else {
        for (let buttonSearch of search.querySelectorAll('.field button')) {
          buttonSearch.addEventListener('click', () => {
            search.classList.add('is-active');
          });
        }
      }
      for (let buttonClose of search.querySelectorAll('button.close')) {
        buttonClose.addEventListener('click', () => {
          search.classList.remove('is-active');
        });
      }
    }
  }
}

let systemList = [];

window.onload = (function() {
  for (let templateSystem of window.document.querySelectorAll('.template-system')) {
    systemList.push(new TemplateSystem('template-system', templateSystem));
  }
})();
class TemplatePortal {
  constructor(name, template) {
    this.name = name;
    this.template = template;
    this._setUpTemplate();
  }

  _setUpTemplate() {
    this._cloneNavigation();
    this._setMenuBehavior();
    this._setDropdownBehavior();
    this._setSearchBehavior();
    this._setFooterBehavior();
  }

  _cloneNavigation() {
    for (let navLogo of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-logo"
    )) {
      for (let logo of this.template.querySelectorAll(".header-bar .logo")) {
        let clonedLogo = logo.cloneNode(true);
        clonedLogo.classList.add("is-active");
        navLogo.appendChild(clonedLogo);
      }
      let backButton = window.document.createElement("button");
      backButton.setAttribute("data-level", 0);
      backButton.addEventListener("click", event => {
        this._onBackButtonClick(event);
      });
      navLogo.appendChild(backButton);
    }
    for (let navQuicklinks of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-quicklinks"
    )) {
      for (let quicklinks of this.template.querySelectorAll(
        ".header-bar .quicklinks"
      )) {
        navQuicklinks.appendChild(quicklinks.cloneNode(true));
      }
    }
    for (let navAvatar of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-avatar"
    )) {
      for (let avatar of this.template.querySelectorAll(".avatar")) {
        navAvatar.appendChild(avatar.cloneNode(true));
      }
    }
    for (let navConfigs of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-configs"
    )) {
      for (let configs of this.template.querySelectorAll(".configs .menu")) {
        navConfigs.appendChild(configs.cloneNode(true));
      }
    }
    for (let navButtonTimeout of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-buttontimeout"
    )) {
      for (let logout of this.template.querySelectorAll(".logout")) {
        navButtonTimeout.appendChild(logout.cloneNode(true));
      }
    }
    for (let navTimeout of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-timeout"
    )) {
      for (let timeout of this.template.querySelectorAll(".timeout")) {
        navTimeout.appendChild(timeout.cloneNode(true));
      }
    }
  }

  _setMenuBehavior() {
    for (let menuHamburger of this.template.querySelectorAll(
      ".menu-hamburger"
    )) {
      menuHamburger.addEventListener("click", () => {
        for (let navigation of this.template.querySelectorAll(".navigation")) {
          navigation.classList.toggle("is-active");
          navigation.setAttribute("data-level", "0");
        }
      });
    }
    for (let button of this.template.querySelectorAll(
      ".page-wrapper .navigation .item button"
    )) {
      let arrowIcon = document.createElement("i");
      arrowIcon.setAttribute("class", "fas fa-chevron-right");
      button.appendChild(arrowIcon);
      if (window.screen.width < 1024) {
        button.addEventListener("click", event => {
          this._setMenuMobileBehavior(event);
        });
      } else {
        for (let navigation of this.template.querySelectorAll(
          ".page-wrapper .navigation"
        )) {
          if (!navigation.hasAttribute("data-children")) {
            if (button.parentNode.parentNode.getAttribute("data-level") == 0) {
              button.parentNode.classList.add("is-active");
            }
            button.addEventListener("click", () => {
              button.parentNode.classList.toggle("is-active");
            });
          }
        }
      }
    }
  }

  _setMenuMobileBehavior(event) {
    this.ongoingMenu = event.currentTarget;
    let currentMenuLevel = Number(
      this.ongoingMenu.nextElementSibling.getAttribute("data-level")
    );
    for (let button of this.template.querySelectorAll(
      ".page-wrapper .navigation .item button"
    )) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.add("is-active");
        for (let navigation of this.template.querySelectorAll(
          ".page-wrapper .navigation"
        )) {
          navigation.setAttribute(
            "data-level",
            button.nextElementSibling.getAttribute("data-level")
          );
        }
      }
    }
    for (let backButton of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-logo button"
    )) {
      backButton.innerHTML = this.ongoingMenu.innerHTML;
      for (let icon of backButton.querySelectorAll("svg")) {
        icon.classList.remove("fa-chevron-right");
        icon.classList.add("fa-chevron-left");
      }
      backButton.classList.add("is-active");
      backButton.previousElementSibling.classList.remove("is-active");
      backButton.setAttribute("data-level", currentMenuLevel);
    }
  }

  _onBackButtonClick(event) {
    for (let button of this.template.querySelectorAll(
      ".page-wrapper .navigation .item button"
    )) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.remove("is-active");
        for (let navigation of this.template.querySelectorAll(
          ".page-wrapper .navigation"
        )) {
          navigation.setAttribute(
            "data-level",
            button.parentNode.parentNode.getAttribute("data-level")
          );
        }
        event.currentTarget.setAttribute(
          "data-level",
          button.parentNode.parentNode.getAttribute("data-level")
        );
        if (button.parentNode.parentNode.getAttribute("data-level") == 0) {
          event.currentTarget.childNodes[0].nodeValue = "";
          event.currentTarget.classList.remove("is-active");
          event.currentTarget.previousElementSibling.classList.add("is-active");
          this.ongoingMenu = undefined;
        } else {
          this.ongoingMenu =
            button.parentNode.parentNode.previousElementSibling;
          event.currentTarget.childNodes[0].nodeValue = this.ongoingMenu.innerText;
        }
        break;
      }
    }
  }

  _setDropdownBehavior() {
    for (let dropdown of this.template.querySelectorAll(".dropdown")) {
      for (let trigger of dropdown.querySelectorAll(".trigger")) {
        trigger.addEventListener("click", () => {
          for (let menu of dropdown.querySelectorAll(".menu")) {
            menu.classList.toggle("is-active");
          }
        });
      }
    }
  }

  _setSearchBehavior() {
    for (let search of this.template.querySelectorAll(".search")) {
      if (window.screen.width >= 1024) {
        for (let input of search.querySelectorAll("input#search")) {
          input.addEventListener("focus", () => {
            search.classList.add("is-active");
          });
        }
      } else {
        for (let buttonSearch of search.querySelectorAll(".field button")) {
          buttonSearch.addEventListener("click", () => {
            search.classList.add("is-active");
          });
        }
      }
      for (let buttonClose of search.querySelectorAll("button.close")) {
        buttonClose.addEventListener("click", () => {
          search.classList.remove("is-active");
        });
      }
    }
  }

  _setFooterBehavior() {
    if (window.screen.width < 1024) {
      for (let navigation of window.document.querySelectorAll(
        ".page-footer .navigation"
      )) {
        navigation.classList.add("footer-mobile");
        for (let button of navigation.querySelectorAll("li.item button")) {
          let icon = window.document.createElement("i");
          icon.setAttribute("class", "fas fa-plus");
          button.parentNode.prepend(icon);
        }
        for (let item of navigation.querySelectorAll(
          'ul[data-level="1"] li.item'
        )) {
          item.classList.remove("is-active");
        }
      }
      for (let button of window.document.querySelectorAll(
        ".page-footer .navigation.footer-mobile li.item button"
      )) {
        let item = button.parentNode;
        item.addEventListener("click", event => {
          for (let submenuItem of item.querySelectorAll(
            'ul[data-level="1"] li.item'
          )) {
            submenuItem.classList.toggle("is-active");
            if (submenuItem.classList.contains("is-active")) {
              item.firstChild.classList.remove("fa-plus");
              item.firstChild.classList.add("fa-minus");
            } else {
              item.firstChild.classList.remove("fa-minus");
              item.firstChild.classList.add("fa-plus");
            }
          }
          event.stopPropagation();
        });
      }
    }
  }
}

let portalList = [];

window.onload = (function() {
  for (let templatePortal of window.document.querySelectorAll(
    ".template-site"
  )) {
    portalList.push(new TemplatePortal("template-site", templatePortal));
  }
})();

class TemplateSystem {
  constructor(name, template) {
    this.name = name;
    this.template = template;
    this._setUpTemplate();
  }

  _setUpTemplate() {
    this._cloneNavigation();
    this._setMenuBehavior();
    this._setDropdownBehavior();
    this._setSearchBehavior();
  }

  _cloneNavigation() {
    for (let navLogo of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-logo"
    )) {
      for (let logo of this.template.querySelectorAll(".header-bar .logo")) {
        let clonedLogo = logo.cloneNode(true);
        clonedLogo.classList.add("is-active");
        navLogo.appendChild(clonedLogo);
      }
      let backButton = window.document.createElement("button");
      backButton.setAttribute("data-level", 0);
      backButton.addEventListener("click", event => {
        this._onBackButtonClick(event);
      });
      navLogo.appendChild(backButton);
    }
    for (let navAvatar of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-avatar"
    )) {
      for (let avatar of this.template.querySelectorAll(".configs")) {
        navAvatar.appendChild(avatar.cloneNode(true));
      }
    }
    for (let navContrast of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-contrast"
    )) {
      for (let contrast of this.template.querySelectorAll(".contrast")) {
        navContrast.appendChild(contrast.cloneNode(true));
      }
    }
    for (let navBookmarks of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-bookmarks"
    )) {
      for (let bookmarks of this.template.querySelectorAll(".bookmarks")) {
        navBookmarks.appendChild(bookmarks.cloneNode(true));
      }
    }
    for (let navButtonTimeout of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-buttontimeout"
    )) {
      for (let logout of this.template.querySelectorAll(".logout")) {
        navButtonTimeout.appendChild(logout.cloneNode(true));
      }
    }
    for (let navTimeout of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-logout .nav-timeout"
    )) {
      for (let timeout of this.template.querySelectorAll(".timeout")) {
        navTimeout.appendChild(timeout.cloneNode(true));
      }
    }
  }

  _setMenuBehavior() {
    for (let menuHamburger of this.template.querySelectorAll(
      ".menu-hamburger"
    )) {
      menuHamburger.addEventListener("click", () => {
        for (let navigation of this.template.querySelectorAll(".navigation")) {
          navigation.classList.toggle("is-active");
          navigation.setAttribute("data-level", "0");
        }
        menuHamburger.classList.toggle("is-active");
        if (menuHamburger.classList.contains("is-active")) {
          menuHamburger.children[0].classList.remove("fa-bars");
          menuHamburger.children[0].classList.add("fa-times");
        } else {
          menuHamburger.children[0].classList.remove("fa-times");
          menuHamburger.children[0].classList.add("fa-bars");
        }
      });
    }
    for (let button of this.template.querySelectorAll(
      ".page-wrapper .navigation .item button"
    )) {
      let arrowIcon = document.createElement("i");
      arrowIcon.setAttribute("class", "fas fa-chevron-right");
      button.appendChild(arrowIcon);
      if (window.screen.width < 1024) {
        button.addEventListener("click", event => {
          this._setMenuMobileBehavior(event);
        });
      } else {
        for (let navigation of this.template.querySelectorAll(
          ".page-wrapper .navigation"
        )) {
          if (!navigation.hasAttribute("data-children")) {
            if (button.parentNode.parentNode.getAttribute("data-level") == 0) {
              button.parentNode.classList.add("is-active");
            }
            button.addEventListener("click", () => {
              button.parentNode.classList.toggle("is-active");
            });
          }
        }
      }
    }
  }

  _setMenuMobileBehavior(event) {
    this.ongoingMenu = event.currentTarget;
    let currentMenuLevel = Number(
      this.ongoingMenu.nextElementSibling.getAttribute("data-level")
    );
    for (let button of this.template.querySelectorAll(
      ".page-wrapper .navigation .item button"
    )) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.add("is-active");
        for (let navigation of this.template.querySelectorAll(
          ".page-wrapper .navigation"
        )) {
          navigation.setAttribute(
            "data-level",
            button.nextElementSibling.getAttribute("data-level")
          );
        }
      }
    }
    for (let backButton of this.template.querySelectorAll(
      ".page-wrapper .navigation .nav-logo button"
    )) {
      backButton.innerHTML = this.ongoingMenu.innerHTML;
      for (let icon of backButton.querySelectorAll("svg")) {
        icon.classList.remove("fa-chevron-right");
        icon.classList.add("fa-chevron-left");
      }
      backButton.classList.add("is-active");
      backButton.previousElementSibling.classList.remove("is-active");
      backButton.setAttribute("data-level", currentMenuLevel);
    }
  }

  _onBackButtonClick(event) {
    for (let button of this.template.querySelectorAll(
      ".page-wrapper .navigation .item button"
    )) {
      if (button === this.ongoingMenu) {
        button.parentNode.classList.remove("is-active");
        for (let navigation of this.template.querySelectorAll(
          ".page-wrapper .navigation"
        )) {
          navigation.setAttribute(
            "data-level",
            button.parentNode.parentNode.getAttribute("data-level")
          );
        }
        event.currentTarget.setAttribute(
          "data-level",
          button.parentNode.parentNode.getAttribute("data-level")
        );
        if (button.parentNode.parentNode.getAttribute("data-level") == 0) {
          event.currentTarget.childNodes[0].nodeValue = "";
          event.currentTarget.classList.remove("is-active");
          event.currentTarget.previousElementSibling.classList.add("is-active");
          this.ongoingMenu = undefined;
        } else {
          this.ongoingMenu =
            button.parentNode.parentNode.previousElementSibling;
          event.currentTarget.childNodes[0].nodeValue = this.ongoingMenu.innerText;
        }
        break;
      }
    }
  }

  _setDropdownBehavior() {
    for (let dropdown of this.template.querySelectorAll(".dropdown")) {
      for (let trigger of dropdown.querySelectorAll(".trigger")) {
        trigger.addEventListener("click", () => {
          for (let menu of dropdown.querySelectorAll(".menu")) {
            menu.classList.toggle("is-active");
          }
        });
      }
    }
  }

  _setSearchBehavior() {
    for (let search of this.template.querySelectorAll(".search")) {
      if (window.screen.width >= 1024) {
        for (let input of search.querySelectorAll("input#search")) {
          input.addEventListener("focus", () => {
            search.classList.add("is-active");
          });
        }
      } else {
        for (let buttonSearch of search.querySelectorAll(".field button")) {
          buttonSearch.addEventListener("click", () => {
            search.classList.add("is-active");
          });
        }
      }
      for (let buttonClose of search.querySelectorAll("button.close")) {
        buttonClose.addEventListener("click", () => {
          search.classList.remove("is-active");
        });
      }
    }
  }
}

let systemList = [];

window.onload = (function() {
  for (let templateSystem of window.document.querySelectorAll(
    ".template-system"
  )) {
    systemList.push(new TemplateSystem("template-system", templateSystem));
  }
})();
//# sourceMappingURL=dsgov-components.js.map