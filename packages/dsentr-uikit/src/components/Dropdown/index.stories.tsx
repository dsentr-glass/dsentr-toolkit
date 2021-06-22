import React from 'react'
import Button from '../Button/Button'
import Flex from '../Box/Flex'
import Dropdown from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {}
}

export const Default: React.FC = () => {
  return (
    <Flex justifyContent='space-between' style={{ marginTop: '40px' }}>
      <Dropdown position='bottom' target={<Button>Hover</Button>}>
        {[...Array(30)].map((_, ix) => (
          <div key={ix}>Content</div>
        ))}
      </Dropdown>
    </Flex>
  )
}

export const Top: React.FC = () => {
  return (
    <Flex justifyContent='space-between' style={{ marginTop: '400px' }}>
      <Dropdown position='top-right' target={<Button>Top right</Button>}>
        {[...Array(20)].map((_, ix) => (
          <div key={ix}> Content</div>
        ))}
      </Dropdown>
      <Dropdown position='top' target={<Button>Top</Button>}>
        {[...Array(20)].map((_, ix) => (
          <div key={ix}>Content</div>
        ))}
      </Dropdown>
    </Flex>
  )
}
