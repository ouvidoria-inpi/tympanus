'use strict'

module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    'autoprefixer': { cascade: false },
    'postcss-between': { breakMultipleSelectors: true },
    'postcss-sorting': { 'properties-order': 'alphabetical' }
  }
})
