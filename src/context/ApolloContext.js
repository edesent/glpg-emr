import { useState, useEffect } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import PropTypes from 'prop-types'
import { useRealmApp } from './RealmContext'

const createRealmApolloClient = (app) => {
  const link = new HttpLink({
    // TODO: Add your Realm App ID to the uri link to connect your app.
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${app.id}/graphql`,
    // A custom fetch handler adds the logged in user's access token to GraphQL requests
    fetch: async (uri, options) => {
      if (!app.currentUser) {
        throw new Error(`Must be logged in to use the GraphQL API`)
      }
      // Refreshing a user's custom data also refreshes their access token
      await app.currentUser.refreshCustomData()

      options.headers.Authorization = `Bearer ${app.currentUser.accessToken}` // eslint-disable-line no-param-reassign
      return fetch(uri, options)
    },
  })

  const cache = new InMemoryCache()

  return new ApolloClient({ link, cache })
}

export const RealmApolloProvider = ({ children }) => {
  const app = useRealmApp()
  const [client, setClient] = useState(createRealmApolloClient(app))
  useEffect(() => {
    setClient(createRealmApolloClient(app))
  }, [app])
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
RealmApolloProvider.propTypes = {
  children: PropTypes.node,
}
