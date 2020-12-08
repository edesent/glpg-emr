import React from 'react'
import { UserMenu } from '../UserMenu'

const Header = () => {
  return (
    <header
      className="grid grid-cols-2 items-center"
      style={{ padding: `0 50px 0 440px`, height: `90px` }}
    >
      <input type="text" />
      <UserMenu />
    </header>
  )
}

export default Header
