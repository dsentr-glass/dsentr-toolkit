import React from 'react'
import styled from 'styled-components'
import getExternalLinkProps from '../../util/getExternalLinkProps'
import Text from '../Text/Text'
import { LinkProps } from './types'

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  color: ${({ theme }) => (theme.isDark ? theme.colors.primaryDark : theme.colors.primaryBright)};
  &:hover {
    text-decoration: underline;
  }
`

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external != null && external ? getExternalLinkProps() : {}
  return <StyledLink as='a' bold {...internalProps} {...props} />
}

Link.defaultProps = {
  color: 'primary'
}

export default Link
