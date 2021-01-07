import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/Login'
import DashboardPage from '../containers/Dashboard'
import PatientsPage from '../containers/Patients'
import SchedulePage from '../containers/Schedule'
import SettingsPage from '../containers/Settings'
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
      <AuthenticatedRoute component={SettingsPage} exact path="/settings" />
      <AuthenticatedRoute component={MessagesPage} exact path="/messages" />
      <Route component={NotFound} />
    </Switch>
  )
}
