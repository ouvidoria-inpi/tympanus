const tabs2 = document.getElementById('item2').addEventListener("click", console.log("..."), false);
const tab = dropbox = document.querySelectorAll('.br-tabs .item');

for (let elem of tab) {
    elem.addEventListener("click", function() { foi(elem) }, false);;

}


function foi(event) {
    console.log(event);
    const a = document.querySelectorAll('.upload-input');
    const elements = event.parentElement.querySelectorAll('.br-tabs .item');

    for (let elem of elements) {
        elem.parentElement.querySelectorAll(".item")
        elem.classList.remove("is-active");
    }
    event.classList.add("is-active");
    console.log(event.classList);


}