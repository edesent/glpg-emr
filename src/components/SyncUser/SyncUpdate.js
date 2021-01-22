import useUsers from '../../graphql/useUsers'
import useReadUser from '../../graphql/useReadUser'
import { useRealmApp } from '../../context/RealmContext'

const SyncUpdateProfile = ({ userId, email }) => {
  console.log(userId, email)
  const app = useRealmApp()
  const { updateUser } = useUsers()
  const { readUser } = useReadUser(email)
  if (readUser.authorizationUser) {
    const { _id: pId } = readUser.authorizationUser
    const userData = {
      id: pId,
      data: {
        AppUserId: userId,
      },
    }
    updateUser(userData)
    app.currentUser.refreshCustomData()

    // Todo: Send to model
    return 'Profile Updated...'
  }
  return null
}
export default SyncUpdateProfile
