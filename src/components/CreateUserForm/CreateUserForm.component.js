import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useUsers from '../../graphql/useUsers'
import { useSettingsApp } from '../../context/AppContext'

const createUserForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const settingsApp = useSettingsApp()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userCreated, setUserCreated] = useState()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit } = useForm()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addUser } = useUsers()

  const createAnUser = async (data) => {
    const newUser = await addUser(data)
    setUserCreated(newUser)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (userCreated?.data?.createdUser) {
      // console.log(userCreated.data)
    }
  }, [userCreated])

  const onSubmit = (data) => {
    createAnUser(data)
  }
  // if (errors) return `There were errors: ${errors}`
  if (settingsApp.graphqlLoading) return 'Loading...'
  return (
    <>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ position: 'fixed', top: '90px', left: '390px' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Create a User
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    With this form an Administrator can create a new user.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="FirstName"
                          >
                            First Name:
                          </label>
                          <input
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="FirstName"
                            name="FirstName"
                            ref={register({ required: true })}
                            type="text"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="LastName"
                          >
                            Last Name:
                          </label>
                          <input
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="LastName"
                            name="LastName"
                            ref={register({ required: true })}
                            type="text"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="Email"
                          >
                            Email Address:
                          </label>
                          <input
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="Email"
                            name="Email"
                            ref={register({ required: true })}
                            type="email"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="MobilePhone"
                          >
                            Mobile Phone:
                          </label>
                          <input
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="MobilePhone"
                            name="MobilePhone"
                            ref={register({ required: true })}
                            type="tel"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="Role"
                          >
                            User Role:
                          </label>
                          <div className="mt-1">
                            <select
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              id="Role"
                              name="Role"
                              ref={register({ required: true })}
                            >
                              <option>Administrator</option>
                              <option>Billing</option>
                              <option>Verifications</option>
                              <option>Scheduler</option>
                              <option>Therapist</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-13 text-right sm:px-6 mt-4">
                        <button
                          className="inline-flex py-2 px-24 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          type="submit"
                        >
                          Create User
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {userCreated?.data?.createdUser && (
            <div className="text-white px-6 py-4 border-0 rounded relative mt-4 bg-green-500">
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">Success!</b> A user with the details
                below has been created.
              </span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">Name:</b>{' '}
                {userCreated?.data?.createdUser.FirstName}{' '}
                {userCreated?.data?.createdUser.LastName}
              </span>
              <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span>×</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default createUserForm
