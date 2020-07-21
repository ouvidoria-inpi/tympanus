class BRSelect {
  constructor (name, component) {
    this.name = name
    this.component = component
    this.options = []
    this.selected = []
    this._setOptions()
    this._setBehavior()
  }

  _setOptions () {
    for (const content of this.component.querySelectorAll('.br-list.options-list .item .content')) {
      this.options.push(content.innerText)
    }
  }

  _setBehavior () {
    this._setExpandBehavior()
    if (this.component.hasAttribute('multiple')) {
      this._setSelectMultipleBehavior()
    } else {
      this._setSelectSimpleBehavior()
    }
  }

  _selectItem (event) {
    for (const content of event.currentTarget.querySelectorAll('.content')) {
      if (this.component.hasAttribute('multiple')) {
        this.selected.push(content.innerText)
        event.currentTarget.classList.add('hidden')
        this._buildSelectedList(content.innerText)
        for (const input of this.component.querySelectorAll('.br-input input')) {
          if (this.selected.length === 1) {
            input.value = `${this.selected.length} item selecionado`
          } else {
            input.value = `${this.selected.length} itens selecionados`
          }
        }
      } else {
        this.selected = content.innerText
        for (const item of this.component.querySelectorAll('.br-list.options-list .item')) {
          if (item === event.currentTarget) {
            item.setAttribute('selected', '')
          } else {
            item.removeAttribute('selected')
          }
        }
        for (const input of this.component.querySelectorAll('.br-input input')) {
          input.value = content.innerText
        }
        this._closeSelect()
      }
    }
  }

  _unselectItem (event) {
    for (const option of event.currentTarget.querySelectorAll('.content')) {
      this.selected.splice(this.selected.indexOf(option.innerText), 1)
      for (const optionItem of this.component.querySelectorAll('.br-list.options-list .item')) {
        for (const content of optionItem.querySelectorAll('.content')) {
          if (content.innerText === option.innerText) {
            optionItem.classList.remove('hidden')
          }
        }
      }
    }
    event.currentTarget.parentElement.removeChild(event.currentTarget)
    for (const input of this.component.querySelectorAll('.br-input input')) {
      if (this.selected.length === 0) {
        input.value = ''
      } else if (this.selected.length === 1) {
        input.value = `${this.selected.length} item selecionado`
      } else {
        input.value = `${this.selected.length} itens selecionados`
      }
    }
    for (const selectedList of this.component.querySelectorAll('.br-list.selected-list')) {
      if (this.selected.length === 0) {
        selectedList.classList.add('hidden')
        for (const brDivider of this.component.querySelectorAll('.br-divider')) {
          brDivider.classList.add('hidden')
        }
      }
    }
  }

  _buildSelectedList (option) {
    for (const selectedList of this.component.querySelectorAll('.br-list.selected-list')) {
      const item = this._createItem(['fas', 'fa-trash'], option)
      item.setAttribute('selected', '')
      item.addEventListener('click', this._unselectItem.bind(this))
      selectedList.appendChild(item)
      if (this.selected.length !== 0) {
        selectedList.classList.remove('hidden')
        for (const brDivider of this.component.querySelectorAll('.br-divider')) {
          brDivider.classList.remove('hidden')
        }
      }
    }
  }

  _setExpandBehavior () {
    for (const buttonTrigger of this.component.querySelectorAll('.br-input button[trigger]')) {
      buttonTrigger.addEventListener('click', (event) => {
        for (const card of this.component.querySelectorAll('.br-card')) {
          if (card.hasAttribute('expanded')) {
            card.removeAttribute('expanded')
          } else {
            card.setAttribute('expanded', '')
          }
        }
        for (const icon of event.currentTarget.querySelectorAll('svg')) {
          if (icon.classList.contains('fa-angle-up')) {
            icon.classList.remove('fa-angle-up')
            icon.classList.add('fa-angle-down')
          } else {
            icon.classList.remove('fa-angle-down')
            icon.classList.add('fa-angle-up')
          }
        }
      })
    }
  }

  _closeSelect () {
    for (const card of this.component.querySelectorAll('.br-card')) {
      card.removeAttribute('expanded', '')
      for (const icon of this.component.querySelectorAll('.br-input button[trigger] svg')) {
        icon.classList.remove('fa-angle-up')
        icon.classList.add('fa-angle-down')
      }
    }
  }

  _setSelectMultipleBehavior () {
    for (const item of this.component.querySelectorAll('.br-list.options-list .item')) {
      item.addEventListener('click', this._selectItem.bind(this))
    }
  }

  _setSelectSimpleBehavior () {
    for (const item of this.component.querySelectorAll('.br-list.options-list .item')) {
      item.addEventListener('click', this._selectItem.bind(this))
    }
  }

  _createItem (iconClasses, option) {
    const item = document.createElement('div')
    item.classList.add('item')

    const icon = document.createElement('i')
    icon.classList.add(...iconClasses)
    const support = document.createElement('div')
    support.classList.add('support')
    support.appendChild(icon)

    const content = document.createElement('div')
    content.classList.add('content')
    content.innerText = option

    item.appendChild(support)
    item.appendChild(content)

    return item
  }
}

const selectList = []
for (const brSelect of window.document.querySelectorAll('.br-select')) {
  selectList.push(new BRSelect('br-select', brSelect))
}
export default BRSelect
