import { useQuery, gql } from '@apollo/client'
import React from 'react'
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

const ManageProfilesForm = () => {
  const { data, loading, error } = useQuery(getAllUserQueries)
  if (loading || error) return 'Loading...'

  const listUsers = data.authorizationUsers.map((user) => (
    <tr key={user}>
      <td>{user.FirstName}</td>
      <td>{user.LastName}</td>
      <td>{user.Email}</td>
      <td>
        <Links>
          <a href={`/settings/updateuser/${user.Email}`}>Manage Profile</a>
        </Links>
      </td>
    </tr>
  ))

  const createUser = (
    <div style={{ padding: '0px 0px 20px 0px' }}>
      <Links>
        <a href={`/settings/createuser`}>Create new User</a>
      </Links>
    </div>
  )

  const isAdminUser =
    data.authorizationUsers.length > 1 ||
    (data.authorizationUsers.length === 1 &&
      data.authorizationUsers.Role === 'Administrator')

  return (
    <>
      <div
        className="form-wrapper"
        style={{
          position: 'fixed',
          top: '90px',
          left: '400px',
          padding: '25px',
        }}
      >
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
      </div>
    </>
  )
}

export default ManageProfilesForm
