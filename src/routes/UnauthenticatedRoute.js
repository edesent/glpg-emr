import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useRealmApp } from '../context/RealmContext'

export default function UnauthenticatedRoute({ children, ...rest }) {
  const app = useRealmApp()
  return (
    <Route {...rest}>
      {!app.userAuthenticated ? children : <Redirect to="/dashboard" />}
    </Route>
  )
}

UnauthenticatedRoute.propTypes = {
  children: PropTypes.node,
}
