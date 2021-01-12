import React from 'react'
// import { useForm } from 'react-hook-form'
import useReadUser from '../../graphql/useReadUser'

const updateUserForm = ({ match }) => {
  let cleanEmail = match.params.identifier.toLowerCase()
  function validEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexp.test(email)
  }
  // email validation
  if (!validEmail(cleanEmail)) {
    cleanEmail = false
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userData = useReadUser(cleanEmail)

  if (userData.loading) {
    return 'Loading...'
  }
  if (cleanEmail === false)
    return (
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <h2>You did not supply a valid email please try again.</h2>
      </div>
    )

  if (userData?.readUser?.authorizationUser === null)
    return (
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <h2>
          No user found with the email of:{' '}
          {match.params.identifier.toLowerCase()}{' '}
        </h2>
        <div>Would you like to Create a User?</div>
      </div>
    )
  return (
    <>
      <div
        className="form-wrapper"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <h2>
          Update User {userData?.readUser?.authorizationUser?.FirstName}{' '}
          {userData?.readUser?.authorizationUser?.LastName}
        </h2>
      </div>
    </>
  )
}
export default updateUserForm
