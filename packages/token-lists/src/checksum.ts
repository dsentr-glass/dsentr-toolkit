import fs from 'fs'
import path from 'path'
import { getAddress } from '@ethersproject/address'
import { TokenInfo } from '@uniswap/token-lists'
import dsentrDefault from './tokens/dsentr-default.json'
import dsentrExtended from './tokens/dsentr-extended.json'
import dsentrTop100 from './tokens/dsentr-top-100.json'

interface ChecksumList {
  [key: string]: TokenInfo[]
}

const lists: ChecksumList = {
  'dsentr-default': dsentrDefault,
  'dsentr-extended': dsentrExtended,
  'dsentr-top-100': dsentrTop100
}

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0
  const listToChecksum = lists[listName]
  const updatedList = listToChecksum.reduce((tokenList: TokenInfo[], token: TokenInfo) => {
    const checksummedAddress = getAddress(token.address)
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1
      const updatedToken = { ...token, address: checksummedAddress }
      return [...tokenList, updatedToken]
    }
    return [...tokenList, token]
  }, [])

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`)
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`
    console.info('Saving updated list to ', tokenListPath)
    const stringifiedList = JSON.stringify(updatedList, null, 2)
    fs.writeFileSync(tokenListPath, stringifiedList)
    console.info('Checksumming done!')
  } else {
    console.info('All addresses are already checksummed')
  }
}

export default checksumAddresses
