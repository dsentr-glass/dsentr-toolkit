export interface Address {
  [key: number]: string
  97: string
  56: string
}

export interface Images {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type NftImages = {
  blur?: string
} & Images

export interface NftVideo {
  webm: string
  mp4: string
}

export interface Nft {
  name: string
  description: string
  images: NftImages
  sortOrder: number
  type: NftType
  video?: NftVideo

  // Uniquely identifies the nft.
  // Used for matching an NFT from the config with the data from the NFT's tokenURI
  identifier: string

  variationId?: number | string
}

export enum NftType {
  GLASS = 'glass',
  MIRROR = 'mirror',
}

export interface NftUriData {
  [key: string]: {
    name: string
    description: string
    image: string
    attributes: {
      shardId: string
    }
  }
}

export type NftSource = {
  [key in NftType]: {
    address: Address
    identifierKey: string
  };
}

export type TeamImages = {
  alt: string
} & Images

export interface Team {
  id: number
  name: string
  description: string
  isJoinable?: boolean
  users: number
  points: number
  images: TeamImages
  background: string
  textColor: string
}

export interface GetProfileResponse {
  hasRegistered: boolean
  profile?: Profile
}

export interface Profile {
  userId: number
  points: number
  teamId: number
  nftAddress: string
  tokenId: number
  isActive: boolean
  username: string
  nft?: Nft
  team: Team
  hasRegistered: boolean
}

export type TranslatableText =
  | string
  | {
    id: number
    fallback: string
    data?: {
      [key: string]: string | number
    }
  }

export type CampaignType = 'ifo' | 'teambattle'

export interface Campaign {
  id: string
  type: CampaignType
  title?: TranslatableText
  description?: TranslatableText
  badge?: string
}

export interface Achievement {
  id: string
  type: CampaignType
  address: string
  title: TranslatableText
  description?: TranslatableText
  badge: string
  points: number
}

export interface UserPointIncreaseEvent {
  campaignId: string
  id: string // wallet address
  points: string
}
