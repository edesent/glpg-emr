/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { ObjectId } from 'bson'
import useReadUser from '../../graphql/useReadUser'
import { useSettingsApp } from '../../context/AppContext'
import useUsers from '../../graphql/useUsers'

const updateUserForm = ({ match }) => {
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

  let cleanEmail = match.params.identifier.toLowerCase()
  function validEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexp.test(email)
  }
  // email validation
  if (!validEmail(cleanEmail)) {
    cleanEmail = false
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userData = useReadUser(cleanEmail)
  // eslint-disable-next-line no-underscore-dangle
  // console.log(userData)

  if (userData.loading || settingsApp.graphqlLoading || createdUser?.loading) {
    return 'Loading...'
  }
  if (cleanEmail === false)
    return (
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <h2>You did not supply a valid email please try again.</h2>
      </div>
    )

  if (userData?.readUser?.authorizationUser === null)
    return (
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <h2>
          No user found with the email of:{' '}
          {match.params.identifier.toLowerCase()}{' '}
        </h2>
        <div>Would you like to Create a User?</div>
      </div>
    )
  return (
    <>
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <h2>
          Update User {userData?.readUser?.authorizationUser?.FirstName}{' '}
          {userData?.readUser?.authorizationUser?.LastName}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-id" style={{ display: 'none' }}>
            <label htmlFor="UserID">User ID:</label>
            <input
              // eslint-disable-next-line no-underscore-dangle
              defaultValue={userData?.readUser?.authorizationUser?._id}
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
              defaultValue={userData?.readUser?.authorizationUser?.FirstName}
              id="FirstName"
              name="FirstName"
              ref={register({ required: true })}
              type="text"
            />
          </div>

          <div className="form-LastName">
            <label htmlFor="LastName">Last Name:</label>
            <input
              defaultValue={userData?.readUser?.authorizationUser?.LastName}
              id="LastName"
              name="LastName"
              ref={register({ required: true })}
              type="text"
            />
          </div>

          <div className="form-Email">
            <label htmlFor="Email">Email Address:</label>
            <input
              defaultValue={userData?.readUser?.authorizationUser?.Email}
              id="Email"
              name="Email"
              ref={register({ required: true })}
              type="email"
            />
          </div>

          <div className="form-Mobile">
            <label htmlFor="MobilePhone">Mobile Phone:</label>
            <input
              defaultValue={userData?.readUser?.authorizationUser?.MobilePhone}
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
                  userData?.readUser?.authorizationUser?.Role +
                  '|' +
                  userData?.readUser?.authorizationUser?.Authorization?.Groups
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
export default updateUserForm
