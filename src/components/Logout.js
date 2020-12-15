import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Logout = ({ className, children }) => {
  const { setUserAuthenticated } = useContext(AppContext)
  const history = useHistory()

  return (
    <button
      className={className}
      onClick={() => {
        setUserAuthenticated(false)
        history.push('/')
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
