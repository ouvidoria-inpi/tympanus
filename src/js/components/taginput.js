class BRTagInput {
	constructor(name, component) {
		this.name = name;
        this.component = component;
        

        this.DomList =[];
        this._setBehavior();
        this.arrayOfList =[];

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

        // for (let inputText of document.querySelectorAll('input[type="text"]')) {
		// 	inputText.addEventListener("keypress", event => {
		// 		var keycode = (event.keyCode ? event.keyCode : event.which);
        //         if(keycode == '13'){
        //             alert(inputText.value);  
        //         }
        //         // impede o envio do campo
        //         event.preventDefault();
        //         event.stopPropagation();
        //     });
        // }
    }


    


    
  DOMCreate() {
    console.log("foi");
    var input = document.createElement('input');
    input.className="input-tag a"
    this.component.appendChild(input); 
    this.DOMList = this.component.firstElementChild; 
    this.DOMInput = this.component.lastElementChild;
    console.log("domcreate",this.component,"ultmo",this.component.lastElementChild);
    this.onKeyUp();
  }

    
  DOMCreate() {
    console.log("foi");
    var input = document.createElement('input');
    input.className="input-tag a"
    if(this.arrayOfList.length<=0)
      input.setAttribute("placeholder","Insira um texto e aperte a tecla ENTER");
    this.component.appendChild(input); 
    this.DOMList = this.component.firstElementChild; 
    this.DOMInput = this.component.lastElementChild;
    console.log("domcreate",this.component,"ultmo",this.component.lastElementChild);
    this.onKeyUp();
    return input;
  }

  DOMRender() {
    let self=this;
    console.log("REnder",this.arrayOfList);
    this.component.innerHTML="";
    this.arrayOfList.forEach(function (currentValue, index) {
      var li = document.createElement('div');
      li.className="br-tag is-start-close";
      
      let templateHeader='     <div class="content">        <div class="icon"><svg class="svg-inline--fa fa-car fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg><!-- <i class="fa fa-car"></i> --></div>';
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
      console.log("ddd");
      var text = this.value.trim(); // check if ',' or 'enter' key was press
      if (text.includes(',') || event.keyCode == 13) {
        // check if empty text when ',' is remove
        if (text.replace(',', '') != '') {
          // push to array and remove ','
          console.log("arraylsit",this.arrayOfList);
          self.arrayOfList.push(text.replace(',', ''));
        } // clear input
        this.value = '';
        self.DOMRender();
      }
      
    },this);
  }

  onDelete(id) {
    console.log(this.arrayOfList," index ",id)
    this.arrayOfList = this.arrayOfList.filter(function (currentValue, index) {
      if (index == id) {
        return false;
      }
      return currentValue;
    });
    this.DOMRender();
  }

  getAttribute() {
    console.log(this.component);
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

for (let brTag of window.document.querySelectorAll('.tag-input')) {
	tagInputList.push(new BRTagInput('tag-input', brTag))
}







let tagList = []

for (let brTag of window.document.querySelectorAll('.tag-input')) {
	tagList.push(new BRTagInput('tag-input', brTag))
}




export default BRTagInput