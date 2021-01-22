import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import ViewGroup from '../ViewGroup/ViewGroup.component'
import { useRealmApp } from '../../../context/RealmContext'
import { Links } from '../../Login/Login.styles'
import { ResetPasswordLink } from '../../ResetPasswordLink'

const getAllUserQueries = gql`
  query {
    authorizationUsers {
      Authorization {
        Groups {
          Name
          Desc
          Permissions {
            _id
            name
            description
          }
        }
      }
      FirstName
      LastName
      Email
      MobilePhone
      Role
      _id
    }
  }
`

const ManageAccountsForm = () => {
  const app = useRealmApp()
  const { data, loading, error } = useQuery(getAllUserQueries)
  const email = app.currentUser.profile.email.toLowerCase()

  if (loading || error) return 'Loading...'

  const [thisUser] = data.authorizationUsers.filter(
    ({ Email }) => Email === email
  )
  const [thisGroup] = thisUser?.Authorization?.Groups

  const listUsers = data.authorizationUsers.map(
    ({ _id: id, FirstName, LastName, Email }) => (
      <tr key={id}>
        <td>{FirstName}</td>
        <td>{LastName}</td>
        <td>{Email}</td>
        <td>
          <Links>
            <Link title="Activity" to={`/account/updateuser/${Email}`}>
              Manage Account
            </Link>
          </Links>
        </td>
      </tr>
    )
  )

  const createUser = (
    <Links>
      <Link title="Create User" to={`/admin/users/new`}>
        Create User
      </Link>
    </Links>
  )

  const isAdminUser =
    data.authorizationUsers.length > 1 ||
    (data.authorizationUsers.length === 1 &&
      data.authorizationUsers.Role === 'Administrator')

  return (
    <>
      <div>
        {isAdminUser ? createUser : null}
        <ResetPasswordLink />
      </div>
      <div>
        <ViewGroup Group={thisGroup} />
      </div>
      <table>
        <tr>
          <th style={{ width: '25%', textAlign: 'left' }}>First Name</th>
          <th style={{ width: '25%', textAlign: 'left' }}>Last Name</th>
          <th style={{ width: '25%', textAlign: 'left' }}>Email</th>
          <th style={{ width: '25%', textAlign: 'left' }}></th>
        </tr>
        {listUsers}
      </table>
    </>
  )
}

export default ManageAccountsForm
