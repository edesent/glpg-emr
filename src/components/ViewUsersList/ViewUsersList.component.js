import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import { useRealmApp } from '../../context/RealmContext'
import { Links } from '../Login/Login.styles'

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

const ViewUsersList = () => {
  const app = useRealmApp()
  // eslint-disable-next-line no-underscore-dangle
  const { data, loading, error } = useQuery(getAllUserQueries)
  if (error) return 'Error...'
  if (loading) return 'Loading...'

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
      <Link title="Create User" to="/admin/users/new">
        Create User
      </Link>
    </Links>
  )

  const adminTableManagement = (
    <table>
      <thead>
        <tr>
          <th style={{ width: '25%', textAlign: 'left' }}>First Name</th>
          <th style={{ width: '25%', textAlign: 'left' }}>Last Name</th>
          <th style={{ width: '25%', textAlign: 'left' }}>Email</th>
          <th style={{ width: '25%', textAlign: 'left' }}></th>
        </tr>
      </thead>
      <tbody>{listUsers}</tbody>
    </table>
  )

  const isAdminUser = app.currentUser.customData.Role === 'Administrator'

  return (
    <>
      <div>{isAdminUser ? createUser : null}</div>
      <div>{isAdminUser ? adminTableManagement : null}</div>
    </>
  )
}

export default ViewUsersList
