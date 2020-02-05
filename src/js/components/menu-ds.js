let collapseList = document.querySelectorAll('button[data-toggle="collapse"]');
collapseList.forEach(function(collapse) {
  collapse.addEventListener("click", function(event) {
		  this.classList.toggle("is-open")
  })
})
