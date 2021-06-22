import React from 'react'
import StyledProgress, { Bar } from './StyledProgress'
import { ProgressProps, variants, scales } from './types'

const stepGuard = (step: number): number => {
  if (step < 0) {
    return 0
  }

  if (step > 100) {
    return 100
  }

  return step
}

const Progress: React.FC<ProgressProps> = ({
  variant = variants.ROUND,
  scale = scales.MD,
  primaryStep = 0,
  secondaryStep = null
}) => {
  return (
    <StyledProgress variant={variant} scale={scale}>
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep != null ? <Bar style={{ width: `${stepGuard(Number(secondaryStep))}%` }} /> : null}
    </StyledProgress>
  )
}

export default Progress
