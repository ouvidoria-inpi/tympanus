/**
 * Classe do componente BRSelect
 */

class BRSelect {
  /**
   * Instancia o componente
   * @property {string} name - Nome do componente em minúsculo
   * @property {object} component - Objeto referenciando a raiz do componente DOM
   */

  constructor(name, component) {
    this.name = name
    this.component = component
    this.multiple = component.hasAttribute('multiple')
    this._setOptionsList()
    this._setBehavior()
  }
  /**
   * Retorna os valores dos elementos selecionados
   * @returns {Object[]} elementos selecionados
   *
   */
  get selected() {
    return this._optionSelected('value')
  }
  /**
   * Retorna os elementos selecionados pelo inputValue
   * @param {Object[]} elementos selecionados
   * @returns
   */
  get selectedValue() {
    return this._optionSelected('inputValue')
  }

  /**
   * Retorna os elementos options selecionados
   * @param {Object[]} elementos selecionados
   * @returns
   */
  _optionSelected(strOption) {
    let selected = []
    for (const [index, option] of this.optionsList.entries()) {
      if (!this.multiple) {
        if (option.selected) {
          selected = option[strOption]
          break
        }
      } else {
        if (index > 0 && option.selected) {
          selected.push(option[strOption])
        }
      }
    }
    return selected
  }

  /**
   * Remove elementos com disbled
   * @private
   */
  _removeNotFoundElement() {
    const list = this.component.querySelector('.br-list')
    // debugger
    if (list.querySelector('.br-item.disabled')) {
      list.removeChild(list.querySelector('.br-item.disabled'))
    }
  }

  /**
   * Coloca o texto Item não encontrado no select
   * @private
   */
  _addNotFoundElement() {
    const tag = document.createElement('div')
    tag.classList.add('br-item')
    tag.classList.add('disabled')
    tag.appendChild(document.createTextNode('Item não encontrado'))
    const list = this.component.querySelector('.br-list')
    list.appendChild(tag)
  }
  /**
   * Cria listagem de elementos do select
   * @private
   */
  _setOptionsList() {
    this.optionsList = []
    for (const item of this.component.querySelectorAll('.br-list .br-item')) {
      for (const input of item.querySelectorAll(
        '.br-radio input, .br-checkbox input'
      )) {
        const option = {
          element: item,
          focus: false,
          inputValue: input.value,
          selected: false,
          value: input.nextElementSibling.innerText,
          visible: true,
        }
        this.optionsList.push(option)
      }
    }
  }
  /**
   * Reseta estado da lista
   * @private
   */
  resetOptionsList() {
    this._unsetSelectionBehavior()
    this._setOptionsList()
    this._setSelectionBehavior()
  }
  /**
   * Define o comportamento do componente
   * @private
   */
  _setBehavior() {
    this._setDropdownBehavior()
    this._setKeyboardBehavior()
    this._setSelectionBehavior()
    this._setFilterBehavior()
  }
  /**
   * Define o comportamento de dropdown
   * @private
   */

  _setDropdownBehavior() {
    for (const input of this.component.querySelectorAll(
      '.br-input input[type="text"]'
    )) {
      input.addEventListener('focus', () => {
        this._openSelect()
        this._resetFocus()
      })
    }
    for (const trigger of this.component.querySelectorAll(
      '.br-input .br-button[data-trigger]'
    )) {
      trigger.addEventListener('click', () => {
        for (const list of this.component.querySelectorAll('.br-list')) {
          if (list.hasAttribute('expanded')) {
            this._closeSelect()
          } else {
            this._openSelect()
          }
        }
      })
    }
    window.document.addEventListener('click', (event) => {
      if (!this.component.contains(event.target)) {
        this._closeSelect()
      }
    })
  }
  /**
   * Define o comportamento de teclado
   * @private
   */

  _setKeyboardBehavior() {
    for (const input of this.component.querySelectorAll(
      '.br-input input[type="text"]'
    )) {
      input.addEventListener('keydown', this._handleKeydownOnInput.bind(this))
    }
    for (const list of this.component.querySelectorAll('.br-list')) {
      // eslint-disable-next-line complexity
      list.addEventListener('keydown', this._handleKeydownOnList.bind(this))
    }
  }
  /**
   * Retira o comportamento de teclado
   * @private
   */

