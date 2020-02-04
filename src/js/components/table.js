// ! Refatorações:
// TODO: Comportamento de resize de coluna
// TODO: Efeito resize de altura da linha
// TODO: Cards internos de colunas

// ! Pendências:
// TODO: Barra superior - itens de ação e menu flutuante, tags de filtros, itens selecionados
// TODO: Filtragem de cabeçalhos

const brTables = document.querySelectorAll(".br-table");
const brTablesHeadersClass = "headers";
let active = "is-active";
let brTableNumber = 0;

function hoverRow(elements) {
  for (let element of elements) {
    if (element.children[0].children[0]) {
    }
  }
}

function toogleSearch(container, trigger, close) {
  if (trigger) {
    trigger.addEventListener("click", function() {
      container.classList.add(active);
    });
  }

  if (close) {
    close.addEventListener("click", function() {
      container.classList.remove(active);
    });
  }
}

function setSyncScroll(element) {
  element.classList.add("syncscroll");
  element.setAttribute("name", "table-" + brTableNumber);
}

function setHeaderWidth(parent, element) {
  let cloneNode = parent.querySelector(`.${brTablesHeadersClass}`);
  for (let i = 0; i < element.children.length; i++) {
    elementWidth = element.children[i].offsetWidth;
    cloneElementWidth = cloneNode.children[0].children[i];
    cloneElementWidth.style.flex = `1 0 ${elementWidth}px`;
  }
}

function cloneHeader(parent, element) {
  let clone = element.cloneNode(true);
  let headersTag = document.createElement("div");
  let scrollerTag = document.createElement("div");

  setSyncScroll(scrollerTag);
  scrollerTag.classList.add("scroller");

  for (let i = 0; i < element.children.length; i++) {
    let elementNode = clone.children[i].innerHTML;
    let cloneElementNode = document.createElement("div");

    cloneElementNode.classList.add("item");
    cloneElementNode.innerHTML = elementNode;

    scrollerTag.appendChild(cloneElementNode);

    if (cloneElementNode.children[0]) {
      if (cloneElementNode.children[0].classList.contains("br-checkbox")) {
        let cloneCheckbox = cloneElementNode.children[0];
        let cloneCheckboxId = `${brTablesHeadersClass}-${parent.id}-check-all`;
        cloneCheckbox.querySelector("input").id = cloneCheckboxId;
        cloneCheckbox
          .querySelector("label")
          .setAttribute("for", cloneCheckboxId);
      }
    }
  }

  headersTag.classList.add(brTablesHeadersClass);
  headersTag.appendChild(scrollerTag);

  parent.appendChild(headersTag);
}

function checkAll(element) {
  let headerCheckbox = element.querySelector(
    ".headers [name='check'] [type='checkbox']"
  );
  let tableCheckboxes = element.querySelectorAll(
    "table [name='check'] [type='checkbox']"
  );

  if (headerCheckbox) {
    headerCheckbox.addEventListener("click", function() {
      if (headerCheckbox.checked) {
        for (let checkbox of tableCheckboxes) {
          checkbox.checked = true;
        }
      } else {
        for (let checkbox of tableCheckboxes) {
          checkbox.checked = false;
        }
      }
    });
  }
}

for (let brTable of brTables) {
  let searchBar = brTable.querySelector(".search-bar");
  let searchTrigger = brTable.querySelector(".search-trigger");
  let searchClose = brTable.querySelector(".search-close");
  let responsive = brTable.querySelector(".responsive");
  let headers = brTable.querySelector("table thead tr");
  let rows = brTable.querySelectorAll("table tbody tr");

  brTableNumber++;

  setSyncScroll(responsive);
  cloneHeader(brTable, headers);
  setHeaderWidth(brTable, headers);
  toogleSearch(searchBar, searchTrigger, searchClose);
  checkAll(brTable);
  hoverRow(rows);

  window.addEventListener("resize", function() {
    setHeaderWidth(brTable, headers);
  });
}
