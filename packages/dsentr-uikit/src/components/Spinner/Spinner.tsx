import React from 'react'
import styled, { keyframes } from 'styled-components'
import DSentrIcon from './DSentrIcon'
import { SpinnerProps } from './types'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  position: relative;
`

const RotatingDSentrIcon = styled(DSentrIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`

const Spinner: React.FC<SpinnerProps> = ({ size = 64 }) => {
  return (
    <Container>
      <RotatingDSentrIcon width={`${size}px`} />
    </Container>
  )
}

export default Spinner
