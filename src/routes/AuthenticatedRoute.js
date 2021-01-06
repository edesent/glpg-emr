import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useRealmApp } from '../context/RealmContext'

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation()
  // We need to access realm app
  const app = useRealmApp()
  return (
    <Route {...rest}>
      {app.userAuthenticated ? (
        children
      ) : (
        <Redirect to={`/?redirect=${pathname}${search}`} />
      )}
    </Route>
  )
}

AuthenticatedRoute.propTypes = {
  children: PropTypes.node,
}
