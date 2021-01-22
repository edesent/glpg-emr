/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react'
import useReadPermissions from '../../../graphql/useReadPermissions'

const ViewGroup = ({ Group }) => {
  const { permissions, loading } = useReadPermissions().readPermissionsByGroup(
    Group
  )

  if (loading) return 'loading...'

  const permissionFragment = permissions.map((permission) => {
    return (
      <>
        <div key={permission._id}>
          <label htmlFor={permission.Name}>Name</label>
          <div>{permission.Name}</div>
        </div>
        <div>
          <label htmlFor={permission.Description}>Description</label>
          <div>{permission.Description}</div>
        </div>
      </>
    )
  })

  return (
    <div>
      <div key={Group._id}>
        <label htmlFor={Group.Name}>Name</label>
        <div>{Group.Name}</div>
      </div>
      <div>
        <label htmlFor={Group.Description}>Description</label>
        <div>{Group.Description}</div>
      </div>
      <div>
        <label htmlFor={Group.Permissions}>Permissions</label>
        <div>
          <permissionFragment />
        </div>
      </div>
    </div>
  )
}

export default ViewGroup
