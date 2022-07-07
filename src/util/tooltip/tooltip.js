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
        component,
        activator: trigger,
        place: 'top',
        timer,
        active,
        placement: 'top',
        textTooltip: 'teste',
      }
      const tooltip = new Tooltip(config)
    })
  }
}

export default TooltipExample
