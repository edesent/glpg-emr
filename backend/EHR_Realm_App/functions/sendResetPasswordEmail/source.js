// look up in database if use is valid
const isValidUser = async (username) => {
  const userCollection = await context.services
    .get('mongodb-atlas')
    .db('ehr')
    .collection('authorization.users')
  const userQuery = await userCollection.find({ Email: username }).toArray()
  return userQuery && userQuery.length === 1 ? userQuery[0] : null
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000)
}

// look at profile and see the last time someone requested a reset
const isEmailRequestCool = async (user) => {
  if (!user) return false // user doesnt exist

  const lastResetDate = user.LastResetDate
  const dateThreshold = addMinutes(new Date(), -30)

  if (!lastResetDate || dateThreshold > lastResetDate) {
    const userCollection = context.services
      .get('mongodb-atlas')
      .db('ehr')
      .collection('authorization.users')
    await userCollection.updateOne(
      { Email: user.Email },
      { $set: { LastResetDate: new Date() } }
    )

    return true
  }

  return false
}

const templateEngine = (data, template) => {
  let result = template
  const keys = Object.keys(data)

  keys.forEach((key) => {
    result = result.replace(`<% ${key} %>`, data[key])
  })

  return result
}

// send email to user with link of token and tokenId
const sendEmail = async (user, token, tokenId) => {
  const domainName = context.values.get('DomainName')
  const linkForReset = `${domainName}/?setpassword=&token=${token}&tokenId=${tokenId}`

  const data = {
    firstName: user.FirstName,
    lastName: user.LastName,
    domainName,
    email: user.Email,
    resetLink: linkForReset,
  }

  const emailSubjectKey = user.LastResetDate
    ? 'ResetEmailSubject'
    : 'NewUserEmailSubject'
  const emailBodyKey = user.LastResetDate
    ? 'ResetEmailBody'
    : 'NewUserEmailBody'
  const subject = templateEngine(data, context.values.get(emailSubjectKey))
  const body = templateEngine(data, context.values.get(emailBodyKey))

  const ses = context.services.get('aws-ses').ses('us-east-1')
  const result = await ses.SendEmail({
    Source: 'no-reply@test.glpg.cloud',
    Destination: { ToAddresses: [data.email] },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: body,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
  })

  if (!result?.MessageId) {
    throw new Error('The email was not sent')
  }

  return true
}

exports = async ({ token, tokenId, username, password }) => {
  let description = ''

  try {
    // Make sure user is valid in the database
    const user = await isValidUser(username)

    // check if the user has requested a password reset too often recently
    const isRequestCool = await isEmailRequestCool(user)

    if (user && isRequestCool) {
      // send a message to the user in some way so that the user can confirm themselves
      const msgSendSuccessful = await sendEmail(user, token, tokenId)

      if (msgSendSuccessful) {
        return { status: 'pending' }
      }
    } else {
      description = !isRequestCool
        ? 'You have requested a reset already.  Check your email.'
        : 'Invalid request.'
    }
  } catch (error) {
    description = `There was an error: ${error}`
    console.error(error)
  }

  return {
    status: 'fail',
    description,
  }
}

// ! Used for allowing the function above to be exported for Unit Tests
if (typeof module === 'object') {
  module.exports = exports
}
