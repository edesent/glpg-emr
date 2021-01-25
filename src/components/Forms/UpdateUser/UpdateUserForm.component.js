/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSettingsApp } from '../../../context/AppContext'
import useUsers from '../../../graphql/useUsers'

// eslint-disable-next-line react/prop-types
const UpdateUserForm = ({ user }) => {
  const settingsApp = useSettingsApp()
  const [createdUser, setCreateUser] = useState(false)
  const { updateUser } = useUsers()
  // Required by form-hooks
  const { register, handleSubmit } = useForm()
  const updateAnUser = async (data) => {
    settingsApp.setGraphqlLoading(true)
    const auth = data.Role.split('|')
    const id = data.UserID
    const userData = {
      id,
      data: {
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email.toLowerCase(),
        MobilePhone: data.MobilePhone,
        Role: auth[0],
        Authorization: {
          Groups: auth[1],
        },
      },
    }
    const updatedUser = await updateUser(userData)
    setCreateUser(updatedUser)
  }

  const onSubmit = (data) => {
    updateAnUser(data)
  }

  if (user.loading || settingsApp.graphqlLoading || createdUser?.loading) {
    return 'Loading...'
  }

  if (user === null)
    return (
      <div className="form-wrapper">
        <h2>No user found.</h2>
        <div>Would you like to Create a User?</div>
      </div>
    )
  return (
    <>
      <div className="form-wrapper">
        <h2>
          Update User {user?.FirstName} {user?.LastName}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-id" style={{ display: 'none' }}>
            <label htmlFor="UserID">User ID:</label>
            <input
              // eslint-disable-next-line no-underscore-dangle
              defaultValue={user?._id}
              id="UserID"
              name="UserID"
              readOnly
              ref={register({ required: true })}
              type="text"
            />
          </div>
          <div className="form-FirstName">
            <label htmlFor="FirstName">First Name:</label>
            <input
              defaultValue={user?.FirstName}
              id="FirstName"
              name="FirstName"
              ref={register({ required: true })}
              type="text"
            />
          </div>

          <div className="form-LastName">
            <label htmlFor="LastName">Last Name:</label>
            <input
              defaultValue={user?.LastName}
              id="LastName"
              name="LastName"
              ref={register({ required: true })}
              type="text"
            />
          </div>

          <div className="form-Email">
            <label htmlFor="Email">Email Address:</label>
            <input
              defaultValue={user?.Email}
              id="Email"
              name="Email"
              ref={register({ required: true })}
              type="email"
            />
          </div>

          <div className="form-Mobile">
            <label htmlFor="MobilePhone">Mobile Phone:</label>
            <input
              defaultValue={user?.MobilePhone}
              id="MobilePhone"
              name="MobilePhone"
              ref={register({ required: true })}
              type="tel"
            />
          </div>

          <div className="form-Role">
            <label htmlFor="Role">User Role:</label>
            <div className="Role">
              <select
                defaultValue={
                  // eslint-disable-next-line prefer-template
                  user?.Role + '|' + user?.Groups
                }
                id="Role"
                name="Role"
                ref={register({ required: true })}
              >
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
            <button type="submit">Update User</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default UpdateUserForm
