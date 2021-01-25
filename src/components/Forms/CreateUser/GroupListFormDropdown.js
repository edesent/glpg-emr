/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import useReadAllOrOneGroups from '../../../graphql/useReadGroups'

const GroupDropdown = ({ userGroup, register }) => {
  const groups = useReadAllOrOneGroups()

  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1)
  }
  // eslint-disable-next-line no-underscore-dangle
  const role = `${userGroup.Name}|${userGroup._id}`
  if (groups.loading) return 'Loading...'

  return (
    <div className="form-Role">
      <label htmlFor="Role">User Role:</label>
      <div className="Role">
        <select
          id="Role"
          name="Role"
          ref={register({ required: true })}
          value={role}
        >
          {groups?.readGroup?.authorizationGroups?.map(({ Name, _id }, key) => (
            <option key={key} value={`${Name}|${_id}`}>
              {capitalize(Name)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

GroupDropdown.propTypes = {
  groups: PropTypes.object.isRequired,
  register: PropTypes.node.isRequired,
  role: PropTypes.string,
}

export default GroupDropdown
