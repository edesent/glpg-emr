import { gql, useQuery } from '@apollo/client'

const getAllSettingsQuery = gql`
  query {
    configurationAppsettings {
      Name
      Value
      _id
    }
  }
`

function useAppSettings(email) {
  const { data, loading, error } = useQuery(getAllSettingsQuery, {
    variables: { em: email },
  })
  if (error) {
    // ! We need to remove debugging tools from production
    console.log(`Failed to fetch user data: ${error.message}`)
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const appSettings = data ?? []
  return { appSettings, loading }
}
const useSettings = (data) => {
  const { appSettings, loading } = useAppSettings(data)

  return {
    appSettings,
    loading,
  }
}
export default useSettings
