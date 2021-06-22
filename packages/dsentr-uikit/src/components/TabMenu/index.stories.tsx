import React, { useState } from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import TabMenu from './TabMenu'
import Tab from './Tab'

const meta: Meta = {
  title: 'Components/Tab Menu',
  component: TabMenu,
  argTypes: {}
}

export default meta

const Row = styled.div`
  margin-bottom: 32px;
`

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(0)
  const [index3, setIndex3] = useState(0)
  const handleClick: any = (newIndex: any) => setIndex(newIndex)
  const handleClick2: any = (newIndex: any) => setIndex2(newIndex)
  const handleClick3: any = (newIndex: any) => setIndex3(newIndex)

  return (
    <>
      <Row>
        <TabMenu activeIndex={index} onItemClick={handleClick}>
          <Tab>Total</Tab>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu activeIndex={index2} onItemClick={handleClick2}>
          <Tab>#1 Team</Tab>
          <Tab>#2 Team</Tab>
          <Tab>#3 Team</Tab>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu activeIndex={index3} onItemClick={handleClick3}>
          <Tab>Really long tab name</Tab>
          <Tab>Short</Tab>
          <Tab>Medium length</Tab>
        </TabMenu>
      </Row>
    </>
  )
}

export const Tabs: React.FC = () => {
  return (
    <>
      <Row>
        <Tab>Default</Tab>
        <Tab color='primary' backgroundColor='secondary'>
          Custom colors
        </Tab>
      </Row>
      <Row>
        <Tab scale='md'>Small scale (md)</Tab>
        <Tab scale='lg'>Large scale (lg)</Tab>
      </Row>
    </>
  )
}
