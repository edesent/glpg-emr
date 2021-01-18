// look up in database if use is valid
const isValidUser = async (username) => {
  const userCollection = context.services
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
const sendEmail = (user, token, tokenId) => {
  const domainName = context.values.get('DomainName')
  const linkForReset = `${domainName}/?setpassword=&token=${token}&tokenId=${tokenId}`

  const data = {
    firstName: user.FirstName,
    lastName: user.LastName,
    domainName,
    email: user.Email,
    resetLink: linkForReset,
  }

  const subject = templateEngine(data, context.values.get('ResetEmailSubject'))
  const body = templateEngine(data, context.values.get('ResetEmailBody'))
  console.log(subject)
  console.log(body)

  return true
}

exports = async ({ token, tokenId, username, password }) => {
  // Make sure user is valid in the database
  console.log(`isValidUser ${username}`)
  const user = await isValidUser(username)
  console.log(`isValidUser ${username} end`)

  // check if the user has requested a password reset too often recently
  console.log(`isEmailRequestCool ${username}`)
  const isRequestCool = await isEmailRequestCool(user)
  console.log(`isEmailRequestCool ${username} end`)

  if (user && isRequestCool) {
    // send a message to the user in some way so that the user can confirm themselves
    console.log(`sendEmail ${username}`)
    const msgSendSuccessful = sendEmail(user, token, tokenId)
    console.log(`sendEmail ${username} end`)

    if (msgSendSuccessful) {
      return { status: 'pending' }
    }
  }

  return { status: 'fail' }
}
