import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg viewBox='0 0 266 266' {...props}>
      <g>
        <path d='M266.514,71.605h-20.717l-88.02-46.787c-2.219-11.531-12.352-20.277-24.519-20.277c-12.521,0-22.828,9.284-24.623,21.316L30.105,71.605H0v190.367h266.514V71.605z M133.257,15.42c7.8,0,14.12,6.32,14.12,14.12c0,4.656-2.284,8.751-5.76,11.324c-2.344,1.735-5.216,2.796-8.36,2.796c-2.91,0-5.613-0.881-7.859-2.393c-3.775-2.535-6.26-6.837-6.26-11.727C119.137,21.74,125.457,15.42,133.257,15.42z M115.466,47.053c4.536,4.607,10.829,7.484,17.791,7.484c7.343,0,13.891-3.242,18.466-8.3l47.722,25.368H73.324L115.466,47.053z M228.441,223.899H38.073v-114.22h190.367V223.899z' />
      </g>
    </Svg>
  )
}

export default Icon
