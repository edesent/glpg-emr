import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { SubNav } from '../components/Nav/SubNav'
import { UpdateUserForm } from '../components/Forms/UpdateUser'
import { CreateUserForm } from '../components/Forms/CreateUser'
import { ManageAccountsForm } from '../components/Forms/ManageAccounts'
import ResetPasswordLink from '../components/ResetPasswordLink/ResetPasswordLink.component'

const AccountPage = ({ match }) => {
  const path = '/account'
  return (
    <Layout>
      <SubNav title="Account Settings">
        <NavLink title="Account" to={path}>
          Account
        </NavLink>
        <NavLink title="Schedule" to="/account">
          Schedule
        </NavLink>
        <NavLink title="Activity" to="/account">
          Activity
        </NavLink>
        <ResetPasswordLink />
        <NavLink title="My Account" to={`${path}/createuser`}>
          Create User
        </NavLink>
      </SubNav>
      <div className="container-wrapper">
        {match.path === path ? (
          <ManageAccountsForm />
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

AccountPage.propTypes = {
  match: PropTypes.object,
}

export default AccountPage
