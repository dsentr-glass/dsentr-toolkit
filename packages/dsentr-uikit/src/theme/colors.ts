import { Colors, Gradients } from './types'

export const baseColors = {
  failure: '#BF0000',
  primary: '#23caca',
  primaryBright: '#0098A1',
  primaryDark: '#23caca',
  secondary: '#7220c4',
  success: '#009900',
  warning: '#FFD34D'
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a'
}

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: '#FAF9FA',
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#FFFFFF',
  cardBorder: '#E7E3EB',
  contrast: '#191326',
  disabled: '#E9EAEB',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#D1FCFC',
  inputSecondary: '#DAC2F1',
  notification: '#7220c4',
  overlay: '#333333',
  tertiary: '#EFF4F5',
  text: '#280D5F',
  textDisabled: '#BDC2C4',
  textSubtle: '#7A6EAA',

  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
    cardHeader: 'linear-gradient(101.68deg, #20c4c4 20%, #20c4c4 60%, #7220c4 100%)',
    blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
    violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
    violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
    checked: 'linear-gradient(180deg, #7220c4 0%, #073117 100%)'
  },
  none: '#000000'
}

const darkGradients: Gradients = {
  bubblegum: 'linear-gradient(139.73deg, #333035 0%, #555035 100%)',
  inverseBubblegum: 'linear-gradient(139.73deg, #555035 0%, #333035 100%)',
  cardHeader: 'linear-gradient(101.68deg, #7220c4 20%, #7220c4 60%, #20c4c4 100%)',
  blue: 'linear-gradient(180deg, #6FF7F7 0%, #178686 100%)',
  violet: 'linear-gradient(180deg, #A573D6 0%, #701cc4 100%)',
  violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
  gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  checked: 'linear-gradient(180deg, #20c4c4 0%, #073117 100%)'
}

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#9A6AFF',
  background: '#08060B',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  disabled: '#524B63',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#372F47',
  inputSecondary: '#262130',
  notification: '#b077e9',
  overlay: '#BBBBBB',
  primaryDark: '#23caca',
  tertiary: '#353547',
  text: '#F4EEFF',
  textDisabled: '#666171',
  textSubtle: '#B8ADD2',
  gradients: darkGradients,
  none: '#000000'
}
