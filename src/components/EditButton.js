/* eslint-disable react/prop-types */
const EditButton = ({ type, setEditUser }) => {
  const updateEditUser = () => {
    setEditUser(true)
  }
  return (
    <>
      <div style={{ float: 'right' }}>
        <button onClick={updateEditUser}>Edit {type}</button>
      </div>
    </>
  )
}

export default EditButton
