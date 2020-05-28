class BRFooter {
  constructor(name, component) {
    this.name = name
    this.component = component
    this.childList = []
    /**
     * mode: 0 Mobile
     * mode: 1 Desktop
     */
    this.isMobile = true
    this._setBehavior()
  }

  _setBehavior() {
    this.childList = this._findChildLists()
    this._checkMode()
    this._resizeWindow()
  }

  /**
   * Testa se a tela é menor que 991px (dsgov.estaleiro.serpro.gov.br/ds/fundamentos-visuais/grid)
   * Se for, coloca no modo collapse
   */
  _checkMode() {
    const windowWidth = window.innerWidth

    if (windowWidth <= 991) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }

    this.childList.forEach((element) => {
      this._toogleCollapsible(element)
    })
  }

  /**
   * Busca a relação de listas com outras listas como 'filhas'
   * Essas listas são as que devem ficar como collapsible
   */
  _findChildLists() {
    const brList = this.component.querySelectorAll('.br-list')
    const childList = []

    brList.forEach((list) => {
      const children = [...list.children]

      if (
        children.filter((e) => {
          return e.className === 'br-list'
        }).length > 0
      ) {
        childList.push(list)
      }
    })

    return childList
  }

  /**
   * Coloca o atributo collalsible
   */
  _toogleCollapsible(element) {
    if (this.isMobile) {
      element.setAttribute('collapsible', '')
    } else {
      element.removeAttribute('collapsible', '')
    }
  }

  _resizeWindow() {
    window.addEventListener('resize', () => {
      this._checkMode()
    })
  }
}

const listFooter = []
for (const brFooter of window.document.querySelectorAll('.br-footer')) {
  listFooter.push(new BRFooter('br-footer', brFooter))
}

export default BRFooter
