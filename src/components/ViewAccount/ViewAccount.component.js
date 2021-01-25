import { useRealmApp } from '../../context/RealmContext'

import { ResetPasswordLink } from '../ResetPasswordLink'
import readUserById from '../../graphql/useReadUser'
import UserDetails from './UserProfile/UserProfile.component'

const ViewAccount = () => {
  const app = useRealmApp()
  // eslint-disable-next-line no-underscore-dangle

  // eslint-disable-next-line no-underscore-dangle
  const userId = app.currentUser.customData._id

  const { readUserById: user } = readUserById(userId)

  if (user.loading) return 'Loading...'

  // const [thisUser] = authorizationUser.authorizationUsers.filter(
  //   ({ Email }) => Email === email
  // )

  // const listUsers = authorizationUser.authorizationUsers.map(
  //   ({ _id: id, FirstName, LastName, Email }) => (
  //     <tr key={id}>
  //       <td>{FirstName}</td>
  //       <td>{LastName}</td>
  //       <td>{Email}</td>
  //       <td>
  //         <Links>
  //           <Link title="Activity" to={`/account/updateuser/${Email}`}>
  //             Manage Account
  //           </Link>
  //         </Links>
  //       </td>
  //     </tr>
  //   )
  // )

  // const createUser = (
  //   <Links>
  //     <Link title="Create User" to={`/admin/users/new`}>
  //       Create User
  //     </Link>
  //   </Links>
  // )

  // const adminTableManagement = (
  //   <table>
  //     <tr>
  //       <th style={{ width: '25%', textAlign: 'left' }}>First Name</th>
  //       <th style={{ width: '25%', textAlign: 'left' }}>Last Name</th>
  //       <th style={{ width: '25%', textAlign: 'left' }}>Email</th>
  //       <th style={{ width: '25%', textAlign: 'left' }}></th>
  //     </tr>
  //     {listUsers}
  //   </table>
  // )

  // const isAdminUser =
  //   authorizationUser.authorizationUser.length > 1 ||
  //   (authorizationUser.authorizationUser.length === 1 &&
  //     authorizationUser.authorizationUser.Role === 'Administrator')

  return (
    <>
      <div>
        {/* {isAdminUser ? createUser : null} */}
        <ResetPasswordLink />
      </div>
      <div>
        <UserDetails User={user.authorizationUser.authorizationUser} />
      </div>
      {/* {isAdminUser ? adminTableManagement : null} */}
    </>
  )
}

export default ViewAccount
