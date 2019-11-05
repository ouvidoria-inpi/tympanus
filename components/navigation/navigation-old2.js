/* Componente BRNavigation
 * Esse objeto trata a navegação do menu de site e de sistema
 */ 
class BRNavigation {

  constructor(name, component) {
    this.name = name;
    this.component = component;
    this._setUpNavigation();
  }

  /* Gerencia toda a configuaração do compontamento dos menus de site e sistema. */
  _setUpNavigation() {
    
    for (let navContainer of this.component.querySelectorAll('.navigation .container')) {
      this._setTreeLevel(navContainer, 0);
    }
    this._setBehavior();
  }

  /* Coloca o atributo 'data-level' nos elementos com a classe 'tree'
   * tendo o valor correspondente ao nível do menu, começando no nível 0.
   */
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

  _setBehavior() {
    for (let navTrigger of this.component.querySelectorAll('.navigation ul.tree.menu-nav .item.has-children button.trigger')) {
      navTrigger.addEventListener('click', (event) => {
        this._setForwardMenuContext(event);
      });
    }
    for (let triggerGoBack of this.component.querySelectorAll('.header .container button.go-back')) {
      triggerGoBack.addEventListener('click', (event) => {
        this._handleGoBack(event);
      });
    }
  }

  _getParentElementByClass(element, parentClass) {
    while(!element.classList.contains(parentClass)) {
      element = element.parentNode;
    }
    return element;
  }

  _getTreeLevel(element) {
    return Number(this._getParentElementByClass(element, 'tree').getAttribute('data-level'));
  }

  _getSiblingsElementsByClass(element, siblingClass) {
    let siblings = [];
    for (let sibling of element.parentNode.children) {
      if (sibling.classList.contains(siblingClass)) {
        siblings.push(sibling)
      }
    }
    return siblings;
  }

  _setForwardMenuContext(event) {
    this._handleInitialLevel(event);
    this._handleItemSelection(event);
  }

  _handleInitialLevel(event) {
    let initialLevel = 0;
    switch(this._getParentElementByClass(event.currentTarget, 'br-navigation').id) {
      case 'site-nav':
        if (this._getTreeLevel(event.currentTarget) === initialLevel) {
          for (let tree of this._getParentElementByClass(event.currentTarget, 'container').children) {
            if (tree !== this._getParentElementByClass(event.currentTarget, 'tree')) {
              tree.classList.remove('is-active');
            }
          }
        }
        break;
      case 'system-nav':
        if (this._getTreeLevel(event.currentTarget) === initialLevel) {
          for (let tree of this._getSiblingsElementsByClass(event.currentTarget, 'tree')) {
            for (let item of tree.children) {
              item.classList.toggle('is-active');
            }
            tree.classList.toggle('is-active');
          }
          for (let arrow of event.currentTarget.querySelectorAll('.arrow svg')) {
            if (arrow.classList.contains('fa-chevron-right')) {
              arrow.classList.remove('fa-chevron-right');
              arrow.classList.add('fa-chevron-left');
            } else if (arrow.classList.contains('fa-chevron-left')) {
              arrow.classList.remove('fa-chevron-left');
              arrow.classList.add('fa-chevron-right');
            }
          }
        }
        break;
    }
  }

  _handleItemSelection(event) {
    if(this._getParentElementByClass(event.currentTarget, 'br-navigation').id === 'system-nav') {
      if (this._getTreeLevel(event.currentTarget) === 1) {
        for (let tree of this._getParentElementByClass(event.currentTarget, 'container').querySelectorAll('.menu-nav[data-level="0"]')) {
          for (let item of tree.children) {
            if (item !== this._getParentElementByClass(this._getParentElementByClass(event.currentTarget, 'tree'), 'item')) {
              item.classList.remove('is-active');
              for (let child of item.children) {
                if (child.classList.contains('.tree')) {
                  child.classList.remove('is-active');
                  for (let child of tree.children) {
                    if (child.classList.contains('.item')) {
                      child.classList.remove('is-active');
                    }
                  }
                }
              }
            } else {
              for (let child of item.children) {
                if (child.classList.contains('trigger')) {
                  child.classList.add('is-hidden');
                }
              }
            }
          }
        }
      }
    }
    for (let item of this._getParentElementByClass(event.currentTarget, 'tree').children) {
      if (item !== this._getParentElementByClass(event.currentTarget, 'item')) {
        item.classList.remove('is-active');
      }
    }
    for (let tree of this._getSiblingsElementsByClass(event.currentTarget, 'tree')) {
      tree.classList.add('is-active');
      for (let item of tree.children) {
        item.classList.add('is-active');
      }
    }
    event.currentTarget.classList.add('is-hidden');
    for (let name of event.currentTarget.querySelectorAll('.name')) {
      this._setGoBackButton(name.innerText, this._getTreeLevel(event.currentTarget));
    }
  }

