import { useRealmApp } from '../context/RealmContext'
import useReadUser from '../graphql/useReadUser'
import useUsers from '../graphql/useUsers'

const SyncUserProfile = () => {
  const app = useRealmApp()
  const { updateUser } = useUsers()
  const { email: Email } = app?.currentUser?.customData
  const { _id: UserId } = app?.currentUser

  const connectUser = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { readUser } = useReadUser(app?.currentUser.profile.email)
    if (readUser) {
      const { _id: id } = readUser.authorizationUser
      const userData = {
        id,
        data: {
          AppUserId: UserId,
        },
      }
      updateUser(userData)
    }

    // const updatedUser = await updateUserByEmail(update)
  }

  if (!Email) {
    connectUser()
  }

  return null
}

export default SyncUserProfile
