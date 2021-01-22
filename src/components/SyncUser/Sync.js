import { useRealmApp } from '../../context/RealmContext'
import SyncUpdate from './SyncUpdate'

const SyncUserProfile = () => {
  const app = useRealmApp()
  const { Email } = app?.currentUser?.customData

  if (!Email && app?.currentUser?.id && app?.currentUser.profile) {
    return (
      <SyncUpdate
        email={app?.currentUser.profile.email}
        userId={app?.currentUser?.id}
      />
    )
  }
  return null
}

export default SyncUserProfile
