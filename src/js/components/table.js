// ! Refatorações:
// TODO: Comportamento de resize de coluna
// TODO: Efeito resize de altura da linha
// TODO: Cards internos de colunas

// ! Pendências:
// TODO: Barra superior - itens de ação e menu flutuante, tags de filtros, itens selecionados
// TODO: Filtragem de cabeçalhos

const brTables = document.querySelectorAll('.br-table')
const brTablesHeadersClass = 'headers'
const active = 'is-active'
const hover = 'is-hover'
let brTableNumber = 0

if (brTables) {
  const brTables = document.querySelectorAll('.br-table')

  for (let brTable of brTables) {
    let searchBar = brTable.querySelector('.search-bar')
    let searchTrigger = brTable.querySelector('.search-trigger')
    let searchClose = brTable.querySelector('.search-close')
    let gridLTrigger = brTable.querySelector('.grid-large-trigger')
    let gridSTrigger = brTable.querySelector('.grid-small-trigger')
    let responsive = brTable.querySelector('.responsive')
    let headers = brTable.querySelector('table thead tr')
    let rows = brTable.querySelectorAll('table tbody tr')
    let collapse = brTable.classList.contains('is-collapsible')

    brTableNumber++

    if (responsive) setSyncScroll(responsive)
    if (headers) {
      cloneHeader(brTable, headers)
      setHeaderWidth(brTable, headers)
    }
    if (searchBar) toogleSearch(searchBar, searchTrigger, searchClose)
    if (gridLTrigger) toggleGrid(brTable, gridLTrigger, gridSTrigger)
    setClickActions(brTable)
    hoverRow(rows, collapse)

    
    window.addEventListener('resize', function() {
      if (headers) setHeaderWidth(brTable, headers)
    })

    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function(){ if (headers) setHeaderWidth(brTable, headers) }, 500);
    })
  
  }
}

function hoverRow(rows, collapse) {
  for (let row of rows) {
    if ( collapse ) {
      let colapseIco = document.createElement('i')
      let colapseBtn = document.createElement('button')
      colapseIco.classList.add('fas','fa-chevron-up')
      colapseBtn.classList.add('br-button','is-circle','is-secondary','mobile','col-collapse')
      colapseBtn.type 
      colapseBtn.appendChild(colapseIco)
      row.children[0].appendChild(colapseBtn)
      colapseBtn.addEventListener('click', function() {
        row.classList.toggle('is-collapsed') 
        this.children[0].classList.toggle('fa-chevron-up')
        this.children[0].classList.toggle('fa-chevron-down')
      })
    }
    row.addEventListener('mouseenter', function() {
      row.classList.add(hover)
    })
    row.addEventListener('mouseleave', function() {
      row.classList.remove(hover)
    })
  }
}

function toogleSearch(container, trigger, close) {
  if (trigger) {
    trigger.addEventListener('click', function() {
      container.classList.add(active)
    })
  }

  if (close) {
    close.addEventListener('click', function() {
      container.classList.remove(active)
    })
  }
}

function toogleGrid(table, gridLTrigger, gridSTrigger) {
  if (gridLTrigger) {
    trigger.addEventListener('click', function() {
      table.classList.remove("is-grid-small")
    })
  }

  if (gridSTrigger) {
    close.addEventListener('click', function() {
      table.classList.add("is-grid-small")
    })
  }
}

function setSyncScroll(element) {
  element.classList.add('syncscroll')
  element.setAttribute('name', 'table-' + brTableNumber)
}

function setHeaderWidth(parent, element) {
  let cloneNode = parent.querySelector(`.${brTablesHeadersClass}`)
  if (cloneNode) {
    for (let i = 0; i < element.children.length; i++) {
      elementWidth = element.children[i].offsetWidth
      cloneElementWidth = cloneNode.children[0].children[i]
      if (cloneElementWidth)
        cloneElementWidth.style.flex = `1 0 ${elementWidth}px`
    }
  }
}

