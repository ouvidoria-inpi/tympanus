import Collapse from './collapse'

/**
 * Classe para o comportamento Dropdown.
 * O Comportamento Dropdown é um caso especial do comportamentos Collapse
 * em que o alvo aparece flutuando na tela.
 * Nesse caso o alvo precisa filho de um elemento pai
 */
export default class Dropdown extends Collapse {
  /**
   * Instancia um comportamento accordion
   * @param {object} - Objeto de configuração inicial para destructuring
   * @property {object} trigger - Elemento DOM que representa o acionador do comportmento accordion
   * @property {string} iconToShow - Classe que representa o ícone para mostrar o conteúdo (padrão: fa-chevron-down)
   * @property {string} iconToHide - Classe que representa o ícone para esconder o conteúdo (padrão: fa-chevron-up)
   * @property {boolean} useIcons - true: com ícone | false: sem ícone (padrão: true)
   */
  constructor({ trigger, iconToShow = 'fa-chevron-down', iconToHide = 'fa-chevron-up', useIcons = true }) {
    super({ iconToHide, iconToShow, trigger, useIcons })
  }

  /**
   * Trata a configuração inicial do comportamento dropdown
   * @override
   * @private
   */
  _setUp() {
    super._setUp()
    this._hideDropdown()
    this._initializeDropdownItems()
  }

  /**
   * Oculta o dropdown ao clicar fora do acionador e do alvo
   * @private
   */
  _hideDropdown() {
    document.addEventListener('mousedown', (event) => {
      if (
        !this.trigger.contains(event.target) &&
        !this.target.hasAttribute('hidden') &&
        !this.target.contains(event.target)
      ) {
        this.trigger.click()
      }
    })
  }

  /**
   * Marca o alvo com o atributo data-dropdown
   * @override
   * @private
   */
  _setTargetVisibilityStatus() {
    super._setTargetVisibilityStatus()
    if (this.target.hasAttribute('hidden')) {
      this.target.removeAttribute('data-dropdown')
    } else {
      this.target.setAttribute('data-dropdown', '')
    }
  }

  /**
   * Trata o estado de visualização do pai do alvo
   * @private
   */
  _setParentsTargetVisibilityStatus() {
    if (this.target.hasAttribute('hidden')) {
      this.target.parentElement.classList.remove('dropdown')
    } else {
      this.target.parentElement.classList.add('dropdown')
    }
  }

  /**
   * Para itens pertencentes a dropdown do tipo menuitem, permite
   * o uso das teclas de seta para cima e para baixo do teclado.
   * @private
   */
  _initializeDropdownItems() {
    this.dropdownItems = Array.from(this.target.querySelectorAll('[role="menuitem"]'))
    this.dropdownItems.forEach((item) => {
      item.addEventListener('keydown', (event) => {
        const key = event.key
        const currentIndex = this.dropdownItems.indexOf(item)
        const lastIndex = this.dropdownItems.length - 1

        switch (key) {
          case 'ArrowUp':
            event.preventDefault()
            const prevIndex = (currentIndex - 1 + this.dropdownItems.length) % this.dropdownItems.length
            this.dropdownItems[prevIndex].focus()
            break
          case 'ArrowDown':
            event.preventDefault()
            const nextIndex = (currentIndex + 1) % this.dropdownItems.length
            this.dropdownItems[nextIndex].focus()
            break
          default:
            break
        }
      })
    })
  }

  /**
   * Handler para o evento de click no acionador do comportamento dropdown
   * Lança um evento 'change' a cada troca
   * @override
   * @private
   */
  _handleTriggerClickBehavior() {
    super._handleTriggerClickBehavior()
    this._setParentsTargetVisibilityStatus()
  }

  /**
   * Configura o comportamento dropdown
   * @override
   * @public
   */
  setBehavior() {
    super.setBehavior()
  }
}
