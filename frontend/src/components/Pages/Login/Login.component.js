import React from 'react'
import { useForm } from 'react-hook-form'
import { StyledLogin, Error, Form, Links } from './Login.styles'

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <StyledLogin>
      <img src="/logo.svg" alt="Great Lakes Psychology Group" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Object.entries(errors).length !== 0 ? (
          <Error>All fields are required!</Error>
        ) : (
          ``
        )}
        <div>
          <input
            name="email"
            type="email"
            id="email"
            placeholder=" "
            ref={register({ required: true })}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            name="password"
            type="password"
            id="password"
            placeholder=" "
            ref={register({ required: true })}
          />
          <label htmlFor="password">Password</label>
        </div>
        <Links>
          <a href="/">Forgot password?</a>
          <button>Login</button>
        </Links>
      </Form>
    </StyledLogin>
  )
}

export default Login
