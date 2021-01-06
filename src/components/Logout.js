import React from 'react'
import PropTypes from 'prop-types'
import { useRealmApp } from '../context/RealmContext'

const Logout = ({ className, children }) => {
  const app = useRealmApp()

  async function logOut() {
    try {
      await app.currentUser?.logOut()
      app.setUserAuthenticated(false)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <button
      className={className}
      onClick={() => {
        logOut()
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
