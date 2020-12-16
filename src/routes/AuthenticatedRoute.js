import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, useLocation } from 'react-router-dom'
// import { useAppContext } from '../context/AppContext'
import { useRealmApp } from '../context/RealmContext'

export default function AuthenticatedRoute({ children, ...rest }) {
  const app = useRealmApp()
  const { pathname, search } = useLocation()
  return (
    <Route {...rest}>
      {app.currentUser ? (
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
