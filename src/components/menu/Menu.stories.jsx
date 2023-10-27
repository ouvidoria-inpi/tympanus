// import button from './button.pug'
/**
 * Usa o mixin PUG do componente para gerar o HTML final
 * @param {*} props propriedades que serão enviadas para o PUG
 * @returns {HTMLElement} HTML do componente com os parâmetros preenchidos
 */
const createMenu = () => {
  // Lógica para gerar as classes conforme o componente precisa
  // const classesToAdd = []
  // if (props.enfase) classesToAdd.push(props.enfase)
  // if (props.darkMode) classesToAdd.push(props.darkMode)
  // if (props.circular) classesToAdd.push(props.circular)
  // if (props.bloco) classesToAdd.push(props.bloco)
  // if (props.densidade) classesToAdd.push(props.densidade)
  // if (props.estado) classesToAdd.push(props.estado)

  // return button({ contents, props, classesToAdd })
  return `
 <div class="br-menu push active" id="main-navigation">
  <div class="menu-container">
    <div class="menu-panel">
      <nav class="menu-body">
        <div class="menu-folder">
          <a class="menu-item" href="javascript: void(0)">
            <span class="icon">
              <i class="fas fa-bell" aria-hidden="true"> </i>
            </span>
            <span class="content">Nível 1</span>
          </a>
          <ul>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-heart" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
            </li>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-address-book" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
              <ul>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-book" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                </li>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-tree" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                  <ul>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-moon" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-archive" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-folder">
          <a class="menu-item" href="javascript: void(0)">
            <span class="icon">
              <i class="fas fa-bell" aria-hidden="true"> </i>
            </span>
            <span class="content">Nível 1</span>
          </a>
          <ul>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-heart" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
            </li>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-address-book" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
              <ul>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-book" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                </li>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-tree" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                  <ul>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-moon" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-archive" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-folder">
          <a class="menu-item" href="javascript: void(0)">
            <span class="icon">
              <i class="fas fa-bell" aria-hidden="true"> </i>
            </span>
            <span class="content">Nível 1</span>
          </a>
          <ul>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-heart" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
            </li>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-address-book" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
              <ul>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-book" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                </li>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-tree" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                  <ul>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="javascript: void(0)">
                        <span class="content">Nível 4</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="menu-item" href="javascript: void(0)">
                    <span class="icon">
                      <i class="fas fa-moon" aria-hidden="true"> </i>
                    </span>
                    <span class="content">Nível 3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="menu-item" href="javascript: void(0)">
                <span class="icon">
                  <i class="fas fa-archive" aria-hidden="true"> </i>
                </span>
                <span class="content">Nível 2</span>
              </a>
            </li>
          </ul>
        </div>
        <a class="menu-item divider" href="javascript: void(0)">
          <span class="icon">
            <i class="fas fa-bell" aria-hidden="true"> </i>
          </span>
          <span class="content">Item de nível 1</span>
        </a>
        <a class="menu-item divider" href="javascript: void(0)">
          <span class="icon">
            <i class="fas fa-bell" aria-hidden="true"> </i>
          </span>
          <span class="content">Item de nível 1</span>
        </a>
      </nav>
    </div>
    <div class="menu-scrim" data-dismiss="menu" tabindex="0"></div>
  </div>
</div>
  `
}

// https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Componentes/Menu',
  argTypes: {
   data: [
    {
      label: 'Nível 1',
      iconClass: 'fas fa-bell',
      subMenu: [
        {
          label: 'Nível 2',
          iconClass: 'fas fa-heart',
        },
      ],
    },
  ],
  },
}
const Template = () => {
  return createMenu()
}

export const PRIMARY = Template.bind()
PRIMARY.storyName = 'Push'
PRIMARY.args = {}
