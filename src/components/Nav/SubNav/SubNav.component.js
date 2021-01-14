import React from 'react'
import PropTypes from 'prop-types'
import { StyledSubNav, SubLinks } from './SubNav.styles'

const SubNav = ({ title }) => {
  return (
    <StyledSubNav>
      <h1>{title}</h1>
      <SubLinks>
        <a href="/settings/manageprofiles">Manage Profiles</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
      </SubLinks>
    </StyledSubNav>
  )
}

SubNav.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubNav
