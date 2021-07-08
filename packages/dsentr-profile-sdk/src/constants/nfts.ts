import { Nft, NftType, NftSource } from '../types'
import { IPFS_GATEWAY } from './common'

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
    identifierKey: 'image'
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
    name: 'Mirror v2',
    description: 'Looking back at you looking back at me...',
    images: {
      lg: 'mirror-2-lg.png',
      md: 'mirror-2-md.png',
      sm: 'mirror-2-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmQiRpr7ZMkzV7qbqVaUZ1LiuHTTdpWmapUhaY6ZGmVLQ4/002--Mirror.png`
    },
    sortOrder: 999,
    identifier: '002--Mirror',
    type: NftType.MIRROR,
    variationId: 2
  },
  {
    name: 'Mirror v3',
    description: 'Looking back at you looking back at me...',
    images: {
      lg: 'mirror-3-lg.png',
      md: 'mirror-3-md.png',
      sm: 'mirror-3-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmQiRpr7ZMkzV7qbqVaUZ1LiuHTTdpWmapUhaY6ZGmVLQ4/003--Mirror.png`
    },
    sortOrder: 999,
    identifier: '003--Mirror',
    type: NftType.MIRROR,
    variationId: 3
  },
  {
    name: 'TBD Champions',
    description: 'TBD Battle!',
    images: {
      lg: 'tbd-lg.png',
      md: 'tbd-md.png',
      sm: 'tbd-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmWFQdggxnAkgFNBWixT6v7nrgEnYfYDxG5A9u42aHhU6U/easter-champion-storm.png`
    },
    video: {
      webm: `${IPFS_GATEWAY}/ipfs/QmWFQdggxnAkgFNBWixT6v7nrgEnYfYDxG5A9u42aHhU6U/easter-champion-storm.webm`,
      mp4: `${IPFS_GATEWAY}/ipfs/QmWFQdggxnAkgFNBWixT6v7nrgEnYfYDxG5A9u42aHhU6U/easter-champion-storm.mp4`
    },
    sortOrder: 999,
    identifier: 'easter-champion-storm',
    type: NftType.GLASS,
    variationId: 15
  },
  {
    name: "Cakeston Easter '21",
    description: 'Melting Easter eggs and melting hearts!',
    images: {
      lg: 'cakeston-easter-21-lg.png',
      md: 'cakeston-easter-21-md.png',
      sm: 'cakeston-easter-21-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-caker.png`
    },
    sortOrder: 999,
    identifier: 'easter-caker',
    type: NftType.GLASS,
    variationId: 15
  },
  {
    name: "Flipsie Easter '21",
    description: 'Watch out for Flipsie’s spatula smash!',
    images: {
      lg: 'flipsie-easter-21-lg.png',
      md: 'flipsie-easter-21-md.png',
      sm: 'flipsie-easter-21-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-flipper.png`
    },
    sortOrder: 999,
    identifier: 'easter-flipper',
    type: NftType.GLASS,
    variationId: 14
  },
  {
    name: "Stormy Easter '21",
    description: 'Do you like chocolate with your syrup? Go long!',
    images: {
      lg: 'stormy-easter-21-lg.png',
      md: 'stormy-easter-21-md.png',
      sm: 'stormy-easter-21-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmZGqWaovULNEMKxBCGnGjh27JQkAyadS6AW4J4Lzf3XBp/easter-storm.png`
    },
    sortOrder: 999,
    identifier: 'easter-storm',
    type: NftType.GLASS,
    variationId: 12
  },
  {
    name: 'Bullish',
    description: 'Happy Niu Year! This bunny’s excited for the year of the bull (market!)',
    images: {
      lg: 'bullish-lg.png',
      md: 'bullish-md.png',
      sm: 'bullish-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.png`
    },
    video: {
      webm: `${IPFS_GATEWAY}/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.webm`,
      mp4: `${IPFS_GATEWAY}/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.mp4`
    },
    sortOrder: 999,
    identifier: 'bullish',
    type: NftType.GLASS,
    variationId: 11
  },
  {
    name: 'Glass',
    description: "Oopsie daisy! Glass's had a bit of an accident. Poor little fella.",
    images: {
      lg: 'glass-lg.png',
      md: 'glass-md.png',
      sm: 'glass-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/glass.png`
    },
    sortOrder: 999,
    identifier: 'glass',
    type: NftType.GLASS,
    variationId: 10
  },
  {
    name: 'Prism',
    description: 'Glass works colors...',
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
    name: 'Reflect',
    description: 'Either brightness from the sun or darkness from below',
    images: {
      lg: 'reflect-lg.png',
      md: 'reflect-md.png',
      sm: 'reflect-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/reflect.png`,
      blur: 'reflect-blur.png'
    },
    sortOrder: 999,
    identifier: 'reflect',
    type: NftType.GLASS,
    variationId: 9
  },
  {
    name: 'Chandelier',
    description: "Don't be mesmerized by the light... Chandelier's a GLASS master!",
    images: {
      lg: 'chandelier-lg.png',
      md: 'chandelier-md.png',
      sm: 'chandelier-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/chandelier.png`,
      blur: 'chandelier-blur.png'
    },
    sortOrder: 999,
    identifier: 'chandelier',
    type: NftType.GLASS,
    variationId: 8
  },
  {
    name: 'Dollop',
    description: "Nommm... Oh hi, I'm just meditating on the meaning of CAKE.",
    images: {
      lg: 'dollop-lg.png',
      md: 'dollop-md.png',
      sm: 'dollop-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png`,
      blur: 'dollop-blur.png'
    },
    sortOrder: 999,
    identifier: 'dollop',
    type: NftType.GLASS,
    variationId: 6
  },
  {
    name: 'Twinkle',
    description: "Three guesses what's put that twinkle in those eyes! (Hint: it's CAKE)",
    images: {
      lg: 'twinkle-lg.png',
      md: 'twinkle-md.png',
      sm: 'twinkle-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png`,
      blur: 'twinkle-blur.png'
    },
    sortOrder: 999,
    identifier: 'twinkle',
    type: NftType.GLASS,
    variationId: 7
  },
  {
    name: 'Streak',
    description: "You'll know us when you see",
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
  },
  {
    name: 'Sparkle',
    description: 'As it rains down, is it shards or water?',
    images: {
      lg: 'sparkle-lg.png',
      md: 'sparkle-md.png',
      sm: 'sparkle-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png`,
      blur: 'sparkle-blur.png'
    },
    sortOrder: 999,
    identifier: 'sparkle',
    type: NftType.GLASS,
    variationId: 1
  },
  {
    name: 'Diamond',
    description: 'A scratch to mark the journey',
    images: {
      lg: 'diamond-lg.png',
      md: 'diamond-md.png',
      sm: 'diamond-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/diamond.png`,
      blur: 'diamond-blur.png'
    },
    sortOrder: 999,
    identifier: 'diamond',
    type: NftType.GLASS,
    variationId: 2
  },
  {
    name: 'Cleaner',
    description: 'Never aging',
    images: {
      lg: 'cleaner-lg.png',
      md: 'cleaner-md.png',
      sm: 'cleaner-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/cleaner.png`,
      blur: 'cleaner-blur.png'
    },
    sortOrder: 999,
    identifier: 'cleaner',
    type: NftType.GLASS,
    variationId: 3
  },
  {
    name: 'Blur',
    description: 'The eyesight would be the first',
    images: {
      lg: 'blur-lg.png',
      md: 'blur-md.png',
      sm: 'blur-sm.png',
      ipfs: `${IPFS_GATEWAY}/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blur.png`,
      blur: 'blur-blur.png'
    },
    sortOrder: 999,
    identifier: 'blur',
    type: NftType.GLASS,
    variationId: 4
  }
]

export default Nfts
