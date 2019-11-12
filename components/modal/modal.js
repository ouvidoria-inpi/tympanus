scrim = document.getElementsByClassName("is-foco")[0];
conteudo = "";
container = "";

function openModal(div) {
    container = div;
    conteudo = div.innerHTML;
    scrim.innerHTML = conteudo;
    div.innerHTML = "";
    scrim.style.display = "block";
}

function closeModal() {
    container.innerHTML = conteudo;
    scrim.innerHTML = "";
    scrim.style.display = "none";
}

