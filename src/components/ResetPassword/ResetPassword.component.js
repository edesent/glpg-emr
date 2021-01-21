import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useRealmApp } from '../../context/RealmContext'
import { Error, Links } from '../Login/Login.styles'
import { Input } from '../Fields/Input'

// eslint-disable-next-line react/prop-types
const ResetPassword = () => {
  const app = useRealmApp()
  const { register, handleSubmit, errors } = useForm()
  const [resetPass, setResetPass] = useState(false)

  async function passwordReset(email) {
    try {
      const reset = await app.emailPasswordAuth.callResetPasswordFunction(
        email.toLowerCase(),
        '123456', // Use a real password if the user is supplying it. (also need to add logic to backend)
        null // these are options
      )
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
            <Link title="Back" to="/">
              Back
            </Link>
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
            <Link to="/">Back</Link>
          </Links>
        </>
      )}
    </>
  )
}

export default ResetPassword
