import React from 'react'
import * as Realm from 'realm-web'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { Error, Links } from './Login.styles'

const Login = () => {
  // hooks
  const { app, setUserAuthenticated } = useAppContext()
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  function assert(condition, message) {
    if (!condition) {
      throw new Error(message || 'Assertion failed')
    }
  }

  async function userLogin(email, password) {
    const credentials = Realm.Credentials.emailPassword(email, password)
    try {
      const user = await app.logIn(credentials)
      assert(user.id === app.currentUser.id, 'Asserting User')
      return user
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Invalid Login Credientials')
      return null
    }
  }

  const onSubmit = ({ email, password }) => {
    userLogin(email, password).then((user) => {
      if (user && user !== null) {
        setUserAuthenticated(true)
        history.push('/dashboard')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in to your account</h1>
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
      <div>
        <input
          id="password"
          name="password"
          placeholder=" "
          ref={register({ required: true })}
          type="password"
        />
        <label htmlFor="password">Password</label>
      </div>
      <Links>
        <a href="/?forgotPassword">Forgot password?</a>
        <button>Login</button>
      </Links>
    </form>
  )
}

export default Login
