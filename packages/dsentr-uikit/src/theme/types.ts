export type Breakpoints = string[]

export interface MediaQueries {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  nav: string
}

export type Spacing = number[]

export interface Radii {
  small: string
  default: string
  card: string
  circle: string
}

export interface Shadows {
  level1: string
  active: string
  success: string
  warning: string
  focus: string
  inset: string
}

export interface Gradients {
  bubblegum: string
  inverseBubblegum: string
  cardHeader: string
  blue: string
  violet: string
  violetAlt: string
  gold: string
  checked: string
  toString: () => string
}

export interface Colors {
  primary: string
  primaryBright: string
  primaryDark: string
  secondary: string
  tertiary: string
  success: string
  failure: string
  warning: string
  cardBorder: string
  contrast: string
  dropdown: string
  dropdownDeep: string
  invertedContrast: string
  input: string
  inputSecondary: string
  background: string
  backgroundDisabled: string
  backgroundAlt: string
  text: string
  textDisabled: string
  textSubtle: string
  disabled: string
  notification: string

  // Gradients
  gradients: Gradients

  // Additional colors
  binance: string
  overlay: string
  none: string
}

export interface ZIndices {
  dropdown: number
  modal: number
}
