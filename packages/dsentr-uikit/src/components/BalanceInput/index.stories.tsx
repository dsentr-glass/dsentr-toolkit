import React, { useState } from 'react'
import Box from '../Box/Box'
import BalanceInput from './BalanceInput'

export default {
  title: 'Components/BalanceInput',
  component: BalanceInput,
  argTypes: {}
}

export const Default: React.FC = () => {
  const [decimalValue, setDecimalValue] = useState(1.43333)
  const [numericValue, setNumericValue] = useState(5)

  const currencyValue = (input: number): string => {
    return `~${(input * 1.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} USD`
  }

  const handleDecimalChange = (input: string | number): void => {
    setDecimalValue(Number(input))
  }

  const handleNumericChange = (input: string | number): void => {
    setNumericValue(Number(input))
  }

  return (
    <Box width='300px'>
      <BalanceInput
        onUserInput={handleDecimalChange}
        value={decimalValue}
        currencyValue={currencyValue(decimalValue)}
        placeholder='0.0'
        mb='32px'
      />
      <BalanceInput
        value={decimalValue * 1.5}
        onUserInput={handleDecimalChange}
        currencyValue={currencyValue(decimalValue * 1.5)}
        placeholder='1.5'
        isWarning
        mb='32px'
      />
      <BalanceInput
        value={numericValue}
        onUserInput={handleNumericChange}
        inputProps={{ inputMode: 'numeric' }}
        currencyValue={currencyValue(numericValue)}
        placeholder='0'
        mb='32px'
      />
    </Box>
  )
}
