import React from 'react'
import styled, { CSSObject, DefaultTheme } from 'styled-components'
import { Colors } from '../../theme/types'
import { CardRibbonProps } from './types'

interface StyledCardRibbonProps extends CardRibbonProps {
  theme: DefaultTheme
  ribbonPosition?: 'right' | 'left' | undefined
  variantColor: keyof Colors
}

const StyledCardRibbon = styled.div<Partial<StyledCardRibbonProps>>`
  z-index: 1;
  background-color: ${(({ variantColor = 'secondary', theme }: StyledCardRibbonProps) =>
    theme.colors[variantColor]) as unknown as CSSObject};
  color: white;
  margin: 0;
  padding: 0;
  padding: 8px 0;
  position: absolute;
  right: ${({ ribbonPosition }) => (ribbonPosition === 'right' ? 0 : 'auto')};
  top: 0;
  text-align: center;
  transform: translateX(30%) translateY(0%) rotate(45deg);
  transform: ${({ ribbonPosition }) =>
    ribbonPosition === 'right'
      ? 'translateX(-20%) translateY(-20%) rotate(15deg)'
      : 'translateX(50%) translateY(60%) rotate(-15deg)'};
  transform-origin: top left;
  width: 96px;

  &:before,
  &:after {
    background-color: ${(({ variantColor = 'secondary', theme }: StyledCardRibbonProps) =>
      theme.colors[variantColor]) as unknown as keyof Colors};
    content: '';
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`

const CardRibbon: React.FC<CardRibbonProps> = ({ variantColor, text, ribbonPosition, ...props }) => {
  return (
    <StyledCardRibbon variantColor={variantColor} ribbonPosition={ribbonPosition} {...props}>
      <div title={text}>{text}</div>
    </StyledCardRibbon>
  )
}

CardRibbon.defaultProps = {
  ribbonPosition: 'right'
}

export default CardRibbon
