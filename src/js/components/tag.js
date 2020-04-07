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
    }
}

class BRTagChoice {
	constructor(name, component) {
		this.name = name;
        this.component = component;
        this.DomList =[];
        this._setBehavior();
        this.arrayOfList =[];
        
	}

    _setBehavior() {
        
        
        for (let button of this.component.querySelectorAll(".br-tag")) {
            button.addEventListener("click", (event) => {
                this._switchTag(event.currentTarget);
            });
        }
    }

    _switchTag(currentTag) {
        for (let tag of this.component.querySelectorAll('.br-tag')) {
          if (tag === currentTag) {
            tag.classList.add("active");
          } else {
            tag.classList.remove("active");
          }
        }
      }


}

class BRTagFilter {
	constructor(name, component) {
		this.name = name;
        this.component = component;
        this.DomList =[];
        this._setBehavior();
        this.arrayOfList =[];
        
	}

    _setBehavior() {
        
        
        for (let button of this.component.querySelectorAll(".br-tag")) {
            
            button.addEventListener("click", (event) => {
                this._switchTag(event.currentTarget);
            });
        }
    }

    _switchTag(currentTag) {
        currentTag.classList.toggle("active");
    }


}


let tagList = []

for (let brTag of window.document.querySelectorAll('.br-tag')) {
	tagList.push(new BRTag('br-tag', brTag))
}



let tagListChoice = []

for (let brTagChoice of window.document.querySelectorAll('.br-tag-list')) {
    
	tagListChoice.push(new BRTagChoice('br-tag-list', brTagChoice))
}



let tagListFilter = []

for (let brTagFilter of window.document.querySelectorAll('.br-tag-filter')) {
    tagListFilter.push(new BRTagFilter('br-tag-list', brTagFilter))
}












export default BRTag