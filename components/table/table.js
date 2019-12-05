function checkBox() {
  var items =0;
  var check = document.getElementsByName('item');
  var selecionado = document.querySelector(".selecao");
  var titulo = document.querySelector(".title-bar");
  for(var i=0;i<check.length;i++){
    if (check[i].checked == true){ 
      items += 1;
    }
    if(items > 0){
      selecionado.classList.remove("is-invisible");
      selecionado.classList.add("is-visible");
      titulo.classList.remove("is-visible");
      titulo.classList.add("is-invisible");
    }
    else{
      titulo.classList.remove("is-invisible");
      titulo.classList.add("is-visible");
      selecionado.classList.remove("is-visible");
      selecionado.classList.add("is-invisible");
    }
  };
}
document.getElementById('table').addEventListener('click', checkBox);

function pesquisa(){
  
  document.querySelector(".search-bar").classList.toggle('is-invisible')
  document.querySelector(".title-bar").classList.toggle('is-invisible')
}
document.querySelectorAll('.toogle-search').forEach(function(item){
  item.addEventListener('click', pesquisa);
})
