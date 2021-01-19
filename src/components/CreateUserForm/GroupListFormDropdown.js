import PropTypes from 'prop-types'

const GroupDropdown = ({ groups, register, userRole }) => {
  if (groups.loading || userRole === 'null') return 'Loading...'
  return (
    <div className="form-Role">
      <label htmlFor="Role">User Role:</label>
      <div className="Role">
        <select id="Role" name="Role" ref={register({ required: true })}>
          {groups.map(function (role, key) {
            let selected = ''
            if (userRole === role.Name) {
              selected = 'Selected'
            }
            console.log(selected + role.Name)
            return (
              // eslint-disable-next-line no-underscore-dangle
              <option value={`${role.Name}|${role._id}`} key={key}>
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
  userRole: PropTypes.string.isRequired,
}

export default GroupDropdown
