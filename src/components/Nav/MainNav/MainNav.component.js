import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ViewGridOutline,
  UsersOutline,
  CalendarOutline,
  ChatOutline,
  LogoutOutline,
} from 'heroicons-react'
import logo from '../../../assets/images/logo-white.svg'
import { StyledNav, Logo, Links, StyledLogout } from './MainNav.styles'

const MainNav = () => {
  return (
    <StyledNav>
      <Logo>
        <Link to="/">
          <img alt="Great Lakes Psychology Group" src={logo} />
        </Link>
      </Logo>
      <Links>
        <NavLink title="Dashboard" to="/dashboard">
          <ViewGridOutline size="24" />
        </NavLink>
        <NavLink title="Patients" to="/patients">
          <UsersOutline size="24" />
        </NavLink>
        <NavLink title="Schedule" to="/schedule">
          <CalendarOutline size="24" />
        </NavLink>
        <NavLink title="Messages" to="/messages">
          <ChatOutline size="24" />
        </NavLink>
      </Links>
      <StyledLogout>
        <LogoutOutline size="24" />
      </StyledLogout>
    </StyledNav>
  )
}

export default MainNav
