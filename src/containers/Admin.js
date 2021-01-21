import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { SubNav } from '../components/Nav/SubNav'
import { CreateUserForm } from '../components/Forms/CreateUser'
import { ManageAccountsForm } from '../components/Forms/ManageAccounts'

const AdminPage = ({ match }) => {
  const path = '/admin'
  return (
    <Layout>
      <SubNav title="Administration">
        <NavLink title="Manage Users" to={`${path}/users`}>
          Manage Users
        </NavLink>
        <NavLink title="Create User" to={`${path}/users/new`}>
          Create User
        </NavLink>
      </SubNav>
      <div className="container-wrapper">
        {match.path === path ? (
          <h2>Admin Dashboard Placeholder</h2>
        ) : (
          <>
            {
              {
                users: <ManageAccountsForm />,
                new: <CreateUserForm match={match} />,
              }[match?.params?.job]
            }
          </>
        )}
      </div>
    </Layout>
  )
}

AdminPage.propTypes = {
  match: PropTypes.object,
}

export default AdminPage
