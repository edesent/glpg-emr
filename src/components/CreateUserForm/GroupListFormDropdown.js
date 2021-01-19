import PropTypes from 'prop-types'

const GroupDropdown = ({ groups, register }) => {
  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1)
  }

  if (groups.loading) return 'Loading...'
  return (
    <div className="form-Role">
      <label htmlFor="Role">User Role:</label>
      <div className="Role">
        <select id="Role" name="Role" ref={register({ required: true })}>
          {groups?.readGroup?.authorizationGroups?.map(function (role, key) {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <option key={key} value={`${role.Name}|${role._id}`}>
                {capitalize(role.Name)}
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
