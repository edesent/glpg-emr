import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'
import { UpdateUserForm } from '../components/Forms/UpdateUser'
import { ViewAccount } from '../components/ViewAccount'

const AccountPage = ({ match }) => {
  const path = '/account'
  return (
    <Layout>
      <Header title="Account Settings">
        <SubNav>
          <NavLink title="Account" to={path}>
            Account
          </NavLink>
          <NavLink title="Schedule" to="/account">
            Schedule
          </NavLink>
          <NavLink title="Activity" to="/account">
            Activity
          </NavLink>
        </SubNav>
      </Header>
      <div className="container-wrapper">
        {match.path === path ? (
          <ViewAccount />
        ) : (
          <>
            {
              {
                updateuser: <UpdateUserForm match={match} />,
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
