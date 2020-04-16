import reset from './_syncscroll';

class BRTable {

  constructor(name, component, sequence) {
    this.name = name;
    this.component = component;
    this._sequence = sequence;

    this._setBehavior();
  }

  _setBehavior() {
    this._cloneHeader();
    this._setHeaderWidth();
    this._toogleSearch();
    this._toogleGrid();
    this._setClickActions();
  }

  _cloneHeader() {
    for (let responsive of this.component.querySelectorAll(".responsive")) {
      this._setSyncScroll(responsive);
    }

    let scrollerTag = document.createElement("div");
    this._setSyncScroll(scrollerTag);
    scrollerTag.classList.add("scroller")

    for (let header of this.component.querySelectorAll("table thead tr th")) {
      let clonedHeader = document.createElement("div");
      clonedHeader.classList.add("item");
      clonedHeader.innerHTML = header.innerHTML;
      if (header.offsetWidth) {
        clonedHeader.style.flex = `1 0 ${header.offsetWidth}px`;
      }

      scrollerTag.appendChild(clonedHeader);

      if (clonedHeader.firstElementChild) {
        if (clonedHeader.firstElementChild.classList.contains("br-checkbox")) {
          let clonedCheckboxId = "headers-" + this.component.id + "-check-all";
          for (let checkboxInput of clonedHeader.firstElementChild.querySelectorAll("input")) {
            checkboxInput.id = clonedCheckboxId
          }
          for (let checkboxLabel of clonedHeader.firstElementChild.querySelectorAll("label")) {
            checkboxLabel.setAttribute("for", clonedCheckboxId)
          }
        }
      }
    }

    let headersTag = document.createElement("div");
    headersTag.classList.add("headers");
    headersTag.appendChild(scrollerTag);
    let isResponsive = false;
    for (let child of this.component.querySelectorAll(".br-table > div")) {
      if (child.classList.contains("responsive")) {
        child.insertAdjacentElement("beforebegin", headersTag);
        isResponsive = true;
      }
    }
    if (!isResponsive) {
      this.component.appendChild(headersTag);
    }
  }

  _setSyncScroll(element) {
    element.classList.add('syncscroll')
    element.setAttribute('name', 'table-' + this._sequence)
  }

  _setHeaderWidth() {
    for (let clonedHeader of this.component.querySelectorAll(".headers > div")) {
      for (let [index, header] of this.component.querySelectorAll("table thead tr th").entries()) {
        clonedHeader.children[index].style.flex = `1 0 ${header.offsetWidth}px`;
      }
    }
  }

  _toogleSearch() {
    for (let searchBar of this.component.querySelectorAll(".search-bar")) {
      for (let searchTrigger of this.component.querySelectorAll(".search-trigger")) {
        searchTrigger.addEventListener("click", () => {
          searchBar.classList.add("is-active");
        });
      }
      for (let searchClose of searchBar.querySelectorAll(".search-close")) {
        searchClose.addEventListener("click", () => {
          searchBar.classList.remove("is-active");
        });
      }
    }
  }

  _toogleGrid() {
    for (let gridLTrigger of this.component.querySelectorAll(".grid-large-trigger")) {
      gridLTrigger.addEventListener("click", () => {
        this.component.classList.remove("is-grid-small");
      });
    }
    for (let gridSTrigger of this.component.querySelectorAll(".grid-small-trigger")) {
      gridSTrigger.addEventListener("click", () => {
        this.component.classList.add("is-grid-small");
      });
    }
  }

  _setClickActions() {
    let headerCheckbox = this.component.querySelector(
      ".headers [name='check'] [type='checkbox']"
    );
    let tableCheckboxes = this.component.querySelectorAll(
      "tbody [name='check'] [type='checkbox']"
    );
    let selectedBar = this.component.querySelector('.selected-bar');
    let info_select_all = this.component.querySelector('.selected-bar .info .select-all');

    if (tableCheckboxes) {
      for (let checkbox of tableCheckboxes) {
        checkbox.addEventListener('click', () => {
          this._checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox);
        });
      }
    }

    if (headerCheckbox) {
      headerCheckbox.addEventListener('click', () => {
        this._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox);
      });
    }

    if (info_select_all) {
      info_select_all.addEventListener('click', () => {
        this._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox);
      });
    }
  }

  _setRow(checkbox, check) {
    let tr = checkbox.parentNode.parentNode.parentNode;
    if (check) {
      tr.classList.add('is-selected');
      checkbox.parentNode.classList.add('is-inverted');
      checkbox.checked = true;
    } else {
      tr.classList.remove('is-selected');
      checkbox.parentNode.classList.remove('is-inverted');
      checkbox.checked = false;
    }
  }

  _checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox) {
    let check = checkbox.checked;
    this._setRow(checkbox, check);
    this._setSelectedBar(check ? 1 : -1, selectedBar, tableCheckboxes, headerCheckbox);
  }

  _checkAllRows(tableCheckboxes) {
    for (let checkbox of tableCheckboxes) {
      this._setRow(checkbox, true);
    }
  }

  _uncheckAllRows(tableCheckboxes) {
    for (let checkbox of tableCheckboxes) {
      this._setRow(checkbox, false);
    }
  }

  _checkAllTable(selectedBar, tableCheckboxes, headerCheckbox) {
    let count = tableCheckboxes.length;
    let info_count = selectedBar.querySelector('.info .count');
    let total = parseInt(info_count.innerHTML, 10);

    if (total == count) {
      this._uncheckAllRows(tableCheckboxes);
      count = -1 * count;
    } else {
      this._checkAllRows(tableCheckboxes);
    }

    this._setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox);
  }

  _setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox) {
    let info_count = selectedBar.querySelector('.info .count');
    let info_text = selectedBar.querySelector('.info .text');
    let mobile_ico = selectedBar.querySelector('.info .select-all').children[0];
    let total = count < 2 ? parseInt(info_count.innerHTML, 10) + count : count;

    if (total > 0) {
      selectedBar.classList.add('is-active');
      info_count.innerHTML = total;
      info_text.innerHTML = total > 1 ? 'itens selecionados' : 'item selecionado';

      if (headerCheckbox) headerCheckbox.parentNode.classList.add('is-checking');
      if (mobile_ico) {
        mobile_ico.classList.add('fa-minus-square');
        mobile_ico.classList.remove('fa-check-square');
      }
      if (total == tableCheckboxes.length) {
        if (headerCheckbox) {
          headerCheckbox.checked = true;
          headerCheckbox.parentNode.classList.remove('is-checking');
        }
        if (mobile_ico) {
          mobile_ico.classList.remove('fa-minus-square');
          mobile_ico.classList.add('fa-check-square');
        }
      }
    } else {
      info_count.innerHTML = 0;
      if (headerCheckbox) {
        headerCheckbox.checked = false;
        headerCheckbox.parentNode.classList.remove('is-checking');
      }
      if (mobile_ico) {
        mobile_ico.classList.remove('fa-check-square');
        mobile_ico.classList.add('fa-minus-square');
      }
      selectedBar.classList.remove('is-active');
    }
  }
}

let tableList = [];
for (let [index, brTable] of window.document.querySelectorAll(".br-table").entries()) {
  tableList.push(new BRTable("br-table", brTable, index));
}


export default BRTable
