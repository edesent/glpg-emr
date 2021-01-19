/* eslint-disable no-undef */
const helpers = require('../helpers')
const subject = require('../../functions/sendResetPasswordEmail/source.js')

let token
let tokenId
let username
let password

let firstName
let lastName
let domain

let mockSes
let mockFindUsers
let userData
let valuesObject

beforeEach(() => {
  token = helpers.makeRandomString(10)
  tokenId = helpers.makeRandomString(10)
  username = helpers.makeRandomString(10)
  password = helpers.makeRandomString(10)

  firstName = helpers.makeRandomString(10)
  lastName = helpers.makeRandomString(10)
  domain = helpers.makeRandomString(10)

  resultUser = {
    FirstName: firstName,
    LastName: lastName,
    Email: username,
    LastResetDate: null,
  }

  valuesObject = {
    ResetEmailSubject: helpers.makeRandomString(10),
    ResetEmailBody: helpers.makeRandomString(10),
    DomainName: domain,
  }

  mockFindUsers = (obj) => {
    return {
      toArray: () => {
        return new Promise((resolve, reject) => {
          resolve([resultUser])
        })
      },
    }
  }

  mockUpdateOne = (obj) => new Promise((resolve, reject) => resolve(null))

  mockCollection = (collectionName) => {
    return { find: mockFindUsers, updateOne: mockUpdateOne }
  }

  mockDb = (databaseName) => {
    return { collection: mockCollection }
  }

  mockSes = (location) => {
    return {
      SendEmail: () => {
        return new Promise((resolve, reject) => {
          resolve({ MessageId: '123456' })
        })
      },
    }
  }

  mockGet = (serviceName) => {
    switch (serviceName) {
      case 'mongodb-atlas':
        return { db: mockDb }
      case 'aws-ses':
        return { ses: mockSes }
      default:
        return {}
    }
  }

  mockValues = (name) => valuesObject[name]

  global.context = {
    services: { get: mockGet },
    user: { data: userData },
    values: { get: mockValues },
  }
})

describe('sendResetPasswordEmail tests', () => {
  test('User is invalid', async () => {
    // Arrange
    // do not return a user
    mockFindUsers = (obj) => {
      return {
        toArray: () => {
          return new Promise((resolve, reject) => {
            resolve([])
          })
        },
      }
    }

    // Act
    const result = await subject({ token, tokenId, username, password })

    // Assert
    expect(result.status).toBe('fail')
  })

  test('User has requested email after 5 minutes', async () => {
    // Arrange
    resultUser.LastResetDate = helpers.addMinutes(new Date(), -5)

    // Act
    const result = await subject({ token, tokenId, username, password })

    // Assert
    expect(result.status).toBe('fail')
    expect(result.description).toBe(
      'You have requested a reset already.  Check your email.'
    )
  })

  test('User has requested email after 35 minutes', async () => {
    // Arrange
    resultUser.LastResetDate = helpers.addMinutes(new Date(), -35)

    // Act
    const result = await subject({ token, tokenId, username, password })

    // Assert
    expect(result.status).toBe('pending')
  })

  test('Function returns pending', async () => {
    // Arrange

    // Act
    const result = await subject({ token, tokenId, username, password })

    // Assert
    expect(result.status).toBe('pending')
  })

  test('SendEmail gets body and subject', async () => {
    // Arrange
    mockSes = (location) => {
      return {
        SendEmail: (option) => {
          // to assert, we need to do it in the callback
          expect(option).toBeDefined()
          expect(option.Message.Body.Html.Data).toBe(
            valuesObject.ResetEmailBody
          )
          expect(option.Message.Subject.Data).toBe(
            valuesObject.ResetEmailSubject
          )

          return new Promise((resolve, reject) => {
            resolve({ MessageId: '123456' })
          })
        },
      }
    }

    // Act
    const result = await subject({ token, tokenId, username, password })

    // Assert
    expect(result.status).toBe('pending')
  })

  // This maps the values to the test cases
  getTestCaseValue = (key) => {
    dataObject = {
      firstName,
      lastName,
      email: username,
      domainName: domain,
      resetLink: `${domain}/?setpassword=&token=${token}&tokenId=${tokenId}`,
    }
    return dataObject[key]
  }

  // This is a list of test cases that are in ONE test
  const testCases = [
    { Name: 'firstName' },
    { Name: 'lastName' },
    { Name: 'domainName' },
    { Name: 'email' },
    { Name: 'resetLink' },
  ]
  testCases.forEach((testValue) => {
    it(`Subject and Body convert variable ${testValue.Name} properly`, async () => {
      // Arrange

      // This is the value to use based on the test case.
      const value = getTestCaseValue(testValue.Name)
      // this is the value we expect the body and subject is
      const expectedBody = `${valuesObject.ResetEmailBody}${value}`
      const expectedSubject = `${valuesObject.ResetEmailSubject}${value}`
      // this is the template we should use
      valuesObject.ResetEmailBody = `${valuesObject.ResetEmailBody}<% ${testValue.Name} %>`
      valuesObject.ResetEmailSubject = `${valuesObject.ResetEmailSubject}<% ${testValue.Name} %>`

      mockSes = (location) => {
        return {
          SendEmail: (option) => {
            expect(option).toBeDefined()
            expect(option.Message.Body.Html.Data).toBe(expectedBody)
            expect(option.Message.Subject.Data).toBe(expectedSubject)

            return new Promise((resolve, reject) => {
              resolve({ MessageId: '123456' })
            })
          },
        }
      }

      // Act
      const result = await subject({ token, tokenId, username, password })

      // Assert
      expect(result.status).toBe('pending')
    })
  })
})
