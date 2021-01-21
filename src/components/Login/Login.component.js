import * as Realm from 'realm-web'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useRealmApp } from '../../context/RealmContext'
import { Error, Links } from './Login.styles'
import { Input } from '../Fields/Input'

const Login = () => {
  // hooks
  const app = useRealmApp()
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const alert = useAlert()

  async function userLogin(email, password) {
    const credentials = Realm.Credentials.emailPassword(
      email.toLowerCase(),
      password
    )
    try {
      const user = await app.logIn(credentials)
      if (user) return
    } catch (error) {
      alert.error('Invalid Login Credientials')
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
      <Input
        label="Email"
        name="email"
        register={register({ required: true })}
        type="email"
      />
      <Input
        label="Password"
        name="password"
        register={register({ required: true })}
        type="password"
      />
      <Links>
        <Link title="Forgot password" to="/?forgotpassword">
          Forgot password?
        </Link>
        <button>Login</button>
      </Links>
    </form>
  )
}

export default Login
