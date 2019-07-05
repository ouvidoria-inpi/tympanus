var parentEl;
var parentE2;
var nextEl;

var checkboxParent;
var checkboxParent2;

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function ShowHideTable(el) {
    parentEl = el.parentNode;
    parentE2 = parentEl.parentNode;
    nextEl = parentE2.nextElementSibling;
    if(nextEl != null){
        if (hasClass(nextEl, 'show-table') && hasClass(nextEl, 'row-content')) {
            nextEl.classList.remove('show-table');
            nextEl.className = "row-content hide-table";
            el.classList.remove('fa-minus');
            el.className = "fas fa-plus";

        }else if(hasClass(nextEl, 'hide-table') && hasClass(nextEl, 'row-content')) {
            nextEl.classList.remove('hide-table');
            nextEl.className = "row-content show-table";
            el.classList.remove('fa-plus');
            el.className = "fas fa-minus";
        }
    }
}


function setActive(el){
    checkbox = el;
    checkboxParent = checkbox.parentNode;
    checkboxParent2 = checkboxParent.parentNode; 
    if(el.checked){
        checkboxParent2.className = "active";
        checkboxParent.className = "text-center active";
    }else{
        checkboxParent2.classList.remove('active');
        checkboxParent.classList.remove('active');
    }
}

// Resize Window
/*
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", function(event) {
    console.log('oi');
  });
*/
