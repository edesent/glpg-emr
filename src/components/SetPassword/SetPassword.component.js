import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { useRealmApp } from '../../context/RealmContext'
import { Input } from '../Fields/Input'
import { Links } from '../Login/Login.styles'

const SetPassword = ({ location }) => {
  const app = useRealmApp()
  const alert = useAlert()
  const { register, handleSubmit, errors } = useForm()
  const [passSuccess, setPassSuccess] = useState(false)

  const queryParameter = (data) => {
    const search = new URLSearchParams(location.search)
    const value = search.get(data)
    if (value !== null) return value
    return null
  }

  async function setPassword(password) {
    try {
      const token = queryParameter('token')
      const tokenId = queryParameter('tokenId')
      const pwd = await app.emailPasswordAuth.resetPassword(
        token,
        tokenId,
        password
      )
      setPassSuccess(true)
      if (pwd) return
    } catch (error) {
      setPassSuccess(false)
      alert.error('Error setting password')
    }
  }

  const onSubmit = ({ password }) => {
    setPassword(password)
  }

  return (
    <>
      {!passSuccess ? (
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
      ) : (
        <>
          <h1>Password reset successful</h1>
          <p>
            Please head back to the home page and log in with your new password.
          </p>
          <Links>
            <Link title="Back" to="/">
              Back
            </Link>
          </Links>
        </>
      )}
    </>
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
