import { useState, useEffect } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import PropTypes from 'prop-types'
import { useRealmApp } from './RealmContext'

// We need a function that handles apollo requests
const createRealmApolloClient = (app) => {
  const link = new HttpLink({
    // We need the url for the correct app grabbing that from realmApp
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
    // we need a function that uses user details to request with
    fetch: async (uri, options) => {
      if (!app.currentUser) {
        throw new Error(`Must be logged in to use the GraphQL API`)
      }
      // Refreshing a user's custom data also refreshes their access token
      await app.currentUser.refreshCustomData()
      // GraphQL Uses a bearer token to authenticate against the logged in user
      options.headers.Authorization = `Bearer ${app.currentUser.accessToken}` // eslint-disable-line no-param-reassign

      return fetch(uri, options)
    },
  })
  // Do we need cache TBD
  const cache = new InMemoryCache()

  return new ApolloClient({ link, cache })
}
// We need to build out a wrapper
export const RealmApolloProvider = ({ children }) => {
  // We need access to RealmApp
  const app = useRealmApp()
  // We need the apollo client in react state
  const [client, setClient] = useState(createRealmApolloClient(app))

  useEffect(() => {
    setClient(createRealmApolloClient(app))
  }, [app])
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

RealmApolloProvider.propTypes = {
  children: PropTypes.node,
}
