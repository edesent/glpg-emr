import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAppContext } from './context/AppContext'

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation()
  const { userAuthenticated } = useAppContext()
  return (
    <Route {...rest}>
      {userAuthenticated ? (
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
