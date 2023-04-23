import '../../dist/components/button/button.css'
import '../../dist/core.css'

export const createButton = ({
  label,
  onClick,
  enfase = 'Primário',
  darkMode = false,
  circular = false,
  bloco = false,
  densidade = 'medium',
  estado,
}) => {
  const btn = document.createElement('button')
  btn.innerText = label
  btn.type = 'button'
  btn.addEventListener('click', onClick)

  const buttonClasses = []
  if (enfase === 'Primário') buttonClasses.push('primary')
  if (enfase === 'Secundário') buttonClasses.push('secondary')
  if (darkMode) buttonClasses.push('dark-mode')
  if (circular) buttonClasses.push('circle')
  if (bloco) buttonClasses.push('block')
  if (densidade) buttonClasses.push(densidade)
  if (estado) buttonClasses.push(estado)

  btn.className = ['br-button', ...buttonClasses].join(' ')

  return btn
}
