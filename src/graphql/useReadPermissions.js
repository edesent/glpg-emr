import { useQuery, gql } from '@apollo/client'

function useReadPermissionsByGroup(group) {
  const { data, loading, error } = useQuery(
    gql`
      query authorizationPermissions($permissionIds: [ObjectId]) {
        authorizationPermissions(query: { _id_in: $permissionIds }) {
          description
          name
          _id
        }
      }
    `,
    { variables: { permissionIds: group.Permissions } }
  )
  if (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`)
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const readPermissions = data ?? []
  return { readPermissions, loading }
}

const useReadPermissions = () => {
  return {
    readPermissionsByGroup: useReadPermissionsByGroup,
  }
}
export default useReadPermissions
