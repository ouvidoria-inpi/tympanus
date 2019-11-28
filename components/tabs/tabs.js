const tab = (dropbox = document.querySelectorAll('.br-tabs .item'))

for (let elem of tab) {
  elem.addEventListener(
    'click',
    function() {
      foi(elem)
    },
    false
  )
}

function foi(event) {
  const a = document.querySelectorAll('.upload-input')
  const elements = event.parentElement.querySelectorAll('.br-tabs .item')

  for (let elem of elements) {
    elem.parentElement.querySelectorAll('.item')
    elem.classList.remove('is-active')
  }
  event.classList.add('is-active')
}
