/*
! Accessing application's values:
var x = context.values.get("value_name");

! Accessing a mongodb service:
var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
var doc = collection.findOne({owner_id: context.user.id});

! To call other named functions:
var result = context.functions.execute("function_name", arg1, arg2);

! Try running in the console below.
*/
exports = function (arg) {
  const groupName = arg[0]

  try {
    if (userObject && groupName) {
      const userCollection = context.services
        .get('mongodb-atlas')
        .db('EHR-BASE')
        .collection('test.users')
      const currentUser = userCollection.findOne({ Email: context.user.Email })

      if (currentUser) {
        const groupCollection = context.services
          .get('mongodb-atlas')
          .db('EHR-BASE')
          .collection('test.groups')

        for (const group of currentUser.Authorization.Groups) {
          const tempGroup = groupCollection.findOne({ Name: group.Name })
          if (tempGroup.Permissions.indexOf(groupName) >= 0) {
            return true // the user has the permission in a group, return true
          }
        }
      }
    }
  } catch (err) {
    // if there is any error, then the function should not allow the user to continue.
    // i.e. the user does not have access, then return false
    output.error(err.message)
  }

  return false
}
