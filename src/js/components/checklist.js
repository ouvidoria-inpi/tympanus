class BRChecklist {
	constructor(name, component) {
		this.name = name;
		this.component = component;
		console.log("foi3");
		this._setBehavior();
	}

	_setBehavior() {
		for (let inputRadio of this.component.querySelectorAll('input[type="radio"]')) {
			if (inputRadio.checked) {
				this._switchSole(inputRadio);
			}
			inputRadio.addEventListener("click", event => {
				this._switchSole(event.currentTarget);
			});
		}
		for (let inputCheckbox of this.component.querySelectorAll('input[type="checkbox"]')) {
			if (inputCheckbox.checked) {
				this._switchShared(inputCheckbox);
			}
			inputCheckbox.addEventListener("click", event => {
				this._switchShared(event.currentTarget);
			});
		}
	}

	_switchSole(currentCheckedElement) {
		for (let field of this.component.querySelectorAll(".item")) {
			if (field === this._getParentElementByClass(currentCheckedElement, "item")) {
				field.classList.add("is-active");
			} else {
				field.classList.remove("is-active");
			}
		}
	}

	_switchShared(currentCheckedElement) {
		for (let field of this.component.querySelectorAll(".item")) {
			if (field === this._getParentElementByClass(currentCheckedElement, "item")) {
				field.classList.toggle("is-active");
			}
		}
	}

	_getParentElementByClass(element, parentClass) {
		while (!element.classList.contains(parentClass)) {
			element = element.parentNode;
		}
		return element;
	}
}

let checklistList = []

for (let brChecklist of window.document.querySelectorAll('.br-checklist')) {
	checklistList.push(new BRChecklist('br-checklist', brChecklist))
}

export default BRChecklist
