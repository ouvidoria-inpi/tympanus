/**
 * Classe que instancia os exemplos de uso dos utilitários
 */

// import TooltipExample from '../../util/tooltip/tooltip'
import AccordionExample from '../../util/accordion/accordion'
import CheckgroupExample from '../../util/checkgroup/checkgroup'
import CollapseExample from '../../util/collapse/collapse'
import DropdownExample from '../../util/dropdown/dropdown'
import Scrim from './behavior/scrim'
// import Tooltip from './behavior/tooltip'
// import Tooltip from './behavior/tooltip'
import TooltipExample from '../../util/tooltip/tooltip'

export default class Behavior {
  initInstanceAll() {
    this._initInstanceAccordionExample()
    this._initInstanceCheckGroupExemple()
    this._initInstanceCollapseExample()
    this._initInstanceDropdownExample()
    this._initInstanceTooltipExample()
    this._initInstanceScrimExample()
  }

  _initInstanceCollapseExample() {
    const collapseExampleList = []
    window.document
      .querySelectorAll('.collapse-example')
      .forEach((collapseExample) => {
        collapseExampleList.push(new CollapseExample(collapseExample))
      })
  }

  _initInstanceAccordionExample() {
    const accordionExampleList = []
    window.document
      .querySelectorAll('.accordion-example')
      .forEach((accordionExample) => {
        accordionExampleList.push(new AccordionExample(accordionExample))
      })
  }

  _initInstanceCheckGroupExemple() {
    const checkgroupExampleList = []
    window.document
      .querySelectorAll('.checkgroup-example')
      .forEach((checkgroupExample) => {
        checkgroupExampleList.push(new CheckgroupExample(checkgroupExample))
      })
  }

  _initInstanceDropdownExample() {
    const dropdownExampleList = []
    window.document
      .querySelectorAll('.dropdown-example')
      .forEach((dropdownExample) => {
        dropdownExampleList.push(new DropdownExample(dropdownExample))
      })
  }

  _initInstanceScrimExample() {
    for (const buttonBloco1 of window.document.querySelectorAll(
      '.scrimutilexemplo button'
    )) {
      buttonBloco1.addEventListener('click', () => {
        const scrscrim = window.document.querySelector('#scrimutilexample')
        const scrimfoco = new Scrim({
          closeElement: '#scrimfechar',
          trigger: scrscrim,
        })
        scrimfoco.showScrim()
      })
    }
  }
  _initInstanceTooltipExample() {
    const tooltipExample = new TooltipExample()
    tooltipExample.run()
  }
}
