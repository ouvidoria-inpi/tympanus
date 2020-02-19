class BRTabs {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior() {
    for (let item of this.component.querySelectorAll('.item')) {
      item.addEventListener("click", (event) => {
        this._switchTab(event.currentTarget);
      }, false);
    }
  }

  _switchTab(currentTab) {
    for (let tab of this.component.querySelectorAll('.item')) {
      if (tab === currentTab) {
        tab.classList.add("is-active");
      } else {
        tab.classList.remove("is-active");
      }
    }
  }
}

let abasList = [];
for (let brTabs of window.document.querySelectorAll('.br-tabs')) {
  abasList.push(new BRTabs("br-tabs", brTabs));
}


