import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useUsers from '../../graphql/useUsers'
import { useSettingsApp } from '../../context/AppContext'

const createUserForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const settingsApp = useSettingsApp()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userCreated, setUserCreated] = useState()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit } = useForm()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addUser } = useUsers()

  const createAnUser = async (data) => {
    const newUser = await addUser(data)
    setUserCreated(newUser)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (userCreated?.data?.createdUser) {
      // console.log(userCreated.data)
    }
  }, [userCreated])

  const onSubmit = (data) => {
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
                <option>Administrator</option>
                <option>Billing</option>
                <option>Verifications</option>
                <option>Scheduler</option>
                <option>Therapist</option>
              </select>
            </div>
          </div>
          <div className="form-Footer">
            <button type="submit">Create User</button>
          </div>
        </form>
      </div>
      {userCreated?.data?.createdUser && (
        <div className="form-Message">
          <span>
            <b className="capitalize">Success!</b> A user with the details below
            has been created.
          </span>
          <span>
            <b className="capitalize">Name:</b>{' '}
            {userCreated?.data?.createdUser.FirstName}{' '}
            {userCreated?.data?.createdUser.LastName}
          </span>
          <button>
            <span>×</span>
          </button>
        </div>
      )}
    </>
  )
}

export default createUserForm
