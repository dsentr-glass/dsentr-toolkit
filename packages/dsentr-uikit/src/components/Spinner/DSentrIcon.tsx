import React from 'react'
import Svg from '../Svg/Svg'
import { SvgProps } from '../Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox='0 0 26 26' {...props}>
      <path
        d='M12.758,22.499c-5.376,0-9.75-4.374-9.75-9.75s4.374-9.75,9.75-9.75s9.75,4.374,9.75,9.75     c0,1.966-0.589,3.794-1.595,5.328l1.394,1.393l1.309-0.067c1.192-1.939,1.895-4.213,1.895-6.652C25.51,5.72,19.79,0,12.76,0     C5.73,0,0.01,5.72,0.01,12.75c0,7.029,5.72,12.75,12.75,12.75c2.439,0,4.713-0.701,6.652-1.895l0.067-1.308l-1.395-1.395     C16.552,21.909,14.724,22.499,12.758,22.499z'
        fill='#7220c4'
        data-original='#000000'
        opacity='0.6'
      />
      <path
        d='M19.218,16.381c0.607-1.075,0.957-2.312,0.957-3.632c0-4.09-3.328-7.417-7.417-7.417S5.341,8.66,5.341,12.749     s3.328,7.417,7.417,7.417c1.32,0,2.558-0.351,3.632-0.957l-2.277-2.278c-0.43,0.142-0.879,0.235-1.355,0.235     c-2.436,0-4.417-1.981-4.417-4.417c0-2.436,1.981-4.417,4.417-4.417c2.437,0,4.417,1.981,4.417,4.417     c0,0.476-0.096,0.925-0.234,1.354L19.218,16.381z'
        fill='#20c4c4'
        data-original='#000000'
        opacity='0.9'
      />
      <path
        d='M13.758,11.749c0.401,0,0.784,0.117,1.11,0.336c-0.284-0.901-1.116-1.558-2.11-1.558c-1.227,0-2.222,0.995-2.222,2.222     c0,0.995,0.659,1.828,1.561,2.11c-0.52-0.776-0.438-1.838,0.248-2.524C12.722,11.957,13.224,11.749,13.758,11.749z'
        fill='#7220c4'
        data-original='#000000'
        opacity='0.3'
      />
    </Svg>
  )
}

export default Icon
