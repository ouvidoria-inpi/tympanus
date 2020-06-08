class BRTemplateBase {
  constructor(name, component) {
    this.name = name
    this.component = component
    this.btn_menu = component.querySelector('.br-header .menu button')
    this.close_menu = component.querySelector('.br-menu .close-menu button')
    this.col_menu = component.querySelector('.col-menu')
    this._setBehavior()
  }

  _setBehavior() {
    if (this.btn_menu) {
      this.btn_menu.addEventListener('click', () => {
        this._openMenu()
      })
    }
    if (this.close_menu) {
      this.close_menu.addEventListener('click', () => {
        this._closeMenu()
      })
    }
  }
  _openMenu() {
    //this.col_menu.style.display = 'unset'
    this.col_menu.classList.remove('hide')
  }
  _closeMenu() {
    //this.col_menu.style.display = 'none'
    this.col_menu.classList.add('hide')
  }
}

const templateBaseList = []
for (const brTemplateBase of window.document.querySelectorAll('.template-base')) {
  templateBaseList.push(new BRTemplateBase('template-base', brTemplateBase))
}

export default BRTemplateBase
