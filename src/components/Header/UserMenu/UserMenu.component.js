import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  UserOutline,
  ChevronDown,
  CogOutline,
  LogoutOutline,
} from 'heroicons-react'
import { useRealmApp } from '../../../context/RealmContext'
import {
  StyledUserMenu,
  Menu,
  Avatar,
  Dropdown,
  StyledLogout,
} from './UserMenu.styles'

const UserMenu = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const app = useRealmApp()
  const { FirstName, LastName, Role } = app?.currentUser?.customData
  // console.log(app.currentUser.customData)

  return (
    <StyledUserMenu>
      <Menu
        onClick={() => {
          setUserMenuOpen(!userMenuOpen)
        }}
      >
        <Avatar>
          {/* 👇 TODO: This SVG will be a fallback for users that do not have specified avatars */}
          <UserOutline size="24" />
        </Avatar>
        <div className="chevron">
          <ChevronDown size="12" />
        </div>
      </Menu>
      <Dropdown className={userMenuOpen ? `is-open` : ``}>
        <div className="role-name">
          <span>{Role}</span>
          {FirstName}
          {` `}
          {LastName}
        </div>

        <Link title="My Account" to="/account">
          <CogOutline size="18" />
          <span>Settings</span>
        </Link>
        <StyledLogout>
          <LogoutOutline size="18" />
          <span>Logout</span>
        </StyledLogout>
      </Dropdown>
    </StyledUserMenu>
  )
}

export default UserMenu
