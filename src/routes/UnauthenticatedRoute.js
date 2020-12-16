import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function UnauthenticatedRoute({ children, ...rest }) {
  const { userAuthenticated } = useAppContext()
  return (
    <Route {...rest}>
      {!userAuthenticated ? children : <Redirect to="/dashboard" />}
    </Route>
  )
}

UnauthenticatedRoute.propTypes = {
  children: PropTypes.node,
}
