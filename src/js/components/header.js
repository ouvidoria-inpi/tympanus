try{
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

}catch (e){}
