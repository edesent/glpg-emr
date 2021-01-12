import { gql } from '@apollo/client'

const getAllSettingsQuery = gql`
  query {
    configurationAppsettings {
      Name
      Value
      _id
    }
  }
`

export const getAllSettingsData = async (client) => {
  const data = await client.query({
    query: getAllSettingsQuery,
  })

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const settingsData = data?.configurationAppsettings ?? []
  return settingsData
}
