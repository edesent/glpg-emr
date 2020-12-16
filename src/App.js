import React from 'react'
// import * as Realm from 'realm-web'
// import { AppContext } from './context/AppContext'
import Routes from './routes/Routes'
import { RealmAppProvider } from './context/RealmContext'
import { RealmApolloProvider } from './context/ApolloContext'
import { UserAuth } from './context/UserAuthContext'
import GlobalStyle from './assets/styles/globalStyles'

function App() {
  const APP_ID = 'ehr_realm_app-lfyfr'
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
