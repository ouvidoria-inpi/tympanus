class BRScrim {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    console.log(this);
    this._setType();
    this._setBehavior();
  }

  _setType() {
    if (this.component.classList.contains("is-foco")) {
      this._type = "is-foco";
    }
    if (this.component.classList.contains("is-legibilidade")) {
      this._type = "is-legibilidade";
    }
    if (this.component.classList.contains("is-inibicao")) {
      this._type = "is-inibicao";
    }
  }

  _setBehavior() {
    if (this.component.classList.contains("is-foco")) {
      this.component.addEventListener("click", (event) => {
        this._closeScrim(event);
      });
    }
  }

  _closeScrim(event) {
    event.currentTarget.classList.remove("is-active");
  }

  openScrim() {
    if (this._type === "is-foco") {
      this.component.classList.add("is-active");
    }
  }
}

let scrimList = [];
for (let brScrim of window.document.querySelectorAll(".br-scrim")) {
  scrimList.push(new BRScrim("br-scrim", brScrim));
}

for (let buttonBloco1 of window.document.querySelectorAll(".bloco1 button")) {
  buttonBloco1.addEventListener("click", () => {
    for (let brScrim of scrimList) {
      brScrim.openScrim();
    }
  });
}
