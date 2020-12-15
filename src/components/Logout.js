import React from 'react'
import PropTypes from 'prop-types'
import { useAppContext } from '../context/AppContext'

const Logout = ({ className, children }) => {
  const { setUserAuthenticated } = useAppContext()

  return (
    <button
      className={className}
      onClick={() => {
        setUserAuthenticated(false)
      }}
    >
      {children}
    </button>
  )
}

Logout.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Logout
