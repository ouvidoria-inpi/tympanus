class BRBreadcrumb {
  constructor(name, component) {
    this.name = name
    this.component = component
    this._setBehavior()
  }

  _setBehavior() {
    this._insertExpandButton()
    this._setView()
    window.matchMedia('(min-width: 576px)').addListener(() => {
      this._setView()
    })
    window.matchMedia('(min-width: 992px)').addListener(() => {
      this._setView()
    })
    window.matchMedia('(min-width: 1280px)').addListener(() => {
      this._setView()
    })
    window.matchMedia('(min-width: 1600px)').addListener(() => {
      this._setView()
    })
  }

  _setView() {
    this._expand()
    for (const crumbList of this.component.querySelectorAll('.crumb-list')) {
      const crumbs = crumbList.querySelectorAll('.crumb')
      if (window.innerWidth < 576) {
        for (let i = crumbs.length - 3; i > 0; i--) {
          crumbs[i].classList.add('hidden')
        }
      } else {
        for (let i = crumbs.length - 3; i > 0; i--) {
          if (crumbList.scrollWidth > crumbList.offsetWidth) {
            crumbs[i].classList.add('hidden')
          }
        }
      }
    }
  }

  _insertExpandButton() {
    const crumb = this._createCrumb()
    for (const crumbList of this.component.querySelectorAll('.crumb-list')) {
      const crumbs = crumbList.querySelectorAll('.crumb')
      if (crumbList.scrollWidth > crumbList.offsetWidth) {
        crumbList.insertBefore(crumb, crumbs[crumbs.length - 1])
      }
    }
  }

  _expand(event) {
    for (const crumbList of this.component.querySelectorAll('.crumb-list')) {
      for (const crumb of crumbList.querySelectorAll('.crumb')) {
        if (crumb.classList.contains('hidden')) {
          crumb.classList.remove('hidden')
        }
      }
    }
    if (event) {
      event.currentTarget.classList.add('hidden')
    }
  }

  _createCrumb() {
    const crumb = document.createElement('li')
    crumb.classList.add('crumb')
    crumb.setAttribute('expand', '')

    const chevronIcon = document.createElement('i')
    chevronIcon.classList.add('icon', 'fas', 'fa-chevron-right')

    const button = document.createElement('button')
    button.classList.add('br-button')
    button.setAttribute('type', 'button')
    button.setAttribute('mini', '')
    button.setAttribute('circle', '')

    const ellipsisIcon = document.createElement('i')
    ellipsisIcon.classList.add('fas', 'fa-ellipsis-h')

    crumb.appendChild(chevronIcon)
    button.appendChild(ellipsisIcon)
    crumb.appendChild(button)

    crumb.addEventListener('click', (event) => {
      this._expand(event)
    })

    return crumb
  }
}
const breadcrumbList = []
for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
  breadcrumbList.push(new BRBreadcrumb('br-breadcrumb', brBreadcrumb))
}
export default BRBreadcrumb
