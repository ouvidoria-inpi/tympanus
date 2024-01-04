import { addons } from '@storybook/addons'
import dsTheme from './dsTheme'

addons.setConfig({
  theme: dsTheme,
  showPanel: true,
  panelPosition: 'bottom',
})
