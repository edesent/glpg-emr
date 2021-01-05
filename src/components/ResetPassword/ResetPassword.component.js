import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppContext } from '../../context/AppContext'
import { Error, Links } from '../Login/Login.styles'

// eslint-disable-next-line react/prop-types
const ResetPassword = () => {
  const { app } = useAppContext()
  const { register, handleSubmit, errors } = useForm()
  const [resetPass, setResetPass] = useState(null)

  async function passwordReset(email) {
    try {
      const reset = await app.emailPasswordAuth.sendResetPasswordEmail(email)
      setResetPass(email)
      return reset
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Email address not found.')
      return null
    }
  }

  const onSubmit = ({ email }) => {
    passwordReset(email)
  }

  return (
    <>
      {!resetPass ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Forgot password</h1>
          {Object.entries(errors).length !== 0 && (
            <Error>All fields are required!</Error>
          )}
          <div>
            <input
              id="email"
              name="email"
              placeholder=" "
              ref={register({ required: true })}
              type="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <Links>
            <a href="/">Back</a>
            <button>Get New Password</button>
          </Links>
        </form>
      ) : (
        <>
          <h1>Request sent</h1>
          <p>
            Please follow the instructions in your email (<em>{resetPass}</em>)
            to set your new password.
          </p>
          <Links>
            <a href="/">Back</a>
          </Links>
        </>
      )}
    </>
  )
}

export default ResetPassword
