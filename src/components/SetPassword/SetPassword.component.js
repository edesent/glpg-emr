import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { useRealmApp } from '../../context/RealmContext'
import { Input } from '../Forms/Input'
import { Links } from '../Login/Login.styles'

const SetPassword = ({ location }) => {
  const app = useRealmApp()
  const alert = useAlert()
  const { register, handleSubmit, errors } = useForm()

  const queryParameter = (data) => {
    const search = new URLSearchParams(location.search)
    const value = search.get(data)
    if (value !== null) return value
    return null
  }

  // console.log(queryParameter('token'))

  async function setPassword(password) {
    try {
      const token = queryParameter('token')
      const tokenId = queryParameter('tokenId')
      const pwd = await app.emailPasswordAuth.resetPassword(
        token,
        tokenId,
        password
      )
      if (pwd) return
    } catch (error) {
      alert.error('Error setting password')
    }
  }

  const onSubmit = ({ password }) => {
    setPassword(password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Set password</h1>
      {Object.entries(errors).length !== 0 && (
        <>{alert.error('You forgot to specify a password.')}</>
      )}
      <Input
        label="Password"
        name="password"
        register={register({ required: true })}
        type="password"
      />
      <Links>
        <button>Set Password</button>
      </Links>
    </form>
  )
}

SetPassword.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
}

SetPassword.defaultProps = {
  location: {
    search: '',
  },
}

export default SetPassword
