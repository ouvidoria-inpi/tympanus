import Accordion from '../../partial/js/behavior/accordion'

/**
 * Classe para o exemplo do comportamento accordion
 */
class AccordionExample {
  /**
   * Instancia um exemplo de comportamento accordion
   * @param {object} element - Elemento DOM que representa um componente contento um comportamento de accordion
   */
  constructor(element) {
    this.element = element
    this._setBehavior()
  }

  _setBehavior() {
    this._setAccordionBehavior()
  }

  _setAccordionBehavior() {
    this.element
      .querySelectorAll('[data-toggle="accordion"]')
      .forEach((trigger) => {
        const config = {
          iconToHide: 'fa-chevron-up',
          iconToShow: 'fa-chevron-down',
          trigger,
          useIcons: true,
        }
        const accordion = new Accordion(config)
        accordion.setBehavior()
      })
  }
}

export default AccordionExample
