/* eslint-disable react/prop-types */
import { useState } from 'react'
import { UpdateUserForm } from '../../Forms/UpdateUser'
import ViewUserProfile from './ViewUserProfile/ViewUserProfile.component'

const UserDetails = ({ User }) => {
  const [editUser, setEditUser] = useState(false)
  // console.log(User)
  if (!User) return 'No User Details'

  const { Authorization } = User
  const [group] = Authorization?.Groups
  const cleanUser = {
    'First Name:': User.FirstName,
    'Last Name:': User.LastName,
    'Mobile Phone:': User.MobilePhone,
    'Email:': User.Email,
  }

  return editUser ? (
    <UpdateUserForm setEditUser={setEditUser} user={User} />
  ) : (
    <>
      <ViewUserProfile
        group={group}
        setEditUser={setEditUser}
        user={cleanUser}
      />
    </>
  )
}

export default UserDetails
