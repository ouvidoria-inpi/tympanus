let brSelects = document.getElementsByClassName('br-select');
for (let brSelect of brSelects) {
  let defaultSelects = brSelect.getElementsByTagName('select');
  for (let defaultSelect of defaultSelects) {
    let select = document.createElement('button');
    select.setAttribute('class', 'select-selected unselected');
    if (defaultSelect.disabled) {
      select.setAttribute('disabled', 'disabled')
    }
    let optionText = document.createElement('span');
    optionText.innerHTML = defaultSelect.options[defaultSelect.selectedIndex].innerHTML;
    select.appendChild(optionText);
    let icone = document.createElement('i');
    icone.setAttribute('class', 'fas fa-chevron-down');
    select.appendChild(icone);
    brSelect.appendChild(select);
    let selectOptions = document.createElement('div');
    selectOptions.setAttribute('class', 'select-items select-hide');
    for (let option of defaultSelect.options) {
      let selectOption = document.createElement('button');
      let optionText = document.createElement('span');
      optionText.innerHTML = option.innerHTML;
      selectOption.appendChild(optionText);
      selectOption.addEventListener('click', function(event) {
        let s = this.parentNode.parentNode.getElementsByTagName('select')[0];
        let h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.firstChild.innerHTML) {
            s.selectedIndex = i
            h.innerHTML = this.innerHTML
            h.setAttribute('class', 'select-selected')
            let icone = document.createElement('i');
            icone.setAttribute('class', 'fas fa-chevron-down');
            h.appendChild(icone);
            y = this.parentNode.getElementsByClassName('same-as-selected')
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute('class')
            }
            this.setAttribute('class', 'same-as-selected')
            break
          }
        }
      });
      selectOptions.appendChild(selectOption);
    }
    brSelect.appendChild(selectOptions);
    select.addEventListener('click', function(event) {
      event.stopPropagation();
      closeAllSelect(this)
      this.nextSibling.classList.toggle('select-hide');
    });
  }
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var selectList,
    select,
    i,
    arrNo = []
  selectList = document.getElementsByClassName('select-items')
  select = document.getElementsByClassName('select-selected')
  for (i = 0; i < select.length; i++) {
    if (elmnt == select[i]) {
      arrNo.push(i)
    }
  }
  for (i = 0; i < selectList.length; i++) {
    if (arrNo.indexOf(i)) {
      selectList[i].classList.add('select-hide')
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect)