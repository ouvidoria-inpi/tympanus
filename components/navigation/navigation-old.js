class BRNavigation {

  constructor(name, component) {

    this.name = name;
    this.component = component;
    this._setUpNavigation();
  }

  _setUpNavigation() {
    
    for (let navContainer of this.component.querySelectorAll('.navigation .container')) {
      this._setTreeLevel(navContainer, 0);
    }
    this._setBehavior();
  }

  /*
   * Coloca o atributo data-level em todos os elementos do 'navigation' com a classe 'tree'
   * com o valor do seu reespectivo nível de menu
   * */
  _setTreeLevel(item, level) {
    if (item) {
      for (let tree of item.children) {
        if (tree.classList.contains('menu-nav')) {
          tree.setAttribute('data-level', level);
          for (let item of tree.children) {
            if (item.classList.contains('has-children')) {
              this._setTreeLevel(item, level + 1);
            }
          }
        }
      }
    }
  }

  _getParentElement(element, parentClass) {
    while(!element.classList.contains(parentClass)) {
      element = element.parentNode;
    }
    return element;
  }

  _getSiblingsElements(element, siblingClass) {
    let siblings = [];
    for (let sibling of element.parentNode.children) {
      if (sibling.classList.contains(siblingClass)) {
        siblings.push(sibling)
      }
    }
    return siblings;
  }

  _getTreeLevel(element) {
    return Number(this._getParentElement(element, 'tree').getAttribute('data-level'));
  }

  _setBehavior() {
    for (let navTrigger of this.component.querySelectorAll('.navigation ul.tree.menu-nav .item.has-children button.trigger')) {
      navTrigger.addEventListener('click', (event) => {
        this._setForwardMenuContext(event);
      });
    }
    for (let triggerGoBack of this.component.querySelectorAll('.header .container button.go-back')) {
      triggerGoBack.addEventListener('click', (event) => {
        this._setBackwardMenuContext(event);
      });
    }
  }

  _setForwardMenuContext(event) {
    // Deixa apenas um menu ativo no nível 0 do navigation
    if (this._getTreeLevel(event.currentTarget) === 0) {
      for (let tree of this._getParentElement(event.currentTarget, 'container').children) {
        if (tree !== this._getParentElement(event.currentTarget, 'tree')) {
          tree.classList.remove('is-active');
        }
      }
    }
    // Oculta os itens irmãos de um item selecionado
    for (let item of this._getParentElement(event.currentTarget, 'tree').children) {
      if (item !== this._getParentElement(event.currentTarget, 'item')) {
        item.classList.remove('is-active');
      }
    }
    // Ativa a 'tree' do item selecionado e os filhos imediatos dessa 'tree'
    for (let tree of this._getSiblingsElements(event.currentTarget, 'tree')) {
      tree.classList.add('is-active');
      for (let item of tree.children) {
        item.classList.add('is-active');
      }
    }
    // Comportamento do go-back button
    switch(this.component.id) {
      case 'site-nav':
        for (let buttonGoBack of this.component.querySelectorAll('#site-nav .header button.go-back')) {
          buttonGoBack.classList.add('is-active');
          for (let buttonGoBackNode of buttonGoBack.querySelectorAll('.node')) {
            for (let buttonTriggerNode of event.currentTarget.querySelectorAll('.name')) {
              buttonGoBackNode.innerText = buttonTriggerNode.innerText;
            }
          }
          buttonGoBack.setAttribute('goto-level', this._getTreeLevel(event.currentTarget));
        }
        for (let logo of this.component.querySelectorAll('#site-nav .header .logo')) {
          logo.classList.remove('is-active');
        }
        break;
      case 'system-nav':
        for (let buttonGoBack of this.component.querySelectorAll('#system-nav .header button.go-back')) {
          buttonGoBack.classList.add('is-active');
        }
        break;
    }
    event.currentTarget.classList.add('is-hidden');
  }

  _setBackwardMenuContext(event) {
    let currentTreeSelector = '.navigation .container ul.tree.menu-nav.is-active[data-level="' + (Number(event.currentTarget.getAttribute('goto-level')) + 1) +'"]';
    let gotoTreeSelector = '.navigation .container ul.tree.menu-nav.is-active[data-level="' + (Number(event.currentTarget.getAttribute('goto-level'))) + '"]';

    for (let currentTree of this.component.querySelectorAll(currentTreeSelector)) {
      for (let item of currentTree.children) {
        item.classList.remove('is-active');
      }
      currentTree.classList.remove('is-active');
      currentTree.previousElementSibling.classList.remove('is-hidden');
      if (event.currentTarget.getAttribute('goto-level') == 0) {
        switch (this.component.id) {
          case 'site-nav':
            event.currentTarget.previousElementSibling.classList.add('is-active');
            event.currentTarget.classList.remove('is-active');
            event.currentTarget.removeAttribute('goto-level');
            for (let tree of this._getParentElement(currentTree, 'container').children) {
              tree.classList.add('is-active');
            }
            break;
          case 'system-nav':
            event.currentTarget.classList.remove('is-active');
            event.currentTarget.removeAttribute('goto-level');
            // TODO
            // Tratar goback do system
            break;
        }
      } else {
        for (let buttonTriggerNode of this._getParentElement(currentTree.parentNode, 'tree').previousElementSibling.querySelectorAll('.name')) {     
          for (let buttonGoBackNode of event.currentTarget.querySelectorAll('.node')) {
            buttonGoBackNode.innerText = buttonTriggerNode.innerText;
          }
        }
        event.currentTarget.setAttribute('goto-level', event.currentTarget.getAttribute('goto-level') - 1);
      }
    }
    for (let gotoTree of this.component.querySelectorAll(gotoTreeSelector)) {
      for (let item of gotoTree.children) {
        item.classList.add('is-active');
      }
    }
  }
}

let navigationList = [];

window.onload = (function() {
  for (let brNavigation of window.document.querySelectorAll('.br-navigation')) {
    navigationList.push(new BRNavigation('br-navigation', brNavigation));
  }
})();
