import { useIdleTimer } from 'react-idle-timer'
import { useAlert, positions } from 'react-alert'
import { useRealmApp } from '../context/RealmContext'

const IdleTimer = () => {
  const { currentUser, setUserAuthenticated, settings } = useRealmApp()
  const alert = useAlert()
  const alertTimeout = 60 * 1000 // this is 60 seconds
  const countDownTimer = alertTimeout / 1000 // shows the timer in 60 seconds
  let isStayLoggedIn = false
  let alertProps = null

  const stayLoggedIn = () => {
    isStayLoggedIn = true
    alertProps.close()
  }

  const logOut = () => {
    currentUser.logOut()
    setUserAuthenticated(false)
    alertProps.close()
  }

  const onClose = () => {
    if (!isStayLoggedIn) {
      currentUser.logOut()
      setUserAuthenticated(false)
    }

    isStayLoggedIn = false
  }

  const messageFragment = (
    <div>
      <div>Would you like to stay logged in?</div>
      <div>You will be logged out in: {countDownTimer} seconds</div>
      <button onClick={stayLoggedIn}>Yes</button>
      <button onClick={logOut}>No</button>
    </div>
  )

  const handleOnIdle = () => {
    alertProps = alert.show(messageFragment, {
      timeout: alertTimeout,
      position: positions.MIDDLE,
      onClose,
    })
  }

  useIdleTimer({
    timeout: settings.IdleTimeout ?? 15 * 60 * 1000, // TODO: Read this from database eventually, this is in milliseconds
    onIdle: handleOnIdle,
  })

  return null
}

export default IdleTimer
