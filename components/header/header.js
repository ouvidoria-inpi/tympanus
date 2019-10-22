class BRHeader {

  constructor(name, component) {
    this.HEADER_SITE_SELECTOR = '.br-header.is-site';
    this.LANGUAGE_MENU_TRIGGER_SELECTOR = '.language.menu button.trigger';
    this.SEARCH_INPUT_SELECTOR = '.search input';
    this.SEARCH_CLOSE_SELECTOR = '.search .close';
    this.CONFIGS_MENU_TRIGGER_SELECTOR = '.configs.menu button.trigger';
    this.BOOKMARKS_MENU_TRIGGER_SELECTOR = '.bookmarks.menu button.trigger';
    this.MENU_HAMBURGER_TRIGGER_SELECTOR = '.menu-hamburger';
    this.TOGGLE_CLASS = 'is-active';
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
        event.currentTarget.parentNode.classList.toggle(this.TOGGLE_CLASS);
      });
    }
  }

  _setSearchMenuBehavior() {
    for (let searchInput of this.component.querySelectorAll(this.SEARCH_INPUT_SELECTOR)) {
      searchInput.addEventListener('focus', (event) => {
        event.currentTarget.parentNode.parentNode.classList.add(this.TOGGLE_CLASS);
      });
    }
    for (let searchClose of this.component.querySelectorAll(this.SEARCH_CLOSE_SELECTOR)) {
      searchClose.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.remove(this.TOGGLE_CLASS);
      });
    }
  }

  _setConfigsMenuBehavior() {
    for (let configsMenuTrigger of this.component.querySelectorAll(this.CONFIGS_MENU_TRIGGER_SELECTOR)) {
      configsMenuTrigger.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.toggle(this.TOGGLE_CLASS);
      });
    }
  }

  _setBookmarksMenuBehavior() {
    for (let bookmarksMenuTrigger of this.component.querySelectorAll(this.BOOKMARKS_MENU_TRIGGER_SELECTOR)) {
      bookmarksMenuTrigger.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.toggle(this.TOGGLE_CLASS);
      });
    }
  }

  _setMenuHamburgerBehavior() {
    for (let menuHamburger of this.component.querySelectorAll(this.MENU_HAMBURGER_TRIGGER_SELECTOR)) {
      menuHamburger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle(this.TOGGLE_CLASS);
      });
    }
  }
}

listHeader = [];
for (let header of window.document.querySelectorAll('.br-header')) {
  listHeader.push(new BRHeader('br-header', header));
}