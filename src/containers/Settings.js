import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { SubNav } from '../components/Nav/SubNav'
import { UpdateUserForm } from '../components/UpdateUserForm'
import { CreateUserForm } from '../components/CreateUserForm'
import { ManageProfilesForm } from '../components/Forms/ManageProfilesForm'

const SettingsPage = ({ match }) => {
  const path = '/settings'
  return (
    <Layout>
      <SubNav title="Settings">
        <NavLink title="My Account" to={path}>
          Account
        </NavLink>
        <a href="/settings">Schedule</a>
        <a href="/settings">Activity</a>
        <a href="/settings">Reset Password</a>
        <NavLink title="My Account" to={`${path}/createuser`}>
          Create User
        </NavLink>
      </SubNav>
      <div className="container-wrapper">
        {match.path === path ? (
          <ManageProfilesForm />
        ) : (
          <>
            {
              {
                updateuser: <UpdateUserForm match={match} />,
                createuser: <CreateUserForm match={match} />,
              }[match?.params?.job]
            }
          </>
        )}
      </div>
    </Layout>
  )
}

export default SettingsPage
SettingsPage.propTypes = {
  match: PropTypes.object,
}
