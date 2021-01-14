import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { SubNav } from '../components/Nav/SubNav'
import { UpdateUserForm } from '../components/UpdateUserForm'
import { CreateUserForm } from '../components/CreateUserForm'
import { ManageProfilesForm } from '../components/Forms/ManageProfilesForm'

const SettingsPage = ({ match }) => {
  return (
    <Layout>
      <SubNav title="Settings">
        <NavLink title="My Account" to="/settings/manageprofiles">
          Account
        </NavLink>
        <a href="/settings">Schedule</a>
        <a href="/settings">Activity</a>
        <a href="/settings">Reset Password</a>
      </SubNav>
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
