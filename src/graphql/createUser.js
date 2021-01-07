import { gql, useMutation } from '@apollo/client'
// We need a wrapper for useMutation
function createUserMutation(user) {
  // The actual payload should be user
  const createUserqgl = gql`
    mutation createUser($user: UserInsertInput!) {
      createdUser: insertOneAuthorizationUser(data: $user) {
        FirstName
        LastName
        Email
        _id
      }
    }
  `
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useMutation(createUserqgl, {
    variables: { user },
  })
  if (error) {
    throw new Error(`Failed to create user. ${error.message}`)
  }
  const resposeData = data ?? []
  return {
    resposeData,
    loading,
  }
}
const createUser = async (user) => {
  const { userResponse, loading, error } = await createUserMutation(user)

  return {
    loading,
    userResponse,
    error,
  }
}

export default createUser
