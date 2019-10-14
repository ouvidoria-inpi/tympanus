class BRSelect {
  constructor(name) {
    this.name = name
    this.brSelects = this.bringAllBrSelects()
    this.replaceDefaultSelect()
  }

  bringAllBrSelects() {
    return window.document.getElementsByClassName(this.name)
  }

  replaceDefaultSelect() {
    for (let brSelect of this.brSelects) {
      for (let defaultSelect of brSelect.getElementsByTagName('select')) {
        this.buildCustomSelect(brSelect, defaultSelect)
      }
    }
  }

  buildCustomSelect(brSelect, defaultSelect) {
    let selectionField = this.createSelectionField(defaultSelect)
    let optionsList = this.createOptionsList(defaultSelect)
    brSelect.appendChild(selectionField)
    brSelect.appendChild(optionsList)
  }

  createSelectionField(defaultSelect) {
    let selectionField = window.document.createElement('button')
    selectionField.setAttribute('class', 'select-selected unselected')
    if (defaultSelect.disabled) {
      selectionField.setAttribute('disabled', 'disabled')
    }
    let optionText = window.document.createElement('span')
    optionText.innerHTML =
      defaultSelect.options[defaultSelect.selectedIndex].innerHTML
    selectionField.appendChild(optionText)
    let icon = window.document.createElement('i')
    icon.setAttribute('class', 'fas fa-chevron-down')
    selectionField.appendChild(icon)
    let _this = this
    selectionField.addEventListener('click', function(event) {
      event.stopPropagation()
      this.nextElementSibling.classList.toggle('select-hide')
      _this.closeOthersSelects(this)
    })
    window.document.addEventListener('click', function() {
      _this.closeOthersSelects()
    })
    return selectionField
  }

  createOptionsList(defaultSelect) {
    let optionsList = window.document.createElement('div')
    optionsList.setAttribute('class', 'select-items select-hide')
    for (let option of defaultSelect.options) {
      let optionItem = window.document.createElement('button')
      let optionText = window.document.createElement('span')
      optionText.innerHTML = option.innerHTML
      optionItem.appendChild(optionText)
      optionItem.addEventListener('click', function() {
        for (let i = 0; i < defaultSelect.length; i++) {
          if (
            defaultSelect.options[i].innerHTML === this.firstChild.innerHTML
          ) {
            defaultSelect.selectedIndex = i
            this.parentNode.previousSibling.firstChild.innerHTML = this.firstChild.innerHTML
            this.parentNode.previousSibling.setAttribute(
              'class',
              'select-selected'
            )
            this.parentNode.classList.add('select-hide')
            for (let item of this.parentNode.getElementsByClassName(
              'same-as-selected'
            )) {
              item.removeAttribute('class')
            }
            this.setAttribute('class', 'same-as-selected')
          }
        }
      })
      optionsList.appendChild(optionItem)
    }
    return optionsList
  }

  closeOthersSelects(element) {
    for (let brSelect of this.brSelects) {
      for (let selectionField of brSelect.getElementsByClassName(
        'select-selected'
      )) {
        if (element !== selectionField) {
          for (let listOptions of brSelect.getElementsByClassName(
            'select-items'
          )) {
            listOptions.classList.add('select-hide')
          }
        }
      }
    }
    let _this = this
    window.document.removeEventListener('click', _this.closeOthersSelects)
  }
}

window.onload = new BRSelect('br-select')
