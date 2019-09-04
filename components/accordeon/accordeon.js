function toggleAccordeonField(element, className) {
  var fields = []

  for (
    var accordeon = element;
    !accordeon.classList.contains(className);
    accordeon = accordeon.parentNode
  );

  fields = accordeon.getElementsByClassName('field')

  for (var i = 0; i < fields.length; i++) {
    field = fields[i].getElementsByTagName('button')[0]
    icon = field.getElementsByClassName('icon')[0].children[0]

    if (field == element) {
      if (icon.classList.contains('fa-minus')) {
        icon.classList.remove('fa-minus')
        icon.classList.add('fa-plus')
        fields[i].classList.remove('is-active')
      } else {
        icon.classList.remove('fa-plus')
        icon.classList.add('fa-minus')
        fields[i].classList.add('is-active')
      }
    } else {
      if (accordeon.hasAttribute('single')) {
        icon.classList.remove('fa-minus')
        icon.classList.add('fa-plus')
        fields[i].classList.remove('is-active')
      }
    }
  }
}

let accordeons = getAccordeons();
let collapses = getCollapses(accordeons);

for (let collapse of collapses) {
  collapse.addEventListener("click", function(event) {
    toggleAccordeonField(collapse, 'br-accordeon')
  });
}

function getAccordeons() {
  let accordeons = document.getElementsByClassName('br-accordeon');
  return accordeons;
}

function getCollapses(accordeons) {
  for (let accordeon of accordeons) {
    let collapses = accordeon.querySelectorAll('[data-toggle="collapse"]');
    return collapses;
  }
}

// let collapseList = document.querySelectorAll('button[data-toggle="collapse"]');
// collapseList.forEach(function(collapse) {
//   collapse.addEventListener("click", function(event) {
//     event.target.classList.toggle("is-open")
//   })
// })