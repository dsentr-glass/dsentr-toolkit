import React from 'react'
import Button from '../../../components/Button/Button'
import { useWalletModal } from '../../WalletModal'
import { Login } from '../../WalletModal/types'

interface Props {
  account?: string | null
  login: Login
  logout: () => void
}

const UserBlock: React.FC<Props> = ({ account, login, logout }: Props) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const accountEllipsis = account != null ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : ''
  return (
    <div>
      {account != null ? (
        <Button
          scale='sm'
          variant='tertiary'
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale='sm'
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect
        </Button>
      )}
    </div>
  )
}

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps === nextProps)
