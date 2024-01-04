import React from 'react'

export const buttonTemplate = (args) => {
  const classes = ['br-button']

  if (args.emphasis) {
    classes.push(args.emphasis)
  }

  if (args.isDarkMode) classes.push(args.isDarkMode)
  if (args.isRound) classes.push(args.isRound)
  if (args.isBlock) classes.push(args.isBlock)
  if (args.density) classes.push(args.density)
  if (args.state) classes.push(args.state)

  return (
    <button id="button" className={classes.join(' ')} type="button">
      {args.content}
    </button>
  )
}
