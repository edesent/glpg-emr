import PropTypes from 'prop-types'

const GroupDropdown = ({ groups, register }) => {
  if (groups.loading) return 'Loading...'
  return (
    <div className="form-Role">
      <label htmlFor="Role">User Role:</label>
      <div className="Role">
        <select id="Role" name="Role" ref={register({ required: true })}>
          {groups.map(function (role, key) {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <option key={key} value={`${role.Name}|${role._id}`}>
                {role.Name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

GroupDropdown.propTypes = {
  groups: PropTypes.object.isRequired,
  register: PropTypes.node.isRequired,
}

export default GroupDropdown
