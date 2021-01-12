/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useUsers from '../../graphql/useUsers'
import { useRealmApp } from '../../context/RealmContext'
import { useSettingsApp } from '../../context/AppContext'

const createUserForm = () => {
  // We Need App & Settings Hooks
  const settingsApp = useSettingsApp()
  const app = useRealmApp()
  // We need some states for conformation message
  const [userCreated, setUserCreated] = useState(null)
  // We need a function to close the confirmation message
  const closeUserCreatedAlert = () => {
    setUserCreated()
  }
  // Simple Random Password Generator
  const generatePassword = () => {
    const buf = new Uint8Array(12)
    window.crypto.getRandomValues(buf)
    const thePassword = btoa(String.fromCharCode.apply(null, buf))
    return thePassword
  }
  // Required by form-hooks
  const { register, handleSubmit } = useForm()
  const { addUser } = useUsers()

  // We need a simple Function that creates all the users
  const createAnUser = async (data) => {
    // This sets the loading indicator when the function starts
    settingsApp.setGraphqlLoading(true)
    const auth = data.Role.split('|')
    const userData = {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      MobilePhone: data.MobilePhone,
      Role: auth[0],
      Authorization: {
        Groups: auth[1],
      },
    }
    try {
      // Create a new AppUser via the Form
      await app.emailPasswordAuth.registerUser(
        userData.Email,
        generatePassword()
      )
      // Create the user profile in mongo
      const newUser = await addUser(userData)
      setUserCreated(newUser)
      // If that worked reset password
      await app.emailPasswordAuth.sendResetPasswordEmail(userData.Email)
      // trigger the message
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`There was an Error creating your user ${error}`)
    }
  }

  // useEffect(() => {
  //   if (userCreated?.data?.createdUser) {
  //     // console.log(userCreated.data)
  //   }
  // }, [userCreated])

  const onSubmit = (data) => {
    // eslint-disable-next-line prefer-destructuring

    createAnUser(data)
  }
  // if (errors) return `There were errors: ${errors}`
  if (settingsApp.graphqlLoading) return 'Loading...'
  return (
    <>
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <div className="form-header">
          <h3>Create a User</h3>
          <p>With this form an Administrator can create a new user.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-FirstName">
            <label htmlFor="FirstName">First Name:</label>
            <input
              id="FirstName"
              name="FirstName"
              ref={register({ required: true })}
              type="text"
            />
          </div>

          <div className="form-LastName">
            <label htmlFor="LastName">Last Name:</label>
            <input
              id="LastName"
              name="LastName"
              ref={register({ required: true })}
              type="text"
            />
          </div>

          <div className="form-Email">
            <label htmlFor="Email">Email Address:</label>
            <input
              id="Email"
              name="Email"
              ref={register({ required: true })}
              type="email"
            />
          </div>

          <div className="form-Mobile">
            <label htmlFor="MobilePhone">Mobile Phone:</label>
            <input
              id="MobilePhone"
              name="MobilePhone"
              ref={register({ required: true })}
              type="tel"
            />
          </div>

          <div className="form-Role">
            <label htmlFor="Role">User Role:</label>
            <div className="Role">
              <select id="Role" name="Role" ref={register({ required: true })}>
                <option value="Administrator|5fb836e7f98feea55da5e968">
                  Administrator
                </option>
                <option value="Billing|5fb83716f98feea55da5e96a">
                  Billing
                </option>
                <option value="Verifications|5fb836fff98feea55da5e969">
                  Verifications
                </option>
                <option value="Scheduler|5fb8372cf98feea55da5e96b">
                  Scheduler
                </option>
                <option value="Therapist|5fb8369ff98feea55da5e967">
                  Therapist
                </option>
              </select>
            </div>
          </div>
          <div className="form-Footer">
            <button type="submit">Create User</button>
          </div>
        </form>
      </div>
      {userCreated?.data?.createdUser && (
        <div
          className="form-Message"
          style={{ position: 'fixed', left: '390px' }}
        >
          <span>
            <b className="capitalize">Success!</b> A user with the details below
            has been created.
          </span>
          <span>
            <b className="capitalize">Name:</b>{' '}
            {userCreated?.data?.createdUser.FirstName}{' '}
            {userCreated?.data?.createdUser.LastName}
          </span>
          <button onClick={closeUserCreatedAlert}>
            <span>×</span>
          </button>
        </div>
      )}
    </>
  )
}

export default createUserForm
