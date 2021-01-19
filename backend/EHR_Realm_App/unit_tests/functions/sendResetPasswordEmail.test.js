/* eslint-disable no-undef */
const helpers = require('../helpers')
const subject = require('../../functions/sendResetPasswordEmail/source.js')

let token
let tokenId
let username
let password

let firstName
let lastName

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

  resultUser = {
    FirstName: firstName,
    LastName: lastName,
    Email: username,
    LastResetDate: null,
  }

  valuesObject = {
    ResetEmailSubject: helpers.makeRandomString(10),
    ResetEmailBody: helpers.makeRandomString(10),
    DomainName: helpers.makeRandomString(10),
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

  mockGet = (serviceName) => {
    return { db: mockDb }
  }

  mockValues = (name) => valuesObject[name]

  // context.values.get('ResetEmailSubject')

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
    const result = await subject([token, tokenId, username, password])

    // Assert
    expect(result.status).toBe('fail')
  })

  test('User has requested email after 5 minutes', async () => {
    // Arrange
    resultUser.LastResetDate = helpers.addMinutes(new Date(), -5)

    // Act
    const result = await subject([token, tokenId, username, password])

    // Assert
    expect(result.status).toBe('fail')
  })

  test('User has requested email after 35 minutes', async () => {
    // Arrange
    resultUser.LastResetDate = helpers.addMinutes(new Date(), -35)

    // Act
    const result = await subject([token, tokenId, username, password])

    // Assert
    expect(result.status).toBe('pending')
  })

  test('Function returns pending', async () => {
    // Arrange

    // Act
    const result = await subject([token, tokenId, username, password])

    // Assert
    expect(result.status).toBe('pending')
  })

  // Add a test to verify all variables get swapped
  // Add test to verify token and tokenId are used in url
})
