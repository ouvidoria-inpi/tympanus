class BRSelect {
  constructor(name, component) {
    this.name = name
    this.component = component
    this.options = this._setOptions()
    this.selected = []
    this._setBehavior()
  }

  _setOptions() {
    const options = []
    for (const item of this.component.querySelectorAll('.br-list .item .content')) {
      options.push(item.innerText)
    }
    return options
  }

  _setBehavior() {
    this._setExpandBehavior()
    if (this.component.hasAttribute('multiple')) {
      this._setSelectMultipleBehavior()
    } else {
      this._setSelectSimpleBehavior()
    }
  }

  _setExpandBehavior() {
    for (const buttonTrigger of this.component.querySelectorAll('.br-input button[trigger]')) {
      buttonTrigger.addEventListener('click', (event) => {
        for (const brCard of this.component.querySelectorAll('.br-card')) {
          if (brCard.hasAttribute('expanded')) {
            brCard.removeAttribute('expanded')
            for (const icon of event.currentTarget.querySelectorAll('svg')) {
              icon.classList.remove('fa-angle-up')
              icon.classList.add('fa-angle-down')
            }
          } else {
            brCard.setAttribute('expanded', '')
            for (const icon of event.currentTarget.querySelectorAll('svg')) {
              icon.classList.remove('fa-angle-down')
              icon.classList.add('fa-angle-up')
            }
          }
        }
      })
    }
  }

  _setSelectMultipleBehavior() {
    for (const item of this.component.querySelectorAll('.br-list .item')) {
      item.addEventListener('click', (event) => {
        for (const selectedList of this.component.querySelectorAll(
          '.br-list.selected-options-list'
        )) {
          if (event.currentTarget.parentNode.classList.contains('options-list')) {
            selectedList.appendChild(event.currentTarget)
          }
          if (event.currentTarget.parentNode.classList.contains('selected-options-list')) {
          }
        }
        for (const supportIcon of item.querySelectorAll('.support svg')) {
          supportIcon.classList.remove('fa-plus-circle')
          supportIcon.classList.add('fa-trash')
        }
      })
    }
  }

  _setSelectSimpleBehavior() {
    for (const item of this.component.querySelectorAll('.br-list .item')) {
      item.addEventListener('click', (event) => {
        item.setAttribute('selected', '')
        for (const option of this.component.querySelectorAll('.br-list .item')) {
          if (option !== event.currentTarget) {
            option.removeAttribute('selected')
          }
        }
        for (const option of item.querySelectorAll('.content')) {
          this.selected[0] = option.innerText
          for (const input of this.component.querySelectorAll('input')) {
            input.value = option.innerText
          }
        }
        for (const brCard of this.component.querySelectorAll('.br-card')) {
          brCard.removeAttribute('expanded')
          for (const icon of this.component.querySelectorAll('button.icon svg')) {
            icon.classList.remove('fa-angle-up')
            icon.classList.add('fa-angle-down')
          }
        }
      })
    }
  }
}

const selectList = []
for (const brSelect of window.document.querySelectorAll('.br-select')) {
  selectList.push(new BRSelect('br-select', brSelect))
}
export default BRSelect