  _setGoBackButton(name, level) {
    if (this._getParentElementByClass(event.currentTarget, 'br-navigation').id === 'site-nav') {
      for (let logo of this.component.querySelectorAll('.br-navigation .header .logo')) {
        logo.classList.remove('is-active');
      }
    }
    for (let goBackButton of this.component.querySelectorAll('.br-navigation .header button.go-back')) {
      for (let node of goBackButton.querySelectorAll('.node')) {
        node.innerText = name;
      }
      goBackButton.setAttribute('goto-level', level);
      goBackButton.classList.add('is-active');
    }
  }

  _handleGoBack(event) {
    let initialLevel = 0;
    switch (this._getParentElementByClass(event.currentTarget, 'br-navigation').id) {
      case 'site-nav':
        for (let tree of this.component.querySelectorAll('#site-nav .navigation .tree.is-active[data-level="' + (Number(event.currentTarget.getAttribute('goto-level')) + 1) + '"]')) {
          for (let child of tree.children) {
            child.classList.remove('is-active');
          }
          tree.classList.remove('is-active');
          for (let sibling of this._getSiblingsElementsByClass(tree, 'trigger')) {
            sibling.classList.remove('is-hidden');
          }
        }
        for (let tree of this.component.querySelectorAll('#site-nav .navigation .tree.is-active[data-level="' + event.currentTarget.getAttribute('goto-level') + '"]')) {
          for (let child of tree.children) {
            child.classList.add('is-active');
          }
          if (Number(event.currentTarget.getAttribute('goto-level')) === initialLevel) {
            event.currentTarget.classList.remove('is-active');
            for (let node of event.currentTarget.querySelectorAll('.node')) {
              node.innerText = '';
            }
            for (let headerItem of this._getParentElementByClass(event.currentTarget, 'container').children) {
              if (headerItem.classList.contains('logo')) {
                headerItem.classList.add('is-active');
              }
            }
            for (let child of this._getParentElementByClass(tree, 'container').children) {
              child.classList.add('is-active');
            }
          } else {
            for (let sibling of this._getSiblingsElementsByClass(tree, 'trigger')) {
              for (let name of sibling.querySelectorAll('.name')) {
                for (let node of event.currentTarget.querySelectorAll('.node')) {
                  node.innerText = name.innerText;
                }
              }
            }
            event.currentTarget.setAttribute('goto-level', Number(event.currentTarget.getAttribute('goto-level')) - 1);
          }
        }
        break;
      case 'system-nav':
        
        break;
    }
    
    
    
    // if ((this._getParentElementByClass(event.currentTarget, 'br-navigation').id === 'site-nav') && Number(event.currentTarget.getAttribute('goto-level')) === initialLevel) {
    //   event.currentTarget.classList.remove('is-active');
    //   for (let node of event.currentTarget.querySelectorAll('.node')) {
    //     node.innerText = '...';
    //   }
    //   for (let headerItem of this._getParentElementByClass(event.currentTarget, 'container').children) {
    //     if (headerItem.classList.contains('logo')) {
    //       headerItem.classList.add('is-active');
    //     }
    //   }
    // } else if ((this._getParentElementByClass(event.currentTarget, 'br-navigation').id === 'site-nav') && Number(event.currentTarget.getAttribute('goto-level')) !== initialLevel) {
    //   for (let activeTree of this.component.querySelectorAll('.br-navigation .navigation .tree.is-active[data-level="' + (Number(event.currentTarget.getAttribute('goto-level')) + 1) + '"]')) {
    //     for (let item of activeTree.children) {
    //       if (item.classList.contains('item')) {
    //         item.classList.remove('is-active');
    //       }
    //     }
    //     activeTree.classList.remove('is-active');
    //     for (let buttonTrigger of this._getSiblingsElementsByClass(activeTree, 'trigger')) {
    //       buttonTrigger.classList.remove('is-hidden');
    //     }
    //   }
    //   for (let tree of this.component.querySelectorAll('.br-navigation .navigation .tree.is-active[data-level="' + event.currentTarget.getAttribute('goto-level') + '"]')) {
    //     for (let item of tree.children) {
    //       if (item.classList.contains('item')) {
    //         item.classList.add('is-active');
    //       }
    //     }
    //   }
    // }
  }
}

let navigationList = [];

window.onload = (function() {
  for (let brNavigation of window.document.querySelectorAll('.br-navigation')) {
    navigationList.push(new BRNavigation('br-navigation', brNavigation));
  }
})();
