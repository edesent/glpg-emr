import React from 'react'
import PropTypes from 'prop-types'
import { useAppContext } from '../context/AppContext'

const Logout = ({ className, children }) => {
  const { app, setUserAuthenticated } = useAppContext()

  async function logOut() {
    try {
      await app.currentUser?.logOut()
      setUserAuthenticated(false)
    } catch (error) {
      console.error('crap!')
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
