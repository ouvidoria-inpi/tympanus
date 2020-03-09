import BRScrim from "./scrim";

class BRModal {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    console.log(this.component);
    this._setBehavior();
  }

  _setBehavior() {

  }
}

export default BRModal

let modalList = []

for (let brModal of window.document.querySelectorAll(".br-modal")) {
  modalList.push(new BRModal("br-modal", brModal));
}

for (let brScrim of window.document.querySelectorAll(".br-scrim")) {
  let scrim = new BRScrim("br-scrim", brScrim);
  for (let button of window.document.querySelectorAll(".br-scrim + button")) {
    button.addEventListener("click", () => {
      scrim.showScrim();
    });
  }  
}
