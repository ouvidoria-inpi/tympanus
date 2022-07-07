import Dropdown from '../../partial/js/behavior/dropdown'

/**
 * Classe para o exemplo do comportamento dropdown
 */
class DropdownExample {
  /**
   * Instancia um exemplo de comportamento dropdown
   * @param {object} element - Elemento DOM que representa um componente contento um comportamento de dropdown
   */
  constructor(element) {
    this.element = element
    this._setBehavior()
  }

  _setBehavior() {
    this._setDropdownBehavior()
  }

  _setDropdownBehavior() {
    this.element
      .querySelectorAll('[data-toggle="dropdown"]')
      .forEach((trigger) => {
        const config = {
          trigger,
          iconToShow: 'fa-chevron-down',
          iconToHide: 'fa-chevron-up',
          useIcons: true,
        }
        const dropdown = new Dropdown(config)
        dropdown.setBehavior()
      })
  }
}

export default DropdownExample
