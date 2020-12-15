import React, { useState } from 'react'
import { StyledUserMenu, Menu, Avatar, Dropdown } from './UserMenu.styles'

const UserMenu = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  return (
    <StyledUserMenu>
      <Menu
        onClick={() => {
          setUserMenuOpen(!userMenuOpen)
        }}
      >
        <Avatar>
          {/* 👇 TODO: This SVG will be a fallback for users that do not have specified avatars */}
          <svg
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Avatar>

        <div className="role-name">
          <span>Developer</span> Tom G.
        </div>

        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </Menu>
      <Dropdown className={userMenuOpen ? `is-open` : ``}>Beep boop</Dropdown>
    </StyledUserMenu>
  )
}

export default UserMenu
