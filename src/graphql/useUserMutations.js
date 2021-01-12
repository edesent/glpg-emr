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

const UpdateUserMutation = gql`
  mutation createUser {
    insertOneAuthorizationUser(
      data: {
        FirstName: "TestfName"
        LastName: "TestlName"
        Email: "test@test.com"
        Role: "Administrator"
      }
    ) {
      FirstName
      LastName
      _id
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

function useUpdateUser(user) {
  const [updateUserMutation] = useMutation(UpdateUserMutation)
  const updateUser = async (updates) => {
    const { updatedUser } = await updateUserMutation({
      variables: { userId: user.id, updates },
    })
    return updatedUser
  }
  return updateUser
}

export default function useUserMutations(data) {
  return {
    addUser: useAddUser(data),
    updateUser: useUpdateUser(data),
  }
}
