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