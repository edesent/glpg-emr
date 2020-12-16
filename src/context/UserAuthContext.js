import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useRealmApp } from './RealmContext'

const UserAuthContext = createContext()

export const UserAuth = ({ children }) => {
  const [userAuthenticating, setUserAuthenticating] = useState(true)
  const app = useRealmApp()
  async function onLoad() {
    try {
      await app.currentUser
      // eslint-disable-next-line no-unused-expressions
      // app?.currentUser && setUserAuthenticated(true)
      // console.log(app.currentUser)
    } catch (error) {
      if (error) {
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
