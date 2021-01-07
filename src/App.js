import React from 'react'
import { RealmAppProvider } from './context/RealmContext'
import { RealmApolloProvider } from './context/ApolloContext'
import { UserAuth } from './context/UserAuthContext'
import Routes from './routes/Routes'
import GlobalStyle from './assets/styles/globalStyles'

function App() {
  const APP_ID = 'ehr_realm_app_test-jquik'

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
      <RealmAppProvider appId={APP_ID}>
        <UserAuth>
          <RealmApolloProvider>
            <Routes />
          </RealmApolloProvider>
        </UserAuth>
      </RealmAppProvider>
    </>
  )
}

export default App