  _unsetKeyboardBehavior() {
    for (const input of this.component.querySelectorAll(
      '.br-input input[type="text"]'
    )) {
      input.removeEventListener('keydown', this._handleKeydownOnInput, false)
    }
    for (const list of this.component.querySelectorAll('.br-list')) {
      // eslint-disable-next-line complexity
      list.addEventListener('keydown', this._handleKeydownOnList.bind(this))
    }
  }

  /**
   * Verifica a navegação
   * @param {object} event evento que foi ativado
   * @private
   */
  _handleKeydownOnInput(event) {
    //Close Select
    if (event.shiftKey && event.key === 'Tab') {
      this._closeSelect()
      this._resetFocus()
    }
    if (event.key === 'Tab' && !event.shiftKey) {
      event.target.parentNode.querySelector('.br-button').focus()
    }
    if (event.keyCode === 40) {
      event.preventDefault()
      for (const list of this.component.querySelectorAll('.br-list')) {
        list.focus()
        if (list === document.activeElement) {
          this._getNextItem().focus()
        }
      }
    }
  }
  /**
   * Define comportamentos de teclado na lista
   * @private
   */

  _handleKeydownOnList(event) {
    event.preventDefault()
    switch (event.keyCode) {
      case 9:
        this._closeSelect()
        this._resetFocus()
        break
      case 27:
        this._closeSelect()
        break
      case 32:
        this._setKeyClickOnOption(event.currentTarget)
        break
      case 38:
        this._getPreviousItem().focus()
        break
      case 40:
        this._getNextItem().focus()
        break
      default:
        break
    }
  }
  /**
   * Define comportamentos de teclado no option
   * @private
   */
  _setKeyClickOnOption(list) {
    for (const [index, item] of list.querySelectorAll('.br-item').entries()) {
      if (this.optionsList[index].focus) {
        for (const check of item.querySelectorAll(
          '.br-radio input[type="radio"], .br-checkbox input[type="checkbox"]'
        )) {
          check.click()
          this._sendEvent()
        }
      }
    }
  }

  /**
   * Envia o evento onchange
   * @private
   */
  _sendEvent() {
    const clickEvent = new CustomEvent('onChange', {
      bubbles: true,
      detail: this.component,
    })
    this.component.dispatchEvent(clickEvent)
  }

  /**
   * preseleciona o elemento apartir da classe css .selected
   * @private
   */
  _setDefaultSelected() {
    const selectedItems = this.component.querySelectorAll('.br-list .selected')

    const iterable = typeof selectedItems[Symbol.iterator]
    if (selectedItems !== null && iterable === 'function') {
      for (const item of selectedItems) {
        this._setSelected(this._positionSelected(item), item)
      }
    }
  }

