import Scrim from '../../partial/js/behavior/scrim'

/**
 * Classe para o exemplo do comportamento accordion
 */
class ScrimExample {
  /**
   * Instancia um exemplo de comportamento accordion
   * @param {object} element - Elemento DOM que representa um componente contento um comportamento de accordion
   */
  constructor(element) {
    this.element = element
    this._setBehavior()
  }
  /**
   * Inicia comportamento do exemplo
   * @private
   */
  _setBehavior() {
    this._setScrimBehavior()
  }
  /**
   * Encontra o componentes .scrimutilexemplo button  e coloca no evento de click o scrim
   * @private
   */
  _setScrimBehavior() {
    for (const buttonBloco1 of window.document.querySelectorAll(
      '.scrimutilexemplo button'
    )) {
      buttonBloco1.addEventListener('click', () => {
        this.openScrimExample()
      })
    }
  }

  /**
   * Abre o scrim de id scrimutilexample
   */
  openScrimExample() {
    const scrscrim = window.document.querySelector('#scrimutilexample')
    const scrimfoco = new Scrim({
      closeElement: '#scrimfechar',
      trigger: scrscrim,
    })
    scrimfoco.showScrim()
  }
}

export default ScrimExample
