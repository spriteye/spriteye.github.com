import color from './color'

const base = {
  themeTransition: 'color 0.2s ease-out 0s, background 0.2s ease-out 0s'
}

export const dark = {
  ...base,
  bg: color.nord0,
  color: color.nord6
}

export const light = {
  ...base,
  bg: 'white',
  color: color.nord0
}