  /**
   * Retorna posição do elemento no select
   * @param {element} component elemento que vai ser pesquisado
   * @returns {integer} valor da posição
   */
  _positionSelected(component) {
    for (const [index, componente] of this.component
      .querySelectorAll('.br-list .br-item')
      .entries()) {
      if (componente === component) {
        return index
      }
    }
    return 0
  }
  /**
   * Desfine comportamento do clique no checkbox
   * @param {int} index
   * @param {object} item -  Objeto do item clicado
   * @param {object} event  -  Objeto do evento do clique
   * @private
   */
  _handleClickOnCheck(index, item, event) {
    if (!this.multiple) {
      for (const [index2, item2] of this.component
        .querySelectorAll('.br-list .br-item')
        .entries()) {
        this._removeSelected(index2, item2)
      }
      this._setSelected(index, item)
      this._closeSelect()
    } else if (event.currentTarget.hasAttribute('checked')) {
      this._removeSelected(index, item)
    } else {
      this._setSelected(index, item)
    }
    if (item.hasAttribute('data-all')) {
      for (const check of item.querySelectorAll(
        '.br-checkbox input[type="checkbox"]'
      )) {
        if (!check.hasAttribute('checked')) {
          this._setAttribute()
          item.querySelectorAll('label')[0].innerText = 'Selecionar Todos'
        } else {
          for (const item2 of this.component.querySelectorAll(
            '.br-list .br-item'
          )) {
            for (const check2 of item2.querySelectorAll(
              '.br-checkbox input[type="checkbox"]'
            )) {
              if (!check2.hasAttribute('checked')) {
                check2.click()
              }
            }
          }
          item.querySelectorAll('label')[0].innerText = 'Deselecionar Todos'
        }
      }
    }
    this._sendEvent()
  }
  /**
   * Define comportamentos na seleção
   * @private
   */
  _setSelectionBehavior() {
    this.selectionHandler = []
    this._setDefaultSelected()
    for (const [index, item] of this.component
      .querySelectorAll('.br-list .br-item')
      .entries()) {
      for (const check of item.querySelectorAll(
        '.br-radio input[type="radio"], .br-checkbox input[type="checkbox"]'
      )) {
        this.selectionHandler.push({
          element: check,
          handler: this._handleClickOnCheck.bind(this, index, item),
        })
        check.addEventListener('click', this.selectionHandler[index].handler)
      }
    }
  }
  /**
   * retira comportamento  de clique na seleção
   * @private
   */
  _unsetSelectionBehavior() {
    this.selectionHandler.forEach((item) => {
      item.element.removeEventListener('click', item.handler, false)
    })
  }
  /**
   * Define comportamentos no filtro do input
   * @private
   */
  _setFilterBehavior() {
    for (const input of this.component.querySelectorAll(
      '.br-input input[type="text"]'
    )) {
      input.addEventListener('input', (event) => {
        let allHidden = true
        this._filter(event.currentTarget.value)
        for (const option of this.optionsList) {
          if (option.visible) {
            allHidden = false
          }
        }

        if (allHidden) {
          // event.currentTarget.value = event.currentTarget.value.slice(0, -1)
          this._filter(event.currentTarget.value)
        }
      })
    }
  }
  /**
   * Define filtro no list
   * @private
   */
  _filter(value) {
    let hasVisible = false
    for (const [index, item] of this.component
      .querySelectorAll('.br-list .br-item')
      .entries()) {
      this._removeNotFoundElement()
      if (!this.optionsList[index]) {
        continue
      }
      if (
        this.optionsList[index].value
          .toUpperCase()
          .indexOf(value.toUpperCase()) === -1
      ) {
        item.classList.add('d-none')
        this.optionsList[index].visible = false
      } else {
        item.classList.remove('d-none')
        this.optionsList[index].visible = true
        hasVisible = true
      }
    }
    if (hasVisible === false) {
      this._addNotFoundElement()
    }
  }
  /**
   * Define atributo checked com click
   * @private
   */
  _setAttribute() {
    for (const item2 of this.component.querySelectorAll('.br-list .br-item')) {
      for (const check2 of item2.querySelectorAll(
        '.br-checkbox input[type="checkbox"]'
      )) {
        if (check2.hasAttribute('checked')) {
          check2.click()
        }
      }
    }
  }

  /**
   * Seleciona o elemento e retira checked dos outros elementos
   * @param {integer} index Posição do elemento na lista
   * @param {*} item elemento em que vai ser selecionado
   * @private
   */
  _setSelected(index, item) {
    item.classList.add('selected')
    for (const check of item.querySelectorAll('.br-radio, .br-checkbox')) {
      for (const input of check.querySelectorAll(
        'input[type="radio"], input[type="checkbox"]'
      )) {
        input.setAttribute('checked', '')
      }
    }
    this.optionsList[index].selected = true
    this._setInput()
  }

