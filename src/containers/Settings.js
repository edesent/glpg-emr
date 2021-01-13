import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { Submenu } from '../components/Submenu'
import { UpdateUserForm } from '../components/UpdateUserForm'
import { CreateUserForm } from '../components/CreateUserForm'
import { ManageProfilesForm } from '../components/Forms/ManageProfilesForm'

const SettingsPage = ({ match }) => {
  return (
    <Layout>
      <Submenu title="Settings" />
      {
        {
          updateuser: <UpdateUserForm match={match} />,
          manageprofiles: <ManageProfilesForm />,
          createuser: <CreateUserForm match={match} />,
        }[match?.params?.job]
      }
    </Layout>
  )
}

export default SettingsPage
SettingsPage.propTypes = {
  match: PropTypes.object,
}
