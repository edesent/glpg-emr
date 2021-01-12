import useUserMutations from './useUserMutations'

const useUser = (data) => {
  const { addUser, updateUser } = useUserMutations(data)

  return {
    updateUser,
    addUser,
  }
}
export default useUser
