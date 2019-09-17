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