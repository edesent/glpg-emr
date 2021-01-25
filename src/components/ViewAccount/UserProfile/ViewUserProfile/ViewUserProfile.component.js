import PropTypes from 'prop-types'
import ViewGroup from '../../ViewGroup/ViewGroup.component'
import EditButton from '../../../EditButton'

const ViewUserProfile = ({ user, group, setEditUser }) => {
  return (
    <>
      <ViewGroup Group={group} />
      <div style={{ padding: '25px', backgroundColor: '#e4e4e4' }}>
        <EditButton setEditUser={setEditUser} type="Profile" />
        <h3>Profile</h3>
        {Object.keys(user).map((key) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <label htmlFor={key}>{key}</label>
            <div name={key}>{user[key]}</div>
          </div>
        ))}
      </div>
    </>
  )
}
ViewUserProfile.propTypes = {
  user: PropTypes.object,
  group: PropTypes.object,
  edit: PropTypes.func,
  editUser: PropTypes.bool,
  setEditUser: PropTypes.func,
}

export default ViewUserProfile
