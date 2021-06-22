import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg viewBox='0 0 512 512' {...props}>
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
      <g transform='matrix(1.147712, 0, 0, 1.146106, -0.223765, -4.991493)'>
        <g transform='matrix(0.707107, 0.707107, -0.707107, 0.707107, 217.536072, -89.428864)' id='svg_26'>
          <rect id='svg_12' height='301' width='310' y='69.5' x='65' stroke='#000' fill='url(#svg_22)' />
          <rect
            transform='rotate(180 142.5 143)'
            stroke='#000'
            id='svg_16'
            height='147'
            width='155.00001'
            y='69.5'
            x='65'
            fill='url(#svg_24)'
          />
          <rect
            transform='rotate(90 297.5 293.5)'
            stroke='#000'
            id='svg_17'
            height='155'
            width='153.99999'
            y='216.00001'
            x='220.5'
            fill='url(#svg_24)'
          />
        </g>
      </g>
    </Svg>
  )
}

export default Icon
