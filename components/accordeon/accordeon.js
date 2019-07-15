function toggleAccordeonField(element, className) {

  var fields = [];

  for(var accordeon = element; !accordeon.classList.contains(className); accordeon = accordeon.parentNode); // Empty for

  fields = accordeon.getElementsByClassName("field");

  for(var i = 0; i < fields.length; i++) {
    
    field = fields[i].getElementsByTagName("button")[0];
    icon = field.getElementsByClassName("icon")[0].children[0];
    
    if(field == element) {
      if(icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus")
        fields[i].classList.remove("is-active");
      }
      else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus")
        fields[i].classList.add("is-active");
      }
    }
    else {
      if(accordeon.hasAttribute("single")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus")
        fields[i].classList.remove("is-active");
      }
    }
  }
}