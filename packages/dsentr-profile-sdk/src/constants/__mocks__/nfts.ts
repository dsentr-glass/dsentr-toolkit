import { Nft, NftSource, NftType } from '../../types'
import { IPFS_GATEWAY } from '../common'

// This mock file is needed to properly test different NFT types
// and also not rely in tests on any value changes in the future

export const nftSources: NftSource = {
  [NftType.GLASS]: {
    address: {
      56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      97: '0x60935F36e4631F73f0f407e68642144e07aC7f5E'
    },
    identifierKey: 'image'
  },
  [NftType.MIRROR]: {
    address: {
      56: '0xa251b5EAa9E67F2Bc8b33F33e20E91552Bf85566',
      97: ''
    },
    identifierKey: 'otherIdentifier'
  }
}

const Nfts: Nft[] = [
  {
    name: 'Mirror v1',
    description: 'Looking back at you looking back at me...',
    images: {
      lg: 'mirror-1-lg.png',
      md: 'mirror-1-md.png',
      sm: 'mirror-1-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmQiRpr7ZMkzV7qbqVaUZ1LiuHTTdpWmapUhaY6ZGmVLQ4/001-Mirror.png`
    },
    sortOrder: 999,
    identifier: '001-Mirror',
    type: NftType.MIRROR,
    variationId: 1
  },
  {
    name: 'Prism',
    description: 'Glass works colors',
    images: {
      lg: 'prism-lg.png',
      md: 'prism-md.png',
      sm: 'prism-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/prism.png`,
      blur: 'prism-blur.png'
    },
    sortOrder: 999,
    identifier: 'prism',
    type: NftType.GLASS,
    variationId: 5
  },
  {
    name: 'Streak',
    description: "You'll know us when you see...",
    images: {
      lg: 'streak-lg.png',
      md: 'streak-md.png',
      sm: 'streak-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/streak.png`,
      blur: 'streak-blur.png'
    },
    sortOrder: 999,
    identifier: 'streak',
    type: NftType.GLASS,
    variationId: 0
  }
]

export default Nfts
