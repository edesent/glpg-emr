import useUsers from '../../graphql/useUsers'

const SyncUpdateProfile = ({ id, userId }) => {
  const { updateUser } = useUsers()
  const userData = {
    id,
    data: {
      AppUserId: userId,
    },
  }
  updateUser(userData)
  return null
}
export default SyncUpdateProfile
