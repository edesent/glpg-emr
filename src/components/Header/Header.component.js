import React from 'react'
import { UserMenu } from '../UserMenu'
import { StyledHeader } from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <UserMenu />
    </StyledHeader>
  )
}

export default Header
