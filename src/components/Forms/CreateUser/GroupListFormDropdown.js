import PropTypes from 'prop-types'
import useReadAllOrOneGroups from '../../../graphql/useReadGroups'

const GroupDropdown = ({ register, role }) => {
  const groups = useReadAllOrOneGroups()
  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1)
  }

  if (groups.loading) return 'Loading...'
  console.log(groups?.readGroup)
  return (
    <div className="form-Role">
      <label htmlFor="Role">User Role:</label>
      <div className="Role">
        <select id="Role" name="Role" ref={register({ required: true })}>
          {groups?.readGroup?.authorizationGroups?.map(({ Name, _id }, key) =>
            role.toLowerCase === Name.toLowerCase ? (
              <option key={key} selected value={`${Name}|${_id}`}>
                {capitalize(Name)}
              </option>
            ) : (
              <option key={key} value={`${Name}|${_id}`}>
                {capitalize(Name)}
              </option>
            )
          )}
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
