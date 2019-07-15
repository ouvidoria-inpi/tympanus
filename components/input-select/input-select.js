//Check if has class
function hasClass( target, className ) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}


//Select Focus
function onFocus() {
    var inputSelect = document.getElementsByClassName("br-input-select");

    for (var i = 0; i < inputSelect.length; i++) {
        inputSelect[i].addEventListener('click', (function(i) {
            return function() {
                if(hasClass( this, "focus")){
                    this.classList.remove("focus");
                }else{
                    this.classList.add("focus");
                }
            };
        })(i), true);

        window.addEventListener('click', (function(i){ 
            return function() {  
                inputSelect[i].classList.remove("focus");
            };
        })(i), true);
    }
}
onFocus();




//Trocar <Select> <Option> por <UL> <LI>
function ChangeWrap() {
    var lists = document.getElementsByTagName("select");

    for (var i = 0; i < lists.length; i++) {
        var itenslenght = lists[i].length;
        var newUl = document.createElement("ul");
        var parentTarget = lists[i].parentNode;
        var widthDropBox = parentTarget.offsetWidth;
        newUl.style.width = widthDropBox+'px';
        parentTarget.appendChild(newUl);
        for (var j = 0; j < itenslenght; j++) {
            var newTextEl = document.createTextNode(lists[i].options.item(j).text);
            var newLi = document.createElement("li");
            newLi.appendChild(newTextEl);
            newUl.appendChild(newLi);

            parentTarget.appendChild(newUl);
        }
    }
}
ChangeWrap();
