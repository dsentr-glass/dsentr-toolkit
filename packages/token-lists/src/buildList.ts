import fs from 'fs'
import path from 'path'
import { TokenList, TokenInfo } from '@uniswap/token-lists'
import { version } from '../package.json'
import dsentrDefault from './tokens/dsentr-default.json'
import dsentrExtended from './tokens/dsentr-extended.json'
import dsentrTop100 from './tokens/dsentr-top-100.json'

interface ListItem {
  list: TokenInfo[]
  name: string
  keywords: string[]
  logoURI: string
  sort: boolean
}

interface List {
  [key: string]: ListItem
}

const lists: List = {
  'dsentr-default': {
    list: dsentrDefault,
    name: 'DSentr Default',
    keywords: ['dsentr', 'default'],
    logoURI:
      'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png',
    sort: false
  },
  'dsentr-extended': {
    list: dsentrExtended,
    name: 'DSentr Extended',
    keywords: ['dsentr', 'extended'],
    logoURI:
      'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png',
    sort: true
  },
  'dsentr-top-100': {
    list: dsentrTop100,
    name: 'DSentr Top 100',
    keywords: ['dsentr', 'top 100'],
    logoURI:
      'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png',
    sort: true
  }
}

export const buildList = (listName: string): TokenList => {
  const [major, minor, patch] = version.split('.').map((versionNumber) => parseInt(versionNumber, 10))
  const { list, name, keywords, logoURI, sort }: ListItem = lists[listName]
  return {
    name,
    timestamp: new Date().toISOString(),
    version: {
      major,
      minor,
      patch
    },
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1: TokenInfo, t2: TokenInfo) => {
        if (t1.chainId === t2.chainId) {
          // CAKE first in extended list
          if ((t1.symbol === 'GLASS') !== (t2.symbol === 'GLASS')) {
            return t1.symbol === 'GLASS' ? -1 : 1
          }
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1
        }
        return t1.chainId < t2.chainId ? -1 : 1
      })
      : list
  }
}

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`
  const stringifiedList = JSON.stringify(tokenList, null, 2)
  fs.writeFileSync(tokenListPath, stringifiedList)
  console.info('Token list saved to ', tokenListPath)
}
