const brAlert = document.querySelectorAll('.br-alert');

function dismissAlert(element) {
    element.remove();
}

for (i = 0; i < brAlert.length; i++) {
    let alert = brAlert[i];
    let closeButton = brAlert[i].querySelector('.close button');
    closeButton.addEventListener('click', ()=> dismissAlert(alert));
}
