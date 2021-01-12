import { useQuery, gql } from '@apollo/client'

function useReadUserByEmail(email) {
  const { data, loading, error } = useQuery(
    gql`
      query($em: String!) {
        authorizationUser(query: { Email: $em }) {
          Role
          FirstName
          LastName
          Email
          MobilePhone
          _id
        }
      }
    `,
    { variables: { em: email } }
  )
  if (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`)
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const readUser = data ?? []
  return { readUser, loading }
}
const useReadUser = (data) => {
  const { readUser, loading } = useReadUserByEmail(data)

  return {
    readUser,
    loading,
  }
}
export default useReadUser
