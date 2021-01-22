import { useRealmApp } from '../../context/RealmContext'
import SyncUpdate from './SyncUpdate'

const SyncUserProfile = () => {
  const app = useRealmApp()
  const { email: Email } = app?.currentUser?.customData
  const { _id: userId } = app?.currentUser

  if (!Email) {
    return <SyncUpdate UserId={userId} />
  }
  console.log('Skipped Update')
  return null
}

export default SyncUserProfile
