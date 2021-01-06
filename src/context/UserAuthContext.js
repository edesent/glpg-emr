import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useRealmApp } from './RealmContext'

// We need a context api for to allow/block access to the app
const UserAuthContext = createContext()

export const UserAuth = ({ children }) => {
  // We need to have a loading indicator
  const [userAuthenticating, setUserAuthenticating] = useState(true)
  // We need to bring in realmApp
  const app = useRealmApp()
  // We need a function that triggers on pageload then ends on reply from RealmApp Copied from Tom
  async function onLoad() {
    try {
      await app.currentUser
      // console.log(app.currentUser)
      if (app.currentUser) {
        app.setUserAuthenticated(true)
      }
    } catch (error) {
      if (error) {
        // eslint-disable-next-line no-alert
        // We will probably need a full error handling suite
        app.setUserAuthenticated(false)
        // eslint-disable-next-line no-alert
        alert(error)
      }
    }
    setUserAuthenticating(false)
  }
  useEffect(() => {
    onLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <UserAuthContext.Provider value={userAuthenticating}>
      {!userAuthenticating && children}
    </UserAuthContext.Provider>
  )
}
UserAuth.propTypes = {
  children: PropTypes.node,
}
