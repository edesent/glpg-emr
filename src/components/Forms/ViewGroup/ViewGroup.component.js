/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react'

const ViewGroup = ({ Group }) => {
  if (!Group) return null

  return (
    <div style={{ padding: '25px' }}>
      <div key={Group._id}>
        <label htmlFor={Group.Name}>Name</label>
        <div>{Group.Name}</div>
      </div>
      <div>
        <label htmlFor={Group.Description}>Description</label>
        <div>{Group.Desc}</div>
      </div>
      <div>
        <label htmlFor={Group.Permissions}>Permissions</label>
        <div>
          {Group.Permissions.map((permission) => (
            <div key={permission._id}>
              <div>
                <label htmlFor={permission.name}>Name</label>
                <div>{permission.name}</div>
              </div>
              <div>
                <label htmlFor={permission.description}>Description</label>
                <div>{permission.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewGroup
