document.getElementById('noclick').style.pointerEvents = 'none';
scrim = document.getElementsByClassName("is-foco")[0];

function on() {
    scrim.classList.add("is-active");
  }
  
function off() {
    scrim.classList.remove("is-active");
}
