import Web3 from 'web3'
import Nfts, { nftSources } from '../constants/nfts'
import { IPFS_GATEWAY } from '../constants/common'
import { Nft, NftUriData } from '../types'
import { getNftAddress } from './addressHelpers'
import { getErc721Contract } from './contractHelpers'

/**
 * Gets the identifier key based on the nft address
 * Helpful for looking up the key when all you have is the address
 */
export const getIdentifierKeyFromAddress = (nftAddress: string, chainId: number): string | null => {
  const nftSource = Object.values(nftSources).find((nftSourceEntry) => {
    const address = getNftAddress(nftSourceEntry.address, chainId)
    return address === nftAddress
  })

  return (nftSource != null) ? nftSource.identifierKey : null
}

/**
 * Some sources like Pancake do not return HTTP tokenURI's. Same with DSentr/Glass???
 */
export const getTokenUrl = (tokenUri: string): string => {
  if (tokenUri.startsWith('ipfs://')) {
    return `${IPFS_GATEWAY}/ipfs/${tokenUri.slice(7)}`
  }

  return tokenUri
}

export const getTokenUriData = async (nftAddress: string, tokenId: number, web3: Web3): Promise<NftUriData | null> => {
  try {
    const contract = getErc721Contract(nftAddress, web3)
    if (contract == null) {
      throw new Error('contract is undefined')
    }
    const tokenUri = await contract.methods.tokenURI(tokenId).call()
    const uriDataResponse = await fetch(getTokenUrl(tokenUri))

    if (!uriDataResponse.ok) {
      return null
    }

    const uriData: NftUriData = await uriDataResponse.json()
    return uriData
  } catch (error) {
    console.error('getTokenUriData', error)
    return null
  }
}

export const getNftByTokenId = async (
  nftAddress: string,
  tokenId: number,
  web3: Web3,
  chainId: number
): Promise<Nft | undefined | null> => {
  const uriData: NftUriData | null = await getTokenUriData(nftAddress, tokenId, web3)
  const identifierKey = getIdentifierKeyFromAddress(nftAddress, chainId)

  // Bail out early if we have no uriData, identifierKey, or the value does not
  // exist in the object
  if (uriData == null) {
    return null
  }

  if (identifierKey == null) {
    return null
  }

  if (uriData[identifierKey] == null) {
    return null
  }

  return Nfts.find((nft) => {
    return identifierKey === nft.identifier && uriData[identifierKey]
  })
}
