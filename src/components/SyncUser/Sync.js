import { useRealmApp } from '../../context/RealmContext'
import SyncUpdate from './SyncUpdate'

const SyncUserProfile = () => {
  const app = useRealmApp()
  const { Email } = app?.currentUser?.customData
  const { email } = app?.currentUser.profile
  const userId = app?.currentUser?.id

  if (!Email && userId && email) {
    return <SyncUpdate email={email} userId={userId} />
  }
  return null
}

export default SyncUserProfile
