import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
// import { useAppContext } from '../context/AppContext'
import { useRealmApp } from '../context/RealmContext'

export default function UnauthenticatedRoute({ children, ...rest }) {
  const app = useRealmApp()
  return (
    <Route {...rest}>
      {!app.currentUser ? children : <Redirect to="/dashboard" />}
    </Route>
  )
}

UnauthenticatedRoute.propTypes = {
  children: PropTypes.node,
}
