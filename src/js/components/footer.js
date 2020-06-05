class BRFooter {
  constructor(name, component) {
    this.name = name
    this.component = component
    this._setBehavior()
  }

  _setBehavior() {
    // Javascript
  }
}

const listFooter = []
for (const brFooter of window.document.querySelectorAll('.br-footer')) {
  listFooter.push(new BRFooter('br-footer', brFooter))
}

export default BRFooter
