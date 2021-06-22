import React from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import Heading from '../Heading/Heading'
import Input from './Input'
import { scales } from './types'

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
}

export default meta

export const Default: React.FC = () => {
  return (
    <div>
      {Object.keys(scales).map((key: string, ix) => (
        <React.Fragment key={ix}>
          <Heading mb='16px'>{key}</Heading>
          <Row>
            <Input type='text' scale={scales[key]} defaultValue='Value' />
            <Input type='text' scale={scales[key]} placeholder='Placeholder...' />
            <Input type='text' scale={scales[key]} defaultValue='Disabled' disabled />
            <Input type='text' scale={scales[key]} defaultValue='Success' isSuccess />
            <Input type='text' scale={scales[key]} defaultValue='Warning' isWarning />
          </Row>
        </React.Fragment>
      ))}
    </div>
  )
}
