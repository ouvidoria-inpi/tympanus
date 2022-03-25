import Tooltip from '../../partial/js/behavior/tooltip'

/**
 * Classe para o exemplo do comportamento tooltip
 */
class TooltipExample {
  /**
   * Instancia um exemplo de comportamento tooltip
   * @param {object} element - Elemento sDOM que representa um componente contento um comportamento de tooltip
   */
  constructor(element) {
    this.element = element
    this._setBehavior()
  }

  _setBehavior() {
    this._settooltipBehavior()
  }

  _settooltipBehavior() {
    this.element.querySelectorAll('[data-tooltip-text]').forEach((trigger) => {
      const config = {
        activator: trigger,
        active,
        component,
        place: 'top',
        placement: 'top',
        textTooltip: 'teste',
        timer,
      }
      const tooltip = new Tooltip(config)
    })
  }
}

export default TooltipExample
