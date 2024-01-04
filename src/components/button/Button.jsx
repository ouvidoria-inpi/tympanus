import PropTypes from 'prop-types'
import React from 'react'
import { isHTML } from '../../storybook/htmlUtils'

export const Button = ({
  emphasis,
  isDarkMode,
  isRound,
  isBlock,
  density,
  state,
  content,
  onclick,
}) => {
  const contentIsHTML = isHTML(content)

  return (
    <button
      type="button"
      className={[
        'br-button',
        emphasis !== null ? emphasis : '',
        isDarkMode !== null ? isDarkMode : '',
        isRound !== null ? isRound : '',
        isBlock !== null ? isBlock : '',
        density !== null ? density : '',
        state !== null ? state : '',
      ].join(' ')}
      onClick={onclick}
    >
      dangerouslySetInnerHTML={contentIsHTML ? { __html: content } : content}
    </button>
  )
}

Button.propTypes = {
  /**
   * Rótulo/ícone
   */
  content: PropTypes.string.isRequired,
  /**
   * A enfase do botão
   */
  emphasis: PropTypes.oneOf(['primary', 'secondary'], {
    nullable: true,
  }),
  /**
   * Ele é dark mode?
   */
  isDarkMode: PropTypes.string,
  /**
   * Ele é  circular?
   */
  isRound: PropTypes.string,
  /**
   * Ele é em bloco?
   */
  isBlock: PropTypes.string,
  /**
   * Qual a densidade?
   */
  density: PropTypes.oneOf(['small', 'large'], {
    nullable: true,
  }),
  /**
   * Qual o estado?
   */
  state: PropTypes.oneOf(['disabled', 'active', 'loading'], {
    nullable: true,
  }),
  /**
   * Click handler
   */
  onclick: PropTypes.func,
}
