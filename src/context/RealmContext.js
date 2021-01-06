import { useState, useEffect, createContext, useContext } from 'react'
import * as Realm from 'realm-web'
import PropTypes from 'prop-types'

const RealmAppContext = createContext()

// We need a way to hook into realm app as needed
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
    