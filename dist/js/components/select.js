class BRSelect {
  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setUpBrSelect();
  }

  _setUpBrSelect() {
    for (let select of this.component.querySelectorAll("select")) {
      this.component.appendChild(this._buildSelectionField(select));
      this.component.appendChild(this._buildOptionsList(select));
    }
    this._setBehavior();
  }

  _buildSelectionField(select) {
    let selectionField = window.document.createElement("button");
    selectionField.setAttribute("class", "select-selected unselected");
    if (select.disabled) {
      selectionField.setAttribute("disabled", "disabled");
    }
    selectionField.appendChild(
      this._buildOptionItem(select.options[select.selectedIndex].innerHTML)
    );
    selectionField.appendChild(this._buildIcon());
    return selectionField;
  }

  _buildOptionItem(text) {
    let optionItem = window.document.createElement("span");
    optionItem.innerHTML = text;
    return optionItem;
  }

  _buildIcon() {
    let icon = window.document.createElement("i");
    icon.setAttribute("class", "fas fa-chevron-down");
    return icon;
  }

  _buildOptionsList(select) {
    let optionsList = window.document.createElement("div");
    optionsList.setAttribute("class", "select-items select-hide");
    for (let option of select.options) {
      let optionField = window.document.createElement("button");
      optionField.appendChild(this._buildOptionItem(option.innerHTML));
      optionsList.appendChild(optionField);
    }
    return optionsList;
  }

  _setBehavior() {
    for (let itemSelected of this.component.querySelectorAll(
      ".select-selected"
    )) {
      itemSelected.addEventListener("click", event => {
        event.stopPropagation();
        itemSelected.nextElementSibling.classList.toggle("select-hide");
        this._closeSelects(itemSelected);
        window.document.addEventListener("click", () => {
          this._closeSelects();
        });
      });
    }
    for (let item of this.component.querySelectorAll(".select-items button")) {
      item.addEventListener("click", event => {
        for (let select of this.component.querySelectorAll("select")) {
          for (let [index, option] of Array.from(select.options).entries()) {
            if (option.innerHTML === item.firstChild.innerHTML) {
              select.selectedIndex = index;
              item.parentNode.previousSibling.firstChild.innerHTML =
                item.firstChild.innerHTML;
              item.parentNode.previousSibling.setAttribute(
                "class",
                "select-selected"
              );
              item.parentNode.classList.add("select-hide");
              for (let optionItem of item.parentNode.querySelectorAll(
                "button"
              )) {
                if (optionItem === item) {
                  optionItem.setAttribute("class", "same-as-selected");
                } else {
                  optionItem.removeAttribute("class");
                }
              }
            }
          }
        }
      });
    }
  }

  _closeSelects(element) {
    for (let brSelect of window.document.querySelectorAll(".br-select")) {
      for (let itemSelected of brSelect.querySelectorAll(".select-selected")) {
        if (itemSelected !== element) {
          for (let optionsList of brSelect.querySelectorAll(".select-items")) {
            optionsList.classList.add("select-hide");
            window.document.removeEventListener("click", this._closeSelects);
          }
        }
      }
    }
  }
}

let selectList = [];

window.onload = (function() {
  for (let brSelect of window.document.querySelectorAll(".br-select")) {
    selectList.push(new BRSelect("br-select", brSelect));
  }
})();
