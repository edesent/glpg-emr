import { useState, useEffect, createContext, useContext } from 'react'
import * as Realm from 'realm-web'
import PropTypes from 'prop-types'

const RealmAppContext = createContext()

export const useRealmApp = () => {
  const app = useContext(RealmAppContext)
  if (!app) {
    throw new Error(
      `You must call useRealmApp() inside of a <RealmAppProvider />`
    )
  }
  return app
}

export const RealmAppProvider = ({ appId, children }) => {
  const [app, setApp] = useState(new Realm.App(appId))
  useEffect(() => {
    setApp(new Realm.App(appId))
  }, [appId])

  const [currentUser, setCurrentUser] = useState(app.currentUser)
  const [userAuthenticated, setUserAuthenticated] = useState(false)

  async function logIn(credentials) {
    await app.logIn(credentials)
    // If successful, app.currentUser is the user that just logged in
    setCurrentUser(app.currentUser)
    setUserAuthenticated(true)
  }
  async function logOut() {
    // Log out the currently active user
    await app.currentUser?.logOut()
    setCurrentUser()
    setUserAuthenticated(false)
  }

  const wrapped = { ...app, currentUser, userAuthenticated, logIn, logOut }
  return (
    <RealmAppContext.Provider value={wrapped}>
      {children}
    </RealmAppContext.Provider>
  )
}
RealmAppProvider.propTypes = {
  children: PropTypes.node,
  appId: PropTypes.string.isRequired,
}
