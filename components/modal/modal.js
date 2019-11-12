scrim = document.getElementsByClassName("is-foco")[0];

function openModal(div) {
    scrim.innerHTML = div.innerHTML;
    scrim.classList.add("is-active");
}

function closeModal() {
    scrim.innerHTML = "";
    scrim.classList.remove("is-active");
}

