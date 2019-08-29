dismissAlert();

function dismissAlert() {
  let alerts = document.getElementsByClassName('br-alert');
  for (let alert of alerts) {
    let dismissAlerts = alert.querySelectorAll('[data-dismiss="alert"]');
    for (let dismissAlert of dismissAlerts) {
      dismissAlert.addEventListener('click', () => alert.remove());
    }  
  }
}
