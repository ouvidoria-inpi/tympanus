import { addons } from '@storybook/addons'
import dsTheme from './dsTheme'

addons.setConfig({
  theme: dsTheme,
  showPanel: true,
  panelPosition: 'bottom',
  previewTabs: {
    canvas: {
      title: 'Visualizar',
    },
  },
})

// setTimeout(() => {
//   addons.getElements(types.PANEL)['addon-controls'].title = 'Controles'
//   addons.getElements(types.PANEL)['storybook/html/panel'].title = 'Código-fonte'
// }, 10)
