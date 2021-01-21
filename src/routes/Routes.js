import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/Login'
import DashboardPage from '../containers/Dashboard'
import PatientsPage from '../containers/Patients'
import SchedulePage from '../containers/Schedule'
import AccountPage from '../containers/Account'
import AdminPage from '../containers/Admin'
import MessagesPage from '../containers/Messages'
import NotFound from '../containers/NotFound'
import UnauthenticatedRoute from './UnauthenticatedRoute'
import AuthenticatedRoute from './AuthenticatedRoute'

export default function Routes() {
  return (
    <Switch>
      <UnauthenticatedRoute component={LoginPage} exact path="/" />
      <AuthenticatedRoute component={DashboardPage} exact path="/dashboard" />
      <AuthenticatedRoute component={PatientsPage} exact path="/patients" />
      <AuthenticatedRoute component={SchedulePage} exact path="/schedule" />
      <AuthenticatedRoute component={AccountPage} exact path="/account" />
      <AuthenticatedRoute
        component={AccountPage}
        path="/account/:job/:identifier?"
      />
      <AuthenticatedRoute component={AdminPage} exact path="/admin" />
      <AuthenticatedRoute
        component={AdminPage}
        path="/admin/:job/:identifier?"
      />
      <AuthenticatedRoute component={MessagesPage} exact path="/messages" />
      <Route component={NotFound} />
    </Switch>
  )
}
