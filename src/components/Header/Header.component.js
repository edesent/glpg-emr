import React from 'react'
import { UserMenu } from '../UserMenu'
import { StyledHeader } from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <input type="text" />
      <UserMenu />
    </StyledHeader>
  )
}

export default Header
