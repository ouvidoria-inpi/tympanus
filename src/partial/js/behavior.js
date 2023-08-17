/**
 * Classe Behavior
 */
class Behavior {
  /**
   * Instanciar o comportamento
   * @param {object} trigger - acionador, normalmente é o atributo [data-toggle="dropdown"]
   * @param {object} target - alvo, normalmente é o atributo [data-target]
   * @param {boolean} type - usado nas instâncias do Menu, Select, etc.
   * @param {boolean} useIcon - Habilita a criação do ícone
   */
  constructor(trigger, target, type = false, useIcon = true) {
    this.trigger = trigger;
    this.target = target;
    this.useIcon = useIcon;

    // Tipo de comportamento via [data-toggle]
    this.toggle = this.trigger.dataset.toggle;

    // Seta tipo de comportamento
    this.type = type ? type : this.toggle;

    // Ícone padrão dos comportamentos
    this.typeIcon =
      this.type === "dropdown" ? "fas fa-caret-down" : "fas fa-chevron-down";

    // Ícone usado no comportamento. Configurado via [data-icon]
    this.icon = this.trigger.dataset.icon
      ? this.trigger.dataset.icon
      : this.typeIcon;

    // Habilita rotação do ícone. Configurado via [data-icon-animation]
    this.iconAnimation =
      this.trigger.dataset.iconAnimation === "false" ? false : true;

    // Local do ícone. Configurado via [data-icon-placement]
    this.iconPlacement = this.trigger.dataset.iconPlacement
      ? this.trigger.dataset.iconPlacement
      : "right";

    this._setBehavior();
  }

  /**
   * Definir comportamentos
   * @private
   */
  _setBehavior() {
    this._setAcessibility();
    if (this.type === "dropdown")
      this.trigger.setAttribute("aria-haspopup", "true");
    if (this.useIcon) this._createToggleIcon();
    this._toggleTarget();
  }

  /**
   * Aplicar acessibilidade no acionador
   * @private
   */
  _setAcessibility() {
    this.trigger.setAttribute("aria-haspopup", "true");
    this.trigger.setAttribute("aria-expanded", "false");
  }

  /**
   * Criar ícone
   * @private
   */
  _createToggleIcon() {
    // Cria tag <i>
    const iconElement = document.createElement("i");
    iconElement.classList.value = this.icon;
    iconElement.setAttribute("aria-hidden", "true");

    // Cria tag <span> responsável pelo efeito de rotação
    const iconContainer = document.createElement("span");
    iconContainer.classList.value = "toggle-icon";
    iconContainer.appendChild(iconElement);

    // Coloca ícone como filho ou como irmão caso o container seja input
    if (this.trigger.tagName !== "INPUT") {
      if (this.trigger.classList.contains(`${prefix}button`)) {
        if (this.iconPlacement === "right") {
          this.trigger.querySelector(".content").append(iconContainer);
        } else {
          this.trigger.querySelector(".content").prepend(iconContainer);
        }
      } else {
        if (this.iconPlacement === "right") {
          this.trigger.append(iconContainer);
        } else {
          this.trigger.prepend(iconContainer);
        }
      }
    } else {
      // Cria botão de ação do input
      const button = document.createElement("button");
      button.type = "button";
      button.classList.value = `${prefix}button circle high-density`;
      button.innerHTML = `
        <span class="overlay"></span>
        <span class="content">
          ${iconContainer.outerHTML}
        </span>
      `;

      // Cria container do botão de ação
      const inputAction = document.createElement("div");
      inputAction.classList.add("input-action");
      inputAction.appendChild(button);

      this.trigger.closest(".input-box").appendChild(inputAction);
    }
  }

  /**
   * Mostrar e esconder alvo
   * @private
   */
  _toggleTarget() {
    // Monitora clique no acionador
    this.trigger.addEventListener("click", () => {
      if (this.trigger.getAttribute("aria-expanded") === "true") {
        this.hideTarget();
      } else {
        this.showTarget();
      }
    });
  }

  /**
   * Mostrar alvo
   * @public
   */
  showTarget() {
    // Expande alvo
    if (this.type === "dropdown") {
      this.target.style.maxHeight = this.target.scrollHeight + "px";
    } else {
      this.target.style.height = this.target.scrollHeight + "px";
    }
    this.target.classList.add("show");
    this.trigger.setAttribute("aria-expanded", "true");

    // Gira ícone
    const toggleIcon =
      this.trigger.tagName !== "INPUT"
        ? this.trigger.querySelector(".toggle-icon")
        : this.trigger.closest(".input-box").querySelector(".toggle-icon");
    if (this.iconAnimation) {
      toggleIcon.style.transform = "rotate(180deg)";
    } else {
      this.trigger.classList.add("active");
    }
  }

  /**
   * Esconder alvo
   * @public
   */
  hideTarget() {
    // Contrai alvo
    if (this.type === "dropdown") {
      this.target.style.maxHeight = "0";
    } else {
      this.target.style.height = "0";
    }
    this.target.classList.remove("show");
    this.trigger.setAttribute("aria-expanded", "false");

    // Gira ícone
    const toggleIcon =
      this.trigger.tagName !== "INPUT"
        ? this.trigger.querySelector(".toggle-icon")
        : this.trigger.closest(".input-box").querySelector(".toggle-icon");
    if (this.iconAnimation) {
      toggleIcon.style.transform = "rotate(0deg)";
    } else {
      this.trigger.classList.remove("active");
    }
  }
}
