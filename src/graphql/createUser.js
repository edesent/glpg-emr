import { ObjectId } from 'bson'
import { gql, useMutation } from '@apollo/client'

function createUserData(user) {
  const CreateUserMutation = gql``

  const userFieldsFragment = gql`
    fragment TaskFields on Task {
      _id
      _partition
      status
      name
    }
  `
  const [createUserMutation] = useMutation(CreateUserMutation, {
    // We need to update the cache with the created user
    update: (cache, { data: { createdUser } }) => {
      cache.modify({
        fields: {
          tasks: (existingTasks = []) => [
            ...existingTasks,
            cache.writeFragment({
              data: createdUser,
              fragment: userFieldsFragment,
            }),
          ],
        },
      })
    },
  })
  // We need a Mutation to create a user based off the userObject
  const createUser = async (task) => {
    const { createdUser } = await createUserMutation({
      variables: {
        task: {
          _id: new ObjectId(),
          _partition: user.partition,
          status: 'Open',
          ...task,
        },
      },
    })
    return createdUser
  }
  return createUser
}

export default function userMutations(user) {
  return {
    createUser: createUserData(user),
    // updateUser updateUserData(user),
    // deleteUser: deleteUserData(user),
  }
}
