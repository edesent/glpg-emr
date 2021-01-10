import PropTypes from 'prop-types'
import { Input } from '../Forms/Input'
import { Error, Links } from './Login.styles'

const LoginComponent = ({ errors, onSubmit, register }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign in to your account</h1>
      {errors.length !== 0 && <Error>All fields are required!</Error>}
      <Input label="Email" name="email" ref={register} type="email" />
      <Input label="Password" name="password" ref={register} type="password" />
      <Links>
        <a href="/?forgotPassword">Forgot password?</a>
        <button>Login</button>
      </Links>
    </form>
  )
}

LoginComponent.propTypes = {
  errors: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.string.isRequired,
}

export default LoginComponent
