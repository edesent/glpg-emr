import React from 'react'
import { useAlert, positions } from 'react-alert'
import { buttonStyle } from './ResetPasswordLink.styles'
import { useRealmApp } from '../../context/RealmContext'

// eslint-disable-next-line react/prop-types
const ResetPasswordLink = () => {
  const app = useRealmApp()
  const alert = useAlert()
  const email = app.currentUser.profile.email.toLowerCase()

  let resetDialog = null

  const onYes = async () => {
    await app.emailPasswordAuth.callResetPasswordFunction(
      email,
      '123456', // Use a real password if the user is supplying it. (also need to add logic to backend)
      [] // these are options
    )

    await app.currentUser?.logOut()
    app.setUserAuthenticated(false)
    resetDialog.close()
  }

  const onNo = () => {
    resetDialog.close()
  }

  const dialogMessage = (
    <div>
      <div>Are you sure you want to reset your password?</div>
      <div>
        This will log you out and send an email to continue the password reset.
      </div>
      <button onClick={onYes}>Yes</button>
      <button onClick={onNo}>No</button>
    </div>
  )

  const onResetPassword = () => {
    resetDialog = alert.show(dialogMessage, {
      timeout: 0,
      position: positions.MIDDLE,
    })
  }

  return (
    <button onClick={onResetPassword} style={buttonStyle} type="button">
      Reset Password
    </button>
  )
}

export default ResetPasswordLink
