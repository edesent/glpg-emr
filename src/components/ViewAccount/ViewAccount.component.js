import { useRealmApp } from '../../context/RealmContext'

import { ResetPasswordLink } from '../ResetPasswordLink'
import readUserById from '../../graphql/useReadUser'
import UserDetails from './UserProfile/UserProfile.component'

const ViewAccount = () => {
  const app = useRealmApp()

  const { _id: userId } = app.currentUser.customData

  const { readUserById: user } = readUserById(userId)

  if (user.loading) return 'Loading...'

  return (
    <>
      <div>
        <ResetPasswordLink />
      </div>
      <div>
        <UserDetails User={user.authorizationUser.authorizationUser} />
      </div>
    </>
  )
}

export default ViewAccount
