class BRTabs {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setBehavior();
  }

  _setBehavior() {
    for (let ancor of this.component.querySelectorAll('.tab-nav .tab-item:not([not-tab="true"]) a')) {
      ancor.addEventListener("click", (event) => {
        this._switchTab(event.currentTarget.parentElement);
        this._switchContent(event.currentTarget.parentElement);
      }, false);
    }
  }

  _switchTab(currentTab) {
    for (let tabItem of this.component.querySelectorAll('.tab-nav .tab-item:not([not-tab="true"])')) {
      if (tabItem === currentTab) {
        tabItem.classList.add("is-active");
      } else {
        tabItem.classList.remove("is-active");
      }
    }
  }

  _switchContent(currentTab) {
    for (let ref of currentTab.querySelectorAll("a")) {
      for (let tabPane of this.component.querySelectorAll(".tab-content .tab-pane")) {
        if (ref.getAttribute("href") === "#" + tabPane.getAttribute("id")) {
          tabPane.classList.add("is-active");
        } else {
          tabPane.classList.remove("is-active");
        }
      }
    }
  }
}

let abasList = [];
for (let brTabs of window.document.querySelectorAll('.br-tabs')) {
  abasList.push(new BRTabs("br-tabs", brTabs));
}


