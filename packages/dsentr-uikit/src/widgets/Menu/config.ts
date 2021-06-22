import { LinkStatus } from './types'

interface Status {
  LIVE: LinkStatus
  SOON: LinkStatus
  NEW: LinkStatus
}

export const status: Status = {
  LIVE: {
    text: 'LIVE',
    color: 'failure'
  },
  SOON: {
    text: 'SOON',
    color: 'warning'
  },
  NEW: {
    text: 'NEW',
    color: 'success'
  }
}

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/'
  },
  {
    label: 'Exchange',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.dsentr.com'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.dsentr.com/#/pool'
      }
    ]
  },
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    href: '/liquidity',
    status: status.LIVE
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://dsentr.com'
      },
      {
        label: 'Tokens',
        href: 'https://dsentr.com/tokens'
      },
      {
        label: 'Pairs',
        href: 'https://dsentr.com/pairs'
      },
      {
        label: 'Accounts',
        href: 'https://dsentr.com/accounts'
      }
    ]
  },
  {
    label: 'ILPO',
    icon: 'IlpoIcon',
    items: [
      {
        label: 'Next',
        href: '/ilpo'
      },
      {
        label: 'History',
        href: '/ilpo/history'
      }
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/dsentr-glass'
      },
      {
        label: 'Docs',
        href: 'https://docs.dsentr.com'
      }
    ]
  }
]

export const socials = [
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    items: [
      {
        label: 'English',
        href: 'https://t.me/dsentr'
      },
      {
        label: 'Bahasa Indonesia',
        href: 'https://t.me/DSentrIndonesia'
      },
      {
        label: '中文',
        href: 'https://t.me/DSentr_CN'
      },
      {
        label: 'Tiếng Việt',
        href: 'https://t.me/DSentrVN'
      },
      {
        label: 'Italiano',
        href: 'https://t.me/dsentr_ita'
      },
      {
        label: 'русский',
        href: 'https://t.me/dsentr_ru'
      },
      {
        label: 'Türkiye',
        href: 'https://t.me/dsentrturkiye'
      },
      {
        label: 'Português',
        href: 'https://t.me/DSentrPortuguese'
      },
      {
        label: 'Español',
        href: 'https://t.me/DSentrEs'
      },
      {
        label: '日本語',
        href: 'https://t.me/dsentrjp'
      },
      {
        label: 'Français',
        href: 'https://t.me/dsentrfr'
      },
      {
        label: 'Announcements',
        href: 'https://t.me/DSentrAnn'
      },
      {
        label: 'Whale Alert',
        href: 'https://t.me/DSentrWhales'
      }
    ]
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/dsentr'
  }
]

export const MENU_HEIGHT = 64
export const MENU_ENTRY_HEIGHT = 48
export const SIDEBAR_WIDTH_FULL = 240
export const SIDEBAR_WIDTH_REDUCED = 56
