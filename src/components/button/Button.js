import React from 'react'
import { isHTML } from '../../storybook/htmlUtils'

export const buttonTemplate = (args) => {
  const contentIsHTML = isHTML(args.content)

  const classes = ['br-button']

  if (args.emphasis) {
    classes.push(args.emphasis)
  }

  if (args.isDarkMode) classes.push(args.isDarkMode)
  if (args.isCircle) classes.push(args.isCircle)
  if (args.isBlock) classes.push(args.isBlock)
  if (args.density) classes.push(args.density)
  if (args.state) classes.push(args.state)

  // TODO: resolver problema com html sendo passado por parametros. Exemplo no circulo
  return (
    <button
      id="button"
      className={classes.join(' ')}
      type="button"
      onClick={args.onclick}
    >
      {args.content}
    </button>
  )
}
