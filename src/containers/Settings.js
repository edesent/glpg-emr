import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { Submenu } from '../components/Submenu'
import { UpdateUserForm } from '../components/UpdateUserForm'
import { CreateUserForm } from '../components/CreateUserForm'

const SettingsPage = ({ match }) => {
  return (
    <Layout>
      <Submenu title="Settings" />
      {match?.params?.job === 'updateuser' ? (
        <UpdateUserForm match={match} />
      ) : (
        <CreateUserForm match={match} />
      )}
    </Layout>
  )
}

export default SettingsPage
SettingsPage.propTypes = {
  match: PropTypes.object,
}
