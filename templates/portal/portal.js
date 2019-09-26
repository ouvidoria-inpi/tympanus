class TemplatePortal {

  constructor(name, template) {
    this.name = name;
    this.template = template;
    this._setUpTemplatePortal();
    console.log(this);
  }

  _setUpTemplatePortal() {
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
      let button = window.document.createElement('button');
      let icon = window.document.createElement('i');
      icon.setAttribute('class', 'fas fa-chevron-left');
      button.appendChild(window.document.createTextNode(''));
      button.appendChild(icon);
      navLogo.appendChild(button);
    }
    for (let navQuicklinks of this.template.querySelectorAll('.page-wrapper .navigation .nav-quicklinks')) {
      for (let quicklinks of this.template.querySelectorAll('.header-bar .quicklinks')) {
        navQuicklinks.appendChild(quicklinks.cloneNode(true));
      }
    }
    for (let navAvatar of this.template.querySelectorAll('.page-wrapper .navigation .nav-avatar')) {
      for (let avatar of this.template.querySelectorAll('.avatar')) {
        navAvatar.appendChild(avatar.cloneNode(true));
      }
    }
    for (let navConfigs of this.template.querySelectorAll('.page-wrapper .navigation .nav-configs')) {
      for (let configs of this.template.querySelectorAll('.configs .menu')) {
        navConfigs.appendChild(configs.cloneNode(true));
      }
    }
    for (let navButtonTimeout of this.template.querySelectorAll('.page-wrapper .navigation .nav-buttontimeout')) {
      for (let logout of this.template.querySelectorAll('.logout')) {
        navButtonTimeout.appendChild(logout.cloneNode(true));
      }
    }
    for (let navTimeout of this.template.querySelectorAll('.page-wrapper .navigation .nav-timeout')) {
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
        }
      });      
    }
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation div.item button')) {
      let arrowIcon = document.createElement('i');
      arrowIcon.setAttribute('class', 'fas fa-chevron-right');
      button.appendChild(arrowIcon);
      if (window.screen.width < 1024) {
        button.addEventListener('click', (event) => {
          this._setMenuMobileBehavior(event);
        });
      }
    }
  }

  _setMenuMobileBehavior(event) {
    let submenuButton = event.currentTarget;
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo button')) {
      button.childNodes[0].nodeValue = submenuButton.innerText;
      button.classList.add('is-active');
      button.previousElementSibling.classList.remove('is-active');
      button.addEventListener('click', () => {
        submenuButton.parentNode.classList.remove('is-active');
        if (submenuButton.parentNode.parentNode.classList.contains('level-0')) {
          button.childNodes[0].nodeValue = '';
          button.classList.remove('is-active');
          button.previousElementSibling.classList.add('is-active');
        } else {
          
        }
      });
    }
    for (let button of this.template.querySelectorAll('.page-wrapper .navigation .item button')) {
      if (button === submenuButton) {
        button.parentNode.classList.add('is-active');
      } else {
        button.parentNode.classList.remove('is-active');
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
      }
      for (let button of window.document.querySelectorAll('.page-footer .navigation.footer-mobile div.item button')) {
        button.addEventListener('click', () => {
          button.nextElementSibling.classList.toggle('is-active');
        });
      }
    }
    window.addEventListener('resize', function() {
      if (window.screen.width < 1024) {
        for (let navigation of window.document.querySelectorAll('.page-footer .navigation')) {
          if (!navigation.classList.contains('footer-mobile')) {
            navigation.classList.add('footer-mobile');
          }
        }
      } else {
        for (let navigation of window.document.querySelectorAll('.page-footer .navigation')) {
          if (navigation.classList.contains('footer-mobile')) {
            navigation.classList.remove('footer-mobile');
          }
        }
      }
    })
  }
}

let portalList = [];

window.onload = (function() {
  for (let templatePortal of window.document.querySelectorAll('.template-portal')) {
    portalList.push(new TemplatePortal('template-portal', templatePortal));
  }
})();