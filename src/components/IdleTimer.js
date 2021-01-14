/* eslint-disable no-alert */
import { useIdleTimer } from 'react-idle-timer'
import { useRealmApp } from '../context/RealmContext'

const IdleTimer = () => {
  const { app, setUserAuthenticated, settings } = useRealmApp()

  const handleOnIdle = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Would you like to stay logged in?')) {
      // TODO: create a popup that can be on a timer to log someone out
      app?.currentUser?.logOut()
      setUserAuthenticated(false)
    }
  }

  useIdleTimer({
    timeout: settings.IdleTimeout ?? 1000 * 60 * 15, // TODO: Read this from database eventually, this is in milliseconds
    onIdle: handleOnIdle,
  })

  return null
}

export default IdleTimer
