var container, i, j, selElmnt, select, selectList, selectListItem;
/* Look for any elements with the class "br-select": */
container = document.getElementsByClassName("br-select");

for (i = 0; i < container.length; i++) {
  selElmnt = container[i].getElementsByTagName("select")[0];
  console.log(selElmnt);
  /* For each element, create a new BUTTON that will act as the selected item: */
  select = document.createElement("BUTTON");
  select.setAttribute("class", "select-selected");
  if (selElmnt.disabled) {
    select.setAttribute("disabled", "disabled");
  }
  select.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  container[i].appendChild(select);
  /* For each element, create a new DIV that will contain the option list: */
  selectList = document.createElement("DIV");
  selectList.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new BUTTON that will act as an option item: */
    selectListItem = document.createElement("BUTTON");
    selectListItem.innerHTML = selElmnt.options[j].innerHTML;
    selectListItem.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    selectList.appendChild(selectListItem);
  }
  container[i].appendChild(selectList);
  select.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var selectList, select, i, arrNo = [];
  selectList = document.getElementsByClassName("select-items");
  select = document.getElementsByClassName("select-selected");
  for (i = 0; i < select.length; i++) {
    if (elmnt == select[i]) {
      arrNo.push(i)
    } else {
      select[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < selectList.length; i++) {
    if (arrNo.indexOf(i)) {
      selectList[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 
