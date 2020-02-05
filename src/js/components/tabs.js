const tab = document.querySelectorAll('.br-tabs .item');
if(tab){
				for (let elem of tab) {
								elem.addEventListener("click", function() { itemActiveSelected(elem) }, false);;
				}
}




function itemActiveSelected(event) {
    
    const a = document.querySelectorAll('.upload-input');
    const elements = event.parentElement.querySelectorAll('.br-tabs .item');
				for (let elem of elements) {
        elem.parentElement.querySelectorAll(".item")
        elem.classList.remove("is-active");
    }
    event.classList.add("is-active");
    


}
