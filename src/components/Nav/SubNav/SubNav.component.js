import React from 'react'
import PropTypes from 'prop-types'
import { StyledNav } from './SubNav.styles'

const SubNav = ({ children }) => {
  return <StyledNav>{children}</StyledNav>
}

SubNav.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default SubNav
