import React from 'react'
import { isHTML } from '../../storybook/htmlUtils'

export const buttonTemplate = (args) => {
  const contentIsHTML = isHTML(args.content)

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
    <button id="button" class={classes.join(' ')} type="button">
      {contentIsHTML ? (
        <div dangerouslySetInnerHTML={{ __html: args.content }} />
      ) : (
        args.content
      )}
    </button>
  )
}
