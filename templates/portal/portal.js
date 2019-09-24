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
        navLogo.appendChild(logo.cloneNode(true));
      }
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
        button.addEventListener('click', () => {
          button.parentElement.parentElement.classList.remove('is-active');
          button.nextElementSibling.classList.add('is-active');
          for (let navLogo of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo')) {
            for (let logo of this.template.querySelectorAll('.page-wrapper .navigation .nav-logo .logo')) {
              navLogo.removeChild(logo);
              let icon = window.document.createElement('i');
              icon.setAttribute('class', 'fas fa-chevron-left')
              let text = window.document.createElement('span');
              text.innerHTML = button.innerText;
              navLogo.appendChild(icon);
              navLogo.appendChild(text);
              navLogo.addEventListener('click', () => {
                button.nextElementSibling.classList.remove('is-active');
                button.parentElement.parentElement.classList.add('is-active');
              })
            }
          }
        });
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