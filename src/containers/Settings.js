import React from 'react'
import Layout from '../components/layout'
import { Submenu } from '../components/Submenu'
import { CreateUserForm } from '../components/CreateUserForm'

const SettingsPage = () => {
  return (
    <Layout>
      <Submenu title="Settings" />
      <CreateUserForm />
    </Layout>
  )
}

export default SettingsPage
