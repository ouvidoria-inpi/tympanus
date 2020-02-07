class BRInput {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setBehavior();
    console.log(this.component);
  }

  _setBehavior() {
    this._setPasswordViewBehavior();
  }

  _setPasswordViewBehavior() {
    for (let inputPassword of this.component.querySelectorAll("input[type='password']")) {
      if (inputPassword.parentNode.classList.contains("has-icon")) {
        for (let buttonIcon of inputPassword.parentNode.querySelectorAll("button.icon")) {
          buttonIcon.addEventListener("click", (event) => {
            this._toggleShowPassword(event);
          }, false)
        }
      }
    }
  }

  _toggleShowPassword(event) {
    for (let icon of event.currentTarget.querySelectorAll(".svg-inline--fa")) {
      if (icon.classList.contains("fa-eye")) {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        for (let input of this.component.querySelectorAll("input[type='password']")) {
          input.setAttribute("type", "text");
        }
      } else if (icon.classList.contains("fa-eye-slash")) {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        for (let input of this.component.querySelectorAll("input[type='text']")) {
          input.setAttribute("type", "password");
        }
      }
    }
  }
}

let inputList = []
for (let brInput of window.document.querySelectorAll(".br-input")) {
  inputList.push(new BRInput("br-input", brInput));
}
