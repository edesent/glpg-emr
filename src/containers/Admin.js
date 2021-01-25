import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'
import { CreateUserForm } from '../components/Forms/CreateUser'
import { ViewUsersList } from '../components/ViewUsersList'

const AdminPage = ({ match }) => {
  const path = '/admin'
  return (
    <Layout>
      <Header title="Administration">
        <SubNav>
          <NavLink title="Manage Users" to={path}>
            Overview
          </NavLink>
          <NavLink title="Manage Users" to={`${path}/users`}>
            Manage Users
          </NavLink>
          <NavLink title="Create User" to={`${path}/users/new`}>
            Create User
          </NavLink>
        </SubNav>
      </Header>
      <div className="container-wrapper">
        {match.path === path ? (
          <h2>Admin Dashboard Placeholder</h2>
        ) : (
          <>
            {
              {
                users: <ViewUsersList />,
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
