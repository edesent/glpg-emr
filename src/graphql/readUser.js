import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

function readUserData(email) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery(
    gql`
      query($em: String!) {
        testUser(query: { Email: $em }) {
          Role
          FirstName
          LastName
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
  const userData = data ?? []
  return { userData, loading }
}

const readUser = (user) => {
  const { userData, loading } = readUserData(user)

  return {
    loading,
    userData,
  }
}

export default readUser
