import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRealmApp } from '../../context/RealmContext'
import { Error, Links } from '../Login/Login.styles'
import { Input } from '../Forms/Input'

// eslint-disable-next-line react/prop-types
const ResetPassword = () => {
  const app = useRealmApp()
  const { register, handleSubmit, errors } = useForm()
  const [resetPass, setResetPass] = useState(false)

  async function passwordReset(email) {
    try {
      const reset = await app.emailPasswordAuth.sendResetPasswordEmail(email)
      setResetPass(true)
      if (reset) return
    } catch (error) {
      setResetPass(true)
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
          <Input
            label="Email"
            name="email"
            register={register({ required: true })}
            type="email"
          />
          <Links>
            <a href="/">Back</a>
            <button>Get New Password</button>
          </Links>
        </form>
      ) : (
        <>
          <h1>Request sent</h1>
          <p>
            If there is an account associated with the provided email address,
            you will be receiving instructions shortly to set your new password.
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
