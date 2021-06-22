import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import Circle from './svg/circle.svg'

interface SliderLabelProps {
  progress: string
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean
  disabled?: boolean
}

interface DisabledProp {
  disabled?: boolean
}

const getCursorStyle = ({ disabled = false }: DisabledProp): string => {
  return disabled ? 'not-allowed' : 'cursor'
}

const getBaseThumbStyles = ({ disabled }: StyledInputProps): string => `
  -webkit-appearance: none;
  background-image: url(${Circle});
  background-color: transparent;
  border: 0;
  cursor: ${getCursorStyle({ disabled })};
  width: 24px;
  height: 24px;
  filter: ${disabled != null && disabled ? 'grayscale(100%)' : 'none'};
  transform: translate(-2px, 4px);
  transition: 200ms transform;

  &:hover {
    transform: ${disabled != null && disabled ? 'scale(1) translate(-2px, 4px)' : 'scale(1.15) translate(-3px, 3px)'};
  }
`

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`

export const MainSlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) =>
    theme.colors[disabled != null && disabled ? 'textDisabled' : 'inputSecondary']};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled != null && disabled ? 'grayscale(100%)' : 'none')};
  height: 10px;
  position: absolute;
  top: 18px;
`
