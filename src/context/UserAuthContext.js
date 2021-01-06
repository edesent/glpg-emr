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
    // We need a function that triggers on pageload then ends on reply from RealmApp
    async function onLoad() {
      try {
          await app.currentUser
          if (app?.currentUser) { 
            setUserAuthenticated(true)
          }
        // console.log(app.currentUser)
      } catch (error) {
        if (error) {
          // eslint-disable-next-line no-alert
          setUserAuthenticated(false)
          alert(error)
        }
      }
      setUserAuthenticating(false)
    }