let scrim = document.getElementsByClassName("is-foco")[0];

function openModal(div) {
    scrim.innerHTML = div.innerHTML;
    scrim.classList.add("is-active");
}

function openModalId(id) {
    scrim = document.getElementById(id);
    scrim.classList.add("is-active");
}

function closeModal() {
    scrim.classList.remove("is-active");
}

