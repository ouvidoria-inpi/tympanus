function expandBreadcrumbs(){
  var expand = document.createElement('Button');
  var title = document.createTextNode('btn');
  var lista = document.querySelectorAll('li');
  expand.appendChild(title);
  expand.style.backGround='blue';
  for(i=0; i < lista.length; i++){
    if(lista[i].display.style === 'none'){
      lista.display.style = 'inline';
    }  
    else{
      lista.display.style = 'inline';
    }
  }
  expand.addEventListener('click',expandBreadcrumbs) 
}

