import PropTypes from 'prop-types'
import { StyledInput } from './Input.styles'

const Input = ({ name, type, register, label }) => (
  <StyledInput>
    <input id={name} name={name} placeholder=" " ref={register} type={type} />
    <label htmlFor={name}>{label}</label>
  </StyledInput>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input
