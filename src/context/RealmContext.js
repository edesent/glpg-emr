import { useState, useEffect, createContext, useContext } from 'react'
import * as Realm from 'realm-web'
import PropTypes from 'prop-types'

// We need a react context for realm
const RealmAppContext = createContext()

// We need a way to hook into realm app as needed in other componets
export const useRealmApp = () => {
  const app = useContext(RealmAppContext)
  if (!app) {
    throw new Error(
      `You must call useRealmApp() inside of a <RealmAppProvider />`
    )
  }
  return app
}
// We need to setup functions and variables inside realm app
export const RealmAppProvider = ({ appId, children }) => {
  const [app, setApp] = useState(new Realm.App(appId))
  useEffect(() => {
    setApp(new Realm.App(appId))
  }, [appId])
  // we need to have access to the current logged in user
  const [currentUser, setCurrentUser] = useState(app.currentUser)
  // we want to have a simple true/false variable if user is logged in
  const [userAuthenticated, setUserAuthenticated] = useState(false)

  async function logIn(credentials) {
    await app.logIn(credentials)
    // We need to sync app.currentUser to currentUser
    setCurrentUser(app.currentUser)
    await app.currentUser.refreshCustomData()
    // We need to sync authenticated user Bool
    setUserAuthenticated(true)
  }
  async function logOut() {
    // Log out the currently active user
    await app.currentUser?.logOut()
    setCurrentUser()
    setUserAuthenticated(false)
  }
  // We want to send all functions to deeper parts of the app
  const wrapped = {
    ...app,
    currentUser,
    setCurrentUser,
    userAuthenticated,
    setUserAuthenticated,
    logIn,
    logOut,
    settings: {
      IdleTimeout: process.env.REACT_APP_IDLETIMEOUT,
    },
  }
  return (
    <RealmAppContext.Provider value={wrapped}>
      {children}
    </RealmAppContext.Provider>
  )
}
// We dont want to be flagged by prettier
RealmAppProvider.propTypes = {
  children: PropTypes.node,
  appId: PropTypes.string.isRequired,
}
