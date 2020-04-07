class BRTagInput {
	constructor(name, component) {
		this.name = name;
        this.component = component;
        this.DomList =[];
        this._setBehavior();
        this.arrayOfList =[];//Lista de tags
        this.getAttribute();
        this.DOMCreate();
        this.DOMRender();
        this.onKeyUp();
    
        
	}

    _setBehavior() {
        for (let button of this.component.querySelectorAll("div.close button")) {
            button.addEventListener("click", () => {
                this.component.parentNode.removeChild(this.component);
            });
        }


        for (let button of this.component.querySelectorAll("div.close button")) {
          button.addEventListener("click", () => {
              this.component.parentNode.removeChild(this.component);
          });
      }

       
    }


    


    
  DOMCreate() {
    
    var input = document.createElement('input');
    input.className="input-tag a"
    this.component.appendChild(input); 
    this.DOMList = this.component.firstElementChild; 
    this.DOMInput = this.component.lastElementChild;
    
    this.onKeyUp();
  }

    
  DOMCreate() {
    var input = document.createElement('input');
    input.className="input-tag a"
    if(this.arrayOfList.length<=0)
      input.setAttribute("placeholder","Insira um texto e aperte a tecla ENTER");
    this.component.appendChild(input); 
    this.DOMList = this.component.firstElementChild; 
    this.DOMInput = this.component.lastElementChild;
    
    this.onKeyUp();
    return input;
  }

  DOMRender() {
    let self=this;
    this.component.innerHTML="";
    this.arrayOfList.forEach(function (currentValue, index) {
      var li = document.createElement('div');
      li.className="br-tag tag-input-close";
      
      let templateHeader='     <div class="content">        ';
      let templateFooter='</span>      </div>      <div class="close">        <button type="button"><svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg><!-- <i class="fas fa-times"></i> --><span class="sr-only">Fechar</span></button>      </div>    ';

      li.innerHTML = "".concat(templateHeader,"<span>",currentValue,templateFooter);
      li.querySelector('button').addEventListener('click',  () => {
        self.onDelete(index);
        return false;
      });
      
      this.component.appendChild(li);
      this.setAttribute();
      
    },this);

    this.DOMCreate().focus();
  }

  onKeyUp() {
    let self=this;
    this.DOMInput.addEventListener('keyup', function (event) {
      var text = this.value.trim(); // check if ',' or 'enter' key was press
      console.log(event.keyCode);
      if (text.includes(',') || event.keyCode == 13) {
        if (text.replace(',', '') != '') {
          self.arrayOfList.push(text.replace(',', ''));
        } // clear input
        this.value = '';
        self.DOMRender();
      }
      
      
    },this);
  }

  onDelete(id) {
    this.arrayOfList = this.arrayOfList.filter(function (currentValue, index) {
      if (index == id) {
        return false;
      }
      return currentValue;
    });
    this.DOMRender();
  }

  getAttribute() {
    let  dataAttribute ="";
    dataAttribute = this.component.getAttribute('tag-input-tags');
    if(dataAttribute != undefined){
        dataAttribute = dataAttribute.split(','); 
        this.arrayOfList = dataAttribute.map(function (currentValue) {
        return currentValue.trim();
        });
    }
  }

  setAttribute() {
    this.component.setAttribute('tag-input', this.arrayOfList.toString());
  }
}

let tagInputList = []

for (let brTag of window.document.querySelectorAll('.br-tag-input')) {
	tagInputList.push(new BRTagInput('br-tag-input', brTag))
}







export default BRTagInput