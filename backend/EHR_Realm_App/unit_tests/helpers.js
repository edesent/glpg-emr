const makeRandomString = (length) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const makeRandomInt = (length) => {
  let result = ''
  const characters = '0123456789'
  const charactersLength = characters.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return parseInt(result, 10)
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000)
}

module.exports = {
  makeRandomString,
  makeRandomInt,
  addMinutes,
}
