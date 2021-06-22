import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox='0 0 24 24' {...props}>
      <defs>
        <linearGradient y2='0' x2='1' y1='0' x1='0' id='svg_22'>
          <stop offset='0' stopOpacity='0.99609' stopColor='#7220c4' />
          <stop offset='1' stopOpacity='0.98828' stopColor='#d1b0f2' />
        </linearGradient>
        <linearGradient y2='0' x2='1' y1='0' x1='0' id='svg_24'>
          <stop offset='0' stopOpacity='0.99219' stopColor='#20c4c4' />
          <stop offset='1' stopOpacity='0.97266' stopColor='#9ef7f7' />
        </linearGradient>
      </defs>
      <g>
        <circle cx='224.626' cy='225.306' r='223.179' />
        <circle fill='#50099b' cx='224.626' cy='225.029' r='221.514' />
        <rect
          id='svg_12'
          height='301'
          width='310'
          y='69.5'
          x='65'
          stroke='#000'
          fill='url(#svg_22)'
          transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 225.305222, -89.367195)'
        />
        <rect
          transform='matrix(-0.707107, -0.707107, 0.707107, -0.707107, 225.305222, -89.367195)'
          stroke='#000'
          id='svg_16'
          height='147'
          width='155'
          y='-216.5'
          x='-220'
          fill='url(#svg_24)'
        />
        <rect
          transform='matrix(-0.707107, 0.707107, -0.707107, -0.707107, 646.033875, 325.70462)'
          stroke='#000'
          id='svg_17'
          height='155'
          width='154'
          y='216'
          x='220.5'
          fill='url(#svg_24)'
        />
      </g>
    </Svg>
  )
}

export default Icon
