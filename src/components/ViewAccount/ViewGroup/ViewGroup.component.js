/* eslint-disable react/prop-types */
import React from 'react'

const ViewGroup = ({ Group }) => {
  if (!Group) return 'No Group Details'

  const { _id: groupId, Name, Desc: Description, Permissions } = Group

  return (
    <div style={{ padding: '25px', backgroundColor: '#eee' }}>
      <h3>Permissions</h3>
      <div key={groupId}>
        <label htmlFor={Name}>Name</label>
        <div>{Name}</div>
      </div>
      <div>
        <label htmlFor={Description}>Description</label>
        <div>{Description}</div>
      </div>
      <div>
        <label htmlFor={Permissions}>Permissions</label>
        <div>
          {Permissions.map(({ _id: permissionId, name, description }) => (
            <div key={permissionId}>
              <div>
                <label htmlFor={name}>Name</label>
                <div>{name}</div>
              </div>
              <div>
                <label htmlFor={description}>Description</label>
                <div>{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewGroup
