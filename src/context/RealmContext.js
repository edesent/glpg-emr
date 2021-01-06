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
