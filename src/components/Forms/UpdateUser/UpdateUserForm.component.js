/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSettingsApp } from '../../../context/AppContext'
import useUsers from '../../../graphql/useUsers'
import GroupDropdown from '../CreateUser/GroupListFormDropdown'

// eslint-disable-next-line react/prop-types
const UpdateUserForm = ({ user }) => {
  console.log(user?.Authorization.Groups[0].Name)
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
          {user?.Authorization?.Groups?.Name === 'administrator' && (
            <>
              <div>groups</div>
              <GroupDropdown
                register={register}
                // eslint-disable-next-line jsx-a11y/aria-role
                role={user?.Authorization?.Groups?.Name}
              />
            </>
          )}

          <div className="form-Footer">
            <button type="submit">Update User</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default UpdateUserForm
