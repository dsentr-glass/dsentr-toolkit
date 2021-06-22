import { SpaceProps } from 'styled-system'

export const scales: { [key: string]: any } = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
} as const

export type Scales = Map<string, any>

export interface InputProps extends SpaceProps {
  scale?: Scales
  isSuccess?: boolean
  isWarning?: boolean
}
