export const tags = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6'
}

export const scales = {
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl'
} as const

export const weights = {
  b100: 'b100',
  b200: 'b200',
  b300: 'b300',
  b400: 'b400',
  b500: 'b500',
  b600: 'b600',
  b700: 'b700',
  b800: 'b800',
  b900: 'b900'
} as const

export type Tags = typeof tags[keyof typeof tags]
export type Scales = typeof scales[keyof typeof scales]
export type Weights = typeof weights[keyof typeof weights]

export interface HeadingProps {
  as?: Tags
  scale?: Scales
  weight?: Weights
}
