import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './containers/Login'
import DashboardPage from './containers/Dashboard'
import NotFound from './containers/NotFound'
import UnauthenticatedRoute from './UnauthenticatedRoute'
import AuthenticatedRoute from './AuthenticatedRoute'

export default function Routes() {
  return (
    <Switch>
      <UnauthenticatedRoute exact path="/">
        <LoginPage />
      </UnauthenticatedRoute>
      <AuthenticatedRoute component={DashboardPage} exact path="/dashboard" />
      <Route component={NotFound} />
    </Switch>
  )
}
