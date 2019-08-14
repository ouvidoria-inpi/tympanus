function closeMenu(event){
  var dropdown =  event.target.nodeName!='HTML'?event.target.parentNode.classList.contains('is-active') || event.target.parentNode.parentNode.classList.contains('is-active'):false
  if(!dropdown){
      document.querySelectorAll('.dropdown.is-active').forEach(function(item) {
        item.classList.remove('is-active')
      })
      window.document.removeEventListener(
        'click',
          closeMenu
      )
  }

}

class ToggleElemnt {
  constructor(class_css) {
    this.elements = document.querySelectorAll(class_css)
  }
  addClass(element) {
    document.querySelectorAll('.dropdown.is-active').forEach(function(item) {
      item.classList.remove('is-active')
    })
    element.classList.add('is-active')

    window.document.addEventListener(
      'click',
        closeMenu,
      false
    )
  }

  removeClass(element) {
    element.classList.remove('is-active')
  }

  isActive(element) {
    return element.classList.contains('is-active')
  }

  async toggle(element) {
    if (this.isActive(element)) {
      this.removeClass(element)
    } else {
      this.addClass(element)
    }
  }

  addEvent() {
    this.elements.forEach(
      function(element) {
        element.addEventListener(
          'click',
          function() {
            this.toggle(element)
          }.bind(this),
          false
        )
      }.bind(this)
    )
  }
}

class Auxiliary {
  constructor(tp_event, element_class, targets_class, classtoggle) {
    this.elements_target = []
    this.tp_event = tp_event
    this.element_class = element_class
    this.targets_class = targets_class
    this.classtoggle = classtoggle
  }

  hiddenElements() {
    this.targets_class.forEach(
      function(item) {
        document.querySelectorAll(item)[0].classList.add(this.classtoggle)
      }.bind(this)
    )
  }

  addClass(index) {
    this.elements_target[index].classList.add(this.classtoggle)
  }

  removeClass(index) {
    this.elements_target[index].classList.remove(this.classtoggle)
  }

  isActive(index) {
    return this.elements_target[index].classList.contains(this.classtoggle)
  }

  async toggleElement() {
    this.elements_target.forEach(
      function(item, index) {
        if (this.isActive(index)) {
          this.removeClass(index)
        } else {
          this.addClass(index)
        }
      }.bind(this)
    )
  }

  addEvent() {
    this.elements = document.querySelectorAll(this.element_class)
    this.targets_class.forEach(
      function(item, index) {
        this.elements_target.push(document.querySelectorAll(item)[0])
      }.bind(this)
    )

    this.elements.forEach(
      function(element) {
        element.addEventListener(
          this.tp_event,
          this.toggleElement.bind(this),
          false
        )
      }.bind(this)
    )
  }
}

class Menu {
  constructor() {
    this.elments = []
    this.elementsLinks = []
    var fields = []
    this.elements = document.querySelectorAll(
      '.mobile-header .navigation .item .trigger'
    )
    this.elementsLinks = document.querySelectorAll(
      '.mobile-header .navigation .item a.link'
    )
    this.menuPreferences = document.querySelectorAll(
      '.mobile-header .user .actions .trigger'
    )
  }

  async clickUserPreferences() {
    var menu = document.querySelectorAll(
      '.mobile-header .overflow .navigation'
    )[0]
    var usrpref = document.querySelectorAll(
      '.mobile-header .overflow .user-menu'
    )[0]
    var icon = document.querySelectorAll(
      '.mobile-header .user .actions .trigger i'
    )[0]
    menu.classList.toggle('d-none')
    usrpref.classList.toggle('d-none')
    icon.classList.toggle('fa-cog')
    icon.classList.toggle('fa-times')
  }

