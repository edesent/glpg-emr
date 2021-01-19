import { useQuery, gql } from '@apollo/client'

const allGroups = gql`
  {
    authorizationGroups {
      Name
      Desc
      _id
    }
  }
`

const readAGroup = gql`
  query($name: String!) {
    authorizationGroups(query: { Name: $name }) {
      Name
      Desc
      _id
    }
  }
`

function useReadGroups(name = null) {
  const { data, loading, error } = useQuery(name ? allGroups : readAGroup, {
    variables: { name },
  })
  if (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`)
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const readUser = data ?? []
  return { readUser, loading }
}
const useReadAllOrOneGroups = (data) => {
  const { readUser, loading } = useReadGroups(data)

  return {
    readUser,
    loading,
  }
}
export default useReadAllOrOneGroups
