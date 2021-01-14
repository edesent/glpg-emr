import React from 'react'
import PropTypes from 'prop-types'
import { StyledSubNav, SubLinks } from './SubNav.styles'

const SubNav = ({ title, children }) => {
  return (
    <StyledSubNav>
      <h1>{title}</h1>
      <SubLinks>{children}</SubLinks>
    </StyledSubNav>
  )
}

SubNav.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SubNav
