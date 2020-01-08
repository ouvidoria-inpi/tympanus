function checkBox() {
  var items =0;
  var check = document.querySelectorAll(".br-table input[type='checkbox']");
  var selecionado = document.querySelector(".selecao");
  var titulo = document.querySelector(".title-bar");
  var busca = document.querySelector('.search-bar');
  for(var i=0;i<check.length;i++){
    if (check[i].checked == true){
      trElement = check[i].closest('tr')
      if(!trElement.classList.contains('is-selected')){
        trElement.classList.toggle('is-selected')
      }
      items += 1;
    }else{
      trElement = check[i].closest('tr')
      if(trElement.classList.contains('is-selected')){
        trElement.classList.toggle('is-selected')
      }
    }
    if(items > 0){
      selecionado.classList.remove("is-invisible");
      selecionado.classList.add("is-visible");
      busca.classList.remove("is-visible");
      busca.classList.add("is-invisible");
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

function densidadeUp(){
  var aumentar = document.querySelector("#densidade-up");
  var diminuir = document.querySelector("#densidade-down");
  var tamanhoTh = document.querySelectorAll("th");
  var altura = document.querySelectorAll("tr");
  aumentar.classList.toggle("is-active");
  diminuir.classList.remove("is-active");
  
  for(j=0; j < tamanhoTh.length; j++){
    tamanhoTh[j].style.height = "40px";
  } 
  
  for(c = 0; c < altura.length; c++){
    altura[c].style.height = "40px";
  }
}
document.getElementById('densidade-up').addEventListener("click", densidadeUp);

function densidadeDown(){
  var diminuir = document.querySelector("#densidade-down");
  var aumentar = document.querySelector("#densidade-up");
  var tamanhoTh = document.querySelectorAll("th");
  var altura = document.querySelectorAll("tr");
  diminuir.classList.toggle("is-active");  
  aumentar.classList.remove("is-active");

  for(k=0; k < tamanhoTh.length; k++){
    tamanhoTh[k].style.height = "56px";
  }
  for(i = 0; i < altura.length; i++){
    altura[i].style.height = "56px";
  }
}
document.getElementById('densidade-down').addEventListener('click', densidadeDown);

function enable(){
  var habilita = document.querySelector('.disabled');
  var expandir = document.querySelector('#expande');
  habilita.classList.toggle('enabled');
  expandir.classList.toggle('rotate');
}

document.getElementById('expande').addEventListener('click', enable);


// Funcao para redimensionar a coluna

(function () {
  var thElm;
  var startOffset;
  function createDiv(height){
    var div = document.createElement('div');
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = '5px';
    div.style.position = 'absolute';
    div.style.cursor = 'col-resize';
    div.style.userSelect = 'none';
    div.style.height = height+'px';
    div.className = 'columnSelector';
    return div;
   }
  Array.prototype.forEach.call(
    document.querySelectorAll("#redimensionar th"),
    function (th) {
      th.style.position = 'relative';

      var grip = document.createElement('div');
      grip.innerHTML = "&nbsp;";
      grip.style.top = 0;
      grip.style.right = 0;
      grip.style.bottom = 0;
      grip.style.width = '5px';
      grip.style.position = 'absolute';
      grip.style.cursor = 'col-resize';
      grip.addEventListener('mousedown', function (e) {
          thElm = th;
          startOffset = th.offsetWidth - e.pageX;
      });

      th.appendChild(grip);
    });


  document.addEventListener('mousemove', function (e) {
    if (thElm) {
      thElm.style.width = startOffset + e.pageX + 'px';
    }
  });

  document.addEventListener('mouseup', function () {
      thElm = undefined;
  });
})();