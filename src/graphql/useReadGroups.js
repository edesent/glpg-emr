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
  // ! We need to remove debugging tools from production
  console.log(name)
  const { data, loading, error } = useQuery(name ? readAGroup : allGroups, {
    variables: { name },
  })
  if (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`)
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const readGroup = data ?? []
  return { readGroup, loading }
}
const useReadAllOrOneGroups = (data) => {
  const { readGroup, loading } = useReadGroups(data)

  return {
    readGroup,
    loading,
  }
}
export default useReadAllOrOneGroups
