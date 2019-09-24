class Portal {
  
  constructor(name = 'template-portal') {
    this.name = name;
    this.handleSearch();
    this.handleLanguage();
    this.handleNavigation();
    this.handleFooter();
  }

  handleSearch() {
    for (let search of window.document.querySelectorAll('.br-search')) {
      if (window.screen.width >= 1024) {
        for (let input of search.querySelectorAll('input#search')) {
          input.addEventListener('focus', () => {
            search.classList.add('is-active')
          });
        }
      } else {
        for (let buttonSearch of search.querySelectorAll('button.search')) {
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

  handleLanguage() {
    for (let language of window.document.querySelectorAll('.language')) {
      language.addEventListener('click', () => {
        if (language.classList.contains('is-active')) {
          language.classList.remove('is-active');
        } else {
          language.classList.add('is-active');
        }
      });
      for (let languageList of language.querySelectorAll('.language-list')) {
        for (let item of languageList.querySelectorAll('.item')) {
          item.addEventListener('click', () => {
            if (item.classList.contains('is-active')) {
              item.classList.remove('is-active');
            } else {
              item.classList.add('is-active');
            }
            for (let i of languageList.querySelectorAll('.item')) {
              if (i !== item) {
                i.classList.remove('is-active');
              }
            }
          });
        }
      }
    }
  }

  handleNavigation() {
    for (let menuHamburger of window.document.querySelectorAll('.menu-hamburger')) {
      menuHamburger.addEventListener('click', () => {
        for (let navigationWrapper of window.document.querySelectorAll('.navigation-wrapper')) {
          if (navigationWrapper.classList.contains('is-active')) {
            navigationWrapper.classList.remove('is-active');
          } else {
            navigationWrapper.classList.add('is-active');
          }
        }
      });      
    }

    for (let button of window.document.querySelectorAll('.page-header .navigation div.item button')) {
      let arrowIcon = document.createElement('i');
      arrowIcon.setAttribute('class', 'fas fa-chevron-right');
      button.appendChild(arrowIcon);
    }
  }

  handleFooter() {
    if (window.screen.width < 1024) {
      for (let navigation of window.document.querySelectorAll('.page-footer .navigation')) {
        navigation.classList.add('footer-mobile');
      }
      for (let button of window.document.querySelectorAll('.page-footer .navigation.footer-mobile div.item button')) {
        button.addEventListener('click', function() {
          button.classList.toggle('is-active');
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

window.onload = new Portal();






   // Clonáveis
    const logo = document.querySelector('.logo')
    const quicklinks = document.querySelector('.quicklinks')
    const avatar = document.querySelector('.avatar')
    const configs = document.querySelector('.configs .menu')
    const logout = document.querySelector('.logout')
    const timeout = document.querySelector('.timeout')

    // Navegação
    const navigationTrigger = document.querySelector('.menu-hamburger')
    const navigation = document.querySelector('#navigation')

    const navlogo = navigation.querySelector('.nav-logo')
    const navquicklinks = navigation.querySelector('.nav-quicklinks')
    const navavatar = navigation.querySelector('.nav-avatar')
    const navconfigs = navigation.querySelector('.nav-configs')
    const navbuttontimeout = navigation.querySelector('.nav-buttontimeout')
    const navtimeout = navigation.querySelector('.nav-timeout')

    const navItems = navigation.querySelectorAll('.item')
    const navArrowForward = 'fas fa-chevron-right'
    const navArrowBack = 'fas fa-chevron-left'

    function navClones() {
      if (logo) {
        navlogo.appendChild(logo.cloneNode(true))
      }
      if (quicklinks) {
        navquicklinks.appendChild(quicklinks.cloneNode(true))
      }
      if (avatar) {
        navavatar.appendChild(avatar.cloneNode(true))
      }
      if (configs) {
        navconfigs.appendChild(configs.cloneNode(true))
      }
      if (logout) {
        navbuttontimeout.appendChild(logout.cloneNode(true))
      }
      if (timeout) {
        navtimeout.appendChild(timeout.cloneNode(true))
      }
    }

    navClones()

    for (item of navItems) {
      if (item.childElementCount > 1) {
        // Pai
        let navParent = item.children[0] // tem filhos
        let navParentText = navParent.innerText

        // Incluir seta de navegação
        let iconElement = document.createElement('i')
        iconElement.setAttribute('class', navArrowForward)
        navParent.appendChild(iconElement)

        // Navegação entre items
        navParent.addEventListener('click', function () {
          setNavLogo(navParentText)
        })
      }
    }

    navigationTrigger.addEventListener('click', function () {
      toogleActive(navigation)
    })

    // Classe para ativar elementos e componentes
    const active = "is-active"

    function toogleActive(element) {
      element.classList.toggle(active)
    }

    // Menu dropdown
    const dropdown = document.querySelectorAll('.dropdown')

    for (drop of dropdown) {
      let trigger = drop.querySelector('.trigger')
      let menu = drop.querySelector('.menu')

      trigger.addEventListener('click', function () {
        toogleActive(menu)
      })
    }

    // Busca
    const search = document.querySelector('.search')
    const searchTrigger = search.querySelector('.field button')
    const searchInput = search.querySelector('.field input')
    const searchClose = search.querySelector('.close')

    function openSearch() {
      toogleActive(search)
      searchTrigger.removeEventListener('click', openSearch)
      searchInput.removeEventListener('click', openSearch)
    }

    function closeSearch() {
      toogleActive(search)
      searchTrigger.addEventListener('click', openSearch)
      searchInput.addEventListener('click', openSearch)
    }

    searchTrigger.addEventListener('click', openSearch)
    searchInput.addEventListener('click', openSearch)
    searchClose.addEventListener('click', closeSearch)
  </script>