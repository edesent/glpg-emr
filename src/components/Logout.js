import React from 'react'
import PropTypes from 'prop-types'
import { useRealmApp } from '../context/RealmContext'

const Logout = ({ className, children }) => {
  const app = useRealmApp()

  return (
    <button
      className={className}
      onClick={() => {
        app.logOut()
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
