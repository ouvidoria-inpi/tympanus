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
      grip.style.overflow = 'hidden';
      grip.style.textOverflow = 'ellipsis';
      grip.style.whiteSpace = 'nowrap';
      grip.addEventListener('mousedown', function (e) {
          thElm = th;
          startOffset = th.offsetWidth - e.pageX;
      });
      th.appendChild(grip);
    });


  document.getElementById('redimensionar').addEventListener('mousemove', function (e) {
    if (thElm) {
      thElm.style.width = startOffset + e.pageX + 'px';
    }
  });

  document.getElementById('redimensionar').addEventListener('mouseup', function () {
      thElm = undefined;
  });
})();



// function resizableGrid(e) {
//   var t = e.getElementsByTagName("tr")[0],
//       n = t?t.children : void 0;
//   if (n) {
//       e.style.overflow = "hidden";
//       for (var i = e.offsetHeight, o = 0; o < n.length; o++) {
//           var r = s(i);
//           n[o].appendChild(r), n[o].style.position = "relative", d(r)
//       }
//   }

//   function d(e) {
//       var t, n, i, o, r;
//       e.addEventListener("mousedown", function(e) {
//           n = e.target.parentElement, i = n.nextElementSibling, t = e.pageX;
//           var d = function(e) {
//               if ("border-box" == l(e, "box-sizing")) return 0;
//               var t = l(e, "padding-left"),
//                   n = l(e, "padding-right");
//               return parseInt(t) + parseInt(n)
//           }(n);
//           o = n.offsetWidth - d, i && (r = i.offsetWidth - d)
//       }), e.addEventListener("mouseover", function(e) {
//           e.target.style.borderRight = "2px solid #0000ff"
//       }), e.addEventListener("mouseout", function(e) {
//           e.target.style.borderRight = ""
//       }), document.addEventListener("mousemove", function(e) {
//           if (n) {
//               var d = e.pageX - t;
//               i && (i.style.width = r - d + "px"), n.style.width = o + d + "px"
//           }
//       }), document.addEventListener("mouseup", function(e) {
//           n = void 0, i = void 0, t = void 0, r = void 0, o = void 0
//       })
//   }

//   function s(e) {
//       var t = document.createElement("div");
//       return t.style.top = 0, t.style.right = 0, t.style.width = "5px", t.style.position = "absolute", t.style.cursor = "col-resize",  t.style.height = e + "px", t
//   }

//   function l(e, t) {
//       return window.getComputedStyle(e, null).getPropertyValue(t)
//   }
// }