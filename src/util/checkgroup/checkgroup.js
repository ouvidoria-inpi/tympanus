import Checkgroup from '../../partial/js/behavior/checkgroup'

/**
 * Classe para o exemplo do comportamento checkgroup
 */
class CheckgroupExample {
  /**
   * Instancia um exemplo de comportamento checkgroup
   * @param {object} element - Elemento DOM que representa um componente contento um comportamento de checkgroup
   */
  constructor(element) {
    this.element = element
    this._setBehavior()
  }

  _setBehavior() {
    this._setCheckgroupBehavior()
  }

  _setCheckgroupBehavior() {
    this.element
      .querySelectorAll('input[type="checkbox"][data-parent]')
      .forEach((trigger) => {
        const checkgroup = new Checkgroup(trigger)
        checkgroup.setBehavior()
      })
  }
}

export default CheckgroupExample
