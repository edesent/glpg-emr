import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import { Links } from '../../Login/Login.styles'

const getAllUserQueries = gql`
  query {
    authorizationUsers {
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
  const { data, loading, error } = useQuery(getAllUserQueries)
  if (loading || error) return 'Loading...'

  const listUsers = data.authorizationUsers.map((user) => (
    <tr key={user}>
      <td>{user.FirstName}</td>
      <td>{user.LastName}</td>
      <td>{user.Email}</td>
      <td>
        <Links>
          <Link title="Activity" to={`/account/updateuser/${user.Email}`}>
            Manage Account
          </Link>
        </Links>
      </td>
    </tr>
  ))

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
      {isAdminUser ? createUser : null}
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
