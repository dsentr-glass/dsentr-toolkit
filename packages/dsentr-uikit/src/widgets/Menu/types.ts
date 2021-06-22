import { Colors } from '../../theme/types'
import { Login } from '../WalletModal/types'

export interface Language {
  code: string
  language: string
  locale: string
}

export interface Profile {
  username?: string
  image?: string
  profileLink: string
  noProfileLink: string
  showPip?: boolean
}

export interface PushedProps {
  isPushed: boolean
  pushNav: (isPushed: boolean) => void
}

export interface NavTheme {
  background: string
}

export interface LinkStatus {
  text: string
  color: keyof Colors
}

export interface MenuSubEntry {
  label: string
  href: string
  calloutClass?: string
  status?: LinkStatus
}

export interface MenuEntry {
  label: string
  icon: string
  items?: MenuSubEntry[]
  href?: string
  calloutClass?: string
  initialOpenState?: boolean
  status?: LinkStatus
}

export interface PanelProps {
  isDark: boolean
  toggleTheme: (isDark: boolean) => void
  glassPriceUsd?: number
  currentLang: string
  langs: Language[]
  setLang: (lang: Language) => void
  links: MenuEntry[]
}

export interface MenuProps extends NavProps {}

export interface NavProps extends PanelProps {
  account?: string | null
  login: Login
  profile?: Profile | null
  logout: () => void
  children?: any | null
}