function cloneHeader(parent, element) {
  let clone = element.cloneNode(true)
  let headersTag = document.createElement('div')
  let scrollerTag = document.createElement('div')

  setSyncScroll(scrollerTag)
  scrollerTag.classList.add('scroller')

  for (let i = 0; i < element.children.length; i++) {
    let elementNode = clone.children[i].innerHTML
    let cloneElementNode = document.createElement('div')
    let elementWidth = element.children[i].offsetWidth
    
    cloneElementNode.classList.add('item')
    cloneElementNode.innerHTML = elementNode
    if (elementWidth) cloneElementNode.style.flex = `1 0 ${elementWidth}px`
  
    scrollerTag.appendChild(cloneElementNode)

    if (cloneElementNode.children[0]) {
      if (cloneElementNode.children[0].classList.contains('br-checkbox')) {
        let cloneCheckbox = cloneElementNode.children[0]
        let cloneCheckboxId = `${brTablesHeadersClass}-${parent.id}-check-all`
        cloneCheckbox.querySelector('input').id = cloneCheckboxId
        cloneCheckbox
          .querySelector('label')
          .setAttribute('for', cloneCheckboxId)
      }
    }
  }

  headersTag.classList.add(brTablesHeadersClass)
  headersTag.appendChild(scrollerTag)
  let responsive = parent.querySelector('.responsive')
  if ( responsive )responsive.insertAdjacentElement("beforebegin", headersTag)
  else parent.appendChild(headersTag)
}

function setClickActions(brTable) {
  let headerCheckbox = brTable.querySelector(
    ".headers [name='check'] [type='checkbox']"
  )
  let tableCheckboxes = brTable.querySelectorAll(
    "tbody [name='check'] [type='checkbox']"
  )
  let selectedBar = brTable.querySelector('.selected-bar')
  let info_select_all = brTable.querySelector('.selected-bar .info .select-all')

  if (tableCheckboxes) {
    for (let checkbox of tableCheckboxes) {
      checkbox.addEventListener('click', function() {
        checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox)
      })
    }
  }

  if (headerCheckbox) {
    headerCheckbox.addEventListener('click', function() {
      checkAllTable(selectedBar, tableCheckboxes, headerCheckbox)
    })
  }

  if (info_select_all) {
    info_select_all.addEventListener('click', function() {
      checkAllTable(selectedBar, tableCheckboxes, headerCheckbox)
    })
  }
}

function setRow(checkbox, check) {
  tr = checkbox.parentNode.parentNode.parentNode
  if (check) {
    tr.classList.add('is-selected')
    checkbox.parentNode.classList.add('is-inverted')
    checkbox.checked = true
  } else {
    tr.classList.remove('is-selected')
    checkbox.parentNode.classList.remove('is-inverted')
    checkbox.checked = false
  }
}

function checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox) {
  check = checkbox.checked
  setRow(checkbox, check)
  setSelectedBar(check ? 1 : -1, selectedBar, tableCheckboxes, headerCheckbox)
}

function checkAllRows(tableCheckboxes) {
  for (let checkbox of tableCheckboxes) {
    setRow(checkbox, true)
  }
}

function uncheckAllRows(tableCheckboxes) {
  for (let checkbox of tableCheckboxes) {
    setRow(checkbox, false)
  }
}

function checkAllTable(selectedBar, tableCheckboxes, headerCheckbox) {
  count = tableCheckboxes.length
  let info_count = selectedBar.querySelector('.info .count')
  let total = parseInt(info_count.innerHTML, 10)

  if (total == count) {
    uncheckAllRows(tableCheckboxes)
    count = -1 * count
  } else {
    checkAllRows(tableCheckboxes)
  }

  setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox)
}

function setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox) {
  let info_count = selectedBar.querySelector('.info .count')
  let info_text = selectedBar.querySelector('.info .text')
  let mobile_ico = selectedBar.querySelector('.info .select-all').children[0]
  let total = count < 2 ? parseInt(info_count.innerHTML, 10) + count : count

  if (total > 0) {
    selectedBar.classList.add('is-active')
    info_count.innerHTML = total
    info_text.innerHTML = total > 1 ? 'itens selecionados' : 'item selecionado'

    if (headerCheckbox) headerCheckbox.parentNode.classList.add('is-checking')
    if (mobile_ico) {
      mobile_ico.classList.add('fa-minus-square')
      mobile_ico.classList.remove('fa-check-square')
    }
    if (total == tableCheckboxes.length) {
      if (headerCheckbox) {
        headerCheckbox.checked = true
        headerCheckbox.parentNode.classList.remove('is-checking')
      }
      if (mobile_ico) {
        mobile_ico.classList.remove('fa-minus-square')
        mobile_ico.classList.add('fa-check-square')
      }
    }
  } else {
    info_count.innerHTML = 0
    if (headerCheckbox) {
      headerCheckbox.checked = false
      headerCheckbox.parentNode.classList.remove('is-checking')
    }
    if (mobile_ico) {
      mobile_ico.classList.remove('fa-check-square')
      mobile_ico.classList.add('fa-minus-square')
    }
    selectedBar.classList.remove('is-active')
  }
}
