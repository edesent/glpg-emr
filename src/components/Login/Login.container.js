import * as Realm from 'realm-web'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useRealmApp } from '../../context/RealmContext'
import LoginComponent from './Login.component'

const Login = () => {
  const app = useRealmApp()
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const alert = useAlert()

  async function userLogin(email, password) {
    const credentials = Realm.Credentials.emailPassword(email, password)
    try {
      const user = await app.logIn(credentials)
      if (user) return
    } catch (error) {
      alert.error('Invalid Login')
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
    <LoginComponent
      errors={Object.entries(errors)}
      onSubmit={handleSubmit(onSubmit)}
      register={register({ required: true })}
    />
  )
}

export default Login
