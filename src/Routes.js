import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './containers/Login'
import DashboardPage from './containers/Dashboard'
import NotFound from './containers/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/dashboard">
        <DashboardPage />
      </Route>
      <Route component={NotFound} />
    </Switch>
  )
}
