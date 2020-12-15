import React, { useState, useEffect } from 'react'
import * as Realm from 'realm-web'
import { useHistory } from 'react-router-dom'
import AppContext from './context/AppContext'
import Routes from './Routes'
import GlobalStyle from './assets/styles/globalStyles'

function App() {
  const REALM_APP_ID = 'ehr_realm_app-lfyfr'
  const app = new Realm.App({ id: REALM_APP_ID })

  const [currentUser, setCurrentUser] = useState()
  const [userAuthenticating, setUserAuthenticating] = useState(true)
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const history = useHistory()

  async function onLoad() {
    try {
      await app.currentUser
      setUserAuthenticated(true)
      history.push('/dashboard')
    } catch (error) {
      if (error !== 'No current user') {
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
    <>
      <GlobalStyle />
      {!userAuthenticating && (
        <AppContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            userAuthenticated,
            setUserAuthenticated,
          }}
        >
          <Routes />
        </AppContext.Provider>
      )}
    </>
  )
}

export default App
