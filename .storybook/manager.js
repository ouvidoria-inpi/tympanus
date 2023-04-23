import { addons, types } from '@storybook/addons'
import dsTheme from './dsTheme'

addons.setConfig({
  theme: dsTheme,
})

setTimeout(() => {
  addons.getElements(types.PANEL)['addon-controls'].title = 'Controles'
  addons.getElements(types.PANEL)['storybook/html/panel'].title = 'Código-fonte'
}, 10)
