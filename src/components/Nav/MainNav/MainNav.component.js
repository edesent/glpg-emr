import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ViewGridOutline,
  UsersOutline,
  CalendarOutline,
  ChatOutline,
  LogoutOutline,
} from 'heroicons-react'
import logo from '../../../assets/images/logo.svg'
import { StyledHeader, Logo, Links, StyledLogout } from './MainNav.styles'

const MainNav = () => {
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">
          <img alt="Great Lakes Psychology Group" src={logo} />
        </Link>
      </Logo>
      <Links>
        <NavLink title="Dashboard" to="/dashboard">
          <ViewGridOutline size="32" />
        </NavLink>
        <NavLink title="Patients" to="/patients">
          <UsersOutline size="32" />
        </NavLink>
        <NavLink title="Schedule" to="/schedule">
          <CalendarOutline size="32" />
        </NavLink>
        <NavLink title="Messages" to="/messages">
          <ChatOutline size="32" />
        </NavLink>
      </Links>
      <StyledLogout>
        <LogoutOutline size="32" />
      </StyledLogout>
    </StyledHeader>
  )
}

export default MainNav
