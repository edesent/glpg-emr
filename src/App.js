import React from 'react'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { RealmAppProvider } from './context/RealmContext'
import { RealmApolloProvider } from './context/ApolloContext'
import { UserAuth } from './context/UserAuthContext'
import Routes from './routes/Routes'
import GlobalStyle from './assets/styles/globalStyles'

// alert options
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
}

function App() {
  const APP_ID = process.env.REACT_APP_REALMAPP

  /** Notes on global wrappers
   * E.Desent 1.6.2021
   * We need a style throughout the app ie: <GlobalStyle
   * We need access to Realm App throughout the app <RealmAppProvider see context/RealmContext.js
   * We need access to GraphQl throughout the app <RealmApolloProvider
   * To keep code out of the app.js I created an Auth Context that basically contains what was in app.js
   * */

  return (
    <>
      <GlobalStyle />
      <AlertProvider template={AlertTemplate} {...options}>
        <RealmAppProvider appId={APP_ID}>
          <UserAuth>
            <RealmApolloProvider>
              <Routes />
            </RealmApolloProvider>
          </UserAuth>
        </RealmAppProvider>
      </AlertProvider>
    </>
  )
}

export default App
