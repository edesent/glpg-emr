import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as Realm from 'realm-web'
import { StyledLogin, Error, Form, Links } from './Login.styles'

const Login = () => {
  // Setup Realm
  const appId = 'ehr_realm_app-lfyfr'
  const [app, setApp] = useState(new Realm.App(appId))
  const [currentUser, setCurrentUser] = useState(app.currentUser)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setApp(new Realm.App(appId))
  }, [appId])

  async function logIn(credentials) {
    await app.logIn(credentials)
    setCurrentUser(app.currentUser)
  }

  async function logOut() {
    await app.currentUser?.logOut()
    setCurrentUser(app.currentUser)
  }

  const { register, handleSubmit, errors } = useForm()

  // This is the main function that logs you in on the form submission
  // data us form data
  const onLoginSubmit = async () => {
    // setEmail(data.email)
    // setPassword(data.password)
    // Create Credential Object
    const credentials = Realm.Credentials.emailPassword(email, password)
    // Attempt to login
    logIn(credentials)
    // console.log(currentUser)
  }

  return (
    <StyledLogin>
      <img alt="Great Lakes Psychology Group" src="./logo.svg" />
      {currentUser?.profile?.email ? (
        <>
          <h1>Welcome {currentUser.profile.email}</h1>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <Form onSubmit={handleSubmit(onLoginSubmit)}>
          {Object.entries(errors).length !== 0 && (
            <Error>All fields are required!</Error>
          )}
          <div>
            <input
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              ref={register({ required: true })}
              type="email"
              value={email}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              ref={register({ required: true })}
              type="password"
              value={password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <Links>
            <a href="/">Forgot password?</a>
            <button>Login</button>
          </Links>
        </Form>
      )}
    </StyledLogin>
  )
}

export default Login