  async clickMenuItem(item) {
    var subnav = item.currentTarget.parentNode.childNodes[5]
    var button = item.currentTarget.parentNode.childNodes[3]
    var icon = button.childNodes[1]

    if (
      icon.classList.contains('fa-minus') &&
      !subnav.classList.contains('d-none')
    ) {
      icon.classList.remove('fa-minus')
      icon.classList.add('fa-plus')
    } else {
      icon.classList.remove('fa-plus')
      icon.classList.add('fa-minus')
    }

    item.currentTarget.classList.contains('is-active')
      ? item.currentTarget.classList.remove('is-active')
      : item.currentTarget.classList.add('is-active')
    subnav.classList.contains('d-none')
      ? subnav.classList.remove('d-none')
      : subnav.classList.add('d-none')
  }

  static removeClick() {
    document
      .querySelectorAll('.navigation .item .is-active')
      .forEach(function(item) {
        item.classList.remove('is-active')
      })
  }

  async clickLinkItem(actualElement) {
    this.elementsLinks
    Menu.removeClick()
    actualElement.currentTarget.classList.add('is-active')
  }

  addEvent() {
    this.elements.forEach(
      function(itemButton) {
        itemButton.addEventListener(
          'click',
          this.clickMenuItem.bind(itemButton),
          false
        )
      }.bind(this)
    )

    this.elementsLinks.forEach(
      function(linkMenu) {
        linkMenu.addEventListener(
          'click',
          this.clickLinkItem.bind(linkMenu),
          false
        )
      }.bind(this)
    )
    this.menuPreferences[0].addEventListener(
      'click',
      this.clickUserPreferences.bind(this),
      false
    )
  }
}

class InputSearch {
  constructor() {
    this.button = Object
    this.search = Object
  }

  hiddenButton() {
    this.button.classList.add('d-none')
    this.search.value = ''
  }

  showButton() {
    this.button.classList.remove('d-none')
  }

  checkShow() {
    if (this.search.value.length > 0) {
      this.showButton()
    } else {
      this.hiddenButton()
    }
  }

  async initializeEvent() {
    this.button = document.querySelectorAll('.clear-button')[0]
    this.search = document.querySelectorAll('.br-input #search')[0]

    var toggleMobileSearch = new Auxiliary(
      'click',
      '.mobile-subheader .accessibility .br-button.is-primary',
      ['.mobile-header .br-search'],
      'd-none'
    )
    this.hiddenButton()
    this.search.addEventListener('keyup', this.checkShow.bind(this), false)
    this.button.addEventListener('click', this.hiddenButton.bind(this), false)
  }
}

window.onload = function() {
  var toggle = new ToggleElemnt('.dropdown')
  toggle.addEvent()

  var toggleMenu = new Auxiliary(
    'focus',
    '.desktop-header #search',
    ['.logo'],
    'd-none'
  )
  toggleMenu.addEvent()
  var toggleMenu = new Auxiliary(
    'blur',
    '.desktop-header #search',
    ['.logo'],
    'd-none'
  )
  toggleMenu.addEvent()

  inputSearch = new InputSearch()
  inputSearch.initializeEvent()

  var toggleMobileMenu = new Auxiliary(
    'click',
    '.mobile-header .sidemenu-trigger',
    ['.mobile-header .canvas', '.mobile-header .sidemenu'],
    'd-none'
  )
  toggleMobileMenu.addEvent()

  var toggleMobileMenu = new Auxiliary(
    'click',
    '.mobile-header .canvas',
    ['.mobile-header .canvas', '.mobile-header .sidemenu'],
    'd-none'
  )
  toggleMobileMenu.addEvent()

  var toggleMobileSearch = new Auxiliary(
    'click',
    '.mobile-subheader .accessibility .br-button.is-primary',
    ['.mobile-header .br-search'],
    'd-none'
  )
  toggleMobileSearch.addEvent()

  menuClass = new Menu()
  menuClass.addEvent()


  var toggleDesktopMenu = new Auxiliary(
    'click',
    '.desktop-header .menu-hamburger',
    ['.menu-hamburger i.fa-bars','.menu-hamburger i.fa-times', '.container-fluid .col-md-3:first-child'],
    'd-sm-block'
  )
  toggleDesktopMenu.addEvent()

}

let collapseList = document.querySelectorAll('button[data-toggle="collapse"]');
collapseList.forEach(function(collapse) {
  collapse.addEventListener("click", function(event) {
    event.target.classList.toggle("is-open")
  })
})
