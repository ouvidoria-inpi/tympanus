class BRTag {
	constructor(name, component) {
		this.name = name;
        this.component = component;
        

        this.DomList =[];
        this._setBehavior();
        this.arrayOfList =[];

    
        
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


    





    
}

let tagList = []

for (let brTag of window.document.querySelectorAll('.br-tag')) {
	tagList.push(new BRTag('br-tag', brTag))
}











export default BRTag