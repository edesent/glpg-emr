import { useMutation, gql } from '@apollo/client'
import { useSettingsApp } from '../context/AppContext'
// import readUser from './readUser'

// We need defined Graphql Schema for Mutations
const AddUserMutation = gql`
  mutation createUser($us: AuthorizationUserInsertInput!) {
    createdUser: insertOneAuthorizationUser(data: $us) {
      FirstName
      LastName
      _id
    }
  }
`
// Not Working
const UpdateUserMutation = gql`
  mutation UpdateUser(
    $userId: ObjectId!
    $updates: AuthorizationUserUpdateInput!
  ) {
    updatedUser: updateOneAuthorizationUser(
      query: { _id: $userId }
      set: $updates
    ) {
      FirstName
      LastName
      _id
      Email
      MobilePhone
      Role
    }
  }
`
// We need a function for each action we want to do inside this class

// eslint-disable-next-line no-unused-vars
function useAddUser(user) {
  // Get the context for use settings
  const settingsApp = useSettingsApp()

  // eslint-disable-next-line no-shadow
  const triggerCreatedUserMessage = () => {
    //  const theUser = readUser(user.email)
    settingsApp.setGraphqlLoading(false)
  }

  const [addUserMutation] = useMutation(AddUserMutation, {
    // update: triggerLoading,
    onCompleted: triggerCreatedUserMessage,
  })
  // eslint-disable-next-line no-shadow
  const addUser = async (user) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theUser = await addUserMutation({
      variables: { us: user },
    })

    return theUser
  }
  return addUser
}

// eslint-disable-next-line no-unused-vars
function useUpdateUser(updates) {
  const settingsApp = useSettingsApp()
  // eslint-disable-next-line no-shadow
  const triggerUpdateUserMessage = () => {
    settingsApp.setGraphqlLoading(false)
  }

  const [updateUserMutation] = useMutation(UpdateUserMutation, {
    onCompleted: triggerUpdateUserMessage,
  })
  // eslint-disable-next-line no-shadow
  const updateUser = async (updates) => {
    console.log(updates.id)
    const { loading, data, error } = await updateUserMutation({
      variables: { userId: updates.id, updates: updates.data },
    })
    if (error) {
      throw new Error(`Failed to update user data: ${error.message}`)
    }
    console.log(data)
    return { loading, data, error }
  }
  return updateUser
}

export default function useUserMutations(data) {
  return {
    addUser: useAddUser(data),
    updateUser: useUpdateUser(data),
  }
}
