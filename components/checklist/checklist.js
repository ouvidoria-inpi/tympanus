function toggleActiveField(element, className) {
  var fields = []

  while (!element.classList.contains(className)) {
    element = element.parentNode
  }

  fields = element.getElementsByClassName('field')

  for (var i = 0; i < fields.length; i++) {
    fields[i].querySelectorAll("input[type='radio']").forEach(function(radio) {
      if (radio.checked) {
        fields[i].classList.add('is-active')
      } else {
        fields[i].classList.remove('is-active')
      }
    })

    fields[i]
      .querySelectorAll("input[type='checkbox']")
      .forEach(function(checkbox) {
        if (checkbox.checked) {
          fields[i].classList.add('is-active')
        } else {
          fields[i].classList.remove('is-active')
        }
      })
  }
}
