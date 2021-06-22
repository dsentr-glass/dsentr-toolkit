import styled from 'styled-components'
import Text from '../Text/Text'
import { tags, scales, weights, HeadingProps } from './types'

const style = {
  [scales.MD]: {
    fontSize: '20px',
    fontSizeLg: '20px'
  },
  [scales.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px'
  },
  [scales.XL]: {
    fontSize: '32px',
    fontSizeLg: '40px'
  },
  [scales.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px'
  },
  [weights.b100]: {
    fontWeight: 100
  },
  [weights.b200]: {
    fontWeight: 200
  },
  [weights.b300]: {
    fontWeight: 300
  },
  [weights.b400]: {
    fontWeight: 400
  },
  [weights.b500]: {
    fontWeight: 500
  },
  [weights.b600]: {
    fontWeight: 600
  },
  [weights.b700]: {
    fontWeight: 700
  },
  [weights.b800]: {
    fontWeight: 800
  },
  [weights.b900]: {
    fontWeight: 900
  }
}

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale ?? scales.MD].fontSize};
  font-weight: ${({ weight }) => style[weight ?? weights.b600].fontWeight};
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale ?? scales.MD].fontSizeLg};
  }
`

Heading.defaultProps = {
  as: tags.H2
}

export default Heading
