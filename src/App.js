import React from 'react'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { RealmAppProvider } from './context/RealmContext'
import { RealmApolloProvider } from './context/ApolloContext'
import { UserAuth } from './context/UserAuthContext'
import { UseAppSettings } from './context/AppContext'
import Routes from './routes/Routes'
import GlobalStyle from './assets/styles/globalStyles'

// sentry options
Sentry.init({
  environment: process.env.NODE_ENV,
  dsn:
    'https://2d106614b2614ccd92c72b0e544c5b6f@o469068.ingest.sentry.io/5592808',
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

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
              <UseAppSettings>
                <Routes />
              </UseAppSettings>
            </RealmApolloProvider>
          </UserAuth>
        </RealmAppProvider>
      </AlertProvider>
    </>
  )
}

export default App