  /**
   * Retira o estado selecionado do elemento
   * @param {integer} index Posição do elemento na lista
   * @param {*} item elemento em que vai ser desselecionado
   * @private
   */
  _removeSelected(index, item) {
    item.classList.remove('selected')
    for (const check of item.querySelectorAll('.br-radio, .br-checkbox')) {
      for (const input of check.querySelectorAll(
        'input[type="radio"], input[type="checkbox"'
      )) {
        input.removeAttribute('checked')
      }
      this.optionsList[index].selected = false
      this._setInput()
    }
  }
  /**
   * Determina o input
   * @private
   */
  _setInput() {
    for (const input of this.component.querySelectorAll(
      '.br-input input[type="text"]'
    )) {
      if (!this.multiple) {
        input.value = this.selected
      } else if (this.selected.length === 0) {
        input.value = ''
      } else if (this.selected.length === 1) {
        input.value = this.selected
      } else {
        input.value = `${this.selected[0]} + (${this.selected.length - 1})`
      }
    }
  }
  /**
   * Retorna elemento posterior ao focado
   * @returns {object}
   * @private
   */
  // eslint-disable-next-line complexity
  _getNextItem() {
    const list = this.component.querySelectorAll('.br-list .br-item')
    let iFocused
    let iVisible
    for (iFocused = 0; iFocused < this.optionsList.length; iFocused++) {
      if (this.optionsList[iFocused].focus) {
        for (
          iVisible = iFocused + 1;
          iVisible < this.optionsList.length;
          iVisible++
        ) {
          if (this.optionsList[iVisible].visible) {
            break
          }
        }
        break
      }
    }
    if (iFocused === this.optionsList.length) {
      for (const [index, option] of this.optionsList.entries()) {
        if (option.visible) {
          option.focus = true
          return list[index]
        }
      }
    } else if (iVisible < this.optionsList.length) {
      this.optionsList[iFocused].focus = false
      this.optionsList[iVisible].focus = true
      return list[iVisible]
    } else {
      return list[iFocused]
    }
    return ''
  }
  /**
   * Retorna elemento anterior ao focado
   * @returns {object}
   * @private
   */
  _getPreviousItem() {
    const list = this.component.querySelectorAll('.br-list .br-item')
    let iFocused
    let iVisible
    for (iFocused = 0; iFocused < this.optionsList.length; iFocused++) {
      if (this.optionsList[iFocused].focus) {
        for (iVisible = iFocused - 1; iVisible > 0; iVisible--) {
          if (this.optionsList[iVisible].visible) {
            break
          }
        }
        break
      }
    }
    if (iFocused === 0) {
      return list[iFocused]
    } else {
      this.optionsList[iFocused].focus = false
      this.optionsList[iVisible].focus = true
      return list[iVisible]
    }
  }
  /**
   * Reseta valor do input
   * @private
   */
  _resetInput() {
    for (const input of this.component.querySelectorAll(
      '.br-input input[type="text"]'
    )) {
      input.value = ''
    }
  }
  /**
   * Reseta o focus dos elementos
   * @private
   */
  _resetFocus() {
    for (const option of this.optionsList) {
      option.focus = false
    }
  }
  /**
   * Reseta o focus dos elementos visiveis
   * @private
   */

  _resetVisible() {
    const list = this.component.querySelectorAll('.br-list .br-item')
    for (const [index, option] of this.optionsList.entries()) {
      option.visible = true
      list[index].classList.remove('d-none')
    }
  }
  /**
   * Abre o select aberto
   * @private
   */
  _openSelect() {
    for (const list of this.component.querySelectorAll('.br-list')) {
      list.setAttribute('expanded', '')
    }
    for (const icon of this.component.querySelectorAll(
      '.br-input .br-button i'
    )) {
      icon.classList.remove('fa-angle-down')
      icon.classList.add('fa-angle-up')
    }
    this._resetInput()
  }
  /**
   * Fecha o select aberto
   * @private
   */
  _closeSelect() {
    for (const list of this.component.querySelectorAll('.br-list')) {
      list.removeAttribute('expanded')
    }
    for (const icon of this.component.querySelectorAll(
      '.br-input .br-button i'
    )) {
      icon.classList.remove('fa-angle-up')
      icon.classList.add('fa-angle-down')
    }
    this._setInput()
    this._resetFocus()
    this._resetVisible()
  }
}

export default BRSelect
