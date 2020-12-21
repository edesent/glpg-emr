const userHasAccess = require('../../functions/hasUserAccess/source.js');

let mockFindUsers
let userData
let validUser = { Email:'test@plpg.net', Authorization: { Groups: ['test'] } }
let validGroup = { Name:'test', Permissions: [ 'test/permission1' ] }

beforeEach(() => {

    userData = jest.fn().mockReturnValue({ email:validUser.Email })
    userData.email = validUser.Email

    mockFindGroups = (obj) => {
        return {
            toArray: () => {
                return new Promise((resolve, reject) => {
                    resolve([ validGroup ]);    
                })
            }
        }
    }
    mockFindUsers = (obj) => {
        return {
            toArray: () => {
                return new Promise((resolve, reject) => {
                    resolve([ validUser ]);    
                })
            }
        }
    }
    mockCollection = (collectionName) => {
        if(collectionName === 'authorization.users') {
            return { find: mockFindUsers }
        } else if (collectionName === 'authorization.groups') {
            return { find: mockFindGroups }
        }
    }
    mockDb = (databaseName) => { return { collection: mockCollection } }
    mockGet = (serviceName) => { return { db: mockDb } }

    // Mock the context object like below.
    global.context = {
        services: { get: mockGet },
        user: { data: userData }
    }
})
describe('hasUserAccess tests', () => {
        
    test('Has Permission', async () => {
        //Arrange
        const permission = 'test/permission1';

        //Act
        const actualResult = await userHasAccess(permission)

        //Assert
        expect(actualResult).toBe(true);

    })

    test('Does not have permission', async () => {
        // Arrange
        const permission = 'test/permission2';
        
        // Act
        const actualResult = await userHasAccess(permission)

        // Assert
        expect(actualResult).toBe(false);

    })

    test('Invalid User', async () => {
        // Arrange
        const permission = 'test/permission1';
        // when we query for the user, it should return nothing from the
        // db
        mockFindUsers = (obj) => {
            return {
                toArray: () => {
                    return new Promise((resolve, reject) => {
                        resolve([ ]);    
                    })
                }
            }
        }
        userData = jest.fn().mockReturnValue({ email:'user@dontexist.com' })
        
        // Act
        const actualResult = await userHasAccess(permission)

        // Assert
        expect(actualResult).toBe(false);

    })
})
 