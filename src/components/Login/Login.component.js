import React from 'react'
import * as Realm from 'realm-web'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useRealmApp } from '../../context/RealmContext'
import { Error, Links } from './Login.styles'

const Login = () => {
  // hooks
  const app = useRealmApp()
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  async function userLogin(email, password) {
    const credentials = Realm.Credentials.emailPassword(email, password)
    try {
      const user = await app.logIn(credentials)
      if (user) {
        return user
      }
      return null
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Invalid Login Credientials')
      return null
    }
  }

  const onSubmit = ({ email, password }) => {
    userLogin(email, password).then((user) => {
      if (user && user !== null) {
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
