import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { StyledLogin, Error, Form, Links } from './Login.styles'
import * as Realm from "realm-web";

const Login = () => {
  //Setup Realm
  const appId = "ehr_realm_app-lfyfr"
  const [app, setApp] = React.useState(new Realm.App(appId));
    React.useEffect(() => {
      setApp(new Realm.App(appId));
    }, [appId]);
  
  const [currentUser, setCurrentUser] = React.useState(app.currentUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logIn(credentials) {
      await app.logIn(credentials);
      setCurrentUser(app.currentUser);
    }
  async function logOut() {
      await app.currentUser?.logOut();
      setCurrentUser(app.currentUser);
    }

 
  const { register, handleSubmit, watch, errors } = useForm()
  
  // This is the main function that logs you in on the form submission
  const onLoginSubmit = async (data) => { 
    //setEmail(data.email)
    //setPassword(data.password)
    // Create Credential Object
    const credentials = Realm.Credentials.emailPassword(email, password) 
    // Attempt to login
    logIn(credentials)
   // console.log(currentUser)
  
    
  }

  useEffect(() => {
    // We can check the values of our variables here.
    //console.log(email);
  });


  if (currentUser?.profile?.email) {
    return (
      <StyledLogin>
        <img src="/logo.svg" alt="Great Lakes Psychology Group" />
        <div className="welcomemsg">
          <h1>Welcome {currentUser.profile.email}</h1>
          <button onClick={logOut}>Logout</button>
        </div>

      </StyledLogin>
    )

  } else { 
    return (
      <StyledLogin>
      <img src="/logo.svg" alt="Great Lakes Psychology Group" />
      <Form onSubmit={handleSubmit(onLoginSubmit)}>
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
            value={email}
            ref={register({ required: true })}
            onChange={(e) => setEmail(e.target.value)}  
              
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            name="password"
            type="password"
            id="password"
            value={password}
            ref={register({ required: true })}
            onChange={(e) => setPassword(e.target.value)}  
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

  }


export default Login
