import addresses, { ProfileNumber } from '../constants/contracts'
import { Address } from '../types'

export const getNftAddress = (nftAddresses: Address, chainId: number): string => {
  return nftAddresses[chainId].toString()
}

export const getGlassProfileAddress = (chainId: ProfileNumber): string => {
  return addresses[chainId]
}
