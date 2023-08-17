/**
 * Classe Select
 */
class Select {
  /**
   * Instanciar o Select
   * @param {string} name - Nome do componente
   * @param {object} component - Objeto referenciando a raiz do componente DOM
   */
  constructor(name, component) {
    this.name = name
    this.component = component

    this.inputContainer = this.component.querySelector('.select-input')
    this.listContainer = this.component.querySelector('.select-list')
    this.listItems = this.listContainer.querySelectorAll('.item input')

    // Instanciar dropdown no input
    this.inputDropdown = this.inputContainer.querySelector('input')
    this.inputDropdownInstance = new Behavior(
      this.inputDropdown,
      this.listContainer,
      'dropdown'
    )

    // Instanciar dropdown no botÃ£o
    this.buttonDropdown = this.inputContainer.querySelector(
      '.input-action button'
    )
    this.buttonDropdownInstance = new Behavior(
      this.buttonDropdown,
      this.listContainer,
      'dropdown',
      false
    )

    this._setBehavior()
  }

  /**
   * Definir comportamentos do componente
   * @private
   */
  _setBehavior() {
    this._setDropdown()
    this._setInput()
  }

  /**
   * Instanciar dropdown
   */
  _setDropdown() {
    this.component.classList.add('dropdown')
    this.listContainer.classList.add('dropdown-body')

    // Sincroniza acionadores de dropdown
    this._setDropdownSync(this.inputDropdown, this.buttonDropdown)
  }

  /**
   * Sincronizar input e button no comportamento dropdown
   * @param {object} input - acionador dropdown input
   * @param {object} button - acionador dropdown button
   */
  _setDropdownSync(input, button) {
    input.addEventListener('click', () => {
      if (!this.listContainer.classList.contains('show')) {
        button.setAttribute('aria-expanded', 'false')
      } else {
        button.setAttribute('aria-expanded', 'true')
      }
    })
    button.addEventListener('click', () => {
      if (!this.listContainer.classList.contains('show')) {
        input.setAttribute('aria-expanded', 'false')
      } else {
        input.setAttribute('aria-expanded', 'true')
      }
    })
  }

  _setInput() {
    this._setItemChecked()
    this._toggleItems()
  }

  /**
   * Atualizar valor do input
   */
  _setItemChecked() {
    for (const item of this.listItems) {
      if (item.checked) {
        this.inputContainer.querySelector('input').value =
          item.nextElementSibling.querySelector('.content').textContent
        break
      }
    }
  }

  _toggleItems() {
    for (const item of this.listItems) {
      item.addEventListener('change', () => {
        this._resetSelectedItems()
        item.parentElement.classList.add('selected')
        this._setItemChecked()
        this.buttonDropdownInstance.hideTarget()
      })
    }
  }

  _resetSelectedItems() {
    for (const item of this.listItems) {
      item.parentElement.classList.remove('selected')
    }
  }
}
