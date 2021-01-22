/* eslint-disable react/prop-types */
import { useState } from 'react'
import ViewGroup from '../ViewGroup/ViewGroup.component'

const UserDetails = ({ User }) => {
  const [state, setState] = useState({ isGroupView: false })

  if (!User) return 'No User Details'

  const { FirstName, LastName, Email, MobilePhone, Role, Authorization } = User
  const [group] = Authorization?.Groups

  const onViewGroup = () => {
    setState({ isGroupView: true })
  }

  const onUserView = () => {
    setState({ isGroupView: false })
  }

  const ViewUserDetails = (
    <div style={{ padding: '25px' }}>
      <div>
        <button onClick={onViewGroup}>View Group and Permissions</button>
      </div>
      <div>
        <label htmlFor={FirstName}>First Name</label>
        <div name={FirstName}>{FirstName}</div>
      </div>
      <div>
        <label htmlFor={LastName}>Last Name</label>
        <div name={LastName}>{LastName}</div>
      </div>
      <div>
        <label htmlFor={Email}>Email</label>
        <div name={Email}>{Email}</div>
      </div>
      <div>
        <label htmlFor={MobilePhone}>Mobile Phone</label>
        <div name={MobilePhone}>{MobilePhone}</div>
      </div>
      <div>
        <label htmlFor={Role}>Role</label>
        <div name={Role}>{Role}</div>
      </div>
    </div>
  )

  return state.isGroupView ? (
    <ViewGroup Group={group} onViewUser={onUserView} />
  ) : (
    ViewUserDetails
  )
}

export default UserDetails
