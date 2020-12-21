# Configuration files for Backend functions in Mongo

## auth_providers

This is configuration for authorization providers.

## functions

This is where the code for functions goes.

## graphql

This is configuration for GraphQL.

## Services

### mongodb-atlas rules

#### rules

This is where configuration for collection schemas are defined for test.groups, test.users.  

## Main config file

Under security, you can configure allow cors origin with: ``` "allowed_request_origins": [ "http://localhost:3000" ] ```

## values

These values can be deployed, but we dont want to do that.  These values are unique for each environment, so please do not include them.  Here are the keys:

1. app_id - i.e. "ehr_realm_app-lfyfr"
2. app_name - i.e. "EHR_Realm_App"
3. app_location - i.e. "US-VA"

These changes are app specific but I couldnt override them.

4. default_app_domain - i.e. "ehr-realm-app-lfyfr-zznrr.mongodbstitch.com"
5. custom_domain - i.e. "listen.glpg.online"
6. development_mode_enabled - i.e. false
7. resetPasswordUrl - i.e. "https://dev.glpg.cloud/ResetPassword"
8. clusterName - i.e. "EHR-BASE"
9. mongodb-atlas-name - i.e. "mongodb-atlas-test"
10. local-userpass - i.e. "local-userpass"
