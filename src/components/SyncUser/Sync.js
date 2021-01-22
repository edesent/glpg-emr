import { useRealmApp } from '../../context/RealmContext'
import SyncUpdate from './SyncUpdate'

const SyncUserProfile = () => {
  const app = useRealmApp()
  const { Email } = app?.currentUser?.customData

  if (!Email && app?.currentUser?.id && app?.currentUser.profile) {
    return (
      <SyncUpdate
        userId={app?.currentUser?.id}
        email={app?.currentUser.profile.email}
      />
    )
  }
  return null
}

export default SyncUserProfile
