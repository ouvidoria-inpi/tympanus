/**
 * Classe Menu
 */
class Menu {
  /**
   * Instanciar o Menu
   * @param {string} name - Nome do componente
   * @param {object} component - Objeto referenciando a raiz do componente DOM
   */
  constructor(name, component) {
    this.name = name;
    this.component = component;

    this.id = `#${this.component.id}`;
    this.trigger = document.querySelector(
      `[data-toggle="menu"][data-target="${this.id}`
    );
    this.type = this.component.classList.contains('push') ? 'push' : 'fixed'

    this.items = this.component.querySelectorAll(`.${prefix}item`);
    this.collapses = this.component.querySelectorAll(
      '[data-toggle="collapse"]'
    );

    this.dismiss = this.component.querySelector('[data-dismiss="menu"]');
    this.scrim = this.component.querySelector(".menu-scrim");

    this._setBehavior();
  }

  /**
   * Definir comportamentos do componente
   * @private
   */
  _setBehavior() {
    this._setAcessibility();
    this._setStyles();
    this._toggleMenu();
  }

  /**
   * Aplicar acessibilidade no acionador
   * @private
   */
  _setAcessibility() {
    this.trigger.setAttribute("aria-haspopup", "true");
    if (!this.component.classList.contains("active")) {
      this.trigger.setAttribute("aria-expanded", "false");
    } else {
      this.trigger.setAttribute("aria-expanded", "true");
      this.trigger.classList.add("active");
    }
  }

  /**
   * Ajustar estilos
   * @private
   */
  _setStyles() {
    // Aplica fundo nos collapses e alinhamento dos subitems e ícones
    for (const collapse of this.collapses) {
      const collapseIcon = collapse.querySelector(".toggle-icon");
      const collapseList = collapse.nextElementSibling;
      const collapseItems = collapseList.querySelectorAll(`.${prefix}item`);

      collapseIcon.classList.add("ml-auto");
      collapseList.classList.add("bg-main-alternative");

      for (const item of collapseItems) {
        item.classList.add("pl-9");
      }
    }

    if (this.type !== 'push') this.component.style.left = 'calc(' + document.querySelector('.base-grid').offsetLeft + 'px + var(--grid-margin) / 2)';
  }

  /**
   * Mostrar e esconder Menu
   * @private
   */
  _toggleMenu() {
    // Monitora clique no acionador
    this.trigger.addEventListener("click", () => {
      if (this.trigger.getAttribute("aria-expanded") === "true") {
        this._hideMenu();
      } else {
        this._showMenu();
      }
    });

    // Fecha menu
    this.dismiss.addEventListener("click", () => this._hideMenu());

    // Fecha menu ao navegar no scrim
    this.scrim.addEventListener("click", () => this._hideMenu());
    this.scrim.addEventListener("keyup", () => {
      this._hideMenu(this.trigger, this.component);
      this.trigger.focus();
    });
  }

  /**
   * Mostrar Menu
   * @private
   */
  _showMenu() {
    this.trigger.classList.add("active");
    this.component.classList.add("active");
    this.trigger.setAttribute("aria-expanded", "true");
    this.dismiss.focus();
  }

  /**
   * Esconder Menu
   * @private
   */
  _hideMenu() {
    this.trigger.classList.remove("active");
    this.component.classList.remove("active");
    this.trigger.setAttribute("aria-expanded", "false");
  }
}
