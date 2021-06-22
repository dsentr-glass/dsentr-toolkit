import React from 'react'
import Heading from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {}
}

export const Sizes: React.FC = () => {
  return (
    <div>
      <Heading>Default</Heading>
      <Heading scale='md'>Size md</Heading>
      <Heading scale='lg'>Size lg</Heading>
      <Heading scale='xl'>Size xl</Heading>
      <Heading scale='xxl'>Size xxl</Heading>
    </div>
  )
}

export const tags: React.FC = () => {
  return (
    <div>
      <Heading>Default</Heading>
      <Heading as='h1'>Tag h1</Heading>
      <Heading as='h2'>Tag h2</Heading>
      <Heading as='h3'>Tag h3</Heading>
      <Heading as='h4'>Tag h4</Heading>
      <Heading as='h5'>Tag h5</Heading>
      <Heading as='h6'>Tag h6</Heading>
    </div>
  )
}

export const weights: React.FC = () => {
  return (
    <div>
      <Heading>Default</Heading>
      <Heading weight='b100'>Weight 100</Heading>
      <Heading weight='b200'>Weight 200</Heading>
      <Heading weight='b300'>Weight 300</Heading>
      <Heading weight='b400'>Weight 400</Heading>
      <Heading weight='b500'>Weight 500</Heading>
      <Heading weight='b600'>Weight 600</Heading>
      <Heading weight='b700'>Weight 700</Heading>
      <Heading weight='b800'>Weight 800</Heading>
      <Heading weight='b900'>Weight 900</Heading>
    </div>
  )
}
