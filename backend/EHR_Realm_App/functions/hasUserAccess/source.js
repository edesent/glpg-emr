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
exports = async function(arg) {
    const permissionName = arg;
    const userEmail = context.user.data.email;
    let hasAccess = false;

    try {
        if(permissionName && userEmail) {
            const userCollection = context.services.get("mongodb-atlas").db("ehr").collection("authorization.users")
            const userQuery = await userCollection.find({ Email: userEmail  }).toArray()
            let currentUser = null

            if(userQuery && userQuery.length > 0) {
                currentUser = userQuery[0]
            }

            if(currentUser && currentUser.Authorization && currentUser.Authorization.Groups) {
                const groupCollection = context.services.get("mongodb-atlas").db("ehr").collection("authorization.groups")
                
                for(let group of currentUser.Authorization.Groups) {
                    const groupQuery = await groupCollection.find({ Name: group }).toArray()
                    let currentGroup = null
                    
                    if(groupQuery && groupQuery.length > 0) {
                        currentGroup = groupQuery[0]
                    }

                    if(currentGroup && currentGroup.Permissions && currentGroup.Permissions.length > 0 && isPermissionValid(currentGroup.Permissions, permissionName)) {
                        hasAccess = true // the user has the permission in a group, return true
                        break;
                    }
                }
            }
        }
    } catch(err) {
        // if there is any error, then the function should not allow the user to continue.
        // i.e. the user does not have access, then return false
        console.log(`Error! ${err.message}`)
        hasAccess = false;
    }
   
    return hasAccess
}

function isPermissionValid(groupPermissions, permissionName) {
  for(let i = 0; i < groupPermissions.length; i++) {
    if(groupPermissions[i] === permissionName) {
      return true
    }
  }
  
  return false
}

// ! Used for allowing the function above to be exported for Unit Tests
if (typeof module === 'object') {
    module.exports = exports;
}
