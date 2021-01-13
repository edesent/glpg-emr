import React from 'react'
import PropTypes from 'prop-types'
import { StyledSubmenu, SubLinks } from './Submenu.styles'

const Submenu = ({ title }) => {
  return (
    <StyledSubmenu>
      <h1>{title}</h1>
      <SubLinks>
        <a href="/settings/manageprofiles">Manage Profiles</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
      </SubLinks>
    </StyledSubmenu>
  )
}

Submenu.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Submenu
