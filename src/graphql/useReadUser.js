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
  const authorizationUser = data ?? []
  return { authorizationUser, loading }
}
const getUserByIdQuery = gql`
  query($userId: ObjectId!) {
    authorizationUser(query: { _id: $userId }) {
      Authorization {
        Groups {
          Name
          Desc
          _id
          Permissions {
            _id
            name
            description
          }
        }
      }
      FirstName
      LastName
      Email
      MobilePhone
      Role
      _id
    }
  }
`

const useReadUserById = (id) => {
  const { data, loading, error } = useQuery(getUserByIdQuery, {
    variables: { userId: id },
  })
  if (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`)
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const authorizationUser = data ?? []
  return { authorizationUser, loading }
}

export default function useReadUserBy(data) {
  return {
    readUserByEmail: useReadUserByEmail(data),
    readUserById: useReadUserById(data),
  }
}
